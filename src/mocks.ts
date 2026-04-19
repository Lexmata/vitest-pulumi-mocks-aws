import * as pulumi from "@pulumi/pulumi";
import type { MockCtx } from "./helpers.js";
import { resourceRegistry, functionRegistry, type Factory } from "./generated/registry.js";

export interface SetupOptions {
  region?: string;
  accountId?: string;
  // ARN partition. Use "aws-cn" or "aws-us-gov" for alt-partition tests.
  partition?: string;
  // Per-token overrides.  The callback sees the same MockCtx the generator
  // would and returns a partial object, shallow-merged on top of the factory
  // output.  Use this to pin a single field without writing a whole mock.
  overrides?: Record<string, (ctx: MockCtx) => Record<string, unknown> | undefined>;
  onMissing?: (args: { token: string; kind: "resource" | "call"; ctx: MockCtx }) => Record<string, unknown>;
  project?: string;
  stack?: string;
}

export interface MockHandlers {
  newResource(args: pulumi.runtime.MockResourceArgs): { id: string; state: Record<string, unknown> };
  call(args: pulumi.runtime.MockCallArgs): Record<string, unknown>;
}

// Stable per (type, name) pair so factories that embed idSeed into ARNs get
// deterministic output across re-reads.
export function makeIdSeed(type: string, name: string): string {
  let h = 2166136261;
  const s = `${type}::${name}`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

export function createMockHandlers(options: SetupOptions = {}): MockHandlers {
  const region = options.region ?? "us-east-1";
  const accountId = options.accountId ?? "123456789012";
  const partition = options.partition ?? "aws";
  const overrides = options.overrides ?? {};
  const { onMissing } = options;

  function dispatch(
    token: string,
    kind: "resource" | "call",
    name: string,
    inputs: Record<string, unknown>,
    registry: Record<string, Factory>,
  ): { ctx: MockCtx; state: Record<string, unknown> } {
    const ctx: MockCtx = {
      type: token,
      name,
      inputs,
      idSeed: makeIdSeed(token, name),
      region,
      accountId,
      partition,
    };
    const factory = registry[token];
    let state = factory
      ? factory(ctx)
      : onMissing
        ? onMissing({ token, kind, ctx })
        : { ...inputs };
    const override = overrides[token];
    if (override) {
      const extra = override(ctx);
      if (extra) state = { ...state, ...extra };
    }
    return { ctx, state };
  }

  return {
    newResource(args) {
      const { ctx, state } = dispatch(
        args.type, "resource", args.name, args.inputs ?? {}, resourceRegistry,
      );
      return { id: args.id || `${args.name}-${ctx.idSeed}`, state };
    },
    call(args) {
      const { state } = dispatch(
        args.token, "call", "invoke", args.inputs ?? {}, functionRegistry,
      );
      return state;
    },
  };
}

export function setupPulumiAwsMocks(options: SetupOptions = {}): void {
  pulumi.runtime.setMocks(
    createMockHandlers(options),
    options.project ?? "test-project",
    options.stack ?? "test-stack",
    false,
  );
}

// Swap in a minimal echo mock.  Use between tests to isolate overrides a
// previous test installed via setupPulumiAwsMocks.
export function resetPulumiAwsMocks(): void {
  pulumi.runtime.setMocks(
    {
      newResource(args) {
        return { id: `${args.name}-id`, state: args.inputs };
      },
      call(args) {
        return args.inputs;
      },
    },
    "test-project",
    "test-stack",
    false,
  );
}

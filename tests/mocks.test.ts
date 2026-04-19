import { describe, it, expect } from "vitest";
import * as pulumi from "@pulumi/pulumi";
import {
  createMockHandlers,
  makeIdSeed,
  resetPulumiAwsMocks,
  setupPulumiAwsMocks,
} from "../src/index.js";

describe("makeIdSeed", () => {
  it("is deterministic for the same (type, name) pair", () => {
    const a = makeIdSeed("aws:s3/bucketV2:BucketV2", "my");
    const b = makeIdSeed("aws:s3/bucketV2:BucketV2", "my");
    expect(a).toBe(b);
  });

  it("varies with token and with name", () => {
    const a = makeIdSeed("aws:s3/bucketV2:BucketV2", "x");
    const b = makeIdSeed("aws:s3/bucketV2:BucketV2", "y");
    const c = makeIdSeed("aws:s3/bucket:Bucket", "x");
    expect(a).not.toBe(b);
    expect(a).not.toBe(c);
  });

  it("is always an 8-char hex string", () => {
    for (const name of ["", "a", "longer-name", "🦎"]) {
      expect(makeIdSeed("aws:s3/bucketV2:BucketV2", name)).toMatch(/^[0-9a-f]{8}$/);
    }
  });
});

describe("createMockHandlers — newResource", () => {
  it("applies defaults (region, accountId, partition) when none supplied", () => {
    const h = createMockHandlers();
    const { id, state } = h.newResource({
      type: "aws:s3/bucketV2:BucketV2",
      name: "probe",
      inputs: { bucket: "probe", tags: { Env: "test" } },
    } as pulumi.runtime.MockResourceArgs);
    expect(id).toMatch(/^probe-[0-9a-f]{8}$/);
    expect(state.arn).toMatch(/^arn:aws:s3:us-east-1:123456789012:/);
    expect(state.tagsAll).toEqual({ Env: "test" });
  });

  it("honors custom region / accountId / partition", () => {
    const h = createMockHandlers({ region: "eu-west-1", accountId: "999999999999", partition: "aws-cn" });
    const { state } = h.newResource({
      type: "aws:s3/bucketV2:BucketV2",
      name: "probe",
      inputs: {},
    } as pulumi.runtime.MockResourceArgs);
    expect(state.arn).toMatch(/^arn:aws-cn:s3:eu-west-1:999999999999:/);
  });

  it("invokes the registered factory when one matches the token", () => {
    const h = createMockHandlers();
    const { state } = h.newResource({
      type: "aws:iam/role:Role",
      name: "r",
      inputs: { path: "/svc/" },
    } as pulumi.runtime.MockResourceArgs);
    expect(state.path).toBe("/svc/");
  });

  it("calls onMissing when no factory exists for the token", () => {
    const seen: string[] = [];
    const h = createMockHandlers({
      onMissing: ({ token, kind, ctx }) => {
        seen.push(`${kind}:${token}:${ctx.name}`);
        return { customMocked: true };
      },
    });
    const { state } = h.newResource({
      type: "fake:module:Unknown",
      name: "ghost",
      inputs: {},
    } as pulumi.runtime.MockResourceArgs);
    expect(seen).toEqual(["resource:fake:module:Unknown:ghost"]);
    expect(state.customMocked).toBe(true);
  });

  it("falls back to echoing inputs when neither factory nor onMissing is defined", () => {
    const h = createMockHandlers();
    const { state } = h.newResource({
      type: "fake:module:Unknown",
      name: "echo",
      inputs: { hello: "world" },
    } as pulumi.runtime.MockResourceArgs);
    expect(state).toEqual({ hello: "world" });
  });

  it("shallow-merges override output over the factory state", () => {
    const h = createMockHandlers({
      overrides: {
        "aws:s3/bucketV2:BucketV2": () => ({ arn: "arn:custom", bucket: "pinned" }),
      },
    });
    const { state } = h.newResource({
      type: "aws:s3/bucketV2:BucketV2",
      name: "x",
      inputs: {},
    } as pulumi.runtime.MockResourceArgs);
    expect(state.arn).toBe("arn:custom");
    expect(state.bucket).toBe("pinned");
  });

  it("skips an override that returns undefined", () => {
    const h = createMockHandlers({
      overrides: {
        "aws:s3/bucketV2:BucketV2": () => undefined,
      },
    });
    const { state } = h.newResource({
      type: "aws:s3/bucketV2:BucketV2",
      name: "x",
      inputs: {},
    } as pulumi.runtime.MockResourceArgs);
    expect(state.arn).toMatch(/^arn:aws:s3:/);
  });

  it("passes through an explicit args.id from a .get() lookup", () => {
    const h = createMockHandlers();
    const { id } = h.newResource({
      type: "aws:s3/bucketV2:BucketV2",
      name: "pre-existing",
      id: "imported-id",
      inputs: {},
    } as pulumi.runtime.MockResourceArgs);
    expect(id).toBe("imported-id");
  });
});

describe("createMockHandlers — call", () => {
  it("dispatches known function tokens to the generated registry", () => {
    const h = createMockHandlers();
    const res = h.call({
      token: "aws:s3/getBucket:getBucket",
      inputs: { bucket: "my" },
    } as pulumi.runtime.MockCallArgs);
    expect(res.bucket).toBe("my");
    expect(res.arn).toMatch(/^arn:aws:s3:/);
  });

  it("invokes onMissing when the function token is unknown", () => {
    const hit: string[] = [];
    const h = createMockHandlers({
      onMissing: ({ token, kind }) => {
        hit.push(`${kind}:${token}`);
        return { ok: true };
      },
    });
    const res = h.call({
      token: "aws:imaginary/getNothing:getNothing",
      inputs: {},
    } as pulumi.runtime.MockCallArgs);
    expect(hit).toEqual(["call:aws:imaginary/getNothing:getNothing"]);
    expect(res.ok).toBe(true);
  });

  it("falls back to echoing function inputs with no factory and no onMissing", () => {
    const h = createMockHandlers();
    const res = h.call({
      token: "fake:imaginary/noop:noop",
      inputs: { q: 1 },
    } as pulumi.runtime.MockCallArgs);
    expect(res).toEqual({ q: 1 });
  });

  it("applies overrides to call results too", () => {
    const h = createMockHandlers({
      overrides: {
        "aws:s3/getBucket:getBucket": () => ({ arn: "arn:pinned" }),
      },
    });
    const res = h.call({
      token: "aws:s3/getBucket:getBucket",
      inputs: { bucket: "b" },
    } as pulumi.runtime.MockCallArgs);
    expect(res.arn).toBe("arn:pinned");
  });

  it("ignores a call override that returns undefined", () => {
    const h = createMockHandlers({
      overrides: { "aws:s3/getBucket:getBucket": () => undefined },
    });
    const res = h.call({
      token: "aws:s3/getBucket:getBucket",
      inputs: { bucket: "b" },
    } as pulumi.runtime.MockCallArgs);
    expect(res.arn).toMatch(/^arn:aws:s3:/);
  });

  it("handles missing inputs map on the args", () => {
    const h = createMockHandlers();
    const res = h.call({
      token: "nope:missing:missing",
      // deliberately omit `inputs` to hit the `?? {}` branch
    } as unknown as pulumi.runtime.MockCallArgs);
    expect(res).toEqual({});
  });

  it("handles missing inputs map on newResource args", () => {
    const h = createMockHandlers();
    const { state } = h.newResource({
      type: "fake:mod:F",
      name: "x",
    } as unknown as pulumi.runtime.MockResourceArgs);
    expect(state).toEqual({});
  });
});

describe("runtime wiring", () => {
  it("setupPulumiAwsMocks installs handlers that drive pulumi.runtime.invoke", async () => {
    setupPulumiAwsMocks({ region: "ap-southeast-2" });
    const res = await pulumi.runtime.invoke("aws:s3/getBucket:getBucket", { bucket: "rw" });
    expect(res.arn).toMatch(/^arn:aws:s3:ap-southeast-2:/);
  });

  it("forwards project/stack names when provided", async () => {
    setupPulumiAwsMocks({ project: "p", stack: "s" });
    // No throw = handler accepted; indirect coverage of the optional fields.
    expect(await pulumi.runtime.invoke("aws:s3/getBucket:getBucket", { bucket: "rw" }))
      .toBeTruthy();
  });

  it("resetPulumiAwsMocks swaps in a minimal echo implementation", async () => {
    setupPulumiAwsMocks();
    resetPulumiAwsMocks();
    const res = await pulumi.runtime.invoke("anything:at:all", { x: 1, y: 2 });
    expect(res).toEqual({ x: 1, y: 2 });
  });

  it("resetPulumiAwsMocks echoes newResource state as well", async () => {
    setupPulumiAwsMocks();
    resetPulumiAwsMocks();
    // Use a pulumi.CustomResource with a declared output so we can read the
    // echoed state back out.
    class Echo extends pulumi.CustomResource {
      declare public readonly marker: pulumi.Output<string>;
      constructor(name: string) {
        super("fake:echo:Echo", name, { marker: undefined, value: "hello" });
      }
    }
    const r = new Echo("after-reset");
    const value = await new Promise<unknown>((resolve) =>
      pulumi.all([(r as unknown as { value: pulumi.Output<unknown> }).value]).apply(
        ([v]) => resolve(v),
      ),
    );
    expect(value).toBe("hello");
    // Restore the real mocks for any subsequent tests.
    setupPulumiAwsMocks();
  });
});

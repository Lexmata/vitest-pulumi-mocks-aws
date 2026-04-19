import { describe, it, expect } from "vitest";
import { codegen } from "../scripts/codegen/emit.js";
import type { PulumiSchema } from "../scripts/codegen/schema.js";

// Construct a compact synthetic schema that hits every branch of the
// emitter.  The individual tests reach into the emitted file map and assert
// on the generated code strings.
function makeSchema(): PulumiSchema {
  return {
    name: "aws",
    version: "0.0.0",
    types: {
      // Enum type: no builder emitted, inlined as first value at refs.
      "aws:test/EnumKind:EnumKind": {
        type: "string",
        enum: [{ value: "first" }, { value: "second" }],
      },
      // Object type referenced same-service — exercises the self-service
      // import alias path.
      "aws:test/Nested:Nested": {
        type: "object",
        required: ["alpha"],
        properties: {
          alpha: { type: "string" },
          beta: { $ref: "#/types/aws:test/Deep:Deep" },
          // Cross-service type reference so types/test.ts imports from
          // another service's type file.
          gamma: { $ref: "#/types/aws:other/Cross:Cross" },
        },
      },
      "aws:test/Deep:Deep": {
        type: "object",
        properties: {
          v: { type: "string" },
        },
      },
      // Cross-service object type — exercises the cross-service import path.
      "aws:other/Cross:Cross": {
        type: "object",
        properties: {
          k: { type: "string" },
        },
      },
      // Type with no `properties` and no `required` so the generator hits
      // the `?? {}` / `?? []` fallbacks in the type emit loop.
      "aws:minimal/Blank:Blank": {
        type: "object",
      },
    },
    resources: {
      // Edge case: a resource with no property bag at all.
      "aws:empty/bar:Bar": {},
      // Resource with properties + required but no inputProperties, so the
      // generator must tolerate a missing inputProperties field.
      "aws:minimal/thing:Thing": {
        required: ["only"],
        properties: {
          only: { type: "string" },
        },
      },
      // Exhaustive coverage of the property-type / heuristic branches.
      "aws:test/foo:Foo": {
        inputProperties: {
          name: { type: "string" },
          tags: { type: "object", additionalProperties: { type: "string" } },
        },
        properties: {
          // -- name-based string heuristics --
          arn: { type: "string" },
          trailingArn: { type: "string" },
          under_arn: { type: "string" },
          someId: { type: "string" },
          name: { type: "string" },
          region: { type: "string" },
          accountId: { type: "string" },
          ownerId: { type: "string" },
          owner: { type: "string" },
          partition: { type: "string" },
          availabilityZone: { type: "string" },
          bucket: { type: "string" },
          bucketName: { type: "string" },
          apiUrl: { type: "string" },
          cacheUri: { type: "string" },
          configurationEndpoint: { type: "string" },
          someDomain: { type: "string" },
          domainName: { type: "string" },
          status: { type: "string" },
          state: { type: "string" },
          createdAt: { type: "string" },
          createTime: { type: "string" },
          creationDate: { type: "string" },
          modifiedAt: { type: "string" },
          lastModified: { type: "string" },
          createdTime: { type: "string" },
          runsEvery_time: { type: "string" },
          version: { type: "string" },
          hostedZoneId: { type: "string" },
          dnsName: { type: "string" },
          ipAddress: { type: "string" },
          privateIp: { type: "string" },
          privateIpAddress: { type: "string" },
          publicIp: { type: "string" },
          publicIpAddress: { type: "string" },
          cidr: { type: "string" },
          cidrBlock: { type: "string" },
          cidrBlocks: { type: "string" },
          vpcId: { type: "string" },
          subnetId: { type: "string" },
          securityGroupId: { type: "string" },
          genericString: { type: "string" },

          // -- numeric heuristics --
          port: { type: "integer" },
          connectTimeout: { type: "integer" },
          diskSize: { type: "integer" },
          pageCount: { type: "integer" },
          genericNumber: { type: "number" },

          // -- boolean heuristics --
          isEnabled: { type: "boolean" },
          enableDebug: { type: "boolean" },
          allowWrites: { type: "boolean" },
          genericBool: { type: "boolean" },

          // -- containers --
          tags: { type: "object", additionalProperties: { type: "string" } },
          tagsAll: { type: "object", additionalProperties: { type: "string" } },
          plainObject: { type: "object" },
          listOfStrings: { type: "array", items: { type: "string" } },
          listWithoutItems: { type: "array" },

          // -- enum inlined directly on the property --
          inlineEnum: {
            type: "string",
            enum: [{ value: "alpha" }, { value: "beta" }],
          },

          // -- $ref branches --
          refEnum: { $ref: "#/types/aws:test/EnumKind:EnumKind" },
          refObject: { $ref: "#/types/aws:test/Nested:Nested" },
          refCross: { $ref: "#/types/aws:other/Cross:Cross" },
          refAny: { $ref: "pulumi.json#/Any" },
          refArchive: { $ref: "pulumi.json#/Archive" },
          refAsset: { $ref: "pulumi.json#/Asset" },
          refMissing: { $ref: "#/types/aws:test/NotThere:NotThere" },
          refOther: { $ref: "#/definitions/something" },

          // -- oneOf falls back to the first option --
          oneOfish: {
            oneOf: [{ type: "string" }, { type: "integer" }],
          },

          // -- untyped property hits the undefined fallthrough --
          untyped: {},

          // -- non-identifier property name requires a quoted key --
          "weird-name": { type: "string" },
        },
      },
    },
    functions: {
      // aws-prefixed function is emitted; inputs echoed into matching outputs.
      // Cross-service ref on the output ensures functions/test.ts imports the
      // type file of another service.
      "aws:test/getFoo:getFoo": {
        inputs: { properties: { bucket: { type: "string" } } },
        outputs: {
          properties: {
            bucket: { type: "string" },
            arn: { type: "string" },
            cross: { $ref: "#/types/aws:other/Cross:Cross" },
          },
          required: ["bucket", "arn"],
        },
      },
      // Non-aws function is skipped so the downstream registry stays clean.
      "pulumi:providers:aws/terraformConfig": {
        inputs: {},
        outputs: {},
      },
      // Function with empty input/output bags forces the generator's
      // `?.properties ?? {}` fallbacks to fire.
      "aws:test/getEmpty:getEmpty": {
        inputs: {},
        outputs: {},
      },
    },
  };
}

function filesMap(res: ReturnType<typeof codegen>): Map<string, string> {
  return new Map(res.files.map((f) => [f.path, f.content]));
}

describe("codegen — file layout", () => {
  const result = codegen(makeSchema());
  const files = filesMap(result);

  it("emits per-service files for resources, functions, and types", () => {
    expect(files.has("src/generated/resources/test.ts")).toBe(true);
    expect(files.has("src/generated/resources/empty.ts")).toBe(true);
    expect(files.has("src/generated/functions/test.ts")).toBe(true);
    expect(files.has("src/generated/types/test.ts")).toBe(true);
    expect(files.has("src/generated/types/other.ts")).toBe(true);
  });

  it("emits a registry and index at the generated root", () => {
    expect(files.has("src/generated/registry.ts")).toBe(true);
    expect(files.has("src/generated/index.ts")).toBe(true);
  });

  it("reports schema totals in stats (including skipped non-aws functions)", () => {
    expect(result.stats).toEqual({
      resources: 3,
      functions: 3,
      types: 5,
      services: 4, // test, empty, other, minimal
    });
  });
});

describe("codegen — resources/test.ts", () => {
  const files = filesMap(codegen(makeSchema()));
  const src = files.get("src/generated/resources/test.ts")!;

  it("imports helpers and the types module for any referenced service", () => {
    expect(src).toContain(`import * as h from "../helpers.js";`);
    expect(src).toContain(`import * as T_test from "../types/test.js";`);
    expect(src).toContain(`import * as T_other from "../types/other.js";`);
  });

  it("echoes declared input properties through the output", () => {
    expect(src).toContain(
      `out.name = (i.name !== undefined ? i.name : ctx.name);`,
    );
    expect(src).toContain(
      `out.tags = (i.tags !== undefined ? i.tags : {});`,
    );
  });

  it("special-cases tagsAll so it mirrors the input tags map", () => {
    expect(src).toContain(`out.tagsAll = { ...(i.tags ?? {}) };`);
  });

  it("maps arn-style property names to the arn helper", () => {
    expect(src).toContain(`out.arn = h.arn(ctx);`);
    expect(src).toContain(`out.trailingArn = h.arn(ctx);`);
    expect(src).toContain(`out.under_arn = h.arn(ctx);`);
  });

  it("maps id-style property names to the id helper", () => {
    expect(src).toContain(`out.someId = h.id(ctx, "someId");`);
    expect(src).toContain(`out.vpcId = h.id(ctx, "vpcId", "vpc");`);
    expect(src).toContain(`out.subnetId = h.id(ctx, "subnetId", "subnet");`);
    expect(src).toContain(`out.securityGroupId = h.id(ctx, "securityGroupId", "sg");`);
  });

  it("uses context-derived defaults for well-known AWS field names", () => {
    expect(src).toContain(`out.region = ctx.region;`);
    expect(src).toContain(`out.accountId = ctx.accountId;`);
    expect(src).toContain(`out.ownerId = ctx.accountId;`);
    expect(src).toContain(`out.owner = ctx.accountId;`);
    expect(src).toContain(`out.partition = ctx.partition;`);
    expect(src).toContain(`out.availabilityZone = ctx.region + "a";`);
    expect(src).toContain(`out.bucket = ctx.name;`);
    expect(src).toContain(`out.bucketName = ctx.name;`);
  });

  it("uses endpoint helper for url/uri/endpoint/domain-ish names", () => {
    expect(src).toMatch(/out\.apiUrl = h\.endpoint\(ctx, "apiUrl"\);/);
    expect(src).toMatch(/out\.cacheUri = h\.endpoint\(ctx, "cacheUri"\);/);
    expect(src).toMatch(/out\.configurationEndpoint = h\.endpoint\(ctx, "configurationEndpoint"\);/);
    expect(src).toMatch(/out\.someDomain = h\.endpoint\(ctx, "someDomain"\);/);
    expect(src).toMatch(/out\.domainName = h\.endpoint\(ctx, "domainName"\);/);
    expect(src).toMatch(/out\.dnsName = h\.endpoint\(ctx, "dnsName"\);/);
  });

  it("renders stable placeholders for status/time/version/etc.", () => {
    expect(src).toContain(`out.status = "active";`);
    expect(src).toContain(`out.state = "active";`);
    expect(src).toContain(`out.createdAt = h.timestamp();`);
    expect(src).toContain(`out.createTime = h.timestamp();`);
    expect(src).toContain(`out.creationDate = h.timestamp();`);
    expect(src).toContain(`out.modifiedAt = h.timestamp();`);
    expect(src).toContain(`out.lastModified = h.timestamp();`);
    expect(src).toContain(`out.createdTime = h.timestamp();`);
    expect(src).toContain(`out.runsEvery_time = h.timestamp();`);
    expect(src).toContain(`out.version = "1";`);
    expect(src).toContain(`out.hostedZoneId = "Z0000000000000000000";`);
  });

  it("renders realistic network defaults for IP / CIDR fields", () => {
    expect(src).toContain(`out.ipAddress = "10.0.0.10";`);
    expect(src).toContain(`out.privateIp = "10.0.0.10";`);
    expect(src).toContain(`out.privateIpAddress = "10.0.0.10";`);
    expect(src).toContain(`out.publicIp = "54.0.0.10";`);
    expect(src).toContain(`out.publicIpAddress = "54.0.0.10";`);
    expect(src).toContain(`out.cidr = "10.0.0.0/16";`);
    expect(src).toContain(`out.cidrBlock = "10.0.0.0/16";`);
    expect(src).toContain(`out.cidrBlocks = "10.0.0.0/16";`);
  });

  it("falls through to an empty string for unrecognized string props", () => {
    expect(src).toContain(`out.genericString = "";`);
  });

  it("applies numeric heuristics", () => {
    expect(src).toContain(`out.port = 443;`);
    expect(src).toContain(`out.connectTimeout = 30;`);
    expect(src).toContain(`out.diskSize = 8;`);
    expect(src).toContain(`out.pageCount = 1;`);
    expect(src).toContain(`out.genericNumber = 0;`);
  });

  it("applies boolean heuristics", () => {
    expect(src).toContain(`out.isEnabled = true;`);
    expect(src).toContain(`out.enableDebug = true;`);
    expect(src).toContain(`out.allowWrites = true;`);
    expect(src).toContain(`out.genericBool = false;`);
  });

  it("handles containers and maps", () => {
    expect(src).toContain(`out.plainObject = {};`);
    expect(src).toContain(`out.listOfStrings = (depth > 4 ? [] : [""]);`);
    expect(src).toContain(`out.listWithoutItems = [];`);
  });

  it("inlines the first enum value for both inline enums and enum $refs", () => {
    expect(src).toContain(`out.inlineEnum = "alpha";`);
    expect(src).toContain(`out.refEnum = "first";`);
  });

  it("calls type builders for object $refs with depth guard", () => {
    expect(src).toContain(
      `out.refObject = (depth > 4 ? {} : T_test.test_Nested(ctx, depth + 1));`,
    );
    expect(src).toContain(
      `out.refCross = (depth > 4 ? {} : T_other.other_Cross(ctx, depth + 1));`,
    );
  });

  it("handles pulumi.json#/Any, #/Archive, and #/Asset refs", () => {
    expect(src).toContain(`out.refAny = undefined;`);
    expect(src).toContain(`out.refArchive = h.archive();`);
    expect(src).toContain(`out.refAsset = h.asset();`);
  });

  it("renders undefined for missing / unrecognized refs and untyped props", () => {
    expect(src).toContain(`out.refMissing = undefined;`);
    expect(src).toContain(`out.refOther = undefined;`);
    expect(src).toContain(`out.untyped = undefined;`);
  });

  it("picks the first alternative for oneOf properties", () => {
    expect(src).toContain(`out.oneOfish = "";`);
  });

  it("quotes property names that aren't valid TS identifiers", () => {
    expect(src).toContain(`out["weird-name"] = "";`);
  });
});

describe("codegen — resources/empty.ts", () => {
  it("emits a stub for the property-less resource", () => {
    const files = filesMap(codegen(makeSchema()));
    const src = files.get("src/generated/resources/empty.ts")!;
    expect(src).toContain(`export function Bar(ctx: MockCtx)`);
    expect(src).toContain(`return {};`);
  });
});

describe("codegen — functions/test.ts", () => {
  const files = filesMap(codegen(makeSchema()));
  const src = files.get("src/generated/functions/test.ts")!;

  it("emits a function factory with an aws-prefixed token", () => {
    expect(src).toContain(`export function getFoo(ctx: MockCtx)`);
    expect(src).toContain(
      `out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);`,
    );
    expect(src).toContain(`out.arn = h.arn(ctx);`);
  });

  it("imports cross-service type files when function outputs reference them", () => {
    expect(src).toContain(`import * as T_other from "../types/other.js";`);
    expect(src).toContain(
      `out.cross = (depth > 4 ? {} : T_other.other_Cross(ctx, depth + 1));`,
    );
  });
});

describe("codegen — types/test.ts", () => {
  const files = filesMap(codegen(makeSchema()));
  const src = files.get("src/generated/types/test.ts")!;

  it("emits a self-import so intra-service type refs resolve through the alias", () => {
    expect(src).toContain(`import * as T_test from "./test.js";`);
  });

  it("imports sibling service type files when a type references a foreign service", () => {
    expect(src).toContain(`import * as T_other from "./other.js";`);
    expect(src).toContain(
      `out.gamma = (depth > 4 ? {} : T_other.other_Cross(ctx, depth + 1));`,
    );
  });

  it("emits builder functions that recurse via the aliased reference", () => {
    expect(src).toContain(`export function test_Nested(ctx: MockCtx, depth = 0)`);
    expect(src).toContain(
      `out.beta = (depth > 4 ? {} : T_test.test_Deep(ctx, depth + 1));`,
    );
    expect(src).toContain(`export function test_Deep(ctx: MockCtx, depth = 0)`);
  });

  it("does not emit a builder for enum types", () => {
    expect(src).not.toContain(`test_EnumKind`);
  });
});

describe("codegen — registry.ts", () => {
  const files = filesMap(codegen(makeSchema()));
  const src = files.get("src/generated/registry.ts")!;

  it("imports per-service modules with aliased namespaces", () => {
    expect(src).toContain(`import * as R_test from "./resources/test.js";`);
    expect(src).toContain(`import * as R_empty from "./resources/empty.js";`);
    expect(src).toContain(`import * as F_test from "./functions/test.js";`);
  });

  it("maps aws tokens to their factories in the two registries", () => {
    expect(src).toContain(
      `resourceRegistry["aws:test/foo:Foo"] = R_test.Foo;`,
    );
    expect(src).toContain(
      `resourceRegistry["aws:empty/bar:Bar"] = R_empty.Bar;`,
    );
    expect(src).toContain(
      `functionRegistry["aws:test/getFoo:getFoo"] = F_test.getFoo;`,
    );
  });

  it("skips non-aws function tokens", () => {
    expect(src).not.toContain(`pulumi:providers:aws/terraformConfig`);
  });
});

describe("codegen — index.ts", () => {
  it("re-exports the registry and helpers for downstream consumers", () => {
    const files = filesMap(codegen(makeSchema()));
    const src = files.get("src/generated/index.ts")!;
    expect(src).toContain(`export * from "./registry.js";`);
    expect(src).toContain(`export * from "./helpers.js";`);
  });
});

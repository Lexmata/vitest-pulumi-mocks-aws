import { describe, it, expect } from "vitest";
import {
  parseToken,
  safeIdent,
  serviceSlug,
  resourceFactoryIdent,
  typeBuilderIdent,
  functionFactoryIdent,
} from "../scripts/codegen/naming.js";

describe("parseToken", () => {
  it("splits a resource token into service, submodule, and symbol", () => {
    expect(parseToken("aws:s3/bucketV2:BucketV2")).toEqual({
      raw: "aws:s3/bucketV2:BucketV2",
      service: "s3",
      submodule: "bucketV2",
      symbol: "BucketV2",
    });
  });

  it("handles a type token", () => {
    expect(parseToken("aws:ec2/InstanceEbsBlockDevice:InstanceEbsBlockDevice")).toMatchObject({
      service: "ec2",
      submodule: "InstanceEbsBlockDevice",
      symbol: "InstanceEbsBlockDevice",
    });
  });

  it("handles a module-only token with no submodule slash", () => {
    expect(parseToken("aws:iam:Role")).toEqual({
      raw: "aws:iam:Role",
      service: "iam",
      submodule: "",
      symbol: "Role",
    });
  });

  it("rejects non-aws tokens so callers can skip them explicitly", () => {
    expect(() => parseToken("pulumi:providers:aws")).toThrow(/unexpected provider/);
  });
});

describe("safeIdent", () => {
  it("returns normal identifiers unchanged", () => {
    expect(safeIdent("Bucket")).toBe("Bucket");
    expect(safeIdent("_foo")).toBe("_foo");
    expect(safeIdent("$dollar")).toBe("$dollar");
  });

  it("escapes TypeScript reserved words", () => {
    expect(safeIdent("class")).toBe("_class");
    expect(safeIdent("interface")).toBe("_interface");
    expect(safeIdent("enum")).toBe("_enum");
  });

  it("prefixes identifiers that start with digits or punctuation and sanitizes inner chars", () => {
    expect(safeIdent("1Thing")).toBe("_1Thing");
    expect(safeIdent("-dashy")).toBe("__dashy");
  });

  it("sanitizes characters that would be illegal in an identifier", () => {
    expect(safeIdent("weird.name-here")).toBe("weird_name_here");
  });
});

describe("serviceSlug", () => {
  it("lowercases the module and strips non-alphanumerics", () => {
    expect(serviceSlug("S3")).toBe("s3");
    expect(serviceSlug("elasticloadbalancingv2")).toBe("elasticloadbalancingv2");
    expect(serviceSlug("weird_mod-1")).toBe("weirdmod1");
  });
});

describe("factory identifier helpers", () => {
  it("derives resourceFactoryIdent from the symbol part", () => {
    expect(resourceFactoryIdent("aws:s3/bucketV2:BucketV2")).toBe("BucketV2");
  });

  it("derives functionFactoryIdent preserving camelCase", () => {
    expect(functionFactoryIdent("aws:s3/getBucket:getBucket")).toBe("getBucket");
  });

  it("prefixes typeBuilderIdent with the service to avoid cross-service collisions", () => {
    expect(typeBuilderIdent("aws:ec2/InstanceEbsBlockDevice:InstanceEbsBlockDevice")).toBe(
      "ec2_InstanceEbsBlockDevice",
    );
  });
});

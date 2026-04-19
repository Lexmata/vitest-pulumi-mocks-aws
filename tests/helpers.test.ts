import { describe, it, expect } from "vitest";
import * as h from "../src/helpers.js";
import type { MockCtx } from "../src/helpers.js";

function ctx(overrides: Partial<MockCtx> = {}): MockCtx {
  return {
    type: "aws:s3/bucketV2:BucketV2",
    name: "probe",
    inputs: {},
    idSeed: "deadbeef",
    region: "us-east-1",
    accountId: "123456789012",
    partition: "aws",
    ...overrides,
  };
}

describe("helpers.arn", () => {
  it("composes a canonical ARN from the resource token and ctx metadata", () => {
    expect(h.arn(ctx())).toBe(
      "arn:aws:s3:us-east-1:123456789012:bucketv2/probe-deadbeef",
    );
  });

  it("honors alt partitions like aws-cn and aws-us-gov", () => {
    expect(h.arn(ctx({ partition: "aws-cn" }))).toContain("arn:aws-cn:s3:");
    expect(h.arn(ctx({ partition: "aws-us-gov" }))).toContain("arn:aws-us-gov:s3:");
  });
});

describe("helpers.id", () => {
  it("uses an explicit prefix when supplied", () => {
    expect(h.id(ctx(), "foo", "custom")).toBe("custom-deadbeef");
  });

  // Drive every branch of the internal prefix table via the property name.
  it.each([
    ["vpcId", "vpc"],
    ["subnetId", "subnet"],
    ["securityGroupId", "sg"],
    ["instanceId", "i"],
    ["volumeId", "vol"],
    ["snapshotId", "snap"],
    ["imageId", "ami"],
    ["amiId", "ami"],
  ])("maps %s to the AWS-style %s- prefix", (propName, prefix) => {
    expect(h.id(ctx(), propName)).toBe(`${prefix}-deadbeef`);
  });

  it("falls back to the service name from the token for unknown props", () => {
    expect(h.id(ctx({ type: "aws:lambda/function:Function" }), "somethingElse")).toBe(
      "lambda-deadbeef",
    );
  });
});

describe("helpers.endpoint", () => {
  it("builds an S3-style endpoint when the prop name mentions buckets", () => {
    expect(h.endpoint(ctx(), "bucketDomainName")).toBe(
      "probe.s3.us-east-1.amazonaws.com",
    );
  });

  it("falls back to a service-scoped endpoint otherwise", () => {
    expect(h.endpoint(ctx({ type: "aws:elasticache/cluster:Cluster" }), "configurationEndpoint")).toBe(
      "probe-deadbeef.elasticache.us-east-1.amazonaws.com",
    );
  });
});

describe("helpers placeholders", () => {
  it("timestamp is the documented deterministic ISO string", () => {
    expect(h.timestamp()).toBe("2024-01-01T00:00:00Z");
  });
  it("archive/asset emit Pulumi-compatible placeholder shapes", () => {
    expect(h.archive()).toEqual({ __pulumiArchive: true, path: "mock://archive" });
    expect(h.asset()).toEqual({ __pulumiAsset: true, path: "mock://asset" });
  });
});

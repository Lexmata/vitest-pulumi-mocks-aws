import { describe, it, expect, beforeAll } from "vitest";
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { setupPulumiAwsMocks, resourceRegistry, functionRegistry } from "../src/index.js";

beforeAll(() => {
  setupPulumiAwsMocks({ region: "us-west-2" });
});

function resolveOutputs<T>(out: pulumi.Output<T>): Promise<T> {
  return new Promise((resolve) => pulumi.all([out]).apply(([v]) => resolve(v as T)));
}

describe("registry coverage", () => {
  it("registers every AWS resource token emitted by codegen", () => {
    // 1539 `aws:*` resource tokens in the upstream schema are all covered.
    // The function registry excludes a single non-aws internal token
    // (`pulumi:providers:aws/terraformConfig`), so 614 -> 613.
    expect(Object.keys(resourceRegistry).length).toBe(1539);
    expect(Object.keys(functionRegistry).length).toBe(613);
  });

  it("every factory is callable and returns an object with keys", () => {
    const base = {
      type: "",
      name: "probe",
      inputs: {},
      idSeed: "deadbeef",
      region: "us-west-2",
      accountId: "111111111111",
      partition: "aws",
    };
    for (const token in resourceRegistry) {
      const out = resourceRegistry[token]({ ...base, type: token });
      expect(out, `resource ${token} returned non-object`).toBeTypeOf("object");
    }
    for (const token in functionRegistry) {
      const out = functionRegistry[token]({ ...base, type: token, name: "invoke" });
      expect(out, `function ${token} returned non-object`).toBeTypeOf("object");
    }
  });
});

describe("end-to-end with @pulumi/aws", () => {
  it("mocks an S3 BucketV2 with a realistic ARN", async () => {
    const bucket = new aws.s3.BucketV2("my-bucket", {
      bucket: "my-bucket",
      tags: { Env: "test" },
    });
    const arn = await resolveOutputs(bucket.arn);
    const region = await resolveOutputs(bucket.region);
    const tagsAll = await resolveOutputs(bucket.tagsAll);
    expect(arn).toMatch(/^arn:aws:s3:us-west-2:123456789012:bucketv2\/my-bucket-/);
    expect(region).toBe("us-west-2");
    expect(tagsAll).toEqual({ Env: "test" });
  });

  it("echoes inputs into outputs where the shape matches", async () => {
    const role = new aws.iam.Role("my-role", {
      assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [],
      }),
      path: "/service-role/",
    });
    const path = await resolveOutputs(role.path);
    const arn = await resolveOutputs(role.arn);
    expect(path).toBe("/service-role/");
    expect(arn).toMatch(/^arn:aws:iam:us-west-2:123456789012:role\/my-role-/);
  });

  it("fills deeply nested outputs via type builders", async () => {
    const instance = new aws.ec2.Instance("my-ec2", {
      ami: "ami-12345",
      instanceType: "t3.small",
    });
    const arn = await resolveOutputs(instance.arn);
    const ami = await resolveOutputs(instance.ami);
    const type = await resolveOutputs(instance.instanceType);
    const nis = await resolveOutputs(instance.networkInterfaces);
    expect(arn).toMatch(/^arn:aws:ec2:us-west-2:123456789012:instance\/my-ec2-/);
    expect(ami).toBe("ami-12345");
    expect(type).toBe("t3.small");
    expect(Array.isArray(nis)).toBe(true);
  });

  it("mocks a Lambda Function", async () => {
    const fn = new aws.lambda.Function("hello", {
      role: "arn:aws:iam::123456789012:role/test",
      runtime: aws.lambda.Runtime.NodeJS20dX,
      handler: "index.handler",
      code: new pulumi.asset.AssetArchive({
        "index.js": new pulumi.asset.StringAsset(
          "exports.handler = async () => ({ statusCode: 200 });",
        ),
      }),
    });
    const arn = await resolveOutputs(fn.arn);
    const invokeArn = await resolveOutputs(fn.invokeArn);
    const runtime = await resolveOutputs(fn.runtime);
    expect(arn).toMatch(/^arn:aws:lambda:us-west-2:123456789012:function\/hello-/);
    expect(invokeArn).toMatch(/^arn:aws:lambda:us-west-2:123456789012:/);
    expect(runtime).toBe("nodejs20.x");
  });

  it("mocks a VPC with CIDR input echoed through", async () => {
    const vpc = new aws.ec2.Vpc("main", { cidrBlock: "10.20.0.0/16" });
    const cidr = await resolveOutputs(vpc.cidrBlock);
    const vpcId = await resolveOutputs(vpc.id);
    expect(cidr).toBe("10.20.0.0/16");
    expect(vpcId).toMatch(/^main-/);
  });
});

describe("override hook", () => {
  it("lets a test pin specific fields on a per-token basis", async () => {
    setupPulumiAwsMocks({
      region: "eu-central-1",
      overrides: {
        "aws:s3/bucketV2:BucketV2": (ctx) => ({
          arn: `arn:aws:s3:::${ctx.name}`,
        }),
      },
    });
    const bucket = new aws.s3.BucketV2("override-probe", { bucket: "override-probe" });
    const arn = await resolveOutputs(bucket.arn);
    expect(arn).toBe("arn:aws:s3:::override-probe");
  });
});

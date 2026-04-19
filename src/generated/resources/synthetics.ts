// GENERATED FILE — do not edit.
// Service: synthetics   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_synthetics from "../types/synthetics.js";

// aws:synthetics/canary:Canary
export function Canary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.artifactConfig = (i.artifactConfig !== undefined ? i.artifactConfig : (depth > 4 ? {} : T_synthetics.synthetics_CanaryArtifactConfig(ctx, depth + 1)));
  out.artifactS3Location = (i.artifactS3Location !== undefined ? i.artifactS3Location : "");
  out.deleteLambda = (i.deleteLambda !== undefined ? i.deleteLambda : false);
  out.engineArn = h.arn(ctx);
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.failureRetentionPeriod = (i.failureRetentionPeriod !== undefined ? i.failureRetentionPeriod : 0);
  out.handler = (i.handler !== undefined ? i.handler : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.runConfig = (i.runConfig !== undefined ? i.runConfig : (depth > 4 ? {} : T_synthetics.synthetics_CanaryRunConfig(ctx, depth + 1)));
  out.runtimeVersion = (i.runtimeVersion !== undefined ? i.runtimeVersion : "");
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3Key = (i.s3Key !== undefined ? i.s3Key : "");
  out.s3Version = (i.s3Version !== undefined ? i.s3Version : "");
  out.schedule = (i.schedule !== undefined ? i.schedule : (depth > 4 ? {} : T_synthetics.synthetics_CanarySchedule(ctx, depth + 1)));
  out.sourceLocationArn = h.arn(ctx);
  out.startCanary = (i.startCanary !== undefined ? i.startCanary : false);
  out.status = "active";
  out.successRetentionPeriod = (i.successRetentionPeriod !== undefined ? i.successRetentionPeriod : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timelines = (depth > 4 ? [] : [(depth > 4 ? {} : T_synthetics.synthetics_CanaryTimeline(ctx, depth + 1))]);
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_synthetics.synthetics_CanaryVpcConfig(ctx, depth + 1)));
  out.zipFile = (i.zipFile !== undefined ? i.zipFile : "");
  return out;
}

// aws:synthetics/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.groupId = h.id(ctx, "groupId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:synthetics/groupAssociation:GroupAssociation
export function GroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.canaryArn = (i.canaryArn !== undefined ? i.canaryArn : h.arn(ctx));
  out.groupArn = h.arn(ctx);
  out.groupId = h.id(ctx, "groupId");
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  return out;
}

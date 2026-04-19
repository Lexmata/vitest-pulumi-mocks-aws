// GENERATED FILE — do not edit.
// Service: synthetics   (7 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_synthetics from "./synthetics.js";

// aws:synthetics/CanaryArtifactConfig:CanaryArtifactConfig
export function synthetics_CanaryArtifactConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Encryption = (depth > 4 ? {} : T_synthetics.synthetics_CanaryArtifactConfigS3Encryption(ctx, depth + 1));
  return out;
}

// aws:synthetics/CanaryArtifactConfigS3Encryption:CanaryArtifactConfigS3Encryption
export function synthetics_CanaryArtifactConfigS3Encryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionMode = "";
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:synthetics/CanaryRunConfig:CanaryRunConfig
export function synthetics_CanaryRunConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeTracing = false;
  out.environmentVariables = {};
  out.memoryInMb = 0;
  out.timeoutInSeconds = 30;
  return out;
}

// aws:synthetics/CanarySchedule:CanarySchedule
export function synthetics_CanarySchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.durationInSeconds = 0;
  out.expression = "";
  return out;
}

// aws:synthetics/CanaryTimeline:CanaryTimeline
export function synthetics_CanaryTimeline(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.created = "";
  out.lastModified = h.timestamp();
  out.lastStarted = "";
  out.lastStopped = "";
  return out;
}

// aws:synthetics/CanaryVpcConfig:CanaryVpcConfig
export function synthetics_CanaryVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:synthetics/getRuntimeVersionsRuntimeVersion:getRuntimeVersionsRuntimeVersion
export function synthetics_getRuntimeVersionsRuntimeVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deprecationDate = "";
  out.description = "";
  out.releaseDate = "";
  out.versionName = "";
  return out;
}

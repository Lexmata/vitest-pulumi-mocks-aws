// GENERATED FILE — do not edit.
// Service: ivs   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ivs from "./ivs.js";

// aws:ivs/RecordingConfigurationDestinationConfiguration:RecordingConfigurationDestinationConfiguration
export function ivs_RecordingConfigurationDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3 = (depth > 4 ? {} : T_ivs.ivs_RecordingConfigurationDestinationConfigurationS3(ctx, depth + 1));
  return out;
}

// aws:ivs/RecordingConfigurationDestinationConfigurationS3:RecordingConfigurationDestinationConfigurationS3
export function ivs_RecordingConfigurationDestinationConfigurationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  return out;
}

// aws:ivs/RecordingConfigurationThumbnailConfiguration:RecordingConfigurationThumbnailConfiguration
export function ivs_RecordingConfigurationThumbnailConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordingMode = "";
  out.targetIntervalSeconds = 0;
  return out;
}

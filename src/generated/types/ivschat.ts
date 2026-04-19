// GENERATED FILE — do not edit.
// Service: ivschat   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ivschat from "./ivschat.js";

// aws:ivschat/LoggingConfigurationDestinationConfiguration:LoggingConfigurationDestinationConfiguration
export function ivschat_LoggingConfigurationDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_ivschat.ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs(ctx, depth + 1));
  out.firehose = (depth > 4 ? {} : T_ivschat.ivschat_LoggingConfigurationDestinationConfigurationFirehose(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_ivschat.ivschat_LoggingConfigurationDestinationConfigurationS3(ctx, depth + 1));
  return out;
}

// aws:ivschat/LoggingConfigurationDestinationConfigurationCloudwatchLogs:LoggingConfigurationDestinationConfigurationCloudwatchLogs
export function ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = "";
  return out;
}

// aws:ivschat/LoggingConfigurationDestinationConfigurationFirehose:LoggingConfigurationDestinationConfigurationFirehose
export function ivschat_LoggingConfigurationDestinationConfigurationFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStreamName = "";
  return out;
}

// aws:ivschat/LoggingConfigurationDestinationConfigurationS3:LoggingConfigurationDestinationConfigurationS3
export function ivschat_LoggingConfigurationDestinationConfigurationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  return out;
}

// aws:ivschat/RoomMessageReviewHandler:RoomMessageReviewHandler
export function ivschat_RoomMessageReviewHandler(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackResult = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

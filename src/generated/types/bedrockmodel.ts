// GENERATED FILE — do not edit.
// Service: bedrockmodel   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrockmodel from "./bedrockmodel.js";

// aws:bedrockmodel/InvocationLoggingConfigurationLoggingConfig:InvocationLoggingConfigurationLoggingConfig
export function bedrockmodel_InvocationLoggingConfigurationLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchConfig = (depth > 4 ? {} : T_bedrockmodel.bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig(ctx, depth + 1));
  out.embeddingDataDeliveryEnabled = false;
  out.imageDataDeliveryEnabled = false;
  out.s3Config = (depth > 4 ? {} : T_bedrockmodel.bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config(ctx, depth + 1));
  out.textDataDeliveryEnabled = false;
  out.videoDataDeliveryEnabled = false;
  return out;
}

// aws:bedrockmodel/InvocationLoggingConfigurationLoggingConfigCloudwatchConfig:InvocationLoggingConfigurationLoggingConfigCloudwatchConfig
export function bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.largeDataDeliveryS3Config = (depth > 4 ? {} : T_bedrockmodel.bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config(ctx, depth + 1));
  out.logGroupName = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:bedrockmodel/InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config:InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config
export function bedrockmodel_InvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.keyPrefix = "";
  return out;
}

// aws:bedrockmodel/InvocationLoggingConfigurationLoggingConfigS3Config:InvocationLoggingConfigurationLoggingConfigS3Config
export function bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.keyPrefix = "";
  return out;
}

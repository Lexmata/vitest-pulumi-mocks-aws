// GENERATED FILE — do not edit.
// Service: opensearchingest   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opensearchingest from "./opensearchingest.js";

// aws:opensearchingest/PipelineBufferOptions:PipelineBufferOptions
export function opensearchingest_PipelineBufferOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.persistentBufferEnabled = false;
  return out;
}

// aws:opensearchingest/PipelineEncryptionAtRestOptions:PipelineEncryptionAtRestOptions
export function opensearchingest_PipelineEncryptionAtRestOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:opensearchingest/PipelineLogPublishingOptions:PipelineLogPublishingOptions
export function opensearchingest_PipelineLogPublishingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogDestination = (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination(ctx, depth + 1));
  out.isLoggingEnabled = true;
  return out;
}

// aws:opensearchingest/PipelineLogPublishingOptionsCloudwatchLogDestination:PipelineLogPublishingOptionsCloudwatchLogDestination
export function opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroup = "";
  return out;
}

// aws:opensearchingest/PipelineTimeouts:PipelineTimeouts
export function opensearchingest_PipelineTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:opensearchingest/PipelineVpcOptions:PipelineVpcOptions
export function opensearchingest_PipelineVpcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcEndpointManagement = "";
  return out;
}

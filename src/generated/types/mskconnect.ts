// GENERATED FILE — do not edit.
// Service: mskconnect   (20 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mskconnect from "./mskconnect.js";

// aws:mskconnect/ConnectorCapacity:ConnectorCapacity
export function mskconnect_ConnectorCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscaling = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorCapacityAutoscaling(ctx, depth + 1));
  out.provisionedCapacity = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorCapacityProvisionedCapacity(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorCapacityAutoscaling:ConnectorCapacityAutoscaling
export function mskconnect_ConnectorCapacityAutoscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxWorkerCount = 1;
  out.mcuCount = 1;
  out.minWorkerCount = 1;
  out.scaleInPolicy = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorCapacityAutoscalingScaleInPolicy(ctx, depth + 1));
  out.scaleOutPolicy = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorCapacityAutoscalingScaleInPolicy:ConnectorCapacityAutoscalingScaleInPolicy
export function mskconnect_ConnectorCapacityAutoscalingScaleInPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuUtilizationPercentage = 0;
  return out;
}

// aws:mskconnect/ConnectorCapacityAutoscalingScaleOutPolicy:ConnectorCapacityAutoscalingScaleOutPolicy
export function mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuUtilizationPercentage = 0;
  return out;
}

// aws:mskconnect/ConnectorCapacityProvisionedCapacity:ConnectorCapacityProvisionedCapacity
export function mskconnect_ConnectorCapacityProvisionedCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mcuCount = 1;
  out.workerCount = 1;
  return out;
}

// aws:mskconnect/ConnectorKafkaCluster:ConnectorKafkaCluster
export function mskconnect_ConnectorKafkaCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apacheKafkaCluster = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorKafkaClusterApacheKafkaCluster(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorKafkaClusterApacheKafkaCluster:ConnectorKafkaClusterApacheKafkaCluster
export function mskconnect_ConnectorKafkaClusterApacheKafkaCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bootstrapServers = "";
  out.vpc = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorKafkaClusterApacheKafkaClusterVpc:ConnectorKafkaClusterApacheKafkaClusterVpc
export function mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:mskconnect/ConnectorKafkaClusterClientAuthentication:ConnectorKafkaClusterClientAuthentication
export function mskconnect_ConnectorKafkaClusterClientAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationType = "";
  return out;
}

// aws:mskconnect/ConnectorKafkaClusterEncryptionInTransit:ConnectorKafkaClusterEncryptionInTransit
export function mskconnect_ConnectorKafkaClusterEncryptionInTransit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  return out;
}

// aws:mskconnect/ConnectorLogDelivery:ConnectorLogDelivery
export function mskconnect_ConnectorLogDelivery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.workerLogDelivery = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorLogDeliveryWorkerLogDelivery(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorLogDeliveryWorkerLogDelivery:ConnectorLogDeliveryWorkerLogDelivery
export function mskconnect_ConnectorLogDeliveryWorkerLogDelivery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs(ctx, depth + 1));
  out.firehose = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs:ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroup = "";
  return out;
}

// aws:mskconnect/ConnectorLogDeliveryWorkerLogDeliveryFirehose:ConnectorLogDeliveryWorkerLogDeliveryFirehose
export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStream = "";
  out.enabled = true;
  return out;
}

// aws:mskconnect/ConnectorLogDeliveryWorkerLogDeliveryS3:ConnectorLogDeliveryWorkerLogDeliveryS3
export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:mskconnect/ConnectorPlugin:ConnectorPlugin
export function mskconnect_ConnectorPlugin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPlugin = (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorPluginCustomPlugin(ctx, depth + 1));
  return out;
}

// aws:mskconnect/ConnectorPluginCustomPlugin:ConnectorPluginCustomPlugin
export function mskconnect_ConnectorPluginCustomPlugin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.revision = 0;
  return out;
}

// aws:mskconnect/ConnectorWorkerConfiguration:ConnectorWorkerConfiguration
export function mskconnect_ConnectorWorkerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.revision = 0;
  return out;
}

// aws:mskconnect/CustomPluginLocation:CustomPluginLocation
export function mskconnect_CustomPluginLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3 = (depth > 4 ? {} : T_mskconnect.mskconnect_CustomPluginLocationS3(ctx, depth + 1));
  return out;
}

// aws:mskconnect/CustomPluginLocationS3:CustomPluginLocationS3
export function mskconnect_CustomPluginLocationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.fileKey = "";
  out.objectVersion = "";
  return out;
}

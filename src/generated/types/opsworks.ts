// GENERATED FILE — do not edit.
// Service: opsworks   (73 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opsworks from "./opsworks.js";

// aws:opsworks/ApplicationAppSource:ApplicationAppSource
export function opsworks_ApplicationAppSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.revision = "";
  out.sshKey = "";
  out.type = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

// aws:opsworks/ApplicationEnvironment:ApplicationEnvironment
export function opsworks_ApplicationEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.secure = false;
  out.value = "";
  return out;
}

// aws:opsworks/ApplicationSslConfiguration:ApplicationSslConfiguration
export function opsworks_ApplicationSslConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = "";
  out.chain = "";
  out.privateKey = "";
  return out;
}

// aws:opsworks/CustomLayerCloudwatchConfiguration:CustomLayerCloudwatchConfiguration
export function opsworks_CustomLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_CustomLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/CustomLayerCloudwatchConfigurationLogStream:CustomLayerCloudwatchConfigurationLogStream
export function opsworks_CustomLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/CustomLayerEbsVolume:CustomLayerEbsVolume
export function opsworks_CustomLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/CustomLayerLoadBasedAutoScaling:CustomLayerLoadBasedAutoScaling
export function opsworks_CustomLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_CustomLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_CustomLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/CustomLayerLoadBasedAutoScalingDownscaling:CustomLayerLoadBasedAutoScalingDownscaling
export function opsworks_CustomLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/CustomLayerLoadBasedAutoScalingUpscaling:CustomLayerLoadBasedAutoScalingUpscaling
export function opsworks_CustomLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/EcsClusterLayerCloudwatchConfiguration:EcsClusterLayerCloudwatchConfiguration
export function opsworks_EcsClusterLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/EcsClusterLayerCloudwatchConfigurationLogStream:EcsClusterLayerCloudwatchConfigurationLogStream
export function opsworks_EcsClusterLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/EcsClusterLayerEbsVolume:EcsClusterLayerEbsVolume
export function opsworks_EcsClusterLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/EcsClusterLayerLoadBasedAutoScaling:EcsClusterLayerLoadBasedAutoScaling
export function opsworks_EcsClusterLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/EcsClusterLayerLoadBasedAutoScalingDownscaling:EcsClusterLayerLoadBasedAutoScalingDownscaling
export function opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/EcsClusterLayerLoadBasedAutoScalingUpscaling:EcsClusterLayerLoadBasedAutoScalingUpscaling
export function opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/GangliaLayerCloudwatchConfiguration:GangliaLayerCloudwatchConfiguration
export function opsworks_GangliaLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/GangliaLayerCloudwatchConfigurationLogStream:GangliaLayerCloudwatchConfigurationLogStream
export function opsworks_GangliaLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/GangliaLayerEbsVolume:GangliaLayerEbsVolume
export function opsworks_GangliaLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/GangliaLayerLoadBasedAutoScaling:GangliaLayerLoadBasedAutoScaling
export function opsworks_GangliaLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/GangliaLayerLoadBasedAutoScalingDownscaling:GangliaLayerLoadBasedAutoScalingDownscaling
export function opsworks_GangliaLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/GangliaLayerLoadBasedAutoScalingUpscaling:GangliaLayerLoadBasedAutoScalingUpscaling
export function opsworks_GangliaLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/HaproxyLayerCloudwatchConfiguration:HaproxyLayerCloudwatchConfiguration
export function opsworks_HaproxyLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/HaproxyLayerCloudwatchConfigurationLogStream:HaproxyLayerCloudwatchConfigurationLogStream
export function opsworks_HaproxyLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/HaproxyLayerEbsVolume:HaproxyLayerEbsVolume
export function opsworks_HaproxyLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/HaproxyLayerLoadBasedAutoScaling:HaproxyLayerLoadBasedAutoScaling
export function opsworks_HaproxyLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/HaproxyLayerLoadBasedAutoScalingDownscaling:HaproxyLayerLoadBasedAutoScalingDownscaling
export function opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/HaproxyLayerLoadBasedAutoScalingUpscaling:HaproxyLayerLoadBasedAutoScalingUpscaling
export function opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/InstanceEbsBlockDevice:InstanceEbsBlockDevice
export function opsworks_InstanceEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.iops = 0;
  out.snapshotId = h.id(ctx, "snapshotId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:opsworks/InstanceEphemeralBlockDevice:InstanceEphemeralBlockDevice
export function opsworks_InstanceEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:opsworks/InstanceRootBlockDevice:InstanceRootBlockDevice
export function opsworks_InstanceRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.iops = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:opsworks/JavaAppLayerCloudwatchConfiguration:JavaAppLayerCloudwatchConfiguration
export function opsworks_JavaAppLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/JavaAppLayerCloudwatchConfigurationLogStream:JavaAppLayerCloudwatchConfigurationLogStream
export function opsworks_JavaAppLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/JavaAppLayerEbsVolume:JavaAppLayerEbsVolume
export function opsworks_JavaAppLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/JavaAppLayerLoadBasedAutoScaling:JavaAppLayerLoadBasedAutoScaling
export function opsworks_JavaAppLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/JavaAppLayerLoadBasedAutoScalingDownscaling:JavaAppLayerLoadBasedAutoScalingDownscaling
export function opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/JavaAppLayerLoadBasedAutoScalingUpscaling:JavaAppLayerLoadBasedAutoScalingUpscaling
export function opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/MemcachedLayerCloudwatchConfiguration:MemcachedLayerCloudwatchConfiguration
export function opsworks_MemcachedLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/MemcachedLayerCloudwatchConfigurationLogStream:MemcachedLayerCloudwatchConfigurationLogStream
export function opsworks_MemcachedLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/MemcachedLayerEbsVolume:MemcachedLayerEbsVolume
export function opsworks_MemcachedLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/MemcachedLayerLoadBasedAutoScaling:MemcachedLayerLoadBasedAutoScaling
export function opsworks_MemcachedLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/MemcachedLayerLoadBasedAutoScalingDownscaling:MemcachedLayerLoadBasedAutoScalingDownscaling
export function opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/MemcachedLayerLoadBasedAutoScalingUpscaling:MemcachedLayerLoadBasedAutoScalingUpscaling
export function opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/MysqlLayerCloudwatchConfiguration:MysqlLayerCloudwatchConfiguration
export function opsworks_MysqlLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/MysqlLayerCloudwatchConfigurationLogStream:MysqlLayerCloudwatchConfigurationLogStream
export function opsworks_MysqlLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/MysqlLayerEbsVolume:MysqlLayerEbsVolume
export function opsworks_MysqlLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/MysqlLayerLoadBasedAutoScaling:MysqlLayerLoadBasedAutoScaling
export function opsworks_MysqlLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/MysqlLayerLoadBasedAutoScalingDownscaling:MysqlLayerLoadBasedAutoScalingDownscaling
export function opsworks_MysqlLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/MysqlLayerLoadBasedAutoScalingUpscaling:MysqlLayerLoadBasedAutoScalingUpscaling
export function opsworks_MysqlLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/NodejsAppLayerCloudwatchConfiguration:NodejsAppLayerCloudwatchConfiguration
export function opsworks_NodejsAppLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/NodejsAppLayerCloudwatchConfigurationLogStream:NodejsAppLayerCloudwatchConfigurationLogStream
export function opsworks_NodejsAppLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/NodejsAppLayerEbsVolume:NodejsAppLayerEbsVolume
export function opsworks_NodejsAppLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/NodejsAppLayerLoadBasedAutoScaling:NodejsAppLayerLoadBasedAutoScaling
export function opsworks_NodejsAppLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/NodejsAppLayerLoadBasedAutoScalingDownscaling:NodejsAppLayerLoadBasedAutoScalingDownscaling
export function opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/NodejsAppLayerLoadBasedAutoScalingUpscaling:NodejsAppLayerLoadBasedAutoScalingUpscaling
export function opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/PhpAppLayerCloudwatchConfiguration:PhpAppLayerCloudwatchConfiguration
export function opsworks_PhpAppLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/PhpAppLayerCloudwatchConfigurationLogStream:PhpAppLayerCloudwatchConfigurationLogStream
export function opsworks_PhpAppLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/PhpAppLayerEbsVolume:PhpAppLayerEbsVolume
export function opsworks_PhpAppLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/PhpAppLayerLoadBasedAutoScaling:PhpAppLayerLoadBasedAutoScaling
export function opsworks_PhpAppLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/PhpAppLayerLoadBasedAutoScalingDownscaling:PhpAppLayerLoadBasedAutoScalingDownscaling
export function opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/PhpAppLayerLoadBasedAutoScalingUpscaling:PhpAppLayerLoadBasedAutoScalingUpscaling
export function opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/RailsAppLayerCloudwatchConfiguration:RailsAppLayerCloudwatchConfiguration
export function opsworks_RailsAppLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/RailsAppLayerCloudwatchConfigurationLogStream:RailsAppLayerCloudwatchConfigurationLogStream
export function opsworks_RailsAppLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/RailsAppLayerEbsVolume:RailsAppLayerEbsVolume
export function opsworks_RailsAppLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/RailsAppLayerLoadBasedAutoScaling:RailsAppLayerLoadBasedAutoScaling
export function opsworks_RailsAppLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/RailsAppLayerLoadBasedAutoScalingDownscaling:RailsAppLayerLoadBasedAutoScalingDownscaling
export function opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/RailsAppLayerLoadBasedAutoScalingUpscaling:RailsAppLayerLoadBasedAutoScalingUpscaling
export function opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/StackCustomCookbooksSource:StackCustomCookbooksSource
export function opsworks_StackCustomCookbooksSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.revision = "";
  out.sshKey = "";
  out.type = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

// aws:opsworks/StaticWebLayerCloudwatchConfiguration:StaticWebLayerCloudwatchConfiguration
export function opsworks_StaticWebLayerCloudwatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logStreams = (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerCloudwatchConfigurationLogStream(ctx, depth + 1))]);
  return out;
}

// aws:opsworks/StaticWebLayerCloudwatchConfigurationLogStream:StaticWebLayerCloudwatchConfigurationLogStream
export function opsworks_StaticWebLayerCloudwatchConfigurationLogStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchCount = 1;
  out.batchSize = 8;
  out.bufferDuration = 0;
  out.datetimeFormat = "";
  out.encoding = "";
  out.file = "";
  out.fileFingerprintLines = "";
  out.initialPosition = "";
  out.logGroupName = "";
  out.multilineStartPattern = "";
  out.timeZone = "";
  return out;
}

// aws:opsworks/StaticWebLayerEbsVolume:StaticWebLayerEbsVolume
export function opsworks_StaticWebLayerEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.iops = 0;
  out.mountPoint = "";
  out.numberOfDisks = 0;
  out.raidLevel = "";
  out.size = 8;
  out.type = "";
  return out;
}

// aws:opsworks/StaticWebLayerLoadBasedAutoScaling:StaticWebLayerLoadBasedAutoScaling
export function opsworks_StaticWebLayerLoadBasedAutoScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downscaling = (depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling(ctx, depth + 1));
  out.enable = true;
  out.upscaling = (depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling(ctx, depth + 1));
  return out;
}

// aws:opsworks/StaticWebLayerLoadBasedAutoScalingDownscaling:StaticWebLayerLoadBasedAutoScalingDownscaling
export function opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

// aws:opsworks/StaticWebLayerLoadBasedAutoScalingUpscaling:StaticWebLayerLoadBasedAutoScalingUpscaling
export function opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.cpuThreshold = 0;
  out.ignoreMetricsTime = 0;
  out.instanceCount = 1;
  out.loadThreshold = 0;
  out.memoryThreshold = 0;
  out.thresholdsWaitTime = 0;
  return out;
}

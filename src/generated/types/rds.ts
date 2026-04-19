// GENERATED FILE — do not edit.
// Service: rds   (29 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rds from "./rds.js";

// aws:rds/ClusterMasterUserSecret:ClusterMasterUserSecret
export function rds_ClusterMasterUserSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.secretArn = h.arn(ctx);
  out.secretStatus = "";
  return out;
}

// aws:rds/ClusterParameterGroupParameter:ClusterParameterGroupParameter
export function rds_ClusterParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyMethod = "";
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:rds/ClusterRestoreToPointInTime:ClusterRestoreToPointInTime
export function rds_ClusterRestoreToPointInTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.restoreToTime = "";
  out.restoreType = "";
  out.sourceClusterIdentifier = "";
  out.sourceClusterResourceId = h.id(ctx, "sourceClusterResourceId");
  out.useLatestRestorableTime = false;
  return out;
}

// aws:rds/ClusterS3Import:ClusterS3Import
export function rds_ClusterS3Import(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.ingestionRole = "";
  out.sourceEngine = "";
  out.sourceEngineVersion = "";
  return out;
}

// aws:rds/ClusterScalingConfiguration:ClusterScalingConfiguration
export function rds_ClusterScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoPause = false;
  out.maxCapacity = 0;
  out.minCapacity = 0;
  out.secondsBeforeTimeout = 30;
  out.secondsUntilAutoPause = 0;
  out.timeoutAction = "";
  return out;
}

// aws:rds/ClusterServerlessv2ScalingConfiguration:ClusterServerlessv2ScalingConfiguration
export function rds_ClusterServerlessv2ScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxCapacity = 0;
  out.minCapacity = 0;
  out.secondsUntilAutoPause = 0;
  return out;
}

// aws:rds/ClusterSnapshotCopyTimeouts:ClusterSnapshotCopyTimeouts
export function rds_ClusterSnapshotCopyTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:rds/ExportTaskTimeouts:ExportTaskTimeouts
export function rds_ExportTaskTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:rds/GlobalClusterGlobalClusterMember:GlobalClusterGlobalClusterMember
export function rds_GlobalClusterGlobalClusterMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbClusterArn = h.arn(ctx);
  out.isWriter = true;
  return out;
}

// aws:rds/InstanceBlueGreenUpdate:InstanceBlueGreenUpdate
export function rds_InstanceBlueGreenUpdate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:rds/InstanceDesiredStateTimeouts:InstanceDesiredStateTimeouts
export function rds_InstanceDesiredStateTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:rds/InstanceListenerEndpoint:InstanceListenerEndpoint
export function rds_InstanceListenerEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.port = 443;
  return out;
}

// aws:rds/InstanceMasterUserSecret:InstanceMasterUserSecret
export function rds_InstanceMasterUserSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.secretArn = h.arn(ctx);
  out.secretStatus = "";
  return out;
}

// aws:rds/InstanceRestoreToPointInTime:InstanceRestoreToPointInTime
export function rds_InstanceRestoreToPointInTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.restoreTime = "";
  out.sourceDbInstanceAutomatedBackupsArn = h.arn(ctx);
  out.sourceDbInstanceIdentifier = "";
  out.sourceDbiResourceId = h.id(ctx, "sourceDbiResourceId");
  out.useLatestRestorableTime = false;
  return out;
}

// aws:rds/InstanceS3Import:InstanceS3Import
export function rds_InstanceS3Import(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.ingestionRole = "";
  out.sourceEngine = "";
  out.sourceEngineVersion = "";
  return out;
}

// aws:rds/IntegrationTimeouts:IntegrationTimeouts
export function rds_IntegrationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:rds/OptionGroupOption:OptionGroupOption
export function rds_OptionGroupOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbSecurityGroupMemberships = (depth > 4 ? [] : [""]);
  out.optionName = "";
  out.optionSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_OptionGroupOptionOptionSetting(ctx, depth + 1))]);
  out.port = 443;
  out.version = "1";
  out.vpcSecurityGroupMemberships = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/OptionGroupOptionOptionSetting:OptionGroupOptionOptionSetting
export function rds_OptionGroupOptionOptionSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:rds/ParameterGroupParameter:ParameterGroupParameter
export function rds_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyMethod = "";
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:rds/ProxyAuth:ProxyAuth
export function rds_ProxyAuth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authScheme = "";
  out.clientPasswordAuthType = "";
  out.description = "";
  out.iamAuth = "";
  out.secretArn = h.arn(ctx);
  out.username = "";
  return out;
}

// aws:rds/ProxyDefaultTargetGroupConnectionPoolConfig:ProxyDefaultTargetGroupConnectionPoolConfig
export function rds_ProxyDefaultTargetGroupConnectionPoolConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionBorrowTimeout = 30;
  out.initQuery = "";
  out.maxConnectionsPercent = 0;
  out.maxIdleConnectionsPercent = 0;
  out.sessionPinningFilters = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/ReservedInstanceRecurringCharge:ReservedInstanceRecurringCharge
export function rds_ReservedInstanceRecurringCharge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recurringChargeAmount = 0;
  out.recurringChargeFrequency = "";
  return out;
}

// aws:rds/ShardGroupTimeouts:ShardGroupTimeouts
export function rds_ShardGroupTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:rds/getClusterMasterUserSecret:getClusterMasterUserSecret
export function rds_getClusterMasterUserSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.secretArn = h.arn(ctx);
  out.secretStatus = "";
  return out;
}

// aws:rds/getClustersFilter:getClustersFilter
export function rds_getClustersFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getEngineVersionFilter:getEngineVersionFilter
export function rds_getEngineVersionFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getInstanceMasterUserSecret:getInstanceMasterUserSecret
export function rds_getInstanceMasterUserSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.secretArn = h.arn(ctx);
  out.secretStatus = "";
  return out;
}

// aws:rds/getInstancesFilter:getInstancesFilter
export function rds_getInstancesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getProxyAuth:getProxyAuth
export function rds_getProxyAuth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authScheme = "";
  out.clientPasswordAuthType = "";
  out.description = "";
  out.iamAuth = "";
  out.secretArn = h.arn(ctx);
  out.username = "";
  return out;
}

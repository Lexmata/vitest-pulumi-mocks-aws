// GENERATED FILE — do not edit.
// Service: elasticache   (23 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticache from "./elasticache.js";

// aws:elasticache/ClusterCacheNode:ClusterCacheNode
export function elasticache_ClusterCacheNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.availabilityZone = ctx.region + "a";
  out.id = h.id(ctx, "id");
  out.outpostArn = h.arn(ctx);
  out.port = 443;
  return out;
}

// aws:elasticache/ClusterLogDeliveryConfiguration:ClusterLogDeliveryConfiguration
export function elasticache_ClusterLogDeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationType = "";
  out.logFormat = "";
  out.logType = "";
  return out;
}

// aws:elasticache/GlobalReplicationGroupGlobalNodeGroup:GlobalReplicationGroupGlobalNodeGroup
export function elasticache_GlobalReplicationGroupGlobalNodeGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalNodeGroupId = h.id(ctx, "globalNodeGroupId");
  out.slots = "";
  return out;
}

// aws:elasticache/ParameterGroupParameter:ParameterGroupParameter
export function elasticache_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:elasticache/ReplicationGroupLogDeliveryConfiguration:ReplicationGroupLogDeliveryConfiguration
export function elasticache_ReplicationGroupLogDeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationType = "";
  out.logFormat = "";
  out.logType = "";
  return out;
}

// aws:elasticache/ReservedCacheNodeRecurringCharge:ReservedCacheNodeRecurringCharge
export function elasticache_ReservedCacheNodeRecurringCharge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recurringChargeAmount = 0;
  out.recurringChargeFrequency = "";
  return out;
}

// aws:elasticache/ReservedCacheNodeTimeouts:ReservedCacheNodeTimeouts
export function elasticache_ReservedCacheNodeTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:elasticache/ServerlessCacheCacheUsageLimits:ServerlessCacheCacheUsageLimits
export function elasticache_ServerlessCacheCacheUsageLimits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataStorage = (depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheCacheUsageLimitsDataStorage(ctx, depth + 1));
  out.ecpuPerSeconds = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond(ctx, depth + 1))]);
  return out;
}

// aws:elasticache/ServerlessCacheCacheUsageLimitsDataStorage:ServerlessCacheCacheUsageLimitsDataStorage
export function elasticache_ServerlessCacheCacheUsageLimitsDataStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximum = 0;
  out.minimum = 0;
  out.unit = "";
  return out;
}

// aws:elasticache/ServerlessCacheCacheUsageLimitsEcpuPerSecond:ServerlessCacheCacheUsageLimitsEcpuPerSecond
export function elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximum = 0;
  out.minimum = 0;
  return out;
}

// aws:elasticache/ServerlessCacheEndpoint:ServerlessCacheEndpoint
export function elasticache_ServerlessCacheEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:elasticache/ServerlessCacheReaderEndpoint:ServerlessCacheReaderEndpoint
export function elasticache_ServerlessCacheReaderEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:elasticache/ServerlessCacheTimeouts:ServerlessCacheTimeouts
export function elasticache_ServerlessCacheTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:elasticache/UserAuthenticationMode:UserAuthenticationMode
export function elasticache_UserAuthenticationMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordCount = 1;
  out.passwords = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:elasticache/getClusterCacheNode:getClusterCacheNode
export function elasticache_getClusterCacheNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.availabilityZone = ctx.region + "a";
  out.id = h.id(ctx, "id");
  out.outpostArn = h.arn(ctx);
  out.port = 443;
  return out;
}

// aws:elasticache/getClusterLogDeliveryConfiguration:getClusterLogDeliveryConfiguration
export function elasticache_getClusterLogDeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationType = "";
  out.logFormat = "";
  out.logType = "";
  return out;
}

// aws:elasticache/getReplicationGroupLogDeliveryConfiguration:getReplicationGroupLogDeliveryConfiguration
export function elasticache_getReplicationGroupLogDeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationType = "";
  out.logFormat = "";
  out.logType = "";
  return out;
}

// aws:elasticache/getServerlessCacheCacheUsageLimits:getServerlessCacheCacheUsageLimits
export function elasticache_getServerlessCacheCacheUsageLimits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataStorage = (depth > 4 ? {} : T_elasticache.elasticache_getServerlessCacheCacheUsageLimitsDataStorage(ctx, depth + 1));
  out.ecpuPerSecond = (depth > 4 ? {} : T_elasticache.elasticache_getServerlessCacheCacheUsageLimitsEcpuPerSecond(ctx, depth + 1));
  return out;
}

// aws:elasticache/getServerlessCacheCacheUsageLimitsDataStorage:getServerlessCacheCacheUsageLimitsDataStorage
export function elasticache_getServerlessCacheCacheUsageLimitsDataStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximum = 0;
  out.minimum = 0;
  out.unit = "";
  return out;
}

// aws:elasticache/getServerlessCacheCacheUsageLimitsEcpuPerSecond:getServerlessCacheCacheUsageLimitsEcpuPerSecond
export function elasticache_getServerlessCacheCacheUsageLimitsEcpuPerSecond(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximum = 0;
  out.minimum = 0;
  return out;
}

// aws:elasticache/getServerlessCacheEndpoint:getServerlessCacheEndpoint
export function elasticache_getServerlessCacheEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:elasticache/getServerlessCacheReaderEndpoint:getServerlessCacheReaderEndpoint
export function elasticache_getServerlessCacheReaderEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:elasticache/getUserAuthenticationMode:getUserAuthenticationMode
export function elasticache_getUserAuthenticationMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordCount = 1;
  out.type = "";
  return out;
}

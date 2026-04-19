// GENERATED FILE — do not edit.
// Service: memorydb   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_memorydb from "./memorydb.js";

// aws:memorydb/ClusterClusterEndpoint:ClusterClusterEndpoint
export function memorydb_ClusterClusterEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:memorydb/ClusterShard:ClusterShard
export function memorydb_ClusterShard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.nodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_ClusterShardNode(ctx, depth + 1))]);
  out.numNodes = 0;
  out.slots = "";
  return out;
}

// aws:memorydb/ClusterShardNode:ClusterShardNode
export function memorydb_ClusterShardNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.createTime = h.timestamp();
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_ClusterShardNodeEndpoint(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:memorydb/ClusterShardNodeEndpoint:ClusterShardNodeEndpoint
export function memorydb_ClusterShardNodeEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:memorydb/MultiRegionClusterTimeouts:MultiRegionClusterTimeouts
export function memorydb_MultiRegionClusterTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:memorydb/ParameterGroupParameter:ParameterGroupParameter
export function memorydb_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:memorydb/SnapshotClusterConfiguration:SnapshotClusterConfiguration
export function memorydb_SnapshotClusterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.engine = "";
  out.engineVersion = "";
  out.maintenanceWindow = "";
  out.name = ctx.name;
  out.nodeType = "";
  out.numShards = 0;
  out.parameterGroupName = "";
  out.port = 443;
  out.snapshotRetentionLimit = 0;
  out.snapshotWindow = "";
  out.subnetGroupName = "";
  out.topicArn = h.arn(ctx);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:memorydb/UserAuthenticationMode:UserAuthenticationMode
export function memorydb_UserAuthenticationMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordCount = 1;
  out.passwords = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:memorydb/getClusterClusterEndpoint:getClusterClusterEndpoint
export function memorydb_getClusterClusterEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:memorydb/getClusterShard:getClusterShard
export function memorydb_getClusterShard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.nodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getClusterShardNode(ctx, depth + 1))]);
  out.numNodes = 0;
  out.slots = "";
  return out;
}

// aws:memorydb/getClusterShardNode:getClusterShardNode
export function memorydb_getClusterShardNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.createTime = h.timestamp();
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getClusterShardNodeEndpoint(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:memorydb/getClusterShardNodeEndpoint:getClusterShardNodeEndpoint
export function memorydb_getClusterShardNodeEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  return out;
}

// aws:memorydb/getParameterGroupParameter:getParameterGroupParameter
export function memorydb_getParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:memorydb/getSnapshotClusterConfiguration:getSnapshotClusterConfiguration
export function memorydb_getSnapshotClusterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.engine = "";
  out.engineVersion = "";
  out.maintenanceWindow = "";
  out.name = ctx.name;
  out.nodeType = "";
  out.numShards = 0;
  out.parameterGroupName = "";
  out.port = 443;
  out.snapshotRetentionLimit = 0;
  out.snapshotWindow = "";
  out.subnetGroupName = "";
  out.topicArn = h.arn(ctx);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:memorydb/getUserAuthenticationMode:getUserAuthenticationMode
export function memorydb_getUserAuthenticationMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordCount = 1;
  out.type = "";
  return out;
}

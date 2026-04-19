// GENERATED FILE — do not edit.
// Service: memorydb   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_memorydb from "../types/memorydb.js";

// aws:memorydb/getAcl:getAcl
export function getAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.minimumEngineVersion = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:memorydb/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclName = "";
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = false;
  out.clusterEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getClusterClusterEndpoint(ctx, depth + 1))]);
  out.dataTiering = false;
  out.description = "";
  out.engine = "";
  out.enginePatchVersion = "";
  out.engineVersion = "";
  out.finalSnapshotName = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyArn = h.arn(ctx);
  out.maintenanceWindow = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nodeType = "";
  out.numReplicasPerShard = 0;
  out.numShards = 0;
  out.parameterGroupName = "";
  out.port = 443;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.shards = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getClusterShard(ctx, depth + 1))]);
  out.snapshotRetentionLimit = 0;
  out.snapshotWindow = "";
  out.snsTopicArn = h.arn(ctx);
  out.subnetGroupName = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tlsEnabled = false;
  return out;
}

// aws:memorydb/getParameterGroup:getParameterGroup
export function getParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.family = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getParameterGroupParameter(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:memorydb/getSnapshot:getSnapshot
export function getSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getSnapshotClusterConfiguration(ctx, depth + 1))]);
  out.clusterName = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.source = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:memorydb/getSubnetGroup:getSubnetGroup
export function getSubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:memorydb/getUser:getUser
export function getUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessString = "";
  out.arn = h.arn(ctx);
  out.authenticationModes = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_getUserAuthenticationMode(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.minimumEngineVersion = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

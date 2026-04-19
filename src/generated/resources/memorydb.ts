// GENERATED FILE — do not edit.
// Service: memorydb   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_memorydb from "../types/memorydb.js";

// aws:memorydb/acl:Acl
export function Acl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.minimumEngineVersion = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userNames = (i.userNames !== undefined ? i.userNames : (depth > 4 ? [] : [""]));
  return out;
}

// aws:memorydb/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclName = (i.aclName !== undefined ? i.aclName : "");
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.clusterEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_ClusterClusterEndpoint(ctx, depth + 1))]);
  out.dataTiering = (i.dataTiering !== undefined ? i.dataTiering : false);
  out.description = (i.description !== undefined ? i.description : "");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.enginePatchVersion = "";
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.finalSnapshotName = (i.finalSnapshotName !== undefined ? i.finalSnapshotName : "");
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.multiRegionClusterName = (i.multiRegionClusterName !== undefined ? i.multiRegionClusterName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.numReplicasPerShard = (i.numReplicasPerShard !== undefined ? i.numReplicasPerShard : 0);
  out.numShards = (i.numShards !== undefined ? i.numShards : 0);
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.shards = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_ClusterShard(ctx, depth + 1))]);
  out.snapshotArns = (i.snapshotArns !== undefined ? i.snapshotArns : (depth > 4 ? [] : [""]));
  out.snapshotName = (i.snapshotName !== undefined ? i.snapshotName : "");
  out.snapshotRetentionLimit = (i.snapshotRetentionLimit !== undefined ? i.snapshotRetentionLimit : 0);
  out.snapshotWindow = (i.snapshotWindow !== undefined ? i.snapshotWindow : "");
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  out.subnetGroupName = (i.subnetGroupName !== undefined ? i.subnetGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tlsEnabled = (i.tlsEnabled !== undefined ? i.tlsEnabled : false);
  return out;
}

// aws:memorydb/multiRegionCluster:MultiRegionCluster
export function MultiRegionCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.multiRegionClusterName = "";
  out.multiRegionClusterNameSuffix = (i.multiRegionClusterNameSuffix !== undefined ? i.multiRegionClusterNameSuffix : "");
  out.multiRegionParameterGroupName = (i.multiRegionParameterGroupName !== undefined ? i.multiRegionParameterGroupName : "");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.numShards = (i.numShards !== undefined ? i.numShards : 0);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_memorydb.memorydb_MultiRegionClusterTimeouts(ctx, depth + 1)));
  out.tlsEnabled = (i.tlsEnabled !== undefined ? i.tlsEnabled : false);
  out.updateStrategy = (i.updateStrategy !== undefined ? i.updateStrategy : "");
  return out;
}

// aws:memorydb/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_ParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:memorydb/snapshot:Snapshot
export function Snapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_memorydb.memorydb_SnapshotClusterConfiguration(ctx, depth + 1))]);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.source = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:memorydb/subnetGroup:SubnetGroup
export function SubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:memorydb/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessString = (i.accessString !== undefined ? i.accessString : "");
  out.arn = h.arn(ctx);
  out.authenticationMode = (i.authenticationMode !== undefined ? i.authenticationMode : (depth > 4 ? {} : T_memorydb.memorydb_UserAuthenticationMode(ctx, depth + 1)));
  out.minimumEngineVersion = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

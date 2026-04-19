// GENERATED FILE — do not edit.
// Service: elasticache   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticache from "../types/elasticache.js";

// aws:elasticache/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : "");
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.azMode = (i.azMode !== undefined ? i.azMode : "");
  out.cacheNodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ClusterCacheNode(ctx, depth + 1))]);
  out.clusterAddress = "";
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.configurationEndpoint = h.endpoint(ctx, "configurationEndpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.ipDiscovery = (i.ipDiscovery !== undefined ? i.ipDiscovery : "");
  out.logDeliveryConfigurations = (i.logDeliveryConfigurations !== undefined ? i.logDeliveryConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ClusterLogDeliveryConfiguration(ctx, depth + 1))]));
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.notificationTopicArn = (i.notificationTopicArn !== undefined ? i.notificationTopicArn : h.arn(ctx));
  out.numCacheNodes = (i.numCacheNodes !== undefined ? i.numCacheNodes : 0);
  out.outpostMode = (i.outpostMode !== undefined ? i.outpostMode : "");
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredAvailabilityZones = (i.preferredAvailabilityZones !== undefined ? i.preferredAvailabilityZones : (depth > 4 ? [] : [""]));
  out.preferredOutpostArn = (i.preferredOutpostArn !== undefined ? i.preferredOutpostArn : h.arn(ctx));
  out.replicationGroupId = (i.replicationGroupId !== undefined ? i.replicationGroupId : h.id(ctx, "replicationGroupId"));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.snapshotArns = (i.snapshotArns !== undefined ? i.snapshotArns : "");
  out.snapshotName = (i.snapshotName !== undefined ? i.snapshotName : "");
  out.snapshotRetentionLimit = (i.snapshotRetentionLimit !== undefined ? i.snapshotRetentionLimit : 0);
  out.snapshotWindow = (i.snapshotWindow !== undefined ? i.snapshotWindow : "");
  out.subnetGroupName = (i.subnetGroupName !== undefined ? i.subnetGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitEncryptionEnabled = (i.transitEncryptionEnabled !== undefined ? i.transitEncryptionEnabled : false);
  return out;
}

// aws:elasticache/globalReplicationGroup:GlobalReplicationGroup
export function GlobalReplicationGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.atRestEncryptionEnabled = false;
  out.authTokenEnabled = false;
  out.automaticFailoverEnabled = (i.automaticFailoverEnabled !== undefined ? i.automaticFailoverEnabled : false);
  out.cacheNodeType = (i.cacheNodeType !== undefined ? i.cacheNodeType : "");
  out.clusterEnabled = false;
  out.engine = "";
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.globalNodeGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_GlobalReplicationGroupGlobalNodeGroup(ctx, depth + 1))]);
  out.globalReplicationGroupDescription = (i.globalReplicationGroupDescription !== undefined ? i.globalReplicationGroupDescription : "");
  out.globalReplicationGroupId = h.id(ctx, "globalReplicationGroupId");
  out.globalReplicationGroupIdSuffix = (i.globalReplicationGroupIdSuffix !== undefined ? i.globalReplicationGroupIdSuffix : "");
  out.numNodeGroups = (i.numNodeGroups !== undefined ? i.numNodeGroups : 0);
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.primaryReplicationGroupId = (i.primaryReplicationGroupId !== undefined ? i.primaryReplicationGroupId : h.id(ctx, "primaryReplicationGroupId"));
  out.transitEncryptionEnabled = false;
  return out;
}

// aws:elasticache/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:elasticache/replicationGroup:ReplicationGroup
export function ReplicationGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.atRestEncryptionEnabled = (i.atRestEncryptionEnabled !== undefined ? i.atRestEncryptionEnabled : false);
  out.authToken = (i.authToken !== undefined ? i.authToken : "");
  out.authTokenUpdateStrategy = (i.authTokenUpdateStrategy !== undefined ? i.authTokenUpdateStrategy : "");
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.automaticFailoverEnabled = (i.automaticFailoverEnabled !== undefined ? i.automaticFailoverEnabled : false);
  out.clusterEnabled = false;
  out.clusterMode = (i.clusterMode !== undefined ? i.clusterMode : "");
  out.configurationEndpointAddress = "";
  out.dataTieringEnabled = (i.dataTieringEnabled !== undefined ? i.dataTieringEnabled : false);
  out.description = (i.description !== undefined ? i.description : "");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.globalReplicationGroupId = (i.globalReplicationGroupId !== undefined ? i.globalReplicationGroupId : h.id(ctx, "globalReplicationGroupId"));
  out.ipDiscovery = (i.ipDiscovery !== undefined ? i.ipDiscovery : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logDeliveryConfigurations = (i.logDeliveryConfigurations !== undefined ? i.logDeliveryConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ReplicationGroupLogDeliveryConfiguration(ctx, depth + 1))]));
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.memberClusters = (depth > 4 ? [] : [""]);
  out.multiAzEnabled = (i.multiAzEnabled !== undefined ? i.multiAzEnabled : false);
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.notificationTopicArn = (i.notificationTopicArn !== undefined ? i.notificationTopicArn : h.arn(ctx));
  out.numCacheClusters = (i.numCacheClusters !== undefined ? i.numCacheClusters : 0);
  out.numNodeGroups = (i.numNodeGroups !== undefined ? i.numNodeGroups : 0);
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredCacheClusterAzs = (i.preferredCacheClusterAzs !== undefined ? i.preferredCacheClusterAzs : (depth > 4 ? [] : [""]));
  out.primaryEndpointAddress = "";
  out.readerEndpointAddress = "";
  out.replicasPerNodeGroup = (i.replicasPerNodeGroup !== undefined ? i.replicasPerNodeGroup : 0);
  out.replicationGroupId = (i.replicationGroupId !== undefined ? i.replicationGroupId : h.id(ctx, "replicationGroupId"));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.securityGroupNames = (i.securityGroupNames !== undefined ? i.securityGroupNames : (depth > 4 ? [] : [""]));
  out.snapshotArns = (i.snapshotArns !== undefined ? i.snapshotArns : (depth > 4 ? [] : [""]));
  out.snapshotName = (i.snapshotName !== undefined ? i.snapshotName : "");
  out.snapshotRetentionLimit = (i.snapshotRetentionLimit !== undefined ? i.snapshotRetentionLimit : 0);
  out.snapshotWindow = (i.snapshotWindow !== undefined ? i.snapshotWindow : "");
  out.subnetGroupName = (i.subnetGroupName !== undefined ? i.subnetGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitEncryptionEnabled = (i.transitEncryptionEnabled !== undefined ? i.transitEncryptionEnabled : false);
  out.transitEncryptionMode = (i.transitEncryptionMode !== undefined ? i.transitEncryptionMode : "");
  out.userGroupIds = (i.userGroupIds !== undefined ? i.userGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:elasticache/reservedCacheNode:ReservedCacheNode
export function ReservedCacheNode(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cacheNodeCount = (i.cacheNodeCount !== undefined ? i.cacheNodeCount : 1);
  out.cacheNodeType = "";
  out.duration = "";
  out.fixedPrice = 0;
  out.offeringType = "";
  out.productDescription = "";
  out.recurringCharges = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ReservedCacheNodeRecurringCharge(ctx, depth + 1))]);
  out.reservedCacheNodesOfferingId = (i.reservedCacheNodesOfferingId !== undefined ? i.reservedCacheNodesOfferingId : h.id(ctx, "reservedCacheNodesOfferingId"));
  out.startTime = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_elasticache.elasticache_ReservedCacheNodeTimeouts(ctx, depth + 1)));
  out.usagePrice = 0;
  return out;
}

// aws:elasticache/serverlessCache:ServerlessCache
export function ServerlessCache(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cacheUsageLimits = (i.cacheUsageLimits !== undefined ? i.cacheUsageLimits : (depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheCacheUsageLimits(ctx, depth + 1)));
  out.createTime = h.timestamp();
  out.dailySnapshotTime = (i.dailySnapshotTime !== undefined ? i.dailySnapshotTime : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheEndpoint(ctx, depth + 1))]);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.fullEngineVersion = "";
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.majorEngineVersion = (i.majorEngineVersion !== undefined ? i.majorEngineVersion : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.readerEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheReaderEndpoint(ctx, depth + 1))]);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.snapshotArnsToRestores = (i.snapshotArnsToRestores !== undefined ? i.snapshotArnsToRestores : (depth > 4 ? [] : [""]));
  out.snapshotRetentionLimit = (i.snapshotRetentionLimit !== undefined ? i.snapshotRetentionLimit : 0);
  out.status = "active";
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_elasticache.elasticache_ServerlessCacheTimeouts(ctx, depth + 1)));
  out.userGroupId = (i.userGroupId !== undefined ? i.userGroupId : h.id(ctx, "userGroupId"));
  return out;
}

// aws:elasticache/subnetGroup:SubnetGroup
export function SubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:elasticache/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessString = (i.accessString !== undefined ? i.accessString : "");
  out.arn = h.arn(ctx);
  out.authenticationMode = (i.authenticationMode !== undefined ? i.authenticationMode : (depth > 4 ? {} : T_elasticache.elasticache_UserAuthenticationMode(ctx, depth + 1)));
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.noPasswordRequired = (i.noPasswordRequired !== undefined ? i.noPasswordRequired : false);
  out.passwords = (i.passwords !== undefined ? i.passwords : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userId = (i.userId !== undefined ? i.userId : h.id(ctx, "userId"));
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:elasticache/userGroup:UserGroup
export function UserGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userGroupId = (i.userGroupId !== undefined ? i.userGroupId : h.id(ctx, "userGroupId"));
  out.userIds = (i.userIds !== undefined ? i.userIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:elasticache/userGroupAssociation:UserGroupAssociation
export function UserGroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.userGroupId = (i.userGroupId !== undefined ? i.userGroupId : h.id(ctx, "userGroupId"));
  out.userId = (i.userId !== undefined ? i.userId : h.id(ctx, "userId"));
  return out;
}

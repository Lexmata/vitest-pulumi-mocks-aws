// GENERATED FILE — do not edit.
// Service: elasticache   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticache from "../types/elasticache.js";

// aws:elasticache/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.cacheNodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_getClusterCacheNode(ctx, depth + 1))]);
  out.clusterAddress = "";
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.configurationEndpoint = h.endpoint(ctx, "configurationEndpoint");
  out.engine = "";
  out.engineVersion = "";
  out.id = h.id(ctx, "id");
  out.ipDiscovery = "";
  out.logDeliveryConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_getClusterLogDeliveryConfiguration(ctx, depth + 1))]);
  out.maintenanceWindow = "";
  out.networkType = "";
  out.nodeType = "";
  out.notificationTopicArn = h.arn(ctx);
  out.numCacheNodes = 0;
  out.parameterGroupName = "";
  out.port = 443;
  out.preferredOutpostArn = h.arn(ctx);
  out.replicationGroupId = h.id(ctx, "replicationGroupId");
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.snapshotRetentionLimit = 0;
  out.snapshotWindow = "";
  out.subnetGroupName = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:elasticache/getReplicationGroup:getReplicationGroup
export function getReplicationGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authTokenEnabled = false;
  out.automaticFailoverEnabled = false;
  out.clusterMode = "";
  out.configurationEndpointAddress = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.logDeliveryConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_getReplicationGroupLogDeliveryConfiguration(ctx, depth + 1))]);
  out.memberClusters = (depth > 4 ? [] : [""]);
  out.multiAzEnabled = false;
  out.nodeType = "";
  out.numCacheClusters = 0;
  out.numNodeGroups = 0;
  out.port = 443;
  out.primaryEndpointAddress = "";
  out.readerEndpointAddress = "";
  out.replicasPerNodeGroup = 0;
  out.replicationGroupId = (i.replicationGroupId !== undefined ? i.replicationGroupId : h.id(ctx, "replicationGroupId"));
  out.snapshotRetentionLimit = 0;
  out.snapshotWindow = "";
  return out;
}

// aws:elasticache/getReservedCacheNodeOffering:getReservedCacheNodeOffering
export function getReservedCacheNodeOffering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheNodeType = (i.cacheNodeType !== undefined ? i.cacheNodeType : "");
  out.duration = (i.duration !== undefined ? i.duration : "");
  out.fixedPrice = 0;
  out.id = h.id(ctx, "id");
  out.offeringId = h.id(ctx, "offeringId");
  out.offeringType = (i.offeringType !== undefined ? i.offeringType : "");
  out.productDescription = (i.productDescription !== undefined ? i.productDescription : "");
  return out;
}

// aws:elasticache/getServerlessCache:getServerlessCache
export function getServerlessCache(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cacheUsageLimits = (depth > 4 ? {} : T_elasticache.elasticache_getServerlessCacheCacheUsageLimits(ctx, depth + 1));
  out.createTime = h.timestamp();
  out.dailySnapshotTime = "";
  out.description = "";
  out.endpoint = (depth > 4 ? {} : T_elasticache.elasticache_getServerlessCacheEndpoint(ctx, depth + 1));
  out.engine = "";
  out.fullEngineVersion = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.majorEngineVersion = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.readerEndpoint = (depth > 4 ? {} : T_elasticache.elasticache_getServerlessCacheReaderEndpoint(ctx, depth + 1));
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.snapshotRetentionLimit = 0;
  out.status = "active";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.userGroupId = h.id(ctx, "userGroupId");
  return out;
}

// aws:elasticache/getSubnetGroup:getSubnetGroup
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

// aws:elasticache/getUser:getUser
export function getUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessString = (i.accessString !== undefined ? i.accessString : "");
  out.authenticationModes = (i.authenticationModes !== undefined ? i.authenticationModes : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticache.elasticache_getUserAuthenticationMode(ctx, depth + 1))]));
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.id = h.id(ctx, "id");
  out.noPasswordRequired = (i.noPasswordRequired !== undefined ? i.noPasswordRequired : false);
  out.passwords = (i.passwords !== undefined ? i.passwords : (depth > 4 ? [] : [""]));
  out.userId = (i.userId !== undefined ? i.userId : h.id(ctx, "userId"));
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

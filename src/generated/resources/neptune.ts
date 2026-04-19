// GENERATED FILE — do not edit.
// Service: neptune   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_neptune from "../types/neptune.js";

// aws:neptune/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowMajorVersionUpgrade = (i.allowMajorVersionUpgrade !== undefined ? i.allowMajorVersionUpgrade : true);
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.backupRetentionPeriod = (i.backupRetentionPeriod !== undefined ? i.backupRetentionPeriod : 0);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.clusterIdentifierPrefix = (i.clusterIdentifierPrefix !== undefined ? i.clusterIdentifierPrefix : "");
  out.clusterMembers = (depth > 4 ? [] : [""]);
  out.clusterResourceId = h.id(ctx, "clusterResourceId");
  out.copyTagsToSnapshot = (i.copyTagsToSnapshot !== undefined ? i.copyTagsToSnapshot : false);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.enableCloudwatchLogsExports = (i.enableCloudwatchLogsExports !== undefined ? i.enableCloudwatchLogsExports : (depth > 4 ? [] : [""]));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.hostedZoneId = "Z0000000000000000000";
  out.iamDatabaseAuthenticationEnabled = (i.iamDatabaseAuthenticationEnabled !== undefined ? i.iamDatabaseAuthenticationEnabled : false);
  out.iamRoles = (i.iamRoles !== undefined ? i.iamRoles : (depth > 4 ? [] : [""]));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.neptuneClusterParameterGroupName = (i.neptuneClusterParameterGroupName !== undefined ? i.neptuneClusterParameterGroupName : "");
  out.neptuneInstanceParameterGroupName = (i.neptuneInstanceParameterGroupName !== undefined ? i.neptuneInstanceParameterGroupName : "");
  out.neptuneSubnetGroupName = (i.neptuneSubnetGroupName !== undefined ? i.neptuneSubnetGroupName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.readerEndpoint = h.endpoint(ctx, "readerEndpoint");
  out.replicationSourceIdentifier = (i.replicationSourceIdentifier !== undefined ? i.replicationSourceIdentifier : "");
  out.serverlessV2ScalingConfiguration = (i.serverlessV2ScalingConfiguration !== undefined ? i.serverlessV2ScalingConfiguration : (depth > 4 ? {} : T_neptune.neptune_ClusterServerlessV2ScalingConfiguration(ctx, depth + 1)));
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:neptune/clusterEndpoint:ClusterEndpoint
export function ClusterEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterEndpointIdentifier = (i.clusterEndpointIdentifier !== undefined ? i.clusterEndpointIdentifier : "");
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.excludedMembers = (i.excludedMembers !== undefined ? i.excludedMembers : (depth > 4 ? [] : [""]));
  out.staticMembers = (i.staticMembers !== undefined ? i.staticMembers : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:neptune/clusterInstance:ClusterInstance
export function ClusterInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.dbiResourceId = h.id(ctx, "dbiResourceId");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.identifierPrefix = (i.identifierPrefix !== undefined ? i.identifierPrefix : "");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.kmsKeyArn = h.arn(ctx);
  out.neptuneParameterGroupName = (i.neptuneParameterGroupName !== undefined ? i.neptuneParameterGroupName : "");
  out.neptuneSubnetGroupName = (i.neptuneSubnetGroupName !== undefined ? i.neptuneSubnetGroupName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.promotionTier = (i.promotionTier !== undefined ? i.promotionTier : 0);
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.storageEncrypted = false;
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.writer = false;
  return out;
}

// aws:neptune/clusterParameterGroup:ClusterParameterGroup
export function ClusterParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_neptune.neptune_ClusterParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:neptune/clusterSnapshot:ClusterSnapshot
export function ClusterSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = 0;
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.dbClusterIdentifier = (i.dbClusterIdentifier !== undefined ? i.dbClusterIdentifier : "");
  out.dbClusterSnapshotArn = h.arn(ctx);
  out.dbClusterSnapshotIdentifier = (i.dbClusterSnapshotIdentifier !== undefined ? i.dbClusterSnapshotIdentifier : "");
  out.engine = "";
  out.engineVersion = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.licenseModel = "";
  out.port = 443;
  out.snapshotType = "";
  out.sourceDbClusterSnapshotArn = h.arn(ctx);
  out.status = "active";
  out.storageEncrypted = false;
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:neptune/eventSubscription:EventSubscription
export function EventSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.customerAwsId = h.id(ctx, "customerAwsId");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.eventCategories = (i.eventCategories !== undefined ? i.eventCategories : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  out.sourceIds = (i.sourceIds !== undefined ? i.sourceIds : (depth > 4 ? [] : [""]));
  out.sourceType = (i.sourceType !== undefined ? i.sourceType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:neptune/globalCluster:GlobalCluster
export function GlobalCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.globalClusterMembers = (depth > 4 ? [] : [(depth > 4 ? {} : T_neptune.neptune_GlobalClusterGlobalClusterMember(ctx, depth + 1))]);
  out.globalClusterResourceId = h.id(ctx, "globalClusterResourceId");
  out.sourceDbClusterIdentifier = (i.sourceDbClusterIdentifier !== undefined ? i.sourceDbClusterIdentifier : "");
  out.status = "active";
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  return out;
}

// aws:neptune/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_neptune.neptune_ParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:neptune/subnetGroup:SubnetGroup
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
  return out;
}

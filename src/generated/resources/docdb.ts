// GENERATED FILE — do not edit.
// Service: docdb   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_docdb from "../types/docdb.js";

// aws:docdb/cluster:Cluster
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
  out.clusterMembers = (i.clusterMembers !== undefined ? i.clusterMembers : (depth > 4 ? [] : [""]));
  out.clusterResourceId = h.id(ctx, "clusterResourceId");
  out.dbClusterParameterGroupName = (i.dbClusterParameterGroupName !== undefined ? i.dbClusterParameterGroupName : "");
  out.dbSubnetGroupName = (i.dbSubnetGroupName !== undefined ? i.dbSubnetGroupName : "");
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.enabledCloudwatchLogsExports = (i.enabledCloudwatchLogsExports !== undefined ? i.enabledCloudwatchLogsExports : (depth > 4 ? [] : [""]));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.hostedZoneId = "Z0000000000000000000";
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.manageMasterUserPassword = (i.manageMasterUserPassword !== undefined ? i.manageMasterUserPassword : false);
  out.masterPassword = (i.masterPassword !== undefined ? i.masterPassword : "");
  out.masterUserSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_docdb.docdb_ClusterMasterUserSecret(ctx, depth + 1))]);
  out.masterUsername = (i.masterUsername !== undefined ? i.masterUsername : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.readerEndpoint = h.endpoint(ctx, "readerEndpoint");
  out.restoreToPointInTime = (i.restoreToPointInTime !== undefined ? i.restoreToPointInTime : (depth > 4 ? {} : T_docdb.docdb_ClusterRestoreToPointInTime(ctx, depth + 1)));
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:docdb/clusterInstance:ClusterInstance
export function ClusterInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.caCertIdentifier = (i.caCertIdentifier !== undefined ? i.caCertIdentifier : "");
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.copyTagsToSnapshot = (i.copyTagsToSnapshot !== undefined ? i.copyTagsToSnapshot : false);
  out.dbSubnetGroupName = "";
  out.dbiResourceId = h.id(ctx, "dbiResourceId");
  out.enablePerformanceInsights = (i.enablePerformanceInsights !== undefined ? i.enablePerformanceInsights : true);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = "";
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.identifierPrefix = (i.identifierPrefix !== undefined ? i.identifierPrefix : "");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.performanceInsightsKmsKeyId = (i.performanceInsightsKmsKeyId !== undefined ? i.performanceInsightsKmsKeyId : h.id(ctx, "performanceInsightsKmsKeyId"));
  out.port = 443;
  out.preferredBackupWindow = "";
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.promotionTier = (i.promotionTier !== undefined ? i.promotionTier : 0);
  out.publiclyAccessible = false;
  out.storageEncrypted = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.writer = false;
  return out;
}

// aws:docdb/clusterParameterGroup:ClusterParameterGroup
export function ClusterParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_docdb.docdb_ClusterParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:docdb/clusterSnapshot:ClusterSnapshot
export function ClusterSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.dbClusterIdentifier = (i.dbClusterIdentifier !== undefined ? i.dbClusterIdentifier : "");
  out.dbClusterSnapshotArn = h.arn(ctx);
  out.dbClusterSnapshotIdentifier = (i.dbClusterSnapshotIdentifier !== undefined ? i.dbClusterSnapshotIdentifier : "");
  out.engine = "";
  out.engineVersion = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.port = 443;
  out.snapshotType = "";
  out.sourceDbClusterSnapshotArn = h.arn(ctx);
  out.status = "active";
  out.storageEncrypted = false;
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:docdb/elasticCluster:ElasticCluster
export function ElasticCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminUserName = (i.adminUserName !== undefined ? i.adminUserName : "");
  out.adminUserPassword = (i.adminUserPassword !== undefined ? i.adminUserPassword : "");
  out.arn = h.arn(ctx);
  out.authType = (i.authType !== undefined ? i.authType : "");
  out.backupRetentionPeriod = (i.backupRetentionPeriod !== undefined ? i.backupRetentionPeriod : 0);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.shardCapacity = (i.shardCapacity !== undefined ? i.shardCapacity : 0);
  out.shardCount = (i.shardCount !== undefined ? i.shardCount : 1);
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_docdb.docdb_ElasticClusterTimeouts(ctx, depth + 1)));
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:docdb/eventSubscription:EventSubscription
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

// aws:docdb/globalCluster:GlobalCluster
export function GlobalCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.globalClusterMembers = (depth > 4 ? [] : [(depth > 4 ? {} : T_docdb.docdb_GlobalClusterGlobalClusterMember(ctx, depth + 1))]);
  out.globalClusterResourceId = h.id(ctx, "globalClusterResourceId");
  out.sourceDbClusterIdentifier = (i.sourceDbClusterIdentifier !== undefined ? i.sourceDbClusterIdentifier : "");
  out.status = "active";
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  return out;
}

// aws:docdb/subnetGroup:SubnetGroup
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

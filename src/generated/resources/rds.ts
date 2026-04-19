// GENERATED FILE — do not edit.
// Service: rds   (29 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rds from "../types/rds.js";

// aws:rds/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateIdentifier = (i.certificateIdentifier !== undefined ? i.certificateIdentifier : "");
  return out;
}

// aws:rds/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = (i.allocatedStorage !== undefined ? i.allocatedStorage : 0);
  out.allowMajorVersionUpgrade = (i.allowMajorVersionUpgrade !== undefined ? i.allowMajorVersionUpgrade : true);
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.backtrackWindow = (i.backtrackWindow !== undefined ? i.backtrackWindow : 0);
  out.backupRetentionPeriod = (i.backupRetentionPeriod !== undefined ? i.backupRetentionPeriod : 0);
  out.caCertificateIdentifier = (i.caCertificateIdentifier !== undefined ? i.caCertificateIdentifier : "");
  out.caCertificateValidTill = "";
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.clusterIdentifierPrefix = (i.clusterIdentifierPrefix !== undefined ? i.clusterIdentifierPrefix : "");
  out.clusterMembers = (i.clusterMembers !== undefined ? i.clusterMembers : (depth > 4 ? [] : [""]));
  out.clusterResourceId = h.id(ctx, "clusterResourceId");
  out.clusterScalabilityType = (i.clusterScalabilityType !== undefined ? i.clusterScalabilityType : "");
  out.copyTagsToSnapshot = (i.copyTagsToSnapshot !== undefined ? i.copyTagsToSnapshot : false);
  out.databaseInsightsMode = (i.databaseInsightsMode !== undefined ? i.databaseInsightsMode : "");
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.dbClusterInstanceClass = (i.dbClusterInstanceClass !== undefined ? i.dbClusterInstanceClass : "");
  out.dbClusterParameterGroupName = (i.dbClusterParameterGroupName !== undefined ? i.dbClusterParameterGroupName : "");
  out.dbInstanceParameterGroupName = (i.dbInstanceParameterGroupName !== undefined ? i.dbInstanceParameterGroupName : "");
  out.dbSubnetGroupName = (i.dbSubnetGroupName !== undefined ? i.dbSubnetGroupName : "");
  out.dbSystemId = (i.dbSystemId !== undefined ? i.dbSystemId : h.id(ctx, "dbSystemId"));
  out.deleteAutomatedBackups = (i.deleteAutomatedBackups !== undefined ? i.deleteAutomatedBackups : false);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainIamRoleName = (i.domainIamRoleName !== undefined ? i.domainIamRoleName : "");
  out.enableGlobalWriteForwarding = (i.enableGlobalWriteForwarding !== undefined ? i.enableGlobalWriteForwarding : true);
  out.enableHttpEndpoint = (i.enableHttpEndpoint !== undefined ? i.enableHttpEndpoint : true);
  out.enableLocalWriteForwarding = (i.enableLocalWriteForwarding !== undefined ? i.enableLocalWriteForwarding : true);
  out.enabledCloudwatchLogsExports = (i.enabledCloudwatchLogsExports !== undefined ? i.enabledCloudwatchLogsExports : (depth > 4 ? [] : [""]));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineLifecycleSupport = (i.engineLifecycleSupport !== undefined ? i.engineLifecycleSupport : "");
  out.engineMode = (i.engineMode !== undefined ? i.engineMode : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.hostedZoneId = "Z0000000000000000000";
  out.iamDatabaseAuthenticationEnabled = (i.iamDatabaseAuthenticationEnabled !== undefined ? i.iamDatabaseAuthenticationEnabled : false);
  out.iamRoles = (i.iamRoles !== undefined ? i.iamRoles : (depth > 4 ? [] : [""]));
  out.iops = (i.iops !== undefined ? i.iops : 0);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.manageMasterUserPassword = (i.manageMasterUserPassword !== undefined ? i.manageMasterUserPassword : false);
  out.masterPassword = (i.masterPassword !== undefined ? i.masterPassword : "");
  out.masterUserSecretKmsKeyId = (i.masterUserSecretKmsKeyId !== undefined ? i.masterUserSecretKmsKeyId : h.id(ctx, "masterUserSecretKmsKeyId"));
  out.masterUserSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_ClusterMasterUserSecret(ctx, depth + 1))]);
  out.masterUsername = (i.masterUsername !== undefined ? i.masterUsername : "");
  out.monitoringInterval = (i.monitoringInterval !== undefined ? i.monitoringInterval : 0);
  out.monitoringRoleArn = (i.monitoringRoleArn !== undefined ? i.monitoringRoleArn : h.arn(ctx));
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.performanceInsightsEnabled = (i.performanceInsightsEnabled !== undefined ? i.performanceInsightsEnabled : false);
  out.performanceInsightsKmsKeyId = (i.performanceInsightsKmsKeyId !== undefined ? i.performanceInsightsKmsKeyId : h.id(ctx, "performanceInsightsKmsKeyId"));
  out.performanceInsightsRetentionPeriod = (i.performanceInsightsRetentionPeriod !== undefined ? i.performanceInsightsRetentionPeriod : 0);
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.readerEndpoint = h.endpoint(ctx, "readerEndpoint");
  out.replicationSourceIdentifier = (i.replicationSourceIdentifier !== undefined ? i.replicationSourceIdentifier : "");
  out.restoreToPointInTime = (i.restoreToPointInTime !== undefined ? i.restoreToPointInTime : (depth > 4 ? {} : T_rds.rds_ClusterRestoreToPointInTime(ctx, depth + 1)));
  out.s3Import = (i.s3Import !== undefined ? i.s3Import : (depth > 4 ? {} : T_rds.rds_ClusterS3Import(ctx, depth + 1)));
  out.scalingConfiguration = (i.scalingConfiguration !== undefined ? i.scalingConfiguration : (depth > 4 ? {} : T_rds.rds_ClusterScalingConfiguration(ctx, depth + 1)));
  out.serverlessv2ScalingConfiguration = (i.serverlessv2ScalingConfiguration !== undefined ? i.serverlessv2ScalingConfiguration : (depth > 4 ? {} : T_rds.rds_ClusterServerlessv2ScalingConfiguration(ctx, depth + 1)));
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.sourceRegion = (i.sourceRegion !== undefined ? i.sourceRegion : "");
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:rds/clusterActivityStream:ClusterActivityStream
export function ClusterActivityStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engineNativeAuditFieldsIncluded = (i.engineNativeAuditFieldsIncluded !== undefined ? i.engineNativeAuditFieldsIncluded : false);
  out.kinesisStreamName = "";
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.mode = (i.mode !== undefined ? i.mode : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:rds/clusterEndpoint:ClusterEndpoint
export function ClusterEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterEndpointIdentifier = (i.clusterEndpointIdentifier !== undefined ? i.clusterEndpointIdentifier : "");
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.customEndpointType = (i.customEndpointType !== undefined ? i.customEndpointType : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.excludedMembers = (i.excludedMembers !== undefined ? i.excludedMembers : (depth > 4 ? [] : [""]));
  out.staticMembers = (i.staticMembers !== undefined ? i.staticMembers : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/clusterInstance:ClusterInstance
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
  out.customIamInstanceProfile = (i.customIamInstanceProfile !== undefined ? i.customIamInstanceProfile : "");
  out.dbParameterGroupName = (i.dbParameterGroupName !== undefined ? i.dbParameterGroupName : "");
  out.dbSubnetGroupName = (i.dbSubnetGroupName !== undefined ? i.dbSubnetGroupName : "");
  out.dbiResourceId = h.id(ctx, "dbiResourceId");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : undefined);
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.identifierPrefix = (i.identifierPrefix !== undefined ? i.identifierPrefix : "");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.monitoringInterval = (i.monitoringInterval !== undefined ? i.monitoringInterval : 0);
  out.monitoringRoleArn = (i.monitoringRoleArn !== undefined ? i.monitoringRoleArn : h.arn(ctx));
  out.networkType = "";
  out.performanceInsightsEnabled = (i.performanceInsightsEnabled !== undefined ? i.performanceInsightsEnabled : false);
  out.performanceInsightsKmsKeyId = (i.performanceInsightsKmsKeyId !== undefined ? i.performanceInsightsKmsKeyId : h.id(ctx, "performanceInsightsKmsKeyId"));
  out.performanceInsightsRetentionPeriod = (i.performanceInsightsRetentionPeriod !== undefined ? i.performanceInsightsRetentionPeriod : 0);
  out.port = 443;
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.promotionTier = (i.promotionTier !== undefined ? i.promotionTier : 0);
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.storageEncrypted = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.writer = false;
  return out;
}

// aws:rds/clusterParameterGroup:ClusterParameterGroup
export function ClusterParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_ClusterParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/clusterRoleAssociation:ClusterRoleAssociation
export function ClusterRoleAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbClusterIdentifier = (i.dbClusterIdentifier !== undefined ? i.dbClusterIdentifier : "");
  out.featureName = (i.featureName !== undefined ? i.featureName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:rds/clusterSnapshot:ClusterSnapshot
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
  out.sharedAccounts = (i.sharedAccounts !== undefined ? i.sharedAccounts : (depth > 4 ? [] : [""]));
  out.snapshotType = "";
  out.sourceDbClusterSnapshotArn = h.arn(ctx);
  out.status = "active";
  out.storageEncrypted = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/clusterSnapshotCopy:ClusterSnapshotCopy
export function ClusterSnapshotCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = 0;
  out.copyTags = (i.copyTags !== undefined ? i.copyTags : false);
  out.dbClusterSnapshotArn = h.arn(ctx);
  out.destinationRegion = (i.destinationRegion !== undefined ? i.destinationRegion : "");
  out.engine = "";
  out.engineVersion = "";
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.licenseModel = "";
  out.presignedUrl = (i.presignedUrl !== undefined ? i.presignedUrl : h.endpoint(ctx, "presignedUrl"));
  out.sharedAccounts = (i.sharedAccounts !== undefined ? i.sharedAccounts : (depth > 4 ? [] : [""]));
  out.snapshotType = "";
  out.sourceDbClusterSnapshotIdentifier = (i.sourceDbClusterSnapshotIdentifier !== undefined ? i.sourceDbClusterSnapshotIdentifier : "");
  out.storageEncrypted = false;
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetDbClusterSnapshotIdentifier = (i.targetDbClusterSnapshotIdentifier !== undefined ? i.targetDbClusterSnapshotIdentifier : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rds.rds_ClusterSnapshotCopyTimeouts(ctx, depth + 1)));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/customDbEngineVersion:CustomDbEngineVersion
export function CustomDbEngineVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createTime = h.timestamp();
  out.databaseInstallationFilesS3BucketName = (i.databaseInstallationFilesS3BucketName !== undefined ? i.databaseInstallationFilesS3BucketName : "");
  out.databaseInstallationFilesS3Prefix = (i.databaseInstallationFilesS3Prefix !== undefined ? i.databaseInstallationFilesS3Prefix : "");
  out.dbParameterGroupFamily = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.filename = (i.filename !== undefined ? i.filename : "");
  out.imageId = h.id(ctx, "imageId");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.majorEngineVersion = "";
  out.manifest = (i.manifest !== undefined ? i.manifest : "");
  out.manifestComputed = "";
  out.manifestHash = (i.manifestHash !== undefined ? i.manifestHash : "");
  out.sourceImageId = (i.sourceImageId !== undefined ? i.sourceImageId : h.id(ctx, "sourceImageId"));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/eventSubscription:EventSubscription
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
  out.snsTopic = (i.snsTopic !== undefined ? i.snsTopic : "");
  out.sourceIds = (i.sourceIds !== undefined ? i.sourceIds : (depth > 4 ? [] : [""]));
  out.sourceType = (i.sourceType !== undefined ? i.sourceType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/exportTask:ExportTask
export function ExportTask(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exportOnlies = (i.exportOnlies !== undefined ? i.exportOnlies : (depth > 4 ? [] : [""]));
  out.exportTaskIdentifier = (i.exportTaskIdentifier !== undefined ? i.exportTaskIdentifier : "");
  out.failureCause = "";
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.percentProgress = 0;
  out.s3BucketName = (i.s3BucketName !== undefined ? i.s3BucketName : "");
  out.s3Prefix = (i.s3Prefix !== undefined ? i.s3Prefix : "");
  out.snapshotTime = "";
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.sourceType = "";
  out.status = "active";
  out.taskEndTime = "";
  out.taskStartTime = "";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rds.rds_ExportTaskTimeouts(ctx, depth + 1)));
  out.warningMessage = "";
  return out;
}

// aws:rds/globalCluster:GlobalCluster
export function GlobalCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineLifecycleSupport = (i.engineLifecycleSupport !== undefined ? i.engineLifecycleSupport : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.globalClusterIdentifier = (i.globalClusterIdentifier !== undefined ? i.globalClusterIdentifier : "");
  out.globalClusterMembers = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_GlobalClusterGlobalClusterMember(ctx, depth + 1))]);
  out.globalClusterResourceId = h.id(ctx, "globalClusterResourceId");
  out.sourceDbClusterIdentifier = (i.sourceDbClusterIdentifier !== undefined ? i.sourceDbClusterIdentifier : "");
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.allocatedStorage = (i.allocatedStorage !== undefined ? i.allocatedStorage : 0);
  out.allowMajorVersionUpgrade = (i.allowMajorVersionUpgrade !== undefined ? i.allowMajorVersionUpgrade : true);
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.backupRetentionPeriod = (i.backupRetentionPeriod !== undefined ? i.backupRetentionPeriod : 0);
  out.backupTarget = (i.backupTarget !== undefined ? i.backupTarget : "");
  out.backupWindow = (i.backupWindow !== undefined ? i.backupWindow : "");
  out.blueGreenUpdate = (i.blueGreenUpdate !== undefined ? i.blueGreenUpdate : (depth > 4 ? {} : T_rds.rds_InstanceBlueGreenUpdate(ctx, depth + 1)));
  out.caCertIdentifier = (i.caCertIdentifier !== undefined ? i.caCertIdentifier : "");
  out.characterSetName = (i.characterSetName !== undefined ? i.characterSetName : "");
  out.copyTagsToSnapshot = (i.copyTagsToSnapshot !== undefined ? i.copyTagsToSnapshot : false);
  out.customIamInstanceProfile = (i.customIamInstanceProfile !== undefined ? i.customIamInstanceProfile : "");
  out.customerOwnedIpEnabled = (i.customerOwnedIpEnabled !== undefined ? i.customerOwnedIpEnabled : false);
  out.databaseInsightsMode = (i.databaseInsightsMode !== undefined ? i.databaseInsightsMode : "");
  out.dbName = (i.dbName !== undefined ? i.dbName : "");
  out.dbSubnetGroupName = (i.dbSubnetGroupName !== undefined ? i.dbSubnetGroupName : "");
  out.dedicatedLogVolume = (i.dedicatedLogVolume !== undefined ? i.dedicatedLogVolume : false);
  out.deleteAutomatedBackups = (i.deleteAutomatedBackups !== undefined ? i.deleteAutomatedBackups : false);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainAuthSecretArn = (i.domainAuthSecretArn !== undefined ? i.domainAuthSecretArn : h.arn(ctx));
  out.domainDnsIps = (i.domainDnsIps !== undefined ? i.domainDnsIps : (depth > 4 ? [] : [""]));
  out.domainFqdn = (i.domainFqdn !== undefined ? i.domainFqdn : "");
  out.domainIamRoleName = (i.domainIamRoleName !== undefined ? i.domainIamRoleName : "");
  out.domainOu = (i.domainOu !== undefined ? i.domainOu : "");
  out.enabledCloudwatchLogsExports = (i.enabledCloudwatchLogsExports !== undefined ? i.enabledCloudwatchLogsExports : (depth > 4 ? [] : [""]));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineLifecycleSupport = (i.engineLifecycleSupport !== undefined ? i.engineLifecycleSupport : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.engineVersionActual = "";
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.hostedZoneId = "Z0000000000000000000";
  out.iamDatabaseAuthenticationEnabled = (i.iamDatabaseAuthenticationEnabled !== undefined ? i.iamDatabaseAuthenticationEnabled : false);
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.identifierPrefix = (i.identifierPrefix !== undefined ? i.identifierPrefix : "");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.iops = (i.iops !== undefined ? i.iops : 0);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.latestRestorableTime = "";
  out.licenseModel = (i.licenseModel !== undefined ? i.licenseModel : "");
  out.listenerEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_InstanceListenerEndpoint(ctx, depth + 1))]);
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.manageMasterUserPassword = (i.manageMasterUserPassword !== undefined ? i.manageMasterUserPassword : false);
  out.masterUserSecretKmsKeyId = (i.masterUserSecretKmsKeyId !== undefined ? i.masterUserSecretKmsKeyId : h.id(ctx, "masterUserSecretKmsKeyId"));
  out.masterUserSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_InstanceMasterUserSecret(ctx, depth + 1))]);
  out.maxAllocatedStorage = (i.maxAllocatedStorage !== undefined ? i.maxAllocatedStorage : 0);
  out.monitoringInterval = (i.monitoringInterval !== undefined ? i.monitoringInterval : 0);
  out.monitoringRoleArn = (i.monitoringRoleArn !== undefined ? i.monitoringRoleArn : h.arn(ctx));
  out.multiAz = (i.multiAz !== undefined ? i.multiAz : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ncharCharacterSetName = (i.ncharCharacterSetName !== undefined ? i.ncharCharacterSetName : "");
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.optionGroupName = (i.optionGroupName !== undefined ? i.optionGroupName : "");
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.password = (i.password !== undefined ? i.password : "");
  out.performanceInsightsEnabled = (i.performanceInsightsEnabled !== undefined ? i.performanceInsightsEnabled : false);
  out.performanceInsightsKmsKeyId = (i.performanceInsightsKmsKeyId !== undefined ? i.performanceInsightsKmsKeyId : h.id(ctx, "performanceInsightsKmsKeyId"));
  out.performanceInsightsRetentionPeriod = (i.performanceInsightsRetentionPeriod !== undefined ? i.performanceInsightsRetentionPeriod : 0);
  out.port = (i.port !== undefined ? i.port : 443);
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.replicaMode = (i.replicaMode !== undefined ? i.replicaMode : "");
  out.replicas = (depth > 4 ? [] : [""]);
  out.replicateSourceDb = (i.replicateSourceDb !== undefined ? i.replicateSourceDb : "");
  out.resourceId = h.id(ctx, "resourceId");
  out.restoreToPointInTime = (i.restoreToPointInTime !== undefined ? i.restoreToPointInTime : (depth > 4 ? {} : T_rds.rds_InstanceRestoreToPointInTime(ctx, depth + 1)));
  out.s3Import = (i.s3Import !== undefined ? i.s3Import : (depth > 4 ? {} : T_rds.rds_InstanceS3Import(ctx, depth + 1)));
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.status = "active";
  out.storageEncrypted = (i.storageEncrypted !== undefined ? i.storageEncrypted : false);
  out.storageThroughput = (i.storageThroughput !== undefined ? i.storageThroughput : 0);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timezone = (i.timezone !== undefined ? i.timezone : "");
  out.upgradeStorageConfig = (i.upgradeStorageConfig !== undefined ? i.upgradeStorageConfig : false);
  out.username = (i.username !== undefined ? i.username : "");
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:rds/instanceAutomatedBackupsReplication:InstanceAutomatedBackupsReplication
export function InstanceAutomatedBackupsReplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.preSignedUrl = (i.preSignedUrl !== undefined ? i.preSignedUrl : h.endpoint(ctx, "preSignedUrl"));
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : 0);
  out.sourceDbInstanceArn = (i.sourceDbInstanceArn !== undefined ? i.sourceDbInstanceArn : h.arn(ctx));
  return out;
}

// aws:rds/instanceDesiredState:InstanceDesiredState
export function InstanceDesiredState(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.state = (i.state !== undefined ? i.state : "active");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rds.rds_InstanceDesiredStateTimeouts(ctx, depth + 1)));
  return out;
}

// aws:rds/integration:Integration
export function Integration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.arn = h.arn(ctx);
  out.dataFilter = (i.dataFilter !== undefined ? i.dataFilter : "");
  out.integrationName = (i.integrationName !== undefined ? i.integrationName : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rds.rds_IntegrationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:rds/optionGroup:OptionGroup
export function OptionGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.engineName = (i.engineName !== undefined ? i.engineName : "");
  out.majorEngineVersion = (i.majorEngineVersion !== undefined ? i.majorEngineVersion : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.optionGroupDescription = (i.optionGroupDescription !== undefined ? i.optionGroupDescription : "");
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_OptionGroupOption(ctx, depth + 1))]));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_ParameterGroupParameter(ctx, depth + 1))]));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rds/proxy:Proxy
export function Proxy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.auths = (i.auths !== undefined ? i.auths : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_ProxyAuth(ctx, depth + 1))]));
  out.debugLogging = (i.debugLogging !== undefined ? i.debugLogging : false);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engineFamily = (i.engineFamily !== undefined ? i.engineFamily : "");
  out.idleClientTimeout = (i.idleClientTimeout !== undefined ? i.idleClientTimeout : 30);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.requireTls = (i.requireTls !== undefined ? i.requireTls : false);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.vpcSubnetIds = (i.vpcSubnetIds !== undefined ? i.vpcSubnetIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:rds/proxyDefaultTargetGroup:ProxyDefaultTargetGroup
export function ProxyDefaultTargetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionPoolConfig = (i.connectionPoolConfig !== undefined ? i.connectionPoolConfig : (depth > 4 ? {} : T_rds.rds_ProxyDefaultTargetGroupConnectionPoolConfig(ctx, depth + 1)));
  out.dbProxyName = (i.dbProxyName !== undefined ? i.dbProxyName : "");
  out.name = ctx.name;
  return out;
}

// aws:rds/proxyEndpoint:ProxyEndpoint
export function ProxyEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dbProxyEndpointName = (i.dbProxyEndpointName !== undefined ? i.dbProxyEndpointName : "");
  out.dbProxyName = (i.dbProxyName !== undefined ? i.dbProxyName : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.isDefault = true;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetRole = (i.targetRole !== undefined ? i.targetRole : "");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.vpcSubnetIds = (i.vpcSubnetIds !== undefined ? i.vpcSubnetIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:rds/proxyTarget:ProxyTarget
export function ProxyTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbClusterIdentifier = (i.dbClusterIdentifier !== undefined ? i.dbClusterIdentifier : "");
  out.dbInstanceIdentifier = (i.dbInstanceIdentifier !== undefined ? i.dbInstanceIdentifier : "");
  out.dbProxyName = (i.dbProxyName !== undefined ? i.dbProxyName : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.port = 443;
  out.rdsResourceId = h.id(ctx, "rdsResourceId");
  out.targetArn = h.arn(ctx);
  out.targetGroupName = (i.targetGroupName !== undefined ? i.targetGroupName : "");
  out.trackedClusterId = h.id(ctx, "trackedClusterId");
  out.type = "";
  return out;
}

// aws:rds/reservedInstance:ReservedInstance
export function ReservedInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.currencyCode = "";
  out.dbInstanceClass = "";
  out.duration = 0;
  out.fixedPrice = 0;
  out.instanceCount = (i.instanceCount !== undefined ? i.instanceCount : 1);
  out.leaseId = h.id(ctx, "leaseId");
  out.multiAz = false;
  out.offeringId = (i.offeringId !== undefined ? i.offeringId : h.id(ctx, "offeringId"));
  out.offeringType = "";
  out.productDescription = "";
  out.recurringCharges = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_ReservedInstanceRecurringCharge(ctx, depth + 1))]);
  out.reservationId = (i.reservationId !== undefined ? i.reservationId : h.id(ctx, "reservationId"));
  out.startTime = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.usagePrice = 0;
  return out;
}

// aws:rds/roleAssociation:RoleAssociation
export function RoleAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbInstanceIdentifier = (i.dbInstanceIdentifier !== undefined ? i.dbInstanceIdentifier : "");
  out.featureName = (i.featureName !== undefined ? i.featureName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:rds/shardGroup:ShardGroup
export function ShardGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeRedundancy = (i.computeRedundancy !== undefined ? i.computeRedundancy : 0);
  out.dbClusterIdentifier = (i.dbClusterIdentifier !== undefined ? i.dbClusterIdentifier : "");
  out.dbShardGroupIdentifier = (i.dbShardGroupIdentifier !== undefined ? i.dbShardGroupIdentifier : "");
  out.dbShardGroupResourceId = h.id(ctx, "dbShardGroupResourceId");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.maxAcu = (i.maxAcu !== undefined ? i.maxAcu : 0);
  out.minAcu = (i.minAcu !== undefined ? i.minAcu : 0);
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rds.rds_ShardGroupTimeouts(ctx, depth + 1)));
  return out;
}

// aws:rds/snapshot:Snapshot
export function Snapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = 0;
  out.availabilityZone = ctx.region + "a";
  out.dbInstanceIdentifier = (i.dbInstanceIdentifier !== undefined ? i.dbInstanceIdentifier : "");
  out.dbSnapshotArn = h.arn(ctx);
  out.dbSnapshotIdentifier = (i.dbSnapshotIdentifier !== undefined ? i.dbSnapshotIdentifier : "");
  out.encrypted = false;
  out.engine = "";
  out.engineVersion = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.licenseModel = "";
  out.optionGroupName = "";
  out.port = 443;
  out.sharedAccounts = (i.sharedAccounts !== undefined ? i.sharedAccounts : (depth > 4 ? [] : [""]));
  out.snapshotType = "";
  out.sourceDbSnapshotIdentifier = "";
  out.sourceRegion = "";
  out.status = "active";
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/snapshotCopy:SnapshotCopy
export function SnapshotCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = 0;
  out.availabilityZone = ctx.region + "a";
  out.copyTags = (i.copyTags !== undefined ? i.copyTags : false);
  out.dbSnapshotArn = h.arn(ctx);
  out.destinationRegion = (i.destinationRegion !== undefined ? i.destinationRegion : "");
  out.encrypted = false;
  out.engine = "";
  out.engineVersion = "";
  out.iops = 0;
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.licenseModel = "";
  out.optionGroupName = (i.optionGroupName !== undefined ? i.optionGroupName : "");
  out.port = 443;
  out.presignedUrl = (i.presignedUrl !== undefined ? i.presignedUrl : h.endpoint(ctx, "presignedUrl"));
  out.sharedAccounts = (i.sharedAccounts !== undefined ? i.sharedAccounts : (depth > 4 ? [] : [""]));
  out.snapshotType = "";
  out.sourceDbSnapshotIdentifier = (i.sourceDbSnapshotIdentifier !== undefined ? i.sourceDbSnapshotIdentifier : "");
  out.sourceRegion = "";
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetCustomAvailabilityZone = (i.targetCustomAvailabilityZone !== undefined ? i.targetCustomAvailabilityZone : ctx.region + "a");
  out.targetDbSnapshotIdentifier = (i.targetDbSnapshotIdentifier !== undefined ? i.targetDbSnapshotIdentifier : "");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/subnetGroup:SubnetGroup
export function SubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.supportedNetworkTypes = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

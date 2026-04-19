// GENERATED FILE — do not edit.
// Service: rds   (15 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rds from "../types/rds.js";

// aws:rds/getCertificate:getCertificate
export function getCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateType = "";
  out.customerOverride = false;
  out.customerOverrideValidTill = "";
  out.defaultForNewLaunches = (i.defaultForNewLaunches !== undefined ? i.defaultForNewLaunches : false);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.latestValidTill = (i.latestValidTill !== undefined ? i.latestValidTill : false);
  out.thumbprint = "";
  out.validFrom = "";
  out.validTill = "";
  return out;
}

// aws:rds/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.backtrackWindow = 0;
  out.backupRetentionPeriod = 0;
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.clusterMembers = (depth > 4 ? [] : [""]);
  out.clusterResourceId = h.id(ctx, "clusterResourceId");
  out.clusterScalabilityType = "";
  out.databaseInsightsMode = "";
  out.databaseName = "";
  out.dbClusterParameterGroupName = "";
  out.dbSubnetGroupName = "";
  out.dbSystemId = h.id(ctx, "dbSystemId");
  out.enabledCloudwatchLogsExports = (depth > 4 ? [] : [""]);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = "";
  out.engineMode = "";
  out.engineVersion = "";
  out.finalSnapshotIdentifier = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.iamDatabaseAuthenticationEnabled = false;
  out.iamRoles = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.masterUserSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getClusterMasterUserSecret(ctx, depth + 1))]);
  out.masterUsername = "";
  out.monitoringInterval = 0;
  out.monitoringRoleArn = h.arn(ctx);
  out.networkType = "";
  out.port = 443;
  out.preferredBackupWindow = "";
  out.preferredMaintenanceWindow = "";
  out.readerEndpoint = h.endpoint(ctx, "readerEndpoint");
  out.replicationSourceIdentifier = "";
  out.storageEncrypted = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getClusterParameterGroup:getClusterParameterGroup
export function getClusterParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.family = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:rds/getClusterSnapshot:getClusterSnapshot
export function getClusterSnapshot(ctx: MockCtx): Record<string, any> {
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
  out.id = h.id(ctx, "id");
  out.includePublic = (i.includePublic !== undefined ? i.includePublic : false);
  out.includeShared = (i.includeShared !== undefined ? i.includeShared : false);
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.licenseModel = "";
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.port = 443;
  out.snapshotCreateTime = h.timestamp();
  out.snapshotType = (i.snapshotType !== undefined ? i.snapshotType : "");
  out.sourceDbClusterSnapshotArn = h.arn(ctx);
  out.status = "active";
  out.storageEncrypted = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/getClusters:getClusters
export function getClusters(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArns = (depth > 4 ? [] : [""]);
  out.clusterIdentifiers = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getClustersFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:rds/getEngineVersion:getEngineVersion
export function getEngineVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultCharacterSet = "";
  out.defaultOnly = (i.defaultOnly !== undefined ? i.defaultOnly : false);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineDescription = "";
  out.exportableLogTypes = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getEngineVersionFilter(ctx, depth + 1))]));
  out.hasMajorTarget = (i.hasMajorTarget !== undefined ? i.hasMajorTarget : false);
  out.hasMinorTarget = (i.hasMinorTarget !== undefined ? i.hasMinorTarget : false);
  out.id = h.id(ctx, "id");
  out.includeAll = (i.includeAll !== undefined ? i.includeAll : false);
  out.latest = (i.latest !== undefined ? i.latest : false);
  out.parameterGroupFamily = (i.parameterGroupFamily !== undefined ? i.parameterGroupFamily : "");
  out.preferredMajorTargets = (i.preferredMajorTargets !== undefined ? i.preferredMajorTargets : (depth > 4 ? [] : [""]));
  out.preferredUpgradeTargets = (i.preferredUpgradeTargets !== undefined ? i.preferredUpgradeTargets : (depth > 4 ? [] : [""]));
  out.preferredVersions = (i.preferredVersions !== undefined ? i.preferredVersions : (depth > 4 ? [] : [""]));
  out.status = "active";
  out.supportedCharacterSets = (depth > 4 ? [] : [""]);
  out.supportedFeatureNames = (depth > 4 ? [] : [""]);
  out.supportedModes = (depth > 4 ? [] : [""]);
  out.supportedTimezones = (depth > 4 ? [] : [""]);
  out.supportsCertificateRotationWithoutRestart = false;
  out.supportsGlobalDatabases = false;
  out.supportsIntegrations = false;
  out.supportsLimitlessDatabase = false;
  out.supportsLocalWriteForwarding = false;
  out.supportsLogExportsToCloudwatch = false;
  out.supportsParallelQuery = false;
  out.supportsReadReplica = false;
  out.validMajorTargets = (depth > 4 ? [] : [""]);
  out.validMinorTargets = (depth > 4 ? [] : [""]);
  out.validUpgradeTargets = (depth > 4 ? [] : [""]);
  out.version = (i.version !== undefined ? i.version : "1");
  out.versionActual = "";
  out.versionDescription = "";
  return out;
}

// aws:rds/getEventCategories:getEventCategories
export function getEventCategories(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventCategories = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.sourceType = (i.sourceType !== undefined ? i.sourceType : "");
  return out;
}

// aws:rds/getInstance:getInstance
export function getInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.allocatedStorage = 0;
  out.autoMinorVersionUpgrade = false;
  out.availabilityZone = ctx.region + "a";
  out.backupRetentionPeriod = 0;
  out.caCertIdentifier = "";
  out.databaseInsightsMode = "";
  out.dbClusterIdentifier = "";
  out.dbInstanceArn = h.arn(ctx);
  out.dbInstanceClass = "";
  out.dbInstanceIdentifier = (i.dbInstanceIdentifier !== undefined ? i.dbInstanceIdentifier : "");
  out.dbInstancePort = 443;
  out.dbName = "";
  out.dbParameterGroups = (depth > 4 ? [] : [""]);
  out.dbSubnetGroup = "";
  out.enabledCloudwatchLogsExports = (depth > 4 ? [] : [""]);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engine = "";
  out.engineVersion = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.id = h.id(ctx, "id");
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.licenseModel = "";
  out.masterUserSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getInstanceMasterUserSecret(ctx, depth + 1))]);
  out.masterUsername = "";
  out.maxAllocatedStorage = 0;
  out.monitoringInterval = 0;
  out.monitoringRoleArn = h.arn(ctx);
  out.multiAz = false;
  out.networkType = "";
  out.optionGroupMemberships = (depth > 4 ? [] : [""]);
  out.port = 443;
  out.preferredBackupWindow = "";
  out.preferredMaintenanceWindow = "";
  out.publiclyAccessible = false;
  out.replicateSourceDb = "";
  out.resourceId = h.id(ctx, "resourceId");
  out.storageEncrypted = false;
  out.storageThroughput = 0;
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.timezone = "";
  out.vpcSecurityGroups = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getInstances:getInstances
export function getInstances(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getInstancesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceArns = (depth > 4 ? [] : [""]);
  out.instanceIdentifiers = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:rds/getOrderableDbInstance:getOrderableDbInstance
export function getOrderableDbInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneGroup = (i.availabilityZoneGroup !== undefined ? i.availabilityZoneGroup : ctx.region + "a");
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineLatestVersion = (i.engineLatestVersion !== undefined ? i.engineLatestVersion : false);
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.id = h.id(ctx, "id");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.licenseModel = (i.licenseModel !== undefined ? i.licenseModel : "");
  out.maxIopsPerDbInstance = 0;
  out.maxIopsPerGib = 0;
  out.maxStorageSize = 8;
  out.minIopsPerDbInstance = 0;
  out.minIopsPerGib = 0;
  out.minStorageSize = 8;
  out.multiAzCapable = false;
  out.outpostCapable = false;
  out.preferredEngineVersions = (i.preferredEngineVersions !== undefined ? i.preferredEngineVersions : (depth > 4 ? [] : [""]));
  out.preferredInstanceClasses = (i.preferredInstanceClasses !== undefined ? i.preferredInstanceClasses : (depth > 4 ? [] : [""]));
  out.readReplicaCapable = (i.readReplicaCapable !== undefined ? i.readReplicaCapable : false);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.supportedEngineModes = (i.supportedEngineModes !== undefined ? i.supportedEngineModes : (depth > 4 ? [] : [""]));
  out.supportedNetworkTypes = (i.supportedNetworkTypes !== undefined ? i.supportedNetworkTypes : (depth > 4 ? [] : [""]));
  out.supportsClusters = (i.supportsClusters !== undefined ? i.supportsClusters : false);
  out.supportsEnhancedMonitoring = (i.supportsEnhancedMonitoring !== undefined ? i.supportsEnhancedMonitoring : false);
  out.supportsGlobalDatabases = (i.supportsGlobalDatabases !== undefined ? i.supportsGlobalDatabases : false);
  out.supportsIamDatabaseAuthentication = (i.supportsIamDatabaseAuthentication !== undefined ? i.supportsIamDatabaseAuthentication : false);
  out.supportsIops = (i.supportsIops !== undefined ? i.supportsIops : false);
  out.supportsKerberosAuthentication = (i.supportsKerberosAuthentication !== undefined ? i.supportsKerberosAuthentication : false);
  out.supportsMultiAz = (i.supportsMultiAz !== undefined ? i.supportsMultiAz : false);
  out.supportsPerformanceInsights = (i.supportsPerformanceInsights !== undefined ? i.supportsPerformanceInsights : false);
  out.supportsStorageAutoscaling = (i.supportsStorageAutoscaling !== undefined ? i.supportsStorageAutoscaling : false);
  out.supportsStorageEncryption = (i.supportsStorageEncryption !== undefined ? i.supportsStorageEncryption : false);
  out.vpc = (i.vpc !== undefined ? i.vpc : false);
  return out;
}

// aws:rds/getParameterGroup:getParameterGroup
export function getParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.family = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:rds/getProxy:getProxy
export function getProxy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.auths = (depth > 4 ? [] : [(depth > 4 ? {} : T_rds.rds_getProxyAuth(ctx, depth + 1))]);
  out.debugLogging = false;
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.engineFamily = "";
  out.id = h.id(ctx, "id");
  out.idleClientTimeout = 30;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.requireTls = false;
  out.roleArn = h.arn(ctx);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  out.vpcSubnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rds/getReservedInstanceOffering:getReservedInstanceOffering
export function getReservedInstanceOffering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.currencyCode = "";
  out.dbInstanceClass = (i.dbInstanceClass !== undefined ? i.dbInstanceClass : "");
  out.duration = (i.duration !== undefined ? i.duration : 0);
  out.fixedPrice = 0;
  out.id = h.id(ctx, "id");
  out.multiAz = (i.multiAz !== undefined ? i.multiAz : false);
  out.offeringId = h.id(ctx, "offeringId");
  out.offeringType = (i.offeringType !== undefined ? i.offeringType : "");
  out.productDescription = (i.productDescription !== undefined ? i.productDescription : "");
  return out;
}

// aws:rds/getSnapshot:getSnapshot
export function getSnapshot(ctx: MockCtx): Record<string, any> {
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
  out.id = h.id(ctx, "id");
  out.includePublic = (i.includePublic !== undefined ? i.includePublic : false);
  out.includeShared = (i.includeShared !== undefined ? i.includeShared : false);
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.licenseModel = "";
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.optionGroupName = "";
  out.originalSnapshotCreateTime = h.timestamp();
  out.port = 443;
  out.snapshotCreateTime = h.timestamp();
  out.snapshotType = (i.snapshotType !== undefined ? i.snapshotType : "");
  out.sourceDbSnapshotIdentifier = "";
  out.sourceRegion = "";
  out.status = "active";
  out.storageType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:rds/getSubnetGroup:getSubnetGroup
export function getSubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.supportedNetworkTypes = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

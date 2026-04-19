// GENERATED FILE — do not edit.
// Service: dms   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dms from "../types/dms.js";

// aws:dms/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.certificateId = (i.certificateId !== undefined ? i.certificateId : h.id(ctx, "certificateId"));
  out.certificatePem = (i.certificatePem !== undefined ? i.certificatePem : "");
  out.certificateWallet = (i.certificateWallet !== undefined ? i.certificateWallet : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dms/endpoint:Endpoint
export function Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.elasticsearchSettings = (i.elasticsearchSettings !== undefined ? i.elasticsearchSettings : (depth > 4 ? {} : T_dms.dms_EndpointElasticsearchSettings(ctx, depth + 1)));
  out.endpointArn = h.arn(ctx);
  out.endpointId = (i.endpointId !== undefined ? i.endpointId : h.id(ctx, "endpointId"));
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.engineName = (i.engineName !== undefined ? i.engineName : "");
  out.extraConnectionAttributes = (i.extraConnectionAttributes !== undefined ? i.extraConnectionAttributes : "");
  out.kafkaSettings = (i.kafkaSettings !== undefined ? i.kafkaSettings : (depth > 4 ? {} : T_dms.dms_EndpointKafkaSettings(ctx, depth + 1)));
  out.kinesisSettings = (i.kinesisSettings !== undefined ? i.kinesisSettings : (depth > 4 ? {} : T_dms.dms_EndpointKinesisSettings(ctx, depth + 1)));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.mongodbSettings = (i.mongodbSettings !== undefined ? i.mongodbSettings : (depth > 4 ? {} : T_dms.dms_EndpointMongodbSettings(ctx, depth + 1)));
  out.password = (i.password !== undefined ? i.password : "");
  out.pauseReplicationTasks = (i.pauseReplicationTasks !== undefined ? i.pauseReplicationTasks : false);
  out.port = (i.port !== undefined ? i.port : 443);
  out.postgresSettings = (i.postgresSettings !== undefined ? i.postgresSettings : (depth > 4 ? {} : T_dms.dms_EndpointPostgresSettings(ctx, depth + 1)));
  out.redisSettings = (i.redisSettings !== undefined ? i.redisSettings : (depth > 4 ? {} : T_dms.dms_EndpointRedisSettings(ctx, depth + 1)));
  out.redshiftSettings = (i.redshiftSettings !== undefined ? i.redshiftSettings : (depth > 4 ? {} : T_dms.dms_EndpointRedshiftSettings(ctx, depth + 1)));
  out.s3Settings = (i.s3Settings !== undefined ? i.s3Settings : (depth > 4 ? {} : T_dms.dms_EndpointS3Settings(ctx, depth + 1)));
  out.secretsManagerAccessRoleArn = (i.secretsManagerAccessRoleArn !== undefined ? i.secretsManagerAccessRoleArn : h.arn(ctx));
  out.secretsManagerArn = (i.secretsManagerArn !== undefined ? i.secretsManagerArn : h.arn(ctx));
  out.serverName = (i.serverName !== undefined ? i.serverName : "");
  out.serviceAccessRole = (i.serviceAccessRole !== undefined ? i.serviceAccessRole : "");
  out.sslMode = (i.sslMode !== undefined ? i.sslMode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:dms/eventSubscription:EventSubscription
export function EventSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.eventCategories = (i.eventCategories !== undefined ? i.eventCategories : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  out.sourceIds = (i.sourceIds !== undefined ? i.sourceIds : (depth > 4 ? [] : [""]));
  out.sourceType = (i.sourceType !== undefined ? i.sourceType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dms/replicationConfig:ReplicationConfig
export function ReplicationConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeConfig = (i.computeConfig !== undefined ? i.computeConfig : (depth > 4 ? {} : T_dms.dms_ReplicationConfigComputeConfig(ctx, depth + 1)));
  out.replicationConfigIdentifier = (i.replicationConfigIdentifier !== undefined ? i.replicationConfigIdentifier : "");
  out.replicationSettings = (i.replicationSettings !== undefined ? i.replicationSettings : "");
  out.replicationType = (i.replicationType !== undefined ? i.replicationType : "");
  out.resourceIdentifier = (i.resourceIdentifier !== undefined ? i.resourceIdentifier : "");
  out.sourceEndpointArn = (i.sourceEndpointArn !== undefined ? i.sourceEndpointArn : h.arn(ctx));
  out.startReplication = (i.startReplication !== undefined ? i.startReplication : false);
  out.supplementalSettings = (i.supplementalSettings !== undefined ? i.supplementalSettings : "");
  out.tableMappings = (i.tableMappings !== undefined ? i.tableMappings : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetEndpointArn = (i.targetEndpointArn !== undefined ? i.targetEndpointArn : h.arn(ctx));
  return out;
}

// aws:dms/replicationInstance:ReplicationInstance
export function ReplicationInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = (i.allocatedStorage !== undefined ? i.allocatedStorage : 0);
  out.allowMajorVersionUpgrade = (i.allowMajorVersionUpgrade !== undefined ? i.allowMajorVersionUpgrade : true);
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.multiAz = (i.multiAz !== undefined ? i.multiAz : false);
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.replicationInstanceArn = h.arn(ctx);
  out.replicationInstanceClass = (i.replicationInstanceClass !== undefined ? i.replicationInstanceClass : "");
  out.replicationInstanceId = (i.replicationInstanceId !== undefined ? i.replicationInstanceId : h.id(ctx, "replicationInstanceId"));
  out.replicationInstancePrivateIps = (depth > 4 ? [] : [""]);
  out.replicationInstancePublicIps = (depth > 4 ? [] : [""]);
  out.replicationSubnetGroupId = (i.replicationSubnetGroupId !== undefined ? i.replicationSubnetGroupId : h.id(ctx, "replicationSubnetGroupId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:dms/replicationSubnetGroup:ReplicationSubnetGroup
export function ReplicationSubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replicationSubnetGroupArn = h.arn(ctx);
  out.replicationSubnetGroupDescription = (i.replicationSubnetGroupDescription !== undefined ? i.replicationSubnetGroupDescription : "");
  out.replicationSubnetGroupId = (i.replicationSubnetGroupId !== undefined ? i.replicationSubnetGroupId : h.id(ctx, "replicationSubnetGroupId"));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:dms/replicationTask:ReplicationTask
export function ReplicationTask(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cdcStartPosition = (i.cdcStartPosition !== undefined ? i.cdcStartPosition : "");
  out.cdcStartTime = (i.cdcStartTime !== undefined ? i.cdcStartTime : "");
  out.migrationType = (i.migrationType !== undefined ? i.migrationType : "");
  out.replicationInstanceArn = (i.replicationInstanceArn !== undefined ? i.replicationInstanceArn : h.arn(ctx));
  out.replicationTaskArn = h.arn(ctx);
  out.replicationTaskId = (i.replicationTaskId !== undefined ? i.replicationTaskId : h.id(ctx, "replicationTaskId"));
  out.replicationTaskSettings = (i.replicationTaskSettings !== undefined ? i.replicationTaskSettings : "");
  out.resourceIdentifier = (i.resourceIdentifier !== undefined ? i.resourceIdentifier : "");
  out.sourceEndpointArn = (i.sourceEndpointArn !== undefined ? i.sourceEndpointArn : h.arn(ctx));
  out.startReplicationTask = (i.startReplicationTask !== undefined ? i.startReplicationTask : false);
  out.status = "active";
  out.tableMappings = (i.tableMappings !== undefined ? i.tableMappings : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetEndpointArn = (i.targetEndpointArn !== undefined ? i.targetEndpointArn : h.arn(ctx));
  return out;
}

// aws:dms/s3Endpoint:S3Endpoint
export function S3Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addColumnName = (i.addColumnName !== undefined ? i.addColumnName : false);
  out.addTrailingPaddingCharacter = (i.addTrailingPaddingCharacter !== undefined ? i.addTrailingPaddingCharacter : false);
  out.bucketFolder = (i.bucketFolder !== undefined ? i.bucketFolder : "");
  out.bucketName = (i.bucketName !== undefined ? i.bucketName : ctx.name);
  out.cannedAclForObjects = (i.cannedAclForObjects !== undefined ? i.cannedAclForObjects : "");
  out.cdcInsertsAndUpdates = (i.cdcInsertsAndUpdates !== undefined ? i.cdcInsertsAndUpdates : false);
  out.cdcInsertsOnly = (i.cdcInsertsOnly !== undefined ? i.cdcInsertsOnly : false);
  out.cdcMaxBatchInterval = (i.cdcMaxBatchInterval !== undefined ? i.cdcMaxBatchInterval : 0);
  out.cdcMinFileSize = (i.cdcMinFileSize !== undefined ? i.cdcMinFileSize : 8);
  out.cdcPath = (i.cdcPath !== undefined ? i.cdcPath : "");
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.compressionType = (i.compressionType !== undefined ? i.compressionType : "");
  out.csvDelimiter = (i.csvDelimiter !== undefined ? i.csvDelimiter : "");
  out.csvNoSupValue = (i.csvNoSupValue !== undefined ? i.csvNoSupValue : "");
  out.csvNullValue = (i.csvNullValue !== undefined ? i.csvNullValue : "");
  out.csvRowDelimiter = (i.csvRowDelimiter !== undefined ? i.csvRowDelimiter : "");
  out.dataFormat = (i.dataFormat !== undefined ? i.dataFormat : "");
  out.dataPageSize = (i.dataPageSize !== undefined ? i.dataPageSize : 8);
  out.datePartitionDelimiter = (i.datePartitionDelimiter !== undefined ? i.datePartitionDelimiter : "");
  out.datePartitionEnabled = (i.datePartitionEnabled !== undefined ? i.datePartitionEnabled : false);
  out.datePartitionSequence = (i.datePartitionSequence !== undefined ? i.datePartitionSequence : "");
  out.datePartitionTimezone = (i.datePartitionTimezone !== undefined ? i.datePartitionTimezone : "");
  out.detachTargetOnLobLookupFailureParquet = (i.detachTargetOnLobLookupFailureParquet !== undefined ? i.detachTargetOnLobLookupFailureParquet : false);
  out.dictPageSizeLimit = (i.dictPageSizeLimit !== undefined ? i.dictPageSizeLimit : 8);
  out.enableStatistics = (i.enableStatistics !== undefined ? i.enableStatistics : true);
  out.encodingType = (i.encodingType !== undefined ? i.encodingType : "");
  out.encryptionMode = (i.encryptionMode !== undefined ? i.encryptionMode : "");
  out.endpointArn = h.arn(ctx);
  out.endpointId = (i.endpointId !== undefined ? i.endpointId : h.id(ctx, "endpointId"));
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.engineDisplayName = "";
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.externalId = h.id(ctx, "externalId");
  out.externalTableDefinition = (i.externalTableDefinition !== undefined ? i.externalTableDefinition : "");
  out.glueCatalogGeneration = (i.glueCatalogGeneration !== undefined ? i.glueCatalogGeneration : false);
  out.ignoreHeaderRows = (i.ignoreHeaderRows !== undefined ? i.ignoreHeaderRows : 0);
  out.includeOpForFullLoad = (i.includeOpForFullLoad !== undefined ? i.includeOpForFullLoad : false);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.maxFileSize = (i.maxFileSize !== undefined ? i.maxFileSize : 8);
  out.parquetTimestampInMillisecond = (i.parquetTimestampInMillisecond !== undefined ? i.parquetTimestampInMillisecond : false);
  out.parquetVersion = (i.parquetVersion !== undefined ? i.parquetVersion : "");
  out.preserveTransactions = (i.preserveTransactions !== undefined ? i.preserveTransactions : false);
  out.rfc4180 = (i.rfc4180 !== undefined ? i.rfc4180 : false);
  out.rowGroupLength = (i.rowGroupLength !== undefined ? i.rowGroupLength : 0);
  out.serverSideEncryptionKmsKeyId = (i.serverSideEncryptionKmsKeyId !== undefined ? i.serverSideEncryptionKmsKeyId : h.id(ctx, "serverSideEncryptionKmsKeyId"));
  out.serviceAccessRoleArn = (i.serviceAccessRoleArn !== undefined ? i.serviceAccessRoleArn : h.arn(ctx));
  out.sslMode = (i.sslMode !== undefined ? i.sslMode : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timestampColumnName = (i.timestampColumnName !== undefined ? i.timestampColumnName : "");
  out.useCsvNoSupValue = (i.useCsvNoSupValue !== undefined ? i.useCsvNoSupValue : false);
  out.useTaskStartTimeForFullLoadTimestamp = (i.useTaskStartTimeForFullLoadTimestamp !== undefined ? i.useTaskStartTimeForFullLoadTimestamp : false);
  return out;
}

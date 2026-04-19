// GENERATED FILE — do not edit.
// Service: dms   (17 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dms from "./dms.js";

// aws:dms/EndpointElasticsearchSettings:EndpointElasticsearchSettings
export function dms_EndpointElasticsearchSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointUri = h.endpoint(ctx, "endpointUri");
  out.errorRetryDuration = 0;
  out.fullLoadErrorPercentage = 0;
  out.serviceAccessRoleArn = h.arn(ctx);
  out.useNewMappingType = false;
  return out;
}

// aws:dms/EndpointKafkaSettings:EndpointKafkaSettings
export function dms_EndpointKafkaSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.broker = "";
  out.includeControlDetails = false;
  out.includeNullAndEmpty = false;
  out.includePartitionValue = false;
  out.includeTableAlterOperations = false;
  out.includeTransactionDetails = false;
  out.messageFormat = "";
  out.messageMaxBytes = 0;
  out.noHexPrefix = false;
  out.partitionIncludeSchemaTable = false;
  out.saslMechanism = "";
  out.saslPassword = "";
  out.saslUsername = "";
  out.securityProtocol = "";
  out.sslCaCertificateArn = h.arn(ctx);
  out.sslClientCertificateArn = h.arn(ctx);
  out.sslClientKeyArn = h.arn(ctx);
  out.sslClientKeyPassword = "";
  out.topic = "";
  return out;
}

// aws:dms/EndpointKinesisSettings:EndpointKinesisSettings
export function dms_EndpointKinesisSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeControlDetails = false;
  out.includeNullAndEmpty = false;
  out.includePartitionValue = false;
  out.includeTableAlterOperations = false;
  out.includeTransactionDetails = false;
  out.messageFormat = "";
  out.partitionIncludeSchemaTable = false;
  out.serviceAccessRoleArn = h.arn(ctx);
  out.streamArn = h.arn(ctx);
  out.useLargeIntegerValue = false;
  return out;
}

// aws:dms/EndpointMongodbSettings:EndpointMongodbSettings
export function dms_EndpointMongodbSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authMechanism = "";
  out.authSource = "";
  out.authType = "";
  out.docsToInvestigate = "";
  out.extractDocId = h.id(ctx, "extractDocId");
  out.nestingLevel = "";
  return out;
}

// aws:dms/EndpointPostgresSettings:EndpointPostgresSettings
export function dms_EndpointPostgresSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.afterConnectScript = "";
  out.babelfishDatabaseName = "";
  out.captureDdls = false;
  out.databaseMode = "";
  out.ddlArtifactsSchema = "";
  out.executeTimeout = 30;
  out.failTasksOnLobTruncation = false;
  out.heartbeatEnable = false;
  out.heartbeatFrequency = 0;
  out.heartbeatSchema = "";
  out.mapBooleanAsBoolean = false;
  out.mapJsonbAsClob = false;
  out.mapLongVarcharAs = "";
  out.maxFileSize = 8;
  out.pluginName = "";
  out.slotName = "";
  return out;
}

// aws:dms/EndpointRedisSettings:EndpointRedisSettings
export function dms_EndpointRedisSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authPassword = "";
  out.authType = "";
  out.authUserName = "";
  out.port = 443;
  out.serverName = "";
  out.sslCaCertificateArn = h.arn(ctx);
  out.sslSecurityProtocol = "";
  return out;
}

// aws:dms/EndpointRedshiftSettings:EndpointRedshiftSettings
export function dms_EndpointRedshiftSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketFolder = "";
  out.bucketName = ctx.name;
  out.encryptionMode = "";
  out.serverSideEncryptionKmsKeyId = h.id(ctx, "serverSideEncryptionKmsKeyId");
  out.serviceAccessRoleArn = h.arn(ctx);
  return out;
}

// aws:dms/EndpointS3Settings:EndpointS3Settings
export function dms_EndpointS3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addColumnName = false;
  out.bucketFolder = "";
  out.bucketName = ctx.name;
  out.cannedAclForObjects = "";
  out.cdcInsertsAndUpdates = false;
  out.cdcInsertsOnly = false;
  out.cdcMaxBatchInterval = 0;
  out.cdcMinFileSize = 8;
  out.cdcPath = "";
  out.compressionType = "";
  out.csvDelimiter = "";
  out.csvNoSupValue = "";
  out.csvNullValue = "";
  out.csvRowDelimiter = "";
  out.dataFormat = "";
  out.dataPageSize = 8;
  out.datePartitionDelimiter = "";
  out.datePartitionEnabled = false;
  out.datePartitionSequence = "";
  out.dictPageSizeLimit = 8;
  out.enableStatistics = true;
  out.encodingType = "";
  out.encryptionMode = "";
  out.externalTableDefinition = "";
  out.glueCatalogGeneration = false;
  out.ignoreHeaderRows = 0;
  out.includeOpForFullLoad = false;
  out.maxFileSize = 8;
  out.parquetTimestampInMillisecond = false;
  out.parquetVersion = "";
  out.preserveTransactions = false;
  out.rfc4180 = false;
  out.rowGroupLength = 0;
  out.serverSideEncryptionKmsKeyId = h.id(ctx, "serverSideEncryptionKmsKeyId");
  out.serviceAccessRoleArn = h.arn(ctx);
  out.timestampColumnName = "";
  out.useCsvNoSupValue = false;
  out.useTaskStartTimeForFullLoadTimestamp = false;
  return out;
}

// aws:dms/ReplicationConfigComputeConfig:ReplicationConfigComputeConfig
export function dms_ReplicationConfigComputeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.dnsNameServers = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.maxCapacityUnits = 0;
  out.minCapacityUnits = 0;
  out.multiAz = false;
  out.preferredMaintenanceWindow = "";
  out.replicationSubnetGroupId = h.id(ctx, "replicationSubnetGroupId");
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:dms/getEndpointElasticsearchSetting:getEndpointElasticsearchSetting
export function dms_getEndpointElasticsearchSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointUri = h.endpoint(ctx, "endpointUri");
  out.errorRetryDuration = 0;
  out.fullLoadErrorPercentage = 0;
  out.serviceAccessRoleArn = h.arn(ctx);
  return out;
}

// aws:dms/getEndpointKafkaSetting:getEndpointKafkaSetting
export function dms_getEndpointKafkaSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.broker = "";
  out.includeControlDetails = false;
  out.includeNullAndEmpty = false;
  out.includePartitionValue = false;
  out.includeTableAlterOperations = false;
  out.includeTransactionDetails = false;
  out.messageFormat = "";
  out.messageMaxBytes = 0;
  out.noHexPrefix = false;
  out.partitionIncludeSchemaTable = false;
  out.saslMechanism = "";
  out.saslPassword = "";
  out.saslUsername = "";
  out.securityProtocol = "";
  out.sslCaCertificateArn = h.arn(ctx);
  out.sslClientCertificateArn = h.arn(ctx);
  out.sslClientKeyArn = h.arn(ctx);
  out.sslClientKeyPassword = "";
  out.topic = "";
  return out;
}

// aws:dms/getEndpointKinesisSetting:getEndpointKinesisSetting
export function dms_getEndpointKinesisSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeControlDetails = false;
  out.includeNullAndEmpty = false;
  out.includePartitionValue = false;
  out.includeTableAlterOperations = false;
  out.includeTransactionDetails = false;
  out.messageFormat = "";
  out.partitionIncludeSchemaTable = false;
  out.serviceAccessRoleArn = h.arn(ctx);
  out.streamArn = h.arn(ctx);
  out.useLargeIntegerValue = false;
  return out;
}

// aws:dms/getEndpointMongodbSetting:getEndpointMongodbSetting
export function dms_getEndpointMongodbSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authMechanism = "";
  out.authSource = "";
  out.authType = "";
  out.docsToInvestigate = "";
  out.extractDocId = h.id(ctx, "extractDocId");
  out.nestingLevel = "";
  return out;
}

// aws:dms/getEndpointPostgresSetting:getEndpointPostgresSetting
export function dms_getEndpointPostgresSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.afterConnectScript = "";
  out.babelfishDatabaseName = "";
  out.captureDdls = false;
  out.databaseMode = "";
  out.ddlArtifactsSchema = "";
  out.executeTimeout = 30;
  out.failTasksOnLobTruncation = false;
  out.heartbeatEnable = false;
  out.heartbeatFrequency = 0;
  out.heartbeatSchema = "";
  out.mapBooleanAsBoolean = false;
  out.mapJsonbAsClob = false;
  out.mapLongVarcharAs = "";
  out.maxFileSize = 8;
  out.pluginName = "";
  out.slotName = "";
  return out;
}

// aws:dms/getEndpointRedisSetting:getEndpointRedisSetting
export function dms_getEndpointRedisSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authPassword = "";
  out.authType = "";
  out.authUserName = "";
  out.port = 443;
  out.serverName = "";
  out.sslCaCertificateArn = h.arn(ctx);
  out.sslSecurityProtocol = "";
  return out;
}

// aws:dms/getEndpointRedshiftSetting:getEndpointRedshiftSetting
export function dms_getEndpointRedshiftSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketFolder = "";
  out.bucketName = ctx.name;
  out.encryptionMode = "";
  out.serverSideEncryptionKmsKeyId = h.id(ctx, "serverSideEncryptionKmsKeyId");
  out.serviceAccessRoleArn = h.arn(ctx);
  return out;
}

// aws:dms/getEndpointS3Setting:getEndpointS3Setting
export function dms_getEndpointS3Setting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addColumnName = false;
  out.bucketFolder = "";
  out.bucketName = ctx.name;
  out.cannedAclForObjects = "";
  out.cdcInsertsAndUpdates = false;
  out.cdcInsertsOnly = false;
  out.cdcMaxBatchInterval = 0;
  out.cdcMinFileSize = 8;
  out.cdcPath = "";
  out.compressionType = "";
  out.csvDelimiter = "";
  out.csvNoSupValue = "";
  out.csvNullValue = "";
  out.csvRowDelimiter = "";
  out.dataFormat = "";
  out.dataPageSize = 8;
  out.datePartitionDelimiter = "";
  out.datePartitionEnabled = false;
  out.datePartitionSequence = "";
  out.dictPageSizeLimit = 8;
  out.enableStatistics = true;
  out.encodingType = "";
  out.encryptionMode = "";
  out.externalTableDefinition = "";
  out.glueCatalogGeneration = false;
  out.ignoreHeaderRows = 0;
  out.ignoreHeadersRow = 0;
  out.includeOpForFullLoad = false;
  out.maxFileSize = 8;
  out.parquetTimestampInMillisecond = false;
  out.parquetVersion = "";
  out.preserveTransactions = false;
  out.rfc4180 = false;
  out.rowGroupLength = 0;
  out.serverSideEncryptionKmsKeyId = h.id(ctx, "serverSideEncryptionKmsKeyId");
  out.serviceAccessRoleArn = h.arn(ctx);
  out.timestampColumnName = "";
  out.useCsvNoSupValue = false;
  out.useTaskStartTimeForFullLoadTimestamp = false;
  return out;
}

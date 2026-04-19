// GENERATED FILE — do not edit.
// Service: glue   (83 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_glue from "./glue.js";

// aws:glue/CatalogDatabaseCreateTableDefaultPermission:CatalogDatabaseCreateTableDefaultPermission
export function glue_CatalogDatabaseCreateTableDefaultPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.principal = (depth > 4 ? {} : T_glue.glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal(ctx, depth + 1));
  return out;
}

// aws:glue/CatalogDatabaseCreateTableDefaultPermissionPrincipal:CatalogDatabaseCreateTableDefaultPermissionPrincipal
export function glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataLakePrincipalIdentifier = "";
  return out;
}

// aws:glue/CatalogDatabaseFederatedDatabase:CatalogDatabaseFederatedDatabase
export function glue_CatalogDatabaseFederatedDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.identifier = "";
  return out;
}

// aws:glue/CatalogDatabaseTargetDatabase:CatalogDatabaseTargetDatabase
export function glue_CatalogDatabaseTargetDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.region = ctx.region;
  return out;
}

// aws:glue/CatalogTableOpenTableFormatInput:CatalogTableOpenTableFormatInput
export function glue_CatalogTableOpenTableFormatInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.icebergInput = (depth > 4 ? {} : T_glue.glue_CatalogTableOpenTableFormatInputIcebergInput(ctx, depth + 1));
  return out;
}

// aws:glue/CatalogTableOpenTableFormatInputIcebergInput:CatalogTableOpenTableFormatInputIcebergInput
export function glue_CatalogTableOpenTableFormatInputIcebergInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadataOperation = "";
  out.version = "1";
  return out;
}

// aws:glue/CatalogTableOptimizerConfiguration:CatalogTableOptimizerConfiguration
export function glue_CatalogTableOptimizerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.orphanFileDeletionConfiguration = (depth > 4 ? {} : T_glue.glue_CatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration(ctx, depth + 1));
  out.retentionConfiguration = (depth > 4 ? {} : T_glue.glue_CatalogTableOptimizerConfigurationRetentionConfiguration(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:glue/CatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration:CatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration
export function glue_CatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.icebergConfiguration = (depth > 4 ? {} : T_glue.glue_CatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration(ctx, depth + 1));
  return out;
}

// aws:glue/CatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration:CatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration
export function glue_CatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.location = "";
  out.orphanFileRetentionPeriodInDays = 0;
  return out;
}

// aws:glue/CatalogTableOptimizerConfigurationRetentionConfiguration:CatalogTableOptimizerConfigurationRetentionConfiguration
export function glue_CatalogTableOptimizerConfigurationRetentionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.icebergConfiguration = (depth > 4 ? {} : T_glue.glue_CatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration(ctx, depth + 1));
  return out;
}

// aws:glue/CatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration:CatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration
export function glue_CatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cleanExpiredFiles = false;
  out.numberOfSnapshotsToRetain = 0;
  out.snapshotRetentionPeriodInDays = 0;
  return out;
}

// aws:glue/CatalogTablePartitionIndex:CatalogTablePartitionIndex
export function glue_CatalogTablePartitionIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexName = "";
  out.indexStatus = "";
  out.keys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/CatalogTablePartitionKey:CatalogTablePartitionKey
export function glue_CatalogTablePartitionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:glue/CatalogTableStorageDescriptor:CatalogTableStorageDescriptor
export function glue_CatalogTableStorageDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalLocations = (depth > 4 ? [] : [""]);
  out.bucketColumns = (depth > 4 ? [] : [""]);
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorColumn(ctx, depth + 1))]);
  out.compressed = false;
  out.inputFormat = "";
  out.location = "";
  out.numberOfBuckets = 0;
  out.outputFormat = "";
  out.parameters = {};
  out.schemaReference = (depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorSchemaReference(ctx, depth + 1));
  out.serDeInfo = (depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorSerDeInfo(ctx, depth + 1));
  out.skewedInfo = (depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorSkewedInfo(ctx, depth + 1));
  out.sortColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorSortColumn(ctx, depth + 1))]);
  out.storedAsSubDirectories = false;
  return out;
}

// aws:glue/CatalogTableStorageDescriptorColumn:CatalogTableStorageDescriptorColumn
export function glue_CatalogTableStorageDescriptorColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.name = ctx.name;
  out.parameters = {};
  out.type = "";
  return out;
}

// aws:glue/CatalogTableStorageDescriptorSchemaReference:CatalogTableStorageDescriptorSchemaReference
export function glue_CatalogTableStorageDescriptorSchemaReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.schemaId = (depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId(ctx, depth + 1));
  out.schemaVersionId = h.id(ctx, "schemaVersionId");
  out.schemaVersionNumber = 0;
  return out;
}

// aws:glue/CatalogTableStorageDescriptorSchemaReferenceSchemaId:CatalogTableStorageDescriptorSchemaReferenceSchemaId
export function glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.registryName = "";
  out.schemaArn = h.arn(ctx);
  out.schemaName = "";
  return out;
}

// aws:glue/CatalogTableStorageDescriptorSerDeInfo:CatalogTableStorageDescriptorSerDeInfo
export function glue_CatalogTableStorageDescriptorSerDeInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.parameters = {};
  out.serializationLibrary = "";
  return out;
}

// aws:glue/CatalogTableStorageDescriptorSkewedInfo:CatalogTableStorageDescriptorSkewedInfo
export function glue_CatalogTableStorageDescriptorSkewedInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.skewedColumnNames = (depth > 4 ? [] : [""]);
  out.skewedColumnValueLocationMaps = {};
  out.skewedColumnValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/CatalogTableStorageDescriptorSortColumn:CatalogTableStorageDescriptorSortColumn
export function glue_CatalogTableStorageDescriptorSortColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.column = "";
  out.sortOrder = 0;
  return out;
}

// aws:glue/CatalogTableTargetTable:CatalogTableTargetTable
export function glue_CatalogTableTargetTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.region = ctx.region;
  return out;
}

// aws:glue/ClassifierCsvClassifier:ClassifierCsvClassifier
export function glue_ClassifierCsvClassifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowSingleColumn = true;
  out.containsHeader = "";
  out.customDatatypeConfigured = false;
  out.customDatatypes = (depth > 4 ? [] : [""]);
  out.delimiter = "";
  out.disableValueTrimming = false;
  out.headers = (depth > 4 ? [] : [""]);
  out.quoteSymbol = "";
  out.serde = "";
  return out;
}

// aws:glue/ClassifierGrokClassifier:ClassifierGrokClassifier
export function glue_ClassifierGrokClassifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.customPatterns = "";
  out.grokPattern = "";
  return out;
}

// aws:glue/ClassifierJsonClassifier:ClassifierJsonClassifier
export function glue_ClassifierJsonClassifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsonPath = "";
  return out;
}

// aws:glue/ClassifierXmlClassifier:ClassifierXmlClassifier
export function glue_ClassifierXmlClassifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.rowTag = "";
  return out;
}

// aws:glue/ConnectionPhysicalConnectionRequirements:ConnectionPhysicalConnectionRequirements
export function glue_ConnectionPhysicalConnectionRequirements(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.securityGroupIdLists = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:glue/CrawlerCatalogTarget:CrawlerCatalogTarget
export function glue_CrawlerCatalogTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.databaseName = "";
  out.dlqEventQueueArn = h.arn(ctx);
  out.eventQueueArn = h.arn(ctx);
  out.tables = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/CrawlerDeltaTarget:CrawlerDeltaTarget
export function glue_CrawlerDeltaTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.createNativeDeltaTable = false;
  out.deltaTables = (depth > 4 ? [] : [""]);
  out.writeManifest = false;
  return out;
}

// aws:glue/CrawlerDynamodbTarget:CrawlerDynamodbTarget
export function glue_CrawlerDynamodbTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.path = "";
  out.scanAll = false;
  out.scanRate = 0;
  return out;
}

// aws:glue/CrawlerHudiTarget:CrawlerHudiTarget
export function glue_CrawlerHudiTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.exclusions = (depth > 4 ? [] : [""]);
  out.maximumTraversalDepth = 0;
  out.paths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/CrawlerIcebergTarget:CrawlerIcebergTarget
export function glue_CrawlerIcebergTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.exclusions = (depth > 4 ? [] : [""]);
  out.maximumTraversalDepth = 0;
  out.paths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/CrawlerJdbcTarget:CrawlerJdbcTarget
export function glue_CrawlerJdbcTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.enableAdditionalMetadatas = (depth > 4 ? [] : [""]);
  out.exclusions = (depth > 4 ? [] : [""]);
  out.path = "";
  return out;
}

// aws:glue/CrawlerLakeFormationConfiguration:CrawlerLakeFormationConfiguration
export function glue_CrawlerLakeFormationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.useLakeFormationCredentials = false;
  return out;
}

// aws:glue/CrawlerLineageConfiguration:CrawlerLineageConfiguration
export function glue_CrawlerLineageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerLineageSettings = "";
  return out;
}

// aws:glue/CrawlerMongodbTarget:CrawlerMongodbTarget
export function glue_CrawlerMongodbTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.path = "";
  out.scanAll = false;
  return out;
}

// aws:glue/CrawlerRecrawlPolicy:CrawlerRecrawlPolicy
export function glue_CrawlerRecrawlPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recrawlBehavior = "";
  return out;
}

// aws:glue/CrawlerS3Target:CrawlerS3Target
export function glue_CrawlerS3Target(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionName = "";
  out.dlqEventQueueArn = h.arn(ctx);
  out.eventQueueArn = h.arn(ctx);
  out.exclusions = (depth > 4 ? [] : [""]);
  out.path = "";
  out.sampleSize = 8;
  return out;
}

// aws:glue/CrawlerSchemaChangePolicy:CrawlerSchemaChangePolicy
export function glue_CrawlerSchemaChangePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteBehavior = "";
  out.updateBehavior = "";
  return out;
}

// aws:glue/DataCatalogEncryptionSettingsDataCatalogEncryptionSettings:DataCatalogEncryptionSettingsDataCatalogEncryptionSettings
export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPasswordEncryption = (depth > 4 ? {} : T_glue.glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption(ctx, depth + 1));
  out.encryptionAtRest = (depth > 4 ? {} : T_glue.glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest(ctx, depth + 1));
  return out;
}

// aws:glue/DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption:DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption
export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsKmsKeyId = h.id(ctx, "awsKmsKeyId");
  out.returnConnectionPasswordEncrypted = false;
  return out;
}

// aws:glue/DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest:DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest
export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogEncryptionMode = "";
  out.catalogEncryptionServiceRole = "";
  out.sseAwsKmsKeyId = h.id(ctx, "sseAwsKmsKeyId");
  return out;
}

// aws:glue/DataQualityRulesetTargetTable:DataQualityRulesetTargetTable
export function glue_DataQualityRulesetTargetTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.tableName = "";
  return out;
}

// aws:glue/JobCommand:JobCommand
export function glue_JobCommand(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.pythonVersion = "";
  out.runtime = "";
  out.scriptLocation = "";
  return out;
}

// aws:glue/JobExecutionProperty:JobExecutionProperty
export function glue_JobExecutionProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConcurrentRuns = 0;
  return out;
}

// aws:glue/JobNotificationProperty:JobNotificationProperty
export function glue_JobNotificationProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notifyDelayAfter = 0;
  return out;
}

// aws:glue/JobSourceControlDetails:JobSourceControlDetails
export function glue_JobSourceControlDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authStrategy = "";
  out.authToken = "";
  out.branch = "";
  out.folder = "";
  out.lastCommitId = h.id(ctx, "lastCommitId");
  out.owner = ctx.accountId;
  out.provider = "";
  out.repository = "";
  return out;
}

// aws:glue/MLTransformInputRecordTable:MLTransformInputRecordTable
export function glue_MLTransformInputRecordTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.connectionName = "";
  out.databaseName = "";
  out.tableName = "";
  return out;
}

// aws:glue/MLTransformParameters:MLTransformParameters
export function glue_MLTransformParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.findMatchesParameters = (depth > 4 ? {} : T_glue.glue_MLTransformParametersFindMatchesParameters(ctx, depth + 1));
  out.transformType = "";
  return out;
}

// aws:glue/MLTransformParametersFindMatchesParameters:MLTransformParametersFindMatchesParameters
export function glue_MLTransformParametersFindMatchesParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accuracyCostTradeOff = 0;
  out.enforceProvidedLabels = false;
  out.precisionRecallTradeOff = 0;
  out.primaryKeyColumnName = "";
  return out;
}

// aws:glue/MLTransformSchema:MLTransformSchema
export function glue_MLTransformSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataType = "";
  out.name = ctx.name;
  return out;
}

// aws:glue/PartitionIndexPartitionIndex:PartitionIndexPartitionIndex
export function glue_PartitionIndexPartitionIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexName = "";
  out.indexStatus = "";
  out.keys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/PartitionStorageDescriptor:PartitionStorageDescriptor
export function glue_PartitionStorageDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalLocations = (depth > 4 ? [] : [""]);
  out.bucketColumns = (depth > 4 ? [] : [""]);
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_PartitionStorageDescriptorColumn(ctx, depth + 1))]);
  out.compressed = false;
  out.inputFormat = "";
  out.location = "";
  out.numberOfBuckets = 0;
  out.outputFormat = "";
  out.parameters = {};
  out.serDeInfo = (depth > 4 ? {} : T_glue.glue_PartitionStorageDescriptorSerDeInfo(ctx, depth + 1));
  out.skewedInfo = (depth > 4 ? {} : T_glue.glue_PartitionStorageDescriptorSkewedInfo(ctx, depth + 1));
  out.sortColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_PartitionStorageDescriptorSortColumn(ctx, depth + 1))]);
  out.storedAsSubDirectories = false;
  return out;
}

// aws:glue/PartitionStorageDescriptorColumn:PartitionStorageDescriptorColumn
export function glue_PartitionStorageDescriptorColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:glue/PartitionStorageDescriptorSerDeInfo:PartitionStorageDescriptorSerDeInfo
export function glue_PartitionStorageDescriptorSerDeInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.parameters = {};
  out.serializationLibrary = "";
  return out;
}

// aws:glue/PartitionStorageDescriptorSkewedInfo:PartitionStorageDescriptorSkewedInfo
export function glue_PartitionStorageDescriptorSkewedInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.skewedColumnNames = (depth > 4 ? [] : [""]);
  out.skewedColumnValueLocationMaps = {};
  out.skewedColumnValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/PartitionStorageDescriptorSortColumn:PartitionStorageDescriptorSortColumn
export function glue_PartitionStorageDescriptorSortColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.column = "";
  out.sortOrder = 0;
  return out;
}

// aws:glue/SecurityConfigurationEncryptionConfiguration:SecurityConfigurationEncryptionConfiguration
export function glue_SecurityConfigurationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchEncryption = (depth > 4 ? {} : T_glue.glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption(ctx, depth + 1));
  out.jobBookmarksEncryption = (depth > 4 ? {} : T_glue.glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(ctx, depth + 1));
  out.s3Encryption = (depth > 4 ? {} : T_glue.glue_SecurityConfigurationEncryptionConfigurationS3Encryption(ctx, depth + 1));
  return out;
}

// aws:glue/SecurityConfigurationEncryptionConfigurationCloudwatchEncryption:SecurityConfigurationEncryptionConfigurationCloudwatchEncryption
export function glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchEncryptionMode = "";
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:glue/SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption:SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
export function glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jobBookmarksEncryptionMode = "";
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:glue/SecurityConfigurationEncryptionConfigurationS3Encryption:SecurityConfigurationEncryptionConfigurationS3Encryption
export function glue_SecurityConfigurationEncryptionConfigurationS3Encryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.s3EncryptionMode = "";
  return out;
}

// aws:glue/TriggerAction:TriggerAction
export function glue_TriggerAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arguments = {};
  out.crawlerName = "";
  out.jobName = "";
  out.notificationProperty = (depth > 4 ? {} : T_glue.glue_TriggerActionNotificationProperty(ctx, depth + 1));
  out.securityConfiguration = "";
  out.timeout = 30;
  return out;
}

// aws:glue/TriggerActionNotificationProperty:TriggerActionNotificationProperty
export function glue_TriggerActionNotificationProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notifyDelayAfter = 0;
  return out;
}

// aws:glue/TriggerEventBatchingCondition:TriggerEventBatchingCondition
export function glue_TriggerEventBatchingCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.batchWindow = 0;
  return out;
}

// aws:glue/TriggerPredicate:TriggerPredicate
export function glue_TriggerPredicate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditions = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_TriggerPredicateCondition(ctx, depth + 1))]);
  out.logical = "";
  return out;
}

// aws:glue/TriggerPredicateCondition:TriggerPredicateCondition
export function glue_TriggerPredicateCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlState = "";
  out.crawlerName = "";
  out.jobName = "";
  out.logicalOperator = "";
  out.state = "active";
  return out;
}

// aws:glue/UserDefinedFunctionResourceUri:UserDefinedFunctionResourceUri
export function glue_UserDefinedFunctionResourceUri(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceType = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:glue/getCatalogTablePartitionIndex:getCatalogTablePartitionIndex
export function glue_getCatalogTablePartitionIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexName = "";
  out.indexStatus = "";
  out.keys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/getCatalogTablePartitionKey:getCatalogTablePartitionKey
export function glue_getCatalogTablePartitionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:glue/getCatalogTableStorageDescriptor:getCatalogTableStorageDescriptor
export function glue_getCatalogTableStorageDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalLocations = (depth > 4 ? [] : [""]);
  out.bucketColumns = (depth > 4 ? [] : [""]);
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorColumn(ctx, depth + 1))]);
  out.compressed = false;
  out.inputFormat = "";
  out.location = "";
  out.numberOfBuckets = 0;
  out.outputFormat = "";
  out.parameters = {};
  out.schemaReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorSchemaReference(ctx, depth + 1))]);
  out.serDeInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorSerDeInfo(ctx, depth + 1))]);
  out.skewedInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorSkewedInfo(ctx, depth + 1))]);
  out.sortColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorSortColumn(ctx, depth + 1))]);
  out.storedAsSubDirectories = false;
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorColumn:getCatalogTableStorageDescriptorColumn
export function glue_getCatalogTableStorageDescriptorColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.name = ctx.name;
  out.parameters = {};
  out.type = "";
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorSchemaReference:getCatalogTableStorageDescriptorSchemaReference
export function glue_getCatalogTableStorageDescriptorSchemaReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.schemaIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId(ctx, depth + 1))]);
  out.schemaVersionId = h.id(ctx, "schemaVersionId");
  out.schemaVersionNumber = 0;
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorSchemaReferenceSchemaId:getCatalogTableStorageDescriptorSchemaReferenceSchemaId
export function glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.registryName = "";
  out.schemaArn = h.arn(ctx);
  out.schemaName = "";
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorSerDeInfo:getCatalogTableStorageDescriptorSerDeInfo
export function glue_getCatalogTableStorageDescriptorSerDeInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.parameters = {};
  out.serializationLibrary = "";
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorSkewedInfo:getCatalogTableStorageDescriptorSkewedInfo
export function glue_getCatalogTableStorageDescriptorSkewedInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.skewedColumnNames = (depth > 4 ? [] : [""]);
  out.skewedColumnValueLocationMaps = {};
  out.skewedColumnValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:glue/getCatalogTableStorageDescriptorSortColumn:getCatalogTableStorageDescriptorSortColumn
export function glue_getCatalogTableStorageDescriptorSortColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.column = "";
  out.sortOrder = 0;
  return out;
}

// aws:glue/getCatalogTableTargetTable:getCatalogTableTargetTable
export function glue_getCatalogTableTargetTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.region = ctx.region;
  return out;
}

// aws:glue/getConnectionPhysicalConnectionRequirement:getConnectionPhysicalConnectionRequirement
export function glue_getConnectionPhysicalConnectionRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.securityGroupIdLists = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:glue/getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting:getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting
export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPasswordEncryptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption(ctx, depth + 1))]);
  out.encryptionAtRests = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest(ctx, depth + 1))]);
  return out;
}

// aws:glue/getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption:getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption
export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsKmsKeyId = h.id(ctx, "awsKmsKeyId");
  out.returnConnectionPasswordEncrypted = false;
  return out;
}

// aws:glue/getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest:getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest
export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogEncryptionMode = "";
  out.catalogEncryptionServiceRole = "";
  out.sseAwsKmsKeyId = h.id(ctx, "sseAwsKmsKeyId");
  return out;
}

// aws:glue/getScriptDagEdge:getScriptDagEdge
export function glue_getScriptDagEdge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  out.target = "";
  out.targetParameter = "";
  return out;
}

// aws:glue/getScriptDagNode:getScriptDagNode
export function glue_getScriptDagNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getScriptDagNodeArg(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.lineNumber = 0;
  out.nodeType = "";
  return out;
}

// aws:glue/getScriptDagNodeArg:getScriptDagNodeArg
export function glue_getScriptDagNodeArg(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.param = false;
  out.value = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: glue   (20 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_glue from "../types/glue.js";

// aws:glue/catalogDatabase:CatalogDatabase
export function CatalogDatabase(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.createTableDefaultPermissions = (i.createTableDefaultPermissions !== undefined ? i.createTableDefaultPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CatalogDatabaseCreateTableDefaultPermission(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.federatedDatabase = (i.federatedDatabase !== undefined ? i.federatedDatabase : (depth > 4 ? {} : T_glue.glue_CatalogDatabaseFederatedDatabase(ctx, depth + 1)));
  out.locationUri = (i.locationUri !== undefined ? i.locationUri : h.endpoint(ctx, "locationUri"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetDatabase = (i.targetDatabase !== undefined ? i.targetDatabase : (depth > 4 ? {} : T_glue.glue_CatalogDatabaseTargetDatabase(ctx, depth + 1)));
  return out;
}

// aws:glue/catalogTable:CatalogTable
export function CatalogTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.openTableFormatInput = (i.openTableFormatInput !== undefined ? i.openTableFormatInput : (depth > 4 ? {} : T_glue.glue_CatalogTableOpenTableFormatInput(ctx, depth + 1)));
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.partitionIndices = (i.partitionIndices !== undefined ? i.partitionIndices : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CatalogTablePartitionIndex(ctx, depth + 1))]));
  out.partitionKeys = (i.partitionKeys !== undefined ? i.partitionKeys : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CatalogTablePartitionKey(ctx, depth + 1))]));
  out.retention = (i.retention !== undefined ? i.retention : 0);
  out.storageDescriptor = (i.storageDescriptor !== undefined ? i.storageDescriptor : (depth > 4 ? {} : T_glue.glue_CatalogTableStorageDescriptor(ctx, depth + 1)));
  out.tableType = (i.tableType !== undefined ? i.tableType : "");
  out.targetTable = (i.targetTable !== undefined ? i.targetTable : (depth > 4 ? {} : T_glue.glue_CatalogTableTargetTable(ctx, depth + 1)));
  out.viewExpandedText = (i.viewExpandedText !== undefined ? i.viewExpandedText : "");
  out.viewOriginalText = (i.viewOriginalText !== undefined ? i.viewOriginalText : "");
  return out;
}

// aws:glue/catalogTableOptimizer:CatalogTableOptimizer
export function CatalogTableOptimizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_glue.glue_CatalogTableOptimizerConfiguration(ctx, depth + 1)));
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:glue/classifier:Classifier
export function Classifier(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csvClassifier = (i.csvClassifier !== undefined ? i.csvClassifier : (depth > 4 ? {} : T_glue.glue_ClassifierCsvClassifier(ctx, depth + 1)));
  out.grokClassifier = (i.grokClassifier !== undefined ? i.grokClassifier : (depth > 4 ? {} : T_glue.glue_ClassifierGrokClassifier(ctx, depth + 1)));
  out.jsonClassifier = (i.jsonClassifier !== undefined ? i.jsonClassifier : (depth > 4 ? {} : T_glue.glue_ClassifierJsonClassifier(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.xmlClassifier = (i.xmlClassifier !== undefined ? i.xmlClassifier : (depth > 4 ? {} : T_glue.glue_ClassifierXmlClassifier(ctx, depth + 1)));
  return out;
}

// aws:glue/connection:Connection
export function Connection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.athenaProperties = (i.athenaProperties !== undefined ? i.athenaProperties : {});
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.connectionProperties = (i.connectionProperties !== undefined ? i.connectionProperties : {});
  out.connectionType = (i.connectionType !== undefined ? i.connectionType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.matchCriterias = (i.matchCriterias !== undefined ? i.matchCriterias : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.physicalConnectionRequirements = (i.physicalConnectionRequirements !== undefined ? i.physicalConnectionRequirements : (depth > 4 ? {} : T_glue.glue_ConnectionPhysicalConnectionRequirements(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:glue/crawler:Crawler
export function Crawler(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogTargets = (i.catalogTargets !== undefined ? i.catalogTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerCatalogTarget(ctx, depth + 1))]));
  out.classifiers = (i.classifiers !== undefined ? i.classifiers : (depth > 4 ? [] : [""]));
  out.configuration = (i.configuration !== undefined ? i.configuration : "");
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.deltaTargets = (i.deltaTargets !== undefined ? i.deltaTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerDeltaTarget(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.dynamodbTargets = (i.dynamodbTargets !== undefined ? i.dynamodbTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerDynamodbTarget(ctx, depth + 1))]));
  out.hudiTargets = (i.hudiTargets !== undefined ? i.hudiTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerHudiTarget(ctx, depth + 1))]));
  out.icebergTargets = (i.icebergTargets !== undefined ? i.icebergTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerIcebergTarget(ctx, depth + 1))]));
  out.jdbcTargets = (i.jdbcTargets !== undefined ? i.jdbcTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerJdbcTarget(ctx, depth + 1))]));
  out.lakeFormationConfiguration = (i.lakeFormationConfiguration !== undefined ? i.lakeFormationConfiguration : (depth > 4 ? {} : T_glue.glue_CrawlerLakeFormationConfiguration(ctx, depth + 1)));
  out.lineageConfiguration = (i.lineageConfiguration !== undefined ? i.lineageConfiguration : (depth > 4 ? {} : T_glue.glue_CrawlerLineageConfiguration(ctx, depth + 1)));
  out.mongodbTargets = (i.mongodbTargets !== undefined ? i.mongodbTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerMongodbTarget(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recrawlPolicy = (i.recrawlPolicy !== undefined ? i.recrawlPolicy : (depth > 4 ? {} : T_glue.glue_CrawlerRecrawlPolicy(ctx, depth + 1)));
  out.role = (i.role !== undefined ? i.role : "");
  out.s3Targets = (i.s3Targets !== undefined ? i.s3Targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_CrawlerS3Target(ctx, depth + 1))]));
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.schemaChangePolicy = (i.schemaChangePolicy !== undefined ? i.schemaChangePolicy : (depth > 4 ? {} : T_glue.glue_CrawlerSchemaChangePolicy(ctx, depth + 1)));
  out.securityConfiguration = (i.securityConfiguration !== undefined ? i.securityConfiguration : "");
  out.tablePrefix = (i.tablePrefix !== undefined ? i.tablePrefix : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:glue/dataCatalogEncryptionSettings:DataCatalogEncryptionSettings
export function DataCatalogEncryptionSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.dataCatalogEncryptionSettings = (i.dataCatalogEncryptionSettings !== undefined ? i.dataCatalogEncryptionSettings : (depth > 4 ? {} : T_glue.glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettings(ctx, depth + 1)));
  return out;
}

// aws:glue/dataQualityRuleset:DataQualityRuleset
export function DataQualityRuleset(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdOn = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.lastModifiedOn = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recommendationRunId = h.id(ctx, "recommendationRunId");
  out.ruleset = (i.ruleset !== undefined ? i.ruleset : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetTable = (i.targetTable !== undefined ? i.targetTable : (depth > 4 ? {} : T_glue.glue_DataQualityRulesetTargetTable(ctx, depth + 1)));
  return out;
}

// aws:glue/devEndpoint:DevEndpoint
export function DevEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arguments = (i.arguments !== undefined ? i.arguments : {});
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.extraJarsS3Path = (i.extraJarsS3Path !== undefined ? i.extraJarsS3Path : "");
  out.extraPythonLibsS3Path = (i.extraPythonLibsS3Path !== undefined ? i.extraPythonLibsS3Path : "");
  out.failureReason = "";
  out.glueVersion = (i.glueVersion !== undefined ? i.glueVersion : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.numberOfNodes = (i.numberOfNodes !== undefined ? i.numberOfNodes : 0);
  out.numberOfWorkers = (i.numberOfWorkers !== undefined ? i.numberOfWorkers : 0);
  out.privateAddress = "";
  out.publicAddress = "";
  out.publicKey = (i.publicKey !== undefined ? i.publicKey : "");
  out.publicKeys = (i.publicKeys !== undefined ? i.publicKeys : (depth > 4 ? [] : [""]));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.securityConfiguration = (i.securityConfiguration !== undefined ? i.securityConfiguration : "");
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.status = "active";
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.workerType = (i.workerType !== undefined ? i.workerType : "");
  out.yarnEndpointAddress = "";
  out.zeppelinRemoteSparkInterpreterPort = 443;
  return out;
}

// aws:glue/job:Job
export function Job(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.command = (i.command !== undefined ? i.command : (depth > 4 ? {} : T_glue.glue_JobCommand(ctx, depth + 1)));
  out.connections = (i.connections !== undefined ? i.connections : (depth > 4 ? [] : [""]));
  out.defaultArguments = (i.defaultArguments !== undefined ? i.defaultArguments : {});
  out.description = (i.description !== undefined ? i.description : "");
  out.executionClass = (i.executionClass !== undefined ? i.executionClass : "");
  out.executionProperty = (i.executionProperty !== undefined ? i.executionProperty : (depth > 4 ? {} : T_glue.glue_JobExecutionProperty(ctx, depth + 1)));
  out.glueVersion = (i.glueVersion !== undefined ? i.glueVersion : "");
  out.jobRunQueuingEnabled = (i.jobRunQueuingEnabled !== undefined ? i.jobRunQueuingEnabled : false);
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.maxCapacity = (i.maxCapacity !== undefined ? i.maxCapacity : 0);
  out.maxRetries = (i.maxRetries !== undefined ? i.maxRetries : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nonOverridableArguments = (i.nonOverridableArguments !== undefined ? i.nonOverridableArguments : {});
  out.notificationProperty = (i.notificationProperty !== undefined ? i.notificationProperty : (depth > 4 ? {} : T_glue.glue_JobNotificationProperty(ctx, depth + 1)));
  out.numberOfWorkers = (i.numberOfWorkers !== undefined ? i.numberOfWorkers : 0);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.securityConfiguration = (i.securityConfiguration !== undefined ? i.securityConfiguration : "");
  out.sourceControlDetails = (i.sourceControlDetails !== undefined ? i.sourceControlDetails : (depth > 4 ? {} : T_glue.glue_JobSourceControlDetails(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeout = (i.timeout !== undefined ? i.timeout : 30);
  out.workerType = (i.workerType !== undefined ? i.workerType : "");
  return out;
}

// aws:glue/mLTransform:MLTransform
export function MLTransform(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.glueVersion = (i.glueVersion !== undefined ? i.glueVersion : "");
  out.inputRecordTables = (i.inputRecordTables !== undefined ? i.inputRecordTables : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_MLTransformInputRecordTable(ctx, depth + 1))]));
  out.labelCount = 1;
  out.maxCapacity = (i.maxCapacity !== undefined ? i.maxCapacity : 0);
  out.maxRetries = (i.maxRetries !== undefined ? i.maxRetries : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.numberOfWorkers = (i.numberOfWorkers !== undefined ? i.numberOfWorkers : 0);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? {} : T_glue.glue_MLTransformParameters(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.schemas = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_MLTransformSchema(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeout = (i.timeout !== undefined ? i.timeout : 30);
  out.workerType = (i.workerType !== undefined ? i.workerType : "");
  return out;
}

// aws:glue/partition:Partition
export function Partition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.creationTime = "";
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.lastAccessedTime = "";
  out.lastAnalyzedTime = "";
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.partitionValues = (i.partitionValues !== undefined ? i.partitionValues : (depth > 4 ? [] : [""]));
  out.storageDescriptor = (i.storageDescriptor !== undefined ? i.storageDescriptor : (depth > 4 ? {} : T_glue.glue_PartitionStorageDescriptor(ctx, depth + 1)));
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:glue/partitionIndex:PartitionIndex
export function PartitionIndex(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.partitionIndex = (i.partitionIndex !== undefined ? i.partitionIndex : (depth > 4 ? {} : T_glue.glue_PartitionIndexPartitionIndex(ctx, depth + 1)));
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:glue/registry:Registry
export function Registry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.registryName = (i.registryName !== undefined ? i.registryName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:glue/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableHybrid = (i.enableHybrid !== undefined ? i.enableHybrid : h.id(ctx, "enableHybrid"));
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:glue/schema:Schema
export function Schema(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.compatibility = (i.compatibility !== undefined ? i.compatibility : "");
  out.dataFormat = (i.dataFormat !== undefined ? i.dataFormat : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.latestSchemaVersion = 0;
  out.nextSchemaVersion = 0;
  out.registryArn = (i.registryArn !== undefined ? i.registryArn : h.arn(ctx));
  out.registryName = "";
  out.schemaCheckpoint = 0;
  out.schemaDefinition = (i.schemaDefinition !== undefined ? i.schemaDefinition : "");
  out.schemaName = (i.schemaName !== undefined ? i.schemaName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:glue/securityConfiguration:SecurityConfiguration
export function SecurityConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_glue.glue_SecurityConfigurationEncryptionConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:glue/trigger:Trigger
export function Trigger(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_TriggerAction(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.eventBatchingConditions = (i.eventBatchingConditions !== undefined ? i.eventBatchingConditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_TriggerEventBatchingCondition(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.predicate = (i.predicate !== undefined ? i.predicate : (depth > 4 ? {} : T_glue.glue_TriggerPredicate(ctx, depth + 1)));
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.startOnCreation = (i.startOnCreation !== undefined ? i.startOnCreation : false);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.workflowName = (i.workflowName !== undefined ? i.workflowName : "");
  return out;
}

// aws:glue/userDefinedFunction:UserDefinedFunction
export function UserDefinedFunction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.className = (i.className !== undefined ? i.className : "");
  out.createTime = h.timestamp();
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerName = (i.ownerName !== undefined ? i.ownerName : "");
  out.ownerType = (i.ownerType !== undefined ? i.ownerType : "");
  out.resourceUris = (i.resourceUris !== undefined ? i.resourceUris : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_UserDefinedFunctionResourceUri(ctx, depth + 1))]));
  return out;
}

// aws:glue/workflow:Workflow
export function Workflow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultRunProperties = (i.defaultRunProperties !== undefined ? i.defaultRunProperties : {});
  out.description = (i.description !== undefined ? i.description : "");
  out.maxConcurrentRuns = (i.maxConcurrentRuns !== undefined ? i.maxConcurrentRuns : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

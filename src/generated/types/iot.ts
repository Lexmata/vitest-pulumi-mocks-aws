// GENERATED FILE — do not edit.
// Service: iot   (69 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_iot from "./iot.js";

// aws:iot/BillingGroupMetadata:BillingGroupMetadata
export function iot_BillingGroupMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationDate = h.timestamp();
  return out;
}

// aws:iot/BillingGroupProperties:BillingGroupProperties
export function iot_BillingGroupProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  return out;
}

// aws:iot/CaCertificateRegistrationConfig:CaCertificateRegistrationConfig
export function iot_CaCertificateRegistrationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.templateBody = "";
  out.templateName = "";
  return out;
}

// aws:iot/CaCertificateValidity:CaCertificateValidity
export function iot_CaCertificateValidity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notAfter = "";
  out.notBefore = "";
  return out;
}

// aws:iot/DomainConfigurationAuthorizerConfig:DomainConfigurationAuthorizerConfig
export function iot_DomainConfigurationAuthorizerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAuthorizerOverride = true;
  out.defaultAuthorizerName = "";
  return out;
}

// aws:iot/DomainConfigurationTlsConfig:DomainConfigurationTlsConfig
export function iot_DomainConfigurationTlsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityPolicy = "";
  return out;
}

// aws:iot/IndexingConfigurationThingGroupIndexingConfiguration:IndexingConfigurationThingGroupIndexingConfiguration
export function iot_IndexingConfigurationThingGroupIndexingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField(ctx, depth + 1))]);
  out.managedFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField(ctx, depth + 1))]);
  out.thingGroupIndexingMode = "";
  return out;
}

// aws:iot/IndexingConfigurationThingGroupIndexingConfigurationCustomField:IndexingConfigurationThingGroupIndexingConfigurationCustomField
export function iot_IndexingConfigurationThingGroupIndexingConfigurationCustomField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:iot/IndexingConfigurationThingGroupIndexingConfigurationManagedField:IndexingConfigurationThingGroupIndexingConfigurationManagedField
export function iot_IndexingConfigurationThingGroupIndexingConfigurationManagedField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:iot/IndexingConfigurationThingIndexingConfiguration:IndexingConfigurationThingIndexingConfiguration
export function iot_IndexingConfigurationThingIndexingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingIndexingConfigurationCustomField(ctx, depth + 1))]);
  out.deviceDefenderIndexingMode = "";
  out.filter = (depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingIndexingConfigurationFilter(ctx, depth + 1));
  out.managedFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingIndexingConfigurationManagedField(ctx, depth + 1))]);
  out.namedShadowIndexingMode = "";
  out.thingConnectivityIndexingMode = "";
  out.thingIndexingMode = "";
  return out;
}

// aws:iot/IndexingConfigurationThingIndexingConfigurationCustomField:IndexingConfigurationThingIndexingConfigurationCustomField
export function iot_IndexingConfigurationThingIndexingConfigurationCustomField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:iot/IndexingConfigurationThingIndexingConfigurationFilter:IndexingConfigurationThingIndexingConfigurationFilter
export function iot_IndexingConfigurationThingIndexingConfigurationFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namedShadowNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:iot/IndexingConfigurationThingIndexingConfigurationManagedField:IndexingConfigurationThingIndexingConfigurationManagedField
export function iot_IndexingConfigurationThingIndexingConfigurationManagedField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:iot/ProvisioningTemplatePreProvisioningHook:ProvisioningTemplatePreProvisioningHook
export function iot_ProvisioningTemplatePreProvisioningHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.payloadVersion = "";
  out.targetArn = h.arn(ctx);
  return out;
}

// aws:iot/ThingGroupMetadata:ThingGroupMetadata
export function iot_ThingGroupMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationDate = h.timestamp();
  out.parentGroupName = "";
  out.rootToParentGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_ThingGroupMetadataRootToParentGroup(ctx, depth + 1))]);
  return out;
}

// aws:iot/ThingGroupMetadataRootToParentGroup:ThingGroupMetadataRootToParentGroup
export function iot_ThingGroupMetadataRootToParentGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupArn = h.arn(ctx);
  out.groupName = "";
  return out;
}

// aws:iot/ThingGroupProperties:ThingGroupProperties
export function iot_ThingGroupProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributePayload = (depth > 4 ? {} : T_iot.iot_ThingGroupPropertiesAttributePayload(ctx, depth + 1));
  out.description = "";
  return out;
}

// aws:iot/ThingGroupPropertiesAttributePayload:ThingGroupPropertiesAttributePayload
export function iot_ThingGroupPropertiesAttributePayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = {};
  return out;
}

// aws:iot/ThingTypeProperties:ThingTypeProperties
export function iot_ThingTypeProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.searchableAttributes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:iot/TopicRuleCloudwatchAlarm:TopicRuleCloudwatchAlarm
export function iot_TopicRuleCloudwatchAlarm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmName = "";
  out.roleArn = h.arn(ctx);
  out.stateReason = "";
  out.stateValue = "";
  return out;
}

// aws:iot/TopicRuleCloudwatchLog:TopicRuleCloudwatchLog
export function iot_TopicRuleCloudwatchLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.logGroupName = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleCloudwatchMetric:TopicRuleCloudwatchMetric
export function iot_TopicRuleCloudwatchMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricName = "";
  out.metricNamespace = "";
  out.metricTimestamp = "";
  out.metricUnit = "";
  out.metricValue = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleDestinationVpcConfiguration:TopicRuleDestinationVpcConfiguration
export function iot_TopicRuleDestinationVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:iot/TopicRuleDynamodb:TopicRuleDynamodb
export function iot_TopicRuleDynamodb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hashKeyField = "";
  out.hashKeyType = "";
  out.hashKeyValue = "";
  out.operation = "";
  out.payloadField = "";
  out.rangeKeyField = "";
  out.rangeKeyType = "";
  out.rangeKeyValue = "";
  out.roleArn = h.arn(ctx);
  out.tableName = "";
  return out;
}

// aws:iot/TopicRuleDynamodbv2:TopicRuleDynamodbv2
export function iot_TopicRuleDynamodbv2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.putItem = (depth > 4 ? {} : T_iot.iot_TopicRuleDynamodbv2PutItem(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleDynamodbv2PutItem:TopicRuleDynamodbv2PutItem
export function iot_TopicRuleDynamodbv2PutItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tableName = "";
  return out;
}

// aws:iot/TopicRuleElasticsearch:TopicRuleElasticsearch
export function iot_TopicRuleElasticsearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.id = h.id(ctx, "id");
  out.index = "";
  out.roleArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:iot/TopicRuleErrorAction:TopicRuleErrorAction
export function iot_TopicRuleErrorAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchAlarm = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionCloudwatchAlarm(ctx, depth + 1));
  out.cloudwatchLogs = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionCloudwatchLogs(ctx, depth + 1));
  out.cloudwatchMetric = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionCloudwatchMetric(ctx, depth + 1));
  out.dynamodb = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionDynamodb(ctx, depth + 1));
  out.dynamodbv2 = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionDynamodbv2(ctx, depth + 1));
  out.elasticsearch = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionElasticsearch(ctx, depth + 1));
  out.firehose = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionFirehose(ctx, depth + 1));
  out.http = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionHttp(ctx, depth + 1));
  out.iotAnalytics = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionIotAnalytics(ctx, depth + 1));
  out.iotEvents = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionIotEvents(ctx, depth + 1));
  out.kafka = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionKafka(ctx, depth + 1));
  out.kinesis = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionKinesis(ctx, depth + 1));
  out.lambda = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionLambda(ctx, depth + 1));
  out.republish = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionRepublish(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionS3(ctx, depth + 1));
  out.sns = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionSns(ctx, depth + 1));
  out.sqs = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionSqs(ctx, depth + 1));
  out.stepFunctions = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionStepFunctions(ctx, depth + 1));
  out.timestream = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionTimestream(ctx, depth + 1));
  return out;
}

// aws:iot/TopicRuleErrorActionCloudwatchAlarm:TopicRuleErrorActionCloudwatchAlarm
export function iot_TopicRuleErrorActionCloudwatchAlarm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmName = "";
  out.roleArn = h.arn(ctx);
  out.stateReason = "";
  out.stateValue = "";
  return out;
}

// aws:iot/TopicRuleErrorActionCloudwatchLogs:TopicRuleErrorActionCloudwatchLogs
export function iot_TopicRuleErrorActionCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.logGroupName = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionCloudwatchMetric:TopicRuleErrorActionCloudwatchMetric
export function iot_TopicRuleErrorActionCloudwatchMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricName = "";
  out.metricNamespace = "";
  out.metricTimestamp = "";
  out.metricUnit = "";
  out.metricValue = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionDynamodb:TopicRuleErrorActionDynamodb
export function iot_TopicRuleErrorActionDynamodb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hashKeyField = "";
  out.hashKeyType = "";
  out.hashKeyValue = "";
  out.operation = "";
  out.payloadField = "";
  out.rangeKeyField = "";
  out.rangeKeyType = "";
  out.rangeKeyValue = "";
  out.roleArn = h.arn(ctx);
  out.tableName = "";
  return out;
}

// aws:iot/TopicRuleErrorActionDynamodbv2:TopicRuleErrorActionDynamodbv2
export function iot_TopicRuleErrorActionDynamodbv2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.putItem = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionDynamodbv2PutItem(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionDynamodbv2PutItem:TopicRuleErrorActionDynamodbv2PutItem
export function iot_TopicRuleErrorActionDynamodbv2PutItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tableName = "";
  return out;
}

// aws:iot/TopicRuleErrorActionElasticsearch:TopicRuleErrorActionElasticsearch
export function iot_TopicRuleErrorActionElasticsearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.id = h.id(ctx, "id");
  out.index = "";
  out.roleArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:iot/TopicRuleErrorActionFirehose:TopicRuleErrorActionFirehose
export function iot_TopicRuleErrorActionFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.deliveryStreamName = "";
  out.roleArn = h.arn(ctx);
  out.separator = "";
  return out;
}

// aws:iot/TopicRuleErrorActionHttp:TopicRuleErrorActionHttp
export function iot_TopicRuleErrorActionHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.confirmationUrl = h.endpoint(ctx, "confirmationUrl");
  out.httpHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionHttpHttpHeader(ctx, depth + 1))]);
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:iot/TopicRuleErrorActionHttpHttpHeader:TopicRuleErrorActionHttpHttpHeader
export function iot_TopicRuleErrorActionHttpHttpHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:iot/TopicRuleErrorActionIotAnalytics:TopicRuleErrorActionIotAnalytics
export function iot_TopicRuleErrorActionIotAnalytics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.channelName = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionIotEvents:TopicRuleErrorActionIotEvents
export function iot_TopicRuleErrorActionIotEvents(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.inputName = "";
  out.messageId = h.id(ctx, "messageId");
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionKafka:TopicRuleErrorActionKafka
export function iot_TopicRuleErrorActionKafka(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientProperties = {};
  out.destinationArn = h.arn(ctx);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionKafkaHeader(ctx, depth + 1))]);
  out.key = "";
  out.partition = ctx.partition;
  out.topic = "";
  return out;
}

// aws:iot/TopicRuleErrorActionKafkaHeader:TopicRuleErrorActionKafkaHeader
export function iot_TopicRuleErrorActionKafkaHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:iot/TopicRuleErrorActionKinesis:TopicRuleErrorActionKinesis
export function iot_TopicRuleErrorActionKinesis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKey = "";
  out.roleArn = h.arn(ctx);
  out.streamName = "";
  return out;
}

// aws:iot/TopicRuleErrorActionLambda:TopicRuleErrorActionLambda
export function iot_TopicRuleErrorActionLambda(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionRepublish:TopicRuleErrorActionRepublish
export function iot_TopicRuleErrorActionRepublish(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.qos = 0;
  out.roleArn = h.arn(ctx);
  out.topic = "";
  return out;
}

// aws:iot/TopicRuleErrorActionS3:TopicRuleErrorActionS3
export function iot_TopicRuleErrorActionS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.cannedAcl = "";
  out.key = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionSns:TopicRuleErrorActionSns
export function iot_TopicRuleErrorActionSns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageFormat = "";
  out.roleArn = h.arn(ctx);
  out.targetArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleErrorActionSqs:TopicRuleErrorActionSqs
export function iot_TopicRuleErrorActionSqs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queueUrl = h.endpoint(ctx, "queueUrl");
  out.roleArn = h.arn(ctx);
  out.useBase64 = false;
  return out;
}

// aws:iot/TopicRuleErrorActionStepFunctions:TopicRuleErrorActionStepFunctions
export function iot_TopicRuleErrorActionStepFunctions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionNamePrefix = "";
  out.roleArn = h.arn(ctx);
  out.stateMachineName = "";
  return out;
}

// aws:iot/TopicRuleErrorActionTimestream:TopicRuleErrorActionTimestream
export function iot_TopicRuleErrorActionTimestream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionTimestreamDimension(ctx, depth + 1))]);
  out.roleArn = h.arn(ctx);
  out.tableName = "";
  out.timestamp = (depth > 4 ? {} : T_iot.iot_TopicRuleErrorActionTimestreamTimestamp(ctx, depth + 1));
  return out;
}

// aws:iot/TopicRuleErrorActionTimestreamDimension:TopicRuleErrorActionTimestreamDimension
export function iot_TopicRuleErrorActionTimestreamDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:iot/TopicRuleErrorActionTimestreamTimestamp:TopicRuleErrorActionTimestreamTimestamp
export function iot_TopicRuleErrorActionTimestreamTimestamp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = "";
  return out;
}

// aws:iot/TopicRuleFirehose:TopicRuleFirehose
export function iot_TopicRuleFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.deliveryStreamName = "";
  out.roleArn = h.arn(ctx);
  out.separator = "";
  return out;
}

// aws:iot/TopicRuleHttp:TopicRuleHttp
export function iot_TopicRuleHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.confirmationUrl = h.endpoint(ctx, "confirmationUrl");
  out.httpHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleHttpHttpHeader(ctx, depth + 1))]);
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:iot/TopicRuleHttpHttpHeader:TopicRuleHttpHttpHeader
export function iot_TopicRuleHttpHttpHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:iot/TopicRuleIotAnalytic:TopicRuleIotAnalytic
export function iot_TopicRuleIotAnalytic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.channelName = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleIotEvent:TopicRuleIotEvent
export function iot_TopicRuleIotEvent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchMode = false;
  out.inputName = "";
  out.messageId = h.id(ctx, "messageId");
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleKafka:TopicRuleKafka
export function iot_TopicRuleKafka(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientProperties = {};
  out.destinationArn = h.arn(ctx);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleKafkaHeader(ctx, depth + 1))]);
  out.key = "";
  out.partition = ctx.partition;
  out.topic = "";
  return out;
}

// aws:iot/TopicRuleKafkaHeader:TopicRuleKafkaHeader
export function iot_TopicRuleKafkaHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:iot/TopicRuleKinesis:TopicRuleKinesis
export function iot_TopicRuleKinesis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKey = "";
  out.roleArn = h.arn(ctx);
  out.streamName = "";
  return out;
}

// aws:iot/TopicRuleLambda:TopicRuleLambda
export function iot_TopicRuleLambda(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleRepublish:TopicRuleRepublish
export function iot_TopicRuleRepublish(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.qos = 0;
  out.roleArn = h.arn(ctx);
  out.topic = "";
  return out;
}

// aws:iot/TopicRuleS3:TopicRuleS3
export function iot_TopicRuleS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.cannedAcl = "";
  out.key = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleSns:TopicRuleSns
export function iot_TopicRuleSns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageFormat = "";
  out.roleArn = h.arn(ctx);
  out.targetArn = h.arn(ctx);
  return out;
}

// aws:iot/TopicRuleSqs:TopicRuleSqs
export function iot_TopicRuleSqs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queueUrl = h.endpoint(ctx, "queueUrl");
  out.roleArn = h.arn(ctx);
  out.useBase64 = false;
  return out;
}

// aws:iot/TopicRuleStepFunction:TopicRuleStepFunction
export function iot_TopicRuleStepFunction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionNamePrefix = "";
  out.roleArn = h.arn(ctx);
  out.stateMachineName = "";
  return out;
}

// aws:iot/TopicRuleTimestream:TopicRuleTimestream
export function iot_TopicRuleTimestream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleTimestreamDimension(ctx, depth + 1))]);
  out.roleArn = h.arn(ctx);
  out.tableName = "";
  out.timestamp = (depth > 4 ? {} : T_iot.iot_TopicRuleTimestreamTimestamp(ctx, depth + 1));
  return out;
}

// aws:iot/TopicRuleTimestreamDimension:TopicRuleTimestreamDimension
export function iot_TopicRuleTimestreamDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:iot/TopicRuleTimestreamTimestamp:TopicRuleTimestreamTimestamp
export function iot_TopicRuleTimestreamTimestamp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = "";
  return out;
}

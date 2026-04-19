// GENERATED FILE — do not edit.
// Service: cloudwatch   (68 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudwatch from "./cloudwatch.js";

// aws:cloudwatch/CompositeAlarmActionsSuppressor:CompositeAlarmActionsSuppressor
export function cloudwatch_CompositeAlarmActionsSuppressor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarm = "";
  out.extensionPeriod = 0;
  out.waitPeriod = 0;
  return out;
}

// aws:cloudwatch/EventBusDeadLetterConfig:EventBusDeadLetterConfig
export function cloudwatch_EventBusDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/EventConnectionAuthParameters:EventConnectionAuthParameters
export function cloudwatch_EventConnectionAuthParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersApiKey(ctx, depth + 1));
  out.basic = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersBasic(ctx, depth + 1));
  out.invocationHttpParameters = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersInvocationHttpParameters(ctx, depth + 1));
  out.oauth = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauth(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersApiKey:EventConnectionAuthParametersApiKey
export function cloudwatch_EventConnectionAuthParametersApiKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersBasic:EventConnectionAuthParametersBasic
export function cloudwatch_EventConnectionAuthParametersBasic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersInvocationHttpParameters:EventConnectionAuthParametersInvocationHttpParameters
export function cloudwatch_EventConnectionAuthParametersInvocationHttpParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bodies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader(ctx, depth + 1))]);
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString(ctx, depth + 1))]);
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersInvocationHttpParametersBody:EventConnectionAuthParametersInvocationHttpParametersBody
export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersInvocationHttpParametersHeader:EventConnectionAuthParametersInvocationHttpParametersHeader
export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersInvocationHttpParametersQueryString:EventConnectionAuthParametersInvocationHttpParametersQueryString
export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauth:EventConnectionAuthParametersOauth
export function cloudwatch_EventConnectionAuthParametersOauth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientParameters = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauthClientParameters(ctx, depth + 1));
  out.httpMethod = "";
  out.oauthHttpParameters = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauthClientParameters:EventConnectionAuthParametersOauthClientParameters
export function cloudwatch_EventConnectionAuthParametersOauthClientParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauthOauthHttpParameters:EventConnectionAuthParametersOauthOauthHttpParameters
export function cloudwatch_EventConnectionAuthParametersOauthOauthHttpParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bodies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader(ctx, depth + 1))]);
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString(ctx, depth + 1))]);
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauthOauthHttpParametersBody:EventConnectionAuthParametersOauthOauthHttpParametersBody
export function cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauthOauthHttpParametersHeader:EventConnectionAuthParametersOauthOauthHttpParametersHeader
export function cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionAuthParametersOauthOauthHttpParametersQueryString:EventConnectionAuthParametersOauthOauthHttpParametersQueryString
export function cloudwatch_EventConnectionAuthParametersOauthOauthHttpParametersQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isValueSecret = true;
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventConnectionInvocationConnectivityParameters:EventConnectionInvocationConnectivityParameters
export function cloudwatch_EventConnectionInvocationConnectivityParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceParameters = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionInvocationConnectivityParametersResourceParameters(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/EventConnectionInvocationConnectivityParametersResourceParameters:EventConnectionInvocationConnectivityParametersResourceParameters
export function cloudwatch_EventConnectionInvocationConnectivityParametersResourceParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceAssociationArn = h.arn(ctx);
  out.resourceConfigurationArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/EventEndpointEventBus:EventEndpointEventBus
export function cloudwatch_EventEndpointEventBus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventBusArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/EventEndpointReplicationConfig:EventEndpointReplicationConfig
export function cloudwatch_EventEndpointReplicationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.state = "active";
  return out;
}

// aws:cloudwatch/EventEndpointRoutingConfig:EventEndpointRoutingConfig
export function cloudwatch_EventEndpointRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failoverConfig = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointRoutingConfigFailoverConfig(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/EventEndpointRoutingConfigFailoverConfig:EventEndpointRoutingConfigFailoverConfig
export function cloudwatch_EventEndpointRoutingConfigFailoverConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary(ctx, depth + 1));
  out.secondary = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/EventEndpointRoutingConfigFailoverConfigPrimary:EventEndpointRoutingConfigFailoverConfigPrimary
export function cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthCheck = "";
  return out;
}

// aws:cloudwatch/EventEndpointRoutingConfigFailoverConfigSecondary:EventEndpointRoutingConfigFailoverConfigSecondary
export function cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.route = "";
  return out;
}

// aws:cloudwatch/EventPermissionCondition:EventPermissionCondition
export function cloudwatch_EventPermissionCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/EventTargetAppsyncTarget:EventTargetAppsyncTarget
export function cloudwatch_EventTargetAppsyncTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.graphqlOperation = "";
  return out;
}

// aws:cloudwatch/EventTargetBatchTarget:EventTargetBatchTarget
export function cloudwatch_EventTargetBatchTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arraySize = 8;
  out.jobAttempts = 0;
  out.jobDefinition = "";
  out.jobName = "";
  return out;
}

// aws:cloudwatch/EventTargetDeadLetterConfig:EventTargetDeadLetterConfig
export function cloudwatch_EventTargetDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/EventTargetEcsTarget:EventTargetEcsTarget
export function cloudwatch_EventTargetEcsTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityProviderStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetEcsTargetCapacityProviderStrategy(ctx, depth + 1))]);
  out.enableEcsManagedTags = true;
  out.enableExecuteCommand = true;
  out.group = "";
  out.launchType = "";
  out.networkConfiguration = (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetEcsTargetNetworkConfiguration(ctx, depth + 1));
  out.orderedPlacementStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy(ctx, depth + 1))]);
  out.placementConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetEcsTargetPlacementConstraint(ctx, depth + 1))]);
  out.platformVersion = "";
  out.propagateTags = "";
  out.tags = {};
  out.taskCount = 1;
  out.taskDefinitionArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/EventTargetEcsTargetCapacityProviderStrategy:EventTargetEcsTargetCapacityProviderStrategy
export function cloudwatch_EventTargetEcsTargetCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:cloudwatch/EventTargetEcsTargetNetworkConfiguration:EventTargetEcsTargetNetworkConfiguration
export function cloudwatch_EventTargetEcsTargetNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudwatch/EventTargetEcsTargetOrderedPlacementStrategy:EventTargetEcsTargetOrderedPlacementStrategy
export function cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.field = "";
  out.type = "";
  return out;
}

// aws:cloudwatch/EventTargetEcsTargetPlacementConstraint:EventTargetEcsTargetPlacementConstraint
export function cloudwatch_EventTargetEcsTargetPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:cloudwatch/EventTargetHttpTarget:EventTargetHttpTarget
export function cloudwatch_EventTargetHttpTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerParameters = {};
  out.pathParameterValues = (depth > 4 ? [] : [""]);
  out.queryStringParameters = {};
  return out;
}

// aws:cloudwatch/EventTargetInputTransformer:EventTargetInputTransformer
export function cloudwatch_EventTargetInputTransformer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputPaths = {};
  out.inputTemplate = "";
  return out;
}

// aws:cloudwatch/EventTargetKinesisTarget:EventTargetKinesisTarget
export function cloudwatch_EventTargetKinesisTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKeyPath = "";
  return out;
}

// aws:cloudwatch/EventTargetRedshiftTarget:EventTargetRedshiftTarget
export function cloudwatch_EventTargetRedshiftTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.dbUser = "";
  out.secretsManagerArn = h.arn(ctx);
  out.sql = "";
  out.statementName = "";
  out.withEvent = false;
  return out;
}

// aws:cloudwatch/EventTargetRetryPolicy:EventTargetRetryPolicy
export function cloudwatch_EventTargetRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumEventAgeInSeconds = 0;
  out.maximumRetryAttempts = 0;
  return out;
}

// aws:cloudwatch/EventTargetRunCommandTarget:EventTargetRunCommandTarget
export function cloudwatch_EventTargetRunCommandTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudwatch/EventTargetSagemakerPipelineTarget:EventTargetSagemakerPipelineTarget
export function cloudwatch_EventTargetSagemakerPipelineTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pipelineParameterLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList(ctx, depth + 1))]);
  return out;
}

// aws:cloudwatch/EventTargetSagemakerPipelineTargetPipelineParameterList:EventTargetSagemakerPipelineTargetPipelineParameterList
export function cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:cloudwatch/EventTargetSqsTarget:EventTargetSqsTarget
export function cloudwatch_EventTargetSqsTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageGroupId = h.id(ctx, "messageGroupId");
  return out;
}

// aws:cloudwatch/InternetMonitorHealthEventsConfig:InternetMonitorHealthEventsConfig
export function cloudwatch_InternetMonitorHealthEventsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityScoreThreshold = 0;
  out.performanceScoreThreshold = 0;
  return out;
}

// aws:cloudwatch/InternetMonitorInternetMeasurementsLogDelivery:InternetMonitorInternetMeasurementsLogDelivery
export function cloudwatch_InternetMonitorInternetMeasurementsLogDelivery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Config = (depth > 4 ? {} : T_cloudwatch.cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/InternetMonitorInternetMeasurementsLogDeliveryS3Config:InternetMonitorInternetMeasurementsLogDeliveryS3Config
export function cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.logDeliveryStatus = "";
  return out;
}

// aws:cloudwatch/LogDeliveryDestinationDeliveryDestinationConfiguration:LogDeliveryDestinationDeliveryDestinationConfiguration
export function cloudwatch_LogDeliveryDestinationDeliveryDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationResourceArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/LogDeliveryS3DeliveryConfiguration:LogDeliveryS3DeliveryConfiguration
export function cloudwatch_LogDeliveryS3DeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableHiveCompatiblePath = true;
  out.suffixPath = "";
  return out;
}

// aws:cloudwatch/LogMetricFilterMetricTransformation:LogMetricFilterMetricTransformation
export function cloudwatch_LogMetricFilterMetricTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  out.dimensions = {};
  out.name = ctx.name;
  out.namespace = "";
  out.unit = "";
  out.value = "";
  return out;
}

// aws:cloudwatch/MetricAlarmMetricQuery:MetricAlarmMetricQuery
export function cloudwatch_MetricAlarmMetricQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metric = (depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricAlarmMetricQueryMetric(ctx, depth + 1));
  out.period = 0;
  out.returnData = false;
  return out;
}

// aws:cloudwatch/MetricAlarmMetricQueryMetric:MetricAlarmMetricQueryMetric
export function cloudwatch_MetricAlarmMetricQueryMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = {};
  out.metricName = "";
  out.namespace = "";
  out.period = 0;
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:cloudwatch/MetricStreamExcludeFilter:MetricStreamExcludeFilter
export function cloudwatch_MetricStreamExcludeFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricNames = (depth > 4 ? [] : [""]);
  out.namespace = "";
  return out;
}

// aws:cloudwatch/MetricStreamIncludeFilter:MetricStreamIncludeFilter
export function cloudwatch_MetricStreamIncludeFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricNames = (depth > 4 ? [] : [""]);
  out.namespace = "";
  return out;
}

// aws:cloudwatch/MetricStreamStatisticsConfiguration:MetricStreamStatisticsConfiguration
export function cloudwatch_MetricStreamStatisticsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalStatistics = (depth > 4 ? [] : [""]);
  out.includeMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric(ctx, depth + 1))]);
  return out;
}

// aws:cloudwatch/MetricStreamStatisticsConfigurationIncludeMetric:MetricStreamStatisticsConfigurationIncludeMetric
export function cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:cloudwatch/getContributorManagedInsightRulesManagedRule:getContributorManagedInsightRulesManagedRule
export function cloudwatch_getContributorManagedInsightRulesManagedRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.ruleStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getContributorManagedInsightRulesManagedRuleRuleState(ctx, depth + 1))]);
  out.templateName = "";
  return out;
}

// aws:cloudwatch/getContributorManagedInsightRulesManagedRuleRuleState:getContributorManagedInsightRulesManagedRuleRuleState
export function cloudwatch_getContributorManagedInsightRulesManagedRuleRuleState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleName = "";
  out.state = "active";
  return out;
}

// aws:cloudwatch/getEventBusDeadLetterConfig:getEventBusDeadLetterConfig
export function cloudwatch_getEventBusDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/getEventBusesEventBus:getEventBusesEventBus
export function cloudwatch_getEventBusesEventBus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.description = "";
  out.lastModifiedTime = "";
  out.name = ctx.name;
  out.policy = "";
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentConfiguration:getLogDataProtectionPolicyDocumentConfiguration
export function cloudwatch_getLogDataProtectionPolicyDocumentConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customDataIdentifiers = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier(ctx, depth + 1))]);
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier:getLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier
export function cloudwatch_getLogDataProtectionPolicyDocumentConfigurationCustomDataIdentifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.regex = "";
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatement:getLogDataProtectionPolicyDocumentStatement
export function cloudwatch_getLogDataProtectionPolicyDocumentStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataIdentifiers = (depth > 4 ? [] : [""]);
  out.operation = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation(ctx, depth + 1));
  out.sid = h.id(ctx, "sid");
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperation:getLogDataProtectionPolicyDocumentStatementOperation
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audit = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit(ctx, depth + 1));
  out.deidentify = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationAudit:getLogDataProtectionPolicyDocumentStatementOperationAudit
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.findingsDestination = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination:getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs(ctx, depth + 1));
  out.firehose = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs:getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroup = "";
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose:getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStream = "";
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3:getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationDeidentify:getLogDataProtectionPolicyDocumentStatementOperationDeidentify
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maskConfig = (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig(ctx, depth + 1));
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig:getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig
export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

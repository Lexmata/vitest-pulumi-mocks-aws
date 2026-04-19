// GENERATED FILE — do not edit.
// Service: cloudwatch   (32 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudwatch from "../types/cloudwatch.js";

// aws:cloudwatch/compositeAlarm:CompositeAlarm
export function CompositeAlarm(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionsEnabled = (i.actionsEnabled !== undefined ? i.actionsEnabled : false);
  out.actionsSuppressor = (i.actionsSuppressor !== undefined ? i.actionsSuppressor : (depth > 4 ? {} : T_cloudwatch.cloudwatch_CompositeAlarmActionsSuppressor(ctx, depth + 1)));
  out.alarmActions = (i.alarmActions !== undefined ? i.alarmActions : (depth > 4 ? [] : [""]));
  out.alarmDescription = (i.alarmDescription !== undefined ? i.alarmDescription : "");
  out.alarmName = (i.alarmName !== undefined ? i.alarmName : "");
  out.alarmRule = (i.alarmRule !== undefined ? i.alarmRule : "");
  out.arn = h.arn(ctx);
  out.insufficientDataActions = (i.insufficientDataActions !== undefined ? i.insufficientDataActions : (depth > 4 ? [] : [""]));
  out.okActions = (i.okActions !== undefined ? i.okActions : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/contributorInsightRule:ContributorInsightRule
export function ContributorInsightRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.ruleDefinition = (i.ruleDefinition !== undefined ? i.ruleDefinition : "");
  out.ruleName = (i.ruleName !== undefined ? i.ruleName : "");
  out.ruleState = (i.ruleState !== undefined ? i.ruleState : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/contributorManagedInsightRule:ContributorManagedInsightRule
export function ContributorManagedInsightRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.ruleName = "";
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateName = (i.templateName !== undefined ? i.templateName : "");
  return out;
}

// aws:cloudwatch/dashboard:Dashboard
export function Dashboard(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dashboardArn = h.arn(ctx);
  out.dashboardBody = (i.dashboardBody !== undefined ? i.dashboardBody : "");
  out.dashboardName = (i.dashboardName !== undefined ? i.dashboardName : "");
  return out;
}

// aws:cloudwatch/eventApiDestination:EventApiDestination
export function EventApiDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionArn = (i.connectionArn !== undefined ? i.connectionArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.invocationEndpoint = (i.invocationEndpoint !== undefined ? i.invocationEndpoint : h.endpoint(ctx, "invocationEndpoint"));
  out.invocationRateLimitPerSecond = (i.invocationRateLimitPerSecond !== undefined ? i.invocationRateLimitPerSecond : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cloudwatch/eventArchive:EventArchive
export function EventArchive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.eventPattern = (i.eventPattern !== undefined ? i.eventPattern : "");
  out.eventSourceArn = (i.eventSourceArn !== undefined ? i.eventSourceArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.retentionDays = (i.retentionDays !== undefined ? i.retentionDays : 0);
  return out;
}

// aws:cloudwatch/eventBus:EventBus
export function EventBus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deadLetterConfig = (i.deadLetterConfig !== undefined ? i.deadLetterConfig : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventBusDeadLetterConfig(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.eventSourceName = (i.eventSourceName !== undefined ? i.eventSourceName : "");
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/eventBusPolicy:EventBusPolicy
export function EventBusPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventBusName = (i.eventBusName !== undefined ? i.eventBusName : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:cloudwatch/eventConnection:EventConnection
export function EventConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authParameters = (i.authParameters !== undefined ? i.authParameters : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionAuthParameters(ctx, depth + 1)));
  out.authorizationType = (i.authorizationType !== undefined ? i.authorizationType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.invocationConnectivityParameters = (i.invocationConnectivityParameters !== undefined ? i.invocationConnectivityParameters : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventConnectionInvocationConnectivityParameters(ctx, depth + 1)));
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/eventEndpoint:EventEndpoint
export function EventEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.endpointUrl = h.endpoint(ctx, "endpointUrl");
  out.eventBuses = (i.eventBuses !== undefined ? i.eventBuses : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointEventBus(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.replicationConfig = (i.replicationConfig !== undefined ? i.replicationConfig : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointReplicationConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.routingConfig = (i.routingConfig !== undefined ? i.routingConfig : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventEndpointRoutingConfig(ctx, depth + 1)));
  return out;
}

// aws:cloudwatch/eventPermission:EventPermission
export function EventPermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.condition = (i.condition !== undefined ? i.condition : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventPermissionCondition(ctx, depth + 1)));
  out.eventBusName = (i.eventBusName !== undefined ? i.eventBusName : "");
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.statementId = (i.statementId !== undefined ? i.statementId : h.id(ctx, "statementId"));
  return out;
}

// aws:cloudwatch/eventRule:EventRule
export function EventRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.eventBusName = (i.eventBusName !== undefined ? i.eventBusName : "");
  out.eventPattern = (i.eventPattern !== undefined ? i.eventPattern : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.isEnabled = (i.isEnabled !== undefined ? i.isEnabled : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.scheduleExpression = (i.scheduleExpression !== undefined ? i.scheduleExpression : "");
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/eventTarget:EventTarget
export function EventTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appsyncTarget = (i.appsyncTarget !== undefined ? i.appsyncTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetAppsyncTarget(ctx, depth + 1)));
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.batchTarget = (i.batchTarget !== undefined ? i.batchTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetBatchTarget(ctx, depth + 1)));
  out.deadLetterConfig = (i.deadLetterConfig !== undefined ? i.deadLetterConfig : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetDeadLetterConfig(ctx, depth + 1)));
  out.ecsTarget = (i.ecsTarget !== undefined ? i.ecsTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetEcsTarget(ctx, depth + 1)));
  out.eventBusName = (i.eventBusName !== undefined ? i.eventBusName : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.httpTarget = (i.httpTarget !== undefined ? i.httpTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetHttpTarget(ctx, depth + 1)));
  out.input = (i.input !== undefined ? i.input : "");
  out.inputPath = (i.inputPath !== undefined ? i.inputPath : "");
  out.inputTransformer = (i.inputTransformer !== undefined ? i.inputTransformer : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetInputTransformer(ctx, depth + 1)));
  out.kinesisTarget = (i.kinesisTarget !== undefined ? i.kinesisTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetKinesisTarget(ctx, depth + 1)));
  out.redshiftTarget = (i.redshiftTarget !== undefined ? i.redshiftTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetRedshiftTarget(ctx, depth + 1)));
  out.retryPolicy = (i.retryPolicy !== undefined ? i.retryPolicy : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetRetryPolicy(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.rule = (i.rule !== undefined ? i.rule : "");
  out.runCommandTargets = (i.runCommandTargets !== undefined ? i.runCommandTargets : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetRunCommandTarget(ctx, depth + 1))]));
  out.sagemakerPipelineTarget = (i.sagemakerPipelineTarget !== undefined ? i.sagemakerPipelineTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetSagemakerPipelineTarget(ctx, depth + 1)));
  out.sqsTarget = (i.sqsTarget !== undefined ? i.sqsTarget : (depth > 4 ? {} : T_cloudwatch.cloudwatch_EventTargetSqsTarget(ctx, depth + 1)));
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  return out;
}

// aws:cloudwatch/internetMonitor:InternetMonitor
export function InternetMonitor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.healthEventsConfig = (i.healthEventsConfig !== undefined ? i.healthEventsConfig : (depth > 4 ? {} : T_cloudwatch.cloudwatch_InternetMonitorHealthEventsConfig(ctx, depth + 1)));
  out.internetMeasurementsLogDelivery = (i.internetMeasurementsLogDelivery !== undefined ? i.internetMeasurementsLogDelivery : (depth > 4 ? {} : T_cloudwatch.cloudwatch_InternetMonitorInternetMeasurementsLogDelivery(ctx, depth + 1)));
  out.maxCityNetworksToMonitor = (i.maxCityNetworksToMonitor !== undefined ? i.maxCityNetworksToMonitor : 0);
  out.monitorName = (i.monitorName !== undefined ? i.monitorName : "");
  out.resources = (i.resources !== undefined ? i.resources : (depth > 4 ? [] : [""]));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trafficPercentageToMonitor = (i.trafficPercentageToMonitor !== undefined ? i.trafficPercentageToMonitor : 0);
  return out;
}

// aws:cloudwatch/logAccountPolicy:LogAccountPolicy
export function LogAccountPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.policyName = (i.policyName !== undefined ? i.policyName : "");
  out.policyType = (i.policyType !== undefined ? i.policyType : "");
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.selectionCriteria = (i.selectionCriteria !== undefined ? i.selectionCriteria : "");
  return out;
}

// aws:cloudwatch/logAnomalyDetector:LogAnomalyDetector
export function LogAnomalyDetector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.anomalyVisibilityTime = (i.anomalyVisibilityTime !== undefined ? i.anomalyVisibilityTime : 0);
  out.arn = h.arn(ctx);
  out.detectorName = (i.detectorName !== undefined ? i.detectorName : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.evaluationFrequency = (i.evaluationFrequency !== undefined ? i.evaluationFrequency : "");
  out.filterPattern = (i.filterPattern !== undefined ? i.filterPattern : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logGroupArnLists = (i.logGroupArnLists !== undefined ? i.logGroupArnLists : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/logDataProtectionPolicy:LogDataProtectionPolicy
export function LogDataProtectionPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  return out;
}

// aws:cloudwatch/logDelivery:LogDelivery
export function LogDelivery(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliveryDestinationArn = (i.deliveryDestinationArn !== undefined ? i.deliveryDestinationArn : h.arn(ctx));
  out.deliverySourceName = (i.deliverySourceName !== undefined ? i.deliverySourceName : "");
  out.fieldDelimiter = (i.fieldDelimiter !== undefined ? i.fieldDelimiter : "");
  out.recordFields = (i.recordFields !== undefined ? i.recordFields : (depth > 4 ? [] : [""]));
  out.s3DeliveryConfigurations = (i.s3DeliveryConfigurations !== undefined ? i.s3DeliveryConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_LogDeliveryS3DeliveryConfiguration(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/logDeliveryDestination:LogDeliveryDestination
export function LogDeliveryDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliveryDestinationConfiguration = (i.deliveryDestinationConfiguration !== undefined ? i.deliveryDestinationConfiguration : (depth > 4 ? {} : T_cloudwatch.cloudwatch_LogDeliveryDestinationDeliveryDestinationConfiguration(ctx, depth + 1)));
  out.deliveryDestinationType = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputFormat = (i.outputFormat !== undefined ? i.outputFormat : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/logDeliveryDestinationPolicy:LogDeliveryDestinationPolicy
export function LogDeliveryDestinationPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryDestinationName = (i.deliveryDestinationName !== undefined ? i.deliveryDestinationName : "");
  out.deliveryDestinationPolicy = (i.deliveryDestinationPolicy !== undefined ? i.deliveryDestinationPolicy : "");
  return out;
}

// aws:cloudwatch/logDeliverySource:LogDeliverySource
export function LogDeliverySource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.logType = (i.logType !== undefined ? i.logType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.service = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/logDestination:LogDestination
export function LogDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  return out;
}

// aws:cloudwatch/logDestinationPolicy:LogDestinationPolicy
export function LogDestinationPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicy = (i.accessPolicy !== undefined ? i.accessPolicy : "");
  out.destinationName = (i.destinationName !== undefined ? i.destinationName : "");
  out.forceUpdate = (i.forceUpdate !== undefined ? i.forceUpdate : false);
  return out;
}

// aws:cloudwatch/logGroup:LogGroup
export function LogGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logGroupClass = (i.logGroupClass !== undefined ? i.logGroupClass : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.retentionInDays = (i.retentionInDays !== undefined ? i.retentionInDays : 0);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/logIndexPolicy:LogIndexPolicy
export function LogIndexPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  return out;
}

// aws:cloudwatch/logMetricFilter:LogMetricFilter
export function LogMetricFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  out.metricTransformation = (i.metricTransformation !== undefined ? i.metricTransformation : (depth > 4 ? {} : T_cloudwatch.cloudwatch_LogMetricFilterMetricTransformation(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.pattern = (i.pattern !== undefined ? i.pattern : "");
  return out;
}

// aws:cloudwatch/logResourcePolicy:LogResourcePolicy
export function LogResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.policyName = (i.policyName !== undefined ? i.policyName : "");
  return out;
}

// aws:cloudwatch/logStream:LogStream
export function LogStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cloudwatch/logSubscriptionFilter:LogSubscriptionFilter
export function LogSubscriptionFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationArn = (i.destinationArn !== undefined ? i.destinationArn : h.arn(ctx));
  out.distribution = (i.distribution !== undefined ? i.distribution : "");
  out.filterPattern = (i.filterPattern !== undefined ? i.filterPattern : "");
  out.logGroup = (i.logGroup !== undefined ? i.logGroup : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:cloudwatch/metricAlarm:MetricAlarm
export function MetricAlarm(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionsEnabled = (i.actionsEnabled !== undefined ? i.actionsEnabled : false);
  out.alarmActions = (i.alarmActions !== undefined ? i.alarmActions : (depth > 4 ? [] : [""]));
  out.alarmDescription = (i.alarmDescription !== undefined ? i.alarmDescription : "");
  out.arn = h.arn(ctx);
  out.comparisonOperator = (i.comparisonOperator !== undefined ? i.comparisonOperator : "");
  out.datapointsToAlarm = (i.datapointsToAlarm !== undefined ? i.datapointsToAlarm : 0);
  out.dimensions = (i.dimensions !== undefined ? i.dimensions : {});
  out.evaluateLowSampleCountPercentiles = (i.evaluateLowSampleCountPercentiles !== undefined ? i.evaluateLowSampleCountPercentiles : "");
  out.evaluationPeriods = (i.evaluationPeriods !== undefined ? i.evaluationPeriods : 0);
  out.extendedStatistic = (i.extendedStatistic !== undefined ? i.extendedStatistic : "");
  out.insufficientDataActions = (i.insufficientDataActions !== undefined ? i.insufficientDataActions : (depth > 4 ? [] : [""]));
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.metricQueries = (i.metricQueries !== undefined ? i.metricQueries : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricAlarmMetricQuery(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.okActions = (i.okActions !== undefined ? i.okActions : (depth > 4 ? [] : [""]));
  out.period = (i.period !== undefined ? i.period : 0);
  out.statistic = (i.statistic !== undefined ? i.statistic : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.threshold = (i.threshold !== undefined ? i.threshold : 0);
  out.thresholdMetricId = (i.thresholdMetricId !== undefined ? i.thresholdMetricId : h.id(ctx, "thresholdMetricId"));
  out.treatMissingData = (i.treatMissingData !== undefined ? i.treatMissingData : "");
  out.unit = (i.unit !== undefined ? i.unit : "");
  return out;
}

// aws:cloudwatch/metricStream:MetricStream
export function MetricStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.excludeFilters = (i.excludeFilters !== undefined ? i.excludeFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricStreamExcludeFilter(ctx, depth + 1))]));
  out.firehoseArn = (i.firehoseArn !== undefined ? i.firehoseArn : h.arn(ctx));
  out.includeFilters = (i.includeFilters !== undefined ? i.includeFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricStreamIncludeFilter(ctx, depth + 1))]));
  out.includeLinkedAccountsMetrics = (i.includeLinkedAccountsMetrics !== undefined ? i.includeLinkedAccountsMetrics : false);
  out.lastUpdateDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.outputFormat = (i.outputFormat !== undefined ? i.outputFormat : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.state = "active";
  out.statisticsConfigurations = (i.statisticsConfigurations !== undefined ? i.statisticsConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_MetricStreamStatisticsConfiguration(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cloudwatch/queryDefinition:QueryDefinition
export function QueryDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupNames = (i.logGroupNames !== undefined ? i.logGroupNames : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queryDefinitionId = h.id(ctx, "queryDefinitionId");
  out.queryString = (i.queryString !== undefined ? i.queryString : "");
  return out;
}

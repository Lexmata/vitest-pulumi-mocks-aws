// GENERATED FILE — do not edit.
// Service: iot   (19 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_iot from "../types/iot.js";

// aws:iot/authorizer:Authorizer
export function Authorizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authorizerFunctionArn = (i.authorizerFunctionArn !== undefined ? i.authorizerFunctionArn : h.arn(ctx));
  out.enableCachingForHttp = (i.enableCachingForHttp !== undefined ? i.enableCachingForHttp : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.signingDisabled = (i.signingDisabled !== undefined ? i.signingDisabled : false);
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tokenKeyName = (i.tokenKeyName !== undefined ? i.tokenKeyName : "");
  out.tokenSigningPublicKeys = (i.tokenSigningPublicKeys !== undefined ? i.tokenSigningPublicKeys : {});
  return out;
}

// aws:iot/billingGroup:BillingGroup
export function BillingGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_BillingGroupMetadata(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.properties = (i.properties !== undefined ? i.properties : (depth > 4 ? {} : T_iot.iot_BillingGroupProperties(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = 0;
  return out;
}

// aws:iot/caCertificate:CaCertificate
export function CaCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = (i.active !== undefined ? i.active : false);
  out.allowAutoRegistration = (i.allowAutoRegistration !== undefined ? i.allowAutoRegistration : true);
  out.arn = h.arn(ctx);
  out.caCertificatePem = (i.caCertificatePem !== undefined ? i.caCertificatePem : "");
  out.certificateMode = (i.certificateMode !== undefined ? i.certificateMode : "");
  out.customerVersion = 0;
  out.generationId = h.id(ctx, "generationId");
  out.registrationConfig = (i.registrationConfig !== undefined ? i.registrationConfig : (depth > 4 ? {} : T_iot.iot_CaCertificateRegistrationConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validities = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_CaCertificateValidity(ctx, depth + 1))]);
  out.verificationCertificatePem = (i.verificationCertificatePem !== undefined ? i.verificationCertificatePem : "");
  return out;
}

// aws:iot/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = (i.active !== undefined ? i.active : false);
  out.arn = h.arn(ctx);
  out.caCertificateId = h.id(ctx, "caCertificateId");
  out.caPem = (i.caPem !== undefined ? i.caPem : "");
  out.certificatePem = (i.certificatePem !== undefined ? i.certificatePem : "");
  out.csr = (i.csr !== undefined ? i.csr : "");
  out.privateKey = "";
  out.publicKey = "";
  return out;
}

// aws:iot/domainConfiguration:DomainConfiguration
export function DomainConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationProtocol = (i.applicationProtocol !== undefined ? i.applicationProtocol : "");
  out.arn = h.arn(ctx);
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.authorizerConfig = (i.authorizerConfig !== undefined ? i.authorizerConfig : (depth > 4 ? {} : T_iot.iot_DomainConfigurationAuthorizerConfig(ctx, depth + 1)));
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainType = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serverCertificateArns = (i.serverCertificateArns !== undefined ? i.serverCertificateArns : (depth > 4 ? [] : [""]));
  out.serviceType = (i.serviceType !== undefined ? i.serviceType : "");
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tlsConfig = (i.tlsConfig !== undefined ? i.tlsConfig : (depth > 4 ? {} : T_iot.iot_DomainConfigurationTlsConfig(ctx, depth + 1)));
  out.validationCertificateArn = (i.validationCertificateArn !== undefined ? i.validationCertificateArn : h.arn(ctx));
  return out;
}

// aws:iot/eventConfigurations:EventConfigurations
export function EventConfigurations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventConfigurations = (i.eventConfigurations !== undefined ? i.eventConfigurations : {});
  return out;
}

// aws:iot/indexingConfiguration:IndexingConfiguration
export function IndexingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.thingGroupIndexingConfiguration = (i.thingGroupIndexingConfiguration !== undefined ? i.thingGroupIndexingConfiguration : (depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingGroupIndexingConfiguration(ctx, depth + 1)));
  out.thingIndexingConfiguration = (i.thingIndexingConfiguration !== undefined ? i.thingIndexingConfiguration : (depth > 4 ? {} : T_iot.iot_IndexingConfigurationThingIndexingConfiguration(ctx, depth + 1)));
  return out;
}

// aws:iot/loggingOptions:LoggingOptions
export function LoggingOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultLogLevel = (i.defaultLogLevel !== undefined ? i.defaultLogLevel : "");
  out.disableAllLogs = (i.disableAllLogs !== undefined ? i.disableAllLogs : false);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:iot/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultVersionId = h.id(ctx, "defaultVersionId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:iot/policyAttachment:PolicyAttachment
export function PolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.target = (i.target !== undefined ? i.target : undefined);
  return out;
}

// aws:iot/provisioningTemplate:ProvisioningTemplate
export function ProvisioningTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultVersionId = 0;
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.preProvisioningHook = (i.preProvisioningHook !== undefined ? i.preProvisioningHook : (depth > 4 ? {} : T_iot.iot_ProvisioningTemplatePreProvisioningHook(ctx, depth + 1)));
  out.provisioningRoleArn = (i.provisioningRoleArn !== undefined ? i.provisioningRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateBody = (i.templateBody !== undefined ? i.templateBody : "");
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:iot/roleAlias:RoleAlias
export function RoleAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.arn = h.arn(ctx);
  out.credentialDuration = (i.credentialDuration !== undefined ? i.credentialDuration : 0);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:iot/thing:Thing
export function Thing(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : {});
  out.defaultClientId = h.id(ctx, "defaultClientId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.thingTypeName = (i.thingTypeName !== undefined ? i.thingTypeName : "");
  out.version = 0;
  return out;
}

// aws:iot/thingGroup:ThingGroup
export function ThingGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_ThingGroupMetadata(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentGroupName = (i.parentGroupName !== undefined ? i.parentGroupName : "");
  out.properties = (i.properties !== undefined ? i.properties : (depth > 4 ? {} : T_iot.iot_ThingGroupProperties(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = 0;
  return out;
}

// aws:iot/thingGroupMembership:ThingGroupMembership
export function ThingGroupMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.overrideDynamicGroup = (i.overrideDynamicGroup !== undefined ? i.overrideDynamicGroup : false);
  out.thingGroupName = (i.thingGroupName !== undefined ? i.thingGroupName : "");
  out.thingName = (i.thingName !== undefined ? i.thingName : "");
  return out;
}

// aws:iot/thingPrincipalAttachment:ThingPrincipalAttachment
export function ThingPrincipalAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.principal = (i.principal !== undefined ? i.principal : undefined);
  out.thing = (i.thing !== undefined ? i.thing : "");
  return out;
}

// aws:iot/thingType:ThingType
export function ThingType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deprecated = (i.deprecated !== undefined ? i.deprecated : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.properties = (i.properties !== undefined ? i.properties : (depth > 4 ? {} : T_iot.iot_ThingTypeProperties(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:iot/topicRule:TopicRule
export function TopicRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloudwatchAlarms = (i.cloudwatchAlarms !== undefined ? i.cloudwatchAlarms : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleCloudwatchAlarm(ctx, depth + 1))]));
  out.cloudwatchLogs = (i.cloudwatchLogs !== undefined ? i.cloudwatchLogs : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleCloudwatchLog(ctx, depth + 1))]));
  out.cloudwatchMetrics = (i.cloudwatchMetrics !== undefined ? i.cloudwatchMetrics : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleCloudwatchMetric(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.dynamodbs = (i.dynamodbs !== undefined ? i.dynamodbs : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleDynamodb(ctx, depth + 1))]));
  out.dynamodbv2s = (i.dynamodbv2s !== undefined ? i.dynamodbv2s : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleDynamodbv2(ctx, depth + 1))]));
  out.elasticsearch = (i.elasticsearch !== undefined ? i.elasticsearch : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleElasticsearch(ctx, depth + 1))]));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.errorAction = (i.errorAction !== undefined ? i.errorAction : (depth > 4 ? {} : T_iot.iot_TopicRuleErrorAction(ctx, depth + 1)));
  out.firehoses = (i.firehoses !== undefined ? i.firehoses : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleFirehose(ctx, depth + 1))]));
  out.https = (i.https !== undefined ? i.https : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleHttp(ctx, depth + 1))]));
  out.iotAnalytics = (i.iotAnalytics !== undefined ? i.iotAnalytics : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleIotAnalytic(ctx, depth + 1))]));
  out.iotEvents = (i.iotEvents !== undefined ? i.iotEvents : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleIotEvent(ctx, depth + 1))]));
  out.kafkas = (i.kafkas !== undefined ? i.kafkas : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleKafka(ctx, depth + 1))]));
  out.kineses = (i.kineses !== undefined ? i.kineses : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleKinesis(ctx, depth + 1))]));
  out.lambdas = (i.lambdas !== undefined ? i.lambdas : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleLambda(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.republishes = (i.republishes !== undefined ? i.republishes : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleRepublish(ctx, depth + 1))]));
  out.s3 = (i.s3 !== undefined ? i.s3 : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleS3(ctx, depth + 1))]));
  out.sns = (i.sns !== undefined ? i.sns : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleSns(ctx, depth + 1))]));
  out.sql = (i.sql !== undefined ? i.sql : "");
  out.sqlVersion = (i.sqlVersion !== undefined ? i.sqlVersion : "");
  out.sqs = (i.sqs !== undefined ? i.sqs : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleSqs(ctx, depth + 1))]));
  out.stepFunctions = (i.stepFunctions !== undefined ? i.stepFunctions : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleStepFunction(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timestreams = (i.timestreams !== undefined ? i.timestreams : (depth > 4 ? [] : [(depth > 4 ? {} : T_iot.iot_TopicRuleTimestream(ctx, depth + 1))]));
  return out;
}

// aws:iot/topicRuleDestination:TopicRuleDestination
export function TopicRuleDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.vpcConfiguration = (i.vpcConfiguration !== undefined ? i.vpcConfiguration : (depth > 4 ? {} : T_iot.iot_TopicRuleDestinationVpcConfiguration(ctx, depth + 1)));
  return out;
}

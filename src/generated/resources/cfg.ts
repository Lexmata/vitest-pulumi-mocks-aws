// GENERATED FILE — do not edit.
// Service: cfg   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cfg from "../types/cfg.js";

// aws:cfg/aggregateAuthorization:AggregateAuthorization
export function AggregateAuthorization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cfg/configurationAggregator:ConfigurationAggregator
export function ConfigurationAggregator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountAggregationSource = (i.accountAggregationSource !== undefined ? i.accountAggregationSource : (depth > 4 ? {} : T_cfg.cfg_ConfigurationAggregatorAccountAggregationSource(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.organizationAggregationSource = (i.organizationAggregationSource !== undefined ? i.organizationAggregationSource : (depth > 4 ? {} : T_cfg.cfg_ConfigurationAggregatorOrganizationAggregationSource(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cfg/conformancePack:ConformancePack
export function ConformancePack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliveryS3Bucket = (i.deliveryS3Bucket !== undefined ? i.deliveryS3Bucket : "");
  out.deliveryS3KeyPrefix = (i.deliveryS3KeyPrefix !== undefined ? i.deliveryS3KeyPrefix : "");
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_ConformancePackInputParameter(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.templateBody = (i.templateBody !== undefined ? i.templateBody : "");
  out.templateS3Uri = (i.templateS3Uri !== undefined ? i.templateS3Uri : h.endpoint(ctx, "templateS3Uri"));
  return out;
}

// aws:cfg/deliveryChannel:DeliveryChannel
export function DeliveryChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.s3BucketName = (i.s3BucketName !== undefined ? i.s3BucketName : "");
  out.s3KeyPrefix = (i.s3KeyPrefix !== undefined ? i.s3KeyPrefix : "");
  out.s3KmsKeyArn = (i.s3KmsKeyArn !== undefined ? i.s3KmsKeyArn : h.arn(ctx));
  out.snapshotDeliveryProperties = (i.snapshotDeliveryProperties !== undefined ? i.snapshotDeliveryProperties : (depth > 4 ? {} : T_cfg.cfg_DeliveryChannelSnapshotDeliveryProperties(ctx, depth + 1)));
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  return out;
}

// aws:cfg/organizationConformancePack:OrganizationConformancePack
export function OrganizationConformancePack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliveryS3Bucket = (i.deliveryS3Bucket !== undefined ? i.deliveryS3Bucket : "");
  out.deliveryS3KeyPrefix = (i.deliveryS3KeyPrefix !== undefined ? i.deliveryS3KeyPrefix : "");
  out.excludedAccounts = (i.excludedAccounts !== undefined ? i.excludedAccounts : (depth > 4 ? [] : [""]));
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_OrganizationConformancePackInputParameter(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.templateBody = (i.templateBody !== undefined ? i.templateBody : "");
  out.templateS3Uri = (i.templateS3Uri !== undefined ? i.templateS3Uri : h.endpoint(ctx, "templateS3Uri"));
  return out;
}

// aws:cfg/organizationCustomPolicyRule:OrganizationCustomPolicyRule
export function OrganizationCustomPolicyRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.debugLogDeliveryAccounts = (i.debugLogDeliveryAccounts !== undefined ? i.debugLogDeliveryAccounts : (depth > 4 ? [] : [""]));
  out.description = (i.description !== undefined ? i.description : "");
  out.excludedAccounts = (i.excludedAccounts !== undefined ? i.excludedAccounts : (depth > 4 ? [] : [""]));
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : "");
  out.maximumExecutionFrequency = (i.maximumExecutionFrequency !== undefined ? i.maximumExecutionFrequency : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyRuntime = (i.policyRuntime !== undefined ? i.policyRuntime : "");
  out.policyText = (i.policyText !== undefined ? i.policyText : "");
  out.resourceIdScope = (i.resourceIdScope !== undefined ? i.resourceIdScope : "");
  out.resourceTypesScopes = (i.resourceTypesScopes !== undefined ? i.resourceTypesScopes : (depth > 4 ? [] : [""]));
  out.tagKeyScope = (i.tagKeyScope !== undefined ? i.tagKeyScope : "");
  out.tagValueScope = (i.tagValueScope !== undefined ? i.tagValueScope : "");
  out.triggerTypes = (i.triggerTypes !== undefined ? i.triggerTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:cfg/organizationCustomRule:OrganizationCustomRule
export function OrganizationCustomRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.excludedAccounts = (i.excludedAccounts !== undefined ? i.excludedAccounts : (depth > 4 ? [] : [""]));
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : "");
  out.lambdaFunctionArn = (i.lambdaFunctionArn !== undefined ? i.lambdaFunctionArn : h.arn(ctx));
  out.maximumExecutionFrequency = (i.maximumExecutionFrequency !== undefined ? i.maximumExecutionFrequency : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceIdScope = (i.resourceIdScope !== undefined ? i.resourceIdScope : "");
  out.resourceTypesScopes = (i.resourceTypesScopes !== undefined ? i.resourceTypesScopes : (depth > 4 ? [] : [""]));
  out.tagKeyScope = (i.tagKeyScope !== undefined ? i.tagKeyScope : "");
  out.tagValueScope = (i.tagValueScope !== undefined ? i.tagValueScope : "");
  out.triggerTypes = (i.triggerTypes !== undefined ? i.triggerTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:cfg/organizationManagedRule:OrganizationManagedRule
export function OrganizationManagedRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.excludedAccounts = (i.excludedAccounts !== undefined ? i.excludedAccounts : (depth > 4 ? [] : [""]));
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : "");
  out.maximumExecutionFrequency = (i.maximumExecutionFrequency !== undefined ? i.maximumExecutionFrequency : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceIdScope = (i.resourceIdScope !== undefined ? i.resourceIdScope : "");
  out.resourceTypesScopes = (i.resourceTypesScopes !== undefined ? i.resourceTypesScopes : (depth > 4 ? [] : [""]));
  out.ruleIdentifier = (i.ruleIdentifier !== undefined ? i.ruleIdentifier : "");
  out.tagKeyScope = (i.tagKeyScope !== undefined ? i.tagKeyScope : "");
  out.tagValueScope = (i.tagValueScope !== undefined ? i.tagValueScope : "");
  return out;
}

// aws:cfg/recorder:Recorder
export function Recorder(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recordingGroup = (i.recordingGroup !== undefined ? i.recordingGroup : (depth > 4 ? {} : T_cfg.cfg_RecorderRecordingGroup(ctx, depth + 1)));
  out.recordingMode = (i.recordingMode !== undefined ? i.recordingMode : (depth > 4 ? {} : T_cfg.cfg_RecorderRecordingMode(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:cfg/recorderStatus:RecorderStatus
export function RecorderStatus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isEnabled = (i.isEnabled !== undefined ? i.isEnabled : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cfg/remediationConfiguration:RemediationConfiguration
export function RemediationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.automatic = (i.automatic !== undefined ? i.automatic : false);
  out.configRuleName = (i.configRuleName !== undefined ? i.configRuleName : "");
  out.executionControls = (i.executionControls !== undefined ? i.executionControls : (depth > 4 ? {} : T_cfg.cfg_RemediationConfigurationExecutionControls(ctx, depth + 1)));
  out.maximumAutomaticAttempts = (i.maximumAutomaticAttempts !== undefined ? i.maximumAutomaticAttempts : 0);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_RemediationConfigurationParameter(ctx, depth + 1))]));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.retryAttemptSeconds = (i.retryAttemptSeconds !== undefined ? i.retryAttemptSeconds : 0);
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  out.targetType = (i.targetType !== undefined ? i.targetType : "");
  out.targetVersion = (i.targetVersion !== undefined ? i.targetVersion : "");
  return out;
}

// aws:cfg/retentionConfiguration:RetentionConfiguration
export function RetentionConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.retentionPeriodInDays = (i.retentionPeriodInDays !== undefined ? i.retentionPeriodInDays : 0);
  return out;
}

// aws:cfg/rule:Rule
export function Rule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.evaluationModes = (i.evaluationModes !== undefined ? i.evaluationModes : (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_RuleEvaluationMode(ctx, depth + 1))]));
  out.inputParameters = (i.inputParameters !== undefined ? i.inputParameters : "");
  out.maximumExecutionFrequency = (i.maximumExecutionFrequency !== undefined ? i.maximumExecutionFrequency : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleId = h.id(ctx, "ruleId");
  out.scope = (i.scope !== undefined ? i.scope : (depth > 4 ? {} : T_cfg.cfg_RuleScope(ctx, depth + 1)));
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_cfg.cfg_RuleSource(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

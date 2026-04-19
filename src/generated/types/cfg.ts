// GENERATED FILE — do not edit.
// Service: cfg   (18 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cfg from "./cfg.js";

// aws:cfg/ConfigurationAggregatorAccountAggregationSource:ConfigurationAggregatorAccountAggregationSource
export function cfg_ConfigurationAggregatorAccountAggregationSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountIds = (depth > 4 ? [] : [""]);
  out.allRegions = false;
  out.regions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cfg/ConfigurationAggregatorOrganizationAggregationSource:ConfigurationAggregatorOrganizationAggregationSource
export function cfg_ConfigurationAggregatorOrganizationAggregationSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allRegions = false;
  out.regions = (depth > 4 ? [] : [""]);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:cfg/ConformancePackInputParameter:ConformancePackInputParameter
export function cfg_ConformancePackInputParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:cfg/DeliveryChannelSnapshotDeliveryProperties:DeliveryChannelSnapshotDeliveryProperties
export function cfg_DeliveryChannelSnapshotDeliveryProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryFrequency = "";
  return out;
}

// aws:cfg/OrganizationConformancePackInputParameter:OrganizationConformancePackInputParameter
export function cfg_OrganizationConformancePackInputParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:cfg/RecorderRecordingGroup:RecorderRecordingGroup
export function cfg_RecorderRecordingGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allSupported = false;
  out.exclusionByResourceTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_RecorderRecordingGroupExclusionByResourceType(ctx, depth + 1))]);
  out.includeGlobalResourceTypes = false;
  out.recordingStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_RecorderRecordingGroupRecordingStrategy(ctx, depth + 1))]);
  out.resourceTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cfg/RecorderRecordingGroupExclusionByResourceType:RecorderRecordingGroupExclusionByResourceType
export function cfg_RecorderRecordingGroupExclusionByResourceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cfg/RecorderRecordingGroupRecordingStrategy:RecorderRecordingGroupRecordingStrategy
export function cfg_RecorderRecordingGroupRecordingStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.useOnly = "";
  return out;
}

// aws:cfg/RecorderRecordingMode:RecorderRecordingMode
export function cfg_RecorderRecordingMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordingFrequency = "";
  out.recordingModeOverride = (depth > 4 ? {} : T_cfg.cfg_RecorderRecordingModeRecordingModeOverride(ctx, depth + 1));
  return out;
}

// aws:cfg/RecorderRecordingModeRecordingModeOverride:RecorderRecordingModeRecordingModeOverride
export function cfg_RecorderRecordingModeRecordingModeOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.recordingFrequency = "";
  out.resourceTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cfg/RemediationConfigurationExecutionControls:RemediationConfigurationExecutionControls
export function cfg_RemediationConfigurationExecutionControls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ssmControls = (depth > 4 ? {} : T_cfg.cfg_RemediationConfigurationExecutionControlsSsmControls(ctx, depth + 1));
  return out;
}

// aws:cfg/RemediationConfigurationExecutionControlsSsmControls:RemediationConfigurationExecutionControlsSsmControls
export function cfg_RemediationConfigurationExecutionControlsSsmControls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.concurrentExecutionRatePercentage = 0;
  out.errorPercentage = 0;
  return out;
}

// aws:cfg/RemediationConfigurationParameter:RemediationConfigurationParameter
export function cfg_RemediationConfigurationParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.resourceValue = "";
  out.staticValue = "";
  out.staticValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cfg/RuleEvaluationMode:RuleEvaluationMode
export function cfg_RuleEvaluationMode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}

// aws:cfg/RuleScope:RuleScope
export function cfg_RuleScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complianceResourceId = h.id(ctx, "complianceResourceId");
  out.complianceResourceTypes = (depth > 4 ? [] : [""]);
  out.tagKey = "";
  out.tagValue = "";
  return out;
}

// aws:cfg/RuleSource:RuleSource
export function cfg_RuleSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPolicyDetails = (depth > 4 ? {} : T_cfg.cfg_RuleSourceCustomPolicyDetails(ctx, depth + 1));
  out.owner = ctx.accountId;
  out.sourceDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_cfg.cfg_RuleSourceSourceDetail(ctx, depth + 1))]);
  out.sourceIdentifier = "";
  return out;
}

// aws:cfg/RuleSourceCustomPolicyDetails:RuleSourceCustomPolicyDetails
export function cfg_RuleSourceCustomPolicyDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableDebugLogDelivery = true;
  out.policyRuntime = "";
  out.policyText = "";
  return out;
}

// aws:cfg/RuleSourceSourceDetail:RuleSourceSourceDetail
export function cfg_RuleSourceSourceDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventSource = "";
  out.maximumExecutionFrequency = "";
  out.messageType = "";
  return out;
}

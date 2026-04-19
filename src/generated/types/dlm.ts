// GENERATED FILE — do not edit.
// Service: dlm   (17 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dlm from "./dlm.js";

// aws:dlm/LifecyclePolicyPolicyDetails:LifecyclePolicyPolicyDetails
export function dlm_LifecyclePolicyPolicyDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsAction(ctx, depth + 1));
  out.eventSource = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsEventSource(ctx, depth + 1));
  out.parameters = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsParameters(ctx, depth + 1));
  out.policyType = "";
  out.resourceLocations = "";
  out.resourceTypes = (depth > 4 ? [] : [""]);
  out.schedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsSchedule(ctx, depth + 1))]);
  out.targetTags = {};
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsAction:LifecyclePolicyPolicyDetailsAction
export function dlm_LifecyclePolicyPolicyDetailsAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crossRegionCopies = (depth > 4 ? [] : [(depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsActionCrossRegionCopy:LifecyclePolicyPolicyDetailsActionCrossRegionCopy
export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionConfiguration = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration(ctx, depth + 1));
  out.retainRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule(ctx, depth + 1));
  out.target = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration:LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration
export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cmkArn = h.arn(ctx);
  out.encrypted = false;
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule:LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule
export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsEventSource:LifecyclePolicyPolicyDetailsEventSource
export function dlm_LifecyclePolicyPolicyDetailsEventSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsEventSourceParameters(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsEventSourceParameters:LifecyclePolicyPolicyDetailsEventSourceParameters
export function dlm_LifecyclePolicyPolicyDetailsEventSourceParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.descriptionRegex = "";
  out.eventType = "";
  out.snapshotOwners = (depth > 4 ? [] : [""]);
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsParameters:LifecyclePolicyPolicyDetailsParameters
export function dlm_LifecyclePolicyPolicyDetailsParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludeBootVolume = false;
  out.noReboot = false;
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsSchedule:LifecyclePolicyPolicyDetailsSchedule
export function dlm_LifecyclePolicyPolicyDetailsSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyTags = false;
  out.createRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule(ctx, depth + 1));
  out.crossRegionCopyRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule(ctx, depth + 1))]);
  out.deprecateRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule(ctx, depth + 1));
  out.fastRestoreRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule(ctx, depth + 1));
  out.name = ctx.name;
  out.retainRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule(ctx, depth + 1));
  out.shareRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleShareRule(ctx, depth + 1));
  out.tagsToAdd = {};
  out.variableTags = {};
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleCreateRule:LifecyclePolicyPolicyDetailsScheduleCreateRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cronExpression = "";
  out.interval = 0;
  out.intervalUnit = "";
  out.location = "";
  out.times = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule:LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cmkArn = h.arn(ctx);
  out.copyTags = false;
  out.deprecateRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule(ctx, depth + 1));
  out.encrypted = false;
  out.retainRule = (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule(ctx, depth + 1));
  out.target = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule:LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule:LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleDeprecateRule:LifecyclePolicyPolicyDetailsScheduleDeprecateRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleFastRestoreRule:LifecyclePolicyPolicyDetailsScheduleFastRestoreRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.count = 1;
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleRetainRule:LifecyclePolicyPolicyDetailsScheduleRetainRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.interval = 0;
  out.intervalUnit = "";
  return out;
}

// aws:dlm/LifecyclePolicyPolicyDetailsScheduleShareRule:LifecyclePolicyPolicyDetailsScheduleShareRule
export function dlm_LifecyclePolicyPolicyDetailsScheduleShareRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetAccounts = (depth > 4 ? [] : [""]);
  out.unshareInterval = 0;
  out.unshareIntervalUnit = "";
  return out;
}

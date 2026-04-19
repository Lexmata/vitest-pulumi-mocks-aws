// GENERATED FILE — do not edit.
// Service: backup   (30 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_backup from "./backup.js";

// aws:backup/FrameworkControl:FrameworkControl
export function backup_FrameworkControl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_FrameworkControlInputParameter(ctx, depth + 1))]);
  out.name = ctx.name;
  out.scope = (depth > 4 ? {} : T_backup.backup_FrameworkControlScope(ctx, depth + 1));
  return out;
}

// aws:backup/FrameworkControlInputParameter:FrameworkControlInputParameter
export function backup_FrameworkControlInputParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:backup/FrameworkControlScope:FrameworkControlScope
export function backup_FrameworkControlScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complianceResourceIds = (depth > 4 ? [] : [""]);
  out.complianceResourceTypes = (depth > 4 ? [] : [""]);
  out.tags = {};
  return out;
}

// aws:backup/LogicallyAirGappedVaultTimeouts:LogicallyAirGappedVaultTimeouts
export function backup_LogicallyAirGappedVaultTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:backup/PlanAdvancedBackupSetting:PlanAdvancedBackupSetting
export function backup_PlanAdvancedBackupSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backupOptions = {};
  out.resourceType = "";
  return out;
}

// aws:backup/PlanRule:PlanRule
export function backup_PlanRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completionWindow = 0;
  out.copyActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_PlanRuleCopyAction(ctx, depth + 1))]);
  out.enableContinuousBackup = true;
  out.lifecycle = (depth > 4 ? {} : T_backup.backup_PlanRuleLifecycle(ctx, depth + 1));
  out.recoveryPointTags = {};
  out.ruleName = "";
  out.schedule = "";
  out.scheduleExpressionTimezone = "";
  out.startWindow = 0;
  out.targetVaultName = "";
  return out;
}

// aws:backup/PlanRuleCopyAction:PlanRuleCopyAction
export function backup_PlanRuleCopyAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationVaultArn = h.arn(ctx);
  out.lifecycle = (depth > 4 ? {} : T_backup.backup_PlanRuleCopyActionLifecycle(ctx, depth + 1));
  return out;
}

// aws:backup/PlanRuleCopyActionLifecycle:PlanRuleCopyActionLifecycle
export function backup_PlanRuleCopyActionLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageAfter = 0;
  out.deleteAfter = 0;
  out.optInToArchiveForSupportedResources = false;
  return out;
}

// aws:backup/PlanRuleLifecycle:PlanRuleLifecycle
export function backup_PlanRuleLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageAfter = 0;
  out.deleteAfter = 0;
  out.optInToArchiveForSupportedResources = false;
  return out;
}

// aws:backup/ReportPlanReportDeliveryChannel:ReportPlanReportDeliveryChannel
export function backup_ReportPlanReportDeliveryChannel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.formats = (depth > 4 ? [] : [""]);
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  return out;
}

// aws:backup/ReportPlanReportSetting:ReportPlanReportSetting
export function backup_ReportPlanReportSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.frameworkArns = (depth > 4 ? [] : [""]);
  out.numberOfFrameworks = 0;
  out.organizationUnits = (depth > 4 ? [] : [""]);
  out.regions = (depth > 4 ? [] : [""]);
  out.reportTemplate = "";
  return out;
}

// aws:backup/RestoreTestingPlanRecoveryPointSelection:RestoreTestingPlanRecoveryPointSelection
export function backup_RestoreTestingPlanRecoveryPointSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.algorithm = "";
  out.excludeVaults = (depth > 4 ? [] : [""]);
  out.includeVaults = (depth > 4 ? [] : [""]);
  out.recoveryPointTypes = (depth > 4 ? [] : [""]);
  out.selectionWindowDays = 0;
  return out;
}

// aws:backup/RestoreTestingSelectionProtectedResourceConditions:RestoreTestingSelectionProtectedResourceConditions
export function backup_RestoreTestingSelectionProtectedResourceConditions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stringEquals = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_RestoreTestingSelectionProtectedResourceConditionsStringEqual(ctx, depth + 1))]);
  out.stringNotEquals = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_RestoreTestingSelectionProtectedResourceConditionsStringNotEqual(ctx, depth + 1))]);
  return out;
}

// aws:backup/RestoreTestingSelectionProtectedResourceConditionsStringEqual:RestoreTestingSelectionProtectedResourceConditionsStringEqual
export function backup_RestoreTestingSelectionProtectedResourceConditionsStringEqual(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/RestoreTestingSelectionProtectedResourceConditionsStringNotEqual:RestoreTestingSelectionProtectedResourceConditionsStringNotEqual
export function backup_RestoreTestingSelectionProtectedResourceConditionsStringNotEqual(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/SelectionCondition:SelectionCondition
export function backup_SelectionCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stringEquals = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionConditionStringEqual(ctx, depth + 1))]);
  out.stringLikes = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionConditionStringLike(ctx, depth + 1))]);
  out.stringNotEquals = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionConditionStringNotEqual(ctx, depth + 1))]);
  out.stringNotLikes = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionConditionStringNotLike(ctx, depth + 1))]);
  return out;
}

// aws:backup/SelectionConditionStringEqual:SelectionConditionStringEqual
export function backup_SelectionConditionStringEqual(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/SelectionConditionStringLike:SelectionConditionStringLike
export function backup_SelectionConditionStringLike(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/SelectionConditionStringNotEqual:SelectionConditionStringNotEqual
export function backup_SelectionConditionStringNotEqual(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/SelectionConditionStringNotLike:SelectionConditionStringNotLike
export function backup_SelectionConditionStringNotLike(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:backup/SelectionSelectionTag:SelectionSelectionTag
export function backup_SelectionSelectionTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:backup/getFrameworkControl:getFrameworkControl
export function backup_getFrameworkControl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getFrameworkControlInputParameter(ctx, depth + 1))]);
  out.name = ctx.name;
  out.scopes = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getFrameworkControlScope(ctx, depth + 1))]);
  return out;
}

// aws:backup/getFrameworkControlInputParameter:getFrameworkControlInputParameter
export function backup_getFrameworkControlInputParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:backup/getFrameworkControlScope:getFrameworkControlScope
export function backup_getFrameworkControlScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complianceResourceIds = (depth > 4 ? [] : [""]);
  out.complianceResourceTypes = (depth > 4 ? [] : [""]);
  out.tags = {};
  return out;
}

// aws:backup/getPlanRule:getPlanRule
export function backup_getPlanRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completionWindow = 0;
  out.copyActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getPlanRuleCopyAction(ctx, depth + 1))]);
  out.enableContinuousBackup = true;
  out.lifecycles = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getPlanRuleLifecycle(ctx, depth + 1))]);
  out.recoveryPointTags = {};
  out.ruleName = "";
  out.schedule = "";
  out.scheduleExpressionTimezone = "";
  out.startWindow = 0;
  out.targetVaultName = "";
  return out;
}

// aws:backup/getPlanRuleCopyAction:getPlanRuleCopyAction
export function backup_getPlanRuleCopyAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationVaultArn = h.arn(ctx);
  out.lifecycles = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getPlanRuleCopyActionLifecycle(ctx, depth + 1))]);
  return out;
}

// aws:backup/getPlanRuleCopyActionLifecycle:getPlanRuleCopyActionLifecycle
export function backup_getPlanRuleCopyActionLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageAfter = 0;
  out.deleteAfter = 0;
  out.optInToArchiveForSupportedResources = false;
  return out;
}

// aws:backup/getPlanRuleLifecycle:getPlanRuleLifecycle
export function backup_getPlanRuleLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageAfter = 0;
  out.deleteAfter = 0;
  out.optInToArchiveForSupportedResources = false;
  return out;
}

// aws:backup/getReportPlanReportDeliveryChannel:getReportPlanReportDeliveryChannel
export function backup_getReportPlanReportDeliveryChannel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.formats = (depth > 4 ? [] : [""]);
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  return out;
}

// aws:backup/getReportPlanReportSetting:getReportPlanReportSetting
export function backup_getReportPlanReportSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.frameworkArns = (depth > 4 ? [] : [""]);
  out.numberOfFrameworks = 0;
  out.organizationUnits = (depth > 4 ? [] : [""]);
  out.regions = (depth > 4 ? [] : [""]);
  out.reportTemplate = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: ssm   (51 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssm from "./ssm.js";

// aws:ssm/AssociationOutputLocation:AssociationOutputLocation
export function ssm_AssociationOutputLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  out.s3Region = "";
  return out;
}

// aws:ssm/AssociationTarget:AssociationTarget
export function ssm_AssociationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/ContactsRotationRecurrence:ContactsRotationRecurrence
export function ssm_ContactsRotationRecurrence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dailySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceDailySetting(ctx, depth + 1))]);
  out.monthlySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceMonthlySetting(ctx, depth + 1))]);
  out.numberOfOnCalls = 0;
  out.recurrenceMultiplier = 0;
  out.shiftCoverages = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceShiftCoverage(ctx, depth + 1))]);
  out.weeklySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceWeeklySetting(ctx, depth + 1))]);
  return out;
}

// aws:ssm/ContactsRotationRecurrenceDailySetting:ContactsRotationRecurrenceDailySetting
export function ssm_ContactsRotationRecurrenceDailySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/ContactsRotationRecurrenceMonthlySetting:ContactsRotationRecurrenceMonthlySetting
export function ssm_ContactsRotationRecurrenceMonthlySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfMonth = 0;
  out.handOffTime = (depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime(ctx, depth + 1));
  return out;
}

// aws:ssm/ContactsRotationRecurrenceMonthlySettingHandOffTime:ContactsRotationRecurrenceMonthlySettingHandOffTime
export function ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/ContactsRotationRecurrenceShiftCoverage:ContactsRotationRecurrenceShiftCoverage
export function ssm_ContactsRotationRecurrenceShiftCoverage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coverageTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime(ctx, depth + 1))]);
  out.mapBlockKey = "";
  return out;
}

// aws:ssm/ContactsRotationRecurrenceShiftCoverageCoverageTime:ContactsRotationRecurrenceShiftCoverageCoverageTime
export function ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = (depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd(ctx, depth + 1));
  out.start = (depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart(ctx, depth + 1));
  return out;
}

// aws:ssm/ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd:ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd
export function ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/ContactsRotationRecurrenceShiftCoverageCoverageTimeStart:ContactsRotationRecurrenceShiftCoverageCoverageTimeStart
export function ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/ContactsRotationRecurrenceWeeklySetting:ContactsRotationRecurrenceWeeklySetting
export function ssm_ContactsRotationRecurrenceWeeklySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfWeek = "";
  out.handOffTime = (depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime(ctx, depth + 1));
  return out;
}

// aws:ssm/ContactsRotationRecurrenceWeeklySettingHandOffTime:ContactsRotationRecurrenceWeeklySettingHandOffTime
export function ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/DocumentAttachmentsSource:DocumentAttachmentsSource
export function ssm_DocumentAttachmentsSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/DocumentParameter:DocumentParameter
export function ssm_DocumentParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  out.description = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:ssm/MaintenanceWindowTargetTarget:MaintenanceWindowTargetTarget
export function ssm_MaintenanceWindowTargetTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/MaintenanceWindowTaskTarget:MaintenanceWindowTaskTarget
export function ssm_MaintenanceWindowTaskTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParameters:MaintenanceWindowTaskTaskInvocationParameters
export function ssm_MaintenanceWindowTaskTaskInvocationParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automationParameters = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters(ctx, depth + 1));
  out.lambdaParameters = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters(ctx, depth + 1));
  out.runCommandParameters = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters(ctx, depth + 1));
  out.stepFunctionsParameters = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters(ctx, depth + 1));
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersAutomationParameters:MaintenanceWindowTaskTaskInvocationParametersAutomationParameters
export function ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.documentVersion = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter(ctx, depth + 1))]);
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter:MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter
export function ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersLambdaParameters:MaintenanceWindowTaskTaskInvocationParametersLambdaParameters
export function ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientContext = "";
  out.payload = "";
  out.qualifier = "";
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters:MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters
export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchConfig = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig(ctx, depth + 1));
  out.comment = "";
  out.documentHash = "";
  out.documentHashType = "";
  out.documentVersion = "";
  out.notificationConfig = (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig(ctx, depth + 1));
  out.outputS3Bucket = "";
  out.outputS3KeyPrefix = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter(ctx, depth + 1))]);
  out.serviceRoleArn = h.arn(ctx);
  out.timeoutSeconds = 30;
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig:MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig
export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroupName = "";
  out.cloudwatchOutputEnabled = false;
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig:MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig
export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notificationArn = h.arn(ctx);
  out.notificationEvents = (depth > 4 ? [] : [""]);
  out.notificationType = "";
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter:MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter
export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters:MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters
export function ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.input = "";
  out.name = ctx.name;
  return out;
}

// aws:ssm/PatchBaselineApprovalRule:PatchBaselineApprovalRule
export function ssm_PatchBaselineApprovalRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approveAfterDays = 0;
  out.approveUntilDate = "";
  out.complianceLevel = "";
  out.enableNonSecurity = true;
  out.patchFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_PatchBaselineApprovalRulePatchFilter(ctx, depth + 1))]);
  return out;
}

// aws:ssm/PatchBaselineApprovalRulePatchFilter:PatchBaselineApprovalRulePatchFilter
export function ssm_PatchBaselineApprovalRulePatchFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/PatchBaselineGlobalFilter:PatchBaselineGlobalFilter
export function ssm_PatchBaselineGlobalFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/PatchBaselineSource:PatchBaselineSource
export function ssm_PatchBaselineSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = "";
  out.name = ctx.name;
  out.products = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/QuicksetupConfigurationManagerConfigurationDefinition:QuicksetupConfigurationManagerConfigurationDefinition
export function ssm_QuicksetupConfigurationManagerConfigurationDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.localDeploymentAdministrationRoleArn = h.arn(ctx);
  out.localDeploymentExecutionRoleName = "";
  out.parameters = {};
  out.type = "";
  out.typeVersion = "";
  return out;
}

// aws:ssm/QuicksetupConfigurationManagerStatusSummary:QuicksetupConfigurationManagerStatusSummary
export function ssm_QuicksetupConfigurationManagerStatusSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.statusMessage = "";
  out.statusType = "";
  return out;
}

// aws:ssm/QuicksetupConfigurationManagerTimeouts:QuicksetupConfigurationManagerTimeouts
export function ssm_QuicksetupConfigurationManagerTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ssm/ResourceDataSyncS3Destination:ResourceDataSyncS3Destination
export function ssm_ResourceDataSyncS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.region = ctx.region;
  out.syncFormat = "";
  return out;
}

// aws:ssm/getContactsRotationRecurrence:getContactsRotationRecurrence
export function ssm_getContactsRotationRecurrence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dailySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceDailySetting(ctx, depth + 1))]);
  out.monthlySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceMonthlySetting(ctx, depth + 1))]);
  out.numberOfOnCalls = 0;
  out.recurrenceMultiplier = 0;
  out.shiftCoverages = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceShiftCoverage(ctx, depth + 1))]);
  out.weeklySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceWeeklySetting(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getContactsRotationRecurrenceDailySetting:getContactsRotationRecurrenceDailySetting
export function ssm_getContactsRotationRecurrenceDailySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/getContactsRotationRecurrenceMonthlySetting:getContactsRotationRecurrenceMonthlySetting
export function ssm_getContactsRotationRecurrenceMonthlySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfMonth = 0;
  out.handOffTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getContactsRotationRecurrenceMonthlySettingHandOffTime:getContactsRotationRecurrenceMonthlySettingHandOffTime
export function ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/getContactsRotationRecurrenceShiftCoverage:getContactsRotationRecurrenceShiftCoverage
export function ssm_getContactsRotationRecurrenceShiftCoverage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coverageTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime(ctx, depth + 1))]);
  out.mapBlockKey = "";
  return out;
}

// aws:ssm/getContactsRotationRecurrenceShiftCoverageCoverageTime:getContactsRotationRecurrenceShiftCoverageCoverageTime
export function ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ends = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd(ctx, depth + 1))]);
  out.starts = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd:getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd
export function ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/getContactsRotationRecurrenceShiftCoverageCoverageTimeStart:getContactsRotationRecurrenceShiftCoverageCoverageTimeStart
export function ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/getContactsRotationRecurrenceWeeklySetting:getContactsRotationRecurrenceWeeklySetting
export function ssm_getContactsRotationRecurrenceWeeklySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfWeek = "";
  out.handOffTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getContactsRotationRecurrenceWeeklySettingHandOffTime:getContactsRotationRecurrenceWeeklySettingHandOffTime
export function ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:ssm/getInstancesFilter:getInstancesFilter
export function ssm_getInstancesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getMaintenanceWindowsFilter:getMaintenanceWindowsFilter
export function ssm_getMaintenanceWindowsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getPatchBaselineApprovalRule:getPatchBaselineApprovalRule
export function ssm_getPatchBaselineApprovalRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approveAfterDays = 0;
  out.approveUntilDate = "";
  out.complianceLevel = "";
  out.enableNonSecurity = true;
  out.patchFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselineApprovalRulePatchFilter(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getPatchBaselineApprovalRulePatchFilter:getPatchBaselineApprovalRulePatchFilter
export function ssm_getPatchBaselineApprovalRulePatchFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getPatchBaselineGlobalFilter:getPatchBaselineGlobalFilter
export function ssm_getPatchBaselineGlobalFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getPatchBaselineSource:getPatchBaselineSource
export function ssm_getPatchBaselineSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = "";
  out.name = ctx.name;
  out.products = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getPatchBaselinesBaselineIdentity:getPatchBaselinesBaselineIdentity
export function ssm_getPatchBaselinesBaselineIdentity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baselineDescription = "";
  out.baselineId = h.id(ctx, "baselineId");
  out.baselineName = "";
  out.defaultBaseline = false;
  out.operatingSystem = "";
  return out;
}

// aws:ssm/getPatchBaselinesFilter:getPatchBaselinesFilter
export function ssm_getPatchBaselinesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

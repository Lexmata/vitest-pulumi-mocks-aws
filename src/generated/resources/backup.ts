// GENERATED FILE — do not edit.
// Service: backup   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_backup from "../types/backup.js";

// aws:backup/framework:Framework
export function Framework(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.controls = (i.controls !== undefined ? i.controls : (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_FrameworkControl(ctx, depth + 1))]));
  out.creationTime = "";
  out.deploymentStatus = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:backup/globalSettings:GlobalSettings
export function GlobalSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalSettings = (i.globalSettings !== undefined ? i.globalSettings : {});
  return out;
}

// aws:backup/logicallyAirGappedVault:LogicallyAirGappedVault
export function LogicallyAirGappedVault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.maxRetentionDays = (i.maxRetentionDays !== undefined ? i.maxRetentionDays : 0);
  out.minRetentionDays = (i.minRetentionDays !== undefined ? i.minRetentionDays : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_backup.backup_LogicallyAirGappedVaultTimeouts(ctx, depth + 1)));
  return out;
}

// aws:backup/plan:Plan
export function Plan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedBackupSettings = (i.advancedBackupSettings !== undefined ? i.advancedBackupSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_PlanAdvancedBackupSetting(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_PlanRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = "1";
  return out;
}

// aws:backup/regionSettings:RegionSettings
export function RegionSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceTypeManagementPreference = (i.resourceTypeManagementPreference !== undefined ? i.resourceTypeManagementPreference : {});
  out.resourceTypeOptInPreference = (i.resourceTypeOptInPreference !== undefined ? i.resourceTypeOptInPreference : {});
  return out;
}

// aws:backup/reportPlan:ReportPlan
export function ReportPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.deploymentStatus = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.reportDeliveryChannel = (i.reportDeliveryChannel !== undefined ? i.reportDeliveryChannel : (depth > 4 ? {} : T_backup.backup_ReportPlanReportDeliveryChannel(ctx, depth + 1)));
  out.reportSetting = (i.reportSetting !== undefined ? i.reportSetting : (depth > 4 ? {} : T_backup.backup_ReportPlanReportSetting(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:backup/restoreTestingPlan:RestoreTestingPlan
export function RestoreTestingPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recoveryPointSelection = (i.recoveryPointSelection !== undefined ? i.recoveryPointSelection : (depth > 4 ? {} : T_backup.backup_RestoreTestingPlanRecoveryPointSelection(ctx, depth + 1)));
  out.scheduleExpression = (i.scheduleExpression !== undefined ? i.scheduleExpression : "");
  out.scheduleExpressionTimezone = (i.scheduleExpressionTimezone !== undefined ? i.scheduleExpressionTimezone : "");
  out.startWindowHours = (i.startWindowHours !== undefined ? i.startWindowHours : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:backup/restoreTestingSelection:RestoreTestingSelection
export function RestoreTestingSelection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.protectedResourceArns = (i.protectedResourceArns !== undefined ? i.protectedResourceArns : (depth > 4 ? [] : [""]));
  out.protectedResourceConditions = (i.protectedResourceConditions !== undefined ? i.protectedResourceConditions : (depth > 4 ? {} : T_backup.backup_RestoreTestingSelectionProtectedResourceConditions(ctx, depth + 1)));
  out.protectedResourceType = (i.protectedResourceType !== undefined ? i.protectedResourceType : "");
  out.restoreMetadataOverrides = (i.restoreMetadataOverrides !== undefined ? i.restoreMetadataOverrides : {});
  out.restoreTestingPlanName = (i.restoreTestingPlanName !== undefined ? i.restoreTestingPlanName : "");
  out.validationWindowHours = (i.validationWindowHours !== undefined ? i.validationWindowHours : 0);
  return out;
}

// aws:backup/selection:Selection
export function Selection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditions = (i.conditions !== undefined ? i.conditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionCondition(ctx, depth + 1))]));
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notResources = (i.notResources !== undefined ? i.notResources : (depth > 4 ? [] : [""]));
  out.planId = (i.planId !== undefined ? i.planId : h.id(ctx, "planId"));
  out.resources = (i.resources !== undefined ? i.resources : (depth > 4 ? [] : [""]));
  out.selectionTags = (i.selectionTags !== undefined ? i.selectionTags : (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_SelectionSelectionTag(ctx, depth + 1))]));
  return out;
}

// aws:backup/vault:Vault
export function Vault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recoveryPoints = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:backup/vaultLockConfiguration:VaultLockConfiguration
export function VaultLockConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backupVaultArn = h.arn(ctx);
  out.backupVaultName = (i.backupVaultName !== undefined ? i.backupVaultName : "");
  out.changeableForDays = (i.changeableForDays !== undefined ? i.changeableForDays : 0);
  out.maxRetentionDays = (i.maxRetentionDays !== undefined ? i.maxRetentionDays : 0);
  out.minRetentionDays = (i.minRetentionDays !== undefined ? i.minRetentionDays : 0);
  return out;
}

// aws:backup/vaultNotifications:VaultNotifications
export function VaultNotifications(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backupVaultArn = h.arn(ctx);
  out.backupVaultEvents = (i.backupVaultEvents !== undefined ? i.backupVaultEvents : (depth > 4 ? [] : [""]));
  out.backupVaultName = (i.backupVaultName !== undefined ? i.backupVaultName : "");
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  return out;
}

// aws:backup/vaultPolicy:VaultPolicy
export function VaultPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backupVaultArn = h.arn(ctx);
  out.backupVaultName = (i.backupVaultName !== undefined ? i.backupVaultName : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

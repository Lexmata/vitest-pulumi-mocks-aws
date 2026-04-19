// GENERATED FILE — do not edit.
// Service: ssm   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssm from "../types/ssm.js";

// aws:ssm/activation:Activation
export function Activation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activationCode = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.expirationDate = (i.expirationDate !== undefined ? i.expirationDate : "");
  out.expired = false;
  out.iamRole = (i.iamRole !== undefined ? i.iamRole : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.registrationCount = 1;
  out.registrationLimit = (i.registrationLimit !== undefined ? i.registrationLimit : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssm/association:Association
export function Association(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyOnlyAtCronInterval = (i.applyOnlyAtCronInterval !== undefined ? i.applyOnlyAtCronInterval : false);
  out.arn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.associationName = (i.associationName !== undefined ? i.associationName : "");
  out.automationTargetParameterName = (i.automationTargetParameterName !== undefined ? i.automationTargetParameterName : "");
  out.complianceSeverity = (i.complianceSeverity !== undefined ? i.complianceSeverity : "");
  out.documentVersion = (i.documentVersion !== undefined ? i.documentVersion : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.maxConcurrency = (i.maxConcurrency !== undefined ? i.maxConcurrency : "");
  out.maxErrors = (i.maxErrors !== undefined ? i.maxErrors : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputLocation = (i.outputLocation !== undefined ? i.outputLocation : (depth > 4 ? {} : T_ssm.ssm_AssociationOutputLocation(ctx, depth + 1)));
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.scheduleExpression = (i.scheduleExpression !== undefined ? i.scheduleExpression : "");
  out.syncCompliance = (i.syncCompliance !== undefined ? i.syncCompliance : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targets = (i.targets !== undefined ? i.targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_AssociationTarget(ctx, depth + 1))]));
  out.waitForSuccessTimeoutSeconds = (i.waitForSuccessTimeoutSeconds !== undefined ? i.waitForSuccessTimeoutSeconds : 30);
  return out;
}

// aws:ssm/contactsRotation:ContactsRotation
export function ContactsRotation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactIds = (i.contactIds !== undefined ? i.contactIds : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recurrence = (i.recurrence !== undefined ? i.recurrence : (depth > 4 ? {} : T_ssm.ssm_ContactsRotationRecurrence(ctx, depth + 1)));
  out.startTime = (i.startTime !== undefined ? i.startTime : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeZoneId = (i.timeZoneId !== undefined ? i.timeZoneId : h.id(ctx, "timeZoneId"));
  return out;
}

// aws:ssm/defaultPatchBaseline:DefaultPatchBaseline
export function DefaultPatchBaseline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baselineId = (i.baselineId !== undefined ? i.baselineId : h.id(ctx, "baselineId"));
  out.operatingSystem = (i.operatingSystem !== undefined ? i.operatingSystem : "");
  return out;
}

// aws:ssm/document:Document
export function Document(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentsSources = (i.attachmentsSources !== undefined ? i.attachmentsSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_DocumentAttachmentsSource(ctx, depth + 1))]));
  out.content = (i.content !== undefined ? i.content : "");
  out.createdDate = "";
  out.defaultVersion = "";
  out.description = "";
  out.documentFormat = (i.documentFormat !== undefined ? i.documentFormat : "");
  out.documentType = (i.documentType !== undefined ? i.documentType : "");
  out.documentVersion = "";
  out.hash = "";
  out.hashType = "";
  out.latestVersion = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_DocumentParameter(ctx, depth + 1))]);
  out.permissions = (i.permissions !== undefined ? i.permissions : {});
  out.platformTypes = (depth > 4 ? [] : [""]);
  out.schemaVersion = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetType = (i.targetType !== undefined ? i.targetType : "");
  out.versionName = (i.versionName !== undefined ? i.versionName : "");
  return out;
}

// aws:ssm/maintenanceWindow:MaintenanceWindow
export function MaintenanceWindow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowUnassociatedTargets = (i.allowUnassociatedTargets !== undefined ? i.allowUnassociatedTargets : true);
  out.cutoff = (i.cutoff !== undefined ? i.cutoff : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.duration = (i.duration !== undefined ? i.duration : 0);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.endDate = (i.endDate !== undefined ? i.endDate : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.scheduleOffset = (i.scheduleOffset !== undefined ? i.scheduleOffset : 0);
  out.scheduleTimezone = (i.scheduleTimezone !== undefined ? i.scheduleTimezone : "");
  out.startDate = (i.startDate !== undefined ? i.startDate : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssm/maintenanceWindowTarget:MaintenanceWindowTarget
export function MaintenanceWindowTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerInformation = (i.ownerInformation !== undefined ? i.ownerInformation : "");
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.targets = (i.targets !== undefined ? i.targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTargetTarget(ctx, depth + 1))]));
  out.windowId = (i.windowId !== undefined ? i.windowId : h.id(ctx, "windowId"));
  return out;
}

// aws:ssm/maintenanceWindowTask:MaintenanceWindowTask
export function MaintenanceWindowTask(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cutoffBehavior = (i.cutoffBehavior !== undefined ? i.cutoffBehavior : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.maxConcurrency = (i.maxConcurrency !== undefined ? i.maxConcurrency : "");
  out.maxErrors = (i.maxErrors !== undefined ? i.maxErrors : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.serviceRoleArn = (i.serviceRoleArn !== undefined ? i.serviceRoleArn : h.arn(ctx));
  out.targets = (i.targets !== undefined ? i.targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTarget(ctx, depth + 1))]));
  out.taskArn = (i.taskArn !== undefined ? i.taskArn : h.arn(ctx));
  out.taskInvocationParameters = (i.taskInvocationParameters !== undefined ? i.taskInvocationParameters : (depth > 4 ? {} : T_ssm.ssm_MaintenanceWindowTaskTaskInvocationParameters(ctx, depth + 1)));
  out.taskType = (i.taskType !== undefined ? i.taskType : "");
  out.windowId = (i.windowId !== undefined ? i.windowId : h.id(ctx, "windowId"));
  out.windowTaskId = h.id(ctx, "windowTaskId");
  return out;
}

// aws:ssm/parameter:Parameter
export function Parameter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedPattern = (i.allowedPattern !== undefined ? i.allowedPattern : "");
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.dataType = (i.dataType !== undefined ? i.dataType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.insecureValue = (i.insecureValue !== undefined ? i.insecureValue : "");
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.overwrite = (i.overwrite !== undefined ? i.overwrite : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tier = (i.tier !== undefined ? i.tier : "");
  out.type = (i.type !== undefined ? i.type : "");
  out.value = (i.value !== undefined ? i.value : "");
  out.version = 0;
  return out;
}

// aws:ssm/patchBaseline:PatchBaseline
export function PatchBaseline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approvalRules = (i.approvalRules !== undefined ? i.approvalRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_PatchBaselineApprovalRule(ctx, depth + 1))]));
  out.approvedPatches = (i.approvedPatches !== undefined ? i.approvedPatches : (depth > 4 ? [] : [""]));
  out.approvedPatchesComplianceLevel = (i.approvedPatchesComplianceLevel !== undefined ? i.approvedPatchesComplianceLevel : "");
  out.approvedPatchesEnableNonSecurity = (i.approvedPatchesEnableNonSecurity !== undefined ? i.approvedPatchesEnableNonSecurity : false);
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.globalFilters = (i.globalFilters !== undefined ? i.globalFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_PatchBaselineGlobalFilter(ctx, depth + 1))]));
  out.json = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.operatingSystem = (i.operatingSystem !== undefined ? i.operatingSystem : "");
  out.rejectedPatches = (i.rejectedPatches !== undefined ? i.rejectedPatches : (depth > 4 ? [] : [""]));
  out.rejectedPatchesAction = (i.rejectedPatchesAction !== undefined ? i.rejectedPatchesAction : "");
  out.sources = (i.sources !== undefined ? i.sources : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_PatchBaselineSource(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssm/patchGroup:PatchGroup
export function PatchGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baselineId = (i.baselineId !== undefined ? i.baselineId : h.id(ctx, "baselineId"));
  out.patchGroup = (i.patchGroup !== undefined ? i.patchGroup : "");
  return out;
}

// aws:ssm/quicksetupConfigurationManager:QuicksetupConfigurationManager
export function QuicksetupConfigurationManager(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationDefinition = (i.configurationDefinition !== undefined ? i.configurationDefinition : (depth > 4 ? {} : T_ssm.ssm_QuicksetupConfigurationManagerConfigurationDefinition(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.managerArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.statusSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_QuicksetupConfigurationManagerStatusSummary(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ssm.ssm_QuicksetupConfigurationManagerTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ssm/resourceDataSync:ResourceDataSync
export function ResourceDataSync(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.s3Destination = (i.s3Destination !== undefined ? i.s3Destination : (depth > 4 ? {} : T_ssm.ssm_ResourceDataSyncS3Destination(ctx, depth + 1)));
  return out;
}

// aws:ssm/serviceSetting:ServiceSetting
export function ServiceSetting(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.settingId = (i.settingId !== undefined ? i.settingId : h.id(ctx, "settingId"));
  out.settingValue = (i.settingValue !== undefined ? i.settingValue : "");
  out.status = "active";
  return out;
}

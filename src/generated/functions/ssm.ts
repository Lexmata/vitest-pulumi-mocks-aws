// GENERATED FILE — do not edit.
// Service: ssm   (8 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssm from "../types/ssm.js";

// aws:ssm/getContactsRotation:getContactsRotation
export function getContactsRotation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.contactIds = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.recurrences = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getContactsRotationRecurrence(ctx, depth + 1))]);
  out.startTime = "";
  out.tags = {};
  out.timeZoneId = h.id(ctx, "timeZoneId");
  return out;
}

// aws:ssm/getDocument:getDocument
export function getDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = "";
  out.documentFormat = (i.documentFormat !== undefined ? i.documentFormat : "");
  out.documentType = "";
  out.documentVersion = (i.documentVersion !== undefined ? i.documentVersion : "");
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:ssm/getInstances:getInstances
export function getInstances(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getInstancesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getMaintenanceWindows:getMaintenanceWindows
export function getMaintenanceWindows(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getMaintenanceWindowsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssm/getParameter:getParameter
export function getParameter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.insecureValue = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.type = "";
  out.value = "";
  out.version = 0;
  out.withDecryption = (i.withDecryption !== undefined ? i.withDecryption : false);
  return out;
}

// aws:ssm/getParametersByPath:getParametersByPath
export function getParametersByPath(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.path = (i.path !== undefined ? i.path : "");
  out.recursive = (i.recursive !== undefined ? i.recursive : false);
  out.types = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  out.withDecryption = (i.withDecryption !== undefined ? i.withDecryption : false);
  return out;
}

// aws:ssm/getPatchBaseline:getPatchBaseline
export function getPatchBaseline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approvalRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselineApprovalRule(ctx, depth + 1))]);
  out.approvedPatches = (depth > 4 ? [] : [""]);
  out.approvedPatchesComplianceLevel = "";
  out.approvedPatchesEnableNonSecurity = false;
  out.defaultBaseline = (i.defaultBaseline !== undefined ? i.defaultBaseline : false);
  out.description = "";
  out.globalFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselineGlobalFilter(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.json = "";
  out.name = ctx.name;
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.operatingSystem = (i.operatingSystem !== undefined ? i.operatingSystem : "");
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  out.rejectedPatches = (depth > 4 ? [] : [""]);
  out.rejectedPatchesAction = "";
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselineSource(ctx, depth + 1))]);
  return out;
}

// aws:ssm/getPatchBaselines:getPatchBaselines
export function getPatchBaselines(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baselineIdentities = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselinesBaselineIdentity(ctx, depth + 1))]);
  out.defaultBaselines = (i.defaultBaselines !== undefined ? i.defaultBaselines : false);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssm.ssm_getPatchBaselinesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

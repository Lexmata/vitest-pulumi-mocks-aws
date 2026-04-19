// GENERATED FILE — do not edit.
// Service: backup   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_backup from "../types/backup.js";

// aws:backup/getFramework:getFramework
export function getFramework(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.controls = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getFrameworkControl(ctx, depth + 1))]);
  out.creationTime = "";
  out.deploymentStatus = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:backup/getPlan:getPlan
export function getPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.planId = (i.planId !== undefined ? i.planId : h.id(ctx, "planId"));
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getPlanRule(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = "1";
  return out;
}

// aws:backup/getReportPlan:getReportPlan
export function getReportPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.deploymentStatus = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.reportDeliveryChannels = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getReportPlanReportDeliveryChannel(ctx, depth + 1))]);
  out.reportSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_backup.backup_getReportPlanReportSetting(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:backup/getSelection:getSelection
export function getSelection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iamRoleArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.planId = (i.planId !== undefined ? i.planId : h.id(ctx, "planId"));
  out.resources = (depth > 4 ? [] : [""]);
  out.selectionId = (i.selectionId !== undefined ? i.selectionId : h.id(ctx, "selectionId"));
  return out;
}

// aws:backup/getVault:getVault
export function getVault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.kmsKeyArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recoveryPoints = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

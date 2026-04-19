// GENERATED FILE — do not edit.
// Service: auditmanager   (14 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_auditmanager from "./auditmanager.js";

// aws:auditmanager/AssessmentAssessmentReportsDestination:AssessmentAssessmentReportsDestination
export function auditmanager_AssessmentAssessmentReportsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationType = "";
  return out;
}

// aws:auditmanager/AssessmentRole:AssessmentRole
export function auditmanager_AssessmentRole(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.roleType = "";
  return out;
}

// aws:auditmanager/AssessmentRolesAll:AssessmentRolesAll
export function auditmanager_AssessmentRolesAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.roleType = "";
  return out;
}

// aws:auditmanager/AssessmentScope:AssessmentScope
export function auditmanager_AssessmentScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentScopeAwsAccount(ctx, depth + 1))]);
  out.awsServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentScopeAwsService(ctx, depth + 1))]);
  return out;
}

// aws:auditmanager/AssessmentScopeAwsAccount:AssessmentScopeAwsAccount
export function auditmanager_AssessmentScopeAwsAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:auditmanager/AssessmentScopeAwsService:AssessmentScopeAwsService
export function auditmanager_AssessmentScopeAwsService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serviceName = "";
  return out;
}

// aws:auditmanager/ControlControlMappingSource:ControlControlMappingSource
export function auditmanager_ControlControlMappingSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceDescription = "";
  out.sourceFrequency = "";
  out.sourceId = h.id(ctx, "sourceId");
  out.sourceKeyword = (depth > 4 ? {} : T_auditmanager.auditmanager_ControlControlMappingSourceSourceKeyword(ctx, depth + 1));
  out.sourceName = "";
  out.sourceSetUpOption = "";
  out.sourceType = "";
  out.troubleshootingText = "";
  return out;
}

// aws:auditmanager/ControlControlMappingSourceSourceKeyword:ControlControlMappingSourceSourceKeyword
export function auditmanager_ControlControlMappingSourceSourceKeyword(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keywordInputType = "";
  out.keywordValue = "";
  return out;
}

// aws:auditmanager/FrameworkControlSet:FrameworkControlSet
export function auditmanager_FrameworkControlSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.controls = (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_FrameworkControlSetControl(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:auditmanager/FrameworkControlSetControl:FrameworkControlSetControl
export function auditmanager_FrameworkControlSetControl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:auditmanager/getControlControlMappingSource:getControlControlMappingSource
export function auditmanager_getControlControlMappingSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceDescription = "";
  out.sourceFrequency = "";
  out.sourceId = h.id(ctx, "sourceId");
  out.sourceKeyword = (depth > 4 ? {} : T_auditmanager.auditmanager_getControlControlMappingSourceSourceKeyword(ctx, depth + 1));
  out.sourceName = "";
  out.sourceSetUpOption = "";
  out.sourceType = "";
  out.troubleshootingText = "";
  return out;
}

// aws:auditmanager/getControlControlMappingSourceSourceKeyword:getControlControlMappingSourceSourceKeyword
export function auditmanager_getControlControlMappingSourceSourceKeyword(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keywordInputType = "";
  out.keywordValue = "";
  return out;
}

// aws:auditmanager/getFrameworkControlSet:getFrameworkControlSet
export function auditmanager_getFrameworkControlSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.controls = (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_getFrameworkControlSetControl(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:auditmanager/getFrameworkControlSetControl:getFrameworkControlSetControl
export function auditmanager_getFrameworkControlSetControl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

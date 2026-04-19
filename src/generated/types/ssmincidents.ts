// GENERATED FILE — do not edit.
// Service: ssmincidents   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmincidents from "./ssmincidents.js";

// aws:ssmincidents/ReplicationSetRegion:ReplicationSetRegion
export function ssmincidents_ReplicationSetRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.name = ctx.name;
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:ssmincidents/ResponsePlanAction:ResponsePlanAction
export function ssmincidents_ResponsePlanAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ssmAutomations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanActionSsmAutomation(ctx, depth + 1))]);
  return out;
}

// aws:ssmincidents/ResponsePlanActionSsmAutomation:ResponsePlanActionSsmAutomation
export function ssmincidents_ResponsePlanActionSsmAutomation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.documentName = "";
  out.documentVersion = "";
  out.dynamicParameters = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanActionSsmAutomationParameter(ctx, depth + 1))]);
  out.roleArn = h.arn(ctx);
  out.targetAccount = "";
  return out;
}

// aws:ssmincidents/ResponsePlanActionSsmAutomationParameter:ResponsePlanActionSsmAutomationParameter
export function ssmincidents_ResponsePlanActionSsmAutomationParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssmincidents/ResponsePlanIncidentTemplate:ResponsePlanIncidentTemplate
export function ssmincidents_ResponsePlanIncidentTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dedupeString = "";
  out.impact = 0;
  out.incidentTags = {};
  out.notificationTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanIncidentTemplateNotificationTarget(ctx, depth + 1))]);
  out.summary = "";
  out.title = "";
  return out;
}

// aws:ssmincidents/ResponsePlanIncidentTemplateNotificationTarget:ResponsePlanIncidentTemplateNotificationTarget
export function ssmincidents_ResponsePlanIncidentTemplateNotificationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snsTopicArn = h.arn(ctx);
  return out;
}

// aws:ssmincidents/ResponsePlanIntegration:ResponsePlanIntegration
export function ssmincidents_ResponsePlanIntegration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pagerduties = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanIntegrationPagerduty(ctx, depth + 1))]);
  return out;
}

// aws:ssmincidents/ResponsePlanIntegrationPagerduty:ResponsePlanIntegrationPagerduty
export function ssmincidents_ResponsePlanIntegrationPagerduty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.secretId = h.id(ctx, "secretId");
  out.serviceId = h.id(ctx, "serviceId");
  return out;
}

// aws:ssmincidents/getReplicationSetRegion:getReplicationSetRegion
export function ssmincidents_getReplicationSetRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.name = ctx.name;
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:ssmincidents/getResponsePlanAction:getResponsePlanAction
export function ssmincidents_getResponsePlanAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ssmAutomations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanActionSsmAutomation(ctx, depth + 1))]);
  return out;
}

// aws:ssmincidents/getResponsePlanActionSsmAutomation:getResponsePlanActionSsmAutomation
export function ssmincidents_getResponsePlanActionSsmAutomation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.documentName = "";
  out.documentVersion = "";
  out.dynamicParameters = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanActionSsmAutomationParameter(ctx, depth + 1))]);
  out.roleArn = h.arn(ctx);
  out.targetAccount = "";
  return out;
}

// aws:ssmincidents/getResponsePlanActionSsmAutomationParameter:getResponsePlanActionSsmAutomationParameter
export function ssmincidents_getResponsePlanActionSsmAutomationParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssmincidents/getResponsePlanIncidentTemplate:getResponsePlanIncidentTemplate
export function ssmincidents_getResponsePlanIncidentTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dedupeString = "";
  out.impact = 0;
  out.incidentTags = {};
  out.notificationTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanIncidentTemplateNotificationTarget(ctx, depth + 1))]);
  out.summary = "";
  out.title = "";
  return out;
}

// aws:ssmincidents/getResponsePlanIncidentTemplateNotificationTarget:getResponsePlanIncidentTemplateNotificationTarget
export function ssmincidents_getResponsePlanIncidentTemplateNotificationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snsTopicArn = h.arn(ctx);
  return out;
}

// aws:ssmincidents/getResponsePlanIntegration:getResponsePlanIntegration
export function ssmincidents_getResponsePlanIntegration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pagerduties = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanIntegrationPagerduty(ctx, depth + 1))]);
  return out;
}

// aws:ssmincidents/getResponsePlanIntegrationPagerduty:getResponsePlanIntegrationPagerduty
export function ssmincidents_getResponsePlanIntegrationPagerduty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.secretId = h.id(ctx, "secretId");
  out.serviceId = h.id(ctx, "serviceId");
  return out;
}

// GENERATED FILE — do not edit.
// Service: ssmcontacts   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmcontacts from "./ssmcontacts.js";

// aws:ssmcontacts/ContactChannelDeliveryAddress:ContactChannelDeliveryAddress
export function ssmcontacts_ContactChannelDeliveryAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleAddress = "";
  return out;
}

// aws:ssmcontacts/PlanStage:PlanStage
export function ssmcontacts_PlanStage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.durationInMinutes = 0;
  out.targets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_PlanStageTarget(ctx, depth + 1))]);
  return out;
}

// aws:ssmcontacts/PlanStageTarget:PlanStageTarget
export function ssmcontacts_PlanStageTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channelTargetInfo = (depth > 4 ? {} : T_ssmcontacts.ssmcontacts_PlanStageTargetChannelTargetInfo(ctx, depth + 1));
  out.contactTargetInfo = (depth > 4 ? {} : T_ssmcontacts.ssmcontacts_PlanStageTargetContactTargetInfo(ctx, depth + 1));
  return out;
}

// aws:ssmcontacts/PlanStageTargetChannelTargetInfo:PlanStageTargetChannelTargetInfo
export function ssmcontacts_PlanStageTargetChannelTargetInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactChannelId = h.id(ctx, "contactChannelId");
  out.retryIntervalInMinutes = 0;
  return out;
}

// aws:ssmcontacts/PlanStageTargetContactTargetInfo:PlanStageTargetContactTargetInfo
export function ssmcontacts_PlanStageTargetContactTargetInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactId = h.id(ctx, "contactId");
  out.isEssential = true;
  return out;
}

// aws:ssmcontacts/getContactChannelDeliveryAddress:getContactChannelDeliveryAddress
export function ssmcontacts_getContactChannelDeliveryAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleAddress = "";
  return out;
}

// aws:ssmcontacts/getPlanStage:getPlanStage
export function ssmcontacts_getPlanStage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.durationInMinutes = 0;
  out.targets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_getPlanStageTarget(ctx, depth + 1))]);
  return out;
}

// aws:ssmcontacts/getPlanStageTarget:getPlanStageTarget
export function ssmcontacts_getPlanStageTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channelTargetInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_getPlanStageTargetChannelTargetInfo(ctx, depth + 1))]);
  out.contactTargetInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_getPlanStageTargetContactTargetInfo(ctx, depth + 1))]);
  return out;
}

// aws:ssmcontacts/getPlanStageTargetChannelTargetInfo:getPlanStageTargetChannelTargetInfo
export function ssmcontacts_getPlanStageTargetChannelTargetInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactChannelId = h.id(ctx, "contactChannelId");
  out.retryIntervalInMinutes = 0;
  return out;
}

// aws:ssmcontacts/getPlanStageTargetContactTargetInfo:getPlanStageTargetContactTargetInfo
export function ssmcontacts_getPlanStageTargetContactTargetInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactId = h.id(ctx, "contactId");
  out.isEssential = true;
  return out;
}

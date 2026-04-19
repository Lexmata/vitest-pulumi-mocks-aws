// GENERATED FILE — do not edit.
// Service: pinpoint   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_pinpoint from "./pinpoint.js";

// aws:pinpoint/AppCampaignHook:AppCampaignHook
export function pinpoint_AppCampaignHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaFunctionName = "";
  out.mode = "";
  out.webUrl = h.endpoint(ctx, "webUrl");
  return out;
}

// aws:pinpoint/AppLimits:AppLimits
export function pinpoint_AppLimits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.daily = 0;
  out.maximumDuration = 0;
  out.messagesPerSecond = 0;
  out.total = 0;
  return out;
}

// aws:pinpoint/AppQuietTime:AppQuietTime
export function pinpoint_AppQuietTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = "";
  out.start = "";
  return out;
}

// aws:pinpoint/EmailTemplateEmailTemplate:EmailTemplateEmailTemplate
export function pinpoint_EmailTemplateEmailTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSubstitutions = "";
  out.description = "";
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_pinpoint.pinpoint_EmailTemplateEmailTemplateHeader(ctx, depth + 1))]);
  out.htmlPart = "";
  out.recommenderId = h.id(ctx, "recommenderId");
  out.subject = "";
  out.textPart = "";
  return out;
}

// aws:pinpoint/EmailTemplateEmailTemplateHeader:EmailTemplateEmailTemplateHeader
export function pinpoint_EmailTemplateEmailTemplateHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:pinpoint/Smsvoicev2PhoneNumberTimeouts:Smsvoicev2PhoneNumberTimeouts
export function pinpoint_Smsvoicev2PhoneNumberTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

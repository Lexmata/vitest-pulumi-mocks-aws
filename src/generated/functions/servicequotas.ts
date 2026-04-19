// GENERATED FILE — do not edit.
// Service: servicequotas   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicequotas from "../types/servicequotas.js";

// aws:servicequotas/getService:getService
export function getService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.serviceCode = "";
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  return out;
}

// aws:servicequotas/getServiceQuota:getServiceQuota
export function getServiceQuota(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adjustable = false;
  out.arn = h.arn(ctx);
  out.defaultValue = 0;
  out.globalQuota = false;
  out.id = h.id(ctx, "id");
  out.quotaCode = (i.quotaCode !== undefined ? i.quotaCode : "");
  out.quotaName = (i.quotaName !== undefined ? i.quotaName : "");
  out.serviceCode = (i.serviceCode !== undefined ? i.serviceCode : "");
  out.serviceName = "";
  out.usageMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicequotas.servicequotas_getServiceQuotaUsageMetric(ctx, depth + 1))]);
  out.value = 0;
  return out;
}

// aws:servicequotas/getTemplates:getTemplates
export function getTemplates(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.templates = (i.templates !== undefined ? i.templates : (depth > 4 ? [] : [(depth > 4 ? {} : T_servicequotas.servicequotas_getTemplatesTemplate(ctx, depth + 1))]));
  return out;
}

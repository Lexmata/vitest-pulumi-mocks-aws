// GENERATED FILE — do not edit.
// Service: servicequotas   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicequotas from "../types/servicequotas.js";

// aws:servicequotas/serviceQuota:ServiceQuota
export function ServiceQuota(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adjustable = false;
  out.arn = h.arn(ctx);
  out.defaultValue = 0;
  out.quotaCode = (i.quotaCode !== undefined ? i.quotaCode : "");
  out.quotaName = "";
  out.requestId = h.id(ctx, "requestId");
  out.requestStatus = "";
  out.serviceCode = (i.serviceCode !== undefined ? i.serviceCode : "");
  out.serviceName = "";
  out.usageMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicequotas.servicequotas_ServiceQuotaUsageMetric(ctx, depth + 1))]);
  out.value = (i.value !== undefined ? i.value : 0);
  return out;
}

// aws:servicequotas/template:Template
export function Template(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalQuota = false;
  out.quotaCode = (i.quotaCode !== undefined ? i.quotaCode : "");
  out.quotaName = "";
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.serviceCode = (i.serviceCode !== undefined ? i.serviceCode : "");
  out.serviceName = "";
  out.unit = "";
  out.value = (i.value !== undefined ? i.value : 0);
  return out;
}

// aws:servicequotas/templateAssociation:TemplateAssociation
export function TemplateAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.status = "active";
  return out;
}

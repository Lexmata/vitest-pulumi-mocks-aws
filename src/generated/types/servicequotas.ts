// GENERATED FILE — do not edit.
// Service: servicequotas   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicequotas from "./servicequotas.js";

// aws:servicequotas/ServiceQuotaUsageMetric:ServiceQuotaUsageMetric
export function servicequotas_ServiceQuotaUsageMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicequotas.servicequotas_ServiceQuotaUsageMetricMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.metricNamespace = "";
  out.metricStatisticRecommendation = "";
  return out;
}

// aws:servicequotas/ServiceQuotaUsageMetricMetricDimension:ServiceQuotaUsageMetricMetricDimension
export function servicequotas_ServiceQuotaUsageMetricMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.class = "";
  out.resource = "";
  out.service = "";
  out.type = "";
  return out;
}

// aws:servicequotas/getServiceQuotaUsageMetric:getServiceQuotaUsageMetric
export function servicequotas_getServiceQuotaUsageMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicequotas.servicequotas_getServiceQuotaUsageMetricMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.metricNamespace = "";
  out.metricStatisticRecommendation = "";
  return out;
}

// aws:servicequotas/getServiceQuotaUsageMetricMetricDimension:getServiceQuotaUsageMetricMetricDimension
export function servicequotas_getServiceQuotaUsageMetricMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.class = "";
  out.resource = "";
  out.service = "";
  out.type = "";
  return out;
}

// aws:servicequotas/getTemplatesTemplate:getTemplatesTemplate
export function servicequotas_getTemplatesTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalQuota = false;
  out.quotaCode = "";
  out.quotaName = "";
  out.region = ctx.region;
  out.serviceCode = "";
  out.serviceName = "";
  out.unit = "";
  out.value = 0;
  return out;
}

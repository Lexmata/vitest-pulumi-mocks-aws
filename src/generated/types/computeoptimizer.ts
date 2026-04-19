// GENERATED FILE — do not edit.
// Service: computeoptimizer   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_computeoptimizer from "./computeoptimizer.js";

// aws:computeoptimizer/EnrollmentStatusTimeouts:EnrollmentStatusTimeouts
export function computeoptimizer_EnrollmentStatusTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:computeoptimizer/RecommendationPreferencesExternalMetricsPreference:RecommendationPreferencesExternalMetricsPreference
export function computeoptimizer_RecommendationPreferencesExternalMetricsPreference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  return out;
}

// aws:computeoptimizer/RecommendationPreferencesPreferredResource:RecommendationPreferencesPreferredResource
export function computeoptimizer_RecommendationPreferencesPreferredResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludeLists = (depth > 4 ? [] : [""]);
  out.includeLists = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  return out;
}

// aws:computeoptimizer/RecommendationPreferencesScope:RecommendationPreferencesScope
export function computeoptimizer_RecommendationPreferencesScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:computeoptimizer/RecommendationPreferencesUtilizationPreference:RecommendationPreferencesUtilizationPreference
export function computeoptimizer_RecommendationPreferencesUtilizationPreference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricName = "";
  out.metricParameters = (depth > 4 ? {} : T_computeoptimizer.computeoptimizer_RecommendationPreferencesUtilizationPreferenceMetricParameters(ctx, depth + 1));
  return out;
}

// aws:computeoptimizer/RecommendationPreferencesUtilizationPreferenceMetricParameters:RecommendationPreferencesUtilizationPreferenceMetricParameters
export function computeoptimizer_RecommendationPreferencesUtilizationPreferenceMetricParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headroom = "";
  out.threshold = "";
  return out;
}

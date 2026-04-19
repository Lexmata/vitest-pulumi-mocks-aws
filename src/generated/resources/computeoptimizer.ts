// GENERATED FILE — do not edit.
// Service: computeoptimizer   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_computeoptimizer from "../types/computeoptimizer.js";

// aws:computeoptimizer/enrollmentStatus:EnrollmentStatus
export function EnrollmentStatus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeMemberAccounts = (i.includeMemberAccounts !== undefined ? i.includeMemberAccounts : false);
  out.numberOfMemberAccountsOptedIn = 1;
  out.status = (i.status !== undefined ? i.status : "active");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_computeoptimizer.computeoptimizer_EnrollmentStatusTimeouts(ctx, depth + 1)));
  return out;
}

// aws:computeoptimizer/recommendationPreferences:RecommendationPreferences
export function RecommendationPreferences(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enhancedInfrastructureMetrics = (i.enhancedInfrastructureMetrics !== undefined ? i.enhancedInfrastructureMetrics : "");
  out.externalMetricsPreference = (i.externalMetricsPreference !== undefined ? i.externalMetricsPreference : (depth > 4 ? {} : T_computeoptimizer.computeoptimizer_RecommendationPreferencesExternalMetricsPreference(ctx, depth + 1)));
  out.inferredWorkloadTypes = (i.inferredWorkloadTypes !== undefined ? i.inferredWorkloadTypes : "");
  out.lookBackPeriod = (i.lookBackPeriod !== undefined ? i.lookBackPeriod : "");
  out.preferredResources = (i.preferredResources !== undefined ? i.preferredResources : (depth > 4 ? [] : [(depth > 4 ? {} : T_computeoptimizer.computeoptimizer_RecommendationPreferencesPreferredResource(ctx, depth + 1))]));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.savingsEstimationMode = (i.savingsEstimationMode !== undefined ? i.savingsEstimationMode : "");
  out.scope = (i.scope !== undefined ? i.scope : (depth > 4 ? {} : T_computeoptimizer.computeoptimizer_RecommendationPreferencesScope(ctx, depth + 1)));
  out.utilizationPreferences = (i.utilizationPreferences !== undefined ? i.utilizationPreferences : (depth > 4 ? [] : [(depth > 4 ? {} : T_computeoptimizer.computeoptimizer_RecommendationPreferencesUtilizationPreference(ctx, depth + 1))]));
  return out;
}

// GENERATED FILE — do not edit.
// Service: accessanalyzer   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_accessanalyzer from "./accessanalyzer.js";

// aws:accessanalyzer/AnalyzerConfiguration:AnalyzerConfiguration
export function accessanalyzer_AnalyzerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unusedAccess = (depth > 4 ? {} : T_accessanalyzer.accessanalyzer_AnalyzerConfigurationUnusedAccess(ctx, depth + 1));
  return out;
}

// aws:accessanalyzer/AnalyzerConfigurationUnusedAccess:AnalyzerConfigurationUnusedAccess
export function accessanalyzer_AnalyzerConfigurationUnusedAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analysisRule = (depth > 4 ? {} : T_accessanalyzer.accessanalyzer_AnalyzerConfigurationUnusedAccessAnalysisRule(ctx, depth + 1));
  out.unusedAccessAge = 0;
  return out;
}

// aws:accessanalyzer/AnalyzerConfigurationUnusedAccessAnalysisRule:AnalyzerConfigurationUnusedAccessAnalysisRule
export function accessanalyzer_AnalyzerConfigurationUnusedAccessAnalysisRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exclusions = (depth > 4 ? [] : [(depth > 4 ? {} : T_accessanalyzer.accessanalyzer_AnalyzerConfigurationUnusedAccessAnalysisRuleExclusion(ctx, depth + 1))]);
  return out;
}

// aws:accessanalyzer/AnalyzerConfigurationUnusedAccessAnalysisRuleExclusion:AnalyzerConfigurationUnusedAccessAnalysisRuleExclusion
export function accessanalyzer_AnalyzerConfigurationUnusedAccessAnalysisRuleExclusion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountIds = (depth > 4 ? [] : [""]);
  out.resourceTags = (depth > 4 ? [] : [{}]);
  return out;
}

// aws:accessanalyzer/ArchiveRuleFilter:ArchiveRuleFilter
export function accessanalyzer_ArchiveRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contains = (depth > 4 ? [] : [""]);
  out.criteria = "";
  out.eqs = (depth > 4 ? [] : [""]);
  out.exists = "";
  out.neqs = (depth > 4 ? [] : [""]);
  return out;
}

// GENERATED FILE — do not edit.
// Service: accessanalyzer   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_accessanalyzer from "../types/accessanalyzer.js";

// aws:accessanalyzer/analyzer:Analyzer
export function Analyzer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analyzerName = (i.analyzerName !== undefined ? i.analyzerName : "");
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_accessanalyzer.accessanalyzer_AnalyzerConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:accessanalyzer/archiveRule:ArchiveRule
export function ArchiveRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analyzerName = (i.analyzerName !== undefined ? i.analyzerName : "");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_accessanalyzer.accessanalyzer_ArchiveRuleFilter(ctx, depth + 1))]));
  out.ruleName = (i.ruleName !== undefined ? i.ruleName : "");
  return out;
}

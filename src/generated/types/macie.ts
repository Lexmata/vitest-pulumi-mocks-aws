// GENERATED FILE — do not edit.
// Service: macie   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_macie from "./macie.js";

// aws:macie/FindingsFilterFindingCriteria:FindingsFilterFindingCriteria
export function macie_FindingsFilterFindingCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.criterions = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie.macie_FindingsFilterFindingCriteriaCriterion(ctx, depth + 1))]);
  return out;
}

// aws:macie/FindingsFilterFindingCriteriaCriterion:FindingsFilterFindingCriteriaCriterion
export function macie_FindingsFilterFindingCriteriaCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eqExactMatches = (depth > 4 ? [] : [""]);
  out.eqs = (depth > 4 ? [] : [""]);
  out.field = "";
  out.gt = "";
  out.gte = "";
  out.lt = "";
  out.lte = "";
  out.neqs = (depth > 4 ? [] : [""]);
  return out;
}

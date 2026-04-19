// GENERATED FILE — do not edit.
// Service: costoptimizationhub   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:costoptimizationhub/enrollmentStatus:EnrollmentStatus
export function EnrollmentStatus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeMemberAccounts = (i.includeMemberAccounts !== undefined ? i.includeMemberAccounts : false);
  out.status = "active";
  return out;
}

// aws:costoptimizationhub/preferences:Preferences
export function Preferences(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.memberAccountDiscountVisibility = (i.memberAccountDiscountVisibility !== undefined ? i.memberAccountDiscountVisibility : "");
  out.savingsEstimationMode = (i.savingsEstimationMode !== undefined ? i.savingsEstimationMode : "");
  return out;
}

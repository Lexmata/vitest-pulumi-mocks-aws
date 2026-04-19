// GENERATED FILE — do not edit.
// Service: rbin   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rbin from "./rbin.js";

// aws:rbin/RuleLockConfiguration:RuleLockConfiguration
export function rbin_RuleLockConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unlockDelay = (depth > 4 ? {} : T_rbin.rbin_RuleLockConfigurationUnlockDelay(ctx, depth + 1));
  return out;
}

// aws:rbin/RuleLockConfigurationUnlockDelay:RuleLockConfigurationUnlockDelay
export function rbin_RuleLockConfigurationUnlockDelay(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unlockDelayUnit = "";
  out.unlockDelayValue = 0;
  return out;
}

// aws:rbin/RuleResourceTag:RuleResourceTag
export function rbin_RuleResourceTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceTagKey = "";
  out.resourceTagValue = "";
  return out;
}

// aws:rbin/RuleRetentionPeriod:RuleRetentionPeriod
export function rbin_RuleRetentionPeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.retentionPeriodUnit = "";
  out.retentionPeriodValue = 0;
  return out;
}

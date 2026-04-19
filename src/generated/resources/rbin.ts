// GENERATED FILE — do not edit.
// Service: rbin   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rbin from "../types/rbin.js";

// aws:rbin/rule:Rule
export function Rule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.lockConfiguration = (i.lockConfiguration !== undefined ? i.lockConfiguration : (depth > 4 ? {} : T_rbin.rbin_RuleLockConfiguration(ctx, depth + 1)));
  out.lockEndTime = "";
  out.lockState = "";
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : (depth > 4 ? [] : [(depth > 4 ? {} : T_rbin.rbin_RuleResourceTag(ctx, depth + 1))]));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : (depth > 4 ? {} : T_rbin.rbin_RuleRetentionPeriod(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

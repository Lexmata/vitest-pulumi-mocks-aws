// GENERATED FILE — do not edit.
// Service: resiliencehub   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resiliencehub from "../types/resiliencehub.js";

// aws:resiliencehub/resiliencyPolicy:ResiliencyPolicy
export function ResiliencyPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataLocationConstraint = (i.dataLocationConstraint !== undefined ? i.dataLocationConstraint : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.estimatedCostTier = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyPolicy(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tier = (i.tier !== undefined ? i.tier : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyTimeouts(ctx, depth + 1)));
  return out;
}

// GENERATED FILE — do not edit.
// Service: dlm   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dlm from "../types/dlm.js";

// aws:dlm/lifecyclePolicy:LifecyclePolicy
export function LifecyclePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.policyDetails = (i.policyDetails !== undefined ? i.policyDetails : (depth > 4 ? {} : T_dlm.dlm_LifecyclePolicyPolicyDetails(ctx, depth + 1)));
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

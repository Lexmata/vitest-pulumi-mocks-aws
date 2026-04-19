// GENERATED FILE — do not edit.
// Service: swf   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:swf/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.workflowExecutionRetentionPeriodInDays = (i.workflowExecutionRetentionPeriodInDays !== undefined ? i.workflowExecutionRetentionPeriodInDays : "");
  return out;
}

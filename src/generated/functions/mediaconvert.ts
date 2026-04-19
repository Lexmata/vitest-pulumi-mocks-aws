// GENERATED FILE — do not edit.
// Service: mediaconvert   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:mediaconvert/getQueue:getQueue
export function getQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = ctx.name;
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

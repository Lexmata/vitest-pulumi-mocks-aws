// GENERATED FILE — do not edit.
// Service: ivs   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:ivs/getStreamKey:getStreamKey
export function getStreamKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.channelArn = (i.channelArn !== undefined ? i.channelArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.value = "";
  return out;
}

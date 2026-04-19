// GENERATED FILE — do not edit.
// Service: mediapackagev2   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:mediapackagev2/channelGroup:ChannelGroup
export function ChannelGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.egressDomain = h.endpoint(ctx, "egressDomain");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

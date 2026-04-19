// GENERATED FILE — do not edit.
// Service: mediapackage   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mediapackage from "../types/mediapackage.js";

// aws:mediapackage/channel:Channel
export function Channel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.channelId = (i.channelId !== undefined ? i.channelId : h.id(ctx, "channelId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.hlsIngests = (depth > 4 ? [] : [(depth > 4 ? {} : T_mediapackage.mediapackage_ChannelHlsIngest(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

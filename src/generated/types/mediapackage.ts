// GENERATED FILE — do not edit.
// Service: mediapackage   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mediapackage from "./mediapackage.js";

// aws:mediapackage/ChannelHlsIngest:ChannelHlsIngest
export function mediapackage_ChannelHlsIngest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ingestEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_mediapackage.mediapackage_ChannelHlsIngestIngestEndpoint(ctx, depth + 1))]);
  return out;
}

// aws:mediapackage/ChannelHlsIngestIngestEndpoint:ChannelHlsIngestIngestEndpoint
export function mediapackage_ChannelHlsIngestIngestEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: ivs   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ivs from "../types/ivs.js";

// aws:ivs/channel:Channel
export function Channel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authorized = (i.authorized !== undefined ? i.authorized : false);
  out.ingestEndpoint = h.endpoint(ctx, "ingestEndpoint");
  out.latencyMode = (i.latencyMode !== undefined ? i.latencyMode : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.playbackUrl = h.endpoint(ctx, "playbackUrl");
  out.recordingConfigurationArn = (i.recordingConfigurationArn !== undefined ? i.recordingConfigurationArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:ivs/playbackKeyPair:PlaybackKeyPair
export function PlaybackKeyPair(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fingerprint = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.publicKey = (i.publicKey !== undefined ? i.publicKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ivs/recordingConfiguration:RecordingConfiguration
export function RecordingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationConfiguration = (i.destinationConfiguration !== undefined ? i.destinationConfiguration : (depth > 4 ? {} : T_ivs.ivs_RecordingConfigurationDestinationConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recordingReconnectWindowSeconds = (i.recordingReconnectWindowSeconds !== undefined ? i.recordingReconnectWindowSeconds : 0);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.thumbnailConfiguration = (i.thumbnailConfiguration !== undefined ? i.thumbnailConfiguration : (depth > 4 ? {} : T_ivs.ivs_RecordingConfigurationThumbnailConfiguration(ctx, depth + 1)));
  return out;
}

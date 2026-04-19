// GENERATED FILE — do not edit.
// Service: elastictranscoder   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elastictranscoder from "../types/elastictranscoder.js";

// aws:elastictranscoder/pipeline:Pipeline
export function Pipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsKmsKeyArn = (i.awsKmsKeyArn !== undefined ? i.awsKmsKeyArn : h.arn(ctx));
  out.contentConfig = (i.contentConfig !== undefined ? i.contentConfig : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PipelineContentConfig(ctx, depth + 1)));
  out.contentConfigPermissions = (i.contentConfigPermissions !== undefined ? i.contentConfigPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PipelineContentConfigPermission(ctx, depth + 1))]));
  out.inputBucket = (i.inputBucket !== undefined ? i.inputBucket : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notifications = (i.notifications !== undefined ? i.notifications : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PipelineNotifications(ctx, depth + 1)));
  out.outputBucket = (i.outputBucket !== undefined ? i.outputBucket : "");
  out.role = (i.role !== undefined ? i.role : "");
  out.thumbnailConfig = (i.thumbnailConfig !== undefined ? i.thumbnailConfig : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PipelineThumbnailConfig(ctx, depth + 1)));
  out.thumbnailConfigPermissions = (i.thumbnailConfigPermissions !== undefined ? i.thumbnailConfigPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PipelineThumbnailConfigPermission(ctx, depth + 1))]));
  return out;
}

// aws:elastictranscoder/preset:Preset
export function Preset(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.audio = (i.audio !== undefined ? i.audio : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PresetAudio(ctx, depth + 1)));
  out.audioCodecOptions = (i.audioCodecOptions !== undefined ? i.audioCodecOptions : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PresetAudioCodecOptions(ctx, depth + 1)));
  out.container = (i.container !== undefined ? i.container : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.thumbnails = (i.thumbnails !== undefined ? i.thumbnails : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PresetThumbnails(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  out.video = (i.video !== undefined ? i.video : (depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PresetVideo(ctx, depth + 1)));
  out.videoCodecOptions = (i.videoCodecOptions !== undefined ? i.videoCodecOptions : {});
  out.videoWatermarks = (i.videoWatermarks !== undefined ? i.videoWatermarks : (depth > 4 ? [] : [(depth > 4 ? {} : T_elastictranscoder.elastictranscoder_PresetVideoWatermark(ctx, depth + 1))]));
  return out;
}

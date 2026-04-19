// GENERATED FILE — do not edit.
// Service: elastictranscoder   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elastictranscoder from "./elastictranscoder.js";

// aws:elastictranscoder/PipelineContentConfig:PipelineContentConfig
export function elastictranscoder_PipelineContentConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.storageClass = "";
  return out;
}

// aws:elastictranscoder/PipelineContentConfigPermission:PipelineContentConfigPermission
export function elastictranscoder_PipelineContentConfigPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accesses = (depth > 4 ? [] : [""]);
  out.grantee = "";
  out.granteeType = "";
  return out;
}

// aws:elastictranscoder/PipelineNotifications:PipelineNotifications
export function elastictranscoder_PipelineNotifications(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completed = "";
  out.error = "";
  out.progressing = "";
  out.warning = "";
  return out;
}

// aws:elastictranscoder/PipelineThumbnailConfig:PipelineThumbnailConfig
export function elastictranscoder_PipelineThumbnailConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.storageClass = "";
  return out;
}

// aws:elastictranscoder/PipelineThumbnailConfigPermission:PipelineThumbnailConfigPermission
export function elastictranscoder_PipelineThumbnailConfigPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accesses = (depth > 4 ? [] : [""]);
  out.grantee = "";
  out.granteeType = "";
  return out;
}

// aws:elastictranscoder/PresetAudio:PresetAudio
export function elastictranscoder_PresetAudio(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioPackingMode = "";
  out.bitRate = "";
  out.channels = "";
  out.codec = "";
  out.sampleRate = "";
  return out;
}

// aws:elastictranscoder/PresetAudioCodecOptions:PresetAudioCodecOptions
export function elastictranscoder_PresetAudioCodecOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitDepth = "";
  out.bitOrder = "";
  out.profile = "";
  out.signed = "";
  return out;
}

// aws:elastictranscoder/PresetThumbnails:PresetThumbnails
export function elastictranscoder_PresetThumbnails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aspectRatio = "";
  out.format = "";
  out.interval = "";
  out.maxHeight = "";
  out.maxWidth = "";
  out.paddingPolicy = "";
  out.resolution = "";
  out.sizingPolicy = "";
  return out;
}

// aws:elastictranscoder/PresetVideo:PresetVideo
export function elastictranscoder_PresetVideo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aspectRatio = "";
  out.bitRate = "";
  out.codec = "";
  out.displayAspectRatio = "";
  out.fixedGop = "";
  out.frameRate = "";
  out.keyframesMaxDist = "";
  out.maxFrameRate = "";
  out.maxHeight = "";
  out.maxWidth = "";
  out.paddingPolicy = "";
  out.resolution = "";
  out.sizingPolicy = "";
  return out;
}

// aws:elastictranscoder/PresetVideoWatermark:PresetVideoWatermark
export function elastictranscoder_PresetVideoWatermark(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.horizontalAlign = "";
  out.horizontalOffset = "";
  out.id = h.id(ctx, "id");
  out.maxHeight = "";
  out.maxWidth = "";
  out.opacity = "";
  out.sizingPolicy = "";
  out.target = "";
  out.verticalAlign = "";
  out.verticalOffset = "";
  return out;
}

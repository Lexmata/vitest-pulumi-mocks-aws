// GENERATED FILE — do not edit.
// Service: rekognition   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rekognition from "./rekognition.js";

// aws:rekognition/CollectionTimeouts:CollectionTimeouts
export function rekognition_CollectionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:rekognition/ProjectTimeouts:ProjectTimeouts
export function rekognition_ProjectTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:rekognition/StreamProcessorDataSharingPreference:StreamProcessorDataSharingPreference
export function rekognition_StreamProcessorDataSharingPreference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optIn = false;
  return out;
}

// aws:rekognition/StreamProcessorInput:StreamProcessorInput
export function rekognition_StreamProcessorInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisVideoStream = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorInputKinesisVideoStream(ctx, depth + 1));
  return out;
}

// aws:rekognition/StreamProcessorInputKinesisVideoStream:StreamProcessorInputKinesisVideoStream
export function rekognition_StreamProcessorInputKinesisVideoStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:rekognition/StreamProcessorNotificationChannel:StreamProcessorNotificationChannel
export function rekognition_StreamProcessorNotificationChannel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snsTopicArn = h.arn(ctx);
  return out;
}

// aws:rekognition/StreamProcessorOutput:StreamProcessorOutput
export function rekognition_StreamProcessorOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisDataStream = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorOutputKinesisDataStream(ctx, depth + 1));
  out.s3Destination = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorOutputS3Destination(ctx, depth + 1));
  return out;
}

// aws:rekognition/StreamProcessorOutputKinesisDataStream:StreamProcessorOutputKinesisDataStream
export function rekognition_StreamProcessorOutputKinesisDataStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:rekognition/StreamProcessorOutputS3Destination:StreamProcessorOutputS3Destination
export function rekognition_StreamProcessorOutputS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.keyPrefix = "";
  return out;
}

// aws:rekognition/StreamProcessorRegionsOfInterest:StreamProcessorRegionsOfInterest
export function rekognition_StreamProcessorRegionsOfInterest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.boundingBox = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorRegionsOfInterestBoundingBox(ctx, depth + 1));
  out.polygons = (depth > 4 ? [] : [(depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorRegionsOfInterestPolygon(ctx, depth + 1))]);
  return out;
}

// aws:rekognition/StreamProcessorRegionsOfInterestBoundingBox:StreamProcessorRegionsOfInterestBoundingBox
export function rekognition_StreamProcessorRegionsOfInterestBoundingBox(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.height = 0;
  out.left = 0;
  out.top = 0;
  out.width = 0;
  return out;
}

// aws:rekognition/StreamProcessorRegionsOfInterestPolygon:StreamProcessorRegionsOfInterestPolygon
export function rekognition_StreamProcessorRegionsOfInterestPolygon(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.x = 0;
  out.y = 0;
  return out;
}

// aws:rekognition/StreamProcessorSettings:StreamProcessorSettings
export function rekognition_StreamProcessorSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectedHome = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorSettingsConnectedHome(ctx, depth + 1));
  out.faceSearch = (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorSettingsFaceSearch(ctx, depth + 1));
  return out;
}

// aws:rekognition/StreamProcessorSettingsConnectedHome:StreamProcessorSettingsConnectedHome
export function rekognition_StreamProcessorSettingsConnectedHome(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labels = (depth > 4 ? [] : [""]);
  out.minConfidence = 0;
  return out;
}

// aws:rekognition/StreamProcessorSettingsFaceSearch:StreamProcessorSettingsFaceSearch
export function rekognition_StreamProcessorSettingsFaceSearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionId = h.id(ctx, "collectionId");
  out.faceMatchThreshold = 0;
  return out;
}

// aws:rekognition/StreamProcessorTimeouts:StreamProcessorTimeouts
export function rekognition_StreamProcessorTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: rekognition   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rekognition from "../types/rekognition.js";

// aws:rekognition/collection:Collection
export function Collection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.collectionId = (i.collectionId !== undefined ? i.collectionId : h.id(ctx, "collectionId"));
  out.faceModelVersion = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rekognition.rekognition_CollectionTimeouts(ctx, depth + 1)));
  return out;
}

// aws:rekognition/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoUpdate = (i.autoUpdate !== undefined ? i.autoUpdate : "");
  out.feature = (i.feature !== undefined ? i.feature : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rekognition.rekognition_ProjectTimeouts(ctx, depth + 1)));
  return out;
}

// aws:rekognition/streamProcessor:StreamProcessor
export function StreamProcessor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataSharingPreference = (i.dataSharingPreference !== undefined ? i.dataSharingPreference : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorDataSharingPreference(ctx, depth + 1)));
  out.input = (i.input !== undefined ? i.input : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorInput(ctx, depth + 1)));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationChannel = (i.notificationChannel !== undefined ? i.notificationChannel : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorNotificationChannel(ctx, depth + 1)));
  out.output = (i.output !== undefined ? i.output : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorOutput(ctx, depth + 1)));
  out.regionsOfInterests = (i.regionsOfInterests !== undefined ? i.regionsOfInterests : (depth > 4 ? [] : [(depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorRegionsOfInterest(ctx, depth + 1))]));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorSettings(ctx, depth + 1)));
  out.streamProcessorArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_rekognition.rekognition_StreamProcessorTimeouts(ctx, depth + 1)));
  return out;
}

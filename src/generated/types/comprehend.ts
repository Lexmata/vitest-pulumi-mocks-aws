// GENERATED FILE — do not edit.
// Service: comprehend   (11 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_comprehend from "./comprehend.js";

// aws:comprehend/DocumentClassifierInputDataConfig:DocumentClassifierInputDataConfig
export function comprehend_DocumentClassifierInputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.augmentedManifests = (depth > 4 ? [] : [(depth > 4 ? {} : T_comprehend.comprehend_DocumentClassifierInputDataConfigAugmentedManifest(ctx, depth + 1))]);
  out.dataFormat = "";
  out.labelDelimiter = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.testS3Uri = h.endpoint(ctx, "testS3Uri");
  return out;
}

// aws:comprehend/DocumentClassifierInputDataConfigAugmentedManifest:DocumentClassifierInputDataConfigAugmentedManifest
export function comprehend_DocumentClassifierInputDataConfigAugmentedManifest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.annotationDataS3Uri = h.endpoint(ctx, "annotationDataS3Uri");
  out.attributeNames = (depth > 4 ? [] : [""]);
  out.documentType = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.sourceDocumentsS3Uri = h.endpoint(ctx, "sourceDocumentsS3Uri");
  out.split = "";
  return out;
}

// aws:comprehend/DocumentClassifierOutputDataConfig:DocumentClassifierOutputDataConfig
export function comprehend_DocumentClassifierOutputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.outputS3Uri = h.endpoint(ctx, "outputS3Uri");
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:comprehend/DocumentClassifierVpcConfig:DocumentClassifierVpcConfig
export function comprehend_DocumentClassifierVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfig:EntityRecognizerInputDataConfig
export function comprehend_EntityRecognizerInputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.annotations = (depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfigAnnotations(ctx, depth + 1));
  out.augmentedManifests = (depth > 4 ? [] : [(depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfigAugmentedManifest(ctx, depth + 1))]);
  out.dataFormat = "";
  out.documents = (depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfigDocuments(ctx, depth + 1));
  out.entityList = (depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfigEntityList(ctx, depth + 1));
  out.entityTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfigEntityType(ctx, depth + 1))]);
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfigAnnotations:EntityRecognizerInputDataConfigAnnotations
export function comprehend_EntityRecognizerInputDataConfigAnnotations(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.testS3Uri = h.endpoint(ctx, "testS3Uri");
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfigAugmentedManifest:EntityRecognizerInputDataConfigAugmentedManifest
export function comprehend_EntityRecognizerInputDataConfigAugmentedManifest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.annotationDataS3Uri = h.endpoint(ctx, "annotationDataS3Uri");
  out.attributeNames = (depth > 4 ? [] : [""]);
  out.documentType = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.sourceDocumentsS3Uri = h.endpoint(ctx, "sourceDocumentsS3Uri");
  out.split = "";
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfigDocuments:EntityRecognizerInputDataConfigDocuments
export function comprehend_EntityRecognizerInputDataConfigDocuments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputFormat = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.testS3Uri = h.endpoint(ctx, "testS3Uri");
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfigEntityList:EntityRecognizerInputDataConfigEntityList
export function comprehend_EntityRecognizerInputDataConfigEntityList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:comprehend/EntityRecognizerInputDataConfigEntityType:EntityRecognizerInputDataConfigEntityType
export function comprehend_EntityRecognizerInputDataConfigEntityType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:comprehend/EntityRecognizerVpcConfig:EntityRecognizerVpcConfig
export function comprehend_EntityRecognizerVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

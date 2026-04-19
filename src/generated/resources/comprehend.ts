// GENERATED FILE — do not edit.
// Service: comprehend   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_comprehend from "../types/comprehend.js";

// aws:comprehend/documentClassifier:DocumentClassifier
export function DocumentClassifier(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataAccessRoleArn = (i.dataAccessRoleArn !== undefined ? i.dataAccessRoleArn : h.arn(ctx));
  out.inputDataConfig = (i.inputDataConfig !== undefined ? i.inputDataConfig : (depth > 4 ? {} : T_comprehend.comprehend_DocumentClassifierInputDataConfig(ctx, depth + 1)));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.mode = (i.mode !== undefined ? i.mode : "");
  out.modelKmsKeyId = (i.modelKmsKeyId !== undefined ? i.modelKmsKeyId : h.id(ctx, "modelKmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputDataConfig = (i.outputDataConfig !== undefined ? i.outputDataConfig : (depth > 4 ? {} : T_comprehend.comprehend_DocumentClassifierOutputDataConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionName = (i.versionName !== undefined ? i.versionName : "");
  out.versionNamePrefix = (i.versionNamePrefix !== undefined ? i.versionNamePrefix : "");
  out.volumeKmsKeyId = (i.volumeKmsKeyId !== undefined ? i.volumeKmsKeyId : h.id(ctx, "volumeKmsKeyId"));
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_comprehend.comprehend_DocumentClassifierVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:comprehend/entityRecognizer:EntityRecognizer
export function EntityRecognizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataAccessRoleArn = (i.dataAccessRoleArn !== undefined ? i.dataAccessRoleArn : h.arn(ctx));
  out.inputDataConfig = (i.inputDataConfig !== undefined ? i.inputDataConfig : (depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerInputDataConfig(ctx, depth + 1)));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.modelKmsKeyId = (i.modelKmsKeyId !== undefined ? i.modelKmsKeyId : h.id(ctx, "modelKmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionName = (i.versionName !== undefined ? i.versionName : "");
  out.versionNamePrefix = (i.versionNamePrefix !== undefined ? i.versionNamePrefix : "");
  out.volumeKmsKeyId = (i.volumeKmsKeyId !== undefined ? i.volumeKmsKeyId : h.id(ctx, "volumeKmsKeyId"));
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_comprehend.comprehend_EntityRecognizerVpcConfig(ctx, depth + 1)));
  return out;
}

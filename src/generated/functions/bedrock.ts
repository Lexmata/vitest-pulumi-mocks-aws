// GENERATED FILE — do not edit.
// Service: bedrock   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrock from "../types/bedrock.js";

// aws:bedrock/getAgentAgentVersions:getAgentAgentVersions
export function getAgentAgentVersions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentId = (i.agentId !== undefined ? i.agentId : h.id(ctx, "agentId"));
  out.agentVersionSummaries = (i.agentVersionSummaries !== undefined ? i.agentVersionSummaries : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getAgentAgentVersionsAgentVersionSummary(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:bedrock/getCustomModel:getCustomModel
export function getCustomModel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baseModelArn = h.arn(ctx);
  out.creationTime = "";
  out.hyperparameters = {};
  out.id = h.id(ctx, "id");
  out.jobArn = h.arn(ctx);
  out.jobName = "";
  out.jobTags = {};
  out.modelArn = h.arn(ctx);
  out.modelId = (i.modelId !== undefined ? i.modelId : h.id(ctx, "modelId"));
  out.modelKmsKeyArn = h.arn(ctx);
  out.modelName = "";
  out.modelTags = {};
  out.outputDataConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelOutputDataConfig(ctx, depth + 1))]);
  out.trainingDataConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelTrainingDataConfig(ctx, depth + 1))]);
  out.trainingMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelTrainingMetric(ctx, depth + 1))]);
  out.validationDataConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelValidationDataConfig(ctx, depth + 1))]);
  out.validationMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelValidationMetric(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/getCustomModels:getCustomModels
export function getCustomModels(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.modelSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelsModelSummary(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/getInferenceProfile:getInferenceProfile
export function getInferenceProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.description = "";
  out.id = h.id(ctx, "id");
  out.inferenceProfileArn = h.arn(ctx);
  out.inferenceProfileId = (i.inferenceProfileId !== undefined ? i.inferenceProfileId : h.id(ctx, "inferenceProfileId"));
  out.inferenceProfileName = "";
  out.models = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getInferenceProfileModel(ctx, depth + 1))]);
  out.status = "active";
  out.type = "";
  out.updatedAt = "";
  return out;
}

// aws:bedrock/getInferenceProfiles:getInferenceProfiles
export function getInferenceProfiles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.inferenceProfileSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getInferenceProfilesInferenceProfileSummary(ctx, depth + 1))]);
  return out;
}

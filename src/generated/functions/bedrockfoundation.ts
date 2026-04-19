// GENERATED FILE — do not edit.
// Service: bedrockfoundation   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrockfoundation from "../types/bedrockfoundation.js";

// aws:bedrockfoundation/getModel:getModel
export function getModel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizationsSupporteds = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.inferenceTypesSupporteds = (depth > 4 ? [] : [""]);
  out.inputModalities = (depth > 4 ? [] : [""]);
  out.modelArn = h.arn(ctx);
  out.modelId = (i.modelId !== undefined ? i.modelId : h.id(ctx, "modelId"));
  out.modelName = "";
  out.outputModalities = (depth > 4 ? [] : [""]);
  out.providerName = "";
  out.responseStreamingSupported = false;
  return out;
}

// aws:bedrockfoundation/getModels:getModels
export function getModels(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.byCustomizationType = (i.byCustomizationType !== undefined ? i.byCustomizationType : "");
  out.byInferenceType = (i.byInferenceType !== undefined ? i.byInferenceType : "");
  out.byOutputModality = (i.byOutputModality !== undefined ? i.byOutputModality : "");
  out.byProvider = (i.byProvider !== undefined ? i.byProvider : "");
  out.id = h.id(ctx, "id");
  out.modelSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrockfoundation.bedrockfoundation_getModelsModelSummary(ctx, depth + 1))]);
  return out;
}

// GENERATED FILE — do not edit.
// Service: bedrockfoundation   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrockfoundation from "./bedrockfoundation.js";

// aws:bedrockfoundation/getModelsModelSummary:getModelsModelSummary
export function bedrockfoundation_getModelsModelSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizationsSupporteds = (depth > 4 ? [] : [""]);
  out.inferenceTypesSupporteds = (depth > 4 ? [] : [""]);
  out.inputModalities = (depth > 4 ? [] : [""]);
  out.modelArn = h.arn(ctx);
  out.modelId = h.id(ctx, "modelId");
  out.modelName = "";
  out.outputModalities = (depth > 4 ? [] : [""]);
  out.providerName = "";
  out.responseStreamingSupported = false;
  return out;
}

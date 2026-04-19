// GENERATED FILE — do not edit.
// Service: transcribe   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_transcribe from "./transcribe.js";

// aws:transcribe/LanguageModelInputDataConfig:LanguageModelInputDataConfig
export function transcribe_LanguageModelInputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataAccessRoleArn = h.arn(ctx);
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  out.tuningDataS3Uri = h.endpoint(ctx, "tuningDataS3Uri");
  return out;
}

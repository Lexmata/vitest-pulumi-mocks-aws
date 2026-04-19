// GENERATED FILE — do not edit.
// Service: transcribe   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_transcribe from "../types/transcribe.js";

// aws:transcribe/languageModel:LanguageModel
export function LanguageModel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.baseModelName = (i.baseModelName !== undefined ? i.baseModelName : "");
  out.inputDataConfig = (i.inputDataConfig !== undefined ? i.inputDataConfig : (depth > 4 ? {} : T_transcribe.transcribe_LanguageModelInputDataConfig(ctx, depth + 1)));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.modelName = (i.modelName !== undefined ? i.modelName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:transcribe/medicalVocabulary:MedicalVocabulary
export function MedicalVocabulary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.downloadUri = h.endpoint(ctx, "downloadUri");
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vocabularyFileUri = (i.vocabularyFileUri !== undefined ? i.vocabularyFileUri : h.endpoint(ctx, "vocabularyFileUri"));
  out.vocabularyName = (i.vocabularyName !== undefined ? i.vocabularyName : "");
  return out;
}

// aws:transcribe/vocabulary:Vocabulary
export function Vocabulary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.downloadUri = h.endpoint(ctx, "downloadUri");
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.phrases = (i.phrases !== undefined ? i.phrases : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vocabularyFileUri = (i.vocabularyFileUri !== undefined ? i.vocabularyFileUri : h.endpoint(ctx, "vocabularyFileUri"));
  out.vocabularyName = (i.vocabularyName !== undefined ? i.vocabularyName : "");
  return out;
}

// aws:transcribe/vocabularyFilter:VocabularyFilter
export function VocabularyFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.downloadUri = h.endpoint(ctx, "downloadUri");
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vocabularyFilterFileUri = (i.vocabularyFilterFileUri !== undefined ? i.vocabularyFilterFileUri : h.endpoint(ctx, "vocabularyFilterFileUri"));
  out.vocabularyFilterName = (i.vocabularyFilterName !== undefined ? i.vocabularyFilterName : "");
  out.words = (i.words !== undefined ? i.words : (depth > 4 ? [] : [""]));
  return out;
}

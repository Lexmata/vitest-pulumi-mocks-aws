// GENERATED FILE — do not edit.
// Service: polly   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_polly from "../types/polly.js";

// aws:polly/getVoices:getVoices
export function getVoices(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.id = h.id(ctx, "id");
  out.includeAdditionalLanguageCodes = (i.includeAdditionalLanguageCodes !== undefined ? i.includeAdditionalLanguageCodes : false);
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.voices = (i.voices !== undefined ? i.voices : (depth > 4 ? [] : [(depth > 4 ? {} : T_polly.polly_getVoicesVoice(ctx, depth + 1))]));
  return out;
}

// GENERATED FILE — do not edit.
// Service: polly   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_polly from "./polly.js";

// aws:polly/getVoicesVoice:getVoicesVoice
export function polly_getVoicesVoice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalLanguageCodes = (depth > 4 ? [] : [""]);
  out.gender = "";
  out.id = h.id(ctx, "id");
  out.languageCode = "";
  out.languageName = "";
  out.name = ctx.name;
  out.supportedEngines = (depth > 4 ? [] : [""]);
  return out;
}

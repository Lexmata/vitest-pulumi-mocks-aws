// GENERATED FILE — do not edit.
// Service: emr   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emr from "../types/emr.js";

// aws:emr/getReleaseLabels:getReleaseLabels
export function getReleaseLabels(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? {} : T_emr.emr_getReleaseLabelsFilters(ctx, depth + 1)));
  out.id = h.id(ctx, "id");
  out.releaseLabels = (depth > 4 ? [] : [""]);
  return out;
}

// aws:emr/getSupportedInstanceTypes:getSupportedInstanceTypes
export function getSupportedInstanceTypes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.releaseLabel = (i.releaseLabel !== undefined ? i.releaseLabel : "");
  out.supportedInstanceTypes = (i.supportedInstanceTypes !== undefined ? i.supportedInstanceTypes : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_getSupportedInstanceTypesSupportedInstanceType(ctx, depth + 1))]));
  return out;
}

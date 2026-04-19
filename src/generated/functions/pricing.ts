// GENERATED FILE — do not edit.
// Service: pricing   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_pricing from "../types/pricing.js";

// aws:pricing/getProduct:getProduct
export function getProduct(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_pricing.pricing_getProductFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.result = "";
  out.serviceCode = (i.serviceCode !== undefined ? i.serviceCode : "");
  return out;
}

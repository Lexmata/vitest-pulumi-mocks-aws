// GENERATED FILE — do not edit.
// Service: resourceexplorer   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourceexplorer from "../types/resourceexplorer.js";

// aws:resourceexplorer/search:Search
export function Search(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.queryString = (i.queryString !== undefined ? i.queryString : "");
  out.resourceCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourceexplorer.resourceexplorer_SearchResourceCount(ctx, depth + 1))]);
  out.resources = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourceexplorer.resourceexplorer_SearchResource(ctx, depth + 1))]);
  out.viewArn = (i.viewArn !== undefined ? i.viewArn : h.arn(ctx));
  return out;
}

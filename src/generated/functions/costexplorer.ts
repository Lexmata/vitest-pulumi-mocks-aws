// GENERATED FILE — do not edit.
// Service: costexplorer   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_costexplorer from "../types/costexplorer.js";

// aws:costexplorer/getCostCategory:getCostCategory
export function getCostCategory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategoryArn = (i.costCategoryArn !== undefined ? i.costCategoryArn : h.arn(ctx));
  out.defaultValue = "";
  out.effectiveEnd = "";
  out.effectiveStart = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.ruleVersion = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRule(ctx, depth + 1))]);
  out.splitChargeRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategorySplitChargeRule(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:costexplorer/getTags:getTags
export function getTags(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilter(ctx, depth + 1)));
  out.id = h.id(ctx, "id");
  out.searchString = (i.searchString !== undefined ? i.searchString : "");
  out.sortBies = (i.sortBies !== undefined ? i.sortBies : (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getTagsSortBy(ctx, depth + 1))]));
  out.tagKey = (i.tagKey !== undefined ? i.tagKey : "");
  out.tags = (depth > 4 ? [] : [""]);
  out.timePeriod = (i.timePeriod !== undefined ? i.timePeriod : (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsTimePeriod(ctx, depth + 1)));
  return out;
}

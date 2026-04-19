// GENERATED FILE — do not edit.
// Service: costexplorer   (147 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_costexplorer from "./costexplorer.js";

// aws:costexplorer/AnomalySubscriptionSubscriber:AnomalySubscriptionSubscriber
export function costexplorer_AnomalySubscriptionSubscriber(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.type = "";
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpression:AnomalySubscriptionThresholdExpression
export function costexplorer_AnomalySubscriptionThresholdExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionAnd:AnomalySubscriptionThresholdExpressionAnd
export function costexplorer_AnomalySubscriptionThresholdExpressionAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionAndDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionAndCostCategory:AnomalySubscriptionThresholdExpressionAndCostCategory
export function costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionAndDimension:AnomalySubscriptionThresholdExpressionAndDimension
export function costexplorer_AnomalySubscriptionThresholdExpressionAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionAndTags:AnomalySubscriptionThresholdExpressionAndTags
export function costexplorer_AnomalySubscriptionThresholdExpressionAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionCostCategory:AnomalySubscriptionThresholdExpressionCostCategory
export function costexplorer_AnomalySubscriptionThresholdExpressionCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionDimension:AnomalySubscriptionThresholdExpressionDimension
export function costexplorer_AnomalySubscriptionThresholdExpressionDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionNot:AnomalySubscriptionThresholdExpressionNot
export function costexplorer_AnomalySubscriptionThresholdExpressionNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionNotDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionNotCostCategory:AnomalySubscriptionThresholdExpressionNotCostCategory
export function costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionNotDimension:AnomalySubscriptionThresholdExpressionNotDimension
export function costexplorer_AnomalySubscriptionThresholdExpressionNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionNotTags:AnomalySubscriptionThresholdExpressionNotTags
export function costexplorer_AnomalySubscriptionThresholdExpressionNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionOr:AnomalySubscriptionThresholdExpressionOr
export function costexplorer_AnomalySubscriptionThresholdExpressionOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionOrDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpressionOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionOrCostCategory:AnomalySubscriptionThresholdExpressionOrCostCategory
export function costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionOrDimension:AnomalySubscriptionThresholdExpressionOrDimension
export function costexplorer_AnomalySubscriptionThresholdExpressionOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionOrTags:AnomalySubscriptionThresholdExpressionOrTags
export function costexplorer_AnomalySubscriptionThresholdExpressionOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/AnomalySubscriptionThresholdExpressionTags:AnomalySubscriptionThresholdExpressionTags
export function costexplorer_AnomalySubscriptionThresholdExpressionTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRule:CostCategoryRule
export function costexplorer_CostCategoryRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inheritedValue = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleInheritedValue(ctx, depth + 1));
  out.rule = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRule(ctx, depth + 1));
  out.type = "";
  out.value = "";
  return out;
}

// aws:costexplorer/CostCategoryRuleInheritedValue:CostCategoryRuleInheritedValue
export function costexplorer_CostCategoryRuleInheritedValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensionKey = "";
  out.dimensionName = "";
  return out;
}

// aws:costexplorer/CostCategoryRuleRule:CostCategoryRuleRule
export function costexplorer_CostCategoryRuleRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAnd:CostCategoryRuleRuleAnd
export function costexplorer_CostCategoryRuleRuleAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndAnd:CostCategoryRuleRuleAndAnd
export function costexplorer_CostCategoryRuleRuleAndAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndAndDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndAndCostCategory:CostCategoryRuleRuleAndAndCostCategory
export function costexplorer_CostCategoryRuleRuleAndAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndAndDimension:CostCategoryRuleRuleAndAndDimension
export function costexplorer_CostCategoryRuleRuleAndAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndAndTags:CostCategoryRuleRuleAndAndTags
export function costexplorer_CostCategoryRuleRuleAndAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndCostCategory:CostCategoryRuleRuleAndCostCategory
export function costexplorer_CostCategoryRuleRuleAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndDimension:CostCategoryRuleRuleAndDimension
export function costexplorer_CostCategoryRuleRuleAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndNot:CostCategoryRuleRuleAndNot
export function costexplorer_CostCategoryRuleRuleAndNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndNotDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndNotCostCategory:CostCategoryRuleRuleAndNotCostCategory
export function costexplorer_CostCategoryRuleRuleAndNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndNotDimension:CostCategoryRuleRuleAndNotDimension
export function costexplorer_CostCategoryRuleRuleAndNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndNotTags:CostCategoryRuleRuleAndNotTags
export function costexplorer_CostCategoryRuleRuleAndNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndOr:CostCategoryRuleRuleAndOr
export function costexplorer_CostCategoryRuleRuleAndOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndOrDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleAndOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndOrCostCategory:CostCategoryRuleRuleAndOrCostCategory
export function costexplorer_CostCategoryRuleRuleAndOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndOrDimension:CostCategoryRuleRuleAndOrDimension
export function costexplorer_CostCategoryRuleRuleAndOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndOrTags:CostCategoryRuleRuleAndOrTags
export function costexplorer_CostCategoryRuleRuleAndOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleAndTags:CostCategoryRuleRuleAndTags
export function costexplorer_CostCategoryRuleRuleAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleCostCategory:CostCategoryRuleRuleCostCategory
export function costexplorer_CostCategoryRuleRuleCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleDimension:CostCategoryRuleRuleDimension
export function costexplorer_CostCategoryRuleRuleDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNot:CostCategoryRuleRuleNot
export function costexplorer_CostCategoryRuleRuleNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotAnd:CostCategoryRuleRuleNotAnd
export function costexplorer_CostCategoryRuleRuleNotAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotAndDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotAndCostCategory:CostCategoryRuleRuleNotAndCostCategory
export function costexplorer_CostCategoryRuleRuleNotAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotAndDimension:CostCategoryRuleRuleNotAndDimension
export function costexplorer_CostCategoryRuleRuleNotAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotAndTags:CostCategoryRuleRuleNotAndTags
export function costexplorer_CostCategoryRuleRuleNotAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotCostCategory:CostCategoryRuleRuleNotCostCategory
export function costexplorer_CostCategoryRuleRuleNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotDimension:CostCategoryRuleRuleNotDimension
export function costexplorer_CostCategoryRuleRuleNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotNot:CostCategoryRuleRuleNotNot
export function costexplorer_CostCategoryRuleRuleNotNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotNotDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotNotCostCategory:CostCategoryRuleRuleNotNotCostCategory
export function costexplorer_CostCategoryRuleRuleNotNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotNotDimension:CostCategoryRuleRuleNotNotDimension
export function costexplorer_CostCategoryRuleRuleNotNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotNotTags:CostCategoryRuleRuleNotNotTags
export function costexplorer_CostCategoryRuleRuleNotNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotOr:CostCategoryRuleRuleNotOr
export function costexplorer_CostCategoryRuleRuleNotOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotOrDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleNotOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotOrCostCategory:CostCategoryRuleRuleNotOrCostCategory
export function costexplorer_CostCategoryRuleRuleNotOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotOrDimension:CostCategoryRuleRuleNotOrDimension
export function costexplorer_CostCategoryRuleRuleNotOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotOrTags:CostCategoryRuleRuleNotOrTags
export function costexplorer_CostCategoryRuleRuleNotOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleNotTags:CostCategoryRuleRuleNotTags
export function costexplorer_CostCategoryRuleRuleNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOr:CostCategoryRuleRuleOr
export function costexplorer_CostCategoryRuleRuleOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrAnd:CostCategoryRuleRuleOrAnd
export function costexplorer_CostCategoryRuleRuleOrAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrAndDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrAndCostCategory:CostCategoryRuleRuleOrAndCostCategory
export function costexplorer_CostCategoryRuleRuleOrAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrAndDimension:CostCategoryRuleRuleOrAndDimension
export function costexplorer_CostCategoryRuleRuleOrAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrAndTags:CostCategoryRuleRuleOrAndTags
export function costexplorer_CostCategoryRuleRuleOrAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrCostCategory:CostCategoryRuleRuleOrCostCategory
export function costexplorer_CostCategoryRuleRuleOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrDimension:CostCategoryRuleRuleOrDimension
export function costexplorer_CostCategoryRuleRuleOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrNot:CostCategoryRuleRuleOrNot
export function costexplorer_CostCategoryRuleRuleOrNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrNotDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrNotCostCategory:CostCategoryRuleRuleOrNotCostCategory
export function costexplorer_CostCategoryRuleRuleOrNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrNotDimension:CostCategoryRuleRuleOrNotDimension
export function costexplorer_CostCategoryRuleRuleOrNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrNotTags:CostCategoryRuleRuleOrNotTags
export function costexplorer_CostCategoryRuleRuleOrNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrOr:CostCategoryRuleRuleOrOr
export function costexplorer_CostCategoryRuleRuleOrOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrOrDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRuleRuleOrOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrOrCostCategory:CostCategoryRuleRuleOrOrCostCategory
export function costexplorer_CostCategoryRuleRuleOrOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrOrDimension:CostCategoryRuleRuleOrOrDimension
export function costexplorer_CostCategoryRuleRuleOrOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrOrTags:CostCategoryRuleRuleOrOrTags
export function costexplorer_CostCategoryRuleRuleOrOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleOrTags:CostCategoryRuleRuleOrTags
export function costexplorer_CostCategoryRuleRuleOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategoryRuleRuleTags:CostCategoryRuleRuleTags
export function costexplorer_CostCategoryRuleRuleTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategorySplitChargeRule:CostCategorySplitChargeRule
export function costexplorer_CostCategorySplitChargeRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.method = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategorySplitChargeRuleParameter(ctx, depth + 1))]);
  out.source = "";
  out.targets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/CostCategorySplitChargeRuleParameter:CostCategorySplitChargeRuleParameter
export function costexplorer_CostCategorySplitChargeRuleParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRule:getCostCategoryRule
export function costexplorer_getCostCategoryRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inheritedValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleInheritedValue(ctx, depth + 1))]);
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRule(ctx, depth + 1))]);
  out.type = "";
  out.value = "";
  return out;
}

// aws:costexplorer/getCostCategoryRuleInheritedValue:getCostCategoryRuleInheritedValue
export function costexplorer_getCostCategoryRuleInheritedValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensionKey = "";
  out.dimensionName = "";
  return out;
}

// aws:costexplorer/getCostCategoryRuleRule:getCostCategoryRuleRule
export function costexplorer_getCostCategoryRuleRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAnd(ctx, depth + 1))]);
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleDimension(ctx, depth + 1))]);
  out.nots = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNot(ctx, depth + 1))]);
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAnd:getCostCategoryRuleRuleAnd
export function costexplorer_getCostCategoryRuleRuleAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndAnd(ctx, depth + 1))]);
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndDimension(ctx, depth + 1))]);
  out.nots = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndNot(ctx, depth + 1))]);
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndAnd:getCostCategoryRuleRuleAndAnd
export function costexplorer_getCostCategoryRuleRuleAndAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndAndCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndAndDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndAndTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndAndCostCategory:getCostCategoryRuleRuleAndAndCostCategory
export function costexplorer_getCostCategoryRuleRuleAndAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndAndDimension:getCostCategoryRuleRuleAndAndDimension
export function costexplorer_getCostCategoryRuleRuleAndAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndAndTag:getCostCategoryRuleRuleAndAndTag
export function costexplorer_getCostCategoryRuleRuleAndAndTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndCostCategory:getCostCategoryRuleRuleAndCostCategory
export function costexplorer_getCostCategoryRuleRuleAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndDimension:getCostCategoryRuleRuleAndDimension
export function costexplorer_getCostCategoryRuleRuleAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndNot:getCostCategoryRuleRuleAndNot
export function costexplorer_getCostCategoryRuleRuleAndNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndNotCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndNotDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndNotTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndNotCostCategory:getCostCategoryRuleRuleAndNotCostCategory
export function costexplorer_getCostCategoryRuleRuleAndNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndNotDimension:getCostCategoryRuleRuleAndNotDimension
export function costexplorer_getCostCategoryRuleRuleAndNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndNotTag:getCostCategoryRuleRuleAndNotTag
export function costexplorer_getCostCategoryRuleRuleAndNotTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndOr:getCostCategoryRuleRuleAndOr
export function costexplorer_getCostCategoryRuleRuleAndOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndOrCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndOrDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleAndOrTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndOrCostCategory:getCostCategoryRuleRuleAndOrCostCategory
export function costexplorer_getCostCategoryRuleRuleAndOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndOrDimension:getCostCategoryRuleRuleAndOrDimension
export function costexplorer_getCostCategoryRuleRuleAndOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndOrTag:getCostCategoryRuleRuleAndOrTag
export function costexplorer_getCostCategoryRuleRuleAndOrTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleAndTag:getCostCategoryRuleRuleAndTag
export function costexplorer_getCostCategoryRuleRuleAndTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleCostCategory:getCostCategoryRuleRuleCostCategory
export function costexplorer_getCostCategoryRuleRuleCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleDimension:getCostCategoryRuleRuleDimension
export function costexplorer_getCostCategoryRuleRuleDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNot:getCostCategoryRuleRuleNot
export function costexplorer_getCostCategoryRuleRuleNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotAnd(ctx, depth + 1))]);
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotDimension(ctx, depth + 1))]);
  out.nots = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotNot(ctx, depth + 1))]);
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotAnd:getCostCategoryRuleRuleNotAnd
export function costexplorer_getCostCategoryRuleRuleNotAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotAndCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotAndDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotAndTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotAndCostCategory:getCostCategoryRuleRuleNotAndCostCategory
export function costexplorer_getCostCategoryRuleRuleNotAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotAndDimension:getCostCategoryRuleRuleNotAndDimension
export function costexplorer_getCostCategoryRuleRuleNotAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotAndTag:getCostCategoryRuleRuleNotAndTag
export function costexplorer_getCostCategoryRuleRuleNotAndTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotCostCategory:getCostCategoryRuleRuleNotCostCategory
export function costexplorer_getCostCategoryRuleRuleNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotDimension:getCostCategoryRuleRuleNotDimension
export function costexplorer_getCostCategoryRuleRuleNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotNot:getCostCategoryRuleRuleNotNot
export function costexplorer_getCostCategoryRuleRuleNotNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotNotCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotNotDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotNotTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotNotCostCategory:getCostCategoryRuleRuleNotNotCostCategory
export function costexplorer_getCostCategoryRuleRuleNotNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotNotDimension:getCostCategoryRuleRuleNotNotDimension
export function costexplorer_getCostCategoryRuleRuleNotNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotNotTag:getCostCategoryRuleRuleNotNotTag
export function costexplorer_getCostCategoryRuleRuleNotNotTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotOr:getCostCategoryRuleRuleNotOr
export function costexplorer_getCostCategoryRuleRuleNotOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotOrCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotOrDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleNotOrTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotOrCostCategory:getCostCategoryRuleRuleNotOrCostCategory
export function costexplorer_getCostCategoryRuleRuleNotOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotOrDimension:getCostCategoryRuleRuleNotOrDimension
export function costexplorer_getCostCategoryRuleRuleNotOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotOrTag:getCostCategoryRuleRuleNotOrTag
export function costexplorer_getCostCategoryRuleRuleNotOrTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleNotTag:getCostCategoryRuleRuleNotTag
export function costexplorer_getCostCategoryRuleRuleNotTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOr:getCostCategoryRuleRuleOr
export function costexplorer_getCostCategoryRuleRuleOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrAnd(ctx, depth + 1))]);
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrDimension(ctx, depth + 1))]);
  out.nots = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrNot(ctx, depth + 1))]);
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrAnd:getCostCategoryRuleRuleOrAnd
export function costexplorer_getCostCategoryRuleRuleOrAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrAndCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrAndDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrAndTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrAndCostCategory:getCostCategoryRuleRuleOrAndCostCategory
export function costexplorer_getCostCategoryRuleRuleOrAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrAndDimension:getCostCategoryRuleRuleOrAndDimension
export function costexplorer_getCostCategoryRuleRuleOrAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrAndTag:getCostCategoryRuleRuleOrAndTag
export function costexplorer_getCostCategoryRuleRuleOrAndTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrCostCategory:getCostCategoryRuleRuleOrCostCategory
export function costexplorer_getCostCategoryRuleRuleOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrDimension:getCostCategoryRuleRuleOrDimension
export function costexplorer_getCostCategoryRuleRuleOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrNot:getCostCategoryRuleRuleOrNot
export function costexplorer_getCostCategoryRuleRuleOrNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrNotCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrNotDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrNotTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrNotCostCategory:getCostCategoryRuleRuleOrNotCostCategory
export function costexplorer_getCostCategoryRuleRuleOrNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrNotDimension:getCostCategoryRuleRuleOrNotDimension
export function costexplorer_getCostCategoryRuleRuleOrNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrNotTag:getCostCategoryRuleRuleOrNotTag
export function costexplorer_getCostCategoryRuleRuleOrNotTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrOr:getCostCategoryRuleRuleOrOr
export function costexplorer_getCostCategoryRuleRuleOrOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrOrCostCategory(ctx, depth + 1))]);
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrOrDimension(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategoryRuleRuleOrOrTag(ctx, depth + 1))]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrOrCostCategory:getCostCategoryRuleRuleOrOrCostCategory
export function costexplorer_getCostCategoryRuleRuleOrOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrOrDimension:getCostCategoryRuleRuleOrOrDimension
export function costexplorer_getCostCategoryRuleRuleOrOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrOrTag:getCostCategoryRuleRuleOrOrTag
export function costexplorer_getCostCategoryRuleRuleOrOrTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleOrTag:getCostCategoryRuleRuleOrTag
export function costexplorer_getCostCategoryRuleRuleOrTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategoryRuleRuleTag:getCostCategoryRuleRuleTag
export function costexplorer_getCostCategoryRuleRuleTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategorySplitChargeRule:getCostCategorySplitChargeRule
export function costexplorer_getCostCategorySplitChargeRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.method = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getCostCategorySplitChargeRuleParameter(ctx, depth + 1))]);
  out.source = "";
  out.targets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getCostCategorySplitChargeRuleParameter:getCostCategorySplitChargeRuleParameter
export function costexplorer_getCostCategorySplitChargeRuleParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilter:getTagsFilter
export function costexplorer_getTagsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterAnd(ctx, depth + 1))]);
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterDimension(ctx, depth + 1));
  out.not = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterNot(ctx, depth + 1));
  out.ors = (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterOr(ctx, depth + 1))]);
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/getTagsFilterAnd:getTagsFilterAnd
export function costexplorer_getTagsFilterAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterAndCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterAndDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterAndTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/getTagsFilterAndCostCategory:getTagsFilterAndCostCategory
export function costexplorer_getTagsFilterAndCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterAndDimension:getTagsFilterAndDimension
export function costexplorer_getTagsFilterAndDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterAndTags:getTagsFilterAndTags
export function costexplorer_getTagsFilterAndTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterCostCategory:getTagsFilterCostCategory
export function costexplorer_getTagsFilterCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterDimension:getTagsFilterDimension
export function costexplorer_getTagsFilterDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterNot:getTagsFilterNot
export function costexplorer_getTagsFilterNot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterNotCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterNotDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterNotTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/getTagsFilterNotCostCategory:getTagsFilterNotCostCategory
export function costexplorer_getTagsFilterNotCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterNotDimension:getTagsFilterNotDimension
export function costexplorer_getTagsFilterNotDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterNotTags:getTagsFilterNotTags
export function costexplorer_getTagsFilterNotTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterOr:getTagsFilterOr
export function costexplorer_getTagsFilterOr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.costCategory = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterOrCostCategory(ctx, depth + 1));
  out.dimension = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterOrDimension(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_costexplorer.costexplorer_getTagsFilterOrTags(ctx, depth + 1));
  return out;
}

// aws:costexplorer/getTagsFilterOrCostCategory:getTagsFilterOrCostCategory
export function costexplorer_getTagsFilterOrCostCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterOrDimension:getTagsFilterOrDimension
export function costexplorer_getTagsFilterOrDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterOrTags:getTagsFilterOrTags
export function costexplorer_getTagsFilterOrTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsFilterTags:getTagsFilterTags
export function costexplorer_getTagsFilterTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.matchOptions = (depth > 4 ? [] : [""]);
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:costexplorer/getTagsSortBy:getTagsSortBy
export function costexplorer_getTagsSortBy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.sortOrder = "";
  return out;
}

// aws:costexplorer/getTagsTimePeriod:getTagsTimePeriod
export function costexplorer_getTagsTimePeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = "";
  out.start = "";
  return out;
}

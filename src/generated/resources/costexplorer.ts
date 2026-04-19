// GENERATED FILE — do not edit.
// Service: costexplorer   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_costexplorer from "../types/costexplorer.js";

// aws:costexplorer/anomalyMonitor:AnomalyMonitor
export function AnomalyMonitor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.monitorDimension = (i.monitorDimension !== undefined ? i.monitorDimension : "");
  out.monitorSpecification = (i.monitorSpecification !== undefined ? i.monitorSpecification : "");
  out.monitorType = (i.monitorType !== undefined ? i.monitorType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:costexplorer/anomalySubscription:AnomalySubscription
export function AnomalySubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.frequency = (i.frequency !== undefined ? i.frequency : "");
  out.monitorArnLists = (i.monitorArnLists !== undefined ? i.monitorArnLists : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subscribers = (i.subscribers !== undefined ? i.subscribers : (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionSubscriber(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.thresholdExpression = (i.thresholdExpression !== undefined ? i.thresholdExpression : (depth > 4 ? {} : T_costexplorer.costexplorer_AnomalySubscriptionThresholdExpression(ctx, depth + 1)));
  return out;
}

// aws:costexplorer/costAllocationTag:CostAllocationTag
export function CostAllocationTag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = (i.status !== undefined ? i.status : "active");
  out.tagKey = (i.tagKey !== undefined ? i.tagKey : "");
  out.type = "";
  return out;
}

// aws:costexplorer/costCategory:CostCategory
export function CostCategory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultValue = (i.defaultValue !== undefined ? i.defaultValue : "");
  out.effectiveEnd = "";
  out.effectiveStart = (i.effectiveStart !== undefined ? i.effectiveStart : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleVersion = (i.ruleVersion !== undefined ? i.ruleVersion : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategoryRule(ctx, depth + 1))]));
  out.splitChargeRules = (i.splitChargeRules !== undefined ? i.splitChargeRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_costexplorer.costexplorer_CostCategorySplitChargeRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

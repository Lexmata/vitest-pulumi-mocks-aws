// GENERATED FILE — do not edit.
// Service: budgets   (21 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_budgets from "./budgets.js";

// aws:budgets/BudgetActionActionThreshold:BudgetActionActionThreshold
export function budgets_BudgetActionActionThreshold(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionThresholdType = "";
  out.actionThresholdValue = 0;
  return out;
}

// aws:budgets/BudgetActionDefinition:BudgetActionDefinition
export function budgets_BudgetActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iamActionDefinition = (depth > 4 ? {} : T_budgets.budgets_BudgetActionDefinitionIamActionDefinition(ctx, depth + 1));
  out.scpActionDefinition = (depth > 4 ? {} : T_budgets.budgets_BudgetActionDefinitionScpActionDefinition(ctx, depth + 1));
  out.ssmActionDefinition = (depth > 4 ? {} : T_budgets.budgets_BudgetActionDefinitionSsmActionDefinition(ctx, depth + 1));
  return out;
}

// aws:budgets/BudgetActionDefinitionIamActionDefinition:BudgetActionDefinitionIamActionDefinition
export function budgets_BudgetActionDefinitionIamActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (depth > 4 ? [] : [""]);
  out.policyArn = h.arn(ctx);
  out.roles = (depth > 4 ? [] : [""]);
  out.users = (depth > 4 ? [] : [""]);
  return out;
}

// aws:budgets/BudgetActionDefinitionScpActionDefinition:BudgetActionDefinitionScpActionDefinition
export function budgets_BudgetActionDefinitionScpActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyId = h.id(ctx, "policyId");
  out.targetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:budgets/BudgetActionDefinitionSsmActionDefinition:BudgetActionDefinitionSsmActionDefinition
export function budgets_BudgetActionDefinitionSsmActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionSubType = "";
  out.instanceIds = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  return out;
}

// aws:budgets/BudgetActionSubscriber:BudgetActionSubscriber
export function budgets_BudgetActionSubscriber(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.subscriptionType = "";
  return out;
}

// aws:budgets/BudgetAutoAdjustData:BudgetAutoAdjustData
export function budgets_BudgetAutoAdjustData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoAdjustType = "";
  out.historicalOptions = (depth > 4 ? {} : T_budgets.budgets_BudgetAutoAdjustDataHistoricalOptions(ctx, depth + 1));
  out.lastAutoAdjustTime = "";
  return out;
}

// aws:budgets/BudgetAutoAdjustDataHistoricalOptions:BudgetAutoAdjustDataHistoricalOptions
export function budgets_BudgetAutoAdjustDataHistoricalOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.budgetAdjustmentPeriod = 0;
  out.lookbackAvailablePeriods = 0;
  return out;
}

// aws:budgets/BudgetCostFilter:BudgetCostFilter
export function budgets_BudgetCostFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:budgets/BudgetCostTypes:BudgetCostTypes
export function budgets_BudgetCostTypes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeCredit = false;
  out.includeDiscount = false;
  out.includeOtherSubscription = false;
  out.includeRecurring = false;
  out.includeRefund = false;
  out.includeSubscription = false;
  out.includeSupport = false;
  out.includeTax = false;
  out.includeUpfront = false;
  out.useAmortized = false;
  out.useBlended = false;
  return out;
}

// aws:budgets/BudgetNotification:BudgetNotification
export function budgets_BudgetNotification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.notificationType = "";
  out.subscriberEmailAddresses = (depth > 4 ? [] : [""]);
  out.subscriberSnsTopicArns = (depth > 4 ? [] : [""]);
  out.threshold = 0;
  out.thresholdType = "";
  return out;
}

// aws:budgets/BudgetPlannedLimit:BudgetPlannedLimit
export function budgets_BudgetPlannedLimit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = "";
  out.startTime = "";
  out.unit = "";
  return out;
}

// aws:budgets/getBudgetAutoAdjustData:getBudgetAutoAdjustData
export function budgets_getBudgetAutoAdjustData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoAdjustType = "";
  out.historicalOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetAutoAdjustDataHistoricalOption(ctx, depth + 1))]);
  out.lastAutoAdjustTime = "";
  return out;
}

// aws:budgets/getBudgetAutoAdjustDataHistoricalOption:getBudgetAutoAdjustDataHistoricalOption
export function budgets_getBudgetAutoAdjustDataHistoricalOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.budgetAdjustmentPeriod = 0;
  out.lookbackAvailablePeriods = 0;
  return out;
}

// aws:budgets/getBudgetBudgetLimit:getBudgetBudgetLimit
export function budgets_getBudgetBudgetLimit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = "";
  out.unit = "";
  return out;
}

// aws:budgets/getBudgetCalculatedSpend:getBudgetCalculatedSpend
export function budgets_getBudgetCalculatedSpend(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actualSpends = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetCalculatedSpendActualSpend(ctx, depth + 1))]);
  return out;
}

// aws:budgets/getBudgetCalculatedSpendActualSpend:getBudgetCalculatedSpendActualSpend
export function budgets_getBudgetCalculatedSpendActualSpend(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = "";
  out.unit = "";
  return out;
}

// aws:budgets/getBudgetCostFilter:getBudgetCostFilter
export function budgets_getBudgetCostFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:budgets/getBudgetCostType:getBudgetCostType
export function budgets_getBudgetCostType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeCredit = false;
  out.includeDiscount = false;
  out.includeOtherSubscription = false;
  out.includeRecurring = false;
  out.includeRefund = false;
  out.includeSubscription = false;
  out.includeSupport = false;
  out.includeTax = false;
  out.includeUpfront = false;
  out.useAmortized = false;
  out.useBlended = false;
  return out;
}

// aws:budgets/getBudgetNotification:getBudgetNotification
export function budgets_getBudgetNotification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.notificationType = "";
  out.subscriberEmailAddresses = (depth > 4 ? [] : [""]);
  out.subscriberSnsTopicArns = (depth > 4 ? [] : [""]);
  out.threshold = 0;
  out.thresholdType = "";
  return out;
}

// aws:budgets/getBudgetPlannedLimit:getBudgetPlannedLimit
export function budgets_getBudgetPlannedLimit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = "";
  out.startTime = "";
  out.unit = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: budgets   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_budgets from "../types/budgets.js";

// aws:budgets/getBudget:getBudget
export function getBudget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.autoAdjustDatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetAutoAdjustData(ctx, depth + 1))]);
  out.budgetExceeded = false;
  out.budgetLimits = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetBudgetLimit(ctx, depth + 1))]);
  out.budgetType = "";
  out.calculatedSpends = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetCalculatedSpend(ctx, depth + 1))]);
  out.costFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetCostFilter(ctx, depth + 1))]);
  out.costTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetCostType(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.notifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetNotification(ctx, depth + 1))]);
  out.plannedLimits = (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_getBudgetPlannedLimit(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.timePeriodEnd = "";
  out.timePeriodStart = "";
  out.timeUnit = "";
  return out;
}

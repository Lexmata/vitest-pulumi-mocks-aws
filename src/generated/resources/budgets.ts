// GENERATED FILE — do not edit.
// Service: budgets   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_budgets from "../types/budgets.js";

// aws:budgets/budget:Budget
export function Budget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.autoAdjustData = (i.autoAdjustData !== undefined ? i.autoAdjustData : (depth > 4 ? {} : T_budgets.budgets_BudgetAutoAdjustData(ctx, depth + 1)));
  out.budgetType = (i.budgetType !== undefined ? i.budgetType : "");
  out.costFilters = (i.costFilters !== undefined ? i.costFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_BudgetCostFilter(ctx, depth + 1))]));
  out.costTypes = (i.costTypes !== undefined ? i.costTypes : (depth > 4 ? {} : T_budgets.budgets_BudgetCostTypes(ctx, depth + 1)));
  out.limitAmount = (i.limitAmount !== undefined ? i.limitAmount : "");
  out.limitUnit = (i.limitUnit !== undefined ? i.limitUnit : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.notifications = (i.notifications !== undefined ? i.notifications : (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_BudgetNotification(ctx, depth + 1))]));
  out.plannedLimits = (i.plannedLimits !== undefined ? i.plannedLimits : (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_BudgetPlannedLimit(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timePeriodEnd = (i.timePeriodEnd !== undefined ? i.timePeriodEnd : "");
  out.timePeriodStart = (i.timePeriodStart !== undefined ? i.timePeriodStart : "");
  out.timeUnit = (i.timeUnit !== undefined ? i.timeUnit : "");
  return out;
}

// aws:budgets/budgetAction:BudgetAction
export function BudgetAction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.actionId = h.id(ctx, "actionId");
  out.actionThreshold = (i.actionThreshold !== undefined ? i.actionThreshold : (depth > 4 ? {} : T_budgets.budgets_BudgetActionActionThreshold(ctx, depth + 1)));
  out.actionType = (i.actionType !== undefined ? i.actionType : "");
  out.approvalModel = (i.approvalModel !== undefined ? i.approvalModel : "");
  out.arn = h.arn(ctx);
  out.budgetName = (i.budgetName !== undefined ? i.budgetName : "");
  out.definition = (i.definition !== undefined ? i.definition : (depth > 4 ? {} : T_budgets.budgets_BudgetActionDefinition(ctx, depth + 1)));
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.notificationType = (i.notificationType !== undefined ? i.notificationType : "");
  out.status = "active";
  out.subscribers = (i.subscribers !== undefined ? i.subscribers : (depth > 4 ? [] : [(depth > 4 ? {} : T_budgets.budgets_BudgetActionSubscriber(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// GENERATED FILE — do not edit.
// Service: cloudformation   (11 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudformation from "./cloudformation.js";

// aws:cloudformation/CloudFormationTypeLoggingConfig:CloudFormationTypeLoggingConfig
export function cloudformation_CloudFormationTypeLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = "";
  out.logRoleArn = h.arn(ctx);
  return out;
}

// aws:cloudformation/StackInstancesDeploymentTargets:StackInstancesDeploymentTargets
export function cloudformation_StackInstancesDeploymentTargets(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountFilterType = "";
  out.accounts = (depth > 4 ? [] : [""]);
  out.accountsUrl = h.endpoint(ctx, "accountsUrl");
  out.organizationalUnitIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudformation/StackInstancesOperationPreferences:StackInstancesOperationPreferences
export function cloudformation_StackInstancesOperationPreferences(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.concurrencyMode = "";
  out.failureToleranceCount = 1;
  out.failureTolerancePercentage = 0;
  out.maxConcurrentCount = 1;
  out.maxConcurrentPercentage = 0;
  out.regionConcurrencyType = "";
  out.regionOrders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudformation/StackInstancesStackInstanceSummary:StackInstancesStackInstanceSummary
export function cloudformation_StackInstancesStackInstanceSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.detailedStatus = "";
  out.driftStatus = "";
  out.organizationalUnitId = h.id(ctx, "organizationalUnitId");
  out.region = ctx.region;
  out.stackId = h.id(ctx, "stackId");
  out.stackSetId = h.id(ctx, "stackSetId");
  out.status = "active";
  out.statusReason = "";
  return out;
}

// aws:cloudformation/StackSetAutoDeployment:StackSetAutoDeployment
export function cloudformation_StackSetAutoDeployment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.retainStacksOnAccountRemoval = false;
  return out;
}

// aws:cloudformation/StackSetInstanceDeploymentTargets:StackSetInstanceDeploymentTargets
export function cloudformation_StackSetInstanceDeploymentTargets(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountFilterType = "";
  out.accounts = (depth > 4 ? [] : [""]);
  out.accountsUrl = h.endpoint(ctx, "accountsUrl");
  out.organizationalUnitIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudformation/StackSetInstanceOperationPreferences:StackSetInstanceOperationPreferences
export function cloudformation_StackSetInstanceOperationPreferences(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.concurrencyMode = "";
  out.failureToleranceCount = 1;
  out.failureTolerancePercentage = 0;
  out.maxConcurrentCount = 1;
  out.maxConcurrentPercentage = 0;
  out.regionConcurrencyType = "";
  out.regionOrders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudformation/StackSetInstanceStackInstanceSummary:StackSetInstanceStackInstanceSummary
export function cloudformation_StackSetInstanceStackInstanceSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.organizationalUnitId = h.id(ctx, "organizationalUnitId");
  out.stackId = h.id(ctx, "stackId");
  return out;
}

// aws:cloudformation/StackSetManagedExecution:StackSetManagedExecution
export function cloudformation_StackSetManagedExecution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  return out;
}

// aws:cloudformation/StackSetOperationPreferences:StackSetOperationPreferences
export function cloudformation_StackSetOperationPreferences(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureToleranceCount = 1;
  out.failureTolerancePercentage = 0;
  out.maxConcurrentCount = 1;
  out.maxConcurrentPercentage = 0;
  out.regionConcurrencyType = "";
  out.regionOrders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudformation/getCloudFormationTypeLoggingConfig:getCloudFormationTypeLoggingConfig
export function cloudformation_getCloudFormationTypeLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = "";
  out.logRoleArn = h.arn(ctx);
  return out;
}

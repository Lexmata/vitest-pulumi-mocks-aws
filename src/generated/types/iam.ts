// GENERATED FILE — do not edit.
// Service: iam   (11 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_iam from "./iam.js";

// aws:iam/RoleInlinePolicy:RoleInlinePolicy
export function iam_RoleInlinePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.policy = "";
  return out;
}

// aws:iam/getAccessKeysAccessKey:getAccessKeysAccessKey
export function iam_getAccessKeysAccessKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKeyId = h.id(ctx, "accessKeyId");
  out.createDate = "";
  out.status = "active";
  return out;
}

// aws:iam/getGroupUser:getGroupUser
export function iam_getGroupUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.path = "";
  out.userId = h.id(ctx, "userId");
  out.userName = "";
  return out;
}

// aws:iam/getPolicyDocumentStatement:getPolicyDocumentStatement
export function iam_getPolicyDocumentStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.conditions = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPolicyDocumentStatementCondition(ctx, depth + 1))]);
  out.effect = "";
  out.notActions = (depth > 4 ? [] : [""]);
  out.notPrincipals = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPolicyDocumentStatementNotPrincipal(ctx, depth + 1))]);
  out.notResources = (depth > 4 ? [] : [""]);
  out.principals = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPolicyDocumentStatementPrincipal(ctx, depth + 1))]);
  out.resources = (depth > 4 ? [] : [""]);
  out.sid = h.id(ctx, "sid");
  return out;
}

// aws:iam/getPolicyDocumentStatementCondition:getPolicyDocumentStatementCondition
export function iam_getPolicyDocumentStatementCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.test = "";
  out.values = (depth > 4 ? [] : [""]);
  out.variable = "";
  return out;
}

// aws:iam/getPolicyDocumentStatementNotPrincipal:getPolicyDocumentStatementNotPrincipal
export function iam_getPolicyDocumentStatementNotPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifiers = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:iam/getPolicyDocumentStatementPrincipal:getPolicyDocumentStatementPrincipal
export function iam_getPolicyDocumentStatementPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifiers = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:iam/getPrincipalPolicySimulationContext:getPrincipalPolicySimulationContext
export function iam_getPrincipalPolicySimulationContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:iam/getPrincipalPolicySimulationResult:getPrincipalPolicySimulationResult
export function iam_getPrincipalPolicySimulationResult(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionName = "";
  out.allowed = true;
  out.decision = "";
  out.decisionDetails = {};
  out.matchedStatements = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPrincipalPolicySimulationResultMatchedStatement(ctx, depth + 1))]);
  out.missingContextKeys = (depth > 4 ? [] : [""]);
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:iam/getPrincipalPolicySimulationResultMatchedStatement:getPrincipalPolicySimulationResultMatchedStatement
export function iam_getPrincipalPolicySimulationResultMatchedStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourcePolicyId = h.id(ctx, "sourcePolicyId");
  out.sourcePolicyType = "";
  return out;
}

// aws:iam/getRoleRoleLastUsed:getRoleRoleLastUsed
export function iam_getRoleRoleLastUsed(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lastUsedDate = "";
  out.region = ctx.region;
  return out;
}

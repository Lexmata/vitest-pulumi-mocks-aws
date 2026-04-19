// GENERATED FILE — do not edit.
// Service: cloudwatch   (8 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudwatch from "../types/cloudwatch.js";

// aws:cloudwatch/getContributorManagedInsightRules:getContributorManagedInsightRules
export function getContributorManagedInsightRules(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.managedRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getContributorManagedInsightRulesManagedRule(ctx, depth + 1))]);
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:cloudwatch/getEventBus:getEventBus
export function getEventBus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deadLetterConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getEventBusDeadLetterConfig(ctx, depth + 1))]);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyIdentifier = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cloudwatch/getEventBuses:getEventBuses
export function getEventBuses(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventBuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getEventBusesEventBus(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  return out;
}

// aws:cloudwatch/getEventConnection:getEventConnection
export function getEventConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authorizationType = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyIdentifier = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:cloudwatch/getEventSource:getEventSource
export function getEventSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdBy = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.state = "active";
  return out;
}

// aws:cloudwatch/getLogDataProtectionPolicyDocument:getLogDataProtectionPolicyDocument
export function getLogDataProtectionPolicyDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.id = h.id(ctx, "id");
  out.json = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.statements = (i.statements !== undefined ? i.statements : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudwatch.cloudwatch_getLogDataProtectionPolicyDocumentStatement(ctx, depth + 1))]));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:cloudwatch/getLogGroup:getLogGroup
export function getLogGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = 0;
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.logGroupClass = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.retentionInDays = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:cloudwatch/getLogGroups:getLogGroups
export function getLogGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.logGroupNamePrefix = (i.logGroupNamePrefix !== undefined ? i.logGroupNamePrefix : "");
  out.logGroupNames = (depth > 4 ? [] : [""]);
  return out;
}

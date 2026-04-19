// GENERATED FILE — do not edit.
// Service: sfn   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sfn from "./sfn.js";

// aws:sfn/ActivityEncryptionConfiguration:ActivityEncryptionConfiguration
export function sfn_ActivityEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsDataKeyReusePeriodSeconds = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.type = "";
  return out;
}

// aws:sfn/AliasRoutingConfiguration:AliasRoutingConfiguration
export function sfn_AliasRoutingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stateMachineVersionArn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:sfn/StateMachineEncryptionConfiguration:StateMachineEncryptionConfiguration
export function sfn_StateMachineEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsDataKeyReusePeriodSeconds = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.type = "";
  return out;
}

// aws:sfn/StateMachineLoggingConfiguration:StateMachineLoggingConfiguration
export function sfn_StateMachineLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeExecutionData = false;
  out.level = "";
  out.logDestination = "";
  return out;
}

// aws:sfn/StateMachineTracingConfiguration:StateMachineTracingConfiguration
export function sfn_StateMachineTracingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:sfn/getAliasRoutingConfiguration:getAliasRoutingConfiguration
export function sfn_getAliasRoutingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stateMachineVersionArn = h.arn(ctx);
  out.weight = 0;
  return out;
}

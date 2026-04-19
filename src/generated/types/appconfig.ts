// GENERATED FILE — do not edit.
// Service: appconfig   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appconfig from "./appconfig.js";

// aws:appconfig/ConfigurationProfileValidator:ConfigurationProfileValidator
export function appconfig_ConfigurationProfileValidator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.type = "";
  return out;
}

// aws:appconfig/EnvironmentMonitor:EnvironmentMonitor
export function appconfig_EnvironmentMonitor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmArn = h.arn(ctx);
  out.alarmRoleArn = h.arn(ctx);
  return out;
}

// aws:appconfig/EventIntegrationEventFilter:EventIntegrationEventFilter
export function appconfig_EventIntegrationEventFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  return out;
}

// aws:appconfig/ExtensionActionPoint:ExtensionActionPoint
export function appconfig_ExtensionActionPoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_ExtensionActionPointAction(ctx, depth + 1))]);
  out.point = "";
  return out;
}

// aws:appconfig/ExtensionActionPointAction:ExtensionActionPointAction
export function appconfig_ExtensionActionPointAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:appconfig/ExtensionParameter:ExtensionParameter
export function appconfig_ExtensionParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.required = false;
  return out;
}

// aws:appconfig/getConfigurationProfileValidator:getConfigurationProfileValidator
export function appconfig_getConfigurationProfileValidator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.type = "";
  return out;
}

// aws:appconfig/getEnvironmentMonitor:getEnvironmentMonitor
export function appconfig_getEnvironmentMonitor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmArn = h.arn(ctx);
  out.alarmRoleArn = h.arn(ctx);
  return out;
}

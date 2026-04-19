// GENERATED FILE — do not edit.
// Service: appintegrations   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appintegrations from "./appintegrations.js";

// aws:appintegrations/DataIntegrationScheduleConfig:DataIntegrationScheduleConfig
export function appintegrations_DataIntegrationScheduleConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firstExecutionFrom = "";
  out.object = "";
  out.scheduleExpression = "";
  return out;
}

// aws:appintegrations/getEventIntegrationEventFilter:getEventIntegrationEventFilter
export function appintegrations_getEventIntegrationEventFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  return out;
}

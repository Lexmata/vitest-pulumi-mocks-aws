// GENERATED FILE — do not edit.
// Service: cloudtrail   (7 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudtrail from "./cloudtrail.js";

// aws:cloudtrail/EventDataStoreAdvancedEventSelector:EventDataStoreAdvancedEventSelector
export function cloudtrail_EventDataStoreAdvancedEventSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldSelectors = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:cloudtrail/EventDataStoreAdvancedEventSelectorFieldSelector:EventDataStoreAdvancedEventSelectorFieldSelector
export function cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endsWiths = (depth > 4 ? [] : [""]);
  out.equals = (depth > 4 ? [] : [""]);
  out.field = "";
  out.notEndsWiths = (depth > 4 ? [] : [""]);
  out.notEquals = (depth > 4 ? [] : [""]);
  out.notStartsWiths = (depth > 4 ? [] : [""]);
  out.startsWiths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudtrail/TrailAdvancedEventSelector:TrailAdvancedEventSelector
export function cloudtrail_TrailAdvancedEventSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldSelectors = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_TrailAdvancedEventSelectorFieldSelector(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:cloudtrail/TrailAdvancedEventSelectorFieldSelector:TrailAdvancedEventSelectorFieldSelector
export function cloudtrail_TrailAdvancedEventSelectorFieldSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endsWiths = (depth > 4 ? [] : [""]);
  out.equals = (depth > 4 ? [] : [""]);
  out.field = "";
  out.notEndsWiths = (depth > 4 ? [] : [""]);
  out.notEquals = (depth > 4 ? [] : [""]);
  out.notStartsWiths = (depth > 4 ? [] : [""]);
  out.startsWiths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudtrail/TrailEventSelector:TrailEventSelector
export function cloudtrail_TrailEventSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataResources = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_TrailEventSelectorDataResource(ctx, depth + 1))]);
  out.excludeManagementEventSources = (depth > 4 ? [] : [""]);
  out.includeManagementEvents = false;
  out.readWriteType = "";
  return out;
}

// aws:cloudtrail/TrailEventSelectorDataResource:TrailEventSelectorDataResource
export function cloudtrail_TrailEventSelectorDataResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudtrail/TrailInsightSelector:TrailInsightSelector
export function cloudtrail_TrailInsightSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightType = "";
  return out;
}

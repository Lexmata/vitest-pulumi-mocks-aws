// GENERATED FILE — do not edit.
// Service: rum   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rum from "../types/rum.js";

// aws:rum/appMonitor:AppMonitor
export function AppMonitor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appMonitorConfiguration = (i.appMonitorConfiguration !== undefined ? i.appMonitorConfiguration : (depth > 4 ? {} : T_rum.rum_AppMonitorAppMonitorConfiguration(ctx, depth + 1)));
  out.appMonitorId = h.id(ctx, "appMonitorId");
  out.arn = h.arn(ctx);
  out.customEvents = (i.customEvents !== undefined ? i.customEvents : (depth > 4 ? {} : T_rum.rum_AppMonitorCustomEvents(ctx, depth + 1)));
  out.cwLogEnabled = (i.cwLogEnabled !== undefined ? i.cwLogEnabled : false);
  out.cwLogGroup = "";
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainLists = (i.domainLists !== undefined ? i.domainLists : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rum/metricsDestination:MetricsDestination
export function MetricsDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appMonitorName = (i.appMonitorName !== undefined ? i.appMonitorName : "");
  out.destination = (i.destination !== undefined ? i.destination : "");
  out.destinationArn = (i.destinationArn !== undefined ? i.destinationArn : h.arn(ctx));
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  return out;
}

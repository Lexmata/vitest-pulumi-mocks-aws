// GENERATED FILE — do not edit.
// Service: rum   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rum from "./rum.js";

// aws:rum/AppMonitorAppMonitorConfiguration:AppMonitorAppMonitorConfiguration
export function rum_AppMonitorAppMonitorConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowCookies = true;
  out.enableXray = true;
  out.excludedPages = (depth > 4 ? [] : [""]);
  out.favoritePages = (depth > 4 ? [] : [""]);
  out.guestRoleArn = h.arn(ctx);
  out.identityPoolId = h.id(ctx, "identityPoolId");
  out.includedPages = (depth > 4 ? [] : [""]);
  out.sessionSampleRate = 0;
  out.telemetries = (depth > 4 ? [] : [""]);
  return out;
}

// aws:rum/AppMonitorCustomEvents:AppMonitorCustomEvents
export function rum_AppMonitorCustomEvents(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

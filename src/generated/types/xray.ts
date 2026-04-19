// GENERATED FILE — do not edit.
// Service: xray   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_xray from "./xray.js";

// aws:xray/GroupInsightsConfiguration:GroupInsightsConfiguration
export function xray_GroupInsightsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightsEnabled = false;
  out.notificationsEnabled = false;
  return out;
}

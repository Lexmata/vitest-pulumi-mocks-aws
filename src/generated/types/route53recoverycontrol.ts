// GENERATED FILE — do not edit.
// Service: route53recoverycontrol   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53recoverycontrol from "./route53recoverycontrol.js";

// aws:route53recoverycontrol/ClusterClusterEndpoint:ClusterClusterEndpoint
export function route53recoverycontrol_ClusterClusterEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.region = ctx.region;
  return out;
}

// aws:route53recoverycontrol/SafetyRuleRuleConfig:SafetyRuleRuleConfig
export function route53recoverycontrol_SafetyRuleRuleConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inverted = false;
  out.threshold = 0;
  out.type = "";
  return out;
}

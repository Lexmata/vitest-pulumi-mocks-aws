// GENERATED FILE — do not edit.
// Service: worklink   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_worklink from "./worklink.js";

// aws:worklink/FleetIdentityProvider:FleetIdentityProvider
export function worklink_FleetIdentityProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.samlMetadata = "";
  out.type = "";
  return out;
}

// aws:worklink/FleetNetwork:FleetNetwork
export function worklink_FleetNetwork(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

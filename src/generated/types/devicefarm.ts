// GENERATED FILE — do not edit.
// Service: devicefarm   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_devicefarm from "./devicefarm.js";

// aws:devicefarm/DevicePoolRule:DevicePoolRule
export function devicefarm_DevicePoolRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attribute = "";
  out.operator = "";
  out.value = "";
  return out;
}

// aws:devicefarm/TestGridProjectVpcConfig:TestGridProjectVpcConfig
export function devicefarm_TestGridProjectVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

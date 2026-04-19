// GENERATED FILE — do not edit.
// Service: controltower   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_controltower from "./controltower.js";

// aws:controltower/ControlTowerControlParameter:ControlTowerControlParameter
export function controltower_ControlTowerControlParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:controltower/LandingZoneDriftStatus:LandingZoneDriftStatus
export function controltower_LandingZoneDriftStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

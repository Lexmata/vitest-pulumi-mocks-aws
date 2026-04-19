// GENERATED FILE — do not edit.
// Service: resiliencehub   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resiliencehub from "./resiliencehub.js";

// aws:resiliencehub/ResiliencyPolicyPolicy:ResiliencyPolicyPolicy
export function resiliencehub_ResiliencyPolicyPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.az = (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyPolicyAz(ctx, depth + 1));
  out.hardware = (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyPolicyHardware(ctx, depth + 1));
  out.region = (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyPolicyRegion(ctx, depth + 1));
  out.software = (depth > 4 ? {} : T_resiliencehub.resiliencehub_ResiliencyPolicyPolicySoftware(ctx, depth + 1));
  return out;
}

// aws:resiliencehub/ResiliencyPolicyPolicyAz:ResiliencyPolicyPolicyAz
export function resiliencehub_ResiliencyPolicyPolicyAz(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rpo = "";
  out.rto = "";
  return out;
}

// aws:resiliencehub/ResiliencyPolicyPolicyHardware:ResiliencyPolicyPolicyHardware
export function resiliencehub_ResiliencyPolicyPolicyHardware(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rpo = "";
  out.rto = "";
  return out;
}

// aws:resiliencehub/ResiliencyPolicyPolicyRegion:ResiliencyPolicyPolicyRegion
export function resiliencehub_ResiliencyPolicyPolicyRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rpo = "";
  out.rto = "";
  return out;
}

// aws:resiliencehub/ResiliencyPolicyPolicySoftware:ResiliencyPolicyPolicySoftware
export function resiliencehub_ResiliencyPolicyPolicySoftware(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rpo = "";
  out.rto = "";
  return out;
}

// aws:resiliencehub/ResiliencyPolicyTimeouts:ResiliencyPolicyTimeouts
export function resiliencehub_ResiliencyPolicyTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

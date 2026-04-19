// GENERATED FILE — do not edit.
// Service: codeconnections   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeconnections from "./codeconnections.js";

// aws:codeconnections/ConnectionTimeouts:ConnectionTimeouts
export function codeconnections_ConnectionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:codeconnections/HostTimeouts:HostTimeouts
export function codeconnections_HostTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:codeconnections/HostVpcConfiguration:HostVpcConfiguration
export function codeconnections_HostVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tlsCertificate = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// GENERATED FILE — do not edit.
// Service: codestarconnections   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codestarconnections from "./codestarconnections.js";

// aws:codestarconnections/HostVpcConfiguration:HostVpcConfiguration
export function codestarconnections_HostVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tlsCertificate = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

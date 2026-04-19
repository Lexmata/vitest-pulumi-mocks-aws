// GENERATED FILE — do not edit.
// Service: s3outposts   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3outposts from "../types/s3outposts.js";

// aws:s3outposts/endpoint:Endpoint
export function Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessType = (i.accessType !== undefined ? i.accessType : "");
  out.arn = h.arn(ctx);
  out.cidrBlock = "10.0.0.0/16";
  out.creationTime = "";
  out.customerOwnedIpv4Pool = (i.customerOwnedIpv4Pool !== undefined ? i.customerOwnedIpv4Pool : "");
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3outposts.s3outposts_EndpointNetworkInterface(ctx, depth + 1))]);
  out.outpostId = (i.outpostId !== undefined ? i.outpostId : h.id(ctx, "outpostId"));
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}

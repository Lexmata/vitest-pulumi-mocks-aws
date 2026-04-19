// GENERATED FILE — do not edit.
// Service: globalaccelerator   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_globalaccelerator from "../types/globalaccelerator.js";

// aws:globalaccelerator/getAccelerator:getAccelerator
export function getAccelerator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_getAcceleratorAttribute(ctx, depth + 1))]);
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dualStackDnsName = "";
  out.enabled = true;
  out.hostedZoneId = "Z0000000000000000000";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipAddressType = "";
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_getAcceleratorIpSet(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = {};
  return out;
}

// aws:globalaccelerator/getCustomRoutingAccelerator:getCustomRoutingAccelerator
export function getCustomRoutingAccelerator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_getCustomRoutingAcceleratorAttribute(ctx, depth + 1))]);
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.enabled = true;
  out.hostedZoneId = "Z0000000000000000000";
  out.id = h.id(ctx, "id");
  out.ipAddressType = "";
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_getCustomRoutingAcceleratorIpSet(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

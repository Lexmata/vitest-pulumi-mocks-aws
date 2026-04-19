// GENERATED FILE — do not edit.
// Service: vpclattice   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpclattice from "../types/vpclattice.js";

// aws:vpclattice/getAuthPolicy:getAuthPolicy
export function getAuthPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceIdentifier = (i.resourceIdentifier !== undefined ? i.resourceIdentifier : "");
  out.state = (i.state !== undefined ? i.state : "active");
  return out;
}

// aws:vpclattice/getListener:getListener
export function getListener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.defaultActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_getListenerDefaultAction(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.lastUpdatedAt = "";
  out.listenerId = h.id(ctx, "listenerId");
  out.listenerIdentifier = (i.listenerIdentifier !== undefined ? i.listenerIdentifier : "");
  out.name = ctx.name;
  out.port = 443;
  out.protocol = "";
  out.serviceArn = h.arn(ctx);
  out.serviceId = h.id(ctx, "serviceId");
  out.serviceIdentifier = (i.serviceIdentifier !== undefined ? i.serviceIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:vpclattice/getResourcePolicy:getResourcePolicy
export function getResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.policy = "";
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:vpclattice/getService:getService
export function getService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authType = "";
  out.certificateArn = h.arn(ctx);
  out.customDomainName = h.endpoint(ctx, "customDomainName");
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_getServiceDnsEntry(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serviceIdentifier = (i.serviceIdentifier !== undefined ? i.serviceIdentifier : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:vpclattice/getServiceNetwork:getServiceNetwork
export function getServiceNetwork(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authType = "";
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.lastUpdatedAt = "";
  out.name = ctx.name;
  out.numberOfAssociatedServices = 0;
  out.numberOfAssociatedVpcs = 0;
  out.serviceNetworkIdentifier = (i.serviceNetworkIdentifier !== undefined ? i.serviceNetworkIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

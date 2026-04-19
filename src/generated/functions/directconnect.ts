// GENERATED FILE — do not edit.
// Service: directconnect   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_directconnect from "../types/directconnect.js";

// aws:directconnect/getConnection:getConnection
export function getConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bandwidth = "";
  out.id = h.id(ctx, "id");
  out.location = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.partnerName = "";
  out.providerName = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vlanId = 0;
  return out;
}

// aws:directconnect/getGateway:getGateway
export function getGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  return out;
}

// aws:directconnect/getLocation:getLocation
export function getLocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availableMacsecPortSpeeds = (depth > 4 ? [] : [""]);
  out.availablePortSpeeds = (depth > 4 ? [] : [""]);
  out.availableProviders = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.locationCode = (i.locationCode !== undefined ? i.locationCode : "");
  out.locationName = "";
  return out;
}

// aws:directconnect/getLocations:getLocations
export function getLocations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.locationCodes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:directconnect/getRouterConfiguration:getRouterConfiguration
export function getRouterConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerRouterConfig = "";
  out.id = h.id(ctx, "id");
  out.routerTypeIdentifier = (i.routerTypeIdentifier !== undefined ? i.routerTypeIdentifier : "");
  out.routers = (depth > 4 ? [] : [(depth > 4 ? {} : T_directconnect.directconnect_getRouterConfigurationRouter(ctx, depth + 1))]);
  out.virtualInterfaceId = (i.virtualInterfaceId !== undefined ? i.virtualInterfaceId : h.id(ctx, "virtualInterfaceId"));
  out.virtualInterfaceName = "";
  return out;
}

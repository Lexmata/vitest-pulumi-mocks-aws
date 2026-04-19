// GENERATED FILE — do not edit.
// Service: appmesh   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appmesh from "../types/appmesh.js";

// aws:appmesh/getGatewayRoute:getGatewayRoute
export function getGatewayRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.virtualGatewayName = (i.virtualGatewayName !== undefined ? i.virtualGatewayName : "");
  return out;
}

// aws:appmesh/getMesh:getMesh
export function getMesh(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getMeshSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:appmesh/getRoute:getRoute
export function getRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.virtualRouterName = (i.virtualRouterName !== undefined ? i.virtualRouterName : "");
  return out;
}

// aws:appmesh/getVirtualGateway:getVirtualGateway
export function getVirtualGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:appmesh/getVirtualNode:getVirtualNode
export function getVirtualNode(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:appmesh/getVirtualRouter:getVirtualRouter
export function getVirtualRouter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualRouterSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:appmesh/getVirtualService:getVirtualService
export function getVirtualService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.specs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualServiceSpec(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

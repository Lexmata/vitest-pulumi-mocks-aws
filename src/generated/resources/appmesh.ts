// GENERATED FILE — do not edit.
// Service: appmesh   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appmesh from "../types/appmesh.js";

// aws:appmesh/gatewayRoute:GatewayRoute
export function GatewayRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.virtualGatewayName = (i.virtualGatewayName !== undefined ? i.virtualGatewayName : "");
  return out;
}

// aws:appmesh/mesh:Mesh
export function Mesh(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshOwner = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_MeshSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appmesh/route:Route
export function Route(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_RouteSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.virtualRouterName = (i.virtualRouterName !== undefined ? i.virtualRouterName : "");
  return out;
}

// aws:appmesh/virtualGateway:VirtualGateway
export function VirtualGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appmesh/virtualNode:VirtualNode
export function VirtualNode(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appmesh/virtualRouter:VirtualRouter
export function VirtualRouter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_VirtualRouterSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appmesh/virtualService:VirtualService
export function VirtualService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.lastUpdatedDate = "";
  out.meshName = (i.meshName !== undefined ? i.meshName : "");
  out.meshOwner = (i.meshOwner !== undefined ? i.meshOwner : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceOwner = "";
  out.spec = (i.spec !== undefined ? i.spec : (depth > 4 ? {} : T_appmesh.appmesh_VirtualServiceSpec(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

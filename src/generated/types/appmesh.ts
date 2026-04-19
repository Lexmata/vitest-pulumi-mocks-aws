// GENERATED FILE — do not edit.
// Service: appmesh   (408 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appmesh from "./appmesh.js";

// aws:appmesh/GatewayRouteSpec:GatewayRouteSpec
export function appmesh_GatewayRouteSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRoute = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecGrpcRoute(ctx, depth + 1));
  out.http2Route = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2Route(ctx, depth + 1));
  out.httpRoute = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRoute(ctx, depth + 1));
  out.priority = 0;
  return out;
}

// aws:appmesh/GatewayRouteSpecGrpcRoute:GatewayRouteSpecGrpcRoute
export function appmesh_GatewayRouteSpecGrpcRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecGrpcRouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecGrpcRouteMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecGrpcRouteAction:GatewayRouteSpecGrpcRouteAction
export function appmesh_GatewayRouteSpecGrpcRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.target = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecGrpcRouteActionTarget(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecGrpcRouteActionTarget:GatewayRouteSpecGrpcRouteActionTarget
export function appmesh_GatewayRouteSpecGrpcRouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualService = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecGrpcRouteActionTargetVirtualService:GatewayRouteSpecGrpcRouteActionTargetVirtualService
export function appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecGrpcRouteMatch:GatewayRouteSpecGrpcRouteMatch
export function appmesh_GatewayRouteSpecGrpcRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.serviceName = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2Route:GatewayRouteSpecHttp2Route
export function appmesh_GatewayRouteSpecHttp2Route(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteAction:GatewayRouteSpecHttp2RouteAction
export function appmesh_GatewayRouteSpecHttp2RouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rewrite = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionRewrite(ctx, depth + 1));
  out.target = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionTarget(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionRewrite:GatewayRouteSpecHttp2RouteActionRewrite
export function appmesh_GatewayRouteSpecHttp2RouteActionRewrite(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostname = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname(ctx, depth + 1));
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionRewritePath(ctx, depth + 1));
  out.prefix = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionRewriteHostname:GatewayRouteSpecHttp2RouteActionRewriteHostname
export function appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTargetHostname = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionRewritePath:GatewayRouteSpecHttp2RouteActionRewritePath
export function appmesh_GatewayRouteSpecHttp2RouteActionRewritePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionRewritePrefix:GatewayRouteSpecHttp2RouteActionRewritePrefix
export function appmesh_GatewayRouteSpecHttp2RouteActionRewritePrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultPrefix = "";
  out.value = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionTarget:GatewayRouteSpecHttp2RouteActionTarget
export function appmesh_GatewayRouteSpecHttp2RouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualService = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteActionTargetVirtualService:GatewayRouteSpecHttp2RouteActionTargetVirtualService
export function appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatch:GatewayRouteSpecHttp2RouteMatch
export function appmesh_GatewayRouteSpecHttp2RouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchHeader(ctx, depth + 1))]);
  out.hostname = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchHostname(ctx, depth + 1));
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchPath(ctx, depth + 1));
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchHeader:GatewayRouteSpecHttp2RouteMatchHeader
export function appmesh_GatewayRouteSpecHttp2RouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchHeaderMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchHeaderMatch:GatewayRouteSpecHttp2RouteMatchHeaderMatch
export function appmesh_GatewayRouteSpecHttp2RouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.range = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchHeaderMatchRange(ctx, depth + 1));
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchHeaderMatchRange:GatewayRouteSpecHttp2RouteMatchHeaderMatchRange
export function appmesh_GatewayRouteSpecHttp2RouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchHostname:GatewayRouteSpecHttp2RouteMatchHostname
export function appmesh_GatewayRouteSpecHttp2RouteMatchHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchPath:GatewayRouteSpecHttp2RouteMatchPath
export function appmesh_GatewayRouteSpecHttp2RouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchQueryParameter:GatewayRouteSpecHttp2RouteMatchQueryParameter
export function appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttp2RouteMatchQueryParameterMatch:GatewayRouteSpecHttp2RouteMatchQueryParameterMatch
export function appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRoute:GatewayRouteSpecHttpRoute
export function appmesh_GatewayRouteSpecHttpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteAction:GatewayRouteSpecHttpRouteAction
export function appmesh_GatewayRouteSpecHttpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rewrite = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionRewrite(ctx, depth + 1));
  out.target = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionTarget(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionRewrite:GatewayRouteSpecHttpRouteActionRewrite
export function appmesh_GatewayRouteSpecHttpRouteActionRewrite(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostname = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname(ctx, depth + 1));
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionRewritePath(ctx, depth + 1));
  out.prefix = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionRewriteHostname:GatewayRouteSpecHttpRouteActionRewriteHostname
export function appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTargetHostname = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionRewritePath:GatewayRouteSpecHttpRouteActionRewritePath
export function appmesh_GatewayRouteSpecHttpRouteActionRewritePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionRewritePrefix:GatewayRouteSpecHttpRouteActionRewritePrefix
export function appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultPrefix = "";
  out.value = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionTarget:GatewayRouteSpecHttpRouteActionTarget
export function appmesh_GatewayRouteSpecHttpRouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualService = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService(ctx, depth + 1));
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteActionTargetVirtualService:GatewayRouteSpecHttpRouteActionTargetVirtualService
export function appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatch:GatewayRouteSpecHttpRouteMatch
export function appmesh_GatewayRouteSpecHttpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchHeader(ctx, depth + 1))]);
  out.hostname = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchHostname(ctx, depth + 1));
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchPath(ctx, depth + 1));
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchHeader:GatewayRouteSpecHttpRouteMatchHeader
export function appmesh_GatewayRouteSpecHttpRouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchHeaderMatch:GatewayRouteSpecHttpRouteMatchHeaderMatch
export function appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.range = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange(ctx, depth + 1));
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchHeaderMatchRange:GatewayRouteSpecHttpRouteMatchHeaderMatchRange
export function appmesh_GatewayRouteSpecHttpRouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchHostname:GatewayRouteSpecHttpRouteMatchHostname
export function appmesh_GatewayRouteSpecHttpRouteMatchHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchPath:GatewayRouteSpecHttpRouteMatchPath
export function appmesh_GatewayRouteSpecHttpRouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchQueryParameter:GatewayRouteSpecHttpRouteMatchQueryParameter
export function appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/GatewayRouteSpecHttpRouteMatchQueryParameterMatch:GatewayRouteSpecHttpRouteMatchQueryParameterMatch
export function appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/MeshSpec:MeshSpec
export function appmesh_MeshSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.egressFilter = (depth > 4 ? {} : T_appmesh.appmesh_MeshSpecEgressFilter(ctx, depth + 1));
  out.serviceDiscovery = (depth > 4 ? {} : T_appmesh.appmesh_MeshSpecServiceDiscovery(ctx, depth + 1));
  return out;
}

// aws:appmesh/MeshSpecEgressFilter:MeshSpecEgressFilter
export function appmesh_MeshSpecEgressFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:appmesh/MeshSpecServiceDiscovery:MeshSpecServiceDiscovery
export function appmesh_MeshSpecServiceDiscovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipPreference = "";
  return out;
}

// aws:appmesh/RouteSpec:RouteSpec
export function appmesh_RouteSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRoute = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRoute(ctx, depth + 1));
  out.http2Route = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2Route(ctx, depth + 1));
  out.httpRoute = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRoute(ctx, depth + 1));
  out.priority = 0;
  out.tcpRoute = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRoute(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecGrpcRoute:RouteSpecGrpcRoute
export function appmesh_RouteSpecGrpcRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteMatch(ctx, depth + 1));
  out.retryPolicy = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteRetryPolicy(ctx, depth + 1));
  out.timeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteTimeout(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteAction:RouteSpecGrpcRouteAction
export function appmesh_RouteSpecGrpcRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteActionWeightedTarget:RouteSpecGrpcRouteActionWeightedTarget
export function appmesh_RouteSpecGrpcRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteMatch:RouteSpecGrpcRouteMatch
export function appmesh_RouteSpecGrpcRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteMatchMetadata(ctx, depth + 1))]);
  out.methodName = "";
  out.port = 443;
  out.prefix = "";
  out.serviceName = "";
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteMatchMetadata:RouteSpecGrpcRouteMatchMetadata
export function appmesh_RouteSpecGrpcRouteMatchMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteMatchMetadataMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteMatchMetadataMatch:RouteSpecGrpcRouteMatchMetadataMatch
export function appmesh_RouteSpecGrpcRouteMatchMetadataMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.range = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange(ctx, depth + 1));
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteMatchMetadataMatchRange:RouteSpecGrpcRouteMatchMetadataMatchRange
export function appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteRetryPolicy:RouteSpecGrpcRouteRetryPolicy
export function appmesh_RouteSpecGrpcRouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRetryEvents = (depth > 4 ? [] : [""]);
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteRetryPolicyPerRetryTimeout(ctx, depth + 1));
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteRetryPolicyPerRetryTimeout:RouteSpecGrpcRouteRetryPolicyPerRetryTimeout
export function appmesh_RouteSpecGrpcRouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteTimeout:RouteSpecGrpcRouteTimeout
export function appmesh_RouteSpecGrpcRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteTimeoutIdle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecGrpcRouteTimeoutPerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteTimeoutIdle:RouteSpecGrpcRouteTimeoutIdle
export function appmesh_RouteSpecGrpcRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecGrpcRouteTimeoutPerRequest:RouteSpecGrpcRouteTimeoutPerRequest
export function appmesh_RouteSpecGrpcRouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttp2Route:RouteSpecHttp2Route
export function appmesh_RouteSpecHttp2Route(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatch(ctx, depth + 1));
  out.retryPolicy = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteRetryPolicy(ctx, depth + 1));
  out.timeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteTimeout(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteAction:RouteSpecHttp2RouteAction
export function appmesh_RouteSpecHttp2RouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteActionWeightedTarget:RouteSpecHttp2RouteActionWeightedTarget
export function appmesh_RouteSpecHttp2RouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatch:RouteSpecHttp2RouteMatch
export function appmesh_RouteSpecHttp2RouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchHeader(ctx, depth + 1))]);
  out.method = "";
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchPath(ctx, depth + 1));
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchQueryParameter(ctx, depth + 1))]);
  out.scheme = "";
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchHeader:RouteSpecHttp2RouteMatchHeader
export function appmesh_RouteSpecHttp2RouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchHeaderMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchHeaderMatch:RouteSpecHttp2RouteMatchHeaderMatch
export function appmesh_RouteSpecHttp2RouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.range = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchHeaderMatchRange(ctx, depth + 1));
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchHeaderMatchRange:RouteSpecHttp2RouteMatchHeaderMatchRange
export function appmesh_RouteSpecHttp2RouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchPath:RouteSpecHttp2RouteMatchPath
export function appmesh_RouteSpecHttp2RouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchQueryParameter:RouteSpecHttp2RouteMatchQueryParameter
export function appmesh_RouteSpecHttp2RouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteMatchQueryParameterMatch:RouteSpecHttp2RouteMatchQueryParameterMatch
export function appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteRetryPolicy:RouteSpecHttp2RouteRetryPolicy
export function appmesh_RouteSpecHttp2RouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout(ctx, depth + 1));
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteRetryPolicyPerRetryTimeout:RouteSpecHttp2RouteRetryPolicyPerRetryTimeout
export function appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteTimeout:RouteSpecHttp2RouteTimeout
export function appmesh_RouteSpecHttp2RouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteTimeoutIdle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttp2RouteTimeoutPerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteTimeoutIdle:RouteSpecHttp2RouteTimeoutIdle
export function appmesh_RouteSpecHttp2RouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttp2RouteTimeoutPerRequest:RouteSpecHttp2RouteTimeoutPerRequest
export function appmesh_RouteSpecHttp2RouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttpRoute:RouteSpecHttpRoute
export function appmesh_RouteSpecHttpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatch(ctx, depth + 1));
  out.retryPolicy = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteRetryPolicy(ctx, depth + 1));
  out.timeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteTimeout(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecHttpRouteAction:RouteSpecHttpRouteAction
export function appmesh_RouteSpecHttpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/RouteSpecHttpRouteActionWeightedTarget:RouteSpecHttpRouteActionWeightedTarget
export function appmesh_RouteSpecHttpRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatch:RouteSpecHttpRouteMatch
export function appmesh_RouteSpecHttpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchHeader(ctx, depth + 1))]);
  out.method = "";
  out.path = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchPath(ctx, depth + 1));
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchQueryParameter(ctx, depth + 1))]);
  out.scheme = "";
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchHeader:RouteSpecHttpRouteMatchHeader
export function appmesh_RouteSpecHttpRouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchHeaderMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchHeaderMatch:RouteSpecHttpRouteMatchHeaderMatch
export function appmesh_RouteSpecHttpRouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.range = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchHeaderMatchRange(ctx, depth + 1));
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchHeaderMatchRange:RouteSpecHttpRouteMatchHeaderMatchRange
export function appmesh_RouteSpecHttpRouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchPath:RouteSpecHttpRouteMatchPath
export function appmesh_RouteSpecHttpRouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchQueryParameter:RouteSpecHttpRouteMatchQueryParameter
export function appmesh_RouteSpecHttpRouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteMatchQueryParameterMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteMatchQueryParameterMatch:RouteSpecHttpRouteMatchQueryParameterMatch
export function appmesh_RouteSpecHttpRouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/RouteSpecHttpRouteRetryPolicy:RouteSpecHttpRouteRetryPolicy
export function appmesh_RouteSpecHttpRouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout(ctx, depth + 1));
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/RouteSpecHttpRouteRetryPolicyPerRetryTimeout:RouteSpecHttpRouteRetryPolicyPerRetryTimeout
export function appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteTimeout:RouteSpecHttpRouteTimeout
export function appmesh_RouteSpecHttpRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteTimeoutIdle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecHttpRouteTimeoutPerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecHttpRouteTimeoutIdle:RouteSpecHttpRouteTimeoutIdle
export function appmesh_RouteSpecHttpRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecHttpRouteTimeoutPerRequest:RouteSpecHttpRouteTimeoutPerRequest
export function appmesh_RouteSpecHttpRouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/RouteSpecTcpRoute:RouteSpecTcpRoute
export function appmesh_RouteSpecTcpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRouteAction(ctx, depth + 1));
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRouteMatch(ctx, depth + 1));
  out.timeout = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRouteTimeout(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecTcpRouteAction:RouteSpecTcpRouteAction
export function appmesh_RouteSpecTcpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/RouteSpecTcpRouteActionWeightedTarget:RouteSpecTcpRouteActionWeightedTarget
export function appmesh_RouteSpecTcpRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/RouteSpecTcpRouteMatch:RouteSpecTcpRouteMatch
export function appmesh_RouteSpecTcpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  return out;
}

// aws:appmesh/RouteSpecTcpRouteTimeout:RouteSpecTcpRouteTimeout
export function appmesh_RouteSpecTcpRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_RouteSpecTcpRouteTimeoutIdle(ctx, depth + 1));
  return out;
}

// aws:appmesh/RouteSpecTcpRouteTimeoutIdle:RouteSpecTcpRouteTimeoutIdle
export function appmesh_RouteSpecTcpRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualGatewaySpec:VirtualGatewaySpec
export function appmesh_VirtualGatewaySpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backendDefaults = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaults(ctx, depth + 1));
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListener(ctx, depth + 1))]);
  out.logging = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecLogging(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaults:VirtualGatewaySpecBackendDefaults
export function appmesh_VirtualGatewaySpecBackendDefaults(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicy = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicy:VirtualGatewaySpecBackendDefaultsClientPolicy
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTls:VirtualGatewaySpecBackendDefaultsClientPolicyTls
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate(ctx, depth + 1));
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validation = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate:VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile:VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds:VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames(ctx, depth + 1));
  out.trust = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acm = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(ctx, depth + 1));
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds:VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecListener:VirtualGatewaySpecListener
export function appmesh_VirtualGatewaySpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPool = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerConnectionPool(ctx, depth + 1));
  out.healthCheck = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerHealthCheck(ctx, depth + 1));
  out.portMapping = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerPortMapping(ctx, depth + 1));
  out.tls = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTls(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerConnectionPool:VirtualGatewaySpecListenerConnectionPool
export function appmesh_VirtualGatewaySpecListenerConnectionPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpc = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc(ctx, depth + 1));
  out.http = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerConnectionPoolHttp(ctx, depth + 1));
  out.http2 = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerConnectionPoolGrpc:VirtualGatewaySpecListenerConnectionPoolGrpc
export function appmesh_VirtualGatewaySpecListenerConnectionPoolGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerConnectionPoolHttp2:VirtualGatewaySpecListenerConnectionPoolHttp2
export function appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerConnectionPoolHttp:VirtualGatewaySpecListenerConnectionPoolHttp
export function appmesh_VirtualGatewaySpecListenerConnectionPoolHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  out.maxPendingRequests = 0;
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerHealthCheck:VirtualGatewaySpecListenerHealthCheck
export function appmesh_VirtualGatewaySpecListenerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.intervalMillis = 0;
  out.path = "";
  out.port = 443;
  out.protocol = "";
  out.timeoutMillis = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerPortMapping:VirtualGatewaySpecListenerPortMapping
export function appmesh_VirtualGatewaySpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTls:VirtualGatewaySpecListenerTls
export function appmesh_VirtualGatewaySpecListenerTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsCertificate(ctx, depth + 1));
  out.mode = "";
  out.validation = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidation(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsCertificate:VirtualGatewaySpecListenerTlsCertificate
export function appmesh_VirtualGatewaySpecListenerTlsCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acm = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsCertificateAcm(ctx, depth + 1));
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsCertificateFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsCertificateSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsCertificateAcm:VirtualGatewaySpecListenerTlsCertificateAcm
export function appmesh_VirtualGatewaySpecListenerTlsCertificateAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsCertificateFile:VirtualGatewaySpecListenerTlsCertificateFile
export function appmesh_VirtualGatewaySpecListenerTlsCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsCertificateSds:VirtualGatewaySpecListenerTlsCertificateSds
export function appmesh_VirtualGatewaySpecListenerTlsCertificateSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidation:VirtualGatewaySpecListenerTlsValidation
export function appmesh_VirtualGatewaySpecListenerTlsValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames(ctx, depth + 1));
  out.trust = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidationTrust(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames:VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
export function appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch:VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
export function appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidationTrust:VirtualGatewaySpecListenerTlsValidationTrust
export function appmesh_VirtualGatewaySpecListenerTlsValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidationTrustFile:VirtualGatewaySpecListenerTlsValidationTrustFile
export function appmesh_VirtualGatewaySpecListenerTlsValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecListenerTlsValidationTrustSds:VirtualGatewaySpecListenerTlsValidationTrustSds
export function appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecLogging:VirtualGatewaySpecLogging
export function appmesh_VirtualGatewaySpecLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLog = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecLoggingAccessLog(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecLoggingAccessLog:VirtualGatewaySpecLoggingAccessLog
export function appmesh_VirtualGatewaySpecLoggingAccessLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecLoggingAccessLogFile(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualGatewaySpecLoggingAccessLogFile:VirtualGatewaySpecLoggingAccessLogFile
export function appmesh_VirtualGatewaySpecLoggingAccessLogFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.format = (depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat(ctx, depth + 1));
  out.path = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecLoggingAccessLogFileFormat:VirtualGatewaySpecLoggingAccessLogFileFormat
export function appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsons = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson(ctx, depth + 1))]);
  out.text = "";
  return out;
}

// aws:appmesh/VirtualGatewaySpecLoggingAccessLogFileFormatJson:VirtualGatewaySpecLoggingAccessLogFileFormatJson
export function appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:appmesh/VirtualNodeSpec:VirtualNodeSpec
export function appmesh_VirtualNodeSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backendDefaults = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaults(ctx, depth + 1));
  out.backends = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackend(ctx, depth + 1))]);
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListener(ctx, depth + 1))]);
  out.logging = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecLogging(ctx, depth + 1));
  out.serviceDiscovery = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecServiceDiscovery(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackend:VirtualNodeSpecBackend
export function appmesh_VirtualNodeSpecBackend(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualService = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualService(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaults:VirtualNodeSpecBackendDefaults
export function appmesh_VirtualNodeSpecBackendDefaults(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicy = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicy(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicy:VirtualNodeSpecBackendDefaultsClientPolicy
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTls:VirtualNodeSpecBackendDefaultsClientPolicyTls
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate(ctx, depth + 1));
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validation = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate:VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile:VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds:VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames(ctx, depth + 1));
  out.trust = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acm = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(ctx, depth + 1));
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds:VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds
export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualService:VirtualNodeSpecBackendVirtualService
export function appmesh_VirtualNodeSpecBackendVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicy = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy(ctx, depth + 1));
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicy:VirtualNodeSpecBackendVirtualServiceClientPolicy
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTls:VirtualNodeSpecBackendVirtualServiceClientPolicyTls
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate(ctx, depth + 1));
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validation = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames(ctx, depth + 1));
  out.trust = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acm = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm(ctx, depth + 1));
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds:VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds
export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecListener:VirtualNodeSpecListener
export function appmesh_VirtualNodeSpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPool = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerConnectionPool(ctx, depth + 1));
  out.healthCheck = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerHealthCheck(ctx, depth + 1));
  out.outlierDetection = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerOutlierDetection(ctx, depth + 1));
  out.portMapping = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerPortMapping(ctx, depth + 1));
  out.timeout = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeout(ctx, depth + 1));
  out.tls = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTls(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerConnectionPool:VirtualNodeSpecListenerConnectionPool
export function appmesh_VirtualNodeSpecListenerConnectionPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpc = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerConnectionPoolGrpc(ctx, depth + 1));
  out.http2s = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerConnectionPoolHttp2(ctx, depth + 1))]);
  out.https = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerConnectionPoolHttp(ctx, depth + 1))]);
  out.tcps = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerConnectionPoolTcp(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerConnectionPoolGrpc:VirtualNodeSpecListenerConnectionPoolGrpc
export function appmesh_VirtualNodeSpecListenerConnectionPoolGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerConnectionPoolHttp2:VirtualNodeSpecListenerConnectionPoolHttp2
export function appmesh_VirtualNodeSpecListenerConnectionPoolHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerConnectionPoolHttp:VirtualNodeSpecListenerConnectionPoolHttp
export function appmesh_VirtualNodeSpecListenerConnectionPoolHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  out.maxPendingRequests = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerConnectionPoolTcp:VirtualNodeSpecListenerConnectionPoolTcp
export function appmesh_VirtualNodeSpecListenerConnectionPoolTcp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerHealthCheck:VirtualNodeSpecListenerHealthCheck
export function appmesh_VirtualNodeSpecListenerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.intervalMillis = 0;
  out.path = "";
  out.port = 443;
  out.protocol = "";
  out.timeoutMillis = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerOutlierDetection:VirtualNodeSpecListenerOutlierDetection
export function appmesh_VirtualNodeSpecListenerOutlierDetection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baseEjectionDuration = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration(ctx, depth + 1));
  out.interval = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerOutlierDetectionInterval(ctx, depth + 1));
  out.maxEjectionPercent = 0;
  out.maxServerErrors = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration:VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration
export function appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerOutlierDetectionInterval:VirtualNodeSpecListenerOutlierDetectionInterval
export function appmesh_VirtualNodeSpecListenerOutlierDetectionInterval(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerPortMapping:VirtualNodeSpecListenerPortMapping
export function appmesh_VirtualNodeSpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeout:VirtualNodeSpecListenerTimeout
export function appmesh_VirtualNodeSpecListenerTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpc = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutGrpc(ctx, depth + 1));
  out.http = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttp(ctx, depth + 1));
  out.http2 = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttp2(ctx, depth + 1));
  out.tcp = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutTcp(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutGrpc:VirtualNodeSpecListenerTimeoutGrpc
export function appmesh_VirtualNodeSpecListenerTimeoutGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutGrpcIdle:VirtualNodeSpecListenerTimeoutGrpcIdle
export function appmesh_VirtualNodeSpecListenerTimeoutGrpcIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutGrpcPerRequest:VirtualNodeSpecListenerTimeoutGrpcPerRequest
export function appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttp2:VirtualNodeSpecListenerTimeoutHttp2
export function appmesh_VirtualNodeSpecListenerTimeoutHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttp2Idle:VirtualNodeSpecListenerTimeoutHttp2Idle
export function appmesh_VirtualNodeSpecListenerTimeoutHttp2Idle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttp2PerRequest:VirtualNodeSpecListenerTimeoutHttp2PerRequest
export function appmesh_VirtualNodeSpecListenerTimeoutHttp2PerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttp:VirtualNodeSpecListenerTimeoutHttp
export function appmesh_VirtualNodeSpecListenerTimeoutHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttpIdle(ctx, depth + 1));
  out.perRequest = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttpIdle:VirtualNodeSpecListenerTimeoutHttpIdle
export function appmesh_VirtualNodeSpecListenerTimeoutHttpIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutHttpPerRequest:VirtualNodeSpecListenerTimeoutHttpPerRequest
export function appmesh_VirtualNodeSpecListenerTimeoutHttpPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutTcp:VirtualNodeSpecListenerTimeoutTcp
export function appmesh_VirtualNodeSpecListenerTimeoutTcp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idle = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTimeoutTcpIdle(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTimeoutTcpIdle:VirtualNodeSpecListenerTimeoutTcpIdle
export function appmesh_VirtualNodeSpecListenerTimeoutTcpIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTls:VirtualNodeSpecListenerTls
export function appmesh_VirtualNodeSpecListenerTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsCertificate(ctx, depth + 1));
  out.mode = "";
  out.validation = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidation(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsCertificate:VirtualNodeSpecListenerTlsCertificate
export function appmesh_VirtualNodeSpecListenerTlsCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acm = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsCertificateAcm(ctx, depth + 1));
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsCertificateFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsCertificateSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsCertificateAcm:VirtualNodeSpecListenerTlsCertificateAcm
export function appmesh_VirtualNodeSpecListenerTlsCertificateAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsCertificateFile:VirtualNodeSpecListenerTlsCertificateFile
export function appmesh_VirtualNodeSpecListenerTlsCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsCertificateSds:VirtualNodeSpecListenerTlsCertificateSds
export function appmesh_VirtualNodeSpecListenerTlsCertificateSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidation:VirtualNodeSpecListenerTlsValidation
export function appmesh_VirtualNodeSpecListenerTlsValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames(ctx, depth + 1));
  out.trust = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidationTrust(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames:VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames
export function appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.match = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch:VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch
export function appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidationTrust:VirtualNodeSpecListenerTlsValidationTrust
export function appmesh_VirtualNodeSpecListenerTlsValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidationTrustFile(ctx, depth + 1));
  out.sds = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecListenerTlsValidationTrustSds(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidationTrustFile:VirtualNodeSpecListenerTlsValidationTrustFile
export function appmesh_VirtualNodeSpecListenerTlsValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecListenerTlsValidationTrustSds:VirtualNodeSpecListenerTlsValidationTrustSds
export function appmesh_VirtualNodeSpecListenerTlsValidationTrustSds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecLogging:VirtualNodeSpecLogging
export function appmesh_VirtualNodeSpecLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLog = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecLoggingAccessLog(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecLoggingAccessLog:VirtualNodeSpecLoggingAccessLog
export function appmesh_VirtualNodeSpecLoggingAccessLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.file = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecLoggingAccessLogFile(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecLoggingAccessLogFile:VirtualNodeSpecLoggingAccessLogFile
export function appmesh_VirtualNodeSpecLoggingAccessLogFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.format = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecLoggingAccessLogFileFormat(ctx, depth + 1));
  out.path = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecLoggingAccessLogFileFormat:VirtualNodeSpecLoggingAccessLogFileFormat
export function appmesh_VirtualNodeSpecLoggingAccessLogFileFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsons = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson(ctx, depth + 1))]);
  out.text = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecLoggingAccessLogFileFormatJson:VirtualNodeSpecLoggingAccessLogFileFormatJson
export function appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecServiceDiscovery:VirtualNodeSpecServiceDiscovery
export function appmesh_VirtualNodeSpecServiceDiscovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsCloudMap = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap(ctx, depth + 1));
  out.dns = (depth > 4 ? {} : T_appmesh.appmesh_VirtualNodeSpecServiceDiscoveryDns(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualNodeSpecServiceDiscoveryAwsCloudMap:VirtualNodeSpecServiceDiscoveryAwsCloudMap
export function appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = {};
  out.namespaceName = "";
  out.serviceName = "";
  return out;
}

// aws:appmesh/VirtualNodeSpecServiceDiscoveryDns:VirtualNodeSpecServiceDiscoveryDns
export function appmesh_VirtualNodeSpecServiceDiscoveryDns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostname = "";
  out.ipPreference = "";
  out.responseType = "";
  return out;
}

// aws:appmesh/VirtualRouterSpec:VirtualRouterSpec
export function appmesh_VirtualRouterSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_VirtualRouterSpecListener(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/VirtualRouterSpecListener:VirtualRouterSpecListener
export function appmesh_VirtualRouterSpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.portMapping = (depth > 4 ? {} : T_appmesh.appmesh_VirtualRouterSpecListenerPortMapping(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualRouterSpecListenerPortMapping:VirtualRouterSpecListenerPortMapping
export function appmesh_VirtualRouterSpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/VirtualServiceSpec:VirtualServiceSpec
export function appmesh_VirtualServiceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.provider = (depth > 4 ? {} : T_appmesh.appmesh_VirtualServiceSpecProvider(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualServiceSpecProvider:VirtualServiceSpecProvider
export function appmesh_VirtualServiceSpecProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualNode = (depth > 4 ? {} : T_appmesh.appmesh_VirtualServiceSpecProviderVirtualNode(ctx, depth + 1));
  out.virtualRouter = (depth > 4 ? {} : T_appmesh.appmesh_VirtualServiceSpecProviderVirtualRouter(ctx, depth + 1));
  return out;
}

// aws:appmesh/VirtualServiceSpecProviderVirtualNode:VirtualServiceSpecProviderVirtualNode
export function appmesh_VirtualServiceSpecProviderVirtualNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualNodeName = "";
  return out;
}

// aws:appmesh/VirtualServiceSpecProviderVirtualRouter:VirtualServiceSpecProviderVirtualRouter
export function appmesh_VirtualServiceSpecProviderVirtualRouter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualRouterName = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpec:getGatewayRouteSpec
export function appmesh_getGatewayRouteSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecGrpcRoute(ctx, depth + 1))]);
  out.http2Routes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2Route(ctx, depth + 1))]);
  out.httpRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRoute(ctx, depth + 1))]);
  out.priority = 0;
  return out;
}

// aws:appmesh/getGatewayRouteSpecGrpcRoute:getGatewayRouteSpecGrpcRoute
export function appmesh_getGatewayRouteSpecGrpcRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecGrpcRouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecGrpcRouteMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecGrpcRouteAction:getGatewayRouteSpecGrpcRouteAction
export function appmesh_getGatewayRouteSpecGrpcRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecGrpcRouteActionTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecGrpcRouteActionTarget:getGatewayRouteSpecGrpcRouteActionTarget
export function appmesh_getGatewayRouteSpecGrpcRouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecGrpcRouteActionTargetVirtualService:getGatewayRouteSpecGrpcRouteActionTargetVirtualService
export function appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecGrpcRouteMatch:getGatewayRouteSpecGrpcRouteMatch
export function appmesh_getGatewayRouteSpecGrpcRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.serviceName = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2Route:getGatewayRouteSpecHttp2Route
export function appmesh_getGatewayRouteSpecHttp2Route(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteAction:getGatewayRouteSpecHttp2RouteAction
export function appmesh_getGatewayRouteSpecHttp2RouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rewrites = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionRewrite(ctx, depth + 1))]);
  out.targets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionRewrite:getGatewayRouteSpecHttp2RouteActionRewrite
export function appmesh_getGatewayRouteSpecHttp2RouteActionRewrite(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostnames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname(ctx, depth + 1))]);
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath(ctx, depth + 1))]);
  out.prefixes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionRewriteHostname:getGatewayRouteSpecHttp2RouteActionRewriteHostname
export function appmesh_getGatewayRouteSpecHttp2RouteActionRewriteHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTargetHostname = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionRewritePath:getGatewayRouteSpecHttp2RouteActionRewritePath
export function appmesh_getGatewayRouteSpecHttp2RouteActionRewritePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionRewritePrefix:getGatewayRouteSpecHttp2RouteActionRewritePrefix
export function appmesh_getGatewayRouteSpecHttp2RouteActionRewritePrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultPrefix = "";
  out.value = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionTarget:getGatewayRouteSpecHttp2RouteActionTarget
export function appmesh_getGatewayRouteSpecHttp2RouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteActionTargetVirtualService:getGatewayRouteSpecHttp2RouteActionTargetVirtualService
export function appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatch:getGatewayRouteSpecHttp2RouteMatch
export function appmesh_getGatewayRouteSpecHttp2RouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchHeader(ctx, depth + 1))]);
  out.hostnames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchHostname(ctx, depth + 1))]);
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchPath(ctx, depth + 1))]);
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchHeader:getGatewayRouteSpecHttp2RouteMatchHeader
export function appmesh_getGatewayRouteSpecHttp2RouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchHeaderMatch:getGatewayRouteSpecHttp2RouteMatchHeaderMatch
export function appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.ranges = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange(ctx, depth + 1))]);
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange:getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange
export function appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchHostname:getGatewayRouteSpecHttp2RouteMatchHostname
export function appmesh_getGatewayRouteSpecHttp2RouteMatchHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchPath:getGatewayRouteSpecHttp2RouteMatchPath
export function appmesh_getGatewayRouteSpecHttp2RouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchQueryParameter:getGatewayRouteSpecHttp2RouteMatchQueryParameter
export function appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch:getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch
export function appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRoute:getGatewayRouteSpecHttpRoute
export function appmesh_getGatewayRouteSpecHttpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteAction:getGatewayRouteSpecHttpRouteAction
export function appmesh_getGatewayRouteSpecHttpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rewrites = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionRewrite(ctx, depth + 1))]);
  out.targets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionRewrite:getGatewayRouteSpecHttpRouteActionRewrite
export function appmesh_getGatewayRouteSpecHttpRouteActionRewrite(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostnames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname(ctx, depth + 1))]);
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionRewritePath(ctx, depth + 1))]);
  out.prefixes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionRewriteHostname:getGatewayRouteSpecHttpRouteActionRewriteHostname
export function appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTargetHostname = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionRewritePath:getGatewayRouteSpecHttpRouteActionRewritePath
export function appmesh_getGatewayRouteSpecHttpRouteActionRewritePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionRewritePrefix:getGatewayRouteSpecHttpRouteActionRewritePrefix
export function appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultPrefix = "";
  out.value = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionTarget:getGatewayRouteSpecHttpRouteActionTarget
export function appmesh_getGatewayRouteSpecHttpRouteActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteActionTargetVirtualService:getGatewayRouteSpecHttpRouteActionTargetVirtualService
export function appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatch:getGatewayRouteSpecHttpRouteMatch
export function appmesh_getGatewayRouteSpecHttpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchHeader(ctx, depth + 1))]);
  out.hostnames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchHostname(ctx, depth + 1))]);
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchPath(ctx, depth + 1))]);
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchHeader:getGatewayRouteSpecHttpRouteMatchHeader
export function appmesh_getGatewayRouteSpecHttpRouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchHeaderMatch:getGatewayRouteSpecHttpRouteMatchHeaderMatch
export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.ranges = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange(ctx, depth + 1))]);
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchHeaderMatchRange:getGatewayRouteSpecHttpRouteMatchHeaderMatchRange
export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchHostname:getGatewayRouteSpecHttpRouteMatchHostname
export function appmesh_getGatewayRouteSpecHttpRouteMatchHostname(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchPath:getGatewayRouteSpecHttpRouteMatchPath
export function appmesh_getGatewayRouteSpecHttpRouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchQueryParameter:getGatewayRouteSpecHttpRouteMatchQueryParameter
export function appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getGatewayRouteSpecHttpRouteMatchQueryParameterMatch:getGatewayRouteSpecHttpRouteMatchQueryParameterMatch
export function appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getMeshSpec:getMeshSpec
export function appmesh_getMeshSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.egressFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getMeshSpecEgressFilter(ctx, depth + 1))]);
  out.serviceDiscoveries = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getMeshSpecServiceDiscovery(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getMeshSpecEgressFilter:getMeshSpecEgressFilter
export function appmesh_getMeshSpecEgressFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:appmesh/getMeshSpecServiceDiscovery:getMeshSpecServiceDiscovery
export function appmesh_getMeshSpecServiceDiscovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipPreference = "";
  return out;
}

// aws:appmesh/getRouteSpec:getRouteSpec
export function appmesh_getRouteSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRoute(ctx, depth + 1))]);
  out.http2Routes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2Route(ctx, depth + 1))]);
  out.httpRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRoute(ctx, depth + 1))]);
  out.priority = 0;
  out.tcpRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRoute(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecGrpcRoute:getRouteSpecGrpcRoute
export function appmesh_getRouteSpecGrpcRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteMatch(ctx, depth + 1))]);
  out.retryPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteRetryPolicy(ctx, depth + 1))]);
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteTimeout(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteAction:getRouteSpecGrpcRouteAction
export function appmesh_getRouteSpecGrpcRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteActionWeightedTarget:getRouteSpecGrpcRouteActionWeightedTarget
export function appmesh_getRouteSpecGrpcRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteMatch:getRouteSpecGrpcRouteMatch
export function appmesh_getRouteSpecGrpcRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteMatchMetadata(ctx, depth + 1))]);
  out.methodName = "";
  out.port = 443;
  out.prefix = "";
  out.serviceName = "";
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteMatchMetadata:getRouteSpecGrpcRouteMatchMetadata
export function appmesh_getRouteSpecGrpcRouteMatchMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteMatchMetadataMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteMatchMetadataMatch:getRouteSpecGrpcRouteMatchMetadataMatch
export function appmesh_getRouteSpecGrpcRouteMatchMetadataMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.ranges = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange(ctx, depth + 1))]);
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteMatchMetadataMatchRange:getRouteSpecGrpcRouteMatchMetadataMatchRange
export function appmesh_getRouteSpecGrpcRouteMatchMetadataMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteRetryPolicy:getRouteSpecGrpcRouteRetryPolicy
export function appmesh_getRouteSpecGrpcRouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcRetryEvents = (depth > 4 ? [] : [""]);
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(ctx, depth + 1))]);
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout:getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout
export function appmesh_getRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteTimeout:getRouteSpecGrpcRouteTimeout
export function appmesh_getRouteSpecGrpcRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteTimeoutIdle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecGrpcRouteTimeoutPerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteTimeoutIdle:getRouteSpecGrpcRouteTimeoutIdle
export function appmesh_getRouteSpecGrpcRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecGrpcRouteTimeoutPerRequest:getRouteSpecGrpcRouteTimeoutPerRequest
export function appmesh_getRouteSpecGrpcRouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttp2Route:getRouteSpecHttp2Route
export function appmesh_getRouteSpecHttp2Route(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatch(ctx, depth + 1))]);
  out.retryPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteRetryPolicy(ctx, depth + 1))]);
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteTimeout(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteAction:getRouteSpecHttp2RouteAction
export function appmesh_getRouteSpecHttp2RouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteActionWeightedTarget:getRouteSpecHttp2RouteActionWeightedTarget
export function appmesh_getRouteSpecHttp2RouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatch:getRouteSpecHttp2RouteMatch
export function appmesh_getRouteSpecHttp2RouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchHeader(ctx, depth + 1))]);
  out.method = "";
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchPath(ctx, depth + 1))]);
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchQueryParameter(ctx, depth + 1))]);
  out.scheme = "";
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchHeader:getRouteSpecHttp2RouteMatchHeader
export function appmesh_getRouteSpecHttp2RouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchHeaderMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchHeaderMatch:getRouteSpecHttp2RouteMatchHeaderMatch
export function appmesh_getRouteSpecHttp2RouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.ranges = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange(ctx, depth + 1))]);
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchHeaderMatchRange:getRouteSpecHttp2RouteMatchHeaderMatchRange
export function appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchPath:getRouteSpecHttp2RouteMatchPath
export function appmesh_getRouteSpecHttp2RouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchQueryParameter:getRouteSpecHttp2RouteMatchQueryParameter
export function appmesh_getRouteSpecHttp2RouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteMatchQueryParameterMatch:getRouteSpecHttp2RouteMatchQueryParameterMatch
export function appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteRetryPolicy:getRouteSpecHttp2RouteRetryPolicy
export function appmesh_getRouteSpecHttp2RouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(ctx, depth + 1))]);
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout:getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout
export function appmesh_getRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteTimeout:getRouteSpecHttp2RouteTimeout
export function appmesh_getRouteSpecHttp2RouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteTimeoutIdle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttp2RouteTimeoutPerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteTimeoutIdle:getRouteSpecHttp2RouteTimeoutIdle
export function appmesh_getRouteSpecHttp2RouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttp2RouteTimeoutPerRequest:getRouteSpecHttp2RouteTimeoutPerRequest
export function appmesh_getRouteSpecHttp2RouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttpRoute:getRouteSpecHttpRoute
export function appmesh_getRouteSpecHttpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatch(ctx, depth + 1))]);
  out.retryPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteRetryPolicy(ctx, depth + 1))]);
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteTimeout(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteAction:getRouteSpecHttpRouteAction
export function appmesh_getRouteSpecHttpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteActionWeightedTarget:getRouteSpecHttpRouteActionWeightedTarget
export function appmesh_getRouteSpecHttpRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatch:getRouteSpecHttpRouteMatch
export function appmesh_getRouteSpecHttpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchHeader(ctx, depth + 1))]);
  out.method = "";
  out.paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchPath(ctx, depth + 1))]);
  out.port = 443;
  out.prefix = "";
  out.queryParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchQueryParameter(ctx, depth + 1))]);
  out.scheme = "";
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchHeader:getRouteSpecHttpRouteMatchHeader
export function appmesh_getRouteSpecHttpRouteMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invert = false;
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchHeaderMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchHeaderMatch:getRouteSpecHttpRouteMatchHeaderMatch
export function appmesh_getRouteSpecHttpRouteMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  out.ranges = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange(ctx, depth + 1))]);
  out.regex = "";
  out.suffix = "";
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchHeaderMatchRange:getRouteSpecHttpRouteMatchHeaderMatchRange
export function appmesh_getRouteSpecHttpRouteMatchHeaderMatchRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.end = 0;
  out.start = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchPath:getRouteSpecHttpRouteMatchPath
export function appmesh_getRouteSpecHttpRouteMatchPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.regex = "";
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchQueryParameter:getRouteSpecHttpRouteMatchQueryParameter
export function appmesh_getRouteSpecHttpRouteMatchQueryParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteMatchQueryParameterMatch:getRouteSpecHttpRouteMatchQueryParameterMatch
export function appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteRetryPolicy:getRouteSpecHttpRouteRetryPolicy
export function appmesh_getRouteSpecHttpRouteRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpRetryEvents = (depth > 4 ? [] : [""]);
  out.maxRetries = 0;
  out.perRetryTimeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout(ctx, depth + 1))]);
  out.tcpRetryEvents = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteRetryPolicyPerRetryTimeout:getRouteSpecHttpRouteRetryPolicyPerRetryTimeout
export function appmesh_getRouteSpecHttpRouteRetryPolicyPerRetryTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteTimeout:getRouteSpecHttpRouteTimeout
export function appmesh_getRouteSpecHttpRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteTimeoutIdle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecHttpRouteTimeoutPerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteTimeoutIdle:getRouteSpecHttpRouteTimeoutIdle
export function appmesh_getRouteSpecHttpRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecHttpRouteTimeoutPerRequest:getRouteSpecHttpRouteTimeoutPerRequest
export function appmesh_getRouteSpecHttpRouteTimeoutPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getRouteSpecTcpRoute:getRouteSpecTcpRoute
export function appmesh_getRouteSpecTcpRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRouteAction(ctx, depth + 1))]);
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRouteMatch(ctx, depth + 1))]);
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRouteTimeout(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecTcpRouteAction:getRouteSpecTcpRouteAction
export function appmesh_getRouteSpecTcpRouteAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weightedTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRouteActionWeightedTarget(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecTcpRouteActionWeightedTarget:getRouteSpecTcpRouteActionWeightedTarget
export function appmesh_getRouteSpecTcpRouteActionWeightedTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.virtualNode = "";
  out.weight = 0;
  return out;
}

// aws:appmesh/getRouteSpecTcpRouteMatch:getRouteSpecTcpRouteMatch
export function appmesh_getRouteSpecTcpRouteMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  return out;
}

// aws:appmesh/getRouteSpecTcpRouteTimeout:getRouteSpecTcpRouteTimeout
export function appmesh_getRouteSpecTcpRouteTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getRouteSpecTcpRouteTimeoutIdle(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getRouteSpecTcpRouteTimeoutIdle:getRouteSpecTcpRouteTimeoutIdle
export function appmesh_getRouteSpecTcpRouteTimeoutIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualGatewaySpec:getVirtualGatewaySpec
export function appmesh_getVirtualGatewaySpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backendDefaults = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefault(ctx, depth + 1))]);
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListener(ctx, depth + 1))]);
  out.loggings = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecLogging(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefault:getVirtualGatewaySpecBackendDefault
export function appmesh_getVirtualGatewaySpecBackendDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicy:getVirtualGatewaySpecBackendDefaultClientPolicy
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTl:getVirtualGatewaySpecBackendDefaultClientPolicyTl
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate(ctx, depth + 1))]);
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate:getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile:getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd:getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName(ctx, depth + 1))]);
  out.trusts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acms = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm(ctx, depth + 1))]);
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd:getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd
export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListener:getVirtualGatewaySpecListener
export function appmesh_getVirtualGatewaySpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerConnectionPool(ctx, depth + 1))]);
  out.healthChecks = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerHealthCheck(ctx, depth + 1))]);
  out.portMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerPortMapping(ctx, depth + 1))]);
  out.tls = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTl(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerConnectionPool:getVirtualGatewaySpecListenerConnectionPool
export function appmesh_getVirtualGatewaySpecListenerConnectionPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc(ctx, depth + 1))]);
  out.http2s = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2(ctx, depth + 1))]);
  out.https = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerConnectionPoolGrpc:getVirtualGatewaySpecListenerConnectionPoolGrpc
export function appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerConnectionPoolHttp2:getVirtualGatewaySpecListenerConnectionPoolHttp2
export function appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerConnectionPoolHttp:getVirtualGatewaySpecListenerConnectionPoolHttp
export function appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  out.maxPendingRequests = 0;
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerHealthCheck:getVirtualGatewaySpecListenerHealthCheck
export function appmesh_getVirtualGatewaySpecListenerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.intervalMillis = 0;
  out.path = "";
  out.port = 443;
  out.protocol = "";
  out.timeoutMillis = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerPortMapping:getVirtualGatewaySpecListenerPortMapping
export function appmesh_getVirtualGatewaySpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTl:getVirtualGatewaySpecListenerTl
export function appmesh_getVirtualGatewaySpecListenerTl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlCertificate(ctx, depth + 1))]);
  out.mode = "";
  out.validations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidation(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlCertificate:getVirtualGatewaySpecListenerTlCertificate
export function appmesh_getVirtualGatewaySpecListenerTlCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acms = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlCertificateAcm(ctx, depth + 1))]);
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlCertificateFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlCertificateSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlCertificateAcm:getVirtualGatewaySpecListenerTlCertificateAcm
export function appmesh_getVirtualGatewaySpecListenerTlCertificateAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlCertificateFile:getVirtualGatewaySpecListenerTlCertificateFile
export function appmesh_getVirtualGatewaySpecListenerTlCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlCertificateSd:getVirtualGatewaySpecListenerTlCertificateSd
export function appmesh_getVirtualGatewaySpecListenerTlCertificateSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidation:getVirtualGatewaySpecListenerTlValidation
export function appmesh_getVirtualGatewaySpecListenerTlValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName(ctx, depth + 1))]);
  out.trusts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidationTrust(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName:getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName
export function appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch:getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch
export function appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidationTrust:getVirtualGatewaySpecListenerTlValidationTrust
export function appmesh_getVirtualGatewaySpecListenerTlValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidationTrustFile:getVirtualGatewaySpecListenerTlValidationTrustFile
export function appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecListenerTlValidationTrustSd:getVirtualGatewaySpecListenerTlValidationTrustSd
export function appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecLogging:getVirtualGatewaySpecLogging
export function appmesh_getVirtualGatewaySpecLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecLoggingAccessLog(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecLoggingAccessLog:getVirtualGatewaySpecLoggingAccessLog
export function appmesh_getVirtualGatewaySpecLoggingAccessLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecLoggingAccessLogFile(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualGatewaySpecLoggingAccessLogFile:getVirtualGatewaySpecLoggingAccessLogFile
export function appmesh_getVirtualGatewaySpecLoggingAccessLogFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.formats = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat(ctx, depth + 1))]);
  out.path = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecLoggingAccessLogFileFormat:getVirtualGatewaySpecLoggingAccessLogFileFormat
export function appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsons = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson(ctx, depth + 1))]);
  out.text = "";
  return out;
}

// aws:appmesh/getVirtualGatewaySpecLoggingAccessLogFileFormatJson:getVirtualGatewaySpecLoggingAccessLogFileFormatJson
export function appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpec:getVirtualNodeSpec
export function appmesh_getVirtualNodeSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backendDefaults = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefault(ctx, depth + 1))]);
  out.backends = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackend(ctx, depth + 1))]);
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListener(ctx, depth + 1))]);
  out.loggings = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecLogging(ctx, depth + 1))]);
  out.serviceDiscoveries = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecServiceDiscovery(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackend:getVirtualNodeSpecBackend
export function appmesh_getVirtualNodeSpecBackend(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualService(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefault:getVirtualNodeSpecBackendDefault
export function appmesh_getVirtualNodeSpecBackendDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicy(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicy:getVirtualNodeSpecBackendDefaultClientPolicy
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTl:getVirtualNodeSpecBackendDefaultClientPolicyTl
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate(ctx, depth + 1))]);
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate:getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile:getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd:getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificateSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidation:getVirtualNodeSpecBackendDefaultClientPolicyTlValidation
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName(ctx, depth + 1))]);
  out.trusts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acms = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm(ctx, depth + 1))]);
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd:getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd
export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrustSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualService:getVirtualNodeSpecBackendVirtualService
export function appmesh_getVirtualNodeSpecBackendVirtualService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy(ctx, depth + 1))]);
  out.virtualServiceName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicy:getVirtualNodeSpecBackendVirtualServiceClientPolicy
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tls = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTl:getVirtualNodeSpecBackendVirtualServiceClientPolicyTl
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate(ctx, depth + 1))]);
  out.enforce = false;
  out.ports = (depth > 4 ? [] : [443]);
  out.validations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName(ctx, depth + 1))]);
  out.trusts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeNameMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeNameMatch:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeNameMatch
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeNameMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acms = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm(ctx, depth + 1))]);
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd:getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd
export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecListener:getVirtualNodeSpecListener
export function appmesh_getVirtualNodeSpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerConnectionPool(ctx, depth + 1))]);
  out.healthChecks = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerHealthCheck(ctx, depth + 1))]);
  out.outlierDetections = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerOutlierDetection(ctx, depth + 1))]);
  out.portMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerPortMapping(ctx, depth + 1))]);
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeout(ctx, depth + 1))]);
  out.tls = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTl(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerConnectionPool:getVirtualNodeSpecListenerConnectionPool
export function appmesh_getVirtualNodeSpecListenerConnectionPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc(ctx, depth + 1))]);
  out.http2s = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2(ctx, depth + 1))]);
  out.https = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerConnectionPoolHttp(ctx, depth + 1))]);
  out.tcps = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerConnectionPoolTcp(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerConnectionPoolGrpc:getVirtualNodeSpecListenerConnectionPoolGrpc
export function appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerConnectionPoolHttp2:getVirtualNodeSpecListenerConnectionPoolHttp2
export function appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRequests = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerConnectionPoolHttp:getVirtualNodeSpecListenerConnectionPoolHttp
export function appmesh_getVirtualNodeSpecListenerConnectionPoolHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  out.maxPendingRequests = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerConnectionPoolTcp:getVirtualNodeSpecListenerConnectionPoolTcp
export function appmesh_getVirtualNodeSpecListenerConnectionPoolTcp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConnections = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerHealthCheck:getVirtualNodeSpecListenerHealthCheck
export function appmesh_getVirtualNodeSpecListenerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.intervalMillis = 0;
  out.path = "";
  out.port = 443;
  out.protocol = "";
  out.timeoutMillis = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerOutlierDetection:getVirtualNodeSpecListenerOutlierDetection
export function appmesh_getVirtualNodeSpecListenerOutlierDetection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baseEjectionDurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration(ctx, depth + 1))]);
  out.intervals = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval(ctx, depth + 1))]);
  out.maxEjectionPercent = 0;
  out.maxServerErrors = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration:getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration
export function appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerOutlierDetectionInterval:getVirtualNodeSpecListenerOutlierDetectionInterval
export function appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerPortMapping:getVirtualNodeSpecListenerPortMapping
export function appmesh_getVirtualNodeSpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeout:getVirtualNodeSpecListenerTimeout
export function appmesh_getVirtualNodeSpecListenerTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutGrpc(ctx, depth + 1))]);
  out.http2s = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttp2(ctx, depth + 1))]);
  out.https = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttp(ctx, depth + 1))]);
  out.tcps = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutTcp(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutGrpc:getVirtualNodeSpecListenerTimeoutGrpc
export function appmesh_getVirtualNodeSpecListenerTimeoutGrpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutGrpcIdle:getVirtualNodeSpecListenerTimeoutGrpcIdle
export function appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutGrpcPerRequest:getVirtualNodeSpecListenerTimeoutGrpcPerRequest
export function appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttp2:getVirtualNodeSpecListenerTimeoutHttp2
export function appmesh_getVirtualNodeSpecListenerTimeoutHttp2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttp2Idle:getVirtualNodeSpecListenerTimeoutHttp2Idle
export function appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttp2PerRequest:getVirtualNodeSpecListenerTimeoutHttp2PerRequest
export function appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttp:getVirtualNodeSpecListenerTimeoutHttp
export function appmesh_getVirtualNodeSpecListenerTimeoutHttp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle(ctx, depth + 1))]);
  out.perRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttpIdle:getVirtualNodeSpecListenerTimeoutHttpIdle
export function appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutHttpPerRequest:getVirtualNodeSpecListenerTimeoutHttpPerRequest
export function appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutTcp:getVirtualNodeSpecListenerTimeoutTcp
export function appmesh_getVirtualNodeSpecListenerTimeoutTcp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idles = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTimeoutTcpIdle:getVirtualNodeSpecListenerTimeoutTcpIdle
export function appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTl:getVirtualNodeSpecListenerTl
export function appmesh_getVirtualNodeSpecListenerTl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlCertificate(ctx, depth + 1))]);
  out.mode = "";
  out.validations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidation(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlCertificate:getVirtualNodeSpecListenerTlCertificate
export function appmesh_getVirtualNodeSpecListenerTlCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acms = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlCertificateAcm(ctx, depth + 1))]);
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlCertificateFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlCertificateSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlCertificateAcm:getVirtualNodeSpecListenerTlCertificateAcm
export function appmesh_getVirtualNodeSpecListenerTlCertificateAcm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlCertificateFile:getVirtualNodeSpecListenerTlCertificateFile
export function appmesh_getVirtualNodeSpecListenerTlCertificateFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  out.privateKey = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlCertificateSd:getVirtualNodeSpecListenerTlCertificateSd
export function appmesh_getVirtualNodeSpecListenerTlCertificateSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidation:getVirtualNodeSpecListenerTlValidation
export function appmesh_getVirtualNodeSpecListenerTlValidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subjectAlternativeNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName(ctx, depth + 1))]);
  out.trusts = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidationTrust(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidationSubjectAlternativeName:getVirtualNodeSpecListenerTlValidationSubjectAlternativeName
export function appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matches = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch:getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch
export function appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exacts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidationTrust:getVirtualNodeSpecListenerTlValidationTrust
export function appmesh_getVirtualNodeSpecListenerTlValidationTrust(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidationTrustFile(ctx, depth + 1))]);
  out.sds = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecListenerTlValidationTrustSd(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidationTrustFile:getVirtualNodeSpecListenerTlValidationTrustFile
export function appmesh_getVirtualNodeSpecListenerTlValidationTrustFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateChain = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecListenerTlValidationTrustSd:getVirtualNodeSpecListenerTlValidationTrustSd
export function appmesh_getVirtualNodeSpecListenerTlValidationTrustSd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.secretName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecLogging:getVirtualNodeSpecLogging
export function appmesh_getVirtualNodeSpecLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecLoggingAccessLog(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecLoggingAccessLog:getVirtualNodeSpecLoggingAccessLog
export function appmesh_getVirtualNodeSpecLoggingAccessLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.files = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecLoggingAccessLogFile(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecLoggingAccessLogFile:getVirtualNodeSpecLoggingAccessLogFile
export function appmesh_getVirtualNodeSpecLoggingAccessLogFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.formats = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat(ctx, depth + 1))]);
  out.path = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecLoggingAccessLogFileFormat:getVirtualNodeSpecLoggingAccessLogFileFormat
export function appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsons = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson(ctx, depth + 1))]);
  out.text = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecLoggingAccessLogFileFormatJson:getVirtualNodeSpecLoggingAccessLogFileFormatJson
export function appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecServiceDiscovery:getVirtualNodeSpecServiceDiscovery
export function appmesh_getVirtualNodeSpecServiceDiscovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsCloudMaps = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap(ctx, depth + 1))]);
  out.dns = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualNodeSpecServiceDiscoveryDn(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualNodeSpecServiceDiscoveryAwsCloudMap:getVirtualNodeSpecServiceDiscoveryAwsCloudMap
export function appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = {};
  out.namespaceName = "";
  out.serviceName = "";
  return out;
}

// aws:appmesh/getVirtualNodeSpecServiceDiscoveryDn:getVirtualNodeSpecServiceDiscoveryDn
export function appmesh_getVirtualNodeSpecServiceDiscoveryDn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostname = "";
  out.ipPreference = "";
  out.responseType = "";
  return out;
}

// aws:appmesh/getVirtualRouterSpec:getVirtualRouterSpec
export function appmesh_getVirtualRouterSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualRouterSpecListener(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualRouterSpecListener:getVirtualRouterSpecListener
export function appmesh_getVirtualRouterSpecListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.portMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualRouterSpecListenerPortMapping(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualRouterSpecListenerPortMapping:getVirtualRouterSpecListenerPortMapping
export function appmesh_getVirtualRouterSpecListenerPortMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:appmesh/getVirtualServiceSpec:getVirtualServiceSpec
export function appmesh_getVirtualServiceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.providers = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualServiceSpecProvider(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualServiceSpecProvider:getVirtualServiceSpecProvider
export function appmesh_getVirtualServiceSpecProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualNodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualServiceSpecProviderVirtualNode(ctx, depth + 1))]);
  out.virtualRouters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appmesh.appmesh_getVirtualServiceSpecProviderVirtualRouter(ctx, depth + 1))]);
  return out;
}

// aws:appmesh/getVirtualServiceSpecProviderVirtualNode:getVirtualServiceSpecProviderVirtualNode
export function appmesh_getVirtualServiceSpecProviderVirtualNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualNodeName = "";
  return out;
}

// aws:appmesh/getVirtualServiceSpecProviderVirtualRouter:getVirtualServiceSpecProviderVirtualRouter
export function appmesh_getVirtualServiceSpecProviderVirtualRouter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.virtualRouterName = "";
  return out;
}

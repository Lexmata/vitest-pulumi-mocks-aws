// GENERATED FILE — do not edit.
// Service: servicediscovery   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicediscovery from "../types/servicediscovery.js";

// aws:servicediscovery/httpNamespace:HttpNamespace
export function HttpNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.httpName = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:servicediscovery/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (i.attributes !== undefined ? i.attributes : {});
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.serviceId = (i.serviceId !== undefined ? i.serviceId : h.id(ctx, "serviceId"));
  return out;
}

// aws:servicediscovery/privateDnsNamespace:PrivateDnsNamespace
export function PrivateDnsNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.hostedZone = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpc = (i.vpc !== undefined ? i.vpc : "");
  return out;
}

// aws:servicediscovery/publicDnsNamespace:PublicDnsNamespace
export function PublicDnsNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.hostedZone = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:servicediscovery/service:Service
export function Service(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.dnsConfig = (i.dnsConfig !== undefined ? i.dnsConfig : (depth > 4 ? {} : T_servicediscovery.servicediscovery_ServiceDnsConfig(ctx, depth + 1)));
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.healthCheckConfig = (i.healthCheckConfig !== undefined ? i.healthCheckConfig : (depth > 4 ? {} : T_servicediscovery.servicediscovery_ServiceHealthCheckConfig(ctx, depth + 1)));
  out.healthCheckCustomConfig = (i.healthCheckCustomConfig !== undefined ? i.healthCheckCustomConfig : (depth > 4 ? {} : T_servicediscovery.servicediscovery_ServiceHealthCheckCustomConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namespaceId = (i.namespaceId !== undefined ? i.namespaceId : h.id(ctx, "namespaceId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

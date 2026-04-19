// GENERATED FILE — do not edit.
// Service: servicediscovery   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicediscovery from "../types/servicediscovery.js";

// aws:servicediscovery/getDnsNamespace:getDnsNamespace
export function getDnsNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.hostedZone = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:servicediscovery/getHttpNamespace:getHttpNamespace
export function getHttpNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.httpName = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:servicediscovery/getService:getService
export function getService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.dnsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicediscovery.servicediscovery_getServiceDnsConfig(ctx, depth + 1))]);
  out.healthCheckConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicediscovery.servicediscovery_getServiceHealthCheckConfig(ctx, depth + 1))]);
  out.healthCheckCustomConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicediscovery.servicediscovery_getServiceHealthCheckCustomConfig(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namespaceId = (i.namespaceId !== undefined ? i.namespaceId : h.id(ctx, "namespaceId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = (i.tagsAll !== undefined ? i.tagsAll : {});
  return out;
}

// GENERATED FILE — do not edit.
// Service: servicediscovery   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicediscovery from "./servicediscovery.js";

// aws:servicediscovery/ServiceDnsConfig:ServiceDnsConfig
export function servicediscovery_ServiceDnsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicediscovery.servicediscovery_ServiceDnsConfigDnsRecord(ctx, depth + 1))]);
  out.namespaceId = h.id(ctx, "namespaceId");
  out.routingPolicy = "";
  return out;
}

// aws:servicediscovery/ServiceDnsConfigDnsRecord:ServiceDnsConfigDnsRecord
export function servicediscovery_ServiceDnsConfigDnsRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ttl = 0;
  out.type = "";
  return out;
}

// aws:servicediscovery/ServiceHealthCheckConfig:ServiceHealthCheckConfig
export function servicediscovery_ServiceHealthCheckConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureThreshold = 0;
  out.resourcePath = "";
  out.type = "";
  return out;
}

// aws:servicediscovery/ServiceHealthCheckCustomConfig:ServiceHealthCheckCustomConfig
export function servicediscovery_ServiceHealthCheckCustomConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureThreshold = 0;
  return out;
}

// aws:servicediscovery/getServiceDnsConfig:getServiceDnsConfig
export function servicediscovery_getServiceDnsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicediscovery.servicediscovery_getServiceDnsConfigDnsRecord(ctx, depth + 1))]);
  out.namespaceId = h.id(ctx, "namespaceId");
  out.routingPolicy = "";
  return out;
}

// aws:servicediscovery/getServiceDnsConfigDnsRecord:getServiceDnsConfigDnsRecord
export function servicediscovery_getServiceDnsConfigDnsRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ttl = 0;
  out.type = "";
  return out;
}

// aws:servicediscovery/getServiceHealthCheckConfig:getServiceHealthCheckConfig
export function servicediscovery_getServiceHealthCheckConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureThreshold = 0;
  out.resourcePath = "";
  out.type = "";
  return out;
}

// aws:servicediscovery/getServiceHealthCheckCustomConfig:getServiceHealthCheckCustomConfig
export function servicediscovery_getServiceHealthCheckCustomConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureThreshold = 0;
  return out;
}

// GENERATED FILE — do not edit.
// Service: redshiftserverless   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshiftserverless from "./redshiftserverless.js";

// aws:redshiftserverless/EndpointAccessVpcEndpoint:EndpointAccessVpcEndpoint
export function redshiftserverless_EndpointAccessVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_EndpointAccessVpcEndpointNetworkInterface(ctx, depth + 1))]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:redshiftserverless/EndpointAccessVpcEndpointNetworkInterface:EndpointAccessVpcEndpointNetworkInterface
export function redshiftserverless_EndpointAccessVpcEndpointNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIpAddress = "10.0.0.10";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:redshiftserverless/WorkgroupConfigParameter:WorkgroupConfigParameter
export function redshiftserverless_WorkgroupConfigParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterKey = "";
  out.parameterValue = "";
  return out;
}

// aws:redshiftserverless/WorkgroupEndpoint:WorkgroupEndpoint
export function redshiftserverless_WorkgroupEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_WorkgroupEndpointVpcEndpoint(ctx, depth + 1))]);
  return out;
}

// aws:redshiftserverless/WorkgroupEndpointVpcEndpoint:WorkgroupEndpointVpcEndpoint
export function redshiftserverless_WorkgroupEndpointVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface(ctx, depth + 1))]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:redshiftserverless/WorkgroupEndpointVpcEndpointNetworkInterface:WorkgroupEndpointVpcEndpointNetworkInterface
export function redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIpAddress = "10.0.0.10";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:redshiftserverless/WorkgroupPricePerformanceTarget:WorkgroupPricePerformanceTarget
export function redshiftserverless_WorkgroupPricePerformanceTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.level = 0;
  return out;
}

// aws:redshiftserverless/getWorkgroupEndpoint:getWorkgroupEndpoint
export function redshiftserverless_getWorkgroupEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.port = 443;
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_getWorkgroupEndpointVpcEndpoint(ctx, depth + 1))]);
  return out;
}

// aws:redshiftserverless/getWorkgroupEndpointVpcEndpoint:getWorkgroupEndpointVpcEndpoint
export function redshiftserverless_getWorkgroupEndpointVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface(ctx, depth + 1))]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:redshiftserverless/getWorkgroupEndpointVpcEndpointNetworkInterface:getWorkgroupEndpointVpcEndpointNetworkInterface
export function redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIpAddress = "10.0.0.10";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

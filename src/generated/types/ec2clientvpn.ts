// GENERATED FILE — do not edit.
// Service: ec2clientvpn   (11 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2clientvpn from "./ec2clientvpn.js";

// aws:ec2clientvpn/EndpointAuthenticationOption:EndpointAuthenticationOption
export function ec2clientvpn_EndpointAuthenticationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryId = h.id(ctx, "activeDirectoryId");
  out.rootCertificateChainArn = h.arn(ctx);
  out.samlProviderArn = h.arn(ctx);
  out.selfServiceSamlProviderArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:ec2clientvpn/EndpointClientConnectOptions:EndpointClientConnectOptions
export function ec2clientvpn_EndpointClientConnectOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.lambdaFunctionArn = h.arn(ctx);
  return out;
}

// aws:ec2clientvpn/EndpointClientLoginBannerOptions:EndpointClientLoginBannerOptions
export function ec2clientvpn_EndpointClientLoginBannerOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bannerText = "";
  out.enabled = true;
  return out;
}

// aws:ec2clientvpn/EndpointClientRouteEnforcementOptions:EndpointClientRouteEnforcementOptions
export function ec2clientvpn_EndpointClientRouteEnforcementOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enforced = false;
  return out;
}

// aws:ec2clientvpn/EndpointConnectionLogOptions:EndpointConnectionLogOptions
export function ec2clientvpn_EndpointConnectionLogOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroup = "";
  out.cloudwatchLogStream = "";
  out.enabled = true;
  return out;
}

// aws:ec2clientvpn/getEndpointAuthenticationOption:getEndpointAuthenticationOption
export function ec2clientvpn_getEndpointAuthenticationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryId = h.id(ctx, "activeDirectoryId");
  out.rootCertificateChainArn = h.arn(ctx);
  out.samlProviderArn = h.arn(ctx);
  out.selfServiceSamlProviderArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:ec2clientvpn/getEndpointClientConnectOption:getEndpointClientConnectOption
export function ec2clientvpn_getEndpointClientConnectOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.lambdaFunctionArn = h.arn(ctx);
  return out;
}

// aws:ec2clientvpn/getEndpointClientLoginBannerOption:getEndpointClientLoginBannerOption
export function ec2clientvpn_getEndpointClientLoginBannerOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bannerText = "";
  out.enabled = true;
  return out;
}

// aws:ec2clientvpn/getEndpointClientRouteEnforcementOption:getEndpointClientRouteEnforcementOption
export function ec2clientvpn_getEndpointClientRouteEnforcementOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enforced = false;
  return out;
}

// aws:ec2clientvpn/getEndpointConnectionLogOption:getEndpointConnectionLogOption
export function ec2clientvpn_getEndpointConnectionLogOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroup = "";
  out.cloudwatchLogStream = "";
  out.enabled = true;
  return out;
}

// aws:ec2clientvpn/getEndpointFilter:getEndpointFilter
export function ec2clientvpn_getEndpointFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

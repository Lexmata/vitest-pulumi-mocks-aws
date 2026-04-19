// GENERATED FILE — do not edit.
// Service: elb   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elb from "./elb.js";

// aws:elb/LoadBalancerAccessLogs:LoadBalancerAccessLogs
export function elb_LoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.bucketPrefix = "";
  out.enabled = true;
  out.interval = 0;
  return out;
}

// aws:elb/LoadBalancerHealthCheck:LoadBalancerHealthCheck
export function elb_LoadBalancerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.interval = 0;
  out.target = "";
  out.timeout = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:elb/LoadBalancerListener:LoadBalancerListener
export function elb_LoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePort = 443;
  out.instanceProtocol = "";
  out.lbPort = 443;
  out.lbProtocol = "";
  out.sslCertificateId = h.id(ctx, "sslCertificateId");
  return out;
}

// aws:elb/LoadBalancerPolicyPolicyAttribute:LoadBalancerPolicyPolicyAttribute
export function elb_LoadBalancerPolicyPolicyAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:elb/SslNegotiationPolicyAttribute:SslNegotiationPolicyAttribute
export function elb_SslNegotiationPolicyAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:elb/getLoadBalancerAccessLogs:getLoadBalancerAccessLogs
export function elb_getLoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.bucketPrefix = "";
  out.enabled = true;
  out.interval = 0;
  return out;
}

// aws:elb/getLoadBalancerHealthCheck:getLoadBalancerHealthCheck
export function elb_getLoadBalancerHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.interval = 0;
  out.target = "";
  out.timeout = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:elb/getLoadBalancerListener:getLoadBalancerListener
export function elb_getLoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePort = 443;
  out.instanceProtocol = "";
  out.lbPort = 443;
  out.lbProtocol = "";
  out.sslCertificateId = h.id(ctx, "sslCertificateId");
  return out;
}

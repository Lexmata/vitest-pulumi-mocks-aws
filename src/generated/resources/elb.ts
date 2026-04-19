// GENERATED FILE — do not edit.
// Service: elb   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elb from "../types/elb.js";

// aws:elb/appCookieStickinessPolicy:AppCookieStickinessPolicy
export function AppCookieStickinessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieName = (i.cookieName !== undefined ? i.cookieName : "");
  out.lbPort = (i.lbPort !== undefined ? i.lbPort : 443);
  out.loadBalancer = (i.loadBalancer !== undefined ? i.loadBalancer : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:elb/attachment:Attachment
export function Attachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.elb = (i.elb !== undefined ? i.elb : "");
  out.instance = (i.instance !== undefined ? i.instance : "");
  return out;
}

// aws:elb/listenerPolicy:ListenerPolicy
export function ListenerPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.loadBalancerName = (i.loadBalancerName !== undefined ? i.loadBalancerName : "");
  out.loadBalancerPort = (i.loadBalancerPort !== undefined ? i.loadBalancerPort : 443);
  out.policyNames = (i.policyNames !== undefined ? i.policyNames : (depth > 4 ? [] : [""]));
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  return out;
}

// aws:elb/loadBalancer:LoadBalancer
export function LoadBalancer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (i.accessLogs !== undefined ? i.accessLogs : (depth > 4 ? {} : T_elb.elb_LoadBalancerAccessLogs(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.connectionDraining = (i.connectionDraining !== undefined ? i.connectionDraining : false);
  out.connectionDrainingTimeout = (i.connectionDrainingTimeout !== undefined ? i.connectionDrainingTimeout : 30);
  out.crossZoneLoadBalancing = (i.crossZoneLoadBalancing !== undefined ? i.crossZoneLoadBalancing : false);
  out.desyncMitigationMode = (i.desyncMitigationMode !== undefined ? i.desyncMitigationMode : "");
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.healthCheck = (i.healthCheck !== undefined ? i.healthCheck : (depth > 4 ? {} : T_elb.elb_LoadBalancerHealthCheck(ctx, depth + 1)));
  out.idleTimeout = (i.idleTimeout !== undefined ? i.idleTimeout : 30);
  out.instances = (i.instances !== undefined ? i.instances : (depth > 4 ? [] : [""]));
  out.internal = (i.internal !== undefined ? i.internal : false);
  out.listeners = (i.listeners !== undefined ? i.listeners : (depth > 4 ? [] : [(depth > 4 ? {} : T_elb.elb_LoadBalancerListener(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.sourceSecurityGroup = (i.sourceSecurityGroup !== undefined ? i.sourceSecurityGroup : "");
  out.sourceSecurityGroupId = h.id(ctx, "sourceSecurityGroupId");
  out.subnets = (i.subnets !== undefined ? i.subnets : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:elb/loadBalancerBackendServerPolicy:LoadBalancerBackendServerPolicy
export function LoadBalancerBackendServerPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePort = (i.instancePort !== undefined ? i.instancePort : 443);
  out.loadBalancerName = (i.loadBalancerName !== undefined ? i.loadBalancerName : "");
  out.policyNames = (i.policyNames !== undefined ? i.policyNames : (depth > 4 ? [] : [""]));
  return out;
}

// aws:elb/loadBalancerCookieStickinessPolicy:LoadBalancerCookieStickinessPolicy
export function LoadBalancerCookieStickinessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieExpirationPeriod = (i.cookieExpirationPeriod !== undefined ? i.cookieExpirationPeriod : 0);
  out.lbPort = (i.lbPort !== undefined ? i.lbPort : 443);
  out.loadBalancer = (i.loadBalancer !== undefined ? i.loadBalancer : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:elb/loadBalancerPolicy:LoadBalancerPolicy
export function LoadBalancerPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.loadBalancerName = (i.loadBalancerName !== undefined ? i.loadBalancerName : "");
  out.policyAttributes = (i.policyAttributes !== undefined ? i.policyAttributes : (depth > 4 ? [] : [(depth > 4 ? {} : T_elb.elb_LoadBalancerPolicyPolicyAttribute(ctx, depth + 1))]));
  out.policyName = (i.policyName !== undefined ? i.policyName : "");
  out.policyTypeName = (i.policyTypeName !== undefined ? i.policyTypeName : "");
  return out;
}

// aws:elb/sslNegotiationPolicy:SslNegotiationPolicy
export function SslNegotiationPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (i.attributes !== undefined ? i.attributes : (depth > 4 ? [] : [(depth > 4 ? {} : T_elb.elb_SslNegotiationPolicyAttribute(ctx, depth + 1))]));
  out.lbPort = (i.lbPort !== undefined ? i.lbPort : 443);
  out.loadBalancer = (i.loadBalancer !== undefined ? i.loadBalancer : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  return out;
}

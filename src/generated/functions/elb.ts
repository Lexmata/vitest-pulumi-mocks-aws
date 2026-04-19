// GENERATED FILE — do not edit.
// Service: elb   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elb from "../types/elb.js";

// aws:elb/getHostedZoneId:getHostedZoneId
export function getHostedZoneId(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

// aws:elb/getLoadBalancer:getLoadBalancer
export function getLoadBalancer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (depth > 4 ? {} : T_elb.elb_getLoadBalancerAccessLogs(ctx, depth + 1));
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.connectionDraining = false;
  out.connectionDrainingTimeout = 30;
  out.crossZoneLoadBalancing = false;
  out.desyncMitigationMode = "";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.healthCheck = (depth > 4 ? {} : T_elb.elb_getLoadBalancerHealthCheck(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.idleTimeout = 30;
  out.instances = (depth > 4 ? [] : [""]);
  out.internal = false;
  out.listeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_elb.elb_getLoadBalancerListener(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.sourceSecurityGroup = "";
  out.sourceSecurityGroupId = h.id(ctx, "sourceSecurityGroupId");
  out.subnets = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:elb/getServiceAccount:getServiceAccount
export function getServiceAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

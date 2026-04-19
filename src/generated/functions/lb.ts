// GENERATED FILE — do not edit.
// Service: lb   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lb from "../types/lb.js";

// aws:lb/getHostedZoneId:getHostedZoneId
export function getHostedZoneId(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.loadBalancerType = (i.loadBalancerType !== undefined ? i.loadBalancerType : "");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

// aws:lb/getLbs:getLbs
export function getLbs(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:lb/getListener:getListener
export function getListener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alpnPolicy = "";
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.certificateArn = h.arn(ctx);
  out.defaultActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultAction(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.loadBalancerArn = (i.loadBalancerArn !== undefined ? i.loadBalancerArn : h.arn(ctx));
  out.mutualAuthentications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerMutualAuthentication(ctx, depth + 1))]);
  out.port = (i.port !== undefined ? i.port : 443);
  out.protocol = "";
  out.sslPolicy = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:lb/getListenerRule:getListenerRule
export function getListenerRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerRuleAction(ctx, depth + 1))]));
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.conditions = (i.conditions !== undefined ? i.conditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerRuleCondition(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.listenerArn = (i.listenerArn !== undefined ? i.listenerArn : h.arn(ctx));
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.tags = {};
  return out;
}

// aws:lb/getLoadBalancer:getLoadBalancer
export function getLoadBalancer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (depth > 4 ? {} : T_lb.lb_getLoadBalancerAccessLogs(ctx, depth + 1));
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.arnSuffix = "";
  out.clientKeepAlive = 0;
  out.connectionLogs = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getLoadBalancerConnectionLog(ctx, depth + 1))]);
  out.customerOwnedIpv4Pool = "";
  out.desyncMitigationMode = "";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dnsRecordClientRoutingPolicy = "";
  out.dropInvalidHeaderFields = false;
  out.enableCrossZoneLoadBalancing = true;
  out.enableDeletionProtection = true;
  out.enableHttp2 = true;
  out.enableTlsVersionAndCipherSuiteHeaders = true;
  out.enableWafFailOpen = true;
  out.enableXffClientPort = true;
  out.enableZonalShift = true;
  out.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic = "";
  out.id = h.id(ctx, "id");
  out.idleTimeout = 30;
  out.internal = false;
  out.ipAddressType = "";
  out.ipamPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getLoadBalancerIpamPool(ctx, depth + 1))]);
  out.loadBalancerType = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.preserveHostHeader = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getLoadBalancerSubnetMapping(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.xffHeaderProcessingMode = "";
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:lb/getTargetGroup:getTargetGroup
export function getTargetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.arnSuffix = "";
  out.connectionTermination = false;
  out.deregistrationDelay = "";
  out.healthCheck = (depth > 4 ? {} : T_lb.lb_getTargetGroupHealthCheck(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.lambdaMultiValueHeadersEnabled = false;
  out.loadBalancerArns = (depth > 4 ? [] : [""]);
  out.loadBalancingAlgorithmType = "";
  out.loadBalancingAnomalyMitigation = (i.loadBalancingAnomalyMitigation !== undefined ? i.loadBalancingAnomalyMitigation : "");
  out.loadBalancingCrossZoneEnabled = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.port = 443;
  out.preserveClientIp = "";
  out.protocol = "";
  out.protocolVersion = "";
  out.proxyProtocolV2 = false;
  out.slowStart = 0;
  out.stickiness = (depth > 4 ? {} : T_lb.lb_getTargetGroupStickiness(ctx, depth + 1));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.targetType = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:lb/getTrustStore:getTrustStore
export function getTrustStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

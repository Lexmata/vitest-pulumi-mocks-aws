// GENERATED FILE — do not edit.
// Service: lb   (67 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lb from "./lb.js";

// aws:lb/ListenerDefaultAction:ListenerDefaultAction
export function lb_ListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognito = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionAuthenticateCognito(ctx, depth + 1));
  out.authenticateOidc = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionAuthenticateOidc(ctx, depth + 1));
  out.fixedResponse = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionForward(ctx, depth + 1));
  out.order = 0;
  out.redirect = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionRedirect(ctx, depth + 1));
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:lb/ListenerDefaultActionAuthenticateCognito:ListenerDefaultActionAuthenticateCognito
export function lb_ListenerDefaultActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.userPoolArn = h.arn(ctx);
  out.userPoolClientId = h.id(ctx, "userPoolClientId");
  out.userPoolDomain = h.endpoint(ctx, "userPoolDomain");
  return out;
}

// aws:lb/ListenerDefaultActionAuthenticateOidc:ListenerDefaultActionAuthenticateOidc
export function lb_ListenerDefaultActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:lb/ListenerDefaultActionFixedResponse:ListenerDefaultActionFixedResponse
export function lb_ListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:lb/ListenerDefaultActionForward:ListenerDefaultActionForward
export function lb_ListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickiness = (depth > 4 ? {} : T_lb.lb_ListenerDefaultActionForwardStickiness(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_ListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:lb/ListenerDefaultActionForwardStickiness:ListenerDefaultActionForwardStickiness
export function lb_ListenerDefaultActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:lb/ListenerDefaultActionForwardTargetGroup:ListenerDefaultActionForwardTargetGroup
export function lb_ListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:lb/ListenerDefaultActionRedirect:ListenerDefaultActionRedirect
export function lb_ListenerDefaultActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.query = "";
  out.statusCode = "";
  return out;
}

// aws:lb/ListenerMutualAuthentication:ListenerMutualAuthentication
export function lb_ListenerMutualAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advertiseTrustStoreCaNames = "";
  out.ignoreClientCertificateExpiry = false;
  out.mode = "";
  out.trustStoreArn = h.arn(ctx);
  return out;
}

// aws:lb/ListenerRuleAction:ListenerRuleAction
export function lb_ListenerRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognito = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionAuthenticateCognito(ctx, depth + 1));
  out.authenticateOidc = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionAuthenticateOidc(ctx, depth + 1));
  out.fixedResponse = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionForward(ctx, depth + 1));
  out.order = 0;
  out.redirect = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionRedirect(ctx, depth + 1));
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:lb/ListenerRuleActionAuthenticateCognito:ListenerRuleActionAuthenticateCognito
export function lb_ListenerRuleActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.userPoolArn = h.arn(ctx);
  out.userPoolClientId = h.id(ctx, "userPoolClientId");
  out.userPoolDomain = h.endpoint(ctx, "userPoolDomain");
  return out;
}

// aws:lb/ListenerRuleActionAuthenticateOidc:ListenerRuleActionAuthenticateOidc
export function lb_ListenerRuleActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:lb/ListenerRuleActionFixedResponse:ListenerRuleActionFixedResponse
export function lb_ListenerRuleActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:lb/ListenerRuleActionForward:ListenerRuleActionForward
export function lb_ListenerRuleActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickiness = (depth > 4 ? {} : T_lb.lb_ListenerRuleActionForwardStickiness(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_ListenerRuleActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:lb/ListenerRuleActionForwardStickiness:ListenerRuleActionForwardStickiness
export function lb_ListenerRuleActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:lb/ListenerRuleActionForwardTargetGroup:ListenerRuleActionForwardTargetGroup
export function lb_ListenerRuleActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:lb/ListenerRuleActionRedirect:ListenerRuleActionRedirect
export function lb_ListenerRuleActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.query = "";
  out.statusCode = "";
  return out;
}

// aws:lb/ListenerRuleCondition:ListenerRuleCondition
export function lb_ListenerRuleCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostHeader = (depth > 4 ? {} : T_lb.lb_ListenerRuleConditionHostHeader(ctx, depth + 1));
  out.httpHeader = (depth > 4 ? {} : T_lb.lb_ListenerRuleConditionHttpHeader(ctx, depth + 1));
  out.httpRequestMethod = (depth > 4 ? {} : T_lb.lb_ListenerRuleConditionHttpRequestMethod(ctx, depth + 1));
  out.pathPattern = (depth > 4 ? {} : T_lb.lb_ListenerRuleConditionPathPattern(ctx, depth + 1));
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_ListenerRuleConditionQueryString(ctx, depth + 1))]);
  out.sourceIp = (depth > 4 ? {} : T_lb.lb_ListenerRuleConditionSourceIp(ctx, depth + 1));
  return out;
}

// aws:lb/ListenerRuleConditionHostHeader:ListenerRuleConditionHostHeader
export function lb_ListenerRuleConditionHostHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/ListenerRuleConditionHttpHeader:ListenerRuleConditionHttpHeader
export function lb_ListenerRuleConditionHttpHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpHeaderName = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/ListenerRuleConditionHttpRequestMethod:ListenerRuleConditionHttpRequestMethod
export function lb_ListenerRuleConditionHttpRequestMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/ListenerRuleConditionPathPattern:ListenerRuleConditionPathPattern
export function lb_ListenerRuleConditionPathPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/ListenerRuleConditionQueryString:ListenerRuleConditionQueryString
export function lb_ListenerRuleConditionQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:lb/ListenerRuleConditionSourceIp:ListenerRuleConditionSourceIp
export function lb_ListenerRuleConditionSourceIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/LoadBalancerAccessLogs:LoadBalancerAccessLogs
export function lb_LoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:lb/LoadBalancerConnectionLogs:LoadBalancerConnectionLogs
export function lb_LoadBalancerConnectionLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:lb/LoadBalancerIpamPools:LoadBalancerIpamPools
export function lb_LoadBalancerIpamPools(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4IpamPoolId = h.id(ctx, "ipv4IpamPoolId");
  return out;
}

// aws:lb/LoadBalancerMinimumLoadBalancerCapacity:LoadBalancerMinimumLoadBalancerCapacity
export function lb_LoadBalancerMinimumLoadBalancerCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityUnits = 0;
  return out;
}

// aws:lb/LoadBalancerSubnetMapping:LoadBalancerSubnetMapping
export function lb_LoadBalancerSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = h.id(ctx, "allocationId");
  out.ipv6Address = "";
  out.outpostId = h.id(ctx, "outpostId");
  out.privateIpv4Address = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:lb/TargetGroupHealthCheck:TargetGroupHealthCheck
export function lb_TargetGroupHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.healthyThreshold = 0;
  out.interval = 0;
  out.matcher = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.timeout = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:lb/TargetGroupStickiness:TargetGroupStickiness
export function lb_TargetGroupStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieDuration = 0;
  out.cookieName = "";
  out.enabled = true;
  out.type = "";
  return out;
}

// aws:lb/TargetGroupTargetFailover:TargetGroupTargetFailover
export function lb_TargetGroupTargetFailover(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDeregistration = "";
  out.onUnhealthy = "";
  return out;
}

// aws:lb/TargetGroupTargetGroupHealth:TargetGroupTargetGroupHealth
export function lb_TargetGroupTargetGroupHealth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsFailover = (depth > 4 ? {} : T_lb.lb_TargetGroupTargetGroupHealthDnsFailover(ctx, depth + 1));
  out.unhealthyStateRouting = (depth > 4 ? {} : T_lb.lb_TargetGroupTargetGroupHealthUnhealthyStateRouting(ctx, depth + 1));
  return out;
}

// aws:lb/TargetGroupTargetGroupHealthDnsFailover:TargetGroupTargetGroupHealthDnsFailover
export function lb_TargetGroupTargetGroupHealthDnsFailover(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumHealthyTargetsCount = "";
  out.minimumHealthyTargetsPercentage = "";
  return out;
}

// aws:lb/TargetGroupTargetGroupHealthUnhealthyStateRouting:TargetGroupTargetGroupHealthUnhealthyStateRouting
export function lb_TargetGroupTargetGroupHealthUnhealthyStateRouting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumHealthyTargetsCount = 1;
  out.minimumHealthyTargetsPercentage = "";
  return out;
}

// aws:lb/TargetGroupTargetHealthState:TargetGroupTargetHealthState
export function lb_TargetGroupTargetHealthState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableUnhealthyConnectionTermination = true;
  out.unhealthyDrainingInterval = 0;
  return out;
}

// aws:lb/getListenerDefaultAction:getListenerDefaultAction
export function lb_getListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognitos = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionAuthenticateCognito(ctx, depth + 1))]);
  out.authenticateOidcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionAuthenticateOidc(ctx, depth + 1))]);
  out.fixedResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionFixedResponse(ctx, depth + 1))]);
  out.forwards = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionForward(ctx, depth + 1))]);
  out.order = 0;
  out.redirects = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionRedirect(ctx, depth + 1))]);
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:lb/getListenerDefaultActionAuthenticateCognito:getListenerDefaultActionAuthenticateCognito
export function lb_getListenerDefaultActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.userPoolArn = h.arn(ctx);
  out.userPoolClientId = h.id(ctx, "userPoolClientId");
  out.userPoolDomain = h.endpoint(ctx, "userPoolDomain");
  return out;
}

// aws:lb/getListenerDefaultActionAuthenticateOidc:getListenerDefaultActionAuthenticateOidc
export function lb_getListenerDefaultActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:lb/getListenerDefaultActionFixedResponse:getListenerDefaultActionFixedResponse
export function lb_getListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:lb/getListenerDefaultActionForward:getListenerDefaultActionForward
export function lb_getListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickinesses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionForwardStickiness(ctx, depth + 1))]);
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:lb/getListenerDefaultActionForwardStickiness:getListenerDefaultActionForwardStickiness
export function lb_getListenerDefaultActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:lb/getListenerDefaultActionForwardTargetGroup:getListenerDefaultActionForwardTargetGroup
export function lb_getListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:lb/getListenerDefaultActionRedirect:getListenerDefaultActionRedirect
export function lb_getListenerDefaultActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.query = "";
  out.statusCode = "";
  return out;
}

// aws:lb/getListenerMutualAuthentication:getListenerMutualAuthentication
export function lb_getListenerMutualAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advertiseTrustStoreCaNames = "";
  out.ignoreClientCertificateExpiry = false;
  out.mode = "";
  out.trustStoreArn = h.arn(ctx);
  return out;
}

// aws:lb/getListenerRuleAction:getListenerRuleAction
export function lb_getListenerRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognito = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionAuthenticateCognito(ctx, depth + 1));
  out.authenticateOidc = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionAuthenticateOidc(ctx, depth + 1));
  out.fixedResponse = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionForward(ctx, depth + 1));
  out.order = 0;
  out.redirect = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionRedirect(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:lb/getListenerRuleActionAuthenticateCognito:getListenerRuleActionAuthenticateCognito
export function lb_getListenerRuleActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.userPoolArn = h.arn(ctx);
  out.userPoolClientId = h.id(ctx, "userPoolClientId");
  out.userPoolDomain = h.endpoint(ctx, "userPoolDomain");
  return out;
}

// aws:lb/getListenerRuleActionAuthenticateOidc:getListenerRuleActionAuthenticateOidc
export function lb_getListenerRuleActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.issuer = "";
  out.onUnauthenticatedRequest = "";
  out.scope = "";
  out.sessionCookieName = "";
  out.sessionTimeout = 30;
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:lb/getListenerRuleActionFixedResponse:getListenerRuleActionFixedResponse
export function lb_getListenerRuleActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:lb/getListenerRuleActionForward:getListenerRuleActionForward
export function lb_getListenerRuleActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickiness = (depth > 4 ? {} : T_lb.lb_getListenerRuleActionForwardStickiness(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerRuleActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:lb/getListenerRuleActionForwardStickiness:getListenerRuleActionForwardStickiness
export function lb_getListenerRuleActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:lb/getListenerRuleActionForwardTargetGroup:getListenerRuleActionForwardTargetGroup
export function lb_getListenerRuleActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:lb/getListenerRuleActionRedirect:getListenerRuleActionRedirect
export function lb_getListenerRuleActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.query = "";
  out.statusCode = "";
  return out;
}

// aws:lb/getListenerRuleCondition:getListenerRuleCondition
export function lb_getListenerRuleCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostHeader = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionHostHeader(ctx, depth + 1));
  out.httpHeader = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionHttpHeader(ctx, depth + 1));
  out.httpRequestMethod = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionHttpRequestMethod(ctx, depth + 1));
  out.pathPattern = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionPathPattern(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionQueryString(ctx, depth + 1));
  out.sourceIp = (depth > 4 ? {} : T_lb.lb_getListenerRuleConditionSourceIp(ctx, depth + 1));
  return out;
}

// aws:lb/getListenerRuleConditionHostHeader:getListenerRuleConditionHostHeader
export function lb_getListenerRuleConditionHostHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/getListenerRuleConditionHttpHeader:getListenerRuleConditionHttpHeader
export function lb_getListenerRuleConditionHttpHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpHeaderName = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/getListenerRuleConditionHttpRequestMethod:getListenerRuleConditionHttpRequestMethod
export function lb_getListenerRuleConditionHttpRequestMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/getListenerRuleConditionPathPattern:getListenerRuleConditionPathPattern
export function lb_getListenerRuleConditionPathPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/getListenerRuleConditionQueryString:getListenerRuleConditionQueryString
export function lb_getListenerRuleConditionQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [(depth > 4 ? {} : T_lb.lb_getListenerRuleConditionQueryStringValue(ctx, depth + 1))]);
  return out;
}

// aws:lb/getListenerRuleConditionQueryStringValue:getListenerRuleConditionQueryStringValue
export function lb_getListenerRuleConditionQueryStringValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:lb/getListenerRuleConditionSourceIp:getListenerRuleConditionSourceIp
export function lb_getListenerRuleConditionSourceIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lb/getLoadBalancerAccessLogs:getLoadBalancerAccessLogs
export function lb_getLoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:lb/getLoadBalancerConnectionLog:getLoadBalancerConnectionLog
export function lb_getLoadBalancerConnectionLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:lb/getLoadBalancerIpamPool:getLoadBalancerIpamPool
export function lb_getLoadBalancerIpamPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4IpamPoolId = h.id(ctx, "ipv4IpamPoolId");
  return out;
}

// aws:lb/getLoadBalancerSubnetMapping:getLoadBalancerSubnetMapping
export function lb_getLoadBalancerSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = h.id(ctx, "allocationId");
  out.ipv6Address = "";
  out.outpostId = h.id(ctx, "outpostId");
  out.privateIpv4Address = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:lb/getTargetGroupHealthCheck:getTargetGroupHealthCheck
export function lb_getTargetGroupHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.healthyThreshold = 0;
  out.interval = 0;
  out.matcher = "";
  out.path = "";
  out.port = "";
  out.protocol = "";
  out.timeout = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:lb/getTargetGroupStickiness:getTargetGroupStickiness
export function lb_getTargetGroupStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieDuration = 0;
  out.cookieName = "";
  out.enabled = true;
  out.type = "";
  return out;
}

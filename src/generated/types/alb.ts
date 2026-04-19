// GENERATED FILE — do not edit.
// Service: alb   (51 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_alb from "./alb.js";

// aws:alb/ListenerDefaultAction:ListenerDefaultAction
export function alb_ListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognito = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionAuthenticateCognito(ctx, depth + 1));
  out.authenticateOidc = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionAuthenticateOidc(ctx, depth + 1));
  out.fixedResponse = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionForward(ctx, depth + 1));
  out.order = 0;
  out.redirect = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionRedirect(ctx, depth + 1));
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:alb/ListenerDefaultActionAuthenticateCognito:ListenerDefaultActionAuthenticateCognito
export function alb_ListenerDefaultActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerDefaultActionAuthenticateOidc:ListenerDefaultActionAuthenticateOidc
export function alb_ListenerDefaultActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerDefaultActionFixedResponse:ListenerDefaultActionFixedResponse
export function alb_ListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:alb/ListenerDefaultActionForward:ListenerDefaultActionForward
export function alb_ListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickiness = (depth > 4 ? {} : T_alb.alb_ListenerDefaultActionForwardStickiness(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:alb/ListenerDefaultActionForwardStickiness:ListenerDefaultActionForwardStickiness
export function alb_ListenerDefaultActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:alb/ListenerDefaultActionForwardTargetGroup:ListenerDefaultActionForwardTargetGroup
export function alb_ListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:alb/ListenerDefaultActionRedirect:ListenerDefaultActionRedirect
export function alb_ListenerDefaultActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerMutualAuthentication:ListenerMutualAuthentication
export function alb_ListenerMutualAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advertiseTrustStoreCaNames = "";
  out.ignoreClientCertificateExpiry = false;
  out.mode = "";
  out.trustStoreArn = h.arn(ctx);
  return out;
}

// aws:alb/ListenerRuleAction:ListenerRuleAction
export function alb_ListenerRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognito = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionAuthenticateCognito(ctx, depth + 1));
  out.authenticateOidc = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionAuthenticateOidc(ctx, depth + 1));
  out.fixedResponse = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionForward(ctx, depth + 1));
  out.order = 0;
  out.redirect = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionRedirect(ctx, depth + 1));
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:alb/ListenerRuleActionAuthenticateCognito:ListenerRuleActionAuthenticateCognito
export function alb_ListenerRuleActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerRuleActionAuthenticateOidc:ListenerRuleActionAuthenticateOidc
export function alb_ListenerRuleActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerRuleActionFixedResponse:ListenerRuleActionFixedResponse
export function alb_ListenerRuleActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:alb/ListenerRuleActionForward:ListenerRuleActionForward
export function alb_ListenerRuleActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickiness = (depth > 4 ? {} : T_alb.alb_ListenerRuleActionForwardStickiness(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerRuleActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:alb/ListenerRuleActionForwardStickiness:ListenerRuleActionForwardStickiness
export function alb_ListenerRuleActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:alb/ListenerRuleActionForwardTargetGroup:ListenerRuleActionForwardTargetGroup
export function alb_ListenerRuleActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:alb/ListenerRuleActionRedirect:ListenerRuleActionRedirect
export function alb_ListenerRuleActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/ListenerRuleCondition:ListenerRuleCondition
export function alb_ListenerRuleCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostHeader = (depth > 4 ? {} : T_alb.alb_ListenerRuleConditionHostHeader(ctx, depth + 1));
  out.httpHeader = (depth > 4 ? {} : T_alb.alb_ListenerRuleConditionHttpHeader(ctx, depth + 1));
  out.httpRequestMethod = (depth > 4 ? {} : T_alb.alb_ListenerRuleConditionHttpRequestMethod(ctx, depth + 1));
  out.pathPattern = (depth > 4 ? {} : T_alb.alb_ListenerRuleConditionPathPattern(ctx, depth + 1));
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerRuleConditionQueryString(ctx, depth + 1))]);
  out.sourceIp = (depth > 4 ? {} : T_alb.alb_ListenerRuleConditionSourceIp(ctx, depth + 1));
  return out;
}

// aws:alb/ListenerRuleConditionHostHeader:ListenerRuleConditionHostHeader
export function alb_ListenerRuleConditionHostHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:alb/ListenerRuleConditionHttpHeader:ListenerRuleConditionHttpHeader
export function alb_ListenerRuleConditionHttpHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpHeaderName = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:alb/ListenerRuleConditionHttpRequestMethod:ListenerRuleConditionHttpRequestMethod
export function alb_ListenerRuleConditionHttpRequestMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:alb/ListenerRuleConditionPathPattern:ListenerRuleConditionPathPattern
export function alb_ListenerRuleConditionPathPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:alb/ListenerRuleConditionQueryString:ListenerRuleConditionQueryString
export function alb_ListenerRuleConditionQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:alb/ListenerRuleConditionSourceIp:ListenerRuleConditionSourceIp
export function alb_ListenerRuleConditionSourceIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:alb/LoadBalancerAccessLogs:LoadBalancerAccessLogs
export function alb_LoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:alb/LoadBalancerConnectionLogs:LoadBalancerConnectionLogs
export function alb_LoadBalancerConnectionLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:alb/LoadBalancerIpamPools:LoadBalancerIpamPools
export function alb_LoadBalancerIpamPools(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4IpamPoolId = h.id(ctx, "ipv4IpamPoolId");
  return out;
}

// aws:alb/LoadBalancerMinimumLoadBalancerCapacity:LoadBalancerMinimumLoadBalancerCapacity
export function alb_LoadBalancerMinimumLoadBalancerCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityUnits = 0;
  return out;
}

// aws:alb/LoadBalancerSubnetMapping:LoadBalancerSubnetMapping
export function alb_LoadBalancerSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/TargetGroupHealthCheck:TargetGroupHealthCheck
export function alb_TargetGroupHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/TargetGroupStickiness:TargetGroupStickiness
export function alb_TargetGroupStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieDuration = 0;
  out.cookieName = "";
  out.enabled = true;
  out.type = "";
  return out;
}

// aws:alb/TargetGroupTargetFailover:TargetGroupTargetFailover
export function alb_TargetGroupTargetFailover(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDeregistration = "";
  out.onUnhealthy = "";
  return out;
}

// aws:alb/TargetGroupTargetGroupHealth:TargetGroupTargetGroupHealth
export function alb_TargetGroupTargetGroupHealth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsFailover = (depth > 4 ? {} : T_alb.alb_TargetGroupTargetGroupHealthDnsFailover(ctx, depth + 1));
  out.unhealthyStateRouting = (depth > 4 ? {} : T_alb.alb_TargetGroupTargetGroupHealthUnhealthyStateRouting(ctx, depth + 1));
  return out;
}

// aws:alb/TargetGroupTargetGroupHealthDnsFailover:TargetGroupTargetGroupHealthDnsFailover
export function alb_TargetGroupTargetGroupHealthDnsFailover(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumHealthyTargetsCount = "";
  out.minimumHealthyTargetsPercentage = "";
  return out;
}

// aws:alb/TargetGroupTargetGroupHealthUnhealthyStateRouting:TargetGroupTargetGroupHealthUnhealthyStateRouting
export function alb_TargetGroupTargetGroupHealthUnhealthyStateRouting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumHealthyTargetsCount = 1;
  out.minimumHealthyTargetsPercentage = "";
  return out;
}

// aws:alb/TargetGroupTargetHealthState:TargetGroupTargetHealthState
export function alb_TargetGroupTargetHealthState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableUnhealthyConnectionTermination = true;
  out.unhealthyDrainingInterval = 0;
  return out;
}

// aws:alb/getListenerDefaultAction:getListenerDefaultAction
export function alb_getListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticateCognitos = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionAuthenticateCognito(ctx, depth + 1))]);
  out.authenticateOidcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionAuthenticateOidc(ctx, depth + 1))]);
  out.fixedResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionFixedResponse(ctx, depth + 1))]);
  out.forwards = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionForward(ctx, depth + 1))]);
  out.order = 0;
  out.redirects = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionRedirect(ctx, depth + 1))]);
  out.targetGroupArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:alb/getListenerDefaultActionAuthenticateCognito:getListenerDefaultActionAuthenticateCognito
export function alb_getListenerDefaultActionAuthenticateCognito(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/getListenerDefaultActionAuthenticateOidc:getListenerDefaultActionAuthenticateOidc
export function alb_getListenerDefaultActionAuthenticateOidc(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/getListenerDefaultActionFixedResponse:getListenerDefaultActionFixedResponse
export function alb_getListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.messageBody = "";
  out.statusCode = "";
  return out;
}

// aws:alb/getListenerDefaultActionForward:getListenerDefaultActionForward
export function alb_getListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stickinesses = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionForwardStickiness(ctx, depth + 1))]);
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_getListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:alb/getListenerDefaultActionForwardStickiness:getListenerDefaultActionForwardStickiness
export function alb_getListenerDefaultActionForwardStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = 0;
  out.enabled = true;
  return out;
}

// aws:alb/getListenerDefaultActionForwardTargetGroup:getListenerDefaultActionForwardTargetGroup
export function alb_getListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.weight = 0;
  return out;
}

// aws:alb/getListenerDefaultActionRedirect:getListenerDefaultActionRedirect
export function alb_getListenerDefaultActionRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/getListenerMutualAuthentication:getListenerMutualAuthentication
export function alb_getListenerMutualAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advertiseTrustStoreCaNames = "";
  out.ignoreClientCertificateExpiry = false;
  out.mode = "";
  out.trustStoreArn = h.arn(ctx);
  return out;
}

// aws:alb/getLoadBalancerAccessLogs:getLoadBalancerAccessLogs
export function alb_getLoadBalancerAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:alb/getLoadBalancerConnectionLog:getLoadBalancerConnectionLog
export function alb_getLoadBalancerConnectionLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:alb/getLoadBalancerIpamPool:getLoadBalancerIpamPool
export function alb_getLoadBalancerIpamPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4IpamPoolId = h.id(ctx, "ipv4IpamPoolId");
  return out;
}

// aws:alb/getLoadBalancerSubnetMapping:getLoadBalancerSubnetMapping
export function alb_getLoadBalancerSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/getTargetGroupHealthCheck:getTargetGroupHealthCheck
export function alb_getTargetGroupHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:alb/getTargetGroupStickiness:getTargetGroupStickiness
export function alb_getTargetGroupStickiness(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieDuration = 0;
  out.cookieName = "";
  out.enabled = true;
  out.type = "";
  return out;
}

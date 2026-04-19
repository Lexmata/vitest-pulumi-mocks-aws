// GENERATED FILE — do not edit.
// Service: vpclattice   (33 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpclattice from "./vpclattice.js";

// aws:vpclattice/ListenerDefaultAction:ListenerDefaultAction
export function vpclattice_ListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fixedResponse = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerDefaultActionFixedResponse(ctx, depth + 1));
  out.forwards = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ListenerDefaultActionForward(ctx, depth + 1))]);
  return out;
}

// aws:vpclattice/ListenerDefaultActionFixedResponse:ListenerDefaultActionFixedResponse
export function vpclattice_ListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statusCode = 0;
  return out;
}

// aws:vpclattice/ListenerDefaultActionForward:ListenerDefaultActionForward
export function vpclattice_ListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:vpclattice/ListenerDefaultActionForwardTargetGroup:ListenerDefaultActionForwardTargetGroup
export function vpclattice_ListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroupIdentifier = "";
  out.weight = 0;
  return out;
}

// aws:vpclattice/ListenerRuleAction:ListenerRuleAction
export function vpclattice_ListenerRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fixedResponse = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleActionFixedResponse(ctx, depth + 1));
  out.forward = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleActionForward(ctx, depth + 1));
  return out;
}

// aws:vpclattice/ListenerRuleActionFixedResponse:ListenerRuleActionFixedResponse
export function vpclattice_ListenerRuleActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statusCode = 0;
  return out;
}

// aws:vpclattice/ListenerRuleActionForward:ListenerRuleActionForward
export function vpclattice_ListenerRuleActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:vpclattice/ListenerRuleActionForwardTargetGroup:ListenerRuleActionForwardTargetGroup
export function vpclattice_ListenerRuleActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroupIdentifier = "";
  out.weight = 0;
  return out;
}

// aws:vpclattice/ListenerRuleMatch:ListenerRuleMatch
export function vpclattice_ListenerRuleMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpMatch = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatchHttpMatch(ctx, depth + 1));
  return out;
}

// aws:vpclattice/ListenerRuleMatchHttpMatch:ListenerRuleMatchHttpMatch
export function vpclattice_ListenerRuleMatchHttpMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerMatches = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatchHttpMatchHeaderMatch(ctx, depth + 1))]);
  out.method = "";
  out.pathMatch = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatchHttpMatchPathMatch(ctx, depth + 1));
  return out;
}

// aws:vpclattice/ListenerRuleMatchHttpMatchHeaderMatch:ListenerRuleMatchHttpMatchHeaderMatch
export function vpclattice_ListenerRuleMatchHttpMatchHeaderMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.caseSensitive = false;
  out.match = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:vpclattice/ListenerRuleMatchHttpMatchHeaderMatchMatch:ListenerRuleMatchHttpMatchHeaderMatchMatch
export function vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contains = "";
  out.exact = "";
  out.prefix = "";
  return out;
}

// aws:vpclattice/ListenerRuleMatchHttpMatchPathMatch:ListenerRuleMatchHttpMatchPathMatch
export function vpclattice_ListenerRuleMatchHttpMatchPathMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.caseSensitive = false;
  out.match = (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch(ctx, depth + 1));
  return out;
}

// aws:vpclattice/ListenerRuleMatchHttpMatchPathMatchMatch:ListenerRuleMatchHttpMatchPathMatchMatch
export function vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exact = "";
  out.prefix = "";
  return out;
}

// aws:vpclattice/ResourceConfigurationResourceConfigurationDefinition:ResourceConfigurationResourceConfigurationDefinition
export function vpclattice_ResourceConfigurationResourceConfigurationDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arnResource = (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceConfigurationResourceConfigurationDefinitionArnResource(ctx, depth + 1));
  out.dnsResource = (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceConfigurationResourceConfigurationDefinitionDnsResource(ctx, depth + 1));
  out.ipResource = (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceConfigurationResourceConfigurationDefinitionIpResource(ctx, depth + 1));
  return out;
}

// aws:vpclattice/ResourceConfigurationResourceConfigurationDefinitionArnResource:ResourceConfigurationResourceConfigurationDefinitionArnResource
export function vpclattice_ResourceConfigurationResourceConfigurationDefinitionArnResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:vpclattice/ResourceConfigurationResourceConfigurationDefinitionDnsResource:ResourceConfigurationResourceConfigurationDefinitionDnsResource
export function vpclattice_ResourceConfigurationResourceConfigurationDefinitionDnsResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.ipAddressType = "";
  return out;
}

// aws:vpclattice/ResourceConfigurationResourceConfigurationDefinitionIpResource:ResourceConfigurationResourceConfigurationDefinitionIpResource
export function vpclattice_ResourceConfigurationResourceConfigurationDefinitionIpResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddress = "10.0.0.10";
  return out;
}

// aws:vpclattice/ResourceConfigurationTimeouts:ResourceConfigurationTimeouts
export function vpclattice_ResourceConfigurationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:vpclattice/ResourceGatewayTimeouts:ResourceGatewayTimeouts
export function vpclattice_ResourceGatewayTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:vpclattice/ServiceDnsEntry:ServiceDnsEntry
export function vpclattice_ServiceDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:vpclattice/ServiceNetworkResourceAssociationDnsEntry:ServiceNetworkResourceAssociationDnsEntry
export function vpclattice_ServiceNetworkResourceAssociationDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:vpclattice/ServiceNetworkResourceAssociationTimeouts:ServiceNetworkResourceAssociationTimeouts
export function vpclattice_ServiceNetworkResourceAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpclattice/ServiceNetworkServiceAssociationDnsEntry:ServiceNetworkServiceAssociationDnsEntry
export function vpclattice_ServiceNetworkServiceAssociationDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:vpclattice/TargetGroupAttachmentTarget:TargetGroupAttachmentTarget
export function vpclattice_TargetGroupAttachmentTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.port = 443;
  return out;
}

// aws:vpclattice/TargetGroupConfig:TargetGroupConfig
export function vpclattice_TargetGroupConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthCheck = (depth > 4 ? {} : T_vpclattice.vpclattice_TargetGroupConfigHealthCheck(ctx, depth + 1));
  out.ipAddressType = "";
  out.lambdaEventStructureVersion = "";
  out.port = 443;
  out.protocol = "";
  out.protocolVersion = "";
  out.vpcIdentifier = "";
  return out;
}

// aws:vpclattice/TargetGroupConfigHealthCheck:TargetGroupConfigHealthCheck
export function vpclattice_TargetGroupConfigHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.healthCheckIntervalSeconds = 0;
  out.healthCheckTimeoutSeconds = 30;
  out.healthyThresholdCount = 1;
  out.matcher = (depth > 4 ? {} : T_vpclattice.vpclattice_TargetGroupConfigHealthCheckMatcher(ctx, depth + 1));
  out.path = "";
  out.port = 443;
  out.protocol = "";
  out.protocolVersion = "";
  out.unhealthyThresholdCount = 1;
  return out;
}

// aws:vpclattice/TargetGroupConfigHealthCheckMatcher:TargetGroupConfigHealthCheckMatcher
export function vpclattice_TargetGroupConfigHealthCheckMatcher(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:vpclattice/getListenerDefaultAction:getListenerDefaultAction
export function vpclattice_getListenerDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fixedResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_getListenerDefaultActionFixedResponse(ctx, depth + 1))]);
  out.forwards = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_getListenerDefaultActionForward(ctx, depth + 1))]);
  return out;
}

// aws:vpclattice/getListenerDefaultActionFixedResponse:getListenerDefaultActionFixedResponse
export function vpclattice_getListenerDefaultActionFixedResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statusCode = 0;
  return out;
}

// aws:vpclattice/getListenerDefaultActionForward:getListenerDefaultActionForward
export function vpclattice_getListenerDefaultActionForward(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_getListenerDefaultActionForwardTargetGroup(ctx, depth + 1))]);
  return out;
}

// aws:vpclattice/getListenerDefaultActionForwardTargetGroup:getListenerDefaultActionForwardTargetGroup
export function vpclattice_getListenerDefaultActionForwardTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetGroupIdentifier = "";
  out.weight = 0;
  return out;
}

// aws:vpclattice/getServiceDnsEntry:getServiceDnsEntry
export function vpclattice_getServiceDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

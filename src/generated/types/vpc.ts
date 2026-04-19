// GENERATED FILE — do not edit.
// Service: vpc   (13 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpc from "./vpc.js";

// aws:vpc/EndpointServicePrivateDnsVerificationTimeouts:EndpointServicePrivateDnsVerificationTimeouts
export function vpc_EndpointServicePrivateDnsVerificationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:vpc/RouteServerEndpointTimeouts:RouteServerEndpointTimeouts
export function vpc_RouteServerEndpointTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpc/RouteServerPeerBgpOptions:RouteServerPeerBgpOptions
export function vpc_RouteServerPeerBgpOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.peerAsn = 0;
  out.peerLivenessDetection = "";
  return out;
}

// aws:vpc/RouteServerPeerTimeouts:RouteServerPeerTimeouts
export function vpc_RouteServerPeerTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpc/RouteServerPropagationTimeouts:RouteServerPropagationTimeouts
export function vpc_RouteServerPropagationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpc/RouteServerTimeouts:RouteServerTimeouts
export function vpc_RouteServerTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:vpc/RouteServerVpcAssociationTimeouts:RouteServerVpcAssociationTimeouts
export function vpc_RouteServerVpcAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpc/SecurityGroupVpcAssociationTimeouts:SecurityGroupVpcAssociationTimeouts
export function vpc_SecurityGroupVpcAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:vpc/getSecurityGroupRuleFilter:getSecurityGroupRuleFilter
export function vpc_getSecurityGroupRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:vpc/getSecurityGroupRulesFilter:getSecurityGroupRulesFilter
export function vpc_getSecurityGroupRulesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:vpc/getVpcEndpointAssociationsAssociation:getVpcEndpointAssociationsAssociation
export function vpc_getVpcEndpointAssociationsAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associatedResourceAccessibility = "";
  out.associatedResourceArn = h.arn(ctx);
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpc.vpc_getVpcEndpointAssociationsAssociationDnsEntry(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.privateDnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpc.vpc_getVpcEndpointAssociationsAssociationPrivateDnsEntry(ctx, depth + 1))]);
  out.resourceConfigurationGroupArn = h.arn(ctx);
  out.serviceNetworkArn = h.arn(ctx);
  out.serviceNetworkName = "";
  out.tags = {};
  return out;
}

// aws:vpc/getVpcEndpointAssociationsAssociationDnsEntry:getVpcEndpointAssociationsAssociationDnsEntry
export function vpc_getVpcEndpointAssociationsAssociationDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:vpc/getVpcEndpointAssociationsAssociationPrivateDnsEntry:getVpcEndpointAssociationsAssociationPrivateDnsEntry
export function vpc_getVpcEndpointAssociationsAssociationPrivateDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

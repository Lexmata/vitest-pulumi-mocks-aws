// GENERATED FILE — do not edit.
// Service: vpc   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpc from "../types/vpc.js";

// aws:vpc/endpointPrivateDns:EndpointPrivateDns
export function EndpointPrivateDns(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privateDnsEnabled = (i.privateDnsEnabled !== undefined ? i.privateDnsEnabled : false);
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:vpc/endpointServicePrivateDnsVerification:EndpointServicePrivateDnsVerification
export function EndpointServicePrivateDnsVerification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serviceId = (i.serviceId !== undefined ? i.serviceId : h.id(ctx, "serviceId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_EndpointServicePrivateDnsVerificationTimeouts(ctx, depth + 1)));
  out.waitForVerification = (i.waitForVerification !== undefined ? i.waitForVerification : false);
  return out;
}

// aws:vpc/routeServer:RouteServer
export function RouteServer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = (i.amazonSideAsn !== undefined ? i.amazonSideAsn : 0);
  out.arn = h.arn(ctx);
  out.persistRoutes = (i.persistRoutes !== undefined ? i.persistRoutes : "");
  out.persistRoutesDuration = (i.persistRoutesDuration !== undefined ? i.persistRoutesDuration : 0);
  out.routeServerId = h.id(ctx, "routeServerId");
  out.snsNotificationsEnabled = (i.snsNotificationsEnabled !== undefined ? i.snsNotificationsEnabled : false);
  out.snsTopicArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_RouteServerTimeouts(ctx, depth + 1)));
  return out;
}

// aws:vpc/routeServerEndpoint:RouteServerEndpoint
export function RouteServerEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.eniAddress = "";
  out.eniId = h.id(ctx, "eniId");
  out.routeServerEndpointId = h.id(ctx, "routeServerEndpointId");
  out.routeServerId = (i.routeServerId !== undefined ? i.routeServerId : h.id(ctx, "routeServerId"));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_RouteServerEndpointTimeouts(ctx, depth + 1)));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:vpc/routeServerPeer:RouteServerPeer
export function RouteServerPeer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpOptions = (i.bgpOptions !== undefined ? i.bgpOptions : (depth > 4 ? {} : T_vpc.vpc_RouteServerPeerBgpOptions(ctx, depth + 1)));
  out.endpointEniAddress = "";
  out.endpointEniId = h.id(ctx, "endpointEniId");
  out.peerAddress = (i.peerAddress !== undefined ? i.peerAddress : "");
  out.routeServerEndpointId = (i.routeServerEndpointId !== undefined ? i.routeServerEndpointId : h.id(ctx, "routeServerEndpointId"));
  out.routeServerId = h.id(ctx, "routeServerId");
  out.routeServerPeerId = h.id(ctx, "routeServerPeerId");
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_RouteServerPeerTimeouts(ctx, depth + 1)));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:vpc/routeServerPropagation:RouteServerPropagation
export function RouteServerPropagation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routeServerId = (i.routeServerId !== undefined ? i.routeServerId : h.id(ctx, "routeServerId"));
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_RouteServerPropagationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:vpc/routeServerVpcAssociation:RouteServerVpcAssociation
export function RouteServerVpcAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routeServerId = (i.routeServerId !== undefined ? i.routeServerId : h.id(ctx, "routeServerId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_RouteServerVpcAssociationTimeouts(ctx, depth + 1)));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:vpc/securityGroupEgressRule:SecurityGroupEgressRule
export function SecurityGroupEgressRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidrIpv4 = (i.cidrIpv4 !== undefined ? i.cidrIpv4 : "");
  out.cidrIpv6 = (i.cidrIpv6 !== undefined ? i.cidrIpv6 : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.fromPort = (i.fromPort !== undefined ? i.fromPort : 443);
  out.ipProtocol = (i.ipProtocol !== undefined ? i.ipProtocol : "");
  out.prefixListId = (i.prefixListId !== undefined ? i.prefixListId : h.id(ctx, "prefixListId"));
  out.referencedSecurityGroupId = (i.referencedSecurityGroupId !== undefined ? i.referencedSecurityGroupId : h.id(ctx, "referencedSecurityGroupId"));
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.securityGroupRuleId = h.id(ctx, "securityGroupRuleId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.toPort = (i.toPort !== undefined ? i.toPort : 443);
  return out;
}

// aws:vpc/securityGroupIngressRule:SecurityGroupIngressRule
export function SecurityGroupIngressRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidrIpv4 = (i.cidrIpv4 !== undefined ? i.cidrIpv4 : "");
  out.cidrIpv6 = (i.cidrIpv6 !== undefined ? i.cidrIpv6 : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.fromPort = (i.fromPort !== undefined ? i.fromPort : 443);
  out.ipProtocol = (i.ipProtocol !== undefined ? i.ipProtocol : "");
  out.prefixListId = (i.prefixListId !== undefined ? i.prefixListId : h.id(ctx, "prefixListId"));
  out.referencedSecurityGroupId = (i.referencedSecurityGroupId !== undefined ? i.referencedSecurityGroupId : h.id(ctx, "referencedSecurityGroupId"));
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.securityGroupRuleId = h.id(ctx, "securityGroupRuleId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.toPort = (i.toPort !== undefined ? i.toPort : 443);
  return out;
}

// aws:vpc/securityGroupVpcAssociation:SecurityGroupVpcAssociation
export function SecurityGroupVpcAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.state = "active";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpc.vpc_SecurityGroupVpcAssociationTimeouts(ctx, depth + 1)));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

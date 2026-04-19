// GENERATED FILE — do not edit.
// Service: ec2clientvpn   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2clientvpn from "../types/ec2clientvpn.js";

// aws:ec2clientvpn/authorizationRule:AuthorizationRule
export function AuthorizationRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessGroupId = (i.accessGroupId !== undefined ? i.accessGroupId : h.id(ctx, "accessGroupId"));
  out.authorizeAllGroups = (i.authorizeAllGroups !== undefined ? i.authorizeAllGroups : false);
  out.clientVpnEndpointId = (i.clientVpnEndpointId !== undefined ? i.clientVpnEndpointId : h.id(ctx, "clientVpnEndpointId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.targetNetworkCidr = (i.targetNetworkCidr !== undefined ? i.targetNetworkCidr : "");
  return out;
}

// aws:ec2clientvpn/endpoint:Endpoint
export function Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authenticationOptions = (i.authenticationOptions !== undefined ? i.authenticationOptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_EndpointAuthenticationOption(ctx, depth + 1))]));
  out.clientCidrBlock = (i.clientCidrBlock !== undefined ? i.clientCidrBlock : "");
  out.clientConnectOptions = (i.clientConnectOptions !== undefined ? i.clientConnectOptions : (depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_EndpointClientConnectOptions(ctx, depth + 1)));
  out.clientLoginBannerOptions = (i.clientLoginBannerOptions !== undefined ? i.clientLoginBannerOptions : (depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_EndpointClientLoginBannerOptions(ctx, depth + 1)));
  out.clientRouteEnforcementOptions = (i.clientRouteEnforcementOptions !== undefined ? i.clientRouteEnforcementOptions : (depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_EndpointClientRouteEnforcementOptions(ctx, depth + 1)));
  out.connectionLogOptions = (i.connectionLogOptions !== undefined ? i.connectionLogOptions : (depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_EndpointConnectionLogOptions(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.disconnectOnSessionTimeout = (i.disconnectOnSessionTimeout !== undefined ? i.disconnectOnSessionTimeout : false);
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dnsServers = (i.dnsServers !== undefined ? i.dnsServers : (depth > 4 ? [] : [""]));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.selfServicePortal = (i.selfServicePortal !== undefined ? i.selfServicePortal : "");
  out.selfServicePortalUrl = h.endpoint(ctx, "selfServicePortalUrl");
  out.serverCertificateArn = (i.serverCertificateArn !== undefined ? i.serverCertificateArn : h.arn(ctx));
  out.sessionTimeoutHours = (i.sessionTimeoutHours !== undefined ? i.sessionTimeoutHours : 30);
  out.splitTunnel = (i.splitTunnel !== undefined ? i.splitTunnel : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transportProtocol = (i.transportProtocol !== undefined ? i.transportProtocol : "");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.vpnPort = (i.vpnPort !== undefined ? i.vpnPort : 443);
  return out;
}

// aws:ec2clientvpn/networkAssociation:NetworkAssociation
export function NetworkAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationId = h.id(ctx, "associationId");
  out.clientVpnEndpointId = (i.clientVpnEndpointId !== undefined ? i.clientVpnEndpointId : h.id(ctx, "clientVpnEndpointId"));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2clientvpn/route:Route
export function Route(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientVpnEndpointId = (i.clientVpnEndpointId !== undefined ? i.clientVpnEndpointId : h.id(ctx, "clientVpnEndpointId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.origin = "";
  out.targetVpcSubnetId = (i.targetVpcSubnetId !== undefined ? i.targetVpcSubnetId : h.id(ctx, "targetVpcSubnetId"));
  out.type = "";
  return out;
}

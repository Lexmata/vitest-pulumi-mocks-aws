// GENERATED FILE — do not edit.
// Service: ec2clientvpn   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2clientvpn from "../types/ec2clientvpn.js";

// aws:ec2clientvpn/getEndpoint:getEndpoint
export function getEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authenticationOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointAuthenticationOption(ctx, depth + 1))]);
  out.clientCidrBlock = "";
  out.clientConnectOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointClientConnectOption(ctx, depth + 1))]);
  out.clientLoginBannerOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointClientLoginBannerOption(ctx, depth + 1))]);
  out.clientRouteEnforcementOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointClientRouteEnforcementOption(ctx, depth + 1))]);
  out.clientVpnEndpointId = (i.clientVpnEndpointId !== undefined ? i.clientVpnEndpointId : h.id(ctx, "clientVpnEndpointId"));
  out.connectionLogOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointConnectionLogOption(ctx, depth + 1))]);
  out.description = "";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dnsServers = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2clientvpn.ec2clientvpn_getEndpointFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.selfServicePortal = "";
  out.selfServicePortalUrl = h.endpoint(ctx, "selfServicePortalUrl");
  out.serverCertificateArn = h.arn(ctx);
  out.sessionTimeoutHours = 30;
  out.splitTunnel = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transportProtocol = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpnPort = 443;
  return out;
}

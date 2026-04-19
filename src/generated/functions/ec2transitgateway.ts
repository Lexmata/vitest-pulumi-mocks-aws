// GENERATED FILE — do not edit.
// Service: ec2transitgateway   (16 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2transitgateway from "../types/ec2transitgateway.js";

// aws:ec2transitgateway/getAttachment:getAttachment
export function getAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associationState = "";
  out.associationTransitGatewayRouteTableId = h.id(ctx, "associationTransitGatewayRouteTableId");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getAttachmentFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceOwnerId = h.id(ctx, "resourceOwnerId");
  out.resourceType = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.transitGatewayOwnerId = h.id(ctx, "transitGatewayOwnerId");
  return out;
}

// aws:ec2transitgateway/getAttachments:getAttachments
export function getAttachments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getAttachmentsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2transitgateway/getConnect:getConnect
export function getConnect(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getConnectFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.protocol = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayConnectId = (i.transitGatewayConnectId !== undefined ? i.transitGatewayConnectId : h.id(ctx, "transitGatewayConnectId"));
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.transportAttachmentId = h.id(ctx, "transportAttachmentId");
  return out;
}

// aws:ec2transitgateway/getConnectPeer:getConnectPeer
export function getConnectPeer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpAsn = "";
  out.bgpPeerAddress = "";
  out.bgpTransitGatewayAddresses = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getConnectPeerFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.insideCidrBlocks = (depth > 4 ? [] : [""]);
  out.peerAddress = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayAddress = "";
  out.transitGatewayAttachmentId = h.id(ctx, "transitGatewayAttachmentId");
  out.transitGatewayConnectPeerId = (i.transitGatewayConnectPeerId !== undefined ? i.transitGatewayConnectPeerId : h.id(ctx, "transitGatewayConnectPeerId"));
  return out;
}

// aws:ec2transitgateway/getDirectConnectGatewayAttachment:getDirectConnectGatewayAttachment
export function getDirectConnectGatewayAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getDirectConnectGatewayAttachmentFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  return out;
}

// aws:ec2transitgateway/getMulticastDomain:getMulticastDomain
export function getMulticastDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getMulticastDomainAssociation(ctx, depth + 1))]);
  out.autoAcceptSharedAssociations = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getMulticastDomainFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.igmpv2Support = "";
  out.members = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getMulticastDomainMember(ctx, depth + 1))]);
  out.ownerId = ctx.accountId;
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getMulticastDomainSource(ctx, depth + 1))]);
  out.state = "active";
  out.staticSourcesSupport = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayAttachmentId = h.id(ctx, "transitGatewayAttachmentId");
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.transitGatewayMulticastDomainId = (i.transitGatewayMulticastDomainId !== undefined ? i.transitGatewayMulticastDomainId : h.id(ctx, "transitGatewayMulticastDomainId"));
  return out;
}

// aws:ec2transitgateway/getPeeringAttachment:getPeeringAttachment
export function getPeeringAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getPeeringAttachmentFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.peerAccountId = h.id(ctx, "peerAccountId");
  out.peerRegion = "";
  out.peerTransitGatewayId = h.id(ctx, "peerTransitGatewayId");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  return out;
}

// aws:ec2transitgateway/getPeeringAttachments:getPeeringAttachments
export function getPeeringAttachments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getPeeringAttachmentsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTable:getRouteTable
export function getRouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultAssociationRouteTable = false;
  out.defaultPropagationRouteTable = false;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getRouteTableFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  return out;
}

// aws:ec2transitgateway/getRouteTableAssociations:getRouteTableAssociations
export function getRouteTableAssociations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getRouteTableAssociationsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/getRouteTablePropagations:getRouteTablePropagations
export function getRouteTablePropagations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getRouteTablePropagationsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/getRouteTableRoutes:getRouteTableRoutes
export function getRouteTableRoutes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getRouteTableRoutesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.routes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getRouteTableRoutesRoute(ctx, depth + 1))]);
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/getTransitGateway:getTransitGateway
export function getTransitGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = 0;
  out.arn = h.arn(ctx);
  out.associationDefaultRouteTableId = h.id(ctx, "associationDefaultRouteTableId");
  out.autoAcceptSharedAttachments = "";
  out.defaultRouteTableAssociation = "";
  out.defaultRouteTablePropagation = "";
  out.description = "";
  out.dnsSupport = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getTransitGatewayFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.multicastSupport = "";
  out.ownerId = ctx.accountId;
  out.propagationDefaultRouteTableId = h.id(ctx, "propagationDefaultRouteTableId");
  out.securityGroupReferencingSupport = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayCidrBlocks = (depth > 4 ? [] : [""]);
  out.vpnEcmpSupport = "";
  return out;
}

// aws:ec2transitgateway/getVpcAttachment:getVpcAttachment
export function getVpcAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applianceModeSupport = "";
  out.arn = h.arn(ctx);
  out.dnsSupport = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getVpcAttachmentFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipv6Support = "";
  out.securityGroupReferencingSupport = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcOwnerId = h.id(ctx, "vpcOwnerId");
  return out;
}

// aws:ec2transitgateway/getVpcAttachments:getVpcAttachments
export function getVpcAttachments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getVpcAttachmentsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getVpnAttachment:getVpnAttachment
export function getVpnAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_getVpnAttachmentFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.vpnConnectionId = (i.vpnConnectionId !== undefined ? i.vpnConnectionId : h.id(ctx, "vpnConnectionId"));
  return out;
}

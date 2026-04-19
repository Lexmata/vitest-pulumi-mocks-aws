// GENERATED FILE — do not edit.
// Service: directconnect   (19 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:directconnect/bgpPeer:BgpPeer
export function BgpPeer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.bgpPeerId = h.id(ctx, "bgpPeerId");
  out.bgpStatus = "";
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.virtualInterfaceId = (i.virtualInterfaceId !== undefined ? i.virtualInterfaceId : h.id(ctx, "virtualInterfaceId"));
  return out;
}

// aws:directconnect/connection:Connection
export function Connection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bandwidth = (i.bandwidth !== undefined ? i.bandwidth : "");
  out.encryptionMode = (i.encryptionMode !== undefined ? i.encryptionMode : "");
  out.hasLogicalRedundancy = "";
  out.jumboFrameCapable = false;
  out.location = (i.location !== undefined ? i.location : "");
  out.macsecCapable = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.partnerName = "";
  out.portEncryptionStatus = "";
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.requestMacsec = (i.requestMacsec !== undefined ? i.requestMacsec : false);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vlanId = 0;
  return out;
}

// aws:directconnect/connectionAssociation:ConnectionAssociation
export function ConnectionAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.lagId = (i.lagId !== undefined ? i.lagId : h.id(ctx, "lagId"));
  return out;
}

// aws:directconnect/connectionConfirmation:ConnectionConfirmation
export function ConnectionConfirmation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  return out;
}

// aws:directconnect/gateway:Gateway
export function Gateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = (i.amazonSideAsn !== undefined ? i.amazonSideAsn : "");
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  return out;
}

// aws:directconnect/gatewayAssociation:GatewayAssociation
export function GatewayAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedPrefixes = (i.allowedPrefixes !== undefined ? i.allowedPrefixes : (depth > 4 ? [] : [""]));
  out.associatedGatewayId = (i.associatedGatewayId !== undefined ? i.associatedGatewayId : h.id(ctx, "associatedGatewayId"));
  out.associatedGatewayOwnerAccountId = (i.associatedGatewayOwnerAccountId !== undefined ? i.associatedGatewayOwnerAccountId : h.id(ctx, "associatedGatewayOwnerAccountId"));
  out.associatedGatewayType = "";
  out.dxGatewayAssociationId = h.id(ctx, "dxGatewayAssociationId");
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.dxGatewayOwnerAccountId = h.id(ctx, "dxGatewayOwnerAccountId");
  out.proposalId = (i.proposalId !== undefined ? i.proposalId : h.id(ctx, "proposalId"));
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// aws:directconnect/gatewayAssociationProposal:GatewayAssociationProposal
export function GatewayAssociationProposal(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedPrefixes = (i.allowedPrefixes !== undefined ? i.allowedPrefixes : (depth > 4 ? [] : [""]));
  out.associatedGatewayId = (i.associatedGatewayId !== undefined ? i.associatedGatewayId : h.id(ctx, "associatedGatewayId"));
  out.associatedGatewayOwnerAccountId = h.id(ctx, "associatedGatewayOwnerAccountId");
  out.associatedGatewayType = "";
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.dxGatewayOwnerAccountId = (i.dxGatewayOwnerAccountId !== undefined ? i.dxGatewayOwnerAccountId : h.id(ctx, "dxGatewayOwnerAccountId"));
  return out;
}

// aws:directconnect/hostedConnection:HostedConnection
export function HostedConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsDevice = "";
  out.bandwidth = (i.bandwidth !== undefined ? i.bandwidth : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.hasLogicalRedundancy = "";
  out.jumboFrameCapable = false;
  out.lagId = h.id(ctx, "lagId");
  out.loaIssueTime = "";
  out.location = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = (i.ownerAccountId !== undefined ? i.ownerAccountId : h.id(ctx, "ownerAccountId"));
  out.partnerName = "";
  out.providerName = "";
  out.region = ctx.region;
  out.state = "active";
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

// aws:directconnect/hostedPrivateVirtualInterface:HostedPrivateVirtualInterface
export function HostedPrivateVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.jumboFrameCapable = false;
  out.mtu = (i.mtu !== undefined ? i.mtu : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = (i.ownerAccountId !== undefined ? i.ownerAccountId : h.id(ctx, "ownerAccountId"));
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

// aws:directconnect/hostedPrivateVirtualInterfaceAccepter:HostedPrivateVirtualInterfaceAccepter
export function HostedPrivateVirtualInterfaceAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.virtualInterfaceId = (i.virtualInterfaceId !== undefined ? i.virtualInterfaceId : h.id(ctx, "virtualInterfaceId"));
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// aws:directconnect/hostedPublicVirtualInterface:HostedPublicVirtualInterface
export function HostedPublicVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = (i.ownerAccountId !== undefined ? i.ownerAccountId : h.id(ctx, "ownerAccountId"));
  out.routeFilterPrefixes = (i.routeFilterPrefixes !== undefined ? i.routeFilterPrefixes : (depth > 4 ? [] : [""]));
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

// aws:directconnect/hostedPublicVirtualInterfaceAccepter:HostedPublicVirtualInterfaceAccepter
export function HostedPublicVirtualInterfaceAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.virtualInterfaceId = (i.virtualInterfaceId !== undefined ? i.virtualInterfaceId : h.id(ctx, "virtualInterfaceId"));
  return out;
}

// aws:directconnect/hostedTransitVirtualInterface:HostedTransitVirtualInterface
export function HostedTransitVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.jumboFrameCapable = false;
  out.mtu = (i.mtu !== undefined ? i.mtu : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = (i.ownerAccountId !== undefined ? i.ownerAccountId : h.id(ctx, "ownerAccountId"));
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

// aws:directconnect/hostedTransitVirtualInterfaceAcceptor:HostedTransitVirtualInterfaceAcceptor
export function HostedTransitVirtualInterfaceAcceptor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.virtualInterfaceId = (i.virtualInterfaceId !== undefined ? i.virtualInterfaceId : h.id(ctx, "virtualInterfaceId"));
  return out;
}

// aws:directconnect/linkAggregationGroup:LinkAggregationGroup
export function LinkAggregationGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.connectionsBandwidth = (i.connectionsBandwidth !== undefined ? i.connectionsBandwidth : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.hasLogicalRedundancy = "";
  out.jumboFrameCapable = false;
  out.location = (i.location !== undefined ? i.location : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:directconnect/macsecKeyAssociation:MacsecKeyAssociation
export function MacsecKeyAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cak = (i.cak !== undefined ? i.cak : "");
  out.ckn = (i.ckn !== undefined ? i.ckn : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.secretArn = (i.secretArn !== undefined ? i.secretArn : h.arn(ctx));
  out.startOn = "";
  out.state = "active";
  return out;
}

// aws:directconnect/privateVirtualInterface:PrivateVirtualInterface
export function PrivateVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.jumboFrameCapable = false;
  out.mtu = (i.mtu !== undefined ? i.mtu : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sitelinkEnabled = (i.sitelinkEnabled !== undefined ? i.sitelinkEnabled : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// aws:directconnect/publicVirtualInterface:PublicVirtualInterface
export function PublicVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routeFilterPrefixes = (i.routeFilterPrefixes !== undefined ? i.routeFilterPrefixes : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

// aws:directconnect/transitVirtualInterface:TransitVirtualInterface
export function TransitVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.amazonAddress = (i.amazonAddress !== undefined ? i.amazonAddress : "");
  out.amazonSideAsn = "";
  out.arn = h.arn(ctx);
  out.awsDevice = "";
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : 0);
  out.bgpAuthKey = (i.bgpAuthKey !== undefined ? i.bgpAuthKey : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.customerAddress = (i.customerAddress !== undefined ? i.customerAddress : "");
  out.dxGatewayId = (i.dxGatewayId !== undefined ? i.dxGatewayId : h.id(ctx, "dxGatewayId"));
  out.jumboFrameCapable = false;
  out.mtu = (i.mtu !== undefined ? i.mtu : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sitelinkEnabled = (i.sitelinkEnabled !== undefined ? i.sitelinkEnabled : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vlan = (i.vlan !== undefined ? i.vlan : 0);
  return out;
}

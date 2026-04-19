// GENERATED FILE — do not edit.
// Service: networkmanager   (19 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkmanager from "../types/networkmanager.js";

// aws:networkmanager/attachmentAccepter:AttachmentAccepter
export function AttachmentAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = (i.attachmentId !== undefined ? i.attachmentId : h.id(ctx, "attachmentId"));
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = (i.attachmentType !== undefined ? i.attachmentType : "");
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = h.id(ctx, "coreNetworkId");
  out.edgeLocation = "";
  out.edgeLocations = (depth > 4 ? [] : [""]);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.resourceArn = h.arn(ctx);
  out.segmentName = "";
  out.state = "active";
  return out;
}

// aws:networkmanager/connectAttachment:ConnectAttachment
export function ConnectAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentId = h.id(ctx, "attachmentId");
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = "";
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.edgeLocation = (i.edgeLocation !== undefined ? i.edgeLocation : "");
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? {} : T_networkmanager.networkmanager_ConnectAttachmentOptions(ctx, depth + 1)));
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.resourceArn = h.arn(ctx);
  out.segmentName = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transportAttachmentId = (i.transportAttachmentId !== undefined ? i.transportAttachmentId : h.id(ctx, "transportAttachmentId"));
  return out;
}

// aws:networkmanager/connectPeer:ConnectPeer
export function ConnectPeer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpOptions = (i.bgpOptions !== undefined ? i.bgpOptions : (depth > 4 ? {} : T_networkmanager.networkmanager_ConnectPeerBgpOptions(ctx, depth + 1)));
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_ConnectPeerConfiguration(ctx, depth + 1))]);
  out.connectAttachmentId = (i.connectAttachmentId !== undefined ? i.connectAttachmentId : h.id(ctx, "connectAttachmentId"));
  out.connectPeerId = h.id(ctx, "connectPeerId");
  out.coreNetworkAddress = (i.coreNetworkAddress !== undefined ? i.coreNetworkAddress : "");
  out.coreNetworkId = h.id(ctx, "coreNetworkId");
  out.createdAt = h.timestamp();
  out.edgeLocation = "";
  out.insideCidrBlocks = (i.insideCidrBlocks !== undefined ? i.insideCidrBlocks : (depth > 4 ? [] : [""]));
  out.peerAddress = (i.peerAddress !== undefined ? i.peerAddress : "");
  out.state = "active";
  out.subnetArn = (i.subnetArn !== undefined ? i.subnetArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmanager/connection:Connection
export function Connection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectedDeviceId = (i.connectedDeviceId !== undefined ? i.connectedDeviceId : h.id(ctx, "connectedDeviceId"));
  out.connectedLinkId = (i.connectedLinkId !== undefined ? i.connectedLinkId : h.id(ctx, "connectedLinkId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.linkId = (i.linkId !== undefined ? i.linkId : h.id(ctx, "linkId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmanager/coreNetwork:CoreNetwork
export function CoreNetwork(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.basePolicyDocument = (i.basePolicyDocument !== undefined ? i.basePolicyDocument : "");
  out.basePolicyRegion = (i.basePolicyRegion !== undefined ? i.basePolicyRegion : "");
  out.basePolicyRegions = (i.basePolicyRegions !== undefined ? i.basePolicyRegions : (depth > 4 ? [] : [""]));
  out.createBasePolicy = (i.createBasePolicy !== undefined ? i.createBasePolicy : false);
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.edges = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_CoreNetworkEdge(ctx, depth + 1))]);
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.segments = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_CoreNetworkSegment(ctx, depth + 1))]);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmanager/coreNetworkPolicyAttachment:CoreNetworkPolicyAttachment
export function CoreNetworkPolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.state = "active";
  return out;
}

// aws:networkmanager/customerGatewayAssociation:CustomerGatewayAssociation
export function CustomerGatewayAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerGatewayArn = (i.customerGatewayArn !== undefined ? i.customerGatewayArn : h.arn(ctx));
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.linkId = (i.linkId !== undefined ? i.linkId : h.id(ctx, "linkId"));
  return out;
}

// aws:networkmanager/device:Device
export function Device(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsLocation = (i.awsLocation !== undefined ? i.awsLocation : (depth > 4 ? {} : T_networkmanager.networkmanager_DeviceAwsLocation(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.location = (i.location !== undefined ? i.location : (depth > 4 ? {} : T_networkmanager.networkmanager_DeviceLocation(ctx, depth + 1)));
  out.model = (i.model !== undefined ? i.model : "");
  out.serialNumber = (i.serialNumber !== undefined ? i.serialNumber : "");
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.vendor = (i.vendor !== undefined ? i.vendor : "");
  return out;
}

// aws:networkmanager/dxGatewayAttachment:DxGatewayAttachment
export function DxGatewayAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = "";
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.directConnectGatewayArn = (i.directConnectGatewayArn !== undefined ? i.directConnectGatewayArn : h.arn(ctx));
  out.edgeLocations = (i.edgeLocations !== undefined ? i.edgeLocations : (depth > 4 ? [] : [""]));
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.segmentName = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_networkmanager.networkmanager_DxGatewayAttachmentTimeouts(ctx, depth + 1)));
  return out;
}

// aws:networkmanager/globalNetwork:GlobalNetwork
export function GlobalNetwork(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmanager/link:Link
export function Link(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bandwidth = (i.bandwidth !== undefined ? i.bandwidth : (depth > 4 ? {} : T_networkmanager.networkmanager_LinkBandwidth(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:networkmanager/linkAssociation:LinkAssociation
export function LinkAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.linkId = (i.linkId !== undefined ? i.linkId : h.id(ctx, "linkId"));
  return out;
}

// aws:networkmanager/site:Site
export function Site(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.location = (i.location !== undefined ? i.location : (depth > 4 ? {} : T_networkmanager.networkmanager_SiteLocation(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmanager/siteToSiteVpnAttachment:SiteToSiteVpnAttachment
export function SiteToSiteVpnAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = "";
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.edgeLocation = "";
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.resourceArn = h.arn(ctx);
  out.segmentName = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpnConnectionArn = (i.vpnConnectionArn !== undefined ? i.vpnConnectionArn : h.arn(ctx));
  return out;
}

// aws:networkmanager/transitGatewayConnectPeerAssociation:TransitGatewayConnectPeerAssociation
export function TransitGatewayConnectPeerAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.linkId = (i.linkId !== undefined ? i.linkId : h.id(ctx, "linkId"));
  out.transitGatewayConnectPeerArn = (i.transitGatewayConnectPeerArn !== undefined ? i.transitGatewayConnectPeerArn : h.arn(ctx));
  return out;
}

// aws:networkmanager/transitGatewayPeering:TransitGatewayPeering
export function TransitGatewayPeering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.edgeLocation = "";
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.peeringType = "";
  out.resourceArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayArn = (i.transitGatewayArn !== undefined ? i.transitGatewayArn : h.arn(ctx));
  out.transitGatewayPeeringAttachmentId = h.id(ctx, "transitGatewayPeeringAttachmentId");
  return out;
}

// aws:networkmanager/transitGatewayRegistration:TransitGatewayRegistration
export function TransitGatewayRegistration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.transitGatewayArn = (i.transitGatewayArn !== undefined ? i.transitGatewayArn : h.arn(ctx));
  return out;
}

// aws:networkmanager/transitGatewayRouteTableAttachment:TransitGatewayRouteTableAttachment
export function TransitGatewayRouteTableAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = "";
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = h.id(ctx, "coreNetworkId");
  out.edgeLocation = "";
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.peeringId = (i.peeringId !== undefined ? i.peeringId : h.id(ctx, "peeringId"));
  out.resourceArn = h.arn(ctx);
  out.segmentName = "";
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayRouteTableArn = (i.transitGatewayRouteTableArn !== undefined ? i.transitGatewayRouteTableArn : h.arn(ctx));
  return out;
}

// aws:networkmanager/vpcAttachment:VpcAttachment
export function VpcAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentPolicyRuleNumber = 0;
  out.attachmentType = "";
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkId = (i.coreNetworkId !== undefined ? i.coreNetworkId : h.id(ctx, "coreNetworkId"));
  out.edgeLocation = "";
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? {} : T_networkmanager.networkmanager_VpcAttachmentOptions(ctx, depth + 1)));
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.resourceArn = h.arn(ctx);
  out.segmentName = "";
  out.state = "active";
  out.subnetArns = (i.subnetArns !== undefined ? i.subnetArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcArn = (i.vpcArn !== undefined ? i.vpcArn : h.arn(ctx));
  return out;
}

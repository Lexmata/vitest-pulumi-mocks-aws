// GENERATED FILE — do not edit.
// Service: ec2transitgateway   (22 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2transitgateway from "../types/ec2transitgateway.js";

// aws:ec2transitgateway/connect:Connect
export function Connect(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayDefaultRouteTableAssociation = (i.transitGatewayDefaultRouteTableAssociation !== undefined ? i.transitGatewayDefaultRouteTableAssociation : false);
  out.transitGatewayDefaultRouteTablePropagation = (i.transitGatewayDefaultRouteTablePropagation !== undefined ? i.transitGatewayDefaultRouteTablePropagation : false);
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.transportAttachmentId = (i.transportAttachmentId !== undefined ? i.transportAttachmentId : h.id(ctx, "transportAttachmentId"));
  return out;
}

// aws:ec2transitgateway/connectPeer:ConnectPeer
export function ConnectPeer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : "");
  out.bgpPeerAddress = "";
  out.bgpTransitGatewayAddresses = (depth > 4 ? [] : [""]);
  out.insideCidrBlocks = (i.insideCidrBlocks !== undefined ? i.insideCidrBlocks : (depth > 4 ? [] : [""]));
  out.peerAddress = (i.peerAddress !== undefined ? i.peerAddress : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayAddress = (i.transitGatewayAddress !== undefined ? i.transitGatewayAddress : "");
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  return out;
}

// aws:ec2transitgateway/defaultRouteTableAssociation:DefaultRouteTableAssociation
export function DefaultRouteTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originalDefaultRouteTableId = h.id(ctx, "originalDefaultRouteTableId");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_DefaultRouteTableAssociationTimeouts(ctx, depth + 1)));
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/defaultRouteTablePropagation:DefaultRouteTablePropagation
export function DefaultRouteTablePropagation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originalDefaultRouteTableId = h.id(ctx, "originalDefaultRouteTableId");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_DefaultRouteTablePropagationTimeouts(ctx, depth + 1)));
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/instanceConnectEndpoint:InstanceConnectEndpoint
export function InstanceConnectEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.fipsDnsName = "";
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preserveClientIp = (i.preserveClientIp !== undefined ? i.preserveClientIp : false);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_InstanceConnectEndpointTimeouts(ctx, depth + 1)));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2transitgateway/instanceState:InstanceState
export function InstanceState(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.force = (i.force !== undefined ? i.force : false);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.state = (i.state !== undefined ? i.state : "active");
  return out;
}

// aws:ec2transitgateway/multicastDomain:MulticastDomain
export function MulticastDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAcceptSharedAssociations = (i.autoAcceptSharedAssociations !== undefined ? i.autoAcceptSharedAssociations : "");
  out.igmpv2Support = (i.igmpv2Support !== undefined ? i.igmpv2Support : "");
  out.ownerId = ctx.accountId;
  out.staticSourcesSupport = (i.staticSourcesSupport !== undefined ? i.staticSourcesSupport : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  return out;
}

// aws:ec2transitgateway/multicastDomainAssociation:MulticastDomainAssociation
export function MulticastDomainAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayMulticastDomainId = (i.transitGatewayMulticastDomainId !== undefined ? i.transitGatewayMulticastDomainId : h.id(ctx, "transitGatewayMulticastDomainId"));
  return out;
}

// aws:ec2transitgateway/multicastGroupMember:MulticastGroupMember
export function MulticastGroupMember(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupIpAddress = (i.groupIpAddress !== undefined ? i.groupIpAddress : "");
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.transitGatewayMulticastDomainId = (i.transitGatewayMulticastDomainId !== undefined ? i.transitGatewayMulticastDomainId : h.id(ctx, "transitGatewayMulticastDomainId"));
  return out;
}

// aws:ec2transitgateway/multicastGroupSource:MulticastGroupSource
export function MulticastGroupSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupIpAddress = (i.groupIpAddress !== undefined ? i.groupIpAddress : "");
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.transitGatewayMulticastDomainId = (i.transitGatewayMulticastDomainId !== undefined ? i.transitGatewayMulticastDomainId : h.id(ctx, "transitGatewayMulticastDomainId"));
  return out;
}

// aws:ec2transitgateway/peeringAttachment:PeeringAttachment
export function PeeringAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? {} : T_ec2transitgateway.ec2transitgateway_PeeringAttachmentOptions(ctx, depth + 1)));
  out.peerAccountId = (i.peerAccountId !== undefined ? i.peerAccountId : h.id(ctx, "peerAccountId"));
  out.peerRegion = (i.peerRegion !== undefined ? i.peerRegion : "");
  out.peerTransitGatewayId = (i.peerTransitGatewayId !== undefined ? i.peerTransitGatewayId : h.id(ctx, "peerTransitGatewayId"));
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  return out;
}

// aws:ec2transitgateway/peeringAttachmentAccepter:PeeringAttachmentAccepter
export function PeeringAttachmentAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.peerAccountId = h.id(ctx, "peerAccountId");
  out.peerRegion = "";
  out.peerTransitGatewayId = h.id(ctx, "peerTransitGatewayId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  return out;
}

// aws:ec2transitgateway/policyTable:PolicyTable
export function PolicyTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  return out;
}

// aws:ec2transitgateway/policyTableAssociation:PolicyTableAssociation
export function PolicyTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayPolicyTableId = (i.transitGatewayPolicyTableId !== undefined ? i.transitGatewayPolicyTableId : h.id(ctx, "transitGatewayPolicyTableId"));
  return out;
}

// aws:ec2transitgateway/prefixListReference:PrefixListReference
export function PrefixListReference(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blackhole = (i.blackhole !== undefined ? i.blackhole : false);
  out.prefixListId = (i.prefixListId !== undefined ? i.prefixListId : h.id(ctx, "prefixListId"));
  out.prefixListOwnerId = h.id(ctx, "prefixListOwnerId");
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/route:Route
export function Route(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blackhole = (i.blackhole !== undefined ? i.blackhole : false);
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/routeTable:RouteTable
export function RouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultAssociationRouteTable = false;
  out.defaultPropagationRouteTable = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  return out;
}

// aws:ec2transitgateway/routeTableAssociation:RouteTableAssociation
export function RouteTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replaceExistingAssociation = (i.replaceExistingAssociation !== undefined ? i.replaceExistingAssociation : false);
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/routeTablePropagation:RouteTablePropagation
export function RouteTablePropagation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayRouteTableId = (i.transitGatewayRouteTableId !== undefined ? i.transitGatewayRouteTableId : h.id(ctx, "transitGatewayRouteTableId"));
  return out;
}

// aws:ec2transitgateway/transitGateway:TransitGateway
export function TransitGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = (i.amazonSideAsn !== undefined ? i.amazonSideAsn : 0);
  out.arn = undefined;
  out.associationDefaultRouteTableId = h.id(ctx, "associationDefaultRouteTableId");
  out.autoAcceptSharedAttachments = (i.autoAcceptSharedAttachments !== undefined ? i.autoAcceptSharedAttachments : "");
  out.defaultRouteTableAssociation = (i.defaultRouteTableAssociation !== undefined ? i.defaultRouteTableAssociation : "");
  out.defaultRouteTablePropagation = (i.defaultRouteTablePropagation !== undefined ? i.defaultRouteTablePropagation : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.dnsSupport = (i.dnsSupport !== undefined ? i.dnsSupport : "");
  out.multicastSupport = (i.multicastSupport !== undefined ? i.multicastSupport : "");
  out.ownerId = ctx.accountId;
  out.propagationDefaultRouteTableId = h.id(ctx, "propagationDefaultRouteTableId");
  out.securityGroupReferencingSupport = (i.securityGroupReferencingSupport !== undefined ? i.securityGroupReferencingSupport : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayCidrBlocks = (i.transitGatewayCidrBlocks !== undefined ? i.transitGatewayCidrBlocks : (depth > 4 ? [] : [""]));
  out.vpnEcmpSupport = (i.vpnEcmpSupport !== undefined ? i.vpnEcmpSupport : "");
  return out;
}

// aws:ec2transitgateway/vpcAttachment:VpcAttachment
export function VpcAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applianceModeSupport = (i.applianceModeSupport !== undefined ? i.applianceModeSupport : "");
  out.arn = h.arn(ctx);
  out.dnsSupport = (i.dnsSupport !== undefined ? i.dnsSupport : "");
  out.ipv6Support = (i.ipv6Support !== undefined ? i.ipv6Support : "");
  out.securityGroupReferencingSupport = (i.securityGroupReferencingSupport !== undefined ? i.securityGroupReferencingSupport : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayDefaultRouteTableAssociation = (i.transitGatewayDefaultRouteTableAssociation !== undefined ? i.transitGatewayDefaultRouteTableAssociation : false);
  out.transitGatewayDefaultRouteTablePropagation = (i.transitGatewayDefaultRouteTablePropagation !== undefined ? i.transitGatewayDefaultRouteTablePropagation : false);
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.vpcOwnerId = h.id(ctx, "vpcOwnerId");
  return out;
}

// aws:ec2transitgateway/vpcAttachmentAccepter:VpcAttachmentAccepter
export function VpcAttachmentAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applianceModeSupport = "";
  out.dnsSupport = "";
  out.ipv6Support = "";
  out.securityGroupReferencingSupport = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayDefaultRouteTableAssociation = (i.transitGatewayDefaultRouteTableAssociation !== undefined ? i.transitGatewayDefaultRouteTableAssociation : false);
  out.transitGatewayDefaultRouteTablePropagation = (i.transitGatewayDefaultRouteTablePropagation !== undefined ? i.transitGatewayDefaultRouteTablePropagation : false);
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcOwnerId = h.id(ctx, "vpcOwnerId");
  return out;
}

// GENERATED FILE — do not edit.
// Service: ec2transitgateway   (24 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2transitgateway from "./ec2transitgateway.js";

// aws:ec2transitgateway/DefaultRouteTableAssociationTimeouts:DefaultRouteTableAssociationTimeouts
export function ec2transitgateway_DefaultRouteTableAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ec2transitgateway/DefaultRouteTablePropagationTimeouts:DefaultRouteTablePropagationTimeouts
export function ec2transitgateway_DefaultRouteTablePropagationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ec2transitgateway/InstanceConnectEndpointTimeouts:InstanceConnectEndpointTimeouts
export function ec2transitgateway_InstanceConnectEndpointTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:ec2transitgateway/PeeringAttachmentOptions:PeeringAttachmentOptions
export function ec2transitgateway_PeeringAttachmentOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dynamicRouting = "";
  return out;
}

// aws:ec2transitgateway/getAttachmentFilter:getAttachmentFilter
export function ec2transitgateway_getAttachmentFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getAttachmentsFilter:getAttachmentsFilter
export function ec2transitgateway_getAttachmentsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getConnectFilter:getConnectFilter
export function ec2transitgateway_getConnectFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getConnectPeerFilter:getConnectPeerFilter
export function ec2transitgateway_getConnectPeerFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getDirectConnectGatewayAttachmentFilter:getDirectConnectGatewayAttachmentFilter
export function ec2transitgateway_getDirectConnectGatewayAttachmentFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getMulticastDomainAssociation:getMulticastDomainAssociation
export function ec2transitgateway_getMulticastDomainAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.transitGatewayAttachmentId = h.id(ctx, "transitGatewayAttachmentId");
  return out;
}

// aws:ec2transitgateway/getMulticastDomainFilter:getMulticastDomainFilter
export function ec2transitgateway_getMulticastDomainFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getMulticastDomainMember:getMulticastDomainMember
export function ec2transitgateway_getMulticastDomainMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupIpAddress = "";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}

// aws:ec2transitgateway/getMulticastDomainSource:getMulticastDomainSource
export function ec2transitgateway_getMulticastDomainSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupIpAddress = "";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}

// aws:ec2transitgateway/getPeeringAttachmentFilter:getPeeringAttachmentFilter
export function ec2transitgateway_getPeeringAttachmentFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getPeeringAttachmentsFilter:getPeeringAttachmentsFilter
export function ec2transitgateway_getPeeringAttachmentsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTableAssociationsFilter:getRouteTableAssociationsFilter
export function ec2transitgateway_getRouteTableAssociationsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTableFilter:getRouteTableFilter
export function ec2transitgateway_getRouteTableFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTablePropagationsFilter:getRouteTablePropagationsFilter
export function ec2transitgateway_getRouteTablePropagationsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTableRoutesFilter:getRouteTableRoutesFilter
export function ec2transitgateway_getRouteTableRoutesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getRouteTableRoutesRoute:getRouteTableRoutesRoute
export function ec2transitgateway_getRouteTableRoutesRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidrBlock = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.state = "active";
  out.transitGatewayRouteTableAnnouncementId = h.id(ctx, "transitGatewayRouteTableAnnouncementId");
  out.type = "";
  return out;
}

// aws:ec2transitgateway/getTransitGatewayFilter:getTransitGatewayFilter
export function ec2transitgateway_getTransitGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getVpcAttachmentFilter:getVpcAttachmentFilter
export function ec2transitgateway_getVpcAttachmentFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getVpcAttachmentsFilter:getVpcAttachmentsFilter
export function ec2transitgateway_getVpcAttachmentsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2transitgateway/getVpnAttachmentFilter:getVpnAttachmentFilter
export function ec2transitgateway_getVpnAttachmentFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

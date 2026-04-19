// GENERATED FILE — do not edit.
// Service: networkmanager   (27 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkmanager from "./networkmanager.js";

// aws:networkmanager/ConnectAttachmentOptions:ConnectAttachmentOptions
export function networkmanager_ConnectAttachmentOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.protocol = "";
  return out;
}

// aws:networkmanager/ConnectPeerBgpOptions:ConnectPeerBgpOptions
export function networkmanager_ConnectPeerBgpOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.peerAsn = 0;
  return out;
}

// aws:networkmanager/ConnectPeerConfiguration:ConnectPeerConfiguration
export function networkmanager_ConnectPeerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bgpConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_ConnectPeerConfigurationBgpConfiguration(ctx, depth + 1))]);
  out.coreNetworkAddress = "";
  out.insideCidrBlocks = (depth > 4 ? [] : [""]);
  out.peerAddress = "";
  out.protocol = "";
  return out;
}

// aws:networkmanager/ConnectPeerConfigurationBgpConfiguration:ConnectPeerConfigurationBgpConfiguration
export function networkmanager_ConnectPeerConfigurationBgpConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coreNetworkAddress = "";
  out.coreNetworkAsn = 0;
  out.peerAddress = "";
  out.peerAsn = 0;
  return out;
}

// aws:networkmanager/CoreNetworkEdge:CoreNetworkEdge
export function networkmanager_CoreNetworkEdge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asn = 0;
  out.edgeLocation = "";
  out.insideCidrBlocks = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkmanager/CoreNetworkSegment:CoreNetworkSegment
export function networkmanager_CoreNetworkSegment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.edgeLocations = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.sharedSegments = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkmanager/DeviceAwsLocation:DeviceAwsLocation
export function networkmanager_DeviceAwsLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetArn = h.arn(ctx);
  out.zone = "";
  return out;
}

// aws:networkmanager/DeviceLocation:DeviceLocation
export function networkmanager_DeviceLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:networkmanager/DxGatewayAttachmentTimeouts:DxGatewayAttachmentTimeouts
export function networkmanager_DxGatewayAttachmentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:networkmanager/LinkBandwidth:LinkBandwidth
export function networkmanager_LinkBandwidth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downloadSpeed = 0;
  out.uploadSpeed = 0;
  return out;
}

// aws:networkmanager/SiteLocation:SiteLocation
export function networkmanager_SiteLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:networkmanager/VpcAttachmentOptions:VpcAttachmentOptions
export function networkmanager_VpcAttachmentOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applianceModeSupport = false;
  out.ipv6Support = false;
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentAttachmentPolicy:getCoreNetworkPolicyDocumentAttachmentPolicy
export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction(ctx, depth + 1));
  out.conditionLogic = "";
  out.conditions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition(ctx, depth + 1))]);
  out.description = "";
  out.ruleNumber = 0;
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentAttachmentPolicyAction:getCoreNetworkPolicyDocumentAttachmentPolicyAction
export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addToNetworkFunctionGroup = "";
  out.associationMethod = "";
  out.requireAcceptance = false;
  out.segment = "";
  out.tagValueOfKey = "";
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentAttachmentPolicyCondition:getCoreNetworkPolicyDocumentAttachmentPolicyCondition
export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.operator = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentCoreNetworkConfiguration:getCoreNetworkPolicyDocumentCoreNetworkConfiguration
export function networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnRanges = (depth > 4 ? [] : [""]);
  out.edgeLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation(ctx, depth + 1))]);
  out.insideCidrBlocks = (depth > 4 ? [] : [""]);
  out.vpnEcmpSupport = false;
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation:getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation
export function networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asn = "";
  out.insideCidrBlocks = (depth > 4 ? [] : [""]);
  out.location = "";
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentNetworkFunctionGroup:getCoreNetworkPolicyDocumentNetworkFunctionGroup
export function networkmanager_getCoreNetworkPolicyDocumentNetworkFunctionGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.requireAttachmentAcceptance = false;
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentSegment:getCoreNetworkPolicyDocumentSegment
export function networkmanager_getCoreNetworkPolicyDocumentSegment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowFilters = (depth > 4 ? [] : [""]);
  out.denyFilters = (depth > 4 ? [] : [""]);
  out.description = "";
  out.edgeLocations = (depth > 4 ? [] : [""]);
  out.isolateAttachments = true;
  out.name = ctx.name;
  out.requireAttachmentAcceptance = false;
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentSegmentAction:getCoreNetworkPolicyDocumentSegmentAction
export function networkmanager_getCoreNetworkPolicyDocumentSegmentAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.description = "";
  out.destinationCidrBlocks = (depth > 4 ? [] : [""]);
  out.destinations = (depth > 4 ? [] : [""]);
  out.mode = "";
  out.segment = "";
  out.shareWithExcepts = (depth > 4 ? [] : [""]);
  out.shareWiths = (depth > 4 ? [] : [""]);
  out.via = (depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia(ctx, depth + 1));
  out.whenSentTo = (depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo(ctx, depth + 1));
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentSegmentActionVia:getCoreNetworkPolicyDocumentSegmentActionVia
export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkFunctionGroups = (depth > 4 ? [] : [""]);
  out.withEdgeOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride(ctx, depth + 1))]);
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride:getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride
export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.edgeSets = (depth > 4 ? [] : [(depth > 4 ? [] : [""])]);
  out.useEdge = "";
  out.useEdgeLocation = "";
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocumentSegmentActionWhenSentTo:getCoreNetworkPolicyDocumentSegmentActionWhenSentTo
export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.segments = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkmanager/getDeviceAwsLocation:getDeviceAwsLocation
export function networkmanager_getDeviceAwsLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetArn = h.arn(ctx);
  out.zone = "";
  return out;
}

// aws:networkmanager/getDeviceLocation:getDeviceLocation
export function networkmanager_getDeviceLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:networkmanager/getLinkBandwidth:getLinkBandwidth
export function networkmanager_getLinkBandwidth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.downloadSpeed = 0;
  out.uploadSpeed = 0;
  return out;
}

// aws:networkmanager/getSiteLocation:getSiteLocation
export function networkmanager_getSiteLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.latitude = "";
  out.longitude = "";
  return out;
}

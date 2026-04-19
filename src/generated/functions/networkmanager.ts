// GENERATED FILE — do not edit.
// Service: networkmanager   (11 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkmanager from "../types/networkmanager.js";

// aws:networkmanager/getConnection:getConnection
export function getConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectedDeviceId = h.id(ctx, "connectedDeviceId");
  out.connectedLinkId = h.id(ctx, "connectedLinkId");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.description = "";
  out.deviceId = h.id(ctx, "deviceId");
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.linkId = h.id(ctx, "linkId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getConnections:getConnections
export function getConnections(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getCoreNetworkPolicyDocument:getCoreNetworkPolicyDocument
export function getCoreNetworkPolicyDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentPolicies = (i.attachmentPolicies !== undefined ? i.attachmentPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicy(ctx, depth + 1))]));
  out.coreNetworkConfigurations = (i.coreNetworkConfigurations !== undefined ? i.coreNetworkConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfiguration(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.json = "";
  out.networkFunctionGroups = (i.networkFunctionGroups !== undefined ? i.networkFunctionGroups : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentNetworkFunctionGroup(ctx, depth + 1))]));
  out.segmentActions = (i.segmentActions !== undefined ? i.segmentActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentSegmentAction(ctx, depth + 1))]));
  out.segments = (i.segments !== undefined ? i.segments : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getCoreNetworkPolicyDocumentSegment(ctx, depth + 1))]));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:networkmanager/getDevice:getDevice
export function getDevice(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getDeviceAwsLocation(ctx, depth + 1))]);
  out.description = "";
  out.deviceId = (i.deviceId !== undefined ? i.deviceId : h.id(ctx, "deviceId"));
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.locations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getDeviceLocation(ctx, depth + 1))]);
  out.model = "";
  out.serialNumber = "";
  out.siteId = h.id(ctx, "siteId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.vendor = "";
  return out;
}

// aws:networkmanager/getDevices:getDevices
export function getDevices(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getGlobalNetwork:getGlobalNetwork
export function getGlobalNetwork(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getGlobalNetworks:getGlobalNetworks
export function getGlobalNetworks(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getLink:getLink
export function getLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bandwidths = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getLinkBandwidth(ctx, depth + 1))]);
  out.description = "";
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.linkId = (i.linkId !== undefined ? i.linkId : h.id(ctx, "linkId"));
  out.providerName = "";
  out.siteId = h.id(ctx, "siteId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  return out;
}

// aws:networkmanager/getLinks:getLinks
export function getLinks(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:networkmanager/getSite:getSite
export function getSite(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.locations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkmanager.networkmanager_getSiteLocation(ctx, depth + 1))]);
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:networkmanager/getSites:getSites
export function getSites(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalNetworkId = (i.globalNetworkId !== undefined ? i.globalNetworkId : h.id(ctx, "globalNetworkId"));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

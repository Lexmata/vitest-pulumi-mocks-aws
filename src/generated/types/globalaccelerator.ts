// GENERATED FILE — do not edit.
// Service: globalaccelerator   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_globalaccelerator from "./globalaccelerator.js";

// aws:globalaccelerator/AcceleratorAttributes:AcceleratorAttributes
export function globalaccelerator_AcceleratorAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowLogsEnabled = false;
  out.flowLogsS3Bucket = "";
  out.flowLogsS3Prefix = "";
  return out;
}

// aws:globalaccelerator/AcceleratorIpSet:AcceleratorIpSet
export function globalaccelerator_AcceleratorIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddresses = (depth > 4 ? [] : [""]);
  out.ipFamily = "";
  return out;
}

// aws:globalaccelerator/CrossAccountAttachmentResource:CrossAccountAttachmentResource
export function globalaccelerator_CrossAccountAttachmentResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  out.endpointId = h.id(ctx, "endpointId");
  out.region = ctx.region;
  return out;
}

// aws:globalaccelerator/CustomRoutingAcceleratorAttributes:CustomRoutingAcceleratorAttributes
export function globalaccelerator_CustomRoutingAcceleratorAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowLogsEnabled = false;
  out.flowLogsS3Bucket = "";
  out.flowLogsS3Prefix = "";
  return out;
}

// aws:globalaccelerator/CustomRoutingAcceleratorIpSet:CustomRoutingAcceleratorIpSet
export function globalaccelerator_CustomRoutingAcceleratorIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddresses = (depth > 4 ? [] : [""]);
  out.ipFamily = "";
  return out;
}

// aws:globalaccelerator/CustomRoutingEndpointGroupDestinationConfiguration:CustomRoutingEndpointGroupDestinationConfiguration
export function globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.protocols = (depth > 4 ? [] : [""]);
  out.toPort = 443;
  return out;
}

// aws:globalaccelerator/CustomRoutingEndpointGroupEndpointConfiguration:CustomRoutingEndpointGroupEndpointConfiguration
export function globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointId = h.id(ctx, "endpointId");
  return out;
}

// aws:globalaccelerator/CustomRoutingListenerPortRange:CustomRoutingListenerPortRange
export function globalaccelerator_CustomRoutingListenerPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:globalaccelerator/EndpointGroupEndpointConfiguration:EndpointGroupEndpointConfiguration
export function globalaccelerator_EndpointGroupEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentArn = h.arn(ctx);
  out.clientIpPreservationEnabled = false;
  out.endpointId = h.id(ctx, "endpointId");
  out.weight = 0;
  return out;
}

// aws:globalaccelerator/EndpointGroupPortOverride:EndpointGroupPortOverride
export function globalaccelerator_EndpointGroupPortOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointPort = 443;
  out.listenerPort = 443;
  return out;
}

// aws:globalaccelerator/ListenerPortRange:ListenerPortRange
export function globalaccelerator_ListenerPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:globalaccelerator/getAcceleratorAttribute:getAcceleratorAttribute
export function globalaccelerator_getAcceleratorAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowLogsEnabled = false;
  out.flowLogsS3Bucket = "";
  out.flowLogsS3Prefix = "";
  return out;
}

// aws:globalaccelerator/getAcceleratorIpSet:getAcceleratorIpSet
export function globalaccelerator_getAcceleratorIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddresses = (depth > 4 ? [] : [""]);
  out.ipFamily = "";
  return out;
}

// aws:globalaccelerator/getCustomRoutingAcceleratorAttribute:getCustomRoutingAcceleratorAttribute
export function globalaccelerator_getCustomRoutingAcceleratorAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowLogsEnabled = false;
  out.flowLogsS3Bucket = "";
  out.flowLogsS3Prefix = "";
  return out;
}

// aws:globalaccelerator/getCustomRoutingAcceleratorIpSet:getCustomRoutingAcceleratorIpSet
export function globalaccelerator_getCustomRoutingAcceleratorIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddresses = (depth > 4 ? [] : [""]);
  out.ipFamily = "";
  return out;
}

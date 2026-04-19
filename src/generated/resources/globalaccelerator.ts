// GENERATED FILE — do not edit.
// Service: globalaccelerator   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_globalaccelerator from "../types/globalaccelerator.js";

// aws:globalaccelerator/accelerator:Accelerator
export function Accelerator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : (depth > 4 ? {} : T_globalaccelerator.globalaccelerator_AcceleratorAttributes(ctx, depth + 1)));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dualStackDnsName = "";
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.hostedZoneId = "Z0000000000000000000";
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.ipAddresses = (i.ipAddresses !== undefined ? i.ipAddresses : (depth > 4 ? [] : [""]));
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_AcceleratorIpSet(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:globalaccelerator/crossAccountAttachment:CrossAccountAttachment
export function CrossAccountAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.lastModifiedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.principals = (i.principals !== undefined ? i.principals : (depth > 4 ? [] : [""]));
  out.resources = (i.resources !== undefined ? i.resources : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CrossAccountAttachmentResource(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:globalaccelerator/customRoutingAccelerator:CustomRoutingAccelerator
export function CustomRoutingAccelerator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : (depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CustomRoutingAcceleratorAttributes(ctx, depth + 1)));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.hostedZoneId = "Z0000000000000000000";
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.ipAddresses = (i.ipAddresses !== undefined ? i.ipAddresses : (depth > 4 ? [] : [""]));
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CustomRoutingAcceleratorIpSet(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:globalaccelerator/customRoutingEndpointGroup:CustomRoutingEndpointGroup
export function CustomRoutingEndpointGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationConfigurations = (i.destinationConfigurations !== undefined ? i.destinationConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration(ctx, depth + 1))]));
  out.endpointConfigurations = (i.endpointConfigurations !== undefined ? i.endpointConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration(ctx, depth + 1))]));
  out.endpointGroupRegion = (i.endpointGroupRegion !== undefined ? i.endpointGroupRegion : "");
  out.listenerArn = (i.listenerArn !== undefined ? i.listenerArn : h.arn(ctx));
  return out;
}

// aws:globalaccelerator/customRoutingListener:CustomRoutingListener
export function CustomRoutingListener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorArn = (i.acceleratorArn !== undefined ? i.acceleratorArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.portRanges = (i.portRanges !== undefined ? i.portRanges : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_CustomRoutingListenerPortRange(ctx, depth + 1))]));
  return out;
}

// aws:globalaccelerator/endpointGroup:EndpointGroup
export function EndpointGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endpointConfigurations = (i.endpointConfigurations !== undefined ? i.endpointConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_EndpointGroupEndpointConfiguration(ctx, depth + 1))]));
  out.endpointGroupRegion = (i.endpointGroupRegion !== undefined ? i.endpointGroupRegion : "");
  out.healthCheckIntervalSeconds = (i.healthCheckIntervalSeconds !== undefined ? i.healthCheckIntervalSeconds : 0);
  out.healthCheckPath = (i.healthCheckPath !== undefined ? i.healthCheckPath : "");
  out.healthCheckPort = (i.healthCheckPort !== undefined ? i.healthCheckPort : 443);
  out.healthCheckProtocol = (i.healthCheckProtocol !== undefined ? i.healthCheckProtocol : "");
  out.listenerArn = (i.listenerArn !== undefined ? i.listenerArn : h.arn(ctx));
  out.portOverrides = (i.portOverrides !== undefined ? i.portOverrides : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_EndpointGroupPortOverride(ctx, depth + 1))]));
  out.thresholdCount = (i.thresholdCount !== undefined ? i.thresholdCount : 1);
  out.trafficDialPercentage = (i.trafficDialPercentage !== undefined ? i.trafficDialPercentage : 0);
  return out;
}

// aws:globalaccelerator/listener:Listener
export function Listener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorArn = (i.acceleratorArn !== undefined ? i.acceleratorArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.clientAffinity = (i.clientAffinity !== undefined ? i.clientAffinity : "");
  out.portRanges = (i.portRanges !== undefined ? i.portRanges : (depth > 4 ? [] : [(depth > 4 ? {} : T_globalaccelerator.globalaccelerator_ListenerPortRange(ctx, depth + 1))]));
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  return out;
}

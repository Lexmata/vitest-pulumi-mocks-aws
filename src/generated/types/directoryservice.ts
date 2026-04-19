// GENERATED FILE — do not edit.
// Service: directoryservice   (7 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_directoryservice from "./directoryservice.js";

// aws:directoryservice/DirectoryConnectSettings:DirectoryConnectSettings
export function directoryservice_DirectoryConnectSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.connectIps = (depth > 4 ? [] : [""]);
  out.customerDnsIps = (depth > 4 ? [] : [""]);
  out.customerUsername = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:directoryservice/DirectoryVpcSettings:DirectoryVpcSettings
export function directoryservice_DirectoryVpcSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:directoryservice/ServiceRegionVpcSettings:ServiceRegionVpcSettings
export function directoryservice_ServiceRegionVpcSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:directoryservice/SharedDirectoryTarget:SharedDirectoryTarget
export function directoryservice_SharedDirectoryTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.type = "";
  return out;
}

// aws:directoryservice/getDirectoryConnectSetting:getDirectoryConnectSetting
export function directoryservice_getDirectoryConnectSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.connectIps = (depth > 4 ? [] : [""]);
  out.customerDnsIps = (depth > 4 ? [] : [""]);
  out.customerUsername = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:directoryservice/getDirectoryRadiusSetting:getDirectoryRadiusSetting
export function directoryservice_getDirectoryRadiusSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationProtocol = "";
  out.displayLabel = "";
  out.radiusPort = 443;
  out.radiusRetries = 0;
  out.radiusServers = (depth > 4 ? [] : [""]);
  out.radiusTimeout = 30;
  out.useSameUsername = false;
  return out;
}

// aws:directoryservice/getDirectoryVpcSetting:getDirectoryVpcSetting
export function directoryservice_getDirectoryVpcSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

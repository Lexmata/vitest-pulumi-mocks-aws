// GENERATED FILE — do not edit.
// Service: appstream   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appstream from "./appstream.js";

// aws:appstream/DirectoryConfigServiceAccountCredentials:DirectoryConfigServiceAccountCredentials
export function appstream_DirectoryConfigServiceAccountCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountName = "";
  out.accountPassword = "";
  return out;
}

// aws:appstream/FleetComputeCapacity:FleetComputeCapacity
export function appstream_FleetComputeCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.available = 0;
  out.desiredInstances = 0;
  out.desiredSessions = 0;
  out.inUse = 0;
  out.running = 0;
  return out;
}

// aws:appstream/FleetDomainJoinInfo:FleetDomainJoinInfo
export function appstream_FleetDomainJoinInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryName = "";
  out.organizationalUnitDistinguishedName = "";
  return out;
}

// aws:appstream/FleetVpcConfig:FleetVpcConfig
export function appstream_FleetVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appstream/ImageBuilderAccessEndpoint:ImageBuilderAccessEndpoint
export function appstream_ImageBuilderAccessEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointType = "";
  out.vpceId = h.id(ctx, "vpceId");
  return out;
}

// aws:appstream/ImageBuilderDomainJoinInfo:ImageBuilderDomainJoinInfo
export function appstream_ImageBuilderDomainJoinInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryName = "";
  out.organizationalUnitDistinguishedName = "";
  return out;
}

// aws:appstream/ImageBuilderVpcConfig:ImageBuilderVpcConfig
export function appstream_ImageBuilderVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appstream/StackAccessEndpoint:StackAccessEndpoint
export function appstream_StackAccessEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointType = "";
  out.vpceId = h.id(ctx, "vpceId");
  return out;
}

// aws:appstream/StackApplicationSettings:StackApplicationSettings
export function appstream_StackApplicationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.settingsGroup = "";
  return out;
}

// aws:appstream/StackStorageConnector:StackStorageConnector
export function appstream_StackStorageConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectorType = "";
  out.domains = (depth > 4 ? [] : [""]);
  out.resourceIdentifier = "";
  return out;
}

// aws:appstream/StackStreamingExperienceSettings:StackStreamingExperienceSettings
export function appstream_StackStreamingExperienceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.preferredProtocol = "";
  return out;
}

// aws:appstream/StackUserSetting:StackUserSetting
export function appstream_StackUserSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.permission = "";
  return out;
}

// aws:appstream/getImageApplication:getImageApplication
export function appstream_getImageApplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appBlockArn = h.arn(ctx);
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = "";
  out.displayName = "";
  out.enabled = true;
  out.iconS3Locations = (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_getImageApplicationIconS3Location(ctx, depth + 1))]);
  out.iconUrl = h.endpoint(ctx, "iconUrl");
  out.instanceFamilies = (depth > 4 ? [] : [""]);
  out.launchParameters = "";
  out.launchPath = "";
  out.metadata = {};
  out.name = ctx.name;
  out.platforms = (depth > 4 ? [] : [""]);
  out.workingDirectory = "";
  return out;
}

// aws:appstream/getImageApplicationIconS3Location:getImageApplicationIconS3Location
export function appstream_getImageApplicationIconS3Location(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Bucket = "";
  out.s3Key = "";
  return out;
}

// aws:appstream/getImageImagePermission:getImageImagePermission
export function appstream_getImageImagePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowFleet = true;
  out.allowImageBuilder = true;
  return out;
}

// aws:appstream/getImageStateChangeReason:getImageStateChangeReason
export function appstream_getImageStateChangeReason(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = "";
  out.message = "";
  return out;
}

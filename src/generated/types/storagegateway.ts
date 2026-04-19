// GENERATED FILE — do not edit.
// Service: storagegateway   (7 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_storagegateway from "./storagegateway.js";

// aws:storagegateway/FileSystemAssociationCacheAttributes:FileSystemAssociationCacheAttributes
export function storagegateway_FileSystemAssociationCacheAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheStaleTimeoutInSeconds = 30;
  return out;
}

// aws:storagegateway/GatewayGatewayNetworkInterface:GatewayGatewayNetworkInterface
export function storagegateway_GatewayGatewayNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4Address = "";
  return out;
}

// aws:storagegateway/GatewayMaintenanceStartTime:GatewayMaintenanceStartTime
export function storagegateway_GatewayMaintenanceStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfMonth = "";
  out.dayOfWeek = "";
  out.hourOfDay = 0;
  out.minuteOfHour = 0;
  return out;
}

// aws:storagegateway/GatewaySmbActiveDirectorySettings:GatewaySmbActiveDirectorySettings
export function storagegateway_GatewaySmbActiveDirectorySettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryStatus = "";
  out.domainControllers = (depth > 4 ? [] : [""]);
  out.domainName = h.endpoint(ctx, "domainName");
  out.organizationalUnit = "";
  out.password = "";
  out.timeoutInSeconds = 30;
  out.username = "";
  return out;
}

// aws:storagegateway/NfsFileShareCacheAttributes:NfsFileShareCacheAttributes
export function storagegateway_NfsFileShareCacheAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheStaleTimeoutInSeconds = 30;
  return out;
}

// aws:storagegateway/NfsFileShareNfsFileShareDefaults:NfsFileShareNfsFileShareDefaults
export function storagegateway_NfsFileShareNfsFileShareDefaults(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryMode = "";
  out.fileMode = "";
  out.groupId = h.id(ctx, "groupId");
  out.ownerId = ctx.accountId;
  return out;
}

// aws:storagegateway/SmbFileShareCacheAttributes:SmbFileShareCacheAttributes
export function storagegateway_SmbFileShareCacheAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheStaleTimeoutInSeconds = 30;
  return out;
}

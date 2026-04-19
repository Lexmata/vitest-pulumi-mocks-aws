// GENERATED FILE — do not edit.
// Service: mq   (18 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mq from "./mq.js";

// aws:mq/BrokerConfiguration:BrokerConfiguration
export function mq_BrokerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.revision = 0;
  return out;
}

// aws:mq/BrokerEncryptionOptions:BrokerEncryptionOptions
export function mq_BrokerEncryptionOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.useAwsOwnedKey = false;
  return out;
}

// aws:mq/BrokerInstance:BrokerInstance
export function mq_BrokerInstance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consoleUrl = h.endpoint(ctx, "consoleUrl");
  out.endpoints = (depth > 4 ? [] : [""]);
  out.ipAddress = "10.0.0.10";
  return out;
}

// aws:mq/BrokerLdapServerMetadata:BrokerLdapServerMetadata
export function mq_BrokerLdapServerMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hosts = (depth > 4 ? [] : [""]);
  out.roleBase = "";
  out.roleName = "";
  out.roleSearchMatching = "";
  out.roleSearchSubtree = false;
  out.serviceAccountPassword = "";
  out.serviceAccountUsername = "";
  out.userBase = "";
  out.userRoleName = "";
  out.userSearchMatching = "";
  out.userSearchSubtree = false;
  return out;
}

// aws:mq/BrokerLogs:BrokerLogs
export function mq_BrokerLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audit = false;
  out.general = false;
  return out;
}

// aws:mq/BrokerMaintenanceWindowStartTime:BrokerMaintenanceWindowStartTime
export function mq_BrokerMaintenanceWindowStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfWeek = "";
  out.timeOfDay = "";
  out.timeZone = "";
  return out;
}

// aws:mq/BrokerUser:BrokerUser
export function mq_BrokerUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consoleAccess = false;
  out.groups = (depth > 4 ? [] : [""]);
  out.password = "";
  out.replicationUser = false;
  out.username = "";
  return out;
}

// aws:mq/getBrokerConfiguration:getBrokerConfiguration
export function mq_getBrokerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.revision = 0;
  return out;
}

// aws:mq/getBrokerEncryptionOption:getBrokerEncryptionOption
export function mq_getBrokerEncryptionOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.useAwsOwnedKey = false;
  return out;
}

// aws:mq/getBrokerEngineTypesBrokerEngineType:getBrokerEngineTypesBrokerEngineType
export function mq_getBrokerEngineTypesBrokerEngineType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engineType = "";
  out.engineVersions = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion(ctx, depth + 1))]);
  return out;
}

// aws:mq/getBrokerEngineTypesBrokerEngineTypeEngineVersion:getBrokerEngineTypesBrokerEngineTypeEngineVersion
export function mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:mq/getBrokerInstance:getBrokerInstance
export function mq_getBrokerInstance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consoleUrl = h.endpoint(ctx, "consoleUrl");
  out.endpoints = (depth > 4 ? [] : [""]);
  out.ipAddress = "10.0.0.10";
  return out;
}

// aws:mq/getBrokerLdapServerMetadata:getBrokerLdapServerMetadata
export function mq_getBrokerLdapServerMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hosts = (depth > 4 ? [] : [""]);
  out.roleBase = "";
  out.roleName = "";
  out.roleSearchMatching = "";
  out.roleSearchSubtree = false;
  out.serviceAccountPassword = "";
  out.serviceAccountUsername = "";
  out.userBase = "";
  out.userRoleName = "";
  out.userSearchMatching = "";
  out.userSearchSubtree = false;
  return out;
}

// aws:mq/getBrokerLogs:getBrokerLogs
export function mq_getBrokerLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audit = false;
  out.general = false;
  return out;
}

// aws:mq/getBrokerMaintenanceWindowStartTime:getBrokerMaintenanceWindowStartTime
export function mq_getBrokerMaintenanceWindowStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfWeek = "";
  out.timeOfDay = "";
  out.timeZone = "";
  return out;
}

// aws:mq/getBrokerUser:getBrokerUser
export function mq_getBrokerUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consoleAccess = false;
  out.groups = (depth > 4 ? [] : [""]);
  out.replicationUser = false;
  out.username = "";
  return out;
}

// aws:mq/getInstanceTypeOfferingsBrokerInstanceOption:getInstanceTypeOfferingsBrokerInstanceOption
export function mq_getInstanceTypeOfferingsBrokerInstanceOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone(ctx, depth + 1))]);
  out.engineType = "";
  out.hostInstanceType = "";
  out.storageType = "";
  out.supportedDeploymentModes = (depth > 4 ? [] : [""]);
  out.supportedEngineVersions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:mq/getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone:getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone
export function mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

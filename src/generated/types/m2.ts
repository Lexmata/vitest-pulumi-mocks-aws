// GENERATED FILE — do not edit.
// Service: m2   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_m2 from "./m2.js";

// aws:m2/ApplicationDefinition:ApplicationDefinition
export function m2_ApplicationDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.s3Location = "";
  return out;
}

// aws:m2/ApplicationTimeouts:ApplicationTimeouts
export function m2_ApplicationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:m2/DeploymentTimeouts:DeploymentTimeouts
export function m2_DeploymentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:m2/EnvironmentHighAvailabilityConfig:EnvironmentHighAvailabilityConfig
export function m2_EnvironmentHighAvailabilityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredCapacity = 0;
  return out;
}

// aws:m2/EnvironmentStorageConfiguration:EnvironmentStorageConfiguration
export function m2_EnvironmentStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efs = (depth > 4 ? {} : T_m2.m2_EnvironmentStorageConfigurationEfs(ctx, depth + 1));
  out.fsx = (depth > 4 ? {} : T_m2.m2_EnvironmentStorageConfigurationFsx(ctx, depth + 1));
  return out;
}

// aws:m2/EnvironmentStorageConfigurationEfs:EnvironmentStorageConfigurationEfs
export function m2_EnvironmentStorageConfigurationEfs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.mountPoint = "";
  return out;
}

// aws:m2/EnvironmentStorageConfigurationFsx:EnvironmentStorageConfigurationFsx
export function m2_EnvironmentStorageConfigurationFsx(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.mountPoint = "";
  return out;
}

// aws:m2/EnvironmentTimeouts:EnvironmentTimeouts
export function m2_EnvironmentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

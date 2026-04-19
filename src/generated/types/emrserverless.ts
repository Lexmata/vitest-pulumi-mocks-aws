// GENERATED FILE — do not edit.
// Service: emrserverless   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emrserverless from "./emrserverless.js";

// aws:emrserverless/ApplicationAutoStartConfiguration:ApplicationAutoStartConfiguration
export function emrserverless_ApplicationAutoStartConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:emrserverless/ApplicationAutoStopConfiguration:ApplicationAutoStopConfiguration
export function emrserverless_ApplicationAutoStopConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.idleTimeoutMinutes = 30;
  return out;
}

// aws:emrserverless/ApplicationImageConfiguration:ApplicationImageConfiguration
export function emrserverless_ApplicationImageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageUri = h.endpoint(ctx, "imageUri");
  return out;
}

// aws:emrserverless/ApplicationInitialCapacity:ApplicationInitialCapacity
export function emrserverless_ApplicationInitialCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.initialCapacityConfig = (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationInitialCapacityInitialCapacityConfig(ctx, depth + 1));
  out.initialCapacityType = "";
  return out;
}

// aws:emrserverless/ApplicationInitialCapacityInitialCapacityConfig:ApplicationInitialCapacityInitialCapacityConfig
export function emrserverless_ApplicationInitialCapacityInitialCapacityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.workerConfiguration = (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration(ctx, depth + 1));
  out.workerCount = 1;
  return out;
}

// aws:emrserverless/ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration:ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
export function emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpu = "";
  out.disk = "";
  out.memory = "";
  return out;
}

// aws:emrserverless/ApplicationInteractiveConfiguration:ApplicationInteractiveConfiguration
export function emrserverless_ApplicationInteractiveConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.livyEndpointEnabled = false;
  out.studioEnabled = false;
  return out;
}

// aws:emrserverless/ApplicationMaximumCapacity:ApplicationMaximumCapacity
export function emrserverless_ApplicationMaximumCapacity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpu = "";
  out.disk = "";
  out.memory = "";
  return out;
}

// aws:emrserverless/ApplicationNetworkConfiguration:ApplicationNetworkConfiguration
export function emrserverless_ApplicationNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

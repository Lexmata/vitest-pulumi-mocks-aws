// GENERATED FILE — do not edit.
// Service: codecatalyst   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codecatalyst from "./codecatalyst.js";

// aws:codecatalyst/DevEnvironmentIdes:DevEnvironmentIdes
export function codecatalyst_DevEnvironmentIdes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.runtime = "";
  return out;
}

// aws:codecatalyst/DevEnvironmentPersistentStorage:DevEnvironmentPersistentStorage
export function codecatalyst_DevEnvironmentPersistentStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  return out;
}

// aws:codecatalyst/DevEnvironmentRepository:DevEnvironmentRepository
export function codecatalyst_DevEnvironmentRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branchName = "";
  out.repositoryName = "";
  return out;
}

// aws:codecatalyst/getDevEnvironmentIde:getDevEnvironmentIde
export function codecatalyst_getDevEnvironmentIde(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.runtime = "";
  return out;
}

// aws:codecatalyst/getDevEnvironmentPersistentStorage:getDevEnvironmentPersistentStorage
export function codecatalyst_getDevEnvironmentPersistentStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  return out;
}

// aws:codecatalyst/getDevEnvironmentRepository:getDevEnvironmentRepository
export function codecatalyst_getDevEnvironmentRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branchName = "";
  out.repositoryName = "";
  return out;
}

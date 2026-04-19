// GENERATED FILE — do not edit.
// Service: codecatalyst   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codecatalyst from "../types/codecatalyst.js";

// aws:codecatalyst/devEnvironment:DevEnvironment
export function DevEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.ides = (i.ides !== undefined ? i.ides : (depth > 4 ? {} : T_codecatalyst.codecatalyst_DevEnvironmentIdes(ctx, depth + 1)));
  out.inactivityTimeoutMinutes = (i.inactivityTimeoutMinutes !== undefined ? i.inactivityTimeoutMinutes : 30);
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.persistentStorage = (i.persistentStorage !== undefined ? i.persistentStorage : (depth > 4 ? {} : T_codecatalyst.codecatalyst_DevEnvironmentPersistentStorage(ctx, depth + 1)));
  out.projectName = (i.projectName !== undefined ? i.projectName : "");
  out.repositories = (i.repositories !== undefined ? i.repositories : (depth > 4 ? [] : [(depth > 4 ? {} : T_codecatalyst.codecatalyst_DevEnvironmentRepository(ctx, depth + 1))]));
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  return out;
}

// aws:codecatalyst/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.name = ctx.name;
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  return out;
}

// aws:codecatalyst/sourceRepository:SourceRepository
export function SourceRepository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectName = (i.projectName !== undefined ? i.projectName : "");
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  return out;
}

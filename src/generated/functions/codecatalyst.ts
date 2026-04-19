// GENERATED FILE — do not edit.
// Service: codecatalyst   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codecatalyst from "../types/codecatalyst.js";

// aws:codecatalyst/getDevEnvironment:getDevEnvironment
export function getDevEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.creatorId = (i.creatorId !== undefined ? i.creatorId : h.id(ctx, "creatorId"));
  out.envId = (i.envId !== undefined ? i.envId : h.id(ctx, "envId"));
  out.id = h.id(ctx, "id");
  out.ides = (depth > 4 ? [] : [(depth > 4 ? {} : T_codecatalyst.codecatalyst_getDevEnvironmentIde(ctx, depth + 1))]);
  out.inactivityTimeoutMinutes = 30;
  out.instanceType = "";
  out.lastUpdatedTime = "";
  out.persistentStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_codecatalyst.codecatalyst_getDevEnvironmentPersistentStorage(ctx, depth + 1))]);
  out.projectName = (i.projectName !== undefined ? i.projectName : "");
  out.repositories = (i.repositories !== undefined ? i.repositories : (depth > 4 ? [] : [(depth > 4 ? {} : T_codecatalyst.codecatalyst_getDevEnvironmentRepository(ctx, depth + 1))]));
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

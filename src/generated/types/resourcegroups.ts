// GENERATED FILE — do not edit.
// Service: resourcegroups   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourcegroups from "./resourcegroups.js";

// aws:resourcegroups/GroupConfiguration:GroupConfiguration
export function resourcegroups_GroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourcegroups.resourcegroups_GroupConfigurationParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:resourcegroups/GroupConfigurationParameter:GroupConfigurationParameter
export function resourcegroups_GroupConfigurationParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:resourcegroups/GroupResourceQuery:GroupResourceQuery
export function resourcegroups_GroupResourceQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.query = "";
  out.type = "";
  return out;
}

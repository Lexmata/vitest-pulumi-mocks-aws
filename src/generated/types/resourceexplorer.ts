// GENERATED FILE — do not edit.
// Service: resourceexplorer   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourceexplorer from "./resourceexplorer.js";

// aws:resourceexplorer/IndexTimeouts:IndexTimeouts
export function resourceexplorer_IndexTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:resourceexplorer/SearchResource:SearchResource
export function resourceexplorer_SearchResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.lastReportedAt = "";
  out.owningAccountId = h.id(ctx, "owningAccountId");
  out.properties = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourceexplorer.resourceexplorer_SearchResourceProperty(ctx, depth + 1))]);
  out.region = ctx.region;
  out.resourceType = "";
  out.service = "";
  return out;
}

// aws:resourceexplorer/SearchResourceCount:SearchResourceCount
export function resourceexplorer_SearchResourceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complete = false;
  out.totalResources = 0;
  return out;
}

// aws:resourceexplorer/SearchResourceProperty:SearchResourceProperty
export function resourceexplorer_SearchResourceProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.lastReportedAt = "";
  out.name = ctx.name;
  return out;
}

// aws:resourceexplorer/ViewFilters:ViewFilters
export function resourceexplorer_ViewFilters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterString = "";
  return out;
}

// aws:resourceexplorer/ViewIncludedProperty:ViewIncludedProperty
export function resourceexplorer_ViewIncludedProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

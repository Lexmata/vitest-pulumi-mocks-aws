// GENERATED FILE — do not edit.
// Service: amp   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:amp/getDefaultScraperConfiguration:getDefaultScraperConfiguration
export function getDefaultScraperConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:amp/getWorkspace:getWorkspace
export function getWorkspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = "";
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyArn = h.arn(ctx);
  out.prometheusEndpoint = h.endpoint(ctx, "prometheusEndpoint");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:amp/getWorkspaces:getWorkspaces
export function getWorkspaces(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasPrefix = (i.aliasPrefix !== undefined ? i.aliasPrefix : "");
  out.aliases = (depth > 4 ? [] : [""]);
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.workspaceIds = (depth > 4 ? [] : [""]);
  return out;
}

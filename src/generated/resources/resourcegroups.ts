// GENERATED FILE — do not edit.
// Service: resourcegroups   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourcegroups from "../types/resourcegroups.js";

// aws:resourcegroups/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurations = (i.configurations !== undefined ? i.configurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_resourcegroups.resourcegroups_GroupConfiguration(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceQuery = (i.resourceQuery !== undefined ? i.resourceQuery : (depth > 4 ? {} : T_resourcegroups.resourcegroups_GroupResourceQuery(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:resourcegroups/resource:Resource
export function Resource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupArn = (i.groupArn !== undefined ? i.groupArn : h.arn(ctx));
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.resourceType = "";
  return out;
}

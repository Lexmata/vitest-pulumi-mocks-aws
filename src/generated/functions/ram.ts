// GENERATED FILE — do not edit.
// Service: ram   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ram from "../types/ram.js";

// aws:ram/getResourceShare:getResourceShare
export function getResourceShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ram.ram_getResourceShareFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owningAccountId = h.id(ctx, "owningAccountId");
  out.resourceArns = (depth > 4 ? [] : [""]);
  out.resourceOwner = (i.resourceOwner !== undefined ? i.resourceOwner : "");
  out.resourceShareStatus = (i.resourceShareStatus !== undefined ? i.resourceShareStatus : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

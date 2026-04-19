// GENERATED FILE — do not edit.
// Service: athena   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:athena/getNamedQuery:getNamedQuery
export function getNamedQuery(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.querystring = "";
  out.workgroup = (i.workgroup !== undefined ? i.workgroup : "");
  return out;
}

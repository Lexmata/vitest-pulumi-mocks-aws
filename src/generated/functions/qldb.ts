// GENERATED FILE — do not edit.
// Service: qldb   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:qldb/getLedger:getLedger
export function getLedger(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtection = false;
  out.id = h.id(ctx, "id");
  out.kmsKey = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.permissionsMode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

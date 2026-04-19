// GENERATED FILE — do not edit.
// Service: bcmdata   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bcmdata from "../types/bcmdata.js";

// aws:bcmdata/export:Export
export function Export(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.export = (i.export !== undefined ? i.export : (depth > 4 ? {} : T_bcmdata.bcmdata_ExportExport(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bcmdata.bcmdata_ExportTimeouts(ctx, depth + 1)));
  return out;
}

// GENERATED FILE — do not edit.
// Service: redshiftdata   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshiftdata from "./redshiftdata.js";

// aws:redshiftdata/StatementParameter:StatementParameter
export function redshiftdata_StatementParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

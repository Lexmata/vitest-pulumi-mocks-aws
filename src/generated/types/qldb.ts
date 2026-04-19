// GENERATED FILE — do not edit.
// Service: qldb   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_qldb from "./qldb.js";

// aws:qldb/StreamKinesisConfiguration:StreamKinesisConfiguration
export function qldb_StreamKinesisConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationEnabled = false;
  out.streamArn = h.arn(ctx);
  return out;
}

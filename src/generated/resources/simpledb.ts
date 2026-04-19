// GENERATED FILE — do not edit.
// Service: simpledb   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:simpledb/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

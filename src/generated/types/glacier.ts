// GENERATED FILE — do not edit.
// Service: glacier   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_glacier from "./glacier.js";

// aws:glacier/VaultNotification:VaultNotification
export function glacier_VaultNotification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  out.snsTopic = "";
  return out;
}

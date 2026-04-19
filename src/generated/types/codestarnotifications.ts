// GENERATED FILE — do not edit.
// Service: codestarnotifications   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codestarnotifications from "./codestarnotifications.js";

// aws:codestarnotifications/NotificationRuleTarget:NotificationRuleTarget
export function codestarnotifications_NotificationRuleTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.status = "active";
  out.type = "";
  return out;
}

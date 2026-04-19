// GENERATED FILE — do not edit.
// Service: codestarnotifications   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codestarnotifications from "../types/codestarnotifications.js";

// aws:codestarnotifications/notificationRule:NotificationRule
export function NotificationRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.detailType = (i.detailType !== undefined ? i.detailType : "");
  out.eventTypeIds = (i.eventTypeIds !== undefined ? i.eventTypeIds : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resource = (i.resource !== undefined ? i.resource : "");
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targets = (i.targets !== undefined ? i.targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_codestarnotifications.codestarnotifications_NotificationRuleTarget(ctx, depth + 1))]));
  return out;
}

// GENERATED FILE — do not edit.
// Service: rolesanywhere   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rolesanywhere from "../types/rolesanywhere.js";

// aws:rolesanywhere/profile:Profile
export function Profile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.durationSeconds = (i.durationSeconds !== undefined ? i.durationSeconds : 0);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.managedPolicyArns = (i.managedPolicyArns !== undefined ? i.managedPolicyArns : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.requireInstanceProperties = (i.requireInstanceProperties !== undefined ? i.requireInstanceProperties : false);
  out.roleArns = (i.roleArns !== undefined ? i.roleArns : (depth > 4 ? [] : [""]));
  out.sessionPolicy = (i.sessionPolicy !== undefined ? i.sessionPolicy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:rolesanywhere/trustAnchor:TrustAnchor
export function TrustAnchor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationSettings = (i.notificationSettings !== undefined ? i.notificationSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_rolesanywhere.rolesanywhere_TrustAnchorNotificationSetting(ctx, depth + 1))]));
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_rolesanywhere.rolesanywhere_TrustAnchorSource(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

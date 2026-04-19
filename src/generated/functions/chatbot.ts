// GENERATED FILE — do not edit.
// Service: chatbot   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:chatbot/getSlackWorkspace:getSlackWorkspace
export function getSlackWorkspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.slackTeamId = h.id(ctx, "slackTeamId");
  out.slackTeamName = (i.slackTeamName !== undefined ? i.slackTeamName : "");
  return out;
}

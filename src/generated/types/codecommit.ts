// GENERATED FILE — do not edit.
// Service: codecommit   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codecommit from "./codecommit.js";

// aws:codecommit/TriggerTrigger:TriggerTrigger
export function codecommit_TriggerTrigger(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branches = (depth > 4 ? [] : [""]);
  out.customData = "";
  out.destinationArn = h.arn(ctx);
  out.events = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  return out;
}

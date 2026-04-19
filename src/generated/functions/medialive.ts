// GENERATED FILE — do not edit.
// Service: medialive   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_medialive from "../types/medialive.js";

// aws:medialive/getInput:getInput
export function getInput(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachedChannels = (depth > 4 ? [] : [""]);
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_getInputDestination(ctx, depth + 1))]);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.inputClass = "";
  out.inputDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_getInputInputDevice(ctx, depth + 1))]);
  out.inputPartnerIds = (depth > 4 ? [] : [""]);
  out.inputSourceType = "";
  out.mediaConnectFlows = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_getInputMediaConnectFlow(ctx, depth + 1))]);
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_getInputSource(ctx, depth + 1))]);
  out.state = "active";
  out.tags = {};
  out.type = "";
  return out;
}

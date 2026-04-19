// GENERATED FILE — do not edit.
// Service: chatbot   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chatbot from "./chatbot.js";

// aws:chatbot/SlackChannelConfigurationTimeouts:SlackChannelConfigurationTimeouts
export function chatbot_SlackChannelConfigurationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:chatbot/TeamsChannelConfigurationTimeouts:TeamsChannelConfigurationTimeouts
export function chatbot_TeamsChannelConfigurationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

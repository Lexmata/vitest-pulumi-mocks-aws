// GENERATED FILE — do not edit.
// Service: ivschat   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ivschat from "../types/ivschat.js";

// aws:ivschat/loggingConfiguration:LoggingConfiguration
export function LoggingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationConfiguration = (i.destinationConfiguration !== undefined ? i.destinationConfiguration : (depth > 4 ? {} : T_ivschat.ivschat_LoggingConfigurationDestinationConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ivschat/room:Room
export function Room(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.loggingConfigurationIdentifiers = (i.loggingConfigurationIdentifiers !== undefined ? i.loggingConfigurationIdentifiers : (depth > 4 ? [] : [""]));
  out.maximumMessageLength = (i.maximumMessageLength !== undefined ? i.maximumMessageLength : 0);
  out.maximumMessageRatePerSecond = (i.maximumMessageRatePerSecond !== undefined ? i.maximumMessageRatePerSecond : 0);
  out.messageReviewHandler = (i.messageReviewHandler !== undefined ? i.messageReviewHandler : (depth > 4 ? {} : T_ivschat.ivschat_RoomMessageReviewHandler(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

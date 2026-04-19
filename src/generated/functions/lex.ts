// GENERATED FILE — do not edit.
// Service: lex   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lex from "../types/lex.js";

// aws:lex/getBot:getBot
export function getBot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.checksum = "";
  out.childDirected = false;
  out.createdDate = "";
  out.description = "";
  out.detectSentiment = false;
  out.enableModelImprovements = true;
  out.failureReason = "";
  out.id = h.id(ctx, "id");
  out.idleSessionTtlInSeconds = 0;
  out.lastUpdatedDate = "";
  out.locale = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nluIntentConfidenceThreshold = 0;
  out.status = "active";
  out.version = (i.version !== undefined ? i.version : "1");
  out.voiceId = h.id(ctx, "voiceId");
  return out;
}

// aws:lex/getBotAlias:getBotAlias
export function getBotAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.botName = (i.botName !== undefined ? i.botName : "");
  out.botVersion = "";
  out.checksum = "";
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:lex/getIntent:getIntent
export function getIntent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.checksum = "";
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentIntentSignature = "";
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:lex/getSlotType:getSlotType
export function getSlotType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.checksum = "";
  out.createdDate = "";
  out.description = "";
  out.enumerationValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_getSlotTypeEnumerationValue(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.valueSelectionStrategy = "";
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

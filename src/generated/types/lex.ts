// GENERATED FILE — do not edit.
// Service: lex   (1105 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lex from "./lex.js";

// aws:lex/BotAbortStatement:BotAbortStatement
export function lex_BotAbortStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_BotAbortStatementMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/BotAbortStatementMessage:BotAbortStatementMessage
export function lex_BotAbortStatementMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/BotAliasConversationLogs:BotAliasConversationLogs
export function lex_BotAliasConversationLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iamRoleArn = h.arn(ctx);
  out.logSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_BotAliasConversationLogsLogSetting(ctx, depth + 1))]);
  return out;
}

// aws:lex/BotAliasConversationLogsLogSetting:BotAliasConversationLogsLogSetting
export function lex_BotAliasConversationLogsLogSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.kmsKeyArn = h.arn(ctx);
  out.logType = "";
  out.resourceArn = h.arn(ctx);
  out.resourcePrefix = "";
  return out;
}

// aws:lex/BotClarificationPrompt:BotClarificationPrompt
export function lex_BotClarificationPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxAttempts = 0;
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_BotClarificationPromptMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/BotClarificationPromptMessage:BotClarificationPromptMessage
export function lex_BotClarificationPromptMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/BotIntent:BotIntent
export function lex_BotIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.intentName = "";
  out.intentVersion = "";
  return out;
}

// aws:lex/IntentConclusionStatement:IntentConclusionStatement
export function lex_IntentConclusionStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentConclusionStatementMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentConclusionStatementMessage:IntentConclusionStatementMessage
export function lex_IntentConclusionStatementMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/IntentConfirmationPrompt:IntentConfirmationPrompt
export function lex_IntentConfirmationPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxAttempts = 0;
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentConfirmationPromptMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentConfirmationPromptMessage:IntentConfirmationPromptMessage
export function lex_IntentConfirmationPromptMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/IntentDialogCodeHook:IntentDialogCodeHook
export function lex_IntentDialogCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageVersion = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:lex/IntentFollowUpPrompt:IntentFollowUpPrompt
export function lex_IntentFollowUpPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prompt = (depth > 4 ? {} : T_lex.lex_IntentFollowUpPromptPrompt(ctx, depth + 1));
  out.rejectionStatement = (depth > 4 ? {} : T_lex.lex_IntentFollowUpPromptRejectionStatement(ctx, depth + 1));
  return out;
}

// aws:lex/IntentFollowUpPromptPrompt:IntentFollowUpPromptPrompt
export function lex_IntentFollowUpPromptPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxAttempts = 0;
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentFollowUpPromptPromptMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentFollowUpPromptPromptMessage:IntentFollowUpPromptPromptMessage
export function lex_IntentFollowUpPromptPromptMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/IntentFollowUpPromptRejectionStatement:IntentFollowUpPromptRejectionStatement
export function lex_IntentFollowUpPromptRejectionStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentFollowUpPromptRejectionStatementMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentFollowUpPromptRejectionStatementMessage:IntentFollowUpPromptRejectionStatementMessage
export function lex_IntentFollowUpPromptRejectionStatementMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/IntentFulfillmentActivity:IntentFulfillmentActivity
export function lex_IntentFulfillmentActivity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeHook = (depth > 4 ? {} : T_lex.lex_IntentFulfillmentActivityCodeHook(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:lex/IntentFulfillmentActivityCodeHook:IntentFulfillmentActivityCodeHook
export function lex_IntentFulfillmentActivityCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageVersion = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:lex/IntentRejectionStatement:IntentRejectionStatement
export function lex_IntentRejectionStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentRejectionStatementMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentRejectionStatementMessage:IntentRejectionStatementMessage
export function lex_IntentRejectionStatementMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/IntentSlot:IntentSlot
export function lex_IntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.priority = 0;
  out.responseCard = "";
  out.sampleUtterances = (depth > 4 ? [] : [""]);
  out.slotConstraint = "";
  out.slotType = "";
  out.slotTypeVersion = "";
  out.valueElicitationPrompt = (depth > 4 ? {} : T_lex.lex_IntentSlotValueElicitationPrompt(ctx, depth + 1));
  return out;
}

// aws:lex/IntentSlotValueElicitationPrompt:IntentSlotValueElicitationPrompt
export function lex_IntentSlotValueElicitationPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxAttempts = 0;
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentSlotValueElicitationPromptMessage(ctx, depth + 1))]);
  out.responseCard = "";
  return out;
}

// aws:lex/IntentSlotValueElicitationPromptMessage:IntentSlotValueElicitationPromptMessage
export function lex_IntentSlotValueElicitationPromptMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.groupNumber = 0;
  return out;
}

// aws:lex/SlotTypeEnumerationValue:SlotTypeEnumerationValue
export function lex_SlotTypeEnumerationValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.synonyms = (depth > 4 ? [] : [""]);
  out.value = "";
  return out;
}

// aws:lex/V2modelsBotDataPrivacy:V2modelsBotDataPrivacy
export function lex_V2modelsBotDataPrivacy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.childDirected = false;
  return out;
}

// aws:lex/V2modelsBotLocaleTimeouts:V2modelsBotLocaleTimeouts
export function lex_V2modelsBotLocaleTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:lex/V2modelsBotLocaleVoiceSettings:V2modelsBotLocaleVoiceSettings
export function lex_V2modelsBotLocaleVoiceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engine = "";
  out.voiceId = h.id(ctx, "voiceId");
  return out;
}

// aws:lex/V2modelsBotMember:V2modelsBotMember
export function lex_V2modelsBotMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasId = h.id(ctx, "aliasId");
  out.aliasName = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:lex/V2modelsBotTimeouts:V2modelsBotTimeouts
export function lex_V2modelsBotTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:lex/V2modelsBotVersionLocaleSpecification:V2modelsBotVersionLocaleSpecification
export function lex_V2modelsBotVersionLocaleSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceBotVersion = "";
  return out;
}

// aws:lex/V2modelsBotVersionTimeouts:V2modelsBotVersionTimeouts
export function lex_V2modelsBotVersionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSetting:V2modelsIntentClosingSetting
export function lex_V2modelsIntentClosingSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.closingResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponse(ctx, depth + 1));
  out.conditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditional(ctx, depth + 1));
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingNextStep(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponse:V2modelsIntentClosingSettingClosingResponse
export function lex_V2modelsIntentClosingSettingClosingResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroup:V2modelsIntentClosingSettingClosingResponseMessageGroup
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessage:V2modelsIntentClosingSettingClosingResponseMessageGroupMessage
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload:V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard:V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage:V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage:V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariation:V2modelsIntentClosingSettingClosingResponseMessageGroupVariation
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload:V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard:V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage:V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage:V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentClosingSettingClosingResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditional:V2modelsIntentClosingSettingConditional
export function lex_V2modelsIntentClosingSettingConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranch:V2modelsIntentClosingSettingConditionalConditionalBranch
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchCondition:V2modelsIntentClosingSettingConditionalConditionalBranchCondition
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchNextStep:V2modelsIntentClosingSettingConditionalConditionalBranchNextStep
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchNextStepDialogAction:V2modelsIntentClosingSettingConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntent:V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponse:V2modelsIntentClosingSettingConditionalConditionalBranchResponse
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranch:V2modelsIntentClosingSettingConditionalDefaultBranch
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchNextStep:V2modelsIntentClosingSettingConditionalDefaultBranchNextStep
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchNextStepDialogAction:V2modelsIntentClosingSettingConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntent:V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponse:V2modelsIntentClosingSettingConditionalDefaultBranchResponse
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingNextStep:V2modelsIntentClosingSettingNextStep
export function lex_V2modelsIntentClosingSettingNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentClosingSettingNextStepDialogAction:V2modelsIntentClosingSettingNextStepDialogAction
export function lex_V2modelsIntentClosingSettingNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentClosingSettingNextStepIntent:V2modelsIntentClosingSettingNextStepIntent
export function lex_V2modelsIntentClosingSettingNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentClosingSettingNextStepIntentSlot:V2modelsIntentClosingSettingNextStepIntentSlot
export function lex_V2modelsIntentClosingSettingNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSettingNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentClosingSettingNextStepIntentSlotValue:V2modelsIntentClosingSettingNextStepIntentSlotValue
export function lex_V2modelsIntentClosingSettingNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSetting:V2modelsIntentConfirmationSetting
export function lex_V2modelsIntentConfirmationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.codeHook = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHook(ctx, depth + 1));
  out.confirmationConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditional(ctx, depth + 1));
  out.confirmationNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationNextStep(ctx, depth + 1));
  out.confirmationResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponse(ctx, depth + 1));
  out.declinationConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditional(ctx, depth + 1));
  out.declinationNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationNextStep(ctx, depth + 1));
  out.declinationResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponse(ctx, depth + 1));
  out.elicitationCodeHook = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingElicitationCodeHook(ctx, depth + 1));
  out.failureConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditional(ctx, depth + 1));
  out.failureNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureNextStep(ctx, depth + 1));
  out.failureResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponse(ctx, depth + 1));
  out.promptSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHook:V2modelsIntentConfirmationSettingCodeHook
export function lex_V2modelsIntentConfirmationSettingCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.enableCodeHookInvocation = true;
  out.invocationLabel = "";
  out.postCodeHookSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional(ctx, depth + 1));
  out.failureNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep(ctx, depth + 1));
  out.failureResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse(ctx, depth + 1));
  out.successConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional(ctx, depth + 1));
  out.successNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep(ctx, depth + 1));
  out.successResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse(ctx, depth + 1));
  out.timeoutConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional(ctx, depth + 1));
  out.timeoutNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep(ctx, depth + 1));
  out.timeoutResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditional:V2modelsIntentConfirmationSettingConfirmationConditional
export function lex_V2modelsIntentConfirmationSettingConfirmationConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationNextStep:V2modelsIntentConfirmationSettingConfirmationNextStep
export function lex_V2modelsIntentConfirmationSettingConfirmationNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationNextStepDialogAction:V2modelsIntentConfirmationSettingConfirmationNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingConfirmationNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationNextStepIntent:V2modelsIntentConfirmationSettingConfirmationNextStepIntent
export function lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot:V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlotValue:V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingConfirmationNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponse:V2modelsIntentConfirmationSettingConfirmationResponse
export function lex_V2modelsIntentConfirmationSettingConfirmationResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditional:V2modelsIntentConfirmationSettingDeclinationConditional
export function lex_V2modelsIntentConfirmationSettingDeclinationConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationNextStep:V2modelsIntentConfirmationSettingDeclinationNextStep
export function lex_V2modelsIntentConfirmationSettingDeclinationNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationNextStepDialogAction:V2modelsIntentConfirmationSettingDeclinationNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingDeclinationNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationNextStepIntent:V2modelsIntentConfirmationSettingDeclinationNextStepIntent
export function lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlot:V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue:V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponse:V2modelsIntentConfirmationSettingDeclinationResponse
export function lex_V2modelsIntentConfirmationSettingDeclinationResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroup:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingElicitationCodeHook:V2modelsIntentConfirmationSettingElicitationCodeHook
export function lex_V2modelsIntentConfirmationSettingElicitationCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableCodeHookInvocation = true;
  out.invocationLabel = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditional:V2modelsIntentConfirmationSettingFailureConditional
export function lex_V2modelsIntentConfirmationSettingFailureConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureNextStep:V2modelsIntentConfirmationSettingFailureNextStep
export function lex_V2modelsIntentConfirmationSettingFailureNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureNextStepDialogAction:V2modelsIntentConfirmationSettingFailureNextStepDialogAction
export function lex_V2modelsIntentConfirmationSettingFailureNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureNextStepIntent:V2modelsIntentConfirmationSettingFailureNextStepIntent
export function lex_V2modelsIntentConfirmationSettingFailureNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureNextStepIntentSlot:V2modelsIntentConfirmationSettingFailureNextStepIntentSlot
export function lex_V2modelsIntentConfirmationSettingFailureNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureNextStepIntentSlotValue:V2modelsIntentConfirmationSettingFailureNextStepIntentSlotValue
export function lex_V2modelsIntentConfirmationSettingFailureNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponse:V2modelsIntentConfirmationSettingFailureResponse
export function lex_V2modelsIntentConfirmationSettingFailureResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroup:V2modelsIntentConfirmationSettingFailureResponseMessageGroup
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessage:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariation:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecification:V2modelsIntentConfirmationSettingPromptSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.maxRetries = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup(ctx, depth + 1))]);
  out.messageSelectionStrategy = "";
  out.promptAttemptsSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage:V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.allowedInputTypes = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx, depth + 1));
  out.audioAndDtmfInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx, depth + 1));
  out.mapBlockKey = "";
  out.textInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAudioInput = true;
  out.allowDtmfInput = true;
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx, depth + 1));
  out.dtmfSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx, depth + 1));
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endTimeoutMs = 30;
  out.maxLengthMs = 0;
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deletionCharacter = "";
  out.endCharacter = "";
  out.endTimeoutMs = 30;
  out.maxLength = 0;
  return out;
}

// aws:lex/V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification:V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification
export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsIntentDialogCodeHook:V2modelsIntentDialogCodeHook
export function lex_V2modelsIntentDialogCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHook:V2modelsIntentFulfillmentCodeHook
export function lex_V2modelsIntentFulfillmentCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.enabled = true;
  out.fulfillmentUpdatesSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification(ctx, depth + 1));
  out.postFulfillmentStatusSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.startResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse(ctx, depth + 1));
  out.timeoutInSeconds = 30;
  out.updateResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.delayInSeconds = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroup:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.frequencyInSeconds = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional(ctx, depth + 1));
  out.failureNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep(ctx, depth + 1));
  out.failureResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse(ctx, depth + 1));
  out.successConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional(ctx, depth + 1));
  out.successNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep(ctx, depth + 1));
  out.successResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse(ctx, depth + 1));
  out.timeoutConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional(ctx, depth + 1));
  out.timeoutNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep(ctx, depth + 1));
  out.timeoutResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchCondition:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchCondition
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchCondition:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchCondition
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage:V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSetting:V2modelsIntentInitialResponseSetting
export function lex_V2modelsIntentInitialResponseSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeHook = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHook(ctx, depth + 1));
  out.conditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditional(ctx, depth + 1));
  out.initialResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponse(ctx, depth + 1));
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingNextStep(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHook:V2modelsIntentInitialResponseSettingCodeHook
export function lex_V2modelsIntentInitialResponseSettingCodeHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.enableCodeHookInvocation = true;
  out.invocationLabel = "";
  out.postCodeHookSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional(ctx, depth + 1));
  out.failureNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep(ctx, depth + 1));
  out.failureResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse(ctx, depth + 1));
  out.successConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional(ctx, depth + 1));
  out.successNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep(ctx, depth + 1));
  out.successResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse(ctx, depth + 1));
  out.timeoutConditional = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional(ctx, depth + 1));
  out.timeoutNextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep(ctx, depth + 1));
  out.timeoutResponse = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditional:V2modelsIntentInitialResponseSettingConditional
export function lex_V2modelsIntentInitialResponseSettingConditional(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.conditionalBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranch(ctx, depth + 1))]);
  out.defaultBranch = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranch(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranch:V2modelsIntentInitialResponseSettingConditionalConditionalBranch
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition(ctx, depth + 1));
  out.name = ctx.name;
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition:V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionString = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep:V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent:V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranch:V2modelsIntentInitialResponseSettingConditionalDefaultBranch
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nextStep = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep(ctx, depth + 1));
  out.response = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponse(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep:V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction:V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent:V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot:V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponse:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponse
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponse:V2modelsIntentInitialResponseSettingInitialResponse
export function lex_V2modelsIntentInitialResponseSettingInitialResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroup:V2modelsIntentInitialResponseSettingInitialResponseMessageGroup
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage:V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingNextStep:V2modelsIntentInitialResponseSettingNextStep
export function lex_V2modelsIntentInitialResponseSettingNextStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dialogAction = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingNextStepDialogAction(ctx, depth + 1));
  out.intent = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingNextStepIntent(ctx, depth + 1));
  out.sessionAttributes = {};
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingNextStepDialogAction:V2modelsIntentInitialResponseSettingNextStepDialogAction
export function lex_V2modelsIntentInitialResponseSettingNextStepDialogAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotToElicit = "";
  out.suppressNextMessage = false;
  out.type = "";
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingNextStepIntent:V2modelsIntentInitialResponseSettingNextStepIntent
export function lex_V2modelsIntentInitialResponseSettingNextStepIntent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingNextStepIntentSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingNextStepIntentSlot:V2modelsIntentInitialResponseSettingNextStepIntentSlot
export function lex_V2modelsIntentInitialResponseSettingNextStepIntentSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.shape = "";
  out.value = (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSettingNextStepIntentSlotValue(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsIntentInitialResponseSettingNextStepIntentSlotValue:V2modelsIntentInitialResponseSettingNextStepIntentSlotValue
export function lex_V2modelsIntentInitialResponseSettingNextStepIntentSlotValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interpretedValue = "";
  return out;
}

// aws:lex/V2modelsIntentInputContext:V2modelsIntentInputContext
export function lex_V2modelsIntentInputContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:lex/V2modelsIntentKendraConfiguration:V2modelsIntentKendraConfiguration
export function lex_V2modelsIntentKendraConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kendraIndex = "";
  out.queryFilterString = "";
  out.queryFilterStringEnabled = false;
  return out;
}

// aws:lex/V2modelsIntentOutputContext:V2modelsIntentOutputContext
export function lex_V2modelsIntentOutputContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.timeToLiveInSeconds = 0;
  out.turnsToLive = 0;
  return out;
}

// aws:lex/V2modelsIntentSampleUtterance:V2modelsIntentSampleUtterance
export function lex_V2modelsIntentSampleUtterance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.utterance = "";
  return out;
}

// aws:lex/V2modelsIntentSlotPriority:V2modelsIntentSlotPriority
export function lex_V2modelsIntentSlotPriority(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.slotId = h.id(ctx, "slotId");
  return out;
}

// aws:lex/V2modelsIntentTimeouts:V2modelsIntentTimeouts
export function lex_V2modelsIntentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:lex/V2modelsSlotMultipleValuesSetting:V2modelsSlotMultipleValuesSetting
export function lex_V2modelsSlotMultipleValuesSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowMultipleValues = true;
  return out;
}

// aws:lex/V2modelsSlotObfuscationSetting:V2modelsSlotObfuscationSetting
export function lex_V2modelsSlotObfuscationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.obfuscationSettingType = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSetting:V2modelsSlotSubSlotSetting
export function lex_V2modelsSlotSubSlotSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.slotSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecification:V2modelsSlotSubSlotSettingSlotSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.slotTypeId = h.id(ctx, "slotTypeId");
  out.valueElicitationSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValueSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification(ctx, depth + 1))]);
  out.promptSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification(ctx, depth + 1));
  out.sampleUtterances = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance(ctx, depth + 1))]);
  out.waitAndContinueSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValueLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueList(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueList:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueList
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.maxRetries = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup(ctx, depth + 1))]);
  out.messageSelectionStrategy = "";
  out.promptAttemptsSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.allowedInputTypes = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx, depth + 1));
  out.audioAndDtmfInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx, depth + 1));
  out.mapBlockKey = "";
  out.textInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAudioInput = true;
  out.allowDtmfInput = true;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx, depth + 1));
  out.dtmfSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx, depth + 1));
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endTimeoutMs = 30;
  out.maxLengthMs = 0;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deletionCharacter = "";
  out.endCharacter = "";
  out.endTimeoutMs = 30;
  out.maxLength = 0;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.utterance = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.continueResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse(ctx, depth + 1))]);
  out.stillWaitingResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse(ctx, depth + 1))]);
  out.waitingResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.frequencyInSeconds = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup(ctx, depth + 1))]);
  out.timeoutInSeconds = 30;
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayload = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload(ctx, depth + 1));
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage:V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotTimeouts:V2modelsSlotTimeouts
export function lex_V2modelsSlotTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:lex/V2modelsSlotTypeCompositeSlotTypeSetting:V2modelsSlotTypeCompositeSlotTypeSetting
export function lex_V2modelsSlotTypeCompositeSlotTypeSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subSlots = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotTypeCompositeSlotTypeSettingSubSlot:V2modelsSlotTypeCompositeSlotTypeSettingSubSlot
export function lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.slotTypeId = h.id(ctx, "slotTypeId");
  return out;
}

// aws:lex/V2modelsSlotTypeExternalSourceSetting:V2modelsSlotTypeExternalSourceSetting
export function lex_V2modelsSlotTypeExternalSourceSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grammarSlotTypeSetting = (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting:V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting
export function lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource:V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource
export function lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.s3BucketName = "";
  out.s3ObjectKey = "";
  return out;
}

// aws:lex/V2modelsSlotTypeSlotTypeValues:V2modelsSlotTypeSlotTypeValues
export function lex_V2modelsSlotTypeSlotTypeValues(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sampleValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeSlotTypeValuesSampleValue(ctx, depth + 1))]);
  out.synonyms = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeSlotTypeValuesSynonym(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotTypeSlotTypeValuesSampleValue:V2modelsSlotTypeSlotTypeValuesSampleValue
export function lex_V2modelsSlotTypeSlotTypeValuesSampleValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotTypeSlotTypeValuesSynonym:V2modelsSlotTypeSlotTypeValuesSynonym
export function lex_V2modelsSlotTypeSlotTypeValuesSynonym(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotTypeTimeouts:V2modelsSlotTypeTimeouts
export function lex_V2modelsSlotTypeTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:lex/V2modelsSlotTypeValueSelectionSetting:V2modelsSlotTypeValueSelectionSetting
export function lex_V2modelsSlotTypeValueSelectionSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedRecognitionSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting(ctx, depth + 1))]);
  out.regexFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeValueSelectionSettingRegexFilter(ctx, depth + 1))]);
  out.resolutionStrategy = "";
  return out;
}

// aws:lex/V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting:V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting
export function lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioRecognitionStrategy = "";
  return out;
}

// aws:lex/V2modelsSlotTypeValueSelectionSettingRegexFilter:V2modelsSlotTypeValueSelectionSettingRegexFilter
export function lex_V2modelsSlotTypeValueSelectionSettingRegexFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pattern = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSetting:V2modelsSlotValueElicitationSetting
export function lex_V2modelsSlotValueElicitationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValueSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification(ctx, depth + 1))]);
  out.promptSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecification(ctx, depth + 1));
  out.sampleUtterances = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingSampleUtterance(ctx, depth + 1))]);
  out.slotConstraint = "";
  out.slotResolutionSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting(ctx, depth + 1))]);
  out.waitAndContinueSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingDefaultValueSpecification:V2modelsSlotValueElicitationSettingDefaultValueSpecification
export function lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValueLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList:V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList
export function lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecification:V2modelsSlotValueElicitationSettingPromptSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.maxRetries = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup(ctx, depth + 1))]);
  out.messageSelectionStrategy = "";
  out.promptAttemptsSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage:V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.allowedInputTypes = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx, depth + 1));
  out.audioAndDtmfInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx, depth + 1));
  out.mapBlockKey = "";
  out.textInputSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAudioInput = true;
  out.allowDtmfInput = true;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx, depth + 1));
  out.dtmfSpecification = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx, depth + 1));
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endTimeoutMs = 30;
  out.maxLengthMs = 0;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deletionCharacter = "";
  out.endCharacter = "";
  out.endTimeoutMs = 30;
  out.maxLength = 0;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification:V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification
export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.startTimeoutMs = 30;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingSampleUtterance:V2modelsSlotValueElicitationSettingSampleUtterance
export function lex_V2modelsSlotValueElicitationSettingSampleUtterance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.utterance = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingSlotResolutionSetting:V2modelsSlotValueElicitationSettingSlotResolutionSetting
export function lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.slotResolutionStrategy = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecification:V2modelsSlotValueElicitationSettingWaitAndContinueSpecification
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.continueResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse(ctx, depth + 1))]);
  out.stillWaitingResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse(ctx, depth + 1))]);
  out.waitingResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.frequencyInSeconds = 0;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup(ctx, depth + 1))]);
  out.timeoutInSeconds = 30;
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowInterrupt = true;
  out.messageGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage(ctx, depth + 1));
  out.variations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation(ctx, depth + 1))]);
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customPayloads = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload(ctx, depth + 1))]);
  out.imageResponseCard = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard(ctx, depth + 1));
  out.plainTextMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage(ctx, depth + 1));
  out.ssmlMessage = (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage(ctx, depth + 1));
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buttons = (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton(ctx, depth + 1))]);
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.subtitle = "";
  out.title = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage:V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage
export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:lex/getSlotTypeEnumerationValue:getSlotTypeEnumerationValue
export function lex_getSlotTypeEnumerationValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.synonyms = (depth > 4 ? [] : [""]);
  out.value = "";
  return out;
}

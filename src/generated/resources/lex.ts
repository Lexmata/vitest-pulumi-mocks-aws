// GENERATED FILE — do not edit.
// Service: lex   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lex from "../types/lex.js";

// aws:lex/bot:Bot
export function Bot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abortStatement = (i.abortStatement !== undefined ? i.abortStatement : (depth > 4 ? {} : T_lex.lex_BotAbortStatement(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.checksum = "";
  out.childDirected = (i.childDirected !== undefined ? i.childDirected : false);
  out.clarificationPrompt = (i.clarificationPrompt !== undefined ? i.clarificationPrompt : (depth > 4 ? {} : T_lex.lex_BotClarificationPrompt(ctx, depth + 1)));
  out.createVersion = (i.createVersion !== undefined ? i.createVersion : false);
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.detectSentiment = (i.detectSentiment !== undefined ? i.detectSentiment : false);
  out.enableModelImprovements = (i.enableModelImprovements !== undefined ? i.enableModelImprovements : true);
  out.failureReason = "";
  out.idleSessionTtlInSeconds = (i.idleSessionTtlInSeconds !== undefined ? i.idleSessionTtlInSeconds : 0);
  out.intents = (i.intents !== undefined ? i.intents : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_BotIntent(ctx, depth + 1))]));
  out.lastUpdatedDate = "";
  out.locale = (i.locale !== undefined ? i.locale : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nluIntentConfidenceThreshold = (i.nluIntentConfidenceThreshold !== undefined ? i.nluIntentConfidenceThreshold : 0);
  out.processBehavior = (i.processBehavior !== undefined ? i.processBehavior : "");
  out.status = "active";
  out.version = "1";
  out.voiceId = (i.voiceId !== undefined ? i.voiceId : h.id(ctx, "voiceId"));
  return out;
}

// aws:lex/botAlias:BotAlias
export function BotAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.botName = (i.botName !== undefined ? i.botName : "");
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.checksum = "";
  out.conversationLogs = (i.conversationLogs !== undefined ? i.conversationLogs : (depth > 4 ? {} : T_lex.lex_BotAliasConversationLogs(ctx, depth + 1)));
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:lex/intent:Intent
export function Intent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.checksum = "";
  out.conclusionStatement = (i.conclusionStatement !== undefined ? i.conclusionStatement : (depth > 4 ? {} : T_lex.lex_IntentConclusionStatement(ctx, depth + 1)));
  out.confirmationPrompt = (i.confirmationPrompt !== undefined ? i.confirmationPrompt : (depth > 4 ? {} : T_lex.lex_IntentConfirmationPrompt(ctx, depth + 1)));
  out.createVersion = (i.createVersion !== undefined ? i.createVersion : false);
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.dialogCodeHook = (i.dialogCodeHook !== undefined ? i.dialogCodeHook : (depth > 4 ? {} : T_lex.lex_IntentDialogCodeHook(ctx, depth + 1)));
  out.followUpPrompt = (i.followUpPrompt !== undefined ? i.followUpPrompt : (depth > 4 ? {} : T_lex.lex_IntentFollowUpPrompt(ctx, depth + 1)));
  out.fulfillmentActivity = (i.fulfillmentActivity !== undefined ? i.fulfillmentActivity : (depth > 4 ? {} : T_lex.lex_IntentFulfillmentActivity(ctx, depth + 1)));
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentIntentSignature = (i.parentIntentSignature !== undefined ? i.parentIntentSignature : "");
  out.rejectionStatement = (i.rejectionStatement !== undefined ? i.rejectionStatement : (depth > 4 ? {} : T_lex.lex_IntentRejectionStatement(ctx, depth + 1)));
  out.sampleUtterances = (i.sampleUtterances !== undefined ? i.sampleUtterances : (depth > 4 ? [] : [""]));
  out.slots = (i.slots !== undefined ? i.slots : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_IntentSlot(ctx, depth + 1))]));
  out.version = "1";
  return out;
}

// aws:lex/slotType:SlotType
export function SlotType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.checksum = "";
  out.createVersion = (i.createVersion !== undefined ? i.createVersion : false);
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.enumerationValues = (i.enumerationValues !== undefined ? i.enumerationValues : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_SlotTypeEnumerationValue(ctx, depth + 1))]));
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.valueSelectionStrategy = (i.valueSelectionStrategy !== undefined ? i.valueSelectionStrategy : "");
  out.version = "1";
  return out;
}

// aws:lex/v2modelsBot:V2modelsBot
export function V2modelsBot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataPrivacies = (i.dataPrivacies !== undefined ? i.dataPrivacies : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsBotDataPrivacy(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.idleSessionTtlInSeconds = (i.idleSessionTtlInSeconds !== undefined ? i.idleSessionTtlInSeconds : 0);
  out.members = (i.members !== undefined ? i.members : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsBotMember(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.testBotAliasTags = (i.testBotAliasTags !== undefined ? i.testBotAliasTags : {});
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsBotTimeouts(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:lex/v2modelsBotLocale:V2modelsBotLocale
export function V2modelsBotLocale(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.botId = (i.botId !== undefined ? i.botId : h.id(ctx, "botId"));
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.localeId = (i.localeId !== undefined ? i.localeId : h.id(ctx, "localeId"));
  out.nLuIntentConfidenceThreshold = (i.nLuIntentConfidenceThreshold !== undefined ? i.nLuIntentConfidenceThreshold : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsBotLocaleTimeouts(ctx, depth + 1)));
  out.voiceSettings = (i.voiceSettings !== undefined ? i.voiceSettings : (depth > 4 ? {} : T_lex.lex_V2modelsBotLocaleVoiceSettings(ctx, depth + 1)));
  return out;
}

// aws:lex/v2modelsBotVersion:V2modelsBotVersion
export function V2modelsBotVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.botId = (i.botId !== undefined ? i.botId : h.id(ctx, "botId"));
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.localeSpecification = (i.localeSpecification !== undefined ? i.localeSpecification : {});
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsBotVersionTimeouts(ctx, depth + 1)));
  return out;
}

// aws:lex/v2modelsIntent:V2modelsIntent
export function V2modelsIntent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.botId = (i.botId !== undefined ? i.botId : h.id(ctx, "botId"));
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.closingSetting = (i.closingSetting !== undefined ? i.closingSetting : (depth > 4 ? {} : T_lex.lex_V2modelsIntentClosingSetting(ctx, depth + 1)));
  out.confirmationSetting = (i.confirmationSetting !== undefined ? i.confirmationSetting : (depth > 4 ? {} : T_lex.lex_V2modelsIntentConfirmationSetting(ctx, depth + 1)));
  out.creationDateTime = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.dialogCodeHook = (i.dialogCodeHook !== undefined ? i.dialogCodeHook : (depth > 4 ? {} : T_lex.lex_V2modelsIntentDialogCodeHook(ctx, depth + 1)));
  out.fulfillmentCodeHook = (i.fulfillmentCodeHook !== undefined ? i.fulfillmentCodeHook : (depth > 4 ? {} : T_lex.lex_V2modelsIntentFulfillmentCodeHook(ctx, depth + 1)));
  out.initialResponseSetting = (i.initialResponseSetting !== undefined ? i.initialResponseSetting : (depth > 4 ? {} : T_lex.lex_V2modelsIntentInitialResponseSetting(ctx, depth + 1)));
  out.inputContexts = (i.inputContexts !== undefined ? i.inputContexts : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentInputContext(ctx, depth + 1))]));
  out.intentId = h.id(ctx, "intentId");
  out.kendraConfiguration = (i.kendraConfiguration !== undefined ? i.kendraConfiguration : (depth > 4 ? {} : T_lex.lex_V2modelsIntentKendraConfiguration(ctx, depth + 1)));
  out.lastUpdatedDateTime = "";
  out.localeId = (i.localeId !== undefined ? i.localeId : h.id(ctx, "localeId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputContexts = (i.outputContexts !== undefined ? i.outputContexts : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentOutputContext(ctx, depth + 1))]));
  out.parentIntentSignature = (i.parentIntentSignature !== undefined ? i.parentIntentSignature : "");
  out.sampleUtterances = (i.sampleUtterances !== undefined ? i.sampleUtterances : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentSampleUtterance(ctx, depth + 1))]));
  out.slotPriorities = (i.slotPriorities !== undefined ? i.slotPriorities : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsIntentSlotPriority(ctx, depth + 1))]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsIntentTimeouts(ctx, depth + 1)));
  return out;
}

// aws:lex/v2modelsSlot:V2modelsSlot
export function V2modelsSlot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.botId = (i.botId !== undefined ? i.botId : h.id(ctx, "botId"));
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.intentId = (i.intentId !== undefined ? i.intentId : h.id(ctx, "intentId"));
  out.localeId = (i.localeId !== undefined ? i.localeId : h.id(ctx, "localeId"));
  out.multipleValuesSettings = (i.multipleValuesSettings !== undefined ? i.multipleValuesSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotMultipleValuesSetting(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.obfuscationSettings = (i.obfuscationSettings !== undefined ? i.obfuscationSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotObfuscationSetting(ctx, depth + 1))]));
  out.slotId = h.id(ctx, "slotId");
  out.slotTypeId = (i.slotTypeId !== undefined ? i.slotTypeId : h.id(ctx, "slotTypeId"));
  out.subSlotSettings = (i.subSlotSettings !== undefined ? i.subSlotSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_lex.lex_V2modelsSlotSubSlotSetting(ctx, depth + 1))]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTimeouts(ctx, depth + 1)));
  out.valueElicitationSetting = (i.valueElicitationSetting !== undefined ? i.valueElicitationSetting : (depth > 4 ? {} : T_lex.lex_V2modelsSlotValueElicitationSetting(ctx, depth + 1)));
  return out;
}

// aws:lex/v2modelsSlotType:V2modelsSlotType
export function V2modelsSlotType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.botId = (i.botId !== undefined ? i.botId : h.id(ctx, "botId"));
  out.botVersion = (i.botVersion !== undefined ? i.botVersion : "");
  out.compositeSlotTypeSetting = (i.compositeSlotTypeSetting !== undefined ? i.compositeSlotTypeSetting : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeCompositeSlotTypeSetting(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.externalSourceSetting = (i.externalSourceSetting !== undefined ? i.externalSourceSetting : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeExternalSourceSetting(ctx, depth + 1)));
  out.localeId = (i.localeId !== undefined ? i.localeId : h.id(ctx, "localeId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentSlotTypeSignature = (i.parentSlotTypeSignature !== undefined ? i.parentSlotTypeSignature : "");
  out.slotTypeId = h.id(ctx, "slotTypeId");
  out.slotTypeValues = (i.slotTypeValues !== undefined ? i.slotTypeValues : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeSlotTypeValues(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeTimeouts(ctx, depth + 1)));
  out.valueSelectionSetting = (i.valueSelectionSetting !== undefined ? i.valueSelectionSetting : (depth > 4 ? {} : T_lex.lex_V2modelsSlotTypeValueSelectionSetting(ctx, depth + 1)));
  return out;
}

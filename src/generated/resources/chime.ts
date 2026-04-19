// GENERATED FILE — do not edit.
// Service: chime   (12 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chime from "../types/chime.js";

// aws:chime/sdkvoiceGlobalSettings:SdkvoiceGlobalSettings
export function SdkvoiceGlobalSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.voiceConnector = (i.voiceConnector !== undefined ? i.voiceConnector : (depth > 4 ? {} : T_chime.chime_SdkvoiceGlobalSettingsVoiceConnector(ctx, depth + 1)));
  return out;
}

// aws:chime/sdkvoiceSipMediaApplication:SdkvoiceSipMediaApplication
export function SdkvoiceSipMediaApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsRegion = (i.awsRegion !== undefined ? i.awsRegion : "");
  out.endpoints = (i.endpoints !== undefined ? i.endpoints : (depth > 4 ? {} : T_chime.chime_SdkvoiceSipMediaApplicationEndpoints(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:chime/sdkvoiceSipRule:SdkvoiceSipRule
export function SdkvoiceSipRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.targetApplications = (i.targetApplications !== undefined ? i.targetApplications : (depth > 4 ? [] : [(depth > 4 ? {} : T_chime.chime_SdkvoiceSipRuleTargetApplication(ctx, depth + 1))]));
  out.triggerType = (i.triggerType !== undefined ? i.triggerType : "");
  out.triggerValue = (i.triggerValue !== undefined ? i.triggerValue : "");
  return out;
}

// aws:chime/sdkvoiceVoiceProfileDomain:SdkvoiceVoiceProfileDomain
export function SdkvoiceVoiceProfileDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serverSideEncryptionConfiguration = (i.serverSideEncryptionConfiguration !== undefined ? i.serverSideEncryptionConfiguration : (depth > 4 ? {} : T_chime.chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:chime/voiceConnector:VoiceConnector
export function VoiceConnector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsRegion = (i.awsRegion !== undefined ? i.awsRegion : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outboundHostName = "";
  out.requireEncryption = (i.requireEncryption !== undefined ? i.requireEncryption : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:chime/voiceConnectorGroup:VoiceConnectorGroup
export function VoiceConnectorGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectors = (i.connectors !== undefined ? i.connectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_chime.chime_VoiceConnectorGroupConnector(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:chime/voiceConnectorLogging:VoiceConnectorLogging
export function VoiceConnectorLogging(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableMediaMetricLogs = (i.enableMediaMetricLogs !== undefined ? i.enableMediaMetricLogs : true);
  out.enableSipLogs = (i.enableSipLogs !== undefined ? i.enableSipLogs : true);
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

// aws:chime/voiceConnectorOrganization:VoiceConnectorOrganization
export function VoiceConnectorOrganization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.routes = (i.routes !== undefined ? i.routes : (depth > 4 ? [] : [(depth > 4 ? {} : T_chime.chime_VoiceConnectorOrganizationRoute(ctx, depth + 1))]));
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

// aws:chime/voiceConnectorOrigination:VoiceConnectorOrigination
export function VoiceConnectorOrigination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.routes = (i.routes !== undefined ? i.routes : (depth > 4 ? [] : [(depth > 4 ? {} : T_chime.chime_VoiceConnectorOriginationRoute(ctx, depth + 1))]));
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

// aws:chime/voiceConnectorStreaming:VoiceConnectorStreaming
export function VoiceConnectorStreaming(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataRetention = (i.dataRetention !== undefined ? i.dataRetention : 0);
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.mediaInsightsConfiguration = (i.mediaInsightsConfiguration !== undefined ? i.mediaInsightsConfiguration : (depth > 4 ? {} : T_chime.chime_VoiceConnectorStreamingMediaInsightsConfiguration(ctx, depth + 1)));
  out.streamingNotificationTargets = (i.streamingNotificationTargets !== undefined ? i.streamingNotificationTargets : (depth > 4 ? [] : [""]));
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

// aws:chime/voiceConnectorTermination:VoiceConnectorTermination
export function VoiceConnectorTermination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.callingRegions = (i.callingRegions !== undefined ? i.callingRegions : (depth > 4 ? [] : [""]));
  out.cidrAllowLists = (i.cidrAllowLists !== undefined ? i.cidrAllowLists : (depth > 4 ? [] : [""]));
  out.cpsLimit = (i.cpsLimit !== undefined ? i.cpsLimit : 0);
  out.defaultPhoneNumber = (i.defaultPhoneNumber !== undefined ? i.defaultPhoneNumber : "");
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

// aws:chime/voiceConnectorTerminationCredentials:VoiceConnectorTerminationCredentials
export function VoiceConnectorTerminationCredentials(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentials = (i.credentials !== undefined ? i.credentials : (depth > 4 ? [] : [(depth > 4 ? {} : T_chime.chime_VoiceConnectorTerminationCredentialsCredential(ctx, depth + 1))]));
  out.voiceConnectorId = (i.voiceConnectorId !== undefined ? i.voiceConnectorId : h.id(ctx, "voiceConnectorId"));
  return out;
}

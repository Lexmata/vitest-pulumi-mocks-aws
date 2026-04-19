// GENERATED FILE — do not edit.
// Service: chime   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chime from "./chime.js";

// aws:chime/SdkvoiceGlobalSettingsVoiceConnector:SdkvoiceGlobalSettingsVoiceConnector
export function chime_SdkvoiceGlobalSettingsVoiceConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cdrBucket = "";
  return out;
}

// aws:chime/SdkvoiceSipMediaApplicationEndpoints:SdkvoiceSipMediaApplicationEndpoints
export function chime_SdkvoiceSipMediaApplicationEndpoints(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  return out;
}

// aws:chime/SdkvoiceSipRuleTargetApplication:SdkvoiceSipRuleTargetApplication
export function chime_SdkvoiceSipRuleTargetApplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsRegion = "";
  out.priority = 0;
  out.sipMediaApplicationId = h.id(ctx, "sipMediaApplicationId");
  return out;
}

// aws:chime/SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration:SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration
export function chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:chime/VoiceConnectorGroupConnector:VoiceConnectorGroupConnector
export function chime_VoiceConnectorGroupConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.voiceConnectorId = h.id(ctx, "voiceConnectorId");
  return out;
}

// aws:chime/VoiceConnectorOrganizationRoute:VoiceConnectorOrganizationRoute
export function chime_VoiceConnectorOrganizationRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.port = 443;
  out.priority = 0;
  out.protocol = "";
  out.weight = 0;
  return out;
}

// aws:chime/VoiceConnectorOriginationRoute:VoiceConnectorOriginationRoute
export function chime_VoiceConnectorOriginationRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.port = 443;
  out.priority = 0;
  out.protocol = "";
  out.weight = 0;
  return out;
}

// aws:chime/VoiceConnectorStreamingMediaInsightsConfiguration:VoiceConnectorStreamingMediaInsightsConfiguration
export function chime_VoiceConnectorStreamingMediaInsightsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationArn = h.arn(ctx);
  out.disabled = false;
  return out;
}

// aws:chime/VoiceConnectorTerminationCredentialsCredential:VoiceConnectorTerminationCredentialsCredential
export function chime_VoiceConnectorTerminationCredentialsCredential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

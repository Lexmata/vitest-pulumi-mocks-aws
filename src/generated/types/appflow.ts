// GENERATED FILE — do not edit.
// Service: appflow   (115 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appflow from "./appflow.js";

// aws:appflow/ConnectorProfileConnectorProfileConfig:ConnectorProfileConnectorProfileConfig
export function appflow_ConnectorProfileConnectorProfileConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectorProfileCredentials = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials(ctx, depth + 1));
  out.connectorProfileProperties = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentials:ConnectorProfileConnectorProfileConfigConnectorProfileCredentials
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amplitude = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude(ctx, depth + 1));
  out.customConnector = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector(ctx, depth + 1));
  out.datadog = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog(ctx, depth + 1));
  out.dynatrace = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace(ctx, depth + 1));
  out.googleAnalytics = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics(ctx, depth + 1));
  out.honeycode = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode(ctx, depth + 1));
  out.inforNexus = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus(ctx, depth + 1));
  out.marketo = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo(ctx, depth + 1));
  out.redshift = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift(ctx, depth + 1));
  out.salesforce = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce(ctx, depth + 1));
  out.sapoData = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData(ctx, depth + 1));
  out.serviceNow = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow(ctx, depth + 1));
  out.singular = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular(ctx, depth + 1));
  out.slack = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack(ctx, depth + 1));
  out.snowflake = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake(ctx, depth + 1));
  out.trendmicro = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro(ctx, depth + 1));
  out.veeva = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva(ctx, depth + 1));
  out.zendesk = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  out.secretKey = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey(ctx, depth + 1));
  out.authenticationType = "";
  out.basic = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic(ctx, depth + 1));
  out.custom = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom(ctx, depth + 1));
  out.oauth2 = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  out.apiSecretKey = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialsMap = {};
  out.customAuthenticationType = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest(ctx, depth + 1));
  out.refreshToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  out.applicationKey = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest(ctx, depth + 1));
  out.refreshToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest(ctx, depth + 1));
  out.refreshToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKeyId = h.id(ctx, "accessKeyId");
  out.datakey = "";
  out.secretAccessKey = "";
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientCredentialsArn = h.arn(ctx);
  out.jwtToken = "";
  out.oauth2GrantType = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest(ctx, depth + 1));
  out.refreshToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuthCredentials = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials(ctx, depth + 1));
  out.oauthCredentials = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest(ctx, depth + 1));
  out.refreshToken = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiSecretKey = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.oauthRequest = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest:ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCode = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfileProperties:ConnectorProfileConnectorProfileConfigConnectorProfileProperties
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amplitude = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude(ctx, depth + 1));
  out.customConnector = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector(ctx, depth + 1));
  out.datadog = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog(ctx, depth + 1));
  out.dynatrace = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace(ctx, depth + 1));
  out.googleAnalytics = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics(ctx, depth + 1));
  out.honeycode = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode(ctx, depth + 1));
  out.inforNexus = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus(ctx, depth + 1));
  out.marketo = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo(ctx, depth + 1));
  out.redshift = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift(ctx, depth + 1));
  out.salesforce = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce(ctx, depth + 1));
  out.sapoData = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData(ctx, depth + 1));
  out.serviceNow = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow(ctx, depth + 1));
  out.singular = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular(ctx, depth + 1));
  out.slack = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack(ctx, depth + 1));
  out.snowflake = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake(ctx, depth + 1));
  out.trendmicro = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro(ctx, depth + 1));
  out.veeva = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva(ctx, depth + 1));
  out.zendesk = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk(ctx, depth + 1));
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oauth2Properties = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties(ctx, depth + 1));
  out.profileProperties = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oauth2GrantType = "";
  out.tokenUrl = h.endpoint(ctx, "tokenUrl");
  out.tokenUrlCustomProperties = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.clusterIdentifier = "";
  out.dataApiRoleArn = h.arn(ctx);
  out.databaseName = "";
  out.databaseUrl = h.endpoint(ctx, "databaseUrl");
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  out.isSandboxEnvironment = true;
  out.usePrivatelinkForMetadataAndAuthorization = false;
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationHostUrl = h.endpoint(ctx, "applicationHostUrl");
  out.applicationServicePath = "";
  out.clientNumber = "";
  out.logonLanguage = "";
  out.oauthProperties = (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties(ctx, depth + 1));
  out.portNumber = 443;
  out.privateLinkServiceName = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authCodeUrl = h.endpoint(ctx, "authCodeUrl");
  out.oauthScopes = (depth > 4 ? [] : [""]);
  out.tokenUrl = h.endpoint(ctx, "tokenUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountName = "";
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.privateLinkServiceName = "";
  out.region = ctx.region;
  out.stage = "";
  out.warehouse = "";
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk:ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk
export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceUrl = h.endpoint(ctx, "instanceUrl");
  return out;
}

// aws:appflow/FlowDestinationFlowConfig:FlowDestinationFlowConfig
export function appflow_FlowDestinationFlowConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiVersion = "";
  out.connectorProfileName = "";
  out.connectorType = "";
  out.destinationConnectorProperties = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorProperties(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorProperties:FlowDestinationFlowConfigDestinationConnectorProperties
export function appflow_FlowDestinationFlowConfigDestinationConnectorProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customConnector = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector(ctx, depth + 1));
  out.customerProfiles = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles(ctx, depth + 1));
  out.eventBridge = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge(ctx, depth + 1));
  out.honeycode = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode(ctx, depth + 1));
  out.lookoutMetrics = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics(ctx, depth + 1));
  out.marketo = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo(ctx, depth + 1));
  out.redshift = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3(ctx, depth + 1));
  out.salesforce = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce(ctx, depth + 1));
  out.sapoData = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData(ctx, depth + 1));
  out.snowflake = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake(ctx, depth + 1));
  out.upsolver = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver(ctx, depth + 1));
  out.zendesk = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector:FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customProperties = {};
  out.entityName = "";
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig(ctx, depth + 1));
  out.idFieldNames = (depth > 4 ? [] : [""]);
  out.writeOperationType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles:FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.objectTypeName = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge:FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig(ctx, depth + 1));
  out.object = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode:FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig(ctx, depth + 1));
  out.object = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics:FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo:FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig(ctx, depth + 1));
  out.object = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift:FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketPrefix = "";
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig(ctx, depth + 1));
  out.intermediateBucketName = "";
  out.object = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesS3:FlowDestinationFlowConfigDestinationConnectorPropertiesS3
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.s3OutputFormatConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig(ctx, depth + 1));
  out.fileType = "";
  out.prefixConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig(ctx, depth + 1));
  out.preserveSourceDataTyping = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationType = "";
  out.targetFileSize = 8;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefixFormat = "";
  out.prefixHierarchies = (depth > 4 ? [] : [""]);
  out.prefixType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce:FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataTransferApi = "";
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig(ctx, depth + 1));
  out.idFieldNames = (depth > 4 ? [] : [""]);
  out.object = "";
  out.writeOperationType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData:FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig(ctx, depth + 1));
  out.idFieldNames = (depth > 4 ? [] : [""]);
  out.objectPath = "";
  out.successResponseHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig(ctx, depth + 1));
  out.writeOperationType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake:FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketPrefix = "";
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig(ctx, depth + 1));
  out.intermediateBucketName = "";
  out.object = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver:FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.s3OutputFormatConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig(ctx, depth + 1));
  out.fileType = "";
  out.prefixConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefixFormat = "";
  out.prefixHierarchies = (depth > 4 ? [] : [""]);
  out.prefixType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk:FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorHandlingConfig = (depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig(ctx, depth + 1));
  out.idFieldNames = (depth > 4 ? [] : [""]);
  out.object = "";
  out.writeOperationType = "";
  return out;
}

// aws:appflow/FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig:FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig
export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.failOnFirstDestinationError = false;
  return out;
}

// aws:appflow/FlowMetadataCatalogConfig:FlowMetadataCatalogConfig
export function appflow_FlowMetadataCatalogConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.glueDataCatalog = (depth > 4 ? {} : T_appflow.appflow_FlowMetadataCatalogConfigGlueDataCatalog(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowMetadataCatalogConfigGlueDataCatalog:FlowMetadataCatalogConfigGlueDataCatalog
export function appflow_FlowMetadataCatalogConfigGlueDataCatalog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.roleArn = h.arn(ctx);
  out.tablePrefix = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfig:FlowSourceFlowConfig
export function appflow_FlowSourceFlowConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiVersion = "";
  out.connectorProfileName = "";
  out.connectorType = "";
  out.incrementalPullConfig = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigIncrementalPullConfig(ctx, depth + 1));
  out.sourceConnectorProperties = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorProperties(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowSourceFlowConfigIncrementalPullConfig:FlowSourceFlowConfigIncrementalPullConfig
export function appflow_FlowSourceFlowConfigIncrementalPullConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.datetimeTypeFieldName = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorProperties:FlowSourceFlowConfigSourceConnectorProperties
export function appflow_FlowSourceFlowConfigSourceConnectorProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amplitude = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude(ctx, depth + 1));
  out.customConnector = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector(ctx, depth + 1));
  out.datadog = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog(ctx, depth + 1));
  out.dynatrace = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace(ctx, depth + 1));
  out.googleAnalytics = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics(ctx, depth + 1));
  out.inforNexus = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus(ctx, depth + 1));
  out.marketo = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3(ctx, depth + 1));
  out.salesforce = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce(ctx, depth + 1));
  out.sapoData = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData(ctx, depth + 1));
  out.serviceNow = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow(ctx, depth + 1));
  out.singular = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular(ctx, depth + 1));
  out.slack = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack(ctx, depth + 1));
  out.trendmicro = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro(ctx, depth + 1));
  out.veeva = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva(ctx, depth + 1));
  out.zendesk = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesAmplitude:FlowSourceFlowConfigSourceConnectorPropertiesAmplitude
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector:FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customProperties = {};
  out.entityName = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesDatadog:FlowSourceFlowConfigSourceConnectorPropertiesDatadog
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesDynatrace:FlowSourceFlowConfigSourceConnectorPropertiesDynatrace
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics:FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesInforNexus:FlowSourceFlowConfigSourceConnectorPropertiesInforNexus
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesMarketo:FlowSourceFlowConfigSourceConnectorPropertiesMarketo
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesS3:FlowSourceFlowConfigSourceConnectorPropertiesS3
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.s3InputFormatConfig = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig:FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3InputFileType = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSalesforce:FlowSourceFlowConfigSourceConnectorPropertiesSalesforce
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataTransferApi = "";
  out.enableDynamicFieldUpdate = true;
  out.includeDeletedRecords = false;
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSapoData:FlowSourceFlowConfigSourceConnectorPropertiesSapoData
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.objectPath = "";
  out.paginationConfig = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig(ctx, depth + 1));
  out.parallelismConfig = (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig:FlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxPageSize = 8;
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig:FlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxPageSize = 8;
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesServiceNow:FlowSourceFlowConfigSourceConnectorPropertiesServiceNow
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSingular:FlowSourceFlowConfigSourceConnectorPropertiesSingular
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesSlack:FlowSourceFlowConfigSourceConnectorPropertiesSlack
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro:FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesVeeva:FlowSourceFlowConfigSourceConnectorPropertiesVeeva
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.documentType = "";
  out.includeAllVersions = false;
  out.includeRenditions = false;
  out.includeSourceFiles = false;
  out.object = "";
  return out;
}

// aws:appflow/FlowSourceFlowConfigSourceConnectorPropertiesZendesk:FlowSourceFlowConfigSourceConnectorPropertiesZendesk
export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.object = "";
  return out;
}

// aws:appflow/FlowTask:FlowTask
export function appflow_FlowTask(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectorOperators = (depth > 4 ? [] : [(depth > 4 ? {} : T_appflow.appflow_FlowTaskConnectorOperator(ctx, depth + 1))]);
  out.destinationField = "";
  out.sourceFields = (depth > 4 ? [] : [""]);
  out.taskProperties = {};
  out.taskType = "";
  return out;
}

// aws:appflow/FlowTaskConnectorOperator:FlowTaskConnectorOperator
export function appflow_FlowTaskConnectorOperator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amplitude = "";
  out.customConnector = "";
  out.datadog = "";
  out.dynatrace = "";
  out.googleAnalytics = "";
  out.inforNexus = "";
  out.marketo = "";
  out.s3 = "";
  out.salesforce = "";
  out.sapoData = "";
  out.serviceNow = "";
  out.singular = "";
  out.slack = "";
  out.trendmicro = "";
  out.veeva = "";
  out.zendesk = "";
  return out;
}

// aws:appflow/FlowTriggerConfig:FlowTriggerConfig
export function appflow_FlowTriggerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.triggerProperties = (depth > 4 ? {} : T_appflow.appflow_FlowTriggerConfigTriggerProperties(ctx, depth + 1));
  out.triggerType = "";
  return out;
}

// aws:appflow/FlowTriggerConfigTriggerProperties:FlowTriggerConfigTriggerProperties
export function appflow_FlowTriggerConfigTriggerProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scheduled = (depth > 4 ? {} : T_appflow.appflow_FlowTriggerConfigTriggerPropertiesScheduled(ctx, depth + 1));
  return out;
}

// aws:appflow/FlowTriggerConfigTriggerPropertiesScheduled:FlowTriggerConfigTriggerPropertiesScheduled
export function appflow_FlowTriggerConfigTriggerPropertiesScheduled(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataPullMode = "";
  out.firstExecutionFrom = "";
  out.scheduleEndTime = "";
  out.scheduleExpression = "";
  out.scheduleOffset = 0;
  out.scheduleStartTime = "";
  out.timezone = "";
  return out;
}

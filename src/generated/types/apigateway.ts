// GENERATED FILE — do not edit.
// Service: apigateway   (18 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigateway from "./apigateway.js";

// aws:apigateway/AccountThrottleSetting:AccountThrottleSetting
export function apigateway_AccountThrottleSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.burstLimit = 0;
  out.rateLimit = 0;
  return out;
}

// aws:apigateway/DeploymentCanarySettings:DeploymentCanarySettings
export function apigateway_DeploymentCanarySettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.percentTraffic = 0;
  out.stageVariableOverrides = {};
  out.useStageCache = false;
  return out;
}

// aws:apigateway/DocumentationPartLocation:DocumentationPartLocation
export function apigateway_DocumentationPartLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.method = "";
  out.name = ctx.name;
  out.path = "";
  out.statusCode = "";
  out.type = "";
  return out;
}

// aws:apigateway/DomainNameEndpointConfiguration:DomainNameEndpointConfiguration
export function apigateway_DomainNameEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.types = "";
  return out;
}

// aws:apigateway/DomainNameMutualTlsAuthentication:DomainNameMutualTlsAuthentication
export function apigateway_DomainNameMutualTlsAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.truststoreUri = h.endpoint(ctx, "truststoreUri");
  out.truststoreVersion = "";
  return out;
}

// aws:apigateway/IntegrationTlsConfig:IntegrationTlsConfig
export function apigateway_IntegrationTlsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insecureSkipVerification = false;
  return out;
}

// aws:apigateway/MethodSettingsSettings:MethodSettingsSettings
export function apigateway_MethodSettingsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheDataEncrypted = false;
  out.cacheTtlInSeconds = 0;
  out.cachingEnabled = false;
  out.dataTraceEnabled = false;
  out.loggingLevel = "";
  out.metricsEnabled = false;
  out.requireAuthorizationForCacheControl = false;
  out.throttlingBurstLimit = 0;
  out.throttlingRateLimit = 0;
  out.unauthorizedCacheControlHeaderStrategy = "";
  return out;
}

// aws:apigateway/RestApiEndpointConfiguration:RestApiEndpointConfiguration
export function apigateway_RestApiEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.types = "";
  out.vpcEndpointIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:apigateway/RestApiPutTimeouts:RestApiPutTimeouts
export function apigateway_RestApiPutTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:apigateway/StageAccessLogSettings:StageAccessLogSettings
export function apigateway_StageAccessLogSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationArn = h.arn(ctx);
  out.format = "";
  return out;
}

// aws:apigateway/StageCanarySettings:StageCanarySettings
export function apigateway_StageCanarySettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deploymentId = h.id(ctx, "deploymentId");
  out.percentTraffic = 0;
  out.stageVariableOverrides = {};
  out.useStageCache = false;
  return out;
}

// aws:apigateway/UsagePlanApiStage:UsagePlanApiStage
export function apigateway_UsagePlanApiStage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = h.id(ctx, "apiId");
  out.stage = "";
  out.throttles = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_UsagePlanApiStageThrottle(ctx, depth + 1))]);
  return out;
}

// aws:apigateway/UsagePlanApiStageThrottle:UsagePlanApiStageThrottle
export function apigateway_UsagePlanApiStageThrottle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.burstLimit = 0;
  out.path = "";
  out.rateLimit = 0;
  return out;
}

// aws:apigateway/UsagePlanQuotaSettings:UsagePlanQuotaSettings
export function apigateway_UsagePlanQuotaSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limit = 0;
  out.offset = 0;
  out.period = "";
  return out;
}

// aws:apigateway/UsagePlanThrottleSettings:UsagePlanThrottleSettings
export function apigateway_UsagePlanThrottleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.burstLimit = 0;
  out.rateLimit = 0;
  return out;
}

// aws:apigateway/getApiKeysItem:getApiKeysItem
export function apigateway_getApiKeysItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.customerId = h.id(ctx, "customerId");
  out.description = "";
  out.enabled = true;
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.name = ctx.name;
  out.stageKeys = (depth > 4 ? [] : [""]);
  out.tags = {};
  out.value = "";
  return out;
}

// aws:apigateway/getDomainNameEndpointConfiguration:getDomainNameEndpointConfiguration
export function apigateway_getDomainNameEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.types = (depth > 4 ? [] : [""]);
  return out;
}

// aws:apigateway/getRestApiEndpointConfiguration:getRestApiEndpointConfiguration
export function apigateway_getRestApiEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.types = (depth > 4 ? [] : [""]);
  out.vpcEndpointIds = (depth > 4 ? [] : [""]);
  return out;
}

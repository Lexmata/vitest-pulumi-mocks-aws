// GENERATED FILE — do not edit.
// Service: apigatewayv2   (11 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigatewayv2 from "./apigatewayv2.js";

// aws:apigatewayv2/ApiCorsConfiguration:ApiCorsConfiguration
export function apigatewayv2_ApiCorsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowCredentials = true;
  out.allowHeaders = (depth > 4 ? [] : [""]);
  out.allowMethods = (depth > 4 ? [] : [""]);
  out.allowOrigins = (depth > 4 ? [] : [""]);
  out.exposeHeaders = (depth > 4 ? [] : [""]);
  out.maxAge = 0;
  return out;
}

// aws:apigatewayv2/AuthorizerJwtConfiguration:AuthorizerJwtConfiguration
export function apigatewayv2_AuthorizerJwtConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audiences = (depth > 4 ? [] : [""]);
  out.issuer = "";
  return out;
}

// aws:apigatewayv2/DomainNameDomainNameConfiguration:DomainNameDomainNameConfiguration
export function apigatewayv2_DomainNameDomainNameConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.endpointType = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.ipAddressType = "";
  out.ownershipVerificationCertificateArn = h.arn(ctx);
  out.securityPolicy = "";
  out.targetDomainName = h.endpoint(ctx, "targetDomainName");
  return out;
}

// aws:apigatewayv2/DomainNameMutualTlsAuthentication:DomainNameMutualTlsAuthentication
export function apigatewayv2_DomainNameMutualTlsAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.truststoreUri = h.endpoint(ctx, "truststoreUri");
  out.truststoreVersion = "";
  return out;
}

// aws:apigatewayv2/IntegrationResponseParameter:IntegrationResponseParameter
export function apigatewayv2_IntegrationResponseParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mappings = {};
  out.statusCode = "";
  return out;
}

// aws:apigatewayv2/IntegrationTlsConfig:IntegrationTlsConfig
export function apigatewayv2_IntegrationTlsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serverNameToVerify = "";
  return out;
}

// aws:apigatewayv2/RouteRequestParameter:RouteRequestParameter
export function apigatewayv2_RouteRequestParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.requestParameterKey = "";
  out.required = false;
  return out;
}

// aws:apigatewayv2/StageAccessLogSettings:StageAccessLogSettings
export function apigatewayv2_StageAccessLogSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationArn = h.arn(ctx);
  out.format = "";
  return out;
}

// aws:apigatewayv2/StageDefaultRouteSettings:StageDefaultRouteSettings
export function apigatewayv2_StageDefaultRouteSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataTraceEnabled = false;
  out.detailedMetricsEnabled = false;
  out.loggingLevel = "";
  out.throttlingBurstLimit = 0;
  out.throttlingRateLimit = 0;
  return out;
}

// aws:apigatewayv2/StageRouteSetting:StageRouteSetting
export function apigatewayv2_StageRouteSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataTraceEnabled = false;
  out.detailedMetricsEnabled = false;
  out.loggingLevel = "";
  out.routeKey = "";
  out.throttlingBurstLimit = 0;
  out.throttlingRateLimit = 0;
  return out;
}

// aws:apigatewayv2/getApiCorsConfiguration:getApiCorsConfiguration
export function apigatewayv2_getApiCorsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowCredentials = true;
  out.allowHeaders = (depth > 4 ? [] : [""]);
  out.allowMethods = (depth > 4 ? [] : [""]);
  out.allowOrigins = (depth > 4 ? [] : [""]);
  out.exposeHeaders = (depth > 4 ? [] : [""]);
  out.maxAge = 0;
  return out;
}

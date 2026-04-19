// GENERATED FILE — do not edit.
// Service: apigateway   (10 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigateway from "../types/apigateway.js";

// aws:apigateway/getApiKeys:getApiKeys
export function getApiKeys(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerId = (i.customerId !== undefined ? i.customerId : h.id(ctx, "customerId"));
  out.id = h.id(ctx, "id");
  out.includeValues = (i.includeValues !== undefined ? i.includeValues : false);
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_getApiKeysItem(ctx, depth + 1))]);
  return out;
}

// aws:apigateway/getAuthorizer:getAuthorizer
export function getAuthorizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authorizerCredentials = "";
  out.authorizerId = (i.authorizerId !== undefined ? i.authorizerId : h.id(ctx, "authorizerId"));
  out.authorizerResultTtlInSeconds = 0;
  out.authorizerUri = h.endpoint(ctx, "authorizerUri");
  out.id = h.id(ctx, "id");
  out.identitySource = "";
  out.identityValidationExpression = "";
  out.name = ctx.name;
  out.providerArns = (depth > 4 ? [] : [""]);
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.type = "";
  return out;
}

// aws:apigateway/getAuthorizers:getAuthorizers
export function getAuthorizers(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  return out;
}

// aws:apigateway/getDomainName:getDomainName
export function getDomainName(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateArn = h.arn(ctx);
  out.certificateName = "";
  out.certificateUploadDate = "";
  out.cloudfrontDomainName = h.endpoint(ctx, "cloudfrontDomainName");
  out.cloudfrontZoneId = h.id(ctx, "cloudfrontZoneId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainNameId = (i.domainNameId !== undefined ? i.domainNameId : h.id(ctx, "domainNameId"));
  out.endpointConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_getDomainNameEndpointConfiguration(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.policy = "";
  out.regionalCertificateArn = h.arn(ctx);
  out.regionalCertificateName = "";
  out.regionalDomainName = h.endpoint(ctx, "regionalDomainName");
  out.regionalZoneId = h.id(ctx, "regionalZoneId");
  out.securityPolicy = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:apigateway/getExport:getExport
export function getExport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accepts = (i.accepts !== undefined ? i.accepts : "");
  out.body = "";
  out.contentDisposition = "";
  out.contentType = "";
  out.exportType = (i.exportType !== undefined ? i.exportType : "");
  out.id = h.id(ctx, "id");
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  return out;
}

// aws:apigateway/getKey:getKey
export function getKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.customerId = h.id(ctx, "customerId");
  out.description = "";
  out.enabled = true;
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lastUpdatedDate = "";
  out.name = ctx.name;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.value = "";
  return out;
}

// aws:apigateway/getResource:getResource
export function getResource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.parentId = h.id(ctx, "parentId");
  out.path = (i.path !== undefined ? i.path : "");
  out.pathPart = "";
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  return out;
}

// aws:apigateway/getRestApi:getRestApi
export function getRestApi(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKeySource = "";
  out.arn = h.arn(ctx);
  out.binaryMediaTypes = (depth > 4 ? [] : [""]);
  out.description = "";
  out.endpointConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_getRestApiEndpointConfiguration(ctx, depth + 1))]);
  out.executionArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.minimumCompressionSize = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = "";
  out.rootResourceId = h.id(ctx, "rootResourceId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:apigateway/getSdk:getSdk
export function getSdk(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.body = "";
  out.contentDisposition = "";
  out.contentType = "";
  out.id = h.id(ctx, "id");
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.sdkType = (i.sdkType !== undefined ? i.sdkType : "");
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  return out;
}

// aws:apigateway/getVpcLink:getVpcLink
export function getVpcLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.targetArns = (depth > 4 ? [] : [""]);
  return out;
}

// GENERATED FILE — do not edit.
// Service: apigatewayv2   (12 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigatewayv2 from "../types/apigatewayv2.js";

// aws:apigatewayv2/api:Api
export function Api(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiEndpoint = h.endpoint(ctx, "apiEndpoint");
  out.apiKeySelectionExpression = (i.apiKeySelectionExpression !== undefined ? i.apiKeySelectionExpression : "");
  out.arn = h.arn(ctx);
  out.body = (i.body !== undefined ? i.body : "");
  out.corsConfiguration = (i.corsConfiguration !== undefined ? i.corsConfiguration : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_ApiCorsConfiguration(ctx, depth + 1)));
  out.credentialsArn = (i.credentialsArn !== undefined ? i.credentialsArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.disableExecuteApiEndpoint = (i.disableExecuteApiEndpoint !== undefined ? i.disableExecuteApiEndpoint : false);
  out.executionArn = h.arn(ctx);
  out.failOnWarnings = (i.failOnWarnings !== undefined ? i.failOnWarnings : false);
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.protocolType = (i.protocolType !== undefined ? i.protocolType : "");
  out.routeKey = (i.routeKey !== undefined ? i.routeKey : "");
  out.routeSelectionExpression = (i.routeSelectionExpression !== undefined ? i.routeSelectionExpression : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.target = (i.target !== undefined ? i.target : "");
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:apigatewayv2/apiMapping:ApiMapping
export function ApiMapping(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.apiMappingKey = (i.apiMappingKey !== undefined ? i.apiMappingKey : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.stage = (i.stage !== undefined ? i.stage : "");
  return out;
}

// aws:apigatewayv2/authorizer:Authorizer
export function Authorizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.authorizerCredentialsArn = (i.authorizerCredentialsArn !== undefined ? i.authorizerCredentialsArn : h.arn(ctx));
  out.authorizerPayloadFormatVersion = (i.authorizerPayloadFormatVersion !== undefined ? i.authorizerPayloadFormatVersion : "");
  out.authorizerResultTtlInSeconds = (i.authorizerResultTtlInSeconds !== undefined ? i.authorizerResultTtlInSeconds : 0);
  out.authorizerType = (i.authorizerType !== undefined ? i.authorizerType : "");
  out.authorizerUri = (i.authorizerUri !== undefined ? i.authorizerUri : h.endpoint(ctx, "authorizerUri"));
  out.enableSimpleResponses = (i.enableSimpleResponses !== undefined ? i.enableSimpleResponses : true);
  out.identitySources = (i.identitySources !== undefined ? i.identitySources : (depth > 4 ? [] : [""]));
  out.jwtConfiguration = (i.jwtConfiguration !== undefined ? i.jwtConfiguration : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_AuthorizerJwtConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:apigatewayv2/deployment:Deployment
export function Deployment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.autoDeployed = false;
  out.description = (i.description !== undefined ? i.description : "");
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  return out;
}

// aws:apigatewayv2/domainName:DomainName
export function DomainName(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiMappingSelectionExpression = "";
  out.arn = h.arn(ctx);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainNameConfiguration = (i.domainNameConfiguration !== undefined ? i.domainNameConfiguration : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_DomainNameDomainNameConfiguration(ctx, depth + 1)));
  out.mutualTlsAuthentication = (i.mutualTlsAuthentication !== undefined ? i.mutualTlsAuthentication : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_DomainNameMutualTlsAuthentication(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigatewayv2/integration:Integration
export function Integration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.connectionType = (i.connectionType !== undefined ? i.connectionType : "");
  out.contentHandlingStrategy = (i.contentHandlingStrategy !== undefined ? i.contentHandlingStrategy : "");
  out.credentialsArn = (i.credentialsArn !== undefined ? i.credentialsArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.integrationMethod = (i.integrationMethod !== undefined ? i.integrationMethod : "");
  out.integrationResponseSelectionExpression = "";
  out.integrationSubtype = (i.integrationSubtype !== undefined ? i.integrationSubtype : "");
  out.integrationType = (i.integrationType !== undefined ? i.integrationType : "");
  out.integrationUri = (i.integrationUri !== undefined ? i.integrationUri : h.endpoint(ctx, "integrationUri"));
  out.passthroughBehavior = (i.passthroughBehavior !== undefined ? i.passthroughBehavior : "");
  out.payloadFormatVersion = (i.payloadFormatVersion !== undefined ? i.payloadFormatVersion : "");
  out.requestParameters = (i.requestParameters !== undefined ? i.requestParameters : {});
  out.requestTemplates = (i.requestTemplates !== undefined ? i.requestTemplates : {});
  out.responseParameters = (i.responseParameters !== undefined ? i.responseParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_apigatewayv2.apigatewayv2_IntegrationResponseParameter(ctx, depth + 1))]));
  out.templateSelectionExpression = (i.templateSelectionExpression !== undefined ? i.templateSelectionExpression : "");
  out.timeoutMilliseconds = (i.timeoutMilliseconds !== undefined ? i.timeoutMilliseconds : 30);
  out.tlsConfig = (i.tlsConfig !== undefined ? i.tlsConfig : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_IntegrationTlsConfig(ctx, depth + 1)));
  return out;
}

// aws:apigatewayv2/integrationResponse:IntegrationResponse
export function IntegrationResponse(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.contentHandlingStrategy = (i.contentHandlingStrategy !== undefined ? i.contentHandlingStrategy : "");
  out.integrationId = (i.integrationId !== undefined ? i.integrationId : h.id(ctx, "integrationId"));
  out.integrationResponseKey = (i.integrationResponseKey !== undefined ? i.integrationResponseKey : "");
  out.responseTemplates = (i.responseTemplates !== undefined ? i.responseTemplates : {});
  out.templateSelectionExpression = (i.templateSelectionExpression !== undefined ? i.templateSelectionExpression : "");
  return out;
}

// aws:apigatewayv2/model:Model
export function Model(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.schema = (i.schema !== undefined ? i.schema : "");
  return out;
}

// aws:apigatewayv2/route:Route
export function Route(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.apiKeyRequired = (i.apiKeyRequired !== undefined ? i.apiKeyRequired : false);
  out.authorizationScopes = (i.authorizationScopes !== undefined ? i.authorizationScopes : (depth > 4 ? [] : [""]));
  out.authorizationType = (i.authorizationType !== undefined ? i.authorizationType : "");
  out.authorizerId = (i.authorizerId !== undefined ? i.authorizerId : h.id(ctx, "authorizerId"));
  out.modelSelectionExpression = (i.modelSelectionExpression !== undefined ? i.modelSelectionExpression : "");
  out.operationName = (i.operationName !== undefined ? i.operationName : "");
  out.requestModels = (i.requestModels !== undefined ? i.requestModels : {});
  out.requestParameters = (i.requestParameters !== undefined ? i.requestParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_apigatewayv2.apigatewayv2_RouteRequestParameter(ctx, depth + 1))]));
  out.routeKey = (i.routeKey !== undefined ? i.routeKey : "");
  out.routeResponseSelectionExpression = (i.routeResponseSelectionExpression !== undefined ? i.routeResponseSelectionExpression : "");
  out.target = (i.target !== undefined ? i.target : "");
  return out;
}

// aws:apigatewayv2/routeResponse:RouteResponse
export function RouteResponse(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.modelSelectionExpression = (i.modelSelectionExpression !== undefined ? i.modelSelectionExpression : "");
  out.responseModels = (i.responseModels !== undefined ? i.responseModels : {});
  out.routeId = (i.routeId !== undefined ? i.routeId : h.id(ctx, "routeId"));
  out.routeResponseKey = (i.routeResponseKey !== undefined ? i.routeResponseKey : "");
  return out;
}

// aws:apigatewayv2/stage:Stage
export function Stage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogSettings = (i.accessLogSettings !== undefined ? i.accessLogSettings : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_StageAccessLogSettings(ctx, depth + 1)));
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.arn = h.arn(ctx);
  out.autoDeploy = (i.autoDeploy !== undefined ? i.autoDeploy : false);
  out.clientCertificateId = (i.clientCertificateId !== undefined ? i.clientCertificateId : h.id(ctx, "clientCertificateId"));
  out.defaultRouteSettings = (i.defaultRouteSettings !== undefined ? i.defaultRouteSettings : (depth > 4 ? {} : T_apigatewayv2.apigatewayv2_StageDefaultRouteSettings(ctx, depth + 1)));
  out.deploymentId = (i.deploymentId !== undefined ? i.deploymentId : h.id(ctx, "deploymentId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.executionArn = h.arn(ctx);
  out.invokeUrl = h.endpoint(ctx, "invokeUrl");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routeSettings = (i.routeSettings !== undefined ? i.routeSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_apigatewayv2.apigatewayv2_StageRouteSetting(ctx, depth + 1))]));
  out.stageVariables = (i.stageVariables !== undefined ? i.stageVariables : {});
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigatewayv2/vpcLink:VpcLink
export function VpcLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

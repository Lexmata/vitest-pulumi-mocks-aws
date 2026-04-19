// GENERATED FILE — do not edit.
// Service: apigateway   (26 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigateway from "../types/apigateway.js";

// aws:apigateway/account:Account
export function Account(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKeyVersion = "";
  out.cloudwatchRoleArn = (i.cloudwatchRoleArn !== undefined ? i.cloudwatchRoleArn : h.arn(ctx));
  out.features = (depth > 4 ? [] : [""]);
  out.resetOnDelete = (i.resetOnDelete !== undefined ? i.resetOnDelete : false);
  out.throttleSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_AccountThrottleSetting(ctx, depth + 1))]);
  return out;
}

// aws:apigateway/apiKey:ApiKey
export function ApiKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.customerId = (i.customerId !== undefined ? i.customerId : h.id(ctx, "customerId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.lastUpdatedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:apigateway/authorizer:Authorizer
export function Authorizer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authorizerCredentials = (i.authorizerCredentials !== undefined ? i.authorizerCredentials : "");
  out.authorizerResultTtlInSeconds = (i.authorizerResultTtlInSeconds !== undefined ? i.authorizerResultTtlInSeconds : 0);
  out.authorizerUri = (i.authorizerUri !== undefined ? i.authorizerUri : h.endpoint(ctx, "authorizerUri"));
  out.identitySource = (i.identitySource !== undefined ? i.identitySource : "");
  out.identityValidationExpression = (i.identityValidationExpression !== undefined ? i.identityValidationExpression : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.providerArns = (i.providerArns !== undefined ? i.providerArns : (depth > 4 ? [] : [""]));
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:apigateway/basePathMapping:BasePathMapping
export function BasePathMapping(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basePath = (i.basePath !== undefined ? i.basePath : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainNameId = (i.domainNameId !== undefined ? i.domainNameId : h.id(ctx, "domainNameId"));
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  return out;
}

// aws:apigateway/clientCertificate:ClientCertificate
export function ClientCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.expirationDate = "";
  out.pemEncodedCertificate = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigateway/deployment:Deployment
export function Deployment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.canarySettings = (i.canarySettings !== undefined ? i.canarySettings : (depth > 4 ? {} : T_apigateway.apigateway_DeploymentCanarySettings(ctx, depth + 1)));
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.executionArn = h.arn(ctx);
  out.invokeUrl = h.endpoint(ctx, "invokeUrl");
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.stageDescription = (i.stageDescription !== undefined ? i.stageDescription : "");
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  out.variables = (i.variables !== undefined ? i.variables : {});
  return out;
}

// aws:apigateway/documentationPart:DocumentationPart
export function DocumentationPart(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.documentationPartId = h.id(ctx, "documentationPartId");
  out.location = (i.location !== undefined ? i.location : (depth > 4 ? {} : T_apigateway.apigateway_DocumentationPartLocation(ctx, depth + 1)));
  out.properties = (i.properties !== undefined ? i.properties : "");
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  return out;
}

// aws:apigateway/documentationVersion:DocumentationVersion
export function DocumentationVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:apigateway/domainName:DomainName
export function DomainName(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.certificateBody = (i.certificateBody !== undefined ? i.certificateBody : "");
  out.certificateChain = (i.certificateChain !== undefined ? i.certificateChain : "");
  out.certificateName = (i.certificateName !== undefined ? i.certificateName : "");
  out.certificatePrivateKey = (i.certificatePrivateKey !== undefined ? i.certificatePrivateKey : "");
  out.certificateUploadDate = "";
  out.cloudfrontDomainName = h.endpoint(ctx, "cloudfrontDomainName");
  out.cloudfrontZoneId = h.id(ctx, "cloudfrontZoneId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainNameId = h.id(ctx, "domainNameId");
  out.endpointConfiguration = (i.endpointConfiguration !== undefined ? i.endpointConfiguration : (depth > 4 ? {} : T_apigateway.apigateway_DomainNameEndpointConfiguration(ctx, depth + 1)));
  out.mutualTlsAuthentication = (i.mutualTlsAuthentication !== undefined ? i.mutualTlsAuthentication : (depth > 4 ? {} : T_apigateway.apigateway_DomainNameMutualTlsAuthentication(ctx, depth + 1)));
  out.ownershipVerificationCertificateArn = (i.ownershipVerificationCertificateArn !== undefined ? i.ownershipVerificationCertificateArn : h.arn(ctx));
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.regionalCertificateArn = (i.regionalCertificateArn !== undefined ? i.regionalCertificateArn : h.arn(ctx));
  out.regionalCertificateName = (i.regionalCertificateName !== undefined ? i.regionalCertificateName : "");
  out.regionalDomainName = h.endpoint(ctx, "regionalDomainName");
  out.regionalZoneId = h.id(ctx, "regionalZoneId");
  out.securityPolicy = (i.securityPolicy !== undefined ? i.securityPolicy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigateway/domainNameAccessAssociation:DomainNameAccessAssociation
export function DomainNameAccessAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessAssociationSource = (i.accessAssociationSource !== undefined ? i.accessAssociationSource : "");
  out.accessAssociationSourceType = (i.accessAssociationSourceType !== undefined ? i.accessAssociationSourceType : "");
  out.arn = h.arn(ctx);
  out.domainNameArn = (i.domainNameArn !== undefined ? i.domainNameArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigateway/integration:Integration
export function Integration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheKeyParameters = (i.cacheKeyParameters !== undefined ? i.cacheKeyParameters : (depth > 4 ? [] : [""]));
  out.cacheNamespace = (i.cacheNamespace !== undefined ? i.cacheNamespace : "");
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.connectionType = (i.connectionType !== undefined ? i.connectionType : "");
  out.contentHandling = (i.contentHandling !== undefined ? i.contentHandling : "");
  out.credentials = (i.credentials !== undefined ? i.credentials : "");
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.integrationHttpMethod = (i.integrationHttpMethod !== undefined ? i.integrationHttpMethod : "");
  out.passthroughBehavior = (i.passthroughBehavior !== undefined ? i.passthroughBehavior : "");
  out.requestParameters = (i.requestParameters !== undefined ? i.requestParameters : {});
  out.requestTemplates = (i.requestTemplates !== undefined ? i.requestTemplates : {});
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.timeoutMilliseconds = (i.timeoutMilliseconds !== undefined ? i.timeoutMilliseconds : 30);
  out.tlsConfig = (i.tlsConfig !== undefined ? i.tlsConfig : (depth > 4 ? {} : T_apigateway.apigateway_IntegrationTlsConfig(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  out.uri = (i.uri !== undefined ? i.uri : h.endpoint(ctx, "uri"));
  return out;
}

// aws:apigateway/integrationResponse:IntegrationResponse
export function IntegrationResponse(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentHandling = (i.contentHandling !== undefined ? i.contentHandling : "");
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.responseParameters = (i.responseParameters !== undefined ? i.responseParameters : {});
  out.responseTemplates = (i.responseTemplates !== undefined ? i.responseTemplates : {});
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.selectionPattern = (i.selectionPattern !== undefined ? i.selectionPattern : "");
  out.statusCode = (i.statusCode !== undefined ? i.statusCode : "");
  return out;
}

// aws:apigateway/method:Method
export function Method(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKeyRequired = (i.apiKeyRequired !== undefined ? i.apiKeyRequired : false);
  out.authorization = (i.authorization !== undefined ? i.authorization : "");
  out.authorizationScopes = (i.authorizationScopes !== undefined ? i.authorizationScopes : (depth > 4 ? [] : [""]));
  out.authorizerId = (i.authorizerId !== undefined ? i.authorizerId : h.id(ctx, "authorizerId"));
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.operationName = (i.operationName !== undefined ? i.operationName : "");
  out.requestModels = (i.requestModels !== undefined ? i.requestModels : {});
  out.requestParameters = (i.requestParameters !== undefined ? i.requestParameters : {});
  out.requestValidatorId = (i.requestValidatorId !== undefined ? i.requestValidatorId : h.id(ctx, "requestValidatorId"));
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  return out;
}

// aws:apigateway/methodResponse:MethodResponse
export function MethodResponse(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.responseModels = (i.responseModels !== undefined ? i.responseModels : {});
  out.responseParameters = (i.responseParameters !== undefined ? i.responseParameters : {});
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.statusCode = (i.statusCode !== undefined ? i.statusCode : "");
  return out;
}

// aws:apigateway/methodSettings:MethodSettings
export function MethodSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.methodPath = (i.methodPath !== undefined ? i.methodPath : "");
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? {} : T_apigateway.apigateway_MethodSettingsSettings(ctx, depth + 1)));
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  return out;
}

// aws:apigateway/model:Model
export function Model(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.schema = (i.schema !== undefined ? i.schema : "");
  return out;
}

// aws:apigateway/requestValidator:RequestValidator
export function RequestValidator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.validateRequestBody = (i.validateRequestBody !== undefined ? i.validateRequestBody : false);
  out.validateRequestParameters = (i.validateRequestParameters !== undefined ? i.validateRequestParameters : false);
  return out;
}

// aws:apigateway/resource:Resource
export function Resource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  out.path = "";
  out.pathPart = (i.pathPart !== undefined ? i.pathPart : "");
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  return out;
}

// aws:apigateway/response:Response
export function Response(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.responseParameters = (i.responseParameters !== undefined ? i.responseParameters : {});
  out.responseTemplates = (i.responseTemplates !== undefined ? i.responseTemplates : {});
  out.responseType = (i.responseType !== undefined ? i.responseType : "");
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.statusCode = (i.statusCode !== undefined ? i.statusCode : "");
  return out;
}

// aws:apigateway/restApi:RestApi
export function RestApi(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKeySource = (i.apiKeySource !== undefined ? i.apiKeySource : "");
  out.arn = h.arn(ctx);
  out.binaryMediaTypes = (i.binaryMediaTypes !== undefined ? i.binaryMediaTypes : (depth > 4 ? [] : [""]));
  out.body = (i.body !== undefined ? i.body : "");
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.disableExecuteApiEndpoint = (i.disableExecuteApiEndpoint !== undefined ? i.disableExecuteApiEndpoint : false);
  out.endpointConfiguration = (i.endpointConfiguration !== undefined ? i.endpointConfiguration : (depth > 4 ? {} : T_apigateway.apigateway_RestApiEndpointConfiguration(ctx, depth + 1)));
  out.executionArn = h.arn(ctx);
  out.failOnWarnings = (i.failOnWarnings !== undefined ? i.failOnWarnings : false);
  out.minimumCompressionSize = (i.minimumCompressionSize !== undefined ? i.minimumCompressionSize : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.putRestApiMode = (i.putRestApiMode !== undefined ? i.putRestApiMode : "");
  out.rootResourceId = h.id(ctx, "rootResourceId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apigateway/restApiPolicy:RestApiPolicy
export function RestApiPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  return out;
}

// aws:apigateway/restApiPut:RestApiPut
export function RestApiPut(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.body = (i.body !== undefined ? i.body : "");
  out.failOnWarnings = (i.failOnWarnings !== undefined ? i.failOnWarnings : false);
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.restApiId = (i.restApiId !== undefined ? i.restApiId : h.id(ctx, "restApiId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_apigateway.apigateway_RestApiPutTimeouts(ctx, depth + 1)));
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  return out;
}

// aws:apigateway/stage:Stage
export function Stage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogSettings = (i.accessLogSettings !== undefined ? i.accessLogSettings : (depth > 4 ? {} : T_apigateway.apigateway_StageAccessLogSettings(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.cacheClusterEnabled = (i.cacheClusterEnabled !== undefined ? i.cacheClusterEnabled : false);
  out.cacheClusterSize = (i.cacheClusterSize !== undefined ? i.cacheClusterSize : "");
  out.canarySettings = (i.canarySettings !== undefined ? i.canarySettings : (depth > 4 ? {} : T_apigateway.apigateway_StageCanarySettings(ctx, depth + 1)));
  out.clientCertificateId = (i.clientCertificateId !== undefined ? i.clientCertificateId : h.id(ctx, "clientCertificateId"));
  out.deployment = (i.deployment !== undefined ? i.deployment : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.documentationVersion = (i.documentationVersion !== undefined ? i.documentationVersion : "");
  out.executionArn = h.arn(ctx);
  out.invokeUrl = h.endpoint(ctx, "invokeUrl");
  out.restApi = (i.restApi !== undefined ? i.restApi : "");
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.variables = (i.variables !== undefined ? i.variables : {});
  out.webAclArn = h.arn(ctx);
  out.xrayTracingEnabled = (i.xrayTracingEnabled !== undefined ? i.xrayTracingEnabled : false);
  return out;
}

// aws:apigateway/usagePlan:UsagePlan
export function UsagePlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiStages = (i.apiStages !== undefined ? i.apiStages : (depth > 4 ? [] : [(depth > 4 ? {} : T_apigateway.apigateway_UsagePlanApiStage(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.productCode = (i.productCode !== undefined ? i.productCode : "");
  out.quotaSettings = (i.quotaSettings !== undefined ? i.quotaSettings : (depth > 4 ? {} : T_apigateway.apigateway_UsagePlanQuotaSettings(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throttleSettings = (i.throttleSettings !== undefined ? i.throttleSettings : (depth > 4 ? {} : T_apigateway.apigateway_UsagePlanThrottleSettings(ctx, depth + 1)));
  return out;
}

// aws:apigateway/usagePlanKey:UsagePlanKey
export function UsagePlanKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.keyType = (i.keyType !== undefined ? i.keyType : "");
  out.name = ctx.name;
  out.usagePlanId = (i.usagePlanId !== undefined ? i.usagePlanId : h.id(ctx, "usagePlanId"));
  out.value = "";
  return out;
}

// aws:apigateway/vpcLink:VpcLink
export function VpcLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  return out;
}

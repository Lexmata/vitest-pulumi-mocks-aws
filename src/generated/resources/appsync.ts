// GENERATED FILE — do not edit.
// Service: appsync   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appsync from "../types/appsync.js";

// aws:appsync/apiCache:ApiCache
export function ApiCache(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiCachingBehavior = (i.apiCachingBehavior !== undefined ? i.apiCachingBehavior : "");
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.atRestEncryptionEnabled = (i.atRestEncryptionEnabled !== undefined ? i.atRestEncryptionEnabled : false);
  out.transitEncryptionEnabled = (i.transitEncryptionEnabled !== undefined ? i.transitEncryptionEnabled : false);
  out.ttl = (i.ttl !== undefined ? i.ttl : 0);
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:appsync/apiKey:ApiKey
export function ApiKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.apiKeyId = h.id(ctx, "apiKeyId");
  out.description = (i.description !== undefined ? i.description : "");
  out.expires = (i.expires !== undefined ? i.expires : "");
  out.key = "";
  return out;
}

// aws:appsync/dataSource:DataSource
export function DataSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.dynamodbConfig = (i.dynamodbConfig !== undefined ? i.dynamodbConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceDynamodbConfig(ctx, depth + 1)));
  out.elasticsearchConfig = (i.elasticsearchConfig !== undefined ? i.elasticsearchConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceElasticsearchConfig(ctx, depth + 1)));
  out.eventBridgeConfig = (i.eventBridgeConfig !== undefined ? i.eventBridgeConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceEventBridgeConfig(ctx, depth + 1)));
  out.httpConfig = (i.httpConfig !== undefined ? i.httpConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceHttpConfig(ctx, depth + 1)));
  out.lambdaConfig = (i.lambdaConfig !== undefined ? i.lambdaConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceLambdaConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.opensearchserviceConfig = (i.opensearchserviceConfig !== undefined ? i.opensearchserviceConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceOpensearchserviceConfig(ctx, depth + 1)));
  out.relationalDatabaseConfig = (i.relationalDatabaseConfig !== undefined ? i.relationalDatabaseConfig : (depth > 4 ? {} : T_appsync.appsync_DataSourceRelationalDatabaseConfig(ctx, depth + 1)));
  out.serviceRoleArn = (i.serviceRoleArn !== undefined ? i.serviceRoleArn : h.arn(ctx));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:appsync/domainName:DomainName
export function DomainName(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appsyncDomainName = h.endpoint(ctx, "appsyncDomainName");
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:appsync/domainNameApiAssociation:DomainNameApiAssociation
export function DomainNameApiAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

// aws:appsync/function:Function
export function Function(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.arn = h.arn(ctx);
  out.code = (i.code !== undefined ? i.code : "");
  out.dataSource = (i.dataSource !== undefined ? i.dataSource : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.functionId = h.id(ctx, "functionId");
  out.functionVersion = (i.functionVersion !== undefined ? i.functionVersion : "");
  out.maxBatchSize = (i.maxBatchSize !== undefined ? i.maxBatchSize : 8);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.requestMappingTemplate = (i.requestMappingTemplate !== undefined ? i.requestMappingTemplate : "");
  out.responseMappingTemplate = (i.responseMappingTemplate !== undefined ? i.responseMappingTemplate : "");
  out.runtime = (i.runtime !== undefined ? i.runtime : (depth > 4 ? {} : T_appsync.appsync_FunctionRuntime(ctx, depth + 1)));
  out.syncConfig = (i.syncConfig !== undefined ? i.syncConfig : (depth > 4 ? {} : T_appsync.appsync_FunctionSyncConfig(ctx, depth + 1)));
  return out;
}

// aws:appsync/graphQLApi:GraphQLApi
export function GraphQLApi(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalAuthenticationProviders = (i.additionalAuthenticationProviders !== undefined ? i.additionalAuthenticationProviders : (depth > 4 ? [] : [(depth > 4 ? {} : T_appsync.appsync_GraphQLApiAdditionalAuthenticationProvider(ctx, depth + 1))]));
  out.apiType = (i.apiType !== undefined ? i.apiType : "");
  out.arn = h.arn(ctx);
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.enhancedMetricsConfig = (i.enhancedMetricsConfig !== undefined ? i.enhancedMetricsConfig : (depth > 4 ? {} : T_appsync.appsync_GraphQLApiEnhancedMetricsConfig(ctx, depth + 1)));
  out.introspectionConfig = (i.introspectionConfig !== undefined ? i.introspectionConfig : "");
  out.lambdaAuthorizerConfig = (i.lambdaAuthorizerConfig !== undefined ? i.lambdaAuthorizerConfig : (depth > 4 ? {} : T_appsync.appsync_GraphQLApiLambdaAuthorizerConfig(ctx, depth + 1)));
  out.logConfig = (i.logConfig !== undefined ? i.logConfig : (depth > 4 ? {} : T_appsync.appsync_GraphQLApiLogConfig(ctx, depth + 1)));
  out.mergedApiExecutionRoleArn = (i.mergedApiExecutionRoleArn !== undefined ? i.mergedApiExecutionRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.openidConnectConfig = (i.openidConnectConfig !== undefined ? i.openidConnectConfig : (depth > 4 ? {} : T_appsync.appsync_GraphQLApiOpenidConnectConfig(ctx, depth + 1)));
  out.queryDepthLimit = (i.queryDepthLimit !== undefined ? i.queryDepthLimit : 0);
  out.resolverCountLimit = (i.resolverCountLimit !== undefined ? i.resolverCountLimit : 1);
  out.schema = (i.schema !== undefined ? i.schema : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uris = {};
  out.userPoolConfig = (i.userPoolConfig !== undefined ? i.userPoolConfig : (depth > 4 ? {} : T_appsync.appsync_GraphQLApiUserPoolConfig(ctx, depth + 1)));
  out.visibility = (i.visibility !== undefined ? i.visibility : "");
  out.xrayEnabled = (i.xrayEnabled !== undefined ? i.xrayEnabled : false);
  return out;
}

// aws:appsync/resolver:Resolver
export function Resolver(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.arn = h.arn(ctx);
  out.cachingConfig = (i.cachingConfig !== undefined ? i.cachingConfig : (depth > 4 ? {} : T_appsync.appsync_ResolverCachingConfig(ctx, depth + 1)));
  out.code = (i.code !== undefined ? i.code : "");
  out.dataSource = (i.dataSource !== undefined ? i.dataSource : "");
  out.field = (i.field !== undefined ? i.field : "");
  out.kind = (i.kind !== undefined ? i.kind : "");
  out.maxBatchSize = (i.maxBatchSize !== undefined ? i.maxBatchSize : 8);
  out.pipelineConfig = (i.pipelineConfig !== undefined ? i.pipelineConfig : (depth > 4 ? {} : T_appsync.appsync_ResolverPipelineConfig(ctx, depth + 1)));
  out.requestTemplate = (i.requestTemplate !== undefined ? i.requestTemplate : "");
  out.responseTemplate = (i.responseTemplate !== undefined ? i.responseTemplate : "");
  out.runtime = (i.runtime !== undefined ? i.runtime : (depth > 4 ? {} : T_appsync.appsync_ResolverRuntime(ctx, depth + 1)));
  out.syncConfig = (i.syncConfig !== undefined ? i.syncConfig : (depth > 4 ? {} : T_appsync.appsync_ResolverSyncConfig(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:appsync/sourceApiAssociation:SourceApiAssociation
export function SourceApiAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.description = (i.description !== undefined ? i.description : "");
  out.mergedApiArn = (i.mergedApiArn !== undefined ? i.mergedApiArn : h.arn(ctx));
  out.mergedApiId = (i.mergedApiId !== undefined ? i.mergedApiId : h.id(ctx, "mergedApiId"));
  out.sourceApiArn = (i.sourceApiArn !== undefined ? i.sourceApiArn : h.arn(ctx));
  out.sourceApiAssociationConfigs = (i.sourceApiAssociationConfigs !== undefined ? i.sourceApiAssociationConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_appsync.appsync_SourceApiAssociationSourceApiAssociationConfig(ctx, depth + 1))]));
  out.sourceApiId = (i.sourceApiId !== undefined ? i.sourceApiId : h.id(ctx, "sourceApiId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_appsync.appsync_SourceApiAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:appsync/type:Type
export function Type(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.arn = h.arn(ctx);
  out.definition = (i.definition !== undefined ? i.definition : "");
  out.description = "";
  out.format = (i.format !== undefined ? i.format : "");
  out.name = ctx.name;
  return out;
}

// GENERATED FILE — do not edit.
// Service: appsync   (30 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appsync from "./appsync.js";

// aws:appsync/DataSourceDynamodbConfig:DataSourceDynamodbConfig
export function appsync_DataSourceDynamodbConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deltaSyncConfig = (depth > 4 ? {} : T_appsync.appsync_DataSourceDynamodbConfigDeltaSyncConfig(ctx, depth + 1));
  out.region = ctx.region;
  out.tableName = "";
  out.useCallerCredentials = false;
  out.versioned = false;
  return out;
}

// aws:appsync/DataSourceDynamodbConfigDeltaSyncConfig:DataSourceDynamodbConfigDeltaSyncConfig
export function appsync_DataSourceDynamodbConfigDeltaSyncConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baseTableTtl = 0;
  out.deltaSyncTableName = "";
  out.deltaSyncTableTtl = 0;
  return out;
}

// aws:appsync/DataSourceElasticsearchConfig:DataSourceElasticsearchConfig
export function appsync_DataSourceElasticsearchConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.region = ctx.region;
  return out;
}

// aws:appsync/DataSourceEventBridgeConfig:DataSourceEventBridgeConfig
export function appsync_DataSourceEventBridgeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventBusArn = h.arn(ctx);
  return out;
}

// aws:appsync/DataSourceHttpConfig:DataSourceHttpConfig
export function appsync_DataSourceHttpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfig = (depth > 4 ? {} : T_appsync.appsync_DataSourceHttpConfigAuthorizationConfig(ctx, depth + 1));
  out.endpoint = h.endpoint(ctx, "endpoint");
  return out;
}

// aws:appsync/DataSourceHttpConfigAuthorizationConfig:DataSourceHttpConfigAuthorizationConfig
export function appsync_DataSourceHttpConfigAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationType = "";
  out.awsIamConfig = (depth > 4 ? {} : T_appsync.appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig(ctx, depth + 1));
  return out;
}

// aws:appsync/DataSourceHttpConfigAuthorizationConfigAwsIamConfig:DataSourceHttpConfigAuthorizationConfigAwsIamConfig
export function appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.signingRegion = "";
  out.signingServiceName = "";
  return out;
}

// aws:appsync/DataSourceLambdaConfig:DataSourceLambdaConfig
export function appsync_DataSourceLambdaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  return out;
}

// aws:appsync/DataSourceOpensearchserviceConfig:DataSourceOpensearchserviceConfig
export function appsync_DataSourceOpensearchserviceConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.region = ctx.region;
  return out;
}

// aws:appsync/DataSourceRelationalDatabaseConfig:DataSourceRelationalDatabaseConfig
export function appsync_DataSourceRelationalDatabaseConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpointConfig = (depth > 4 ? {} : T_appsync.appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig(ctx, depth + 1));
  out.sourceType = "";
  return out;
}

// aws:appsync/DataSourceRelationalDatabaseConfigHttpEndpointConfig:DataSourceRelationalDatabaseConfigHttpEndpointConfig
export function appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsSecretStoreArn = h.arn(ctx);
  out.databaseName = "";
  out.dbClusterIdentifier = "";
  out.region = ctx.region;
  out.schema = "";
  return out;
}

// aws:appsync/FunctionRuntime:FunctionRuntime
export function appsync_FunctionRuntime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.runtimeVersion = "";
  return out;
}

// aws:appsync/FunctionSyncConfig:FunctionSyncConfig
export function appsync_FunctionSyncConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conflictDetection = "";
  out.conflictHandler = "";
  out.lambdaConflictHandlerConfig = (depth > 4 ? {} : T_appsync.appsync_FunctionSyncConfigLambdaConflictHandlerConfig(ctx, depth + 1));
  return out;
}

// aws:appsync/FunctionSyncConfigLambdaConflictHandlerConfig:FunctionSyncConfigLambdaConflictHandlerConfig
export function appsync_FunctionSyncConfigLambdaConflictHandlerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaConflictHandlerArn = h.arn(ctx);
  return out;
}

// aws:appsync/GraphQLApiAdditionalAuthenticationProvider:GraphQLApiAdditionalAuthenticationProvider
export function appsync_GraphQLApiAdditionalAuthenticationProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationType = "";
  out.lambdaAuthorizerConfig = (depth > 4 ? {} : T_appsync.appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig(ctx, depth + 1));
  out.openidConnectConfig = (depth > 4 ? {} : T_appsync.appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig(ctx, depth + 1));
  out.userPoolConfig = (depth > 4 ? {} : T_appsync.appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig(ctx, depth + 1));
  return out;
}

// aws:appsync/GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig:GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig
export function appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizerResultTtlInSeconds = 0;
  out.authorizerUri = h.endpoint(ctx, "authorizerUri");
  out.identityValidationExpression = "";
  return out;
}

// aws:appsync/GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig:GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig
export function appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authTtl = 0;
  out.clientId = h.id(ctx, "clientId");
  out.iatTtl = 0;
  out.issuer = "";
  return out;
}

// aws:appsync/GraphQLApiAdditionalAuthenticationProviderUserPoolConfig:GraphQLApiAdditionalAuthenticationProviderUserPoolConfig
export function appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appIdClientRegex = "";
  out.awsRegion = "";
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:appsync/GraphQLApiEnhancedMetricsConfig:GraphQLApiEnhancedMetricsConfig
export function appsync_GraphQLApiEnhancedMetricsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceLevelMetricsBehavior = "";
  out.operationLevelMetricsConfig = "";
  out.resolverLevelMetricsBehavior = "";
  return out;
}

// aws:appsync/GraphQLApiLambdaAuthorizerConfig:GraphQLApiLambdaAuthorizerConfig
export function appsync_GraphQLApiLambdaAuthorizerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizerResultTtlInSeconds = 0;
  out.authorizerUri = h.endpoint(ctx, "authorizerUri");
  out.identityValidationExpression = "";
  return out;
}

// aws:appsync/GraphQLApiLogConfig:GraphQLApiLogConfig
export function appsync_GraphQLApiLogConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogsRoleArn = h.arn(ctx);
  out.excludeVerboseContent = false;
  out.fieldLogLevel = "";
  return out;
}

// aws:appsync/GraphQLApiOpenidConnectConfig:GraphQLApiOpenidConnectConfig
export function appsync_GraphQLApiOpenidConnectConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authTtl = 0;
  out.clientId = h.id(ctx, "clientId");
  out.iatTtl = 0;
  out.issuer = "";
  return out;
}

// aws:appsync/GraphQLApiUserPoolConfig:GraphQLApiUserPoolConfig
export function appsync_GraphQLApiUserPoolConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appIdClientRegex = "";
  out.awsRegion = "";
  out.defaultAction = "";
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:appsync/ResolverCachingConfig:ResolverCachingConfig
export function appsync_ResolverCachingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cachingKeys = (depth > 4 ? [] : [""]);
  out.ttl = 0;
  return out;
}

// aws:appsync/ResolverPipelineConfig:ResolverPipelineConfig
export function appsync_ResolverPipelineConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:appsync/ResolverRuntime:ResolverRuntime
export function appsync_ResolverRuntime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.runtimeVersion = "";
  return out;
}

// aws:appsync/ResolverSyncConfig:ResolverSyncConfig
export function appsync_ResolverSyncConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conflictDetection = "";
  out.conflictHandler = "";
  out.lambdaConflictHandlerConfig = (depth > 4 ? {} : T_appsync.appsync_ResolverSyncConfigLambdaConflictHandlerConfig(ctx, depth + 1));
  return out;
}

// aws:appsync/ResolverSyncConfigLambdaConflictHandlerConfig:ResolverSyncConfigLambdaConflictHandlerConfig
export function appsync_ResolverSyncConfigLambdaConflictHandlerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaConflictHandlerArn = h.arn(ctx);
  return out;
}

// aws:appsync/SourceApiAssociationSourceApiAssociationConfig:SourceApiAssociationSourceApiAssociationConfig
export function appsync_SourceApiAssociationSourceApiAssociationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mergeType = "";
  return out;
}

// aws:appsync/SourceApiAssociationTimeouts:SourceApiAssociationTimeouts
export function appsync_SourceApiAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

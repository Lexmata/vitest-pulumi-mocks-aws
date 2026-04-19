// GENERATED FILE — do not edit.
// Service: lambda   (39 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lambda from "./lambda.js";

// aws:lambda/AliasRoutingConfig:AliasRoutingConfig
export function lambda_AliasRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalVersionWeights = {};
  return out;
}

// aws:lambda/CodePathOptions:CodePathOptions
export function lambda_CodePathOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.extraExcludePackages = (depth > 4 ? [] : [""]);
  out.extraIncludePackages = (depth > 4 ? [] : [""]);
  out.extraIncludePaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lambda/CodeSigningConfigAllowedPublishers:CodeSigningConfigAllowedPublishers
export function lambda_CodeSigningConfigAllowedPublishers(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.signingProfileVersionArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lambda/CodeSigningConfigPolicies:CodeSigningConfigPolicies
export function lambda_CodeSigningConfigPolicies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.untrustedArtifactOnDeployment = "";
  return out;
}

// aws:lambda/EventSourceMappingAmazonManagedKafkaEventSourceConfig:EventSourceMappingAmazonManagedKafkaEventSourceConfig
export function lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerGroupId = h.id(ctx, "consumerGroupId");
  return out;
}

// aws:lambda/EventSourceMappingDestinationConfig:EventSourceMappingDestinationConfig
export function lambda_EventSourceMappingDestinationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onFailure = (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingDestinationConfigOnFailure(ctx, depth + 1));
  return out;
}

// aws:lambda/EventSourceMappingDestinationConfigOnFailure:EventSourceMappingDestinationConfigOnFailure
export function lambda_EventSourceMappingDestinationConfigOnFailure(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationArn = h.arn(ctx);
  return out;
}

// aws:lambda/EventSourceMappingDocumentDbEventSourceConfig:EventSourceMappingDocumentDbEventSourceConfig
export function lambda_EventSourceMappingDocumentDbEventSourceConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionName = "";
  out.databaseName = "";
  out.fullDocument = "";
  return out;
}

// aws:lambda/EventSourceMappingFilterCriteria:EventSourceMappingFilterCriteria
export function lambda_EventSourceMappingFilterCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_EventSourceMappingFilterCriteriaFilter(ctx, depth + 1))]);
  return out;
}

// aws:lambda/EventSourceMappingFilterCriteriaFilter:EventSourceMappingFilterCriteriaFilter
export function lambda_EventSourceMappingFilterCriteriaFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pattern = "";
  return out;
}

// aws:lambda/EventSourceMappingMetricsConfig:EventSourceMappingMetricsConfig
export function lambda_EventSourceMappingMetricsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metrics = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lambda/EventSourceMappingProvisionedPollerConfig:EventSourceMappingProvisionedPollerConfig
export function lambda_EventSourceMappingProvisionedPollerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumPollers = 0;
  out.minimumPollers = 0;
  return out;
}

// aws:lambda/EventSourceMappingScalingConfig:EventSourceMappingScalingConfig
export function lambda_EventSourceMappingScalingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumConcurrency = 0;
  return out;
}

// aws:lambda/EventSourceMappingSelfManagedEventSource:EventSourceMappingSelfManagedEventSource
export function lambda_EventSourceMappingSelfManagedEventSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoints = {};
  return out;
}

// aws:lambda/EventSourceMappingSelfManagedKafkaEventSourceConfig:EventSourceMappingSelfManagedKafkaEventSourceConfig
export function lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerGroupId = h.id(ctx, "consumerGroupId");
  return out;
}

// aws:lambda/EventSourceMappingSourceAccessConfiguration:EventSourceMappingSourceAccessConfiguration
export function lambda_EventSourceMappingSourceAccessConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:lambda/FunctionDeadLetterConfig:FunctionDeadLetterConfig
export function lambda_FunctionDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetArn = h.arn(ctx);
  return out;
}

// aws:lambda/FunctionEnvironment:FunctionEnvironment
export function lambda_FunctionEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.variables = {};
  return out;
}

// aws:lambda/FunctionEphemeralStorage:FunctionEphemeralStorage
export function lambda_FunctionEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  return out;
}

// aws:lambda/FunctionEventInvokeConfigDestinationConfig:FunctionEventInvokeConfigDestinationConfig
export function lambda_FunctionEventInvokeConfigDestinationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onFailure = (depth > 4 ? {} : T_lambda.lambda_FunctionEventInvokeConfigDestinationConfigOnFailure(ctx, depth + 1));
  out.onSuccess = (depth > 4 ? {} : T_lambda.lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess(ctx, depth + 1));
  return out;
}

// aws:lambda/FunctionEventInvokeConfigDestinationConfigOnFailure:FunctionEventInvokeConfigDestinationConfigOnFailure
export function lambda_FunctionEventInvokeConfigDestinationConfigOnFailure(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  return out;
}

// aws:lambda/FunctionEventInvokeConfigDestinationConfigOnSuccess:FunctionEventInvokeConfigDestinationConfigOnSuccess
export function lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  return out;
}

// aws:lambda/FunctionFileSystemConfig:FunctionFileSystemConfig
export function lambda_FunctionFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.localMountPath = "";
  return out;
}

// aws:lambda/FunctionImageConfig:FunctionImageConfig
export function lambda_FunctionImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.entryPoints = (depth > 4 ? [] : [""]);
  out.workingDirectory = "";
  return out;
}

// aws:lambda/FunctionLoggingConfig:FunctionLoggingConfig
export function lambda_FunctionLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationLogLevel = "";
  out.logFormat = "";
  out.logGroup = "";
  out.systemLogLevel = "";
  return out;
}

// aws:lambda/FunctionSnapStart:FunctionSnapStart
export function lambda_FunctionSnapStart(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyOn = "";
  out.optimizationStatus = "";
  return out;
}

// aws:lambda/FunctionTracingConfig:FunctionTracingConfig
export function lambda_FunctionTracingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}

// aws:lambda/FunctionUrlCors:FunctionUrlCors
export function lambda_FunctionUrlCors(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:lambda/FunctionVpcConfig:FunctionVpcConfig
export function lambda_FunctionVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv6AllowedForDualStack = false;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:lambda/getCodeSigningConfigAllowedPublisher:getCodeSigningConfigAllowedPublisher
export function lambda_getCodeSigningConfigAllowedPublisher(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.signingProfileVersionArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lambda/getCodeSigningConfigPolicy:getCodeSigningConfigPolicy
export function lambda_getCodeSigningConfigPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.untrustedArtifactOnDeployment = "";
  return out;
}

// aws:lambda/getFunctionDeadLetterConfig:getFunctionDeadLetterConfig
export function lambda_getFunctionDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetArn = h.arn(ctx);
  return out;
}

// aws:lambda/getFunctionEnvironment:getFunctionEnvironment
export function lambda_getFunctionEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.variables = {};
  return out;
}

// aws:lambda/getFunctionEphemeralStorage:getFunctionEphemeralStorage
export function lambda_getFunctionEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  return out;
}

// aws:lambda/getFunctionFileSystemConfig:getFunctionFileSystemConfig
export function lambda_getFunctionFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.localMountPath = "";
  return out;
}

// aws:lambda/getFunctionLoggingConfig:getFunctionLoggingConfig
export function lambda_getFunctionLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationLogLevel = "";
  out.logFormat = "";
  out.logGroup = "";
  out.systemLogLevel = "";
  return out;
}

// aws:lambda/getFunctionTracingConfig:getFunctionTracingConfig
export function lambda_getFunctionTracingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}

// aws:lambda/getFunctionUrlCor:getFunctionUrlCor
export function lambda_getFunctionUrlCor(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:lambda/getFunctionVpcConfig:getFunctionVpcConfig
export function lambda_getFunctionVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv6AllowedForDualStack = false;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// GENERATED FILE — do not edit.
// Service: lambda   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lambda from "../types/lambda.js";

// aws:lambda/alias:Alias
export function Alias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.functionVersion = (i.functionVersion !== undefined ? i.functionVersion : "");
  out.invokeArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routingConfig = (i.routingConfig !== undefined ? i.routingConfig : (depth > 4 ? {} : T_lambda.lambda_AliasRoutingConfig(ctx, depth + 1)));
  return out;
}

// aws:lambda/callbackFunction:CallbackFunction
export function CallbackFunction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architectures = (i.architectures !== undefined ? i.architectures : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.code = h.archive();
  out.codeSha256 = "";
  out.codeSigningConfigArn = (i.codeSigningConfigArn !== undefined ? i.codeSigningConfigArn : h.arn(ctx));
  out.deadLetterConfig = (i.deadLetterConfig !== undefined ? i.deadLetterConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionDeadLetterConfig(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.environment = (i.environment !== undefined ? i.environment : (depth > 4 ? {} : T_lambda.lambda_FunctionEnvironment(ctx, depth + 1)));
  out.ephemeralStorage = (i.ephemeralStorage !== undefined ? i.ephemeralStorage : (depth > 4 ? {} : T_lambda.lambda_FunctionEphemeralStorage(ctx, depth + 1)));
  out.fileSystemConfig = (i.fileSystemConfig !== undefined ? i.fileSystemConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionFileSystemConfig(ctx, depth + 1)));
  out.handler = "";
  out.imageConfig = (i.imageConfig !== undefined ? i.imageConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionImageConfig(ctx, depth + 1)));
  out.imageUri = (i.imageUri !== undefined ? i.imageUri : h.endpoint(ctx, "imageUri"));
  out.invokeArn = h.arn(ctx);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.lastModified = h.timestamp();
  out.layers = (i.layers !== undefined ? i.layers : (depth > 4 ? [] : [""]));
  out.loggingConfig = (i.loggingConfig !== undefined ? i.loggingConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionLoggingConfig(ctx, depth + 1)));
  out.memorySize = (i.memorySize !== undefined ? i.memorySize : 8);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.packageType = (i.packageType !== undefined ? i.packageType : "");
  out.publish = (i.publish !== undefined ? i.publish : false);
  out.qualifiedArn = h.arn(ctx);
  out.qualifiedInvokeArn = h.arn(ctx);
  out.replaceSecurityGroupsOnDestroy = (i.replaceSecurityGroupsOnDestroy !== undefined ? i.replaceSecurityGroupsOnDestroy : false);
  out.replacementSecurityGroupIds = (i.replacementSecurityGroupIds !== undefined ? i.replacementSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.reservedConcurrentExecutions = (i.reservedConcurrentExecutions !== undefined ? i.reservedConcurrentExecutions : 0);
  out.role = (i.role !== undefined ? i.role : undefined);
  out.roleInstance = "";
  out.runtime = (i.runtime !== undefined ? i.runtime : "");
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3Key = (i.s3Key !== undefined ? i.s3Key : "");
  out.s3ObjectVersion = (i.s3ObjectVersion !== undefined ? i.s3ObjectVersion : "");
  out.signingJobArn = h.arn(ctx);
  out.signingProfileVersionArn = h.arn(ctx);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.snapStart = (i.snapStart !== undefined ? i.snapStart : (depth > 4 ? {} : T_lambda.lambda_FunctionSnapStart(ctx, depth + 1)));
  out.sourceCodeHash = (i.sourceCodeHash !== undefined ? i.sourceCodeHash : "");
  out.sourceCodeSize = 8;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeout = (i.timeout !== undefined ? i.timeout : 30);
  out.tracingConfig = (i.tracingConfig !== undefined ? i.tracingConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionTracingConfig(ctx, depth + 1)));
  out.version = "1";
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:lambda/codeSigningConfig:CodeSigningConfig
export function CodeSigningConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedPublishers = (i.allowedPublishers !== undefined ? i.allowedPublishers : (depth > 4 ? {} : T_lambda.lambda_CodeSigningConfigAllowedPublishers(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.configId = h.id(ctx, "configId");
  out.description = (i.description !== undefined ? i.description : "");
  out.lastModified = h.timestamp();
  out.policies = (i.policies !== undefined ? i.policies : (depth > 4 ? {} : T_lambda.lambda_CodeSigningConfigPolicies(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lambda/eventSourceMapping:EventSourceMapping
export function EventSourceMapping(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonManagedKafkaEventSourceConfig = (i.amazonManagedKafkaEventSourceConfig !== undefined ? i.amazonManagedKafkaEventSourceConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.batchSize = (i.batchSize !== undefined ? i.batchSize : 8);
  out.bisectBatchOnFunctionError = (i.bisectBatchOnFunctionError !== undefined ? i.bisectBatchOnFunctionError : false);
  out.destinationConfig = (i.destinationConfig !== undefined ? i.destinationConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingDestinationConfig(ctx, depth + 1)));
  out.documentDbEventSourceConfig = (i.documentDbEventSourceConfig !== undefined ? i.documentDbEventSourceConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingDocumentDbEventSourceConfig(ctx, depth + 1)));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.eventSourceArn = (i.eventSourceArn !== undefined ? i.eventSourceArn : h.arn(ctx));
  out.filterCriteria = (i.filterCriteria !== undefined ? i.filterCriteria : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingFilterCriteria(ctx, depth + 1)));
  out.functionArn = h.arn(ctx);
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.functionResponseTypes = (i.functionResponseTypes !== undefined ? i.functionResponseTypes : (depth > 4 ? [] : [""]));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.lastModified = h.timestamp();
  out.lastProcessingResult = "";
  out.maximumBatchingWindowInSeconds = (i.maximumBatchingWindowInSeconds !== undefined ? i.maximumBatchingWindowInSeconds : 0);
  out.maximumRecordAgeInSeconds = (i.maximumRecordAgeInSeconds !== undefined ? i.maximumRecordAgeInSeconds : 0);
  out.maximumRetryAttempts = (i.maximumRetryAttempts !== undefined ? i.maximumRetryAttempts : 0);
  out.metricsConfig = (i.metricsConfig !== undefined ? i.metricsConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingMetricsConfig(ctx, depth + 1)));
  out.parallelizationFactor = (i.parallelizationFactor !== undefined ? i.parallelizationFactor : 0);
  out.provisionedPollerConfig = (i.provisionedPollerConfig !== undefined ? i.provisionedPollerConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingProvisionedPollerConfig(ctx, depth + 1)));
  out.queues = (i.queues !== undefined ? i.queues : "");
  out.scalingConfig = (i.scalingConfig !== undefined ? i.scalingConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingScalingConfig(ctx, depth + 1)));
  out.selfManagedEventSource = (i.selfManagedEventSource !== undefined ? i.selfManagedEventSource : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingSelfManagedEventSource(ctx, depth + 1)));
  out.selfManagedKafkaEventSourceConfig = (i.selfManagedKafkaEventSourceConfig !== undefined ? i.selfManagedKafkaEventSourceConfig : (depth > 4 ? {} : T_lambda.lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig(ctx, depth + 1)));
  out.sourceAccessConfigurations = (i.sourceAccessConfigurations !== undefined ? i.sourceAccessConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_EventSourceMappingSourceAccessConfiguration(ctx, depth + 1))]));
  out.startingPosition = (i.startingPosition !== undefined ? i.startingPosition : "");
  out.startingPositionTimestamp = (i.startingPositionTimestamp !== undefined ? i.startingPositionTimestamp : "");
  out.state = "active";
  out.stateTransitionReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.topics = (i.topics !== undefined ? i.topics : (depth > 4 ? [] : [""]));
  out.tumblingWindowInSeconds = (i.tumblingWindowInSeconds !== undefined ? i.tumblingWindowInSeconds : 0);
  out.uuid = h.id(ctx, "uuid");
  return out;
}

// aws:lambda/function:Function
export function Function(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architectures = (i.architectures !== undefined ? i.architectures : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.code = (i.code !== undefined ? i.code : h.archive());
  out.codeSha256 = "";
  out.codeSigningConfigArn = (i.codeSigningConfigArn !== undefined ? i.codeSigningConfigArn : h.arn(ctx));
  out.deadLetterConfig = (i.deadLetterConfig !== undefined ? i.deadLetterConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionDeadLetterConfig(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.environment = (i.environment !== undefined ? i.environment : (depth > 4 ? {} : T_lambda.lambda_FunctionEnvironment(ctx, depth + 1)));
  out.ephemeralStorage = (i.ephemeralStorage !== undefined ? i.ephemeralStorage : (depth > 4 ? {} : T_lambda.lambda_FunctionEphemeralStorage(ctx, depth + 1)));
  out.fileSystemConfig = (i.fileSystemConfig !== undefined ? i.fileSystemConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionFileSystemConfig(ctx, depth + 1)));
  out.handler = (i.handler !== undefined ? i.handler : "");
  out.imageConfig = (i.imageConfig !== undefined ? i.imageConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionImageConfig(ctx, depth + 1)));
  out.imageUri = (i.imageUri !== undefined ? i.imageUri : h.endpoint(ctx, "imageUri"));
  out.invokeArn = h.arn(ctx);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.lastModified = h.timestamp();
  out.layers = (i.layers !== undefined ? i.layers : (depth > 4 ? [] : [""]));
  out.loggingConfig = (i.loggingConfig !== undefined ? i.loggingConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionLoggingConfig(ctx, depth + 1)));
  out.memorySize = (i.memorySize !== undefined ? i.memorySize : 8);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.packageType = (i.packageType !== undefined ? i.packageType : "");
  out.publish = (i.publish !== undefined ? i.publish : false);
  out.qualifiedArn = h.arn(ctx);
  out.qualifiedInvokeArn = h.arn(ctx);
  out.replaceSecurityGroupsOnDestroy = (i.replaceSecurityGroupsOnDestroy !== undefined ? i.replaceSecurityGroupsOnDestroy : false);
  out.replacementSecurityGroupIds = (i.replacementSecurityGroupIds !== undefined ? i.replacementSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.reservedConcurrentExecutions = (i.reservedConcurrentExecutions !== undefined ? i.reservedConcurrentExecutions : 0);
  out.role = (i.role !== undefined ? i.role : undefined);
  out.runtime = (i.runtime !== undefined ? i.runtime : "");
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3Key = (i.s3Key !== undefined ? i.s3Key : "");
  out.s3ObjectVersion = (i.s3ObjectVersion !== undefined ? i.s3ObjectVersion : "");
  out.signingJobArn = h.arn(ctx);
  out.signingProfileVersionArn = h.arn(ctx);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.snapStart = (i.snapStart !== undefined ? i.snapStart : (depth > 4 ? {} : T_lambda.lambda_FunctionSnapStart(ctx, depth + 1)));
  out.sourceCodeHash = (i.sourceCodeHash !== undefined ? i.sourceCodeHash : "");
  out.sourceCodeSize = 8;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeout = (i.timeout !== undefined ? i.timeout : 30);
  out.tracingConfig = (i.tracingConfig !== undefined ? i.tracingConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionTracingConfig(ctx, depth + 1)));
  out.version = "1";
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:lambda/functionEventInvokeConfig:FunctionEventInvokeConfig
export function FunctionEventInvokeConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationConfig = (i.destinationConfig !== undefined ? i.destinationConfig : (depth > 4 ? {} : T_lambda.lambda_FunctionEventInvokeConfigDestinationConfig(ctx, depth + 1)));
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.maximumEventAgeInSeconds = (i.maximumEventAgeInSeconds !== undefined ? i.maximumEventAgeInSeconds : 0);
  out.maximumRetryAttempts = (i.maximumRetryAttempts !== undefined ? i.maximumRetryAttempts : 0);
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  return out;
}

// aws:lambda/functionRecursionConfig:FunctionRecursionConfig
export function FunctionRecursionConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.recursiveLoop = (i.recursiveLoop !== undefined ? i.recursiveLoop : "");
  return out;
}

// aws:lambda/functionUrl:FunctionUrl
export function FunctionUrl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationType = (i.authorizationType !== undefined ? i.authorizationType : "");
  out.cors = (i.cors !== undefined ? i.cors : (depth > 4 ? {} : T_lambda.lambda_FunctionUrlCors(ctx, depth + 1)));
  out.functionArn = h.arn(ctx);
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.functionUrl = h.endpoint(ctx, "functionUrl");
  out.invokeMode = (i.invokeMode !== undefined ? i.invokeMode : "");
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.urlId = h.id(ctx, "urlId");
  return out;
}

// aws:lambda/invocation:Invocation
export function Invocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.input = (i.input !== undefined ? i.input : "");
  out.lifecycleScope = (i.lifecycleScope !== undefined ? i.lifecycleScope : "");
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.result = "";
  out.terraformKey = (i.terraformKey !== undefined ? i.terraformKey : "");
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  return out;
}

// aws:lambda/layerVersion:LayerVersion
export function LayerVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.code = (i.code !== undefined ? i.code : h.archive());
  out.codeSha256 = "";
  out.compatibleArchitectures = (i.compatibleArchitectures !== undefined ? i.compatibleArchitectures : (depth > 4 ? [] : [""]));
  out.compatibleRuntimes = (i.compatibleRuntimes !== undefined ? i.compatibleRuntimes : (depth > 4 ? [] : [""]));
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.layerArn = h.arn(ctx);
  out.layerName = (i.layerName !== undefined ? i.layerName : "");
  out.licenseInfo = (i.licenseInfo !== undefined ? i.licenseInfo : "");
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3Key = (i.s3Key !== undefined ? i.s3Key : "");
  out.s3ObjectVersion = (i.s3ObjectVersion !== undefined ? i.s3ObjectVersion : "");
  out.signingJobArn = h.arn(ctx);
  out.signingProfileVersionArn = h.arn(ctx);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.sourceCodeHash = (i.sourceCodeHash !== undefined ? i.sourceCodeHash : "");
  out.sourceCodeSize = 8;
  out.version = "1";
  return out;
}

// aws:lambda/layerVersionPermission:LayerVersionPermission
export function LayerVersionPermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.layerName = (i.layerName !== undefined ? i.layerName : "");
  out.organizationId = (i.organizationId !== undefined ? i.organizationId : h.id(ctx, "organizationId"));
  out.policy = "";
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.revisionId = h.id(ctx, "revisionId");
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.statementId = (i.statementId !== undefined ? i.statementId : h.id(ctx, "statementId"));
  out.versionNumber = (i.versionNumber !== undefined ? i.versionNumber : 0);
  return out;
}

// aws:lambda/permission:Permission
export function Permission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.eventSourceToken = (i.eventSourceToken !== undefined ? i.eventSourceToken : "");
  out.function = (i.function !== undefined ? i.function : "");
  out.functionUrlAuthType = (i.functionUrlAuthType !== undefined ? i.functionUrlAuthType : "");
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.principalOrgId = (i.principalOrgId !== undefined ? i.principalOrgId : h.id(ctx, "principalOrgId"));
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.sourceAccount = (i.sourceAccount !== undefined ? i.sourceAccount : "");
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.statementId = (i.statementId !== undefined ? i.statementId : h.id(ctx, "statementId"));
  out.statementIdPrefix = (i.statementIdPrefix !== undefined ? i.statementIdPrefix : "");
  return out;
}

// aws:lambda/provisionedConcurrencyConfig:ProvisionedConcurrencyConfig
export function ProvisionedConcurrencyConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.provisionedConcurrentExecutions = (i.provisionedConcurrentExecutions !== undefined ? i.provisionedConcurrentExecutions : 0);
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  return out;
}

// aws:lambda/runtimeManagementConfig:RuntimeManagementConfig
export function RuntimeManagementConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.runtimeVersionArn = (i.runtimeVersionArn !== undefined ? i.runtimeVersionArn : h.arn(ctx));
  out.updateRuntimeOn = (i.updateRuntimeOn !== undefined ? i.updateRuntimeOn : "");
  return out;
}

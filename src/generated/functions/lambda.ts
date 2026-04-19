// GENERATED FILE — do not edit.
// Service: lambda   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lambda from "../types/lambda.js";

// aws:lambda/getAlias:getAlias
export function getAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.functionVersion = "";
  out.id = h.id(ctx, "id");
  out.invokeArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:lambda/getCodeSigningConfig:getCodeSigningConfig
export function getCodeSigningConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedPublishers = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getCodeSigningConfigAllowedPublisher(ctx, depth + 1))]);
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.configId = h.id(ctx, "configId");
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastModified = h.timestamp();
  out.policies = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getCodeSigningConfigPolicy(ctx, depth + 1))]);
  return out;
}

// aws:lambda/getFunction:getFunction
export function getFunction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architectures = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.codeSha256 = "";
  out.codeSigningConfigArn = h.arn(ctx);
  out.deadLetterConfig = (depth > 4 ? {} : T_lambda.lambda_getFunctionDeadLetterConfig(ctx, depth + 1));
  out.description = "";
  out.environment = (depth > 4 ? {} : T_lambda.lambda_getFunctionEnvironment(ctx, depth + 1));
  out.ephemeralStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getFunctionEphemeralStorage(ctx, depth + 1))]);
  out.fileSystemConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getFunctionFileSystemConfig(ctx, depth + 1))]);
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.handler = "";
  out.id = h.id(ctx, "id");
  out.imageUri = h.endpoint(ctx, "imageUri");
  out.invokeArn = h.arn(ctx);
  out.kmsKeyArn = h.arn(ctx);
  out.lastModified = h.timestamp();
  out.layers = (depth > 4 ? [] : [""]);
  out.loggingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getFunctionLoggingConfig(ctx, depth + 1))]);
  out.memorySize = 8;
  out.qualifiedArn = h.arn(ctx);
  out.qualifiedInvokeArn = h.arn(ctx);
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.reservedConcurrentExecutions = 0;
  out.role = "";
  out.runtime = "";
  out.signingJobArn = h.arn(ctx);
  out.signingProfileVersionArn = h.arn(ctx);
  out.sourceCodeHash = "";
  out.sourceCodeSize = 8;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.timeout = 30;
  out.tracingConfig = (depth > 4 ? {} : T_lambda.lambda_getFunctionTracingConfig(ctx, depth + 1));
  out.version = "1";
  out.vpcConfig = (depth > 4 ? {} : T_lambda.lambda_getFunctionVpcConfig(ctx, depth + 1));
  return out;
}

// aws:lambda/getFunctionUrl:getFunctionUrl
export function getFunctionUrl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationType = "";
  out.cors = (depth > 4 ? [] : [(depth > 4 ? {} : T_lambda.lambda_getFunctionUrlCor(ctx, depth + 1))]);
  out.creationTime = "";
  out.functionArn = h.arn(ctx);
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.functionUrl = h.endpoint(ctx, "functionUrl");
  out.id = h.id(ctx, "id");
  out.invokeMode = "";
  out.lastModifiedTime = "";
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.urlId = h.id(ctx, "urlId");
  return out;
}

// aws:lambda/getFunctions:getFunctions
export function getFunctions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArns = (depth > 4 ? [] : [""]);
  out.functionNames = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:lambda/getInvocation:getInvocation
export function getInvocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionName = (i.functionName !== undefined ? i.functionName : "");
  out.id = h.id(ctx, "id");
  out.input = (i.input !== undefined ? i.input : "");
  out.qualifier = (i.qualifier !== undefined ? i.qualifier : "");
  out.result = "";
  return out;
}

// aws:lambda/getLayerVersion:getLayerVersion
export function getLayerVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.codeSha256 = "";
  out.compatibleArchitecture = (i.compatibleArchitecture !== undefined ? i.compatibleArchitecture : "");
  out.compatibleArchitectures = (depth > 4 ? [] : [""]);
  out.compatibleRuntime = (i.compatibleRuntime !== undefined ? i.compatibleRuntime : "");
  out.compatibleRuntimes = (depth > 4 ? [] : [""]);
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.layerArn = h.arn(ctx);
  out.layerName = (i.layerName !== undefined ? i.layerName : "");
  out.licenseInfo = "";
  out.signingJobArn = h.arn(ctx);
  out.signingProfileVersionArn = h.arn(ctx);
  out.sourceCodeHash = "";
  out.sourceCodeSize = 8;
  out.version = (i.version !== undefined ? i.version : 0);
  return out;
}

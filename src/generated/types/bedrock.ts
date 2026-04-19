// GENERATED FILE — do not edit.
// Service: bedrock   (143 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrock from "./bedrock.js";

// aws:bedrock/AgentAgentActionGroupActionGroupExecutor:AgentAgentActionGroupActionGroupExecutor
export function bedrock_AgentAgentActionGroupActionGroupExecutor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customControl = "";
  out.lambda = "";
  return out;
}

// aws:bedrock/AgentAgentActionGroupApiSchema:AgentAgentActionGroupApiSchema
export function bedrock_AgentAgentActionGroupApiSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.payload = "";
  out.s3 = (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupApiSchemaS3(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentAgentActionGroupApiSchemaS3:AgentAgentActionGroupApiSchemaS3
export function bedrock_AgentAgentActionGroupApiSchemaS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3ObjectKey = "";
  return out;
}

// aws:bedrock/AgentAgentActionGroupFunctionSchema:AgentAgentActionGroupFunctionSchema
export function bedrock_AgentAgentActionGroupFunctionSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.memberFunctions = (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentAgentActionGroupFunctionSchemaMemberFunctions:AgentAgentActionGroupFunctionSchemaMemberFunctions
export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functions = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction:AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction
export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter:AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter
export function bedrock_AgentAgentActionGroupFunctionSchemaMemberFunctionsFunctionParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.mapBlockKey = "";
  out.required = false;
  out.type = "";
  return out;
}

// aws:bedrock/AgentAgentActionGroupTimeouts:AgentAgentActionGroupTimeouts
export function bedrock_AgentAgentActionGroupTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentAgentAliasRoutingConfiguration:AgentAgentAliasRoutingConfiguration
export function bedrock_AgentAgentAliasRoutingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentVersion = "";
  out.provisionedThroughput = "";
  return out;
}

// aws:bedrock/AgentAgentAliasTimeouts:AgentAgentAliasTimeouts
export function bedrock_AgentAgentAliasTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentAgentCollaboratorAgentDescriptor:AgentAgentCollaboratorAgentDescriptor
export function bedrock_AgentAgentCollaboratorAgentDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasArn = h.arn(ctx);
  return out;
}

// aws:bedrock/AgentAgentCollaboratorTimeouts:AgentAgentCollaboratorTimeouts
export function bedrock_AgentAgentCollaboratorTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentAgentGuardrailConfiguration:AgentAgentGuardrailConfiguration
export function bedrock_AgentAgentGuardrailConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.guardrailIdentifier = "";
  out.guardrailVersion = "";
  return out;
}

// aws:bedrock/AgentAgentKnowledgeBaseAssociationTimeouts:AgentAgentKnowledgeBaseAssociationTimeouts
export function bedrock_AgentAgentKnowledgeBaseAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentAgentMemoryConfiguration:AgentAgentMemoryConfiguration
export function bedrock_AgentAgentMemoryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledMemoryTypes = (depth > 4 ? [] : [""]);
  out.storageDays = 0;
  return out;
}

// aws:bedrock/AgentAgentPromptOverrideConfiguration:AgentAgentPromptOverrideConfiguration
export function bedrock_AgentAgentPromptOverrideConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.overrideLambda = "";
  out.promptConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentAgentPromptOverrideConfigurationPromptConfiguration:AgentAgentPromptOverrideConfigurationPromptConfiguration
export function bedrock_AgentAgentPromptOverrideConfigurationPromptConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basePromptTemplate = "";
  out.inferenceConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration(ctx, depth + 1))]);
  out.parserMode = "";
  out.promptCreationMode = "";
  out.promptState = "";
  out.promptType = "";
  return out;
}

// aws:bedrock/AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration:AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration
export function bedrock_AgentAgentPromptOverrideConfigurationPromptConfigurationInferenceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxLength = 0;
  out.stopSequences = (depth > 4 ? [] : [""]);
  out.temperature = 0;
  out.topK = 0;
  out.topP = 0;
  return out;
}

// aws:bedrock/AgentAgentTimeouts:AgentAgentTimeouts
export function bedrock_AgentAgentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfiguration:AgentDataSourceDataSourceConfiguration
export function bedrock_AgentDataSourceDataSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.confluenceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfiguration(ctx, depth + 1));
  out.s3Configuration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationS3Configuration(ctx, depth + 1));
  out.salesforceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfiguration(ctx, depth + 1));
  out.sharePointConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfiguration(ctx, depth + 1));
  out.type = "";
  out.webConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfiguration:AgentDataSourceDataSourceConfigurationConfluenceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration(ctx, depth + 1));
  out.sourceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration:AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration:AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.patternObjectFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter:AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter:AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exclusionFilters = (depth > 4 ? [] : [""]);
  out.inclusionFilters = (depth > 4 ? [] : [""]);
  out.objectType = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration:AgentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authType = "";
  out.credentialsSecretArn = h.arn(ctx);
  out.hostType = "";
  out.hostUrl = h.endpoint(ctx, "hostUrl");
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationS3Configuration:AgentDataSourceDataSourceConfigurationS3Configuration
export function bedrock_AgentDataSourceDataSourceConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bucketOwnerAccountId = h.id(ctx, "bucketOwnerAccountId");
  out.inclusionPrefixes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfiguration:AgentDataSourceDataSourceConfigurationSalesforceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration(ctx, depth + 1));
  out.sourceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration:AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration:AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.patternObjectFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter:AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter:AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exclusionFilters = (depth > 4 ? [] : [""]);
  out.inclusionFilters = (depth > 4 ? [] : [""]);
  out.objectType = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration:AgentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authType = "";
  out.credentialsSecretArn = h.arn(ctx);
  out.hostUrl = h.endpoint(ctx, "hostUrl");
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfiguration:AgentDataSourceDataSourceConfigurationSharePointConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration(ctx, depth + 1));
  out.sourceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration:AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration:AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.patternObjectFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter:AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter:AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exclusionFilters = (depth > 4 ? [] : [""]);
  out.inclusionFilters = (depth > 4 ? [] : [""]);
  out.objectType = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration:AgentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authType = "";
  out.credentialsSecretArn = h.arn(ctx);
  out.domain = h.endpoint(ctx, "domain");
  out.hostType = "";
  out.siteUrls = (depth > 4 ? [] : [""]);
  out.tenantId = h.id(ctx, "tenantId");
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfiguration:AgentDataSourceDataSourceConfigurationWebConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration(ctx, depth + 1));
  out.sourceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration:AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerLimits = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits(ctx, depth + 1));
  out.exclusionFilters = (depth > 4 ? [] : [""]);
  out.inclusionFilters = (depth > 4 ? [] : [""]);
  out.scope = "";
  out.userAgent = "";
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits:AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxPages = 0;
  out.rateLimit = 0;
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration:AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.urlConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration:AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.seedUrls = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrl(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrl:AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrl
export function bedrock_AgentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:bedrock/AgentDataSourceServerSideEncryptionConfiguration:AgentDataSourceServerSideEncryptionConfiguration
export function bedrock_AgentDataSourceServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:bedrock/AgentDataSourceTimeouts:AgentDataSourceTimeouts
export function bedrock_AgentDataSourceTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfiguration:AgentDataSourceVectorIngestionConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.chunkingConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration(ctx, depth + 1));
  out.customTransformationConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration(ctx, depth + 1));
  out.parsingConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationChunkingConfiguration:AgentDataSourceVectorIngestionConfigurationChunkingConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.chunkingStrategy = "";
  out.fixedSizeChunkingConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration(ctx, depth + 1));
  out.hierarchicalChunkingConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration(ctx, depth + 1));
  out.semanticChunkingConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration:AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxTokens = 0;
  out.overlapPercentage = 0;
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration:AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.levelConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration(ctx, depth + 1))]);
  out.overlapTokens = 0;
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration:AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxTokens = 0;
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration:AgentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.breakpointPercentileThreshold = 0;
  out.bufferSize = 8;
  out.maxToken = 0;
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.intermediateStorage = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage(ctx, depth + 1));
  out.transformation = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Location = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stepToApply = "";
  out.transformationFunction = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.transformationLambdaConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration:AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationParsingConfiguration:AgentDataSourceVectorIngestionConfigurationParsingConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bedrockFoundationModelConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration(ctx, depth + 1));
  out.parsingStrategy = "";
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration:AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration
export function bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelArn = h.arn(ctx);
  out.parsingPrompt = (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt:AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt
export function bedrock_AgentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parsingPromptString = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfiguration:AgentKnowledgeBaseKnowledgeBaseConfiguration
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.vectorKnowledgeBaseConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.embeddingModelArn = h.arn(ctx);
  out.embeddingModelConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration(ctx, depth + 1));
  out.supplementalDataStorageConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bedrockEmbeddingModelConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = 0;
  out.embeddingDataType = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.storageLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Location = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location:AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location
export function bedrock_AgentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfiguration:AgentKnowledgeBaseStorageConfiguration
export function bedrock_AgentKnowledgeBaseStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.opensearchServerlessConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration(ctx, depth + 1));
  out.pineconeConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration(ctx, depth + 1));
  out.rdsConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration(ctx, depth + 1));
  out.redisEnterpriseCloudConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration:AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration
export function bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionArn = h.arn(ctx);
  out.fieldMapping = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping(ctx, depth + 1));
  out.vectorIndexName = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping:AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping
export function bedrock_AgentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadataField = "";
  out.textField = "";
  out.vectorField = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationPineconeConfiguration:AgentKnowledgeBaseStorageConfigurationPineconeConfiguration
export function bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionString = "";
  out.credentialsSecretArn = h.arn(ctx);
  out.fieldMapping = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping(ctx, depth + 1));
  out.namespace = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping:AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping
export function bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadataField = "";
  out.textField = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationRdsConfiguration:AgentKnowledgeBaseStorageConfigurationRdsConfiguration
export function bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialsSecretArn = h.arn(ctx);
  out.databaseName = "";
  out.fieldMapping = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping(ctx, depth + 1));
  out.resourceArn = h.arn(ctx);
  out.tableName = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping:AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping
export function bedrock_AgentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadataField = "";
  out.primaryKeyField = "";
  out.textField = "";
  out.vectorField = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration:AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration
export function bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialsSecretArn = h.arn(ctx);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.fieldMapping = (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping(ctx, depth + 1));
  out.vectorIndexName = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping:AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping
export function bedrock_AgentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metadataField = "";
  out.textField = "";
  out.vectorField = "";
  return out;
}

// aws:bedrock/AgentKnowledgeBaseTimeouts:AgentKnowledgeBaseTimeouts
export function bedrock_AgentKnowledgeBaseTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/AgentPromptVariant:AgentPromptVariant
export function bedrock_AgentPromptVariant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalModelRequestFields = "";
  out.genAiResource = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantGenAiResource(ctx, depth + 1));
  out.inferenceConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantInferenceConfiguration(ctx, depth + 1));
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantMetadata(ctx, depth + 1))]);
  out.modelId = h.id(ctx, "modelId");
  out.name = ctx.name;
  out.templateConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfiguration(ctx, depth + 1));
  out.templateType = "";
  return out;
}

// aws:bedrock/AgentPromptVariantGenAiResource:AgentPromptVariantGenAiResource
export function bedrock_AgentPromptVariantGenAiResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agent = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantGenAiResourceAgent(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantGenAiResourceAgent:AgentPromptVariantGenAiResourceAgent
export function bedrock_AgentPromptVariantGenAiResourceAgent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentIdentifier = "";
  return out;
}

// aws:bedrock/AgentPromptVariantInferenceConfiguration:AgentPromptVariantInferenceConfiguration
export function bedrock_AgentPromptVariantInferenceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantInferenceConfigurationText(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantInferenceConfigurationText:AgentPromptVariantInferenceConfigurationText
export function bedrock_AgentPromptVariantInferenceConfigurationText(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxTokens = 0;
  out.stopSequences = (depth > 4 ? [] : [""]);
  out.temperature = 0;
  out.topP = 0;
  return out;
}

// aws:bedrock/AgentPromptVariantMetadata:AgentPromptVariantMetadata
export function bedrock_AgentPromptVariantMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfiguration:AgentPromptVariantTemplateConfiguration
export function bedrock_AgentPromptVariantTemplateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.chat = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChat(ctx, depth + 1));
  out.text = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationText(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChat:AgentPromptVariantTemplateConfigurationChat
export function bedrock_AgentPromptVariantTemplateConfigurationChat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatInputVariable(ctx, depth + 1))]);
  out.messages = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatMessage(ctx, depth + 1))]);
  out.systems = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatSystem(ctx, depth + 1))]);
  out.toolConfiguration = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfiguration(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatInputVariable:AgentPromptVariantTemplateConfigurationChatInputVariable
export function bedrock_AgentPromptVariantTemplateConfigurationChatInputVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatMessage:AgentPromptVariantTemplateConfigurationChatMessage
export function bedrock_AgentPromptVariantTemplateConfigurationChatMessage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatMessageContent(ctx, depth + 1));
  out.role = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatMessageContent:AgentPromptVariantTemplateConfigurationChatMessageContent
export function bedrock_AgentPromptVariantTemplateConfigurationChatMessageContent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cachePoint = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatMessageContentCachePoint(ctx, depth + 1));
  out.text = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatMessageContentCachePoint:AgentPromptVariantTemplateConfigurationChatMessageContentCachePoint
export function bedrock_AgentPromptVariantTemplateConfigurationChatMessageContentCachePoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatSystem:AgentPromptVariantTemplateConfigurationChatSystem
export function bedrock_AgentPromptVariantTemplateConfigurationChatSystem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cachePoint = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatSystemCachePoint(ctx, depth + 1));
  out.text = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatSystemCachePoint:AgentPromptVariantTemplateConfigurationChatSystemCachePoint
export function bedrock_AgentPromptVariantTemplateConfigurationChatSystemCachePoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfiguration:AgentPromptVariantTemplateConfigurationChatToolConfiguration
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.toolChoice = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice(ctx, depth + 1));
  out.tools = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationTool(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationTool:AgentPromptVariantTemplateConfigurationChatToolConfigurationTool
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationTool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cachePoint = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint(ctx, depth + 1));
  out.toolSpec = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.any = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny(ctx, depth + 1));
  out.auto = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto(ctx, depth + 1));
  out.tool = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool(ctx, depth + 1));
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.inputSchema = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema:AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema
export function bedrock_AgentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.json = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationText:AgentPromptVariantTemplateConfigurationText
export function bedrock_AgentPromptVariantTemplateConfigurationText(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cachePoint = (depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationTextCachePoint(ctx, depth + 1));
  out.inputVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariantTemplateConfigurationTextInputVariable(ctx, depth + 1))]);
  out.text = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationTextCachePoint:AgentPromptVariantTemplateConfigurationTextCachePoint
export function bedrock_AgentPromptVariantTemplateConfigurationTextCachePoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:bedrock/AgentPromptVariantTemplateConfigurationTextInputVariable:AgentPromptVariantTemplateConfigurationTextInputVariable
export function bedrock_AgentPromptVariantTemplateConfigurationTextInputVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:bedrock/CustomModelOutputDataConfig:CustomModelOutputDataConfig
export function bedrock_CustomModelOutputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/CustomModelTimeouts:CustomModelTimeouts
export function bedrock_CustomModelTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:bedrock/CustomModelTrainingDataConfig:CustomModelTrainingDataConfig
export function bedrock_CustomModelTrainingDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/CustomModelTrainingMetric:CustomModelTrainingMetric
export function bedrock_CustomModelTrainingMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.trainingLoss = 0;
  return out;
}

// aws:bedrock/CustomModelValidationDataConfig:CustomModelValidationDataConfig
export function bedrock_CustomModelValidationDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.validators = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_CustomModelValidationDataConfigValidator(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/CustomModelValidationDataConfigValidator:CustomModelValidationDataConfigValidator
export function bedrock_CustomModelValidationDataConfigValidator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/CustomModelValidationMetric:CustomModelValidationMetric
export function bedrock_CustomModelValidationMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.validationLoss = 0;
  return out;
}

// aws:bedrock/CustomModelVpcConfig:CustomModelVpcConfig
export function bedrock_CustomModelVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:bedrock/GuardrailContentPolicyConfig:GuardrailContentPolicyConfig
export function bedrock_GuardrailContentPolicyConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filtersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailContentPolicyConfigFiltersConfig(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/GuardrailContentPolicyConfigFiltersConfig:GuardrailContentPolicyConfigFiltersConfig
export function bedrock_GuardrailContentPolicyConfigFiltersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputStrength = "";
  out.outputStrength = "";
  out.type = "";
  return out;
}

// aws:bedrock/GuardrailContextualGroundingPolicyConfig:GuardrailContextualGroundingPolicyConfig
export function bedrock_GuardrailContextualGroundingPolicyConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filtersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/GuardrailContextualGroundingPolicyConfigFiltersConfig:GuardrailContextualGroundingPolicyConfigFiltersConfig
export function bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.threshold = 0;
  out.type = "";
  return out;
}

// aws:bedrock/GuardrailSensitiveInformationPolicyConfig:GuardrailSensitiveInformationPolicyConfig
export function bedrock_GuardrailSensitiveInformationPolicyConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.piiEntitiesConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig(ctx, depth + 1))]);
  out.regexesConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig:GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig
export function bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.type = "";
  return out;
}

// aws:bedrock/GuardrailSensitiveInformationPolicyConfigRegexesConfig:GuardrailSensitiveInformationPolicyConfigRegexesConfig
export function bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.description = "";
  out.name = ctx.name;
  out.pattern = "";
  return out;
}

// aws:bedrock/GuardrailTimeouts:GuardrailTimeouts
export function bedrock_GuardrailTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/GuardrailTopicPolicyConfig:GuardrailTopicPolicyConfig
export function bedrock_GuardrailTopicPolicyConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailTopicPolicyConfigTopicsConfig(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/GuardrailTopicPolicyConfigTopicsConfig:GuardrailTopicPolicyConfigTopicsConfig
export function bedrock_GuardrailTopicPolicyConfigTopicsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definition = "";
  out.examples = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:bedrock/GuardrailVersionTimeouts:GuardrailVersionTimeouts
export function bedrock_GuardrailVersionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:bedrock/GuardrailWordPolicyConfig:GuardrailWordPolicyConfig
export function bedrock_GuardrailWordPolicyConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.managedWordListsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailWordPolicyConfigManagedWordListsConfig(ctx, depth + 1))]);
  out.wordsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_GuardrailWordPolicyConfigWordsConfig(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/GuardrailWordPolicyConfigManagedWordListsConfig:GuardrailWordPolicyConfigManagedWordListsConfig
export function bedrock_GuardrailWordPolicyConfigManagedWordListsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:bedrock/GuardrailWordPolicyConfigWordsConfig:GuardrailWordPolicyConfigWordsConfig
export function bedrock_GuardrailWordPolicyConfigWordsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  return out;
}

// aws:bedrock/InferenceProfileModel:InferenceProfileModel
export function bedrock_InferenceProfileModel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelArn = h.arn(ctx);
  return out;
}

// aws:bedrock/InferenceProfileModelSource:InferenceProfileModelSource
export function bedrock_InferenceProfileModelSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyFrom = "";
  return out;
}

// aws:bedrock/InferenceProfileTimeouts:InferenceProfileTimeouts
export function bedrock_InferenceProfileTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:bedrock/ProvisionedModelThroughputTimeouts:ProvisionedModelThroughputTimeouts
export function bedrock_ProvisionedModelThroughputTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:bedrock/getAgentAgentVersionsAgentVersionSummary:getAgentAgentVersionsAgentVersionSummary
export function bedrock_getAgentAgentVersionsAgentVersionSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentName = "";
  out.agentStatus = "";
  out.agentVersion = "";
  out.createdAt = h.timestamp();
  out.description = "";
  out.guardrailConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration(ctx, depth + 1))]);
  out.updatedAt = "";
  return out;
}

// aws:bedrock/getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration:getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration
export function bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.guardrailIdentifier = "";
  out.guardrailVersion = "";
  return out;
}

// aws:bedrock/getCustomModelOutputDataConfig:getCustomModelOutputDataConfig
export function bedrock_getCustomModelOutputDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/getCustomModelTrainingDataConfig:getCustomModelTrainingDataConfig
export function bedrock_getCustomModelTrainingDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/getCustomModelTrainingMetric:getCustomModelTrainingMetric
export function bedrock_getCustomModelTrainingMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.trainingLoss = 0;
  return out;
}

// aws:bedrock/getCustomModelValidationDataConfig:getCustomModelValidationDataConfig
export function bedrock_getCustomModelValidationDataConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.validators = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getCustomModelValidationDataConfigValidator(ctx, depth + 1))]);
  return out;
}

// aws:bedrock/getCustomModelValidationDataConfigValidator:getCustomModelValidationDataConfigValidator
export function bedrock_getCustomModelValidationDataConfigValidator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:bedrock/getCustomModelValidationMetric:getCustomModelValidationMetric
export function bedrock_getCustomModelValidationMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.validationLoss = 0;
  return out;
}

// aws:bedrock/getCustomModelsModelSummary:getCustomModelsModelSummary
export function bedrock_getCustomModelsModelSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationTime = "";
  out.modelArn = h.arn(ctx);
  out.modelName = "";
  return out;
}

// aws:bedrock/getInferenceProfileModel:getInferenceProfileModel
export function bedrock_getInferenceProfileModel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelArn = h.arn(ctx);
  return out;
}

// aws:bedrock/getInferenceProfilesInferenceProfileSummary:getInferenceProfilesInferenceProfileSummary
export function bedrock_getInferenceProfilesInferenceProfileSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.description = "";
  out.inferenceProfileArn = h.arn(ctx);
  out.inferenceProfileId = h.id(ctx, "inferenceProfileId");
  out.inferenceProfileName = "";
  out.models = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_getInferenceProfilesInferenceProfileSummaryModel(ctx, depth + 1))]);
  out.status = "active";
  out.type = "";
  out.updatedAt = "";
  return out;
}

// aws:bedrock/getInferenceProfilesInferenceProfileSummaryModel:getInferenceProfilesInferenceProfileSummaryModel
export function bedrock_getInferenceProfilesInferenceProfileSummaryModel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelArn = h.arn(ctx);
  return out;
}

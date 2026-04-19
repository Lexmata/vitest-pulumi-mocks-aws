// GENERATED FILE — do not edit.
// Service: securitylake   (23 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_securitylake from "./securitylake.js";

// aws:securitylake/AwsLogSourceSource:AwsLogSourceSource
export function securitylake_AwsLogSourceSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.regions = (depth > 4 ? [] : [""]);
  out.sourceName = "";
  out.sourceVersion = "";
  return out;
}

// aws:securitylake/CustomLogSourceAttribute:CustomLogSourceAttribute
export function securitylake_CustomLogSourceAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerArn = h.arn(ctx);
  out.databaseArn = h.arn(ctx);
  out.tableArn = h.arn(ctx);
  return out;
}

// aws:securitylake/CustomLogSourceConfiguration:CustomLogSourceConfiguration
export function securitylake_CustomLogSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerConfiguration = (depth > 4 ? {} : T_securitylake.securitylake_CustomLogSourceConfigurationCrawlerConfiguration(ctx, depth + 1));
  out.providerIdentity = (depth > 4 ? {} : T_securitylake.securitylake_CustomLogSourceConfigurationProviderIdentity(ctx, depth + 1));
  return out;
}

// aws:securitylake/CustomLogSourceConfigurationCrawlerConfiguration:CustomLogSourceConfigurationCrawlerConfiguration
export function securitylake_CustomLogSourceConfigurationCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:securitylake/CustomLogSourceConfigurationProviderIdentity:CustomLogSourceConfigurationProviderIdentity
export function securitylake_CustomLogSourceConfigurationProviderIdentity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = h.id(ctx, "externalId");
  out.principal = "";
  return out;
}

// aws:securitylake/CustomLogSourceProviderDetail:CustomLogSourceProviderDetail
export function securitylake_CustomLogSourceProviderDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.location = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:securitylake/DataLakeConfiguration:DataLakeConfiguration
export function securitylake_DataLakeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfigurationEncryptionConfiguration(ctx, depth + 1))]);
  out.lifecycleConfiguration = (depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfigurationLifecycleConfiguration(ctx, depth + 1));
  out.region = ctx.region;
  out.replicationConfiguration = (depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfigurationReplicationConfiguration(ctx, depth + 1));
  return out;
}

// aws:securitylake/DataLakeConfigurationEncryptionConfiguration:DataLakeConfigurationEncryptionConfiguration
export function securitylake_DataLakeConfigurationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:securitylake/DataLakeConfigurationLifecycleConfiguration:DataLakeConfigurationLifecycleConfiguration
export function securitylake_DataLakeConfigurationLifecycleConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expiration = (depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfigurationLifecycleConfigurationExpiration(ctx, depth + 1));
  out.transitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfigurationLifecycleConfigurationTransition(ctx, depth + 1))]);
  return out;
}

// aws:securitylake/DataLakeConfigurationLifecycleConfigurationExpiration:DataLakeConfigurationLifecycleConfigurationExpiration
export function securitylake_DataLakeConfigurationLifecycleConfigurationExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  return out;
}

// aws:securitylake/DataLakeConfigurationLifecycleConfigurationTransition:DataLakeConfigurationLifecycleConfigurationTransition
export function securitylake_DataLakeConfigurationLifecycleConfigurationTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:securitylake/DataLakeConfigurationReplicationConfiguration:DataLakeConfigurationReplicationConfiguration
export function securitylake_DataLakeConfigurationReplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regions = (depth > 4 ? [] : [""]);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:securitylake/DataLakeTimeouts:DataLakeTimeouts
export function securitylake_DataLakeTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:securitylake/SubscriberNotificationConfiguration:SubscriberNotificationConfiguration
export function securitylake_SubscriberNotificationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpsNotificationConfiguration = (depth > 4 ? {} : T_securitylake.securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration(ctx, depth + 1));
  out.sqsNotificationConfiguration = (depth > 4 ? {} : T_securitylake.securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration(ctx, depth + 1));
  return out;
}

// aws:securitylake/SubscriberNotificationConfigurationHttpsNotificationConfiguration:SubscriberNotificationConfigurationHttpsNotificationConfiguration
export function securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationApiKeyName = "";
  out.authorizationApiKeyValue = "";
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.httpMethod = "";
  out.targetRoleArn = h.arn(ctx);
  return out;
}

// aws:securitylake/SubscriberNotificationConfigurationSqsNotificationConfiguration:SubscriberNotificationConfigurationSqsNotificationConfiguration
export function securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:securitylake/SubscriberSource:SubscriberSource
export function securitylake_SubscriberSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsLogSourceResource = (depth > 4 ? {} : T_securitylake.securitylake_SubscriberSourceAwsLogSourceResource(ctx, depth + 1));
  out.customLogSourceResource = (depth > 4 ? {} : T_securitylake.securitylake_SubscriberSourceCustomLogSourceResource(ctx, depth + 1));
  return out;
}

// aws:securitylake/SubscriberSourceAwsLogSourceResource:SubscriberSourceAwsLogSourceResource
export function securitylake_SubscriberSourceAwsLogSourceResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceName = "";
  out.sourceVersion = "";
  return out;
}

// aws:securitylake/SubscriberSourceCustomLogSourceResource:SubscriberSourceCustomLogSourceResource
export function securitylake_SubscriberSourceCustomLogSourceResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_SubscriberSourceCustomLogSourceResourceAttribute(ctx, depth + 1))]);
  out.providers = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_SubscriberSourceCustomLogSourceResourceProvider(ctx, depth + 1))]);
  out.sourceName = "";
  out.sourceVersion = "";
  return out;
}

// aws:securitylake/SubscriberSourceCustomLogSourceResourceAttribute:SubscriberSourceCustomLogSourceResourceAttribute
export function securitylake_SubscriberSourceCustomLogSourceResourceAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crawlerArn = h.arn(ctx);
  out.databaseArn = h.arn(ctx);
  out.tableArn = h.arn(ctx);
  return out;
}

// aws:securitylake/SubscriberSourceCustomLogSourceResourceProvider:SubscriberSourceCustomLogSourceResourceProvider
export function securitylake_SubscriberSourceCustomLogSourceResourceProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.location = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:securitylake/SubscriberSubscriberIdentity:SubscriberSubscriberIdentity
export function securitylake_SubscriberSubscriberIdentity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = h.id(ctx, "externalId");
  out.principal = "";
  return out;
}

// aws:securitylake/SubscriberTimeouts:SubscriberTimeouts
export function securitylake_SubscriberTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

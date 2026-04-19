// GENERATED FILE — do not edit.
// Service: appfabric   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appfabric from "./appfabric.js";

// aws:appfabric/AppAuthorizationConnectionAuthRequest:AppAuthorizationConnectionAuthRequest
export function appfabric_AppAuthorizationConnectionAuthRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = "";
  out.redirectUri = h.endpoint(ctx, "redirectUri");
  return out;
}

// aws:appfabric/AppAuthorizationConnectionTenant:AppAuthorizationConnectionTenant
export function appfabric_AppAuthorizationConnectionTenant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tenantDisplayName = "";
  out.tenantIdentifier = "";
  return out;
}

// aws:appfabric/AppAuthorizationConnectionTimeouts:AppAuthorizationConnectionTimeouts
export function appfabric_AppAuthorizationConnectionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:appfabric/AppAuthorizationCredential:AppAuthorizationCredential
export function appfabric_AppAuthorizationCredential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKeyCredentials = (depth > 4 ? [] : [(depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationCredentialApiKeyCredential(ctx, depth + 1))]);
  out.oauth2Credential = (depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationCredentialOauth2Credential(ctx, depth + 1));
  return out;
}

// aws:appfabric/AppAuthorizationCredentialApiKeyCredential:AppAuthorizationCredentialApiKeyCredential
export function appfabric_AppAuthorizationCredentialApiKeyCredential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  return out;
}

// aws:appfabric/AppAuthorizationCredentialOauth2Credential:AppAuthorizationCredentialOauth2Credential
export function appfabric_AppAuthorizationCredentialOauth2Credential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  return out;
}

// aws:appfabric/AppAuthorizationTenant:AppAuthorizationTenant
export function appfabric_AppAuthorizationTenant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tenantDisplayName = "";
  out.tenantIdentifier = "";
  return out;
}

// aws:appfabric/AppAuthorizationTimeouts:AppAuthorizationTimeouts
export function appfabric_AppAuthorizationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:appfabric/IngestionDestinationDestinationConfiguration:IngestionDestinationDestinationConfiguration
export function appfabric_IngestionDestinationDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLog = (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationDestinationConfigurationAuditLog(ctx, depth + 1));
  return out;
}

// aws:appfabric/IngestionDestinationDestinationConfigurationAuditLog:IngestionDestinationDestinationConfigurationAuditLog
export function appfabric_IngestionDestinationDestinationConfigurationAuditLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination(ctx, depth + 1));
  return out;
}

// aws:appfabric/IngestionDestinationDestinationConfigurationAuditLogDestination:IngestionDestinationDestinationConfigurationAuditLogDestination
export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firehoseStream = (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream(ctx, depth + 1));
  out.s3Bucket = (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket(ctx, depth + 1));
  return out;
}

// aws:appfabric/IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream:IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream
export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamName = "";
  return out;
}

// aws:appfabric/IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket:IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket
export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.prefix = "";
  return out;
}

// aws:appfabric/IngestionDestinationProcessingConfiguration:IngestionDestinationProcessingConfiguration
export function appfabric_IngestionDestinationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLog = (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationProcessingConfigurationAuditLog(ctx, depth + 1));
  return out;
}

// aws:appfabric/IngestionDestinationProcessingConfigurationAuditLog:IngestionDestinationProcessingConfigurationAuditLog
export function appfabric_IngestionDestinationProcessingConfigurationAuditLog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.format = "";
  out.schema = "";
  return out;
}

// aws:appfabric/IngestionDestinationTimeouts:IngestionDestinationTimeouts
export function appfabric_IngestionDestinationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

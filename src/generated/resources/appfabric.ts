// GENERATED FILE — do not edit.
// Service: appfabric   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appfabric from "../types/appfabric.js";

// aws:appfabric/appAuthorization:AppAuthorization
export function AppAuthorization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.app = (i.app !== undefined ? i.app : "");
  out.appBundleArn = (i.appBundleArn !== undefined ? i.appBundleArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.authType = (i.authType !== undefined ? i.authType : "");
  out.authUrl = h.endpoint(ctx, "authUrl");
  out.createdAt = h.timestamp();
  out.credential = (i.credential !== undefined ? i.credential : (depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationCredential(ctx, depth + 1)));
  out.persona = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenants = (i.tenants !== undefined ? i.tenants : (depth > 4 ? [] : [(depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationTenant(ctx, depth + 1))]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationTimeouts(ctx, depth + 1)));
  out.updatedAt = "";
  return out;
}

// aws:appfabric/appAuthorizationConnection:AppAuthorizationConnection
export function AppAuthorizationConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.app = "";
  out.appAuthorizationArn = (i.appAuthorizationArn !== undefined ? i.appAuthorizationArn : h.arn(ctx));
  out.appBundleArn = (i.appBundleArn !== undefined ? i.appBundleArn : h.arn(ctx));
  out.authRequest = (i.authRequest !== undefined ? i.authRequest : (depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationConnectionAuthRequest(ctx, depth + 1)));
  out.tenants = (depth > 4 ? [] : [(depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationConnectionTenant(ctx, depth + 1))]);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_appfabric.appfabric_AppAuthorizationConnectionTimeouts(ctx, depth + 1)));
  return out;
}

// aws:appfabric/appBundle:AppBundle
export function AppBundle(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.customerManagedKeyArn = (i.customerManagedKeyArn !== undefined ? i.customerManagedKeyArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appfabric/ingestion:Ingestion
export function Ingestion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.app = (i.app !== undefined ? i.app : "");
  out.appBundleArn = (i.appBundleArn !== undefined ? i.appBundleArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.ingestionType = (i.ingestionType !== undefined ? i.ingestionType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenantId = (i.tenantId !== undefined ? i.tenantId : h.id(ctx, "tenantId"));
  return out;
}

// aws:appfabric/ingestionDestination:IngestionDestination
export function IngestionDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appBundleArn = (i.appBundleArn !== undefined ? i.appBundleArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.destinationConfiguration = (i.destinationConfiguration !== undefined ? i.destinationConfiguration : (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationDestinationConfiguration(ctx, depth + 1)));
  out.ingestionArn = (i.ingestionArn !== undefined ? i.ingestionArn : h.arn(ctx));
  out.processingConfiguration = (i.processingConfiguration !== undefined ? i.processingConfiguration : (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationProcessingConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_appfabric.appfabric_IngestionDestinationTimeouts(ctx, depth + 1)));
  return out;
}

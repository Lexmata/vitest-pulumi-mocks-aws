// GENERATED FILE — do not edit.
// Service: appconfig   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appconfig from "../types/appconfig.js";

// aws:appconfig/getConfigurationProfile:getConfigurationProfile
export function getConfigurationProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.configurationProfileId = (i.configurationProfileId !== undefined ? i.configurationProfileId : h.id(ctx, "configurationProfileId"));
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyIdentifier = "";
  out.locationUri = h.endpoint(ctx, "locationUri");
  out.name = ctx.name;
  out.retrievalRoleArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.validators = (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_getConfigurationProfileValidator(ctx, depth + 1))]);
  return out;
}

// aws:appconfig/getConfigurationProfiles:getConfigurationProfiles
export function getConfigurationProfiles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.configurationProfileIds = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:appconfig/getEnvironment:getEnvironment
export function getEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.description = "";
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.id = h.id(ctx, "id");
  out.monitors = (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_getEnvironmentMonitor(ctx, depth + 1))]);
  out.name = ctx.name;
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:appconfig/getEnvironments:getEnvironments
export function getEnvironments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.environmentIds = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

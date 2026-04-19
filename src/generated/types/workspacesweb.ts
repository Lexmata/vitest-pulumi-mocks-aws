// GENERATED FILE — do not edit.
// Service: workspacesweb   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_workspacesweb from "./workspacesweb.js";

// aws:workspacesweb/DataProtectionSettingsInlineRedactionConfiguration:DataProtectionSettingsInlineRedactionConfiguration
export function workspacesweb_DataProtectionSettingsInlineRedactionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalConfidenceLevel = 0;
  out.globalEnforcedUrls = (depth > 4 ? [] : [""]);
  out.globalExemptUrls = (depth > 4 ? [] : [""]);
  out.inlineRedactionPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspacesweb.workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern(ctx, depth + 1))]);
  return out;
}

// aws:workspacesweb/DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern:DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern
export function workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.builtInPatternId = h.id(ctx, "builtInPatternId");
  out.confidenceLevel = 0;
  out.customPattern = (depth > 4 ? {} : T_workspacesweb.workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern(ctx, depth + 1));
  out.enforcedUrls = (depth > 4 ? [] : [""]);
  out.exemptUrls = (depth > 4 ? [] : [""]);
  out.redactionPlaceHolders = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspacesweb.workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder(ctx, depth + 1))]);
  return out;
}

// aws:workspacesweb/DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern:DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern
export function workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keywordRegex = "";
  out.patternDescription = "";
  out.patternName = "";
  out.patternRegex = "";
  return out;
}

// aws:workspacesweb/DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder:DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder
export function workspacesweb_DataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.redactionPlaceHolderText = "";
  out.redactionPlaceHolderType = "";
  return out;
}

// aws:workspacesweb/IpAccessSettingsIpRule:IpAccessSettingsIpRule
export function workspacesweb_IpAccessSettingsIpRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.ipRange = "";
  return out;
}

// aws:workspacesweb/UserSettingsCookieSynchronizationConfiguration:UserSettingsCookieSynchronizationConfiguration
export function workspacesweb_UserSettingsCookieSynchronizationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowlists = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspacesweb.workspacesweb_UserSettingsCookieSynchronizationConfigurationAllowlist(ctx, depth + 1))]);
  out.blocklists = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspacesweb.workspacesweb_UserSettingsCookieSynchronizationConfigurationBlocklist(ctx, depth + 1))]);
  return out;
}

// aws:workspacesweb/UserSettingsCookieSynchronizationConfigurationAllowlist:UserSettingsCookieSynchronizationConfigurationAllowlist
export function workspacesweb_UserSettingsCookieSynchronizationConfigurationAllowlist(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:workspacesweb/UserSettingsCookieSynchronizationConfigurationBlocklist:UserSettingsCookieSynchronizationConfigurationBlocklist
export function workspacesweb_UserSettingsCookieSynchronizationConfigurationBlocklist(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:workspacesweb/UserSettingsToolbarConfiguration:UserSettingsToolbarConfiguration
export function workspacesweb_UserSettingsToolbarConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hiddenToolbarItems = (depth > 4 ? [] : [""]);
  out.maxDisplayResolution = "";
  out.toolbarType = "";
  out.visualMode = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: workspaces   (28 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_workspaces from "./workspaces.js";

// aws:workspaces/ConnectionAliasTimeouts:ConnectionAliasTimeouts
export function workspaces_ConnectionAliasTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:workspaces/DirectoryActiveDirectoryConfig:DirectoryActiveDirectoryConfig
export function workspaces_DirectoryActiveDirectoryConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.serviceAccountSecretArn = h.arn(ctx);
  return out;
}

// aws:workspaces/DirectoryCertificateBasedAuthProperties:DirectoryCertificateBasedAuthProperties
export function workspaces_DirectoryCertificateBasedAuthProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:workspaces/DirectorySamlProperties:DirectorySamlProperties
export function workspaces_DirectorySamlProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.relayStateParameterName = "";
  out.status = "active";
  out.userAccessUrl = h.endpoint(ctx, "userAccessUrl");
  return out;
}

// aws:workspaces/DirectorySelfServicePermissions:DirectorySelfServicePermissions
export function workspaces_DirectorySelfServicePermissions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.changeComputeType = false;
  out.increaseVolumeSize = false;
  out.rebuildWorkspace = false;
  out.restartWorkspace = false;
  out.switchRunningMode = false;
  return out;
}

// aws:workspaces/DirectoryWorkspaceAccessProperties:DirectoryWorkspaceAccessProperties
export function workspaces_DirectoryWorkspaceAccessProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceTypeAndroid = h.id(ctx, "deviceTypeAndroid");
  out.deviceTypeChromeos = "";
  out.deviceTypeIos = "";
  out.deviceTypeLinux = "";
  out.deviceTypeOsx = "";
  out.deviceTypeWeb = "";
  out.deviceTypeWindows = "";
  out.deviceTypeZeroclient = "";
  return out;
}

// aws:workspaces/DirectoryWorkspaceCreationProperties:DirectoryWorkspaceCreationProperties
export function workspaces_DirectoryWorkspaceCreationProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customSecurityGroupId = h.id(ctx, "customSecurityGroupId");
  out.defaultOu = "";
  out.enableInternetAccess = true;
  out.enableMaintenanceMode = true;
  out.userEnabledAsLocalAdministrator = false;
  return out;
}

// aws:workspaces/IpGroupRule:IpGroupRule
export function workspaces_IpGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.source = "";
  return out;
}

// aws:workspaces/WebDataProtectionSettingsInlineRedactionConfiguration:WebDataProtectionSettingsInlineRedactionConfiguration
export function workspaces_WebDataProtectionSettingsInlineRedactionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalConfidenceLevel = 0;
  out.globalEnforcedUrls = (depth > 4 ? [] : [""]);
  out.globalExemptUrls = (depth > 4 ? [] : [""]);
  out.inlineRedactionPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern(ctx, depth + 1))]);
  return out;
}

// aws:workspaces/WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern:WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern
export function workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.builtInPatternId = h.id(ctx, "builtInPatternId");
  out.confidenceLevel = 0;
  out.customPattern = (depth > 4 ? {} : T_workspaces.workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern(ctx, depth + 1));
  out.enforcedUrls = (depth > 4 ? [] : [""]);
  out.exemptUrls = (depth > 4 ? [] : [""]);
  out.redactionPlaceHolders = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder(ctx, depth + 1))]);
  return out;
}

// aws:workspaces/WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern:WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern
export function workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keywordRegex = "";
  out.patternDescription = "";
  out.patternName = "";
  out.patternRegex = "";
  return out;
}

// aws:workspaces/WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder:WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder
export function workspaces_WebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.redactionPlaceHolderText = "";
  out.redactionPlaceHolderType = "";
  return out;
}

// aws:workspaces/WebIpAccessSettingsIpRule:WebIpAccessSettingsIpRule
export function workspaces_WebIpAccessSettingsIpRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.ipRange = "";
  return out;
}

// aws:workspaces/WebUserSettingsCookieSynchronizationConfiguration:WebUserSettingsCookieSynchronizationConfiguration
export function workspaces_WebUserSettingsCookieSynchronizationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowlists = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_WebUserSettingsCookieSynchronizationConfigurationAllowlist(ctx, depth + 1))]);
  out.blocklists = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_WebUserSettingsCookieSynchronizationConfigurationBlocklist(ctx, depth + 1))]);
  return out;
}

// aws:workspaces/WebUserSettingsCookieSynchronizationConfigurationAllowlist:WebUserSettingsCookieSynchronizationConfigurationAllowlist
export function workspaces_WebUserSettingsCookieSynchronizationConfigurationAllowlist(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:workspaces/WebUserSettingsCookieSynchronizationConfigurationBlocklist:WebUserSettingsCookieSynchronizationConfigurationBlocklist
export function workspaces_WebUserSettingsCookieSynchronizationConfigurationBlocklist(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:workspaces/WebUserSettingsToolbarConfiguration:WebUserSettingsToolbarConfiguration
export function workspaces_WebUserSettingsToolbarConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hiddenToolbarItems = (depth > 4 ? [] : [""]);
  out.maxDisplayResolution = "";
  out.toolbarType = "";
  out.visualMode = "";
  return out;
}

// aws:workspaces/WorkspaceWorkspaceProperties:WorkspaceWorkspaceProperties
export function workspaces_WorkspaceWorkspaceProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeTypeName = "";
  out.rootVolumeSizeGib = 8;
  out.runningMode = "";
  out.runningModeAutoStopTimeoutInMinutes = 30;
  out.userVolumeSizeGib = 8;
  return out;
}

// aws:workspaces/getBundleComputeType:getBundleComputeType
export function workspaces_getBundleComputeType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:workspaces/getBundleRootStorage:getBundleRootStorage
export function workspaces_getBundleRootStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacity = "";
  return out;
}

// aws:workspaces/getBundleUserStorage:getBundleUserStorage
export function workspaces_getBundleUserStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacity = "";
  return out;
}

// aws:workspaces/getDirectoryActiveDirectoryConfig:getDirectoryActiveDirectoryConfig
export function workspaces_getDirectoryActiveDirectoryConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.serviceAccountSecretArn = h.arn(ctx);
  return out;
}

// aws:workspaces/getDirectoryCertificateBasedAuthProperty:getDirectoryCertificateBasedAuthProperty
export function workspaces_getDirectoryCertificateBasedAuthProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:workspaces/getDirectorySamlProperty:getDirectorySamlProperty
export function workspaces_getDirectorySamlProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.relayStateParameterName = "";
  out.status = "active";
  out.userAccessUrl = h.endpoint(ctx, "userAccessUrl");
  return out;
}

// aws:workspaces/getDirectorySelfServicePermission:getDirectorySelfServicePermission
export function workspaces_getDirectorySelfServicePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.changeComputeType = false;
  out.increaseVolumeSize = false;
  out.rebuildWorkspace = false;
  out.restartWorkspace = false;
  out.switchRunningMode = false;
  return out;
}

// aws:workspaces/getDirectoryWorkspaceAccessProperty:getDirectoryWorkspaceAccessProperty
export function workspaces_getDirectoryWorkspaceAccessProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceTypeAndroid = h.id(ctx, "deviceTypeAndroid");
  out.deviceTypeChromeos = "";
  out.deviceTypeIos = "";
  out.deviceTypeLinux = "";
  out.deviceTypeOsx = "";
  out.deviceTypeWeb = "";
  out.deviceTypeWindows = "";
  out.deviceTypeZeroclient = "";
  return out;
}

// aws:workspaces/getDirectoryWorkspaceCreationProperty:getDirectoryWorkspaceCreationProperty
export function workspaces_getDirectoryWorkspaceCreationProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customSecurityGroupId = h.id(ctx, "customSecurityGroupId");
  out.defaultOu = "";
  out.enableInternetAccess = true;
  out.enableMaintenanceMode = true;
  out.userEnabledAsLocalAdministrator = false;
  return out;
}

// aws:workspaces/getWorkspaceWorkspaceProperty:getWorkspaceWorkspaceProperty
export function workspaces_getWorkspaceWorkspaceProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeTypeName = "";
  out.rootVolumeSizeGib = 8;
  out.runningMode = "";
  out.runningModeAutoStopTimeoutInMinutes = 30;
  out.userVolumeSizeGib = 8;
  return out;
}

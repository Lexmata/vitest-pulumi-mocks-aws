// GENERATED FILE — do not edit.
// Service: workspaces   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_workspaces from "../types/workspaces.js";

// aws:workspaces/connectionAlias:ConnectionAlias
export function ConnectionAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionString = (i.connectionString !== undefined ? i.connectionString : "");
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_workspaces.workspaces_ConnectionAliasTimeouts(ctx, depth + 1)));
  return out;
}

// aws:workspaces/directory:Directory
export function Directory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryConfig = (i.activeDirectoryConfig !== undefined ? i.activeDirectoryConfig : (depth > 4 ? {} : T_workspaces.workspaces_DirectoryActiveDirectoryConfig(ctx, depth + 1)));
  out.alias = "";
  out.certificateBasedAuthProperties = (i.certificateBasedAuthProperties !== undefined ? i.certificateBasedAuthProperties : (depth > 4 ? {} : T_workspaces.workspaces_DirectoryCertificateBasedAuthProperties(ctx, depth + 1)));
  out.customerUserName = "";
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.directoryName = "";
  out.directoryType = "";
  out.dnsIpAddresses = (depth > 4 ? [] : [""]);
  out.iamRoleId = h.id(ctx, "iamRoleId");
  out.ipGroupIds = (i.ipGroupIds !== undefined ? i.ipGroupIds : (depth > 4 ? [] : [""]));
  out.registrationCode = "";
  out.samlProperties = (i.samlProperties !== undefined ? i.samlProperties : (depth > 4 ? {} : T_workspaces.workspaces_DirectorySamlProperties(ctx, depth + 1)));
  out.selfServicePermissions = (i.selfServicePermissions !== undefined ? i.selfServicePermissions : (depth > 4 ? {} : T_workspaces.workspaces_DirectorySelfServicePermissions(ctx, depth + 1)));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userIdentityType = (i.userIdentityType !== undefined ? i.userIdentityType : "");
  out.workspaceAccessProperties = (i.workspaceAccessProperties !== undefined ? i.workspaceAccessProperties : (depth > 4 ? {} : T_workspaces.workspaces_DirectoryWorkspaceAccessProperties(ctx, depth + 1)));
  out.workspaceCreationProperties = (i.workspaceCreationProperties !== undefined ? i.workspaceCreationProperties : (depth > 4 ? {} : T_workspaces.workspaces_DirectoryWorkspaceCreationProperties(ctx, depth + 1)));
  out.workspaceDirectoryDescription = (i.workspaceDirectoryDescription !== undefined ? i.workspaceDirectoryDescription : "");
  out.workspaceDirectoryName = (i.workspaceDirectoryName !== undefined ? i.workspaceDirectoryName : "");
  out.workspaceSecurityGroupId = h.id(ctx, "workspaceSecurityGroupId");
  out.workspaceType = (i.workspaceType !== undefined ? i.workspaceType : "");
  return out;
}

// aws:workspaces/ipGroup:IpGroup
export function IpGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_IpGroupRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspaces/webBrowserSettings:WebBrowserSettings
export function WebBrowserSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.browserPolicy = (i.browserPolicy !== undefined ? i.browserPolicy : "");
  out.browserSettingsArn = h.arn(ctx);
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspaces/webDataProtectionSettings:WebDataProtectionSettings
export function WebDataProtectionSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.dataProtectionSettingsArn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.inlineRedactionConfiguration = (i.inlineRedactionConfiguration !== undefined ? i.inlineRedactionConfiguration : (depth > 4 ? {} : T_workspaces.workspaces_WebDataProtectionSettingsInlineRedactionConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspaces/webIpAccessSettings:WebIpAccessSettings
export function WebIpAccessSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.ipAccessSettingsArn = h.arn(ctx);
  out.ipRules = (i.ipRules !== undefined ? i.ipRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_WebIpAccessSettingsIpRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspaces/webNetworkSettings:WebNetworkSettings
export function WebNetworkSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.networkSettingsArn = h.arn(ctx);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:workspaces/webUserAccessLoggingSettings:WebUserAccessLoggingSettings
export function WebUserAccessLoggingSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.kinesisStreamArn = (i.kinesisStreamArn !== undefined ? i.kinesisStreamArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userAccessLoggingSettingsArn = h.arn(ctx);
  return out;
}

// aws:workspaces/webUserSettings:WebUserSettings
export function WebUserSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.cookieSynchronizationConfiguration = (i.cookieSynchronizationConfiguration !== undefined ? i.cookieSynchronizationConfiguration : (depth > 4 ? {} : T_workspaces.workspaces_WebUserSettingsCookieSynchronizationConfiguration(ctx, depth + 1)));
  out.copyAllowed = (i.copyAllowed !== undefined ? i.copyAllowed : "");
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.deepLinkAllowed = (i.deepLinkAllowed !== undefined ? i.deepLinkAllowed : "");
  out.disconnectTimeoutInMinutes = (i.disconnectTimeoutInMinutes !== undefined ? i.disconnectTimeoutInMinutes : 30);
  out.downloadAllowed = (i.downloadAllowed !== undefined ? i.downloadAllowed : "");
  out.idleDisconnectTimeoutInMinutes = (i.idleDisconnectTimeoutInMinutes !== undefined ? i.idleDisconnectTimeoutInMinutes : 30);
  out.pasteAllowed = (i.pasteAllowed !== undefined ? i.pasteAllowed : "");
  out.printAllowed = (i.printAllowed !== undefined ? i.printAllowed : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.toolbarConfiguration = (i.toolbarConfiguration !== undefined ? i.toolbarConfiguration : (depth > 4 ? {} : T_workspaces.workspaces_WebUserSettingsToolbarConfiguration(ctx, depth + 1)));
  out.uploadAllowed = (i.uploadAllowed !== undefined ? i.uploadAllowed : "");
  out.userSettingsArn = h.arn(ctx);
  return out;
}

// aws:workspaces/workspace:Workspace
export function Workspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.computerName = "";
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.ipAddress = "10.0.0.10";
  out.rootVolumeEncryptionEnabled = (i.rootVolumeEncryptionEnabled !== undefined ? i.rootVolumeEncryptionEnabled : false);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userName = (i.userName !== undefined ? i.userName : "");
  out.userVolumeEncryptionEnabled = (i.userVolumeEncryptionEnabled !== undefined ? i.userVolumeEncryptionEnabled : false);
  out.volumeEncryptionKey = (i.volumeEncryptionKey !== undefined ? i.volumeEncryptionKey : "");
  out.workspaceProperties = (i.workspaceProperties !== undefined ? i.workspaceProperties : (depth > 4 ? {} : T_workspaces.workspaces_WorkspaceWorkspaceProperties(ctx, depth + 1)));
  return out;
}

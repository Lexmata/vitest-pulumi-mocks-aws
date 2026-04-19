// GENERATED FILE — do not edit.
// Service: workspacesweb   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_workspacesweb from "../types/workspacesweb.js";

// aws:workspacesweb/browserSettings:BrowserSettings
export function BrowserSettings(ctx: MockCtx): Record<string, any> {
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

// aws:workspacesweb/dataProtectionSettings:DataProtectionSettings
export function DataProtectionSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.dataProtectionSettingsArn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.inlineRedactionConfiguration = (i.inlineRedactionConfiguration !== undefined ? i.inlineRedactionConfiguration : (depth > 4 ? {} : T_workspacesweb.workspacesweb_DataProtectionSettingsInlineRedactionConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspacesweb/ipAccessSettings:IpAccessSettings
export function IpAccessSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.customerManagedKey = (i.customerManagedKey !== undefined ? i.customerManagedKey : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.ipAccessSettingsArn = h.arn(ctx);
  out.ipRules = (i.ipRules !== undefined ? i.ipRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_workspacesweb.workspacesweb_IpAccessSettingsIpRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:workspacesweb/networkSettings:NetworkSettings
export function NetworkSettings(ctx: MockCtx): Record<string, any> {
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

// aws:workspacesweb/userAccessLoggingSettings:UserAccessLoggingSettings
export function UserAccessLoggingSettings(ctx: MockCtx): Record<string, any> {
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

// aws:workspacesweb/userSettings:UserSettings
export function UserSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.associatedPortalArns = (depth > 4 ? [] : [""]);
  out.cookieSynchronizationConfiguration = (i.cookieSynchronizationConfiguration !== undefined ? i.cookieSynchronizationConfiguration : (depth > 4 ? {} : T_workspacesweb.workspacesweb_UserSettingsCookieSynchronizationConfiguration(ctx, depth + 1)));
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
  out.toolbarConfiguration = (i.toolbarConfiguration !== undefined ? i.toolbarConfiguration : (depth > 4 ? {} : T_workspacesweb.workspacesweb_UserSettingsToolbarConfiguration(ctx, depth + 1)));
  out.uploadAllowed = (i.uploadAllowed !== undefined ? i.uploadAllowed : "");
  out.userSettingsArn = h.arn(ctx);
  return out;
}

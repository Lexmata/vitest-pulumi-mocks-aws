// GENERATED FILE — do not edit.
// Service: workspaces   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_workspaces from "../types/workspaces.js";

// aws:workspaces/getBundle:getBundle
export function getBundle(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.computeTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getBundleComputeType(ctx, depth + 1))]);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  out.rootStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getBundleRootStorage(ctx, depth + 1))]);
  out.userStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getBundleUserStorage(ctx, depth + 1))]);
  return out;
}

// aws:workspaces/getDirectory:getDirectory
export function getDirectory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectoryActiveDirectoryConfig(ctx, depth + 1))]);
  out.alias = "";
  out.certificateBasedAuthProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectoryCertificateBasedAuthProperty(ctx, depth + 1))]);
  out.customerUserName = "";
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.directoryName = "";
  out.directoryType = "";
  out.dnsIpAddresses = (depth > 4 ? [] : [""]);
  out.iamRoleId = h.id(ctx, "iamRoleId");
  out.id = h.id(ctx, "id");
  out.ipGroupIds = (depth > 4 ? [] : [""]);
  out.registrationCode = "";
  out.samlProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectorySamlProperty(ctx, depth + 1))]);
  out.selfServicePermissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectorySelfServicePermission(ctx, depth + 1))]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userIdentityType = "";
  out.workspaceAccessProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectoryWorkspaceAccessProperty(ctx, depth + 1))]);
  out.workspaceCreationProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getDirectoryWorkspaceCreationProperty(ctx, depth + 1))]);
  out.workspaceDirectoryDescription = "";
  out.workspaceDirectoryName = "";
  out.workspaceSecurityGroupId = h.id(ctx, "workspaceSecurityGroupId");
  out.workspaceType = "";
  return out;
}

// aws:workspaces/getImage:getImage
export function getImage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.name = ctx.name;
  out.operatingSystemType = "";
  out.requiredTenancy = "";
  out.state = "active";
  return out;
}

// aws:workspaces/getWorkspace:getWorkspace
export function getWorkspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bundleId = h.id(ctx, "bundleId");
  out.computerName = "";
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.id = h.id(ctx, "id");
  out.ipAddress = "10.0.0.10";
  out.rootVolumeEncryptionEnabled = false;
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userName = (i.userName !== undefined ? i.userName : "");
  out.userVolumeEncryptionEnabled = false;
  out.volumeEncryptionKey = "";
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  out.workspaceProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_workspaces.workspaces_getWorkspaceWorkspaceProperty(ctx, depth + 1))]);
  return out;
}

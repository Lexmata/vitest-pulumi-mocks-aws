// GENERATED FILE — do not edit.
// Service: grafana   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_grafana from "../types/grafana.js";

// aws:grafana/licenseAssociation:LicenseAssociation
export function LicenseAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.freeTrialExpiration = "";
  out.grafanaToken = (i.grafanaToken !== undefined ? i.grafanaToken : "");
  out.licenseExpiration = "";
  out.licenseType = (i.licenseType !== undefined ? i.licenseType : "");
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:grafana/roleAssociation:RoleAssociation
export function RoleAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupIds = (i.groupIds !== undefined ? i.groupIds : (depth > 4 ? [] : [""]));
  out.role = (i.role !== undefined ? i.role : "");
  out.userIds = (i.userIds !== undefined ? i.userIds : (depth > 4 ? [] : [""]));
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:grafana/workspace:Workspace
export function Workspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountAccessType = (i.accountAccessType !== undefined ? i.accountAccessType : "");
  out.arn = h.arn(ctx);
  out.authenticationProviders = (i.authenticationProviders !== undefined ? i.authenticationProviders : (depth > 4 ? [] : [""]));
  out.configuration = (i.configuration !== undefined ? i.configuration : "");
  out.dataSources = (i.dataSources !== undefined ? i.dataSources : (depth > 4 ? [] : [""]));
  out.description = (i.description !== undefined ? i.description : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.grafanaVersion = (i.grafanaVersion !== undefined ? i.grafanaVersion : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkAccessControl = (i.networkAccessControl !== undefined ? i.networkAccessControl : (depth > 4 ? {} : T_grafana.grafana_WorkspaceNetworkAccessControl(ctx, depth + 1)));
  out.notificationDestinations = (i.notificationDestinations !== undefined ? i.notificationDestinations : (depth > 4 ? [] : [""]));
  out.organizationRoleName = (i.organizationRoleName !== undefined ? i.organizationRoleName : "");
  out.organizationalUnits = (i.organizationalUnits !== undefined ? i.organizationalUnits : (depth > 4 ? [] : [""]));
  out.permissionType = (i.permissionType !== undefined ? i.permissionType : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.samlConfigurationStatus = "";
  out.stackSetName = (i.stackSetName !== undefined ? i.stackSetName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfiguration = (i.vpcConfiguration !== undefined ? i.vpcConfiguration : (depth > 4 ? {} : T_grafana.grafana_WorkspaceVpcConfiguration(ctx, depth + 1)));
  return out;
}

// aws:grafana/workspaceApiKey:WorkspaceApiKey
export function WorkspaceApiKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.keyRole = (i.keyRole !== undefined ? i.keyRole : "");
  out.secondsToLive = (i.secondsToLive !== undefined ? i.secondsToLive : 0);
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:grafana/workspaceSamlConfiguration:WorkspaceSamlConfiguration
export function WorkspaceSamlConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminRoleValues = (i.adminRoleValues !== undefined ? i.adminRoleValues : (depth > 4 ? [] : [""]));
  out.allowedOrganizations = (i.allowedOrganizations !== undefined ? i.allowedOrganizations : (depth > 4 ? [] : [""]));
  out.editorRoleValues = (i.editorRoleValues !== undefined ? i.editorRoleValues : (depth > 4 ? [] : [""]));
  out.emailAssertion = (i.emailAssertion !== undefined ? i.emailAssertion : "");
  out.groupsAssertion = (i.groupsAssertion !== undefined ? i.groupsAssertion : "");
  out.idpMetadataUrl = (i.idpMetadataUrl !== undefined ? i.idpMetadataUrl : h.endpoint(ctx, "idpMetadataUrl"));
  out.idpMetadataXml = (i.idpMetadataXml !== undefined ? i.idpMetadataXml : "");
  out.loginAssertion = (i.loginAssertion !== undefined ? i.loginAssertion : "");
  out.loginValidityDuration = (i.loginValidityDuration !== undefined ? i.loginValidityDuration : 0);
  out.nameAssertion = (i.nameAssertion !== undefined ? i.nameAssertion : "");
  out.orgAssertion = (i.orgAssertion !== undefined ? i.orgAssertion : "");
  out.roleAssertion = (i.roleAssertion !== undefined ? i.roleAssertion : "");
  out.status = "active";
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:grafana/workspaceServiceAccount:WorkspaceServiceAccount
export function WorkspaceServiceAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grafanaRole = (i.grafanaRole !== undefined ? i.grafanaRole : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serviceAccountId = h.id(ctx, "serviceAccountId");
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:grafana/workspaceServiceAccountToken:WorkspaceServiceAccountToken
export function WorkspaceServiceAccountToken(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.expiresAt = "";
  out.key = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.secondsToLive = (i.secondsToLive !== undefined ? i.secondsToLive : 0);
  out.serviceAccountId = (i.serviceAccountId !== undefined ? i.serviceAccountId : h.id(ctx, "serviceAccountId"));
  out.serviceAccountTokenId = h.id(ctx, "serviceAccountTokenId");
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

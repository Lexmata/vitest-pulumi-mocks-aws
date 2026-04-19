// GENERATED FILE — do not edit.
// Service: organizations   (12 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_organizations from "../types/organizations.js";

// aws:organizations/getDelegatedAdministrators:getDelegatedAdministrators
export function getDelegatedAdministrators(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.delegatedAdministrators = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getDelegatedAdministratorsDelegatedAdministrator(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.servicePrincipal = (i.servicePrincipal !== undefined ? i.servicePrincipal : "");
  return out;
}

// aws:organizations/getDelegatedServices:getDelegatedServices
export function getDelegatedServices(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.delegatedServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getDelegatedServicesDelegatedService(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:organizations/getOrganization:getOrganization
export function getOrganization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationAccount(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.awsServiceAccessPrincipals = (depth > 4 ? [] : [""]);
  out.enabledPolicyTypes = (depth > 4 ? [] : [""]);
  out.featureSet = "";
  out.id = h.id(ctx, "id");
  out.masterAccountArn = h.arn(ctx);
  out.masterAccountEmail = "";
  out.masterAccountId = h.id(ctx, "masterAccountId");
  out.masterAccountName = "";
  out.nonMasterAccounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationNonMasterAccount(ctx, depth + 1))]);
  out.roots = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationRoot(ctx, depth + 1))]);
  return out;
}

// aws:organizations/getOrganizationalUnit:getOrganizationalUnit
export function getOrganizationalUnit(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  return out;
}

// aws:organizations/getOrganizationalUnitChildAccounts:getOrganizationalUnitChildAccounts
export function getOrganizationalUnitChildAccounts(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationalUnitChildAccountsAccount(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  return out;
}

// aws:organizations/getOrganizationalUnitDescendantAccounts:getOrganizationalUnitDescendantAccounts
export function getOrganizationalUnitDescendantAccounts(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationalUnitDescendantAccountsAccount(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  return out;
}

// aws:organizations/getOrganizationalUnitDescendantOrganizationalUnits:getOrganizationalUnitDescendantOrganizationalUnits
export function getOrganizationalUnitDescendantOrganizationalUnits(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.childrens = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationalUnitDescendantOrganizationalUnitsChildren(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  return out;
}

// aws:organizations/getOrganizationalUnits:getOrganizationalUnits
export function getOrganizationalUnits(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.children = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationalUnitsChild(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  return out;
}

// aws:organizations/getPolicies:getPolicies
export function getPolicies(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = (i.filter !== undefined ? i.filter : "");
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:organizations/getPoliciesForTarget:getPoliciesForTarget
export function getPoliciesForTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = (i.filter !== undefined ? i.filter : "");
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  return out;
}

// aws:organizations/getPolicy:getPolicy
export function getPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsManaged = false;
  out.content = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.policyId = (i.policyId !== undefined ? i.policyId : h.id(ctx, "policyId"));
  out.type = "";
  return out;
}

// aws:organizations/getResourceTags:getResourceTags
export function getResourceTags(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

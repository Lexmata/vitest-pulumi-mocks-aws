// GENERATED FILE — do not edit.
// Service: organizations   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_organizations from "../types/organizations.js";

// aws:organizations/account:Account
export function Account(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.closeOnDeletion = (i.closeOnDeletion !== undefined ? i.closeOnDeletion : false);
  out.createGovcloud = (i.createGovcloud !== undefined ? i.createGovcloud : false);
  out.email = (i.email !== undefined ? i.email : "");
  out.govcloudId = h.id(ctx, "govcloudId");
  out.iamUserAccessToBilling = (i.iamUserAccessToBilling !== undefined ? i.iamUserAccessToBilling : "");
  out.joinedMethod = "";
  out.joinedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  out.roleName = (i.roleName !== undefined ? i.roleName : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:organizations/delegatedAdministrator:DelegatedAdministrator
export function DelegatedAdministrator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.delegationEnabledDate = "";
  out.email = "";
  out.joinedMethod = "";
  out.joinedTimestamp = "";
  out.name = ctx.name;
  out.servicePrincipal = (i.servicePrincipal !== undefined ? i.servicePrincipal : "");
  out.status = "active";
  return out;
}

// aws:organizations/organization:Organization
export function Organization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_OrganizationAccount(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.awsServiceAccessPrincipals = (i.awsServiceAccessPrincipals !== undefined ? i.awsServiceAccessPrincipals : (depth > 4 ? [] : [""]));
  out.enabledPolicyTypes = (i.enabledPolicyTypes !== undefined ? i.enabledPolicyTypes : (depth > 4 ? [] : [""]));
  out.featureSet = (i.featureSet !== undefined ? i.featureSet : "");
  out.masterAccountArn = h.arn(ctx);
  out.masterAccountEmail = "";
  out.masterAccountId = h.id(ctx, "masterAccountId");
  out.masterAccountName = "";
  out.nonMasterAccounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_OrganizationNonMasterAccount(ctx, depth + 1))]);
  out.roots = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_OrganizationRoot(ctx, depth + 1))]);
  return out;
}

// aws:organizations/organizationalUnit:OrganizationalUnit
export function OrganizationalUnit(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_OrganizationalUnitAccount(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentId = (i.parentId !== undefined ? i.parentId : h.id(ctx, "parentId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:organizations/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = (i.content !== undefined ? i.content : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:organizations/policyAttachment:PolicyAttachment
export function PolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyId = (i.policyId !== undefined ? i.policyId : h.id(ctx, "policyId"));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  return out;
}

// aws:organizations/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = (i.content !== undefined ? i.content : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

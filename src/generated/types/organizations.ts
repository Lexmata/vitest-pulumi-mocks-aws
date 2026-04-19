// GENERATED FILE — do not edit.
// Service: organizations   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_organizations from "./organizations.js";

// aws:organizations/OrganizationAccount:OrganizationAccount
export function organizations_OrganizationAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/OrganizationNonMasterAccount:OrganizationNonMasterAccount
export function organizations_OrganizationNonMasterAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/OrganizationRoot:OrganizationRoot
export function organizations_OrganizationRoot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.policyTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_OrganizationRootPolicyType(ctx, depth + 1))]);
  return out;
}

// aws:organizations/OrganizationRootPolicyType:OrganizationRootPolicyType
export function organizations_OrganizationRootPolicyType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.type = "";
  return out;
}

// aws:organizations/OrganizationalUnitAccount:OrganizationalUnitAccount
export function organizations_OrganizationalUnitAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:organizations/getDelegatedAdministratorsDelegatedAdministrator:getDelegatedAdministratorsDelegatedAdministrator
export function organizations_getDelegatedAdministratorsDelegatedAdministrator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.delegationEnabledDate = "";
  out.email = "";
  out.id = h.id(ctx, "id");
  out.joinedMethod = "";
  out.joinedTimestamp = "";
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/getDelegatedServicesDelegatedService:getDelegatedServicesDelegatedService
export function organizations_getDelegatedServicesDelegatedService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.delegationEnabledDate = "";
  out.servicePrincipal = "";
  return out;
}

// aws:organizations/getOrganizationAccount:getOrganizationAccount
export function organizations_getOrganizationAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/getOrganizationNonMasterAccount:getOrganizationNonMasterAccount
export function organizations_getOrganizationNonMasterAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/getOrganizationRoot:getOrganizationRoot
export function organizations_getOrganizationRoot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.policyTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_organizations.organizations_getOrganizationRootPolicyType(ctx, depth + 1))]);
  return out;
}

// aws:organizations/getOrganizationRootPolicyType:getOrganizationRootPolicyType
export function organizations_getOrganizationRootPolicyType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.type = "";
  return out;
}

// aws:organizations/getOrganizationalUnitChildAccountsAccount:getOrganizationalUnitChildAccountsAccount
export function organizations_getOrganizationalUnitChildAccountsAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/getOrganizationalUnitDescendantAccountsAccount:getOrganizationalUnitDescendantAccountsAccount
export function organizations_getOrganizationalUnitDescendantAccountsAccount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:organizations/getOrganizationalUnitDescendantOrganizationalUnitsChildren:getOrganizationalUnitDescendantOrganizationalUnitsChildren
export function organizations_getOrganizationalUnitDescendantOrganizationalUnitsChildren(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:organizations/getOrganizationalUnitsChild:getOrganizationalUnitsChild
export function organizations_getOrganizationalUnitsChild(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

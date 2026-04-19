// GENERATED FILE — do not edit.
// Service: inspector2   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_inspector2 from "../types/inspector2.js";

// aws:inspector2/delegatedAdminAccount:DelegatedAdminAccount
export function DelegatedAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.relationshipStatus = "";
  return out;
}

// aws:inspector2/enabler:Enabler
export function Enabler(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountIds = (i.accountIds !== undefined ? i.accountIds : (depth > 4 ? [] : [""]));
  out.resourceTypes = (i.resourceTypes !== undefined ? i.resourceTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:inspector2/filter:Filter
export function Filter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.filterCriterias = (i.filterCriterias !== undefined ? i.filterCriterias : (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteria(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.reason = (i.reason !== undefined ? i.reason : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:inspector2/memberAssociation:MemberAssociation
export function MemberAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.delegatedAdminAccountId = h.id(ctx, "delegatedAdminAccountId");
  out.relationshipStatus = "";
  out.updatedAt = "";
  return out;
}

// aws:inspector2/organizationConfiguration:OrganizationConfiguration
export function OrganizationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : (depth > 4 ? {} : T_inspector2.inspector2_OrganizationConfigurationAutoEnable(ctx, depth + 1)));
  out.maxAccountLimitReached = false;
  return out;
}

// GENERATED FILE — do not edit.
// Service: fms   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fms from "../types/fms.js";

// aws:fms/adminAccount:AdminAccount
export function AdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  return out;
}

// aws:fms/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deleteAllPolicyResources = (i.deleteAllPolicyResources !== undefined ? i.deleteAllPolicyResources : false);
  out.deleteUnusedFmManagedResources = (i.deleteUnusedFmManagedResources !== undefined ? i.deleteUnusedFmManagedResources : false);
  out.description = (i.description !== undefined ? i.description : "");
  out.excludeMap = (i.excludeMap !== undefined ? i.excludeMap : (depth > 4 ? {} : T_fms.fms_PolicyExcludeMap(ctx, depth + 1)));
  out.excludeResourceTags = (i.excludeResourceTags !== undefined ? i.excludeResourceTags : false);
  out.includeMap = (i.includeMap !== undefined ? i.includeMap : (depth > 4 ? {} : T_fms.fms_PolicyIncludeMap(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyUpdateToken = "";
  out.remediationEnabled = (i.remediationEnabled !== undefined ? i.remediationEnabled : false);
  out.resourceSetIds = (i.resourceSetIds !== undefined ? i.resourceSetIds : (depth > 4 ? [] : [""]));
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : {});
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.resourceTypeLists = (i.resourceTypeLists !== undefined ? i.resourceTypeLists : (depth > 4 ? [] : [""]));
  out.securityServicePolicyData = (i.securityServicePolicyData !== undefined ? i.securityServicePolicyData : (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyData(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:fms/resourceSet:ResourceSet
export function ResourceSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.resourceSets = (i.resourceSets !== undefined ? i.resourceSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_ResourceSetResourceSet(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_fms.fms_ResourceSetTimeouts(ctx, depth + 1)));
  return out;
}

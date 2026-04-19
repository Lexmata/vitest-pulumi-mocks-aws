// GENERATED FILE — do not edit.
// Service: ssoadmin   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssoadmin from "../types/ssoadmin.js";

// aws:ssoadmin/getApplication:getApplication
export function getApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationAccount = "";
  out.applicationArn = (i.applicationArn !== undefined ? i.applicationArn : h.arn(ctx));
  out.applicationProviderArn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceArn = h.arn(ctx);
  out.name = ctx.name;
  out.portalOptions = (i.portalOptions !== undefined ? i.portalOptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getApplicationPortalOption(ctx, depth + 1))]));
  out.status = "active";
  return out;
}

// aws:ssoadmin/getApplicationAssignments:getApplicationAssignments
export function getApplicationAssignments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = (i.applicationArn !== undefined ? i.applicationArn : h.arn(ctx));
  out.applicationAssignments = (i.applicationAssignments !== undefined ? i.applicationAssignments : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getApplicationAssignmentsApplicationAssignment(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:ssoadmin/getApplicationProviders:getApplicationProviders
export function getApplicationProviders(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationProviders = (i.applicationProviders !== undefined ? i.applicationProviders : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getApplicationProvidersApplicationProvider(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:ssoadmin/getInstances:getInstances
export function getInstances(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.identityStoreIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssoadmin/getPermissionSet:getPermissionSet
export function getPermissionSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.relayState = "";
  out.sessionDuration = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ssoadmin/getPermissionSets:getPermissionSets
export function getPermissionSets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  return out;
}

// aws:ssoadmin/getPrincipalApplicationAssignments:getPrincipalApplicationAssignments
export function getPrincipalApplicationAssignments(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationAssignments = (i.applicationAssignments !== undefined ? i.applicationAssignments : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getPrincipalApplicationAssignmentsApplicationAssignment(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.principalId = (i.principalId !== undefined ? i.principalId : h.id(ctx, "principalId"));
  out.principalType = (i.principalType !== undefined ? i.principalType : "");
  return out;
}

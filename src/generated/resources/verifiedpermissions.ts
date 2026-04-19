// GENERATED FILE — do not edit.
// Service: verifiedpermissions   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_verifiedpermissions from "../types/verifiedpermissions.js";

// aws:verifiedpermissions/identitySource:IdentitySource
export function IdentitySource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfiguration(ctx, depth + 1)));
  out.policyStoreId = (i.policyStoreId !== undefined ? i.policyStoreId : h.id(ctx, "policyStoreId"));
  out.principalEntityType = (i.principalEntityType !== undefined ? i.principalEntityType : "");
  return out;
}

// aws:verifiedpermissions/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.definition = (i.definition !== undefined ? i.definition : (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyDefinition(ctx, depth + 1)));
  out.policyId = h.id(ctx, "policyId");
  out.policyStoreId = (i.policyStoreId !== undefined ? i.policyStoreId : h.id(ctx, "policyStoreId"));
  return out;
}

// aws:verifiedpermissions/policyStore:PolicyStore
export function PolicyStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.policyStoreId = h.id(ctx, "policyStoreId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validationSettings = (i.validationSettings !== undefined ? i.validationSettings : (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyStoreValidationSettings(ctx, depth + 1)));
  return out;
}

// aws:verifiedpermissions/policyTemplate:PolicyTemplate
export function PolicyTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.policyStoreId = (i.policyStoreId !== undefined ? i.policyStoreId : h.id(ctx, "policyStoreId"));
  out.policyTemplateId = h.id(ctx, "policyTemplateId");
  out.statement = (i.statement !== undefined ? i.statement : "");
  return out;
}

// aws:verifiedpermissions/schema:Schema
export function Schema(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definition = (i.definition !== undefined ? i.definition : (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_SchemaDefinition(ctx, depth + 1)));
  out.namespaces = (depth > 4 ? [] : [""]);
  out.policyStoreId = (i.policyStoreId !== undefined ? i.policyStoreId : h.id(ctx, "policyStoreId"));
  return out;
}

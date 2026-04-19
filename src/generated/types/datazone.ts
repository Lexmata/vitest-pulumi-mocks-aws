// GENERATED FILE — do not edit.
// Service: datazone   (21 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datazone from "./datazone.js";

// aws:datazone/AssetTypeFormsInput:AssetTypeFormsInput
export function datazone_AssetTypeFormsInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapBlockKey = "";
  out.required = false;
  out.typeIdentifier = "";
  out.typeRevision = "";
  return out;
}

// aws:datazone/AssetTypeTimeouts:AssetTypeTimeouts
export function datazone_AssetTypeTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:datazone/DomainSingleSignOn:DomainSingleSignOn
export function datazone_DomainSingleSignOn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.userAssignment = "";
  return out;
}

// aws:datazone/DomainTimeouts:DomainTimeouts
export function datazone_DomainTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:datazone/EnvironmentLastDeployment:EnvironmentLastDeployment
export function datazone_EnvironmentLastDeployment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deploymentId = h.id(ctx, "deploymentId");
  out.deploymentStatus = "";
  out.deploymentType = "";
  out.failureReasons = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_EnvironmentLastDeploymentFailureReason(ctx, depth + 1))]);
  out.isDeploymentComplete = true;
  out.messages = (depth > 4 ? [] : [""]);
  return out;
}

// aws:datazone/EnvironmentLastDeploymentFailureReason:EnvironmentLastDeploymentFailureReason
export function datazone_EnvironmentLastDeploymentFailureReason(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = "";
  out.message = "";
  return out;
}

// aws:datazone/EnvironmentProfileUserParameter:EnvironmentProfileUserParameter
export function datazone_EnvironmentProfileUserParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:datazone/EnvironmentProvisionedResource:EnvironmentProvisionedResource
export function datazone_EnvironmentProvisionedResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.provider = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:datazone/EnvironmentTimeouts:EnvironmentTimeouts
export function datazone_EnvironmentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:datazone/EnvironmentUserParameter:EnvironmentUserParameter
export function datazone_EnvironmentUserParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:datazone/FormTypeImport:FormTypeImport
export function datazone_FormTypeImport(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.revision = "";
  return out;
}

// aws:datazone/FormTypeModel:FormTypeModel
export function datazone_FormTypeModel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.smithy = "";
  return out;
}

// aws:datazone/FormTypeTimeouts:FormTypeTimeouts
export function datazone_FormTypeTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:datazone/GlossaryTermTermRelations:GlossaryTermTermRelations
export function datazone_GlossaryTermTermRelations(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classifies = (depth > 4 ? [] : [""]);
  out.isAs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:datazone/GlossaryTermTimeouts:GlossaryTermTimeouts
export function datazone_GlossaryTermTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:datazone/ProjectFailureReason:ProjectFailureReason
export function datazone_ProjectFailureReason(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = "";
  out.message = "";
  return out;
}

// aws:datazone/ProjectTimeouts:ProjectTimeouts
export function datazone_ProjectTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:datazone/UserProfileDetail:UserProfileDetail
export function datazone_UserProfileDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iams = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_UserProfileDetailIam(ctx, depth + 1))]);
  out.ssos = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_UserProfileDetailSso(ctx, depth + 1))]);
  return out;
}

// aws:datazone/UserProfileDetailIam:UserProfileDetailIam
export function datazone_UserProfileDetailIam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:datazone/UserProfileDetailSso:UserProfileDetailSso
export function datazone_UserProfileDetailSso(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firstName = "";
  out.lastName = "";
  out.userName = "";
  return out;
}

// aws:datazone/UserProfileTimeouts:UserProfileTimeouts
export function datazone_UserProfileTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

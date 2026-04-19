// GENERATED FILE — do not edit.
// Service: datazone   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datazone from "../types/datazone.js";

// aws:datazone/assetType:AssetType
export function AssetType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.formsInputs = (i.formsInputs !== undefined ? i.formsInputs : (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_AssetTypeFormsInput(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owningProjectIdentifier = (i.owningProjectIdentifier !== undefined ? i.owningProjectIdentifier : "");
  out.revision = "";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_AssetTypeTimeouts(ctx, depth + 1)));
  return out;
}

// aws:datazone/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.domainExecutionRole = (i.domainExecutionRole !== undefined ? i.domainExecutionRole : "");
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.portalUrl = h.endpoint(ctx, "portalUrl");
  out.singleSignOn = (i.singleSignOn !== undefined ? i.singleSignOn : (depth > 4 ? {} : T_datazone.datazone_DomainSingleSignOn(ctx, depth + 1)));
  out.skipDeletionCheck = (i.skipDeletionCheck !== undefined ? i.skipDeletionCheck : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_DomainTimeouts(ctx, depth + 1)));
  return out;
}

// aws:datazone/environment:Environment
export function Environment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountIdentifier = (i.accountIdentifier !== undefined ? i.accountIdentifier : "");
  out.accountRegion = (i.accountRegion !== undefined ? i.accountRegion : "");
  out.blueprintIdentifier = (i.blueprintIdentifier !== undefined ? i.blueprintIdentifier : "");
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.glossaryTerms = (i.glossaryTerms !== undefined ? i.glossaryTerms : (depth > 4 ? [] : [""]));
  out.lastDeployments = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_EnvironmentLastDeployment(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.profileIdentifier = (i.profileIdentifier !== undefined ? i.profileIdentifier : "");
  out.projectIdentifier = (i.projectIdentifier !== undefined ? i.projectIdentifier : "");
  out.providerEnvironment = "";
  out.provisionedResources = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_EnvironmentProvisionedResource(ctx, depth + 1))]);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_EnvironmentTimeouts(ctx, depth + 1)));
  out.userParameters = (i.userParameters !== undefined ? i.userParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_EnvironmentUserParameter(ctx, depth + 1))]));
  return out;
}

// aws:datazone/environmentBlueprintConfiguration:EnvironmentBlueprintConfiguration
export function EnvironmentBlueprintConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainId = (i.domainId !== undefined ? i.domainId : h.id(ctx, "domainId"));
  out.enabledRegions = (i.enabledRegions !== undefined ? i.enabledRegions : (depth > 4 ? [] : [""]));
  out.environmentBlueprintId = (i.environmentBlueprintId !== undefined ? i.environmentBlueprintId : h.id(ctx, "environmentBlueprintId"));
  out.manageAccessRoleArn = (i.manageAccessRoleArn !== undefined ? i.manageAccessRoleArn : h.arn(ctx));
  out.provisioningRoleArn = (i.provisioningRoleArn !== undefined ? i.provisioningRoleArn : h.arn(ctx));
  out.regionalParameters = (i.regionalParameters !== undefined ? i.regionalParameters : {});
  return out;
}

// aws:datazone/environmentProfile:EnvironmentProfile
export function EnvironmentProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.awsAccountRegion = (i.awsAccountRegion !== undefined ? i.awsAccountRegion : "");
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.environmentBlueprintIdentifier = (i.environmentBlueprintIdentifier !== undefined ? i.environmentBlueprintIdentifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectIdentifier = (i.projectIdentifier !== undefined ? i.projectIdentifier : "");
  out.updatedAt = "";
  out.userParameters = (i.userParameters !== undefined ? i.userParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_EnvironmentProfileUserParameter(ctx, depth + 1))]));
  return out;
}

// aws:datazone/formType:FormType
export function FormType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.imports = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_FormTypeImport(ctx, depth + 1))]);
  out.model = (i.model !== undefined ? i.model : (depth > 4 ? {} : T_datazone.datazone_FormTypeModel(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.originDomainId = h.id(ctx, "originDomainId");
  out.originProjectId = h.id(ctx, "originProjectId");
  out.owningProjectIdentifier = (i.owningProjectIdentifier !== undefined ? i.owningProjectIdentifier : "");
  out.revision = "";
  out.status = (i.status !== undefined ? i.status : "active");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_FormTypeTimeouts(ctx, depth + 1)));
  return out;
}

// aws:datazone/glossary:Glossary
export function Glossary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owningProjectIdentifier = (i.owningProjectIdentifier !== undefined ? i.owningProjectIdentifier : "");
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:datazone/glossaryTerm:GlossaryTerm
export function GlossaryTerm(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.glossaryIdentifier = (i.glossaryIdentifier !== undefined ? i.glossaryIdentifier : "");
  out.longDescription = (i.longDescription !== undefined ? i.longDescription : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.shortDescription = (i.shortDescription !== undefined ? i.shortDescription : "");
  out.status = (i.status !== undefined ? i.status : "active");
  out.termRelations = (i.termRelations !== undefined ? i.termRelations : (depth > 4 ? {} : T_datazone.datazone_GlossaryTermTermRelations(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_GlossaryTermTimeouts(ctx, depth + 1)));
  return out;
}

// aws:datazone/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.failureReasons = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_ProjectFailureReason(ctx, depth + 1))]);
  out.glossaryTerms = (i.glossaryTerms !== undefined ? i.glossaryTerms : (depth > 4 ? [] : [""]));
  out.lastUpdatedAt = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectStatus = "";
  out.skipDeletionCheck = (i.skipDeletionCheck !== undefined ? i.skipDeletionCheck : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_ProjectTimeouts(ctx, depth + 1)));
  return out;
}

// aws:datazone/userProfile:UserProfile
export function UserProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.details = (depth > 4 ? [] : [(depth > 4 ? {} : T_datazone.datazone_UserProfileDetail(ctx, depth + 1))]);
  out.domainIdentifier = (i.domainIdentifier !== undefined ? i.domainIdentifier : "");
  out.status = (i.status !== undefined ? i.status : "active");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_datazone.datazone_UserProfileTimeouts(ctx, depth + 1)));
  out.type = "";
  out.userIdentifier = (i.userIdentifier !== undefined ? i.userIdentifier : "");
  out.userType = (i.userType !== undefined ? i.userType : "");
  return out;
}

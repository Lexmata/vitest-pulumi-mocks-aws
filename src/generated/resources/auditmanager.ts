// GENERATED FILE — do not edit.
// Service: auditmanager   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_auditmanager from "../types/auditmanager.js";

// aws:auditmanager/accountRegistration:AccountRegistration
export function AccountRegistration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.delegatedAdminAccount = (i.delegatedAdminAccount !== undefined ? i.delegatedAdminAccount : "");
  out.deregisterOnDestroy = (i.deregisterOnDestroy !== undefined ? i.deregisterOnDestroy : false);
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.status = "active";
  return out;
}

// aws:auditmanager/assessment:Assessment
export function Assessment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assessmentReportsDestination = (i.assessmentReportsDestination !== undefined ? i.assessmentReportsDestination : (depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentAssessmentReportsDestination(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.frameworkId = (i.frameworkId !== undefined ? i.frameworkId : h.id(ctx, "frameworkId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roles = (i.roles !== undefined ? i.roles : (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentRole(ctx, depth + 1))]));
  out.rolesAlls = (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentRolesAll(ctx, depth + 1))]);
  out.scope = (i.scope !== undefined ? i.scope : (depth > 4 ? {} : T_auditmanager.auditmanager_AssessmentScope(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:auditmanager/assessmentDelegation:AssessmentDelegation
export function AssessmentDelegation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assessmentId = (i.assessmentId !== undefined ? i.assessmentId : h.id(ctx, "assessmentId"));
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.controlSetId = (i.controlSetId !== undefined ? i.controlSetId : h.id(ctx, "controlSetId"));
  out.delegationId = h.id(ctx, "delegationId");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.roleType = (i.roleType !== undefined ? i.roleType : "");
  out.status = "active";
  return out;
}

// aws:auditmanager/assessmentReport:AssessmentReport
export function AssessmentReport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assessmentId = (i.assessmentId !== undefined ? i.assessmentId : h.id(ctx, "assessmentId"));
  out.author = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  return out;
}

// aws:auditmanager/control:Control
export function Control(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionPlanInstructions = (i.actionPlanInstructions !== undefined ? i.actionPlanInstructions : "");
  out.actionPlanTitle = (i.actionPlanTitle !== undefined ? i.actionPlanTitle : "");
  out.arn = h.arn(ctx);
  out.controlMappingSources = (i.controlMappingSources !== undefined ? i.controlMappingSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_ControlControlMappingSource(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.testingInformation = (i.testingInformation !== undefined ? i.testingInformation : "");
  out.type = "";
  return out;
}

// aws:auditmanager/framework:Framework
export function Framework(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.complianceType = (i.complianceType !== undefined ? i.complianceType : "");
  out.controlSets = (i.controlSets !== undefined ? i.controlSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_FrameworkControlSet(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.frameworkType = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:auditmanager/frameworkShare:FrameworkShare
export function FrameworkShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.destinationAccount = (i.destinationAccount !== undefined ? i.destinationAccount : "");
  out.destinationRegion = (i.destinationRegion !== undefined ? i.destinationRegion : "");
  out.frameworkId = (i.frameworkId !== undefined ? i.frameworkId : h.id(ctx, "frameworkId"));
  out.status = "active";
  return out;
}

// aws:auditmanager/organizationAdminAccountRegistration:OrganizationAdminAccountRegistration
export function OrganizationAdminAccountRegistration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminAccountId = (i.adminAccountId !== undefined ? i.adminAccountId : h.id(ctx, "adminAccountId"));
  out.organizationId = h.id(ctx, "organizationId");
  return out;
}

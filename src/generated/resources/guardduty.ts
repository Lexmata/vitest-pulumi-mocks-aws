// GENERATED FILE — do not edit.
// Service: guardduty   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_guardduty from "../types/guardduty.js";

// aws:guardduty/detector:Detector
export function Detector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.arn = h.arn(ctx);
  out.datasources = (i.datasources !== undefined ? i.datasources : (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasources(ctx, depth + 1)));
  out.enable = (i.enable !== undefined ? i.enable : true);
  out.findingPublishingFrequency = (i.findingPublishingFrequency !== undefined ? i.findingPublishingFrequency : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:guardduty/detectorFeature:DetectorFeature
export function DetectorFeature(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalConfigurations = (i.additionalConfigurations !== undefined ? i.additionalConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_DetectorFeatureAdditionalConfiguration(ctx, depth + 1))]));
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:guardduty/filter:Filter
export function Filter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.findingCriteria = (i.findingCriteria !== undefined ? i.findingCriteria : (depth > 4 ? {} : T_guardduty.guardduty_FilterFindingCriteria(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rank = (i.rank !== undefined ? i.rank : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:guardduty/iPSet:IPSet
export function IPSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activate = (i.activate !== undefined ? i.activate : false);
  out.arn = h.arn(ctx);
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.format = (i.format !== undefined ? i.format : "");
  out.location = (i.location !== undefined ? i.location : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:guardduty/inviteAccepter:InviteAccepter
export function InviteAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.masterAccountId = (i.masterAccountId !== undefined ? i.masterAccountId : h.id(ctx, "masterAccountId"));
  return out;
}

// aws:guardduty/malwareProtectionPlan:MalwareProtectionPlan
export function MalwareProtectionPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_MalwareProtectionPlanAction(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.protectedResource = (i.protectedResource !== undefined ? i.protectedResource : (depth > 4 ? {} : T_guardduty.guardduty_MalwareProtectionPlanProtectedResource(ctx, depth + 1)));
  out.role = (i.role !== undefined ? i.role : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:guardduty/member:Member
export function Member(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.disableEmailNotification = (i.disableEmailNotification !== undefined ? i.disableEmailNotification : false);
  out.email = (i.email !== undefined ? i.email : "");
  out.invitationMessage = (i.invitationMessage !== undefined ? i.invitationMessage : "");
  out.invite = (i.invite !== undefined ? i.invite : false);
  out.relationshipStatus = "";
  return out;
}

// aws:guardduty/memberDetectorFeature:MemberDetectorFeature
export function MemberDetectorFeature(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.additionalConfigurations = (i.additionalConfigurations !== undefined ? i.additionalConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_MemberDetectorFeatureAdditionalConfiguration(ctx, depth + 1))]));
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:guardduty/organizationAdminAccount:OrganizationAdminAccount
export function OrganizationAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminAccountId = (i.adminAccountId !== undefined ? i.adminAccountId : h.id(ctx, "adminAccountId"));
  return out;
}

// aws:guardduty/organizationConfiguration:OrganizationConfiguration
export function OrganizationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : false);
  out.autoEnableOrganizationMembers = (i.autoEnableOrganizationMembers !== undefined ? i.autoEnableOrganizationMembers : "");
  out.datasources = (i.datasources !== undefined ? i.datasources : (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasources(ctx, depth + 1)));
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  return out;
}

// aws:guardduty/organizationConfigurationFeature:OrganizationConfigurationFeature
export function OrganizationConfigurationFeature(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalConfigurations = (i.additionalConfigurations !== undefined ? i.additionalConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationFeatureAdditionalConfiguration(ctx, depth + 1))]));
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : "");
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:guardduty/publishingDestination:PublishingDestination
export function PublishingDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationArn = (i.destinationArn !== undefined ? i.destinationArn : h.arn(ctx));
  out.destinationType = (i.destinationType !== undefined ? i.destinationType : "");
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  return out;
}

// aws:guardduty/threatIntelSet:ThreatIntelSet
export function ThreatIntelSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activate = (i.activate !== undefined ? i.activate : false);
  out.arn = h.arn(ctx);
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.format = (i.format !== undefined ? i.format : "");
  out.location = (i.location !== undefined ? i.location : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

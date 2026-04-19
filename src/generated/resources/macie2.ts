// GENERATED FILE — do not edit.
// Service: macie2   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_macie2 from "../types/macie2.js";

// aws:macie2/account:Account
export function Account(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.findingPublishingFrequency = (i.findingPublishingFrequency !== undefined ? i.findingPublishingFrequency : "");
  out.serviceRole = "";
  out.status = (i.status !== undefined ? i.status : "active");
  out.updatedAt = "";
  return out;
}

// aws:macie2/classificationExportConfiguration:ClassificationExportConfiguration
export function ClassificationExportConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Destination = (i.s3Destination !== undefined ? i.s3Destination : (depth > 4 ? {} : T_macie2.macie2_ClassificationExportConfigurationS3Destination(ctx, depth + 1)));
  return out;
}

// aws:macie2/classificationJob:ClassificationJob
export function ClassificationJob(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.customDataIdentifierIds = (i.customDataIdentifierIds !== undefined ? i.customDataIdentifierIds : (depth > 4 ? [] : [""]));
  out.description = (i.description !== undefined ? i.description : "");
  out.initialRun = (i.initialRun !== undefined ? i.initialRun : false);
  out.jobArn = h.arn(ctx);
  out.jobId = h.id(ctx, "jobId");
  out.jobStatus = (i.jobStatus !== undefined ? i.jobStatus : "");
  out.jobType = (i.jobType !== undefined ? i.jobType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.s3JobDefinition = (i.s3JobDefinition !== undefined ? i.s3JobDefinition : (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinition(ctx, depth + 1)));
  out.samplingPercentage = (i.samplingPercentage !== undefined ? i.samplingPercentage : 0);
  out.scheduleFrequency = (i.scheduleFrequency !== undefined ? i.scheduleFrequency : (depth > 4 ? {} : T_macie2.macie2_ClassificationJobScheduleFrequency(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userPausedDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobUserPausedDetail(ctx, depth + 1))]);
  return out;
}

// aws:macie2/invitationAccepter:InvitationAccepter
export function InvitationAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.administratorAccountId = (i.administratorAccountId !== undefined ? i.administratorAccountId : h.id(ctx, "administratorAccountId"));
  out.invitationId = h.id(ctx, "invitationId");
  return out;
}

// aws:macie2/member:Member
export function Member(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.administratorAccountId = h.id(ctx, "administratorAccountId");
  out.arn = h.arn(ctx);
  out.email = (i.email !== undefined ? i.email : "");
  out.invitationDisableEmailNotification = (i.invitationDisableEmailNotification !== undefined ? i.invitationDisableEmailNotification : false);
  out.invitationMessage = (i.invitationMessage !== undefined ? i.invitationMessage : "");
  out.invite = (i.invite !== undefined ? i.invite : false);
  out.invitedAt = "";
  out.masterAccountId = h.id(ctx, "masterAccountId");
  out.relationshipStatus = "";
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updatedAt = "";
  return out;
}

// aws:macie2/organizationAdminAccount:OrganizationAdminAccount
export function OrganizationAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminAccountId = (i.adminAccountId !== undefined ? i.adminAccountId : h.id(ctx, "adminAccountId"));
  return out;
}

// aws:macie2/organizationConfiguration:OrganizationConfiguration
export function OrganizationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : false);
  return out;
}

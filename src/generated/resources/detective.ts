// GENERATED FILE — do not edit.
// Service: detective   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:detective/graph:Graph
export function Graph(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdTime = h.timestamp();
  out.graphArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:detective/invitationAccepter:InvitationAccepter
export function InvitationAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.graphArn = (i.graphArn !== undefined ? i.graphArn : h.arn(ctx));
  return out;
}

// aws:detective/member:Member
export function Member(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.administratorId = h.id(ctx, "administratorId");
  out.disableEmailNotification = (i.disableEmailNotification !== undefined ? i.disableEmailNotification : false);
  out.disabledReason = "";
  out.emailAddress = (i.emailAddress !== undefined ? i.emailAddress : "");
  out.graphArn = (i.graphArn !== undefined ? i.graphArn : h.arn(ctx));
  out.invitedTime = "";
  out.message = (i.message !== undefined ? i.message : "");
  out.status = "active";
  out.updatedTime = "";
  out.volumeUsageInBytes = "";
  return out;
}

// aws:detective/organizationAdminAccount:OrganizationAdminAccount
export function OrganizationAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  return out;
}

// aws:detective/organizationConfiguration:OrganizationConfiguration
export function OrganizationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : false);
  out.graphArn = (i.graphArn !== undefined ? i.graphArn : h.arn(ctx));
  return out;
}

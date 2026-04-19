// GENERATED FILE — do not edit.
// Service: ram   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:ram/principalAssociation:PrincipalAssociation
export function PrincipalAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.resourceShareArn = (i.resourceShareArn !== undefined ? i.resourceShareArn : h.arn(ctx));
  return out;
}

// aws:ram/resourceAssociation:ResourceAssociation
export function ResourceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.resourceShareArn = (i.resourceShareArn !== undefined ? i.resourceShareArn : h.arn(ctx));
  return out;
}

// aws:ram/resourceShare:ResourceShare
export function ResourceShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowExternalPrincipals = (i.allowExternalPrincipals !== undefined ? i.allowExternalPrincipals : true);
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.permissionArns = (i.permissionArns !== undefined ? i.permissionArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ram/resourceShareAccepter:ResourceShareAccepter
export function ResourceShareAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invitationArn = h.arn(ctx);
  out.receiverAccountId = h.id(ctx, "receiverAccountId");
  out.resources = (depth > 4 ? [] : [""]);
  out.senderAccountId = h.id(ctx, "senderAccountId");
  out.shareArn = (i.shareArn !== undefined ? i.shareArn : h.arn(ctx));
  out.shareId = h.id(ctx, "shareId");
  out.shareName = "";
  out.status = "active";
  return out;
}

// aws:ram/sharingWithOrganization:SharingWithOrganization
export function SharingWithOrganization(ctx: MockCtx): Record<string, any> {
  const _ = ctx;
  return {};
}

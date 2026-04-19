// GENERATED FILE — do not edit.
// Service: cleanrooms   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cleanrooms from "../types/cleanrooms.js";

// aws:cleanrooms/collaboration:Collaboration
export function Collaboration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createTime = h.timestamp();
  out.creatorDisplayName = (i.creatorDisplayName !== undefined ? i.creatorDisplayName : "");
  out.creatorMemberAbilities = (i.creatorMemberAbilities !== undefined ? i.creatorMemberAbilities : (depth > 4 ? [] : [""]));
  out.dataEncryptionMetadata = (i.dataEncryptionMetadata !== undefined ? i.dataEncryptionMetadata : (depth > 4 ? {} : T_cleanrooms.cleanrooms_CollaborationDataEncryptionMetadata(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.members = (i.members !== undefined ? i.members : (depth > 4 ? [] : [(depth > 4 ? {} : T_cleanrooms.cleanrooms_CollaborationMember(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queryLogStatus = (i.queryLogStatus !== undefined ? i.queryLogStatus : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:cleanrooms/configuredTable:ConfiguredTable
export function ConfiguredTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedColumns = (i.allowedColumns !== undefined ? i.allowedColumns : (depth > 4 ? [] : [""]));
  out.analysisMethod = (i.analysisMethod !== undefined ? i.analysisMethod : "");
  out.arn = h.arn(ctx);
  out.createTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tableReference = (i.tableReference !== undefined ? i.tableReference : (depth > 4 ? {} : T_cleanrooms.cleanrooms_ConfiguredTableTableReference(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:cleanrooms/membership:Membership
export function Membership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.collaborationArn = h.arn(ctx);
  out.collaborationCreatorAccountId = h.id(ctx, "collaborationCreatorAccountId");
  out.collaborationCreatorDisplayName = "";
  out.collaborationId = (i.collaborationId !== undefined ? i.collaborationId : h.id(ctx, "collaborationId"));
  out.collaborationName = "";
  out.createTime = h.timestamp();
  out.defaultResultConfiguration = (i.defaultResultConfiguration !== undefined ? i.defaultResultConfiguration : (depth > 4 ? {} : T_cleanrooms.cleanrooms_MembershipDefaultResultConfiguration(ctx, depth + 1)));
  out.memberAbilities = (depth > 4 ? [] : [""]);
  out.paymentConfiguration = (i.paymentConfiguration !== undefined ? i.paymentConfiguration : (depth > 4 ? {} : T_cleanrooms.cleanrooms_MembershipPaymentConfiguration(ctx, depth + 1)));
  out.queryLogStatus = (i.queryLogStatus !== undefined ? i.queryLogStatus : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

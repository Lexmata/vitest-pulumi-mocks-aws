// GENERATED FILE — do not edit.
// Service: identitystore   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_identitystore from "../types/identitystore.js";

// aws:identitystore/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_GroupExternalId(ctx, depth + 1))]);
  out.groupId = h.id(ctx, "groupId");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  return out;
}

// aws:identitystore/groupMembership:GroupMembership
export function GroupMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupId = (i.groupId !== undefined ? i.groupId : h.id(ctx, "groupId"));
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  out.memberId = (i.memberId !== undefined ? i.memberId : h.id(ctx, "memberId"));
  out.membershipId = h.id(ctx, "membershipId");
  return out;
}

// aws:identitystore/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (i.addresses !== undefined ? i.addresses : (depth > 4 ? {} : T_identitystore.identitystore_UserAddresses(ctx, depth + 1)));
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.emails = (i.emails !== undefined ? i.emails : (depth > 4 ? {} : T_identitystore.identitystore_UserEmails(ctx, depth + 1)));
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_UserExternalId(ctx, depth + 1))]);
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  out.locale = (i.locale !== undefined ? i.locale : "");
  out.name = (i.name !== undefined ? i.name : (depth > 4 ? {} : T_identitystore.identitystore_UserName(ctx, depth + 1)));
  out.nickname = (i.nickname !== undefined ? i.nickname : "");
  out.phoneNumbers = (i.phoneNumbers !== undefined ? i.phoneNumbers : (depth > 4 ? {} : T_identitystore.identitystore_UserPhoneNumbers(ctx, depth + 1)));
  out.preferredLanguage = (i.preferredLanguage !== undefined ? i.preferredLanguage : "");
  out.profileUrl = (i.profileUrl !== undefined ? i.profileUrl : h.endpoint(ctx, "profileUrl"));
  out.timezone = (i.timezone !== undefined ? i.timezone : "");
  out.title = (i.title !== undefined ? i.title : "");
  out.userId = h.id(ctx, "userId");
  out.userName = (i.userName !== undefined ? i.userName : "");
  out.userType = (i.userType !== undefined ? i.userType : "");
  return out;
}

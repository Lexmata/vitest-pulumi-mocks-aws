// GENERATED FILE — do not edit.
// Service: identitystore   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_identitystore from "../types/identitystore.js";

// aws:identitystore/getGroup:getGroup
export function getGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alternateIdentifier = (i.alternateIdentifier !== undefined ? i.alternateIdentifier : (depth > 4 ? {} : T_identitystore.identitystore_getGroupAlternateIdentifier(ctx, depth + 1)));
  out.description = "";
  out.displayName = "";
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getGroupExternalId(ctx, depth + 1))]);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_identitystore.identitystore_getGroupFilter(ctx, depth + 1)));
  out.groupId = (i.groupId !== undefined ? i.groupId : h.id(ctx, "groupId"));
  out.id = h.id(ctx, "id");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  return out;
}

// aws:identitystore/getGroupMemberships:getGroupMemberships
export function getGroupMemberships(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupId = (i.groupId !== undefined ? i.groupId : h.id(ctx, "groupId"));
  out.groupMemberships = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getGroupMembershipsGroupMembership(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  return out;
}

// aws:identitystore/getGroups:getGroups
export function getGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getGroupsGroup(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  return out;
}

// aws:identitystore/getUser:getUser
export function getUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUserAddress(ctx, depth + 1))]);
  out.alternateIdentifier = (i.alternateIdentifier !== undefined ? i.alternateIdentifier : (depth > 4 ? {} : T_identitystore.identitystore_getUserAlternateIdentifier(ctx, depth + 1)));
  out.displayName = "";
  out.emails = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUserEmail(ctx, depth + 1))]);
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUserExternalId(ctx, depth + 1))]);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_identitystore.identitystore_getUserFilter(ctx, depth + 1)));
  out.id = h.id(ctx, "id");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  out.locale = "";
  out.names = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUserName(ctx, depth + 1))]);
  out.nickname = "";
  out.phoneNumbers = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUserPhoneNumber(ctx, depth + 1))]);
  out.preferredLanguage = "";
  out.profileUrl = h.endpoint(ctx, "profileUrl");
  out.timezone = "";
  out.title = "";
  out.userId = (i.userId !== undefined ? i.userId : h.id(ctx, "userId"));
  out.userName = "";
  out.userType = "";
  return out;
}

// aws:identitystore/getUsers:getUsers
export function getUsers(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.identityStoreId = (i.identityStoreId !== undefined ? i.identityStoreId : h.id(ctx, "identityStoreId"));
  out.users = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUser(ctx, depth + 1))]);
  return out;
}

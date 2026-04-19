// GENERATED FILE — do not edit.
// Service: identitystore   (30 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_identitystore from "./identitystore.js";

// aws:identitystore/GroupExternalId:GroupExternalId
export function identitystore_GroupExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/UserAddresses:UserAddresses
export function identitystore_UserAddresses(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.country = "";
  out.formatted = "";
  out.locality = "";
  out.postalCode = "";
  out.primary = false;
  out.region = ctx.region;
  out.streetAddress = "";
  out.type = "";
  return out;
}

// aws:identitystore/UserEmails:UserEmails
export function identitystore_UserEmails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

// aws:identitystore/UserExternalId:UserExternalId
export function identitystore_UserExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/UserName:UserName
export function identitystore_UserName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.familyName = "";
  out.formatted = "";
  out.givenName = "";
  out.honorificPrefix = "";
  out.honorificSuffix = "";
  out.middleName = "";
  return out;
}

// aws:identitystore/UserPhoneNumbers:UserPhoneNumbers
export function identitystore_UserPhoneNumbers(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

// aws:identitystore/getGroupAlternateIdentifier:getGroupAlternateIdentifier
export function identitystore_getGroupAlternateIdentifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = (depth > 4 ? {} : T_identitystore.identitystore_getGroupAlternateIdentifierExternalId(ctx, depth + 1));
  out.uniqueAttribute = (depth > 4 ? {} : T_identitystore.identitystore_getGroupAlternateIdentifierUniqueAttribute(ctx, depth + 1));
  return out;
}

// aws:identitystore/getGroupAlternateIdentifierExternalId:getGroupAlternateIdentifierExternalId
export function identitystore_getGroupAlternateIdentifierExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getGroupAlternateIdentifierUniqueAttribute:getGroupAlternateIdentifierUniqueAttribute
export function identitystore_getGroupAlternateIdentifierUniqueAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributePath = "";
  out.attributeValue = "";
  return out;
}

// aws:identitystore/getGroupExternalId:getGroupExternalId
export function identitystore_getGroupExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getGroupFilter:getGroupFilter
export function identitystore_getGroupFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributePath = "";
  out.attributeValue = "";
  return out;
}

// aws:identitystore/getGroupMembershipsGroupMembership:getGroupMembershipsGroupMembership
export function identitystore_getGroupMembershipsGroupMembership(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupId = h.id(ctx, "groupId");
  out.identityStoreId = h.id(ctx, "identityStoreId");
  out.memberId = (depth > 4 ? {} : T_identitystore.identitystore_getGroupMembershipsGroupMembershipMemberId(ctx, depth + 1));
  out.membershipId = h.id(ctx, "membershipId");
  return out;
}

// aws:identitystore/getGroupMembershipsGroupMembershipMemberId:getGroupMembershipsGroupMembershipMemberId
export function identitystore_getGroupMembershipsGroupMembershipMemberId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:identitystore/getGroupsGroup:getGroupsGroup
export function identitystore_getGroupsGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.displayName = "";
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getGroupsGroupExternalId(ctx, depth + 1))]);
  out.groupId = h.id(ctx, "groupId");
  out.identityStoreId = h.id(ctx, "identityStoreId");
  return out;
}

// aws:identitystore/getGroupsGroupExternalId:getGroupsGroupExternalId
export function identitystore_getGroupsGroupExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getUserAddress:getUserAddress
export function identitystore_getUserAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.country = "";
  out.formatted = "";
  out.locality = "";
  out.postalCode = "";
  out.primary = false;
  out.region = ctx.region;
  out.streetAddress = "";
  out.type = "";
  return out;
}

// aws:identitystore/getUserAlternateIdentifier:getUserAlternateIdentifier
export function identitystore_getUserAlternateIdentifier(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = (depth > 4 ? {} : T_identitystore.identitystore_getUserAlternateIdentifierExternalId(ctx, depth + 1));
  out.uniqueAttribute = (depth > 4 ? {} : T_identitystore.identitystore_getUserAlternateIdentifierUniqueAttribute(ctx, depth + 1));
  return out;
}

// aws:identitystore/getUserAlternateIdentifierExternalId:getUserAlternateIdentifierExternalId
export function identitystore_getUserAlternateIdentifierExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getUserAlternateIdentifierUniqueAttribute:getUserAlternateIdentifierUniqueAttribute
export function identitystore_getUserAlternateIdentifierUniqueAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributePath = "";
  out.attributeValue = "";
  return out;
}

// aws:identitystore/getUserEmail:getUserEmail
export function identitystore_getUserEmail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

// aws:identitystore/getUserExternalId:getUserExternalId
export function identitystore_getUserExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getUserFilter:getUserFilter
export function identitystore_getUserFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributePath = "";
  out.attributeValue = "";
  return out;
}

// aws:identitystore/getUserName:getUserName
export function identitystore_getUserName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.familyName = "";
  out.formatted = "";
  out.givenName = "";
  out.honorificPrefix = "";
  out.honorificSuffix = "";
  out.middleName = "";
  return out;
}

// aws:identitystore/getUserPhoneNumber:getUserPhoneNumber
export function identitystore_getUserPhoneNumber(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

// aws:identitystore/getUsersUser:getUsersUser
export function identitystore_getUsersUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUserAddress(ctx, depth + 1))]);
  out.displayName = "";
  out.emails = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUserEmail(ctx, depth + 1))]);
  out.externalIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUserExternalId(ctx, depth + 1))]);
  out.identityStoreId = h.id(ctx, "identityStoreId");
  out.locale = "";
  out.names = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUserName(ctx, depth + 1))]);
  out.nickname = "";
  out.phoneNumbers = (depth > 4 ? [] : [(depth > 4 ? {} : T_identitystore.identitystore_getUsersUserPhoneNumber(ctx, depth + 1))]);
  out.preferredLanguage = "";
  out.profileUrl = h.endpoint(ctx, "profileUrl");
  out.timezone = "";
  out.title = "";
  out.userId = h.id(ctx, "userId");
  out.userName = "";
  out.userType = "";
  return out;
}

// aws:identitystore/getUsersUserAddress:getUsersUserAddress
export function identitystore_getUsersUserAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.country = "";
  out.formatted = "";
  out.locality = "";
  out.postalCode = "";
  out.primary = false;
  out.region = ctx.region;
  out.streetAddress = "";
  out.type = "";
  return out;
}

// aws:identitystore/getUsersUserEmail:getUsersUserEmail
export function identitystore_getUsersUserEmail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

// aws:identitystore/getUsersUserExternalId:getUsersUserExternalId
export function identitystore_getUsersUserExternalId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.issuer = "";
  return out;
}

// aws:identitystore/getUsersUserName:getUsersUserName
export function identitystore_getUsersUserName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.familyName = "";
  out.formatted = "";
  out.givenName = "";
  out.honorificPrefix = "";
  out.honorificSuffix = "";
  out.middleName = "";
  return out;
}

// aws:identitystore/getUsersUserPhoneNumber:getUsersUserPhoneNumber
export function identitystore_getUsersUserPhoneNumber(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.primary = false;
  out.type = "";
  out.value = "";
  return out;
}

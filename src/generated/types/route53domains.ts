// GENERATED FILE — do not edit.
// Service: route53domains   (17 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53domains from "./route53domains.js";

// aws:route53domains/DelegationSignerRecordSigningAttributes:DelegationSignerRecordSigningAttributes
export function route53domains_DelegationSignerRecordSigningAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.algorithm = 0;
  out.flags = 0;
  out.publicKey = "";
  return out;
}

// aws:route53domains/DelegationSignerRecordTimeouts:DelegationSignerRecordTimeouts
export function route53domains_DelegationSignerRecordTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:route53domains/DomainAdminContact:DomainAdminContact
export function route53domains_DomainAdminContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainAdminContactExtraParam(ctx, depth + 1))]);
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/DomainAdminContactExtraParam:DomainAdminContactExtraParam
export function route53domains_DomainAdminContactExtraParam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:route53domains/DomainBillingContact:DomainBillingContact
export function route53domains_DomainBillingContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainBillingContactExtraParam(ctx, depth + 1))]);
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/DomainBillingContactExtraParam:DomainBillingContactExtraParam
export function route53domains_DomainBillingContactExtraParam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:route53domains/DomainNameServer:DomainNameServer
export function route53domains_DomainNameServer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.glueIps = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  return out;
}

// aws:route53domains/DomainRegistrantContact:DomainRegistrantContact
export function route53domains_DomainRegistrantContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainRegistrantContactExtraParam(ctx, depth + 1))]);
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/DomainRegistrantContactExtraParam:DomainRegistrantContactExtraParam
export function route53domains_DomainRegistrantContactExtraParam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:route53domains/DomainTechContact:DomainTechContact
export function route53domains_DomainTechContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainTechContactExtraParam(ctx, depth + 1))]);
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/DomainTechContactExtraParam:DomainTechContactExtraParam
export function route53domains_DomainTechContactExtraParam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:route53domains/DomainTimeouts:DomainTimeouts
export function route53domains_DomainTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:route53domains/RegisteredDomainAdminContact:RegisteredDomainAdminContact
export function route53domains_RegisteredDomainAdminContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = {};
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/RegisteredDomainBillingContact:RegisteredDomainBillingContact
export function route53domains_RegisteredDomainBillingContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = {};
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/RegisteredDomainNameServer:RegisteredDomainNameServer
export function route53domains_RegisteredDomainNameServer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.glueIps = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  return out;
}

// aws:route53domains/RegisteredDomainRegistrantContact:RegisteredDomainRegistrantContact
export function route53domains_RegisteredDomainRegistrantContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = {};
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

// aws:route53domains/RegisteredDomainTechContact:RegisteredDomainTechContact
export function route53domains_RegisteredDomainTechContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.city = "";
  out.contactType = "";
  out.countryCode = "";
  out.email = "";
  out.extraParams = {};
  out.fax = "";
  out.firstName = "";
  out.lastName = "";
  out.organizationName = "";
  out.phoneNumber = "";
  out.state = "active";
  out.zipCode = "";
  return out;
}

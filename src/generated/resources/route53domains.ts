// GENERATED FILE — do not edit.
// Service: route53domains   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53domains from "../types/route53domains.js";

// aws:route53domains/delegationSignerRecord:DelegationSignerRecord
export function DelegationSignerRecord(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnssecKeyId = h.id(ctx, "dnssecKeyId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.signingAttributes = (i.signingAttributes !== undefined ? i.signingAttributes : (depth > 4 ? {} : T_route53domains.route53domains_DelegationSignerRecordSigningAttributes(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53domains.route53domains_DelegationSignerRecordTimeouts(ctx, depth + 1)));
  return out;
}

// aws:route53domains/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abuseContactEmail = "";
  out.abuseContactPhone = "";
  out.adminContact = (i.adminContact !== undefined ? i.adminContact : (depth > 4 ? {} : T_route53domains.route53domains_DomainAdminContact(ctx, depth + 1)));
  out.adminPrivacy = (i.adminPrivacy !== undefined ? i.adminPrivacy : false);
  out.autoRenew = (i.autoRenew !== undefined ? i.autoRenew : false);
  out.billingContacts = (i.billingContacts !== undefined ? i.billingContacts : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainBillingContact(ctx, depth + 1))]));
  out.billingPrivacy = (i.billingPrivacy !== undefined ? i.billingPrivacy : false);
  out.creationDate = h.timestamp();
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.durationInYears = (i.durationInYears !== undefined ? i.durationInYears : 0);
  out.expirationDate = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.nameServers = (i.nameServers !== undefined ? i.nameServers : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_DomainNameServer(ctx, depth + 1))]));
  out.registrantContact = (i.registrantContact !== undefined ? i.registrantContact : (depth > 4 ? {} : T_route53domains.route53domains_DomainRegistrantContact(ctx, depth + 1)));
  out.registrantPrivacy = (i.registrantPrivacy !== undefined ? i.registrantPrivacy : false);
  out.registrarName = "";
  out.registrarUrl = h.endpoint(ctx, "registrarUrl");
  out.statusLists = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.techContact = (i.techContact !== undefined ? i.techContact : (depth > 4 ? {} : T_route53domains.route53domains_DomainTechContact(ctx, depth + 1)));
  out.techPrivacy = (i.techPrivacy !== undefined ? i.techPrivacy : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53domains.route53domains_DomainTimeouts(ctx, depth + 1)));
  out.transferLock = (i.transferLock !== undefined ? i.transferLock : false);
  out.updatedDate = "";
  out.whoisServer = "";
  return out;
}

// aws:route53domains/registeredDomain:RegisteredDomain
export function RegisteredDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abuseContactEmail = "";
  out.abuseContactPhone = "";
  out.adminContact = (i.adminContact !== undefined ? i.adminContact : (depth > 4 ? {} : T_route53domains.route53domains_RegisteredDomainAdminContact(ctx, depth + 1)));
  out.adminPrivacy = (i.adminPrivacy !== undefined ? i.adminPrivacy : false);
  out.autoRenew = (i.autoRenew !== undefined ? i.autoRenew : false);
  out.billingContact = (i.billingContact !== undefined ? i.billingContact : (depth > 4 ? {} : T_route53domains.route53domains_RegisteredDomainBillingContact(ctx, depth + 1)));
  out.billingPrivacy = (i.billingPrivacy !== undefined ? i.billingPrivacy : false);
  out.creationDate = h.timestamp();
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.expirationDate = "";
  out.nameServers = (i.nameServers !== undefined ? i.nameServers : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53domains.route53domains_RegisteredDomainNameServer(ctx, depth + 1))]));
  out.registrantContact = (i.registrantContact !== undefined ? i.registrantContact : (depth > 4 ? {} : T_route53domains.route53domains_RegisteredDomainRegistrantContact(ctx, depth + 1)));
  out.registrantPrivacy = (i.registrantPrivacy !== undefined ? i.registrantPrivacy : false);
  out.registrarName = "";
  out.registrarUrl = h.endpoint(ctx, "registrarUrl");
  out.reseller = "";
  out.statusLists = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.techContact = (i.techContact !== undefined ? i.techContact : (depth > 4 ? {} : T_route53domains.route53domains_RegisteredDomainTechContact(ctx, depth + 1)));
  out.techPrivacy = (i.techPrivacy !== undefined ? i.techPrivacy : false);
  out.transferLock = (i.transferLock !== undefined ? i.transferLock : false);
  out.updatedDate = "";
  out.whoisServer = "";
  return out;
}

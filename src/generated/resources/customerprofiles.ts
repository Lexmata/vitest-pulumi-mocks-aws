// GENERATED FILE — do not edit.
// Service: customerprofiles   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_customerprofiles from "../types/customerprofiles.js";

// aws:customerprofiles/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deadLetterQueueUrl = (i.deadLetterQueueUrl !== undefined ? i.deadLetterQueueUrl : h.endpoint(ctx, "deadLetterQueueUrl"));
  out.defaultEncryptionKey = (i.defaultEncryptionKey !== undefined ? i.defaultEncryptionKey : "");
  out.defaultExpirationDays = (i.defaultExpirationDays !== undefined ? i.defaultExpirationDays : 0);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.matching = (i.matching !== undefined ? i.matching : (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatching(ctx, depth + 1)));
  out.ruleBasedMatching = (i.ruleBasedMatching !== undefined ? i.ruleBasedMatching : (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatching(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:customerprofiles/profile:Profile
export function Profile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountNumber = (i.accountNumber !== undefined ? i.accountNumber : "");
  out.additionalInformation = (i.additionalInformation !== undefined ? i.additionalInformation : "");
  out.address = (i.address !== undefined ? i.address : (depth > 4 ? {} : T_customerprofiles.customerprofiles_ProfileAddress(ctx, depth + 1)));
  out.attributes = (i.attributes !== undefined ? i.attributes : {});
  out.billingAddress = (i.billingAddress !== undefined ? i.billingAddress : (depth > 4 ? {} : T_customerprofiles.customerprofiles_ProfileBillingAddress(ctx, depth + 1)));
  out.birthDate = (i.birthDate !== undefined ? i.birthDate : "");
  out.businessEmailAddress = (i.businessEmailAddress !== undefined ? i.businessEmailAddress : "");
  out.businessName = (i.businessName !== undefined ? i.businessName : "");
  out.businessPhoneNumber = (i.businessPhoneNumber !== undefined ? i.businessPhoneNumber : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.emailAddress = (i.emailAddress !== undefined ? i.emailAddress : "");
  out.firstName = (i.firstName !== undefined ? i.firstName : "");
  out.genderString = (i.genderString !== undefined ? i.genderString : "");
  out.homePhoneNumber = (i.homePhoneNumber !== undefined ? i.homePhoneNumber : "");
  out.lastName = (i.lastName !== undefined ? i.lastName : "");
  out.mailingAddress = (i.mailingAddress !== undefined ? i.mailingAddress : (depth > 4 ? {} : T_customerprofiles.customerprofiles_ProfileMailingAddress(ctx, depth + 1)));
  out.middleName = (i.middleName !== undefined ? i.middleName : "");
  out.mobilePhoneNumber = (i.mobilePhoneNumber !== undefined ? i.mobilePhoneNumber : "");
  out.partyTypeString = (i.partyTypeString !== undefined ? i.partyTypeString : "");
  out.personalEmailAddress = (i.personalEmailAddress !== undefined ? i.personalEmailAddress : "");
  out.phoneNumber = (i.phoneNumber !== undefined ? i.phoneNumber : "");
  out.shippingAddress = (i.shippingAddress !== undefined ? i.shippingAddress : (depth > 4 ? {} : T_customerprofiles.customerprofiles_ProfileShippingAddress(ctx, depth + 1)));
  return out;
}

// GENERATED FILE — do not edit.
// Service: acm   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_acm from "../types/acm.js";

// aws:acm/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateAuthorityArn = (i.certificateAuthorityArn !== undefined ? i.certificateAuthorityArn : h.arn(ctx));
  out.certificateBody = (i.certificateBody !== undefined ? i.certificateBody : "");
  out.certificateChain = (i.certificateChain !== undefined ? i.certificateChain : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainValidationOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_acm.acm_CertificateDomainValidationOption(ctx, depth + 1))]);
  out.earlyRenewalDuration = (i.earlyRenewalDuration !== undefined ? i.earlyRenewalDuration : "");
  out.keyAlgorithm = (i.keyAlgorithm !== undefined ? i.keyAlgorithm : "");
  out.notAfter = "";
  out.notBefore = "";
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? {} : T_acm.acm_CertificateOptions(ctx, depth + 1)));
  out.pendingRenewal = false;
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.renewalEligibility = "";
  out.renewalSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_acm.acm_CertificateRenewalSummary(ctx, depth + 1))]);
  out.status = "active";
  out.subjectAlternativeNames = (i.subjectAlternativeNames !== undefined ? i.subjectAlternativeNames : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  out.validationEmails = (depth > 4 ? [] : [""]);
  out.validationMethod = (i.validationMethod !== undefined ? i.validationMethod : "");
  out.validationOptions = (i.validationOptions !== undefined ? i.validationOptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_acm.acm_CertificateValidationOption(ctx, depth + 1))]));
  return out;
}

// aws:acm/certificateValidation:CertificateValidation
export function CertificateValidation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.validationRecordFqdns = (i.validationRecordFqdns !== undefined ? i.validationRecordFqdns : (depth > 4 ? [] : [""]));
  return out;
}

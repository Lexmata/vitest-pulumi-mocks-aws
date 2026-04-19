// GENERATED FILE — do not edit.
// Service: acm   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_acm from "./acm.js";

// aws:acm/CertificateDomainValidationOption:CertificateDomainValidationOption
export function acm_CertificateDomainValidationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.resourceRecordName = "";
  out.resourceRecordType = "";
  out.resourceRecordValue = "";
  return out;
}

// aws:acm/CertificateOptions:CertificateOptions
export function acm_CertificateOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateTransparencyLoggingPreference = "";
  return out;
}

// aws:acm/CertificateRenewalSummary:CertificateRenewalSummary
export function acm_CertificateRenewalSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.renewalStatus = "";
  out.renewalStatusReason = "";
  out.updatedAt = "";
  return out;
}

// aws:acm/CertificateValidationOption:CertificateValidationOption
export function acm_CertificateValidationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.validationDomain = h.endpoint(ctx, "validationDomain");
  return out;
}

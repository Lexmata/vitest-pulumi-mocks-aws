// GENERATED FILE — do not edit.
// Service: acmpca   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_acmpca from "../types/acmpca.js";

// aws:acmpca/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiPassthrough = (i.apiPassthrough !== undefined ? i.apiPassthrough : "");
  out.arn = h.arn(ctx);
  out.certificate = "";
  out.certificateAuthorityArn = (i.certificateAuthorityArn !== undefined ? i.certificateAuthorityArn : h.arn(ctx));
  out.certificateChain = "";
  out.certificateSigningRequest = (i.certificateSigningRequest !== undefined ? i.certificateSigningRequest : "");
  out.signingAlgorithm = (i.signingAlgorithm !== undefined ? i.signingAlgorithm : "");
  out.templateArn = (i.templateArn !== undefined ? i.templateArn : h.arn(ctx));
  out.validity = (i.validity !== undefined ? i.validity : (depth > 4 ? {} : T_acmpca.acmpca_CertificateValidity(ctx, depth + 1)));
  return out;
}

// aws:acmpca/certificateAuthority:CertificateAuthority
export function CertificateAuthority(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificate = "";
  out.certificateAuthorityConfiguration = (i.certificateAuthorityConfiguration !== undefined ? i.certificateAuthorityConfiguration : (depth > 4 ? {} : T_acmpca.acmpca_CertificateAuthorityCertificateAuthorityConfiguration(ctx, depth + 1)));
  out.certificateChain = "";
  out.certificateSigningRequest = "";
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.keyStorageSecurityStandard = (i.keyStorageSecurityStandard !== undefined ? i.keyStorageSecurityStandard : "");
  out.notAfter = "";
  out.notBefore = "";
  out.permanentDeletionTimeInDays = (i.permanentDeletionTimeInDays !== undefined ? i.permanentDeletionTimeInDays : 0);
  out.revocationConfiguration = (i.revocationConfiguration !== undefined ? i.revocationConfiguration : (depth > 4 ? {} : T_acmpca.acmpca_CertificateAuthorityRevocationConfiguration(ctx, depth + 1)));
  out.serial = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.usageMode = (i.usageMode !== undefined ? i.usageMode : "");
  return out;
}

// aws:acmpca/certificateAuthorityCertificate:CertificateAuthorityCertificate
export function CertificateAuthorityCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.certificateAuthorityArn = (i.certificateAuthorityArn !== undefined ? i.certificateAuthorityArn : h.arn(ctx));
  out.certificateChain = (i.certificateChain !== undefined ? i.certificateChain : "");
  return out;
}

// aws:acmpca/permission:Permission
export function Permission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [""]));
  out.certificateAuthorityArn = (i.certificateAuthorityArn !== undefined ? i.certificateAuthorityArn : h.arn(ctx));
  out.policy = "";
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.sourceAccount = (i.sourceAccount !== undefined ? i.sourceAccount : "");
  return out;
}

// aws:acmpca/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

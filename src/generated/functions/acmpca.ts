// GENERATED FILE — do not edit.
// Service: acmpca   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_acmpca from "../types/acmpca.js";

// aws:acmpca/getCertificate:getCertificate
export function getCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.certificate = "";
  out.certificateAuthorityArn = (i.certificateAuthorityArn !== undefined ? i.certificateAuthorityArn : h.arn(ctx));
  out.certificateChain = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:acmpca/getCertificateAuthority:getCertificateAuthority
export function getCertificateAuthority(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.certificate = "";
  out.certificateChain = "";
  out.certificateSigningRequest = "";
  out.id = h.id(ctx, "id");
  out.keyStorageSecurityStandard = "";
  out.notAfter = "";
  out.notBefore = "";
  out.revocationConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_acmpca.acmpca_getCertificateAuthorityRevocationConfiguration(ctx, depth + 1))]);
  out.serial = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.usageMode = "";
  return out;
}

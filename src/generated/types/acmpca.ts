// GENERATED FILE — do not edit.
// Service: acmpca   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_acmpca from "./acmpca.js";

// aws:acmpca/CertificateAuthorityCertificateAuthorityConfiguration:CertificateAuthorityCertificateAuthorityConfiguration
export function acmpca_CertificateAuthorityCertificateAuthorityConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyAlgorithm = "";
  out.signingAlgorithm = "";
  out.subject = (depth > 4 ? {} : T_acmpca.acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject(ctx, depth + 1));
  return out;
}

// aws:acmpca/CertificateAuthorityCertificateAuthorityConfigurationSubject:CertificateAuthorityCertificateAuthorityConfigurationSubject
export function acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commonName = "";
  out.country = "";
  out.distinguishedNameQualifier = "";
  out.generationQualifier = "";
  out.givenName = "";
  out.initials = "";
  out.locality = "";
  out.organization = "";
  out.organizationalUnit = "";
  out.pseudonym = "";
  out.state = "active";
  out.surname = "";
  out.title = "";
  return out;
}

// aws:acmpca/CertificateAuthorityRevocationConfiguration:CertificateAuthorityRevocationConfiguration
export function acmpca_CertificateAuthorityRevocationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crlConfiguration = (depth > 4 ? {} : T_acmpca.acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration(ctx, depth + 1));
  out.ocspConfiguration = (depth > 4 ? {} : T_acmpca.acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration(ctx, depth + 1));
  return out;
}

// aws:acmpca/CertificateAuthorityRevocationConfigurationCrlConfiguration:CertificateAuthorityRevocationConfigurationCrlConfiguration
export function acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customCname = "";
  out.enabled = true;
  out.expirationInDays = 0;
  out.s3BucketName = "";
  out.s3ObjectAcl = "";
  return out;
}

// aws:acmpca/CertificateAuthorityRevocationConfigurationOcspConfiguration:CertificateAuthorityRevocationConfigurationOcspConfiguration
export function acmpca_CertificateAuthorityRevocationConfigurationOcspConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.ocspCustomCname = "";
  return out;
}

// aws:acmpca/CertificateValidity:CertificateValidity
export function acmpca_CertificateValidity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:acmpca/getCertificateAuthorityRevocationConfiguration:getCertificateAuthorityRevocationConfiguration
export function acmpca_getCertificateAuthorityRevocationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crlConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_acmpca.acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration(ctx, depth + 1))]);
  out.ocspConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_acmpca.acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:acmpca/getCertificateAuthorityRevocationConfigurationCrlConfiguration:getCertificateAuthorityRevocationConfigurationCrlConfiguration
export function acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customCname = "";
  out.enabled = true;
  out.expirationInDays = 0;
  out.s3BucketName = "";
  out.s3ObjectAcl = "";
  return out;
}

// aws:acmpca/getCertificateAuthorityRevocationConfigurationOcspConfiguration:getCertificateAuthorityRevocationConfigurationOcspConfiguration
export function acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.ocspCustomCname = "";
  return out;
}

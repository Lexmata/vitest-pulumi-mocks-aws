// GENERATED FILE — do not edit.
// Service: signer   (17 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_signer from "./signer.js";

// aws:signer/SigningJobDestination:SigningJobDestination
export function signer_SigningJobDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3 = (depth > 4 ? {} : T_signer.signer_SigningJobDestinationS3(ctx, depth + 1));
  return out;
}

// aws:signer/SigningJobDestinationS3:SigningJobDestinationS3
export function signer_SigningJobDestinationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.prefix = "";
  return out;
}

// aws:signer/SigningJobRevocationRecord:SigningJobRevocationRecord
export function signer_SigningJobRevocationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.reason = "";
  out.revokedAt = "";
  out.revokedBy = "";
  return out;
}

// aws:signer/SigningJobSignedObject:SigningJobSignedObject
export function signer_SigningJobSignedObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3s = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_SigningJobSignedObjectS3(ctx, depth + 1))]);
  return out;
}

// aws:signer/SigningJobSignedObjectS3:SigningJobSignedObjectS3
export function signer_SigningJobSignedObjectS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:signer/SigningJobSource:SigningJobSource
export function signer_SigningJobSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3 = (depth > 4 ? {} : T_signer.signer_SigningJobSourceS3(ctx, depth + 1));
  return out;
}

// aws:signer/SigningJobSourceS3:SigningJobSourceS3
export function signer_SigningJobSourceS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  out.version = "1";
  return out;
}

// aws:signer/SigningProfileRevocationRecord:SigningProfileRevocationRecord
export function signer_SigningProfileRevocationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.revocationEffectiveFrom = "";
  out.revokedAt = "";
  out.revokedBy = "";
  return out;
}

// aws:signer/SigningProfileSignatureValidityPeriod:SigningProfileSignatureValidityPeriod
export function signer_SigningProfileSignatureValidityPeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:signer/SigningProfileSigningMaterial:SigningProfileSigningMaterial
export function signer_SigningProfileSigningMaterial(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  return out;
}

// aws:signer/getSigningJobRevocationRecord:getSigningJobRevocationRecord
export function signer_getSigningJobRevocationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.reason = "";
  out.revokedAt = "";
  out.revokedBy = "";
  return out;
}

// aws:signer/getSigningJobSignedObject:getSigningJobSignedObject
export function signer_getSigningJobSignedObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3s = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningJobSignedObjectS3(ctx, depth + 1))]);
  return out;
}

// aws:signer/getSigningJobSignedObjectS3:getSigningJobSignedObjectS3
export function signer_getSigningJobSignedObjectS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:signer/getSigningJobSource:getSigningJobSource
export function signer_getSigningJobSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3s = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningJobSourceS3(ctx, depth + 1))]);
  return out;
}

// aws:signer/getSigningJobSourceS3:getSigningJobSourceS3
export function signer_getSigningJobSourceS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  out.version = "1";
  return out;
}

// aws:signer/getSigningProfileRevocationRecord:getSigningProfileRevocationRecord
export function signer_getSigningProfileRevocationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.revocationEffectiveFrom = "";
  out.revokedAt = "";
  out.revokedBy = "";
  return out;
}

// aws:signer/getSigningProfileSignatureValidityPeriod:getSigningProfileSignatureValidityPeriod
export function signer_getSigningProfileSignatureValidityPeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

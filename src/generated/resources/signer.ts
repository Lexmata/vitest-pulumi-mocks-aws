// GENERATED FILE — do not edit.
// Service: signer   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_signer from "../types/signer.js";

// aws:signer/signingJob:SigningJob
export function SigningJob(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completedAt = "";
  out.createdAt = h.timestamp();
  out.destination = (i.destination !== undefined ? i.destination : (depth > 4 ? {} : T_signer.signer_SigningJobDestination(ctx, depth + 1)));
  out.ignoreSigningJobFailure = (i.ignoreSigningJobFailure !== undefined ? i.ignoreSigningJobFailure : false);
  out.jobId = h.id(ctx, "jobId");
  out.jobInvoker = "";
  out.jobOwner = "";
  out.platformDisplayName = "";
  out.platformId = h.id(ctx, "platformId");
  out.profileName = (i.profileName !== undefined ? i.profileName : "");
  out.profileVersion = "";
  out.requestedBy = "";
  out.revocationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_SigningJobRevocationRecord(ctx, depth + 1))]);
  out.signatureExpiresAt = "";
  out.signedObjects = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_SigningJobSignedObject(ctx, depth + 1))]);
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_signer.signer_SigningJobSource(ctx, depth + 1)));
  out.status = "active";
  out.statusReason = "";
  return out;
}

// aws:signer/signingProfile:SigningProfile
export function SigningProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.platformDisplayName = "";
  out.platformId = (i.platformId !== undefined ? i.platformId : h.id(ctx, "platformId"));
  out.revocationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_SigningProfileRevocationRecord(ctx, depth + 1))]);
  out.signatureValidityPeriod = (i.signatureValidityPeriod !== undefined ? i.signatureValidityPeriod : (depth > 4 ? {} : T_signer.signer_SigningProfileSignatureValidityPeriod(ctx, depth + 1)));
  out.signingMaterial = (i.signingMaterial !== undefined ? i.signingMaterial : (depth > 4 ? {} : T_signer.signer_SigningProfileSigningMaterial(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = "1";
  out.versionArn = h.arn(ctx);
  return out;
}

// aws:signer/signingProfilePermission:SigningProfilePermission
export function SigningProfilePermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.profileName = (i.profileName !== undefined ? i.profileName : "");
  out.profileVersion = (i.profileVersion !== undefined ? i.profileVersion : "");
  out.statementId = (i.statementId !== undefined ? i.statementId : h.id(ctx, "statementId"));
  out.statementIdPrefix = (i.statementIdPrefix !== undefined ? i.statementIdPrefix : "");
  return out;
}

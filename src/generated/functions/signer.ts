// GENERATED FILE — do not edit.
// Service: signer   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_signer from "../types/signer.js";

// aws:signer/getSigningJob:getSigningJob
export function getSigningJob(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completedAt = "";
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.jobId = (i.jobId !== undefined ? i.jobId : h.id(ctx, "jobId"));
  out.jobInvoker = "";
  out.jobOwner = "";
  out.platformDisplayName = "";
  out.platformId = h.id(ctx, "platformId");
  out.profileName = "";
  out.profileVersion = "";
  out.requestedBy = "";
  out.revocationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningJobRevocationRecord(ctx, depth + 1))]);
  out.signatureExpiresAt = "";
  out.signedObjects = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningJobSignedObject(ctx, depth + 1))]);
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningJobSource(ctx, depth + 1))]);
  out.status = "active";
  out.statusReason = "";
  return out;
}

// aws:signer/getSigningProfile:getSigningProfile
export function getSigningProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.platformDisplayName = "";
  out.platformId = h.id(ctx, "platformId");
  out.revocationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningProfileRevocationRecord(ctx, depth + 1))]);
  out.signatureValidityPeriods = (depth > 4 ? [] : [(depth > 4 ? {} : T_signer.signer_getSigningProfileSignatureValidityPeriod(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = "1";
  out.versionArn = h.arn(ctx);
  return out;
}

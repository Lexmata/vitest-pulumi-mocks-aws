// GENERATED FILE — do not edit.
// Service: codegurureviewer   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codegurureviewer from "./codegurureviewer.js";

// aws:codegurureviewer/RepositoryAssociationKmsKeyDetails:RepositoryAssociationKmsKeyDetails
export function codegurureviewer_RepositoryAssociationKmsKeyDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionOption = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:codegurureviewer/RepositoryAssociationRepository:RepositoryAssociationRepository
export function codegurureviewer_RepositoryAssociationRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitbucket = (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationRepositoryBitbucket(ctx, depth + 1));
  out.codecommit = (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationRepositoryCodecommit(ctx, depth + 1));
  out.githubEnterpriseServer = (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer(ctx, depth + 1));
  out.s3Bucket = (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationRepositoryS3Bucket(ctx, depth + 1));
  return out;
}

// aws:codegurureviewer/RepositoryAssociationRepositoryBitbucket:RepositoryAssociationRepositoryBitbucket
export function codegurureviewer_RepositoryAssociationRepositoryBitbucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionArn = h.arn(ctx);
  out.name = ctx.name;
  out.owner = ctx.accountId;
  return out;
}

// aws:codegurureviewer/RepositoryAssociationRepositoryCodecommit:RepositoryAssociationRepositoryCodecommit
export function codegurureviewer_RepositoryAssociationRepositoryCodecommit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:codegurureviewer/RepositoryAssociationRepositoryGithubEnterpriseServer:RepositoryAssociationRepositoryGithubEnterpriseServer
export function codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionArn = h.arn(ctx);
  out.name = ctx.name;
  out.owner = ctx.accountId;
  return out;
}

// aws:codegurureviewer/RepositoryAssociationRepositoryS3Bucket:RepositoryAssociationRepositoryS3Bucket
export function codegurureviewer_RepositoryAssociationRepositoryS3Bucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.name = ctx.name;
  return out;
}

// aws:codegurureviewer/RepositoryAssociationS3RepositoryDetail:RepositoryAssociationS3RepositoryDetail
export function codegurureviewer_RepositoryAssociationS3RepositoryDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.codeArtifacts = (depth > 4 ? [] : [(depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact(ctx, depth + 1))]);
  return out;
}

// aws:codegurureviewer/RepositoryAssociationS3RepositoryDetailCodeArtifact:RepositoryAssociationS3RepositoryDetailCodeArtifact
export function codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buildArtifactsObjectKey = "";
  out.sourceCodeArtifactsObjectKey = "";
  return out;
}

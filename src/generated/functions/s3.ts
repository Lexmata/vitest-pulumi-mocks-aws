// GENERATED FILE — do not edit.
// Service: s3   (9 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:s3/getAccountPublicAccessBlock:getAccountPublicAccessBlock
export function getAccountPublicAccessBlock(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.blockPublicAcls = false;
  out.blockPublicPolicy = false;
  out.id = h.id(ctx, "id");
  out.ignorePublicAcls = false;
  out.restrictPublicBuckets = false;
  return out;
}

// aws:s3/getBucket:getBucket
export function getBucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketDomainName = h.endpoint(ctx, "bucketDomainName");
  out.bucketRegionalDomainName = h.endpoint(ctx, "bucketRegionalDomainName");
  out.hostedZoneId = "Z0000000000000000000";
  out.id = h.id(ctx, "id");
  out.region = ctx.region;
  out.websiteDomain = h.endpoint(ctx, "websiteDomain");
  out.websiteEndpoint = h.endpoint(ctx, "websiteEndpoint");
  return out;
}

// aws:s3/getBucketObject:getBucketObject
export function getBucketObject(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.body = "";
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketKeyEnabled = false;
  out.cacheControl = "";
  out.contentDisposition = "";
  out.contentEncoding = "";
  out.contentLanguage = "";
  out.contentLength = 0;
  out.contentType = "";
  out.etag = "";
  out.expiration = "";
  out.expires = "";
  out.id = h.id(ctx, "id");
  out.key = (i.key !== undefined ? i.key : "");
  out.lastModified = h.timestamp();
  out.metadata = {};
  out.objectLockLegalHoldStatus = "";
  out.objectLockMode = "";
  out.objectLockRetainUntilDate = "";
  out.range = (i.range !== undefined ? i.range : "");
  out.serverSideEncryption = "";
  out.sseKmsKeyId = h.id(ctx, "sseKmsKeyId");
  out.storageClass = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.versionId = (i.versionId !== undefined ? i.versionId : h.id(ctx, "versionId"));
  out.websiteRedirectLocation = "";
  return out;
}

// aws:s3/getBucketObjects:getBucketObjects
export function getBucketObjects(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.commonPrefixes = (depth > 4 ? [] : [""]);
  out.delimiter = (i.delimiter !== undefined ? i.delimiter : "");
  out.encodingType = (i.encodingType !== undefined ? i.encodingType : "");
  out.fetchOwner = (i.fetchOwner !== undefined ? i.fetchOwner : false);
  out.id = h.id(ctx, "id");
  out.keys = (depth > 4 ? [] : [""]);
  out.maxKeys = (i.maxKeys !== undefined ? i.maxKeys : 0);
  out.owners = (depth > 4 ? [] : [""]);
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.startAfter = (i.startAfter !== undefined ? i.startAfter : "");
  return out;
}

// aws:s3/getBucketPolicy:getBucketPolicy
export function getBucketPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.id = h.id(ctx, "id");
  out.policy = "";
  return out;
}

// aws:s3/getCanonicalUserId:getCanonicalUserId
export function getCanonicalUserId(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayName = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:s3/getDirectoryBuckets:getDirectoryBuckets
export function getDirectoryBuckets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.buckets = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:s3/getObject:getObject
export function getObject(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.body = "";
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketKeyEnabled = false;
  out.cacheControl = "";
  out.checksumCrc32 = "";
  out.checksumCrc32c = "";
  out.checksumCrc64nvme = "";
  out.checksumMode = (i.checksumMode !== undefined ? i.checksumMode : "");
  out.checksumSha1 = "";
  out.checksumSha256 = "";
  out.contentDisposition = "";
  out.contentEncoding = "";
  out.contentLanguage = "";
  out.contentLength = 0;
  out.contentType = "";
  out.etag = "";
  out.expiration = "";
  out.expires = "";
  out.id = h.id(ctx, "id");
  out.key = (i.key !== undefined ? i.key : "");
  out.lastModified = h.timestamp();
  out.metadata = {};
  out.objectLockLegalHoldStatus = "";
  out.objectLockMode = "";
  out.objectLockRetainUntilDate = "";
  out.range = (i.range !== undefined ? i.range : "");
  out.serverSideEncryption = "";
  out.sseKmsKeyId = h.id(ctx, "sseKmsKeyId");
  out.storageClass = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.versionId = (i.versionId !== undefined ? i.versionId : h.id(ctx, "versionId"));
  out.websiteRedirectLocation = "";
  return out;
}

// aws:s3/getObjects:getObjects
export function getObjects(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.commonPrefixes = (depth > 4 ? [] : [""]);
  out.delimiter = (i.delimiter !== undefined ? i.delimiter : "");
  out.encodingType = (i.encodingType !== undefined ? i.encodingType : "");
  out.fetchOwner = (i.fetchOwner !== undefined ? i.fetchOwner : false);
  out.id = h.id(ctx, "id");
  out.keys = (depth > 4 ? [] : [""]);
  out.maxKeys = (i.maxKeys !== undefined ? i.maxKeys : 0);
  out.owners = (depth > 4 ? [] : [""]);
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.requestCharged = "";
  out.requestPayer = (i.requestPayer !== undefined ? i.requestPayer : "");
  out.startAfter = (i.startAfter !== undefined ? i.startAfter : "");
  return out;
}

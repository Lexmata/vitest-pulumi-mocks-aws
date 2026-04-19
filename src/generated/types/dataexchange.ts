// GENERATED FILE — do not edit.
// Service: dataexchange   (14 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dataexchange from "./dataexchange.js";

// aws:dataexchange/EventActionAction:EventActionAction
export function dataexchange_EventActionAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exportRevisionToS3 = (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionActionExportRevisionToS3(ctx, depth + 1));
  return out;
}

// aws:dataexchange/EventActionActionExportRevisionToS3:EventActionActionExportRevisionToS3
export function dataexchange_EventActionActionExportRevisionToS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryption = (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionActionExportRevisionToS3Encryption(ctx, depth + 1));
  out.revisionDestination = (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionActionExportRevisionToS3RevisionDestination(ctx, depth + 1));
  return out;
}

// aws:dataexchange/EventActionActionExportRevisionToS3Encryption:EventActionActionExportRevisionToS3Encryption
export function dataexchange_EventActionActionExportRevisionToS3Encryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:dataexchange/EventActionActionExportRevisionToS3RevisionDestination:EventActionActionExportRevisionToS3RevisionDestination
export function dataexchange_EventActionActionExportRevisionToS3RevisionDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.keyPattern = "";
  return out;
}

// aws:dataexchange/EventActionEvent:EventActionEvent
export function dataexchange_EventActionEvent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.revisionPublished = (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionEventRevisionPublished(ctx, depth + 1));
  return out;
}

// aws:dataexchange/EventActionEventRevisionPublished:EventActionEventRevisionPublished
export function dataexchange_EventActionEventRevisionPublished(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetId = h.id(ctx, "dataSetId");
  return out;
}

// aws:dataexchange/RevisionAssetsAsset:RevisionAssetsAsset
export function dataexchange_RevisionAssetsAsset(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createS3DataAccessFromS3Bucket = (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3Bucket(ctx, depth + 1));
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.importAssetsFromS3 = (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetImportAssetsFromS3(ctx, depth + 1));
  out.importAssetsFromSignedUrl = (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetImportAssetsFromSignedUrl(ctx, depth + 1));
  out.name = ctx.name;
  out.updatedAt = "";
  return out;
}

// aws:dataexchange/RevisionAssetsAssetCreateS3DataAccessFromS3Bucket:RevisionAssetsAssetCreateS3DataAccessFromS3Bucket
export function dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3Bucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointAlias = "";
  out.accessPointArn = h.arn(ctx);
  out.assetSource = (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource(ctx, depth + 1));
  return out;
}

// aws:dataexchange/RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource:RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource
export function dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.keyPrefixes = (depth > 4 ? [] : [""]);
  out.keys = (depth > 4 ? [] : [""]);
  out.kmsKeysToGrants = (depth > 4 ? [] : [(depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant(ctx, depth + 1))]);
  return out;
}

// aws:dataexchange/RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant:RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant
export function dataexchange_RevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:dataexchange/RevisionAssetsAssetImportAssetsFromS3:RevisionAssetsAssetImportAssetsFromS3
export function dataexchange_RevisionAssetsAssetImportAssetsFromS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assetSource = (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAssetImportAssetsFromS3AssetSource(ctx, depth + 1));
  return out;
}

// aws:dataexchange/RevisionAssetsAssetImportAssetsFromS3AssetSource:RevisionAssetsAssetImportAssetsFromS3AssetSource
export function dataexchange_RevisionAssetsAssetImportAssetsFromS3AssetSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:dataexchange/RevisionAssetsAssetImportAssetsFromSignedUrl:RevisionAssetsAssetImportAssetsFromSignedUrl
export function dataexchange_RevisionAssetsAssetImportAssetsFromSignedUrl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filename = "";
  return out;
}

// aws:dataexchange/RevisionAssetsTimeouts:RevisionAssetsTimeouts
export function dataexchange_RevisionAssetsTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

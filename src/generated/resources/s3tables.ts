// GENERATED FILE — do not edit.
// Service: s3tables   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3tables from "../types/s3tables.js";

// aws:s3tables/namespace:Namespace
export function Namespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.tableBucketArn = (i.tableBucketArn !== undefined ? i.tableBucketArn : h.arn(ctx));
  return out;
}

// aws:s3tables/table:Table
export function Table(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.createdBy = "";
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_s3tables.s3tables_TableEncryptionConfiguration(ctx, depth + 1)));
  out.format = (i.format !== undefined ? i.format : "");
  out.maintenanceConfiguration = (i.maintenanceConfiguration !== undefined ? i.maintenanceConfiguration : (depth > 4 ? {} : T_s3tables.s3tables_TableMaintenanceConfiguration(ctx, depth + 1)));
  out.metadataLocation = "";
  out.modifiedAt = h.timestamp();
  out.modifiedBy = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.tableBucketArn = (i.tableBucketArn !== undefined ? i.tableBucketArn : h.arn(ctx));
  out.type = "";
  out.versionToken = "";
  out.warehouseLocation = "";
  return out;
}

// aws:s3tables/tableBucket:TableBucket
export function TableBucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_s3tables.s3tables_TableBucketEncryptionConfiguration(ctx, depth + 1)));
  out.maintenanceConfiguration = (i.maintenanceConfiguration !== undefined ? i.maintenanceConfiguration : (depth > 4 ? {} : T_s3tables.s3tables_TableBucketMaintenanceConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  return out;
}

// aws:s3tables/tableBucketPolicy:TableBucketPolicy
export function TableBucketPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourcePolicy = (i.resourcePolicy !== undefined ? i.resourcePolicy : "");
  out.tableBucketArn = (i.tableBucketArn !== undefined ? i.tableBucketArn : h.arn(ctx));
  return out;
}

// aws:s3tables/tablePolicy:TablePolicy
export function TablePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.resourcePolicy = (i.resourcePolicy !== undefined ? i.resourcePolicy : "");
  out.tableBucketArn = (i.tableBucketArn !== undefined ? i.tableBucketArn : h.arn(ctx));
  return out;
}

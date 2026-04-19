// GENERATED FILE — do not edit.
// Service: s3tables   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3tables from "./s3tables.js";

// aws:s3tables/TableBucketEncryptionConfiguration:TableBucketEncryptionConfiguration
export function s3tables_TableBucketEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.sseAlgorithm = "";
  return out;
}

// aws:s3tables/TableBucketMaintenanceConfiguration:TableBucketMaintenanceConfiguration
export function s3tables_TableBucketMaintenanceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.icebergUnreferencedFileRemoval = (depth > 4 ? {} : T_s3tables.s3tables_TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval(ctx, depth + 1));
  return out;
}

// aws:s3tables/TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval:TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval
export function s3tables_TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.settings = (depth > 4 ? {} : T_s3tables.s3tables_TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3tables/TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings:TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings
export function s3tables_TableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nonCurrentDays = 0;
  out.unreferencedDays = 0;
  return out;
}

// aws:s3tables/TableEncryptionConfiguration:TableEncryptionConfiguration
export function s3tables_TableEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.sseAlgorithm = "";
  return out;
}

// aws:s3tables/TableMaintenanceConfiguration:TableMaintenanceConfiguration
export function s3tables_TableMaintenanceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.icebergCompaction = (depth > 4 ? {} : T_s3tables.s3tables_TableMaintenanceConfigurationIcebergCompaction(ctx, depth + 1));
  out.icebergSnapshotManagement = (depth > 4 ? {} : T_s3tables.s3tables_TableMaintenanceConfigurationIcebergSnapshotManagement(ctx, depth + 1));
  return out;
}

// aws:s3tables/TableMaintenanceConfigurationIcebergCompaction:TableMaintenanceConfigurationIcebergCompaction
export function s3tables_TableMaintenanceConfigurationIcebergCompaction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.settings = (depth > 4 ? {} : T_s3tables.s3tables_TableMaintenanceConfigurationIcebergCompactionSettings(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3tables/TableMaintenanceConfigurationIcebergCompactionSettings:TableMaintenanceConfigurationIcebergCompactionSettings
export function s3tables_TableMaintenanceConfigurationIcebergCompactionSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetFileSizeMb = 8;
  return out;
}

// aws:s3tables/TableMaintenanceConfigurationIcebergSnapshotManagement:TableMaintenanceConfigurationIcebergSnapshotManagement
export function s3tables_TableMaintenanceConfigurationIcebergSnapshotManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.settings = (depth > 4 ? {} : T_s3tables.s3tables_TableMaintenanceConfigurationIcebergSnapshotManagementSettings(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3tables/TableMaintenanceConfigurationIcebergSnapshotManagementSettings:TableMaintenanceConfigurationIcebergSnapshotManagementSettings
export function s3tables_TableMaintenanceConfigurationIcebergSnapshotManagementSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxSnapshotAgeHours = 0;
  out.minSnapshotsToKeep = 0;
  return out;
}

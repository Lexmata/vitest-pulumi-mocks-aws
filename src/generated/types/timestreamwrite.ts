// GENERATED FILE — do not edit.
// Service: timestreamwrite   (12 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreamwrite from "./timestreamwrite.js";

// aws:timestreamwrite/TableMagneticStoreWriteProperties:TableMagneticStoreWriteProperties
export function timestreamwrite_TableMagneticStoreWriteProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableMagneticStoreWrites = true;
  out.magneticStoreRejectedDataLocation = (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation(ctx, depth + 1));
  return out;
}

// aws:timestreamwrite/TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation:TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation
export function timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configuration = (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration(ctx, depth + 1));
  return out;
}

// aws:timestreamwrite/TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration:TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration
export function timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.encryptionOption = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.objectKeyPrefix = "";
  return out;
}

// aws:timestreamwrite/TableRetentionProperties:TableRetentionProperties
export function timestreamwrite_TableRetentionProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.magneticStoreRetentionPeriodInDays = 0;
  out.memoryStoreRetentionPeriodInHours = 0;
  return out;
}

// aws:timestreamwrite/TableSchema:TableSchema
export function timestreamwrite_TableSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compositePartitionKey = (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableSchemaCompositePartitionKey(ctx, depth + 1));
  return out;
}

// aws:timestreamwrite/TableSchemaCompositePartitionKey:TableSchemaCompositePartitionKey
export function timestreamwrite_TableSchemaCompositePartitionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enforcementInRecord = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:timestreamwrite/getTableMagneticStoreWriteProperty:getTableMagneticStoreWriteProperty
export function timestreamwrite_getTableMagneticStoreWriteProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableMagneticStoreWrites = true;
  out.magneticStoreRejectedDataLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation(ctx, depth + 1))]);
  return out;
}

// aws:timestreamwrite/getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation:getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation
export function timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration(ctx, depth + 1))]);
  return out;
}

// aws:timestreamwrite/getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration:getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration
export function timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.encryptionOption = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.objectKeyPrefix = "";
  return out;
}

// aws:timestreamwrite/getTableRetentionProperty:getTableRetentionProperty
export function timestreamwrite_getTableRetentionProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.magneticStoreRetentionPeriodInDays = 0;
  out.memoryStoreRetentionPeriodInHours = 0;
  return out;
}

// aws:timestreamwrite/getTableSchema:getTableSchema
export function timestreamwrite_getTableSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compositePartitionKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableSchemaCompositePartitionKey(ctx, depth + 1))]);
  return out;
}

// aws:timestreamwrite/getTableSchemaCompositePartitionKey:getTableSchemaCompositePartitionKey
export function timestreamwrite_getTableSchemaCompositePartitionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enforcementInRecord = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: dynamodb   (24 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dynamodb from "./dynamodb.js";

// aws:dynamodb/GlobalTableReplica:GlobalTableReplica
export function dynamodb_GlobalTableReplica(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionName = "";
  return out;
}

// aws:dynamodb/TableAttribute:TableAttribute
export function dynamodb_TableAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:dynamodb/TableExportIncrementalExportSpecification:TableExportIncrementalExportSpecification
export function dynamodb_TableExportIncrementalExportSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exportFromTime = "";
  out.exportToTime = "";
  out.exportViewType = "";
  return out;
}

// aws:dynamodb/TableGlobalSecondaryIndex:TableGlobalSecondaryIndex
export function dynamodb_TableGlobalSecondaryIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hashKey = "";
  out.name = ctx.name;
  out.nonKeyAttributes = (depth > 4 ? [] : [""]);
  out.onDemandThroughput = (depth > 4 ? {} : T_dynamodb.dynamodb_TableGlobalSecondaryIndexOnDemandThroughput(ctx, depth + 1));
  out.projectionType = "";
  out.rangeKey = "";
  out.readCapacity = 0;
  out.writeCapacity = 0;
  return out;
}

// aws:dynamodb/TableGlobalSecondaryIndexOnDemandThroughput:TableGlobalSecondaryIndexOnDemandThroughput
export function dynamodb_TableGlobalSecondaryIndexOnDemandThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxReadRequestUnits = 0;
  out.maxWriteRequestUnits = 0;
  return out;
}

// aws:dynamodb/TableImportTable:TableImportTable
export function dynamodb_TableImportTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputCompressionType = "";
  out.inputFormat = "";
  out.inputFormatOptions = (depth > 4 ? {} : T_dynamodb.dynamodb_TableImportTableInputFormatOptions(ctx, depth + 1));
  out.s3BucketSource = (depth > 4 ? {} : T_dynamodb.dynamodb_TableImportTableS3BucketSource(ctx, depth + 1));
  return out;
}

// aws:dynamodb/TableImportTableInputFormatOptions:TableImportTableInputFormatOptions
export function dynamodb_TableImportTableInputFormatOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csv = (depth > 4 ? {} : T_dynamodb.dynamodb_TableImportTableInputFormatOptionsCsv(ctx, depth + 1));
  return out;
}

// aws:dynamodb/TableImportTableInputFormatOptionsCsv:TableImportTableInputFormatOptionsCsv
export function dynamodb_TableImportTableInputFormatOptionsCsv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.delimiter = "";
  out.headerLists = (depth > 4 ? [] : [""]);
  return out;
}

// aws:dynamodb/TableImportTableS3BucketSource:TableImportTableS3BucketSource
export function dynamodb_TableImportTableS3BucketSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.bucketOwner = "";
  out.keyPrefix = "";
  return out;
}

// aws:dynamodb/TableLocalSecondaryIndex:TableLocalSecondaryIndex
export function dynamodb_TableLocalSecondaryIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.nonKeyAttributes = (depth > 4 ? [] : [""]);
  out.projectionType = "";
  out.rangeKey = "";
  return out;
}

// aws:dynamodb/TableOnDemandThroughput:TableOnDemandThroughput
export function dynamodb_TableOnDemandThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxReadRequestUnits = 0;
  out.maxWriteRequestUnits = 0;
  return out;
}

// aws:dynamodb/TablePointInTimeRecovery:TablePointInTimeRecovery
export function dynamodb_TablePointInTimeRecovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.recoveryPeriodInDays = 0;
  return out;
}

// aws:dynamodb/TableReplica:TableReplica
export function dynamodb_TableReplica(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.kmsKeyArn = h.arn(ctx);
  out.pointInTimeRecovery = false;
  out.propagateTags = false;
  out.regionName = "";
  out.streamArn = h.arn(ctx);
  out.streamLabel = "";
  return out;
}

// aws:dynamodb/TableServerSideEncryption:TableServerSideEncryption
export function dynamodb_TableServerSideEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:dynamodb/TableTtl:TableTtl
export function dynamodb_TableTtl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeName = "";
  out.enabled = true;
  return out;
}

// aws:dynamodb/getTableAttribute:getTableAttribute
export function dynamodb_getTableAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:dynamodb/getTableGlobalSecondaryIndex:getTableGlobalSecondaryIndex
export function dynamodb_getTableGlobalSecondaryIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hashKey = "";
  out.name = ctx.name;
  out.nonKeyAttributes = (depth > 4 ? [] : [""]);
  out.onDemandThroughputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableGlobalSecondaryIndexOnDemandThroughput(ctx, depth + 1))]);
  out.projectionType = "";
  out.rangeKey = "";
  out.readCapacity = 0;
  out.writeCapacity = 0;
  return out;
}

// aws:dynamodb/getTableGlobalSecondaryIndexOnDemandThroughput:getTableGlobalSecondaryIndexOnDemandThroughput
export function dynamodb_getTableGlobalSecondaryIndexOnDemandThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxReadRequestUnits = 0;
  out.maxWriteRequestUnits = 0;
  return out;
}

// aws:dynamodb/getTableLocalSecondaryIndex:getTableLocalSecondaryIndex
export function dynamodb_getTableLocalSecondaryIndex(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.nonKeyAttributes = (depth > 4 ? [] : [""]);
  out.projectionType = "";
  out.rangeKey = "";
  return out;
}

// aws:dynamodb/getTableOnDemandThroughput:getTableOnDemandThroughput
export function dynamodb_getTableOnDemandThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxReadRequestUnits = 0;
  out.maxWriteRequestUnits = 0;
  return out;
}

// aws:dynamodb/getTablePointInTimeRecovery:getTablePointInTimeRecovery
export function dynamodb_getTablePointInTimeRecovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.recoveryPeriodInDays = 0;
  return out;
}

// aws:dynamodb/getTableReplica:getTableReplica
export function dynamodb_getTableReplica(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyArn = h.arn(ctx);
  out.regionName = "";
  return out;
}

// aws:dynamodb/getTableServerSideEncryption:getTableServerSideEncryption
export function dynamodb_getTableServerSideEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:dynamodb/getTableTtl:getTableTtl
export function dynamodb_getTableTtl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeName = "";
  out.enabled = true;
  return out;
}

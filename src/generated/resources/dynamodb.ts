// GENERATED FILE — do not edit.
// Service: dynamodb   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dynamodb from "../types/dynamodb.js";

// aws:dynamodb/contributorInsights:ContributorInsights
export function ContributorInsights(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexName = (i.indexName !== undefined ? i.indexName : "");
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:dynamodb/globalTable:GlobalTable
export function GlobalTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.replicas = (i.replicas !== undefined ? i.replicas : (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_GlobalTableReplica(ctx, depth + 1))]));
  return out;
}

// aws:dynamodb/kinesisStreamingDestination:KinesisStreamingDestination
export function KinesisStreamingDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approximateCreationDateTimePrecision = (i.approximateCreationDateTimePrecision !== undefined ? i.approximateCreationDateTimePrecision : "");
  out.streamArn = (i.streamArn !== undefined ? i.streamArn : h.arn(ctx));
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:dynamodb/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.confirmRemoveSelfResourceAccess = (i.confirmRemoveSelfResourceAccess !== undefined ? i.confirmRemoveSelfResourceAccess : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.revisionId = h.id(ctx, "revisionId");
  return out;
}

// aws:dynamodb/table:Table
export function Table(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_TableAttribute(ctx, depth + 1))]));
  out.billingMode = (i.billingMode !== undefined ? i.billingMode : "");
  out.deletionProtectionEnabled = (i.deletionProtectionEnabled !== undefined ? i.deletionProtectionEnabled : false);
  out.globalSecondaryIndexes = (i.globalSecondaryIndexes !== undefined ? i.globalSecondaryIndexes : (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_TableGlobalSecondaryIndex(ctx, depth + 1))]));
  out.hashKey = (i.hashKey !== undefined ? i.hashKey : "");
  out.importTable = (i.importTable !== undefined ? i.importTable : (depth > 4 ? {} : T_dynamodb.dynamodb_TableImportTable(ctx, depth + 1)));
  out.localSecondaryIndexes = (i.localSecondaryIndexes !== undefined ? i.localSecondaryIndexes : (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_TableLocalSecondaryIndex(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.onDemandThroughput = (i.onDemandThroughput !== undefined ? i.onDemandThroughput : (depth > 4 ? {} : T_dynamodb.dynamodb_TableOnDemandThroughput(ctx, depth + 1)));
  out.pointInTimeRecovery = (i.pointInTimeRecovery !== undefined ? i.pointInTimeRecovery : (depth > 4 ? {} : T_dynamodb.dynamodb_TablePointInTimeRecovery(ctx, depth + 1)));
  out.rangeKey = (i.rangeKey !== undefined ? i.rangeKey : "");
  out.readCapacity = (i.readCapacity !== undefined ? i.readCapacity : 0);
  out.replicas = (i.replicas !== undefined ? i.replicas : (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_TableReplica(ctx, depth + 1))]));
  out.restoreDateTime = (i.restoreDateTime !== undefined ? i.restoreDateTime : "");
  out.restoreSourceName = (i.restoreSourceName !== undefined ? i.restoreSourceName : "");
  out.restoreSourceTableArn = (i.restoreSourceTableArn !== undefined ? i.restoreSourceTableArn : h.arn(ctx));
  out.restoreToLatestTime = (i.restoreToLatestTime !== undefined ? i.restoreToLatestTime : false);
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : (depth > 4 ? {} : T_dynamodb.dynamodb_TableServerSideEncryption(ctx, depth + 1)));
  out.streamArn = h.arn(ctx);
  out.streamEnabled = (i.streamEnabled !== undefined ? i.streamEnabled : false);
  out.streamLabel = "";
  out.streamViewType = (i.streamViewType !== undefined ? i.streamViewType : "");
  out.tableClass = (i.tableClass !== undefined ? i.tableClass : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.ttl = (i.ttl !== undefined ? i.ttl : (depth > 4 ? {} : T_dynamodb.dynamodb_TableTtl(ctx, depth + 1)));
  out.writeCapacity = (i.writeCapacity !== undefined ? i.writeCapacity : 0);
  return out;
}

// aws:dynamodb/tableExport:TableExport
export function TableExport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.billedSizeInBytes = 8;
  out.endTime = "";
  out.exportFormat = (i.exportFormat !== undefined ? i.exportFormat : "");
  out.exportStatus = "";
  out.exportTime = (i.exportTime !== undefined ? i.exportTime : "");
  out.exportType = (i.exportType !== undefined ? i.exportType : "");
  out.incrementalExportSpecification = (i.incrementalExportSpecification !== undefined ? i.incrementalExportSpecification : (depth > 4 ? {} : T_dynamodb.dynamodb_TableExportIncrementalExportSpecification(ctx, depth + 1)));
  out.itemCount = 1;
  out.manifestFilesS3Key = "";
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3BucketOwner = (i.s3BucketOwner !== undefined ? i.s3BucketOwner : "");
  out.s3Prefix = (i.s3Prefix !== undefined ? i.s3Prefix : "");
  out.s3SseAlgorithm = (i.s3SseAlgorithm !== undefined ? i.s3SseAlgorithm : "");
  out.s3SseKmsKeyId = (i.s3SseKmsKeyId !== undefined ? i.s3SseKmsKeyId : h.id(ctx, "s3SseKmsKeyId"));
  out.startTime = "";
  out.tableArn = (i.tableArn !== undefined ? i.tableArn : h.arn(ctx));
  return out;
}

// aws:dynamodb/tableItem:TableItem
export function TableItem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hashKey = (i.hashKey !== undefined ? i.hashKey : "");
  out.item = (i.item !== undefined ? i.item : "");
  out.rangeKey = (i.rangeKey !== undefined ? i.rangeKey : "");
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:dynamodb/tableReplica:TableReplica
export function TableReplica(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtectionEnabled = (i.deletionProtectionEnabled !== undefined ? i.deletionProtectionEnabled : false);
  out.globalTableArn = (i.globalTableArn !== undefined ? i.globalTableArn : h.arn(ctx));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.pointInTimeRecovery = (i.pointInTimeRecovery !== undefined ? i.pointInTimeRecovery : false);
  out.tableClassOverride = (i.tableClassOverride !== undefined ? i.tableClassOverride : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dynamodb/tag:Tag
export function Tag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = (i.key !== undefined ? i.key : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

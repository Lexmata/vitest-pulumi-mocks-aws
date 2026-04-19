// GENERATED FILE — do not edit.
// Service: dynamodb   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dynamodb from "../types/dynamodb.js";

// aws:dynamodb/getTable:getTable
export function getTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableAttribute(ctx, depth + 1))]);
  out.billingMode = "";
  out.deletionProtectionEnabled = false;
  out.globalSecondaryIndexes = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableGlobalSecondaryIndex(ctx, depth + 1))]);
  out.hashKey = "";
  out.id = h.id(ctx, "id");
  out.localSecondaryIndexes = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableLocalSecondaryIndex(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.onDemandThroughputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableOnDemandThroughput(ctx, depth + 1))]);
  out.pointInTimeRecovery = (depth > 4 ? {} : T_dynamodb.dynamodb_getTablePointInTimeRecovery(ctx, depth + 1));
  out.rangeKey = "";
  out.readCapacity = 0;
  out.replicas = (depth > 4 ? [] : [(depth > 4 ? {} : T_dynamodb.dynamodb_getTableReplica(ctx, depth + 1))]);
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : (depth > 4 ? {} : T_dynamodb.dynamodb_getTableServerSideEncryption(ctx, depth + 1)));
  out.streamArn = h.arn(ctx);
  out.streamEnabled = false;
  out.streamLabel = "";
  out.streamViewType = "";
  out.tableClass = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.ttl = (depth > 4 ? {} : T_dynamodb.dynamodb_getTableTtl(ctx, depth + 1));
  out.writeCapacity = 0;
  return out;
}

// aws:dynamodb/getTableItem:getTableItem
export function getTableItem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expressionAttributeNames = (i.expressionAttributeNames !== undefined ? i.expressionAttributeNames : {});
  out.id = h.id(ctx, "id");
  out.item = "";
  out.key = (i.key !== undefined ? i.key : "");
  out.projectionExpression = (i.projectionExpression !== undefined ? i.projectionExpression : "");
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  return out;
}

// aws:dynamodb/getTables:getTables
export function getTables(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

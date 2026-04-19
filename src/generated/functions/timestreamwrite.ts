// GENERATED FILE — do not edit.
// Service: timestreamwrite   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreamwrite from "../types/timestreamwrite.js";

// aws:timestreamwrite/getDatabase:getDatabase
export function getDatabase(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tableCount = 1;
  return out;
}

// aws:timestreamwrite/getTable:getTable
export function getTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.id = h.id(ctx, "id");
  out.lastUpdatedTime = "";
  out.magneticStoreWriteProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableMagneticStoreWriteProperty(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.retentionProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableRetentionProperty(ctx, depth + 1))]);
  out.schemas = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamwrite.timestreamwrite_getTableSchema(ctx, depth + 1))]);
  out.tableStatus = "";
  return out;
}

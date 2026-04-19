// GENERATED FILE — do not edit.
// Service: timestreamwrite   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreamwrite from "../types/timestreamwrite.js";

// aws:timestreamwrite/database:Database
export function Database(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.tableCount = 1;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:timestreamwrite/table:Table
export function Table(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.magneticStoreWriteProperties = (i.magneticStoreWriteProperties !== undefined ? i.magneticStoreWriteProperties : (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableMagneticStoreWriteProperties(ctx, depth + 1)));
  out.retentionProperties = (i.retentionProperties !== undefined ? i.retentionProperties : (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableRetentionProperties(ctx, depth + 1)));
  out.schema = (i.schema !== undefined ? i.schema : (depth > 4 ? {} : T_timestreamwrite.timestreamwrite_TableSchema(ctx, depth + 1)));
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

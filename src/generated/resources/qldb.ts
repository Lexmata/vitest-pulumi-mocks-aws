// GENERATED FILE — do not edit.
// Service: qldb   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_qldb from "../types/qldb.js";

// aws:qldb/ledger:Ledger
export function Ledger(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.permissionsMode = (i.permissionsMode !== undefined ? i.permissionsMode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:qldb/stream:Stream
export function Stream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.exclusiveEndTime = (i.exclusiveEndTime !== undefined ? i.exclusiveEndTime : "");
  out.inclusiveStartTime = (i.inclusiveStartTime !== undefined ? i.inclusiveStartTime : "");
  out.kinesisConfiguration = (i.kinesisConfiguration !== undefined ? i.kinesisConfiguration : (depth > 4 ? {} : T_qldb.qldb_StreamKinesisConfiguration(ctx, depth + 1)));
  out.ledgerName = (i.ledgerName !== undefined ? i.ledgerName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.streamName = (i.streamName !== undefined ? i.streamName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

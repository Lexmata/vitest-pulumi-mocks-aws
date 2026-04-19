// GENERATED FILE — do not edit.
// Service: redshiftdata   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshiftdata from "../types/redshiftdata.js";

// aws:redshiftdata/statement:Statement
export function Statement(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.database = (i.database !== undefined ? i.database : "");
  out.dbUser = (i.dbUser !== undefined ? i.dbUser : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftdata.redshiftdata_StatementParameter(ctx, depth + 1))]));
  out.secretArn = (i.secretArn !== undefined ? i.secretArn : h.arn(ctx));
  out.sql = (i.sql !== undefined ? i.sql : "");
  out.statementName = (i.statementName !== undefined ? i.statementName : "");
  out.withEvent = (i.withEvent !== undefined ? i.withEvent : false);
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}

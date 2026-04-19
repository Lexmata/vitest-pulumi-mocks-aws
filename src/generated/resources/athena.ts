// GENERATED FILE — do not edit.
// Service: athena   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_athena from "../types/athena.js";

// aws:athena/capacityReservation:CapacityReservation
export function CapacityReservation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedDpus = 0;
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetDpus = (i.targetDpus !== undefined ? i.targetDpus : 0);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_athena.athena_CapacityReservationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:athena/dataCatalog:DataCatalog
export function DataCatalog(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:athena/database:Database
export function Database(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclConfiguration = (i.aclConfiguration !== undefined ? i.aclConfiguration : (depth > 4 ? {} : T_athena.athena_DatabaseAclConfiguration(ctx, depth + 1)));
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_athena.athena_DatabaseEncryptionConfiguration(ctx, depth + 1)));
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.properties = (i.properties !== undefined ? i.properties : {});
  return out;
}

// aws:athena/namedQuery:NamedQuery
export function NamedQuery(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = (i.database !== undefined ? i.database : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.query = (i.query !== undefined ? i.query : "");
  out.workgroup = (i.workgroup !== undefined ? i.workgroup : "");
  return out;
}

// aws:athena/preparedStatement:PreparedStatement
export function PreparedStatement(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queryStatement = (i.queryStatement !== undefined ? i.queryStatement : "");
  out.workgroup = (i.workgroup !== undefined ? i.workgroup : "");
  return out;
}

// aws:athena/workgroup:Workgroup
export function Workgroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_athena.athena_WorkgroupConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

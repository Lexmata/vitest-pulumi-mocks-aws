// GENERATED FILE — do not edit.
// Service: keyspaces   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_keyspaces from "../types/keyspaces.js";

// aws:keyspaces/keyspace:Keyspace
export function Keyspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.replicationSpecification = (i.replicationSpecification !== undefined ? i.replicationSpecification : (depth > 4 ? {} : T_keyspaces.keyspaces_KeyspaceReplicationSpecification(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:keyspaces/table:Table
export function Table(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacitySpecification = (i.capacitySpecification !== undefined ? i.capacitySpecification : (depth > 4 ? {} : T_keyspaces.keyspaces_TableCapacitySpecification(ctx, depth + 1)));
  out.clientSideTimestamps = (i.clientSideTimestamps !== undefined ? i.clientSideTimestamps : (depth > 4 ? {} : T_keyspaces.keyspaces_TableClientSideTimestamps(ctx, depth + 1)));
  out.comment = (i.comment !== undefined ? i.comment : (depth > 4 ? {} : T_keyspaces.keyspaces_TableComment(ctx, depth + 1)));
  out.defaultTimeToLive = (i.defaultTimeToLive !== undefined ? i.defaultTimeToLive : 0);
  out.encryptionSpecification = (i.encryptionSpecification !== undefined ? i.encryptionSpecification : (depth > 4 ? {} : T_keyspaces.keyspaces_TableEncryptionSpecification(ctx, depth + 1)));
  out.keyspaceName = (i.keyspaceName !== undefined ? i.keyspaceName : "");
  out.pointInTimeRecovery = (i.pointInTimeRecovery !== undefined ? i.pointInTimeRecovery : (depth > 4 ? {} : T_keyspaces.keyspaces_TablePointInTimeRecovery(ctx, depth + 1)));
  out.schemaDefinition = (i.schemaDefinition !== undefined ? i.schemaDefinition : (depth > 4 ? {} : T_keyspaces.keyspaces_TableSchemaDefinition(ctx, depth + 1)));
  out.tableName = (i.tableName !== undefined ? i.tableName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.ttl = (i.ttl !== undefined ? i.ttl : (depth > 4 ? {} : T_keyspaces.keyspaces_TableTtl(ctx, depth + 1)));
  return out;
}

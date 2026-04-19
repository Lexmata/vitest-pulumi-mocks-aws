// GENERATED FILE — do not edit.
// Service: keyspaces   (12 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_keyspaces from "./keyspaces.js";

// aws:keyspaces/KeyspaceReplicationSpecification:KeyspaceReplicationSpecification
export function keyspaces_KeyspaceReplicationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionLists = (depth > 4 ? [] : [""]);
  out.replicationStrategy = "";
  return out;
}

// aws:keyspaces/TableCapacitySpecification:TableCapacitySpecification
export function keyspaces_TableCapacitySpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.readCapacityUnits = 0;
  out.throughputMode = "";
  out.writeCapacityUnits = 0;
  return out;
}

// aws:keyspaces/TableClientSideTimestamps:TableClientSideTimestamps
export function keyspaces_TableClientSideTimestamps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:keyspaces/TableComment:TableComment
export function keyspaces_TableComment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  return out;
}

// aws:keyspaces/TableEncryptionSpecification:TableEncryptionSpecification
export function keyspaces_TableEncryptionSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyIdentifier = "";
  out.type = "";
  return out;
}

// aws:keyspaces/TablePointInTimeRecovery:TablePointInTimeRecovery
export function keyspaces_TablePointInTimeRecovery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:keyspaces/TableSchemaDefinition:TableSchemaDefinition
export function keyspaces_TableSchemaDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusteringKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_keyspaces.keyspaces_TableSchemaDefinitionClusteringKey(ctx, depth + 1))]);
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_keyspaces.keyspaces_TableSchemaDefinitionColumn(ctx, depth + 1))]);
  out.partitionKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_keyspaces.keyspaces_TableSchemaDefinitionPartitionKey(ctx, depth + 1))]);
  out.staticColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_keyspaces.keyspaces_TableSchemaDefinitionStaticColumn(ctx, depth + 1))]);
  return out;
}

// aws:keyspaces/TableSchemaDefinitionClusteringKey:TableSchemaDefinitionClusteringKey
export function keyspaces_TableSchemaDefinitionClusteringKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.orderBy = "";
  return out;
}

// aws:keyspaces/TableSchemaDefinitionColumn:TableSchemaDefinitionColumn
export function keyspaces_TableSchemaDefinitionColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:keyspaces/TableSchemaDefinitionPartitionKey:TableSchemaDefinitionPartitionKey
export function keyspaces_TableSchemaDefinitionPartitionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:keyspaces/TableSchemaDefinitionStaticColumn:TableSchemaDefinitionStaticColumn
export function keyspaces_TableSchemaDefinitionStaticColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:keyspaces/TableTtl:TableTtl
export function keyspaces_TableTtl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

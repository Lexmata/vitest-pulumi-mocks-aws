// GENERATED FILE — do not edit.
// Service: glue   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_glue from "../types/glue.js";

// aws:glue/getCatalogTable:getCatalogTable
export function getCatalogTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.parameters = {};
  out.partitionIndices = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTablePartitionIndex(ctx, depth + 1))]);
  out.partitionKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTablePartitionKey(ctx, depth + 1))]);
  out.queryAsOfTime = (i.queryAsOfTime !== undefined ? i.queryAsOfTime : "");
  out.retention = 0;
  out.storageDescriptors = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableStorageDescriptor(ctx, depth + 1))]);
  out.tableType = "";
  out.targetTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getCatalogTableTargetTable(ctx, depth + 1))]);
  out.transactionId = (i.transactionId !== undefined ? i.transactionId : 0);
  out.viewExpandedText = "";
  out.viewOriginalText = "";
  return out;
}

// aws:glue/getConnection:getConnection
export function getConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.athenaProperties = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.connectionProperties = {};
  out.connectionType = "";
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.matchCriterias = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.physicalConnectionRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getConnectionPhysicalConnectionRequirement(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:glue/getDataCatalogEncryptionSettings:getDataCatalogEncryptionSettings
export function getDataCatalogEncryptionSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.dataCatalogEncryptionSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSetting(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:glue/getRegistry:getRegistry
export function getRegistry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:glue/getScript:getScript
export function getScript(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dagEdges = (i.dagEdges !== undefined ? i.dagEdges : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getScriptDagEdge(ctx, depth + 1))]));
  out.dagNodes = (i.dagNodes !== undefined ? i.dagNodes : (depth > 4 ? [] : [(depth > 4 ? {} : T_glue.glue_getScriptDagNode(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.language = (i.language !== undefined ? i.language : "");
  out.pythonScript = "";
  out.scalaCode = "";
  return out;
}

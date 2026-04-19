// GENERATED FILE — do not edit.
// Service: lakeformation   (48 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lakeformation from "./lakeformation.js";

// aws:lakeformation/DataCellsFilterTableData:DataCellsFilterTableData
export function lakeformation_DataCellsFilterTableData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnNames = (depth > 4 ? [] : [""]);
  out.columnWildcard = (depth > 4 ? {} : T_lakeformation.lakeformation_DataCellsFilterTableDataColumnWildcard(ctx, depth + 1));
  out.databaseName = "";
  out.name = ctx.name;
  out.rowFilter = (depth > 4 ? {} : T_lakeformation.lakeformation_DataCellsFilterTableDataRowFilter(ctx, depth + 1));
  out.tableCatalogId = h.id(ctx, "tableCatalogId");
  out.tableName = "";
  out.versionId = h.id(ctx, "versionId");
  return out;
}

// aws:lakeformation/DataCellsFilterTableDataColumnWildcard:DataCellsFilterTableDataColumnWildcard
export function lakeformation_DataCellsFilterTableDataColumnWildcard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/DataCellsFilterTableDataRowFilter:DataCellsFilterTableDataRowFilter
export function lakeformation_DataCellsFilterTableDataRowFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allRowsWildcard = (depth > 4 ? {} : T_lakeformation.lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard(ctx, depth + 1));
  out.filterExpression = "";
  return out;
}

// aws:lakeformation/DataCellsFilterTableDataRowFilterAllRowsWildcard:DataCellsFilterTableDataRowFilterAllRowsWildcard
export function lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:lakeformation/DataCellsFilterTimeouts:DataCellsFilterTimeouts
export function lakeformation_DataCellsFilterTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:lakeformation/DataLakeSettingsCreateDatabaseDefaultPermission:DataLakeSettingsCreateDatabaseDefaultPermission
export function lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:lakeformation/DataLakeSettingsCreateTableDefaultPermission:DataLakeSettingsCreateTableDefaultPermission
export function lakeformation_DataLakeSettingsCreateTableDefaultPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:lakeformation/OptInCondition:OptInCondition
export function lakeformation_OptInCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  return out;
}

// aws:lakeformation/OptInPrincipal:OptInPrincipal
export function lakeformation_OptInPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataLakePrincipalIdentifier = "";
  return out;
}

// aws:lakeformation/OptInResourceData:OptInResourceData
export function lakeformation_OptInResourceData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogs = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataCatalog(ctx, depth + 1))]);
  out.dataCellsFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataDataCellsFilter(ctx, depth + 1))]);
  out.dataLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataDataLocation(ctx, depth + 1))]);
  out.database = (depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataDatabase(ctx, depth + 1));
  out.lfTag = (depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataLfTag(ctx, depth + 1));
  out.lfTagExpressions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataLfTagExpression(ctx, depth + 1))]);
  out.lfTagPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataLfTagPolicy(ctx, depth + 1))]);
  out.table = (depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataTable(ctx, depth + 1));
  out.tableWithColumns = (depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataTableWithColumns(ctx, depth + 1));
  return out;
}

// aws:lakeformation/OptInResourceDataCatalog:OptInResourceDataCatalog
export function lakeformation_OptInResourceDataCatalog(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:lakeformation/OptInResourceDataDataCellsFilter:OptInResourceDataDataCellsFilter
export function lakeformation_OptInResourceDataDataCellsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.name = ctx.name;
  out.tableCatalogId = h.id(ctx, "tableCatalogId");
  out.tableName = "";
  return out;
}

// aws:lakeformation/OptInResourceDataDataLocation:OptInResourceDataDataLocation
export function lakeformation_OptInResourceDataDataLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:lakeformation/OptInResourceDataDatabase:OptInResourceDataDatabase
export function lakeformation_OptInResourceDataDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/OptInResourceDataLfTag:OptInResourceDataLfTag
export function lakeformation_OptInResourceDataLfTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.key = "";
  out.value = "";
  return out;
}

// aws:lakeformation/OptInResourceDataLfTagExpression:OptInResourceDataLfTagExpression
export function lakeformation_OptInResourceDataLfTagExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/OptInResourceDataLfTagPolicy:OptInResourceDataLfTagPolicy
export function lakeformation_OptInResourceDataLfTagPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.expressionName = "";
  out.expressions = (depth > 4 ? [] : [""]);
  out.resourceType = "";
  return out;
}

// aws:lakeformation/OptInResourceDataTable:OptInResourceDataTable
export function lakeformation_OptInResourceDataTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/OptInResourceDataTableWithColumns:OptInResourceDataTableWithColumns
export function lakeformation_OptInResourceDataTableWithColumns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.columnNames = (depth > 4 ? [] : [""]);
  out.columnWildcard = (depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceDataTableWithColumnsColumnWildcard(ctx, depth + 1));
  out.databaseName = "";
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/OptInResourceDataTableWithColumnsColumnWildcard:OptInResourceDataTableWithColumnsColumnWildcard
export function lakeformation_OptInResourceDataTableWithColumnsColumnWildcard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/PermissionsDataCellsFilter:PermissionsDataCellsFilter
export function lakeformation_PermissionsDataCellsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.name = ctx.name;
  out.tableCatalogId = h.id(ctx, "tableCatalogId");
  out.tableName = "";
  return out;
}

// aws:lakeformation/PermissionsDataLocation:PermissionsDataLocation
export function lakeformation_PermissionsDataLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = h.id(ctx, "catalogId");
  return out;
}

// aws:lakeformation/PermissionsDatabase:PermissionsDatabase
export function lakeformation_PermissionsDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/PermissionsLfTag:PermissionsLfTag
export function lakeformation_PermissionsLfTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/PermissionsLfTagPolicy:PermissionsLfTagPolicy
export function lakeformation_PermissionsLfTagPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.expressions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsLfTagPolicyExpression(ctx, depth + 1))]);
  out.resourceType = "";
  return out;
}

// aws:lakeformation/PermissionsLfTagPolicyExpression:PermissionsLfTagPolicyExpression
export function lakeformation_PermissionsLfTagPolicyExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/PermissionsTable:PermissionsTable
export function lakeformation_PermissionsTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/PermissionsTableWithColumns:PermissionsTableWithColumns
export function lakeformation_PermissionsTableWithColumns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.columnNames = (depth > 4 ? [] : [""]);
  out.databaseName = "";
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/ResourceLfTagDatabase:ResourceLfTagDatabase
export function lakeformation_ResourceLfTagDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/ResourceLfTagLfTag:ResourceLfTagLfTag
export function lakeformation_ResourceLfTagLfTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.key = "";
  out.value = "";
  return out;
}

// aws:lakeformation/ResourceLfTagTable:ResourceLfTagTable
export function lakeformation_ResourceLfTagTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/ResourceLfTagTableWithColumns:ResourceLfTagTableWithColumns
export function lakeformation_ResourceLfTagTableWithColumns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.columnNames = (depth > 4 ? [] : [""]);
  out.columnWildcard = (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagTableWithColumnsColumnWildcard(ctx, depth + 1));
  out.databaseName = "";
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/ResourceLfTagTableWithColumnsColumnWildcard:ResourceLfTagTableWithColumnsColumnWildcard
export function lakeformation_ResourceLfTagTableWithColumnsColumnWildcard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/ResourceLfTagTimeouts:ResourceLfTagTimeouts
export function lakeformation_ResourceLfTagTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:lakeformation/ResourceLfTagsDatabase:ResourceLfTagsDatabase
export function lakeformation_ResourceLfTagsDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/ResourceLfTagsLfTag:ResourceLfTagsLfTag
export function lakeformation_ResourceLfTagsLfTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.key = "";
  out.value = "";
  return out;
}

// aws:lakeformation/ResourceLfTagsTable:ResourceLfTagsTable
export function lakeformation_ResourceLfTagsTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/ResourceLfTagsTableWithColumns:ResourceLfTagsTableWithColumns
export function lakeformation_ResourceLfTagsTableWithColumns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.columnNames = (depth > 4 ? [] : [""]);
  out.databaseName = "";
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/getDataLakeSettingsCreateDatabaseDefaultPermission:getDataLakeSettingsCreateDatabaseDefaultPermission
export function lakeformation_getDataLakeSettingsCreateDatabaseDefaultPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:lakeformation/getDataLakeSettingsCreateTableDefaultPermission:getDataLakeSettingsCreateTableDefaultPermission
export function lakeformation_getDataLakeSettingsCreateTableDefaultPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:lakeformation/getPermissionsDataCellsFilter:getPermissionsDataCellsFilter
export function lakeformation_getPermissionsDataCellsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.name = ctx.name;
  out.tableCatalogId = h.id(ctx, "tableCatalogId");
  out.tableName = "";
  return out;
}

// aws:lakeformation/getPermissionsDataLocation:getPermissionsDataLocation
export function lakeformation_getPermissionsDataLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogId = h.id(ctx, "catalogId");
  return out;
}

// aws:lakeformation/getPermissionsDatabase:getPermissionsDatabase
export function lakeformation_getPermissionsDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.name = ctx.name;
  return out;
}

// aws:lakeformation/getPermissionsLfTag:getPermissionsLfTag
export function lakeformation_getPermissionsLfTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/getPermissionsLfTagPolicy:getPermissionsLfTagPolicy
export function lakeformation_getPermissionsLfTagPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.expressions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsLfTagPolicyExpression(ctx, depth + 1))]);
  out.resourceType = "";
  return out;
}

// aws:lakeformation/getPermissionsLfTagPolicyExpression:getPermissionsLfTagPolicyExpression
export function lakeformation_getPermissionsLfTagPolicyExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/getPermissionsTable:getPermissionsTable
export function lakeformation_getPermissionsTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

// aws:lakeformation/getPermissionsTableWithColumns:getPermissionsTableWithColumns
export function lakeformation_getPermissionsTableWithColumns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.columnNames = (depth > 4 ? [] : [""]);
  out.databaseName = "";
  out.excludedColumnNames = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.wildcard = false;
  return out;
}

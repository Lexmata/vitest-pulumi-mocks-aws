// GENERATED FILE — do not edit.
// Service: lakeformation   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lakeformation from "../types/lakeformation.js";

// aws:lakeformation/dataCellsFilter:DataCellsFilter
export function DataCellsFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tableData = (i.tableData !== undefined ? i.tableData : (depth > 4 ? {} : T_lakeformation.lakeformation_DataCellsFilterTableData(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lakeformation.lakeformation_DataCellsFilterTimeouts(ctx, depth + 1)));
  return out;
}

// aws:lakeformation/dataLakeSettings:DataLakeSettings
export function DataLakeSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.admins = (i.admins !== undefined ? i.admins : (depth > 4 ? [] : [""]));
  out.allowExternalDataFiltering = (i.allowExternalDataFiltering !== undefined ? i.allowExternalDataFiltering : true);
  out.allowFullTableExternalDataAccess = (i.allowFullTableExternalDataAccess !== undefined ? i.allowFullTableExternalDataAccess : true);
  out.authorizedSessionTagValueLists = (i.authorizedSessionTagValueLists !== undefined ? i.authorizedSessionTagValueLists : (depth > 4 ? [] : [""]));
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.createDatabaseDefaultPermissions = (i.createDatabaseDefaultPermissions !== undefined ? i.createDatabaseDefaultPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission(ctx, depth + 1))]));
  out.createTableDefaultPermissions = (i.createTableDefaultPermissions !== undefined ? i.createTableDefaultPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_DataLakeSettingsCreateTableDefaultPermission(ctx, depth + 1))]));
  out.externalDataFilteringAllowLists = (i.externalDataFilteringAllowLists !== undefined ? i.externalDataFilteringAllowLists : (depth > 4 ? [] : [""]));
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.readOnlyAdmins = (i.readOnlyAdmins !== undefined ? i.readOnlyAdmins : (depth > 4 ? [] : [""]));
  out.trustedResourceOwners = (i.trustedResourceOwners !== undefined ? i.trustedResourceOwners : (depth > 4 ? [] : [""]));
  return out;
}

// aws:lakeformation/lfTag:LfTag
export function LfTag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.key = (i.key !== undefined ? i.key : "");
  out.values = (i.values !== undefined ? i.values : (depth > 4 ? [] : [""]));
  return out;
}

// aws:lakeformation/optIn:OptIn
export function OptIn(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditions = (i.conditions !== undefined ? i.conditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInCondition(ctx, depth + 1))]));
  out.lastModified = h.timestamp();
  out.lastUpdatedBy = "";
  out.principals = (i.principals !== undefined ? i.principals : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInPrincipal(ctx, depth + 1))]));
  out.resourceDatas = (i.resourceDatas !== undefined ? i.resourceDatas : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_OptInResourceData(ctx, depth + 1))]));
  return out;
}

// aws:lakeformation/permissions:Permissions
export function Permissions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.catalogResource = (i.catalogResource !== undefined ? i.catalogResource : false);
  out.dataCellsFilter = (i.dataCellsFilter !== undefined ? i.dataCellsFilter : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsDataCellsFilter(ctx, depth + 1)));
  out.dataLocation = (i.dataLocation !== undefined ? i.dataLocation : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsDataLocation(ctx, depth + 1)));
  out.database = (i.database !== undefined ? i.database : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsDatabase(ctx, depth + 1)));
  out.lfTag = (i.lfTag !== undefined ? i.lfTag : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsLfTag(ctx, depth + 1)));
  out.lfTagPolicy = (i.lfTagPolicy !== undefined ? i.lfTagPolicy : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsLfTagPolicy(ctx, depth + 1)));
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [""]));
  out.permissionsWithGrantOptions = (i.permissionsWithGrantOptions !== undefined ? i.permissionsWithGrantOptions : (depth > 4 ? [] : [""]));
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.table = (i.table !== undefined ? i.table : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsTable(ctx, depth + 1)));
  out.tableWithColumns = (i.tableWithColumns !== undefined ? i.tableWithColumns : (depth > 4 ? {} : T_lakeformation.lakeformation_PermissionsTableWithColumns(ctx, depth + 1)));
  return out;
}

// aws:lakeformation/resource:Resource
export function Resource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.hybridAccessEnabled = (i.hybridAccessEnabled !== undefined ? i.hybridAccessEnabled : false);
  out.lastModified = h.timestamp();
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.useServiceLinkedRole = (i.useServiceLinkedRole !== undefined ? i.useServiceLinkedRole : false);
  out.withFederation = (i.withFederation !== undefined ? i.withFederation : false);
  return out;
}

// aws:lakeformation/resourceLfTag:ResourceLfTag
export function ResourceLfTag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.database = (i.database !== undefined ? i.database : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagDatabase(ctx, depth + 1)));
  out.lfTag = (i.lfTag !== undefined ? i.lfTag : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagLfTag(ctx, depth + 1)));
  out.table = (i.table !== undefined ? i.table : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagTable(ctx, depth + 1)));
  out.tableWithColumns = (i.tableWithColumns !== undefined ? i.tableWithColumns : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagTableWithColumns(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagTimeouts(ctx, depth + 1)));
  return out;
}

// aws:lakeformation/resourceLfTags:ResourceLfTags
export function ResourceLfTags(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.database = (i.database !== undefined ? i.database : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagsDatabase(ctx, depth + 1)));
  out.lfTags = (i.lfTags !== undefined ? i.lfTags : (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagsLfTag(ctx, depth + 1))]));
  out.table = (i.table !== undefined ? i.table : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagsTable(ctx, depth + 1)));
  out.tableWithColumns = (i.tableWithColumns !== undefined ? i.tableWithColumns : (depth > 4 ? {} : T_lakeformation.lakeformation_ResourceLfTagsTableWithColumns(ctx, depth + 1)));
  return out;
}

// GENERATED FILE — do not edit.
// Service: lakeformation   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lakeformation from "../types/lakeformation.js";

// aws:lakeformation/getDataLakeSettings:getDataLakeSettings
export function getDataLakeSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.admins = (depth > 4 ? [] : [""]);
  out.allowExternalDataFiltering = true;
  out.allowFullTableExternalDataAccess = true;
  out.authorizedSessionTagValueLists = (depth > 4 ? [] : [""]);
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.createDatabaseDefaultPermissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_getDataLakeSettingsCreateDatabaseDefaultPermission(ctx, depth + 1))]);
  out.createTableDefaultPermissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lakeformation.lakeformation_getDataLakeSettingsCreateTableDefaultPermission(ctx, depth + 1))]);
  out.externalDataFilteringAllowLists = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.parameters = {};
  out.readOnlyAdmins = (depth > 4 ? [] : [""]);
  out.trustedResourceOwners = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lakeformation/getPermissions:getPermissions
export function getPermissions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = (i.catalogId !== undefined ? i.catalogId : h.id(ctx, "catalogId"));
  out.catalogResource = (i.catalogResource !== undefined ? i.catalogResource : false);
  out.dataCellsFilter = (i.dataCellsFilter !== undefined ? i.dataCellsFilter : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsDataCellsFilter(ctx, depth + 1)));
  out.dataLocation = (i.dataLocation !== undefined ? i.dataLocation : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsDataLocation(ctx, depth + 1)));
  out.database = (i.database !== undefined ? i.database : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsDatabase(ctx, depth + 1)));
  out.id = h.id(ctx, "id");
  out.lfTag = (i.lfTag !== undefined ? i.lfTag : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsLfTag(ctx, depth + 1)));
  out.lfTagPolicy = (i.lfTagPolicy !== undefined ? i.lfTagPolicy : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsLfTagPolicy(ctx, depth + 1)));
  out.permissions = (depth > 4 ? [] : [""]);
  out.permissionsWithGrantOptions = (depth > 4 ? [] : [""]);
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.table = (i.table !== undefined ? i.table : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsTable(ctx, depth + 1)));
  out.tableWithColumns = (i.tableWithColumns !== undefined ? i.tableWithColumns : (depth > 4 ? {} : T_lakeformation.lakeformation_getPermissionsTableWithColumns(ctx, depth + 1)));
  return out;
}

// aws:lakeformation/getResource:getResource
export function getResource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.lastModified = h.timestamp();
  out.roleArn = h.arn(ctx);
  return out;
}

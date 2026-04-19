// GENERATED FILE — do not edit.
// Service: quicksight   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_quicksight from "../types/quicksight.js";

// aws:quicksight/getAnalysis:getAnalysis
export function getAnalysis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analysisId = (i.analysisId !== undefined ? i.analysisId : h.id(ctx, "analysisId"));
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.id = h.id(ctx, "id");
  out.lastPublishedTime = "";
  out.lastUpdatedTime = "";
  out.name = ctx.name;
  out.permissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getAnalysisPermission(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.themeArn = h.arn(ctx);
  return out;
}

// aws:quicksight/getDataSet:getDataSet
export function getDataSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.columnGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetColumnGroup(ctx, depth + 1))]);
  out.columnLevelPermissionRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetColumnLevelPermissionRule(ctx, depth + 1))]);
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.dataSetUsageConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetDataSetUsageConfiguration(ctx, depth + 1))]);
  out.fieldFolders = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetFieldFolder(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.importMode = "";
  out.logicalTableMaps = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMap(ctx, depth + 1))]);
  out.name = ctx.name;
  out.permissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPermission(ctx, depth + 1))]);
  out.physicalTableMaps = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMap(ctx, depth + 1))]);
  out.rowLevelPermissionDataSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetRowLevelPermissionDataSet(ctx, depth + 1))]);
  out.rowLevelPermissionTagConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetRowLevelPermissionTagConfiguration(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = (i.tagsAll !== undefined ? i.tagsAll : {});
  return out;
}

// aws:quicksight/getQuicksightAnalysis:getQuicksightAnalysis
export function getQuicksightAnalysis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analysisId = (i.analysisId !== undefined ? i.analysisId : h.id(ctx, "analysisId"));
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.id = h.id(ctx, "id");
  out.lastPublishedTime = "";
  out.lastUpdatedTime = "";
  out.name = ctx.name;
  out.permissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getQuicksightAnalysisPermission(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.themeArn = h.arn(ctx);
  return out;
}

// aws:quicksight/getQuicksightGroup:getQuicksightGroup
export function getQuicksightGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.description = "";
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.id = h.id(ctx, "id");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.principalId = h.id(ctx, "principalId");
  return out;
}

// aws:quicksight/getQuicksightUser:getQuicksightUser
export function getQuicksightUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.email = "";
  out.id = h.id(ctx, "id");
  out.identityType = "";
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.principalId = h.id(ctx, "principalId");
  out.userName = (i.userName !== undefined ? i.userName : "");
  out.userRole = "";
  return out;
}

// aws:quicksight/getTheme:getTheme
export function getTheme(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.baseThemeId = h.id(ctx, "baseThemeId");
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfiguration(ctx, depth + 1))]);
  out.createdTime = h.timestamp();
  out.id = h.id(ctx, "id");
  out.lastUpdatedTime = "";
  out.name = ctx.name;
  out.permissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemePermission(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.themeId = (i.themeId !== undefined ? i.themeId : h.id(ctx, "themeId"));
  out.versionDescription = "";
  out.versionNumber = 0;
  return out;
}

// GENERATED FILE — do not edit.
// Service: quicksight   (167 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_quicksight from "./quicksight.js";

// aws:quicksight/AccountSettingsTimeouts:AccountSettingsTimeouts
export function quicksight_AccountSettingsTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:quicksight/AnalysisParameters:AnalysisParameters
export function quicksight_AnalysisParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateTimeParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisParametersDateTimeParameter(ctx, depth + 1))]);
  out.decimalParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisParametersDecimalParameter(ctx, depth + 1))]);
  out.integerParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisParametersIntegerParameter(ctx, depth + 1))]);
  out.stringParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisParametersStringParameter(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/AnalysisParametersDateTimeParameter:AnalysisParametersDateTimeParameter
export function quicksight_AnalysisParametersDateTimeParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/AnalysisParametersDecimalParameter:AnalysisParametersDecimalParameter
export function quicksight_AnalysisParametersDecimalParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [0]);
  return out;
}

// aws:quicksight/AnalysisParametersIntegerParameter:AnalysisParametersIntegerParameter
export function quicksight_AnalysisParametersIntegerParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [0]);
  return out;
}

// aws:quicksight/AnalysisParametersStringParameter:AnalysisParametersStringParameter
export function quicksight_AnalysisParametersStringParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/AnalysisPermission:AnalysisPermission
export function quicksight_AnalysisPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/AnalysisSourceEntity:AnalysisSourceEntity
export function quicksight_AnalysisSourceEntity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceTemplate = (depth > 4 ? {} : T_quicksight.quicksight_AnalysisSourceEntitySourceTemplate(ctx, depth + 1));
  return out;
}

// aws:quicksight/AnalysisSourceEntitySourceTemplate:AnalysisSourceEntitySourceTemplate
export function quicksight_AnalysisSourceEntitySourceTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisSourceEntitySourceTemplateDataSetReference(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/AnalysisSourceEntitySourceTemplateDataSetReference:AnalysisSourceEntitySourceTemplateDataSetReference
export function quicksight_AnalysisSourceEntitySourceTemplateDataSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetArn = h.arn(ctx);
  out.dataSetPlaceholder = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptions:DashboardDashboardPublishOptions
export function quicksight_DashboardDashboardPublishOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adHocFilteringOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption(ctx, depth + 1));
  out.dataPointDrillUpDownOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption(ctx, depth + 1));
  out.dataPointMenuLabelOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption(ctx, depth + 1));
  out.dataPointTooltipOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption(ctx, depth + 1));
  out.exportToCsvOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsExportToCsvOption(ctx, depth + 1));
  out.exportWithHiddenFieldsOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption(ctx, depth + 1));
  out.sheetControlsOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsSheetControlsOption(ctx, depth + 1));
  out.sheetLayoutElementMaximizationOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption(ctx, depth + 1));
  out.visualAxisSortOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption(ctx, depth + 1));
  out.visualMenuOption = (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptionsVisualMenuOption(ctx, depth + 1));
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsAdHocFilteringOption:DashboardDashboardPublishOptionsAdHocFilteringOption
export function quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsDataPointDrillUpDownOption:DashboardDashboardPublishOptionsDataPointDrillUpDownOption
export function quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsDataPointMenuLabelOption:DashboardDashboardPublishOptionsDataPointMenuLabelOption
export function quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsDataPointTooltipOption:DashboardDashboardPublishOptionsDataPointTooltipOption
export function quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsExportToCsvOption:DashboardDashboardPublishOptionsExportToCsvOption
export function quicksight_DashboardDashboardPublishOptionsExportToCsvOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsExportWithHiddenFieldsOption:DashboardDashboardPublishOptionsExportWithHiddenFieldsOption
export function quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsSheetControlsOption:DashboardDashboardPublishOptionsSheetControlsOption
export function quicksight_DashboardDashboardPublishOptionsSheetControlsOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.visibilityState = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption:DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
export function quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsVisualAxisSortOption:DashboardDashboardPublishOptionsVisualAxisSortOption
export function quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardDashboardPublishOptionsVisualMenuOption:DashboardDashboardPublishOptionsVisualMenuOption
export function quicksight_DashboardDashboardPublishOptionsVisualMenuOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityStatus = "";
  return out;
}

// aws:quicksight/DashboardParameters:DashboardParameters
export function quicksight_DashboardParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateTimeParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardParametersDateTimeParameter(ctx, depth + 1))]);
  out.decimalParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardParametersDecimalParameter(ctx, depth + 1))]);
  out.integerParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardParametersIntegerParameter(ctx, depth + 1))]);
  out.stringParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardParametersStringParameter(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/DashboardParametersDateTimeParameter:DashboardParametersDateTimeParameter
export function quicksight_DashboardParametersDateTimeParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/DashboardParametersDecimalParameter:DashboardParametersDecimalParameter
export function quicksight_DashboardParametersDecimalParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [0]);
  return out;
}

// aws:quicksight/DashboardParametersIntegerParameter:DashboardParametersIntegerParameter
export function quicksight_DashboardParametersIntegerParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [0]);
  return out;
}

// aws:quicksight/DashboardParametersStringParameter:DashboardParametersStringParameter
export function quicksight_DashboardParametersStringParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/DashboardPermission:DashboardPermission
export function quicksight_DashboardPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/DashboardSourceEntity:DashboardSourceEntity
export function quicksight_DashboardSourceEntity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceTemplate = (depth > 4 ? {} : T_quicksight.quicksight_DashboardSourceEntitySourceTemplate(ctx, depth + 1));
  return out;
}

// aws:quicksight/DashboardSourceEntitySourceTemplate:DashboardSourceEntitySourceTemplate
export function quicksight_DashboardSourceEntitySourceTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardSourceEntitySourceTemplateDataSetReference(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/DashboardSourceEntitySourceTemplateDataSetReference:DashboardSourceEntitySourceTemplateDataSetReference
export function quicksight_DashboardSourceEntitySourceTemplateDataSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetArn = h.arn(ctx);
  out.dataSetPlaceholder = "";
  return out;
}

// aws:quicksight/DataSetColumnGroup:DataSetColumnGroup
export function quicksight_DataSetColumnGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.geoSpatialColumnGroup = (depth > 4 ? {} : T_quicksight.quicksight_DataSetColumnGroupGeoSpatialColumnGroup(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetColumnGroupGeoSpatialColumnGroup:DataSetColumnGroupGeoSpatialColumnGroup
export function quicksight_DataSetColumnGroupGeoSpatialColumnGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [""]);
  out.countryCode = "";
  out.name = ctx.name;
  return out;
}

// aws:quicksight/DataSetColumnLevelPermissionRule:DataSetColumnLevelPermissionRule
export function quicksight_DataSetColumnLevelPermissionRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnNames = (depth > 4 ? [] : [""]);
  out.principals = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/DataSetDataSetUsageConfiguration:DataSetDataSetUsageConfiguration
export function quicksight_DataSetDataSetUsageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disableUseAsDirectQuerySource = false;
  out.disableUseAsImportedSource = false;
  return out;
}

// aws:quicksight/DataSetFieldFolder:DataSetFieldFolder
export function quicksight_DataSetFieldFolder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [""]);
  out.description = "";
  out.fieldFoldersId = h.id(ctx, "fieldFoldersId");
  return out;
}

// aws:quicksight/DataSetLogicalTableMap:DataSetLogicalTableMap
export function quicksight_DataSetLogicalTableMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = "";
  out.dataTransforms = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransform(ctx, depth + 1))]);
  out.logicalTableMapId = h.id(ctx, "logicalTableMapId");
  out.source = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapSource(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransform:DataSetLogicalTableMapDataTransform
export function quicksight_DataSetLogicalTableMapDataTransform(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.castColumnTypeOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation(ctx, depth + 1));
  out.createColumnsOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation(ctx, depth + 1));
  out.filterOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformFilterOperation(ctx, depth + 1));
  out.projectOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformProjectOperation(ctx, depth + 1));
  out.renameColumnOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation(ctx, depth + 1));
  out.tagColumnOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation(ctx, depth + 1));
  out.untagColumnOperation = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformCastColumnTypeOperation:DataSetLogicalTableMapDataTransformCastColumnTypeOperation
export function quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.format = "";
  out.newColumnType = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformCreateColumnsOperation:DataSetLogicalTableMapDataTransformCreateColumnsOperation
export function quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn:DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn
export function quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnId = h.id(ctx, "columnId");
  out.columnName = "";
  out.expression = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformFilterOperation:DataSetLogicalTableMapDataTransformFilterOperation
export function quicksight_DataSetLogicalTableMapDataTransformFilterOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionExpression = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformProjectOperation:DataSetLogicalTableMapDataTransformProjectOperation
export function quicksight_DataSetLogicalTableMapDataTransformProjectOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.projectedColumns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformRenameColumnOperation:DataSetLogicalTableMapDataTransformRenameColumnOperation
export function quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.newColumnName = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformTagColumnOperation:DataSetLogicalTableMapDataTransformTagColumnOperation
export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformTagColumnOperationTag:DataSetLogicalTableMapDataTransformTagColumnOperationTag
export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnDescription = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription(ctx, depth + 1));
  out.columnGeographicRole = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription:DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription
export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapDataTransformUntagColumnOperation:DataSetLogicalTableMapDataTransformUntagColumnOperation
export function quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.tagNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/DataSetLogicalTableMapSource:DataSetLogicalTableMapSource
export function quicksight_DataSetLogicalTableMapSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetArn = h.arn(ctx);
  out.joinInstruction = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapSourceJoinInstruction(ctx, depth + 1));
  out.physicalTableId = h.id(ctx, "physicalTableId");
  return out;
}

// aws:quicksight/DataSetLogicalTableMapSourceJoinInstruction:DataSetLogicalTableMapSourceJoinInstruction
export function quicksight_DataSetLogicalTableMapSourceJoinInstruction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.leftJoinKeyProperties = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties(ctx, depth + 1));
  out.leftOperand = "";
  out.onClause = "";
  out.rightJoinKeyProperties = (depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties(ctx, depth + 1));
  out.rightOperand = "";
  out.type = "";
  return out;
}

// aws:quicksight/DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties:DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
export function quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uniqueKey = false;
  return out;
}

// aws:quicksight/DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties:DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
export function quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uniqueKey = false;
  return out;
}

// aws:quicksight/DataSetOutputColumn:DataSetOutputColumn
export function quicksight_DataSetOutputColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/DataSetPermission:DataSetPermission
export function quicksight_DataSetPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMap:DataSetPhysicalTableMap
export function quicksight_DataSetPhysicalTableMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customSql = (depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapCustomSql(ctx, depth + 1));
  out.physicalTableMapId = h.id(ctx, "physicalTableMapId");
  out.relationalTable = (depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapRelationalTable(ctx, depth + 1));
  out.s3Source = (depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapS3Source(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapCustomSql:DataSetPhysicalTableMapCustomSql
export function quicksight_DataSetPhysicalTableMapCustomSql(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapCustomSqlColumn(ctx, depth + 1))]);
  out.dataSourceArn = h.arn(ctx);
  out.name = ctx.name;
  out.sqlQuery = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapCustomSqlColumn:DataSetPhysicalTableMapCustomSqlColumn
export function quicksight_DataSetPhysicalTableMapCustomSqlColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapRelationalTable:DataSetPhysicalTableMapRelationalTable
export function quicksight_DataSetPhysicalTableMapRelationalTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalog = "";
  out.dataSourceArn = h.arn(ctx);
  out.inputColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapRelationalTableInputColumn(ctx, depth + 1))]);
  out.name = ctx.name;
  out.schema = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapRelationalTableInputColumn:DataSetPhysicalTableMapRelationalTableInputColumn
export function quicksight_DataSetPhysicalTableMapRelationalTableInputColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapS3Source:DataSetPhysicalTableMapS3Source
export function quicksight_DataSetPhysicalTableMapS3Source(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceArn = h.arn(ctx);
  out.inputColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapS3SourceInputColumn(ctx, depth + 1))]);
  out.uploadSettings = (depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMapS3SourceUploadSettings(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapS3SourceInputColumn:DataSetPhysicalTableMapS3SourceInputColumn
export function quicksight_DataSetPhysicalTableMapS3SourceInputColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/DataSetPhysicalTableMapS3SourceUploadSettings:DataSetPhysicalTableMapS3SourceUploadSettings
export function quicksight_DataSetPhysicalTableMapS3SourceUploadSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containsHeader = false;
  out.delimiter = "";
  out.format = "";
  out.startFromRow = 0;
  out.textQualifier = "";
  return out;
}

// aws:quicksight/DataSetRefreshProperties:DataSetRefreshProperties
export function quicksight_DataSetRefreshProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.refreshConfiguration = (depth > 4 ? {} : T_quicksight.quicksight_DataSetRefreshPropertiesRefreshConfiguration(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetRefreshPropertiesRefreshConfiguration:DataSetRefreshPropertiesRefreshConfiguration
export function quicksight_DataSetRefreshPropertiesRefreshConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.incrementalRefresh = (depth > 4 ? {} : T_quicksight.quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh:DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh
export function quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lookbackWindow = (depth > 4 ? {} : T_quicksight.quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow:DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow
export function quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.size = 8;
  out.sizeUnit = "";
  return out;
}

// aws:quicksight/DataSetRowLevelPermissionDataSet:DataSetRowLevelPermissionDataSet
export function quicksight_DataSetRowLevelPermissionDataSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.formatVersion = "";
  out.namespace = "";
  out.permissionPolicy = "";
  out.status = "active";
  return out;
}

// aws:quicksight/DataSetRowLevelPermissionTagConfiguration:DataSetRowLevelPermissionTagConfiguration
export function quicksight_DataSetRowLevelPermissionTagConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.tagRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetRowLevelPermissionTagConfigurationTagRule(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/DataSetRowLevelPermissionTagConfigurationTagRule:DataSetRowLevelPermissionTagConfigurationTagRule
export function quicksight_DataSetRowLevelPermissionTagConfigurationTagRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.matchAllValue = "";
  out.tagKey = "";
  out.tagMultiValueDelimiter = "";
  return out;
}

// aws:quicksight/DataSourceCredentials:DataSourceCredentials
export function quicksight_DataSourceCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copySourceArn = h.arn(ctx);
  out.credentialPair = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceCredentialsCredentialPair(ctx, depth + 1));
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:quicksight/DataSourceCredentialsCredentialPair:DataSourceCredentialsCredentialPair
export function quicksight_DataSourceCredentialsCredentialPair(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.password = "";
  out.username = "";
  return out;
}

// aws:quicksight/DataSourceParameters:DataSourceParameters
export function quicksight_DataSourceParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonElasticsearch = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersAmazonElasticsearch(ctx, depth + 1));
  out.athena = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersAthena(ctx, depth + 1));
  out.aurora = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersAurora(ctx, depth + 1));
  out.auroraPostgresql = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersAuroraPostgresql(ctx, depth + 1));
  out.awsIotAnalytics = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersAwsIotAnalytics(ctx, depth + 1));
  out.databricks = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersDatabricks(ctx, depth + 1));
  out.jira = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersJira(ctx, depth + 1));
  out.mariaDb = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersMariaDb(ctx, depth + 1));
  out.mysql = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersMysql(ctx, depth + 1));
  out.oracle = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersOracle(ctx, depth + 1));
  out.postgresql = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersPostgresql(ctx, depth + 1));
  out.presto = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersPresto(ctx, depth + 1));
  out.rds = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersRds(ctx, depth + 1));
  out.redshift = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersRedshift(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersS3(ctx, depth + 1));
  out.serviceNow = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersServiceNow(ctx, depth + 1));
  out.snowflake = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersSnowflake(ctx, depth + 1));
  out.spark = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersSpark(ctx, depth + 1));
  out.sqlServer = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersSqlServer(ctx, depth + 1));
  out.teradata = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersTeradata(ctx, depth + 1));
  out.twitter = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersTwitter(ctx, depth + 1));
  return out;
}

// aws:quicksight/DataSourceParametersAmazonElasticsearch:DataSourceParametersAmazonElasticsearch
export function quicksight_DataSourceParametersAmazonElasticsearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  return out;
}

// aws:quicksight/DataSourceParametersAthena:DataSourceParametersAthena
export function quicksight_DataSourceParametersAthena(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.workGroup = "";
  return out;
}

// aws:quicksight/DataSourceParametersAurora:DataSourceParametersAurora
export function quicksight_DataSourceParametersAurora(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersAuroraPostgresql:DataSourceParametersAuroraPostgresql
export function quicksight_DataSourceParametersAuroraPostgresql(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersAwsIotAnalytics:DataSourceParametersAwsIotAnalytics
export function quicksight_DataSourceParametersAwsIotAnalytics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetName = "";
  return out;
}

// aws:quicksight/DataSourceParametersDatabricks:DataSourceParametersDatabricks
export function quicksight_DataSourceParametersDatabricks(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.port = 443;
  out.sqlEndpointPath = "";
  return out;
}

// aws:quicksight/DataSourceParametersJira:DataSourceParametersJira
export function quicksight_DataSourceParametersJira(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.siteBaseUrl = h.endpoint(ctx, "siteBaseUrl");
  return out;
}

// aws:quicksight/DataSourceParametersMariaDb:DataSourceParametersMariaDb
export function quicksight_DataSourceParametersMariaDb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersMysql:DataSourceParametersMysql
export function quicksight_DataSourceParametersMysql(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersOracle:DataSourceParametersOracle
export function quicksight_DataSourceParametersOracle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersPostgresql:DataSourceParametersPostgresql
export function quicksight_DataSourceParametersPostgresql(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersPresto:DataSourceParametersPresto
export function quicksight_DataSourceParametersPresto(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalog = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersRds:DataSourceParametersRds
export function quicksight_DataSourceParametersRds(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.instanceId = h.id(ctx, "instanceId");
  return out;
}

// aws:quicksight/DataSourceParametersRedshift:DataSourceParametersRedshift
export function quicksight_DataSourceParametersRedshift(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterId = h.id(ctx, "clusterId");
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersS3:DataSourceParametersS3
export function quicksight_DataSourceParametersS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.manifestFileLocation = (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParametersS3ManifestFileLocation(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:quicksight/DataSourceParametersS3ManifestFileLocation:DataSourceParametersS3ManifestFileLocation
export function quicksight_DataSourceParametersS3ManifestFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:quicksight/DataSourceParametersServiceNow:DataSourceParametersServiceNow
export function quicksight_DataSourceParametersServiceNow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.siteBaseUrl = h.endpoint(ctx, "siteBaseUrl");
  return out;
}

// aws:quicksight/DataSourceParametersSnowflake:DataSourceParametersSnowflake
export function quicksight_DataSourceParametersSnowflake(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.warehouse = "";
  return out;
}

// aws:quicksight/DataSourceParametersSpark:DataSourceParametersSpark
export function quicksight_DataSourceParametersSpark(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersSqlServer:DataSourceParametersSqlServer
export function quicksight_DataSourceParametersSqlServer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersTeradata:DataSourceParametersTeradata
export function quicksight_DataSourceParametersTeradata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:quicksight/DataSourceParametersTwitter:DataSourceParametersTwitter
export function quicksight_DataSourceParametersTwitter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRows = 0;
  out.query = "";
  return out;
}

// aws:quicksight/DataSourcePermission:DataSourcePermission
export function quicksight_DataSourcePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/DataSourceSslProperties:DataSourceSslProperties
export function quicksight_DataSourceSslProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disableSsl = false;
  return out;
}

// aws:quicksight/DataSourceVpcConnectionProperties:DataSourceVpcConnectionProperties
export function quicksight_DataSourceVpcConnectionProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcConnectionArn = h.arn(ctx);
  return out;
}

// aws:quicksight/FolderPermission:FolderPermission
export function quicksight_FolderPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/IamPolicyAssignmentIdentities:IamPolicyAssignmentIdentities
export function quicksight_IamPolicyAssignmentIdentities(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (depth > 4 ? [] : [""]);
  out.users = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/NamespaceTimeouts:NamespaceTimeouts
export function quicksight_NamespaceTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:quicksight/RefreshScheduleSchedule:RefreshScheduleSchedule
export function quicksight_RefreshScheduleSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.refreshType = "";
  out.scheduleFrequency = (depth > 4 ? {} : T_quicksight.quicksight_RefreshScheduleScheduleScheduleFrequency(ctx, depth + 1));
  out.startAfterDateTime = "";
  return out;
}

// aws:quicksight/RefreshScheduleScheduleScheduleFrequency:RefreshScheduleScheduleScheduleFrequency
export function quicksight_RefreshScheduleScheduleScheduleFrequency(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = "";
  out.refreshOnDay = (depth > 4 ? {} : T_quicksight.quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay(ctx, depth + 1));
  out.timeOfTheDay = "";
  out.timezone = "";
  return out;
}

// aws:quicksight/RefreshScheduleScheduleScheduleFrequencyRefreshOnDay:RefreshScheduleScheduleScheduleFrequencyRefreshOnDay
export function quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfMonth = "";
  out.dayOfWeek = "";
  return out;
}

// aws:quicksight/TemplatePermission:TemplatePermission
export function quicksight_TemplatePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/TemplateSourceEntity:TemplateSourceEntity
export function quicksight_TemplateSourceEntity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceAnalysis = (depth > 4 ? {} : T_quicksight.quicksight_TemplateSourceEntitySourceAnalysis(ctx, depth + 1));
  out.sourceTemplate = (depth > 4 ? {} : T_quicksight.quicksight_TemplateSourceEntitySourceTemplate(ctx, depth + 1));
  return out;
}

// aws:quicksight/TemplateSourceEntitySourceAnalysis:TemplateSourceEntitySourceAnalysis
export function quicksight_TemplateSourceEntitySourceAnalysis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_TemplateSourceEntitySourceAnalysisDataSetReference(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/TemplateSourceEntitySourceAnalysisDataSetReference:TemplateSourceEntitySourceAnalysisDataSetReference
export function quicksight_TemplateSourceEntitySourceAnalysisDataSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetArn = h.arn(ctx);
  out.dataSetPlaceholder = "";
  return out;
}

// aws:quicksight/TemplateSourceEntitySourceTemplate:TemplateSourceEntitySourceTemplate
export function quicksight_TemplateSourceEntitySourceTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:quicksight/ThemeConfiguration:ThemeConfiguration
export function quicksight_ThemeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataColorPalette = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationDataColorPalette(ctx, depth + 1));
  out.sheet = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheet(ctx, depth + 1));
  out.typography = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationTypography(ctx, depth + 1));
  out.uiColorPalette = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationUiColorPalette(ctx, depth + 1));
  return out;
}

// aws:quicksight/ThemeConfigurationDataColorPalette:ThemeConfigurationDataColorPalette
export function quicksight_ThemeConfigurationDataColorPalette(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.colors = (depth > 4 ? [] : [""]);
  out.emptyFillColor = "";
  out.minMaxGradients = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/ThemeConfigurationSheet:ThemeConfigurationSheet
export function quicksight_ThemeConfigurationSheet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tile = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheetTile(ctx, depth + 1));
  out.tileLayout = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheetTileLayout(ctx, depth + 1));
  return out;
}

// aws:quicksight/ThemeConfigurationSheetTile:ThemeConfigurationSheetTile
export function quicksight_ThemeConfigurationSheetTile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.border = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheetTileBorder(ctx, depth + 1));
  return out;
}

// aws:quicksight/ThemeConfigurationSheetTileBorder:ThemeConfigurationSheetTileBorder
export function quicksight_ThemeConfigurationSheetTileBorder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/ThemeConfigurationSheetTileLayout:ThemeConfigurationSheetTileLayout
export function quicksight_ThemeConfigurationSheetTileLayout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gutter = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheetTileLayoutGutter(ctx, depth + 1));
  out.margin = (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationSheetTileLayoutMargin(ctx, depth + 1));
  return out;
}

// aws:quicksight/ThemeConfigurationSheetTileLayoutGutter:ThemeConfigurationSheetTileLayoutGutter
export function quicksight_ThemeConfigurationSheetTileLayoutGutter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/ThemeConfigurationSheetTileLayoutMargin:ThemeConfigurationSheetTileLayoutMargin
export function quicksight_ThemeConfigurationSheetTileLayoutMargin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/ThemeConfigurationTypography:ThemeConfigurationTypography
export function quicksight_ThemeConfigurationTypography(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fontFamilies = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_ThemeConfigurationTypographyFontFamily(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/ThemeConfigurationTypographyFontFamily:ThemeConfigurationTypographyFontFamily
export function quicksight_ThemeConfigurationTypographyFontFamily(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fontFamily = "";
  return out;
}

// aws:quicksight/ThemeConfigurationUiColorPalette:ThemeConfigurationUiColorPalette
export function quicksight_ThemeConfigurationUiColorPalette(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accent = "";
  out.accentForeground = "";
  out.danger = "";
  out.dangerForeground = "";
  out.dimension = "";
  out.dimensionForeground = "";
  out.measure = "";
  out.measureForeground = "";
  out.primaryBackground = "";
  out.primaryForeground = "";
  out.secondaryBackground = "";
  out.secondaryForeground = "";
  out.success = "";
  out.successForeground = "";
  out.warning = "";
  out.warningForeground = "";
  return out;
}

// aws:quicksight/ThemePermission:ThemePermission
export function quicksight_ThemePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/VpcConnectionTimeouts:VpcConnectionTimeouts
export function quicksight_VpcConnectionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:quicksight/getAnalysisPermission:getAnalysisPermission
export function quicksight_getAnalysisPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/getDataSetColumnGroup:getDataSetColumnGroup
export function quicksight_getDataSetColumnGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.geoSpatialColumnGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetColumnGroupGeoSpatialColumnGroup(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetColumnGroupGeoSpatialColumnGroup:getDataSetColumnGroupGeoSpatialColumnGroup
export function quicksight_getDataSetColumnGroupGeoSpatialColumnGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [""]);
  out.countryCode = "";
  out.name = ctx.name;
  return out;
}

// aws:quicksight/getDataSetColumnLevelPermissionRule:getDataSetColumnLevelPermissionRule
export function quicksight_getDataSetColumnLevelPermissionRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnNames = (depth > 4 ? [] : [""]);
  out.principals = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/getDataSetDataSetUsageConfiguration:getDataSetDataSetUsageConfiguration
export function quicksight_getDataSetDataSetUsageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disableUseAsDirectQuerySource = false;
  out.disableUseAsImportedSource = false;
  return out;
}

// aws:quicksight/getDataSetFieldFolder:getDataSetFieldFolder
export function quicksight_getDataSetFieldFolder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [""]);
  out.description = "";
  out.fieldFoldersId = h.id(ctx, "fieldFoldersId");
  return out;
}

// aws:quicksight/getDataSetLogicalTableMap:getDataSetLogicalTableMap
export function quicksight_getDataSetLogicalTableMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = "";
  out.dataTransforms = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransform(ctx, depth + 1))]);
  out.logicalTableMapId = h.id(ctx, "logicalTableMapId");
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapSource(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransform:getDataSetLogicalTableMapDataTransform
export function quicksight_getDataSetLogicalTableMapDataTransform(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.castColumnTypeOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation(ctx, depth + 1))]);
  out.createColumnsOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation(ctx, depth + 1))]);
  out.filterOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformFilterOperation(ctx, depth + 1))]);
  out.projectOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformProjectOperation(ctx, depth + 1))]);
  out.renameColumnOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation(ctx, depth + 1))]);
  out.tagColumnOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation(ctx, depth + 1))]);
  out.untagColumnOperations = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformCastColumnTypeOperation:getDataSetLogicalTableMapDataTransformCastColumnTypeOperation
export function quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.format = "";
  out.newColumnType = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformCreateColumnsOperation:getDataSetLogicalTableMapDataTransformCreateColumnsOperation
export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn:getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn
export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnId = h.id(ctx, "columnId");
  out.columnName = "";
  out.expression = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformFilterOperation:getDataSetLogicalTableMapDataTransformFilterOperation
export function quicksight_getDataSetLogicalTableMapDataTransformFilterOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionExpression = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformProjectOperation:getDataSetLogicalTableMapDataTransformProjectOperation
export function quicksight_getDataSetLogicalTableMapDataTransformProjectOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.projectedColumns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformRenameColumnOperation:getDataSetLogicalTableMapDataTransformRenameColumnOperation
export function quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.newColumnName = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformTagColumnOperation:getDataSetLogicalTableMapDataTransformTagColumnOperation
export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformTagColumnOperationTag:getDataSetLogicalTableMapDataTransformTagColumnOperationTag
export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnDescriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription(ctx, depth + 1))]);
  out.columnGeographicRole = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription:getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription
export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapDataTransformUntagColumnOperation:getDataSetLogicalTableMapDataTransformUntagColumnOperation
export function quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.tagNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapSource:getDataSetLogicalTableMapSource
export function quicksight_getDataSetLogicalTableMapSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSetArn = h.arn(ctx);
  out.joinInstructions = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapSourceJoinInstruction(ctx, depth + 1))]);
  out.physicalTableId = h.id(ctx, "physicalTableId");
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapSourceJoinInstruction:getDataSetLogicalTableMapSourceJoinInstruction
export function quicksight_getDataSetLogicalTableMapSourceJoinInstruction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.leftJoinKeyProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty(ctx, depth + 1))]);
  out.leftOperand = "";
  out.onClause = "";
  out.rightJoinKeyProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty(ctx, depth + 1))]);
  out.rightOperand = "";
  out.type = "";
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty:getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty
export function quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uniqueKey = false;
  return out;
}

// aws:quicksight/getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty:getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty
export function quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uniqueKey = false;
  return out;
}

// aws:quicksight/getDataSetPermission:getDataSetPermission
export function quicksight_getDataSetPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMap:getDataSetPhysicalTableMap
export function quicksight_getDataSetPhysicalTableMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customSqls = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapCustomSql(ctx, depth + 1))]);
  out.physicalTableMapId = h.id(ctx, "physicalTableMapId");
  out.relationalTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapRelationalTable(ctx, depth + 1))]);
  out.s3Sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapS3Source(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapCustomSql:getDataSetPhysicalTableMapCustomSql
export function quicksight_getDataSetPhysicalTableMapCustomSql(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapCustomSqlColumn(ctx, depth + 1))]);
  out.dataSourceArn = h.arn(ctx);
  out.name = ctx.name;
  out.sqlQuery = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapCustomSqlColumn:getDataSetPhysicalTableMapCustomSqlColumn
export function quicksight_getDataSetPhysicalTableMapCustomSqlColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapRelationalTable:getDataSetPhysicalTableMapRelationalTable
export function quicksight_getDataSetPhysicalTableMapRelationalTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalog = "";
  out.dataSourceArn = h.arn(ctx);
  out.inputColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn(ctx, depth + 1))]);
  out.name = ctx.name;
  out.schema = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapRelationalTableInputColumn:getDataSetPhysicalTableMapRelationalTableInputColumn
export function quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapS3Source:getDataSetPhysicalTableMapS3Source
export function quicksight_getDataSetPhysicalTableMapS3Source(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceArn = h.arn(ctx);
  out.inputColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapS3SourceInputColumn(ctx, depth + 1))]);
  out.uploadSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapS3SourceInputColumn:getDataSetPhysicalTableMapS3SourceInputColumn
export function quicksight_getDataSetPhysicalTableMapS3SourceInputColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:quicksight/getDataSetPhysicalTableMapS3SourceUploadSetting:getDataSetPhysicalTableMapS3SourceUploadSetting
export function quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containsHeader = false;
  out.delimiter = "";
  out.format = "";
  out.startFromRow = 0;
  out.textQualifier = "";
  return out;
}

// aws:quicksight/getDataSetRowLevelPermissionDataSet:getDataSetRowLevelPermissionDataSet
export function quicksight_getDataSetRowLevelPermissionDataSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.formatVersion = "";
  out.namespace = "";
  out.permissionPolicy = "";
  out.status = "active";
  return out;
}

// aws:quicksight/getDataSetRowLevelPermissionTagConfiguration:getDataSetRowLevelPermissionTagConfiguration
export function quicksight_getDataSetRowLevelPermissionTagConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.tagRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getDataSetRowLevelPermissionTagConfigurationTagRule:getDataSetRowLevelPermissionTagConfigurationTagRule
export function quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnName = "";
  out.matchAllValue = "";
  out.tagKey = "";
  out.tagMultiValueDelimiter = "";
  return out;
}

// aws:quicksight/getQuicksightAnalysisPermission:getQuicksightAnalysisPermission
export function quicksight_getQuicksightAnalysisPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// aws:quicksight/getThemeConfiguration:getThemeConfiguration
export function quicksight_getThemeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataColorPalettes = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationDataColorPalette(ctx, depth + 1))]);
  out.sheets = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheet(ctx, depth + 1))]);
  out.typographies = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationTypography(ctx, depth + 1))]);
  out.uiColorPalettes = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationUiColorPalette(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getThemeConfigurationDataColorPalette:getThemeConfigurationDataColorPalette
export function quicksight_getThemeConfigurationDataColorPalette(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.colors = (depth > 4 ? [] : [""]);
  out.emptyFillColor = "";
  out.minMaxGradients = (depth > 4 ? [] : [""]);
  return out;
}

// aws:quicksight/getThemeConfigurationSheet:getThemeConfigurationSheet
export function quicksight_getThemeConfigurationSheet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tileLayouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheetTileLayout(ctx, depth + 1))]);
  out.tiles = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheetTile(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getThemeConfigurationSheetTile:getThemeConfigurationSheetTile
export function quicksight_getThemeConfigurationSheetTile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.borders = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheetTileBorder(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getThemeConfigurationSheetTileBorder:getThemeConfigurationSheetTileBorder
export function quicksight_getThemeConfigurationSheetTileBorder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/getThemeConfigurationSheetTileLayout:getThemeConfigurationSheetTileLayout
export function quicksight_getThemeConfigurationSheetTileLayout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gutters = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheetTileLayoutGutter(ctx, depth + 1))]);
  out.margins = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationSheetTileLayoutMargin(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getThemeConfigurationSheetTileLayoutGutter:getThemeConfigurationSheetTileLayoutGutter
export function quicksight_getThemeConfigurationSheetTileLayoutGutter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/getThemeConfigurationSheetTileLayoutMargin:getThemeConfigurationSheetTileLayoutMargin
export function quicksight_getThemeConfigurationSheetTileLayoutMargin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.show = false;
  return out;
}

// aws:quicksight/getThemeConfigurationTypography:getThemeConfigurationTypography
export function quicksight_getThemeConfigurationTypography(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fontFamilies = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_getThemeConfigurationTypographyFontFamily(ctx, depth + 1))]);
  return out;
}

// aws:quicksight/getThemeConfigurationTypographyFontFamily:getThemeConfigurationTypographyFontFamily
export function quicksight_getThemeConfigurationTypographyFontFamily(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fontFamily = "";
  return out;
}

// aws:quicksight/getThemeConfigurationUiColorPalette:getThemeConfigurationUiColorPalette
export function quicksight_getThemeConfigurationUiColorPalette(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accent = "";
  out.accentForeground = "";
  out.danger = "";
  out.dangerForeground = "";
  out.dimension = "";
  out.dimensionForeground = "";
  out.measure = "";
  out.measureForeground = "";
  out.primaryBackground = "";
  out.primaryForeground = "";
  out.secondaryBackground = "";
  out.secondaryForeground = "";
  out.success = "";
  out.successForeground = "";
  out.warning = "";
  out.warningForeground = "";
  return out;
}

// aws:quicksight/getThemePermission:getThemePermission
export function quicksight_getThemePermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.principal = "";
  return out;
}

// GENERATED FILE — do not edit.
// Service: kinesisanalyticsv2   (43 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kinesisanalyticsv2 from "./kinesisanalyticsv2.js";

// aws:kinesisanalyticsv2/ApplicationApplicationConfiguration:ApplicationApplicationConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationCodeConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration(ctx, depth + 1));
  out.applicationSnapshotConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration(ctx, depth + 1));
  out.environmentProperties = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties(ctx, depth + 1));
  out.flinkApplicationConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration(ctx, depth + 1));
  out.runConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration(ctx, depth + 1));
  out.sqlApplicationConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration(ctx, depth + 1));
  out.vpcConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationApplicationCodeConfiguration:ApplicationApplicationConfigurationApplicationCodeConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeContent = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent(ctx, depth + 1));
  out.codeContentType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent:ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent
export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3ContentLocation = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation(ctx, depth + 1));
  out.textContent = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation:ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation
export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.fileKey = "";
  out.objectVersion = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationApplicationSnapshotConfiguration:ApplicationApplicationConfigurationApplicationSnapshotConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snapshotsEnabled = false;
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationEnvironmentProperties:ApplicationApplicationConfigurationEnvironmentProperties
export function kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.propertyGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup(ctx, depth + 1))]);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup:ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup
export function kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.propertyGroupId = h.id(ctx, "propertyGroupId");
  out.propertyMap = {};
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationFlinkApplicationConfiguration:ApplicationApplicationConfigurationFlinkApplicationConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.checkpointConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration(ctx, depth + 1));
  out.monitoringConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration(ctx, depth + 1));
  out.parallelismConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration:ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.checkpointInterval = 0;
  out.checkpointingEnabled = false;
  out.configurationType = "";
  out.minPauseBetweenCheckpoints = 0;
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration:ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationType = "";
  out.logLevel = "";
  out.metricsLevel = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration:ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoScalingEnabled = false;
  out.configurationType = "";
  out.parallelism = 0;
  out.parallelismPerKpu = 0;
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationRunConfiguration:ApplicationApplicationConfigurationRunConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationRestoreConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration(ctx, depth + 1));
  out.flinkRunConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration:ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationRestoreType = "";
  out.snapshotName = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration:ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowNonRestoredState = true;
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfiguration:ApplicationApplicationConfigurationSqlApplicationConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.input = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput(ctx, depth + 1));
  out.outputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput(ctx, depth + 1))]);
  out.referenceDataSource = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInput:ApplicationApplicationConfigurationSqlApplicationConfigurationInput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inAppStreamNames = (depth > 4 ? [] : [""]);
  out.inputId = h.id(ctx, "inputId");
  out.inputParallelism = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism(ctx, depth + 1));
  out.inputProcessingConfiguration = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration(ctx, depth + 1));
  out.inputSchema = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema(ctx, depth + 1));
  out.inputStartingPositionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration(ctx, depth + 1))]);
  out.kinesisFirehoseInput = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput(ctx, depth + 1));
  out.kinesisStreamsInput = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput(ctx, depth + 1));
  out.namePrefix = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputLambdaProcessor = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn(ctx, depth + 1))]);
  out.recordEncoding = "";
  out.recordFormat = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapping = "";
  out.name = ctx.name;
  out.sqlType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters(ctx, depth + 1));
  out.recordFormatType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csvMappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters(ctx, depth + 1));
  out.jsonMappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumnDelimiter = "";
  out.recordRowDelimiter = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordRowPath = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration:ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputStartingPosition = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput:ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput:ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationOutput:ApplicationApplicationConfigurationSqlApplicationConfigurationOutput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationSchema = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema(ctx, depth + 1));
  out.kinesisFirehoseOutput = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput(ctx, depth + 1));
  out.kinesisStreamsOutput = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput(ctx, depth + 1));
  out.lambdaOutput = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput(ctx, depth + 1));
  out.name = ctx.name;
  out.outputId = h.id(ctx, "outputId");
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema:ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordFormatType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput:ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput:ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput:ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.referenceId = h.id(ctx, "referenceId");
  out.referenceSchema = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema(ctx, depth + 1));
  out.s3ReferenceDataSource = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource(ctx, depth + 1));
  out.tableName = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn(ctx, depth + 1))]);
  out.recordEncoding = "";
  out.recordFormat = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapping = "";
  out.name = ctx.name;
  out.sqlType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters(ctx, depth + 1));
  out.recordFormatType = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csvMappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters(ctx, depth + 1));
  out.jsonMappingParameters = (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters(ctx, depth + 1));
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumnDelimiter = "";
  out.recordRowDelimiter = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordRowPath = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource:ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource
export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.fileKey = "";
  return out;
}

// aws:kinesisanalyticsv2/ApplicationApplicationConfigurationVpcConfiguration:ApplicationApplicationConfigurationVpcConfiguration
export function kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcConfigurationId = h.id(ctx, "vpcConfigurationId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:kinesisanalyticsv2/ApplicationCloudwatchLoggingOptions:ApplicationCloudwatchLoggingOptions
export function kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLoggingOptionId = h.id(ctx, "cloudwatchLoggingOptionId");
  out.logStreamArn = h.arn(ctx);
  return out;
}

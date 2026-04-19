// GENERATED FILE — do not edit.
// Service: kinesis   (122 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kinesis from "./kinesis.js";

// aws:kinesis/AnalyticsApplicationCloudwatchLoggingOptions:AnalyticsApplicationCloudwatchLoggingOptions
export function kinesis_AnalyticsApplicationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.logStreamArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationInputs:AnalyticsApplicationInputs
export function kinesis_AnalyticsApplicationInputs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.kinesisFirehose = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsKinesisFirehose(ctx, depth + 1));
  out.kinesisStream = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsKinesisStream(ctx, depth + 1));
  out.namePrefix = "";
  out.parallelism = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsParallelism(ctx, depth + 1));
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsProcessingConfiguration(ctx, depth + 1));
  out.schema = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchema(ctx, depth + 1));
  out.startingPositionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsStartingPositionConfiguration(ctx, depth + 1))]);
  out.streamNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsKinesisFirehose:AnalyticsApplicationInputsKinesisFirehose
export function kinesis_AnalyticsApplicationInputsKinesisFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsKinesisStream:AnalyticsApplicationInputsKinesisStream
export function kinesis_AnalyticsApplicationInputsKinesisStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsParallelism:AnalyticsApplicationInputsParallelism
export function kinesis_AnalyticsApplicationInputsParallelism(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsProcessingConfiguration:AnalyticsApplicationInputsProcessingConfiguration
export function kinesis_AnalyticsApplicationInputsProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambda = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsProcessingConfigurationLambda:AnalyticsApplicationInputsProcessingConfigurationLambda
export function kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchema:AnalyticsApplicationInputsSchema
export function kinesis_AnalyticsApplicationInputsSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchemaRecordColumn(ctx, depth + 1))]);
  out.recordEncoding = "";
  out.recordFormat = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchemaRecordFormat(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchemaRecordColumn:AnalyticsApplicationInputsSchemaRecordColumn
export function kinesis_AnalyticsApplicationInputsSchemaRecordColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapping = "";
  out.name = ctx.name;
  out.sqlType = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchemaRecordFormat:AnalyticsApplicationInputsSchemaRecordFormat
export function kinesis_AnalyticsApplicationInputsSchemaRecordFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mappingParameters = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters(ctx, depth + 1));
  out.recordFormatType = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchemaRecordFormatMappingParameters:AnalyticsApplicationInputsSchemaRecordFormatMappingParameters
export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csv = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv(ctx, depth + 1));
  out.json = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv:AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv
export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumnDelimiter = "";
  out.recordRowDelimiter = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson:AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson
export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordRowPath = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationInputsStartingPositionConfiguration:AnalyticsApplicationInputsStartingPositionConfiguration
export function kinesis_AnalyticsApplicationInputsStartingPositionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.startingPosition = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationOutput:AnalyticsApplicationOutput
export function kinesis_AnalyticsApplicationOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.kinesisFirehose = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationOutputKinesisFirehose(ctx, depth + 1));
  out.kinesisStream = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationOutputKinesisStream(ctx, depth + 1));
  out.lambda = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationOutputLambda(ctx, depth + 1));
  out.name = ctx.name;
  out.schema = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationOutputSchema(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationOutputKinesisFirehose:AnalyticsApplicationOutputKinesisFirehose
export function kinesis_AnalyticsApplicationOutputKinesisFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationOutputKinesisStream:AnalyticsApplicationOutputKinesisStream
export function kinesis_AnalyticsApplicationOutputKinesisStream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationOutputLambda:AnalyticsApplicationOutputLambda
export function kinesis_AnalyticsApplicationOutputLambda(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationOutputSchema:AnalyticsApplicationOutputSchema
export function kinesis_AnalyticsApplicationOutputSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordFormatType = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSources:AnalyticsApplicationReferenceDataSources
export function kinesis_AnalyticsApplicationReferenceDataSources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.s3 = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesS3(ctx, depth + 1));
  out.schema = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchema(ctx, depth + 1));
  out.tableName = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesS3:AnalyticsApplicationReferenceDataSourcesS3
export function kinesis_AnalyticsApplicationReferenceDataSourcesS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.fileKey = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchema:AnalyticsApplicationReferenceDataSourcesSchema
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn(ctx, depth + 1))]);
  out.recordEncoding = "";
  out.recordFormat = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn:AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mapping = "";
  out.name = ctx.name;
  out.sqlType = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat:AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mappingParameters = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters(ctx, depth + 1));
  out.recordFormatType = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters:AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csv = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv(ctx, depth + 1));
  out.json = (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson(ctx, depth + 1));
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv:AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordColumnDelimiter = "";
  out.recordRowDelimiter = "";
  return out;
}

// aws:kinesis/AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson:AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson
export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recordRowPath = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfiguration:FirehoseDeliveryStreamElasticsearchConfiguration
export function kinesis_FirehoseDeliveryStreamElasticsearchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.clusterEndpoint = h.endpoint(ctx, "clusterEndpoint");
  out.domainArn = h.arn(ctx);
  out.indexName = "";
  out.indexRotationPeriod = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationS3Configuration(ctx, depth + 1));
  out.typeName = "";
  out.vpcConfig = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationVpcConfig(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration:FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationS3Configuration:FirehoseDeliveryStreamElasticsearchConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamElasticsearchConfigurationVpcConfig:FirehoseDeliveryStreamElasticsearchConfigurationVpcConfig
export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3Configuration:FirehoseDeliveryStreamExtendedS3Configuration
export function kinesis_FirehoseDeliveryStreamExtendedS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.customTimeZone = "";
  out.dataFormatConversionConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration(ctx, depth + 1));
  out.dynamicPartitioningConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration(ctx, depth + 1));
  out.errorOutputPrefix = "";
  out.fileExtension = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  out.s3BackupConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration(ctx, depth + 1));
  out.s3BackupMode = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.inputFormatConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration(ctx, depth + 1));
  out.outputFormatConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration(ctx, depth + 1));
  out.schemaConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deserializer = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hiveJsonSerDe = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe(ctx, depth + 1));
  out.openXJsonSerDe = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.timestampFormats = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.caseInsensitive = false;
  out.columnToJsonKeyMappings = {};
  out.convertDotsInJsonKeysToUnderscores = false;
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serializer = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.orcSerDe = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe(ctx, depth + 1));
  out.parquetSerDe = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockSizeBytes = 8;
  out.bloomFilterColumns = (depth > 4 ? [] : [""]);
  out.bloomFilterFalsePositiveProbability = 0;
  out.compression = "";
  out.dictionaryKeyThreshold = 0;
  out.enablePadding = true;
  out.formatVersion = "";
  out.paddingTolerance = 0;
  out.rowIndexStride = 0;
  out.stripeSizeBytes = 8;
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockSizeBytes = 8;
  out.compression = "";
  out.enableDictionaryCompression = true;
  out.maxPaddingBytes = 0;
  out.pageSizeBytes = 8;
  out.writerVersion = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalogId = h.id(ctx, "catalogId");
  out.databaseName = "";
  out.region = ctx.region;
  out.roleArn = h.arn(ctx);
  out.tableName = "";
  out.versionId = h.id(ctx, "versionId");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.retryDuration = 0;
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration:FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfiguration:FirehoseDeliveryStreamHttpEndpointConfiguration
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKey = "";
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.name = ctx.name;
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration(ctx, depth + 1));
  out.requestConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration(ctx, depth + 1));
  out.secretsManagerConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration(ctx, depth + 1));
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration:FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration:FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commonAttributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute(ctx, depth + 1))]);
  out.contentEncoding = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute:FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration:FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration:FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration
export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.roleArn = h.arn(ctx);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfiguration:FirehoseDeliveryStreamIcebergConfiguration
export function kinesis_FirehoseDeliveryStreamIcebergConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.catalogArn = h.arn(ctx);
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.destinationTableConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration(ctx, depth + 1))]);
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationS3Configuration(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration:FirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.s3ErrorOutputPrefix = "";
  out.tableName = "";
  out.uniqueKeys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration:FirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationS3Configuration:FirehoseDeliveryStreamIcebergConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamKinesisSourceConfiguration:FirehoseDeliveryStreamKinesisSourceConfiguration
export function kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisStreamArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamMskSourceConfiguration:FirehoseDeliveryStreamMskSourceConfiguration
export function kinesis_FirehoseDeliveryStreamMskSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration(ctx, depth + 1));
  out.mskClusterArn = h.arn(ctx);
  out.readFromTimestamp = "";
  out.topicName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration:FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration
export function kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectivity = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfiguration:FirehoseDeliveryStreamOpensearchConfiguration
export function kinesis_FirehoseDeliveryStreamOpensearchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.clusterEndpoint = h.endpoint(ctx, "clusterEndpoint");
  out.documentIdOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions(ctx, depth + 1));
  out.domainArn = h.arn(ctx);
  out.indexName = "";
  out.indexRotationPeriod = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration(ctx, depth + 1));
  out.typeName = "";
  out.vpcConfig = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions:FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultDocumentIdFormat = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration:FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationS3Configuration:FirehoseDeliveryStreamOpensearchConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchConfigurationVpcConfig:FirehoseDeliveryStreamOpensearchConfigurationVpcConfig
export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfiguration:FirehoseDeliveryStreamOpensearchserverlessConfiguration
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.collectionEndpoint = h.endpoint(ctx, "collectionEndpoint");
  out.indexName = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration(ctx, depth + 1));
  out.vpcConfig = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration:FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration:FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig:FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig
export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfiguration:FirehoseDeliveryStreamRedshiftConfiguration
export function kinesis_FirehoseDeliveryStreamRedshiftConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.clusterJdbcurl = h.endpoint(ctx, "clusterJdbcurl");
  out.copyOptions = "";
  out.dataTableColumns = "";
  out.dataTableName = "";
  out.password = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration(ctx, depth + 1));
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration(ctx, depth + 1));
  out.secretsManagerConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration(ctx, depth + 1));
  out.username = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration:FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration:FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationS3Configuration:FirehoseDeliveryStreamRedshiftConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration:FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration
export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.roleArn = h.arn(ctx);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamServerSideEncryption:FirehoseDeliveryStreamServerSideEncryption
export function kinesis_FirehoseDeliveryStreamServerSideEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.keyArn = h.arn(ctx);
  out.keyType = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfiguration:FirehoseDeliveryStreamSnowflakeConfiguration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountUrl = h.endpoint(ctx, "accountUrl");
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.contentColumnName = "";
  out.dataLoadingOption = "";
  out.database = "";
  out.keyPassphrase = "";
  out.metadataColumnName = "";
  out.privateKey = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.roleArn = h.arn(ctx);
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration(ctx, depth + 1));
  out.schema = "";
  out.secretsManagerConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration(ctx, depth + 1));
  out.snowflakeRoleConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration(ctx, depth + 1));
  out.snowflakeVpcConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration(ctx, depth + 1));
  out.table = "";
  out.user = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration:FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration:FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration:FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.roleArn = h.arn(ctx);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration:FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.snowflakeRole = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration:FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration
export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privateLinkVpceId = h.id(ctx, "privateLinkVpceId");
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfiguration:FirehoseDeliveryStreamSplunkConfiguration
export function kinesis_FirehoseDeliveryStreamSplunkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.hecAcknowledgmentTimeout = 30;
  out.hecEndpoint = h.endpoint(ctx, "hecEndpoint");
  out.hecEndpointType = "";
  out.hecToken = "";
  out.processingConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration(ctx, depth + 1));
  out.retryDuration = 0;
  out.s3BackupMode = "";
  out.s3Configuration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration(ctx, depth + 1));
  out.secretsManagerConfiguration = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration(ctx, depth + 1));
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration:FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.processors = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor(ctx, depth + 1))]);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor:FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorParameter(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorParameter:FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorParameter
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterName = "";
  out.parameterValue = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationS3Configuration:FirehoseDeliveryStreamSplunkConfigurationS3Configuration
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketArn = h.arn(ctx);
  out.bufferingInterval = 0;
  out.bufferingSize = 8;
  out.cloudwatchLoggingOptions = (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx, depth + 1));
  out.compressionFormat = "";
  out.errorOutputPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  out.prefix = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions:FirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroupName = "";
  out.logStreamName = "";
  return out;
}

// aws:kinesis/FirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration:FirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration
export function kinesis_FirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.roleArn = h.arn(ctx);
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:kinesis/StreamStreamModeDetails:StreamStreamModeDetails
export function kinesis_StreamStreamModeDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamMode = "";
  return out;
}

// aws:kinesis/getStreamStreamModeDetail:getStreamStreamModeDetail
export function kinesis_getStreamStreamModeDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamMode = "";
  return out;
}

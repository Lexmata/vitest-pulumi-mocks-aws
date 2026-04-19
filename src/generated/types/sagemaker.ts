// GENERATED FILE — do not edit.
// Service: sagemaker   (239 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sagemaker from "./sagemaker.js";

// aws:sagemaker/AppImageConfigCodeEditorAppImageConfig:AppImageConfigCodeEditorAppImageConfig
export function sagemaker_AppImageConfigCodeEditorAppImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig(ctx, depth + 1));
  out.fileSystemConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/AppImageConfigCodeEditorAppImageConfigContainerConfig:AppImageConfigCodeEditorAppImageConfigContainerConfig
export function sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerArguments = (depth > 4 ? [] : [""]);
  out.containerEntrypoints = (depth > 4 ? [] : [""]);
  out.containerEnvironmentVariables = {};
  return out;
}

// aws:sagemaker/AppImageConfigCodeEditorAppImageConfigFileSystemConfig:AppImageConfigCodeEditorAppImageConfigFileSystemConfig
export function sagemaker_AppImageConfigCodeEditorAppImageConfigFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultGid = 0;
  out.defaultUid = 0;
  out.mountPath = "";
  return out;
}

// aws:sagemaker/AppImageConfigJupyterLabImageConfig:AppImageConfigJupyterLabImageConfig
export function sagemaker_AppImageConfigJupyterLabImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig(ctx, depth + 1));
  out.fileSystemConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/AppImageConfigJupyterLabImageConfigContainerConfig:AppImageConfigJupyterLabImageConfigContainerConfig
export function sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerArguments = (depth > 4 ? [] : [""]);
  out.containerEntrypoints = (depth > 4 ? [] : [""]);
  out.containerEnvironmentVariables = {};
  return out;
}

// aws:sagemaker/AppImageConfigJupyterLabImageConfigFileSystemConfig:AppImageConfigJupyterLabImageConfigFileSystemConfig
export function sagemaker_AppImageConfigJupyterLabImageConfigFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultGid = 0;
  out.defaultUid = 0;
  out.mountPath = "";
  return out;
}

// aws:sagemaker/AppImageConfigKernelGatewayImageConfig:AppImageConfigKernelGatewayImageConfig
export function sagemaker_AppImageConfigKernelGatewayImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig(ctx, depth + 1));
  out.kernelSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/AppImageConfigKernelGatewayImageConfigFileSystemConfig:AppImageConfigKernelGatewayImageConfigFileSystemConfig
export function sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultGid = 0;
  out.defaultUid = 0;
  out.mountPath = "";
  return out;
}

// aws:sagemaker/AppImageConfigKernelGatewayImageConfigKernelSpec:AppImageConfigKernelGatewayImageConfigKernelSpec
export function sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayName = "";
  out.name = ctx.name;
  return out;
}

// aws:sagemaker/AppResourceSpec:AppResourceSpec
export function sagemaker_AppResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/CodeRepositoryGitConfig:CodeRepositoryGitConfig
export function sagemaker_CodeRepositoryGitConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branch = "";
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  out.secretArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityAppSpecification:DataQualityJobDefinitionDataQualityAppSpecification
export function sagemaker_DataQualityJobDefinitionDataQualityAppSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.environment = {};
  out.imageUri = h.endpoint(ctx, "imageUri");
  out.postAnalyticsProcessorSourceUri = h.endpoint(ctx, "postAnalyticsProcessorSourceUri");
  out.recordPreprocessorSourceUri = h.endpoint(ctx, "recordPreprocessorSourceUri");
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityBaselineConfig:DataQualityJobDefinitionDataQualityBaselineConfig
export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.constraintsResource = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource(ctx, depth + 1));
  out.statisticsResource = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource:DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource:DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInput:DataQualityJobDefinitionDataQualityJobInput
export function sagemaker_DataQualityJobDefinitionDataQualityJobInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchTransformInput = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput(ctx, depth + 1));
  out.endpointInput = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInputBatchTransformInput:DataQualityJobDefinitionDataQualityJobInputBatchTransformInput
export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataCapturedDestinationS3Uri = h.endpoint(ctx, "dataCapturedDestinationS3Uri");
  out.datasetFormat = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat(ctx, depth + 1));
  out.localPath = "";
  out.s3DataDistributionType = "";
  out.s3InputMode = "";
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat:DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csv = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv(ctx, depth + 1));
  out.json = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv:DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = false;
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson:DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.line = false;
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobInputEndpointInput:DataQualityJobDefinitionDataQualityJobInputEndpointInput
export function sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointName = "";
  out.localPath = "";
  out.s3DataDistributionType = "";
  out.s3InputMode = "";
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobOutputConfig:DataQualityJobDefinitionDataQualityJobOutputConfig
export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.monitoringOutputs = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs:DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs
export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Output = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output:DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
export function sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.localPath = "";
  out.s3UploadMode = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionJobResources:DataQualityJobDefinitionJobResources
export function sagemaker_DataQualityJobDefinitionJobResources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionJobResourcesClusterConfig:DataQualityJobDefinitionJobResourcesClusterConfig
export function sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceCount = 1;
  out.instanceType = "";
  out.volumeKmsKeyId = h.id(ctx, "volumeKmsKeyId");
  out.volumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionNetworkConfig:DataQualityJobDefinitionNetworkConfig
export function sagemaker_DataQualityJobDefinitionNetworkConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableInterContainerTrafficEncryption = true;
  out.enableNetworkIsolation = true;
  out.vpcConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionNetworkConfigVpcConfig:DataQualityJobDefinitionNetworkConfigVpcConfig
export function sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DataQualityJobDefinitionStoppingCondition:DataQualityJobDefinitionStoppingCondition
export function sagemaker_DataQualityJobDefinitionStoppingCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRuntimeInSeconds = 0;
  return out;
}

// aws:sagemaker/DeviceDevice:DeviceDevice
export function sagemaker_DeviceDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.deviceName = "";
  out.iotThingName = "";
  return out;
}

// aws:sagemaker/DeviceFleetOutputConfig:DeviceFleetOutputConfig
export function sagemaker_DeviceFleetOutputConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.s3OutputLocation = "";
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettings:DomainDefaultSpaceSettings
export function sagemaker_DomainDefaultSpaceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customFileSystemConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsCustomFileSystemConfig(ctx, depth + 1))]);
  out.customPosixUserConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsCustomPosixUserConfig(ctx, depth + 1));
  out.executionRole = "";
  out.jupyterLabAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettings(ctx, depth + 1));
  out.jupyterServerAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings(ctx, depth + 1));
  out.kernelGatewayAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings(ctx, depth + 1));
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.spaceStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsSpaceStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsCustomFileSystemConfig:DomainDefaultSpaceSettingsCustomFileSystemConfig
export function sagemaker_DomainDefaultSpaceSettingsCustomFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileSystemConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig:DomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig
export function sagemaker_DomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.fileSystemPath = "";
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsCustomPosixUserConfig:DomainDefaultSpaceSettingsCustomPosixUserConfig
export function sagemaker_DomainDefaultSpaceSettingsCustomPosixUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.uid = 0;
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettings:DomainDefaultSpaceSettingsJupyterLabAppSettings
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.builtInLifecycleConfigArn = h.arn(ctx);
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository(ctx, depth + 1))]);
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.emrSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement:DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings:DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  out.lifecycleManagement = "";
  out.maxIdleTimeoutInMinutes = 30;
  out.minIdleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository:DomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage:DomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec:DomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings:DomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings
export function sagemaker_DomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assumableRoleArns = (depth > 4 ? [] : [""]);
  out.executionRoleArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterServerAppSettings:DomainDefaultSpaceSettingsJupyterServerAppSettings
export function sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository:DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository
export function sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec:DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsKernelGatewayAppSettings:DomainDefaultSpaceSettingsKernelGatewayAppSettings
export function sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage:DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage
export function sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec:DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsSpaceStorageSettings:DomainDefaultSpaceSettingsSpaceStorageSettings
export function sagemaker_DomainDefaultSpaceSettingsSpaceStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings:DomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings
export function sagemaker_DomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsVolumeSizeInGb = 8;
  out.maximumEbsVolumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettings:DomainDefaultUserSettings
export function sagemaker_DomainDefaultUserSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoMountHomeEfs = "";
  out.canvasAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettings(ctx, depth + 1));
  out.codeEditorAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings(ctx, depth + 1));
  out.customFileSystemConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig(ctx, depth + 1))]);
  out.customPosixUserConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig(ctx, depth + 1));
  out.defaultLandingUri = h.endpoint(ctx, "defaultLandingUri");
  out.executionRole = "";
  out.jupyterLabAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings(ctx, depth + 1));
  out.jupyterServerAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings(ctx, depth + 1));
  out.kernelGatewayAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings(ctx, depth + 1));
  out.rSessionAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsRSessionAppSettings(ctx, depth + 1));
  out.rStudioServerProAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings(ctx, depth + 1));
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.sharingSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsSharingSettings(ctx, depth + 1));
  out.spaceStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsSpaceStorageSettings(ctx, depth + 1));
  out.studioWebPortal = "";
  out.studioWebPortalSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsStudioWebPortalSettings(ctx, depth + 1));
  out.tensorBoardAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettings:DomainDefaultUserSettingsCanvasAppSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directDeploySettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings(ctx, depth + 1));
  out.emrServerlessSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings(ctx, depth + 1));
  out.generativeAiSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings(ctx, depth + 1));
  out.identityProviderOauthSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting(ctx, depth + 1))]);
  out.kendraSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings(ctx, depth + 1));
  out.modelRegisterSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings(ctx, depth + 1));
  out.timeSeriesForecastingSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(ctx, depth + 1));
  out.workspaceSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings:DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings:DomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings:DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonBedrockRoleArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting:DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceName = "";
  out.secretArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsKendraSettings:DomainDefaultUserSettingsCanvasAppSettingsKendraSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings:DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crossAccountModelRegisterRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings:DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonForecastRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings:DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings
export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3ArtifactPath = "";
  out.s3KmsKeyId = h.id(ctx, "s3KmsKeyId");
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCodeEditorAppSettings:DomainDefaultUserSettingsCodeEditorAppSettings
export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.builtInLifecycleConfigArn = h.arn(ctx);
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement:DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement
export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings:DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  out.lifecycleManagement = "";
  out.maxIdleTimeoutInMinutes = 30;
  out.minIdleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage:DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage
export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCustomFileSystemConfig:DomainDefaultUserSettingsCustomFileSystemConfig
export function sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileSystemConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig:DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig
export function sagemaker_DomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.fileSystemPath = "";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsCustomPosixUserConfig:DomainDefaultUserSettingsCustomPosixUserConfig
export function sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.uid = 0;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettings:DomainDefaultUserSettingsJupyterLabAppSettings
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.builtInLifecycleConfigArn = h.arn(ctx);
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository(ctx, depth + 1))]);
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.emrSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement:DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings:DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  out.lifecycleManagement = "";
  out.maxIdleTimeoutInMinutes = 30;
  out.minIdleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository:DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage:DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings:DomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings
export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assumableRoleArns = (depth > 4 ? [] : [""]);
  out.executionRoleArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterServerAppSettings:DomainDefaultUserSettingsJupyterServerAppSettings
export function sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository:DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository
export function sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsKernelGatewayAppSettings:DomainDefaultUserSettingsKernelGatewayAppSettings
export function sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage:DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage
export function sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsRSessionAppSettings:DomainDefaultUserSettingsRSessionAppSettings
export function sagemaker_DomainDefaultUserSettingsRSessionAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsRSessionAppSettingsCustomImage:DomainDefaultUserSettingsRSessionAppSettingsCustomImage
export function sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsRStudioServerProAppSettings:DomainDefaultUserSettingsRStudioServerProAppSettings
export function sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessStatus = "";
  out.userGroup = "";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsSharingSettings:DomainDefaultUserSettingsSharingSettings
export function sagemaker_DomainDefaultUserSettingsSharingSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notebookOutputOption = "";
  out.s3KmsKeyId = h.id(ctx, "s3KmsKeyId");
  out.s3OutputPath = "";
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsSpaceStorageSettings:DomainDefaultUserSettingsSpaceStorageSettings
export function sagemaker_DomainDefaultUserSettingsSpaceStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings:DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
export function sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsVolumeSizeInGb = 8;
  out.maximumEbsVolumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsStudioWebPortalSettings:DomainDefaultUserSettingsStudioWebPortalSettings
export function sagemaker_DomainDefaultUserSettingsStudioWebPortalSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hiddenAppTypes = (depth > 4 ? [] : [""]);
  out.hiddenInstanceTypes = (depth > 4 ? [] : [""]);
  out.hiddenMlTools = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsTensorBoardAppSettings:DomainDefaultUserSettingsTensorBoardAppSettings
export function sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec:DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec
export function sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainDomainSettings:DomainDomainSettings
export function sagemaker_DomainDomainSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dockerSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDomainSettingsDockerSettings(ctx, depth + 1));
  out.executionRoleIdentityConfig = "";
  out.rStudioServerProDomainSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDomainSettingsRStudioServerProDomainSettings(ctx, depth + 1));
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDomainSettingsDockerSettings:DomainDomainSettingsDockerSettings
export function sagemaker_DomainDomainSettingsDockerSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableDockerAccess = "";
  out.vpcOnlyTrustedAccounts = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/DomainDomainSettingsRStudioServerProDomainSettings:DomainDomainSettingsRStudioServerProDomainSettings
export function sagemaker_DomainDomainSettingsRStudioServerProDomainSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec(ctx, depth + 1));
  out.domainExecutionRoleArn = h.arn(ctx);
  out.rStudioConnectUrl = h.endpoint(ctx, "rStudioConnectUrl");
  out.rStudioPackageManagerUrl = h.endpoint(ctx, "rStudioPackageManagerUrl");
  return out;
}

// aws:sagemaker/DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec:DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec
export function sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/DomainRetentionPolicy:DomainRetentionPolicy
export function sagemaker_DomainRetentionPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.homeEfsFileSystem = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationAsyncInferenceConfig:EndpointConfigurationAsyncInferenceConfig
export function sagemaker_EndpointConfigurationAsyncInferenceConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig(ctx, depth + 1));
  out.outputConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/EndpointConfigurationAsyncInferenceConfigClientConfig:EndpointConfigurationAsyncInferenceConfigClientConfig
export function sagemaker_EndpointConfigurationAsyncInferenceConfigClientConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConcurrentInvocationsPerInstance = 0;
  return out;
}

// aws:sagemaker/EndpointConfigurationAsyncInferenceConfigOutputConfig:EndpointConfigurationAsyncInferenceConfigOutputConfig
export function sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.notificationConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig(ctx, depth + 1));
  out.s3FailurePath = "";
  out.s3OutputPath = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig:EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig
export function sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorTopic = "";
  out.includeInferenceResponseIns = (depth > 4 ? [] : [""]);
  out.successTopic = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationDataCaptureConfig:EndpointConfigurationDataCaptureConfig
export function sagemaker_EndpointConfigurationDataCaptureConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.captureContentTypeHeader = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader(ctx, depth + 1));
  out.captureOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption(ctx, depth + 1))]);
  out.destinationS3Uri = h.endpoint(ctx, "destinationS3Uri");
  out.enableCapture = true;
  out.initialSamplingPercentage = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:sagemaker/EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader:EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader
export function sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.csvContentTypes = (depth > 4 ? [] : [""]);
  out.jsonContentTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/EndpointConfigurationDataCaptureConfigCaptureOption:EndpointConfigurationDataCaptureConfigCaptureOption
export function sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.captureMode = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationProductionVariant:EndpointConfigurationProductionVariant
export function sagemaker_EndpointConfigurationProductionVariant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorType = "";
  out.containerStartupHealthCheckTimeoutInSeconds = 30;
  out.coreDumpConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationProductionVariantCoreDumpConfig(ctx, depth + 1));
  out.enableSsmAccess = true;
  out.inferenceAmiVersion = "";
  out.initialInstanceCount = 1;
  out.initialVariantWeight = 0;
  out.instanceType = "";
  out.managedInstanceScaling = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationProductionVariantManagedInstanceScaling(ctx, depth + 1));
  out.modelDataDownloadTimeoutInSeconds = 30;
  out.modelName = "";
  out.routingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationProductionVariantRoutingConfig(ctx, depth + 1))]);
  out.serverlessConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationProductionVariantServerlessConfig(ctx, depth + 1));
  out.variantName = "";
  out.volumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/EndpointConfigurationProductionVariantCoreDumpConfig:EndpointConfigurationProductionVariantCoreDumpConfig
export function sagemaker_EndpointConfigurationProductionVariantCoreDumpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationS3Uri = h.endpoint(ctx, "destinationS3Uri");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:sagemaker/EndpointConfigurationProductionVariantManagedInstanceScaling:EndpointConfigurationProductionVariantManagedInstanceScaling
export function sagemaker_EndpointConfigurationProductionVariantManagedInstanceScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxInstanceCount = 1;
  out.minInstanceCount = 1;
  out.status = "active";
  return out;
}

// aws:sagemaker/EndpointConfigurationProductionVariantRoutingConfig:EndpointConfigurationProductionVariantRoutingConfig
export function sagemaker_EndpointConfigurationProductionVariantRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routingStrategy = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationProductionVariantServerlessConfig:EndpointConfigurationProductionVariantServerlessConfig
export function sagemaker_EndpointConfigurationProductionVariantServerlessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConcurrency = 0;
  out.memorySizeInMb = 8;
  out.provisionedConcurrency = 0;
  return out;
}

// aws:sagemaker/EndpointConfigurationShadowProductionVariant:EndpointConfigurationShadowProductionVariant
export function sagemaker_EndpointConfigurationShadowProductionVariant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorType = "";
  out.containerStartupHealthCheckTimeoutInSeconds = 30;
  out.coreDumpConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig(ctx, depth + 1));
  out.enableSsmAccess = true;
  out.inferenceAmiVersion = "";
  out.initialInstanceCount = 1;
  out.initialVariantWeight = 0;
  out.instanceType = "";
  out.managedInstanceScaling = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationShadowProductionVariantManagedInstanceScaling(ctx, depth + 1));
  out.modelDataDownloadTimeoutInSeconds = 30;
  out.modelName = "";
  out.routingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig(ctx, depth + 1))]);
  out.serverlessConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig(ctx, depth + 1));
  out.variantName = "";
  out.volumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/EndpointConfigurationShadowProductionVariantCoreDumpConfig:EndpointConfigurationShadowProductionVariantCoreDumpConfig
export function sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationS3Uri = h.endpoint(ctx, "destinationS3Uri");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:sagemaker/EndpointConfigurationShadowProductionVariantManagedInstanceScaling:EndpointConfigurationShadowProductionVariantManagedInstanceScaling
export function sagemaker_EndpointConfigurationShadowProductionVariantManagedInstanceScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxInstanceCount = 1;
  out.minInstanceCount = 1;
  out.status = "active";
  return out;
}

// aws:sagemaker/EndpointConfigurationShadowProductionVariantRoutingConfig:EndpointConfigurationShadowProductionVariantRoutingConfig
export function sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routingStrategy = "";
  return out;
}

// aws:sagemaker/EndpointConfigurationShadowProductionVariantServerlessConfig:EndpointConfigurationShadowProductionVariantServerlessConfig
export function sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxConcurrency = 0;
  out.memorySizeInMb = 8;
  out.provisionedConcurrency = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfig:EndpointDeploymentConfig
export function sagemaker_EndpointDeploymentConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRollbackConfiguration = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration(ctx, depth + 1));
  out.blueGreenUpdatePolicy = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy(ctx, depth + 1));
  out.rollingUpdatePolicy = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigRollingUpdatePolicy(ctx, depth + 1));
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigAutoRollbackConfiguration:EndpointDeploymentConfigAutoRollbackConfiguration
export function sagemaker_EndpointDeploymentConfigAutoRollbackConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm(ctx, depth + 1))]);
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigAutoRollbackConfigurationAlarm:EndpointDeploymentConfigAutoRollbackConfigurationAlarm
export function sagemaker_EndpointDeploymentConfigAutoRollbackConfigurationAlarm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmName = "";
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigBlueGreenUpdatePolicy:EndpointDeploymentConfigBlueGreenUpdatePolicy
export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumExecutionTimeoutInSeconds = 30;
  out.terminationWaitInSeconds = 0;
  out.trafficRoutingConfiguration = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration(ctx, depth + 1));
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration:EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration
export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.canarySize = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize(ctx, depth + 1));
  out.linearStepSize = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize(ctx, depth + 1));
  out.type = "";
  out.waitIntervalInSeconds = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize:EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize
export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize:EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize
export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigRollingUpdatePolicy:EndpointDeploymentConfigRollingUpdatePolicy
export function sagemaker_EndpointDeploymentConfigRollingUpdatePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumBatchSize = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize(ctx, depth + 1));
  out.maximumExecutionTimeoutInSeconds = 30;
  out.rollbackMaximumBatchSize = (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize(ctx, depth + 1));
  out.waitIntervalInSeconds = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize:EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize
export function sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:sagemaker/EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize:EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
export function sagemaker_EndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:sagemaker/FeatureGroupFeatureDefinition:FeatureGroupFeatureDefinition
export function sagemaker_FeatureGroupFeatureDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupFeatureDefinitionCollectionConfig(ctx, depth + 1));
  out.collectionType = "";
  out.featureName = "";
  out.featureType = "";
  return out;
}

// aws:sagemaker/FeatureGroupFeatureDefinitionCollectionConfig:FeatureGroupFeatureDefinitionCollectionConfig
export function sagemaker_FeatureGroupFeatureDefinitionCollectionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vectorConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupFeatureDefinitionCollectionConfigVectorConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/FeatureGroupFeatureDefinitionCollectionConfigVectorConfig:FeatureGroupFeatureDefinitionCollectionConfigVectorConfig
export function sagemaker_FeatureGroupFeatureDefinitionCollectionConfigVectorConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimension = 0;
  return out;
}

// aws:sagemaker/FeatureGroupOfflineStoreConfig:FeatureGroupOfflineStoreConfig
export function sagemaker_FeatureGroupOfflineStoreConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataCatalogConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOfflineStoreConfigDataCatalogConfig(ctx, depth + 1));
  out.disableGlueTableCreation = false;
  out.s3StorageConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOfflineStoreConfigS3StorageConfig(ctx, depth + 1));
  out.tableFormat = "";
  return out;
}

// aws:sagemaker/FeatureGroupOfflineStoreConfigDataCatalogConfig:FeatureGroupOfflineStoreConfigDataCatalogConfig
export function sagemaker_FeatureGroupOfflineStoreConfigDataCatalogConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.catalog = "";
  out.database = "";
  out.tableName = "";
  return out;
}

// aws:sagemaker/FeatureGroupOfflineStoreConfigS3StorageConfig:FeatureGroupOfflineStoreConfigS3StorageConfig
export function sagemaker_FeatureGroupOfflineStoreConfigS3StorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.resolvedOutputS3Uri = h.endpoint(ctx, "resolvedOutputS3Uri");
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/FeatureGroupOnlineStoreConfig:FeatureGroupOnlineStoreConfig
export function sagemaker_FeatureGroupOnlineStoreConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableOnlineStore = true;
  out.securityConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig(ctx, depth + 1));
  out.storageType = "";
  out.ttlDuration = (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOnlineStoreConfigTtlDuration(ctx, depth + 1));
  return out;
}

// aws:sagemaker/FeatureGroupOnlineStoreConfigSecurityConfig:FeatureGroupOnlineStoreConfigSecurityConfig
export function sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:sagemaker/FeatureGroupOnlineStoreConfigTtlDuration:FeatureGroupOnlineStoreConfigTtlDuration
export function sagemaker_FeatureGroupOnlineStoreConfigTtlDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:sagemaker/FeatureGroupThroughputConfig:FeatureGroupThroughputConfig
export function sagemaker_FeatureGroupThroughputConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.provisionedReadCapacityUnits = 0;
  out.provisionedWriteCapacityUnits = 0;
  out.throughputMode = "";
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopActivationConfig:FlowDefinitionHumanLoopActivationConfig
export function sagemaker_FlowDefinitionHumanLoopActivationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.humanLoopActivationConditionsConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig:FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
export function sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.humanLoopActivationConditions = "";
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopConfig:FlowDefinitionHumanLoopConfig
export function sagemaker_FlowDefinitionHumanLoopConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.humanTaskUiArn = h.arn(ctx);
  out.publicWorkforceTaskPrice = (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice(ctx, depth + 1));
  out.taskAvailabilityLifetimeInSeconds = 0;
  out.taskCount = 1;
  out.taskDescription = "";
  out.taskKeywords = (depth > 4 ? [] : [""]);
  out.taskTimeLimitInSeconds = 0;
  out.taskTitle = "";
  out.workteamArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice:FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
export function sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amountInUsd = (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd(ctx, depth + 1));
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd:FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
export function sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cents = 0;
  out.dollars = 0;
  out.tenthFractionsOfACent = 0;
  return out;
}

// aws:sagemaker/FlowDefinitionHumanLoopRequestSource:FlowDefinitionHumanLoopRequestSource
export function sagemaker_FlowDefinitionHumanLoopRequestSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsManagedHumanLoopRequestSource = "";
  return out;
}

// aws:sagemaker/FlowDefinitionOutputConfig:FlowDefinitionOutputConfig
export function sagemaker_FlowDefinitionOutputConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.s3OutputPath = "";
  return out;
}

// aws:sagemaker/HubS3StorageConfig:HubS3StorageConfig
export function sagemaker_HubS3StorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3OutputPath = "";
  return out;
}

// aws:sagemaker/HumanTaskUIUiTemplate:HumanTaskUIUiTemplate
export function sagemaker_HumanTaskUIUiTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentSha256 = "";
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:sagemaker/ModelContainer:ModelContainer
export function sagemaker_ModelContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerHostname = "";
  out.environment = {};
  out.image = "";
  out.imageConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerImageConfig(ctx, depth + 1));
  out.inferenceSpecificationName = "";
  out.mode = "";
  out.modelDataSource = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerModelDataSource(ctx, depth + 1));
  out.modelDataUrl = h.endpoint(ctx, "modelDataUrl");
  out.modelPackageName = "";
  out.multiModelConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerMultiModelConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/ModelContainerImageConfig:ModelContainerImageConfig
export function sagemaker_ModelContainerImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryAccessMode = "";
  out.repositoryAuthConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerImageConfigRepositoryAuthConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/ModelContainerImageConfigRepositoryAuthConfig:ModelContainerImageConfigRepositoryAuthConfig
export function sagemaker_ModelContainerImageConfigRepositoryAuthConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryCredentialsProviderArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/ModelContainerModelDataSource:ModelContainerModelDataSource
export function sagemaker_ModelContainerModelDataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3DataSources = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerModelDataSourceS3DataSource(ctx, depth + 1))]);
  return out;
}

// aws:sagemaker/ModelContainerModelDataSourceS3DataSource:ModelContainerModelDataSourceS3DataSource
export function sagemaker_ModelContainerModelDataSourceS3DataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compressionType = "";
  out.modelAccessConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainerModelDataSourceS3DataSourceModelAccessConfig(ctx, depth + 1));
  out.s3DataType = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/ModelContainerModelDataSourceS3DataSourceModelAccessConfig:ModelContainerModelDataSourceS3DataSourceModelAccessConfig
export function sagemaker_ModelContainerModelDataSourceS3DataSourceModelAccessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptEula = false;
  return out;
}

// aws:sagemaker/ModelContainerMultiModelConfig:ModelContainerMultiModelConfig
export function sagemaker_ModelContainerMultiModelConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelCacheSetting = "";
  return out;
}

// aws:sagemaker/ModelInferenceExecutionConfig:ModelInferenceExecutionConfig
export function sagemaker_ModelInferenceExecutionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}

// aws:sagemaker/ModelPrimaryContainer:ModelPrimaryContainer
export function sagemaker_ModelPrimaryContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerHostname = "";
  out.environment = {};
  out.image = "";
  out.imageConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerImageConfig(ctx, depth + 1));
  out.inferenceSpecificationName = "";
  out.mode = "";
  out.modelDataSource = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerModelDataSource(ctx, depth + 1));
  out.modelDataUrl = h.endpoint(ctx, "modelDataUrl");
  out.modelPackageName = "";
  out.multiModelConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerMultiModelConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/ModelPrimaryContainerImageConfig:ModelPrimaryContainerImageConfig
export function sagemaker_ModelPrimaryContainerImageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryAccessMode = "";
  out.repositoryAuthConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/ModelPrimaryContainerImageConfigRepositoryAuthConfig:ModelPrimaryContainerImageConfigRepositoryAuthConfig
export function sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryCredentialsProviderArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/ModelPrimaryContainerModelDataSource:ModelPrimaryContainerModelDataSource
export function sagemaker_ModelPrimaryContainerModelDataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3DataSources = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource(ctx, depth + 1))]);
  return out;
}

// aws:sagemaker/ModelPrimaryContainerModelDataSourceS3DataSource:ModelPrimaryContainerModelDataSourceS3DataSource
export function sagemaker_ModelPrimaryContainerModelDataSourceS3DataSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compressionType = "";
  out.modelAccessConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig(ctx, depth + 1));
  out.s3DataType = "";
  out.s3Uri = h.endpoint(ctx, "s3Uri");
  return out;
}

// aws:sagemaker/ModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig:ModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
export function sagemaker_ModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptEula = false;
  return out;
}

// aws:sagemaker/ModelPrimaryContainerMultiModelConfig:ModelPrimaryContainerMultiModelConfig
export function sagemaker_ModelPrimaryContainerMultiModelConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelCacheSetting = "";
  return out;
}

// aws:sagemaker/ModelVpcConfig:ModelVpcConfig
export function sagemaker_ModelVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/MonitoringScheduleMonitoringScheduleConfig:MonitoringScheduleMonitoringScheduleConfig
export function sagemaker_MonitoringScheduleMonitoringScheduleConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.monitoringJobDefinitionName = "";
  out.monitoringType = "";
  out.scheduleConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig(ctx, depth + 1));
  return out;
}

// aws:sagemaker/MonitoringScheduleMonitoringScheduleConfigScheduleConfig:MonitoringScheduleMonitoringScheduleConfigScheduleConfig
export function sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scheduleExpression = "";
  return out;
}

// aws:sagemaker/NotebookInstanceInstanceMetadataServiceConfiguration:NotebookInstanceInstanceMetadataServiceConfiguration
export function sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumInstanceMetadataServiceVersion = "";
  return out;
}

// aws:sagemaker/PipelineParallelismConfiguration:PipelineParallelismConfiguration
export function sagemaker_PipelineParallelismConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxParallelExecutionSteps = 0;
  return out;
}

// aws:sagemaker/PipelinePipelineDefinitionS3Location:PipelinePipelineDefinitionS3Location
export function sagemaker_PipelinePipelineDefinitionS3Location(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.objectKey = "";
  out.versionId = h.id(ctx, "versionId");
  return out;
}

// aws:sagemaker/ProjectServiceCatalogProvisioningDetails:ProjectServiceCatalogProvisioningDetails
export function sagemaker_ProjectServiceCatalogProvisioningDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pathId = h.id(ctx, "pathId");
  out.productId = h.id(ctx, "productId");
  out.provisioningArtifactId = h.id(ctx, "provisioningArtifactId");
  out.provisioningParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter(ctx, depth + 1))]);
  return out;
}

// aws:sagemaker/ProjectServiceCatalogProvisioningDetailsProvisioningParameter:ProjectServiceCatalogProvisioningDetailsProvisioningParameter
export function sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:sagemaker/SpaceOwnershipSettings:SpaceOwnershipSettings
export function sagemaker_SpaceOwnershipSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ownerUserProfileName = "";
  return out;
}

// aws:sagemaker/SpaceSpaceSettings:SpaceSpaceSettings
export function sagemaker_SpaceSpaceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appType = "";
  out.codeEditorAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCodeEditorAppSettings(ctx, depth + 1));
  out.customFileSystems = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCustomFileSystem(ctx, depth + 1))]);
  out.jupyterLabAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterLabAppSettings(ctx, depth + 1));
  out.jupyterServerAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterServerAppSettings(ctx, depth + 1));
  out.kernelGatewayAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings(ctx, depth + 1));
  out.spaceStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsSpaceStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCodeEditorAppSettings:SpaceSpaceSettingsCodeEditorAppSettings
export function sagemaker_SpaceSpaceSettingsCodeEditorAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement:SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement
export function sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings:SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec:SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec
export function sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCustomFileSystem:SpaceSpaceSettingsCustomFileSystem
export function sagemaker_SpaceSpaceSettingsCustomFileSystem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileSystem = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsCustomFileSystemEfsFileSystem:SpaceSpaceSettingsCustomFileSystemEfsFileSystem
export function sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterLabAppSettings:SpaceSpaceSettingsJupyterLabAppSettings
export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement:SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement
export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings:SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository:SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository
export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec:SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec
export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterServerAppSettings:SpaceSpaceSettingsJupyterServerAppSettings
export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository:SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository
export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec:SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec
export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsKernelGatewayAppSettings:SpaceSpaceSettingsKernelGatewayAppSettings
export function sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage:SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage
export function sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec:SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec
export function sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsSpaceStorageSettings:SpaceSpaceSettingsSpaceStorageSettings
export function sagemaker_SpaceSpaceSettingsSpaceStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings:SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings
export function sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsVolumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/SpaceSpaceSharingSettings:SpaceSpaceSharingSettings
export function sagemaker_SpaceSpaceSharingSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sharingType = "";
  return out;
}

// aws:sagemaker/UserProfileUserSettings:UserProfileUserSettings
export function sagemaker_UserProfileUserSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoMountHomeEfs = "";
  out.canvasAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettings(ctx, depth + 1));
  out.codeEditorAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCodeEditorAppSettings(ctx, depth + 1));
  out.customFileSystemConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCustomFileSystemConfig(ctx, depth + 1))]);
  out.customPosixUserConfig = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCustomPosixUserConfig(ctx, depth + 1));
  out.defaultLandingUri = h.endpoint(ctx, "defaultLandingUri");
  out.executionRole = "";
  out.jupyterLabAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettings(ctx, depth + 1));
  out.jupyterServerAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterServerAppSettings(ctx, depth + 1));
  out.kernelGatewayAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsKernelGatewayAppSettings(ctx, depth + 1));
  out.rSessionAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsRSessionAppSettings(ctx, depth + 1));
  out.rStudioServerProAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsRStudioServerProAppSettings(ctx, depth + 1));
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.sharingSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsSharingSettings(ctx, depth + 1));
  out.spaceStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsSpaceStorageSettings(ctx, depth + 1));
  out.studioWebPortal = "";
  out.studioWebPortalSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsStudioWebPortalSettings(ctx, depth + 1));
  out.tensorBoardAppSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsTensorBoardAppSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettings:UserProfileUserSettingsCanvasAppSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directDeploySettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings(ctx, depth + 1));
  out.emrServerlessSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings(ctx, depth + 1));
  out.generativeAiSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings(ctx, depth + 1));
  out.identityProviderOauthSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting(ctx, depth + 1))]);
  out.kendraSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings(ctx, depth + 1));
  out.modelRegisterSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings(ctx, depth + 1));
  out.timeSeriesForecastingSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(ctx, depth + 1));
  out.workspaceSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings:UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings:UserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings:UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonBedrockRoleArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting:UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceName = "";
  out.secretArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsKendraSettings:UserProfileUserSettingsCanvasAppSettingsKendraSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings:UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crossAccountModelRegisterRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings:UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonForecastRoleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings:UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings
export function sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3ArtifactPath = "";
  out.s3KmsKeyId = h.id(ctx, "s3KmsKeyId");
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCodeEditorAppSettings:UserProfileUserSettingsCodeEditorAppSettings
export function sagemaker_UserProfileUserSettingsCodeEditorAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.builtInLifecycleConfigArn = h.arn(ctx);
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement:UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement
export function sagemaker_UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings:UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_UserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  out.lifecycleManagement = "";
  out.maxIdleTimeoutInMinutes = 30;
  out.minIdleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCodeEditorAppSettingsCustomImage:UserProfileUserSettingsCodeEditorAppSettingsCustomImage
export function sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec:UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCustomFileSystemConfig:UserProfileUserSettingsCustomFileSystemConfig
export function sagemaker_UserProfileUserSettingsCustomFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileSystemConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx, depth + 1))]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig:UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig
export function sagemaker_UserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.fileSystemPath = "";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsCustomPosixUserConfig:UserProfileUserSettingsCustomPosixUserConfig
export function sagemaker_UserProfileUserSettingsCustomPosixUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.uid = 0;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettings:UserProfileUserSettingsJupyterLabAppSettings
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appLifecycleManagement = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx, depth + 1));
  out.builtInLifecycleConfigArn = h.arn(ctx);
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository(ctx, depth + 1))]);
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.emrSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsEmrSettings(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement:UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings:UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutInMinutes = 30;
  out.lifecycleManagement = "";
  out.maxIdleTimeoutInMinutes = 30;
  out.minIdleTimeoutInMinutes = 30;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsCodeRepository:UserProfileUserSettingsJupyterLabAppSettingsCodeRepository
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsCustomImage:UserProfileUserSettingsJupyterLabAppSettingsCustomImage
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec:UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterLabAppSettingsEmrSettings:UserProfileUserSettingsJupyterLabAppSettingsEmrSettings
export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsEmrSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assumableRoleArns = (depth > 4 ? [] : [""]);
  out.executionRoleArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterServerAppSettings:UserProfileUserSettingsJupyterServerAppSettings
export function sagemaker_UserProfileUserSettingsJupyterServerAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterServerAppSettingsCodeRepository:UserProfileUserSettingsJupyterServerAppSettingsCodeRepository
export function sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  return out;
}

// aws:sagemaker/UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec:UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsKernelGatewayAppSettings:UserProfileUserSettingsKernelGatewayAppSettings
export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx, depth + 1));
  out.lifecycleConfigArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsKernelGatewayAppSettingsCustomImage:UserProfileUserSettingsKernelGatewayAppSettingsCustomImage
export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec:UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsRSessionAppSettings:UserProfileUserSettingsRSessionAppSettings
export function sagemaker_UserProfileUserSettingsRSessionAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customImages = (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage(ctx, depth + 1))]);
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsRSessionAppSettingsCustomImage:UserProfileUserSettingsRSessionAppSettingsCustomImage
export function sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = "";
  out.imageName = "";
  out.imageVersionNumber = 0;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec:UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsRStudioServerProAppSettings:UserProfileUserSettingsRStudioServerProAppSettings
export function sagemaker_UserProfileUserSettingsRStudioServerProAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessStatus = "";
  out.userGroup = "";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsSharingSettings:UserProfileUserSettingsSharingSettings
export function sagemaker_UserProfileUserSettingsSharingSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notebookOutputOption = "";
  out.s3KmsKeyId = h.id(ctx, "s3KmsKeyId");
  out.s3OutputPath = "";
  return out;
}

// aws:sagemaker/UserProfileUserSettingsSpaceStorageSettings:UserProfileUserSettingsSpaceStorageSettings
export function sagemaker_UserProfileUserSettingsSpaceStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsStorageSettings = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings:UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
export function sagemaker_UserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEbsVolumeSizeInGb = 8;
  out.maximumEbsVolumeSizeInGb = 8;
  return out;
}

// aws:sagemaker/UserProfileUserSettingsStudioWebPortalSettings:UserProfileUserSettingsStudioWebPortalSettings
export function sagemaker_UserProfileUserSettingsStudioWebPortalSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hiddenAppTypes = (depth > 4 ? [] : [""]);
  out.hiddenInstanceTypes = (depth > 4 ? [] : [""]);
  out.hiddenMlTools = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/UserProfileUserSettingsTensorBoardAppSettings:UserProfileUserSettingsTensorBoardAppSettings
export function sagemaker_UserProfileUserSettingsTensorBoardAppSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultResourceSpec = (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec(ctx, depth + 1));
  return out;
}

// aws:sagemaker/UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec:UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec
export function sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.lifecycleConfigArn = h.arn(ctx);
  out.sagemakerImageArn = h.arn(ctx);
  out.sagemakerImageVersionAlias = "";
  out.sagemakerImageVersionArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/WorkforceCognitoConfig:WorkforceCognitoConfig
export function sagemaker_WorkforceCognitoConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.userPool = "";
  return out;
}

// aws:sagemaker/WorkforceOidcConfig:WorkforceOidcConfig
export function sagemaker_WorkforceOidcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationRequestExtraParams = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.jwksUri = h.endpoint(ctx, "jwksUri");
  out.logoutEndpoint = h.endpoint(ctx, "logoutEndpoint");
  out.scope = "";
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:sagemaker/WorkforceSourceIpConfig:WorkforceSourceIpConfig
export function sagemaker_WorkforceSourceIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/WorkforceWorkforceVpcConfig:WorkforceWorkforceVpcConfig
export function sagemaker_WorkforceWorkforceVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:sagemaker/WorkteamMemberDefinition:WorkteamMemberDefinition
export function sagemaker_WorkteamMemberDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cognitoMemberDefinition = (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition(ctx, depth + 1));
  out.oidcMemberDefinition = (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamMemberDefinitionOidcMemberDefinition(ctx, depth + 1));
  return out;
}

// aws:sagemaker/WorkteamMemberDefinitionCognitoMemberDefinition:WorkteamMemberDefinitionCognitoMemberDefinition
export function sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.userGroup = "";
  out.userPool = "";
  return out;
}

// aws:sagemaker/WorkteamMemberDefinitionOidcMemberDefinition:WorkteamMemberDefinitionOidcMemberDefinition
export function sagemaker_WorkteamMemberDefinitionOidcMemberDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sagemaker/WorkteamNotificationConfiguration:WorkteamNotificationConfiguration
export function sagemaker_WorkteamNotificationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notificationTopicArn = h.arn(ctx);
  return out;
}

// aws:sagemaker/WorkteamWorkerAccessConfiguration:WorkteamWorkerAccessConfiguration
export function sagemaker_WorkteamWorkerAccessConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Presign = (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamWorkerAccessConfigurationS3Presign(ctx, depth + 1));
  return out;
}

// aws:sagemaker/WorkteamWorkerAccessConfigurationS3Presign:WorkteamWorkerAccessConfigurationS3Presign
export function sagemaker_WorkteamWorkerAccessConfigurationS3Presign(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iamPolicyConstraints = (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints(ctx, depth + 1));
  return out;
}

// aws:sagemaker/WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints:WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints
export function sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceIp = "";
  out.vpcSourceIp = "";
  return out;
}

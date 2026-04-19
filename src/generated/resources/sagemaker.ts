// GENERATED FILE — do not edit.
// Service: sagemaker   (30 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sagemaker from "../types/sagemaker.js";

// aws:sagemaker/app:App
export function App(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appName = (i.appName !== undefined ? i.appName : "");
  out.appType = (i.appType !== undefined ? i.appType : "");
  out.arn = h.arn(ctx);
  out.domainId = (i.domainId !== undefined ? i.domainId : h.id(ctx, "domainId"));
  out.resourceSpec = (i.resourceSpec !== undefined ? i.resourceSpec : (depth > 4 ? {} : T_sagemaker.sagemaker_AppResourceSpec(ctx, depth + 1)));
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userProfileName = (i.userProfileName !== undefined ? i.userProfileName : "");
  return out;
}

// aws:sagemaker/appImageConfig:AppImageConfig
export function AppImageConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appImageConfigName = (i.appImageConfigName !== undefined ? i.appImageConfigName : "");
  out.arn = h.arn(ctx);
  out.codeEditorAppImageConfig = (i.codeEditorAppImageConfig !== undefined ? i.codeEditorAppImageConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigCodeEditorAppImageConfig(ctx, depth + 1)));
  out.jupyterLabImageConfig = (i.jupyterLabImageConfig !== undefined ? i.jupyterLabImageConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigJupyterLabImageConfig(ctx, depth + 1)));
  out.kernelGatewayImageConfig = (i.kernelGatewayImageConfig !== undefined ? i.kernelGatewayImageConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_AppImageConfigKernelGatewayImageConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/codeRepository:CodeRepository
export function CodeRepository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.codeRepositoryName = (i.codeRepositoryName !== undefined ? i.codeRepositoryName : "");
  out.gitConfig = (i.gitConfig !== undefined ? i.gitConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_CodeRepositoryGitConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/dataQualityJobDefinition:DataQualityJobDefinition
export function DataQualityJobDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataQualityAppSpecification = (i.dataQualityAppSpecification !== undefined ? i.dataQualityAppSpecification : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityAppSpecification(ctx, depth + 1)));
  out.dataQualityBaselineConfig = (i.dataQualityBaselineConfig !== undefined ? i.dataQualityBaselineConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig(ctx, depth + 1)));
  out.dataQualityJobInput = (i.dataQualityJobInput !== undefined ? i.dataQualityJobInput : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobInput(ctx, depth + 1)));
  out.dataQualityJobOutputConfig = (i.dataQualityJobOutputConfig !== undefined ? i.dataQualityJobOutputConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig(ctx, depth + 1)));
  out.jobResources = (i.jobResources !== undefined ? i.jobResources : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionJobResources(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkConfig = (i.networkConfig !== undefined ? i.networkConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionNetworkConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.stoppingCondition = (i.stoppingCondition !== undefined ? i.stoppingCondition : (depth > 4 ? {} : T_sagemaker.sagemaker_DataQualityJobDefinitionStoppingCondition(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/device:Device
export function Device(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentVersion = "";
  out.arn = h.arn(ctx);
  out.device = (i.device !== undefined ? i.device : (depth > 4 ? {} : T_sagemaker.sagemaker_DeviceDevice(ctx, depth + 1)));
  out.deviceFleetName = (i.deviceFleetName !== undefined ? i.deviceFleetName : "");
  return out;
}

// aws:sagemaker/deviceFleet:DeviceFleet
export function DeviceFleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.deviceFleetName = (i.deviceFleetName !== undefined ? i.deviceFleetName : "");
  out.enableIotRoleAlias = (i.enableIotRoleAlias !== undefined ? i.enableIotRoleAlias : true);
  out.iotRoleAlias = "";
  out.outputConfig = (i.outputConfig !== undefined ? i.outputConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_DeviceFleetOutputConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appNetworkAccessType = (i.appNetworkAccessType !== undefined ? i.appNetworkAccessType : "");
  out.appSecurityGroupManagement = (i.appSecurityGroupManagement !== undefined ? i.appSecurityGroupManagement : "");
  out.arn = h.arn(ctx);
  out.authMode = (i.authMode !== undefined ? i.authMode : "");
  out.defaultSpaceSettings = (i.defaultSpaceSettings !== undefined ? i.defaultSpaceSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultSpaceSettings(ctx, depth + 1)));
  out.defaultUserSettings = (i.defaultUserSettings !== undefined ? i.defaultUserSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDefaultUserSettings(ctx, depth + 1)));
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainSettings = (i.domainSettings !== undefined ? i.domainSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_DomainDomainSettings(ctx, depth + 1)));
  out.homeEfsFileSystemId = h.id(ctx, "homeEfsFileSystemId");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.retentionPolicy = (i.retentionPolicy !== undefined ? i.retentionPolicy : (depth > 4 ? {} : T_sagemaker.sagemaker_DomainRetentionPolicy(ctx, depth + 1)));
  out.securityGroupIdForDomainBoundary = "";
  out.singleSignOnApplicationArn = h.arn(ctx);
  out.singleSignOnManagedApplicationInstanceId = h.id(ctx, "singleSignOnManagedApplicationInstanceId");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tagPropagation = (i.tagPropagation !== undefined ? i.tagPropagation : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:sagemaker/endpoint:Endpoint
export function Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deploymentConfig = (i.deploymentConfig !== undefined ? i.deploymentConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointDeploymentConfig(ctx, depth + 1)));
  out.endpointConfigName = (i.endpointConfigName !== undefined ? i.endpointConfigName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/endpointConfiguration:EndpointConfiguration
export function EndpointConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.asyncInferenceConfig = (i.asyncInferenceConfig !== undefined ? i.asyncInferenceConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationAsyncInferenceConfig(ctx, depth + 1)));
  out.dataCaptureConfig = (i.dataCaptureConfig !== undefined ? i.dataCaptureConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationDataCaptureConfig(ctx, depth + 1)));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.productionVariants = (i.productionVariants !== undefined ? i.productionVariants : (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationProductionVariant(ctx, depth + 1))]));
  out.shadowProductionVariants = (i.shadowProductionVariants !== undefined ? i.shadowProductionVariants : (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_EndpointConfigurationShadowProductionVariant(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/featureGroup:FeatureGroup
export function FeatureGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.eventTimeFeatureName = (i.eventTimeFeatureName !== undefined ? i.eventTimeFeatureName : "");
  out.featureDefinitions = (i.featureDefinitions !== undefined ? i.featureDefinitions : (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupFeatureDefinition(ctx, depth + 1))]));
  out.featureGroupName = (i.featureGroupName !== undefined ? i.featureGroupName : "");
  out.offlineStoreConfig = (i.offlineStoreConfig !== undefined ? i.offlineStoreConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOfflineStoreConfig(ctx, depth + 1)));
  out.onlineStoreConfig = (i.onlineStoreConfig !== undefined ? i.onlineStoreConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupOnlineStoreConfig(ctx, depth + 1)));
  out.recordIdentifierFeatureName = (i.recordIdentifierFeatureName !== undefined ? i.recordIdentifierFeatureName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputConfig = (i.throughputConfig !== undefined ? i.throughputConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FeatureGroupThroughputConfig(ctx, depth + 1)));
  return out;
}

// aws:sagemaker/flowDefinition:FlowDefinition
export function FlowDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.flowDefinitionName = (i.flowDefinitionName !== undefined ? i.flowDefinitionName : "");
  out.humanLoopActivationConfig = (i.humanLoopActivationConfig !== undefined ? i.humanLoopActivationConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopActivationConfig(ctx, depth + 1)));
  out.humanLoopConfig = (i.humanLoopConfig !== undefined ? i.humanLoopConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopConfig(ctx, depth + 1)));
  out.humanLoopRequestSource = (i.humanLoopRequestSource !== undefined ? i.humanLoopRequestSource : (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionHumanLoopRequestSource(ctx, depth + 1)));
  out.outputConfig = (i.outputConfig !== undefined ? i.outputConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_FlowDefinitionOutputConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/hub:Hub
export function Hub(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.hubDescription = (i.hubDescription !== undefined ? i.hubDescription : "");
  out.hubDisplayName = (i.hubDisplayName !== undefined ? i.hubDisplayName : "");
  out.hubName = (i.hubName !== undefined ? i.hubName : "");
  out.hubSearchKeywords = (i.hubSearchKeywords !== undefined ? i.hubSearchKeywords : (depth > 4 ? [] : [""]));
  out.s3StorageConfig = (i.s3StorageConfig !== undefined ? i.s3StorageConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_HubS3StorageConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/humanTaskUI:HumanTaskUI
export function HumanTaskUI(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.humanTaskUiName = (i.humanTaskUiName !== undefined ? i.humanTaskUiName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uiTemplate = (i.uiTemplate !== undefined ? i.uiTemplate : (depth > 4 ? {} : T_sagemaker.sagemaker_HumanTaskUIUiTemplate(ctx, depth + 1)));
  return out;
}

// aws:sagemaker/image:Image
export function Image(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.imageName = (i.imageName !== undefined ? i.imageName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/imageVersion:ImageVersion
export function ImageVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.baseImage = (i.baseImage !== undefined ? i.baseImage : "");
  out.containerImage = "";
  out.horovod = (i.horovod !== undefined ? i.horovod : false);
  out.imageArn = h.arn(ctx);
  out.imageName = (i.imageName !== undefined ? i.imageName : "");
  out.jobType = (i.jobType !== undefined ? i.jobType : "");
  out.mlFramework = (i.mlFramework !== undefined ? i.mlFramework : "");
  out.processor = (i.processor !== undefined ? i.processor : "");
  out.programmingLang = (i.programmingLang !== undefined ? i.programmingLang : "");
  out.releaseNotes = (i.releaseNotes !== undefined ? i.releaseNotes : "");
  out.vendorGuidance = (i.vendorGuidance !== undefined ? i.vendorGuidance : "");
  out.version = 0;
  return out;
}

// aws:sagemaker/mlflowTrackingServer:MlflowTrackingServer
export function MlflowTrackingServer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.artifactStoreUri = (i.artifactStoreUri !== undefined ? i.artifactStoreUri : h.endpoint(ctx, "artifactStoreUri"));
  out.automaticModelRegistration = (i.automaticModelRegistration !== undefined ? i.automaticModelRegistration : false);
  out.mlflowVersion = (i.mlflowVersion !== undefined ? i.mlflowVersion : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trackingServerName = (i.trackingServerName !== undefined ? i.trackingServerName : "");
  out.trackingServerSize = (i.trackingServerSize !== undefined ? i.trackingServerSize : "");
  out.trackingServerUrl = h.endpoint(ctx, "trackingServerUrl");
  out.weeklyMaintenanceWindowStart = (i.weeklyMaintenanceWindowStart !== undefined ? i.weeklyMaintenanceWindowStart : "");
  return out;
}

// aws:sagemaker/model:Model
export function Model(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.containers = (i.containers !== undefined ? i.containers : (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_ModelContainer(ctx, depth + 1))]));
  out.enableNetworkIsolation = (i.enableNetworkIsolation !== undefined ? i.enableNetworkIsolation : true);
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.inferenceExecutionConfig = (i.inferenceExecutionConfig !== undefined ? i.inferenceExecutionConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_ModelInferenceExecutionConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.primaryContainer = (i.primaryContainer !== undefined ? i.primaryContainer : (depth > 4 ? {} : T_sagemaker.sagemaker_ModelPrimaryContainer(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_ModelVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:sagemaker/modelPackageGroup:ModelPackageGroup
export function ModelPackageGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.modelPackageGroupDescription = (i.modelPackageGroupDescription !== undefined ? i.modelPackageGroupDescription : "");
  out.modelPackageGroupName = (i.modelPackageGroupName !== undefined ? i.modelPackageGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/modelPackageGroupPolicy:ModelPackageGroupPolicy
export function ModelPackageGroupPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modelPackageGroupName = (i.modelPackageGroupName !== undefined ? i.modelPackageGroupName : "");
  out.resourcePolicy = (i.resourcePolicy !== undefined ? i.resourcePolicy : "");
  return out;
}

// aws:sagemaker/monitoringSchedule:MonitoringSchedule
export function MonitoringSchedule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.monitoringScheduleConfig = (i.monitoringScheduleConfig !== undefined ? i.monitoringScheduleConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_MonitoringScheduleMonitoringScheduleConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/notebookInstance:NotebookInstance
export function NotebookInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorTypes = (i.acceleratorTypes !== undefined ? i.acceleratorTypes : (depth > 4 ? [] : [""]));
  out.additionalCodeRepositories = (i.additionalCodeRepositories !== undefined ? i.additionalCodeRepositories : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.defaultCodeRepository = (i.defaultCodeRepository !== undefined ? i.defaultCodeRepository : "");
  out.directInternetAccess = (i.directInternetAccess !== undefined ? i.directInternetAccess : "");
  out.instanceMetadataServiceConfiguration = (i.instanceMetadataServiceConfiguration !== undefined ? i.instanceMetadataServiceConfiguration : (depth > 4 ? {} : T_sagemaker.sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration(ctx, depth + 1)));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lifecycleConfigName = (i.lifecycleConfigName !== undefined ? i.lifecycleConfigName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.platformIdentifier = (i.platformIdentifier !== undefined ? i.platformIdentifier : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.rootAccess = (i.rootAccess !== undefined ? i.rootAccess : "");
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  out.volumeSize = (i.volumeSize !== undefined ? i.volumeSize : 8);
  return out;
}

// aws:sagemaker/notebookInstanceLifecycleConfiguration:NotebookInstanceLifecycleConfiguration
export function NotebookInstanceLifecycleConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.onCreate = (i.onCreate !== undefined ? i.onCreate : "");
  out.onStart = (i.onStart !== undefined ? i.onStart : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/pipeline:Pipeline
export function Pipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.parallelismConfiguration = (i.parallelismConfiguration !== undefined ? i.parallelismConfiguration : (depth > 4 ? {} : T_sagemaker.sagemaker_PipelineParallelismConfiguration(ctx, depth + 1)));
  out.pipelineDefinition = (i.pipelineDefinition !== undefined ? i.pipelineDefinition : "");
  out.pipelineDefinitionS3Location = (i.pipelineDefinitionS3Location !== undefined ? i.pipelineDefinitionS3Location : (depth > 4 ? {} : T_sagemaker.sagemaker_PipelinePipelineDefinitionS3Location(ctx, depth + 1)));
  out.pipelineDescription = (i.pipelineDescription !== undefined ? i.pipelineDescription : "");
  out.pipelineDisplayName = (i.pipelineDisplayName !== undefined ? i.pipelineDisplayName : "");
  out.pipelineName = (i.pipelineName !== undefined ? i.pipelineName : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.projectDescription = (i.projectDescription !== undefined ? i.projectDescription : "");
  out.projectId = h.id(ctx, "projectId");
  out.projectName = (i.projectName !== undefined ? i.projectName : "");
  out.serviceCatalogProvisioningDetails = (i.serviceCatalogProvisioningDetails !== undefined ? i.serviceCatalogProvisioningDetails : (depth > 4 ? {} : T_sagemaker.sagemaker_ProjectServiceCatalogProvisioningDetails(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/servicecatalogPortfolioStatus:ServicecatalogPortfolioStatus
export function ServicecatalogPortfolioStatus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:sagemaker/space:Space
export function Space(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainId = (i.domainId !== undefined ? i.domainId : h.id(ctx, "domainId"));
  out.homeEfsFileSystemUid = h.id(ctx, "homeEfsFileSystemUid");
  out.ownershipSettings = (i.ownershipSettings !== undefined ? i.ownershipSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceOwnershipSettings(ctx, depth + 1)));
  out.spaceDisplayName = (i.spaceDisplayName !== undefined ? i.spaceDisplayName : "");
  out.spaceName = (i.spaceName !== undefined ? i.spaceName : "");
  out.spaceSettings = (i.spaceSettings !== undefined ? i.spaceSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSettings(ctx, depth + 1)));
  out.spaceSharingSettings = (i.spaceSharingSettings !== undefined ? i.spaceSharingSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_SpaceSpaceSharingSettings(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:sagemaker/studioLifecycleConfig:StudioLifecycleConfig
export function StudioLifecycleConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.studioLifecycleConfigAppType = (i.studioLifecycleConfigAppType !== undefined ? i.studioLifecycleConfigAppType : "");
  out.studioLifecycleConfigContent = (i.studioLifecycleConfigContent !== undefined ? i.studioLifecycleConfigContent : "");
  out.studioLifecycleConfigName = (i.studioLifecycleConfigName !== undefined ? i.studioLifecycleConfigName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sagemaker/userProfile:UserProfile
export function UserProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainId = (i.domainId !== undefined ? i.domainId : h.id(ctx, "domainId"));
  out.homeEfsFileSystemUid = h.id(ctx, "homeEfsFileSystemUid");
  out.singleSignOnUserIdentifier = (i.singleSignOnUserIdentifier !== undefined ? i.singleSignOnUserIdentifier : "");
  out.singleSignOnUserValue = (i.singleSignOnUserValue !== undefined ? i.singleSignOnUserValue : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userProfileName = (i.userProfileName !== undefined ? i.userProfileName : "");
  out.userSettings = (i.userSettings !== undefined ? i.userSettings : (depth > 4 ? {} : T_sagemaker.sagemaker_UserProfileUserSettings(ctx, depth + 1)));
  return out;
}

// aws:sagemaker/workforce:Workforce
export function Workforce(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cognitoConfig = (i.cognitoConfig !== undefined ? i.cognitoConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkforceCognitoConfig(ctx, depth + 1)));
  out.oidcConfig = (i.oidcConfig !== undefined ? i.oidcConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkforceOidcConfig(ctx, depth + 1)));
  out.sourceIpConfig = (i.sourceIpConfig !== undefined ? i.sourceIpConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkforceSourceIpConfig(ctx, depth + 1)));
  out.subdomain = h.endpoint(ctx, "subdomain");
  out.workforceName = (i.workforceName !== undefined ? i.workforceName : "");
  out.workforceVpcConfig = (i.workforceVpcConfig !== undefined ? i.workforceVpcConfig : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkforceWorkforceVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:sagemaker/workteam:Workteam
export function Workteam(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.memberDefinitions = (i.memberDefinitions !== undefined ? i.memberDefinitions : (depth > 4 ? [] : [(depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamMemberDefinition(ctx, depth + 1))]));
  out.notificationConfiguration = (i.notificationConfiguration !== undefined ? i.notificationConfiguration : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamNotificationConfiguration(ctx, depth + 1)));
  out.subdomain = h.endpoint(ctx, "subdomain");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.workerAccessConfiguration = (i.workerAccessConfiguration !== undefined ? i.workerAccessConfiguration : (depth > 4 ? {} : T_sagemaker.sagemaker_WorkteamWorkerAccessConfiguration(ctx, depth + 1)));
  out.workforceName = (i.workforceName !== undefined ? i.workforceName : "");
  out.workteamName = (i.workteamName !== undefined ? i.workteamName : "");
  return out;
}

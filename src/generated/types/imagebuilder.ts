// GENERATED FILE — do not edit.
// Service: imagebuilder   (90 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_imagebuilder from "./imagebuilder.js";

// aws:imagebuilder/ContainerRecipeComponent:ContainerRecipeComponent
export function imagebuilder_ContainerRecipeComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeComponentParameter(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/ContainerRecipeComponentParameter:ContainerRecipeComponentParameter
export function imagebuilder_ContainerRecipeComponentParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/ContainerRecipeInstanceConfiguration:ContainerRecipeInstanceConfiguration
export function imagebuilder_ContainerRecipeInstanceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockDeviceMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping(ctx, depth + 1))]);
  out.image = "";
  return out;
}

// aws:imagebuilder/ContainerRecipeInstanceConfigurationBlockDeviceMapping:ContainerRecipeInstanceConfigurationBlockDeviceMapping
export function imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs(ctx, depth + 1));
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:imagebuilder/ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs:ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
export function imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = "";
  out.encrypted = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:imagebuilder/ContainerRecipeTargetRepository:ContainerRecipeTargetRepository
export function imagebuilder_ContainerRecipeTargetRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryName = "";
  out.service = "";
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistribution:DistributionConfigurationDistribution
export function imagebuilder_DistributionConfigurationDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiDistributionConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration(ctx, depth + 1));
  out.containerDistributionConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration(ctx, depth + 1));
  out.fastLaunchConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration(ctx, depth + 1))]);
  out.launchTemplateConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration(ctx, depth + 1))]);
  out.licenseConfigurationArns = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  out.s3ExportConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionS3ExportConfiguration(ctx, depth + 1));
  out.ssmParameterConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionSsmParameterConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionAmiDistributionConfiguration:DistributionConfigurationDistributionAmiDistributionConfiguration
export function imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiTags = {};
  out.description = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.launchPermission = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission(ctx, depth + 1));
  out.name = ctx.name;
  out.targetAccountIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission:DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission
export function imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.organizationArns = (depth > 4 ? [] : [""]);
  out.organizationalUnitArns = (depth > 4 ? [] : [""]);
  out.userGroups = (depth > 4 ? [] : [""]);
  out.userIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionContainerDistributionConfiguration:DistributionConfigurationDistributionContainerDistributionConfiguration
export function imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.description = "";
  out.targetRepository = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository(ctx, depth + 1));
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository:DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository
export function imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryName = "";
  out.service = "";
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionFastLaunchConfiguration:DistributionConfigurationDistributionFastLaunchConfiguration
export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.enabled = true;
  out.launchTemplate = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate(ctx, depth + 1));
  out.maxParallelLaunches = 0;
  out.snapshotConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration(ctx, depth + 1));
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate:DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate
export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.launchTemplateVersion = "";
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration:DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration
export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetResourceCount = 1;
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionLaunchTemplateConfiguration:DistributionConfigurationDistributionLaunchTemplateConfiguration
export function imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.default = false;
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionS3ExportConfiguration:DistributionConfigurationDistributionS3ExportConfiguration
export function imagebuilder_DistributionConfigurationDistributionS3ExportConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskImageFormat = "";
  out.roleName = "";
  out.s3Bucket = "";
  out.s3Prefix = "";
  return out;
}

// aws:imagebuilder/DistributionConfigurationDistributionSsmParameterConfiguration:DistributionConfigurationDistributionSsmParameterConfiguration
export function imagebuilder_DistributionConfigurationDistributionSsmParameterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiAccountId = h.id(ctx, "amiAccountId");
  out.dataType = "";
  out.parameterName = "";
  return out;
}

// aws:imagebuilder/ImageImageScanningConfiguration:ImageImageScanningConfiguration
export function imagebuilder_ImageImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ecrConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageImageScanningConfigurationEcrConfiguration(ctx, depth + 1));
  out.imageScanningEnabled = false;
  return out;
}

// aws:imagebuilder/ImageImageScanningConfigurationEcrConfiguration:ImageImageScanningConfigurationEcrConfiguration
export function imagebuilder_ImageImageScanningConfigurationEcrConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.repositoryName = "";
  return out;
}

// aws:imagebuilder/ImageImageTestsConfiguration:ImageImageTestsConfiguration
export function imagebuilder_ImageImageTestsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageTestsEnabled = false;
  out.timeoutMinutes = 30;
  return out;
}

// aws:imagebuilder/ImageOutputResource:ImageOutputResource
export function imagebuilder_ImageOutputResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amis = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageOutputResourceAmi(ctx, depth + 1))]);
  out.containers = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageOutputResourceContainer(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/ImageOutputResourceAmi:ImageOutputResourceAmi
export function imagebuilder_ImageOutputResourceAmi(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.description = "";
  out.image = "";
  out.name = ctx.name;
  out.region = ctx.region;
  return out;
}

// aws:imagebuilder/ImageOutputResourceContainer:ImageOutputResourceContainer
export function imagebuilder_ImageOutputResourceContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageUris = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  return out;
}

// aws:imagebuilder/ImagePipelineImageScanningConfiguration:ImagePipelineImageScanningConfiguration
export function imagebuilder_ImagePipelineImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ecrConfiguration = (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration(ctx, depth + 1));
  out.imageScanningEnabled = false;
  return out;
}

// aws:imagebuilder/ImagePipelineImageScanningConfigurationEcrConfiguration:ImagePipelineImageScanningConfigurationEcrConfiguration
export function imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.repositoryName = "";
  return out;
}

// aws:imagebuilder/ImagePipelineImageTestsConfiguration:ImagePipelineImageTestsConfiguration
export function imagebuilder_ImagePipelineImageTestsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageTestsEnabled = false;
  out.timeoutMinutes = 30;
  return out;
}

// aws:imagebuilder/ImagePipelineSchedule:ImagePipelineSchedule
export function imagebuilder_ImagePipelineSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pipelineExecutionStartCondition = "";
  out.scheduleExpression = "";
  out.timezone = "";
  return out;
}

// aws:imagebuilder/ImagePipelineWorkflow:ImagePipelineWorkflow
export function imagebuilder_ImagePipelineWorkflow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onFailure = "";
  out.parallelGroup = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineWorkflowParameter(ctx, depth + 1))]);
  out.workflowArn = h.arn(ctx);
  return out;
}

// aws:imagebuilder/ImagePipelineWorkflowParameter:ImagePipelineWorkflowParameter
export function imagebuilder_ImagePipelineWorkflowParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/ImageRecipeBlockDeviceMapping:ImageRecipeBlockDeviceMapping
export function imagebuilder_ImageRecipeBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageRecipeBlockDeviceMappingEbs(ctx, depth + 1));
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:imagebuilder/ImageRecipeBlockDeviceMappingEbs:ImageRecipeBlockDeviceMappingEbs
export function imagebuilder_ImageRecipeBlockDeviceMappingEbs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = "";
  out.encrypted = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:imagebuilder/ImageRecipeComponent:ImageRecipeComponent
export function imagebuilder_ImageRecipeComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageRecipeComponentParameter(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/ImageRecipeComponentParameter:ImageRecipeComponentParameter
export function imagebuilder_ImageRecipeComponentParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/ImageRecipeSystemsManagerAgent:ImageRecipeSystemsManagerAgent
export function imagebuilder_ImageRecipeSystemsManagerAgent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.uninstallAfterBuild = false;
  return out;
}

// aws:imagebuilder/ImageWorkflow:ImageWorkflow
export function imagebuilder_ImageWorkflow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onFailure = "";
  out.parallelGroup = "";
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageWorkflowParameter(ctx, depth + 1))]);
  out.workflowArn = h.arn(ctx);
  return out;
}

// aws:imagebuilder/ImageWorkflowParameter:ImageWorkflowParameter
export function imagebuilder_ImageWorkflowParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/InfrastructureConfigurationInstanceMetadataOptions:InfrastructureConfigurationInstanceMetadataOptions
export function imagebuilder_InfrastructureConfigurationInstanceMetadataOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  return out;
}

// aws:imagebuilder/InfrastructureConfigurationLogging:InfrastructureConfigurationLogging
export function imagebuilder_InfrastructureConfigurationLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Logs = (depth > 4 ? {} : T_imagebuilder.imagebuilder_InfrastructureConfigurationLoggingS3Logs(ctx, depth + 1));
  return out;
}

// aws:imagebuilder/InfrastructureConfigurationLoggingS3Logs:InfrastructureConfigurationLoggingS3Logs
export function imagebuilder_InfrastructureConfigurationLoggingS3Logs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  return out;
}

// aws:imagebuilder/InfrastructureConfigurationPlacement:InfrastructureConfigurationPlacement
export function imagebuilder_InfrastructureConfigurationPlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.hostId = h.id(ctx, "hostId");
  out.hostResourceGroupArn = h.arn(ctx);
  out.tenancy = "";
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetail:LifecyclePolicyPolicyDetail
export function imagebuilder_LifecyclePolicyPolicyDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailAction(ctx, depth + 1));
  out.exclusionRules = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailExclusionRules(ctx, depth + 1));
  out.filter = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailFilter(ctx, depth + 1));
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailAction:LifecyclePolicyPolicyDetailAction
export function imagebuilder_LifecyclePolicyPolicyDetailAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.includeResources = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailActionIncludeResources(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailActionIncludeResources:LifecyclePolicyPolicyDetailActionIncludeResources
export function imagebuilder_LifecyclePolicyPolicyDetailActionIncludeResources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amis = false;
  out.containers = false;
  out.snapshots = false;
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailExclusionRules:LifecyclePolicyPolicyDetailExclusionRules
export function imagebuilder_LifecyclePolicyPolicyDetailExclusionRules(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amis = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailExclusionRulesAmis(ctx, depth + 1));
  out.tagMap = {};
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailExclusionRulesAmis:LifecyclePolicyPolicyDetailExclusionRulesAmis
export function imagebuilder_LifecyclePolicyPolicyDetailExclusionRulesAmis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isPublic = true;
  out.lastLaunched = (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched(ctx, depth + 1));
  out.regions = (depth > 4 ? [] : [""]);
  out.sharedAccounts = (depth > 4 ? [] : [""]);
  out.tagMap = {};
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched:LifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched
export function imagebuilder_LifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:imagebuilder/LifecyclePolicyPolicyDetailFilter:LifecyclePolicyPolicyDetailFilter
export function imagebuilder_LifecyclePolicyPolicyDetailFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.retainAtLeast = 0;
  out.type = "";
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:imagebuilder/LifecyclePolicyResourceSelection:LifecyclePolicyResourceSelection
export function imagebuilder_LifecyclePolicyResourceSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recipes = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyResourceSelectionRecipe(ctx, depth + 1))]);
  out.tagMap = {};
  return out;
}

// aws:imagebuilder/LifecyclePolicyResourceSelectionRecipe:LifecyclePolicyResourceSelectionRecipe
export function imagebuilder_LifecyclePolicyResourceSelectionRecipe(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.semanticVersion = "";
  return out;
}

// aws:imagebuilder/getComponentsFilter:getComponentsFilter
export function imagebuilder_getComponentsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getContainerRecipeComponent:getContainerRecipeComponent
export function imagebuilder_getContainerRecipeComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeComponentParameter(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getContainerRecipeComponentParameter:getContainerRecipeComponentParameter
export function imagebuilder_getContainerRecipeComponentParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/getContainerRecipeInstanceConfiguration:getContainerRecipeInstanceConfiguration
export function imagebuilder_getContainerRecipeInstanceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockDeviceMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping(ctx, depth + 1))]);
  out.image = "";
  return out;
}

// aws:imagebuilder/getContainerRecipeInstanceConfigurationBlockDeviceMapping:getContainerRecipeInstanceConfigurationBlockDeviceMapping
export function imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb(ctx, depth + 1))]);
  out.noDevice = "";
  out.virtualName = "";
  return out;
}

// aws:imagebuilder/getContainerRecipeInstanceConfigurationBlockDeviceMappingEb:getContainerRecipeInstanceConfigurationBlockDeviceMappingEb
export function imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:imagebuilder/getContainerRecipeTargetRepository:getContainerRecipeTargetRepository
export function imagebuilder_getContainerRecipeTargetRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryName = "";
  out.service = "";
  return out;
}

// aws:imagebuilder/getContainerRecipesFilter:getContainerRecipesFilter
export function imagebuilder_getContainerRecipesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistribution:getDistributionConfigurationDistribution
export function imagebuilder_getDistributionConfigurationDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiDistributionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration(ctx, depth + 1))]);
  out.containerDistributionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration(ctx, depth + 1))]);
  out.fastLaunchConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration(ctx, depth + 1))]);
  out.launchTemplateConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration(ctx, depth + 1))]);
  out.licenseConfigurationArns = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  out.s3ExportConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionS3ExportConfiguration(ctx, depth + 1))]);
  out.ssmParameterConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionSsmParameterConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionAmiDistributionConfiguration:getDistributionConfigurationDistributionAmiDistributionConfiguration
export function imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiTags = {};
  out.description = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.launchPermissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission(ctx, depth + 1))]);
  out.name = ctx.name;
  out.targetAccountIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission:getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission
export function imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.organizationArns = (depth > 4 ? [] : [""]);
  out.organizationalUnitArns = (depth > 4 ? [] : [""]);
  out.userGroups = (depth > 4 ? [] : [""]);
  out.userIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionContainerDistributionConfiguration:getDistributionConfigurationDistributionContainerDistributionConfiguration
export function imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.description = "";
  out.targetRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository:getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository
export function imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryName = "";
  out.service = "";
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionFastLaunchConfiguration:getDistributionConfigurationDistributionFastLaunchConfiguration
export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.enabled = true;
  out.launchTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate(ctx, depth + 1))]);
  out.maxParallelLaunches = 0;
  out.snapshotConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate:getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate
export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.launchTemplateVersion = "";
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration:getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration
export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetResourceCount = 1;
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionLaunchTemplateConfiguration:getDistributionConfigurationDistributionLaunchTemplateConfiguration
export function imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.default = false;
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionS3ExportConfiguration:getDistributionConfigurationDistributionS3ExportConfiguration
export function imagebuilder_getDistributionConfigurationDistributionS3ExportConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskImageFormat = "";
  out.roleName = "";
  out.s3Bucket = "";
  out.s3Prefix = "";
  return out;
}

// aws:imagebuilder/getDistributionConfigurationDistributionSsmParameterConfiguration:getDistributionConfigurationDistributionSsmParameterConfiguration
export function imagebuilder_getDistributionConfigurationDistributionSsmParameterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiAccountId = h.id(ctx, "amiAccountId");
  out.dataType = "";
  out.parameterName = "";
  return out;
}

// aws:imagebuilder/getDistributionConfigurationsFilter:getDistributionConfigurationsFilter
export function imagebuilder_getDistributionConfigurationsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getImageImageScanningConfiguration:getImageImageScanningConfiguration
export function imagebuilder_getImageImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ecrConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageImageScanningConfigurationEcrConfiguration(ctx, depth + 1))]);
  out.imageScanningEnabled = false;
  return out;
}

// aws:imagebuilder/getImageImageScanningConfigurationEcrConfiguration:getImageImageScanningConfigurationEcrConfiguration
export function imagebuilder_getImageImageScanningConfigurationEcrConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.repositoryName = "";
  return out;
}

// aws:imagebuilder/getImageImageTestsConfiguration:getImageImageTestsConfiguration
export function imagebuilder_getImageImageTestsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageTestsEnabled = false;
  out.timeoutMinutes = 30;
  return out;
}

// aws:imagebuilder/getImageOutputResource:getImageOutputResource
export function imagebuilder_getImageOutputResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amis = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageOutputResourceAmi(ctx, depth + 1))]);
  out.containers = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageOutputResourceContainer(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getImageOutputResourceAmi:getImageOutputResourceAmi
export function imagebuilder_getImageOutputResourceAmi(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.description = "";
  out.image = "";
  out.name = ctx.name;
  out.region = ctx.region;
  return out;
}

// aws:imagebuilder/getImageOutputResourceContainer:getImageOutputResourceContainer
export function imagebuilder_getImageOutputResourceContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageUris = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  return out;
}

// aws:imagebuilder/getImagePipelineImageScanningConfiguration:getImagePipelineImageScanningConfiguration
export function imagebuilder_getImagePipelineImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ecrConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration(ctx, depth + 1))]);
  out.imageScanningEnabled = false;
  return out;
}

// aws:imagebuilder/getImagePipelineImageScanningConfigurationEcrConfiguration:getImagePipelineImageScanningConfigurationEcrConfiguration
export function imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerTags = (depth > 4 ? [] : [""]);
  out.repositoryName = "";
  return out;
}

// aws:imagebuilder/getImagePipelineImageTestsConfiguration:getImagePipelineImageTestsConfiguration
export function imagebuilder_getImagePipelineImageTestsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageTestsEnabled = false;
  out.timeoutMinutes = 30;
  return out;
}

// aws:imagebuilder/getImagePipelineSchedule:getImagePipelineSchedule
export function imagebuilder_getImagePipelineSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pipelineExecutionStartCondition = "";
  out.scheduleExpression = "";
  return out;
}

// aws:imagebuilder/getImagePipelinesFilter:getImagePipelinesFilter
export function imagebuilder_getImagePipelinesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getImageRecipeBlockDeviceMapping:getImageRecipeBlockDeviceMapping
export function imagebuilder_getImageRecipeBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageRecipeBlockDeviceMappingEb(ctx, depth + 1))]);
  out.noDevice = "";
  out.virtualName = "";
  return out;
}

// aws:imagebuilder/getImageRecipeBlockDeviceMappingEb:getImageRecipeBlockDeviceMappingEb
export function imagebuilder_getImageRecipeBlockDeviceMappingEb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = "";
  out.encrypted = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:imagebuilder/getImageRecipeComponent:getImageRecipeComponent
export function imagebuilder_getImageRecipeComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageRecipeComponentParameter(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getImageRecipeComponentParameter:getImageRecipeComponentParameter
export function imagebuilder_getImageRecipeComponentParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:imagebuilder/getImageRecipesFilter:getImageRecipesFilter
export function imagebuilder_getImageRecipesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurationInstanceMetadataOption:getInfrastructureConfigurationInstanceMetadataOption
export function imagebuilder_getInfrastructureConfigurationInstanceMetadataOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurationLogging:getInfrastructureConfigurationLogging
export function imagebuilder_getInfrastructureConfigurationLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Logs = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getInfrastructureConfigurationLoggingS3Log(ctx, depth + 1))]);
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurationLoggingS3Log:getInfrastructureConfigurationLoggingS3Log
export function imagebuilder_getInfrastructureConfigurationLoggingS3Log(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurationPlacement:getInfrastructureConfigurationPlacement
export function imagebuilder_getInfrastructureConfigurationPlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.hostId = h.id(ctx, "hostId");
  out.hostResourceGroupArn = h.arn(ctx);
  out.tenancy = "";
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurationsFilter:getInfrastructureConfigurationsFilter
export function imagebuilder_getInfrastructureConfigurationsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

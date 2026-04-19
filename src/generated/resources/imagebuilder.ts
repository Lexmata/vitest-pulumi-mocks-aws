// GENERATED FILE — do not edit.
// Service: imagebuilder   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_imagebuilder from "../types/imagebuilder.js";

// aws:imagebuilder/component:Component
export function Component(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.changeDescription = (i.changeDescription !== undefined ? i.changeDescription : "");
  out.data = (i.data !== undefined ? i.data : "");
  out.dateCreated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.encrypted = false;
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.platform = (i.platform !== undefined ? i.platform : "");
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.supportedOsVersions = (i.supportedOsVersions !== undefined ? i.supportedOsVersions : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  out.uri = (i.uri !== undefined ? i.uri : h.endpoint(ctx, "uri"));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:imagebuilder/containerRecipe:ContainerRecipe
export function ContainerRecipe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.components = (i.components !== undefined ? i.components : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeComponent(ctx, depth + 1))]));
  out.containerType = (i.containerType !== undefined ? i.containerType : "");
  out.dateCreated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.dockerfileTemplateData = (i.dockerfileTemplateData !== undefined ? i.dockerfileTemplateData : "");
  out.dockerfileTemplateUri = (i.dockerfileTemplateUri !== undefined ? i.dockerfileTemplateUri : h.endpoint(ctx, "dockerfileTemplateUri"));
  out.encrypted = false;
  out.instanceConfiguration = (i.instanceConfiguration !== undefined ? i.instanceConfiguration : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeInstanceConfiguration(ctx, depth + 1)));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.parentImage = (i.parentImage !== undefined ? i.parentImage : "");
  out.platform = "";
  out.platformOverride = (i.platformOverride !== undefined ? i.platformOverride : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetRepository = (i.targetRepository !== undefined ? i.targetRepository : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ContainerRecipeTargetRepository(ctx, depth + 1)));
  out.version = (i.version !== undefined ? i.version : "1");
  out.workingDirectory = (i.workingDirectory !== undefined ? i.workingDirectory : "");
  return out;
}

// aws:imagebuilder/distributionConfiguration:DistributionConfiguration
export function DistributionConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dateCreated = "";
  out.dateUpdated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.distributions = (i.distributions !== undefined ? i.distributions : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_DistributionConfigurationDistribution(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:imagebuilder/image:Image
export function Image(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.containerRecipeArn = (i.containerRecipeArn !== undefined ? i.containerRecipeArn : h.arn(ctx));
  out.dateCreated = "";
  out.distributionConfigurationArn = (i.distributionConfigurationArn !== undefined ? i.distributionConfigurationArn : h.arn(ctx));
  out.enhancedImageMetadataEnabled = (i.enhancedImageMetadataEnabled !== undefined ? i.enhancedImageMetadataEnabled : false);
  out.executionRole = (i.executionRole !== undefined ? i.executionRole : "");
  out.imageRecipeArn = (i.imageRecipeArn !== undefined ? i.imageRecipeArn : h.arn(ctx));
  out.imageScanningConfiguration = (i.imageScanningConfiguration !== undefined ? i.imageScanningConfiguration : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageImageScanningConfiguration(ctx, depth + 1)));
  out.imageTestsConfiguration = (i.imageTestsConfiguration !== undefined ? i.imageTestsConfiguration : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageImageTestsConfiguration(ctx, depth + 1)));
  out.infrastructureConfigurationArn = (i.infrastructureConfigurationArn !== undefined ? i.infrastructureConfigurationArn : h.arn(ctx));
  out.name = ctx.name;
  out.osVersion = "";
  out.outputResources = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageOutputResource(ctx, depth + 1))]);
  out.platform = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = "1";
  out.workflows = (i.workflows !== undefined ? i.workflows : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageWorkflow(ctx, depth + 1))]));
  return out;
}

// aws:imagebuilder/imagePipeline:ImagePipeline
export function ImagePipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.containerRecipeArn = (i.containerRecipeArn !== undefined ? i.containerRecipeArn : h.arn(ctx));
  out.dateCreated = "";
  out.dateLastRun = "";
  out.dateNextRun = "";
  out.dateUpdated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.distributionConfigurationArn = (i.distributionConfigurationArn !== undefined ? i.distributionConfigurationArn : h.arn(ctx));
  out.enhancedImageMetadataEnabled = (i.enhancedImageMetadataEnabled !== undefined ? i.enhancedImageMetadataEnabled : false);
  out.executionRole = (i.executionRole !== undefined ? i.executionRole : "");
  out.imageRecipeArn = (i.imageRecipeArn !== undefined ? i.imageRecipeArn : h.arn(ctx));
  out.imageScanningConfiguration = (i.imageScanningConfiguration !== undefined ? i.imageScanningConfiguration : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineImageScanningConfiguration(ctx, depth + 1)));
  out.imageTestsConfiguration = (i.imageTestsConfiguration !== undefined ? i.imageTestsConfiguration : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineImageTestsConfiguration(ctx, depth + 1)));
  out.infrastructureConfigurationArn = (i.infrastructureConfigurationArn !== undefined ? i.infrastructureConfigurationArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.platform = "";
  out.schedule = (i.schedule !== undefined ? i.schedule : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineSchedule(ctx, depth + 1)));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.workflows = (i.workflows !== undefined ? i.workflows : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImagePipelineWorkflow(ctx, depth + 1))]));
  return out;
}

// aws:imagebuilder/imageRecipe:ImageRecipe
export function ImageRecipe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.blockDeviceMappings = (i.blockDeviceMappings !== undefined ? i.blockDeviceMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageRecipeBlockDeviceMapping(ctx, depth + 1))]));
  out.components = (i.components !== undefined ? i.components : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageRecipeComponent(ctx, depth + 1))]));
  out.dateCreated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.parentImage = (i.parentImage !== undefined ? i.parentImage : "");
  out.platform = "";
  out.systemsManagerAgent = (i.systemsManagerAgent !== undefined ? i.systemsManagerAgent : (depth > 4 ? {} : T_imagebuilder.imagebuilder_ImageRecipeSystemsManagerAgent(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userDataBase64 = (i.userDataBase64 !== undefined ? i.userDataBase64 : "");
  out.version = (i.version !== undefined ? i.version : "1");
  out.workingDirectory = (i.workingDirectory !== undefined ? i.workingDirectory : "");
  return out;
}

// aws:imagebuilder/infrastructureConfiguration:InfrastructureConfiguration
export function InfrastructureConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dateCreated = "";
  out.dateUpdated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceMetadataOptions = (i.instanceMetadataOptions !== undefined ? i.instanceMetadataOptions : (depth > 4 ? {} : T_imagebuilder.imagebuilder_InfrastructureConfigurationInstanceMetadataOptions(ctx, depth + 1)));
  out.instanceProfileName = (i.instanceProfileName !== undefined ? i.instanceProfileName : "");
  out.instanceTypes = (i.instanceTypes !== undefined ? i.instanceTypes : (depth > 4 ? [] : [""]));
  out.keyPair = (i.keyPair !== undefined ? i.keyPair : "");
  out.logging = (i.logging !== undefined ? i.logging : (depth > 4 ? {} : T_imagebuilder.imagebuilder_InfrastructureConfigurationLogging(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.placement = (i.placement !== undefined ? i.placement : (depth > 4 ? {} : T_imagebuilder.imagebuilder_InfrastructureConfigurationPlacement(ctx, depth + 1)));
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : {});
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.terminateInstanceOnFailure = (i.terminateInstanceOnFailure !== undefined ? i.terminateInstanceOnFailure : false);
  return out;
}

// aws:imagebuilder/lifecyclePolicy:LifecyclePolicy
export function LifecyclePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.executionRole = (i.executionRole !== undefined ? i.executionRole : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyDetails = (i.policyDetails !== undefined ? i.policyDetails : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyPolicyDetail(ctx, depth + 1))]));
  out.resourceSelection = (i.resourceSelection !== undefined ? i.resourceSelection : (depth > 4 ? {} : T_imagebuilder.imagebuilder_LifecyclePolicyResourceSelection(ctx, depth + 1)));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:imagebuilder/workflow:Workflow
export function Workflow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.changeDescription = (i.changeDescription !== undefined ? i.changeDescription : "");
  out.data = (i.data !== undefined ? i.data : "");
  out.dateCreated = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.uri = (i.uri !== undefined ? i.uri : h.endpoint(ctx, "uri"));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

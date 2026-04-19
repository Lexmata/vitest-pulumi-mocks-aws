// GENERATED FILE — do not edit.
// Service: imagebuilder   (13 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_imagebuilder from "../types/imagebuilder.js";

// aws:imagebuilder/getComponent:getComponent
export function getComponent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.changeDescription = "";
  out.data = "";
  out.dateCreated = "";
  out.description = "";
  out.encrypted = false;
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.name = ctx.name;
  out.owner = ctx.accountId;
  out.platform = "";
  out.supportedOsVersions = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.version = "1";
  return out;
}

// aws:imagebuilder/getComponents:getComponents
export function getComponents(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getComponentsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  return out;
}

// aws:imagebuilder/getContainerRecipe:getContainerRecipe
export function getContainerRecipe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeComponent(ctx, depth + 1))]);
  out.containerType = "";
  out.dateCreated = "";
  out.description = "";
  out.dockerfileTemplateData = "";
  out.encrypted = false;
  out.id = h.id(ctx, "id");
  out.instanceConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeInstanceConfiguration(ctx, depth + 1))]);
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.name = ctx.name;
  out.owner = ctx.accountId;
  out.parentImage = "";
  out.platform = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.targetRepositories = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipeTargetRepository(ctx, depth + 1))]);
  out.version = "1";
  out.workingDirectory = "";
  return out;
}

// aws:imagebuilder/getContainerRecipes:getContainerRecipes
export function getContainerRecipes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getContainerRecipesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  return out;
}

// aws:imagebuilder/getDistributionConfiguration:getDistributionConfiguration
export function getDistributionConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.dateCreated = "";
  out.dateUpdated = "";
  out.description = "";
  out.distributions = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationDistribution(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:imagebuilder/getDistributionConfigurations:getDistributionConfigurations
export function getDistributionConfigurations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getDistributionConfigurationsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getImage:getImage
export function getImage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.buildVersionArn = h.arn(ctx);
  out.containerRecipeArn = h.arn(ctx);
  out.dateCreated = "";
  out.distributionConfigurationArn = h.arn(ctx);
  out.enhancedImageMetadataEnabled = false;
  out.id = h.id(ctx, "id");
  out.imageRecipeArn = h.arn(ctx);
  out.imageScanningConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageImageScanningConfiguration(ctx, depth + 1))]);
  out.imageTestsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageImageTestsConfiguration(ctx, depth + 1))]);
  out.infrastructureConfigurationArn = h.arn(ctx);
  out.name = ctx.name;
  out.osVersion = "";
  out.outputResources = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageOutputResource(ctx, depth + 1))]);
  out.platform = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = "1";
  return out;
}

// aws:imagebuilder/getImagePipeline:getImagePipeline
export function getImagePipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.containerRecipeArn = h.arn(ctx);
  out.dateCreated = "";
  out.dateLastRun = "";
  out.dateNextRun = "";
  out.dateUpdated = "";
  out.description = "";
  out.distributionConfigurationArn = h.arn(ctx);
  out.enhancedImageMetadataEnabled = false;
  out.id = h.id(ctx, "id");
  out.imageRecipeArn = h.arn(ctx);
  out.imageScanningConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImagePipelineImageScanningConfiguration(ctx, depth + 1))]);
  out.imageTestsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImagePipelineImageTestsConfiguration(ctx, depth + 1))]);
  out.infrastructureConfigurationArn = h.arn(ctx);
  out.name = ctx.name;
  out.platform = "";
  out.schedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImagePipelineSchedule(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:imagebuilder/getImagePipelines:getImagePipelines
export function getImagePipelines(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImagePipelinesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

// aws:imagebuilder/getImageRecipe:getImageRecipe
export function getImageRecipe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.blockDeviceMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageRecipeBlockDeviceMapping(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageRecipeComponent(ctx, depth + 1))]);
  out.dateCreated = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.owner = ctx.accountId;
  out.parentImage = "";
  out.platform = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userDataBase64 = "";
  out.version = "1";
  out.workingDirectory = "";
  return out;
}

// aws:imagebuilder/getImageRecipes:getImageRecipes
export function getImageRecipes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getImageRecipesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  return out;
}

// aws:imagebuilder/getInfrastructureConfiguration:getInfrastructureConfiguration
export function getInfrastructureConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.dateCreated = "";
  out.dateUpdated = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceMetadataOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getInfrastructureConfigurationInstanceMetadataOption(ctx, depth + 1))]);
  out.instanceProfileName = "";
  out.instanceTypes = (depth > 4 ? [] : [""]);
  out.keyPair = "";
  out.loggings = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getInfrastructureConfigurationLogging(ctx, depth + 1))]);
  out.name = ctx.name;
  out.placements = (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getInfrastructureConfigurationPlacement(ctx, depth + 1))]);
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : {});
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.snsTopicArn = h.arn(ctx);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.terminateInstanceOnFailure = false;
  return out;
}

// aws:imagebuilder/getInfrastructureConfigurations:getInfrastructureConfigurations
export function getInfrastructureConfigurations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_imagebuilder.imagebuilder_getInfrastructureConfigurationsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

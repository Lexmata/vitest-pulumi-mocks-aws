// GENERATED FILE — do not edit.
// Service: codebuild   (38 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codebuild from "./codebuild.js";

// aws:codebuild/FleetComputeConfiguration:FleetComputeConfiguration
export function codebuild_FleetComputeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disk = 0;
  out.machineType = "";
  out.memory = 0;
  out.vcpu = 0;
  return out;
}

// aws:codebuild/FleetScalingConfiguration:FleetScalingConfiguration
export function codebuild_FleetScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredCapacity = 0;
  out.maxCapacity = 0;
  out.scalingType = "";
  out.targetTrackingScalingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_FleetScalingConfigurationTargetTrackingScalingConfig(ctx, depth + 1))]);
  return out;
}

// aws:codebuild/FleetScalingConfigurationTargetTrackingScalingConfig:FleetScalingConfigurationTargetTrackingScalingConfig
export function codebuild_FleetScalingConfigurationTargetTrackingScalingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricType = "";
  out.targetValue = 0;
  return out;
}

// aws:codebuild/FleetStatus:FleetStatus
export function codebuild_FleetStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = "";
  out.message = "";
  out.statusCode = "";
  return out;
}

// aws:codebuild/FleetVpcConfig:FleetVpcConfig
export function codebuild_FleetVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:codebuild/ProjectArtifacts:ProjectArtifacts
export function codebuild_ProjectArtifacts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.artifactIdentifier = "";
  out.bucketOwnerAccess = "";
  out.encryptionDisabled = false;
  out.location = "";
  out.name = ctx.name;
  out.namespaceType = "";
  out.overrideArtifactName = false;
  out.packaging = "";
  out.path = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectBuildBatchConfig:ProjectBuildBatchConfig
export function codebuild_ProjectBuildBatchConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.combineArtifacts = false;
  out.restrictions = (depth > 4 ? {} : T_codebuild.codebuild_ProjectBuildBatchConfigRestrictions(ctx, depth + 1));
  out.serviceRole = "";
  out.timeoutInMins = 30;
  return out;
}

// aws:codebuild/ProjectBuildBatchConfigRestrictions:ProjectBuildBatchConfigRestrictions
export function codebuild_ProjectBuildBatchConfigRestrictions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeTypesAlloweds = (depth > 4 ? [] : [""]);
  out.maximumBuildsAllowed = 0;
  return out;
}

// aws:codebuild/ProjectCache:ProjectCache
export function codebuild_ProjectCache(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.location = "";
  out.modes = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:codebuild/ProjectEnvironment:ProjectEnvironment
export function codebuild_ProjectEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = "";
  out.computeType = "";
  out.environmentVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_ProjectEnvironmentEnvironmentVariable(ctx, depth + 1))]);
  out.fleet = (depth > 4 ? {} : T_codebuild.codebuild_ProjectEnvironmentFleet(ctx, depth + 1));
  out.image = "";
  out.imagePullCredentialsType = "";
  out.privilegedMode = false;
  out.registryCredential = (depth > 4 ? {} : T_codebuild.codebuild_ProjectEnvironmentRegistryCredential(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:codebuild/ProjectEnvironmentEnvironmentVariable:ProjectEnvironmentEnvironmentVariable
export function codebuild_ProjectEnvironmentEnvironmentVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  out.value = "";
  return out;
}

// aws:codebuild/ProjectEnvironmentFleet:ProjectEnvironmentFleet
export function codebuild_ProjectEnvironmentFleet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fleetArn = h.arn(ctx);
  return out;
}

// aws:codebuild/ProjectEnvironmentRegistryCredential:ProjectEnvironmentRegistryCredential
export function codebuild_ProjectEnvironmentRegistryCredential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credential = "";
  out.credentialProvider = "";
  return out;
}

// aws:codebuild/ProjectFileSystemLocation:ProjectFileSystemLocation
export function codebuild_ProjectFileSystemLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  out.location = "";
  out.mountOptions = "";
  out.mountPoint = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectLogsConfig:ProjectLogsConfig
export function codebuild_ProjectLogsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_codebuild.codebuild_ProjectLogsConfigCloudwatchLogs(ctx, depth + 1));
  out.s3Logs = (depth > 4 ? {} : T_codebuild.codebuild_ProjectLogsConfigS3Logs(ctx, depth + 1));
  return out;
}

// aws:codebuild/ProjectLogsConfigCloudwatchLogs:ProjectLogsConfigCloudwatchLogs
export function codebuild_ProjectLogsConfigCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = "";
  out.status = "active";
  out.streamName = "";
  return out;
}

// aws:codebuild/ProjectLogsConfigS3Logs:ProjectLogsConfigS3Logs
export function codebuild_ProjectLogsConfigS3Logs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketOwnerAccess = "";
  out.encryptionDisabled = false;
  out.location = "";
  out.status = "active";
  return out;
}

// aws:codebuild/ProjectSecondaryArtifact:ProjectSecondaryArtifact
export function codebuild_ProjectSecondaryArtifact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.artifactIdentifier = "";
  out.bucketOwnerAccess = "";
  out.encryptionDisabled = false;
  out.location = "";
  out.name = ctx.name;
  out.namespaceType = "";
  out.overrideArtifactName = false;
  out.packaging = "";
  out.path = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectSecondarySource:ProjectSecondarySource
export function codebuild_ProjectSecondarySource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auth = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondarySourceAuth(ctx, depth + 1));
  out.buildStatusConfig = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondarySourceBuildStatusConfig(ctx, depth + 1));
  out.buildspec = "";
  out.gitCloneDepth = 0;
  out.gitSubmodulesConfig = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondarySourceGitSubmodulesConfig(ctx, depth + 1));
  out.insecureSsl = false;
  out.location = "";
  out.reportBuildStatus = false;
  out.sourceIdentifier = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectSecondarySourceAuth:ProjectSecondarySourceAuth
export function codebuild_ProjectSecondarySourceAuth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resource = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectSecondarySourceBuildStatusConfig:ProjectSecondarySourceBuildStatusConfig
export function codebuild_ProjectSecondarySourceBuildStatusConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = "";
  out.targetUrl = h.endpoint(ctx, "targetUrl");
  return out;
}

// aws:codebuild/ProjectSecondarySourceGitSubmodulesConfig:ProjectSecondarySourceGitSubmodulesConfig
export function codebuild_ProjectSecondarySourceGitSubmodulesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fetchSubmodules = false;
  return out;
}

// aws:codebuild/ProjectSecondarySourceVersion:ProjectSecondarySourceVersion
export function codebuild_ProjectSecondarySourceVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceIdentifier = "";
  out.sourceVersion = "";
  return out;
}

// aws:codebuild/ProjectSource:ProjectSource
export function codebuild_ProjectSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auth = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSourceAuth(ctx, depth + 1));
  out.buildStatusConfig = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSourceBuildStatusConfig(ctx, depth + 1));
  out.buildspec = "";
  out.gitCloneDepth = 0;
  out.gitSubmodulesConfig = (depth > 4 ? {} : T_codebuild.codebuild_ProjectSourceGitSubmodulesConfig(ctx, depth + 1));
  out.insecureSsl = false;
  out.location = "";
  out.reportBuildStatus = false;
  out.type = "";
  return out;
}

// aws:codebuild/ProjectSourceAuth:ProjectSourceAuth
export function codebuild_ProjectSourceAuth(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resource = "";
  out.type = "";
  return out;
}

// aws:codebuild/ProjectSourceBuildStatusConfig:ProjectSourceBuildStatusConfig
export function codebuild_ProjectSourceBuildStatusConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = "";
  out.targetUrl = h.endpoint(ctx, "targetUrl");
  return out;
}

// aws:codebuild/ProjectSourceGitSubmodulesConfig:ProjectSourceGitSubmodulesConfig
export function codebuild_ProjectSourceGitSubmodulesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fetchSubmodules = false;
  return out;
}

// aws:codebuild/ProjectVpcConfig:ProjectVpcConfig
export function codebuild_ProjectVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:codebuild/ReportGroupExportConfig:ReportGroupExportConfig
export function codebuild_ReportGroupExportConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Destination = (depth > 4 ? {} : T_codebuild.codebuild_ReportGroupExportConfigS3Destination(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:codebuild/ReportGroupExportConfigS3Destination:ReportGroupExportConfigS3Destination
export function codebuild_ReportGroupExportConfigS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.encryptionDisabled = false;
  out.encryptionKey = "";
  out.packaging = "";
  out.path = "";
  return out;
}

// aws:codebuild/WebhookFilterGroup:WebhookFilterGroup
export function codebuild_WebhookFilterGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_WebhookFilterGroupFilter(ctx, depth + 1))]);
  return out;
}

// aws:codebuild/WebhookFilterGroupFilter:WebhookFilterGroupFilter
export function codebuild_WebhookFilterGroupFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludeMatchedPattern = false;
  out.pattern = "";
  out.type = "";
  return out;
}

// aws:codebuild/WebhookScopeConfiguration:WebhookScopeConfiguration
export function codebuild_WebhookScopeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.name = ctx.name;
  out.scope = "";
  return out;
}

// aws:codebuild/getFleetComputeConfiguration:getFleetComputeConfiguration
export function codebuild_getFleetComputeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disk = 0;
  out.machineType = "";
  out.memory = 0;
  out.vcpu = 0;
  return out;
}

// aws:codebuild/getFleetScalingConfiguration:getFleetScalingConfiguration
export function codebuild_getFleetScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredCapacity = 0;
  out.maxCapacity = 0;
  out.scalingType = "";
  out.targetTrackingScalingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_getFleetScalingConfigurationTargetTrackingScalingConfig(ctx, depth + 1))]);
  return out;
}

// aws:codebuild/getFleetScalingConfigurationTargetTrackingScalingConfig:getFleetScalingConfigurationTargetTrackingScalingConfig
export function codebuild_getFleetScalingConfigurationTargetTrackingScalingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricType = "";
  out.targetValue = 0;
  return out;
}

// aws:codebuild/getFleetStatus:getFleetStatus
export function codebuild_getFleetStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = "";
  out.message = "";
  out.statusCode = "";
  return out;
}

// aws:codebuild/getFleetVpcConfig:getFleetVpcConfig
export function codebuild_getFleetVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

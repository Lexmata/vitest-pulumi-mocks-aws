// GENERATED FILE — do not edit.
// Service: batch   (78 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_batch from "./batch.js";

// aws:batch/ComputeEnvironmentComputeResources:ComputeEnvironmentComputeResources
export function batch_ComputeEnvironmentComputeResources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.bidPercentage = 0;
  out.desiredVcpus = 0;
  out.ec2Configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_ComputeEnvironmentComputeResourcesEc2Configuration(ctx, depth + 1))]);
  out.ec2KeyPair = "";
  out.imageId = h.id(ctx, "imageId");
  out.instanceRole = "";
  out.instanceTypes = (depth > 4 ? [] : [""]);
  out.launchTemplate = (depth > 4 ? {} : T_batch.batch_ComputeEnvironmentComputeResourcesLaunchTemplate(ctx, depth + 1));
  out.maxVcpus = 0;
  out.minVcpus = 0;
  out.placementGroup = "";
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.spotIamFleetRole = "";
  out.subnets = (depth > 4 ? [] : [""]);
  out.tags = {};
  out.type = "";
  return out;
}

// aws:batch/ComputeEnvironmentComputeResourcesEc2Configuration:ComputeEnvironmentComputeResourcesEc2Configuration
export function batch_ComputeEnvironmentComputeResourcesEc2Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageIdOverride = "";
  out.imageType = "";
  return out;
}

// aws:batch/ComputeEnvironmentComputeResourcesLaunchTemplate:ComputeEnvironmentComputeResourcesLaunchTemplate
export function batch_ComputeEnvironmentComputeResourcesLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:batch/ComputeEnvironmentEksConfiguration:ComputeEnvironmentEksConfiguration
export function batch_ComputeEnvironmentEksConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eksClusterArn = h.arn(ctx);
  out.kubernetesNamespace = "";
  return out;
}

// aws:batch/ComputeEnvironmentUpdatePolicy:ComputeEnvironmentUpdatePolicy
export function batch_ComputeEnvironmentUpdatePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jobExecutionTimeoutMinutes = 30;
  out.terminateJobsOnUpdate = false;
  return out;
}

// aws:batch/JobDefinitionEksProperties:JobDefinitionEksProperties
export function batch_JobDefinitionEksProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.podProperties = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodProperties(ctx, depth + 1));
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodProperties:JobDefinitionEksPropertiesPodProperties
export function batch_JobDefinitionEksPropertiesPodProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containers = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesContainers(ctx, depth + 1));
  out.dnsPolicy = "";
  out.hostNetwork = false;
  out.imagePullSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret(ctx, depth + 1))]);
  out.initContainers = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesInitContainer(ctx, depth + 1))]);
  out.metadata = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesMetadata(ctx, depth + 1));
  out.serviceAccountName = "";
  out.shareProcessNamespace = false;
  out.volumes = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesVolume(ctx, depth + 1))]);
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesContainers:JobDefinitionEksPropertiesPodPropertiesContainers
export function batch_JobDefinitionEksPropertiesPodPropertiesContainers(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.commands = (depth > 4 ? [] : [""]);
  out.envs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv(ctx, depth + 1))]);
  out.image = "";
  out.imagePullPolicy = "";
  out.name = ctx.name;
  out.resources = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesContainersResources(ctx, depth + 1));
  out.securityContext = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext(ctx, depth + 1));
  out.volumeMounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount(ctx, depth + 1))]);
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesContainersEnv:JobDefinitionEksPropertiesPodPropertiesContainersEnv
export function batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesContainersResources:JobDefinitionEksPropertiesPodPropertiesContainersResources
export function batch_JobDefinitionEksPropertiesPodPropertiesContainersResources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limits = {};
  out.requests = {};
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext:JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext
export function batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privileged = false;
  out.readOnlyRootFileSystem = false;
  out.runAsGroup = 0;
  out.runAsNonRoot = false;
  out.runAsUser = 0;
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount:JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount
export function batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountPath = "";
  out.name = ctx.name;
  out.readOnly = false;
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesImagePullSecret:JobDefinitionEksPropertiesPodPropertiesImagePullSecret
export function batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesInitContainer:JobDefinitionEksPropertiesPodPropertiesInitContainer
export function batch_JobDefinitionEksPropertiesPodPropertiesInitContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.commands = (depth > 4 ? [] : [""]);
  out.envs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesInitContainerEnv(ctx, depth + 1))]);
  out.image = "";
  out.imagePullPolicy = "";
  out.name = ctx.name;
  out.resources = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesInitContainerResources(ctx, depth + 1));
  out.securityContext = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesInitContainerSecurityContext(ctx, depth + 1));
  out.volumeMounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesInitContainerVolumeMount(ctx, depth + 1))]);
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesInitContainerEnv:JobDefinitionEksPropertiesPodPropertiesInitContainerEnv
export function batch_JobDefinitionEksPropertiesPodPropertiesInitContainerEnv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesInitContainerResources:JobDefinitionEksPropertiesPodPropertiesInitContainerResources
export function batch_JobDefinitionEksPropertiesPodPropertiesInitContainerResources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limits = {};
  out.requests = {};
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesInitContainerSecurityContext:JobDefinitionEksPropertiesPodPropertiesInitContainerSecurityContext
export function batch_JobDefinitionEksPropertiesPodPropertiesInitContainerSecurityContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privileged = false;
  out.readOnlyRootFileSystem = false;
  out.runAsGroup = 0;
  out.runAsNonRoot = false;
  out.runAsUser = 0;
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesInitContainerVolumeMount:JobDefinitionEksPropertiesPodPropertiesInitContainerVolumeMount
export function batch_JobDefinitionEksPropertiesPodPropertiesInitContainerVolumeMount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountPath = "";
  out.name = ctx.name;
  out.readOnly = false;
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesMetadata:JobDefinitionEksPropertiesPodPropertiesMetadata
export function batch_JobDefinitionEksPropertiesPodPropertiesMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labels = {};
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesVolume:JobDefinitionEksPropertiesPodPropertiesVolume
export function batch_JobDefinitionEksPropertiesPodPropertiesVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emptyDir = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir(ctx, depth + 1));
  out.hostPath = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath(ctx, depth + 1));
  out.name = ctx.name;
  out.secret = (depth > 4 ? {} : T_batch.batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret(ctx, depth + 1));
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir:JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir
export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.medium = "";
  out.sizeLimit = "";
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesVolumeHostPath:JobDefinitionEksPropertiesPodPropertiesVolumeHostPath
export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.path = "";
  return out;
}

// aws:batch/JobDefinitionEksPropertiesPodPropertiesVolumeSecret:JobDefinitionEksPropertiesPodPropertiesVolumeSecret
export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optional = false;
  out.secretName = "";
  return out;
}

// aws:batch/JobDefinitionRetryStrategy:JobDefinitionRetryStrategy
export function batch_JobDefinitionRetryStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attempts = 0;
  out.evaluateOnExits = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobDefinitionRetryStrategyEvaluateOnExit(ctx, depth + 1))]);
  return out;
}

// aws:batch/JobDefinitionRetryStrategyEvaluateOnExit:JobDefinitionRetryStrategyEvaluateOnExit
export function batch_JobDefinitionRetryStrategyEvaluateOnExit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.onExitCode = "";
  out.onReason = "";
  out.onStatusReason = "";
  return out;
}

// aws:batch/JobDefinitionTimeout:JobDefinitionTimeout
export function batch_JobDefinitionTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attemptDurationSeconds = 0;
  return out;
}

// aws:batch/JobQueueComputeEnvironmentOrder:JobQueueComputeEnvironmentOrder
export function batch_JobQueueComputeEnvironmentOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeEnvironment = "";
  out.order = 0;
  return out;
}

// aws:batch/JobQueueJobStateTimeLimitAction:JobQueueJobStateTimeLimitAction
export function batch_JobQueueJobStateTimeLimitAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.maxTimeSeconds = 0;
  out.reason = "";
  out.state = "active";
  return out;
}

// aws:batch/JobQueueTimeouts:JobQueueTimeouts
export function batch_JobQueueTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:batch/SchedulingPolicyFairSharePolicy:SchedulingPolicyFairSharePolicy
export function batch_SchedulingPolicyFairSharePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeReservation = 0;
  out.shareDecaySeconds = 0;
  out.shareDistributions = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_SchedulingPolicyFairSharePolicyShareDistribution(ctx, depth + 1))]);
  return out;
}

// aws:batch/SchedulingPolicyFairSharePolicyShareDistribution:SchedulingPolicyFairSharePolicyShareDistribution
export function batch_SchedulingPolicyFairSharePolicyShareDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.shareIdentifier = "";
  out.weightFactor = 0;
  return out;
}

// aws:batch/getComputeEnvironmentUpdatePolicy:getComputeEnvironmentUpdatePolicy
export function batch_getComputeEnvironmentUpdatePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jobExecutionTimeoutMinutes = 30;
  out.terminateJobsOnUpdate = false;
  return out;
}

// aws:batch/getJobDefinitionEksProperty:getJobDefinitionEksProperty
export function batch_getJobDefinitionEksProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.podProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodProperty(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodProperty:getJobDefinitionEksPropertyPodProperty
export function batch_getJobDefinitionEksPropertyPodProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containers = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyContainer(ctx, depth + 1))]);
  out.dnsPolicy = "";
  out.hostNetwork = false;
  out.imagePullSecrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyImagePullSecret(ctx, depth + 1))]);
  out.initContainers = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyInitContainer(ctx, depth + 1))]);
  out.metadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyMetadata(ctx, depth + 1))]);
  out.serviceAccountName = "";
  out.shareProcessNamespace = false;
  out.volumes = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyVolume(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyContainer:getJobDefinitionEksPropertyPodPropertyContainer
export function batch_getJobDefinitionEksPropertyPodPropertyContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.commands = (depth > 4 ? [] : [""]);
  out.envs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyContainerEnv(ctx, depth + 1))]);
  out.image = "";
  out.imagePullPolicy = "";
  out.name = ctx.name;
  out.resources = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyContainerResource(ctx, depth + 1))]);
  out.securityContexts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext(ctx, depth + 1))]);
  out.volumeMounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyContainerEnv:getJobDefinitionEksPropertyPodPropertyContainerEnv
export function batch_getJobDefinitionEksPropertyPodPropertyContainerEnv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyContainerResource:getJobDefinitionEksPropertyPodPropertyContainerResource
export function batch_getJobDefinitionEksPropertyPodPropertyContainerResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limits = {};
  out.requests = {};
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyContainerSecurityContext:getJobDefinitionEksPropertyPodPropertyContainerSecurityContext
export function batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privileged = false;
  out.readOnlyRootFileSystem = false;
  out.runAsGroup = 0;
  out.runAsNonRoot = false;
  out.runAsUser = 0;
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyContainerVolumeMount:getJobDefinitionEksPropertyPodPropertyContainerVolumeMount
export function batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountPath = "";
  out.name = ctx.name;
  out.readOnly = false;
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyImagePullSecret:getJobDefinitionEksPropertyPodPropertyImagePullSecret
export function batch_getJobDefinitionEksPropertyPodPropertyImagePullSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyInitContainer:getJobDefinitionEksPropertyPodPropertyInitContainer
export function batch_getJobDefinitionEksPropertyPodPropertyInitContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.commands = (depth > 4 ? [] : [""]);
  out.envs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyInitContainerEnv(ctx, depth + 1))]);
  out.image = "";
  out.imagePullPolicy = "";
  out.name = ctx.name;
  out.resources = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyInitContainerResource(ctx, depth + 1))]);
  out.securityContexts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyInitContainerSecurityContext(ctx, depth + 1))]);
  out.volumeMounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyInitContainerVolumeMount(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyInitContainerEnv:getJobDefinitionEksPropertyPodPropertyInitContainerEnv
export function batch_getJobDefinitionEksPropertyPodPropertyInitContainerEnv(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyInitContainerResource:getJobDefinitionEksPropertyPodPropertyInitContainerResource
export function batch_getJobDefinitionEksPropertyPodPropertyInitContainerResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limits = {};
  out.requests = {};
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyInitContainerSecurityContext:getJobDefinitionEksPropertyPodPropertyInitContainerSecurityContext
export function batch_getJobDefinitionEksPropertyPodPropertyInitContainerSecurityContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.privileged = false;
  out.readOnlyRootFileSystem = false;
  out.runAsGroup = 0;
  out.runAsNonRoot = false;
  out.runAsUser = 0;
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyInitContainerVolumeMount:getJobDefinitionEksPropertyPodPropertyInitContainerVolumeMount
export function batch_getJobDefinitionEksPropertyPodPropertyInitContainerVolumeMount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountPath = "";
  out.name = ctx.name;
  out.readOnly = false;
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyMetadata:getJobDefinitionEksPropertyPodPropertyMetadata
export function batch_getJobDefinitionEksPropertyPodPropertyMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labels = {};
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyVolume:getJobDefinitionEksPropertyPodPropertyVolume
export function batch_getJobDefinitionEksPropertyPodPropertyVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emptyDirs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir(ctx, depth + 1))]);
  out.hostPaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath(ctx, depth + 1))]);
  out.name = ctx.name;
  out.secrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir:getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir
export function batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.medium = "";
  out.sizeLimit = "";
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyVolumeHostPath:getJobDefinitionEksPropertyPodPropertyVolumeHostPath
export function batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.path = "";
  return out;
}

// aws:batch/getJobDefinitionEksPropertyPodPropertyVolumeSecret:getJobDefinitionEksPropertyPodPropertyVolumeSecret
export function batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optional = false;
  out.secretName = "";
  return out;
}

// aws:batch/getJobDefinitionNodeProperty:getJobDefinitionNodeProperty
export function batch_getJobDefinitionNodeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mainNode = 0;
  out.nodeRangeProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangeProperty(ctx, depth + 1))]);
  out.numNodes = 0;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangeProperty:getJobDefinitionNodePropertyNodeRangeProperty
export function batch_getJobDefinitionNodePropertyNodeRangeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containers = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainer(ctx, depth + 1))]);
  out.targetNodes = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainer:getJobDefinitionNodePropertyNodeRangePropertyContainer
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.environments = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment(ctx, depth + 1))]);
  out.ephemeralStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage(ctx, depth + 1))]);
  out.executionRoleArn = h.arn(ctx);
  out.fargatePlatformConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration(ctx, depth + 1))]);
  out.image = "";
  out.instanceType = "";
  out.jobRoleArn = h.arn(ctx);
  out.linuxParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter(ctx, depth + 1))]);
  out.logConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration(ctx, depth + 1))]);
  out.mountPoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint(ctx, depth + 1))]);
  out.networkConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration(ctx, depth + 1))]);
  out.privileged = false;
  out.readonlyRootFilesystem = false;
  out.resourceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement(ctx, depth + 1))]);
  out.runtimePlatforms = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform(ctx, depth + 1))]);
  out.secrets = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret(ctx, depth + 1))]);
  out.ulimits = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit(ctx, depth + 1))]);
  out.user = "";
  out.volumes = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment:getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage:getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sizeInGib = 8;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration:getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.platformVersion = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter:getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.devices = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice(ctx, depth + 1))]);
  out.initProcessEnabled = false;
  out.maxSwap = 0;
  out.sharedMemorySize = 8;
  out.swappiness = 0;
  out.tmpfs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice:getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerPath = "";
  out.hostPath = "";
  out.permissions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf:getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerPath = "";
  out.mountOptions = (depth > 4 ? [] : [""]);
  out.size = 8;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration:getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDriver = "";
  out.options = {};
  out.secretOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption:getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.valueFrom = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint:getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerPath = "";
  out.readOnly = false;
  out.sourceVolume = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration:getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement:getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform:getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuArchitecture = "";
  out.operatingSystemFamily = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerSecret:getJobDefinitionNodePropertyNodeRangePropertyContainerSecret
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.valueFrom = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit:getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hardLimit = 0;
  out.name = ctx.name;
  out.softLimit = 0;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerVolume:getJobDefinitionNodePropertyNodeRangePropertyContainerVolume
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsVolumeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration(ctx, depth + 1))]);
  out.hosts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost(ctx, depth + 1))]);
  out.name = ctx.name;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration:getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig(ctx, depth + 1))]);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.rootDirectory = "";
  out.transitEncryption = "";
  out.transitEncryptionPort = 443;
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig:getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointId = h.id(ctx, "accessPointId");
  out.iam = "";
  return out;
}

// aws:batch/getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost:getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost
export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourcePath = "";
  return out;
}

// aws:batch/getJobDefinitionRetryStrategy:getJobDefinitionRetryStrategy
export function batch_getJobDefinitionRetryStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attempts = 0;
  out.evaluateOnExits = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionRetryStrategyEvaluateOnExit(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinitionRetryStrategyEvaluateOnExit:getJobDefinitionRetryStrategyEvaluateOnExit
export function batch_getJobDefinitionRetryStrategyEvaluateOnExit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.onExitCode = "";
  out.onReason = "";
  out.onStatusReason = "";
  return out;
}

// aws:batch/getJobDefinitionTimeout:getJobDefinitionTimeout
export function batch_getJobDefinitionTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attemptDurationSeconds = 0;
  return out;
}

// aws:batch/getJobQueueComputeEnvironmentOrder:getJobQueueComputeEnvironmentOrder
export function batch_getJobQueueComputeEnvironmentOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeEnvironment = "";
  out.order = 0;
  return out;
}

// aws:batch/getJobQueueJobStateTimeLimitAction:getJobQueueJobStateTimeLimitAction
export function batch_getJobQueueJobStateTimeLimitAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.maxTimeSeconds = 0;
  out.reason = "";
  out.state = "active";
  return out;
}

// aws:batch/getSchedulingPolicyFairSharePolicy:getSchedulingPolicyFairSharePolicy
export function batch_getSchedulingPolicyFairSharePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.computeReservation = 0;
  out.shareDecaySeconds = 0;
  out.shareDistributions = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getSchedulingPolicyFairSharePolicyShareDistribution(ctx, depth + 1))]);
  return out;
}

// aws:batch/getSchedulingPolicyFairSharePolicyShareDistribution:getSchedulingPolicyFairSharePolicyShareDistribution
export function batch_getSchedulingPolicyFairSharePolicyShareDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.shareIdentifier = "";
  out.weightFactor = 0;
  return out;
}

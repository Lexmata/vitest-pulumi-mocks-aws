// GENERATED FILE — do not edit.
// Service: pipes   (54 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_pipes from "./pipes.js";

// aws:pipes/PipeEnrichmentParameters:PipeEnrichmentParameters
export function pipes_PipeEnrichmentParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpParameters = (depth > 4 ? {} : T_pipes.pipes_PipeEnrichmentParametersHttpParameters(ctx, depth + 1));
  out.inputTemplate = "";
  return out;
}

// aws:pipes/PipeEnrichmentParametersHttpParameters:PipeEnrichmentParametersHttpParameters
export function pipes_PipeEnrichmentParametersHttpParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerParameters = {};
  out.pathParameterValues = "";
  out.queryStringParameters = {};
  return out;
}

// aws:pipes/PipeLogConfiguration:PipeLogConfiguration
export function pipes_PipeLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogsLogDestination = (depth > 4 ? {} : T_pipes.pipes_PipeLogConfigurationCloudwatchLogsLogDestination(ctx, depth + 1));
  out.firehoseLogDestination = (depth > 4 ? {} : T_pipes.pipes_PipeLogConfigurationFirehoseLogDestination(ctx, depth + 1));
  out.includeExecutionDatas = (depth > 4 ? [] : [""]);
  out.level = "";
  out.s3LogDestination = (depth > 4 ? {} : T_pipes.pipes_PipeLogConfigurationS3LogDestination(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeLogConfigurationCloudwatchLogsLogDestination:PipeLogConfigurationCloudwatchLogsLogDestination
export function pipes_PipeLogConfigurationCloudwatchLogsLogDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupArn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeLogConfigurationFirehoseLogDestination:PipeLogConfigurationFirehoseLogDestination
export function pipes_PipeLogConfigurationFirehoseLogDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStreamArn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeLogConfigurationS3LogDestination:PipeLogConfigurationS3LogDestination
export function pipes_PipeLogConfigurationS3LogDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketOwner = "";
  out.outputFormat = "";
  out.prefix = "";
  return out;
}

// aws:pipes/PipeSourceParameters:PipeSourceParameters
export function pipes_PipeSourceParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activemqBrokerParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersActivemqBrokerParameters(ctx, depth + 1));
  out.dynamodbStreamParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersDynamodbStreamParameters(ctx, depth + 1));
  out.filterCriteria = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersFilterCriteria(ctx, depth + 1));
  out.kinesisStreamParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersKinesisStreamParameters(ctx, depth + 1));
  out.managedStreamingKafkaParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersManagedStreamingKafkaParameters(ctx, depth + 1));
  out.rabbitmqBrokerParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersRabbitmqBrokerParameters(ctx, depth + 1));
  out.selfManagedKafkaParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersSelfManagedKafkaParameters(ctx, depth + 1));
  out.sqsQueueParameters = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersSqsQueueParameters(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeSourceParametersActivemqBrokerParameters:PipeSourceParametersActivemqBrokerParameters
export function pipes_PipeSourceParametersActivemqBrokerParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.credentials = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersActivemqBrokerParametersCredentials(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.queueName = "";
  return out;
}

// aws:pipes/PipeSourceParametersActivemqBrokerParametersCredentials:PipeSourceParametersActivemqBrokerParametersCredentials
export function pipes_PipeSourceParametersActivemqBrokerParametersCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuth = "";
  return out;
}

// aws:pipes/PipeSourceParametersDynamodbStreamParameters:PipeSourceParametersDynamodbStreamParameters
export function pipes_PipeSourceParametersDynamodbStreamParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.deadLetterConfig = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.maximumRecordAgeInSeconds = 0;
  out.maximumRetryAttempts = 0;
  out.onPartialBatchItemFailure = "";
  out.parallelizationFactor = 0;
  out.startingPosition = "";
  return out;
}

// aws:pipes/PipeSourceParametersDynamodbStreamParametersDeadLetterConfig:PipeSourceParametersDynamodbStreamParametersDeadLetterConfig
export function pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeSourceParametersFilterCriteria:PipeSourceParametersFilterCriteria
export function pipes_PipeSourceParametersFilterCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersFilterCriteriaFilter(ctx, depth + 1))]);
  return out;
}

// aws:pipes/PipeSourceParametersFilterCriteriaFilter:PipeSourceParametersFilterCriteriaFilter
export function pipes_PipeSourceParametersFilterCriteriaFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pattern = "";
  return out;
}

// aws:pipes/PipeSourceParametersKinesisStreamParameters:PipeSourceParametersKinesisStreamParameters
export function pipes_PipeSourceParametersKinesisStreamParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.deadLetterConfig = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.maximumRecordAgeInSeconds = 0;
  out.maximumRetryAttempts = 0;
  out.onPartialBatchItemFailure = "";
  out.parallelizationFactor = 0;
  out.startingPosition = "";
  out.startingPositionTimestamp = "";
  return out;
}

// aws:pipes/PipeSourceParametersKinesisStreamParametersDeadLetterConfig:PipeSourceParametersKinesisStreamParametersDeadLetterConfig
export function pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeSourceParametersManagedStreamingKafkaParameters:PipeSourceParametersManagedStreamingKafkaParameters
export function pipes_PipeSourceParametersManagedStreamingKafkaParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.consumerGroupId = h.id(ctx, "consumerGroupId");
  out.credentials = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.startingPosition = "";
  out.topicName = "";
  return out;
}

// aws:pipes/PipeSourceParametersManagedStreamingKafkaParametersCredentials:PipeSourceParametersManagedStreamingKafkaParametersCredentials
export function pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientCertificateTlsAuth = "";
  out.saslScram512Auth = "";
  return out;
}

// aws:pipes/PipeSourceParametersRabbitmqBrokerParameters:PipeSourceParametersRabbitmqBrokerParameters
export function pipes_PipeSourceParametersRabbitmqBrokerParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.credentials = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.queueName = "";
  out.virtualHost = "";
  return out;
}

// aws:pipes/PipeSourceParametersRabbitmqBrokerParametersCredentials:PipeSourceParametersRabbitmqBrokerParametersCredentials
export function pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuth = "";
  return out;
}

// aws:pipes/PipeSourceParametersSelfManagedKafkaParameters:PipeSourceParametersSelfManagedKafkaParameters
export function pipes_PipeSourceParametersSelfManagedKafkaParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalBootstrapServers = (depth > 4 ? [] : [""]);
  out.batchSize = 8;
  out.consumerGroupId = h.id(ctx, "consumerGroupId");
  out.credentials = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials(ctx, depth + 1));
  out.maximumBatchingWindowInSeconds = 0;
  out.serverRootCaCertificate = "";
  out.startingPosition = "";
  out.topicName = "";
  out.vpc = (depth > 4 ? {} : T_pipes.pipes_PipeSourceParametersSelfManagedKafkaParametersVpc(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeSourceParametersSelfManagedKafkaParametersCredentials:PipeSourceParametersSelfManagedKafkaParametersCredentials
export function pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuth = "";
  out.clientCertificateTlsAuth = "";
  out.saslScram256Auth = "";
  out.saslScram512Auth = "";
  return out;
}

// aws:pipes/PipeSourceParametersSelfManagedKafkaParametersVpc:PipeSourceParametersSelfManagedKafkaParametersVpc
export function pipes_PipeSourceParametersSelfManagedKafkaParametersVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:pipes/PipeSourceParametersSqsQueueParameters:PipeSourceParametersSqsQueueParameters
export function pipes_PipeSourceParametersSqsQueueParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchSize = 8;
  out.maximumBatchingWindowInSeconds = 0;
  return out;
}

// aws:pipes/PipeTargetParameters:PipeTargetParameters
export function pipes_PipeTargetParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.batchJobParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParameters(ctx, depth + 1));
  out.cloudwatchLogsParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersCloudwatchLogsParameters(ctx, depth + 1));
  out.ecsTaskParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParameters(ctx, depth + 1));
  out.eventbridgeEventBusParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEventbridgeEventBusParameters(ctx, depth + 1));
  out.httpParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersHttpParameters(ctx, depth + 1));
  out.inputTemplate = "";
  out.kinesisStreamParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersKinesisStreamParameters(ctx, depth + 1));
  out.lambdaFunctionParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersLambdaFunctionParameters(ctx, depth + 1));
  out.redshiftDataParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersRedshiftDataParameters(ctx, depth + 1));
  out.sagemakerPipelineParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersSagemakerPipelineParameters(ctx, depth + 1));
  out.sqsQueueParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersSqsQueueParameters(ctx, depth + 1));
  out.stepFunctionStateMachineParameters = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersStepFunctionStateMachineParameters(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParameters:PipeTargetParametersBatchJobParameters
export function pipes_PipeTargetParametersBatchJobParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arrayProperties = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersArrayProperties(ctx, depth + 1));
  out.containerOverrides = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersContainerOverrides(ctx, depth + 1));
  out.dependsOns = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersDependsOn(ctx, depth + 1))]);
  out.jobDefinition = "";
  out.jobName = "";
  out.parameters = {};
  out.retryStrategy = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersRetryStrategy(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersArrayProperties:PipeTargetParametersBatchJobParametersArrayProperties
export function pipes_PipeTargetParametersBatchJobParametersArrayProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersContainerOverrides:PipeTargetParametersBatchJobParametersContainerOverrides
export function pipes_PipeTargetParametersBatchJobParametersContainerOverrides(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.environments = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment(ctx, depth + 1))]);
  out.instanceType = "";
  out.resourceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement(ctx, depth + 1))]);
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersContainerOverridesEnvironment:PipeTargetParametersBatchJobParametersContainerOverridesEnvironment
export function pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement:PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement
export function pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersDependsOn:PipeTargetParametersBatchJobParametersDependsOn
export function pipes_PipeTargetParametersBatchJobParametersDependsOn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jobId = h.id(ctx, "jobId");
  out.type = "";
  return out;
}

// aws:pipes/PipeTargetParametersBatchJobParametersRetryStrategy:PipeTargetParametersBatchJobParametersRetryStrategy
export function pipes_PipeTargetParametersBatchJobParametersRetryStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attempts = 0;
  return out;
}

// aws:pipes/PipeTargetParametersCloudwatchLogsParameters:PipeTargetParametersCloudwatchLogsParameters
export function pipes_PipeTargetParametersCloudwatchLogsParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logStreamName = "";
  out.timestamp = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParameters:PipeTargetParametersEcsTaskParameters
export function pipes_PipeTargetParametersEcsTaskParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityProviderStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy(ctx, depth + 1))]);
  out.enableEcsManagedTags = true;
  out.enableExecuteCommand = true;
  out.group = "";
  out.launchType = "";
  out.networkConfiguration = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration(ctx, depth + 1));
  out.overrides = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverrides(ctx, depth + 1));
  out.placementConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint(ctx, depth + 1))]);
  out.placementStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy(ctx, depth + 1))]);
  out.platformVersion = "";
  out.propagateTags = "";
  out.referenceId = h.id(ctx, "referenceId");
  out.tags = {};
  out.taskCount = 1;
  out.taskDefinitionArn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersCapacityProviderStrategy:PipeTargetParametersEcsTaskParametersCapacityProviderStrategy
export function pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersNetworkConfiguration:PipeTargetParametersEcsTaskParametersNetworkConfiguration
export function pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsVpcConfiguration = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration(ctx, depth + 1));
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration:PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration
export function pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverrides:PipeTargetParametersEcsTaskParametersOverrides
export function pipes_PipeTargetParametersEcsTaskParametersOverrides(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride(ctx, depth + 1))]);
  out.cpu = "";
  out.ephemeralStorage = (depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage(ctx, depth + 1));
  out.executionRoleArn = h.arn(ctx);
  out.inferenceAcceleratorOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride(ctx, depth + 1))]);
  out.memory = "";
  out.taskRoleArn = h.arn(ctx);
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesContainerOverride:PipeTargetParametersEcsTaskParametersOverridesContainerOverride
export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.cpu = 0;
  out.environmentFiles = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile(ctx, depth + 1))]);
  out.environments = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment(ctx, depth + 1))]);
  out.memory = 0;
  out.memoryReservation = 0;
  out.name = ctx.name;
  out.resourceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement(ctx, depth + 1))]);
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment:PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment
export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile:PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile
export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement:PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement
export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage:PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage
export function pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sizeInGib = 8;
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride:PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride
export function pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.deviceType = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersPlacementConstraint:PipeTargetParametersEcsTaskParametersPlacementConstraint
export function pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:pipes/PipeTargetParametersEcsTaskParametersPlacementStrategy:PipeTargetParametersEcsTaskParametersPlacementStrategy
export function pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.field = "";
  out.type = "";
  return out;
}

// aws:pipes/PipeTargetParametersEventbridgeEventBusParameters:PipeTargetParametersEventbridgeEventBusParameters
export function pipes_PipeTargetParametersEventbridgeEventBusParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.detailType = "";
  out.endpointId = h.id(ctx, "endpointId");
  out.resources = (depth > 4 ? [] : [""]);
  out.source = "";
  out.time = "";
  return out;
}

// aws:pipes/PipeTargetParametersHttpParameters:PipeTargetParametersHttpParameters
export function pipes_PipeTargetParametersHttpParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerParameters = {};
  out.pathParameterValues = "";
  out.queryStringParameters = {};
  return out;
}

// aws:pipes/PipeTargetParametersKinesisStreamParameters:PipeTargetParametersKinesisStreamParameters
export function pipes_PipeTargetParametersKinesisStreamParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKey = "";
  return out;
}

// aws:pipes/PipeTargetParametersLambdaFunctionParameters:PipeTargetParametersLambdaFunctionParameters
export function pipes_PipeTargetParametersLambdaFunctionParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invocationType = "";
  return out;
}

// aws:pipes/PipeTargetParametersRedshiftDataParameters:PipeTargetParametersRedshiftDataParameters
export function pipes_PipeTargetParametersRedshiftDataParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.database = "";
  out.dbUser = "";
  out.secretManagerArn = h.arn(ctx);
  out.sqls = (depth > 4 ? [] : [""]);
  out.statementName = "";
  out.withEvent = false;
  return out;
}

// aws:pipes/PipeTargetParametersSagemakerPipelineParameters:PipeTargetParametersSagemakerPipelineParameters
export function pipes_PipeTargetParametersSagemakerPipelineParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pipelineParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_pipes.pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter(ctx, depth + 1))]);
  return out;
}

// aws:pipes/PipeTargetParametersSagemakerPipelineParametersPipelineParameter:PipeTargetParametersSagemakerPipelineParametersPipelineParameter
export function pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:pipes/PipeTargetParametersSqsQueueParameters:PipeTargetParametersSqsQueueParameters
export function pipes_PipeTargetParametersSqsQueueParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageDeduplicationId = h.id(ctx, "messageDeduplicationId");
  out.messageGroupId = h.id(ctx, "messageGroupId");
  return out;
}

// aws:pipes/PipeTargetParametersStepFunctionStateMachineParameters:PipeTargetParametersStepFunctionStateMachineParameters
export function pipes_PipeTargetParametersStepFunctionStateMachineParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invocationType = "";
  return out;
}

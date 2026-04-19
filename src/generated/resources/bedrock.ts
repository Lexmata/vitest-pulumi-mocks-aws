// GENERATED FILE — do not edit.
// Service: bedrock   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrock from "../types/bedrock.js";

// aws:bedrock/agentAgent:AgentAgent
export function AgentAgent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentArn = h.arn(ctx);
  out.agentCollaboration = (i.agentCollaboration !== undefined ? i.agentCollaboration : "");
  out.agentId = h.id(ctx, "agentId");
  out.agentName = (i.agentName !== undefined ? i.agentName : "");
  out.agentResourceRoleArn = (i.agentResourceRoleArn !== undefined ? i.agentResourceRoleArn : h.arn(ctx));
  out.agentVersion = "";
  out.customerEncryptionKeyArn = (i.customerEncryptionKeyArn !== undefined ? i.customerEncryptionKeyArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.foundationModel = (i.foundationModel !== undefined ? i.foundationModel : "");
  out.guardrailConfigurations = (i.guardrailConfigurations !== undefined ? i.guardrailConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentGuardrailConfiguration(ctx, depth + 1))]));
  out.idleSessionTtlInSeconds = (i.idleSessionTtlInSeconds !== undefined ? i.idleSessionTtlInSeconds : 0);
  out.instruction = (i.instruction !== undefined ? i.instruction : "");
  out.memoryConfigurations = (i.memoryConfigurations !== undefined ? i.memoryConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentMemoryConfiguration(ctx, depth + 1))]));
  out.prepareAgent = (i.prepareAgent !== undefined ? i.prepareAgent : false);
  out.preparedAt = "";
  out.promptOverrideConfigurations = (i.promptOverrideConfigurations !== undefined ? i.promptOverrideConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentPromptOverrideConfiguration(ctx, depth + 1))]));
  out.skipResourceInUseCheck = (i.skipResourceInUseCheck !== undefined ? i.skipResourceInUseCheck : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentTimeouts(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentAgentActionGroup:AgentAgentActionGroup
export function AgentAgentActionGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionGroupExecutor = (i.actionGroupExecutor !== undefined ? i.actionGroupExecutor : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupActionGroupExecutor(ctx, depth + 1)));
  out.actionGroupId = h.id(ctx, "actionGroupId");
  out.actionGroupName = (i.actionGroupName !== undefined ? i.actionGroupName : "");
  out.actionGroupState = (i.actionGroupState !== undefined ? i.actionGroupState : "");
  out.agentId = (i.agentId !== undefined ? i.agentId : h.id(ctx, "agentId"));
  out.agentVersion = (i.agentVersion !== undefined ? i.agentVersion : "");
  out.apiSchema = (i.apiSchema !== undefined ? i.apiSchema : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupApiSchema(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.functionSchema = (i.functionSchema !== undefined ? i.functionSchema : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupFunctionSchema(ctx, depth + 1)));
  out.parentActionGroupSignature = (i.parentActionGroupSignature !== undefined ? i.parentActionGroupSignature : "");
  out.prepareAgent = (i.prepareAgent !== undefined ? i.prepareAgent : false);
  out.skipResourceInUseCheck = (i.skipResourceInUseCheck !== undefined ? i.skipResourceInUseCheck : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentActionGroupTimeouts(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentAgentAlias:AgentAgentAlias
export function AgentAgentAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentAliasArn = h.arn(ctx);
  out.agentAliasId = h.id(ctx, "agentAliasId");
  out.agentAliasName = (i.agentAliasName !== undefined ? i.agentAliasName : "");
  out.agentId = (i.agentId !== undefined ? i.agentId : h.id(ctx, "agentId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.routingConfigurations = (i.routingConfigurations !== undefined ? i.routingConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentAgentAliasRoutingConfiguration(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentAliasTimeouts(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentAgentCollaborator:AgentAgentCollaborator
export function AgentAgentCollaborator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentDescriptor = (i.agentDescriptor !== undefined ? i.agentDescriptor : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentCollaboratorAgentDescriptor(ctx, depth + 1)));
  out.agentId = (i.agentId !== undefined ? i.agentId : h.id(ctx, "agentId"));
  out.agentVersion = (i.agentVersion !== undefined ? i.agentVersion : "");
  out.collaborationInstruction = (i.collaborationInstruction !== undefined ? i.collaborationInstruction : "");
  out.collaboratorId = h.id(ctx, "collaboratorId");
  out.collaboratorName = (i.collaboratorName !== undefined ? i.collaboratorName : "");
  out.prepareAgent = (i.prepareAgent !== undefined ? i.prepareAgent : false);
  out.relayConversationHistory = (i.relayConversationHistory !== undefined ? i.relayConversationHistory : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentCollaboratorTimeouts(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentAgentKnowledgeBaseAssociation:AgentAgentKnowledgeBaseAssociation
export function AgentAgentKnowledgeBaseAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentId = (i.agentId !== undefined ? i.agentId : h.id(ctx, "agentId"));
  out.agentVersion = (i.agentVersion !== undefined ? i.agentVersion : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.knowledgeBaseId = (i.knowledgeBaseId !== undefined ? i.knowledgeBaseId : h.id(ctx, "knowledgeBaseId"));
  out.knowledgeBaseState = (i.knowledgeBaseState !== undefined ? i.knowledgeBaseState : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentAgentKnowledgeBaseAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentDataSource:AgentDataSource
export function AgentDataSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataDeletionPolicy = (i.dataDeletionPolicy !== undefined ? i.dataDeletionPolicy : "");
  out.dataSourceConfiguration = (i.dataSourceConfiguration !== undefined ? i.dataSourceConfiguration : (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceDataSourceConfiguration(ctx, depth + 1)));
  out.dataSourceId = h.id(ctx, "dataSourceId");
  out.description = (i.description !== undefined ? i.description : "");
  out.knowledgeBaseId = (i.knowledgeBaseId !== undefined ? i.knowledgeBaseId : h.id(ctx, "knowledgeBaseId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serverSideEncryptionConfiguration = (i.serverSideEncryptionConfiguration !== undefined ? i.serverSideEncryptionConfiguration : (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceServerSideEncryptionConfiguration(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceTimeouts(ctx, depth + 1)));
  out.vectorIngestionConfiguration = (i.vectorIngestionConfiguration !== undefined ? i.vectorIngestionConfiguration : (depth > 4 ? {} : T_bedrock.bedrock_AgentDataSourceVectorIngestionConfiguration(ctx, depth + 1)));
  return out;
}

// aws:bedrock/agentKnowledgeBase:AgentKnowledgeBase
export function AgentKnowledgeBase(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.failureReasons = (depth > 4 ? [] : [""]);
  out.knowledgeBaseConfiguration = (i.knowledgeBaseConfiguration !== undefined ? i.knowledgeBaseConfiguration : (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.storageConfiguration = (i.storageConfiguration !== undefined ? i.storageConfiguration : (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseStorageConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_AgentKnowledgeBaseTimeouts(ctx, depth + 1)));
  out.updatedAt = "";
  return out;
}

// aws:bedrock/agentPrompt:AgentPrompt
export function AgentPrompt(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.customerEncryptionKeyArn = (i.customerEncryptionKeyArn !== undefined ? i.customerEncryptionKeyArn : h.arn(ctx));
  out.defaultVariant = (i.defaultVariant !== undefined ? i.defaultVariant : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updatedAt = "";
  out.variants = (i.variants !== undefined ? i.variants : (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_AgentPromptVariant(ctx, depth + 1))]));
  out.version = "1";
  return out;
}

// aws:bedrock/customModel:CustomModel
export function CustomModel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baseModelIdentifier = (i.baseModelIdentifier !== undefined ? i.baseModelIdentifier : "");
  out.customModelArn = h.arn(ctx);
  out.customModelKmsKeyId = (i.customModelKmsKeyId !== undefined ? i.customModelKmsKeyId : h.id(ctx, "customModelKmsKeyId"));
  out.customModelName = (i.customModelName !== undefined ? i.customModelName : "");
  out.customizationType = (i.customizationType !== undefined ? i.customizationType : "");
  out.hyperparameters = (i.hyperparameters !== undefined ? i.hyperparameters : {});
  out.jobArn = h.arn(ctx);
  out.jobName = (i.jobName !== undefined ? i.jobName : "");
  out.jobStatus = "";
  out.outputDataConfig = (i.outputDataConfig !== undefined ? i.outputDataConfig : (depth > 4 ? {} : T_bedrock.bedrock_CustomModelOutputDataConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_CustomModelTimeouts(ctx, depth + 1)));
  out.trainingDataConfig = (i.trainingDataConfig !== undefined ? i.trainingDataConfig : (depth > 4 ? {} : T_bedrock.bedrock_CustomModelTrainingDataConfig(ctx, depth + 1)));
  out.trainingMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_CustomModelTrainingMetric(ctx, depth + 1))]);
  out.validationDataConfig = (i.validationDataConfig !== undefined ? i.validationDataConfig : (depth > 4 ? {} : T_bedrock.bedrock_CustomModelValidationDataConfig(ctx, depth + 1)));
  out.validationMetrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_CustomModelValidationMetric(ctx, depth + 1))]);
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_bedrock.bedrock_CustomModelVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:bedrock/guardrail:Guardrail
export function Guardrail(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockedInputMessaging = (i.blockedInputMessaging !== undefined ? i.blockedInputMessaging : "");
  out.blockedOutputsMessaging = (i.blockedOutputsMessaging !== undefined ? i.blockedOutputsMessaging : "");
  out.contentPolicyConfig = (i.contentPolicyConfig !== undefined ? i.contentPolicyConfig : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailContentPolicyConfig(ctx, depth + 1)));
  out.contextualGroundingPolicyConfig = (i.contextualGroundingPolicyConfig !== undefined ? i.contextualGroundingPolicyConfig : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailContextualGroundingPolicyConfig(ctx, depth + 1)));
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.guardrailArn = h.arn(ctx);
  out.guardrailId = h.id(ctx, "guardrailId");
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sensitiveInformationPolicyConfig = (i.sensitiveInformationPolicyConfig !== undefined ? i.sensitiveInformationPolicyConfig : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailSensitiveInformationPolicyConfig(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailTimeouts(ctx, depth + 1)));
  out.topicPolicyConfig = (i.topicPolicyConfig !== undefined ? i.topicPolicyConfig : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailTopicPolicyConfig(ctx, depth + 1)));
  out.version = "1";
  out.wordPolicyConfig = (i.wordPolicyConfig !== undefined ? i.wordPolicyConfig : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailWordPolicyConfig(ctx, depth + 1)));
  return out;
}

// aws:bedrock/guardrailVersion:GuardrailVersion
export function GuardrailVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.guardrailArn = (i.guardrailArn !== undefined ? i.guardrailArn : h.arn(ctx));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_GuardrailVersionTimeouts(ctx, depth + 1)));
  out.version = "1";
  return out;
}

// aws:bedrock/inferenceProfile:InferenceProfile
export function InferenceProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.modelSource = (i.modelSource !== undefined ? i.modelSource : (depth > 4 ? {} : T_bedrock.bedrock_InferenceProfileModelSource(ctx, depth + 1)));
  out.models = (depth > 4 ? [] : [(depth > 4 ? {} : T_bedrock.bedrock_InferenceProfileModel(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_InferenceProfileTimeouts(ctx, depth + 1)));
  out.type = "";
  out.updatedAt = "";
  return out;
}

// aws:bedrock/provisionedModelThroughput:ProvisionedModelThroughput
export function ProvisionedModelThroughput(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commitmentDuration = (i.commitmentDuration !== undefined ? i.commitmentDuration : "");
  out.modelArn = (i.modelArn !== undefined ? i.modelArn : h.arn(ctx));
  out.modelUnits = (i.modelUnits !== undefined ? i.modelUnits : 0);
  out.provisionedModelArn = h.arn(ctx);
  out.provisionedModelName = (i.provisionedModelName !== undefined ? i.provisionedModelName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_bedrock.bedrock_ProvisionedModelThroughputTimeouts(ctx, depth + 1)));
  return out;
}

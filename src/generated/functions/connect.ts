// GENERATED FILE — do not edit.
// Service: connect   (16 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_connect from "../types/connect.js";

// aws:connect/getBotAssociation:getBotAssociation
export function getBotAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.lexBot = (i.lexBot !== undefined ? i.lexBot : (depth > 4 ? {} : T_connect.connect_getBotAssociationLexBot(ctx, depth + 1)));
  return out;
}

// aws:connect/getContactFlow:getContactFlow
export function getContactFlow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactFlowId = (i.contactFlowId !== undefined ? i.contactFlowId : h.id(ctx, "contactFlowId"));
  out.content = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:connect/getContactFlowModule:getContactFlowModule
export function getContactFlowModule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactFlowModuleId = (i.contactFlowModuleId !== undefined ? i.contactFlowModuleId : h.id(ctx, "contactFlowModuleId"));
  out.content = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getHoursOfOperation:getHoursOfOperation
export function getHoursOfOperation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getHoursOfOperationConfig(ctx, depth + 1))]);
  out.description = "";
  out.hoursOfOperationId = (i.hoursOfOperationId !== undefined ? i.hoursOfOperationId : h.id(ctx, "hoursOfOperationId"));
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.timeZone = "";
  return out;
}

// aws:connect/getInstance:getInstance
export function getInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoResolveBestVoicesEnabled = false;
  out.contactFlowLogsEnabled = false;
  out.contactLensEnabled = false;
  out.createdTime = h.timestamp();
  out.earlyMediaEnabled = false;
  out.id = h.id(ctx, "id");
  out.identityManagementType = "";
  out.inboundCallsEnabled = false;
  out.instanceAlias = (i.instanceAlias !== undefined ? i.instanceAlias : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.multiPartyConferenceEnabled = false;
  out.outboundCallsEnabled = false;
  out.serviceRole = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getInstanceStorageConfig:getInstanceStorageConfig
export function getInstanceStorageConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationId = (i.associationId !== undefined ? i.associationId : h.id(ctx, "associationId"));
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.storageConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfig(ctx, depth + 1))]);
  return out;
}

// aws:connect/getLambdaFunctionAssociation:getLambdaFunctionAssociation
export function getLambdaFunctionAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = (i.functionArn !== undefined ? i.functionArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  return out;
}

// aws:connect/getPrompt:getPrompt
export function getPrompt(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.promptId = h.id(ctx, "promptId");
  return out;
}

// aws:connect/getQueue:getQueue
export function getQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.hoursOfOperationId = h.id(ctx, "hoursOfOperationId");
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.maxContacts = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outboundCallerConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getQueueOutboundCallerConfig(ctx, depth + 1))]);
  out.queueId = (i.queueId !== undefined ? i.queueId : h.id(ctx, "queueId"));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getQuickConnect:getQuickConnect
export function getQuickConnect(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.quickConnectConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getQuickConnectQuickConnectConfig(ctx, depth + 1))]);
  out.quickConnectId = (i.quickConnectId !== undefined ? i.quickConnectId : h.id(ctx, "quickConnectId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getRoutingProfile:getRoutingProfile
export function getRoutingProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultOutboundQueueId = h.id(ctx, "defaultOutboundQueueId");
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.mediaConcurrencies = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getRoutingProfileMediaConcurrency(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queueConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getRoutingProfileQueueConfig(ctx, depth + 1))]);
  out.routingProfileId = (i.routingProfileId !== undefined ? i.routingProfileId : h.id(ctx, "routingProfileId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getSecurityProfile:getSecurityProfile
export function getSecurityProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.organizationResourceId = h.id(ctx, "organizationResourceId");
  out.permissions = (depth > 4 ? [] : [""]);
  out.securityProfileId = (i.securityProfileId !== undefined ? i.securityProfileId : h.id(ctx, "securityProfileId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getUser:getUser
export function getUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.directoryUserId = h.id(ctx, "directoryUserId");
  out.hierarchyGroupId = h.id(ctx, "hierarchyGroupId");
  out.id = h.id(ctx, "id");
  out.identityInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserIdentityInfo(ctx, depth + 1))]);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.phoneConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserPhoneConfig(ctx, depth + 1))]);
  out.routingProfileId = h.id(ctx, "routingProfileId");
  out.securityProfileIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userId = (i.userId !== undefined ? i.userId : h.id(ctx, "userId"));
  return out;
}

// aws:connect/getUserHierarchyGroup:getUserHierarchyGroup
export function getUserHierarchyGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.hierarchyGroupId = (i.hierarchyGroupId !== undefined ? i.hierarchyGroupId : h.id(ctx, "hierarchyGroupId"));
  out.hierarchyPaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPath(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.levelId = h.id(ctx, "levelId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:connect/getUserHierarchyStructure:getUserHierarchyStructure
export function getUserHierarchyStructure(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hierarchyStructures = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructure(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  return out;
}

// aws:connect/getVocabulary:getVocabulary
export function getVocabulary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = "";
  out.failureReason = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.languageCode = "";
  out.lastModifiedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vocabularyId = (i.vocabularyId !== undefined ? i.vocabularyId : h.id(ctx, "vocabularyId"));
  return out;
}

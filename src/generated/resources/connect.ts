// GENERATED FILE — do not edit.
// Service: connect   (16 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_connect from "../types/connect.js";

// aws:connect/botAssociation:BotAssociation
export function BotAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.lexBot = (i.lexBot !== undefined ? i.lexBot : (depth > 4 ? {} : T_connect.connect_BotAssociationLexBot(ctx, depth + 1)));
  return out;
}

// aws:connect/contactFlow:ContactFlow
export function ContactFlow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactFlowId = h.id(ctx, "contactFlowId");
  out.content = (i.content !== undefined ? i.content : "");
  out.contentHash = (i.contentHash !== undefined ? i.contentHash : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.filename = (i.filename !== undefined ? i.filename : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:connect/contactFlowModule:ContactFlowModule
export function ContactFlowModule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactFlowModuleId = h.id(ctx, "contactFlowModuleId");
  out.content = (i.content !== undefined ? i.content : "");
  out.contentHash = (i.contentHash !== undefined ? i.contentHash : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.filename = (i.filename !== undefined ? i.filename : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/hoursOfOperation:HoursOfOperation
export function HoursOfOperation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configs = (i.configs !== undefined ? i.configs : (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_HoursOfOperationConfig(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.hoursOfOperationId = h.id(ctx, "hoursOfOperationId");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeZone = (i.timeZone !== undefined ? i.timeZone : "");
  return out;
}

// aws:connect/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoResolveBestVoicesEnabled = (i.autoResolveBestVoicesEnabled !== undefined ? i.autoResolveBestVoicesEnabled : false);
  out.contactFlowLogsEnabled = (i.contactFlowLogsEnabled !== undefined ? i.contactFlowLogsEnabled : false);
  out.contactLensEnabled = (i.contactLensEnabled !== undefined ? i.contactLensEnabled : false);
  out.createdTime = h.timestamp();
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.earlyMediaEnabled = (i.earlyMediaEnabled !== undefined ? i.earlyMediaEnabled : false);
  out.identityManagementType = (i.identityManagementType !== undefined ? i.identityManagementType : "");
  out.inboundCallsEnabled = (i.inboundCallsEnabled !== undefined ? i.inboundCallsEnabled : false);
  out.instanceAlias = (i.instanceAlias !== undefined ? i.instanceAlias : "");
  out.multiPartyConferenceEnabled = (i.multiPartyConferenceEnabled !== undefined ? i.multiPartyConferenceEnabled : false);
  out.outboundCallsEnabled = (i.outboundCallsEnabled !== undefined ? i.outboundCallsEnabled : false);
  out.serviceRole = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/instanceStorageConfig:InstanceStorageConfig
export function InstanceStorageConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationId = h.id(ctx, "associationId");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.storageConfig = (i.storageConfig !== undefined ? i.storageConfig : (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfig(ctx, depth + 1)));
  return out;
}

// aws:connect/lambdaFunctionAssociation:LambdaFunctionAssociation
export function LambdaFunctionAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = (i.functionArn !== undefined ? i.functionArn : h.arn(ctx));
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  return out;
}

// aws:connect/phoneNumber:PhoneNumber
export function PhoneNumber(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.countryCode = (i.countryCode !== undefined ? i.countryCode : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.phoneNumber = "";
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.statuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_PhoneNumberStatus(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:connect/queue:Queue
export function Queue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.hoursOfOperationId = (i.hoursOfOperationId !== undefined ? i.hoursOfOperationId : h.id(ctx, "hoursOfOperationId"));
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.maxContacts = (i.maxContacts !== undefined ? i.maxContacts : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outboundCallerConfig = (i.outboundCallerConfig !== undefined ? i.outboundCallerConfig : (depth > 4 ? {} : T_connect.connect_QueueOutboundCallerConfig(ctx, depth + 1)));
  out.queueId = h.id(ctx, "queueId");
  out.quickConnectIds = (i.quickConnectIds !== undefined ? i.quickConnectIds : (depth > 4 ? [] : [""]));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/quickConnect:QuickConnect
export function QuickConnect(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.quickConnectConfig = (i.quickConnectConfig !== undefined ? i.quickConnectConfig : (depth > 4 ? {} : T_connect.connect_QuickConnectQuickConnectConfig(ctx, depth + 1)));
  out.quickConnectId = h.id(ctx, "quickConnectId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/routingProfile:RoutingProfile
export function RoutingProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultOutboundQueueId = (i.defaultOutboundQueueId !== undefined ? i.defaultOutboundQueueId : h.id(ctx, "defaultOutboundQueueId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.mediaConcurrencies = (i.mediaConcurrencies !== undefined ? i.mediaConcurrencies : (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_RoutingProfileMediaConcurrency(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queueConfigs = (i.queueConfigs !== undefined ? i.queueConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_RoutingProfileQueueConfig(ctx, depth + 1))]));
  out.routingProfileId = h.id(ctx, "routingProfileId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/securityProfile:SecurityProfile
export function SecurityProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.organizationResourceId = h.id(ctx, "organizationResourceId");
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [""]));
  out.securityProfileId = h.id(ctx, "securityProfileId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.directoryUserId = (i.directoryUserId !== undefined ? i.directoryUserId : h.id(ctx, "directoryUserId"));
  out.hierarchyGroupId = (i.hierarchyGroupId !== undefined ? i.hierarchyGroupId : h.id(ctx, "hierarchyGroupId"));
  out.identityInfo = (i.identityInfo !== undefined ? i.identityInfo : (depth > 4 ? {} : T_connect.connect_UserIdentityInfo(ctx, depth + 1)));
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.password = (i.password !== undefined ? i.password : "");
  out.phoneConfig = (i.phoneConfig !== undefined ? i.phoneConfig : (depth > 4 ? {} : T_connect.connect_UserPhoneConfig(ctx, depth + 1)));
  out.routingProfileId = (i.routingProfileId !== undefined ? i.routingProfileId : h.id(ctx, "routingProfileId"));
  out.securityProfileIds = (i.securityProfileIds !== undefined ? i.securityProfileIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:connect/userHierarchyGroup:UserHierarchyGroup
export function UserHierarchyGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.hierarchyGroupId = h.id(ctx, "hierarchyGroupId");
  out.hierarchyPaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPath(ctx, depth + 1))]);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.levelId = h.id(ctx, "levelId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentGroupId = (i.parentGroupId !== undefined ? i.parentGroupId : h.id(ctx, "parentGroupId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:connect/userHierarchyStructure:UserHierarchyStructure
export function UserHierarchyStructure(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hierarchyStructure = (i.hierarchyStructure !== undefined ? i.hierarchyStructure : (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructure(ctx, depth + 1)));
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  return out;
}

// aws:connect/vocabulary:Vocabulary
export function Vocabulary(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = (i.content !== undefined ? i.content : "");
  out.failureReason = "";
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.lastModifiedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vocabularyId = h.id(ctx, "vocabularyId");
  return out;
}

// GENERATED FILE — do not edit.
// Service: connect   (65 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_connect from "./connect.js";

// aws:connect/BotAssociationLexBot:BotAssociationLexBot
export function connect_BotAssociationLexBot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lexRegion = "";
  out.name = ctx.name;
  return out;
}

// aws:connect/HoursOfOperationConfig:HoursOfOperationConfig
export function connect_HoursOfOperationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.day = "";
  out.endTime = (depth > 4 ? {} : T_connect.connect_HoursOfOperationConfigEndTime(ctx, depth + 1));
  out.startTime = (depth > 4 ? {} : T_connect.connect_HoursOfOperationConfigStartTime(ctx, depth + 1));
  return out;
}

// aws:connect/HoursOfOperationConfigEndTime:HoursOfOperationConfigEndTime
export function connect_HoursOfOperationConfigEndTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:connect/HoursOfOperationConfigStartTime:HoursOfOperationConfigStartTime
export function connect_HoursOfOperationConfigStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfig:InstanceStorageConfigStorageConfig
export function connect_InstanceStorageConfigStorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisFirehoseConfig = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig(ctx, depth + 1));
  out.kinesisStreamConfig = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigKinesisStreamConfig(ctx, depth + 1));
  out.kinesisVideoStreamConfig = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig(ctx, depth + 1));
  out.s3Config = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigS3Config(ctx, depth + 1));
  out.storageType = "";
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigKinesisFirehoseConfig:InstanceStorageConfigStorageConfigKinesisFirehoseConfig
export function connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firehoseArn = h.arn(ctx);
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigKinesisStreamConfig:InstanceStorageConfigStorageConfigKinesisStreamConfig
export function connect_InstanceStorageConfigStorageConfigKinesisStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamArn = h.arn(ctx);
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigKinesisVideoStreamConfig:InstanceStorageConfigStorageConfigKinesisVideoStreamConfig
export function connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionConfig = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(ctx, depth + 1));
  out.prefix = "";
  out.retentionPeriodHours = 0;
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig:InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig
export function connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigS3Config:InstanceStorageConfigStorageConfigS3Config
export function connect_InstanceStorageConfigStorageConfigS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.encryptionConfig = (depth > 4 ? {} : T_connect.connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(ctx, depth + 1));
  return out;
}

// aws:connect/InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig:InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig
export function connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:connect/PhoneNumberStatus:PhoneNumberStatus
export function connect_PhoneNumberStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  out.status = "active";
  return out;
}

// aws:connect/QueueOutboundCallerConfig:QueueOutboundCallerConfig
export function connect_QueueOutboundCallerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outboundCallerIdName = "";
  out.outboundCallerIdNumberId = h.id(ctx, "outboundCallerIdNumberId");
  out.outboundFlowId = h.id(ctx, "outboundFlowId");
  return out;
}

// aws:connect/QuickConnectQuickConnectConfig:QuickConnectQuickConnectConfig
export function connect_QuickConnectQuickConnectConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.phoneConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_QuickConnectQuickConnectConfigPhoneConfig(ctx, depth + 1))]);
  out.queueConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_QuickConnectQuickConnectConfigQueueConfig(ctx, depth + 1))]);
  out.quickConnectType = "";
  out.userConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_QuickConnectQuickConnectConfigUserConfig(ctx, depth + 1))]);
  return out;
}

// aws:connect/QuickConnectQuickConnectConfigPhoneConfig:QuickConnectQuickConnectConfigPhoneConfig
export function connect_QuickConnectQuickConnectConfigPhoneConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.phoneNumber = "";
  return out;
}

// aws:connect/QuickConnectQuickConnectConfigQueueConfig:QuickConnectQuickConnectConfigQueueConfig
export function connect_QuickConnectQuickConnectConfigQueueConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactFlowId = h.id(ctx, "contactFlowId");
  out.queueId = h.id(ctx, "queueId");
  return out;
}

// aws:connect/QuickConnectQuickConnectConfigUserConfig:QuickConnectQuickConnectConfigUserConfig
export function connect_QuickConnectQuickConnectConfigUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactFlowId = h.id(ctx, "contactFlowId");
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:connect/RoutingProfileMediaConcurrency:RoutingProfileMediaConcurrency
export function connect_RoutingProfileMediaConcurrency(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channel = "";
  out.concurrency = 0;
  return out;
}

// aws:connect/RoutingProfileQueueConfig:RoutingProfileQueueConfig
export function connect_RoutingProfileQueueConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channel = "";
  out.delay = 0;
  out.priority = 0;
  out.queueArn = h.arn(ctx);
  out.queueId = h.id(ctx, "queueId");
  out.queueName = "";
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPath:UserHierarchyGroupHierarchyPath
export function connect_UserHierarchyGroupHierarchyPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.levelFives = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPathLevelFife(ctx, depth + 1))]);
  out.levelFours = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPathLevelFour(ctx, depth + 1))]);
  out.levelOnes = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPathLevelOne(ctx, depth + 1))]);
  out.levelThrees = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPathLevelThree(ctx, depth + 1))]);
  out.levelTwos = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_UserHierarchyGroupHierarchyPathLevelTwo(ctx, depth + 1))]);
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPathLevelFife:UserHierarchyGroupHierarchyPathLevelFife
export function connect_UserHierarchyGroupHierarchyPathLevelFife(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPathLevelFour:UserHierarchyGroupHierarchyPathLevelFour
export function connect_UserHierarchyGroupHierarchyPathLevelFour(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPathLevelOne:UserHierarchyGroupHierarchyPathLevelOne
export function connect_UserHierarchyGroupHierarchyPathLevelOne(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPathLevelThree:UserHierarchyGroupHierarchyPathLevelThree
export function connect_UserHierarchyGroupHierarchyPathLevelThree(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyGroupHierarchyPathLevelTwo:UserHierarchyGroupHierarchyPathLevelTwo
export function connect_UserHierarchyGroupHierarchyPathLevelTwo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructure:UserHierarchyStructureHierarchyStructure
export function connect_UserHierarchyStructureHierarchyStructure(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.levelFive = (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructureLevelFive(ctx, depth + 1));
  out.levelFour = (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructureLevelFour(ctx, depth + 1));
  out.levelOne = (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructureLevelOne(ctx, depth + 1));
  out.levelThree = (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructureLevelThree(ctx, depth + 1));
  out.levelTwo = (depth > 4 ? {} : T_connect.connect_UserHierarchyStructureHierarchyStructureLevelTwo(ctx, depth + 1));
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructureLevelFive:UserHierarchyStructureHierarchyStructureLevelFive
export function connect_UserHierarchyStructureHierarchyStructureLevelFive(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructureLevelFour:UserHierarchyStructureHierarchyStructureLevelFour
export function connect_UserHierarchyStructureHierarchyStructureLevelFour(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructureLevelOne:UserHierarchyStructureHierarchyStructureLevelOne
export function connect_UserHierarchyStructureHierarchyStructureLevelOne(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructureLevelThree:UserHierarchyStructureHierarchyStructureLevelThree
export function connect_UserHierarchyStructureHierarchyStructureLevelThree(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserHierarchyStructureHierarchyStructureLevelTwo:UserHierarchyStructureHierarchyStructureLevelTwo
export function connect_UserHierarchyStructureHierarchyStructureLevelTwo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/UserIdentityInfo:UserIdentityInfo
export function connect_UserIdentityInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.email = "";
  out.firstName = "";
  out.lastName = "";
  out.secondaryEmail = "";
  return out;
}

// aws:connect/UserPhoneConfig:UserPhoneConfig
export function connect_UserPhoneConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.afterContactWorkTimeLimit = 0;
  out.autoAccept = false;
  out.deskPhoneNumber = "";
  out.phoneType = "";
  return out;
}

// aws:connect/getBotAssociationLexBot:getBotAssociationLexBot
export function connect_getBotAssociationLexBot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lexRegion = "";
  out.name = ctx.name;
  return out;
}

// aws:connect/getHoursOfOperationConfig:getHoursOfOperationConfig
export function connect_getHoursOfOperationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.day = "";
  out.endTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getHoursOfOperationConfigEndTime(ctx, depth + 1))]);
  out.startTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getHoursOfOperationConfigStartTime(ctx, depth + 1))]);
  return out;
}

// aws:connect/getHoursOfOperationConfigEndTime:getHoursOfOperationConfigEndTime
export function connect_getHoursOfOperationConfigEndTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:connect/getHoursOfOperationConfigStartTime:getHoursOfOperationConfigStartTime
export function connect_getHoursOfOperationConfigStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfig:getInstanceStorageConfigStorageConfig
export function connect_getInstanceStorageConfigStorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisFirehoseConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig(ctx, depth + 1))]);
  out.kinesisStreamConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig(ctx, depth + 1))]);
  out.kinesisVideoStreamConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig(ctx, depth + 1))]);
  out.s3Configs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigS3Config(ctx, depth + 1))]);
  out.storageType = "";
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigKinesisFirehoseConfig:getInstanceStorageConfigStorageConfigKinesisFirehoseConfig
export function connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firehoseArn = h.arn(ctx);
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigKinesisStreamConfig:getInstanceStorageConfigStorageConfigKinesisStreamConfig
export function connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamArn = h.arn(ctx);
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig:getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig
export function connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(ctx, depth + 1))]);
  out.prefix = "";
  out.retentionPeriodHours = 0;
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig:getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig
export function connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigS3Config:getInstanceStorageConfigStorageConfigS3Config
export function connect_getInstanceStorageConfigStorageConfigS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketPrefix = "";
  out.encryptionConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(ctx, depth + 1))]);
  return out;
}

// aws:connect/getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig:getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig
export function connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:connect/getQueueOutboundCallerConfig:getQueueOutboundCallerConfig
export function connect_getQueueOutboundCallerConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outboundCallerIdName = "";
  out.outboundCallerIdNumberId = h.id(ctx, "outboundCallerIdNumberId");
  out.outboundFlowId = h.id(ctx, "outboundFlowId");
  return out;
}

// aws:connect/getQuickConnectQuickConnectConfig:getQuickConnectQuickConnectConfig
export function connect_getQuickConnectQuickConnectConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.phoneConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getQuickConnectQuickConnectConfigPhoneConfig(ctx, depth + 1))]);
  out.queueConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getQuickConnectQuickConnectConfigQueueConfig(ctx, depth + 1))]);
  out.quickConnectType = "";
  out.userConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getQuickConnectQuickConnectConfigUserConfig(ctx, depth + 1))]);
  return out;
}

// aws:connect/getQuickConnectQuickConnectConfigPhoneConfig:getQuickConnectQuickConnectConfigPhoneConfig
export function connect_getQuickConnectQuickConnectConfigPhoneConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.phoneNumber = "";
  return out;
}

// aws:connect/getQuickConnectQuickConnectConfigQueueConfig:getQuickConnectQuickConnectConfigQueueConfig
export function connect_getQuickConnectQuickConnectConfigQueueConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactFlowId = h.id(ctx, "contactFlowId");
  out.queueId = h.id(ctx, "queueId");
  return out;
}

// aws:connect/getQuickConnectQuickConnectConfigUserConfig:getQuickConnectQuickConnectConfigUserConfig
export function connect_getQuickConnectQuickConnectConfigUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactFlowId = h.id(ctx, "contactFlowId");
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:connect/getRoutingProfileMediaConcurrency:getRoutingProfileMediaConcurrency
export function connect_getRoutingProfileMediaConcurrency(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channel = "";
  out.concurrency = 0;
  return out;
}

// aws:connect/getRoutingProfileQueueConfig:getRoutingProfileQueueConfig
export function connect_getRoutingProfileQueueConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channel = "";
  out.delay = 0;
  out.priority = 0;
  out.queueArn = h.arn(ctx);
  out.queueId = h.id(ctx, "queueId");
  out.queueName = "";
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPath:getUserHierarchyGroupHierarchyPath
export function connect_getUserHierarchyGroupHierarchyPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.levelFives = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPathLevelFife(ctx, depth + 1))]);
  out.levelFours = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPathLevelFour(ctx, depth + 1))]);
  out.levelOnes = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPathLevelOne(ctx, depth + 1))]);
  out.levelThrees = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPathLevelThree(ctx, depth + 1))]);
  out.levelTwos = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyGroupHierarchyPathLevelTwo(ctx, depth + 1))]);
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPathLevelFife:getUserHierarchyGroupHierarchyPathLevelFife
export function connect_getUserHierarchyGroupHierarchyPathLevelFife(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPathLevelFour:getUserHierarchyGroupHierarchyPathLevelFour
export function connect_getUserHierarchyGroupHierarchyPathLevelFour(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPathLevelOne:getUserHierarchyGroupHierarchyPathLevelOne
export function connect_getUserHierarchyGroupHierarchyPathLevelOne(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPathLevelThree:getUserHierarchyGroupHierarchyPathLevelThree
export function connect_getUserHierarchyGroupHierarchyPathLevelThree(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyGroupHierarchyPathLevelTwo:getUserHierarchyGroupHierarchyPathLevelTwo
export function connect_getUserHierarchyGroupHierarchyPathLevelTwo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructure:getUserHierarchyStructureHierarchyStructure
export function connect_getUserHierarchyStructureHierarchyStructure(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.levelFives = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructureLevelFife(ctx, depth + 1))]);
  out.levelFours = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructureLevelFour(ctx, depth + 1))]);
  out.levelOnes = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructureLevelOne(ctx, depth + 1))]);
  out.levelThrees = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructureLevelThree(ctx, depth + 1))]);
  out.levelTwos = (depth > 4 ? [] : [(depth > 4 ? {} : T_connect.connect_getUserHierarchyStructureHierarchyStructureLevelTwo(ctx, depth + 1))]);
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructureLevelFife:getUserHierarchyStructureHierarchyStructureLevelFife
export function connect_getUserHierarchyStructureHierarchyStructureLevelFife(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructureLevelFour:getUserHierarchyStructureHierarchyStructureLevelFour
export function connect_getUserHierarchyStructureHierarchyStructureLevelFour(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructureLevelOne:getUserHierarchyStructureHierarchyStructureLevelOne
export function connect_getUserHierarchyStructureHierarchyStructureLevelOne(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructureLevelThree:getUserHierarchyStructureHierarchyStructureLevelThree
export function connect_getUserHierarchyStructureHierarchyStructureLevelThree(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserHierarchyStructureHierarchyStructureLevelTwo:getUserHierarchyStructureHierarchyStructureLevelTwo
export function connect_getUserHierarchyStructureHierarchyStructureLevelTwo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:connect/getUserIdentityInfo:getUserIdentityInfo
export function connect_getUserIdentityInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.email = "";
  out.firstName = "";
  out.lastName = "";
  out.secondaryEmail = "";
  return out;
}

// aws:connect/getUserPhoneConfig:getUserPhoneConfig
export function connect_getUserPhoneConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.afterContactWorkTimeLimit = 0;
  out.autoAccept = false;
  out.deskPhoneNumber = "";
  out.phoneType = "";
  return out;
}

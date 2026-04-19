// GENERATED FILE — do not edit.
// Service: finspace   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_finspace from "../types/finspace.js";

// aws:finspace/kxCluster:KxCluster
export function KxCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoScalingConfiguration = (i.autoScalingConfiguration !== undefined ? i.autoScalingConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxClusterAutoScalingConfiguration(ctx, depth + 1)));
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.azMode = (i.azMode !== undefined ? i.azMode : "");
  out.cacheStorageConfigurations = (i.cacheStorageConfigurations !== undefined ? i.cacheStorageConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxClusterCacheStorageConfiguration(ctx, depth + 1))]));
  out.capacityConfiguration = (i.capacityConfiguration !== undefined ? i.capacityConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxClusterCapacityConfiguration(ctx, depth + 1)));
  out.code = (i.code !== undefined ? i.code : (depth > 4 ? {} : T_finspace.finspace_KxClusterCode(ctx, depth + 1)));
  out.commandLineArguments = (i.commandLineArguments !== undefined ? i.commandLineArguments : {});
  out.createdTimestamp = "";
  out.databases = (i.databases !== undefined ? i.databases : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxClusterDatabase(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.executionRole = (i.executionRole !== undefined ? i.executionRole : "");
  out.initializationScript = (i.initializationScript !== undefined ? i.initializationScript : "");
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.releaseLabel = (i.releaseLabel !== undefined ? i.releaseLabel : "");
  out.savedownStorageConfiguration = (i.savedownStorageConfiguration !== undefined ? i.savedownStorageConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxClusterSavedownStorageConfiguration(ctx, depth + 1)));
  out.scalingGroupConfiguration = (i.scalingGroupConfiguration !== undefined ? i.scalingGroupConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxClusterScalingGroupConfiguration(ctx, depth + 1)));
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tickerplantLogConfigurations = (i.tickerplantLogConfigurations !== undefined ? i.tickerplantLogConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxClusterTickerplantLogConfiguration(ctx, depth + 1))]));
  out.type = (i.type !== undefined ? i.type : "");
  out.vpcConfiguration = (i.vpcConfiguration !== undefined ? i.vpcConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxClusterVpcConfiguration(ctx, depth + 1)));
  return out;
}

// aws:finspace/kxDatabase:KxDatabase
export function KxDatabase(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTimestamp = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:finspace/kxDataview:KxDataview
export function KxDataview(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoUpdate = (i.autoUpdate !== undefined ? i.autoUpdate : false);
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.azMode = (i.azMode !== undefined ? i.azMode : "");
  out.changesetId = (i.changesetId !== undefined ? i.changesetId : h.id(ctx, "changesetId"));
  out.createdTimestamp = "";
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.readWrite = (i.readWrite !== undefined ? i.readWrite : false);
  out.segmentConfigurations = (i.segmentConfigurations !== undefined ? i.segmentConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxDataviewSegmentConfiguration(ctx, depth + 1))]));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:finspace/kxEnvironment:KxEnvironment
export function KxEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.createdTimestamp = "";
  out.customDnsConfigurations = (i.customDnsConfigurations !== undefined ? i.customDnsConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxEnvironmentCustomDnsConfiguration(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.infrastructureAccountId = h.id(ctx, "infrastructureAccountId");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayConfiguration = (i.transitGatewayConfiguration !== undefined ? i.transitGatewayConfiguration : (depth > 4 ? {} : T_finspace.finspace_KxEnvironmentTransitGatewayConfiguration(ctx, depth + 1)));
  return out;
}

// aws:finspace/kxScalingGroup:KxScalingGroup
export function KxScalingGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.clusters = (depth > 4 ? [] : [""]);
  out.createdTimestamp = "";
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.hostType = (i.hostType !== undefined ? i.hostType : "");
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:finspace/kxUser:KxUser
export function KxUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.iamRole = (i.iamRole !== undefined ? i.iamRole : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:finspace/kxVolume:KxVolume
export function KxVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachedClusters = (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxVolumeAttachedCluster(ctx, depth + 1))]);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.azMode = (i.azMode !== undefined ? i.azMode : "");
  out.createdTimestamp = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.lastModifiedTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nas1Configurations = (i.nas1Configurations !== undefined ? i.nas1Configurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxVolumeNas1Configuration(ctx, depth + 1))]));
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// GENERATED FILE — do not edit.
// Service: codebuild   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codebuild from "../types/codebuild.js";

// aws:codebuild/fleet:Fleet
export function Fleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.baseCapacity = (i.baseCapacity !== undefined ? i.baseCapacity : 0);
  out.computeConfiguration = (i.computeConfiguration !== undefined ? i.computeConfiguration : (depth > 4 ? {} : T_codebuild.codebuild_FleetComputeConfiguration(ctx, depth + 1)));
  out.computeType = (i.computeType !== undefined ? i.computeType : "");
  out.created = "";
  out.environmentType = (i.environmentType !== undefined ? i.environmentType : "");
  out.fleetServiceRole = (i.fleetServiceRole !== undefined ? i.fleetServiceRole : "");
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.lastModified = h.timestamp();
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.overflowBehavior = (i.overflowBehavior !== undefined ? i.overflowBehavior : "");
  out.scalingConfiguration = (i.scalingConfiguration !== undefined ? i.scalingConfiguration : (depth > 4 ? {} : T_codebuild.codebuild_FleetScalingConfiguration(ctx, depth + 1)));
  out.statuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_FleetStatus(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfigs = (i.vpcConfigs !== undefined ? i.vpcConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_FleetVpcConfig(ctx, depth + 1))]));
  return out;
}

// aws:codebuild/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.artifacts = (i.artifacts !== undefined ? i.artifacts : (depth > 4 ? {} : T_codebuild.codebuild_ProjectArtifacts(ctx, depth + 1)));
  out.badgeEnabled = (i.badgeEnabled !== undefined ? i.badgeEnabled : false);
  out.badgeUrl = h.endpoint(ctx, "badgeUrl");
  out.buildBatchConfig = (i.buildBatchConfig !== undefined ? i.buildBatchConfig : (depth > 4 ? {} : T_codebuild.codebuild_ProjectBuildBatchConfig(ctx, depth + 1)));
  out.buildTimeout = (i.buildTimeout !== undefined ? i.buildTimeout : 30);
  out.cache = (i.cache !== undefined ? i.cache : (depth > 4 ? {} : T_codebuild.codebuild_ProjectCache(ctx, depth + 1)));
  out.concurrentBuildLimit = (i.concurrentBuildLimit !== undefined ? i.concurrentBuildLimit : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionKey = (i.encryptionKey !== undefined ? i.encryptionKey : "");
  out.environment = (i.environment !== undefined ? i.environment : (depth > 4 ? {} : T_codebuild.codebuild_ProjectEnvironment(ctx, depth + 1)));
  out.fileSystemLocations = (i.fileSystemLocations !== undefined ? i.fileSystemLocations : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_ProjectFileSystemLocation(ctx, depth + 1))]));
  out.logsConfig = (i.logsConfig !== undefined ? i.logsConfig : (depth > 4 ? {} : T_codebuild.codebuild_ProjectLogsConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectVisibility = (i.projectVisibility !== undefined ? i.projectVisibility : "");
  out.publicProjectAlias = "";
  out.queuedTimeout = (i.queuedTimeout !== undefined ? i.queuedTimeout : 30);
  out.resourceAccessRole = (i.resourceAccessRole !== undefined ? i.resourceAccessRole : "");
  out.secondaryArtifacts = (i.secondaryArtifacts !== undefined ? i.secondaryArtifacts : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondaryArtifact(ctx, depth + 1))]));
  out.secondarySourceVersions = (i.secondarySourceVersions !== undefined ? i.secondarySourceVersions : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondarySourceVersion(ctx, depth + 1))]));
  out.secondarySources = (i.secondarySources !== undefined ? i.secondarySources : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_ProjectSecondarySource(ctx, depth + 1))]));
  out.serviceRole = (i.serviceRole !== undefined ? i.serviceRole : "");
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_codebuild.codebuild_ProjectSource(ctx, depth + 1)));
  out.sourceVersion = (i.sourceVersion !== undefined ? i.sourceVersion : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_codebuild.codebuild_ProjectVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:codebuild/reportGroup:ReportGroup
export function ReportGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.created = "";
  out.deleteReports = (i.deleteReports !== undefined ? i.deleteReports : false);
  out.exportConfig = (i.exportConfig !== undefined ? i.exportConfig : (depth > 4 ? {} : T_codebuild.codebuild_ReportGroupExportConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:codebuild/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:codebuild/sourceCredential:SourceCredential
export function SourceCredential(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authType = (i.authType !== undefined ? i.authType : "");
  out.serverType = (i.serverType !== undefined ? i.serverType : "");
  out.token = (i.token !== undefined ? i.token : "");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:codebuild/webhook:Webhook
export function Webhook(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branchFilter = (i.branchFilter !== undefined ? i.branchFilter : "");
  out.buildType = (i.buildType !== undefined ? i.buildType : "");
  out.filterGroups = (i.filterGroups !== undefined ? i.filterGroups : (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_WebhookFilterGroup(ctx, depth + 1))]));
  out.manualCreation = (i.manualCreation !== undefined ? i.manualCreation : false);
  out.payloadUrl = h.endpoint(ctx, "payloadUrl");
  out.projectName = (i.projectName !== undefined ? i.projectName : "");
  out.scopeConfiguration = (i.scopeConfiguration !== undefined ? i.scopeConfiguration : (depth > 4 ? {} : T_codebuild.codebuild_WebhookScopeConfiguration(ctx, depth + 1)));
  out.secret = "";
  out.url = h.endpoint(ctx, "url");
  return out;
}

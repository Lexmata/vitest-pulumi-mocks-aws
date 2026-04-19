// GENERATED FILE — do not edit.
// Service: appstream   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appstream from "../types/appstream.js";

// aws:appstream/directoryConfig:DirectoryConfig
export function DirectoryConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdTime = h.timestamp();
  out.directoryName = (i.directoryName !== undefined ? i.directoryName : "");
  out.organizationalUnitDistinguishedNames = (i.organizationalUnitDistinguishedNames !== undefined ? i.organizationalUnitDistinguishedNames : (depth > 4 ? [] : [""]));
  out.serviceAccountCredentials = (i.serviceAccountCredentials !== undefined ? i.serviceAccountCredentials : (depth > 4 ? {} : T_appstream.appstream_DirectoryConfigServiceAccountCredentials(ctx, depth + 1)));
  return out;
}

// aws:appstream/fleet:Fleet
export function Fleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeCapacity = (i.computeCapacity !== undefined ? i.computeCapacity : (depth > 4 ? {} : T_appstream.appstream_FleetComputeCapacity(ctx, depth + 1)));
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.disconnectTimeoutInSeconds = (i.disconnectTimeoutInSeconds !== undefined ? i.disconnectTimeoutInSeconds : 30);
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.domainJoinInfo = (i.domainJoinInfo !== undefined ? i.domainJoinInfo : (depth > 4 ? {} : T_appstream.appstream_FleetDomainJoinInfo(ctx, depth + 1)));
  out.enableDefaultInternetAccess = (i.enableDefaultInternetAccess !== undefined ? i.enableDefaultInternetAccess : true);
  out.fleetType = (i.fleetType !== undefined ? i.fleetType : "");
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.idleDisconnectTimeoutInSeconds = (i.idleDisconnectTimeoutInSeconds !== undefined ? i.idleDisconnectTimeoutInSeconds : 30);
  out.imageArn = (i.imageArn !== undefined ? i.imageArn : h.arn(ctx));
  out.imageName = (i.imageName !== undefined ? i.imageName : "");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.maxSessionsPerInstance = (i.maxSessionsPerInstance !== undefined ? i.maxSessionsPerInstance : 0);
  out.maxUserDurationInSeconds = (i.maxUserDurationInSeconds !== undefined ? i.maxUserDurationInSeconds : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.streamView = (i.streamView !== undefined ? i.streamView : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_appstream.appstream_FleetVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:appstream/fleetStackAssociation:FleetStackAssociation
export function FleetStackAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fleetName = (i.fleetName !== undefined ? i.fleetName : "");
  out.stackName = (i.stackName !== undefined ? i.stackName : "");
  return out;
}

// aws:appstream/imageBuilder:ImageBuilder
export function ImageBuilder(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessEndpoints = (i.accessEndpoints !== undefined ? i.accessEndpoints : (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_ImageBuilderAccessEndpoint(ctx, depth + 1))]));
  out.appstreamAgentVersion = (i.appstreamAgentVersion !== undefined ? i.appstreamAgentVersion : "");
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.domainJoinInfo = (i.domainJoinInfo !== undefined ? i.domainJoinInfo : (depth > 4 ? {} : T_appstream.appstream_ImageBuilderDomainJoinInfo(ctx, depth + 1)));
  out.enableDefaultInternetAccess = (i.enableDefaultInternetAccess !== undefined ? i.enableDefaultInternetAccess : true);
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.imageArn = (i.imageArn !== undefined ? i.imageArn : h.arn(ctx));
  out.imageName = (i.imageName !== undefined ? i.imageName : "");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_appstream.appstream_ImageBuilderVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:appstream/stack:Stack
export function Stack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessEndpoints = (i.accessEndpoints !== undefined ? i.accessEndpoints : (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_StackAccessEndpoint(ctx, depth + 1))]));
  out.applicationSettings = (i.applicationSettings !== undefined ? i.applicationSettings : (depth > 4 ? {} : T_appstream.appstream_StackApplicationSettings(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.embedHostDomains = (i.embedHostDomains !== undefined ? i.embedHostDomains : (depth > 4 ? [] : [""]));
  out.feedbackUrl = (i.feedbackUrl !== undefined ? i.feedbackUrl : h.endpoint(ctx, "feedbackUrl"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.redirectUrl = (i.redirectUrl !== undefined ? i.redirectUrl : h.endpoint(ctx, "redirectUrl"));
  out.storageConnectors = (i.storageConnectors !== undefined ? i.storageConnectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_StackStorageConnector(ctx, depth + 1))]));
  out.streamingExperienceSettings = (i.streamingExperienceSettings !== undefined ? i.streamingExperienceSettings : (depth > 4 ? {} : T_appstream.appstream_StackStreamingExperienceSettings(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userSettings = (i.userSettings !== undefined ? i.userSettings : (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_StackUserSetting(ctx, depth + 1))]));
  return out;
}

// aws:appstream/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.createdTime = h.timestamp();
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.firstName = (i.firstName !== undefined ? i.firstName : "");
  out.lastName = (i.lastName !== undefined ? i.lastName : "");
  out.sendEmailNotification = (i.sendEmailNotification !== undefined ? i.sendEmailNotification : false);
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:appstream/userStackAssociation:UserStackAssociation
export function UserStackAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.sendEmailNotification = (i.sendEmailNotification !== undefined ? i.sendEmailNotification : false);
  out.stackName = (i.stackName !== undefined ? i.stackName : "");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

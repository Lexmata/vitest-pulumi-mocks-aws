// GENERATED FILE — do not edit.
// Service: eks   (9 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_eks from "../types/eks.js";

// aws:eks/getAccessEntry:getAccessEntry
export function getAccessEntry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessEntryArn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.kubernetesGroups = (depth > 4 ? [] : [""]);
  out.modifiedAt = h.timestamp();
  out.principalArn = (i.principalArn !== undefined ? i.principalArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  out.userName = "";
  return out;
}

// aws:eks/getAddon:getAddon
export function getAddon(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addonName = (i.addonName !== undefined ? i.addonName : "");
  out.addonVersion = "";
  out.arn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.configurationValues = "";
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.modifiedAt = h.timestamp();
  out.podIdentityAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getAddonPodIdentityAssociation(ctx, depth + 1))]);
  out.serviceAccountRoleArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:eks/getAddonVersion:getAddonVersion
export function getAddonVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addonName = (i.addonName !== undefined ? i.addonName : "");
  out.id = h.id(ctx, "id");
  out.kubernetesVersion = (i.kubernetesVersion !== undefined ? i.kubernetesVersion : "");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.version = "1";
  return out;
}

// aws:eks/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterAccessConfig(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.certificateAuthorities = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterCertificateAuthority(ctx, depth + 1))]);
  out.clusterId = h.id(ctx, "clusterId");
  out.computeConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterComputeConfig(ctx, depth + 1))]);
  out.createdAt = h.timestamp();
  out.enabledClusterLogTypes = (depth > 4 ? [] : [""]);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.id = h.id(ctx, "id");
  out.identities = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterIdentity(ctx, depth + 1))]);
  out.kubernetesNetworkConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterKubernetesNetworkConfig(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outpostConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterOutpostConfig(ctx, depth + 1))]);
  out.platformVersion = "";
  out.remoteNetworkConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterRemoteNetworkConfig(ctx, depth + 1))]);
  out.roleArn = h.arn(ctx);
  out.status = "active";
  out.storageConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterStorageConfig(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.upgradePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterUpgradePolicy(ctx, depth + 1))]);
  out.version = "1";
  out.vpcConfig = (depth > 4 ? {} : T_eks.eks_getClusterVpcConfig(ctx, depth + 1));
  out.zonalShiftConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterZonalShiftConfig(ctx, depth + 1))]);
  return out;
}

// aws:eks/getClusterAuth:getClusterAuth
export function getClusterAuth(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.token = "";
  return out;
}

// aws:eks/getClusterVersions:getClusterVersions
export function getClusterVersions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterType = (i.clusterType !== undefined ? i.clusterType : "");
  out.clusterVersions = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterVersionsClusterVersion(ctx, depth + 1))]);
  out.clusterVersionsOnlies = (i.clusterVersionsOnlies !== undefined ? i.clusterVersionsOnlies : (depth > 4 ? [] : [""]));
  out.defaultOnly = (i.defaultOnly !== undefined ? i.defaultOnly : false);
  out.id = h.id(ctx, "id");
  out.includeAll = (i.includeAll !== undefined ? i.includeAll : false);
  out.versionStatus = (i.versionStatus !== undefined ? i.versionStatus : "");
  return out;
}

// aws:eks/getClusters:getClusters
export function getClusters(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/getNodeGroup:getNodeGroup
export function getNodeGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiType = "";
  out.arn = h.arn(ctx);
  out.capacityType = "";
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.diskSize = 8;
  out.id = h.id(ctx, "id");
  out.instanceTypes = (depth > 4 ? [] : [""]);
  out.labels = {};
  out.launchTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupLaunchTemplate(ctx, depth + 1))]);
  out.nodeGroupName = (i.nodeGroupName !== undefined ? i.nodeGroupName : "");
  out.nodeRoleArn = h.arn(ctx);
  out.releaseVersion = "";
  out.remoteAccesses = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupRemoteAccess(ctx, depth + 1))]);
  out.resources = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupResource(ctx, depth + 1))]);
  out.scalingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupScalingConfig(ctx, depth + 1))]);
  out.status = "active";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.taints = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupTaint(ctx, depth + 1))]);
  out.version = "1";
  return out;
}

// aws:eks/getNodeGroups:getNodeGroups
export function getNodeGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

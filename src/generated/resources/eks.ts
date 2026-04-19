// GENERATED FILE — do not edit.
// Service: eks   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_eks from "../types/eks.js";

// aws:eks/accessEntry:AccessEntry
export function AccessEntry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessEntryArn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.createdAt = h.timestamp();
  out.kubernetesGroups = (i.kubernetesGroups !== undefined ? i.kubernetesGroups : (depth > 4 ? [] : [""]));
  out.modifiedAt = h.timestamp();
  out.principalArn = (i.principalArn !== undefined ? i.principalArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:eks/accessPolicyAssociation:AccessPolicyAssociation
export function AccessPolicyAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessScope = (i.accessScope !== undefined ? i.accessScope : (depth > 4 ? {} : T_eks.eks_AccessPolicyAssociationAccessScope(ctx, depth + 1)));
  out.associatedAt = "";
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.modifiedAt = h.timestamp();
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : h.arn(ctx));
  out.principalArn = (i.principalArn !== undefined ? i.principalArn : h.arn(ctx));
  return out;
}

// aws:eks/addon:Addon
export function Addon(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addonName = (i.addonName !== undefined ? i.addonName : "");
  out.addonVersion = (i.addonVersion !== undefined ? i.addonVersion : "");
  out.arn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.configurationValues = (i.configurationValues !== undefined ? i.configurationValues : "");
  out.createdAt = h.timestamp();
  out.modifiedAt = h.timestamp();
  out.podIdentityAssociations = (i.podIdentityAssociations !== undefined ? i.podIdentityAssociations : (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_AddonPodIdentityAssociation(ctx, depth + 1))]));
  out.preserve = (i.preserve !== undefined ? i.preserve : false);
  out.resolveConflicts = (i.resolveConflicts !== undefined ? i.resolveConflicts : "");
  out.resolveConflictsOnCreate = (i.resolveConflictsOnCreate !== undefined ? i.resolveConflictsOnCreate : "");
  out.resolveConflictsOnUpdate = (i.resolveConflictsOnUpdate !== undefined ? i.resolveConflictsOnUpdate : "");
  out.serviceAccountRoleArn = (i.serviceAccountRoleArn !== undefined ? i.serviceAccountRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:eks/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessConfig = (i.accessConfig !== undefined ? i.accessConfig : (depth > 4 ? {} : T_eks.eks_ClusterAccessConfig(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.bootstrapSelfManagedAddons = (i.bootstrapSelfManagedAddons !== undefined ? i.bootstrapSelfManagedAddons : false);
  out.certificateAuthorities = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_ClusterCertificateAuthority(ctx, depth + 1))]);
  out.certificateAuthority = (depth > 4 ? {} : T_eks.eks_ClusterCertificateAuthority(ctx, depth + 1));
  out.clusterId = h.id(ctx, "clusterId");
  out.computeConfig = (i.computeConfig !== undefined ? i.computeConfig : (depth > 4 ? {} : T_eks.eks_ClusterComputeConfig(ctx, depth + 1)));
  out.createdAt = h.timestamp();
  out.defaultAddonsToRemoves = (i.defaultAddonsToRemoves !== undefined ? i.defaultAddonsToRemoves : (depth > 4 ? [] : [""]));
  out.enabledClusterLogTypes = (i.enabledClusterLogTypes !== undefined ? i.enabledClusterLogTypes : (depth > 4 ? [] : [""]));
  out.encryptionConfig = (i.encryptionConfig !== undefined ? i.encryptionConfig : (depth > 4 ? {} : T_eks.eks_ClusterEncryptionConfig(ctx, depth + 1)));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.forceUpdateVersion = (i.forceUpdateVersion !== undefined ? i.forceUpdateVersion : false);
  out.identities = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_ClusterIdentity(ctx, depth + 1))]);
  out.kubernetesNetworkConfig = (i.kubernetesNetworkConfig !== undefined ? i.kubernetesNetworkConfig : (depth > 4 ? {} : T_eks.eks_ClusterKubernetesNetworkConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outpostConfig = (i.outpostConfig !== undefined ? i.outpostConfig : (depth > 4 ? {} : T_eks.eks_ClusterOutpostConfig(ctx, depth + 1)));
  out.platformVersion = "";
  out.remoteNetworkConfig = (i.remoteNetworkConfig !== undefined ? i.remoteNetworkConfig : (depth > 4 ? {} : T_eks.eks_ClusterRemoteNetworkConfig(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.status = "active";
  out.storageConfig = (i.storageConfig !== undefined ? i.storageConfig : (depth > 4 ? {} : T_eks.eks_ClusterStorageConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.upgradePolicy = (i.upgradePolicy !== undefined ? i.upgradePolicy : (depth > 4 ? {} : T_eks.eks_ClusterUpgradePolicy(ctx, depth + 1)));
  out.version = (i.version !== undefined ? i.version : "1");
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_eks.eks_ClusterVpcConfig(ctx, depth + 1)));
  out.zonalShiftConfig = (i.zonalShiftConfig !== undefined ? i.zonalShiftConfig : (depth > 4 ? {} : T_eks.eks_ClusterZonalShiftConfig(ctx, depth + 1)));
  return out;
}

// aws:eks/fargateProfile:FargateProfile
export function FargateProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.fargateProfileName = (i.fargateProfileName !== undefined ? i.fargateProfileName : "");
  out.podExecutionRoleArn = (i.podExecutionRoleArn !== undefined ? i.podExecutionRoleArn : h.arn(ctx));
  out.selectors = (i.selectors !== undefined ? i.selectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_FargateProfileSelector(ctx, depth + 1))]));
  out.status = "active";
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:eks/identityProviderConfig:IdentityProviderConfig
export function IdentityProviderConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.oidc = (i.oidc !== undefined ? i.oidc : (depth > 4 ? {} : T_eks.eks_IdentityProviderConfigOidc(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:eks/nodeGroup:NodeGroup
export function NodeGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amiType = (i.amiType !== undefined ? i.amiType : "");
  out.arn = h.arn(ctx);
  out.capacityType = (i.capacityType !== undefined ? i.capacityType : "");
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.diskSize = (i.diskSize !== undefined ? i.diskSize : 8);
  out.forceUpdateVersion = (i.forceUpdateVersion !== undefined ? i.forceUpdateVersion : false);
  out.instanceTypes = (i.instanceTypes !== undefined ? i.instanceTypes : (depth > 4 ? [] : [""]));
  out.labels = (i.labels !== undefined ? i.labels : {});
  out.launchTemplate = (i.launchTemplate !== undefined ? i.launchTemplate : (depth > 4 ? {} : T_eks.eks_NodeGroupLaunchTemplate(ctx, depth + 1)));
  out.nodeGroupName = (i.nodeGroupName !== undefined ? i.nodeGroupName : "");
  out.nodeGroupNamePrefix = (i.nodeGroupNamePrefix !== undefined ? i.nodeGroupNamePrefix : "");
  out.nodeRepairConfig = (i.nodeRepairConfig !== undefined ? i.nodeRepairConfig : (depth > 4 ? {} : T_eks.eks_NodeGroupNodeRepairConfig(ctx, depth + 1)));
  out.nodeRoleArn = (i.nodeRoleArn !== undefined ? i.nodeRoleArn : h.arn(ctx));
  out.releaseVersion = (i.releaseVersion !== undefined ? i.releaseVersion : "");
  out.remoteAccess = (i.remoteAccess !== undefined ? i.remoteAccess : (depth > 4 ? {} : T_eks.eks_NodeGroupRemoteAccess(ctx, depth + 1)));
  out.resources = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_NodeGroupResource(ctx, depth + 1))]);
  out.scalingConfig = (i.scalingConfig !== undefined ? i.scalingConfig : (depth > 4 ? {} : T_eks.eks_NodeGroupScalingConfig(ctx, depth + 1)));
  out.status = "active";
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.taints = (i.taints !== undefined ? i.taints : (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_NodeGroupTaint(ctx, depth + 1))]));
  out.updateConfig = (i.updateConfig !== undefined ? i.updateConfig : (depth > 4 ? {} : T_eks.eks_NodeGroupUpdateConfig(ctx, depth + 1)));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:eks/podIdentityAssociation:PodIdentityAssociation
export function PodIdentityAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationArn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.serviceAccount = (i.serviceAccount !== undefined ? i.serviceAccount : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

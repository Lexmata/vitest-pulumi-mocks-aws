// GENERATED FILE — do not edit.
// Service: eks   (56 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_eks from "./eks.js";

// aws:eks/AccessPolicyAssociationAccessScope:AccessPolicyAssociationAccessScope
export function eks_AccessPolicyAssociationAccessScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespaces = (depth > 4 ? [] : [""]);
  out.type = "";
  return out;
}

// aws:eks/AddonPodIdentityAssociation:AddonPodIdentityAssociation
export function eks_AddonPodIdentityAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.serviceAccount = "";
  return out;
}

// aws:eks/ClusterAccessConfig:ClusterAccessConfig
export function eks_ClusterAccessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationMode = "";
  out.bootstrapClusterCreatorAdminPermissions = false;
  return out;
}

// aws:eks/ClusterCertificateAuthority:ClusterCertificateAuthority
export function eks_ClusterCertificateAuthority(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  return out;
}

// aws:eks/ClusterComputeConfig:ClusterComputeConfig
export function eks_ClusterComputeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.nodePools = (depth > 4 ? [] : [""]);
  out.nodeRoleArn = h.arn(ctx);
  return out;
}

// aws:eks/ClusterEncryptionConfig:ClusterEncryptionConfig
export function eks_ClusterEncryptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.provider = (depth > 4 ? {} : T_eks.eks_ClusterEncryptionConfigProvider(ctx, depth + 1));
  out.resources = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/ClusterEncryptionConfigProvider:ClusterEncryptionConfigProvider
export function eks_ClusterEncryptionConfigProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyArn = h.arn(ctx);
  return out;
}

// aws:eks/ClusterIdentity:ClusterIdentity
export function eks_ClusterIdentity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oidcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_ClusterIdentityOidc(ctx, depth + 1))]);
  return out;
}

// aws:eks/ClusterIdentityOidc:ClusterIdentityOidc
export function eks_ClusterIdentityOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.issuer = "";
  return out;
}

// aws:eks/ClusterKubernetesNetworkConfig:ClusterKubernetesNetworkConfig
export function eks_ClusterKubernetesNetworkConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.elasticLoadBalancing = (depth > 4 ? {} : T_eks.eks_ClusterKubernetesNetworkConfigElasticLoadBalancing(ctx, depth + 1));
  out.ipFamily = "";
  out.serviceIpv4Cidr = "";
  out.serviceIpv6Cidr = "";
  return out;
}

// aws:eks/ClusterKubernetesNetworkConfigElasticLoadBalancing:ClusterKubernetesNetworkConfigElasticLoadBalancing
export function eks_ClusterKubernetesNetworkConfigElasticLoadBalancing(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/ClusterOutpostConfig:ClusterOutpostConfig
export function eks_ClusterOutpostConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.controlPlaneInstanceType = "";
  out.controlPlanePlacement = (depth > 4 ? {} : T_eks.eks_ClusterOutpostConfigControlPlanePlacement(ctx, depth + 1));
  out.outpostArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/ClusterOutpostConfigControlPlanePlacement:ClusterOutpostConfigControlPlanePlacement
export function eks_ClusterOutpostConfigControlPlanePlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = "";
  return out;
}

// aws:eks/ClusterRemoteNetworkConfig:ClusterRemoteNetworkConfig
export function eks_ClusterRemoteNetworkConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.remoteNodeNetworks = (depth > 4 ? {} : T_eks.eks_ClusterRemoteNetworkConfigRemoteNodeNetworks(ctx, depth + 1));
  out.remotePodNetworks = (depth > 4 ? {} : T_eks.eks_ClusterRemoteNetworkConfigRemotePodNetworks(ctx, depth + 1));
  return out;
}

// aws:eks/ClusterRemoteNetworkConfigRemoteNodeNetworks:ClusterRemoteNetworkConfigRemoteNodeNetworks
export function eks_ClusterRemoteNetworkConfigRemoteNodeNetworks(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/ClusterRemoteNetworkConfigRemotePodNetworks:ClusterRemoteNetworkConfigRemotePodNetworks
export function eks_ClusterRemoteNetworkConfigRemotePodNetworks(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/ClusterStorageConfig:ClusterStorageConfig
export function eks_ClusterStorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockStorage = (depth > 4 ? {} : T_eks.eks_ClusterStorageConfigBlockStorage(ctx, depth + 1));
  return out;
}

// aws:eks/ClusterStorageConfigBlockStorage:ClusterStorageConfigBlockStorage
export function eks_ClusterStorageConfigBlockStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/ClusterUpgradePolicy:ClusterUpgradePolicy
export function eks_ClusterUpgradePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.supportType = "";
  return out;
}

// aws:eks/ClusterVpcConfig:ClusterVpcConfig
export function eks_ClusterVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterSecurityGroupId = h.id(ctx, "clusterSecurityGroupId");
  out.endpointPrivateAccess = false;
  out.endpointPublicAccess = false;
  out.publicAccessCidrs = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:eks/ClusterZonalShiftConfig:ClusterZonalShiftConfig
export function eks_ClusterZonalShiftConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/FargateProfileSelector:FargateProfileSelector
export function eks_FargateProfileSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labels = {};
  out.namespace = "";
  return out;
}

// aws:eks/IdentityProviderConfigOidc:IdentityProviderConfigOidc
export function eks_IdentityProviderConfigOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.groupsClaim = "";
  out.groupsPrefix = "";
  out.identityProviderConfigName = "";
  out.issuerUrl = h.endpoint(ctx, "issuerUrl");
  out.requiredClaims = {};
  out.usernameClaim = "";
  out.usernamePrefix = "";
  return out;
}

// aws:eks/NodeGroupLaunchTemplate:NodeGroupLaunchTemplate
export function eks_NodeGroupLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:eks/NodeGroupNodeRepairConfig:NodeGroupNodeRepairConfig
export function eks_NodeGroupNodeRepairConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/NodeGroupRemoteAccess:NodeGroupRemoteAccess
export function eks_NodeGroupRemoteAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ec2SshKey = "";
  out.sourceSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/NodeGroupResource:NodeGroupResource
export function eks_NodeGroupResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_NodeGroupResourceAutoscalingGroup(ctx, depth + 1))]);
  out.remoteAccessSecurityGroupId = h.id(ctx, "remoteAccessSecurityGroupId");
  return out;
}

// aws:eks/NodeGroupResourceAutoscalingGroup:NodeGroupResourceAutoscalingGroup
export function eks_NodeGroupResourceAutoscalingGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:eks/NodeGroupScalingConfig:NodeGroupScalingConfig
export function eks_NodeGroupScalingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredSize = 8;
  out.maxSize = 8;
  out.minSize = 8;
  return out;
}

// aws:eks/NodeGroupTaint:NodeGroupTaint
export function eks_NodeGroupTaint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.effect = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:eks/NodeGroupUpdateConfig:NodeGroupUpdateConfig
export function eks_NodeGroupUpdateConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxUnavailable = 0;
  out.maxUnavailablePercentage = 0;
  return out;
}

// aws:eks/getAddonPodIdentityAssociation:getAddonPodIdentityAssociation
export function eks_getAddonPodIdentityAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.serviceAccount = "";
  return out;
}

// aws:eks/getClusterAccessConfig:getClusterAccessConfig
export function eks_getClusterAccessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationMode = "";
  out.bootstrapClusterCreatorAdminPermissions = false;
  return out;
}

// aws:eks/getClusterCertificateAuthority:getClusterCertificateAuthority
export function eks_getClusterCertificateAuthority(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  return out;
}

// aws:eks/getClusterComputeConfig:getClusterComputeConfig
export function eks_getClusterComputeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.nodePools = (depth > 4 ? [] : [""]);
  out.nodeRoleArn = h.arn(ctx);
  return out;
}

// aws:eks/getClusterIdentity:getClusterIdentity
export function eks_getClusterIdentity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oidcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterIdentityOidc(ctx, depth + 1))]);
  return out;
}

// aws:eks/getClusterIdentityOidc:getClusterIdentityOidc
export function eks_getClusterIdentityOidc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.issuer = "";
  return out;
}

// aws:eks/getClusterKubernetesNetworkConfig:getClusterKubernetesNetworkConfig
export function eks_getClusterKubernetesNetworkConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.elasticLoadBalancings = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterKubernetesNetworkConfigElasticLoadBalancing(ctx, depth + 1))]);
  out.ipFamily = "";
  out.serviceIpv4Cidr = "";
  out.serviceIpv6Cidr = "";
  return out;
}

// aws:eks/getClusterKubernetesNetworkConfigElasticLoadBalancing:getClusterKubernetesNetworkConfigElasticLoadBalancing
export function eks_getClusterKubernetesNetworkConfigElasticLoadBalancing(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/getClusterOutpostConfig:getClusterOutpostConfig
export function eks_getClusterOutpostConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.controlPlaneInstanceType = "";
  out.controlPlanePlacements = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterOutpostConfigControlPlanePlacement(ctx, depth + 1))]);
  out.outpostArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/getClusterOutpostConfigControlPlanePlacement:getClusterOutpostConfigControlPlanePlacement
export function eks_getClusterOutpostConfigControlPlanePlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = "";
  return out;
}

// aws:eks/getClusterRemoteNetworkConfig:getClusterRemoteNetworkConfig
export function eks_getClusterRemoteNetworkConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.remoteNodeNetworks = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterRemoteNetworkConfigRemoteNodeNetwork(ctx, depth + 1))]);
  out.remotePodNetworks = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterRemoteNetworkConfigRemotePodNetwork(ctx, depth + 1))]);
  return out;
}

// aws:eks/getClusterRemoteNetworkConfigRemoteNodeNetwork:getClusterRemoteNetworkConfigRemoteNodeNetwork
export function eks_getClusterRemoteNetworkConfigRemoteNodeNetwork(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/getClusterRemoteNetworkConfigRemotePodNetwork:getClusterRemoteNetworkConfigRemotePodNetwork
export function eks_getClusterRemoteNetworkConfigRemotePodNetwork(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/getClusterStorageConfig:getClusterStorageConfig
export function eks_getClusterStorageConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getClusterStorageConfigBlockStorage(ctx, depth + 1))]);
  return out;
}

// aws:eks/getClusterStorageConfigBlockStorage:getClusterStorageConfigBlockStorage
export function eks_getClusterStorageConfigBlockStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/getClusterUpgradePolicy:getClusterUpgradePolicy
export function eks_getClusterUpgradePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.supportType = "";
  return out;
}

// aws:eks/getClusterVersionsClusterVersion:getClusterVersionsClusterVersion
export function eks_getClusterVersionsClusterVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterType = "";
  out.clusterVersion = "";
  out.defaultPlatformVersion = "";
  out.defaultVersion = false;
  out.endOfExtendedSupportDate = "";
  out.endOfStandardSupportDate = "";
  out.kubernetesPatchVersion = "";
  out.releaseDate = "";
  out.versionStatus = "";
  return out;
}

// aws:eks/getClusterVpcConfig:getClusterVpcConfig
export function eks_getClusterVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterSecurityGroupId = h.id(ctx, "clusterSecurityGroupId");
  out.endpointPrivateAccess = false;
  out.endpointPublicAccess = false;
  out.publicAccessCidrs = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:eks/getClusterZonalShiftConfig:getClusterZonalShiftConfig
export function eks_getClusterZonalShiftConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:eks/getNodeGroupLaunchTemplate:getNodeGroupLaunchTemplate
export function eks_getNodeGroupLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:eks/getNodeGroupRemoteAccess:getNodeGroupRemoteAccess
export function eks_getNodeGroupRemoteAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ec2SshKey = "";
  out.sourceSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:eks/getNodeGroupResource:getNodeGroupResource
export function eks_getNodeGroupResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_eks.eks_getNodeGroupResourceAutoscalingGroup(ctx, depth + 1))]);
  out.remoteAccessSecurityGroupId = h.id(ctx, "remoteAccessSecurityGroupId");
  return out;
}

// aws:eks/getNodeGroupResourceAutoscalingGroup:getNodeGroupResourceAutoscalingGroup
export function eks_getNodeGroupResourceAutoscalingGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:eks/getNodeGroupScalingConfig:getNodeGroupScalingConfig
export function eks_getNodeGroupScalingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredSize = 8;
  out.maxSize = 8;
  out.minSize = 8;
  return out;
}

// aws:eks/getNodeGroupTaint:getNodeGroupTaint
export function eks_getNodeGroupTaint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.effect = "";
  out.key = "";
  out.value = "";
  return out;
}

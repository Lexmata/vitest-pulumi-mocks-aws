// GENERATED FILE — do not edit.
// Service: opsworks   (17 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opsworks from "../types/opsworks.js";

// aws:opsworks/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appSources = (i.appSources !== undefined ? i.appSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_ApplicationAppSource(ctx, depth + 1))]));
  out.autoBundleOnDeploy = (i.autoBundleOnDeploy !== undefined ? i.autoBundleOnDeploy : "");
  out.awsFlowRubySettings = (i.awsFlowRubySettings !== undefined ? i.awsFlowRubySettings : "");
  out.dataSourceArn = (i.dataSourceArn !== undefined ? i.dataSourceArn : h.arn(ctx));
  out.dataSourceDatabaseName = (i.dataSourceDatabaseName !== undefined ? i.dataSourceDatabaseName : "");
  out.dataSourceType = (i.dataSourceType !== undefined ? i.dataSourceType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.documentRoot = (i.documentRoot !== undefined ? i.documentRoot : "");
  out.domains = (i.domains !== undefined ? i.domains : (depth > 4 ? [] : [""]));
  out.enableSsl = (i.enableSsl !== undefined ? i.enableSsl : true);
  out.environments = (i.environments !== undefined ? i.environments : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_ApplicationEnvironment(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.railsEnv = (i.railsEnv !== undefined ? i.railsEnv : "");
  out.shortName = (i.shortName !== undefined ? i.shortName : "");
  out.sslConfigurations = (i.sslConfigurations !== undefined ? i.sslConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_ApplicationSslConfiguration(ctx, depth + 1))]));
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opsworks/customLayer:CustomLayer
export function CustomLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_CustomLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_CustomLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_CustomLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.shortName = (i.shortName !== undefined ? i.shortName : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/ecsClusterLayer:EcsClusterLayer
export function EcsClusterLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerEbsVolume(ctx, depth + 1))]));
  out.ecsClusterArn = (i.ecsClusterArn !== undefined ? i.ecsClusterArn : h.arn(ctx));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_EcsClusterLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/gangliaLayer:GangliaLayer
export function GangliaLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_GangliaLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.password = (i.password !== undefined ? i.password : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:opsworks/haproxyLayer:HaproxyLayer
export function HaproxyLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.healthcheckMethod = (i.healthcheckMethod !== undefined ? i.healthcheckMethod : "");
  out.healthcheckUrl = (i.healthcheckUrl !== undefined ? i.healthcheckUrl : h.endpoint(ctx, "healthcheckUrl"));
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_HaproxyLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.statsEnabled = (i.statsEnabled !== undefined ? i.statsEnabled : false);
  out.statsPassword = (i.statsPassword !== undefined ? i.statsPassword : "");
  out.statsUrl = (i.statsUrl !== undefined ? i.statsUrl : h.endpoint(ctx, "statsUrl"));
  out.statsUser = (i.statsUser !== undefined ? i.statsUser : "");
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentVersion = (i.agentVersion !== undefined ? i.agentVersion : "");
  out.amiId = (i.amiId !== undefined ? i.amiId : h.id(ctx, "amiId"));
  out.architecture = (i.architecture !== undefined ? i.architecture : "");
  out.autoScalingType = (i.autoScalingType !== undefined ? i.autoScalingType : "");
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.createdAt = (i.createdAt !== undefined ? i.createdAt : h.timestamp());
  out.deleteEbs = (i.deleteEbs !== undefined ? i.deleteEbs : false);
  out.deleteEip = (i.deleteEip !== undefined ? i.deleteEip : false);
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_InstanceEbsBlockDevice(ctx, depth + 1))]));
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.ec2InstanceId = h.id(ctx, "ec2InstanceId");
  out.ecsClusterArn = (i.ecsClusterArn !== undefined ? i.ecsClusterArn : h.arn(ctx));
  out.elasticIp = (i.elasticIp !== undefined ? i.elasticIp : "");
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_InstanceEphemeralBlockDevice(ctx, depth + 1))]));
  out.hostname = (i.hostname !== undefined ? i.hostname : "");
  out.infrastructureClass = (i.infrastructureClass !== undefined ? i.infrastructureClass : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceProfileArn = (i.instanceProfileArn !== undefined ? i.instanceProfileArn : h.arn(ctx));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.lastServiceErrorId = h.id(ctx, "lastServiceErrorId");
  out.layerIds = (i.layerIds !== undefined ? i.layerIds : (depth > 4 ? [] : [""]));
  out.os = (i.os !== undefined ? i.os : "");
  out.platform = "";
  out.privateDns = "";
  out.privateIp = "10.0.0.10";
  out.publicDns = "";
  out.publicIp = "54.0.0.10";
  out.registeredBy = "";
  out.reportedAgentVersion = "";
  out.reportedOsFamily = "";
  out.reportedOsName = "";
  out.reportedOsVersion = "";
  out.rootBlockDevices = (i.rootBlockDevices !== undefined ? i.rootBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_InstanceRootBlockDevice(ctx, depth + 1))]));
  out.rootDeviceType = (i.rootDeviceType !== undefined ? i.rootDeviceType : "");
  out.rootDeviceVolumeId = h.id(ctx, "rootDeviceVolumeId");
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.sshHostDsaKeyFingerprint = "";
  out.sshHostRsaKeyFingerprint = "";
  out.sshKeyName = (i.sshKeyName !== undefined ? i.sshKeyName : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.state = (i.state !== undefined ? i.state : "active");
  out.status = (i.status !== undefined ? i.status : "active");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tenancy = (i.tenancy !== undefined ? i.tenancy : "");
  out.virtualizationType = (i.virtualizationType !== undefined ? i.virtualizationType : "");
  return out;
}

// aws:opsworks/javaAppLayer:JavaAppLayer
export function JavaAppLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appServer = (i.appServer !== undefined ? i.appServer : "");
  out.appServerVersion = (i.appServerVersion !== undefined ? i.appServerVersion : "");
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.jvmOptions = (i.jvmOptions !== undefined ? i.jvmOptions : "");
  out.jvmType = (i.jvmType !== undefined ? i.jvmType : "");
  out.jvmVersion = (i.jvmVersion !== undefined ? i.jvmVersion : "");
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_JavaAppLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/memcachedLayer:MemcachedLayer
export function MemcachedLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedMemory = (i.allocatedMemory !== undefined ? i.allocatedMemory : 0);
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_MemcachedLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/mysqlLayer:MysqlLayer
export function MysqlLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_MysqlLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rootPassword = (i.rootPassword !== undefined ? i.rootPassword : "");
  out.rootPasswordOnAllInstances = (i.rootPasswordOnAllInstances !== undefined ? i.rootPasswordOnAllInstances : false);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/nodejsAppLayer:NodejsAppLayer
export function NodejsAppLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_NodejsAppLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nodejsVersion = (i.nodejsVersion !== undefined ? i.nodejsVersion : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/permission:Permission
export function Permission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowSsh = (i.allowSsh !== undefined ? i.allowSsh : true);
  out.allowSudo = (i.allowSudo !== undefined ? i.allowSudo : true);
  out.level = (i.level !== undefined ? i.level : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.userArn = (i.userArn !== undefined ? i.userArn : h.arn(ctx));
  return out;
}

// aws:opsworks/phpAppLayer:PhpAppLayer
export function PhpAppLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_PhpAppLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/railsAppLayer:RailsAppLayer
export function RailsAppLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appServer = (i.appServer !== undefined ? i.appServer : "");
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.bundlerVersion = (i.bundlerVersion !== undefined ? i.bundlerVersion : "");
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_RailsAppLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.manageBundler = (i.manageBundler !== undefined ? i.manageBundler : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.passengerVersion = (i.passengerVersion !== undefined ? i.passengerVersion : "");
  out.rubyVersion = (i.rubyVersion !== undefined ? i.rubyVersion : "");
  out.rubygemsVersion = (i.rubygemsVersion !== undefined ? i.rubygemsVersion : "");
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/rdsDbInstance:RdsDbInstance
export function RdsDbInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbPassword = (i.dbPassword !== undefined ? i.dbPassword : "");
  out.dbUser = (i.dbUser !== undefined ? i.dbUser : "");
  out.rdsDbInstanceArn = (i.rdsDbInstanceArn !== undefined ? i.rdsDbInstanceArn : h.arn(ctx));
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  return out;
}

// aws:opsworks/stack:Stack
export function Stack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentVersion = (i.agentVersion !== undefined ? i.agentVersion : "");
  out.arn = h.arn(ctx);
  out.berkshelfVersion = (i.berkshelfVersion !== undefined ? i.berkshelfVersion : "");
  out.color = (i.color !== undefined ? i.color : "");
  out.configurationManagerName = (i.configurationManagerName !== undefined ? i.configurationManagerName : "");
  out.configurationManagerVersion = (i.configurationManagerVersion !== undefined ? i.configurationManagerVersion : "");
  out.customCookbooksSources = (i.customCookbooksSources !== undefined ? i.customCookbooksSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_StackCustomCookbooksSource(ctx, depth + 1))]));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.defaultAvailabilityZone = (i.defaultAvailabilityZone !== undefined ? i.defaultAvailabilityZone : ctx.region + "a");
  out.defaultInstanceProfileArn = (i.defaultInstanceProfileArn !== undefined ? i.defaultInstanceProfileArn : h.arn(ctx));
  out.defaultOs = (i.defaultOs !== undefined ? i.defaultOs : "");
  out.defaultRootDeviceType = (i.defaultRootDeviceType !== undefined ? i.defaultRootDeviceType : "");
  out.defaultSshKeyName = (i.defaultSshKeyName !== undefined ? i.defaultSshKeyName : "");
  out.defaultSubnetId = (i.defaultSubnetId !== undefined ? i.defaultSubnetId : h.id(ctx, "defaultSubnetId"));
  out.hostnameTheme = (i.hostnameTheme !== undefined ? i.hostnameTheme : "");
  out.manageBerkshelf = (i.manageBerkshelf !== undefined ? i.manageBerkshelf : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.serviceRoleArn = (i.serviceRoleArn !== undefined ? i.serviceRoleArn : h.arn(ctx));
  out.stackEndpoint = h.endpoint(ctx, "stackEndpoint");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useCustomCookbooks = (i.useCustomCookbooks !== undefined ? i.useCustomCookbooks : false);
  out.useOpsworksSecurityGroups = (i.useOpsworksSecurityGroups !== undefined ? i.useOpsworksSecurityGroups : false);
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:opsworks/staticWebLayer:StaticWebLayer
export function StaticWebLayer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAssignElasticIps = (i.autoAssignElasticIps !== undefined ? i.autoAssignElasticIps : false);
  out.autoAssignPublicIps = (i.autoAssignPublicIps !== undefined ? i.autoAssignPublicIps : false);
  out.autoHealing = (i.autoHealing !== undefined ? i.autoHealing : false);
  out.cloudwatchConfiguration = (i.cloudwatchConfiguration !== undefined ? i.cloudwatchConfiguration : (depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerCloudwatchConfiguration(ctx, depth + 1)));
  out.customConfigureRecipes = (i.customConfigureRecipes !== undefined ? i.customConfigureRecipes : (depth > 4 ? [] : [""]));
  out.customDeployRecipes = (i.customDeployRecipes !== undefined ? i.customDeployRecipes : (depth > 4 ? [] : [""]));
  out.customInstanceProfileArn = (i.customInstanceProfileArn !== undefined ? i.customInstanceProfileArn : h.arn(ctx));
  out.customJson = (i.customJson !== undefined ? i.customJson : "");
  out.customSecurityGroupIds = (i.customSecurityGroupIds !== undefined ? i.customSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.customSetupRecipes = (i.customSetupRecipes !== undefined ? i.customSetupRecipes : (depth > 4 ? [] : [""]));
  out.customShutdownRecipes = (i.customShutdownRecipes !== undefined ? i.customShutdownRecipes : (depth > 4 ? [] : [""]));
  out.customUndeployRecipes = (i.customUndeployRecipes !== undefined ? i.customUndeployRecipes : (depth > 4 ? [] : [""]));
  out.drainElbOnShutdown = (i.drainElbOnShutdown !== undefined ? i.drainElbOnShutdown : false);
  out.ebsVolumes = (i.ebsVolumes !== undefined ? i.ebsVolumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerEbsVolume(ctx, depth + 1))]));
  out.elasticLoadBalancer = (i.elasticLoadBalancer !== undefined ? i.elasticLoadBalancer : "");
  out.installUpdatesOnBoot = (i.installUpdatesOnBoot !== undefined ? i.installUpdatesOnBoot : false);
  out.instanceShutdownTimeout = (i.instanceShutdownTimeout !== undefined ? i.instanceShutdownTimeout : 30);
  out.loadBasedAutoScaling = (i.loadBasedAutoScaling !== undefined ? i.loadBasedAutoScaling : (depth > 4 ? {} : T_opsworks.opsworks_StaticWebLayerLoadBasedAutoScaling(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.stackId = (i.stackId !== undefined ? i.stackId : h.id(ctx, "stackId"));
  out.systemPackages = (i.systemPackages !== undefined ? i.systemPackages : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.useEbsOptimizedInstances = (i.useEbsOptimizedInstances !== undefined ? i.useEbsOptimizedInstances : false);
  return out;
}

// aws:opsworks/userProfile:UserProfile
export function UserProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowSelfManagement = (i.allowSelfManagement !== undefined ? i.allowSelfManagement : true);
  out.sshPublicKey = (i.sshPublicKey !== undefined ? i.sshPublicKey : "");
  out.sshUsername = (i.sshUsername !== undefined ? i.sshUsername : "");
  out.userArn = (i.userArn !== undefined ? i.userArn : h.arn(ctx));
  return out;
}

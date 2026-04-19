// GENERATED FILE — do not edit.
// Service: ec2   (66 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2 from "../types/ec2.js";

// aws:ec2/getAmi:getAmi
export function getAmi(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = "";
  out.arn = h.arn(ctx);
  out.blockDeviceMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getAmiBlockDeviceMapping(ctx, depth + 1))]);
  out.bootMode = "";
  out.creationDate = h.timestamp();
  out.deprecationTime = "";
  out.description = "";
  out.enaSupport = false;
  out.executableUsers = (i.executableUsers !== undefined ? i.executableUsers : (depth > 4 ? [] : [""]));
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getAmiFilter(ctx, depth + 1))]));
  out.hypervisor = "";
  out.id = h.id(ctx, "id");
  out.imageId = h.id(ctx, "imageId");
  out.imageLocation = "";
  out.imageOwnerAlias = "";
  out.imageType = "";
  out.imdsSupport = "";
  out.includeDeprecated = (i.includeDeprecated !== undefined ? i.includeDeprecated : false);
  out.kernelId = h.id(ctx, "kernelId");
  out.lastLaunchedTime = "";
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.name = ctx.name;
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.ownerId = ctx.accountId;
  out.owners = (i.owners !== undefined ? i.owners : (depth > 4 ? [] : [""]));
  out.platform = "";
  out.platformDetails = "";
  out.productCodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getAmiProductCode(ctx, depth + 1))]);
  out.public = false;
  out.ramdiskId = h.id(ctx, "ramdiskId");
  out.rootDeviceName = "";
  out.rootDeviceType = "";
  out.rootSnapshotId = h.id(ctx, "rootSnapshotId");
  out.sriovNetSupport = "";
  out.state = "active";
  out.stateReason = {};
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tpmSupport = "";
  out.uefiData = (i.uefiData !== undefined ? i.uefiData : "");
  out.usageOperation = "";
  out.virtualizationType = "";
  return out;
}

// aws:ec2/getAmiIds:getAmiIds
export function getAmiIds(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executableUsers = (i.executableUsers !== undefined ? i.executableUsers : (depth > 4 ? [] : [""]));
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getAmiIdsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.includeDeprecated = (i.includeDeprecated !== undefined ? i.includeDeprecated : false);
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.owners = (i.owners !== undefined ? i.owners : (depth > 4 ? [] : [""]));
  out.sortAscending = (i.sortAscending !== undefined ? i.sortAscending : false);
  return out;
}

// aws:ec2/getCapacityBlockOffering:getCapacityBlockOffering
export function getCapacityBlockOffering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.capacityBlockOfferingId = h.id(ctx, "capacityBlockOfferingId");
  out.capacityDurationHours = (i.capacityDurationHours !== undefined ? i.capacityDurationHours : 0);
  out.currencyCode = "";
  out.endDateRange = (i.endDateRange !== undefined ? i.endDateRange : "");
  out.id = h.id(ctx, "id");
  out.instanceCount = (i.instanceCount !== undefined ? i.instanceCount : 1);
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.startDateRange = (i.startDateRange !== undefined ? i.startDateRange : "");
  out.tenancy = "";
  out.upfrontFee = "";
  return out;
}

// aws:ec2/getCoipPool:getCoipPool
export function getCoipPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getCoipPoolFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.localGatewayRouteTableId = (i.localGatewayRouteTableId !== undefined ? i.localGatewayRouteTableId : h.id(ctx, "localGatewayRouteTableId"));
  out.poolCidrs = (depth > 4 ? [] : [""]);
  out.poolId = (i.poolId !== undefined ? i.poolId : h.id(ctx, "poolId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getCoipPools:getCoipPools
export function getCoipPools(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getCoipPoolsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.poolIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getCustomerGateway:getCustomerGateway
export function getCustomerGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpAsn = 0;
  out.bgpAsnExtended = 0;
  out.certificateArn = h.arn(ctx);
  out.deviceName = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getCustomerGatewayFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipAddress = "10.0.0.10";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  return out;
}

// aws:ec2/getDedicatedHost:getDedicatedHost
export function getDedicatedHost(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assetId = h.id(ctx, "assetId");
  out.autoPlacement = "";
  out.availabilityZone = ctx.region + "a";
  out.cores = 0;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getDedicatedHostFilter(ctx, depth + 1))]));
  out.hostId = (i.hostId !== undefined ? i.hostId : h.id(ctx, "hostId"));
  out.hostRecovery = "";
  out.id = h.id(ctx, "id");
  out.instanceFamily = "";
  out.instanceType = "";
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.sockets = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.totalVcpus = 0;
  return out;
}

// aws:ec2/getEips:getEips
export function getEips(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationIds = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getEipsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.publicIps = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getElasticIp:getElasticIp
export function getElasticIp(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.carrierIp = "";
  out.customerOwnedIp = "";
  out.customerOwnedIpv4Pool = "";
  out.domain = h.endpoint(ctx, "domain");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getElasticIpFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.instanceId = h.id(ctx, "instanceId");
  out.ipamPoolId = h.id(ctx, "ipamPoolId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.networkInterfaceOwnerId = h.id(ctx, "networkInterfaceOwnerId");
  out.privateDns = "";
  out.privateIp = "10.0.0.10";
  out.ptrRecord = "";
  out.publicDns = "";
  out.publicIp = (i.publicIp !== undefined ? i.publicIp : "54.0.0.10");
  out.publicIpv4Pool = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getInstance:getInstance
export function getInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ami = "";
  out.arn = h.arn(ctx);
  out.associatePublicIpAddress = false;
  out.availabilityZone = ctx.region + "a";
  out.creditSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceCreditSpecification(ctx, depth + 1))]);
  out.disableApiStop = false;
  out.disableApiTermination = false;
  out.ebsBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceEbsBlockDevice(ctx, depth + 1))]);
  out.ebsOptimized = false;
  out.enclaveOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceEnclaveOption(ctx, depth + 1))]);
  out.ephemeralBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceEphemeralBlockDevice(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceFilter(ctx, depth + 1))]));
  out.getPasswordData = (i.getPasswordData !== undefined ? i.getPasswordData : false);
  out.getUserData = (i.getUserData !== undefined ? i.getUserData : false);
  out.hostId = h.id(ctx, "hostId");
  out.hostResourceGroupArn = h.arn(ctx);
  out.iamInstanceProfile = "";
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.instanceState = "";
  out.instanceTags = (i.instanceTags !== undefined ? i.instanceTags : {});
  out.instanceType = "";
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.keyName = "";
  out.launchTime = "";
  out.maintenanceOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceMaintenanceOption(ctx, depth + 1))]);
  out.metadataOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceMetadataOption(ctx, depth + 1))]);
  out.monitoring = false;
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.outpostArn = h.arn(ctx);
  out.passwordData = "";
  out.placementGroup = "";
  out.placementPartitionNumber = 0;
  out.privateDns = "";
  out.privateDnsNameOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstancePrivateDnsNameOption(ctx, depth + 1))]);
  out.privateIp = "10.0.0.10";
  out.publicDns = "";
  out.publicIp = "54.0.0.10";
  out.rootBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceRootBlockDevice(ctx, depth + 1))]);
  out.secondaryPrivateIps = (depth > 4 ? [] : [""]);
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.sourceDestCheck = false;
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tenancy = "";
  out.userData = "";
  out.userDataBase64 = "";
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceType:getInstanceType
export function getInstanceType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecoverySupported = false;
  out.bandwidthWeightings = (depth > 4 ? [] : [""]);
  out.bareMetal = false;
  out.bootModes = (depth > 4 ? [] : [""]);
  out.burstablePerformanceSupported = false;
  out.currentGeneration = false;
  out.dedicatedHostsSupported = false;
  out.defaultCores = 0;
  out.defaultNetworkCardIndex = 0;
  out.defaultThreadsPerCore = 0;
  out.defaultVcpus = 0;
  out.ebsEncryptionSupport = "";
  out.ebsNvmeSupport = "";
  out.ebsOptimizedSupport = "";
  out.ebsPerformanceBaselineBandwidth = 0;
  out.ebsPerformanceBaselineIops = 0;
  out.ebsPerformanceBaselineThroughput = 0;
  out.ebsPerformanceMaximumBandwidth = 0;
  out.ebsPerformanceMaximumIops = 0;
  out.ebsPerformanceMaximumThroughput = 0;
  out.efaMaximumInterfaces = 0;
  out.efaSupported = false;
  out.enaSrdSupported = false;
  out.enaSupport = "";
  out.encryptionInTransitSupported = false;
  out.fpgas = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeFpga(ctx, depth + 1))]);
  out.freeTierEligible = false;
  out.gpuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeGpus(ctx, depth + 1))]);
  out.hibernationSupported = false;
  out.hypervisor = "";
  out.id = h.id(ctx, "id");
  out.inferenceAccelerators = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeInferenceAccelerator(ctx, depth + 1))]);
  out.instanceDisks = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeInstanceDisk(ctx, depth + 1))]);
  out.instanceStorageSupported = false;
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.ipv6Supported = false;
  out.maximumIpv4AddressesPerInterface = 0;
  out.maximumIpv6AddressesPerInterface = 0;
  out.maximumNetworkCards = 0;
  out.maximumNetworkInterfaces = 0;
  out.mediaAccelerators = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeMediaAccelerator(ctx, depth + 1))]);
  out.memorySize = 8;
  out.networkCards = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeNetworkCard(ctx, depth + 1))]);
  out.networkPerformance = "";
  out.neuronDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeNeuronDevice(ctx, depth + 1))]);
  out.nitroEnclavesSupport = "";
  out.nitroTpmSupport = "";
  out.nitroTpmSupportedVersions = (depth > 4 ? [] : [""]);
  out.phcSupport = "";
  out.supportedArchitectures = (depth > 4 ? [] : [""]);
  out.supportedCpuFeatures = (depth > 4 ? [] : [""]);
  out.supportedPlacementStrategies = (depth > 4 ? [] : [""]);
  out.supportedRootDeviceTypes = (depth > 4 ? [] : [""]);
  out.supportedUsagesClasses = (depth > 4 ? [] : [""]);
  out.supportedVirtualizationTypes = (depth > 4 ? [] : [""]);
  out.sustainedClockSpeed = 0;
  out.totalFpgaMemory = 0;
  out.totalGpuMemory = 0;
  out.totalInferenceMemory = 0;
  out.totalInstanceStorage = 0;
  out.totalMediaMemory = 0;
  out.totalNeuronDeviceMemory = 0;
  out.validCores = (depth > 4 ? [] : [0]);
  out.validThreadsPerCores = (depth > 4 ? [] : [0]);
  return out;
}

// aws:ec2/getInstanceTypeOffering:getInstanceTypeOffering
export function getInstanceTypeOffering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeOfferingFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceType = "";
  out.locationType = (i.locationType !== undefined ? i.locationType : "");
  out.preferredInstanceTypes = (i.preferredInstanceTypes !== undefined ? i.preferredInstanceTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:ec2/getInstanceTypeOfferings:getInstanceTypeOfferings
export function getInstanceTypeOfferings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypeOfferingsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceTypes = (depth > 4 ? [] : [""]);
  out.locationType = (i.locationType !== undefined ? i.locationType : "");
  out.locationTypes = (depth > 4 ? [] : [""]);
  out.locations = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceTypes:getInstanceTypes
export function getInstanceTypes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstanceTypesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstances:getInstances
export function getInstances(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInstancesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.instanceStateNames = (i.instanceStateNames !== undefined ? i.instanceStateNames : (depth > 4 ? [] : [""]));
  out.instanceTags = (i.instanceTags !== undefined ? i.instanceTags : {});
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.privateIps = (depth > 4 ? [] : [""]);
  out.publicIps = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInternetGateway:getInternetGateway
export function getInternetGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInternetGatewayAttachment(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getInternetGatewayFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.internetGatewayId = (i.internetGatewayId !== undefined ? i.internetGatewayId : h.id(ctx, "internetGatewayId"));
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getIpamPreviewNextCidr:getIpamPreviewNextCidr
export function getIpamPreviewNextCidr(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.disallowedCidrs = (i.disallowedCidrs !== undefined ? i.disallowedCidrs : (depth > 4 ? [] : [""]));
  out.id = h.id(ctx, "id");
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.netmaskLength = (i.netmaskLength !== undefined ? i.netmaskLength : 0);
  return out;
}

// aws:ec2/getKeyPair:getKeyPair
export function getKeyPair(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createTime = h.timestamp();
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getKeyPairFilter(ctx, depth + 1))]));
  out.fingerprint = "";
  out.id = h.id(ctx, "id");
  out.includePublicKey = (i.includePublicKey !== undefined ? i.includePublicKey : false);
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.keyPairId = (i.keyPairId !== undefined ? i.keyPairId : h.id(ctx, "keyPairId"));
  out.keyType = "";
  out.publicKey = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLaunchConfiguration:getLaunchConfiguration
export function getLaunchConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associatePublicIpAddress = false;
  out.ebsBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchConfigurationEbsBlockDevice(ctx, depth + 1))]);
  out.ebsOptimized = false;
  out.enableMonitoring = true;
  out.ephemeralBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchConfigurationEphemeralBlockDevice(ctx, depth + 1))]);
  out.iamInstanceProfile = "";
  out.id = h.id(ctx, "id");
  out.imageId = h.id(ctx, "imageId");
  out.instanceType = "";
  out.keyName = "";
  out.metadataOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchConfigurationMetadataOption(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.placementTenancy = "";
  out.rootBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchConfigurationRootBlockDevice(ctx, depth + 1))]);
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.spotPrice = "";
  out.userData = "";
  return out;
}

// aws:ec2/getLaunchTemplate:getLaunchTemplate
export function getLaunchTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.blockDeviceMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateBlockDeviceMapping(ctx, depth + 1))]);
  out.capacityReservationSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateCapacityReservationSpecification(ctx, depth + 1))]);
  out.cpuOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateCpuOption(ctx, depth + 1))]);
  out.creditSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateCreditSpecification(ctx, depth + 1))]);
  out.defaultVersion = 0;
  out.description = "";
  out.disableApiStop = false;
  out.disableApiTermination = false;
  out.ebsOptimized = "";
  out.elasticGpuSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateElasticGpuSpecification(ctx, depth + 1))]);
  out.elasticInferenceAccelerators = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateElasticInferenceAccelerator(ctx, depth + 1))]);
  out.enclaveOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateEnclaveOption(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateFilter(ctx, depth + 1))]));
  out.hibernationOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateHibernationOption(ctx, depth + 1))]);
  out.iamInstanceProfiles = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateIamInstanceProfile(ctx, depth + 1))]);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.imageId = h.id(ctx, "imageId");
  out.instanceInitiatedShutdownBehavior = "";
  out.instanceMarketOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceMarketOption(ctx, depth + 1))]);
  out.instanceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirement(ctx, depth + 1))]);
  out.instanceType = "";
  out.kernelId = h.id(ctx, "kernelId");
  out.keyName = "";
  out.latestVersion = 0;
  out.licenseSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateLicenseSpecification(ctx, depth + 1))]);
  out.maintenanceOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateMaintenanceOption(ctx, depth + 1))]);
  out.metadataOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateMetadataOption(ctx, depth + 1))]);
  out.monitorings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateMonitoring(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateNetworkInterface(ctx, depth + 1))]);
  out.placements = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplatePlacement(ctx, depth + 1))]);
  out.privateDnsNameOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplatePrivateDnsNameOption(ctx, depth + 1))]);
  out.ramDiskId = h.id(ctx, "ramDiskId");
  out.securityGroupNames = (depth > 4 ? [] : [""]);
  out.tagSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateTagSpecification(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userData = "";
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGateway:getLocalGateway
export function getLocalGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLocalGatewayRouteTable:getLocalGatewayRouteTable
export function getLocalGatewayRouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayRouteTableFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.localGatewayId = (i.localGatewayId !== undefined ? i.localGatewayId : h.id(ctx, "localGatewayId"));
  out.localGatewayRouteTableId = (i.localGatewayRouteTableId !== undefined ? i.localGatewayRouteTableId : h.id(ctx, "localGatewayRouteTableId"));
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLocalGatewayRouteTables:getLocalGatewayRouteTables
export function getLocalGatewayRouteTables(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayRouteTablesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterface:getLocalGatewayVirtualInterface
export function getLocalGatewayVirtualInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayVirtualInterfaceFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.localAddress = "";
  out.localBgpAsn = 0;
  out.localGatewayId = h.id(ctx, "localGatewayId");
  out.localGatewayVirtualInterfaceIds = (depth > 4 ? [] : [""]);
  out.peerAddress = "";
  out.peerBgpAsn = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vlan = 0;
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterfaceGroup:getLocalGatewayVirtualInterfaceGroup
export function getLocalGatewayVirtualInterfaceGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayVirtualInterfaceGroupFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.localGatewayId = (i.localGatewayId !== undefined ? i.localGatewayId : h.id(ctx, "localGatewayId"));
  out.localGatewayVirtualInterfaceIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterfaceGroups:getLocalGatewayVirtualInterfaceGroups
export function getLocalGatewayVirtualInterfaceGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewayVirtualInterfaceGroupsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.localGatewayVirtualInterfaceIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getLocalGateways:getLocalGateways
export function getLocalGateways(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLocalGatewaysFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getManagedPrefixList:getManagedPrefixList
export function getManagedPrefixList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.arn = h.arn(ctx);
  out.entries = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getManagedPrefixListEntry(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getManagedPrefixListFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.maxEntries = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = 0;
  return out;
}

// aws:ec2/getManagedPrefixLists:getManagedPrefixLists
export function getManagedPrefixLists(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getManagedPrefixListsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getNatGateway:getNatGateway
export function getNatGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = h.id(ctx, "allocationId");
  out.associationId = h.id(ctx, "associationId");
  out.connectivityType = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNatGatewayFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIp = "10.0.0.10";
  out.publicIp = "54.0.0.10";
  out.secondaryAllocationIds = (depth > 4 ? [] : [""]);
  out.secondaryPrivateIpAddressCount = 1;
  out.secondaryPrivateIpAddresses = (depth > 4 ? [] : [""]);
  out.state = (i.state !== undefined ? i.state : "active");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getNatGateways:getNatGateways
export function getNatGateways(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNatGatewaysFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getNetworkAcls:getNetworkAcls
export function getNetworkAcls(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkAclsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getNetworkInsightsAnalysis:getNetworkInsightsAnalysis
export function getNetworkInsightsAnalysis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alternatePathHints = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisAlternatePathHint(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.explanations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanation(ctx, depth + 1))]);
  out.filterInArns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisFilter(ctx, depth + 1))]));
  out.forwardPathComponents = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponent(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.networkInsightsAnalysisId = (i.networkInsightsAnalysisId !== undefined ? i.networkInsightsAnalysisId : h.id(ctx, "networkInsightsAnalysisId"));
  out.networkInsightsPathId = h.id(ctx, "networkInsightsPathId");
  out.pathFound = false;
  out.returnPathComponents = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponent(ctx, depth + 1))]);
  out.startDate = "";
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.warningMessage = "";
  return out;
}

// aws:ec2/getNetworkInsightsPath:getNetworkInsightsPath
export function getNetworkInsightsPath(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destination = "";
  out.destinationArn = h.arn(ctx);
  out.destinationIp = "";
  out.destinationPort = 443;
  out.filterAtDestinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtDestination(ctx, depth + 1))]);
  out.filterAtSources = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtSource(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.networkInsightsPathId = (i.networkInsightsPathId !== undefined ? i.networkInsightsPathId : h.id(ctx, "networkInsightsPathId"));
  out.protocol = "";
  out.source = "";
  out.sourceArn = h.arn(ctx);
  out.sourceIp = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getNetworkInterface:getNetworkInterface
export function getNetworkInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInterfaceAssociation(ctx, depth + 1))]);
  out.attachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInterfaceAttachment(ctx, depth + 1))]);
  out.availabilityZone = ctx.region + "a";
  out.description = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInterfaceFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.interfaceType = "";
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.macAddress = "";
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.privateDnsName = "";
  out.privateIp = "10.0.0.10";
  out.privateIps = (depth > 4 ? [] : [""]);
  out.requesterId = h.id(ctx, "requesterId");
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2/getNetworkInterfaces:getNetworkInterfaces
export function getNetworkInterfaces(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInterfacesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getPrefixList:getPrefixList
export function getPrefixList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getPrefixListFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.prefixListId = (i.prefixListId !== undefined ? i.prefixListId : h.id(ctx, "prefixListId"));
  return out;
}

// aws:ec2/getPublicIpv4Pool:getPublicIpv4Pool
export function getPublicIpv4Pool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.networkBorderGroup = "";
  out.poolAddressRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getPublicIpv4PoolPoolAddressRange(ctx, depth + 1))]);
  out.poolId = (i.poolId !== undefined ? i.poolId : h.id(ctx, "poolId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.totalAddressCount = 1;
  out.totalAvailableAddressCount = 1;
  return out;
}

// aws:ec2/getPublicIpv4Pools:getPublicIpv4Pools
export function getPublicIpv4Pools(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getPublicIpv4PoolsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.poolIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getRoute:getRoute
export function getRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.carrierGatewayId = (i.carrierGatewayId !== undefined ? i.carrierGatewayId : h.id(ctx, "carrierGatewayId"));
  out.coreNetworkArn = (i.coreNetworkArn !== undefined ? i.coreNetworkArn : h.arn(ctx));
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.destinationIpv6CidrBlock = (i.destinationIpv6CidrBlock !== undefined ? i.destinationIpv6CidrBlock : "");
  out.destinationPrefixListId = (i.destinationPrefixListId !== undefined ? i.destinationPrefixListId : h.id(ctx, "destinationPrefixListId"));
  out.egressOnlyGatewayId = (i.egressOnlyGatewayId !== undefined ? i.egressOnlyGatewayId : h.id(ctx, "egressOnlyGatewayId"));
  out.gatewayId = (i.gatewayId !== undefined ? i.gatewayId : h.id(ctx, "gatewayId"));
  out.id = h.id(ctx, "id");
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.localGatewayId = (i.localGatewayId !== undefined ? i.localGatewayId : h.id(ctx, "localGatewayId"));
  out.natGatewayId = (i.natGatewayId !== undefined ? i.natGatewayId : h.id(ctx, "natGatewayId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.vpcPeeringConnectionId = (i.vpcPeeringConnectionId !== undefined ? i.vpcPeeringConnectionId : h.id(ctx, "vpcPeeringConnectionId"));
  return out;
}

// aws:ec2/getRouteTable:getRouteTable
export function getRouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getRouteTableAssociation(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getRouteTableFilter(ctx, depth + 1))]));
  out.gatewayId = (i.gatewayId !== undefined ? i.gatewayId : h.id(ctx, "gatewayId"));
  out.id = h.id(ctx, "id");
  out.ownerId = ctx.accountId;
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.routes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getRouteTableRoute(ctx, depth + 1))]);
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getRouteTables:getRouteTables
export function getRouteTables(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getRouteTablesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getSecurityGroup:getSecurityGroup
export function getSecurityGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getSecurityGroupFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getSecurityGroups:getSecurityGroups
export function getSecurityGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getSecurityGroupsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSerialConsoleAccess:getSerialConsoleAccess
export function getSerialConsoleAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.id = h.id(ctx, "id");
  return out;
}

// aws:ec2/getSpotDatafeedSubscription:getSpotDatafeedSubscription
export function getSpotDatafeedSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.id = h.id(ctx, "id");
  out.prefix = "";
  return out;
}

// aws:ec2/getSpotPrice:getSpotPrice
export function getSpotPrice(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getSpotPriceFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.spotPrice = "";
  out.spotPriceTimestamp = "";
  return out;
}

// aws:ec2/getSubnet:getSubnet
export function getSubnet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assignIpv6AddressOnCreation = false;
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.availableIpAddressCount = 1;
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.customerOwnedIpv4Pool = "";
  out.defaultForAz = (i.defaultForAz !== undefined ? i.defaultForAz : false);
  out.enableDns64 = true;
  out.enableLniAtDeviceIndex = 0;
  out.enableResourceNameDnsARecordOnLaunch = true;
  out.enableResourceNameDnsAaaaRecordOnLaunch = true;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getSubnetFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6CidrBlockAssociationId = h.id(ctx, "ipv6CidrBlockAssociationId");
  out.ipv6Native = false;
  out.mapCustomerOwnedIpOnLaunch = false;
  out.mapPublicIpOnLaunch = false;
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.privateDnsHostnameTypeOnLaunch = "";
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getSubnets:getSubnets
export function getSubnets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getSubnetsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getTransitGatewayRouteTables:getTransitGatewayRouteTables
export function getTransitGatewayRouteTables(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getTransitGatewayRouteTablesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpc:getVpc
export function getVpc(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.cidrBlockAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcCidrBlockAssociation(ctx, depth + 1))]);
  out.default = (i.default !== undefined ? i.default : false);
  out.dhcpOptionsId = (i.dhcpOptionsId !== undefined ? i.dhcpOptionsId : h.id(ctx, "dhcpOptionsId"));
  out.enableDnsHostnames = true;
  out.enableDnsSupport = true;
  out.enableNetworkAddressUsageMetrics = true;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.instanceTenancy = "";
  out.ipv6AssociationId = h.id(ctx, "ipv6AssociationId");
  out.ipv6CidrBlock = "";
  out.mainRouteTableId = h.id(ctx, "mainRouteTableId");
  out.ownerId = ctx.accountId;
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpcDhcpOptions:getVpcDhcpOptions
export function getVpcDhcpOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dhcpOptionsId = (i.dhcpOptionsId !== undefined ? i.dhcpOptionsId : h.id(ctx, "dhcpOptionsId"));
  out.domainName = h.endpoint(ctx, "domainName");
  out.domainNameServers = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcDhcpOptionsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipv6AddressPreferredLeaseTime = "";
  out.netbiosNameServers = (depth > 4 ? [] : [""]);
  out.netbiosNodeType = "";
  out.ntpServers = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpcEndpoint:getVpcEndpoint
export function getVpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcEndpointDnsEntry(ctx, depth + 1))]);
  out.dnsOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcEndpointDnsOption(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcEndpointFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipAddressType = "";
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.policy = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.privateDnsEnabled = false;
  out.requesterManaged = false;
  out.routeTableIds = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.state = (i.state !== undefined ? i.state : "active");
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcEndpointType = "";
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getVpcEndpointService:getVpcEndpointService
export function getVpcEndpointService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptanceRequired = false;
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.baseEndpointDnsNames = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcEndpointServiceFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.managesVpcEndpoints = false;
  out.owner = ctx.accountId;
  out.privateDnsName = "";
  out.privateDnsNames = (depth > 4 ? [] : [""]);
  out.region = ctx.region;
  out.service = (i.service !== undefined ? i.service : "");
  out.serviceId = h.id(ctx, "serviceId");
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.serviceRegions = (i.serviceRegions !== undefined ? i.serviceRegions : (depth > 4 ? [] : [""]));
  out.serviceType = (i.serviceType !== undefined ? i.serviceType : "");
  out.supportedIpAddressTypes = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcEndpointPolicySupported = false;
  return out;
}

// aws:ec2/getVpcIamPool:getVpcIamPool
export function getVpcIamPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.allocationDefaultNetmaskLength = 0;
  out.allocationMaxNetmaskLength = 0;
  out.allocationMinNetmaskLength = 0;
  out.allocationResourceTags = (i.allocationResourceTags !== undefined ? i.allocationResourceTags : {});
  out.arn = h.arn(ctx);
  out.autoImport = false;
  out.awsService = "";
  out.description = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIamPoolFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.ipamScopeId = h.id(ctx, "ipamScopeId");
  out.ipamScopeType = "";
  out.locale = "";
  out.poolDepth = 0;
  out.publiclyAdvertisable = false;
  out.sourceIpamPoolId = h.id(ctx, "sourceIpamPoolId");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpcIamPoolCidrs:getVpcIamPoolCidrs
export function getVpcIamPoolCidrs(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIamPoolCidrsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipamPoolCidrs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIamPoolCidrsIpamPoolCidr(ctx, depth + 1))]);
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  return out;
}

// aws:ec2/getVpcIamPools:getVpcIamPools
export function getVpcIamPools(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIamPoolsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipamPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIamPoolsIpamPool(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getVpcIpam:getVpcIpam
export function getVpcIpam(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultResourceDiscoveryAssociationId = h.id(ctx, "defaultResourceDiscoveryAssociationId");
  out.defaultResourceDiscoveryId = h.id(ctx, "defaultResourceDiscoveryId");
  out.description = "";
  out.enablePrivateGua = true;
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipamRegion = "";
  out.operatingRegions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamOperatingRegion(ctx, depth + 1))]);
  out.ownerId = ctx.accountId;
  out.privateDefaultScopeId = h.id(ctx, "privateDefaultScopeId");
  out.publicDefaultScopeId = h.id(ctx, "publicDefaultScopeId");
  out.resourceDiscoveryAssociationCount = 1;
  out.scopeCount = 1;
  out.state = "active";
  out.stateMessage = "";
  out.tags = {};
  out.tier = "";
  return out;
}

// aws:ec2/getVpcIpamPool:getVpcIpamPool
export function getVpcIpamPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.allocationDefaultNetmaskLength = 0;
  out.allocationMaxNetmaskLength = 0;
  out.allocationMinNetmaskLength = 0;
  out.allocationResourceTags = (i.allocationResourceTags !== undefined ? i.allocationResourceTags : {});
  out.arn = h.arn(ctx);
  out.autoImport = false;
  out.awsService = "";
  out.description = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamPoolFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.ipamScopeId = h.id(ctx, "ipamScopeId");
  out.ipamScopeType = "";
  out.locale = "";
  out.poolDepth = 0;
  out.publiclyAdvertisable = false;
  out.sourceIpamPoolId = h.id(ctx, "sourceIpamPoolId");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpcIpamPoolCidrs:getVpcIpamPoolCidrs
export function getVpcIpamPoolCidrs(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamPoolCidrsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipamPoolCidrs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamPoolCidrsIpamPoolCidr(ctx, depth + 1))]);
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  return out;
}

// aws:ec2/getVpcIpamPools:getVpcIpamPools
export function getVpcIpamPools(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamPoolsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipamPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamPoolsIpamPool(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getVpcIpams:getVpcIpams
export function getVpcIpams(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipamIds = (i.ipamIds !== undefined ? i.ipamIds : (depth > 4 ? [] : [""]));
  out.ipams = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamsIpam(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getVpcPeeringConnection:getVpcPeeringConnection
export function getVpcPeeringConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accepter = {};
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.cidrBlockSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionCidrBlockSet(ctx, depth + 1))]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipv6CidrBlockSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionIpv6CidrBlockSet(ctx, depth + 1))]);
  out.ownerId = (i.ownerId !== undefined ? i.ownerId : ctx.accountId);
  out.peerCidrBlock = (i.peerCidrBlock !== undefined ? i.peerCidrBlock : "");
  out.peerCidrBlockSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionPeerCidrBlockSet(ctx, depth + 1))]);
  out.peerIpv6CidrBlockSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionPeerIpv6CidrBlockSet(ctx, depth + 1))]);
  out.peerOwnerId = (i.peerOwnerId !== undefined ? i.peerOwnerId : h.id(ctx, "peerOwnerId"));
  out.peerRegion = (i.peerRegion !== undefined ? i.peerRegion : "");
  out.peerVpcId = (i.peerVpcId !== undefined ? i.peerVpcId : h.id(ctx, "peerVpcId"));
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.requester = {};
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/getVpcPeeringConnections:getVpcPeeringConnections
export function getVpcPeeringConnections(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcPeeringConnectionsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpcs:getVpcs
export function getVpcs(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ec2/getVpnGateway:getVpnGateway
export function getVpnGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = (i.amazonSideAsn !== undefined ? i.amazonSideAsn : "");
  out.arn = h.arn(ctx);
  out.attachedVpcId = (i.attachedVpcId !== undefined ? i.attachedVpcId : h.id(ctx, "attachedVpcId"));
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpnGatewayFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

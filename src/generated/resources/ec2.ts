// GENERATED FILE — do not edit.
// Service: ec2   (100 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2 from "../types/ec2.js";

// aws:ec2/ami:Ami
export function Ami(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = (i.architecture !== undefined ? i.architecture : "");
  out.arn = h.arn(ctx);
  out.bootMode = (i.bootMode !== undefined ? i.bootMode : "");
  out.deprecationTime = (i.deprecationTime !== undefined ? i.deprecationTime : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiEbsBlockDevice(ctx, depth + 1))]));
  out.enaSupport = (i.enaSupport !== undefined ? i.enaSupport : false);
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiEphemeralBlockDevice(ctx, depth + 1))]));
  out.hypervisor = "";
  out.imageLocation = (i.imageLocation !== undefined ? i.imageLocation : "");
  out.imageOwnerAlias = "";
  out.imageType = "";
  out.imdsSupport = (i.imdsSupport !== undefined ? i.imdsSupport : "");
  out.kernelId = (i.kernelId !== undefined ? i.kernelId : h.id(ctx, "kernelId"));
  out.lastLaunchedTime = "";
  out.manageEbsSnapshots = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.platform = "";
  out.platformDetails = "";
  out.public = false;
  out.ramdiskId = (i.ramdiskId !== undefined ? i.ramdiskId : h.id(ctx, "ramdiskId"));
  out.rootDeviceName = (i.rootDeviceName !== undefined ? i.rootDeviceName : "");
  out.rootSnapshotId = h.id(ctx, "rootSnapshotId");
  out.sriovNetSupport = (i.sriovNetSupport !== undefined ? i.sriovNetSupport : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tpmSupport = (i.tpmSupport !== undefined ? i.tpmSupport : "");
  out.uefiData = (i.uefiData !== undefined ? i.uefiData : "");
  out.usageOperation = "";
  out.virtualizationType = (i.virtualizationType !== undefined ? i.virtualizationType : "");
  return out;
}

// aws:ec2/amiCopy:AmiCopy
export function AmiCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = "";
  out.arn = h.arn(ctx);
  out.bootMode = "";
  out.deprecationTime = (i.deprecationTime !== undefined ? i.deprecationTime : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.destinationOutpostArn = (i.destinationOutpostArn !== undefined ? i.destinationOutpostArn : h.arn(ctx));
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiCopyEbsBlockDevice(ctx, depth + 1))]));
  out.enaSupport = false;
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiCopyEphemeralBlockDevice(ctx, depth + 1))]));
  out.hypervisor = "";
  out.imageLocation = "";
  out.imageOwnerAlias = "";
  out.imageType = "";
  out.imdsSupport = "";
  out.kernelId = h.id(ctx, "kernelId");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lastLaunchedTime = "";
  out.manageEbsSnapshots = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.platform = "";
  out.platformDetails = "";
  out.public = false;
  out.ramdiskId = h.id(ctx, "ramdiskId");
  out.rootDeviceName = "";
  out.rootSnapshotId = h.id(ctx, "rootSnapshotId");
  out.sourceAmiId = (i.sourceAmiId !== undefined ? i.sourceAmiId : h.id(ctx, "sourceAmiId"));
  out.sourceAmiRegion = (i.sourceAmiRegion !== undefined ? i.sourceAmiRegion : "");
  out.sriovNetSupport = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tpmSupport = "";
  out.uefiData = "";
  out.usageOperation = "";
  out.virtualizationType = "";
  return out;
}

// aws:ec2/amiFromInstance:AmiFromInstance
export function AmiFromInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = "";
  out.arn = h.arn(ctx);
  out.bootMode = "";
  out.deprecationTime = (i.deprecationTime !== undefined ? i.deprecationTime : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiFromInstanceEbsBlockDevice(ctx, depth + 1))]));
  out.enaSupport = false;
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_AmiFromInstanceEphemeralBlockDevice(ctx, depth + 1))]));
  out.hypervisor = "";
  out.imageLocation = "";
  out.imageOwnerAlias = "";
  out.imageType = "";
  out.imdsSupport = "";
  out.kernelId = h.id(ctx, "kernelId");
  out.lastLaunchedTime = "";
  out.manageEbsSnapshots = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.platform = "";
  out.platformDetails = "";
  out.public = false;
  out.ramdiskId = h.id(ctx, "ramdiskId");
  out.rootDeviceName = "";
  out.rootSnapshotId = h.id(ctx, "rootSnapshotId");
  out.snapshotWithoutReboot = (i.snapshotWithoutReboot !== undefined ? i.snapshotWithoutReboot : false);
  out.sourceInstanceId = (i.sourceInstanceId !== undefined ? i.sourceInstanceId : h.id(ctx, "sourceInstanceId"));
  out.sriovNetSupport = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tpmSupport = "";
  out.uefiData = "";
  out.usageOperation = "";
  out.virtualizationType = "";
  return out;
}

// aws:ec2/amiLaunchPermission:AmiLaunchPermission
export function AmiLaunchPermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.group = (i.group !== undefined ? i.group : "");
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.organizationArn = (i.organizationArn !== undefined ? i.organizationArn : h.arn(ctx));
  out.organizationalUnitArn = (i.organizationalUnitArn !== undefined ? i.organizationalUnitArn : h.arn(ctx));
  return out;
}

// aws:ec2/availabilityZoneGroup:AvailabilityZoneGroup
export function AvailabilityZoneGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.optInStatus = (i.optInStatus !== undefined ? i.optInStatus : "");
  return out;
}

// aws:ec2/capacityBlockReservation:CapacityBlockReservation
export function CapacityBlockReservation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.capacityBlockOfferingId = (i.capacityBlockOfferingId !== undefined ? i.capacityBlockOfferingId : h.id(ctx, "capacityBlockOfferingId"));
  out.createdDate = "";
  out.ebsOptimized = false;
  out.endDate = "";
  out.endDateType = "";
  out.instanceCount = 1;
  out.instancePlatform = (i.instancePlatform !== undefined ? i.instancePlatform : "");
  out.instanceType = "";
  out.outpostArn = h.arn(ctx);
  out.placementGroupArn = h.arn(ctx);
  out.reservationType = "";
  out.startDate = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenancy = "";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_CapacityBlockReservationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ec2/capacityReservation:CapacityReservation
export function CapacityReservation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.endDate = (i.endDate !== undefined ? i.endDate : "");
  out.endDateType = (i.endDateType !== undefined ? i.endDateType : "");
  out.ephemeralStorage = (i.ephemeralStorage !== undefined ? i.ephemeralStorage : false);
  out.instanceCount = (i.instanceCount !== undefined ? i.instanceCount : 1);
  out.instanceMatchCriteria = (i.instanceMatchCriteria !== undefined ? i.instanceMatchCriteria : "");
  out.instancePlatform = (i.instancePlatform !== undefined ? i.instancePlatform : "");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.ownerId = ctx.accountId;
  out.placementGroupArn = (i.placementGroupArn !== undefined ? i.placementGroupArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenancy = (i.tenancy !== undefined ? i.tenancy : "");
  return out;
}

// aws:ec2/carrierGateway:CarrierGateway
export function CarrierGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/customerGateway:CustomerGateway
export function CustomerGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bgpAsn = (i.bgpAsn !== undefined ? i.bgpAsn : "");
  out.bgpAsnExtended = (i.bgpAsnExtended !== undefined ? i.bgpAsnExtended : "");
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.deviceName = (i.deviceName !== undefined ? i.deviceName : "");
  out.ipAddress = (i.ipAddress !== undefined ? i.ipAddress : "10.0.0.10");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:ec2/dedicatedHost:DedicatedHost
export function DedicatedHost(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assetId = (i.assetId !== undefined ? i.assetId : h.id(ctx, "assetId"));
  out.autoPlacement = (i.autoPlacement !== undefined ? i.autoPlacement : "");
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.hostRecovery = (i.hostRecovery !== undefined ? i.hostRecovery : "");
  out.instanceFamily = (i.instanceFamily !== undefined ? i.instanceFamily : "");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/defaultCreditSpecification:DefaultCreditSpecification
export function DefaultCreditSpecification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = (i.cpuCredits !== undefined ? i.cpuCredits : "");
  out.instanceFamily = (i.instanceFamily !== undefined ? i.instanceFamily : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_DefaultCreditSpecificationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ec2/defaultNetworkAcl:DefaultNetworkAcl
export function DefaultNetworkAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultNetworkAclId = (i.defaultNetworkAclId !== undefined ? i.defaultNetworkAclId : h.id(ctx, "defaultNetworkAclId"));
  out.egress = (i.egress !== undefined ? i.egress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_DefaultNetworkAclEgress(ctx, depth + 1))]));
  out.ingress = (i.ingress !== undefined ? i.ingress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_DefaultNetworkAclIngress(ctx, depth + 1))]));
  out.ownerId = ctx.accountId;
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2/defaultRouteTable:DefaultRouteTable
export function DefaultRouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultRouteTableId = (i.defaultRouteTableId !== undefined ? i.defaultRouteTableId : h.id(ctx, "defaultRouteTableId"));
  out.ownerId = ctx.accountId;
  out.propagatingVgws = (i.propagatingVgws !== undefined ? i.propagatingVgws : (depth > 4 ? [] : [""]));
  out.routes = (i.routes !== undefined ? i.routes : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_DefaultRouteTableRoute(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2/defaultSecurityGroup:DefaultSecurityGroup
export function DefaultSecurityGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.egress = (i.egress !== undefined ? i.egress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_DefaultSecurityGroupEgress(ctx, depth + 1))]));
  out.ingress = (i.ingress !== undefined ? i.ingress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_DefaultSecurityGroupIngress(ctx, depth + 1))]));
  out.name = ctx.name;
  out.namePrefix = "";
  out.ownerId = ctx.accountId;
  out.revokeRulesOnDelete = (i.revokeRulesOnDelete !== undefined ? i.revokeRulesOnDelete : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/defaultSubnet:DefaultSubnet
export function DefaultSubnet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assignIpv6AddressOnCreation = (i.assignIpv6AddressOnCreation !== undefined ? i.assignIpv6AddressOnCreation : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.availabilityZoneId = ctx.region + "a";
  out.cidrBlock = "10.0.0.0/16";
  out.customerOwnedIpv4Pool = (i.customerOwnedIpv4Pool !== undefined ? i.customerOwnedIpv4Pool : "");
  out.enableDns64 = (i.enableDns64 !== undefined ? i.enableDns64 : true);
  out.enableLniAtDeviceIndex = 0;
  out.enableResourceNameDnsARecordOnLaunch = (i.enableResourceNameDnsARecordOnLaunch !== undefined ? i.enableResourceNameDnsARecordOnLaunch : true);
  out.enableResourceNameDnsAaaaRecordOnLaunch = (i.enableResourceNameDnsAaaaRecordOnLaunch !== undefined ? i.enableResourceNameDnsAaaaRecordOnLaunch : true);
  out.existingDefaultSubnet = false;
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6CidrBlockAssociationId = h.id(ctx, "ipv6CidrBlockAssociationId");
  out.ipv6Native = (i.ipv6Native !== undefined ? i.ipv6Native : false);
  out.mapCustomerOwnedIpOnLaunch = (i.mapCustomerOwnedIpOnLaunch !== undefined ? i.mapCustomerOwnedIpOnLaunch : false);
  out.mapPublicIpOnLaunch = (i.mapPublicIpOnLaunch !== undefined ? i.mapPublicIpOnLaunch : false);
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.privateDnsHostnameTypeOnLaunch = (i.privateDnsHostnameTypeOnLaunch !== undefined ? i.privateDnsHostnameTypeOnLaunch : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2/defaultVpc:DefaultVpc
export function DefaultVpc(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assignGeneratedIpv6CidrBlock = (i.assignGeneratedIpv6CidrBlock !== undefined ? i.assignGeneratedIpv6CidrBlock : false);
  out.cidrBlock = "10.0.0.0/16";
  out.defaultNetworkAclId = h.id(ctx, "defaultNetworkAclId");
  out.defaultRouteTableId = h.id(ctx, "defaultRouteTableId");
  out.defaultSecurityGroupId = h.id(ctx, "defaultSecurityGroupId");
  out.dhcpOptionsId = h.id(ctx, "dhcpOptionsId");
  out.enableDnsHostnames = (i.enableDnsHostnames !== undefined ? i.enableDnsHostnames : true);
  out.enableDnsSupport = (i.enableDnsSupport !== undefined ? i.enableDnsSupport : true);
  out.enableNetworkAddressUsageMetrics = (i.enableNetworkAddressUsageMetrics !== undefined ? i.enableNetworkAddressUsageMetrics : true);
  out.existingDefaultVpc = false;
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.instanceTenancy = "";
  out.ipv6AssociationId = h.id(ctx, "ipv6AssociationId");
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6CidrBlockNetworkBorderGroup = (i.ipv6CidrBlockNetworkBorderGroup !== undefined ? i.ipv6CidrBlockNetworkBorderGroup : "");
  out.ipv6IpamPoolId = (i.ipv6IpamPoolId !== undefined ? i.ipv6IpamPoolId : h.id(ctx, "ipv6IpamPoolId"));
  out.ipv6NetmaskLength = (i.ipv6NetmaskLength !== undefined ? i.ipv6NetmaskLength : 0);
  out.mainRouteTableId = h.id(ctx, "mainRouteTableId");
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/defaultVpcDhcpOptions:DefaultVpcDhcpOptions
export function DefaultVpcDhcpOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = h.endpoint(ctx, "domainName");
  out.domainNameServers = "";
  out.ipv6AddressPreferredLeaseTime = "";
  out.netbiosNameServers = "";
  out.netbiosNodeType = "";
  out.ntpServers = "";
  out.ownerId = (i.ownerId !== undefined ? i.ownerId : ctx.accountId);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/egressOnlyInternetGateway:EgressOnlyInternetGateway
export function EgressOnlyInternetGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/eip:Eip
export function Eip(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = (i.address !== undefined ? i.address : "");
  out.allocationId = h.id(ctx, "allocationId");
  out.arn = h.arn(ctx);
  out.associateWithPrivateIp = (i.associateWithPrivateIp !== undefined ? i.associateWithPrivateIp : "");
  out.associationId = h.id(ctx, "associationId");
  out.carrierIp = "";
  out.customerOwnedIp = "";
  out.customerOwnedIpv4Pool = (i.customerOwnedIpv4Pool !== undefined ? i.customerOwnedIpv4Pool : "");
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.instance = (i.instance !== undefined ? i.instance : "");
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.networkBorderGroup = (i.networkBorderGroup !== undefined ? i.networkBorderGroup : "");
  out.networkInterface = (i.networkInterface !== undefined ? i.networkInterface : "");
  out.privateDns = "";
  out.privateIp = "10.0.0.10";
  out.ptrRecord = "";
  out.publicDns = "";
  out.publicIp = "54.0.0.10";
  out.publicIpv4Pool = (i.publicIpv4Pool !== undefined ? i.publicIpv4Pool : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpc = (i.vpc !== undefined ? i.vpc : false);
  return out;
}

// aws:ec2/eipAssociation:EipAssociation
export function EipAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = (i.allocationId !== undefined ? i.allocationId : h.id(ctx, "allocationId"));
  out.allowReassociation = (i.allowReassociation !== undefined ? i.allowReassociation : true);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.privateIpAddress = (i.privateIpAddress !== undefined ? i.privateIpAddress : "10.0.0.10");
  out.publicIp = (i.publicIp !== undefined ? i.publicIp : "54.0.0.10");
  return out;
}

// aws:ec2/eipDomainName:EipDomainName
export function EipDomainName(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = (i.allocationId !== undefined ? i.allocationId : h.id(ctx, "allocationId"));
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.ptrRecord = "";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_EipDomainNameTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ec2/fleet:Fleet
export function Fleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.context = (i.context !== undefined ? i.context : "");
  out.excessCapacityTerminationPolicy = (i.excessCapacityTerminationPolicy !== undefined ? i.excessCapacityTerminationPolicy : "");
  out.fleetInstanceSets = (i.fleetInstanceSets !== undefined ? i.fleetInstanceSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_FleetFleetInstanceSet(ctx, depth + 1))]));
  out.fleetState = (i.fleetState !== undefined ? i.fleetState : "");
  out.fulfilledCapacity = (i.fulfilledCapacity !== undefined ? i.fulfilledCapacity : 0);
  out.fulfilledOnDemandCapacity = (i.fulfilledOnDemandCapacity !== undefined ? i.fulfilledOnDemandCapacity : 0);
  out.launchTemplateConfigs = (i.launchTemplateConfigs !== undefined ? i.launchTemplateConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfig(ctx, depth + 1))]));
  out.onDemandOptions = (i.onDemandOptions !== undefined ? i.onDemandOptions : (depth > 4 ? {} : T_ec2.ec2_FleetOnDemandOptions(ctx, depth + 1)));
  out.replaceUnhealthyInstances = (i.replaceUnhealthyInstances !== undefined ? i.replaceUnhealthyInstances : false);
  out.spotOptions = (i.spotOptions !== undefined ? i.spotOptions : (depth > 4 ? {} : T_ec2.ec2_FleetSpotOptions(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetCapacitySpecification = (i.targetCapacitySpecification !== undefined ? i.targetCapacitySpecification : (depth > 4 ? {} : T_ec2.ec2_FleetTargetCapacitySpecification(ctx, depth + 1)));
  out.terminateInstances = (i.terminateInstances !== undefined ? i.terminateInstances : false);
  out.terminateInstancesWithExpiration = (i.terminateInstancesWithExpiration !== undefined ? i.terminateInstancesWithExpiration : false);
  out.type = (i.type !== undefined ? i.type : "");
  out.validFrom = (i.validFrom !== undefined ? i.validFrom : "");
  out.validUntil = (i.validUntil !== undefined ? i.validUntil : "");
  return out;
}

// aws:ec2/flowLog:FlowLog
export function FlowLog(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliverCrossAccountRole = (i.deliverCrossAccountRole !== undefined ? i.deliverCrossAccountRole : "");
  out.destinationOptions = (i.destinationOptions !== undefined ? i.destinationOptions : (depth > 4 ? {} : T_ec2.ec2_FlowLogDestinationOptions(ctx, depth + 1)));
  out.eniId = (i.eniId !== undefined ? i.eniId : h.id(ctx, "eniId"));
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.logDestination = (i.logDestination !== undefined ? i.logDestination : "");
  out.logDestinationType = (i.logDestinationType !== undefined ? i.logDestinationType : "");
  out.logFormat = (i.logFormat !== undefined ? i.logFormat : "");
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  out.maxAggregationInterval = (i.maxAggregationInterval !== undefined ? i.maxAggregationInterval : 0);
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trafficType = (i.trafficType !== undefined ? i.trafficType : "");
  out.transitGatewayAttachmentId = (i.transitGatewayAttachmentId !== undefined ? i.transitGatewayAttachmentId : h.id(ctx, "transitGatewayAttachmentId"));
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/imageBlockPublicAccess:ImageBlockPublicAccess
export function ImageBlockPublicAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.state = (i.state !== undefined ? i.state : "active");
  return out;
}

// aws:ec2/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ami = (i.ami !== undefined ? i.ami : "");
  out.arn = h.arn(ctx);
  out.associatePublicIpAddress = (i.associatePublicIpAddress !== undefined ? i.associatePublicIpAddress : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.capacityReservationSpecification = (i.capacityReservationSpecification !== undefined ? i.capacityReservationSpecification : (depth > 4 ? {} : T_ec2.ec2_InstanceCapacityReservationSpecification(ctx, depth + 1)));
  out.cpuCoreCount = (i.cpuCoreCount !== undefined ? i.cpuCoreCount : 1);
  out.cpuOptions = (i.cpuOptions !== undefined ? i.cpuOptions : (depth > 4 ? {} : T_ec2.ec2_InstanceCpuOptions(ctx, depth + 1)));
  out.cpuThreadsPerCore = (i.cpuThreadsPerCore !== undefined ? i.cpuThreadsPerCore : 0);
  out.creditSpecification = (i.creditSpecification !== undefined ? i.creditSpecification : (depth > 4 ? {} : T_ec2.ec2_InstanceCreditSpecification(ctx, depth + 1)));
  out.disableApiStop = (i.disableApiStop !== undefined ? i.disableApiStop : false);
  out.disableApiTermination = (i.disableApiTermination !== undefined ? i.disableApiTermination : false);
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_InstanceEbsBlockDevice(ctx, depth + 1))]));
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.enablePrimaryIpv6 = (i.enablePrimaryIpv6 !== undefined ? i.enablePrimaryIpv6 : true);
  out.enclaveOptions = (i.enclaveOptions !== undefined ? i.enclaveOptions : (depth > 4 ? {} : T_ec2.ec2_InstanceEnclaveOptions(ctx, depth + 1)));
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_InstanceEphemeralBlockDevice(ctx, depth + 1))]));
  out.getPasswordData = (i.getPasswordData !== undefined ? i.getPasswordData : false);
  out.hibernation = (i.hibernation !== undefined ? i.hibernation : false);
  out.hostId = (i.hostId !== undefined ? i.hostId : h.id(ctx, "hostId"));
  out.hostResourceGroupArn = (i.hostResourceGroupArn !== undefined ? i.hostResourceGroupArn : h.arn(ctx));
  out.iamInstanceProfile = (i.iamInstanceProfile !== undefined ? i.iamInstanceProfile : "");
  out.instanceInitiatedShutdownBehavior = (i.instanceInitiatedShutdownBehavior !== undefined ? i.instanceInitiatedShutdownBehavior : "");
  out.instanceLifecycle = "";
  out.instanceMarketOptions = (i.instanceMarketOptions !== undefined ? i.instanceMarketOptions : (depth > 4 ? {} : T_ec2.ec2_InstanceInstanceMarketOptions(ctx, depth + 1)));
  out.instanceState = "";
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.ipv6AddressCount = (i.ipv6AddressCount !== undefined ? i.ipv6AddressCount : 1);
  out.ipv6Addresses = (i.ipv6Addresses !== undefined ? i.ipv6Addresses : (depth > 4 ? [] : [""]));
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.launchTemplate = (i.launchTemplate !== undefined ? i.launchTemplate : (depth > 4 ? {} : T_ec2.ec2_InstanceLaunchTemplate(ctx, depth + 1)));
  out.maintenanceOptions = (i.maintenanceOptions !== undefined ? i.maintenanceOptions : (depth > 4 ? {} : T_ec2.ec2_InstanceMaintenanceOptions(ctx, depth + 1)));
  out.metadataOptions = (i.metadataOptions !== undefined ? i.metadataOptions : (depth > 4 ? {} : T_ec2.ec2_InstanceMetadataOptions(ctx, depth + 1)));
  out.monitoring = (i.monitoring !== undefined ? i.monitoring : false);
  out.networkInterfaces = (i.networkInterfaces !== undefined ? i.networkInterfaces : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_InstanceNetworkInterface(ctx, depth + 1))]));
  out.outpostArn = h.arn(ctx);
  out.passwordData = "";
  out.placementGroup = (i.placementGroup !== undefined ? i.placementGroup : "");
  out.placementPartitionNumber = (i.placementPartitionNumber !== undefined ? i.placementPartitionNumber : 0);
  out.primaryNetworkInterfaceId = h.id(ctx, "primaryNetworkInterfaceId");
  out.privateDns = "";
  out.privateDnsNameOptions = (i.privateDnsNameOptions !== undefined ? i.privateDnsNameOptions : (depth > 4 ? {} : T_ec2.ec2_InstancePrivateDnsNameOptions(ctx, depth + 1)));
  out.privateIp = (i.privateIp !== undefined ? i.privateIp : "10.0.0.10");
  out.publicDns = "";
  out.publicIp = "54.0.0.10";
  out.rootBlockDevice = (i.rootBlockDevice !== undefined ? i.rootBlockDevice : (depth > 4 ? {} : T_ec2.ec2_InstanceRootBlockDevice(ctx, depth + 1)));
  out.secondaryPrivateIps = (i.secondaryPrivateIps !== undefined ? i.secondaryPrivateIps : (depth > 4 ? [] : [""]));
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.sourceDestCheck = (i.sourceDestCheck !== undefined ? i.sourceDestCheck : false);
  out.spotInstanceRequestId = h.id(ctx, "spotInstanceRequestId");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenancy = (i.tenancy !== undefined ? i.tenancy : "");
  out.userData = (i.userData !== undefined ? i.userData : "");
  out.userDataBase64 = (i.userDataBase64 !== undefined ? i.userDataBase64 : "");
  out.userDataReplaceOnChange = (i.userDataReplaceOnChange !== undefined ? i.userDataReplaceOnChange : false);
  out.volumeTags = (i.volumeTags !== undefined ? i.volumeTags : {});
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:ec2/instanceMetadataDefaults:InstanceMetadataDefaults
export function InstanceMetadataDefaults(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = (i.httpEndpoint !== undefined ? i.httpEndpoint : h.endpoint(ctx, "httpEndpoint"));
  out.httpPutResponseHopLimit = (i.httpPutResponseHopLimit !== undefined ? i.httpPutResponseHopLimit : 0);
  out.httpTokens = (i.httpTokens !== undefined ? i.httpTokens : "");
  out.instanceMetadataTags = (i.instanceMetadataTags !== undefined ? i.instanceMetadataTags : "");
  return out;
}

// aws:ec2/internetGateway:InternetGateway
export function InternetGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/internetGatewayAttachment:InternetGatewayAttachment
export function InternetGatewayAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.internetGatewayId = (i.internetGatewayId !== undefined ? i.internetGatewayId : h.id(ctx, "internetGatewayId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/keyPair:KeyPair
export function KeyPair(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fingerprint = "";
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.keyNamePrefix = (i.keyNamePrefix !== undefined ? i.keyNamePrefix : "");
  out.keyPairId = h.id(ctx, "keyPairId");
  out.keyType = "";
  out.publicKey = (i.publicKey !== undefined ? i.publicKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/launchConfiguration:LaunchConfiguration
export function LaunchConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associatePublicIpAddress = (i.associatePublicIpAddress !== undefined ? i.associatePublicIpAddress : false);
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchConfigurationEbsBlockDevice(ctx, depth + 1))]));
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.enableMonitoring = (i.enableMonitoring !== undefined ? i.enableMonitoring : true);
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchConfigurationEphemeralBlockDevice(ctx, depth + 1))]));
  out.iamInstanceProfile = (i.iamInstanceProfile !== undefined ? i.iamInstanceProfile : "");
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.metadataOptions = (i.metadataOptions !== undefined ? i.metadataOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchConfigurationMetadataOptions(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.placementTenancy = (i.placementTenancy !== undefined ? i.placementTenancy : "");
  out.rootBlockDevice = (i.rootBlockDevice !== undefined ? i.rootBlockDevice : (depth > 4 ? {} : T_ec2.ec2_LaunchConfigurationRootBlockDevice(ctx, depth + 1)));
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.spotPrice = (i.spotPrice !== undefined ? i.spotPrice : "");
  out.userData = (i.userData !== undefined ? i.userData : "");
  out.userDataBase64 = (i.userDataBase64 !== undefined ? i.userDataBase64 : "");
  return out;
}

// aws:ec2/launchTemplate:LaunchTemplate
export function LaunchTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.blockDeviceMappings = (i.blockDeviceMappings !== undefined ? i.blockDeviceMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchTemplateBlockDeviceMapping(ctx, depth + 1))]));
  out.capacityReservationSpecification = (i.capacityReservationSpecification !== undefined ? i.capacityReservationSpecification : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateCapacityReservationSpecification(ctx, depth + 1)));
  out.cpuOptions = (i.cpuOptions !== undefined ? i.cpuOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateCpuOptions(ctx, depth + 1)));
  out.creditSpecification = (i.creditSpecification !== undefined ? i.creditSpecification : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateCreditSpecification(ctx, depth + 1)));
  out.defaultVersion = (i.defaultVersion !== undefined ? i.defaultVersion : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.disableApiStop = (i.disableApiStop !== undefined ? i.disableApiStop : false);
  out.disableApiTermination = (i.disableApiTermination !== undefined ? i.disableApiTermination : false);
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : "");
  out.elasticGpuSpecifications = (i.elasticGpuSpecifications !== undefined ? i.elasticGpuSpecifications : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchTemplateElasticGpuSpecification(ctx, depth + 1))]));
  out.elasticInferenceAccelerator = (i.elasticInferenceAccelerator !== undefined ? i.elasticInferenceAccelerator : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateElasticInferenceAccelerator(ctx, depth + 1)));
  out.enclaveOptions = (i.enclaveOptions !== undefined ? i.enclaveOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateEnclaveOptions(ctx, depth + 1)));
  out.hibernationOptions = (i.hibernationOptions !== undefined ? i.hibernationOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateHibernationOptions(ctx, depth + 1)));
  out.iamInstanceProfile = (i.iamInstanceProfile !== undefined ? i.iamInstanceProfile : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateIamInstanceProfile(ctx, depth + 1)));
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.instanceInitiatedShutdownBehavior = (i.instanceInitiatedShutdownBehavior !== undefined ? i.instanceInitiatedShutdownBehavior : "");
  out.instanceMarketOptions = (i.instanceMarketOptions !== undefined ? i.instanceMarketOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceMarketOptions(ctx, depth + 1)));
  out.instanceRequirements = (i.instanceRequirements !== undefined ? i.instanceRequirements : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirements(ctx, depth + 1)));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.kernelId = (i.kernelId !== undefined ? i.kernelId : h.id(ctx, "kernelId"));
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.latestVersion = 0;
  out.licenseSpecifications = (i.licenseSpecifications !== undefined ? i.licenseSpecifications : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchTemplateLicenseSpecification(ctx, depth + 1))]));
  out.maintenanceOptions = (i.maintenanceOptions !== undefined ? i.maintenanceOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateMaintenanceOptions(ctx, depth + 1)));
  out.metadataOptions = (i.metadataOptions !== undefined ? i.metadataOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateMetadataOptions(ctx, depth + 1)));
  out.monitoring = (i.monitoring !== undefined ? i.monitoring : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateMonitoring(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.networkInterfaces = (i.networkInterfaces !== undefined ? i.networkInterfaces : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchTemplateNetworkInterface(ctx, depth + 1))]));
  out.placement = (i.placement !== undefined ? i.placement : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplatePlacement(ctx, depth + 1)));
  out.privateDnsNameOptions = (i.privateDnsNameOptions !== undefined ? i.privateDnsNameOptions : (depth > 4 ? {} : T_ec2.ec2_LaunchTemplatePrivateDnsNameOptions(ctx, depth + 1)));
  out.ramDiskId = (i.ramDiskId !== undefined ? i.ramDiskId : h.id(ctx, "ramDiskId"));
  out.securityGroupNames = (i.securityGroupNames !== undefined ? i.securityGroupNames : (depth > 4 ? [] : [""]));
  out.tagSpecifications = (i.tagSpecifications !== undefined ? i.tagSpecifications : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_LaunchTemplateTagSpecification(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateDefaultVersion = (i.updateDefaultVersion !== undefined ? i.updateDefaultVersion : false);
  out.userData = (i.userData !== undefined ? i.userData : "");
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:ec2/localGatewayRoute:LocalGatewayRoute
export function LocalGatewayRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.localGatewayRouteTableId = (i.localGatewayRouteTableId !== undefined ? i.localGatewayRouteTableId : h.id(ctx, "localGatewayRouteTableId"));
  out.localGatewayVirtualInterfaceGroupId = (i.localGatewayVirtualInterfaceGroupId !== undefined ? i.localGatewayVirtualInterfaceGroupId : h.id(ctx, "localGatewayVirtualInterfaceGroupId"));
  return out;
}

// aws:ec2/localGatewayRouteTableVpcAssociation:LocalGatewayRouteTableVpcAssociation
export function LocalGatewayRouteTableVpcAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.localGatewayId = h.id(ctx, "localGatewayId");
  out.localGatewayRouteTableId = (i.localGatewayRouteTableId !== undefined ? i.localGatewayRouteTableId : h.id(ctx, "localGatewayRouteTableId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/mainRouteTableAssociation:MainRouteTableAssociation
export function MainRouteTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originalRouteTableId = h.id(ctx, "originalRouteTableId");
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/managedPrefixList:ManagedPrefixList
export function ManagedPrefixList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.arn = h.arn(ctx);
  out.entries = (i.entries !== undefined ? i.entries : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_ManagedPrefixListEntry(ctx, depth + 1))]));
  out.maxEntries = (i.maxEntries !== undefined ? i.maxEntries : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = 0;
  return out;
}

// aws:ec2/managedPrefixListEntry:ManagedPrefixListEntry
export function ManagedPrefixListEntry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = (i.cidr !== undefined ? i.cidr : "10.0.0.0/16");
  out.description = (i.description !== undefined ? i.description : "");
  out.prefixListId = (i.prefixListId !== undefined ? i.prefixListId : h.id(ctx, "prefixListId"));
  return out;
}

// aws:ec2/natGateway:NatGateway
export function NatGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = (i.allocationId !== undefined ? i.allocationId : h.id(ctx, "allocationId"));
  out.associationId = h.id(ctx, "associationId");
  out.connectivityType = (i.connectivityType !== undefined ? i.connectivityType : "");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIp = (i.privateIp !== undefined ? i.privateIp : "10.0.0.10");
  out.publicIp = "54.0.0.10";
  out.secondaryAllocationIds = (i.secondaryAllocationIds !== undefined ? i.secondaryAllocationIds : (depth > 4 ? [] : [""]));
  out.secondaryPrivateIpAddressCount = (i.secondaryPrivateIpAddressCount !== undefined ? i.secondaryPrivateIpAddressCount : 1);
  out.secondaryPrivateIpAddresses = (i.secondaryPrivateIpAddresses !== undefined ? i.secondaryPrivateIpAddresses : (depth > 4 ? [] : [""]));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/networkAcl:NetworkAcl
export function NetworkAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.egress = (i.egress !== undefined ? i.egress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkAclEgress(ctx, depth + 1))]));
  out.ingress = (i.ingress !== undefined ? i.ingress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkAclIngress(ctx, depth + 1))]));
  out.ownerId = ctx.accountId;
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/networkAclAssociation:NetworkAclAssociation
export function NetworkAclAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkAclId = (i.networkAclId !== undefined ? i.networkAclId : h.id(ctx, "networkAclId"));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}

// aws:ec2/networkAclRule:NetworkAclRule
export function NetworkAclRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.egress = (i.egress !== undefined ? i.egress : false);
  out.fromPort = (i.fromPort !== undefined ? i.fromPort : 443);
  out.icmpCode = (i.icmpCode !== undefined ? i.icmpCode : 0);
  out.icmpType = (i.icmpType !== undefined ? i.icmpType : 0);
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.networkAclId = (i.networkAclId !== undefined ? i.networkAclId : h.id(ctx, "networkAclId"));
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.ruleAction = (i.ruleAction !== undefined ? i.ruleAction : "");
  out.ruleNumber = (i.ruleNumber !== undefined ? i.ruleNumber : 0);
  out.toPort = (i.toPort !== undefined ? i.toPort : 443);
  return out;
}

// aws:ec2/networkInsightsAnalysis:NetworkInsightsAnalysis
export function NetworkInsightsAnalysis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alternatePathHints = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisAlternatePathHint(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.explanations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanation(ctx, depth + 1))]);
  out.filterInArns = (i.filterInArns !== undefined ? i.filterInArns : (depth > 4 ? [] : [""]));
  out.forwardPathComponents = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponent(ctx, depth + 1))]);
  out.networkInsightsPathId = (i.networkInsightsPathId !== undefined ? i.networkInsightsPathId : h.id(ctx, "networkInsightsPathId"));
  out.pathFound = false;
  out.returnPathComponents = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponent(ctx, depth + 1))]);
  out.startDate = "";
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.waitForCompletion = (i.waitForCompletion !== undefined ? i.waitForCompletion : false);
  out.warningMessage = "";
  return out;
}

// aws:ec2/networkInsightsPath:NetworkInsightsPath
export function NetworkInsightsPath(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destination = (i.destination !== undefined ? i.destination : "");
  out.destinationArn = h.arn(ctx);
  out.destinationIp = (i.destinationIp !== undefined ? i.destinationIp : "");
  out.destinationPort = (i.destinationPort !== undefined ? i.destinationPort : 443);
  out.filterAtDestination = (i.filterAtDestination !== undefined ? i.filterAtDestination : (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtDestination(ctx, depth + 1)));
  out.filterAtSource = (i.filterAtSource !== undefined ? i.filterAtSource : (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtSource(ctx, depth + 1)));
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.source = (i.source !== undefined ? i.source : "");
  out.sourceArn = h.arn(ctx);
  out.sourceIp = (i.sourceIp !== undefined ? i.sourceIp : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/networkInterface:NetworkInterface
export function NetworkInterface(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachments = (i.attachments !== undefined ? i.attachments : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInterfaceAttachment(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.enablePrimaryIpv6 = (i.enablePrimaryIpv6 !== undefined ? i.enablePrimaryIpv6 : true);
  out.interfaceType = (i.interfaceType !== undefined ? i.interfaceType : "");
  out.ipv4PrefixCount = (i.ipv4PrefixCount !== undefined ? i.ipv4PrefixCount : 1);
  out.ipv4Prefixes = (i.ipv4Prefixes !== undefined ? i.ipv4Prefixes : (depth > 4 ? [] : [""]));
  out.ipv6AddressCount = (i.ipv6AddressCount !== undefined ? i.ipv6AddressCount : 1);
  out.ipv6AddressListEnabled = (i.ipv6AddressListEnabled !== undefined ? i.ipv6AddressListEnabled : false);
  out.ipv6AddressLists = (i.ipv6AddressLists !== undefined ? i.ipv6AddressLists : (depth > 4 ? [] : [""]));
  out.ipv6Addresses = (i.ipv6Addresses !== undefined ? i.ipv6Addresses : (depth > 4 ? [] : [""]));
  out.ipv6PrefixCount = (i.ipv6PrefixCount !== undefined ? i.ipv6PrefixCount : 1);
  out.ipv6Prefixes = (i.ipv6Prefixes !== undefined ? i.ipv6Prefixes : (depth > 4 ? [] : [""]));
  out.macAddress = "";
  out.outpostArn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.privateDnsName = "";
  out.privateIp = (i.privateIp !== undefined ? i.privateIp : "10.0.0.10");
  out.privateIpListEnabled = (i.privateIpListEnabled !== undefined ? i.privateIpListEnabled : false);
  out.privateIpLists = (i.privateIpLists !== undefined ? i.privateIpLists : (depth > 4 ? [] : [""]));
  out.privateIps = (i.privateIps !== undefined ? i.privateIps : (depth > 4 ? [] : [""]));
  out.privateIpsCount = (i.privateIpsCount !== undefined ? i.privateIpsCount : 1);
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.sourceDestCheck = (i.sourceDestCheck !== undefined ? i.sourceDestCheck : false);
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/networkInterfaceAttachment:NetworkInterfaceAttachment
export function NetworkInterfaceAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.deviceIndex = (i.deviceIndex !== undefined ? i.deviceIndex : 0);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.status = "active";
  return out;
}

// aws:ec2/networkInterfacePermission:NetworkInterfacePermission
export function NetworkInterfacePermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.networkInterfacePermissionId = h.id(ctx, "networkInterfacePermissionId");
  out.permission = (i.permission !== undefined ? i.permission : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_NetworkInterfacePermissionTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ec2/networkInterfaceSecurityGroupAttachment:NetworkInterfaceSecurityGroupAttachment
export function NetworkInterfaceSecurityGroupAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  return out;
}

// aws:ec2/peeringConnectionOptions:PeeringConnectionOptions
export function PeeringConnectionOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accepter = (i.accepter !== undefined ? i.accepter : (depth > 4 ? {} : T_ec2.ec2_PeeringConnectionOptionsAccepter(ctx, depth + 1)));
  out.requester = (i.requester !== undefined ? i.requester : (depth > 4 ? {} : T_ec2.ec2_PeeringConnectionOptionsRequester(ctx, depth + 1)));
  out.vpcPeeringConnectionId = (i.vpcPeeringConnectionId !== undefined ? i.vpcPeeringConnectionId : h.id(ctx, "vpcPeeringConnectionId"));
  return out;
}

// aws:ec2/placementGroup:PlacementGroup
export function PlacementGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.partitionCount = (i.partitionCount !== undefined ? i.partitionCount : 1);
  out.placementGroupId = h.id(ctx, "placementGroupId");
  out.spreadLevel = (i.spreadLevel !== undefined ? i.spreadLevel : "");
  out.strategy = (i.strategy !== undefined ? i.strategy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/proxyProtocolPolicy:ProxyProtocolPolicy
export function ProxyProtocolPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePorts = (i.instancePorts !== undefined ? i.instancePorts : (depth > 4 ? [] : [""]));
  out.loadBalancer = (i.loadBalancer !== undefined ? i.loadBalancer : "");
  return out;
}

// aws:ec2/route:Route
export function Route(ctx: MockCtx): Record<string, any> {
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
  out.instanceId = h.id(ctx, "instanceId");
  out.instanceOwnerId = h.id(ctx, "instanceOwnerId");
  out.localGatewayId = (i.localGatewayId !== undefined ? i.localGatewayId : h.id(ctx, "localGatewayId"));
  out.natGatewayId = (i.natGatewayId !== undefined ? i.natGatewayId : h.id(ctx, "natGatewayId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.origin = "";
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.state = "active";
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  out.vpcPeeringConnectionId = (i.vpcPeeringConnectionId !== undefined ? i.vpcPeeringConnectionId : h.id(ctx, "vpcPeeringConnectionId"));
  return out;
}

// aws:ec2/routeTable:RouteTable
export function RouteTable(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.propagatingVgws = (i.propagatingVgws !== undefined ? i.propagatingVgws : (depth > 4 ? [] : [""]));
  out.routes = (i.routes !== undefined ? i.routes : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_RouteTableRoute(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/routeTableAssociation:RouteTableAssociation
export function RouteTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gatewayId = (i.gatewayId !== undefined ? i.gatewayId : h.id(ctx, "gatewayId"));
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}

// aws:ec2/securityGroup:SecurityGroup
export function SecurityGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.egress = (i.egress !== undefined ? i.egress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SecurityGroupEgress(ctx, depth + 1))]));
  out.ingress = (i.ingress !== undefined ? i.ingress : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SecurityGroupIngress(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.ownerId = ctx.accountId;
  out.revokeRulesOnDelete = (i.revokeRulesOnDelete !== undefined ? i.revokeRulesOnDelete : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/securityGroupAssociation:SecurityGroupAssociation
export function SecurityGroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replaceDefaultAssociation = (i.replaceDefaultAssociation !== undefined ? i.replaceDefaultAssociation : false);
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:ec2/securityGroupRule:SecurityGroupRule
export function SecurityGroupRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (i.cidrBlocks !== undefined ? i.cidrBlocks : (depth > 4 ? [] : ["10.0.0.0/16"]));
  out.description = (i.description !== undefined ? i.description : "");
  out.fromPort = (i.fromPort !== undefined ? i.fromPort : 443);
  out.ipv6CidrBlocks = (i.ipv6CidrBlocks !== undefined ? i.ipv6CidrBlocks : (depth > 4 ? [] : [""]));
  out.prefixListIds = (i.prefixListIds !== undefined ? i.prefixListIds : (depth > 4 ? [] : [""]));
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.securityGroupId = (i.securityGroupId !== undefined ? i.securityGroupId : h.id(ctx, "securityGroupId", "sg"));
  out.securityGroupRuleId = h.id(ctx, "securityGroupRuleId");
  out.self = (i.self !== undefined ? i.self : false);
  out.sourceSecurityGroupId = (i.sourceSecurityGroupId !== undefined ? i.sourceSecurityGroupId : h.id(ctx, "sourceSecurityGroupId"));
  out.toPort = (i.toPort !== undefined ? i.toPort : 443);
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:ec2/serialConsoleAccess:SerialConsoleAccess
export function SerialConsoleAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  return out;
}

// aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission
export function SnapshotCreateVolumePermission(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.snapshotId = (i.snapshotId !== undefined ? i.snapshotId : h.id(ctx, "snapshotId"));
  return out;
}

// aws:ec2/spotDatafeedSubscription:SpotDatafeedSubscription
export function SpotDatafeedSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  return out;
}

// aws:ec2/spotFleetRequest:SpotFleetRequest
export function SpotFleetRequest(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = (i.allocationStrategy !== undefined ? i.allocationStrategy : "");
  out.clientToken = "";
  out.context = (i.context !== undefined ? i.context : "");
  out.excessCapacityTerminationPolicy = (i.excessCapacityTerminationPolicy !== undefined ? i.excessCapacityTerminationPolicy : "");
  out.fleetType = (i.fleetType !== undefined ? i.fleetType : "");
  out.iamFleetRole = (i.iamFleetRole !== undefined ? i.iamFleetRole : "");
  out.instanceInterruptionBehaviour = (i.instanceInterruptionBehaviour !== undefined ? i.instanceInterruptionBehaviour : "");
  out.instancePoolsToUseCount = (i.instancePoolsToUseCount !== undefined ? i.instancePoolsToUseCount : 1);
  out.launchSpecifications = (i.launchSpecifications !== undefined ? i.launchSpecifications : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchSpecification(ctx, depth + 1))]));
  out.launchTemplateConfigs = (i.launchTemplateConfigs !== undefined ? i.launchTemplateConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfig(ctx, depth + 1))]));
  out.loadBalancers = (i.loadBalancers !== undefined ? i.loadBalancers : (depth > 4 ? [] : [""]));
  out.onDemandAllocationStrategy = (i.onDemandAllocationStrategy !== undefined ? i.onDemandAllocationStrategy : "");
  out.onDemandMaxTotalPrice = (i.onDemandMaxTotalPrice !== undefined ? i.onDemandMaxTotalPrice : "");
  out.onDemandTargetCapacity = (i.onDemandTargetCapacity !== undefined ? i.onDemandTargetCapacity : 0);
  out.replaceUnhealthyInstances = (i.replaceUnhealthyInstances !== undefined ? i.replaceUnhealthyInstances : false);
  out.spotMaintenanceStrategies = (i.spotMaintenanceStrategies !== undefined ? i.spotMaintenanceStrategies : (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestSpotMaintenanceStrategies(ctx, depth + 1)));
  out.spotPrice = (i.spotPrice !== undefined ? i.spotPrice : "");
  out.spotRequestState = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetCapacity = (i.targetCapacity !== undefined ? i.targetCapacity : 0);
  out.targetCapacityUnitType = (i.targetCapacityUnitType !== undefined ? i.targetCapacityUnitType : "");
  out.targetGroupArns = (i.targetGroupArns !== undefined ? i.targetGroupArns : (depth > 4 ? [] : [""]));
  out.terminateInstancesOnDelete = (i.terminateInstancesOnDelete !== undefined ? i.terminateInstancesOnDelete : "");
  out.terminateInstancesWithExpiration = (i.terminateInstancesWithExpiration !== undefined ? i.terminateInstancesWithExpiration : false);
  out.validFrom = (i.validFrom !== undefined ? i.validFrom : "");
  out.validUntil = (i.validUntil !== undefined ? i.validUntil : "");
  out.waitForFulfillment = (i.waitForFulfillment !== undefined ? i.waitForFulfillment : false);
  return out;
}

// aws:ec2/spotInstanceRequest:SpotInstanceRequest
export function SpotInstanceRequest(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ami = (i.ami !== undefined ? i.ami : "");
  out.arn = h.arn(ctx);
  out.associatePublicIpAddress = (i.associatePublicIpAddress !== undefined ? i.associatePublicIpAddress : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.blockDurationMinutes = (i.blockDurationMinutes !== undefined ? i.blockDurationMinutes : 0);
  out.capacityReservationSpecification = (i.capacityReservationSpecification !== undefined ? i.capacityReservationSpecification : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestCapacityReservationSpecification(ctx, depth + 1)));
  out.cpuCoreCount = (i.cpuCoreCount !== undefined ? i.cpuCoreCount : 1);
  out.cpuOptions = (i.cpuOptions !== undefined ? i.cpuOptions : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestCpuOptions(ctx, depth + 1)));
  out.cpuThreadsPerCore = (i.cpuThreadsPerCore !== undefined ? i.cpuThreadsPerCore : 0);
  out.creditSpecification = (i.creditSpecification !== undefined ? i.creditSpecification : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestCreditSpecification(ctx, depth + 1)));
  out.disableApiStop = (i.disableApiStop !== undefined ? i.disableApiStop : false);
  out.disableApiTermination = (i.disableApiTermination !== undefined ? i.disableApiTermination : false);
  out.ebsBlockDevices = (i.ebsBlockDevices !== undefined ? i.ebsBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestEbsBlockDevice(ctx, depth + 1))]));
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.enablePrimaryIpv6 = (i.enablePrimaryIpv6 !== undefined ? i.enablePrimaryIpv6 : true);
  out.enclaveOptions = (i.enclaveOptions !== undefined ? i.enclaveOptions : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestEnclaveOptions(ctx, depth + 1)));
  out.ephemeralBlockDevices = (i.ephemeralBlockDevices !== undefined ? i.ephemeralBlockDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestEphemeralBlockDevice(ctx, depth + 1))]));
  out.getPasswordData = (i.getPasswordData !== undefined ? i.getPasswordData : false);
  out.hibernation = (i.hibernation !== undefined ? i.hibernation : false);
  out.hostId = (i.hostId !== undefined ? i.hostId : h.id(ctx, "hostId"));
  out.hostResourceGroupArn = (i.hostResourceGroupArn !== undefined ? i.hostResourceGroupArn : h.arn(ctx));
  out.iamInstanceProfile = (i.iamInstanceProfile !== undefined ? i.iamInstanceProfile : "");
  out.instanceInitiatedShutdownBehavior = (i.instanceInitiatedShutdownBehavior !== undefined ? i.instanceInitiatedShutdownBehavior : "");
  out.instanceInterruptionBehavior = (i.instanceInterruptionBehavior !== undefined ? i.instanceInterruptionBehavior : "");
  out.instanceState = "";
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.ipv6AddressCount = (i.ipv6AddressCount !== undefined ? i.ipv6AddressCount : 1);
  out.ipv6Addresses = (i.ipv6Addresses !== undefined ? i.ipv6Addresses : (depth > 4 ? [] : [""]));
  out.keyName = (i.keyName !== undefined ? i.keyName : "");
  out.launchGroup = (i.launchGroup !== undefined ? i.launchGroup : "");
  out.launchTemplate = (i.launchTemplate !== undefined ? i.launchTemplate : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestLaunchTemplate(ctx, depth + 1)));
  out.maintenanceOptions = (i.maintenanceOptions !== undefined ? i.maintenanceOptions : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestMaintenanceOptions(ctx, depth + 1)));
  out.metadataOptions = (i.metadataOptions !== undefined ? i.metadataOptions : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestMetadataOptions(ctx, depth + 1)));
  out.monitoring = (i.monitoring !== undefined ? i.monitoring : false);
  out.networkInterfaces = (i.networkInterfaces !== undefined ? i.networkInterfaces : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestNetworkInterface(ctx, depth + 1))]));
  out.outpostArn = h.arn(ctx);
  out.passwordData = "";
  out.placementGroup = (i.placementGroup !== undefined ? i.placementGroup : "");
  out.placementPartitionNumber = (i.placementPartitionNumber !== undefined ? i.placementPartitionNumber : 0);
  out.primaryNetworkInterfaceId = h.id(ctx, "primaryNetworkInterfaceId");
  out.privateDns = "";
  out.privateDnsNameOptions = (i.privateDnsNameOptions !== undefined ? i.privateDnsNameOptions : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestPrivateDnsNameOptions(ctx, depth + 1)));
  out.privateIp = (i.privateIp !== undefined ? i.privateIp : "10.0.0.10");
  out.publicDns = "";
  out.publicIp = "54.0.0.10";
  out.rootBlockDevice = (i.rootBlockDevice !== undefined ? i.rootBlockDevice : (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestRootBlockDevice(ctx, depth + 1)));
  out.secondaryPrivateIps = (i.secondaryPrivateIps !== undefined ? i.secondaryPrivateIps : (depth > 4 ? [] : [""]));
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.sourceDestCheck = (i.sourceDestCheck !== undefined ? i.sourceDestCheck : false);
  out.spotBidStatus = "";
  out.spotInstanceId = h.id(ctx, "spotInstanceId");
  out.spotPrice = (i.spotPrice !== undefined ? i.spotPrice : "");
  out.spotRequestState = "";
  out.spotType = (i.spotType !== undefined ? i.spotType : "");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tenancy = (i.tenancy !== undefined ? i.tenancy : "");
  out.userData = (i.userData !== undefined ? i.userData : "");
  out.userDataBase64 = (i.userDataBase64 !== undefined ? i.userDataBase64 : "");
  out.userDataReplaceOnChange = (i.userDataReplaceOnChange !== undefined ? i.userDataReplaceOnChange : false);
  out.validFrom = (i.validFrom !== undefined ? i.validFrom : "");
  out.validUntil = (i.validUntil !== undefined ? i.validUntil : "");
  out.volumeTags = (i.volumeTags !== undefined ? i.volumeTags : {});
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.waitForFulfillment = (i.waitForFulfillment !== undefined ? i.waitForFulfillment : false);
  return out;
}

// aws:ec2/subnet:Subnet
export function Subnet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assignIpv6AddressOnCreation = (i.assignIpv6AddressOnCreation !== undefined ? i.assignIpv6AddressOnCreation : false);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.customerOwnedIpv4Pool = (i.customerOwnedIpv4Pool !== undefined ? i.customerOwnedIpv4Pool : "");
  out.enableDns64 = (i.enableDns64 !== undefined ? i.enableDns64 : true);
  out.enableLniAtDeviceIndex = (i.enableLniAtDeviceIndex !== undefined ? i.enableLniAtDeviceIndex : 0);
  out.enableResourceNameDnsARecordOnLaunch = (i.enableResourceNameDnsARecordOnLaunch !== undefined ? i.enableResourceNameDnsARecordOnLaunch : true);
  out.enableResourceNameDnsAaaaRecordOnLaunch = (i.enableResourceNameDnsAaaaRecordOnLaunch !== undefined ? i.enableResourceNameDnsAaaaRecordOnLaunch : true);
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6CidrBlockAssociationId = h.id(ctx, "ipv6CidrBlockAssociationId");
  out.ipv6Native = (i.ipv6Native !== undefined ? i.ipv6Native : false);
  out.mapCustomerOwnedIpOnLaunch = (i.mapCustomerOwnedIpOnLaunch !== undefined ? i.mapCustomerOwnedIpOnLaunch : false);
  out.mapPublicIpOnLaunch = (i.mapPublicIpOnLaunch !== undefined ? i.mapPublicIpOnLaunch : false);
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.ownerId = ctx.accountId;
  out.privateDnsHostnameTypeOnLaunch = (i.privateDnsHostnameTypeOnLaunch !== undefined ? i.privateDnsHostnameTypeOnLaunch : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/subnetCidrReservation:SubnetCidrReservation
export function SubnetCidrReservation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.description = (i.description !== undefined ? i.description : "");
  out.ownerId = ctx.accountId;
  out.reservationType = (i.reservationType !== undefined ? i.reservationType : "");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}

// aws:ec2/tag:Tag
export function Tag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = (i.key !== undefined ? i.key : "");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:ec2/trafficMirrorFilter:TrafficMirrorFilter
export function TrafficMirrorFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.networkServices = (i.networkServices !== undefined ? i.networkServices : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/trafficMirrorFilterRule:TrafficMirrorFilterRule
export function TrafficMirrorFilterRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.destinationPortRange = (i.destinationPortRange !== undefined ? i.destinationPortRange : (depth > 4 ? {} : T_ec2.ec2_TrafficMirrorFilterRuleDestinationPortRange(ctx, depth + 1)));
  out.protocol = (i.protocol !== undefined ? i.protocol : 0);
  out.ruleAction = (i.ruleAction !== undefined ? i.ruleAction : "");
  out.ruleNumber = (i.ruleNumber !== undefined ? i.ruleNumber : 0);
  out.sourceCidrBlock = (i.sourceCidrBlock !== undefined ? i.sourceCidrBlock : "");
  out.sourcePortRange = (i.sourcePortRange !== undefined ? i.sourcePortRange : (depth > 4 ? {} : T_ec2.ec2_TrafficMirrorFilterRuleSourcePortRange(ctx, depth + 1)));
  out.trafficDirection = (i.trafficDirection !== undefined ? i.trafficDirection : "");
  out.trafficMirrorFilterId = (i.trafficMirrorFilterId !== undefined ? i.trafficMirrorFilterId : h.id(ctx, "trafficMirrorFilterId"));
  return out;
}

// aws:ec2/trafficMirrorSession:TrafficMirrorSession
export function TrafficMirrorSession(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.ownerId = ctx.accountId;
  out.packetLength = (i.packetLength !== undefined ? i.packetLength : 0);
  out.sessionNumber = (i.sessionNumber !== undefined ? i.sessionNumber : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trafficMirrorFilterId = (i.trafficMirrorFilterId !== undefined ? i.trafficMirrorFilterId : h.id(ctx, "trafficMirrorFilterId"));
  out.trafficMirrorTargetId = (i.trafficMirrorTargetId !== undefined ? i.trafficMirrorTargetId : h.id(ctx, "trafficMirrorTargetId"));
  out.virtualNetworkId = (i.virtualNetworkId !== undefined ? i.virtualNetworkId : 0);
  return out;
}

// aws:ec2/trafficMirrorTarget:TrafficMirrorTarget
export function TrafficMirrorTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.gatewayLoadBalancerEndpointId = (i.gatewayLoadBalancerEndpointId !== undefined ? i.gatewayLoadBalancerEndpointId : h.id(ctx, "gatewayLoadBalancerEndpointId"));
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.networkLoadBalancerArn = (i.networkLoadBalancerArn !== undefined ? i.networkLoadBalancerArn : h.arn(ctx));
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/volumeAttachment:VolumeAttachment
export function VolumeAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = (i.deviceName !== undefined ? i.deviceName : "");
  out.forceDetach = (i.forceDetach !== undefined ? i.forceDetach : false);
  out.instanceId = (i.instanceId !== undefined ? i.instanceId : h.id(ctx, "instanceId"));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.stopInstanceBeforeDetaching = (i.stopInstanceBeforeDetaching !== undefined ? i.stopInstanceBeforeDetaching : false);
  out.volumeId = (i.volumeId !== undefined ? i.volumeId : h.id(ctx, "volumeId"));
  return out;
}

// aws:ec2/vpc:Vpc
export function Vpc(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assignGeneratedIpv6CidrBlock = (i.assignGeneratedIpv6CidrBlock !== undefined ? i.assignGeneratedIpv6CidrBlock : false);
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.defaultNetworkAclId = h.id(ctx, "defaultNetworkAclId");
  out.defaultRouteTableId = h.id(ctx, "defaultRouteTableId");
  out.defaultSecurityGroupId = h.id(ctx, "defaultSecurityGroupId");
  out.dhcpOptionsId = h.id(ctx, "dhcpOptionsId");
  out.enableDnsHostnames = (i.enableDnsHostnames !== undefined ? i.enableDnsHostnames : true);
  out.enableDnsSupport = (i.enableDnsSupport !== undefined ? i.enableDnsSupport : true);
  out.enableNetworkAddressUsageMetrics = (i.enableNetworkAddressUsageMetrics !== undefined ? i.enableNetworkAddressUsageMetrics : true);
  out.instanceTenancy = (i.instanceTenancy !== undefined ? i.instanceTenancy : "");
  out.ipv4IpamPoolId = (i.ipv4IpamPoolId !== undefined ? i.ipv4IpamPoolId : h.id(ctx, "ipv4IpamPoolId"));
  out.ipv4NetmaskLength = (i.ipv4NetmaskLength !== undefined ? i.ipv4NetmaskLength : 0);
  out.ipv6AssociationId = h.id(ctx, "ipv6AssociationId");
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6CidrBlockNetworkBorderGroup = (i.ipv6CidrBlockNetworkBorderGroup !== undefined ? i.ipv6CidrBlockNetworkBorderGroup : "");
  out.ipv6IpamPoolId = (i.ipv6IpamPoolId !== undefined ? i.ipv6IpamPoolId : h.id(ctx, "ipv6IpamPoolId"));
  out.ipv6NetmaskLength = (i.ipv6NetmaskLength !== undefined ? i.ipv6NetmaskLength : 0);
  out.mainRouteTableId = h.id(ctx, "mainRouteTableId");
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcBlockPublicAccessExclusion:VpcBlockPublicAccessExclusion
export function VpcBlockPublicAccessExclusion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.internetGatewayExclusionMode = (i.internetGatewayExclusionMode !== undefined ? i.internetGatewayExclusionMode : "");
  out.resourceArn = h.arn(ctx);
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_VpcBlockPublicAccessExclusionTimeouts(ctx, depth + 1)));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcBlockPublicAccessOptions:VpcBlockPublicAccessOptions
export function VpcBlockPublicAccessOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = h.id(ctx, "awsAccountId");
  out.awsRegion = "";
  out.internetGatewayBlockMode = (i.internetGatewayBlockMode !== undefined ? i.internetGatewayBlockMode : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ec2.ec2_VpcBlockPublicAccessOptionsTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ec2/vpcDhcpOptions:VpcDhcpOptions
export function VpcDhcpOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainNameServers = (i.domainNameServers !== undefined ? i.domainNameServers : (depth > 4 ? [] : [""]));
  out.ipv6AddressPreferredLeaseTime = (i.ipv6AddressPreferredLeaseTime !== undefined ? i.ipv6AddressPreferredLeaseTime : "");
  out.netbiosNameServers = (i.netbiosNameServers !== undefined ? i.netbiosNameServers : (depth > 4 ? [] : [""]));
  out.netbiosNodeType = (i.netbiosNodeType !== undefined ? i.netbiosNodeType : "");
  out.ntpServers = (i.ntpServers !== undefined ? i.ntpServers : (depth > 4 ? [] : [""]));
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcDhcpOptionsAssociation:VpcDhcpOptionsAssociation
export function VpcDhcpOptionsAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dhcpOptionsId = (i.dhcpOptionsId !== undefined ? i.dhcpOptionsId : h.id(ctx, "dhcpOptionsId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcEndpoint:VpcEndpoint
export function VpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoAccept = (i.autoAccept !== undefined ? i.autoAccept : false);
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpcEndpointDnsEntry(ctx, depth + 1))]);
  out.dnsOptions = (i.dnsOptions !== undefined ? i.dnsOptions : (depth > 4 ? {} : T_ec2.ec2_VpcEndpointDnsOptions(ctx, depth + 1)));
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.prefixListId = h.id(ctx, "prefixListId");
  out.privateDnsEnabled = (i.privateDnsEnabled !== undefined ? i.privateDnsEnabled : false);
  out.requesterManaged = false;
  out.resourceConfigurationArn = (i.resourceConfigurationArn !== undefined ? i.resourceConfigurationArn : h.arn(ctx));
  out.routeTableIds = (i.routeTableIds !== undefined ? i.routeTableIds : (depth > 4 ? [] : [""]));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.serviceNetworkArn = (i.serviceNetworkArn !== undefined ? i.serviceNetworkArn : h.arn(ctx));
  out.serviceRegion = (i.serviceRegion !== undefined ? i.serviceRegion : "");
  out.state = "active";
  out.subnetConfigurations = (i.subnetConfigurations !== undefined ? i.subnetConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpcEndpointSubnetConfiguration(ctx, depth + 1))]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcEndpointType = (i.vpcEndpointType !== undefined ? i.vpcEndpointType : "");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcEndpointConnectionAccepter:VpcEndpointConnectionAccepter
export function VpcEndpointConnectionAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  out.vpcEndpointServiceId = (i.vpcEndpointServiceId !== undefined ? i.vpcEndpointServiceId : h.id(ctx, "vpcEndpointServiceId"));
  out.vpcEndpointState = "";
  return out;
}

// aws:ec2/vpcEndpointConnectionNotification:VpcEndpointConnectionNotification
export function VpcEndpointConnectionNotification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionEvents = (i.connectionEvents !== undefined ? i.connectionEvents : (depth > 4 ? [] : [""]));
  out.connectionNotificationArn = (i.connectionNotificationArn !== undefined ? i.connectionNotificationArn : h.arn(ctx));
  out.notificationType = "";
  out.state = "active";
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  out.vpcEndpointServiceId = (i.vpcEndpointServiceId !== undefined ? i.vpcEndpointServiceId : h.id(ctx, "vpcEndpointServiceId"));
  return out;
}

// aws:ec2/vpcEndpointPolicy:VpcEndpointPolicy
export function VpcEndpointPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:ec2/vpcEndpointRouteTableAssociation:VpcEndpointRouteTableAssociation
export function VpcEndpointRouteTableAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:ec2/vpcEndpointService:VpcEndpointService
export function VpcEndpointService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptanceRequired = (i.acceptanceRequired !== undefined ? i.acceptanceRequired : false);
  out.allowedPrincipals = (i.allowedPrincipals !== undefined ? i.allowedPrincipals : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.baseEndpointDnsNames = (depth > 4 ? [] : [""]);
  out.gatewayLoadBalancerArns = (i.gatewayLoadBalancerArns !== undefined ? i.gatewayLoadBalancerArns : (depth > 4 ? [] : [""]));
  out.managesVpcEndpoints = false;
  out.networkLoadBalancerArns = (i.networkLoadBalancerArns !== undefined ? i.networkLoadBalancerArns : (depth > 4 ? [] : [""]));
  out.privateDnsName = (i.privateDnsName !== undefined ? i.privateDnsName : "");
  out.privateDnsNameConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpcEndpointServicePrivateDnsNameConfiguration(ctx, depth + 1))]);
  out.serviceName = "";
  out.serviceType = "";
  out.state = "active";
  out.supportedIpAddressTypes = (i.supportedIpAddressTypes !== undefined ? i.supportedIpAddressTypes : (depth > 4 ? [] : [""]));
  out.supportedRegions = (i.supportedRegions !== undefined ? i.supportedRegions : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcEndpointServiceAllowedPrinciple:VpcEndpointServiceAllowedPrinciple
export function VpcEndpointServiceAllowedPrinciple(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.principalArn = (i.principalArn !== undefined ? i.principalArn : h.arn(ctx));
  out.vpcEndpointServiceId = (i.vpcEndpointServiceId !== undefined ? i.vpcEndpointServiceId : h.id(ctx, "vpcEndpointServiceId"));
  return out;
}

// aws:ec2/vpcEndpointSubnetAssociation:VpcEndpointSubnetAssociation
export function VpcEndpointSubnetAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:ec2/vpcIpam:VpcIpam
export function VpcIpam(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cascade = (i.cascade !== undefined ? i.cascade : false);
  out.defaultResourceDiscoveryAssociationId = h.id(ctx, "defaultResourceDiscoveryAssociationId");
  out.defaultResourceDiscoveryId = h.id(ctx, "defaultResourceDiscoveryId");
  out.description = (i.description !== undefined ? i.description : "");
  out.enablePrivateGua = (i.enablePrivateGua !== undefined ? i.enablePrivateGua : true);
  out.operatingRegions = (i.operatingRegions !== undefined ? i.operatingRegions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpcIpamOperatingRegion(ctx, depth + 1))]));
  out.privateDefaultScopeId = h.id(ctx, "privateDefaultScopeId");
  out.publicDefaultScopeId = h.id(ctx, "publicDefaultScopeId");
  out.scopeCount = 1;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tier = (i.tier !== undefined ? i.tier : "");
  return out;
}

// aws:ec2/vpcIpamOrganizationAdminAccount:VpcIpamOrganizationAdminAccount
export function VpcIpamOrganizationAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.delegatedAdminAccountId = (i.delegatedAdminAccountId !== undefined ? i.delegatedAdminAccountId : h.id(ctx, "delegatedAdminAccountId"));
  out.email = "";
  out.name = ctx.name;
  out.servicePrincipal = "";
  return out;
}

// aws:ec2/vpcIpamPool:VpcIpamPool
export function VpcIpamPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = (i.addressFamily !== undefined ? i.addressFamily : "");
  out.allocationDefaultNetmaskLength = (i.allocationDefaultNetmaskLength !== undefined ? i.allocationDefaultNetmaskLength : 0);
  out.allocationMaxNetmaskLength = (i.allocationMaxNetmaskLength !== undefined ? i.allocationMaxNetmaskLength : 0);
  out.allocationMinNetmaskLength = (i.allocationMinNetmaskLength !== undefined ? i.allocationMinNetmaskLength : 0);
  out.allocationResourceTags = (i.allocationResourceTags !== undefined ? i.allocationResourceTags : {});
  out.arn = h.arn(ctx);
  out.autoImport = (i.autoImport !== undefined ? i.autoImport : false);
  out.awsService = (i.awsService !== undefined ? i.awsService : "");
  out.cascade = (i.cascade !== undefined ? i.cascade : false);
  out.description = (i.description !== undefined ? i.description : "");
  out.ipamScopeId = (i.ipamScopeId !== undefined ? i.ipamScopeId : h.id(ctx, "ipamScopeId"));
  out.ipamScopeType = "";
  out.locale = (i.locale !== undefined ? i.locale : "");
  out.poolDepth = 0;
  out.publicIpSource = (i.publicIpSource !== undefined ? i.publicIpSource : "");
  out.publiclyAdvertisable = (i.publiclyAdvertisable !== undefined ? i.publiclyAdvertisable : false);
  out.sourceIpamPoolId = (i.sourceIpamPoolId !== undefined ? i.sourceIpamPoolId : h.id(ctx, "sourceIpamPoolId"));
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcIpamPoolCidr:VpcIpamPoolCidr
export function VpcIpamPoolCidr(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = (i.cidr !== undefined ? i.cidr : "10.0.0.0/16");
  out.cidrAuthorizationContext = (i.cidrAuthorizationContext !== undefined ? i.cidrAuthorizationContext : (depth > 4 ? {} : T_ec2.ec2_VpcIpamPoolCidrCidrAuthorizationContext(ctx, depth + 1)));
  out.ipamPoolCidrId = h.id(ctx, "ipamPoolCidrId");
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.netmaskLength = (i.netmaskLength !== undefined ? i.netmaskLength : 0);
  return out;
}

// aws:ec2/vpcIpamPoolCidrAllocation:VpcIpamPoolCidrAllocation
export function VpcIpamPoolCidrAllocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = (i.cidr !== undefined ? i.cidr : "10.0.0.0/16");
  out.description = (i.description !== undefined ? i.description : "");
  out.disallowedCidrs = (i.disallowedCidrs !== undefined ? i.disallowedCidrs : (depth > 4 ? [] : [""]));
  out.ipamPoolAllocationId = h.id(ctx, "ipamPoolAllocationId");
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.netmaskLength = (i.netmaskLength !== undefined ? i.netmaskLength : 0);
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceOwner = "";
  out.resourceType = "";
  return out;
}

// aws:ec2/vpcIpamPreviewNextCidr:VpcIpamPreviewNextCidr
export function VpcIpamPreviewNextCidr(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.disallowedCidrs = (i.disallowedCidrs !== undefined ? i.disallowedCidrs : (depth > 4 ? [] : [""]));
  out.ipamPoolId = (i.ipamPoolId !== undefined ? i.ipamPoolId : h.id(ctx, "ipamPoolId"));
  out.netmaskLength = (i.netmaskLength !== undefined ? i.netmaskLength : 0);
  return out;
}

// aws:ec2/vpcIpamResourceDiscovery:VpcIpamResourceDiscovery
export function VpcIpamResourceDiscovery(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.ipamResourceDiscoveryRegion = "";
  out.isDefault = true;
  out.operatingRegions = (i.operatingRegions !== undefined ? i.operatingRegions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpcIpamResourceDiscoveryOperatingRegion(ctx, depth + 1))]));
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcIpamResourceDiscoveryAssociation:VpcIpamResourceDiscoveryAssociation
export function VpcIpamResourceDiscoveryAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipamArn = h.arn(ctx);
  out.ipamId = (i.ipamId !== undefined ? i.ipamId : h.id(ctx, "ipamId"));
  out.ipamRegion = "";
  out.ipamResourceDiscoveryId = (i.ipamResourceDiscoveryId !== undefined ? i.ipamResourceDiscoveryId : h.id(ctx, "ipamResourceDiscoveryId"));
  out.isDefault = true;
  out.ownerId = ctx.accountId;
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcIpamScope:VpcIpamScope
export function VpcIpamScope(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.ipamArn = h.arn(ctx);
  out.ipamId = (i.ipamId !== undefined ? i.ipamId : h.id(ctx, "ipamId"));
  out.ipamScopeType = "";
  out.isDefault = true;
  out.poolCount = 1;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ec2/vpcIpv4CidrBlockAssociation:VpcIpv4CidrBlockAssociation
export function VpcIpv4CidrBlockAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = (i.cidrBlock !== undefined ? i.cidrBlock : "10.0.0.0/16");
  out.ipv4IpamPoolId = (i.ipv4IpamPoolId !== undefined ? i.ipv4IpamPoolId : h.id(ctx, "ipv4IpamPoolId"));
  out.ipv4NetmaskLength = (i.ipv4NetmaskLength !== undefined ? i.ipv4NetmaskLength : 0);
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcIpv6CidrBlockAssociation:VpcIpv6CidrBlockAssociation
export function VpcIpv6CidrBlockAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignGeneratedIpv6CidrBlock = (i.assignGeneratedIpv6CidrBlock !== undefined ? i.assignGeneratedIpv6CidrBlock : false);
  out.ipSource = "";
  out.ipv6AddressAttribute = "";
  out.ipv6CidrBlock = (i.ipv6CidrBlock !== undefined ? i.ipv6CidrBlock : "");
  out.ipv6IpamPoolId = (i.ipv6IpamPoolId !== undefined ? i.ipv6IpamPoolId : h.id(ctx, "ipv6IpamPoolId"));
  out.ipv6NetmaskLength = (i.ipv6NetmaskLength !== undefined ? i.ipv6NetmaskLength : 0);
  out.ipv6Pool = (i.ipv6Pool !== undefined ? i.ipv6Pool : "");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcNetworkPerformanceMetricSubscription:VpcNetworkPerformanceMetricSubscription
export function VpcNetworkPerformanceMetricSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (i.destination !== undefined ? i.destination : "");
  out.metric = (i.metric !== undefined ? i.metric : "");
  out.period = "";
  out.source = (i.source !== undefined ? i.source : "");
  out.statistic = (i.statistic !== undefined ? i.statistic : "");
  return out;
}

// aws:ec2/vpcPeeringConnection:VpcPeeringConnection
export function VpcPeeringConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptStatus = "";
  out.accepter = (i.accepter !== undefined ? i.accepter : (depth > 4 ? {} : T_ec2.ec2_VpcPeeringConnectionAccepter(ctx, depth + 1)));
  out.autoAccept = (i.autoAccept !== undefined ? i.autoAccept : false);
  out.peerOwnerId = (i.peerOwnerId !== undefined ? i.peerOwnerId : h.id(ctx, "peerOwnerId"));
  out.peerRegion = (i.peerRegion !== undefined ? i.peerRegion : "");
  out.peerVpcId = (i.peerVpcId !== undefined ? i.peerVpcId : h.id(ctx, "peerVpcId"));
  out.requester = (i.requester !== undefined ? i.requester : (depth > 4 ? {} : T_ec2.ec2_VpcPeeringConnectionRequester(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpcPeeringConnectionAccepter:VpcPeeringConnectionAccepter
export function VpcPeeringConnectionAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptStatus = "";
  out.accepter = (i.accepter !== undefined ? i.accepter : (depth > 4 ? {} : T_ec2.ec2_VpcPeeringConnectionAccepterAccepter(ctx, depth + 1)));
  out.autoAccept = (i.autoAccept !== undefined ? i.autoAccept : false);
  out.peerOwnerId = h.id(ctx, "peerOwnerId");
  out.peerRegion = "";
  out.peerVpcId = h.id(ctx, "peerVpcId");
  out.requester = (i.requester !== undefined ? i.requester : (depth > 4 ? {} : T_ec2.ec2_VpcPeeringConnectionAccepterRequester(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcPeeringConnectionId = (i.vpcPeeringConnectionId !== undefined ? i.vpcPeeringConnectionId : h.id(ctx, "vpcPeeringConnectionId"));
  return out;
}

// aws:ec2/vpnConnection:VpnConnection
export function VpnConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.coreNetworkArn = h.arn(ctx);
  out.coreNetworkAttachmentArn = h.arn(ctx);
  out.customerGatewayConfiguration = "";
  out.customerGatewayId = (i.customerGatewayId !== undefined ? i.customerGatewayId : h.id(ctx, "customerGatewayId"));
  out.enableAcceleration = (i.enableAcceleration !== undefined ? i.enableAcceleration : true);
  out.localIpv4NetworkCidr = (i.localIpv4NetworkCidr !== undefined ? i.localIpv4NetworkCidr : "");
  out.localIpv6NetworkCidr = (i.localIpv6NetworkCidr !== undefined ? i.localIpv6NetworkCidr : "");
  out.outsideIpAddressType = (i.outsideIpAddressType !== undefined ? i.outsideIpAddressType : "");
  out.presharedKeyArn = h.arn(ctx);
  out.presharedKeyStorage = (i.presharedKeyStorage !== undefined ? i.presharedKeyStorage : "");
  out.remoteIpv4NetworkCidr = (i.remoteIpv4NetworkCidr !== undefined ? i.remoteIpv4NetworkCidr : "");
  out.remoteIpv6NetworkCidr = (i.remoteIpv6NetworkCidr !== undefined ? i.remoteIpv6NetworkCidr : "");
  out.routes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpnConnectionRoute(ctx, depth + 1))]);
  out.staticRoutesOnly = (i.staticRoutesOnly !== undefined ? i.staticRoutesOnly : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.transitGatewayAttachmentId = h.id(ctx, "transitGatewayAttachmentId");
  out.transitGatewayId = (i.transitGatewayId !== undefined ? i.transitGatewayId : h.id(ctx, "transitGatewayId"));
  out.transportTransitGatewayAttachmentId = (i.transportTransitGatewayAttachmentId !== undefined ? i.transportTransitGatewayAttachmentId : h.id(ctx, "transportTransitGatewayAttachmentId"));
  out.tunnel1Address = "";
  out.tunnel1BgpAsn = "";
  out.tunnel1BgpHoldtime = 0;
  out.tunnel1CgwInsideAddress = "";
  out.tunnel1DpdTimeoutAction = (i.tunnel1DpdTimeoutAction !== undefined ? i.tunnel1DpdTimeoutAction : "");
  out.tunnel1DpdTimeoutSeconds = (i.tunnel1DpdTimeoutSeconds !== undefined ? i.tunnel1DpdTimeoutSeconds : 30);
  out.tunnel1EnableTunnelLifecycleControl = (i.tunnel1EnableTunnelLifecycleControl !== undefined ? i.tunnel1EnableTunnelLifecycleControl : false);
  out.tunnel1IkeVersions = (i.tunnel1IkeVersions !== undefined ? i.tunnel1IkeVersions : (depth > 4 ? [] : [""]));
  out.tunnel1InsideCidr = (i.tunnel1InsideCidr !== undefined ? i.tunnel1InsideCidr : "");
  out.tunnel1InsideIpv6Cidr = (i.tunnel1InsideIpv6Cidr !== undefined ? i.tunnel1InsideIpv6Cidr : "");
  out.tunnel1LogOptions = (i.tunnel1LogOptions !== undefined ? i.tunnel1LogOptions : (depth > 4 ? {} : T_ec2.ec2_VpnConnectionTunnel1LogOptions(ctx, depth + 1)));
  out.tunnel1Phase1DhGroupNumbers = (i.tunnel1Phase1DhGroupNumbers !== undefined ? i.tunnel1Phase1DhGroupNumbers : (depth > 4 ? [] : [0]));
  out.tunnel1Phase1EncryptionAlgorithms = (i.tunnel1Phase1EncryptionAlgorithms !== undefined ? i.tunnel1Phase1EncryptionAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel1Phase1IntegrityAlgorithms = (i.tunnel1Phase1IntegrityAlgorithms !== undefined ? i.tunnel1Phase1IntegrityAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel1Phase1LifetimeSeconds = (i.tunnel1Phase1LifetimeSeconds !== undefined ? i.tunnel1Phase1LifetimeSeconds : 0);
  out.tunnel1Phase2DhGroupNumbers = (i.tunnel1Phase2DhGroupNumbers !== undefined ? i.tunnel1Phase2DhGroupNumbers : (depth > 4 ? [] : [0]));
  out.tunnel1Phase2EncryptionAlgorithms = (i.tunnel1Phase2EncryptionAlgorithms !== undefined ? i.tunnel1Phase2EncryptionAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel1Phase2IntegrityAlgorithms = (i.tunnel1Phase2IntegrityAlgorithms !== undefined ? i.tunnel1Phase2IntegrityAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel1Phase2LifetimeSeconds = (i.tunnel1Phase2LifetimeSeconds !== undefined ? i.tunnel1Phase2LifetimeSeconds : 0);
  out.tunnel1PresharedKey = (i.tunnel1PresharedKey !== undefined ? i.tunnel1PresharedKey : "");
  out.tunnel1RekeyFuzzPercentage = (i.tunnel1RekeyFuzzPercentage !== undefined ? i.tunnel1RekeyFuzzPercentage : 0);
  out.tunnel1RekeyMarginTimeSeconds = (i.tunnel1RekeyMarginTimeSeconds !== undefined ? i.tunnel1RekeyMarginTimeSeconds : 0);
  out.tunnel1ReplayWindowSize = (i.tunnel1ReplayWindowSize !== undefined ? i.tunnel1ReplayWindowSize : 8);
  out.tunnel1StartupAction = (i.tunnel1StartupAction !== undefined ? i.tunnel1StartupAction : "");
  out.tunnel1VgwInsideAddress = "";
  out.tunnel2Address = "";
  out.tunnel2BgpAsn = "";
  out.tunnel2BgpHoldtime = 0;
  out.tunnel2CgwInsideAddress = "";
  out.tunnel2DpdTimeoutAction = (i.tunnel2DpdTimeoutAction !== undefined ? i.tunnel2DpdTimeoutAction : "");
  out.tunnel2DpdTimeoutSeconds = (i.tunnel2DpdTimeoutSeconds !== undefined ? i.tunnel2DpdTimeoutSeconds : 30);
  out.tunnel2EnableTunnelLifecycleControl = (i.tunnel2EnableTunnelLifecycleControl !== undefined ? i.tunnel2EnableTunnelLifecycleControl : false);
  out.tunnel2IkeVersions = (i.tunnel2IkeVersions !== undefined ? i.tunnel2IkeVersions : (depth > 4 ? [] : [""]));
  out.tunnel2InsideCidr = (i.tunnel2InsideCidr !== undefined ? i.tunnel2InsideCidr : "");
  out.tunnel2InsideIpv6Cidr = (i.tunnel2InsideIpv6Cidr !== undefined ? i.tunnel2InsideIpv6Cidr : "");
  out.tunnel2LogOptions = (i.tunnel2LogOptions !== undefined ? i.tunnel2LogOptions : (depth > 4 ? {} : T_ec2.ec2_VpnConnectionTunnel2LogOptions(ctx, depth + 1)));
  out.tunnel2Phase1DhGroupNumbers = (i.tunnel2Phase1DhGroupNumbers !== undefined ? i.tunnel2Phase1DhGroupNumbers : (depth > 4 ? [] : [0]));
  out.tunnel2Phase1EncryptionAlgorithms = (i.tunnel2Phase1EncryptionAlgorithms !== undefined ? i.tunnel2Phase1EncryptionAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel2Phase1IntegrityAlgorithms = (i.tunnel2Phase1IntegrityAlgorithms !== undefined ? i.tunnel2Phase1IntegrityAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel2Phase1LifetimeSeconds = (i.tunnel2Phase1LifetimeSeconds !== undefined ? i.tunnel2Phase1LifetimeSeconds : 0);
  out.tunnel2Phase2DhGroupNumbers = (i.tunnel2Phase2DhGroupNumbers !== undefined ? i.tunnel2Phase2DhGroupNumbers : (depth > 4 ? [] : [0]));
  out.tunnel2Phase2EncryptionAlgorithms = (i.tunnel2Phase2EncryptionAlgorithms !== undefined ? i.tunnel2Phase2EncryptionAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel2Phase2IntegrityAlgorithms = (i.tunnel2Phase2IntegrityAlgorithms !== undefined ? i.tunnel2Phase2IntegrityAlgorithms : (depth > 4 ? [] : [""]));
  out.tunnel2Phase2LifetimeSeconds = (i.tunnel2Phase2LifetimeSeconds !== undefined ? i.tunnel2Phase2LifetimeSeconds : 0);
  out.tunnel2PresharedKey = (i.tunnel2PresharedKey !== undefined ? i.tunnel2PresharedKey : "");
  out.tunnel2RekeyFuzzPercentage = (i.tunnel2RekeyFuzzPercentage !== undefined ? i.tunnel2RekeyFuzzPercentage : 0);
  out.tunnel2RekeyMarginTimeSeconds = (i.tunnel2RekeyMarginTimeSeconds !== undefined ? i.tunnel2RekeyMarginTimeSeconds : 0);
  out.tunnel2ReplayWindowSize = (i.tunnel2ReplayWindowSize !== undefined ? i.tunnel2ReplayWindowSize : 8);
  out.tunnel2StartupAction = (i.tunnel2StartupAction !== undefined ? i.tunnel2StartupAction : "");
  out.tunnel2VgwInsideAddress = "";
  out.tunnelInsideIpVersion = (i.tunnelInsideIpVersion !== undefined ? i.tunnelInsideIpVersion : "");
  out.type = (i.type !== undefined ? i.type : "");
  out.vgwTelemetries = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_VpnConnectionVgwTelemetry(ctx, depth + 1))]);
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// aws:ec2/vpnConnectionRoute:VpnConnectionRoute
export function VpnConnectionRoute(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidrBlock = (i.destinationCidrBlock !== undefined ? i.destinationCidrBlock : "");
  out.vpnConnectionId = (i.vpnConnectionId !== undefined ? i.vpnConnectionId : h.id(ctx, "vpnConnectionId"));
  return out;
}

// aws:ec2/vpnGateway:VpnGateway
export function VpnGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonSideAsn = (i.amazonSideAsn !== undefined ? i.amazonSideAsn : "");
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:ec2/vpnGatewayAttachment:VpnGatewayAttachment
export function VpnGatewayAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// aws:ec2/vpnGatewayRoutePropagation:VpnGatewayRoutePropagation
export function VpnGatewayRoutePropagation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.routeTableId = (i.routeTableId !== undefined ? i.routeTableId : h.id(ctx, "routeTableId"));
  out.vpnGatewayId = (i.vpnGatewayId !== undefined ? i.vpnGatewayId : h.id(ctx, "vpnGatewayId"));
  return out;
}

// GENERATED FILE — do not edit.
// Service: lightsail   (23 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lightsail from "../types/lightsail.js";

// aws:lightsail/bucket:Bucket
export function Bucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.createdAt = h.timestamp();
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.region = ctx.region;
  out.supportCode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:lightsail/bucketAccessKey:BucketAccessKey
export function BucketAccessKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKeyId = h.id(ctx, "accessKeyId");
  out.bucketName = (i.bucketName !== undefined ? i.bucketName : ctx.name);
  out.createdAt = h.timestamp();
  out.secretAccessKey = "";
  out.status = "active";
  return out;
}

// aws:lightsail/bucketResourceAccess:BucketResourceAccess
export function BucketResourceAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = (i.bucketName !== undefined ? i.bucketName : ctx.name);
  out.resourceName = (i.resourceName !== undefined ? i.resourceName : "");
  return out;
}

// aws:lightsail/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainValidationOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_CertificateDomainValidationOption(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subjectAlternativeNames = (i.subjectAlternativeNames !== undefined ? i.subjectAlternativeNames : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/containerService:ContainerService
export function ContainerService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.createdAt = h.timestamp();
  out.isDisabled = (i.isDisabled !== undefined ? i.isDisabled : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.power = (i.power !== undefined ? i.power : "");
  out.powerId = h.id(ctx, "powerId");
  out.principalArn = h.arn(ctx);
  out.privateDomainName = h.endpoint(ctx, "privateDomainName");
  out.privateRegistryAccess = (i.privateRegistryAccess !== undefined ? i.privateRegistryAccess : (depth > 4 ? {} : T_lightsail.lightsail_ContainerServicePrivateRegistryAccess(ctx, depth + 1)));
  out.publicDomainNames = (i.publicDomainNames !== undefined ? i.publicDomainNames : (depth > 4 ? {} : T_lightsail.lightsail_ContainerServicePublicDomainNames(ctx, depth + 1)));
  out.resourceType = "";
  out.scale = (i.scale !== undefined ? i.scale : 0);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:lightsail/containerServiceDeploymentVersion:ContainerServiceDeploymentVersion
export function ContainerServiceDeploymentVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containers = (i.containers !== undefined ? i.containers : (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_ContainerServiceDeploymentVersionContainer(ctx, depth + 1))]));
  out.createdAt = h.timestamp();
  out.publicEndpoint = (i.publicEndpoint !== undefined ? i.publicEndpoint : (depth > 4 ? {} : T_lightsail.lightsail_ContainerServiceDeploymentVersionPublicEndpoint(ctx, depth + 1)));
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.state = "active";
  out.version = 0;
  return out;
}

// aws:lightsail/database:Database
export function Database(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.backupRetentionEnabled = (i.backupRetentionEnabled !== undefined ? i.backupRetentionEnabled : false);
  out.blueprintId = (i.blueprintId !== undefined ? i.blueprintId : h.id(ctx, "blueprintId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.caCertificateIdentifier = "";
  out.cpuCount = 1;
  out.createdAt = h.timestamp();
  out.diskSize = 8;
  out.engine = "";
  out.engineVersion = "";
  out.finalSnapshotName = (i.finalSnapshotName !== undefined ? i.finalSnapshotName : "");
  out.masterDatabaseName = (i.masterDatabaseName !== undefined ? i.masterDatabaseName : "");
  out.masterEndpointAddress = "";
  out.masterEndpointPort = 443;
  out.masterPassword = (i.masterPassword !== undefined ? i.masterPassword : "");
  out.masterUsername = (i.masterUsername !== undefined ? i.masterUsername : "");
  out.preferredBackupWindow = (i.preferredBackupWindow !== undefined ? i.preferredBackupWindow : "");
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.ramSize = 8;
  out.relationalDatabaseName = (i.relationalDatabaseName !== undefined ? i.relationalDatabaseName : "");
  out.secondaryAvailabilityZone = ctx.region + "a";
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.supportCode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/disk:Disk
export function Disk(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.createdAt = h.timestamp();
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sizeInGb = (i.sizeInGb !== undefined ? i.sizeInGb : 8);
  out.supportCode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/disk_attachment:Disk_attachment
export function Disk_attachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskName = (i.diskName !== undefined ? i.diskName : "");
  out.diskPath = (i.diskPath !== undefined ? i.diskPath : "");
  out.instanceName = (i.instanceName !== undefined ? i.instanceName : "");
  return out;
}

// aws:lightsail/distribution:Distribution
export function Distribution(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alternativeDomainNames = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.cacheBehaviorSettings = (i.cacheBehaviorSettings !== undefined ? i.cacheBehaviorSettings : (depth > 4 ? {} : T_lightsail.lightsail_DistributionCacheBehaviorSettings(ctx, depth + 1)));
  out.cacheBehaviors = (i.cacheBehaviors !== undefined ? i.cacheBehaviors : (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_DistributionCacheBehavior(ctx, depth + 1))]));
  out.certificateName = (i.certificateName !== undefined ? i.certificateName : "");
  out.createdAt = h.timestamp();
  out.defaultCacheBehavior = (i.defaultCacheBehavior !== undefined ? i.defaultCacheBehavior : (depth > 4 ? {} : T_lightsail.lightsail_DistributionDefaultCacheBehavior(ctx, depth + 1)));
  out.domainName = h.endpoint(ctx, "domainName");
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.isEnabled = (i.isEnabled !== undefined ? i.isEnabled : true);
  out.locations = (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_DistributionLocation(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.origin = (i.origin !== undefined ? i.origin : (depth > 4 ? {} : T_lightsail.lightsail_DistributionOrigin(ctx, depth + 1)));
  out.originPublicDns = "";
  out.resourceType = "";
  out.status = "active";
  out.supportCode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

// aws:lightsail/domainEntry:DomainEntry
export function DomainEntry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.isAlias = (i.isAlias !== undefined ? i.isAlias : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.target = (i.target !== undefined ? i.target : "");
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:lightsail/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addOn = (i.addOn !== undefined ? i.addOn : (depth > 4 ? {} : T_lightsail.lightsail_InstanceAddOn(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.blueprintId = (i.blueprintId !== undefined ? i.blueprintId : h.id(ctx, "blueprintId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.cpuCount = 1;
  out.createdAt = h.timestamp();
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.isStaticIp = true;
  out.keyPairName = (i.keyPairName !== undefined ? i.keyPairName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.privateIpAddress = "10.0.0.10";
  out.publicIpAddress = "54.0.0.10";
  out.ramSize = 8;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userData = (i.userData !== undefined ? i.userData : "");
  out.username = "";
  return out;
}

// aws:lightsail/instancePublicPorts:InstancePublicPorts
export function InstancePublicPorts(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceName = (i.instanceName !== undefined ? i.instanceName : "");
  out.portInfos = (i.portInfos !== undefined ? i.portInfos : (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_InstancePublicPortsPortInfo(ctx, depth + 1))]));
  return out;
}

// aws:lightsail/keyPair:KeyPair
export function KeyPair(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.encryptedFingerprint = "";
  out.encryptedPrivateKey = "";
  out.fingerprint = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.pgpKey = (i.pgpKey !== undefined ? i.pgpKey : "");
  out.privateKey = "";
  out.publicKey = (i.publicKey !== undefined ? i.publicKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/lb:Lb
export function Lb(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.healthCheckPath = (i.healthCheckPath !== undefined ? i.healthCheckPath : "");
  out.instancePort = (i.instancePort !== undefined ? i.instancePort : 443);
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.protocol = "";
  out.publicPorts = (depth > 4 ? [] : [443]);
  out.supportCode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:lightsail/lbAttachment:LbAttachment
export function LbAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceName = (i.instanceName !== undefined ? i.instanceName : "");
  out.lbName = (i.lbName !== undefined ? i.lbName : "");
  return out;
}

// aws:lightsail/lbCertificate:LbCertificate
export function LbCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.domainValidationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_LbCertificateDomainValidationRecord(ctx, depth + 1))]);
  out.lbName = (i.lbName !== undefined ? i.lbName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subjectAlternativeNames = (i.subjectAlternativeNames !== undefined ? i.subjectAlternativeNames : (depth > 4 ? [] : [""]));
  out.supportCode = "";
  return out;
}

// aws:lightsail/lbCertificateAttachment:LbCertificateAttachment
export function LbCertificateAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateName = (i.certificateName !== undefined ? i.certificateName : "");
  out.lbName = (i.lbName !== undefined ? i.lbName : "");
  return out;
}

// aws:lightsail/lbHttpsRedirectionPolicy:LbHttpsRedirectionPolicy
export function LbHttpsRedirectionPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.lbName = (i.lbName !== undefined ? i.lbName : "");
  return out;
}

// aws:lightsail/lbStickinessPolicy:LbStickinessPolicy
export function LbStickinessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieDuration = (i.cookieDuration !== undefined ? i.cookieDuration : 0);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.lbName = (i.lbName !== undefined ? i.lbName : "");
  return out;
}

// aws:lightsail/staticIp:StaticIp
export function StaticIp(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipAddress = "10.0.0.10";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.supportCode = "";
  return out;
}

// aws:lightsail/staticIpAttachment:StaticIpAttachment
export function StaticIpAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceName = (i.instanceName !== undefined ? i.instanceName : "");
  out.ipAddress = "10.0.0.10";
  out.staticIpName = (i.staticIpName !== undefined ? i.staticIpName : "");
  return out;
}

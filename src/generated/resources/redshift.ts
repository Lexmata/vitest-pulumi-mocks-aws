// GENERATED FILE — do not edit.
// Service: redshift   (23 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshift from "../types/redshift.js";

// aws:redshift/authenticationProfile:AuthenticationProfile
export function AuthenticationProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationProfileContent = (i.authenticationProfileContent !== undefined ? i.authenticationProfileContent : "");
  out.authenticationProfileName = (i.authenticationProfileName !== undefined ? i.authenticationProfileName : "");
  return out;
}

// aws:redshift/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowVersionUpgrade = (i.allowVersionUpgrade !== undefined ? i.allowVersionUpgrade : true);
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.aquaConfigurationStatus = (i.aquaConfigurationStatus !== undefined ? i.aquaConfigurationStatus : "");
  out.arn = h.arn(ctx);
  out.automatedSnapshotRetentionPeriod = (i.automatedSnapshotRetentionPeriod !== undefined ? i.automatedSnapshotRetentionPeriod : 0);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.availabilityZoneRelocationEnabled = (i.availabilityZoneRelocationEnabled !== undefined ? i.availabilityZoneRelocationEnabled : false);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.clusterNamespaceArn = h.arn(ctx);
  out.clusterNodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_ClusterClusterNode(ctx, depth + 1))]);
  out.clusterParameterGroupName = (i.clusterParameterGroupName !== undefined ? i.clusterParameterGroupName : "");
  out.clusterPublicKey = (i.clusterPublicKey !== undefined ? i.clusterPublicKey : "");
  out.clusterRevisionNumber = (i.clusterRevisionNumber !== undefined ? i.clusterRevisionNumber : "");
  out.clusterSubnetGroupName = (i.clusterSubnetGroupName !== undefined ? i.clusterSubnetGroupName : "");
  out.clusterType = (i.clusterType !== undefined ? i.clusterType : "");
  out.clusterVersion = (i.clusterVersion !== undefined ? i.clusterVersion : "");
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.defaultIamRoleArn = (i.defaultIamRoleArn !== undefined ? i.defaultIamRoleArn : h.arn(ctx));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.elasticIp = (i.elasticIp !== undefined ? i.elasticIp : "");
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.endpoint = (i.endpoint !== undefined ? i.endpoint : h.endpoint(ctx, "endpoint"));
  out.enhancedVpcRouting = (i.enhancedVpcRouting !== undefined ? i.enhancedVpcRouting : false);
  out.finalSnapshotIdentifier = (i.finalSnapshotIdentifier !== undefined ? i.finalSnapshotIdentifier : "");
  out.iamRoles = (i.iamRoles !== undefined ? i.iamRoles : (depth > 4 ? [] : [""]));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logging = (i.logging !== undefined ? i.logging : (depth > 4 ? {} : T_redshift.redshift_ClusterLogging(ctx, depth + 1)));
  out.maintenanceTrackName = (i.maintenanceTrackName !== undefined ? i.maintenanceTrackName : "");
  out.manageMasterPassword = (i.manageMasterPassword !== undefined ? i.manageMasterPassword : false);
  out.manualSnapshotRetentionPeriod = (i.manualSnapshotRetentionPeriod !== undefined ? i.manualSnapshotRetentionPeriod : 0);
  out.masterPassword = (i.masterPassword !== undefined ? i.masterPassword : "");
  out.masterPasswordSecretArn = h.arn(ctx);
  out.masterPasswordSecretKmsKeyId = (i.masterPasswordSecretKmsKeyId !== undefined ? i.masterPasswordSecretKmsKeyId : h.id(ctx, "masterPasswordSecretKmsKeyId"));
  out.masterUsername = (i.masterUsername !== undefined ? i.masterUsername : "");
  out.multiAz = (i.multiAz !== undefined ? i.multiAz : false);
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.numberOfNodes = (i.numberOfNodes !== undefined ? i.numberOfNodes : 0);
  out.ownerAccount = (i.ownerAccount !== undefined ? i.ownerAccount : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.skipFinalSnapshot = (i.skipFinalSnapshot !== undefined ? i.skipFinalSnapshot : false);
  out.snapshotArn = (i.snapshotArn !== undefined ? i.snapshotArn : h.arn(ctx));
  out.snapshotClusterIdentifier = (i.snapshotClusterIdentifier !== undefined ? i.snapshotClusterIdentifier : "");
  out.snapshotCopy = (i.snapshotCopy !== undefined ? i.snapshotCopy : (depth > 4 ? {} : T_redshift.redshift_ClusterSnapshotCopy(ctx, depth + 1)));
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:redshift/clusterIamRoles:ClusterIamRoles
export function ClusterIamRoles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.defaultIamRoleArn = (i.defaultIamRoleArn !== undefined ? i.defaultIamRoleArn : h.arn(ctx));
  out.iamRoleArns = (i.iamRoleArns !== undefined ? i.iamRoleArns : (depth > 4 ? [] : [""]));
  return out;
}

// aws:redshift/clusterSnapshot:ClusterSnapshot
export function ClusterSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.manualSnapshotRetentionPeriod = (i.manualSnapshotRetentionPeriod !== undefined ? i.manualSnapshotRetentionPeriod : 0);
  out.ownerAccount = "";
  out.snapshotIdentifier = (i.snapshotIdentifier !== undefined ? i.snapshotIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/dataShareAuthorization:DataShareAuthorization
export function DataShareAuthorization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowWrites = (i.allowWrites !== undefined ? i.allowWrites : true);
  out.consumerIdentifier = (i.consumerIdentifier !== undefined ? i.consumerIdentifier : "");
  out.dataShareArn = (i.dataShareArn !== undefined ? i.dataShareArn : h.arn(ctx));
  out.managedBy = "";
  out.producerArn = h.arn(ctx);
  return out;
}

// aws:redshift/dataShareConsumerAssociation:DataShareConsumerAssociation
export function DataShareConsumerAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowWrites = (i.allowWrites !== undefined ? i.allowWrites : true);
  out.associateEntireAccount = (i.associateEntireAccount !== undefined ? i.associateEntireAccount : false);
  out.consumerArn = (i.consumerArn !== undefined ? i.consumerArn : h.arn(ctx));
  out.consumerRegion = (i.consumerRegion !== undefined ? i.consumerRegion : "");
  out.dataShareArn = (i.dataShareArn !== undefined ? i.dataShareArn : h.arn(ctx));
  out.managedBy = "";
  out.producerArn = h.arn(ctx);
  return out;
}

// aws:redshift/endpointAccess:EndpointAccess
export function EndpointAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.endpointName = (i.endpointName !== undefined ? i.endpointName : "");
  out.port = 443;
  out.resourceOwner = (i.resourceOwner !== undefined ? i.resourceOwner : "");
  out.subnetGroupName = (i.subnetGroupName !== undefined ? i.subnetGroupName : "");
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_EndpointAccessVpcEndpoint(ctx, depth + 1))]);
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:redshift/endpointAuthorization:EndpointAuthorization
export function EndpointAuthorization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.account = (i.account !== undefined ? i.account : "");
  out.allowedAllVpcs = true;
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.endpointCount = 1;
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.grantee = "";
  out.grantor = "";
  out.vpcIds = (i.vpcIds !== undefined ? i.vpcIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:redshift/eventSubscription:EventSubscription
export function EventSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.customerAwsId = h.id(ctx, "customerAwsId");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.eventCategories = (i.eventCategories !== undefined ? i.eventCategories : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.severity = (i.severity !== undefined ? i.severity : "");
  out.snsTopicArn = (i.snsTopicArn !== undefined ? i.snsTopicArn : h.arn(ctx));
  out.sourceIds = (i.sourceIds !== undefined ? i.sourceIds : (depth > 4 ? [] : [""]));
  out.sourceType = (i.sourceType !== undefined ? i.sourceType : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/hsmClientCertificate:HsmClientCertificate
export function HsmClientCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.hsmClientCertificateIdentifier = (i.hsmClientCertificateIdentifier !== undefined ? i.hsmClientCertificateIdentifier : "");
  out.hsmClientCertificatePublicKey = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/hsmConfiguration:HsmConfiguration
export function HsmConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.hsmConfigurationIdentifier = (i.hsmConfigurationIdentifier !== undefined ? i.hsmConfigurationIdentifier : "");
  out.hsmIpAddress = (i.hsmIpAddress !== undefined ? i.hsmIpAddress : "");
  out.hsmPartitionName = (i.hsmPartitionName !== undefined ? i.hsmPartitionName : "");
  out.hsmPartitionPassword = (i.hsmPartitionPassword !== undefined ? i.hsmPartitionPassword : "");
  out.hsmServerPublicCertificate = (i.hsmServerPublicCertificate !== undefined ? i.hsmServerPublicCertificate : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/integration:Integration
export function Integration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalEncryptionContext = (i.additionalEncryptionContext !== undefined ? i.additionalEncryptionContext : {});
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.integrationName = (i.integrationName !== undefined ? i.integrationName : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_redshift.redshift_IntegrationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:redshift/logging:Logging
export function Logging(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = (i.bucketName !== undefined ? i.bucketName : ctx.name);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.logDestinationType = (i.logDestinationType !== undefined ? i.logDestinationType : "");
  out.logExports = (i.logExports !== undefined ? i.logExports : (depth > 4 ? [] : [""]));
  out.s3KeyPrefix = (i.s3KeyPrefix !== undefined ? i.s3KeyPrefix : "");
  return out;
}

// aws:redshift/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.family = (i.family !== undefined ? i.family : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_ParameterGroupParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/partner:Partner
export function Partner(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.databaseName = (i.databaseName !== undefined ? i.databaseName : "");
  out.partnerName = (i.partnerName !== undefined ? i.partnerName : "");
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:redshift/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:redshift/scheduledAction:ScheduledAction
export function ScheduledAction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.enable = (i.enable !== undefined ? i.enable : true);
  out.endTime = (i.endTime !== undefined ? i.endTime : "");
  out.iamRole = (i.iamRole !== undefined ? i.iamRole : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.startTime = (i.startTime !== undefined ? i.startTime : "");
  out.targetAction = (i.targetAction !== undefined ? i.targetAction : (depth > 4 ? {} : T_redshift.redshift_ScheduledActionTargetAction(ctx, depth + 1)));
  return out;
}

// aws:redshift/snapshotCopy:SnapshotCopy
export function SnapshotCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.destinationRegion = (i.destinationRegion !== undefined ? i.destinationRegion : "");
  out.manualSnapshotRetentionPeriod = (i.manualSnapshotRetentionPeriod !== undefined ? i.manualSnapshotRetentionPeriod : 0);
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : 0);
  out.snapshotCopyGrantName = (i.snapshotCopyGrantName !== undefined ? i.snapshotCopyGrantName : "");
  return out;
}

// aws:redshift/snapshotCopyGrant:SnapshotCopyGrant
export function SnapshotCopyGrant(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.snapshotCopyGrantName = (i.snapshotCopyGrantName !== undefined ? i.snapshotCopyGrantName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/snapshotSchedule:SnapshotSchedule
export function SnapshotSchedule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.definitions = (i.definitions !== undefined ? i.definitions : (depth > 4 ? [] : [""]));
  out.description = (i.description !== undefined ? i.description : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.identifierPrefix = (i.identifierPrefix !== undefined ? i.identifierPrefix : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/snapshotScheduleAssociation:SnapshotScheduleAssociation
export function SnapshotScheduleAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.scheduleIdentifier = (i.scheduleIdentifier !== undefined ? i.scheduleIdentifier : "");
  return out;
}

// aws:redshift/subnetGroup:SubnetGroup
export function SubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshift/usageLimit:UsageLimit
export function UsageLimit(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = (i.amount !== undefined ? i.amount : 0);
  out.arn = h.arn(ctx);
  out.breachAction = (i.breachAction !== undefined ? i.breachAction : "");
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.featureType = (i.featureType !== undefined ? i.featureType : "");
  out.limitType = (i.limitType !== undefined ? i.limitType : "");
  out.period = (i.period !== undefined ? i.period : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

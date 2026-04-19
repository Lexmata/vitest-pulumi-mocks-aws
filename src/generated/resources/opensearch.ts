// GENERATED FILE — do not edit.
// Service: opensearch   (15 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opensearch from "../types/opensearch.js";

// aws:opensearch/authorizeVpcEndpointAccess:AuthorizeVpcEndpointAccess
export function AuthorizeVpcEndpointAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.account = (i.account !== undefined ? i.account : "");
  out.authorizedPrincipals = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_AuthorizeVpcEndpointAccessAuthorizedPrincipal(ctx, depth + 1))]);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

// aws:opensearch/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = (i.accessPolicies !== undefined ? i.accessPolicies : "");
  out.advancedOptions = (i.advancedOptions !== undefined ? i.advancedOptions : {});
  out.advancedSecurityOptions = (i.advancedSecurityOptions !== undefined ? i.advancedSecurityOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainAdvancedSecurityOptions(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.autoTuneOptions = (i.autoTuneOptions !== undefined ? i.autoTuneOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainAutoTuneOptions(ctx, depth + 1)));
  out.clusterConfig = (i.clusterConfig !== undefined ? i.clusterConfig : (depth > 4 ? {} : T_opensearch.opensearch_DomainClusterConfig(ctx, depth + 1)));
  out.cognitoOptions = (i.cognitoOptions !== undefined ? i.cognitoOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainCognitoOptions(ctx, depth + 1)));
  out.dashboardEndpoint = h.endpoint(ctx, "dashboardEndpoint");
  out.dashboardEndpointV2 = "";
  out.domainEndpointOptions = (i.domainEndpointOptions !== undefined ? i.domainEndpointOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainDomainEndpointOptions(ctx, depth + 1)));
  out.domainEndpointV2HostedZoneId = h.id(ctx, "domainEndpointV2HostedZoneId");
  out.domainId = h.id(ctx, "domainId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.ebsOptions = (i.ebsOptions !== undefined ? i.ebsOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainEbsOptions(ctx, depth + 1)));
  out.encryptAtRest = (i.encryptAtRest !== undefined ? i.encryptAtRest : (depth > 4 ? {} : T_opensearch.opensearch_DomainEncryptAtRest(ctx, depth + 1)));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointV2 = "";
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.kibanaEndpoint = h.endpoint(ctx, "kibanaEndpoint");
  out.logPublishingOptions = (i.logPublishingOptions !== undefined ? i.logPublishingOptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_DomainLogPublishingOption(ctx, depth + 1))]));
  out.nodeToNodeEncryption = (i.nodeToNodeEncryption !== undefined ? i.nodeToNodeEncryption : (depth > 4 ? {} : T_opensearch.opensearch_DomainNodeToNodeEncryption(ctx, depth + 1)));
  out.offPeakWindowOptions = (i.offPeakWindowOptions !== undefined ? i.offPeakWindowOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainOffPeakWindowOptions(ctx, depth + 1)));
  out.snapshotOptions = (i.snapshotOptions !== undefined ? i.snapshotOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainSnapshotOptions(ctx, depth + 1)));
  out.softwareUpdateOptions = (i.softwareUpdateOptions !== undefined ? i.softwareUpdateOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainSoftwareUpdateOptions(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcOptions = (i.vpcOptions !== undefined ? i.vpcOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainVpcOptions(ctx, depth + 1)));
  return out;
}

// aws:opensearch/domainPolicy:DomainPolicy
export function DomainPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = (i.accessPolicies !== undefined ? i.accessPolicies : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

// aws:opensearch/domainSamlOptions:DomainSamlOptions
export function DomainSamlOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.samlOptions = (i.samlOptions !== undefined ? i.samlOptions : (depth > 4 ? {} : T_opensearch.opensearch_DomainSamlOptionsSamlOptions(ctx, depth + 1)));
  return out;
}

// aws:opensearch/inboundConnectionAccepter:InboundConnectionAccepter
export function InboundConnectionAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionId = (i.connectionId !== undefined ? i.connectionId : h.id(ctx, "connectionId"));
  out.connectionStatus = "";
  return out;
}

// aws:opensearch/outboundConnection:OutboundConnection
export function OutboundConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptConnection = (i.acceptConnection !== undefined ? i.acceptConnection : false);
  out.connectionAlias = (i.connectionAlias !== undefined ? i.connectionAlias : "");
  out.connectionMode = (i.connectionMode !== undefined ? i.connectionMode : "");
  out.connectionProperties = (i.connectionProperties !== undefined ? i.connectionProperties : (depth > 4 ? {} : T_opensearch.opensearch_OutboundConnectionConnectionProperties(ctx, depth + 1)));
  out.connectionStatus = "";
  out.localDomainInfo = (i.localDomainInfo !== undefined ? i.localDomainInfo : (depth > 4 ? {} : T_opensearch.opensearch_OutboundConnectionLocalDomainInfo(ctx, depth + 1)));
  out.remoteDomainInfo = (i.remoteDomainInfo !== undefined ? i.remoteDomainInfo : (depth > 4 ? {} : T_opensearch.opensearch_OutboundConnectionRemoteDomainInfo(ctx, depth + 1)));
  return out;
}

// aws:opensearch/package:Package
export function Package(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availablePackageVersion = "";
  out.packageDescription = (i.packageDescription !== undefined ? i.packageDescription : "");
  out.packageId = h.id(ctx, "packageId");
  out.packageName = (i.packageName !== undefined ? i.packageName : "");
  out.packageSource = (i.packageSource !== undefined ? i.packageSource : (depth > 4 ? {} : T_opensearch.opensearch_PackagePackageSource(ctx, depth + 1)));
  out.packageType = (i.packageType !== undefined ? i.packageType : "");
  return out;
}

// aws:opensearch/packageAssociation:PackageAssociation
export function PackageAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.packageId = (i.packageId !== undefined ? i.packageId : h.id(ctx, "packageId"));
  out.referencePath = "";
  return out;
}

// aws:opensearch/serverlessAccessPolicy:ServerlessAccessPolicy
export function ServerlessAccessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/serverlessCollection:ServerlessCollection
export function ServerlessCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.collectionEndpoint = h.endpoint(ctx, "collectionEndpoint");
  out.dashboardEndpoint = h.endpoint(ctx, "dashboardEndpoint");
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.standbyReplicas = (i.standbyReplicas !== undefined ? i.standbyReplicas : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_opensearch.opensearch_ServerlessCollectionTimeouts(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/serverlessLifecyclePolicy:ServerlessLifecyclePolicy
export function ServerlessLifecyclePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/serverlessSecurityConfig:ServerlessSecurityConfig
export function ServerlessSecurityConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configVersion = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.samlOptions = (i.samlOptions !== undefined ? i.samlOptions : (depth > 4 ? {} : T_opensearch.opensearch_ServerlessSecurityConfigSamlOptions(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/serverlessSecurityPolicy:ServerlessSecurityPolicy
export function ServerlessSecurityPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/serverlessVpcEndpoint:ServerlessVpcEndpoint
export function ServerlessVpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_opensearch.opensearch_ServerlessVpcEndpointTimeouts(ctx, depth + 1)));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:opensearch/vpcEndpoint:VpcEndpoint
export function VpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainArn = (i.domainArn !== undefined ? i.domainArn : h.arn(ctx));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.vpcOptions = (i.vpcOptions !== undefined ? i.vpcOptions : (depth > 4 ? {} : T_opensearch.opensearch_VpcEndpointVpcOptions(ctx, depth + 1)));
  return out;
}

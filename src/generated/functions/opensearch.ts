// GENERATED FILE — do not edit.
// Service: opensearch   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opensearch from "../types/opensearch.js";

// aws:opensearch/getDomain:getDomain
export function getDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = "";
  out.advancedOptions = {};
  out.advancedSecurityOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainAdvancedSecurityOption(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.autoTuneOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainAutoTuneOption(ctx, depth + 1))]);
  out.clusterConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainClusterConfig(ctx, depth + 1))]);
  out.cognitoOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainCognitoOption(ctx, depth + 1))]);
  out.created = false;
  out.dashboardEndpoint = h.endpoint(ctx, "dashboardEndpoint");
  out.dashboardEndpointV2 = "";
  out.deleted = false;
  out.domainEndpointV2HostedZoneId = h.id(ctx, "domainEndpointV2HostedZoneId");
  out.domainId = h.id(ctx, "domainId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.ebsOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainEbsOption(ctx, depth + 1))]);
  out.encryptionAtRests = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainEncryptionAtRest(ctx, depth + 1))]);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointV2 = "";
  out.engineVersion = "";
  out.id = h.id(ctx, "id");
  out.ipAddressType = "";
  out.kibanaEndpoint = h.endpoint(ctx, "kibanaEndpoint");
  out.logPublishingOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainLogPublishingOption(ctx, depth + 1))]);
  out.nodeToNodeEncryptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainNodeToNodeEncryption(ctx, depth + 1))]);
  out.offPeakWindowOptions = (i.offPeakWindowOptions !== undefined ? i.offPeakWindowOptions : (depth > 4 ? {} : T_opensearch.opensearch_getDomainOffPeakWindowOptions(ctx, depth + 1)));
  out.processing = false;
  out.snapshotOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainSnapshotOption(ctx, depth + 1))]);
  out.softwareUpdateOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainSoftwareUpdateOption(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainVpcOption(ctx, depth + 1))]);
  return out;
}

// aws:opensearch/getServerlessAccessPolicy:getServerlessAccessPolicy
export function getServerlessAccessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = "";
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/getServerlessCollection:getServerlessCollection
export function getServerlessCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.collectionEndpoint = h.endpoint(ctx, "collectionEndpoint");
  out.createdDate = "";
  out.dashboardEndpoint = h.endpoint(ctx, "dashboardEndpoint");
  out.description = "";
  out.failureCode = "";
  out.failureMessage = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.kmsKeyArn = h.arn(ctx);
  out.lastModifiedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.standbyReplicas = "";
  out.tags = {};
  out.type = "";
  return out;
}

// aws:opensearch/getServerlessLifecyclePolicy:getServerlessLifecyclePolicy
export function getServerlessLifecyclePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastModifiedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = "";
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/getServerlessSecurityConfig:getServerlessSecurityConfig
export function getServerlessSecurityConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configVersion = "";
  out.createdDate = "";
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lastModifiedDate = "";
  out.samlOptions = (i.samlOptions !== undefined ? i.samlOptions : (depth > 4 ? {} : T_opensearch.opensearch_getServerlessSecurityConfigSamlOptions(ctx, depth + 1)));
  out.type = "";
  return out;
}

// aws:opensearch/getServerlessSecurityPolicy:getServerlessSecurityPolicy
export function getServerlessSecurityPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastModifiedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = "";
  out.policyVersion = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:opensearch/getServerlessVpcEndpoint:getServerlessVpcEndpoint
export function getServerlessVpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

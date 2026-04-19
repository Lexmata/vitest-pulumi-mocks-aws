// GENERATED FILE — do not edit.
// Service: elasticsearch   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticsearch from "../types/elasticsearch.js";

// aws:elasticsearch/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = (i.accessPolicies !== undefined ? i.accessPolicies : "");
  out.advancedOptions = (i.advancedOptions !== undefined ? i.advancedOptions : {});
  out.advancedSecurityOptions = (i.advancedSecurityOptions !== undefined ? i.advancedSecurityOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainAdvancedSecurityOptions(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.autoTuneOptions = (i.autoTuneOptions !== undefined ? i.autoTuneOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainAutoTuneOptions(ctx, depth + 1)));
  out.clusterConfig = (i.clusterConfig !== undefined ? i.clusterConfig : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainClusterConfig(ctx, depth + 1)));
  out.cognitoOptions = (i.cognitoOptions !== undefined ? i.cognitoOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainCognitoOptions(ctx, depth + 1)));
  out.domainEndpointOptions = (i.domainEndpointOptions !== undefined ? i.domainEndpointOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainDomainEndpointOptions(ctx, depth + 1)));
  out.domainId = h.id(ctx, "domainId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.ebsOptions = (i.ebsOptions !== undefined ? i.ebsOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainEbsOptions(ctx, depth + 1)));
  out.elasticsearchVersion = (i.elasticsearchVersion !== undefined ? i.elasticsearchVersion : "");
  out.encryptAtRest = (i.encryptAtRest !== undefined ? i.encryptAtRest : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainEncryptAtRest(ctx, depth + 1)));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.kibanaEndpoint = h.endpoint(ctx, "kibanaEndpoint");
  out.logPublishingOptions = (i.logPublishingOptions !== undefined ? i.logPublishingOptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainLogPublishingOption(ctx, depth + 1))]));
  out.nodeToNodeEncryption = (i.nodeToNodeEncryption !== undefined ? i.nodeToNodeEncryption : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainNodeToNodeEncryption(ctx, depth + 1)));
  out.snapshotOptions = (i.snapshotOptions !== undefined ? i.snapshotOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainSnapshotOptions(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcOptions = (i.vpcOptions !== undefined ? i.vpcOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainVpcOptions(ctx, depth + 1)));
  return out;
}

// aws:elasticsearch/domainPolicy:DomainPolicy
export function DomainPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = (i.accessPolicies !== undefined ? i.accessPolicies : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

// aws:elasticsearch/domainSamlOptions:DomainSamlOptions
export function DomainSamlOptions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.samlOptions = (i.samlOptions !== undefined ? i.samlOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainSamlOptionsSamlOptions(ctx, depth + 1)));
  return out;
}

// aws:elasticsearch/vpcEndpoint:VpcEndpoint
export function VpcEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainArn = (i.domainArn !== undefined ? i.domainArn : h.arn(ctx));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.vpcOptions = (i.vpcOptions !== undefined ? i.vpcOptions : (depth > 4 ? {} : T_elasticsearch.elasticsearch_VpcEndpointVpcOptions(ctx, depth + 1)));
  return out;
}

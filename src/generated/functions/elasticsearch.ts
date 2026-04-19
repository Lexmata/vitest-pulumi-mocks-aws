// GENERATED FILE — do not edit.
// Service: elasticsearch   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticsearch from "../types/elasticsearch.js";

// aws:elasticsearch/getDomain:getDomain
export function getDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicies = "";
  out.advancedOptions = {};
  out.advancedSecurityOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainAdvancedSecurityOption(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.autoTuneOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainAutoTuneOption(ctx, depth + 1))]);
  out.clusterConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainClusterConfig(ctx, depth + 1))]);
  out.cognitoOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainCognitoOption(ctx, depth + 1))]);
  out.created = false;
  out.deleted = false;
  out.domainId = h.id(ctx, "domainId");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.ebsOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainEbsOption(ctx, depth + 1))]);
  out.elasticsearchVersion = "";
  out.encryptionAtRests = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainEncryptionAtRest(ctx, depth + 1))]);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.id = h.id(ctx, "id");
  out.kibanaEndpoint = h.endpoint(ctx, "kibanaEndpoint");
  out.logPublishingOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainLogPublishingOption(ctx, depth + 1))]);
  out.nodeToNodeEncryptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainNodeToNodeEncryption(ctx, depth + 1))]);
  out.processing = false;
  out.snapshotOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainSnapshotOption(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainVpcOption(ctx, depth + 1))]);
  return out;
}

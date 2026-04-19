// GENERATED FILE — do not edit.
// Service: cloudsearch   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudsearch from "../types/cloudsearch.js";

// aws:cloudsearch/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.documentServiceEndpoint = h.endpoint(ctx, "documentServiceEndpoint");
  out.domainId = h.id(ctx, "domainId");
  out.endpointOptions = (i.endpointOptions !== undefined ? i.endpointOptions : (depth > 4 ? {} : T_cloudsearch.cloudsearch_DomainEndpointOptions(ctx, depth + 1)));
  out.indexFields = (i.indexFields !== undefined ? i.indexFields : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudsearch.cloudsearch_DomainIndexField(ctx, depth + 1))]));
  out.multiAz = (i.multiAz !== undefined ? i.multiAz : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scalingParameters = (i.scalingParameters !== undefined ? i.scalingParameters : (depth > 4 ? {} : T_cloudsearch.cloudsearch_DomainScalingParameters(ctx, depth + 1)));
  out.searchServiceEndpoint = h.endpoint(ctx, "searchServiceEndpoint");
  return out;
}

// aws:cloudsearch/domainServiceAccessPolicy:DomainServiceAccessPolicy
export function DomainServiceAccessPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicy = (i.accessPolicy !== undefined ? i.accessPolicy : "");
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  return out;
}

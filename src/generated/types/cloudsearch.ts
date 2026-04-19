// GENERATED FILE — do not edit.
// Service: cloudsearch   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudsearch from "./cloudsearch.js";

// aws:cloudsearch/DomainEndpointOptions:DomainEndpointOptions
export function cloudsearch_DomainEndpointOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enforceHttps = false;
  out.tlsSecurityPolicy = "";
  return out;
}

// aws:cloudsearch/DomainIndexField:DomainIndexField
export function cloudsearch_DomainIndexField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analysisScheme = "";
  out.defaultValue = "";
  out.facet = false;
  out.highlight = false;
  out.name = ctx.name;
  out.return = false;
  out.search = false;
  out.sort = false;
  out.sourceFields = "";
  out.type = "";
  return out;
}

// aws:cloudsearch/DomainScalingParameters:DomainScalingParameters
export function cloudsearch_DomainScalingParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredInstanceType = "";
  out.desiredPartitionCount = 1;
  out.desiredReplicationCount = 1;
  return out;
}

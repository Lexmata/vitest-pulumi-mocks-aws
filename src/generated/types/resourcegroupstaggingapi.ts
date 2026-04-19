// GENERATED FILE — do not edit.
// Service: resourcegroupstaggingapi   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourcegroupstaggingapi from "./resourcegroupstaggingapi.js";

// aws:resourcegroupstaggingapi/getResourcesResourceTagMappingList:getResourcesResourceTagMappingList
export function resourcegroupstaggingapi_getResourcesResourceTagMappingList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complianceDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourcegroupstaggingapi.resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail(ctx, depth + 1))]);
  out.resourceArn = h.arn(ctx);
  out.tags = {};
  return out;
}

// aws:resourcegroupstaggingapi/getResourcesResourceTagMappingListComplianceDetail:getResourcesResourceTagMappingListComplianceDetail
export function resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.complianceStatus = false;
  out.keysWithNoncompliantValues = (depth > 4 ? [] : [""]);
  out.nonCompliantKeys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:resourcegroupstaggingapi/getResourcesTagFilter:getResourcesTagFilter
export function resourcegroupstaggingapi_getResourcesTagFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

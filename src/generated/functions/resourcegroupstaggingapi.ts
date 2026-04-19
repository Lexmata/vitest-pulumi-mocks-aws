// GENERATED FILE — do not edit.
// Service: resourcegroupstaggingapi   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourcegroupstaggingapi from "../types/resourcegroupstaggingapi.js";

// aws:resourcegroupstaggingapi/getResources:getResources
export function getResources(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludeCompliantResources = (i.excludeCompliantResources !== undefined ? i.excludeCompliantResources : false);
  out.id = h.id(ctx, "id");
  out.includeComplianceDetails = (i.includeComplianceDetails !== undefined ? i.includeComplianceDetails : false);
  out.resourceArnLists = (i.resourceArnLists !== undefined ? i.resourceArnLists : (depth > 4 ? [] : [""]));
  out.resourceTagMappingLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_resourcegroupstaggingapi.resourcegroupstaggingapi_getResourcesResourceTagMappingList(ctx, depth + 1))]);
  out.resourceTypeFilters = (i.resourceTypeFilters !== undefined ? i.resourceTypeFilters : (depth > 4 ? [] : [""]));
  out.tagFilters = (i.tagFilters !== undefined ? i.tagFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_resourcegroupstaggingapi.resourcegroupstaggingapi_getResourcesTagFilter(ctx, depth + 1))]));
  return out;
}

// GENERATED FILE — do not edit.
// Service: outposts   (8 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:outposts/getAsset:getAsset
export function getAsset(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.assetId = (i.assetId !== undefined ? i.assetId : h.id(ctx, "assetId"));
  out.assetType = "";
  out.hostId = h.id(ctx, "hostId");
  out.id = h.id(ctx, "id");
  out.rackElevation = 0;
  out.rackId = h.id(ctx, "rackId");
  return out;
}

// aws:outposts/getAssets:getAssets
export function getAssets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.assetIds = (depth > 4 ? [] : [""]);
  out.hostIdFilters = (i.hostIdFilters !== undefined ? i.hostIdFilters : (depth > 4 ? [] : [""]));
  out.id = h.id(ctx, "id");
  out.statusIdFilters = (i.statusIdFilters !== undefined ? i.statusIdFilters : (depth > 4 ? [] : [""]));
  return out;
}

// aws:outposts/getOutpost:getOutpost
export function getOutpost(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.availabilityZone = ctx.region + "a";
  out.availabilityZoneId = ctx.region + "a";
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lifecycleStatus = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = (i.ownerId !== undefined ? i.ownerId : ctx.accountId);
  out.siteArn = h.arn(ctx);
  out.siteId = h.id(ctx, "siteId");
  out.supportedHardwareType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:outposts/getOutpostInstanceType:getOutpostInstanceType
export function getOutpostInstanceType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.preferredInstanceTypes = (i.preferredInstanceTypes !== undefined ? i.preferredInstanceTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:outposts/getOutpostInstanceTypes:getOutpostInstanceTypes
export function getOutpostInstanceTypes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.instanceTypes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:outposts/getOutposts:getOutposts
export function getOutposts(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.availabilityZoneId = (i.availabilityZoneId !== undefined ? i.availabilityZoneId : ctx.region + "a");
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.ownerId = (i.ownerId !== undefined ? i.ownerId : ctx.accountId);
  out.siteId = (i.siteId !== undefined ? i.siteId : h.id(ctx, "siteId"));
  return out;
}

// aws:outposts/getSite:getSite
export function getSite(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:outposts/getSites:getSites
export function getSites(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

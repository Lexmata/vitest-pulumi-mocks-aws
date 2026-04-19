// GENERATED FILE — do not edit.
// Service: location   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_location from "../types/location.js";

// aws:location/getGeofenceCollection:getGeofenceCollection
export function getGeofenceCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionArn = h.arn(ctx);
  out.collectionName = (i.collectionName !== undefined ? i.collectionName : "");
  out.createTime = h.timestamp();
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateTime = "";
  return out;
}

// aws:location/getMap:getMap
export function getMap(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_location.location_getMapConfiguration(ctx, depth + 1))]);
  out.createTime = h.timestamp();
  out.description = "";
  out.id = h.id(ctx, "id");
  out.mapArn = h.arn(ctx);
  out.mapName = (i.mapName !== undefined ? i.mapName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateTime = "";
  return out;
}

// aws:location/getPlaceIndex:getPlaceIndex
export function getPlaceIndex(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createTime = h.timestamp();
  out.dataSource = "";
  out.dataSourceConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_location.location_getPlaceIndexDataSourceConfiguration(ctx, depth + 1))]);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.indexArn = h.arn(ctx);
  out.indexName = (i.indexName !== undefined ? i.indexName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateTime = "";
  return out;
}

// aws:location/getRouteCalculator:getRouteCalculator
export function getRouteCalculator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.calculatorArn = h.arn(ctx);
  out.calculatorName = (i.calculatorName !== undefined ? i.calculatorName : "");
  out.createTime = h.timestamp();
  out.dataSource = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateTime = "";
  return out;
}

// aws:location/getTracker:getTracker
export function getTracker(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createTime = h.timestamp();
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.positionFiltering = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.trackerArn = h.arn(ctx);
  out.trackerName = (i.trackerName !== undefined ? i.trackerName : "");
  out.updateTime = "";
  return out;
}

// aws:location/getTrackerAssociation:getTrackerAssociation
export function getTrackerAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerArn = (i.consumerArn !== undefined ? i.consumerArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.trackerName = (i.trackerName !== undefined ? i.trackerName : "");
  return out;
}

// aws:location/getTrackerAssociations:getTrackerAssociations
export function getTrackerAssociations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerArns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.trackerName = (i.trackerName !== undefined ? i.trackerName : "");
  return out;
}

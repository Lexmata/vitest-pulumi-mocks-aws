// GENERATED FILE — do not edit.
// Service: location   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_location from "../types/location.js";

// aws:location/geofenceCollection:GeofenceCollection
export function GeofenceCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionArn = h.arn(ctx);
  out.collectionName = (i.collectionName !== undefined ? i.collectionName : "");
  out.createTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:location/map:Map
export function Map(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_location.location_MapConfiguration(ctx, depth + 1)));
  out.createTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.mapArn = h.arn(ctx);
  out.mapName = (i.mapName !== undefined ? i.mapName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:location/placeIndex:PlaceIndex
export function PlaceIndex(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createTime = h.timestamp();
  out.dataSource = (i.dataSource !== undefined ? i.dataSource : "");
  out.dataSourceConfiguration = (i.dataSourceConfiguration !== undefined ? i.dataSourceConfiguration : (depth > 4 ? {} : T_location.location_PlaceIndexDataSourceConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.indexArn = h.arn(ctx);
  out.indexName = (i.indexName !== undefined ? i.indexName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:location/routeCalculation:RouteCalculation
export function RouteCalculation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.calculatorArn = h.arn(ctx);
  out.calculatorName = (i.calculatorName !== undefined ? i.calculatorName : "");
  out.createTime = h.timestamp();
  out.dataSource = (i.dataSource !== undefined ? i.dataSource : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateTime = "";
  return out;
}

// aws:location/tracker:Tracker
export function Tracker(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.positionFiltering = (i.positionFiltering !== undefined ? i.positionFiltering : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trackerArn = h.arn(ctx);
  out.trackerName = (i.trackerName !== undefined ? i.trackerName : "");
  out.updateTime = "";
  return out;
}

// aws:location/trackerAssociation:TrackerAssociation
export function TrackerAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerArn = (i.consumerArn !== undefined ? i.consumerArn : h.arn(ctx));
  out.trackerName = (i.trackerName !== undefined ? i.trackerName : "");
  return out;
}

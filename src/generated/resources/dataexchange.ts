// GENERATED FILE — do not edit.
// Service: dataexchange   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dataexchange from "../types/dataexchange.js";

// aws:dataexchange/dataSet:DataSet
export function DataSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assetType = (i.assetType !== undefined ? i.assetType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dataexchange/eventAction:EventAction
export function EventAction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionAction(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.event = (i.event !== undefined ? i.event : (depth > 4 ? {} : T_dataexchange.dataexchange_EventActionEvent(ctx, depth + 1)));
  out.updatedAt = "";
  return out;
}

// aws:dataexchange/revision:Revision
export function Revision(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.revisionId = h.id(ctx, "revisionId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dataexchange/revisionAssets:RevisionAssets
export function RevisionAssets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assets = (i.assets !== undefined ? i.assets : (depth > 4 ? [] : [(depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsAsset(ctx, depth + 1))]));
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.createdAt = h.timestamp();
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.finalized = (i.finalized !== undefined ? i.finalized : false);
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_dataexchange.dataexchange_RevisionAssetsTimeouts(ctx, depth + 1)));
  out.updatedAt = "";
  return out;
}

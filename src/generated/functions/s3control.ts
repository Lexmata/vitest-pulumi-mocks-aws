// GENERATED FILE — do not edit.
// Service: s3control   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3control from "../types/s3control.js";

// aws:s3control/getMultiRegionAccessPoint:getMultiRegionAccessPoint
export function getMultiRegionAccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.alias = "";
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.domainName = h.endpoint(ctx, "domainName");
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.publicAccessBlocks = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_getMultiRegionAccessPointPublicAccessBlock(ctx, depth + 1))]);
  out.regions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_getMultiRegionAccessPointRegion(ctx, depth + 1))]);
  out.status = "active";
  return out;
}

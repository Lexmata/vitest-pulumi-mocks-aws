// GENERATED FILE — do not edit.
// Service: storagegateway   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:storagegateway/getLocalDisk:getLocalDisk
export function getLocalDisk(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskId = h.id(ctx, "diskId");
  out.diskNode = (i.diskNode !== undefined ? i.diskNode : "");
  out.diskPath = (i.diskPath !== undefined ? i.diskPath : "");
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  return out;
}

// GENERATED FILE — do not edit.
// Service: sagemaker   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:sagemaker/getPrebuiltEcrImage:getPrebuiltEcrImage
export function getPrebuiltEcrImage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsSuffix = (i.dnsSuffix !== undefined ? i.dnsSuffix : "");
  out.id = h.id(ctx, "id");
  out.imageTag = (i.imageTag !== undefined ? i.imageTag : "");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.registryId = h.id(ctx, "registryId");
  out.registryPath = "";
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  return out;
}

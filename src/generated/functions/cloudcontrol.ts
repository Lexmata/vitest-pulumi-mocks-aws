// GENERATED FILE — do not edit.
// Service: cloudcontrol   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:cloudcontrol/getResource:getResource
export function getResource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.properties = "";
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.typeName = (i.typeName !== undefined ? i.typeName : "");
  out.typeVersionId = (i.typeVersionId !== undefined ? i.typeVersionId : h.id(ctx, "typeVersionId"));
  return out;
}

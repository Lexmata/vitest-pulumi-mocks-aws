// GENERATED FILE — do not edit.
// Service: cloudcontrol   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:cloudcontrol/resource:Resource
export function Resource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredState = (i.desiredState !== undefined ? i.desiredState : "");
  out.properties = "";
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.schema = (i.schema !== undefined ? i.schema : "");
  out.typeName = (i.typeName !== undefined ? i.typeName : "");
  out.typeVersionId = (i.typeVersionId !== undefined ? i.typeVersionId : h.id(ctx, "typeVersionId"));
  return out;
}

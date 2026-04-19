// GENERATED FILE — do not edit.
// Service: serverlessrepository   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:serverlessrepository/getApplication:getApplication
export function getApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.requiredCapabilities = (depth > 4 ? [] : [""]);
  out.semanticVersion = (i.semanticVersion !== undefined ? i.semanticVersion : "");
  out.sourceCodeUrl = h.endpoint(ctx, "sourceCodeUrl");
  out.templateUrl = h.endpoint(ctx, "templateUrl");
  return out;
}

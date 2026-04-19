// GENERATED FILE — do not edit.
// Service: serverlessrepository   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:serverlessrepository/cloudFormationStack:CloudFormationStack
export function CloudFormationStack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.capabilities = (i.capabilities !== undefined ? i.capabilities : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputs = {};
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.semanticVersion = (i.semanticVersion !== undefined ? i.semanticVersion : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

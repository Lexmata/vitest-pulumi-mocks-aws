// GENERATED FILE — do not edit.
// Service: securityhub   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_securityhub from "../types/securityhub.js";

// aws:securityhub/getStandardsControlAssociations:getStandardsControlAssociations
export function getStandardsControlAssociations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.securityControlId = (i.securityControlId !== undefined ? i.securityControlId : h.id(ctx, "securityControlId"));
  out.standardsControlAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_getStandardsControlAssociationsStandardsControlAssociation(ctx, depth + 1))]);
  return out;
}

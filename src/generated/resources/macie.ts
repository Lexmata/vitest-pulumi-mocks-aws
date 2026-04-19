// GENERATED FILE — do not edit.
// Service: macie   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_macie from "../types/macie.js";

// aws:macie/customDataIdentifier:CustomDataIdentifier
export function CustomDataIdentifier(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.ignoreWords = (i.ignoreWords !== undefined ? i.ignoreWords : (depth > 4 ? [] : [""]));
  out.keywords = (i.keywords !== undefined ? i.keywords : (depth > 4 ? [] : [""]));
  out.maximumMatchDistance = (i.maximumMatchDistance !== undefined ? i.maximumMatchDistance : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.regex = (i.regex !== undefined ? i.regex : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:macie/findingsFilter:FindingsFilter
export function FindingsFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.findingCriteria = (i.findingCriteria !== undefined ? i.findingCriteria : (depth > 4 ? {} : T_macie.macie_FindingsFilterFindingCriteria(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.position = (i.position !== undefined ? i.position : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

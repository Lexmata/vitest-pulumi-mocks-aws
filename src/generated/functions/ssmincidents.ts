// GENERATED FILE — do not edit.
// Service: ssmincidents   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmincidents from "../types/ssmincidents.js";

// aws:ssmincidents/getReplicationSet:getReplicationSet
export function getReplicationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdBy = "";
  out.deletionProtected = false;
  out.id = h.id(ctx, "id");
  out.lastModifiedBy = "";
  out.regions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getReplicationSetRegion(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ssmincidents/getResponsePlan:getResponsePlan
export function getResponsePlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanAction(ctx, depth + 1))]);
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.chatChannels = (depth > 4 ? [] : [""]);
  out.displayName = "";
  out.engagements = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.incidentTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanIncidentTemplate(ctx, depth + 1))]);
  out.integrations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_getResponsePlanIntegration(ctx, depth + 1))]);
  out.name = ctx.name;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// GENERATED FILE — do not edit.
// Service: ssmincidents   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmincidents from "../types/ssmincidents.js";

// aws:ssmincidents/replicationSet:ReplicationSet
export function ReplicationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdBy = "";
  out.deletionProtected = false;
  out.lastModifiedBy = "";
  out.regions = (i.regions !== undefined ? i.regions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmincidents.ssmincidents_ReplicationSetRegion(ctx, depth + 1))]));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssmincidents/responsePlan:ResponsePlan
export function ResponsePlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : (depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanAction(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.chatChannels = (i.chatChannels !== undefined ? i.chatChannels : (depth > 4 ? [] : [""]));
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.engagements = (i.engagements !== undefined ? i.engagements : (depth > 4 ? [] : [""]));
  out.incidentTemplate = (i.incidentTemplate !== undefined ? i.incidentTemplate : (depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanIncidentTemplate(ctx, depth + 1)));
  out.integration = (i.integration !== undefined ? i.integration : (depth > 4 ? {} : T_ssmincidents.ssmincidents_ResponsePlanIntegration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

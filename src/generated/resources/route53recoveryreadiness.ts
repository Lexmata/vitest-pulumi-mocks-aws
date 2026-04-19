// GENERATED FILE — do not edit.
// Service: route53recoveryreadiness   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53recoveryreadiness from "../types/route53recoveryreadiness.js";

// aws:route53recoveryreadiness/cell:Cell
export function Cell(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cellName = (i.cellName !== undefined ? i.cellName : "");
  out.cells = (i.cells !== undefined ? i.cells : (depth > 4 ? [] : [""]));
  out.parentReadinessScopes = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53recoveryreadiness/readinessCheck:ReadinessCheck
export function ReadinessCheck(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.readinessCheckName = (i.readinessCheckName !== undefined ? i.readinessCheckName : "");
  out.resourceSetName = (i.resourceSetName !== undefined ? i.resourceSetName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53recoveryreadiness/recoveryGroup:RecoveryGroup
export function RecoveryGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cells = (i.cells !== undefined ? i.cells : (depth > 4 ? [] : [""]));
  out.recoveryGroupName = (i.recoveryGroupName !== undefined ? i.recoveryGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53recoveryreadiness/resourceSet:ResourceSet
export function ResourceSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.resourceSetName = (i.resourceSetName !== undefined ? i.resourceSetName : "");
  out.resourceSetType = (i.resourceSetType !== undefined ? i.resourceSetType : "");
  out.resources = (i.resources !== undefined ? i.resources : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53recoveryreadiness.route53recoveryreadiness_ResourceSetResource(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// GENERATED FILE — do not edit.
// Service: auditmanager   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_auditmanager from "../types/auditmanager.js";

// aws:auditmanager/getControl:getControl
export function getControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionPlanInstructions = "";
  out.actionPlanTitle = "";
  out.arn = h.arn(ctx);
  out.controlMappingSources = (i.controlMappingSources !== undefined ? i.controlMappingSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_getControlControlMappingSource(ctx, depth + 1))]));
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = {};
  out.testingInformation = "";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:auditmanager/getFramework:getFramework
export function getFramework(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.complianceType = "";
  out.controlSets = (i.controlSets !== undefined ? i.controlSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_auditmanager.auditmanager_getFrameworkControlSet(ctx, depth + 1))]));
  out.description = "";
  out.frameworkType = (i.frameworkType !== undefined ? i.frameworkType : "");
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = {};
  return out;
}

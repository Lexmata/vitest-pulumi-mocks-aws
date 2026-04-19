// GENERATED FILE — do not edit.
// Service: drs   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_drs from "./drs.js";

// aws:drs/ReplicationConfigurationTemplatePitPolicy:ReplicationConfigurationTemplatePitPolicy
export function drs_ReplicationConfigurationTemplatePitPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.interval = 0;
  out.retentionDuration = 0;
  out.ruleId = 0;
  out.units = "";
  return out;
}

// aws:drs/ReplicationConfigurationTemplateTimeouts:ReplicationConfigurationTemplateTimeouts
export function drs_ReplicationConfigurationTemplateTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

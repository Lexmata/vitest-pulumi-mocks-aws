// GENERATED FILE — do not edit.
// Service: controltower   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_controltower from "../types/controltower.js";

// aws:controltower/controlTowerControl:ControlTowerControl
export function ControlTowerControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.controlIdentifier = (i.controlIdentifier !== undefined ? i.controlIdentifier : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_controltower.controltower_ControlTowerControlParameter(ctx, depth + 1))]));
  out.targetIdentifier = (i.targetIdentifier !== undefined ? i.targetIdentifier : "");
  return out;
}

// aws:controltower/landingZone:LandingZone
export function LandingZone(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.driftStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_controltower.controltower_LandingZoneDriftStatus(ctx, depth + 1))]);
  out.latestAvailableVersion = "";
  out.manifestJson = (i.manifestJson !== undefined ? i.manifestJson : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

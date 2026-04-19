// GENERATED FILE — do not edit.
// Service: shield   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_shield from "./shield.js";

// aws:shield/ApplicationLayerAutomaticResponseTimeouts:ApplicationLayerAutomaticResponseTimeouts
export function shield_ApplicationLayerAutomaticResponseTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:shield/DrtAccessLogBucketAssociationTimeouts:DrtAccessLogBucketAssociationTimeouts
export function shield_DrtAccessLogBucketAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:shield/DrtAccessRoleArnAssociationTimeouts:DrtAccessRoleArnAssociationTimeouts
export function shield_DrtAccessRoleArnAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:shield/ProactiveEngagementEmergencyContact:ProactiveEngagementEmergencyContact
export function shield_ProactiveEngagementEmergencyContact(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactNotes = "";
  out.emailAddress = "";
  out.phoneNumber = "";
  return out;
}

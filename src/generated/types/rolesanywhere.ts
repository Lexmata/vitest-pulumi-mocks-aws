// GENERATED FILE — do not edit.
// Service: rolesanywhere   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_rolesanywhere from "./rolesanywhere.js";

// aws:rolesanywhere/TrustAnchorNotificationSetting:TrustAnchorNotificationSetting
export function rolesanywhere_TrustAnchorNotificationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channel = "";
  out.configuredBy = "";
  out.enabled = true;
  out.event = "";
  out.threshold = 0;
  return out;
}

// aws:rolesanywhere/TrustAnchorSource:TrustAnchorSource
export function rolesanywhere_TrustAnchorSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceData = (depth > 4 ? {} : T_rolesanywhere.rolesanywhere_TrustAnchorSourceSourceData(ctx, depth + 1));
  out.sourceType = "";
  return out;
}

// aws:rolesanywhere/TrustAnchorSourceSourceData:TrustAnchorSourceSourceData
export function rolesanywhere_TrustAnchorSourceSourceData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acmPcaArn = h.arn(ctx);
  out.x509CertificateData = "";
  return out;
}

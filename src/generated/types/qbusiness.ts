// GENERATED FILE — do not edit.
// Service: qbusiness   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_qbusiness from "./qbusiness.js";

// aws:qbusiness/ApplicationAttachmentsConfiguration:ApplicationAttachmentsConfiguration
export function qbusiness_ApplicationAttachmentsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentsControlMode = "";
  return out;
}

// aws:qbusiness/ApplicationEncryptionConfiguration:ApplicationEncryptionConfiguration
export function qbusiness_ApplicationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:qbusiness/ApplicationTimeouts:ApplicationTimeouts
export function qbusiness_ApplicationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

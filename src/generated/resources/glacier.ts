// GENERATED FILE — do not edit.
// Service: glacier   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_glacier from "../types/glacier.js";

// aws:glacier/vault:Vault
export function Vault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPolicy = (i.accessPolicy !== undefined ? i.accessPolicy : "");
  out.arn = h.arn(ctx);
  out.location = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notification = (i.notification !== undefined ? i.notification : (depth > 4 ? {} : T_glacier.glacier_VaultNotification(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:glacier/vaultLock:VaultLock
export function VaultLock(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.completeLock = (i.completeLock !== undefined ? i.completeLock : false);
  out.ignoreDeletionError = (i.ignoreDeletionError !== undefined ? i.ignoreDeletionError : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.vaultName = (i.vaultName !== undefined ? i.vaultName : "");
  return out;
}

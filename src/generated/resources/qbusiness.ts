// GENERATED FILE — do not edit.
// Service: qbusiness   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_qbusiness from "../types/qbusiness.js";

// aws:qbusiness/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentsConfiguration = (i.attachmentsConfiguration !== undefined ? i.attachmentsConfiguration : (depth > 4 ? {} : T_qbusiness.qbusiness_ApplicationAttachmentsConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_qbusiness.qbusiness_ApplicationEncryptionConfiguration(ctx, depth + 1)));
  out.iamServiceRoleArn = (i.iamServiceRoleArn !== undefined ? i.iamServiceRoleArn : h.arn(ctx));
  out.identityCenterApplicationArn = h.arn(ctx);
  out.identityCenterInstanceArn = (i.identityCenterInstanceArn !== undefined ? i.identityCenterInstanceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_qbusiness.qbusiness_ApplicationTimeouts(ctx, depth + 1)));
  return out;
}

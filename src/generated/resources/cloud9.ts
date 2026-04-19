// GENERATED FILE — do not edit.
// Service: cloud9   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:cloud9/environmentEC2:EnvironmentEC2
export function EnvironmentEC2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.automaticStopTimeMinutes = (i.automaticStopTimeMinutes !== undefined ? i.automaticStopTimeMinutes : 0);
  out.connectionType = (i.connectionType !== undefined ? i.connectionType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.imageId = (i.imageId !== undefined ? i.imageId : h.id(ctx, "imageId"));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerArn = (i.ownerArn !== undefined ? i.ownerArn : h.arn(ctx));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  return out;
}

// aws:cloud9/environmentMembership:EnvironmentMembership
export function EnvironmentMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.permissions = (i.permissions !== undefined ? i.permissions : "");
  out.userArn = (i.userArn !== undefined ? i.userArn : h.arn(ctx));
  out.userId = h.id(ctx, "userId");
  return out;
}

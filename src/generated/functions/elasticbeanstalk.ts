// GENERATED FILE — do not edit.
// Service: elasticbeanstalk   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticbeanstalk from "../types/elasticbeanstalk.js";

// aws:elasticbeanstalk/getApplication:getApplication
export function getApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appversionLifecycle = (depth > 4 ? {} : T_elasticbeanstalk.elasticbeanstalk_getApplicationAppversionLifecycle(ctx, depth + 1));
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:elasticbeanstalk/getHostedZone:getHostedZone
export function getHostedZone(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

// aws:elasticbeanstalk/getSolutionStack:getSolutionStack
export function getSolutionStack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.name = ctx.name;
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  return out;
}

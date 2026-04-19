// GENERATED FILE — do not edit.
// Service: sfn   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sfn from "../types/sfn.js";

// aws:sfn/getActivity:getActivity
export function getActivity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.creationDate = h.timestamp();
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:sfn/getAlias:getAlias
export function getAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routingConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_sfn.sfn_getAliasRoutingConfiguration(ctx, depth + 1))]);
  out.statemachineArn = (i.statemachineArn !== undefined ? i.statemachineArn : h.arn(ctx));
  return out;
}

// aws:sfn/getStateMachine:getStateMachine
export function getStateMachine(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.definition = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.revisionId = h.id(ctx, "revisionId");
  out.roleArn = h.arn(ctx);
  out.status = "active";
  return out;
}

// aws:sfn/getStateMachineVersions:getStateMachineVersions
export function getStateMachineVersions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.statemachineArn = (i.statemachineArn !== undefined ? i.statemachineArn : h.arn(ctx));
  out.statemachineVersions = (depth > 4 ? [] : [""]);
  return out;
}

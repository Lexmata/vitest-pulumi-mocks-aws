// GENERATED FILE — do not edit.
// Service: sfn   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sfn from "../types/sfn.js";

// aws:sfn/activity:Activity
export function Activity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationDate = h.timestamp();
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_sfn.sfn_ActivityEncryptionConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sfn/alias:Alias
export function Alias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routingConfigurations = (i.routingConfigurations !== undefined ? i.routingConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_sfn.sfn_AliasRoutingConfiguration(ctx, depth + 1))]));
  return out;
}

// aws:sfn/stateMachine:StateMachine
export function StateMachine(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.definition = (i.definition !== undefined ? i.definition : "");
  out.description = "";
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_sfn.sfn_StateMachineEncryptionConfiguration(ctx, depth + 1)));
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_sfn.sfn_StateMachineLoggingConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.publish = (i.publish !== undefined ? i.publish : false);
  out.revisionId = h.id(ctx, "revisionId");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.stateMachineVersionArn = h.arn(ctx);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tracingConfiguration = (i.tracingConfiguration !== undefined ? i.tracingConfiguration : (depth > 4 ? {} : T_sfn.sfn_StateMachineTracingConfiguration(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  out.versionDescription = "";
  return out;
}

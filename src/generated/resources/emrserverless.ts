// GENERATED FILE — do not edit.
// Service: emrserverless   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emrserverless from "../types/emrserverless.js";

// aws:emrserverless/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = (i.architecture !== undefined ? i.architecture : "");
  out.arn = h.arn(ctx);
  out.autoStartConfiguration = (i.autoStartConfiguration !== undefined ? i.autoStartConfiguration : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationAutoStartConfiguration(ctx, depth + 1)));
  out.autoStopConfiguration = (i.autoStopConfiguration !== undefined ? i.autoStopConfiguration : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationAutoStopConfiguration(ctx, depth + 1)));
  out.imageConfiguration = (i.imageConfiguration !== undefined ? i.imageConfiguration : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationImageConfiguration(ctx, depth + 1)));
  out.initialCapacities = (i.initialCapacities !== undefined ? i.initialCapacities : (depth > 4 ? [] : [(depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationInitialCapacity(ctx, depth + 1))]));
  out.interactiveConfiguration = (i.interactiveConfiguration !== undefined ? i.interactiveConfiguration : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationInteractiveConfiguration(ctx, depth + 1)));
  out.maximumCapacity = (i.maximumCapacity !== undefined ? i.maximumCapacity : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationMaximumCapacity(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_emrserverless.emrserverless_ApplicationNetworkConfiguration(ctx, depth + 1)));
  out.releaseLabel = (i.releaseLabel !== undefined ? i.releaseLabel : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

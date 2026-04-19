// GENERATED FILE — do not edit.
// Service: bedrockmodel   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bedrockmodel from "../types/bedrockmodel.js";

// aws:bedrockmodel/invocationLoggingConfiguration:InvocationLoggingConfiguration
export function InvocationLoggingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.loggingConfig = (i.loggingConfig !== undefined ? i.loggingConfig : (depth > 4 ? {} : T_bedrockmodel.bedrockmodel_InvocationLoggingConfigurationLoggingConfig(ctx, depth + 1)));
  return out;
}

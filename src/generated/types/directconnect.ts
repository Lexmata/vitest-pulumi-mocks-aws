// GENERATED FILE — do not edit.
// Service: directconnect   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_directconnect from "./directconnect.js";

// aws:directconnect/getRouterConfigurationRouter:getRouterConfigurationRouter
export function directconnect_getRouterConfigurationRouter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.platform = "";
  out.routerTypeIdentifier = "";
  out.software = "";
  out.vendor = "";
  out.xsltTemplateName = "";
  out.xsltTemplateNameForMacSec = "";
  return out;
}

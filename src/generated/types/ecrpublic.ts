// GENERATED FILE — do not edit.
// Service: ecrpublic   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecrpublic from "./ecrpublic.js";

// aws:ecrpublic/RepositoryCatalogData:RepositoryCatalogData
export function ecrpublic_RepositoryCatalogData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aboutText = "";
  out.architectures = (depth > 4 ? [] : [""]);
  out.description = "";
  out.logoImageBlob = "";
  out.operatingSystems = (depth > 4 ? [] : [""]);
  out.usageText = "";
  return out;
}

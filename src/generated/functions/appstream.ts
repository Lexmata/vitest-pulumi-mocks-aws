// GENERATED FILE — do not edit.
// Service: appstream   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appstream from "../types/appstream.js";

// aws:appstream/getImage:getImage
export function getImage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applications = (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_getImageApplication(ctx, depth + 1))]);
  out.appstreamAgentVersion = "";
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.baseImageArn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = "";
  out.displayName = "";
  out.id = h.id(ctx, "id");
  out.imageBuilderName = "";
  out.imageBuilderSupported = false;
  out.imagePermissions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_getImageImagePermission(ctx, depth + 1))]);
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.platform = "";
  out.publicBaseImageReleasedDate = "";
  out.state = "active";
  out.stateChangeReasons = (depth > 4 ? [] : [(depth > 4 ? {} : T_appstream.appstream_getImageStateChangeReason(ctx, depth + 1))]);
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// GENERATED FILE — do not edit.
// Service: cloudformation   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudformation from "../types/cloudformation.js";

// aws:cloudformation/getCloudFormationType:getCloudFormationType
export function getCloudFormationType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.defaultVersionId = h.id(ctx, "defaultVersionId");
  out.deprecatedStatus = "";
  out.description = "";
  out.documentationUrl = h.endpoint(ctx, "documentationUrl");
  out.executionRoleArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.isDefaultVersion = true;
  out.loggingConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudformation.cloudformation_getCloudFormationTypeLoggingConfig(ctx, depth + 1))]);
  out.provisioningType = "";
  out.schema = "";
  out.sourceUrl = h.endpoint(ctx, "sourceUrl");
  out.type = (i.type !== undefined ? i.type : "");
  out.typeArn = h.arn(ctx);
  out.typeName = (i.typeName !== undefined ? i.typeName : "");
  out.versionId = (i.versionId !== undefined ? i.versionId : h.id(ctx, "versionId"));
  out.visibility = "";
  return out;
}

// aws:cloudformation/getExport:getExport
export function getExport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.exportingStackId = h.id(ctx, "exportingStackId");
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.value = "";
  return out;
}

// aws:cloudformation/getStack:getStack
export function getStack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capabilities = (depth > 4 ? [] : [""]);
  out.description = "";
  out.disableRollback = false;
  out.iamRoleArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationArns = (depth > 4 ? [] : [""]);
  out.outputs = {};
  out.parameters = {};
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.templateBody = "";
  out.timeoutInMinutes = 30;
  return out;
}

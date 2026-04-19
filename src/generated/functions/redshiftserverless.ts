// GENERATED FILE — do not edit.
// Service: redshiftserverless   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshiftserverless from "../types/redshiftserverless.js";

// aws:redshiftserverless/getCredentials:getCredentials
export function getCredentials(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbName = (i.dbName !== undefined ? i.dbName : "");
  out.dbPassword = "";
  out.dbUser = "";
  out.durationSeconds = (i.durationSeconds !== undefined ? i.durationSeconds : 0);
  out.expiration = "";
  out.id = h.id(ctx, "id");
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}

// aws:redshiftserverless/getNamespace:getNamespace
export function getNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminUsername = "";
  out.arn = h.arn(ctx);
  out.dbName = "";
  out.defaultIamRoleArn = h.arn(ctx);
  out.iamRoles = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.logExports = (depth > 4 ? [] : [""]);
  out.namespaceId = h.id(ctx, "namespaceId");
  out.namespaceName = (i.namespaceName !== undefined ? i.namespaceName : "");
  return out;
}

// aws:redshiftserverless/getWorkgroup:getWorkgroup
export function getWorkgroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_getWorkgroupEndpoint(ctx, depth + 1))]);
  out.enhancedVpcRouting = false;
  out.id = h.id(ctx, "id");
  out.namespaceName = "";
  out.publiclyAccessible = false;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.trackName = "";
  out.workgroupId = h.id(ctx, "workgroupId");
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}

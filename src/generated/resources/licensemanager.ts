// GENERATED FILE — do not edit.
// Service: licensemanager   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:licensemanager/association:Association
export function Association(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.licenseConfigurationArn = (i.licenseConfigurationArn !== undefined ? i.licenseConfigurationArn : h.arn(ctx));
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:licensemanager/licenseConfiguration:LicenseConfiguration
export function LicenseConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.licenseCount = (i.licenseCount !== undefined ? i.licenseCount : 1);
  out.licenseCountHardLimit = (i.licenseCountHardLimit !== undefined ? i.licenseCountHardLimit : false);
  out.licenseCountingType = (i.licenseCountingType !== undefined ? i.licenseCountingType : "");
  out.licenseRules = (i.licenseRules !== undefined ? i.licenseRules : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:licensemanager/licenseGrant:LicenseGrant
export function LicenseGrant(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedOperations = (i.allowedOperations !== undefined ? i.allowedOperations : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.homeRegion = "";
  out.licenseArn = (i.licenseArn !== undefined ? i.licenseArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentArn = h.arn(ctx);
  out.principal = (i.principal !== undefined ? i.principal : "");
  out.status = "active";
  out.version = "1";
  return out;
}

// aws:licensemanager/licenseGrantAccepter:LicenseGrantAccepter
export function LicenseGrantAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedOperations = (depth > 4 ? [] : [""]);
  out.grantArn = (i.grantArn !== undefined ? i.grantArn : h.arn(ctx));
  out.homeRegion = "";
  out.licenseArn = h.arn(ctx);
  out.name = ctx.name;
  out.parentArn = h.arn(ctx);
  out.principal = "";
  out.status = "active";
  out.version = "1";
  return out;
}

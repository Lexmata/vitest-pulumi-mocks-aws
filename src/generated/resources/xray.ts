// GENERATED FILE — do not edit.
// Service: xray   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_xray from "../types/xray.js";

// aws:xray/encryptionConfig:EncryptionConfig
export function EncryptionConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:xray/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.filterExpression = (i.filterExpression !== undefined ? i.filterExpression : "");
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.insightsConfiguration = (i.insightsConfiguration !== undefined ? i.insightsConfiguration : (depth > 4 ? {} : T_xray.xray_GroupInsightsConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:xray/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bypassPolicyLockoutCheck = (i.bypassPolicyLockoutCheck !== undefined ? i.bypassPolicyLockoutCheck : false);
  out.lastUpdatedTime = "";
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.policyName = (i.policyName !== undefined ? i.policyName : "");
  out.policyRevisionId = (i.policyRevisionId !== undefined ? i.policyRevisionId : h.id(ctx, "policyRevisionId"));
  return out;
}

// aws:xray/samplingRule:SamplingRule
export function SamplingRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : {});
  out.fixedRate = (i.fixedRate !== undefined ? i.fixedRate : 0);
  out.host = (i.host !== undefined ? i.host : "");
  out.httpMethod = (i.httpMethod !== undefined ? i.httpMethod : "");
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.reservoirSize = (i.reservoirSize !== undefined ? i.reservoirSize : 8);
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.ruleName = (i.ruleName !== undefined ? i.ruleName : "");
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.serviceType = (i.serviceType !== undefined ? i.serviceType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.urlPath = (i.urlPath !== undefined ? i.urlPath : "");
  out.version = (i.version !== undefined ? i.version : 0);
  return out;
}

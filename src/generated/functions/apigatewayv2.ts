// GENERATED FILE — do not edit.
// Service: apigatewayv2   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apigatewayv2 from "../types/apigatewayv2.js";

// aws:apigatewayv2/getApi:getApi
export function getApi(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiEndpoint = h.endpoint(ctx, "apiEndpoint");
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.apiKeySelectionExpression = "";
  out.arn = h.arn(ctx);
  out.corsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_apigatewayv2.apigatewayv2_getApiCorsConfiguration(ctx, depth + 1))]);
  out.description = "";
  out.disableExecuteApiEndpoint = false;
  out.executionArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.ipAddressType = "";
  out.name = ctx.name;
  out.protocolType = "";
  out.routeSelectionExpression = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = "1";
  return out;
}

// aws:apigatewayv2/getApis:getApis
export function getApis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.protocolType = (i.protocolType !== undefined ? i.protocolType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:apigatewayv2/getExport:getExport
export function getExport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiId = (i.apiId !== undefined ? i.apiId : h.id(ctx, "apiId"));
  out.body = "";
  out.exportVersion = (i.exportVersion !== undefined ? i.exportVersion : "");
  out.id = h.id(ctx, "id");
  out.includeExtensions = (i.includeExtensions !== undefined ? i.includeExtensions : false);
  out.outputType = (i.outputType !== undefined ? i.outputType : "");
  out.specification = (i.specification !== undefined ? i.specification : "");
  out.stageName = (i.stageName !== undefined ? i.stageName : "");
  return out;
}

// aws:apigatewayv2/getVpcLink:getVpcLink
export function getVpcLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcLinkId = (i.vpcLinkId !== undefined ? i.vpcLinkId : h.id(ctx, "vpcLinkId"));
  return out;
}

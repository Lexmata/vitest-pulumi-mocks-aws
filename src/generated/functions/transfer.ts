// GENERATED FILE — do not edit.
// Service: transfer   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_transfer from "../types/transfer.js";

// aws:transfer/getConnector:getConnector
export function getConnector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessRole = "";
  out.arn = h.arn(ctx);
  out.as2Configs = (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_getConnectorAs2Config(ctx, depth + 1))]);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.loggingRole = "";
  out.securityPolicyName = "";
  out.serviceManagedEgressIpAddresses = (depth > 4 ? [] : [""]);
  out.sftpConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_getConnectorSftpConfig(ctx, depth + 1))]);
  out.tags = {};
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:transfer/getServer:getServer
export function getServer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificate = "";
  out.domain = h.endpoint(ctx, "domain");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointType = "";
  out.id = h.id(ctx, "id");
  out.identityProviderType = "";
  out.invocationRole = "";
  out.loggingRole = "";
  out.protocols = (depth > 4 ? [] : [""]);
  out.securityPolicyName = "";
  out.serverId = (i.serverId !== undefined ? i.serverId : h.id(ctx, "serverId"));
  out.structuredLogDestinations = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.url = h.endpoint(ctx, "url");
  return out;
}

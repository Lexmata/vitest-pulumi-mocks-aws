// GENERATED FILE — do not edit.
// Service: grafana   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:grafana/getWorkspace:getWorkspace
export function getWorkspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountAccessType = "";
  out.arn = h.arn(ctx);
  out.authenticationProviders = (depth > 4 ? [] : [""]);
  out.createdDate = "";
  out.dataSources = (depth > 4 ? [] : [""]);
  out.description = "";
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.grafanaVersion = "";
  out.id = h.id(ctx, "id");
  out.lastUpdatedDate = "";
  out.name = ctx.name;
  out.notificationDestinations = (depth > 4 ? [] : [""]);
  out.organizationRoleName = "";
  out.organizationalUnits = (depth > 4 ? [] : [""]);
  out.permissionType = "";
  out.roleArn = h.arn(ctx);
  out.samlConfigurationStatus = "";
  out.stackSetName = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

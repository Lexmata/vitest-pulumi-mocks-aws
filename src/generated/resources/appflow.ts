// GENERATED FILE — do not edit.
// Service: appflow   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appflow from "../types/appflow.js";

// aws:appflow/connectorProfile:ConnectorProfile
export function ConnectorProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionMode = (i.connectionMode !== undefined ? i.connectionMode : "");
  out.connectorLabel = (i.connectorLabel !== undefined ? i.connectorLabel : "");
  out.connectorProfileConfig = (i.connectorProfileConfig !== undefined ? i.connectorProfileConfig : (depth > 4 ? {} : T_appflow.appflow_ConnectorProfileConnectorProfileConfig(ctx, depth + 1)));
  out.connectorType = (i.connectorType !== undefined ? i.connectorType : "");
  out.credentialsArn = h.arn(ctx);
  out.kmsArn = (i.kmsArn !== undefined ? i.kmsArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:appflow/flow:Flow
export function Flow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.destinationFlowConfigs = (i.destinationFlowConfigs !== undefined ? i.destinationFlowConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_appflow.appflow_FlowDestinationFlowConfig(ctx, depth + 1))]));
  out.flowStatus = "";
  out.kmsArn = (i.kmsArn !== undefined ? i.kmsArn : h.arn(ctx));
  out.metadataCatalogConfig = (i.metadataCatalogConfig !== undefined ? i.metadataCatalogConfig : (depth > 4 ? {} : T_appflow.appflow_FlowMetadataCatalogConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sourceFlowConfig = (i.sourceFlowConfig !== undefined ? i.sourceFlowConfig : (depth > 4 ? {} : T_appflow.appflow_FlowSourceFlowConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tasks = (i.tasks !== undefined ? i.tasks : (depth > 4 ? [] : [(depth > 4 ? {} : T_appflow.appflow_FlowTask(ctx, depth + 1))]));
  out.triggerConfig = (i.triggerConfig !== undefined ? i.triggerConfig : (depth > 4 ? {} : T_appflow.appflow_FlowTriggerConfig(ctx, depth + 1)));
  return out;
}

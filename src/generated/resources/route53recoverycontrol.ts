// GENERATED FILE — do not edit.
// Service: route53recoverycontrol   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53recoverycontrol from "../types/route53recoverycontrol.js";

// aws:route53recoverycontrol/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53recoverycontrol.route53recoverycontrol_ClusterClusterEndpoint(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  return out;
}

// aws:route53recoverycontrol/controlPanel:ControlPanel
export function ControlPanel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.defaultControlPanel = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routingControlCount = 1;
  out.status = "active";
  return out;
}

// aws:route53recoverycontrol/routingControl:RoutingControl
export function RoutingControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.controlPanelArn = (i.controlPanelArn !== undefined ? i.controlPanelArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  return out;
}

// aws:route53recoverycontrol/safetyRule:SafetyRule
export function SafetyRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assertedControls = (i.assertedControls !== undefined ? i.assertedControls : (depth > 4 ? [] : [""]));
  out.controlPanelArn = (i.controlPanelArn !== undefined ? i.controlPanelArn : h.arn(ctx));
  out.gatingControls = (i.gatingControls !== undefined ? i.gatingControls : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleConfig = (i.ruleConfig !== undefined ? i.ruleConfig : (depth > 4 ? {} : T_route53recoverycontrol.route53recoverycontrol_SafetyRuleRuleConfig(ctx, depth + 1)));
  out.status = "active";
  out.targetControls = (i.targetControls !== undefined ? i.targetControls : (depth > 4 ? [] : [""]));
  out.waitPeriodMs = (i.waitPeriodMs !== undefined ? i.waitPeriodMs : 0);
  return out;
}

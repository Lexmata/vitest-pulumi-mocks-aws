// GENERATED FILE — do not edit.
// Service: networkmonitor   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:networkmonitor/monitor:Monitor
export function Monitor(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationPeriod = (i.aggregationPeriod !== undefined ? i.aggregationPeriod : 0);
  out.arn = h.arn(ctx);
  out.monitorName = (i.monitorName !== undefined ? i.monitorName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:networkmonitor/probe:Probe
export function Probe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.arn = h.arn(ctx);
  out.destination = (i.destination !== undefined ? i.destination : "");
  out.destinationPort = (i.destinationPort !== undefined ? i.destinationPort : 443);
  out.monitorName = (i.monitorName !== undefined ? i.monitorName : "");
  out.packetSize = (i.packetSize !== undefined ? i.packetSize : 8);
  out.probeId = h.id(ctx, "probeId");
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

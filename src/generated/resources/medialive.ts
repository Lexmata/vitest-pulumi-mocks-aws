// GENERATED FILE — do not edit.
// Service: medialive   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_medialive from "../types/medialive.js";

// aws:medialive/channel:Channel
export function Channel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cdiInputSpecification = (i.cdiInputSpecification !== undefined ? i.cdiInputSpecification : (depth > 4 ? {} : T_medialive.medialive_ChannelCdiInputSpecification(ctx, depth + 1)));
  out.channelClass = (i.channelClass !== undefined ? i.channelClass : "");
  out.channelId = h.id(ctx, "channelId");
  out.destinations = (i.destinations !== undefined ? i.destinations : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelDestination(ctx, depth + 1))]));
  out.encoderSettings = (i.encoderSettings !== undefined ? i.encoderSettings : (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettings(ctx, depth + 1)));
  out.inputAttachments = (i.inputAttachments !== undefined ? i.inputAttachments : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachment(ctx, depth + 1))]));
  out.inputSpecification = (i.inputSpecification !== undefined ? i.inputSpecification : (depth > 4 ? {} : T_medialive.medialive_ChannelInputSpecification(ctx, depth + 1)));
  out.logLevel = (i.logLevel !== undefined ? i.logLevel : "");
  out.maintenance = (i.maintenance !== undefined ? i.maintenance : (depth > 4 ? {} : T_medialive.medialive_ChannelMaintenance(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.startChannel = (i.startChannel !== undefined ? i.startChannel : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpc = (i.vpc !== undefined ? i.vpc : (depth > 4 ? {} : T_medialive.medialive_ChannelVpc(ctx, depth + 1)));
  return out;
}

// aws:medialive/input:Input
export function Input(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachedChannels = (depth > 4 ? [] : [""]);
  out.destinations = (i.destinations !== undefined ? i.destinations : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_InputDestination(ctx, depth + 1))]));
  out.inputClass = "";
  out.inputDevices = (i.inputDevices !== undefined ? i.inputDevices : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_InputInputDevice(ctx, depth + 1))]));
  out.inputPartnerIds = (depth > 4 ? [] : [""]);
  out.inputSecurityGroups = (i.inputSecurityGroups !== undefined ? i.inputSecurityGroups : (depth > 4 ? [] : [""]));
  out.inputSourceType = "";
  out.mediaConnectFlows = (i.mediaConnectFlows !== undefined ? i.mediaConnectFlows : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_InputMediaConnectFlow(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.sources = (i.sources !== undefined ? i.sources : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_InputSource(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.vpc = (i.vpc !== undefined ? i.vpc : (depth > 4 ? {} : T_medialive.medialive_InputVpc(ctx, depth + 1)));
  return out;
}

// aws:medialive/inputSecurityGroup:InputSecurityGroup
export function InputSecurityGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.inputs = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.whitelistRules = (i.whitelistRules !== undefined ? i.whitelistRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_InputSecurityGroupWhitelistRule(ctx, depth + 1))]));
  return out;
}

// aws:medialive/multiplex:Multiplex
export function Multiplex(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.multiplexSettings = (i.multiplexSettings !== undefined ? i.multiplexSettings : (depth > 4 ? {} : T_medialive.medialive_MultiplexMultiplexSettings(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.startMultiplex = (i.startMultiplex !== undefined ? i.startMultiplex : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:medialive/multiplexProgram:MultiplexProgram
export function MultiplexProgram(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.multiplexId = (i.multiplexId !== undefined ? i.multiplexId : h.id(ctx, "multiplexId"));
  out.multiplexProgramSettings = (i.multiplexProgramSettings !== undefined ? i.multiplexProgramSettings : (depth > 4 ? {} : T_medialive.medialive_MultiplexProgramMultiplexProgramSettings(ctx, depth + 1)));
  out.programName = (i.programName !== undefined ? i.programName : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_medialive.medialive_MultiplexProgramTimeouts(ctx, depth + 1)));
  return out;
}

// GENERATED FILE — do not edit.
// Service: vpclattice   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpclattice from "../types/vpclattice.js";

// aws:vpclattice/accessLogSubscription:AccessLogSubscription
export function AccessLogSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationArn = (i.destinationArn !== undefined ? i.destinationArn : h.arn(ctx));
  out.resourceArn = h.arn(ctx);
  out.resourceIdentifier = (i.resourceIdentifier !== undefined ? i.resourceIdentifier : "");
  out.serviceNetworkLogType = (i.serviceNetworkLogType !== undefined ? i.serviceNetworkLogType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/authPolicy:AuthPolicy
export function AuthPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceIdentifier = (i.resourceIdentifier !== undefined ? i.resourceIdentifier : "");
  out.state = (i.state !== undefined ? i.state : "active");
  return out;
}

// aws:vpclattice/listener:Listener
export function Listener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.defaultAction = (i.defaultAction !== undefined ? i.defaultAction : (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerDefaultAction(ctx, depth + 1)));
  out.lastUpdatedAt = "";
  out.listenerId = h.id(ctx, "listenerId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.port = (i.port !== undefined ? i.port : 443);
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.serviceArn = (i.serviceArn !== undefined ? i.serviceArn : h.arn(ctx));
  out.serviceIdentifier = (i.serviceIdentifier !== undefined ? i.serviceIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/listenerRule:ListenerRule
export function ListenerRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleAction(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.listenerIdentifier = (i.listenerIdentifier !== undefined ? i.listenerIdentifier : "");
  out.match = (i.match !== undefined ? i.match : (depth > 4 ? {} : T_vpclattice.vpclattice_ListenerRuleMatch(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.ruleId = h.id(ctx, "ruleId");
  out.serviceIdentifier = (i.serviceIdentifier !== undefined ? i.serviceIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/resourceConfiguration:ResourceConfiguration
export function ResourceConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAssociationToShareableServiceNetwork = (i.allowAssociationToShareableServiceNetwork !== undefined ? i.allowAssociationToShareableServiceNetwork : true);
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.portRanges = (i.portRanges !== undefined ? i.portRanges : (depth > 4 ? [] : [""]));
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.resourceConfigurationDefinition = (i.resourceConfigurationDefinition !== undefined ? i.resourceConfigurationDefinition : (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceConfigurationResourceConfigurationDefinition(ctx, depth + 1)));
  out.resourceConfigurationGroupId = (i.resourceConfigurationGroupId !== undefined ? i.resourceConfigurationGroupId : h.id(ctx, "resourceConfigurationGroupId"));
  out.resourceGatewayIdentifier = (i.resourceGatewayIdentifier !== undefined ? i.resourceGatewayIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceConfigurationTimeouts(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:vpclattice/resourceGateway:ResourceGateway
export function ResourceGateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.status = "active";
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpclattice.vpclattice_ResourceGatewayTimeouts(ctx, depth + 1)));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:vpclattice/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:vpclattice/service:Service
export function Service(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authType = (i.authType !== undefined ? i.authType : "");
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.customDomainName = (i.customDomainName !== undefined ? i.customDomainName : h.endpoint(ctx, "customDomainName"));
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ServiceDnsEntry(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/serviceNetwork:ServiceNetwork
export function ServiceNetwork(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authType = (i.authType !== undefined ? i.authType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/serviceNetworkResourceAssociation:ServiceNetworkResourceAssociation
export function ServiceNetworkResourceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ServiceNetworkResourceAssociationDnsEntry(ctx, depth + 1))]);
  out.resourceConfigurationIdentifier = (i.resourceConfigurationIdentifier !== undefined ? i.resourceConfigurationIdentifier : "");
  out.serviceNetworkIdentifier = (i.serviceNetworkIdentifier !== undefined ? i.serviceNetworkIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_vpclattice.vpclattice_ServiceNetworkResourceAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:vpclattice/serviceNetworkServiceAssociation:ServiceNetworkServiceAssociation
export function ServiceNetworkServiceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdBy = "";
  out.customDomainName = h.endpoint(ctx, "customDomainName");
  out.dnsEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpclattice.vpclattice_ServiceNetworkServiceAssociationDnsEntry(ctx, depth + 1))]);
  out.serviceIdentifier = (i.serviceIdentifier !== undefined ? i.serviceIdentifier : "");
  out.serviceNetworkIdentifier = (i.serviceNetworkIdentifier !== undefined ? i.serviceNetworkIdentifier : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:vpclattice/serviceNetworkVpcAssociation:ServiceNetworkVpcAssociation
export function ServiceNetworkVpcAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdBy = "";
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.serviceNetworkIdentifier = (i.serviceNetworkIdentifier !== undefined ? i.serviceNetworkIdentifier : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcIdentifier = (i.vpcIdentifier !== undefined ? i.vpcIdentifier : "");
  return out;
}

// aws:vpclattice/targetGroup:TargetGroup
export function TargetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.config = (i.config !== undefined ? i.config : (depth > 4 ? {} : T_vpclattice.vpclattice_TargetGroupConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:vpclattice/targetGroupAttachment:TargetGroupAttachment
export function TargetGroupAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.target = (i.target !== undefined ? i.target : (depth > 4 ? {} : T_vpclattice.vpclattice_TargetGroupAttachmentTarget(ctx, depth + 1)));
  out.targetGroupIdentifier = (i.targetGroupIdentifier !== undefined ? i.targetGroupIdentifier : "");
  return out;
}

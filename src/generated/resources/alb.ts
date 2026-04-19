// GENERATED FILE — do not edit.
// Service: alb   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_alb from "../types/alb.js";

// aws:alb/listener:Listener
export function Listener(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alpnPolicy = (i.alpnPolicy !== undefined ? i.alpnPolicy : "");
  out.arn = h.arn(ctx);
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.defaultActions = (i.defaultActions !== undefined ? i.defaultActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerDefaultAction(ctx, depth + 1))]));
  out.loadBalancerArn = (i.loadBalancerArn !== undefined ? i.loadBalancerArn : h.arn(ctx));
  out.mutualAuthentication = (i.mutualAuthentication !== undefined ? i.mutualAuthentication : (depth > 4 ? {} : T_alb.alb_ListenerMutualAuthentication(ctx, depth + 1)));
  out.port = (i.port !== undefined ? i.port : 443);
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.routingHttpRequestXAmznMtlsClientcertHeaderName = (i.routingHttpRequestXAmznMtlsClientcertHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertHeaderName : "");
  out.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = (i.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName : "");
  out.routingHttpRequestXAmznMtlsClientcertLeafHeaderName = (i.routingHttpRequestXAmznMtlsClientcertLeafHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertLeafHeaderName : "");
  out.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = (i.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName : "");
  out.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = (i.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName : "");
  out.routingHttpRequestXAmznMtlsClientcertValidityHeaderName = (i.routingHttpRequestXAmznMtlsClientcertValidityHeaderName !== undefined ? i.routingHttpRequestXAmznMtlsClientcertValidityHeaderName : "");
  out.routingHttpRequestXAmznTlsCipherSuiteHeaderName = (i.routingHttpRequestXAmznTlsCipherSuiteHeaderName !== undefined ? i.routingHttpRequestXAmznTlsCipherSuiteHeaderName : "");
  out.routingHttpRequestXAmznTlsVersionHeaderName = (i.routingHttpRequestXAmznTlsVersionHeaderName !== undefined ? i.routingHttpRequestXAmznTlsVersionHeaderName : "");
  out.routingHttpResponseAccessControlAllowCredentialsHeaderValue = (i.routingHttpResponseAccessControlAllowCredentialsHeaderValue !== undefined ? i.routingHttpResponseAccessControlAllowCredentialsHeaderValue : "");
  out.routingHttpResponseAccessControlAllowHeadersHeaderValue = (i.routingHttpResponseAccessControlAllowHeadersHeaderValue !== undefined ? i.routingHttpResponseAccessControlAllowHeadersHeaderValue : "");
  out.routingHttpResponseAccessControlAllowMethodsHeaderValue = (i.routingHttpResponseAccessControlAllowMethodsHeaderValue !== undefined ? i.routingHttpResponseAccessControlAllowMethodsHeaderValue : "");
  out.routingHttpResponseAccessControlAllowOriginHeaderValue = (i.routingHttpResponseAccessControlAllowOriginHeaderValue !== undefined ? i.routingHttpResponseAccessControlAllowOriginHeaderValue : "");
  out.routingHttpResponseAccessControlExposeHeadersHeaderValue = (i.routingHttpResponseAccessControlExposeHeadersHeaderValue !== undefined ? i.routingHttpResponseAccessControlExposeHeadersHeaderValue : "");
  out.routingHttpResponseAccessControlMaxAgeHeaderValue = (i.routingHttpResponseAccessControlMaxAgeHeaderValue !== undefined ? i.routingHttpResponseAccessControlMaxAgeHeaderValue : "");
  out.routingHttpResponseContentSecurityPolicyHeaderValue = (i.routingHttpResponseContentSecurityPolicyHeaderValue !== undefined ? i.routingHttpResponseContentSecurityPolicyHeaderValue : "");
  out.routingHttpResponseServerEnabled = (i.routingHttpResponseServerEnabled !== undefined ? i.routingHttpResponseServerEnabled : false);
  out.routingHttpResponseStrictTransportSecurityHeaderValue = (i.routingHttpResponseStrictTransportSecurityHeaderValue !== undefined ? i.routingHttpResponseStrictTransportSecurityHeaderValue : "");
  out.routingHttpResponseXContentTypeOptionsHeaderValue = (i.routingHttpResponseXContentTypeOptionsHeaderValue !== undefined ? i.routingHttpResponseXContentTypeOptionsHeaderValue : "");
  out.routingHttpResponseXFrameOptionsHeaderValue = (i.routingHttpResponseXFrameOptionsHeaderValue !== undefined ? i.routingHttpResponseXFrameOptionsHeaderValue : "");
  out.sslPolicy = (i.sslPolicy !== undefined ? i.sslPolicy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tcpIdleTimeoutSeconds = (i.tcpIdleTimeoutSeconds !== undefined ? i.tcpIdleTimeoutSeconds : 30);
  return out;
}

// aws:alb/listenerCertificate:ListenerCertificate
export function ListenerCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.listenerArn = (i.listenerArn !== undefined ? i.listenerArn : h.arn(ctx));
  return out;
}

// aws:alb/listenerRule:ListenerRule
export function ListenerRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerRuleAction(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.conditions = (i.conditions !== undefined ? i.conditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_ListenerRuleCondition(ctx, depth + 1))]));
  out.listenerArn = (i.listenerArn !== undefined ? i.listenerArn : h.arn(ctx));
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:alb/loadBalancer:LoadBalancer
export function LoadBalancer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (i.accessLogs !== undefined ? i.accessLogs : (depth > 4 ? {} : T_alb.alb_LoadBalancerAccessLogs(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.arnSuffix = "";
  out.clientKeepAlive = (i.clientKeepAlive !== undefined ? i.clientKeepAlive : 0);
  out.connectionLogs = (i.connectionLogs !== undefined ? i.connectionLogs : (depth > 4 ? {} : T_alb.alb_LoadBalancerConnectionLogs(ctx, depth + 1)));
  out.customerOwnedIpv4Pool = (i.customerOwnedIpv4Pool !== undefined ? i.customerOwnedIpv4Pool : "");
  out.desyncMitigationMode = (i.desyncMitigationMode !== undefined ? i.desyncMitigationMode : "");
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.dnsRecordClientRoutingPolicy = (i.dnsRecordClientRoutingPolicy !== undefined ? i.dnsRecordClientRoutingPolicy : "");
  out.dropInvalidHeaderFields = (i.dropInvalidHeaderFields !== undefined ? i.dropInvalidHeaderFields : false);
  out.enableCrossZoneLoadBalancing = (i.enableCrossZoneLoadBalancing !== undefined ? i.enableCrossZoneLoadBalancing : true);
  out.enableDeletionProtection = (i.enableDeletionProtection !== undefined ? i.enableDeletionProtection : true);
  out.enableHttp2 = (i.enableHttp2 !== undefined ? i.enableHttp2 : true);
  out.enableTlsVersionAndCipherSuiteHeaders = (i.enableTlsVersionAndCipherSuiteHeaders !== undefined ? i.enableTlsVersionAndCipherSuiteHeaders : true);
  out.enableWafFailOpen = (i.enableWafFailOpen !== undefined ? i.enableWafFailOpen : true);
  out.enableXffClientPort = (i.enableXffClientPort !== undefined ? i.enableXffClientPort : true);
  out.enableZonalShift = (i.enableZonalShift !== undefined ? i.enableZonalShift : true);
  out.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic = (i.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic !== undefined ? i.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic : "");
  out.idleTimeout = (i.idleTimeout !== undefined ? i.idleTimeout : 30);
  out.internal = (i.internal !== undefined ? i.internal : false);
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : undefined);
  out.ipamPools = (i.ipamPools !== undefined ? i.ipamPools : (depth > 4 ? {} : T_alb.alb_LoadBalancerIpamPools(ctx, depth + 1)));
  out.loadBalancerType = (i.loadBalancerType !== undefined ? i.loadBalancerType : undefined);
  out.minimumLoadBalancerCapacity = (i.minimumLoadBalancerCapacity !== undefined ? i.minimumLoadBalancerCapacity : (depth > 4 ? {} : T_alb.alb_LoadBalancerMinimumLoadBalancerCapacity(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.preserveHostHeader = (i.preserveHostHeader !== undefined ? i.preserveHostHeader : false);
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.subnetMappings = (i.subnetMappings !== undefined ? i.subnetMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_LoadBalancerSubnetMapping(ctx, depth + 1))]));
  out.subnets = (i.subnets !== undefined ? i.subnets : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.xffHeaderProcessingMode = (i.xffHeaderProcessingMode !== undefined ? i.xffHeaderProcessingMode : "");
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:alb/targetGroup:TargetGroup
export function TargetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.arnSuffix = "";
  out.connectionTermination = (i.connectionTermination !== undefined ? i.connectionTermination : false);
  out.deregistrationDelay = (i.deregistrationDelay !== undefined ? i.deregistrationDelay : 0);
  out.healthCheck = (i.healthCheck !== undefined ? i.healthCheck : (depth > 4 ? {} : T_alb.alb_TargetGroupHealthCheck(ctx, depth + 1)));
  out.ipAddressType = (i.ipAddressType !== undefined ? i.ipAddressType : "");
  out.lambdaMultiValueHeadersEnabled = (i.lambdaMultiValueHeadersEnabled !== undefined ? i.lambdaMultiValueHeadersEnabled : false);
  out.loadBalancerArns = (depth > 4 ? [] : [""]);
  out.loadBalancingAlgorithmType = (i.loadBalancingAlgorithmType !== undefined ? i.loadBalancingAlgorithmType : "");
  out.loadBalancingAnomalyMitigation = (i.loadBalancingAnomalyMitigation !== undefined ? i.loadBalancingAnomalyMitigation : "");
  out.loadBalancingCrossZoneEnabled = (i.loadBalancingCrossZoneEnabled !== undefined ? i.loadBalancingCrossZoneEnabled : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.preserveClientIp = (i.preserveClientIp !== undefined ? i.preserveClientIp : "");
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.protocolVersion = (i.protocolVersion !== undefined ? i.protocolVersion : "");
  out.proxyProtocolV2 = (i.proxyProtocolV2 !== undefined ? i.proxyProtocolV2 : false);
  out.slowStart = (i.slowStart !== undefined ? i.slowStart : 0);
  out.stickiness = (i.stickiness !== undefined ? i.stickiness : (depth > 4 ? {} : T_alb.alb_TargetGroupStickiness(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetFailovers = (i.targetFailovers !== undefined ? i.targetFailovers : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_TargetGroupTargetFailover(ctx, depth + 1))]));
  out.targetGroupHealth = (i.targetGroupHealth !== undefined ? i.targetGroupHealth : (depth > 4 ? {} : T_alb.alb_TargetGroupTargetGroupHealth(ctx, depth + 1)));
  out.targetHealthStates = (i.targetHealthStates !== undefined ? i.targetHealthStates : (depth > 4 ? [] : [(depth > 4 ? {} : T_alb.alb_TargetGroupTargetHealthState(ctx, depth + 1))]));
  out.targetType = (i.targetType !== undefined ? i.targetType : "");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:alb/targetGroupAttachment:TargetGroupAttachment
export function TargetGroupAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.port = (i.port !== undefined ? i.port : 443);
  out.targetGroupArn = (i.targetGroupArn !== undefined ? i.targetGroupArn : h.arn(ctx));
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  return out;
}

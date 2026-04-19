// GENERATED FILE — do not edit.
// Service: ses   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ses from "../types/ses.js";

// aws:ses/activeReceiptRuleSet:ActiveReceiptRuleSet
export function ActiveReceiptRuleSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ruleSetName = (i.ruleSetName !== undefined ? i.ruleSetName : "");
  return out;
}

// aws:ses/configurationSet:ConfigurationSet
export function ConfigurationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deliveryOptions = (i.deliveryOptions !== undefined ? i.deliveryOptions : (depth > 4 ? {} : T_ses.ses_ConfigurationSetDeliveryOptions(ctx, depth + 1)));
  out.lastFreshStart = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.reputationMetricsEnabled = (i.reputationMetricsEnabled !== undefined ? i.reputationMetricsEnabled : false);
  out.sendingEnabled = (i.sendingEnabled !== undefined ? i.sendingEnabled : false);
  out.trackingOptions = (i.trackingOptions !== undefined ? i.trackingOptions : (depth > 4 ? {} : T_ses.ses_ConfigurationSetTrackingOptions(ctx, depth + 1)));
  return out;
}

// aws:ses/domainDkim:DomainDkim
export function DomainDkim(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dkimTokens = (depth > 4 ? [] : [""]);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  return out;
}

// aws:ses/domainIdentity:DomainIdentity
export function DomainIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.verificationToken = "";
  return out;
}

// aws:ses/domainIdentityVerification:DomainIdentityVerification
export function DomainIdentityVerification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  return out;
}

// aws:ses/emailIdentity:EmailIdentity
export function EmailIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = (i.email !== undefined ? i.email : "");
  return out;
}

// aws:ses/eventDestination:EventDestination
export function EventDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloudwatchDestinations = (i.cloudwatchDestinations !== undefined ? i.cloudwatchDestinations : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_EventDestinationCloudwatchDestination(ctx, depth + 1))]));
  out.configurationSetName = (i.configurationSetName !== undefined ? i.configurationSetName : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.kinesisDestination = (i.kinesisDestination !== undefined ? i.kinesisDestination : (depth > 4 ? {} : T_ses.ses_EventDestinationKinesisDestination(ctx, depth + 1)));
  out.matchingTypes = (i.matchingTypes !== undefined ? i.matchingTypes : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.snsDestination = (i.snsDestination !== undefined ? i.snsDestination : (depth > 4 ? {} : T_ses.ses_EventDestinationSnsDestination(ctx, depth + 1)));
  return out;
}

// aws:ses/identityNotificationTopic:IdentityNotificationTopic
export function IdentityNotificationTopic(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identity = (i.identity !== undefined ? i.identity : "");
  out.includeOriginalHeaders = (i.includeOriginalHeaders !== undefined ? i.includeOriginalHeaders : false);
  out.notificationType = (i.notificationType !== undefined ? i.notificationType : "");
  out.topicArn = (i.topicArn !== undefined ? i.topicArn : h.arn(ctx));
  return out;
}

// aws:ses/identityPolicy:IdentityPolicy
export function IdentityPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identity = (i.identity !== undefined ? i.identity : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:ses/mailFrom:MailFrom
export function MailFrom(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behaviorOnMxFailure = (i.behaviorOnMxFailure !== undefined ? i.behaviorOnMxFailure : "");
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.mailFromDomain = (i.mailFromDomain !== undefined ? i.mailFromDomain : h.endpoint(ctx, "mailFromDomain"));
  return out;
}

// aws:ses/receiptFilter:ReceiptFilter
export function ReceiptFilter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidr = (i.cidr !== undefined ? i.cidr : "10.0.0.0/16");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:ses/receiptRule:ReceiptRule
export function ReceiptRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addHeaderActions = (i.addHeaderActions !== undefined ? i.addHeaderActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleAddHeaderAction(ctx, depth + 1))]));
  out.after = (i.after !== undefined ? i.after : "");
  out.arn = h.arn(ctx);
  out.bounceActions = (i.bounceActions !== undefined ? i.bounceActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleBounceAction(ctx, depth + 1))]));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.lambdaActions = (i.lambdaActions !== undefined ? i.lambdaActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleLambdaAction(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.recipients = (i.recipients !== undefined ? i.recipients : (depth > 4 ? [] : [""]));
  out.ruleSetName = (i.ruleSetName !== undefined ? i.ruleSetName : "");
  out.s3Actions = (i.s3Actions !== undefined ? i.s3Actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleS3Action(ctx, depth + 1))]));
  out.scanEnabled = (i.scanEnabled !== undefined ? i.scanEnabled : false);
  out.snsActions = (i.snsActions !== undefined ? i.snsActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleSnsAction(ctx, depth + 1))]));
  out.stopActions = (i.stopActions !== undefined ? i.stopActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleStopAction(ctx, depth + 1))]));
  out.tlsPolicy = (i.tlsPolicy !== undefined ? i.tlsPolicy : "");
  out.workmailActions = (i.workmailActions !== undefined ? i.workmailActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_ses.ses_ReceiptRuleWorkmailAction(ctx, depth + 1))]));
  return out;
}

// aws:ses/receiptRuleSet:ReceiptRuleSet
export function ReceiptRuleSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ruleSetName = (i.ruleSetName !== undefined ? i.ruleSetName : "");
  return out;
}

// aws:ses/template:Template
export function Template(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.html = (i.html !== undefined ? i.html : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subject = (i.subject !== undefined ? i.subject : "");
  out.text = (i.text !== undefined ? i.text : "");
  return out;
}

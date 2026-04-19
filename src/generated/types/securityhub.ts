// GENERATED FILE — do not edit.
// Service: securityhub   (164 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_securityhub from "./securityhub.js";

// aws:securityhub/AutomationRuleAction:AutomationRuleAction
export function securityhub_AutomationRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.findingFieldsUpdate = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleActionFindingFieldsUpdate(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:securityhub/AutomationRuleActionFindingFieldsUpdate:AutomationRuleActionFindingFieldsUpdate
export function securityhub_AutomationRuleActionFindingFieldsUpdate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.confidence = 0;
  out.criticality = 0;
  out.note = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleActionFindingFieldsUpdateNote(ctx, depth + 1));
  out.relatedFindings = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding(ctx, depth + 1))]);
  out.severity = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleActionFindingFieldsUpdateSeverity(ctx, depth + 1));
  out.types = (depth > 4 ? [] : [""]);
  out.userDefinedFields = {};
  out.verificationState = "";
  out.workflow = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow(ctx, depth + 1));
  return out;
}

// aws:securityhub/AutomationRuleActionFindingFieldsUpdateNote:AutomationRuleActionFindingFieldsUpdateNote
export function securityhub_AutomationRuleActionFindingFieldsUpdateNote(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.text = "";
  out.updatedBy = "";
  return out;
}

// aws:securityhub/AutomationRuleActionFindingFieldsUpdateRelatedFinding:AutomationRuleActionFindingFieldsUpdateRelatedFinding
export function securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.productArn = h.arn(ctx);
  return out;
}

// aws:securityhub/AutomationRuleActionFindingFieldsUpdateSeverity:AutomationRuleActionFindingFieldsUpdateSeverity
export function securityhub_AutomationRuleActionFindingFieldsUpdateSeverity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.label = "";
  out.product = 0;
  return out;
}

// aws:securityhub/AutomationRuleActionFindingFieldsUpdateWorkflow:AutomationRuleActionFindingFieldsUpdateWorkflow
export function securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:securityhub/AutomationRuleCriteria:AutomationRuleCriteria
export function securityhub_AutomationRuleCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaAwsAccountId(ctx, depth + 1))]);
  out.awsAccountNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaAwsAccountName(ctx, depth + 1))]);
  out.companyNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaCompanyName(ctx, depth + 1))]);
  out.complianceAssociatedStandardsIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaComplianceAssociatedStandardsId(ctx, depth + 1))]);
  out.complianceSecurityControlIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaComplianceSecurityControlId(ctx, depth + 1))]);
  out.complianceStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaComplianceStatus(ctx, depth + 1))]);
  out.confidences = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaConfidence(ctx, depth + 1))]);
  out.createdAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaCreatedAt(ctx, depth + 1))]);
  out.criticalities = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaCriticality(ctx, depth + 1))]);
  out.descriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaDescription(ctx, depth + 1))]);
  out.firstObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaFirstObservedAt(ctx, depth + 1))]);
  out.generatorIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaGeneratorId(ctx, depth + 1))]);
  out.ids = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaId(ctx, depth + 1))]);
  out.lastObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaLastObservedAt(ctx, depth + 1))]);
  out.noteTexts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaNoteText(ctx, depth + 1))]);
  out.noteUpdatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaNoteUpdatedAt(ctx, depth + 1))]);
  out.noteUpdatedBies = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaNoteUpdatedBy(ctx, depth + 1))]);
  out.productArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaProductArn(ctx, depth + 1))]);
  out.productNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaProductName(ctx, depth + 1))]);
  out.recordStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaRecordState(ctx, depth + 1))]);
  out.relatedFindingsIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaRelatedFindingsId(ctx, depth + 1))]);
  out.relatedFindingsProductArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaRelatedFindingsProductArn(ctx, depth + 1))]);
  out.resourceApplicationArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceApplicationArn(ctx, depth + 1))]);
  out.resourceApplicationNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceApplicationName(ctx, depth + 1))]);
  out.resourceDetailsOthers = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceDetailsOther(ctx, depth + 1))]);
  out.resourceIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceId(ctx, depth + 1))]);
  out.resourcePartitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourcePartition(ctx, depth + 1))]);
  out.resourceRegions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceRegion(ctx, depth + 1))]);
  out.resourceTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceTag(ctx, depth + 1))]);
  out.resourceTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaResourceType(ctx, depth + 1))]);
  out.severityLabels = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaSeverityLabel(ctx, depth + 1))]);
  out.sourceUrls = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaSourceUrl(ctx, depth + 1))]);
  out.titles = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaTitle(ctx, depth + 1))]);
  out.types = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaType(ctx, depth + 1))]);
  out.updatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaUpdatedAt(ctx, depth + 1))]);
  out.userDefinedFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaUserDefinedField(ctx, depth + 1))]);
  out.verificationStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaVerificationState(ctx, depth + 1))]);
  out.workflowStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaWorkflowStatus(ctx, depth + 1))]);
  return out;
}

// aws:securityhub/AutomationRuleCriteriaAwsAccountId:AutomationRuleCriteriaAwsAccountId
export function securityhub_AutomationRuleCriteriaAwsAccountId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaAwsAccountName:AutomationRuleCriteriaAwsAccountName
export function securityhub_AutomationRuleCriteriaAwsAccountName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaCompanyName:AutomationRuleCriteriaCompanyName
export function securityhub_AutomationRuleCriteriaCompanyName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaComplianceAssociatedStandardsId:AutomationRuleCriteriaComplianceAssociatedStandardsId
export function securityhub_AutomationRuleCriteriaComplianceAssociatedStandardsId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaComplianceSecurityControlId:AutomationRuleCriteriaComplianceSecurityControlId
export function securityhub_AutomationRuleCriteriaComplianceSecurityControlId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaComplianceStatus:AutomationRuleCriteriaComplianceStatus
export function securityhub_AutomationRuleCriteriaComplianceStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaConfidence:AutomationRuleCriteriaConfidence
export function securityhub_AutomationRuleCriteriaConfidence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = 0;
  out.gt = 0;
  out.gte = 0;
  out.lt = 0;
  out.lte = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaCreatedAt:AutomationRuleCriteriaCreatedAt
export function securityhub_AutomationRuleCriteriaCreatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaCreatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaCreatedAtDateRange:AutomationRuleCriteriaCreatedAtDateRange
export function securityhub_AutomationRuleCriteriaCreatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaCriticality:AutomationRuleCriteriaCriticality
export function securityhub_AutomationRuleCriteriaCriticality(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = 0;
  out.gt = 0;
  out.gte = 0;
  out.lt = 0;
  out.lte = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaDescription:AutomationRuleCriteriaDescription
export function securityhub_AutomationRuleCriteriaDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaFirstObservedAt:AutomationRuleCriteriaFirstObservedAt
export function securityhub_AutomationRuleCriteriaFirstObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaFirstObservedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaFirstObservedAtDateRange:AutomationRuleCriteriaFirstObservedAtDateRange
export function securityhub_AutomationRuleCriteriaFirstObservedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaGeneratorId:AutomationRuleCriteriaGeneratorId
export function securityhub_AutomationRuleCriteriaGeneratorId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaId:AutomationRuleCriteriaId
export function securityhub_AutomationRuleCriteriaId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaLastObservedAt:AutomationRuleCriteriaLastObservedAt
export function securityhub_AutomationRuleCriteriaLastObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaLastObservedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaLastObservedAtDateRange:AutomationRuleCriteriaLastObservedAtDateRange
export function securityhub_AutomationRuleCriteriaLastObservedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaNoteText:AutomationRuleCriteriaNoteText
export function securityhub_AutomationRuleCriteriaNoteText(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaNoteUpdatedAt:AutomationRuleCriteriaNoteUpdatedAt
export function securityhub_AutomationRuleCriteriaNoteUpdatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaNoteUpdatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaNoteUpdatedAtDateRange:AutomationRuleCriteriaNoteUpdatedAtDateRange
export function securityhub_AutomationRuleCriteriaNoteUpdatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaNoteUpdatedBy:AutomationRuleCriteriaNoteUpdatedBy
export function securityhub_AutomationRuleCriteriaNoteUpdatedBy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaProductArn:AutomationRuleCriteriaProductArn
export function securityhub_AutomationRuleCriteriaProductArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaProductName:AutomationRuleCriteriaProductName
export function securityhub_AutomationRuleCriteriaProductName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaRecordState:AutomationRuleCriteriaRecordState
export function securityhub_AutomationRuleCriteriaRecordState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaRelatedFindingsId:AutomationRuleCriteriaRelatedFindingsId
export function securityhub_AutomationRuleCriteriaRelatedFindingsId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaRelatedFindingsProductArn:AutomationRuleCriteriaRelatedFindingsProductArn
export function securityhub_AutomationRuleCriteriaRelatedFindingsProductArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceApplicationArn:AutomationRuleCriteriaResourceApplicationArn
export function securityhub_AutomationRuleCriteriaResourceApplicationArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceApplicationName:AutomationRuleCriteriaResourceApplicationName
export function securityhub_AutomationRuleCriteriaResourceApplicationName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceDetailsOther:AutomationRuleCriteriaResourceDetailsOther
export function securityhub_AutomationRuleCriteriaResourceDetailsOther(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceId:AutomationRuleCriteriaResourceId
export function securityhub_AutomationRuleCriteriaResourceId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourcePartition:AutomationRuleCriteriaResourcePartition
export function securityhub_AutomationRuleCriteriaResourcePartition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceRegion:AutomationRuleCriteriaResourceRegion
export function securityhub_AutomationRuleCriteriaResourceRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceTag:AutomationRuleCriteriaResourceTag
export function securityhub_AutomationRuleCriteriaResourceTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaResourceType:AutomationRuleCriteriaResourceType
export function securityhub_AutomationRuleCriteriaResourceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaSeverityLabel:AutomationRuleCriteriaSeverityLabel
export function securityhub_AutomationRuleCriteriaSeverityLabel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaSourceUrl:AutomationRuleCriteriaSourceUrl
export function securityhub_AutomationRuleCriteriaSourceUrl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaTitle:AutomationRuleCriteriaTitle
export function securityhub_AutomationRuleCriteriaTitle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaType:AutomationRuleCriteriaType
export function securityhub_AutomationRuleCriteriaType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaUpdatedAt:AutomationRuleCriteriaUpdatedAt
export function securityhub_AutomationRuleCriteriaUpdatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteriaUpdatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaUpdatedAtDateRange:AutomationRuleCriteriaUpdatedAtDateRange
export function securityhub_AutomationRuleCriteriaUpdatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/AutomationRuleCriteriaUserDefinedField:AutomationRuleCriteriaUserDefinedField
export function securityhub_AutomationRuleCriteriaUserDefinedField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaVerificationState:AutomationRuleCriteriaVerificationState
export function securityhub_AutomationRuleCriteriaVerificationState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/AutomationRuleCriteriaWorkflowStatus:AutomationRuleCriteriaWorkflowStatus
export function securityhub_AutomationRuleCriteriaWorkflowStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicy:ConfigurationPolicyConfigurationPolicy
export function securityhub_ConfigurationPolicyConfigurationPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledStandardArns = (depth > 4 ? [] : [""]);
  out.securityControlsConfiguration = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration(ctx, depth + 1));
  out.serviceEnabled = false;
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration:ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disabledControlIdentifiers = (depth > 4 ? [] : [""]);
  out.enabledControlIdentifiers = (depth > 4 ? [] : [""]);
  out.securityControlCustomParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter(ctx, depth + 1))]);
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter(ctx, depth + 1))]);
  out.securityControlId = h.id(ctx, "securityControlId");
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bool = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool(ctx, depth + 1));
  out.double = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble(ctx, depth + 1));
  out.enum = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum(ctx, depth + 1));
  out.enumList = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList(ctx, depth + 1));
  out.int = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt(ctx, depth + 1));
  out.intList = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList(ctx, depth + 1));
  out.name = ctx.name;
  out.string = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString(ctx, depth + 1));
  out.stringList = (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList(ctx, depth + 1));
  out.valueType = "";
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = false;
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = 0;
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = 0;
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [0]);
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:securityhub/ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList:ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList
export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:securityhub/InsightFilters:InsightFilters
export function securityhub_InsightFilters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersAwsAccountId(ctx, depth + 1))]);
  out.companyNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersCompanyName(ctx, depth + 1))]);
  out.complianceStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersComplianceStatus(ctx, depth + 1))]);
  out.confidences = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersConfidence(ctx, depth + 1))]);
  out.createdAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersCreatedAt(ctx, depth + 1))]);
  out.criticalities = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersCriticality(ctx, depth + 1))]);
  out.descriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersDescription(ctx, depth + 1))]);
  out.findingProviderFieldsConfidences = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsConfidence(ctx, depth + 1))]);
  out.findingProviderFieldsCriticalities = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsCriticality(ctx, depth + 1))]);
  out.findingProviderFieldsRelatedFindingsIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsId(ctx, depth + 1))]);
  out.findingProviderFieldsRelatedFindingsProductArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsProductArn(ctx, depth + 1))]);
  out.findingProviderFieldsSeverityLabels = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsSeverityLabel(ctx, depth + 1))]);
  out.findingProviderFieldsSeverityOriginals = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsSeverityOriginal(ctx, depth + 1))]);
  out.findingProviderFieldsTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFindingProviderFieldsType(ctx, depth + 1))]);
  out.firstObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFirstObservedAt(ctx, depth + 1))]);
  out.generatorIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersGeneratorId(ctx, depth + 1))]);
  out.ids = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersId(ctx, depth + 1))]);
  out.keywords = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersKeyword(ctx, depth + 1))]);
  out.lastObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersLastObservedAt(ctx, depth + 1))]);
  out.malwareNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersMalwareName(ctx, depth + 1))]);
  out.malwarePaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersMalwarePath(ctx, depth + 1))]);
  out.malwareStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersMalwareState(ctx, depth + 1))]);
  out.malwareTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersMalwareType(ctx, depth + 1))]);
  out.networkDestinationDomains = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkDestinationDomain(ctx, depth + 1))]);
  out.networkDestinationIpv4s = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkDestinationIpv4(ctx, depth + 1))]);
  out.networkDestinationIpv6s = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkDestinationIpv6(ctx, depth + 1))]);
  out.networkDestinationPorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkDestinationPort(ctx, depth + 1))]);
  out.networkDirections = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkDirection(ctx, depth + 1))]);
  out.networkProtocols = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkProtocol(ctx, depth + 1))]);
  out.networkSourceDomains = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkSourceDomain(ctx, depth + 1))]);
  out.networkSourceIpv4s = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkSourceIpv4(ctx, depth + 1))]);
  out.networkSourceIpv6s = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkSourceIpv6(ctx, depth + 1))]);
  out.networkSourceMacs = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkSourceMac(ctx, depth + 1))]);
  out.networkSourcePorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNetworkSourcePort(ctx, depth + 1))]);
  out.noteTexts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNoteText(ctx, depth + 1))]);
  out.noteUpdatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNoteUpdatedAt(ctx, depth + 1))]);
  out.noteUpdatedBies = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNoteUpdatedBy(ctx, depth + 1))]);
  out.processLaunchedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessLaunchedAt(ctx, depth + 1))]);
  out.processNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessName(ctx, depth + 1))]);
  out.processParentPids = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessParentPid(ctx, depth + 1))]);
  out.processPaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessPath(ctx, depth + 1))]);
  out.processPids = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessPid(ctx, depth + 1))]);
  out.processTerminatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessTerminatedAt(ctx, depth + 1))]);
  out.productArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProductArn(ctx, depth + 1))]);
  out.productFields = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProductField(ctx, depth + 1))]);
  out.productNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProductName(ctx, depth + 1))]);
  out.recommendationTexts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersRecommendationText(ctx, depth + 1))]);
  out.recordStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersRecordState(ctx, depth + 1))]);
  out.relatedFindingsIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersRelatedFindingsId(ctx, depth + 1))]);
  out.relatedFindingsProductArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersRelatedFindingsProductArn(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceIamInstanceProfileArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceImageIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceImageId(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceIpv4Addresses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceIpv4Address(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceIpv6Addresses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceIpv6Address(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceKeyNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceKeyName(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceLaunchedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceLaunchedAt(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceSubnetIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceSubnetId(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceType(ctx, depth + 1))]);
  out.resourceAwsEc2InstanceVpcIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceVpcId(ctx, depth + 1))]);
  out.resourceAwsIamAccessKeyCreatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAt(ctx, depth + 1))]);
  out.resourceAwsIamAccessKeyStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsIamAccessKeyStatus(ctx, depth + 1))]);
  out.resourceAwsIamAccessKeyUserNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsIamAccessKeyUserName(ctx, depth + 1))]);
  out.resourceAwsS3BucketOwnerIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsS3BucketOwnerId(ctx, depth + 1))]);
  out.resourceAwsS3BucketOwnerNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsS3BucketOwnerName(ctx, depth + 1))]);
  out.resourceContainerImageIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceContainerImageId(ctx, depth + 1))]);
  out.resourceContainerImageNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceContainerImageName(ctx, depth + 1))]);
  out.resourceContainerLaunchedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceContainerLaunchedAt(ctx, depth + 1))]);
  out.resourceContainerNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceContainerName(ctx, depth + 1))]);
  out.resourceDetailsOthers = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceDetailsOther(ctx, depth + 1))]);
  out.resourceIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceId(ctx, depth + 1))]);
  out.resourcePartitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourcePartition(ctx, depth + 1))]);
  out.resourceRegions = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceRegion(ctx, depth + 1))]);
  out.resourceTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceTag(ctx, depth + 1))]);
  out.resourceTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceType(ctx, depth + 1))]);
  out.severityLabels = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersSeverityLabel(ctx, depth + 1))]);
  out.sourceUrls = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersSourceUrl(ctx, depth + 1))]);
  out.threatIntelIndicatorCategories = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorCategory(ctx, depth + 1))]);
  out.threatIntelIndicatorLastObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorLastObservedAt(ctx, depth + 1))]);
  out.threatIntelIndicatorSourceUrls = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorSourceUrl(ctx, depth + 1))]);
  out.threatIntelIndicatorSources = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorSource(ctx, depth + 1))]);
  out.threatIntelIndicatorTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorType(ctx, depth + 1))]);
  out.threatIntelIndicatorValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorValue(ctx, depth + 1))]);
  out.titles = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersTitle(ctx, depth + 1))]);
  out.types = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersType(ctx, depth + 1))]);
  out.updatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersUpdatedAt(ctx, depth + 1))]);
  out.userDefinedValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersUserDefinedValue(ctx, depth + 1))]);
  out.verificationStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersVerificationState(ctx, depth + 1))]);
  out.workflowStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersWorkflowStatus(ctx, depth + 1))]);
  return out;
}

// aws:securityhub/InsightFiltersAwsAccountId:InsightFiltersAwsAccountId
export function securityhub_InsightFiltersAwsAccountId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersCompanyName:InsightFiltersCompanyName
export function securityhub_InsightFiltersCompanyName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersComplianceStatus:InsightFiltersComplianceStatus
export function securityhub_InsightFiltersComplianceStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersConfidence:InsightFiltersConfidence
export function securityhub_InsightFiltersConfidence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersCreatedAt:InsightFiltersCreatedAt
export function securityhub_InsightFiltersCreatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersCreatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersCreatedAtDateRange:InsightFiltersCreatedAtDateRange
export function securityhub_InsightFiltersCreatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersCriticality:InsightFiltersCriticality
export function securityhub_InsightFiltersCriticality(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersDescription:InsightFiltersDescription
export function securityhub_InsightFiltersDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsConfidence:InsightFiltersFindingProviderFieldsConfidence
export function securityhub_InsightFiltersFindingProviderFieldsConfidence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsCriticality:InsightFiltersFindingProviderFieldsCriticality
export function securityhub_InsightFiltersFindingProviderFieldsCriticality(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsRelatedFindingsId:InsightFiltersFindingProviderFieldsRelatedFindingsId
export function securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsRelatedFindingsProductArn:InsightFiltersFindingProviderFieldsRelatedFindingsProductArn
export function securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsProductArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsSeverityLabel:InsightFiltersFindingProviderFieldsSeverityLabel
export function securityhub_InsightFiltersFindingProviderFieldsSeverityLabel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsSeverityOriginal:InsightFiltersFindingProviderFieldsSeverityOriginal
export function securityhub_InsightFiltersFindingProviderFieldsSeverityOriginal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFindingProviderFieldsType:InsightFiltersFindingProviderFieldsType
export function securityhub_InsightFiltersFindingProviderFieldsType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersFirstObservedAt:InsightFiltersFirstObservedAt
export function securityhub_InsightFiltersFirstObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersFirstObservedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersFirstObservedAtDateRange:InsightFiltersFirstObservedAtDateRange
export function securityhub_InsightFiltersFirstObservedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersGeneratorId:InsightFiltersGeneratorId
export function securityhub_InsightFiltersGeneratorId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersId:InsightFiltersId
export function securityhub_InsightFiltersId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersKeyword:InsightFiltersKeyword
export function securityhub_InsightFiltersKeyword(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersLastObservedAt:InsightFiltersLastObservedAt
export function securityhub_InsightFiltersLastObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersLastObservedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersLastObservedAtDateRange:InsightFiltersLastObservedAtDateRange
export function securityhub_InsightFiltersLastObservedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersMalwareName:InsightFiltersMalwareName
export function securityhub_InsightFiltersMalwareName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersMalwarePath:InsightFiltersMalwarePath
export function securityhub_InsightFiltersMalwarePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersMalwareState:InsightFiltersMalwareState
export function securityhub_InsightFiltersMalwareState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersMalwareType:InsightFiltersMalwareType
export function securityhub_InsightFiltersMalwareType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkDestinationDomain:InsightFiltersNetworkDestinationDomain
export function securityhub_InsightFiltersNetworkDestinationDomain(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkDestinationIpv4:InsightFiltersNetworkDestinationIpv4
export function securityhub_InsightFiltersNetworkDestinationIpv4(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersNetworkDestinationIpv6:InsightFiltersNetworkDestinationIpv6
export function securityhub_InsightFiltersNetworkDestinationIpv6(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersNetworkDestinationPort:InsightFiltersNetworkDestinationPort
export function securityhub_InsightFiltersNetworkDestinationPort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkDirection:InsightFiltersNetworkDirection
export function securityhub_InsightFiltersNetworkDirection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkProtocol:InsightFiltersNetworkProtocol
export function securityhub_InsightFiltersNetworkProtocol(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkSourceDomain:InsightFiltersNetworkSourceDomain
export function securityhub_InsightFiltersNetworkSourceDomain(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkSourceIpv4:InsightFiltersNetworkSourceIpv4
export function securityhub_InsightFiltersNetworkSourceIpv4(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersNetworkSourceIpv6:InsightFiltersNetworkSourceIpv6
export function securityhub_InsightFiltersNetworkSourceIpv6(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersNetworkSourceMac:InsightFiltersNetworkSourceMac
export function securityhub_InsightFiltersNetworkSourceMac(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNetworkSourcePort:InsightFiltersNetworkSourcePort
export function securityhub_InsightFiltersNetworkSourcePort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersNoteText:InsightFiltersNoteText
export function securityhub_InsightFiltersNoteText(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersNoteUpdatedAt:InsightFiltersNoteUpdatedAt
export function securityhub_InsightFiltersNoteUpdatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersNoteUpdatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersNoteUpdatedAtDateRange:InsightFiltersNoteUpdatedAtDateRange
export function securityhub_InsightFiltersNoteUpdatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersNoteUpdatedBy:InsightFiltersNoteUpdatedBy
export function securityhub_InsightFiltersNoteUpdatedBy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessLaunchedAt:InsightFiltersProcessLaunchedAt
export function securityhub_InsightFiltersProcessLaunchedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessLaunchedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessLaunchedAtDateRange:InsightFiltersProcessLaunchedAtDateRange
export function securityhub_InsightFiltersProcessLaunchedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersProcessName:InsightFiltersProcessName
export function securityhub_InsightFiltersProcessName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessParentPid:InsightFiltersProcessParentPid
export function securityhub_InsightFiltersProcessParentPid(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessPath:InsightFiltersProcessPath
export function securityhub_InsightFiltersProcessPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessPid:InsightFiltersProcessPid
export function securityhub_InsightFiltersProcessPid(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eq = "";
  out.gte = "";
  out.lte = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessTerminatedAt:InsightFiltersProcessTerminatedAt
export function securityhub_InsightFiltersProcessTerminatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersProcessTerminatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersProcessTerminatedAtDateRange:InsightFiltersProcessTerminatedAtDateRange
export function securityhub_InsightFiltersProcessTerminatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersProductArn:InsightFiltersProductArn
export function securityhub_InsightFiltersProductArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersProductField:InsightFiltersProductField
export function securityhub_InsightFiltersProductField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersProductName:InsightFiltersProductName
export function securityhub_InsightFiltersProductName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersRecommendationText:InsightFiltersRecommendationText
export function securityhub_InsightFiltersRecommendationText(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersRecordState:InsightFiltersRecordState
export function securityhub_InsightFiltersRecordState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersRelatedFindingsId:InsightFiltersRelatedFindingsId
export function securityhub_InsightFiltersRelatedFindingsId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersRelatedFindingsProductArn:InsightFiltersRelatedFindingsProductArn
export function securityhub_InsightFiltersRelatedFindingsProductArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn:InsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn
export function securityhub_InsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceImageId:InsightFiltersResourceAwsEc2InstanceImageId
export function securityhub_InsightFiltersResourceAwsEc2InstanceImageId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceIpv4Address:InsightFiltersResourceAwsEc2InstanceIpv4Address
export function securityhub_InsightFiltersResourceAwsEc2InstanceIpv4Address(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceIpv6Address:InsightFiltersResourceAwsEc2InstanceIpv6Address
export function securityhub_InsightFiltersResourceAwsEc2InstanceIpv6Address(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceKeyName:InsightFiltersResourceAwsEc2InstanceKeyName
export function securityhub_InsightFiltersResourceAwsEc2InstanceKeyName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceLaunchedAt:InsightFiltersResourceAwsEc2InstanceLaunchedAt
export function securityhub_InsightFiltersResourceAwsEc2InstanceLaunchedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange:InsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange
export function securityhub_InsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceSubnetId:InsightFiltersResourceAwsEc2InstanceSubnetId
export function securityhub_InsightFiltersResourceAwsEc2InstanceSubnetId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceType:InsightFiltersResourceAwsEc2InstanceType
export function securityhub_InsightFiltersResourceAwsEc2InstanceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsEc2InstanceVpcId:InsightFiltersResourceAwsEc2InstanceVpcId
export function securityhub_InsightFiltersResourceAwsEc2InstanceVpcId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsIamAccessKeyCreatedAt:InsightFiltersResourceAwsIamAccessKeyCreatedAt
export function securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange:InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange
export function securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsIamAccessKeyStatus:InsightFiltersResourceAwsIamAccessKeyStatus
export function securityhub_InsightFiltersResourceAwsIamAccessKeyStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsIamAccessKeyUserName:InsightFiltersResourceAwsIamAccessKeyUserName
export function securityhub_InsightFiltersResourceAwsIamAccessKeyUserName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsS3BucketOwnerId:InsightFiltersResourceAwsS3BucketOwnerId
export function securityhub_InsightFiltersResourceAwsS3BucketOwnerId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceAwsS3BucketOwnerName:InsightFiltersResourceAwsS3BucketOwnerName
export function securityhub_InsightFiltersResourceAwsS3BucketOwnerName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceContainerImageId:InsightFiltersResourceContainerImageId
export function securityhub_InsightFiltersResourceContainerImageId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceContainerImageName:InsightFiltersResourceContainerImageName
export function securityhub_InsightFiltersResourceContainerImageName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceContainerLaunchedAt:InsightFiltersResourceContainerLaunchedAt
export function securityhub_InsightFiltersResourceContainerLaunchedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersResourceContainerLaunchedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceContainerLaunchedAtDateRange:InsightFiltersResourceContainerLaunchedAtDateRange
export function securityhub_InsightFiltersResourceContainerLaunchedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersResourceContainerName:InsightFiltersResourceContainerName
export function securityhub_InsightFiltersResourceContainerName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceDetailsOther:InsightFiltersResourceDetailsOther
export function securityhub_InsightFiltersResourceDetailsOther(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceId:InsightFiltersResourceId
export function securityhub_InsightFiltersResourceId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourcePartition:InsightFiltersResourcePartition
export function securityhub_InsightFiltersResourcePartition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceRegion:InsightFiltersResourceRegion
export function securityhub_InsightFiltersResourceRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceTag:InsightFiltersResourceTag
export function securityhub_InsightFiltersResourceTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersResourceType:InsightFiltersResourceType
export function securityhub_InsightFiltersResourceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersSeverityLabel:InsightFiltersSeverityLabel
export function securityhub_InsightFiltersSeverityLabel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersSourceUrl:InsightFiltersSourceUrl
export function securityhub_InsightFiltersSourceUrl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorCategory:InsightFiltersThreatIntelIndicatorCategory
export function securityhub_InsightFiltersThreatIntelIndicatorCategory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorLastObservedAt:InsightFiltersThreatIntelIndicatorLastObservedAt
export function securityhub_InsightFiltersThreatIntelIndicatorLastObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersThreatIntelIndicatorLastObservedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorLastObservedAtDateRange:InsightFiltersThreatIntelIndicatorLastObservedAtDateRange
export function securityhub_InsightFiltersThreatIntelIndicatorLastObservedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorSource:InsightFiltersThreatIntelIndicatorSource
export function securityhub_InsightFiltersThreatIntelIndicatorSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorSourceUrl:InsightFiltersThreatIntelIndicatorSourceUrl
export function securityhub_InsightFiltersThreatIntelIndicatorSourceUrl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorType:InsightFiltersThreatIntelIndicatorType
export function securityhub_InsightFiltersThreatIntelIndicatorType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersThreatIntelIndicatorValue:InsightFiltersThreatIntelIndicatorValue
export function securityhub_InsightFiltersThreatIntelIndicatorValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersTitle:InsightFiltersTitle
export function securityhub_InsightFiltersTitle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersType:InsightFiltersType
export function securityhub_InsightFiltersType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersUpdatedAt:InsightFiltersUpdatedAt
export function securityhub_InsightFiltersUpdatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateRange = (depth > 4 ? {} : T_securityhub.securityhub_InsightFiltersUpdatedAtDateRange(ctx, depth + 1));
  out.end = "";
  out.start = "";
  return out;
}

// aws:securityhub/InsightFiltersUpdatedAtDateRange:InsightFiltersUpdatedAtDateRange
export function securityhub_InsightFiltersUpdatedAtDateRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:securityhub/InsightFiltersUserDefinedValue:InsightFiltersUserDefinedValue
export function securityhub_InsightFiltersUserDefinedValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersVerificationState:InsightFiltersVerificationState
export function securityhub_InsightFiltersVerificationState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/InsightFiltersWorkflowStatus:InsightFiltersWorkflowStatus
export function securityhub_InsightFiltersWorkflowStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:securityhub/OrganizationConfigurationOrganizationConfiguration:OrganizationConfigurationOrganizationConfiguration
export function securityhub_OrganizationConfigurationOrganizationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationType = "";
  return out;
}

// aws:securityhub/getStandardsControlAssociationsStandardsControlAssociation:getStandardsControlAssociationsStandardsControlAssociation
export function securityhub_getStandardsControlAssociationsStandardsControlAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationStatus = "";
  out.relatedRequirements = (depth > 4 ? [] : [""]);
  out.securityControlArn = h.arn(ctx);
  out.securityControlId = h.id(ctx, "securityControlId");
  out.standardsArn = h.arn(ctx);
  out.standardsControlDescription = "";
  out.standardsControlTitle = "";
  out.updatedAt = "";
  out.updatedReason = "";
  return out;
}

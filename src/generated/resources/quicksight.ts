// GENERATED FILE — do not edit.
// Service: quicksight   (20 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_quicksight from "../types/quicksight.js";

// aws:quicksight/accountSettings:AccountSettings
export function AccountSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.defaultNamespace = (i.defaultNamespace !== undefined ? i.defaultNamespace : "");
  out.terminationProtectionEnabled = (i.terminationProtectionEnabled !== undefined ? i.terminationProtectionEnabled : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_quicksight.quicksight_AccountSettingsTimeouts(ctx, depth + 1)));
  return out;
}

// aws:quicksight/accountSubscription:AccountSubscription
export function AccountSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountName = (i.accountName !== undefined ? i.accountName : "");
  out.accountSubscriptionStatus = "";
  out.activeDirectoryName = (i.activeDirectoryName !== undefined ? i.activeDirectoryName : "");
  out.adminGroups = (i.adminGroups !== undefined ? i.adminGroups : (depth > 4 ? [] : [""]));
  out.authenticationMethod = (i.authenticationMethod !== undefined ? i.authenticationMethod : "");
  out.authorGroups = (i.authorGroups !== undefined ? i.authorGroups : (depth > 4 ? [] : [""]));
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.contactNumber = (i.contactNumber !== undefined ? i.contactNumber : "");
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.edition = (i.edition !== undefined ? i.edition : "");
  out.emailAddress = (i.emailAddress !== undefined ? i.emailAddress : "");
  out.firstName = (i.firstName !== undefined ? i.firstName : "");
  out.iamIdentityCenterInstanceArn = (i.iamIdentityCenterInstanceArn !== undefined ? i.iamIdentityCenterInstanceArn : h.arn(ctx));
  out.lastName = (i.lastName !== undefined ? i.lastName : "");
  out.notificationEmail = (i.notificationEmail !== undefined ? i.notificationEmail : "");
  out.readerGroups = (i.readerGroups !== undefined ? i.readerGroups : (depth > 4 ? [] : [""]));
  out.realm = (i.realm !== undefined ? i.realm : "");
  return out;
}

// aws:quicksight/analysis:Analysis
export function Analysis(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.analysisId = (i.analysisId !== undefined ? i.analysisId : h.id(ctx, "analysisId"));
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.lastPublishedTime = "";
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? {} : T_quicksight.quicksight_AnalysisParameters(ctx, depth + 1)));
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_AnalysisPermission(ctx, depth + 1))]));
  out.recoveryWindowInDays = (i.recoveryWindowInDays !== undefined ? i.recoveryWindowInDays : 0);
  out.sourceEntity = (i.sourceEntity !== undefined ? i.sourceEntity : (depth > 4 ? {} : T_quicksight.quicksight_AnalysisSourceEntity(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.themeArn = (i.themeArn !== undefined ? i.themeArn : h.arn(ctx));
  return out;
}

// aws:quicksight/dashboard:Dashboard
export function Dashboard(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.dashboardId = (i.dashboardId !== undefined ? i.dashboardId : h.id(ctx, "dashboardId"));
  out.dashboardPublishOptions = (i.dashboardPublishOptions !== undefined ? i.dashboardPublishOptions : (depth > 4 ? {} : T_quicksight.quicksight_DashboardDashboardPublishOptions(ctx, depth + 1)));
  out.lastPublishedTime = "";
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? {} : T_quicksight.quicksight_DashboardParameters(ctx, depth + 1)));
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DashboardPermission(ctx, depth + 1))]));
  out.sourceEntity = (i.sourceEntity !== undefined ? i.sourceEntity : (depth > 4 ? {} : T_quicksight.quicksight_DashboardSourceEntity(ctx, depth + 1)));
  out.sourceEntityArn = h.arn(ctx);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.themeArn = (i.themeArn !== undefined ? i.themeArn : h.arn(ctx));
  out.versionDescription = (i.versionDescription !== undefined ? i.versionDescription : "");
  out.versionNumber = 0;
  return out;
}

// aws:quicksight/dataSet:DataSet
export function DataSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.columnGroups = (i.columnGroups !== undefined ? i.columnGroups : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetColumnGroup(ctx, depth + 1))]));
  out.columnLevelPermissionRules = (i.columnLevelPermissionRules !== undefined ? i.columnLevelPermissionRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetColumnLevelPermissionRule(ctx, depth + 1))]));
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.dataSetUsageConfiguration = (i.dataSetUsageConfiguration !== undefined ? i.dataSetUsageConfiguration : (depth > 4 ? {} : T_quicksight.quicksight_DataSetDataSetUsageConfiguration(ctx, depth + 1)));
  out.fieldFolders = (i.fieldFolders !== undefined ? i.fieldFolders : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetFieldFolder(ctx, depth + 1))]));
  out.importMode = (i.importMode !== undefined ? i.importMode : "");
  out.logicalTableMaps = (i.logicalTableMaps !== undefined ? i.logicalTableMaps : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetLogicalTableMap(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputColumns = (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetOutputColumn(ctx, depth + 1))]);
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetPermission(ctx, depth + 1))]));
  out.physicalTableMaps = (i.physicalTableMaps !== undefined ? i.physicalTableMaps : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSetPhysicalTableMap(ctx, depth + 1))]));
  out.refreshProperties = (i.refreshProperties !== undefined ? i.refreshProperties : (depth > 4 ? {} : T_quicksight.quicksight_DataSetRefreshProperties(ctx, depth + 1)));
  out.rowLevelPermissionDataSet = (i.rowLevelPermissionDataSet !== undefined ? i.rowLevelPermissionDataSet : (depth > 4 ? {} : T_quicksight.quicksight_DataSetRowLevelPermissionDataSet(ctx, depth + 1)));
  out.rowLevelPermissionTagConfiguration = (i.rowLevelPermissionTagConfiguration !== undefined ? i.rowLevelPermissionTagConfiguration : (depth > 4 ? {} : T_quicksight.quicksight_DataSetRowLevelPermissionTagConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:quicksight/dataSource:DataSource
export function DataSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.credentials = (i.credentials !== undefined ? i.credentials : (depth > 4 ? {} : T_quicksight.quicksight_DataSourceCredentials(ctx, depth + 1)));
  out.dataSourceId = (i.dataSourceId !== undefined ? i.dataSourceId : h.id(ctx, "dataSourceId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? {} : T_quicksight.quicksight_DataSourceParameters(ctx, depth + 1)));
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_DataSourcePermission(ctx, depth + 1))]));
  out.sslProperties = (i.sslProperties !== undefined ? i.sslProperties : (depth > 4 ? {} : T_quicksight.quicksight_DataSourceSslProperties(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.vpcConnectionProperties = (i.vpcConnectionProperties !== undefined ? i.vpcConnectionProperties : (depth > 4 ? {} : T_quicksight.quicksight_DataSourceVpcConnectionProperties(ctx, depth + 1)));
  return out;
}

// aws:quicksight/folder:Folder
export function Folder(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.folderId = (i.folderId !== undefined ? i.folderId : h.id(ctx, "folderId"));
  out.folderPaths = (depth > 4 ? [] : [""]);
  out.folderType = (i.folderType !== undefined ? i.folderType : "");
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parentFolderArn = (i.parentFolderArn !== undefined ? i.parentFolderArn : h.arn(ctx));
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_FolderPermission(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:quicksight/folderMembership:FolderMembership
export function FolderMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.folderId = (i.folderId !== undefined ? i.folderId : h.id(ctx, "folderId"));
  out.memberId = (i.memberId !== undefined ? i.memberId : h.id(ctx, "memberId"));
  out.memberType = (i.memberType !== undefined ? i.memberType : "");
  return out;
}

// aws:quicksight/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  return out;
}

// aws:quicksight/groupMembership:GroupMembership
export function GroupMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.memberName = (i.memberName !== undefined ? i.memberName : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  return out;
}

// aws:quicksight/iamPolicyAssignment:IamPolicyAssignment
export function IamPolicyAssignment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignmentId = h.id(ctx, "assignmentId");
  out.assignmentName = (i.assignmentName !== undefined ? i.assignmentName : "");
  out.assignmentStatus = (i.assignmentStatus !== undefined ? i.assignmentStatus : "");
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.identities = (i.identities !== undefined ? i.identities : (depth > 4 ? {} : T_quicksight.quicksight_IamPolicyAssignmentIdentities(ctx, depth + 1)));
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : h.arn(ctx));
  return out;
}

// aws:quicksight/ingestion:Ingestion
export function Ingestion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.ingestionId = (i.ingestionId !== undefined ? i.ingestionId : h.id(ctx, "ingestionId"));
  out.ingestionStatus = "";
  out.ingestionType = (i.ingestionType !== undefined ? i.ingestionType : "");
  return out;
}

// aws:quicksight/namespace:Namespace
export function Namespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.capacityRegion = "";
  out.creationStatus = "";
  out.identityStore = (i.identityStore !== undefined ? i.identityStore : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_quicksight.quicksight_NamespaceTimeouts(ctx, depth + 1)));
  return out;
}

// aws:quicksight/refreshSchedule:RefreshSchedule
export function RefreshSchedule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.dataSetId = (i.dataSetId !== undefined ? i.dataSetId : h.id(ctx, "dataSetId"));
  out.schedule = (i.schedule !== undefined ? i.schedule : (depth > 4 ? {} : T_quicksight.quicksight_RefreshScheduleSchedule(ctx, depth + 1)));
  out.scheduleId = (i.scheduleId !== undefined ? i.scheduleId : h.id(ctx, "scheduleId"));
  return out;
}

// aws:quicksight/roleMembership:RoleMembership
export function RoleMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.memberName = (i.memberName !== undefined ? i.memberName : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.role = (i.role !== undefined ? i.role : "");
  return out;
}

// aws:quicksight/template:Template
export function Template(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.createdTime = h.timestamp();
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_TemplatePermission(ctx, depth + 1))]));
  out.sourceEntity = (i.sourceEntity !== undefined ? i.sourceEntity : (depth > 4 ? {} : T_quicksight.quicksight_TemplateSourceEntity(ctx, depth + 1)));
  out.sourceEntityArn = h.arn(ctx);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateId = (i.templateId !== undefined ? i.templateId : h.id(ctx, "templateId"));
  out.versionDescription = (i.versionDescription !== undefined ? i.versionDescription : "");
  out.versionNumber = 0;
  return out;
}

// aws:quicksight/templateAlias:TemplateAlias
export function TemplateAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasName = (i.aliasName !== undefined ? i.aliasName : "");
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.templateId = (i.templateId !== undefined ? i.templateId : h.id(ctx, "templateId"));
  out.templateVersionNumber = (i.templateVersionNumber !== undefined ? i.templateVersionNumber : 0);
  return out;
}

// aws:quicksight/theme:Theme
export function Theme(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.baseThemeId = (i.baseThemeId !== undefined ? i.baseThemeId : h.id(ctx, "baseThemeId"));
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_quicksight.quicksight_ThemeConfiguration(ctx, depth + 1)));
  out.createdTime = h.timestamp();
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.permissions = (i.permissions !== undefined ? i.permissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_quicksight.quicksight_ThemePermission(ctx, depth + 1))]));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.themeId = (i.themeId !== undefined ? i.themeId : h.id(ctx, "themeId"));
  out.versionDescription = (i.versionDescription !== undefined ? i.versionDescription : "");
  out.versionNumber = 0;
  return out;
}

// aws:quicksight/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.email = (i.email !== undefined ? i.email : "");
  out.iamArn = (i.iamArn !== undefined ? i.iamArn : h.arn(ctx));
  out.identityType = (i.identityType !== undefined ? i.identityType : "");
  out.namespace = (i.namespace !== undefined ? i.namespace : "");
  out.sessionName = (i.sessionName !== undefined ? i.sessionName : "");
  out.userInvitationUrl = h.endpoint(ctx, "userInvitationUrl");
  out.userName = (i.userName !== undefined ? i.userName : "");
  out.userRole = (i.userRole !== undefined ? i.userRole : "");
  return out;
}

// aws:quicksight/vpcConnection:VpcConnection
export function VpcConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityStatus = "";
  out.awsAccountId = (i.awsAccountId !== undefined ? i.awsAccountId : h.id(ctx, "awsAccountId"));
  out.dnsResolvers = (i.dnsResolvers !== undefined ? i.dnsResolvers : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_quicksight.quicksight_VpcConnectionTimeouts(ctx, depth + 1)));
  out.vpcConnectionId = (i.vpcConnectionId !== undefined ? i.vpcConnectionId : h.id(ctx, "vpcConnectionId"));
  return out;
}

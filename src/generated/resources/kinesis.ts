// GENERATED FILE — do not edit.
// Service: kinesis   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kinesis from "../types/kinesis.js";

// aws:kinesis/analyticsApplication:AnalyticsApplication
export function AnalyticsApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = undefined;
  out.cloudwatchLoggingOptions = (i.cloudwatchLoggingOptions !== undefined ? i.cloudwatchLoggingOptions : (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationCloudwatchLoggingOptions(ctx, depth + 1)));
  out.code = (i.code !== undefined ? i.code : "");
  out.createTimestamp = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.inputs = (i.inputs !== undefined ? i.inputs : (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationInputs(ctx, depth + 1)));
  out.lastUpdateTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.outputs = (i.outputs !== undefined ? i.outputs : (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationOutput(ctx, depth + 1))]));
  out.referenceDataSources = (i.referenceDataSources !== undefined ? i.referenceDataSources : (depth > 4 ? {} : T_kinesis.kinesis_AnalyticsApplicationReferenceDataSources(ctx, depth + 1)));
  out.startApplication = (i.startApplication !== undefined ? i.startApplication : false);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = 0;
  return out;
}

// aws:kinesis/firehoseDeliveryStream:FirehoseDeliveryStream
export function FirehoseDeliveryStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.destination = (i.destination !== undefined ? i.destination : "");
  out.destinationId = (i.destinationId !== undefined ? i.destinationId : h.id(ctx, "destinationId"));
  out.elasticsearchConfiguration = (i.elasticsearchConfiguration !== undefined ? i.elasticsearchConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamElasticsearchConfiguration(ctx, depth + 1)));
  out.extendedS3Configuration = (i.extendedS3Configuration !== undefined ? i.extendedS3Configuration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamExtendedS3Configuration(ctx, depth + 1)));
  out.httpEndpointConfiguration = (i.httpEndpointConfiguration !== undefined ? i.httpEndpointConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration(ctx, depth + 1)));
  out.icebergConfiguration = (i.icebergConfiguration !== undefined ? i.icebergConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamIcebergConfiguration(ctx, depth + 1)));
  out.kinesisSourceConfiguration = (i.kinesisSourceConfiguration !== undefined ? i.kinesisSourceConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration(ctx, depth + 1)));
  out.mskSourceConfiguration = (i.mskSourceConfiguration !== undefined ? i.mskSourceConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamMskSourceConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.opensearchConfiguration = (i.opensearchConfiguration !== undefined ? i.opensearchConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchConfiguration(ctx, depth + 1)));
  out.opensearchserverlessConfiguration = (i.opensearchserverlessConfiguration !== undefined ? i.opensearchserverlessConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration(ctx, depth + 1)));
  out.redshiftConfiguration = (i.redshiftConfiguration !== undefined ? i.redshiftConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamRedshiftConfiguration(ctx, depth + 1)));
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamServerSideEncryption(ctx, depth + 1)));
  out.snowflakeConfiguration = (i.snowflakeConfiguration !== undefined ? i.snowflakeConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSnowflakeConfiguration(ctx, depth + 1)));
  out.splunkConfiguration = (i.splunkConfiguration !== undefined ? i.splunkConfiguration : (depth > 4 ? {} : T_kinesis.kinesis_FirehoseDeliveryStreamSplunkConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionId = (i.versionId !== undefined ? i.versionId : h.id(ctx, "versionId"));
  return out;
}

// aws:kinesis/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:kinesis/stream:Stream
export function Stream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.encryptionType = (i.encryptionType !== undefined ? i.encryptionType : "");
  out.enforceConsumerDeletion = (i.enforceConsumerDeletion !== undefined ? i.enforceConsumerDeletion : false);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : 0);
  out.shardCount = (i.shardCount !== undefined ? i.shardCount : 1);
  out.shardLevelMetrics = (i.shardLevelMetrics !== undefined ? i.shardLevelMetrics : (depth > 4 ? [] : [""]));
  out.streamModeDetails = (i.streamModeDetails !== undefined ? i.streamModeDetails : (depth > 4 ? {} : T_kinesis.kinesis_StreamStreamModeDetails(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:kinesis/streamConsumer:StreamConsumer
export function StreamConsumer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.streamArn = (i.streamArn !== undefined ? i.streamArn : h.arn(ctx));
  return out;
}

// aws:kinesis/videoStream:VideoStream
export function VideoStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.dataRetentionInHours = (i.dataRetentionInHours !== undefined ? i.dataRetentionInHours : 0);
  out.deviceName = (i.deviceName !== undefined ? i.deviceName : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.mediaType = (i.mediaType !== undefined ? i.mediaType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = "1";
  return out;
}

// GENERATED FILE — do not edit.
// Service: medialive   (176 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_medialive from "./medialive.js";

// aws:medialive/ChannelCdiInputSpecification:ChannelCdiInputSpecification
export function medialive_ChannelCdiInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resolution = "";
  return out;
}

// aws:medialive/ChannelDestination:ChannelDestination
export function medialive_ChannelDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.mediaPackageSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelDestinationMediaPackageSetting(ctx, depth + 1))]);
  out.multiplexSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelDestinationMultiplexSettings(ctx, depth + 1));
  out.settings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelDestinationSetting(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelDestinationMediaPackageSetting:ChannelDestinationMediaPackageSetting
export function medialive_ChannelDestinationMediaPackageSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channelId = h.id(ctx, "channelId");
  return out;
}

// aws:medialive/ChannelDestinationMultiplexSettings:ChannelDestinationMultiplexSettings
export function medialive_ChannelDestinationMultiplexSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.multiplexId = h.id(ctx, "multiplexId");
  out.programName = "";
  return out;
}

// aws:medialive/ChannelDestinationSetting:ChannelDestinationSetting
export function medialive_ChannelDestinationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.streamName = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettings:ChannelEncoderSettings
export function medialive_ChannelEncoderSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioDescriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescription(ctx, depth + 1))]);
  out.availBlanking = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAvailBlanking(ctx, depth + 1));
  out.captionDescriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescription(ctx, depth + 1))]);
  out.globalConfiguration = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsGlobalConfiguration(ctx, depth + 1));
  out.motionGraphicsConfiguration = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsMotionGraphicsConfiguration(ctx, depth + 1));
  out.nielsenConfiguration = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsNielsenConfiguration(ctx, depth + 1));
  out.outputGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroup(ctx, depth + 1))]);
  out.timecodeConfig = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsTimecodeConfig(ctx, depth + 1));
  out.videoDescriptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescription(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescription:ChannelEncoderSettingsAudioDescription
export function medialive_ChannelEncoderSettingsAudioDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioNormalizationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings(ctx, depth + 1));
  out.audioSelectorName = "";
  out.audioType = "";
  out.audioTypeControl = "";
  out.audioWatermarkSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings(ctx, depth + 1));
  out.codecSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings(ctx, depth + 1));
  out.languageCode = "";
  out.languageCodeControl = "";
  out.name = ctx.name;
  out.remixSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings(ctx, depth + 1));
  out.streamName = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings:ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.algorithm = "";
  out.algorithmControl = "";
  out.targetLkfs = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings:ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nielsenWatermarksSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings:ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nielsenCbetSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings(ctx, depth + 1));
  out.nielsenDistributionType = "";
  out.nielsenNaesIiNwSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings:ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cbetCheckDigitString = "";
  out.cbetStepaside = "";
  out.csid = h.id(ctx, "csid");
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting:ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting
export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.checkDigitString = "";
  out.sid = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettings:ChannelEncoderSettingsAudioDescriptionCodecSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aacSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings(ctx, depth + 1));
  out.ac3Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings(ctx, depth + 1));
  out.eac3AtmosSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings(ctx, depth + 1));
  out.eac3Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings(ctx, depth + 1));
  out.mp2Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings(ctx, depth + 1));
  out.passThroughSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings(ctx, depth + 1));
  out.wavSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings:ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitrate = 0;
  out.codingMode = "";
  out.inputType = "";
  out.profile = "";
  out.rateControlMode = "";
  out.rawFormat = "";
  out.sampleRate = 0;
  out.spec = "";
  out.vbrQuality = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings:ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitrate = 0;
  out.bitstreamMode = "";
  out.codingMode = "";
  out.dialnorm = 0;
  out.drcProfile = "";
  out.lfeFilter = "";
  out.metadataControl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings:ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitrate = 0;
  out.codingMode = "";
  out.dialnorm = 0;
  out.drcLine = "";
  out.drcRf = "";
  out.heightTrim = 0;
  out.surroundTrim = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings:ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attenuationControl = "";
  out.bitrate = 0;
  out.bitstreamMode = "";
  out.codingMode = "";
  out.dcFilter = "";
  out.dialnorm = 0;
  out.drcLine = "";
  out.drcRf = "";
  out.lfeControl = "";
  out.lfeFilter = "";
  out.loRoCenterMixLevel = 0;
  out.loRoSurroundMixLevel = 0;
  out.ltRtCenterMixLevel = 0;
  out.ltRtSurroundMixLevel = 0;
  out.metadataControl = "";
  out.passthroughControl = "";
  out.phaseControl = "";
  out.stereoDownmix = "";
  out.surroundExMode = "";
  out.surroundMode = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings:ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitrate = 0;
  out.codingMode = "";
  out.sampleRate = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings:ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings:ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bitDepth = 0;
  out.codingMode = "";
  out.sampleRate = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionRemixSettings:ChannelEncoderSettingsAudioDescriptionRemixSettings
export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channelMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping(ctx, depth + 1))]);
  out.channelsIn = 0;
  out.channelsOut = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping:ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping
export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputChannelLevels = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel(ctx, depth + 1))]);
  out.outputChannel = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel:ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel
export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gain = 0;
  out.inputChannel = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsAvailBlanking:ChannelEncoderSettingsAvailBlanking
export function medialive_ChannelEncoderSettingsAvailBlanking(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availBlankingImage = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage(ctx, depth + 1));
  out.state = "active";
  return out;
}

// aws:medialive/ChannelEncoderSettingsAvailBlankingAvailBlankingImage:ChannelEncoderSettingsAvailBlankingAvailBlankingImage
export function medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescription:ChannelEncoderSettingsCaptionDescription
export function medialive_ChannelEncoderSettingsCaptionDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessibility = "";
  out.captionSelectorName = "";
  out.destinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings(ctx, depth + 1));
  out.languageCode = "";
  out.languageDescription = "";
  out.name = ctx.name;
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aribDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings(ctx, depth + 1));
  out.burnInDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings(ctx, depth + 1));
  out.dvbSubDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings(ctx, depth + 1));
  out.ebuTtDDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings(ctx, depth + 1));
  out.embeddedDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings(ctx, depth + 1));
  out.embeddedPlusScte20DestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings(ctx, depth + 1));
  out.rtmpCaptionInfoDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings(ctx, depth + 1));
  out.scte20PlusEmbeddedDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings(ctx, depth + 1));
  out.scte27DestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings(ctx, depth + 1));
  out.smpteTtDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings(ctx, depth + 1));
  out.teletextDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings(ctx, depth + 1));
  out.ttmlDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings(ctx, depth + 1));
  out.webvttDestinationSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alignment = "";
  out.backgroundColor = "";
  out.backgroundOpacity = 0;
  out.font = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont(ctx, depth + 1));
  out.fontColor = "";
  out.fontOpacity = 0;
  out.fontResolution = 0;
  out.fontSize = "";
  out.outlineColor = "";
  out.outlineSize = 8;
  out.shadowColor = "";
  out.shadowOpacity = 0;
  out.shadowXOffset = 0;
  out.shadowYOffset = 0;
  out.teletextGridControl = "";
  out.xPosition = 0;
  out.yPosition = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alignment = "";
  out.backgroundColor = "";
  out.backgroundOpacity = 0;
  out.font = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettingsFont(ctx, depth + 1));
  out.fontColor = "";
  out.fontOpacity = 0;
  out.fontResolution = 0;
  out.fontSize = "";
  out.outlineColor = "";
  out.outlineSize = 8;
  out.shadowColor = "";
  out.shadowOpacity = 0;
  out.shadowXOffset = 0;
  out.shadowYOffset = 0;
  out.teletextGridControl = "";
  out.xPosition = 0;
  out.yPosition = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettingsFont:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettingsFont
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettingsFont(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyrightHolder = "";
  out.fillLineGap = "";
  out.fontFamily = "";
  out.styleControl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.styleControl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings:ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings
export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.styleControl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsGlobalConfiguration:ChannelEncoderSettingsGlobalConfiguration
export function medialive_ChannelEncoderSettingsGlobalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.initialAudioGain = 0;
  out.inputEndAction = "";
  out.inputLossBehavior = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior(ctx, depth + 1));
  out.outputLockingMode = "";
  out.outputTimingSource = "";
  out.supportLowFramerateInputs = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsGlobalConfigurationInputLossBehavior:ChannelEncoderSettingsGlobalConfigurationInputLossBehavior
export function medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blackFrameMsec = 0;
  out.inputLossImageColor = "";
  out.inputLossImageSlate = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(ctx, depth + 1));
  out.inputLossImageType = "";
  out.repeatFrameMsec = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate:ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate
export function medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsMotionGraphicsConfiguration:ChannelEncoderSettingsMotionGraphicsConfiguration
export function medialive_ChannelEncoderSettingsMotionGraphicsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.motionGraphicsInsertion = "";
  out.motionGraphicsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings:ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings
export function medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.htmlMotionGraphicsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings:ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings
export function medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsNielsenConfiguration:ChannelEncoderSettingsNielsenConfiguration
export function medialive_ChannelEncoderSettingsNielsenConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.distributorId = h.id(ctx, "distributorId");
  out.nielsenPcmToId3Tagging = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroup:ChannelEncoderSettingsOutputGroup
export function medialive_ChannelEncoderSettingsOutputGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.outputGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings(ctx, depth + 1));
  out.outputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutput(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutput:ChannelEncoderSettingsOutputGroupOutput
export function medialive_ChannelEncoderSettingsOutputGroupOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioDescriptionNames = (depth > 4 ? [] : [""]);
  out.captionDescriptionNames = (depth > 4 ? [] : [""]);
  out.outputName = "";
  out.outputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings(ctx, depth + 1));
  out.videoDescriptionName = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.archiveGroupSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting(ctx, depth + 1))]);
  out.frameCaptureGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings(ctx, depth + 1));
  out.hlsGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings(ctx, depth + 1));
  out.mediaPackageGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings(ctx, depth + 1));
  out.msSmoothGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings(ctx, depth + 1));
  out.multiplexGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings(ctx, depth + 1));
  out.rtmpGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings(ctx, depth + 1));
  out.udpGroupSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting:ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.archiveCdnSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings(ctx, depth + 1));
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination(ctx, depth + 1));
  out.rolloverInterval = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.archiveS3Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettingsArchiveS3Settings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettingsArchiveS3Settings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettingsArchiveS3Settings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettingsArchiveS3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cannedAcl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination:ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination(ctx, depth + 1));
  out.frameCaptureCdnSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination:ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frameCaptureS3Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cannedAcl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adMarkers = (depth > 4 ? [] : [""]);
  out.baseUrlContent = "";
  out.baseUrlContent1 = "";
  out.baseUrlManifest = "";
  out.baseUrlManifest1 = "";
  out.captionLanguageMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping(ctx, depth + 1))]);
  out.captionLanguageSetting = "";
  out.clientCache = "";
  out.codecSpecification = "";
  out.constantIv = "";
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination(ctx, depth + 1));
  out.directoryStructure = "";
  out.discontinuityTags = "";
  out.encryptionType = "";
  out.hlsCdnSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting(ctx, depth + 1))]);
  out.hlsId3SegmentTagging = "";
  out.iframeOnlyPlaylists = "";
  out.incompleteSegmentBehavior = "";
  out.indexNSegments = 0;
  out.inputLossAction = "";
  out.ivInManifest = "";
  out.ivSource = "";
  out.keepSegments = 0;
  out.keyFormat = "";
  out.keyFormatVersions = "";
  out.keyProviderSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings(ctx, depth + 1));
  out.manifestCompression = "";
  out.manifestDurationFormat = "";
  out.minSegmentLength = 0;
  out.mode = "";
  out.outputSelection = "";
  out.programDateTime = "";
  out.programDateTimeClock = "";
  out.programDateTimePeriod = 0;
  out.redundantManifest = "";
  out.segmentLength = 0;
  out.segmentsPerSubdirectory = 0;
  out.streamInfResolution = "";
  out.timedMetadataId3Frame = "";
  out.timedMetadataId3Period = 0;
  out.timestampDeltaMilliseconds = 0;
  out.tsFileMode = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.captionChannel = 0;
  out.languageCode = "";
  out.languageDescription = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hlsAkamaiSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings(ctx, depth + 1));
  out.hlsBasicPutSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings(ctx, depth + 1));
  out.hlsMediaStoreSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsMediaStoreSettings(ctx, depth + 1));
  out.hlsS3Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsS3Settings(ctx, depth + 1));
  out.hlsWebdavSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsWebdavSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionRetryInterval = 0;
  out.filecacheDuration = 0;
  out.httpTransferMode = "";
  out.numRetries = 0;
  out.restartDelay = 0;
  out.salt = "";
  out.token = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionRetryInterval = 0;
  out.filecacheDuration = 0;
  out.numRetries = 0;
  out.restartDelay = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsMediaStoreSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsMediaStoreSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsMediaStoreSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionRetryInterval = 0;
  out.filecacheDuration = 0;
  out.mediaStoreStorageClass = "";
  out.numRetries = 0;
  out.restartDelay = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsS3Settings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsS3Settings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsS3Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cannedAcl = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsWebdavSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsWebdavSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsWebdavSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionRetryInterval = 0;
  out.filecacheDuration = 0;
  out.httpTransferMode = "";
  out.numRetries = 0;
  out.restartDelay = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.staticKeySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySetting(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySetting:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySetting
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyProviderServer = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer(ctx, depth + 1));
  out.staticKeyValue = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer:ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination:ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acquisitionPointId = h.id(ctx, "acquisitionPointId");
  out.audioOnlyTimecodeControl = "";
  out.certificateMode = "";
  out.connectionRetryInterval = 0;
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination(ctx, depth + 1));
  out.eventId = h.id(ctx, "eventId");
  out.eventIdMode = "";
  out.eventStopBehavior = "";
  out.filecacheDuration = 0;
  out.fragmentLength = 0;
  out.inputLossAction = "";
  out.numRetries = 0;
  out.restartDelay = 0;
  out.segmentationMode = "";
  out.sendDelayMs = 0;
  out.sparseTrackType = "";
  out.streamManifestBehavior = "";
  out.timestampOffset = "";
  out.timestampOffsetMode = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination:ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adMarkers = (depth > 4 ? [] : [""]);
  out.authenticationScheme = "";
  out.cacheFullBehavior = "";
  out.cacheLength = 0;
  out.captionData = "";
  out.inputLossAction = "";
  out.restartDelay = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings:ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputLossAction = "";
  out.timedMetadataId3Frame = "";
  out.timedMetadataId3Period = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.archiveOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings(ctx, depth + 1));
  out.frameCaptureOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings(ctx, depth + 1));
  out.hlsOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings(ctx, depth + 1));
  out.mediaPackageOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings(ctx, depth + 1));
  out.msSmoothOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings(ctx, depth + 1));
  out.multiplexOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings(ctx, depth + 1));
  out.rtmpOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings(ctx, depth + 1));
  out.udpOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings(ctx, depth + 1));
  out.extension = "";
  out.nameModifier = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.m2tsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings(ctx, depth + 1));
  out.rawSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.absentInputAudioBehavior = "";
  out.arib = "";
  out.aribCaptionsPid = h.id(ctx, "aribCaptionsPid");
  out.aribCaptionsPidControl = "";
  out.audioBufferModel = "";
  out.audioFramesPerPes = 0;
  out.audioPids = "";
  out.audioStreamType = "";
  out.bitrate = 0;
  out.bufferModel = "";
  out.ccDescriptor = "";
  out.dvbNitSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings(ctx, depth + 1));
  out.dvbSdtSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings(ctx, depth + 1));
  out.dvbSubPids = "";
  out.dvbTdtSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings(ctx, depth + 1));
  out.dvbTeletextPid = h.id(ctx, "dvbTeletextPid");
  out.ebif = "";
  out.ebpAudioInterval = "";
  out.ebpLookaheadMs = 0;
  out.ebpPlacement = "";
  out.ecmPid = h.id(ctx, "ecmPid");
  out.esRateInPes = "";
  out.etvPlatformPid = h.id(ctx, "etvPlatformPid");
  out.etvSignalPid = h.id(ctx, "etvSignalPid");
  out.fragmentTime = 0;
  out.klv = "";
  out.klvDataPids = "";
  out.nielsenId3Behavior = "";
  out.nullPacketBitrate = 0;
  out.patInterval = 0;
  out.pcrControl = "";
  out.pcrPeriod = 0;
  out.pcrPid = h.id(ctx, "pcrPid");
  out.pmtInterval = 0;
  out.pmtPid = h.id(ctx, "pmtPid");
  out.programNum = 0;
  out.rateMode = "";
  out.scte27Pids = "";
  out.scte35Control = "";
  out.scte35Pid = h.id(ctx, "scte35Pid");
  out.segmentationMarkers = "";
  out.segmentationStyle = "";
  out.segmentationTime = 0;
  out.timedMetadataBehavior = "";
  out.timedMetadataPid = h.id(ctx, "timedMetadataPid");
  out.transportStreamId = 443;
  out.videoPid = h.id(ctx, "videoPid");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkId = 0;
  out.networkName = "";
  out.repInterval = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputSdt = "";
  out.repInterval = 0;
  out.serviceName = "";
  out.serviceProviderName = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repInterval = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nameModifier = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.h265PackagingType = "";
  out.hlsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings(ctx, depth + 1));
  out.nameModifier = "";
  out.segmentModifier = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioOnlyHlsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings(ctx, depth + 1));
  out.fmp4HlsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings(ctx, depth + 1));
  out.frameCaptureHlsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings(ctx, depth + 1));
  out.standardHlsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioGroupId = h.id(ctx, "audioGroupId");
  out.audioOnlyImage = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage(ctx, depth + 1));
  out.audioTrackType = "";
  out.segmentType = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.uri = h.endpoint(ctx, "uri");
  out.username = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioRenditionSets = "";
  out.nielsenId3Behavior = "";
  out.timedMetadataBehavior = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioRenditionSets = "";
  out.m3u8Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioFramesPerPes = 0;
  out.audioPids = "";
  out.ecmPid = h.id(ctx, "ecmPid");
  out.nielsenId3Behavior = "";
  out.patInterval = 0;
  out.pcrControl = "";
  out.pcrPeriod = 0;
  out.pcrPid = h.id(ctx, "pcrPid");
  out.pmtInterval = 0;
  out.pmtPid = h.id(ctx, "pmtPid");
  out.programNum = 0;
  out.scte35Behavior = "";
  out.scte35Pid = h.id(ctx, "scte35Pid");
  out.timedMetadataBehavior = "";
  out.timedMetadataPid = h.id(ctx, "timedMetadataPid");
  out.transportStreamId = 443;
  out.videoPid = h.id(ctx, "videoPid");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.h265PackagingType = "";
  out.nameModifier = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination:ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateMode = "";
  out.connectionRetryInterval = 0;
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination(ctx, depth + 1));
  out.numRetries = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination:ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferMsec = 0;
  out.containerSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings(ctx, depth + 1));
  out.destination = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination(ctx, depth + 1));
  out.fecOutputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.m2tsSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.absentInputAudioBehavior = "";
  out.arib = "";
  out.aribCaptionsPid = h.id(ctx, "aribCaptionsPid");
  out.aribCaptionsPidControl = "";
  out.audioBufferModel = "";
  out.audioFramesPerPes = 0;
  out.audioPids = "";
  out.audioStreamType = "";
  out.bitrate = 0;
  out.bufferModel = "";
  out.ccDescriptor = "";
  out.dvbNitSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings(ctx, depth + 1));
  out.dvbSdtSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings(ctx, depth + 1));
  out.dvbSubPids = "";
  out.dvbTdtSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings(ctx, depth + 1));
  out.dvbTeletextPid = h.id(ctx, "dvbTeletextPid");
  out.ebif = "";
  out.ebpAudioInterval = "";
  out.ebpLookaheadMs = 0;
  out.ebpPlacement = "";
  out.ecmPid = h.id(ctx, "ecmPid");
  out.esRateInPes = "";
  out.etvPlatformPid = h.id(ctx, "etvPlatformPid");
  out.etvSignalPid = h.id(ctx, "etvSignalPid");
  out.fragmentTime = 0;
  out.klv = "";
  out.klvDataPids = "";
  out.nielsenId3Behavior = "";
  out.nullPacketBitrate = 0;
  out.patInterval = 0;
  out.pcrControl = "";
  out.pcrPeriod = 0;
  out.pcrPid = h.id(ctx, "pcrPid");
  out.pmtInterval = 0;
  out.pmtPid = h.id(ctx, "pmtPid");
  out.programNum = 0;
  out.rateMode = "";
  out.scte27Pids = "";
  out.scte35Control = "";
  out.scte35Pid = h.id(ctx, "scte35Pid");
  out.segmentationMarkers = "";
  out.segmentationStyle = "";
  out.segmentationTime = 0;
  out.timedMetadataBehavior = "";
  out.timedMetadataPid = h.id(ctx, "timedMetadataPid");
  out.transportStreamId = 443;
  out.videoPid = h.id(ctx, "videoPid");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkId = 0;
  out.networkName = "";
  out.repInterval = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputSdt = "";
  out.repInterval = 0;
  out.serviceName = "";
  out.serviceProviderName = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repInterval = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRefId = h.id(ctx, "destinationRefId");
  return out;
}

// aws:medialive/ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings:ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings
export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.columnDepth = 0;
  out.includeFec = "";
  out.rowLength = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsTimecodeConfig:ChannelEncoderSettingsTimecodeConfig
export function medialive_ChannelEncoderSettingsTimecodeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  out.syncThreshold = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescription:ChannelEncoderSettingsVideoDescription
export function medialive_ChannelEncoderSettingsVideoDescription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codecSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings(ctx, depth + 1));
  out.height = 0;
  out.name = ctx.name;
  out.respondToAfd = "";
  out.scalingBehavior = "";
  out.sharpness = 0;
  out.width = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettings:ChannelEncoderSettingsVideoDescriptionCodecSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frameCaptureSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings(ctx, depth + 1));
  out.h264Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings(ctx, depth + 1));
  out.h265Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.captureInterval = 0;
  out.captureIntervalUnits = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adaptiveQuantization = "";
  out.afdSignaling = "";
  out.bitrate = 0;
  out.bufFillPct = 0;
  out.bufSize = 8;
  out.colorMetadata = "";
  out.entropyEncoding = "";
  out.filterSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings(ctx, depth + 1));
  out.fixedAfd = "";
  out.flickerAq = "";
  out.forceFieldPictures = "";
  out.framerateControl = "";
  out.framerateDenominator = 0;
  out.framerateNumerator = 0;
  out.gopBReference = "";
  out.gopClosedCadence = 0;
  out.gopNumBFrames = 0;
  out.gopSize = 8;
  out.gopSizeUnits = "";
  out.level = "";
  out.lookAheadRateControl = "";
  out.maxBitrate = 0;
  out.minIInterval = 0;
  out.numRefFrames = 0;
  out.parControl = "";
  out.parDenominator = 0;
  out.parNumerator = 0;
  out.profile = "";
  out.qualityLevel = "";
  out.qvbrQualityLevel = 0;
  out.rateControlMode = "";
  out.scanType = "";
  out.sceneChangeDetect = "";
  out.slices = 0;
  out.softness = 0;
  out.spatialAq = "";
  out.subgopLength = "";
  out.syntax = "";
  out.temporalAq = "";
  out.timecodeInsertion = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.temporalFilterSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.postFilterSharpening = "";
  out.strength = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adaptiveQuantization = "";
  out.afdSignaling = "";
  out.alternativeTransferFunction = "";
  out.bitrate = 0;
  out.bufSize = 8;
  out.colorMetadata = "";
  out.colorSpaceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings(ctx, depth + 1));
  out.filterSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings(ctx, depth + 1));
  out.fixedAfd = "";
  out.flickerAq = "";
  out.framerateDenominator = 0;
  out.framerateNumerator = 0;
  out.gopClosedCadence = 0;
  out.gopSize = 8;
  out.gopSizeUnits = "";
  out.level = "";
  out.lookAheadRateControl = "";
  out.maxBitrate = 0;
  out.minIInterval = 0;
  out.minQp = 0;
  out.mvOverPictureBoundaries = "";
  out.mvTemporalPredictor = "";
  out.parDenominator = 0;
  out.parNumerator = 0;
  out.profile = "";
  out.qvbrQualityLevel = 0;
  out.rateControlMode = "";
  out.scanType = "";
  out.sceneChangeDetect = "";
  out.slices = 0;
  out.tier = "";
  out.tileHeight = 0;
  out.tilePadding = "";
  out.tileWidth = 0;
  out.timecodeBurninSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings(ctx, depth + 1));
  out.timecodeInsertion = "";
  out.treeblockSize = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.colorSpacePassthroughSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings(ctx, depth + 1));
  out.dolbyVision81Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings(ctx, depth + 1));
  out.hdr10Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings(ctx, depth + 1));
  out.rec601Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec601Settings(ctx, depth + 1));
  out.rec709Settings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec709Settings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxCll = 0;
  out.maxFall = 0;
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec601Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec601Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec601Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec709Settings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec709Settings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsRec709Settings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.temporalFilterSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.postFilterSharpening = "";
  out.strength = "";
  return out;
}

// aws:medialive/ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings:ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings
export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.timecodeBurninFontSize = "";
  out.timecodeBurninPosition = "";
  return out;
}

// aws:medialive/ChannelInputAttachment:ChannelInputAttachment
export function medialive_ChannelInputAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automaticInputFailoverSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettings(ctx, depth + 1));
  out.inputAttachmentName = "";
  out.inputId = h.id(ctx, "inputId");
  out.inputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettings:ChannelInputAttachmentAutomaticInputFailoverSettings
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorClearTimeMsec = 0;
  out.failoverConditions = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition(ctx, depth + 1))]);
  out.inputPreference = "";
  out.secondaryInputId = h.id(ctx, "secondaryInputId");
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition:ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failoverConditionSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings:ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSilenceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings(ctx, depth + 1));
  out.inputLossSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings(ctx, depth + 1));
  out.videoBlackSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings:ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSelectorName = "";
  out.audioSilenceThresholdMsec = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings:ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inputLossThresholdMsec = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings:ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings
export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blackDetectThreshold = 0;
  out.videoBlackThresholdMsec = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettings:ChannelInputAttachmentInputSettings
export function medialive_ChannelInputAttachmentInputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioSelectors = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelector(ctx, depth + 1))]);
  out.captionSelectors = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelector(ctx, depth + 1))]);
  out.deblockFilter = "";
  out.denoiseFilter = "";
  out.filterStrength = 0;
  out.inputFilter = "";
  out.networkInputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings(ctx, depth + 1));
  out.scte35Pid = 0;
  out.smpte2038DataPreference = "";
  out.sourceEndBehavior = "";
  out.videoSelector = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsVideoSelector(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelector:ChannelInputAttachmentInputSettingsAudioSelector
export function medialive_ChannelInputAttachmentInputSettingsAudioSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.selectorSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audioHlsRenditionSelection = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection(ctx, depth + 1));
  out.audioLanguageSelection = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection(ctx, depth + 1));
  out.audioPidSelection = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection(ctx, depth + 1));
  out.audioTrackSelection = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupId = h.id(ctx, "groupId");
  out.name = ctx.name;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.languageCode = "";
  out.languageSelectionPolicy = "";
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pid = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dolbyEDecode = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode(ctx, depth + 1));
  out.tracks = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack(ctx, depth + 1))]);
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.programSelection = "";
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack:ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack
export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.track = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelector:ChannelInputAttachmentInputSettingsCaptionSelector
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.languageCode = "";
  out.name = ctx.name;
  out.selectorSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ancillarySourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings(ctx, depth + 1));
  out.aribSourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings(ctx, depth + 1));
  out.dvbSubSourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings(ctx, depth + 1));
  out.embeddedSourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings(ctx, depth + 1));
  out.scte20SourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings(ctx, depth + 1));
  out.scte27SourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings(ctx, depth + 1));
  out.teletextSourceSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceAncillaryChannelNumber = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ocrLanguage = "";
  out.pid = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.convert608To708 = "";
  out.scte20Detection = "";
  out.source608ChannelNumber = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.convert608To708 = "";
  out.source608ChannelNumber = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ocrLanguage = "";
  out.pid = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputRectangle = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle(ctx, depth + 1));
  out.pageNumber = "";
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle:ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle
export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.height = 0;
  out.leftOffset = 0;
  out.topOffset = 0;
  out.width = 0;
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsNetworkInputSettings:ChannelInputAttachmentInputSettingsNetworkInputSettings
export function medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hlsInputSettings = (depth > 4 ? {} : T_medialive.medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings(ctx, depth + 1));
  out.serverValidation = "";
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings:ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings
export function medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bandwidth = 0;
  out.bufferSegments = 0;
  out.retries = 0;
  out.retryInterval = 0;
  out.scte35Source = "";
  return out;
}

// aws:medialive/ChannelInputAttachmentInputSettingsVideoSelector:ChannelInputAttachmentInputSettingsVideoSelector
export function medialive_ChannelInputAttachmentInputSettingsVideoSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.colorSpace = "";
  out.colorSpaceUsage = "";
  return out;
}

// aws:medialive/ChannelInputSpecification:ChannelInputSpecification
export function medialive_ChannelInputSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codec = "";
  out.inputResolution = "";
  out.maximumBitrate = "";
  return out;
}

// aws:medialive/ChannelMaintenance:ChannelMaintenance
export function medialive_ChannelMaintenance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maintenanceDay = "";
  out.maintenanceStartTime = "";
  return out;
}

// aws:medialive/ChannelVpc:ChannelVpc
export function medialive_ChannelVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.publicAddressAllocationIds = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:medialive/InputDestination:InputDestination
export function medialive_InputDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.streamName = "";
  return out;
}

// aws:medialive/InputInputDevice:InputInputDevice
export function medialive_InputInputDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:medialive/InputMediaConnectFlow:InputMediaConnectFlow
export function medialive_InputMediaConnectFlow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowArn = h.arn(ctx);
  return out;
}

// aws:medialive/InputSecurityGroupWhitelistRule:InputSecurityGroupWhitelistRule
export function medialive_InputSecurityGroupWhitelistRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  return out;
}

// aws:medialive/InputSource:InputSource
export function medialive_InputSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

// aws:medialive/InputVpc:InputVpc
export function medialive_InputVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:medialive/MultiplexMultiplexSettings:MultiplexMultiplexSettings
export function medialive_MultiplexMultiplexSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumVideoBufferDelayMilliseconds = 0;
  out.transportStreamBitrate = 443;
  out.transportStreamId = 443;
  out.transportStreamReservedBitrate = 443;
  return out;
}

// aws:medialive/MultiplexProgramMultiplexProgramSettings:MultiplexProgramMultiplexProgramSettings
export function medialive_MultiplexProgramMultiplexProgramSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.preferredChannelPipeline = "";
  out.programNumber = 0;
  out.serviceDescriptor = (depth > 4 ? {} : T_medialive.medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor(ctx, depth + 1));
  out.videoSettings = (depth > 4 ? {} : T_medialive.medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/MultiplexProgramMultiplexProgramSettingsServiceDescriptor:MultiplexProgramMultiplexProgramSettingsServiceDescriptor
export function medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.providerName = "";
  out.serviceName = "";
  return out;
}

// aws:medialive/MultiplexProgramMultiplexProgramSettingsVideoSettings:MultiplexProgramMultiplexProgramSettingsVideoSettings
export function medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.constantBitrate = 0;
  out.statmuxSettings = (depth > 4 ? {} : T_medialive.medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(ctx, depth + 1));
  return out;
}

// aws:medialive/MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings:MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings
export function medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumBitrate = 0;
  out.minimumBitrate = 0;
  out.priority = 0;
  return out;
}

// aws:medialive/MultiplexProgramTimeouts:MultiplexProgramTimeouts
export function medialive_MultiplexProgramTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:medialive/getInputDestination:getInputDestination
export function medialive_getInputDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ip = "";
  out.port = "";
  out.url = h.endpoint(ctx, "url");
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_medialive.medialive_getInputDestinationVpc(ctx, depth + 1))]);
  return out;
}

// aws:medialive/getInputDestinationVpc:getInputDestinationVpc
export function medialive_getInputDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}

// aws:medialive/getInputInputDevice:getInputInputDevice
export function medialive_getInputInputDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:medialive/getInputMediaConnectFlow:getInputMediaConnectFlow
export function medialive_getInputMediaConnectFlow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowArn = h.arn(ctx);
  return out;
}

// aws:medialive/getInputSource:getInputSource
export function medialive_getInputSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordParam = "";
  out.url = h.endpoint(ctx, "url");
  out.username = "";
  return out;
}

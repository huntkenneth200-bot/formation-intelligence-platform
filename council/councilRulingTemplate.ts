// council/councilRulingTemplate.ts

import { DistortionKey, getDistortion } from "../router/distortionRouter";
import { getIdentityAnchor, IdentityAnchor } from "../identity/identityAnchoring";
import {
  WorldplanePattern,
  getWorldplanePattern
} from "../worldplane/worldLexicon";

export interface CouncilRulingInput {
  distortionKey: DistortionKey;
  worldplaneKey?: string;
  preferredIdentityAnchorKey?: string;
  userNarrative?: string;
}

export interface CouncilRuling {
  distortionId: DistortionKey;
  distortionSummary: string;
  identityAnchor: IdentityAnchor;
  worldplanePattern?: WorldplanePattern;
  councilSummary: string;
  impactOnIdentity: string;
  impactOnInterpretation: string;
  recommendedPractices: string[];
  anchorReminder: string;
}

/**
 * Builds a structured council ruling by combining:
 * - Distortion module
 * - Identity anchor
 * - World‑plane pattern (optional)
 */
export function buildCouncilRuling(input: CouncilRulingInput): CouncilRuling {
  const distortion = getDistortion(input.distortionKey);

  const identityAnchor =
    (input.preferredIdentityAnchorKey &&
      getIdentityAnchor(input.preferredIdentityAnchorKey)) ||
    // fallback: pick a random stabilizing anchor
    getIdentityAnchor("restored_not_condemned") ||
    {
      key: "fallback",
      summary: "You are held, seen, and not defined by distortion.",
      falseIdentitiesRejected: []
    };

  const worldplanePattern = input.worldplaneKey
    ? getWorldplanePattern(input.worldplaneKey)
    : undefined;

  const councilSummary =
    distortion.councilRuling.summary +
    (worldplanePattern
      ? ` The environment is being read as: ${worldplanePattern.summary}`
      : "");

  return {
    distortionId: input.distortionKey,
    distortionSummary: distortion.description,
    identityAnchor,
    worldplanePattern,
    councilSummary,
    impactOnIdentity: distortion.councilRuling.impactOnIdentity,
    impactOnInterpretation: distortion.councilRuling.impactOnInterpretation,
    recommendedPractices: distortion.formationPathway.practices,
    anchorReminder: distortion.formationPathway.anchorReminder
  };
}
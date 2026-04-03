"use strict";
// council/councilRulingTemplate.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCouncilRuling = buildCouncilRuling;
const distortionRouter_1 = require("../router/distortionRouter");
const identityAnchoring_1 = require("../identity/identityAnchoring");
const worldLexicon_1 = require("../worldplane/worldLexicon");
/**
 * Builds a structured council ruling by combining:
 * - Distortion module
 * - Identity anchor
 * - World‑plane pattern (optional)
 */
function buildCouncilRuling(input) {
    const distortion = (0, distortionRouter_1.getDistortion)(input.distortionKey);
    const identityAnchor = (input.preferredIdentityAnchorKey &&
        (0, identityAnchoring_1.getIdentityAnchor)(input.preferredIdentityAnchorKey)) ||
        // fallback: pick a random stabilizing anchor
        (0, identityAnchoring_1.getIdentityAnchor)("restored_not_condemned") ||
        {
            key: "fallback",
            summary: "You are held, seen, and not defined by distortion.",
            falseIdentitiesRejected: []
        };
    const worldplanePattern = input.worldplaneKey
        ? (0, worldLexicon_1.getWorldplanePattern)(input.worldplaneKey)
        : undefined;
    const councilSummary = distortion.councilRuling.summary +
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
//# sourceMappingURL=councilRulingTemplate.js.map
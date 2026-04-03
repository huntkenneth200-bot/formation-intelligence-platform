import { DistortionKey } from "../router/distortionRouter";
import { IdentityAnchor } from "../identity/identityAnchoring";
import { WorldplanePattern } from "../worldplane/worldLexicon";
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
export declare function buildCouncilRuling(input: CouncilRulingInput): CouncilRuling;
//# sourceMappingURL=councilRulingTemplate.d.ts.map
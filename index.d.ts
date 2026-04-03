export { getDistortion, classifyDistortion } from "./router/distortionRouter";
export { identityAnchors, getIdentityAnchor } from "./identity/identityAnchoring";
export { worldplaneLexicon, getWorldplanePattern, listWorldplanePatterns } from "./worldplane/worldLexicon";
export { buildCouncilRuling } from "./council/councilRulingTemplate";
/**
 * High‑level helper:
 * Given a user narrative, attempts to:
 * 1. classify the distortion,
 * 2. build a council ruling,
 * 3. return a structured, stabilized interpretation.
 */
export declare function interpretNarrative(narrative: string): {
    status: string;
    message: string;
    distortion?: never;
    ruling?: never;
} | {
    status: string;
    distortion: any;
    ruling: any;
    message?: never;
};
//# sourceMappingURL=index.d.ts.map
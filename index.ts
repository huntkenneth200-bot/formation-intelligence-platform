// index.ts
// CLU‑02 Council Engine — Public Entrypoint

export { getDistortion, classifyDistortion } from "./router/distortionRouter";
export { identityAnchors, getIdentityAnchor } from "./identity/identityAnchoring";
export {
  worldplaneLexicon,
  getWorldplanePattern,
  listWorldplanePatterns
} from "./worldplane/worldLexicon";
export { buildCouncilRuling } from "./council/councilRulingTemplate";

/**
 * High‑level helper:
 * Given a user narrative, attempts to:
 * 1. classify the distortion,
 * 2. build a council ruling,
 * 3. return a structured, stabilized interpretation.
 */
export function interpretNarrative(narrative: string) {
  const distortionKey = classifyDistortion(narrative);

  if (!distortionKey) {
    return {
      status: "unclassified",
      message:
        "No distortion matched. The narrative may be neutral, mixed, or require deeper parsing."
    };
  }

  const ruling = buildCouncilRuling({
    distortionKey,
    userNarrative: narrative
  });

  return {
    status: "classified",
    distortion: distortionKey,
    ruling
  };
}
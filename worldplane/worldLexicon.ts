// worldplane/worldLexicon.ts

/**
 * World‑Plane Lexicon Layer
 * -------------------------
 * This module describes how the environment is being interpreted.
 * Distortions warp the read of the world; this layer helps name and stabilize it.
 */

export interface WorldplanePattern {
  key: string;
  label: string;
  summary: string;
  distortedReads: string[];
  stabilizingInsights: string[];
  environmentAdjustments: string[];
}

export const worldplaneLexicon: WorldplanePattern[] = [
  {
    key: "hostile_world_read",
    label: "Hostile World Read",
    summary:
      "The world is read as primarily dangerous, unpredictable, and against you.",
    distortedReads: [
      "Neutral situations are interpreted as threats.",
      "Uncertainty is treated as danger.",
      "People are assumed to be against you by default."
    ],
    stabilizingInsights: [
      "Not every unknown is a threat.",
      "Some environments are neutral or even supportive.",
      "You can introduce structure and support without total control."
    ],
    environmentAdjustments: [
      "Reduce exposure to fear‑amplifying inputs.",
      "Increase time in stable, predictable spaces.",
      "Seek out environments where safety is observable, not theoretical."
    ]
  },
  {
    key: "courtroom_world_read",
    label: "Courtroom World Read",
    summary:
      "The world is read as a courtroom where you are constantly on trial.",
    distortedReads: [
      "Feedback is interpreted as condemnation.",
      "Silence is interpreted as judgment.",
      "Every interaction feels like a verdict on your worth."
    ],
    stabilizingInsights: [
      "Most people are not actively evaluating you.",
      "Feedback can be information, not indictment.",
      "Your worth is not on trial in every interaction."
    ],
    environmentAdjustments: [
      "Limit time in hyper‑critical spaces.",
      "Increase exposure to environments that practice encouragement and honest, kind feedback."
    ]
  },
  {
    key: "chaotic_world_read",
    label: "Chaotic World Read",
    summary:
      "The world is read as unstable, fast‑shifting, and impossible to navigate.",
    distortedReads: [
      "Normal change is interpreted as crisis.",
      "Ambiguity is treated as collapse.",
      "Small disruptions feel like systemic failure."
    ],
    stabilizingInsights: [
      "Change is not the same as collapse.",
      "You can move at a grounded pace even when things shift.",
      "Some structures around you are more stable than they feel."
    ],
    environmentAdjustments: [
      "Reduce exposure to constant novelty and noise.",
      "Increase predictable rhythms and routines.",
      "Anchor to a few stable people and places."
    ]
  },
  {
    key: "barren_world_read",
    label: "Barren World Read",
    summary:
      "The world is read as relationally or spiritually barren — nothing alive, nothing growing.",
    distortedReads: [
      "Connection is assumed to be unavailable.",
      "Spiritual life is assumed to be distant or absent.",
      "Opportunities for growth are overlooked."
    ],
    stabilizingInsights: [
      "Life often grows in hidden ways before it is visible.",
      "Connection may be available in smaller, quieter forms.",
      "Your perception of barrenness is not the whole story."
    ],
    environmentAdjustments: [
      "Spend time in environments where growth is visible (community, nature, creative spaces).",
      "Re‑engage small, life‑giving practices even when they feel minor."
    ]
  }
];

/**
 * Retrieve a world‑plane pattern by key.
 */
export function getWorldplanePattern(
  key: string
): WorldplanePattern | undefined {
  return worldplaneLexicon.find(p => p.key === key);
}

/**
 * Returns all world‑plane patterns.
 */
export function listWorldplanePatterns(): WorldplanePattern[] {
  return worldplaneLexicon;
}
// distortions/shame.ts

export interface DistortionDefinition {
  id: string;
  name: string;
  subtype: string;
  description: string;
  commonTriggers: string[];
  typicalThoughtPatterns: string[];
  emotionalSignals: string[];
  bodilySignals: string[];
  defaultIdentityAnchor: {
    summary: string;
    falseIdentityClaimsRejected: string[];
    scripturalAnchors?: string[];
  };
  worldplaneInterpretation: {
    summary: string;
    environmentalPatterns: string[];
    stabilizingInsights: string[];
  };
  councilRuling: {
    summary: string;
    impactOnIdentity: string;
    impactOnInterpretation: string;
  };
  formationPathway: {
    primaryObjective: string;
    practices: string[];
    rhythm: string;
    environmentAdjustments: string[];
    anchorReminder: string;
  };
}

export const shameDistortion: DistortionDefinition = {
  id: "shame",
  name: "Shame",
  subtype: "Self‑Condemnation",
  description:
    "Shame shows up as a collapse of identity, where the mind interprets mistakes, weaknesses, or past events as proof of personal defect or unworthiness.",
  commonTriggers: [
    "Past failures resurfacing",
    "Relational conflict or rejection",
    "Being misunderstood or misrepresented",
    "Performance pressure",
    "Moments requiring vulnerability"
  ],
  typicalThoughtPatterns: [
    "Something is wrong with me.",
    "If people really knew me, they’d pull away.",
    "I always mess things up.",
    "I don’t deserve good things."
  ],
  emotionalSignals: [
    "Embarrassment that lingers",
    "Desire to hide or withdraw",
    "Feeling exposed or defective",
    "Internal heaviness or self‑disgust"
  ],
  bodilySignals: [
    "Slumped posture",
    "Avoiding eye contact",
    "Tightness in the stomach or throat",
    "Sudden fatigue or shutdown"
  ],
  defaultIdentityAnchor: {
    summary:
      "Your identity is not defined by failure, weakness, or past events. You are not defective — you are being restored.",
    falseIdentityClaimsRejected: [
      "I am unworthy.",
      "I am fundamentally broken.",
      "I am beyond repair."
    ],
    scripturalAnchors: [
      "Romans 8:1",
      "Psalm 34:5",
      "Isaiah 54:4"
    ]
  },
  worldplaneInterpretation: {
    summary:
      "The environment is interpreted as a courtroom where every action is judged and every flaw is fatal, even when no real threat is present.",
    environmentalPatterns: [
      "Assuming others are disappointed or disgusted",
      "Interpreting neutral feedback as condemnation",
      "Avoiding opportunities due to fear of exposure"
    ],
    stabilizingInsights: [
      "Not every look or tone is about you.",
      "People think about you far less than shame claims.",
      "Growth requires visibility, not hiding."
    ]
  },
  councilRuling: {
    summary:
      "The Council acknowledges the emotional weight of shame but rules that shame has no authority to define identity or restrict movement.",
    impactOnIdentity:
      "Your identity is not ‘the failure,’ ‘the disappointment,’ or ‘the problem.’ You are being formed, not condemned.",
    impactOnInterpretation:
      "Shame is not permitted to interpret every interaction as judgment or rejection."
  },
  formationPathway: {
    primaryObjective:
      "Restore dignity, visibility, and grounded identity while breaking the reflex to hide.",
    practices: [
      "Name the specific accusation shame is making.",
      "Identify what is actually true versus what is assumed.",
      "Share one small truth with a safe person.",
      "Engage in one visible action that shame normally blocks."
    ],
    rhythm: "Daily micro‑practices; weekly reflection.",
    environmentAdjustments: [
      "Reduce exposure to voices that reinforce unworthiness.",
      "Increase contact with environments where you are seen accurately."
    ],
    anchorReminder:
      "Shame is loud, but it is not Lord. You are not defined by your lowest moments."
  }
};
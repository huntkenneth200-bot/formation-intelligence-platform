// distortions/spiritual_numbness.ts

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

export const spiritualNumbnessDistortion: DistortionDefinition = {
  id: "spiritual_numbness",
  name: "Spiritual Numbness",
  subtype: "Disconnect from Meaning",
  description:
    "Spiritual numbness shows up when the internal system becomes desensitized to meaning, purpose, conviction, or connection with God. It often follows prolonged stress, disappointment, or emotional shutdown.",
  commonTriggers: [
    "Long seasons of exhaustion",
    "Repeated disappointment or unanswered questions",
    "Emotional shutdown from overwhelm",
    "Loss of spiritual rhythm or community",
    "Internal conflict or unresolved pain"
  ],
  typicalThoughtPatterns: [
    "I don’t feel anything anymore.",
    "God feels distant or silent.",
    "I’m just going through the motions.",
    "Nothing moves me like it used to."
  ],
  emotionalSignals: [
    "Flatness or lack of emotional response",
    "Loss of desire for spiritual practices",
    "Feeling disconnected from purpose",
    "A sense of drifting"
  ],
  bodilySignals: [
    "Low energy or heaviness",
    "Difficulty engaging in meaningful activities",
    "Desire to withdraw or isolate",
    "Restlessness without direction"
  ],
  defaultIdentityAnchor: {
    summary:
      "Your identity is not defined by numbness. You are not abandoned, disconnected, or spiritually dead — you are being restored, renewed, and reawakened.",
    falseIdentityClaimsRejected: [
      "I am spiritually dead.",
      "God is done with me.",
      "I can’t reconnect again."
    ],
    scripturalAnchors: [
      "Ezekiel 36:26",
      "Psalm 51:10–12",
      "Isaiah 57:15"
    ]
  },
  worldplaneInterpretation: {
    summary:
      "The environment is interpreted as spiritually empty or meaningless, even when real sources of connection and renewal are present but inaccessible due to emotional shutdown.",
    environmentalPatterns: [
      "Assuming God is distant because emotions are quiet",
      "Interpreting numbness as failure",
      "Avoiding spiritual practices due to lack of feeling"
    ],
    stabilizingInsights: [
      "Numbness is often a sign of exhaustion, not abandonment.",
      "Spiritual life continues even when emotions are quiet.",
      "Small, consistent practices reawaken what feels dormant."
    ]
  },
  councilRuling: {
    summary:
      "The Council acknowledges the heaviness of numbness but rules that numbness cannot define identity, dictate spiritual reality, or determine future connection.",
    impactOnIdentity:
      "Your identity is not ‘the disconnected one.’ You are being renewed and reawakened.",
    impactOnInterpretation:
      "Numbness is not permitted to interpret silence as absence or exhaustion as abandonment."
  },
  formationPathway: {
    primaryObjective:
      "Reawaken spiritual sensitivity through gentle, consistent practices and reconnection to meaning.",
    practices: [
      "Name the specific belief numbness is pushing.",
      "Engage in one small spiritual practice without pressure to feel anything.",
      "Reconnect with one person who strengthens your spiritual life.",
      "Spend 5–10 minutes in quiet presence without expectation."
    ],
    rhythm: "Daily gentle practices; weekly reconnection to meaning.",
    environmentAdjustments: [
      "Reduce environments that reinforce apathy or detachment.",
      "Increase exposure to life‑giving, spiritually grounded spaces."
    ],
    anchorReminder:
      "Numbness is a season, not a sentence. Renewal is already underway."
  }
};
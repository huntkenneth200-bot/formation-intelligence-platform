// distortions/fear.ts

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

export const fearDistortion: DistortionDefinition = {
  id: "fear",
  name: "Fear",
  subtype: "Threat Anticipation",
  description:
    "Fear shows up as a heightened sense of threat, where the mind overestimates danger and underestimates capacity, support, or covering.",
  commonTriggers: [
    "Uncertainty about the future",
    "High‑stakes decisions",
    "Financial instability",
    "Relational conflict or potential loss",
    "Health scares or physical vulnerability"
  ],
  typicalThoughtPatterns: [
    "Something bad is about to happen.",
    "I won’t be able to handle this.",
    "If I make the wrong move, everything will fall apart.",
    "I’m not safe here."
  ],
  emotionalSignals: [
    "Persistent anxiety",
    "Dread before conversations or decisions",
    "Irritability rooted in feeling unsafe",
    "Hyper‑vigilance or constant scanning for what could go wrong"
  ],
  bodilySignals: [
    "Tight chest or shallow breathing",
    "Racing heart",
    "Restlessness or inability to settle",
    "Difficulty sleeping"
  ],
  defaultIdentityAnchor: {
    summary:
      "You are not abandoned to threat. You are held, covered, and not left to face this alone.",
    falseIdentityClaimsRejected: [
      "I am unprotected.",
      "I am on my own.",
      "I am one mistake away from collapse."
    ],
    scripturalAnchors: [
      "Psalm 23",
      "Isaiah 41:10",
      "2 Timothy 1:7"
    ]
  },
  worldplaneInterpretation: {
    summary:
      "The environment is being interpreted as more hostile and unstable than it actually is, often because past experiences of real threat are being projected onto the present.",
    environmentalPatterns: [
      "Over‑reading neutral situations as dangerous",
      "Assuming worst‑case outcomes as likely",
      "Avoiding opportunities that carry any perceived risk"
    ],
    stabilizingInsights: [
      "Not every unknown is a threat.",
      "Capacity grows in measured exposure, not total avoidance.",
      "You can introduce structure and support without needing total control."
    ]
  },
  councilRuling: {
    summary:
      "The Council acknowledges the presence of fear as a response to perceived threat, but rules that fear does not have authority to define identity or dictate every interpretation of the environment.",
    impactOnIdentity:
      "Your identity is not ‘the anxious one’ or ‘the fragile one.’ You are capable of standing, deciding, and moving even when you feel afraid.",
    impactOnInterpretation:
      "Fear is allowed to signal that something matters, but it is not permitted to be the only voice interpreting what is happening."
  },
  formationPathway: {
    primaryObjective:
      "Restore a grounded sense of safety while building capacity to move forward in the presence of uncertainty.",
    practices: [
      "Name the specific threat you are imagining in one sentence.",
      "List what is actually known versus what is assumed.",
      "Identify one small, low‑risk action you can take toward the situation.",
      "Invite one trusted person into the decision or situation."
    ],
    rhythm: "Daily when fear is active; weekly review when more stable.",
    environmentAdjustments: [
      "Reduce constant exposure to fear‑amplifying inputs (news, social feeds, catastrophic voices).",
      "Increase contact with stabilizing people and spaces where your nervous system can settle."
    ],
    anchorReminder:
      "Fear may be loud, but it is not Lord. You are not alone, and you are not without covering."
  }
};
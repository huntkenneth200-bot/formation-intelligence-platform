// distortions/guilt.ts

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

export const guiltDistortion: DistortionDefinition = {
  id: "guilt",
  name: "Guilt",
  subtype: "Moral Weight",
  description:
    "Guilt shows up as a heavy internal pressure that insists you must repay, fix, or punish yourself for past actions — even after forgiveness, restoration, or resolution has already occurred.",
  commonTriggers: [
    "Past mistakes resurfacing",
    "Hurting someone unintentionally",
    "Moral or spiritual failure",
    "Breaking personal standards",
    "Moments requiring confession or ownership"
  ],
  typicalThoughtPatterns: [
    "I need to make this right or I can’t move forward.",
    "I don’t deserve peace yet.",
    "If I feel better too quickly, it means I don’t care enough.",
    "I should still be paying for this."
  ],
  emotionalSignals: [
    "Lingering heaviness even after apologizing",
    "Difficulty receiving forgiveness",
    "Over‑responsibility for others’ emotions",
    "Fear of repeating past mistakes"
  ],
  bodilySignals: [
    "Tightness in the chest",
    "Slowed breathing",
    "Heavy or sunken posture",
    "Fatigue after moral pressure"
  ],
  defaultIdentityAnchor: {
    summary:
      "You are not defined by your failures. You are forgiven, restored, and not required to self‑punish to prove sincerity.",
    falseIdentityClaimsRejected: [
      "I must earn forgiveness.",
      "I am permanently marked by my mistakes.",
      "I am unworthy of restoration."
    ],
    scripturalAnchors: [
      "Psalm 103:12",
      "1 John 1:9",
      "Romans 8:33–34"
    ]
  },
  worldplaneInterpretation: {
    summary:
      "The environment is interpreted as a moral scoreboard where every misstep must be repaid, even when the situation no longer requires repayment.",
    environmentalPatterns: [
      "Assuming others are still upset even when they’ve moved on",
      "Over‑apologizing or over‑explaining",
      "Avoiding opportunities due to fear of failing again"
    ],
    stabilizingInsights: [
      "Restoration is a process, not a punishment.",
      "You don’t have to suffer to prove sincerity.",
      "People often release things long before guilt allows you to."
    ]
  },
  councilRuling: {
    summary:
      "The Council acknowledges the moral seriousness of guilt but rules that guilt cannot demand ongoing self‑punishment or restrict restored movement.",
    impactOnIdentity:
      "Your identity is not ‘the offender,’ ‘the disappointment,’ or ‘the one who must repay.’ You are restored and capable of walking forward.",
    impactOnInterpretation:
      "Guilt is not permitted to interpret every situation as requiring repayment or self‑punishment."
  },
  formationPathway: {
    primaryObjective:
      "Restore moral clarity, receive forgiveness fully, and break the cycle of self‑punishment.",
    practices: [
      "Name the specific action guilt is attaching to.",
      "Identify what has already been resolved or forgiven.",
      "Release the need to self‑punish by stating the truth out loud.",
      "Take one small step forward that guilt has been blocking."
    ],
    rhythm: "Daily when guilt is active; weekly review when stable.",
    environmentAdjustments: [
      "Reduce exposure to voices that reinforce condemnation.",
      "Increase contact with environments that reinforce restoration."
    ],
    anchorReminder:
      "Guilt may remind you of what mattered, but it cannot demand endless repayment. You are restored."
  }
};
// router/distortionRouter.ts

import { fearDistortion } from "../distortions/fear";
import { shameDistortion } from "../distortions/shame";
import { guiltDistortion } from "../distortions/guilt";
import { inadequacyDistortion } from "../distortions/inadequacy";
import { confusionDistortion } from "../distortions/confusion";
import { overwhelmDistortion } from "../distortions/overwhelm";
import { lonelinessDistortion } from "../distortions/loneliness";
import { despairDistortion } from "../distortions/despair";
import { spiritualNumbnessDistortion } from "../distortions/spiritual_numbness";
import { disorientationDistortion } from "../distortions/disorientation";

export const distortionRegistry = {
  fear: fearDistortion,
  shame: shameDistortion,
  guilt: guiltDistortion,
  inadequacy: inadequacyDistortion,
  confusion: confusionDistortion,
  overwhelm: overwhelmDistortion,
  loneliness: lonelinessDistortion,
  despair: despairDistortion,
  spiritual_numbness: spiritualNumbnessDistortion,
  disorientation: disorientationDistortion
};

export type DistortionKey = keyof typeof distortionRegistry;

/**
 * The Distortion Router:
 * Given a distortion key, returns the full distortion module.
 * This is the central access point for CLU‑02.
 */
export function getDistortion(key: DistortionKey) {
  return distortionRegistry[key];
}

/**
 * Optional helper:
 * Attempts to classify a user input into a distortion category.
 * This is intentionally simple — the full classifier will be built later.
 */
export function classifyDistortion(input: string): DistortionKey | null {
  const normalized = input.toLowerCase();

  if (normalized.includes("afraid") || normalized.includes("scared") || normalized.includes("fear"))
    return "fear";

  if (normalized.includes("ashamed") || normalized.includes("embarrassed") || normalized.includes("worthless"))
    return "shame";

  if (normalized.includes("guilty") || normalized.includes("fault") || normalized.includes("blame"))
    return "guilt";

  if (normalized.includes("not enough") || normalized.includes("incapable") || normalized.includes("inadequate"))
    return "inadequacy";

  if (normalized.includes("confused") || normalized.includes("fog") || normalized.includes("unclear"))
    return "confusion";

  if (normalized.includes("overwhelmed") || normalized.includes("too much") || normalized.includes("overload"))
    return "overwhelm";

  if (normalized.includes("alone") || normalized.includes("isolated") || normalized.includes("unseen"))
    return "loneliness";

  if (normalized.includes("hopeless") || normalized.includes("pointless") || normalized.includes("despair"))
    return "despair";

  if (normalized.includes("numb") || normalized.includes("disconnected") || normalized.includes("apathetic"))
    return "spiritual_numbness";

  if (normalized.includes("lost") || normalized.includes("disoriented") || normalized.includes("directionless"))
    return "disorientation";

  return null;
}
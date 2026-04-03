"use strict";
// router/distortionRouter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.distortionRegistry = void 0;
exports.getDistortion = getDistortion;
exports.classifyDistortion = classifyDistortion;
const fear_1 = require("../distortions/fear");
const shame_1 = require("../distortions/shame");
const guilt_1 = require("../distortions/guilt");
const inadequacy_1 = require("../distortions/inadequacy");
const confusion_1 = require("../distortions/confusion");
const overwhelm_1 = require("../distortions/overwhelm");
const loneliness_1 = require("../distortions/loneliness");
const despair_1 = require("../distortions/despair");
const spiritual_numbness_1 = require("../distortions/spiritual_numbness");
const disorientation_1 = require("../distortions/disorientation");
exports.distortionRegistry = {
    fear: fear_1.fearDistortion,
    shame: shame_1.shameDistortion,
    guilt: guilt_1.guiltDistortion,
    inadequacy: inadequacy_1.inadequacyDistortion,
    confusion: confusion_1.confusionDistortion,
    overwhelm: overwhelm_1.overwhelmDistortion,
    loneliness: loneliness_1.lonelinessDistortion,
    despair: despair_1.despairDistortion,
    spiritual_numbness: spiritual_numbness_1.spiritualNumbnessDistortion,
    disorientation: disorientation_1.disorientationDistortion
};
/**
 * The Distortion Router:
 * Given a distortion key, returns the full distortion module.
 * This is the central access point for CLU‑02.
 */
function getDistortion(key) {
    return exports.distortionRegistry[key];
}
/**
 * Optional helper:
 * Attempts to classify a user input into a distortion category.
 * This is intentionally simple — the full classifier will be built later.
 */
function classifyDistortion(input) {
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
//# sourceMappingURL=distortionRouter.js.map
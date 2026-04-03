"use strict";
// index.ts
// CLU‑02 Council Engine — Public Entrypoint
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCouncilRuling = exports.listWorldplanePatterns = exports.getWorldplanePattern = exports.worldplaneLexicon = exports.getIdentityAnchor = exports.identityAnchors = exports.classifyDistortion = exports.getDistortion = void 0;
exports.interpretNarrative = interpretNarrative;
var distortionRouter_1 = require("./router/distortionRouter");
Object.defineProperty(exports, "getDistortion", { enumerable: true, get: function () { return distortionRouter_1.getDistortion; } });
Object.defineProperty(exports, "classifyDistortion", { enumerable: true, get: function () { return distortionRouter_1.classifyDistortion; } });
var identityAnchoring_1 = require("./identity/identityAnchoring");
Object.defineProperty(exports, "identityAnchors", { enumerable: true, get: function () { return identityAnchoring_1.identityAnchors; } });
Object.defineProperty(exports, "getIdentityAnchor", { enumerable: true, get: function () { return identityAnchoring_1.getIdentityAnchor; } });
var worldLexicon_1 = require("./worldplane/worldLexicon");
Object.defineProperty(exports, "worldplaneLexicon", { enumerable: true, get: function () { return worldLexicon_1.worldplaneLexicon; } });
Object.defineProperty(exports, "getWorldplanePattern", { enumerable: true, get: function () { return worldLexicon_1.getWorldplanePattern; } });
Object.defineProperty(exports, "listWorldplanePatterns", { enumerable: true, get: function () { return worldLexicon_1.listWorldplanePatterns; } });
var councilRulingTemplate_1 = require("./council/councilRulingTemplate");
Object.defineProperty(exports, "buildCouncilRuling", { enumerable: true, get: function () { return councilRulingTemplate_1.buildCouncilRuling; } });
/**
 * High‑level helper:
 * Given a user narrative, attempts to:
 * 1. classify the distortion,
 * 2. build a council ruling,
 * 3. return a structured, stabilized interpretation.
 */
function interpretNarrative(narrative) {
    const distortionKey = classifyDistortion(narrative);
    if (!distortionKey) {
        return {
            status: "unclassified",
            message: "No distortion matched. The narrative may be neutral, mixed, or require deeper parsing."
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
//# sourceMappingURL=index.js.map
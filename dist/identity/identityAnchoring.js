"use strict";
// identity/identityAnchoring.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityAnchors = void 0;
exports.getIdentityAnchor = getIdentityAnchor;
exports.getRandomIdentityAnchor = getRandomIdentityAnchor;
exports.identityAnchors = [
    {
        key: "held_and_not_abandoned",
        summary: "You are held, covered, and not abandoned — even when emotions say otherwise.",
        falseIdentitiesRejected: [
            "I am alone.",
            "I am unprotected.",
            "I am forgotten."
        ],
        scripturalAnchors: ["Isaiah 41:10", "Psalm 23", "Deuteronomy 31:6"]
    },
    {
        key: "restored_not_condemned",
        summary: "You are restored, forgiven, and not defined by failure or accusation.",
        falseIdentitiesRejected: [
            "I am permanently marked by my mistakes.",
            "I am unworthy.",
            "I am condemned."
        ],
        scripturalAnchors: ["Romans 8:1", "Psalm 103:12", "1 John 1:9"]
    },
    {
        key: "equipped_and_strengthened",
        summary: "You are equipped, strengthened, and capable of moving through challenge.",
        falseIdentitiesRejected: [
            "I am incapable.",
            "I am weak.",
            "I cannot handle this."
        ],
        scripturalAnchors: ["Philippians 4:13", "2 Corinthians 12:9"]
    },
    {
        key: "seen_known_valued",
        summary: "You are seen, known, and valued — not invisible or insignificant.",
        falseIdentitiesRejected: [
            "I am unseen.",
            "I don’t matter.",
            "No one cares about me."
        ],
        scripturalAnchors: ["Psalm 139:1–7", "Isaiah 43:1"]
    },
    {
        key: "guided_and_not_lost",
        summary: "You are guided, centered, and not directionless — even in seasons of fog.",
        falseIdentitiesRejected: [
            "I am lost.",
            "I have no direction.",
            "I can’t trust anything inside me."
        ],
        scripturalAnchors: ["Proverbs 3:5–6", "Psalm 16:8", "Isaiah 30:21"]
    }
];
/**
 * Retrieves an identity anchor by key.
 */
function getIdentityAnchor(key) {
    return exports.identityAnchors.find(a => a.key === key);
}
/**
 * Returns a random identity anchor.
 * Useful when the system needs to stabilize identity before interpretation.
 */
function getRandomIdentityAnchor() {
    return exports.identityAnchors[Math.floor(Math.random() * exports.identityAnchors.length)];
}
//# sourceMappingURL=identityAnchoring.js.map
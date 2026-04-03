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
export declare const worldplaneLexicon: WorldplanePattern[];
/**
 * Retrieve a world‑plane pattern by key.
 */
export declare function getWorldplanePattern(key: string): WorldplanePattern | undefined;
/**
 * Returns all world‑plane patterns.
 */
export declare function listWorldplanePatterns(): WorldplanePattern[];
//# sourceMappingURL=worldLexicon.d.ts.map
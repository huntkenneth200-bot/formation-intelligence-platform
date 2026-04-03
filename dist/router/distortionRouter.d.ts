export declare const distortionRegistry: {
    fear: import("../distortions/fear").DistortionDefinition;
    shame: import("../distortions/shame").DistortionDefinition;
    guilt: import("../distortions/guilt").DistortionDefinition;
    inadequacy: import("../distortions/inadequacy").DistortionDefinition;
    confusion: import("../distortions/confusion").DistortionDefinition;
    overwhelm: import("../distortions/overwhelm").DistortionDefinition;
    loneliness: import("../distortions/loneliness").DistortionDefinition;
    despair: import("../distortions/despair").DistortionDefinition;
    spiritual_numbness: import("../distortions/spiritual_numbness").DistortionDefinition;
    disorientation: import("../distortions/disorientation").DistortionDefinition;
};
export type DistortionKey = keyof typeof distortionRegistry;
/**
 * The Distortion Router:
 * Given a distortion key, returns the full distortion module.
 * This is the central access point for CLU‑02.
 */
export declare function getDistortion(key: DistortionKey): import("../distortions/fear").DistortionDefinition | import("../distortions/shame").DistortionDefinition | import("../distortions/guilt").DistortionDefinition | import("../distortions/inadequacy").DistortionDefinition | import("../distortions/confusion").DistortionDefinition | import("../distortions/overwhelm").DistortionDefinition | import("../distortions/loneliness").DistortionDefinition | import("../distortions/despair").DistortionDefinition | import("../distortions/spiritual_numbness").DistortionDefinition | import("../distortions/disorientation").DistortionDefinition;
/**
 * Optional helper:
 * Attempts to classify a user input into a distortion category.
 * This is intentionally simple — the full classifier will be built later.
 */
export declare function classifyDistortion(input: string): DistortionKey | null;
//# sourceMappingURL=distortionRouter.d.ts.map
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
export declare const confusionDistortion: DistortionDefinition;
//# sourceMappingURL=confusion.d.ts.map
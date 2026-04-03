/**
 * Identity Anchoring Layer
 * -------------------------
 * This module provides the stable identity truths that every distortion
 * must be measured against. Distortions collapse identity; this layer restores it.
 */
export interface IdentityAnchor {
    key: string;
    summary: string;
    falseIdentitiesRejected: string[];
    scripturalAnchors?: string[];
}
export declare const identityAnchors: IdentityAnchor[];
/**
 * Retrieves an identity anchor by key.
 */
export declare function getIdentityAnchor(key: string): IdentityAnchor | undefined;
/**
 * Returns a random identity anchor.
 * Useful when the system needs to stabilize identity before interpretation.
 */
export declare function getRandomIdentityAnchor(): IdentityAnchor;
//# sourceMappingURL=identityAnchoring.d.ts.map
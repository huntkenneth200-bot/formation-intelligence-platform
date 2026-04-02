from dataclasses import dataclass
from typing import Optional, Any, Dict, List


# ---------------------------------------------------------
# Placeholder model classes for Cluster 02 dependencies
# These allow the platform to boot even before full logic
# is implemented. Expand later as needed.
# ---------------------------------------------------------

@dataclass
class CouncilRulingRecord:
    ruling_id: Optional[str] = None
    content: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class VoteRecord:
    voter_id: Optional[str] = None
    vote_value: Optional[str] = None
    timestamp: Optional[str] = None


@dataclass
class RulingPropagationRecord:
    ruling_id: Optional[str] = None
    propagated_to: Optional[List[str]] = None
    status: Optional[str] = None


@dataclass
class TheologicalReviewRecord:
    review_id: Optional[str] = None
    reviewer: Optional[str] = None
    notes: Optional[str] = None
    outcome: Optional[str] = None
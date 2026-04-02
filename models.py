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


@dataclass
class CouncilMemberRecord:
    member_id: Optional[str] = None
    name: Optional[str] = None
    role: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class CapitalSourceRecord:
    source_id: Optional[str] = None
    name: Optional[str] = None
    amount: Optional[float] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class CapitalSourceClearance:
    clearance_id: Optional[str] = None
    source_id: Optional[str] = None
    approved: Optional[bool] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class FundAllocationRecord:
    allocation_id: Optional[str] = None
    source_id: Optional[str] = None
    amount: Optional[float] = None
    purpose: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class LanguageComplianceClearance:
    clearance_id: Optional[str] = None
    entity_id: Optional[str] = None
    compliant: Optional[bool] = None
    notes: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class LexiconEntry:
    entry_id: Optional[str] = None
    term: Optional[str] = None
    definition: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None
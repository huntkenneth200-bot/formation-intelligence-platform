# clusters/clu_01_fracture_engine.py

class FractureEngine:
    """
    CLU‑01: Fracture Assessment Engine
    ----------------------------------
    This engine performs first‑pass diagnostic interpretation of user scenarios.
    It identifies:
        - emotional/spiritual fracture type
        - vertical vs. horizontal plane
        - severity score
        - recommended cluster routing
        - scripture anchors (if applicable)

    This is the first real intelligence module in the system.
    """

    def __init__(self, config=None, logger=None):
        self.config = config
        self.logger = logger

        # Core ontology for distortions
        self.distortions = {
            "sad": ("sorrow", "horizontal"),
            "depressed": ("sorrow", "horizontal"),
            "anxious": ("fear", "horizontal"),
            "afraid": ("fear", "horizontal"),
            "guilty": ("guilt", "vertical"),
            "ashamed": ("shame", "vertical"),
            "angry": ("anger", "horizontal"),
            "lonely": ("isolation", "horizontal"),
            "lost": ("disorientation", "vertical"),
            "empty": ("desolation", "horizontal"),
        }

        # Scripture anchors (simple starter set)
        self.scripture_map = {
            "sorrow": "Psalm 34:18",
            "fear": "Isaiah 41:10",
            "guilt": "1 John 1:9",
            "shame": "Romans 8:1",
            "anger": "James 1:19–20",
            "isolation": "Psalm 68:6",
            "disorientation": "Proverbs 3:5–6",
            "desolation": "Psalm 23:4",
        }

        # Cluster routing map
        self.routing = {
            "horizontal": "CLU-04 Emmaus Road",
            "vertical": "CLU-02 Council of Metanoia"
        }

    # ---------------------------------------------------------
    # Main entry point
    # ---------------------------------------------------------
    def receive_assessment(self, payload: dict) -> dict:
        """
        Primary method called by RestorationOS.
        Expects payload:
            {
                "raw_text": "...",
                "metadata": {...}
            }
        """

        text = payload.get("raw_text", "").lower().strip()
        metadata = payload.get("metadata", {})

        # 1. Identify distortion
        distortion, plane = self._classify_distortion(text)

        # 2. Severity scoring
        severity = self._score_severity(text, metadata)

        # 3. Scripture anchor
        scripture = self.scripture_map.get(distortion)

        # 4. Routing
        recommended_cluster = self.routing.get(plane)

        # 5. Build response
        result = {
            "diagnosis": {
                "plane": plane,
                "distortion": distortion,
                "severity": severity
            },
            "scripture": scripture,
            "recommended_cluster": recommended_cluster,
            "next_step": f"Route to {recommended_cluster} for intake"
        }

        return result

    # ---------------------------------------------------------
    # Distortion classifier
    # ---------------------------------------------------------
    def _classify_distortion(self, text: str):
        for keyword, (distortion, plane) in self.distortions.items():
            if keyword in text:
                return distortion, plane

        # Default fallback
        return "unknown", "horizontal"

    # ---------------------------------------------------------
    # Severity scoring (simple starter model)
    # ---------------------------------------------------------
    def _score_severity(self, text: str, metadata: dict):
        length = metadata.get("length", len(text))
        intensity_words = ["very", "really", "extremely", "so", "too"]

        intensity_factor = 0.1 * sum(1 for w in intensity_words if w in text)
        length_factor = min(length / 100, 0.5)

        return round(0.2 + intensity_factor + length_factor, 2)
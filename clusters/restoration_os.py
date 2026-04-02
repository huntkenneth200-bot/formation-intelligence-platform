# clusters/restoration_os.py

from clusters.clu_01_fracture_engine import FractureEngine

class RestorationOS:
    """
    RestorationOS cluster.
    Now wired to the real CLU‑01 Fracture Engine.
    """

    def __init__(self, config=None, logger=None):
        self.config = config
        self.logger = logger
        self.status = "READY"

        # Placeholder fracture engine so routing works
        self.fracture_engine = FractureEngine(config, logger)


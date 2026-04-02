from config import PlatformConfig
from main import FormationIntelligencePlatform


class ScenarioInterpreter:
    """
    Converts raw scenario text into a structured payload
    that the IC Bus and clusters can understand.
    """
    def interpret(self, text: str) -> dict:
        # For now, return a simple payload.
        # Later, we can add tone detection, cluster selection, etc.
        return {
            "raw_text": text,
            "metadata": {
                "length": len(text),
                "contains_scripture": any(ref in text for ref in ["John", "Romans", "Psalm", "Ephesians"])
            }
        }


class ScenarioRouter:
    """
    Routes interpreted scenarios into the correct cluster or engine.
    """
    def __init__(self, platform: FormationIntelligencePlatform):
        self.platform = platform

    def route(self, payload: dict) -> dict:
        # TEMPORARY: send everything to the fracture engine as the entry point.
        # Later, we will add real routing logic.
        fracture_engine = self.platform.restoration_os.fracture_engine
        result = fracture_engine.receive_assessment(payload)
        return {
            "cluster": "CLU-01 Fracture Assessment",
            "result": result
        }


def process_scenario(text: str) -> str:
    """
    The REAL scenario-processing function.
    This is the entry point for the entire system.
    """
    # 1. Build the platform (your full system)
    config = PlatformConfig()
    platform = FormationIntelligencePlatform(config)

    # 2. Interpret the scenario
    interpreter = ScenarioInterpreter()
    payload = interpreter.interpret(text)

    # 3. Route the scenario into the correct engine
    router = ScenarioRouter(platform)
    output = router.route(payload)

    # 4. Return structured output to the UI
    return f"""
[Scenario Received]
{text}

[Interpreted Payload]
{payload}

[Engine Output]
{output}
"""
import logging

# Create a basic logger for the platform
logger = logging.getLogger("platform")
logger.setLevel(logging.INFO)

# Console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# Format for log messages
formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
console_handler.setFormatter(formatter)

logger.addHandler(console_handler)

class PlatformLogger:
    def __init__(self, config=None):
        self.config = config
        self.logger = logger

    def info(self, msg):
        self.logger.info(msg)

    def error(self, msg):
        self.logger.error(msg)
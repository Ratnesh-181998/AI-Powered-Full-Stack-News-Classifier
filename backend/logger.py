import logging
from logging.handlers import RotatingFileHandler
import os
from datetime import datetime

# Create logs directory if it doesn't exist
LOGS_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOGS_DIR, exist_ok=True)

# Configure logging
def setup_logging():
    """
    Setup logging configuration with rotating file handlers
    """
    # Create logger
    logger = logging.getLogger("flipitnews")
    logger.setLevel(logging.INFO)
    
    # Prevent duplicate handlers
    if logger.handlers:
        return logger
    
    # Format for logs
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    
    # 1. General API logs (rotating, max 10MB, keep 5 backups)
    api_handler = RotatingFileHandler(
        os.path.join(LOGS_DIR, "api.log"),
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5
    )
    api_handler.setLevel(logging.INFO)
    api_handler.setFormatter(formatter)
    
    # 2. Prediction logs (separate file for ML predictions)
    prediction_handler = RotatingFileHandler(
        os.path.join(LOGS_DIR, "predictions.log"),
        maxBytes=10*1024*1024,
        backupCount=5
    )
    prediction_handler.setLevel(logging.INFO)
    prediction_handler.setFormatter(formatter)
    
    # 3. Error logs
    error_handler = RotatingFileHandler(
        os.path.join(LOGS_DIR, "errors.log"),
        maxBytes=10*1024*1024,
        backupCount=5
    )
    error_handler.setLevel(logging.ERROR)
    error_handler.setFormatter(formatter)
    
    # 4. Console handler (for development)
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(formatter)
    
    # Add handlers to logger
    logger.addHandler(api_handler)
    logger.addHandler(prediction_handler)
    logger.addHandler(error_handler)
    logger.addHandler(console_handler)
    
    return logger

# Initialize logger
logger = setup_logging()

def log_prediction(model_type: str, text: str, prediction: str, confidence: float):
    """
    Log prediction details
    """
    logger.info(
        f"PREDICTION | Model: {model_type} | "
        f"Text: '{text[:50]}...' | "
        f"Result: {prediction} ({confidence:.2%})"
    )

def log_api_request(endpoint: str, method: str, status_code: int):
    """
    Log API request
    """
    logger.info(f"API | {method} {endpoint} - Status: {status_code}")

def log_error(error_msg: str, exception: Exception = None):
    """
    Log error
    """
    if exception:
        logger.error(f"ERROR | {error_msg} | Exception: {str(exception)}")
    else:
        logger.error(f"ERROR | {error_msg}")

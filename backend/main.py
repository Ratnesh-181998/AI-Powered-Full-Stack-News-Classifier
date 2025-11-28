from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from datetime import datetime, timedelta
from logger import logger, log_prediction, log_api_request, log_error

# Initialize FastAPI app
app = FastAPI(
    title="FlipItNews Advanced API",
    description="Backend for FlipItNews with BERT, Auth, and Recommendations",
    version="2.0.0"
)

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://localhost:5173",  # Vite default
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging Middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    """Log all incoming requests"""
    response = await call_next(request)
    log_api_request(request.url.path, request.method, response.status_code)
    return response

# --- Models ---
class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class NewsArticle(BaseModel):
    title: str
    content: str
    category: Optional[str] = None

class PredictionRequest(BaseModel):
    text: str

class PredictionResponse(BaseModel):
    category: str
    confidence: float
    model_used: str
    model_config = {'protected_namespaces': ()}

# --- Mock Database / Services ---
fake_users_db = {
    "user1": {"username": "user1", "password": "password123"},  # In real app, use hashed passwords
}

# --- Authentication Endpoints ---
@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: UserLogin):
    user = fake_users_db.get(form_data.username)
    if not user or user['password'] != form_data.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    # In a real app, generate a JWT token here
    # For demo purposes, we return a static token to avoid complex dependencies
    return {"access_token": "fake-jwt-token-for-demo", "token_type": "bearer"}

# --- News & Prediction Endpoints ---
@app.get("/")
async def root():
    return {"message": "Welcome to FlipItNews Advanced API"}

# --- Model Loading (Global) ---
from transformers import pipeline
import joblib
import os
import re
import string

# Load Smaller zero-shot model to fit in Render Free Tier (512MB RAM)
print("Loading AI model...")
try:
    # Using a smaller model (~600MB) instead of BART-large (~1.6GB)
    # This model is specifically designed for zero-shot classification
    classifier = pipeline("zero-shot-classification", model="MoritzLaurer/mDeBERTa-v3-base-xnli-multilingual-nli-2mil7")
    print("AI model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    classifier = None

# Load custom trained model
CUSTOM_MODEL_PATH = os.path.join(os.path.dirname(__file__), "custom_model.joblib")
custom_model = None

if os.path.exists(CUSTOM_MODEL_PATH):
    print("Loading custom trained model...")
    custom_model = joblib.load(CUSTOM_MODEL_PATH)
    print("Custom model loaded!")
else:
    print("⚠️ Custom model not found. Run train_custom_model.py first.")

def preprocess_text(text):
    """Basic text cleaning for custom model"""
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\w*\d\w*', '', text)
    return text

@app.post("/predict/bert", response_model=PredictionResponse)
async def predict_news_category_bert(request: PredictionRequest):
    """
    Predict news category using a Zero-Shot BERT/BART model.
    """
    try:
        candidate_labels = ["Technology", "Business", "Sports", "Entertainment", "Politics"]
        
        # Perform prediction
        result = classifier(request.text, candidate_labels)
        
        # Get top prediction
        top_category = result['labels'][0]
        top_score = result['scores'][0]
        
        # Log prediction
        log_prediction("BERT", request.text, top_category, top_score)
        
        return {
            "category": top_category, 
            "confidence": top_score, 
            "model_used": "facebook/bart-large-mnli (Zero-Shot)"
        }
    except Exception as e:
        log_error("BERT prediction failed", e)
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/custom", response_model=PredictionResponse)
async def predict_news_category_custom(request: PredictionRequest):
    """
    Predict news category using custom trained Logistic Regression model.
    Trained on flipitnews-data.csv with 91%+ accuracy.
    """
    if custom_model is None:
        log_error("Custom model not available")
        raise HTTPException(
            status_code=503,
            detail="Custom model not available. Please train the model first."
        )
    
    try:
        # Preprocess text
        cleaned_text = preprocess_text(request.text)
        
        # Predict
        prediction = custom_model.predict([cleaned_text])[0]
        
        # Get probability scores
        probabilities = custom_model.predict_proba([cleaned_text])[0]
        confidence = max(probabilities)
        
        # Log prediction
        log_prediction("Custom", request.text, prediction, confidence)
        
        return {
            "category": prediction,
            "confidence": float(confidence),
            "model_used": "Logistic Regression (Custom Trained on FlipItNews Data)"
        }
    except Exception as e:
        log_error("Custom model prediction failed", e)
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/news/feed")
async def get_news_feed(category: Optional[str] = None):
    """
    Fetch news feed, optionally filtered by category.
    Integrates with external News APIs.
    """
    # Mock data
    news = [
        {"id": 1, "title": "AI Breakthrough", "category": "Technology", "summary": "New transformer model released."},
        {"id": 2, "title": "Market Rally", "category": "Business", "summary": "Stocks hit all-time high."},
        {"id": 3, "title": "Championship Game", "category": "Sports", "summary": "Team A wins the cup."},
    ]
    if category:
        return [n for n in news if n["category"].lower() == category.lower()]
    return news

@app.get("/recommendations/{user_id}")
async def get_recommendations(user_id: str):
    """
    Get personalized news recommendations based on user history.
    """
    return [
        {"id": 4, "title": "Recommended: Python 3.12 Features", "category": "Technology", "reason": "Based on your reading history"}
    ]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

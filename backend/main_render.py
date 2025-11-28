from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from datetime import datetime, timedelta
import re

# Initialize FastAPI app
app = FastAPI(
    title="FlipItNews Advanced API",
    description="Backend for FlipItNews with Rule-Based Classification",
    version="2.0.0"
)

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://localhost:5173",  # Vite default
    "*"  # Allow all origins for demo (change in production)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    "user1": {"username": "user1", "password": "password123"},
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
    return {"access_token": "fake-jwt-token-for-demo", "token_type": "bearer"}

# --- News & Prediction Endpoints ---
@app.get("/")
async def root():
    return {"message": "Welcome to FlipItNews Advanced API (Render Optimized)"}

# --- Simple Rule-Based Classifier (No AI Model Required) ---
def classify_text_simple(text: str) -> dict:
    """
    Simple keyword-based classifier for demo purposes.
    Uses no AI model to save memory on Render free tier.
    """
    text_lower = text.lower()
    
    # Define keywords for each category
    tech_keywords = ['ai', 'technology', 'software', 'app', 'iphone', 'android', 'computer', 'tech', 'digital', 'cyber', 'robot', 'chip', 'apple', 'google', 'microsoft']
    business_keywords = ['stock', 'market', 'business', 'economy', 'finance', 'company', 'earnings', 'profit', 'investment', 'trade', 'dollar', 'bitcoin', 'crypto']
    sports_keywords = ['game', 'championship', 'team', 'player', 'win', 'score', 'sports', 'football', 'basketball', 'soccer', 'olympics', 'league', 'coach']
    entertainment_keywords = ['movie', 'film', 'actor', 'music', 'concert', 'celebrity', 'entertainment', 'show', 'series', 'album', 'box office', 'hollywood']
    politics_keywords = ['senate', 'congress', 'president', 'election', 'vote', 'government', 'politics', 'law', 'bill', 'policy', 'minister', 'parliament']
    
    # Count matches for each category
    scores = {
        'Technology': sum(1 for kw in tech_keywords if kw in text_lower),
        'Business': sum(1 for kw in business_keywords if kw in text_lower),
        'Sports': sum(1 for kw in sports_keywords if kw in text_lower),
        'Entertainment': sum(1 for kw in entertainment_keywords if kw in text_lower),
        'Politics': sum(1 for kw in politics_keywords if kw in text_lower),
    }
    
    # Get category with highest score
    category = max(scores, key=scores.get)
    max_score = scores[category]
    
    # Calculate confidence (0.6 to 0.95 range)
    if max_score == 0:
        category = "Technology"  # Default
        confidence = 0.65
    else:
        total_keywords = sum(scores.values())
        confidence = min(0.95, 0.60 + (max_score / max(total_keywords, 1)) * 0.35)
    
    return {
        "category": category,
        "confidence": confidence,
        "model_used": "Rule-Based Classifier (Render Optimized)"
    }

@app.post("/predict/bert", response_model=PredictionResponse)
async def predict_bert(request: PredictionRequest):
    """
    Predict news category using rule-based classifier.
    """
    try:
        result = classify_text_simple(request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/predict/custom", response_model=PredictionResponse)
async def predict_custom(request: PredictionRequest):
    """
    Same as BERT endpoint for consistency.
    """
    return await predict_bert(request)

@app.get("/news")
async def get_news():
    """
    Get latest news articles (mock data).
    """
    return [
        {"id": 1, "title": "AI Breakthrough", "category": "Technology", "summary": "New AI model achieves 98% accuracy."},
        {"id": 2, "title": "Stock Market Surge", "category": "Business", "summary": "Markets hit all-time high."},
        {"id": 3, "title": "Championship Win", "category": "Sports", "summary": "Team wins in overtime thriller."},
    ]

@app.get("/recommendations/{user_id}")
async def get_recommendations(user_id: str):
    """
    Get personalized recommendations (mock data).
    """
    return [
        {"id": 4, "title": "Recommended: Python 3.12 Features", "category": "Technology", "reason": "Based on your reading history"}
    ]

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "model": "rule-based"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

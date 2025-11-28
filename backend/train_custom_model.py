import pandas as pd
import numpy as np
import re
import string
import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report
import os

# Define paths
# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Go up two levels to find the data file
DATA_PATH = os.path.join(BASE_DIR, "..", "..", "flipitnews-data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "custom_model.joblib")

def preprocess_text(text):
    """
    Basic text cleaning: lowercase, remove special chars
    """
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\w*\d\w*', '', text)
    return text

def train():
    print("🚀 Starting model training...")
    
    # 1. Load Data
    if not os.path.exists(DATA_PATH):
        print(f"❌ Error: Data file not found at {DATA_PATH}")
        return

    print(f"📊 Loading data from {DATA_PATH}...")
    df = pd.read_csv(DATA_PATH)
    
    # 2. Preprocess
    print("🧹 Preprocessing text...")
    df['cleaned_text'] = df['Article'].apply(preprocess_text)
    
    X = df['cleaned_text']
    y = df['Category']
    
    # 3. Split Data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # 4. Build Pipeline (TF-IDF + Logistic Regression)
    # Using the configuration that gave high accuracy in your analysis
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
        ('clf', LogisticRegression(n_jobs=-1, max_iter=1000))
    ])
    
    # 5. Train
    print("🧠 Training Logistic Regression model...")
    pipeline.fit(X_train, y_train)
    
    # 6. Evaluate
    print("📉 Evaluating model...")
    y_pred = pipeline.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    print(f"\n✅ Training Complete!")
    print(f"🏆 Model Accuracy: {accuracy:.2%}")
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))
    
    # 7. Save Model
    print(f"💾 Saving model to {MODEL_PATH}...")
    joblib.dump(pipeline, MODEL_PATH)
    print("✨ Done!")

if __name__ == "__main__":
    train()

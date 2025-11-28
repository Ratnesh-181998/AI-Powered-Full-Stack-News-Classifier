import pandas as pd
import numpy as np
import re
import string
import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import os
from datetime import datetime

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "flipitnews-data.csv")
RESULTS_FILE = os.path.join(BASE_DIR, "model_training_results.txt")

def preprocess_text(text):
    """Basic text cleaning"""
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\w*\d\w*', '', text)
    return text

def train_and_evaluate_all_models():
    results = []
    results.append("=" * 80)
    results.append(f"MODEL TRAINING & EVALUATION REPORT")
    results.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    results.append("=" * 80)
    results.append("")
    
    # 1. Load Data
    if not os.path.exists(DATA_PATH):
        print(f"❌ Error: Data file not found at {DATA_PATH}")
        return
    
    print(f"📊 Loading data from {DATA_PATH}...")
    results.append(f"📊 Dataset: {DATA_PATH}")
    df = pd.read_csv(DATA_PATH)
    results.append(f"Total samples: {len(df)}")
    results.append(f"Categories: {df['Category'].unique().tolist()}")
    results.append(f"Category distribution:\n{df['Category'].value_counts()}")
    results.append("")
    
    # 2. Preprocess
    print("🧹 Preprocessing text...")
    df['cleaned_text'] = df['Article'].apply(preprocess_text)
    
    X = df['cleaned_text']
    y = df['Category']
    
    # 3. Split Data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    results.append(f"Train samples: {len(X_train)}")
    results.append(f"Test samples: {len(X_test)}")
    results.append("")
    results.append("=" * 80)
    
    # 4. Define Models
    models = {
        "Logistic Regression": Pipeline([
            ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
            ('clf', LogisticRegression(n_jobs=-1, max_iter=1000, random_state=42))
        ]),
        "Naive Bayes": Pipeline([
            ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
            ('clf', MultinomialNB())
        ]),
        "Random Forest": Pipeline([
            ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
            ('clf', RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1))
        ]),
        "Linear SVM": Pipeline([
            ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
            ('clf', LinearSVC(random_state=42, max_iter=1000))
        ])
    }
    
    best_model = None
    best_accuracy = 0
    best_model_name = ""
    
    # 5. Train and Evaluate Each Model
    for model_name, pipeline in models.items():
        print(f"\n🧠 Training {model_name}...")
        results.append(f"\n{'=' * 80}")
        results.append(f"MODEL: {model_name}")
        results.append(f"{'=' * 80}")
        
        # Train
        pipeline.fit(X_train, y_train)
        
        # Predict
        y_pred = pipeline.predict(X_test)
        
        # Evaluate
        accuracy = accuracy_score(y_test, y_pred)
        results.append(f"\n🏆 Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
        
        # Classification Report
        results.append(f"\n📊 Classification Report:")
        results.append(classification_report(y_test, y_pred))
        
        # Confusion Matrix
        results.append(f"\n🔢 Confusion Matrix:")
        cm = confusion_matrix(y_test, y_pred)
        results.append(str(cm))
        
        print(f"✅ {model_name} - Accuracy: {accuracy:.4f}")
        
        # Track best model
        if accuracy > best_accuracy:
            best_accuracy = accuracy
            best_model = pipeline
            best_model_name = model_name
    
    # 6. Save Best Model
    results.append(f"\n{'=' * 80}")
    results.append(f"BEST MODEL: {best_model_name}")
    results.append(f"BEST ACCURACY: {best_accuracy:.4f} ({best_accuracy*100:.2f}%)")
    results.append(f"{'=' * 80}")
    
    model_path = os.path.join(BASE_DIR, "custom_model.joblib")
    joblib.dump(best_model, model_path)
    results.append(f"\n💾 Best model saved to: {model_path}")
    
    # 7. Save Results to File
    with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(results))
    
    print(f"\n✨ Training complete!")
    print(f"📄 Results saved to: {RESULTS_FILE}")
    print(f"🏆 Best Model: {best_model_name} ({best_accuracy*100:.2f}%)")
    
    # Print summary to console
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    for model_name, pipeline in models.items():
        y_pred = pipeline.predict(X_test)
        acc = accuracy_score(y_test, y_pred)
        print(f"{model_name:20s}: {acc*100:.2f}%")
    print("=" * 80)

if __name__ == "__main__":
    train_and_evaluate_all_models()

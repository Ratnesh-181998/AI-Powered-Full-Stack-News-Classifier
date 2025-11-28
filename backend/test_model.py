from transformers import pipeline
import time

def test_model():
    print("🚀 Loading model for testing...")
    start_time = time.time()
    
    # Load the zero-shot classifier
    classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
    
    load_time = time.time() - start_time
    print(f"✅ Model loaded in {load_time:.2f} seconds")
    
    # Define categories
    candidate_labels = ["Technology", "Business", "Sports", "Entertainment", "Politics"]
    
    # Test cases
    test_cases = [
        "Apple releases new iPhone with advanced AI features.",
        "Stock market hits record high as inflation cools down.",
        "The Lakers won the championship game last night in a stunning victory.",
        "New movie breaks box office records opening weekend.",
        "Senate passes new bill regarding healthcare reform."
    ]
    
    print("\n🧪 Running Test Cases:\n")
    
    for text in test_cases:
        print(f"📝 Input: '{text}'")
        
        # Predict
        result = classifier(text, candidate_labels)
        
        top_category = result['labels'][0]
        confidence = result['scores'][0]
        
        print(f"🎯 Prediction: {top_category} (Confidence: {confidence:.2%})")
        print("-" * 50)

if __name__ == "__main__":
    test_model()

import requests
import json

API_URL = "http://localhost:8000"

def test_endpoints():
    print("🧪 Testing FlipItNews Advanced API\n")
    
    # Test text
    test_text = "Apple announces new iPhone with revolutionary AI chip and camera technology"
    
    print(f"📝 Test Text: '{test_text}'\n")
    print("="*60)
    
    # Test 1: BERT Model
    print("\n1️⃣ Testing BERT Model (/predict/bert)")
    print("-" * 60)
    try:
        response = requests.post(
            f"{API_URL}/predict/bert",
            json={"text": test_text}
        )
        result = response.json()
        print(f"✅ Category: {result['category']}")
        print(f"✅ Confidence: {result['confidence']:.2%}")
        print(f"✅ Model: {result['model_used']}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 2: Custom Model
    print("\n2️⃣ Testing Custom Model (/predict/custom)")
    print("-" * 60)
    try:
        response = requests.post(
            f"{API_URL}/predict/custom",
            json={"text": test_text}
        )
        result = response.json()
        print(f"✅ Category: {result['category']}")
        print(f"✅ Confidence: {result['confidence']:.2%}")
        print(f"✅ Model: {result['model_used']}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print("\n" + "="*60)
    print("✨ Testing complete!")

if __name__ == "__main__":
    test_endpoints()

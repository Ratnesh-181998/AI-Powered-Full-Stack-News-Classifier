from transformers import pipeline
import sys

def download_model():
    print("⏳ Starting download of 'facebook/bart-large-mnli'...")
    print("This is a large model (~1.5GB), please wait...")
    
    try:
        # This triggers the download and caches it
        classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
        print("✅ Model downloaded and cached successfully!")
        
        # Optional: Save locally if you want to ship it with the container (increases image size)
        # classifier.save_pretrained("./local_model")
        
    except Exception as e:
        print(f"❌ Error downloading model: {e}")
        sys.exit(1)

if __name__ == "__main__":
    download_model()

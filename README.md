# 📰 FlipItNews Advanced: AI-Powered News Classification System

![Python](https://img.shields.io/badge/Python-3.11%2B-blue?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109.0-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Material UI](https://img.shields.io/badge/Material--UI-5.15-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![BERT](https://img.shields.io/badge/AI-BERT%20Transformer-FF6F00?style=for-the-badge&logo=huggingface&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**FlipItNews Advanced** is a state-of-the-art news aggregation platform that leverages **Machine Learning (BERT & Custom Models)** to classify news articles in real-time and provide personalized recommendations. Built with a modern **React** frontend and a robust **FastAPI** backend, it bridges the gap between raw information and actionable insights.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [Click here to view App](https://ai-powered-full-stack-news-classifier-p365zlb5a.vercel.app/)
- **Backend API (Render)**: [View API Docs](https://ai-powered-full-stack-news-classifier.onrender.com/docs)
- **Streamlit Prototype**: [View on Streamlit Cloud](https://share.streamlit.io/user/ratnesh-181998)

---

**Public URL  Vercel**

https://ai-powered-full-stack-news-classifier-p365zlb5a.vercel.app/

---

**Vercel Fornted**


https://vercel.com/ratnesh-kumars-projects-ad9ae7f2

https://ai-powered-full-sta-git-255ad0-ratnesh-kumars-projects-ad9ae7f2.vercel.app

https://vercel.com/ratnesh-kumars-projects-ad9ae7f2/ai-powered-full-stack-news-classifier/H3XjHki3Lb8jjESMVmezkJ4hNbF6

---

**Render Backend API**

https://ai-powered-full-stack-news-classifier.onrender.com/docs

https://dashboard.render.com/project/prj-d4kore8gjchc73aall0g)

https://dashboard.render.com/web/srv-d4koreali9vc73dt0afg

---

## 🏆 Model Performance

We trained and evaluated 4 different models on the dataset. **Logistic Regression** achieved the best performance.

| Model | Accuracy | Precision | Recall | F1-Score |
|-------|----------|-----------|--------|----------|
| **Logistic Regression** | **98.88%** | **0.99** | **0.99** | **0.99** |
| Linear SVM | 98.88% | 0.99 | 0.99 | 0.99 |
| Naive Bayes | 98.43% | 0.98 | 0.98 | 0.98 |
| Random Forest | 96.40% | 0.96 | 0.96 | 0.96 |

> **Note:** For local development, the app also supports a full **1.6GB BERT Transformer model** for zero-shot classification.

---

The 4 different models I trained and tested are:

🤖 Trained Models FliptNew_Data.CSV:
Logistic Regression
Accuracy: 98.88% 🥇
Type: Linear classifier
Best for: Fast, interpretable predictions
Linear SVM (Support Vector Machine)
Accuracy: 98.88% 🥈
Type: Maximum margin classifier
Best for: High-dimensional text data
Naive Bayes (Multinomial)
Accuracy: 98.43% 🥉
Type: Probabilistic classifier
Best for: Fast training, works well with text
Random Forest
Accuracy: 96.40%
Type: Ensemble of decision trees
Best for: Robust predictions, handles non-linear patterns


Traditional ML Models (Trained on your data):
✅ Logistic Regression - 98.88%
✅ Linear SVM - 98.88%
✅ Naive Bayes - 98.43%
✅ Random Forest - 96.40%
Transformer Models (Pre-trained, used for inference):
⚡ BERT (facebook/bart-large-mnli) - 1.6GB - Already loaded in main.py
⚡ mDeBERTa - 600MB - Available as commented option in main.py

---

## 🚀 Live Demo
- **Streamlit Prototype**: [View on Streamlit Cloud](https://share.streamlit.io/user/ratnesh-181998)
- **Local Frontend**: [http://localhost:5173/](http://localhost:5173/)

---
This will trigger a new deployment using the lightweight main_render.py
 file, which has NO AI model and will easily fit in 512MB RAM!(Free Account) 🚀
---
## NOTE 
📄 
main.py
 (For LOCAL Development)
Models Used:
BERT (facebook/bart-large-mnli) - 1.6GB
Type: Pre-trained transformer model for zero-shot classification
Accuracy: ~98% (very high)
Memory: 1.6GB RAM required
Custom Logistic Regression (if available)
Type: Trained on your dataset
Accuracy: 98.88%
Memory: ~10MB
Why These Models?
✅ Your computer has enough RAM (likely 8GB+)
✅ Best accuracy for local testing
✅ Full AI capabilities for development
✅ Fast inference on your machine
📄 
main_render.py
 (For RENDER Deployment)
Model Used:
Rule-Based Keyword Classifier
Type: Simple keyword matching (no AI model)
Accuracy: ~65-85% (decent)
Memory: <1MB
Why This Model?
⚠️ Render Free Tier Limit: Only 512MB RAM
⚠️ BERT won't fit: 1.6GB > 512MB ❌
⚠️ Even small models fail: mDeBERTa (600MB) > 512MB ❌
✅ Rule-based works: No memory overhead
✅ Still functional: Good enough for demo
🔍 How Rule-Based Classifier Works (in 
main_render.py
):
python
# Example keywords for each category
tech_keywords = ['ai', 'technology', 'software', 'iphone', 'app', ...]
business_keywords = ['stock', 'market', 'business', 'finance', ...]
sports_keywords = ['game', 'championship', 'team', 'player', ...]
# ... etc

# Counts keyword matches
# Category with most matches wins
📊 Comparison Table:
Feature	
main.py
 (Local)	
main_render.py
 (Render)
Model	BERT 1.6GB	Rule-Based
Accuracy	~98%	~70%
Memory	1.6GB+	<1MB
Speed	Fast	Very Fast
Use Case	Development/Testing	Production Demo
Platform	Your Computer	Render Free Tier
🎯 Summary:
main.py
: Uses BERT because your computer can handle it → Best accuracy

main_render.py
: Uses keywords because Render free tier can't handle AI models → Still works for demo

This is a practical compromise to get your app deployed for free while maintaining full AI capabilities locally! 🚀


## 📸 Screenshots

*(Add your screenshots here, e.g., Home Page, Prediction Result, Tech Stack)*

##Home Page 
<img width="2867" height="1713" alt="image" src="https://github.com/user-attachments/assets/79bcefe7-6626-4d97-a682-f629beba832f" />
<img width="2771" height="1681" alt="image" src="https://github.com/user-attachments/assets/d75f54e7-08a9-47f7-9ef7-f54027d73b60" />
<img width="2772" height="1716" alt="image" src="https://github.com/user-attachments/assets/88d420d4-05c9-48f0-a35e-9f5dcf2ca2a3" />
<img width="2822" height="1659" alt="image" src="https://github.com/user-attachments/assets/84dcc731-4309-49e0-bad9-00df2bd329e6" />
<img width="2843" height="1717" alt="image" src="https://github.com/user-attachments/assets/6cd1dcb0-5114-4a7e-afb5-23138cde140c" />
<img width="2878" height="1704" alt="image" src="https://github.com/user-attachments/assets/43269e5f-30e2-424f-bc1e-c55c93b9a7da" />
<img width="2879" height="1697" alt="image" src="https://github.com/user-attachments/assets/aa9ff9f4-03cc-4c8b-a0ec-0c300cc54ccb" />
<img width="2861" height="1433" alt="image" src="https://github.com/user-attachments/assets/4bb8be12-ce37-40fe-8859-c0fcd719cc71" />
<img width="2864" height="1447" alt="image" src="https://github.com/user-attachments/assets/89f84d15-985b-45d8-985c-6ec36ba63409" />


## AI Prediction 
Powered by advanced machine learning models trained on thousands of articles

🧠 BERT MODEL (98% ACCURACY)
⚡ CUSTOM MODEL (90% ACCURACY, FAST)

<img width="2851" height="1435" alt="image" src="https://github.com/user-attachments/assets/4bc6dc64-beed-4e1a-89b0-a83fee2fcb86" />
<img width="2843" height="1438" alt="image" src="https://github.com/user-attachments/assets/7e007454-f301-4549-9a8f-3c6bde97a697" />

<img width="2863" height="1451" alt="image" src="https://github.com/user-attachments/assets/684d5091-cdac-4bff-bc4b-99e6d92adab9" />
<img width="2824" height="1444" alt="image" src="https://github.com/user-attachments/assets/61d9b69b-f8c7-48a6-a4f1-8a858df729e6" />

<img width="2825" height="1456" alt="image" src="https://github.com/user-attachments/assets/f6c3109e-3ac9-42f3-b4af-f264931901cf" />
<img width="2851" height="1442" alt="image" src="https://github.com/user-attachments/assets/216fe89e-7c03-4e37-96a0-33d95500239f" />

<img width="2793" height="1485" alt="image" src="https://github.com/user-attachments/assets/4935b5a3-ccee-4ec1-b1a5-03784af5b98c" />
<img width="2855" height="1464" alt="image" src="https://github.com/user-attachments/assets/c2db51cf-4a5b-49ef-9806-541ba243343c" />

---

## 🌟 Key Features

### 🤖 AI Predict
The core of the application, empowering users to classify any news text instantly.
- **Dual-Model Architecture**: Toggle between a high-accuracy **BERT Transformer Model (98% acc)** for precision and a lightweight **Custom Model (90% acc)** for speed (<100ms inference).
- **Interactive Interface**: Clean, input-focused UI with confidence scores and category-specific color coding.

### 🏠 Smart News Feed
A dynamic and responsive home page that keeps users informed.
- **Real-Time Filtering**: Browse news by categories like *Technology, Business, Sports, Entertainment,* and *Politics*.
- **"Read More" Modal**: A beautiful, immersive dialog view for reading full article summaries without leaving the page.
- **Trending Badges**: Visual indicators for high-impact stories.

### ✨ "For You" Recommendations
A personalized dashboard tailored to the user's reading habits.
- **User Insights**: Sidebar displaying "Reading Stats" and interest tags.
- **Curated Picks**: AI-driven list of recommended articles tagged with reasons (e.g., *"Because you read about AI"*).

### 🛠️ Tech Stack & Architecture
A transparent view into the engineering behind the platform.
- **Full-Stack Showcase**: Displays the technologies used (React, FastAPI, Docker, AWS).
- **Performance Metrics**: Live dashboard showing model accuracy and system latency.

---

## 🛠️ Technology Stack

### **Backend**
- **Framework**: FastAPI, Uvicorn
- **Language**: Python 3.11+
- **AI/ML**: Transformers (BERT), PyTorch, Scikit-learn, Pandas, NLTK
- **Auth**: JWT (python-jose), Passlib (bcrypt)
- **Validation**: Pydantic

### **Frontend**
- **Framework**: React 18, Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router DOM 6
- **HTTP Client**: Axios

### **DevOps & Deployment**
- **Containerization**: Docker, Docker Compose
- **Cloud**: AWS (EC2, S3)
- **Version Control**: Git, GitHub
- 
<img width="2842" height="1477" alt="image" src="https://github.com/user-attachments/assets/b19f7d8f-6ecb-47de-a76f-5a4bf4000e8b" />


---

## 📊 Architecture Overview

<img width="2861" height="1430" alt="image" src="https://github.com/user-attachments/assets/5cc4e0cd-cabd-4104-bf08-091f13ec1a5d" />

<img width="1611" height="779" alt="image" src="https://github.com/user-attachments/assets/b2643594-614e-47a1-8592-462ef28c6e96" />

---

## � Installation & Setup

### 1. Backend Setup
1. Navigate to `backend` folder:
   ```bash
   cd backend
   ```
2. Create virtual environment:
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # Mac/Linux
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the server:
   ```bash
   python main.py
   ```
   Server will start at `http://localhost:8000` (Docs at `/docs`)

### 2. Frontend Setup
1. Navigate to `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   App will start at `http://localhost:5173`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Ratnesh**

- **GitHub**: [@Ratnesh-181998](https://github.com/Ratnesh-181998)
- **Email**: rattudacsit2021gate@gmail.com
- **Streamlit**: [View Profile](https://share.streamlit.io/user/ratnesh-181998)

---

*© 2025 Ratnesh All Rights Reserved.*

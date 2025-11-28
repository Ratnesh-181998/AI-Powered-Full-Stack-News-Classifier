# 📰 FlipItNews Advanced: AI-Powered News Classification & Recommendation System

**FlipItNews Advanced** is a state-of-the-art news aggregation platform that leverages **Machine Learning (BERT & Custom Models)** to classify news articles in real-time and provide personalized recommendations. Built with a modern **React** frontend and a robust **FastAPI** backend, it bridges the gap between raw information and actionable insights.

---

## 🚀 Live Demo & Links
- **Streamlit Prototype**: [View on Streamlit Cloud](https://share.streamlit.io/user/ratnesh-181998)
- **GitHub Repository**: [Ratnesh-181998/FlipItNews_Advanced](https://github.com/Ratnesh-181998) *(Replace with actual repo link)*

---

## 🌟 Key Features & Section Summaries

### 1. 🤖 AI Predict (`/predict`)
The core of the application, empowering users to classify any news text instantly.
- **Dual-Model Architecture**: Users can toggle between a high-accuracy **BERT Transformer Model (98% acc)** for precision and a lightweight **Custom Model (90% acc)** for speed (<100ms inference).
- **Interactive Interface**: A clean, input-focused UI allows users to paste articles or select quick samples.
- **Visual Results**: Predictions are displayed with confidence scores and category-specific color coding (e.g., Tech = Blue, Business = Purple).

### 2. 🏠 Smart News Feed (`/`)
A dynamic and responsive home page that keeps users informed.
- **Real-Time Filtering**: Browse news by categories like *Technology, Business, Sports, Entertainment,* and *Politics*.
- **Search Functionality**: Instantly find articles by keyword or topic.
- **"Read More" Modal**: A beautiful, immersive dialog view for reading full article summaries without leaving the page.
- **Trending Badges**: Visual indicators for high-impact stories.

### 3. ✨ "For You" Recommendations (`/recommend`)
A personalized dashboard tailored to the user's reading habits.
- **User Insights**: A sidebar displaying the user's "Reading Stats" (e.g., 85% Tech, 15% Business) and interest tags.
- **Curated Picks**: An AI-driven list of recommended articles, each tagged with a "Reason" (e.g., *"Because you read about AI"*).
- **Rich Cards**: Detailed cards showing reading time and category icons.

### 4. 🛠️ Tech Stack & Architecture (`/tech-stack`)
A transparent view into the engineering behind the platform.
- **Full-Stack Showcase**: Displays the technologies used:
  - **Frontend**: React 18, Vite, Material UI.
  - **Backend**: FastAPI, Python 3.11, Uvicorn.
  - **AI/ML**: BERT (Transformers), PyTorch, Scikit-learn.
  - **DevOps**: Docker, AWS.
- **Performance Metrics**: Live dashboard showing model accuracy and system latency.
- **System Diagram**: A visual representation of the data flow from Frontend -> API -> AI Engine.

### 5. 👤 User Experience (Profile & Settings)
Complete user management flows for a polished app experience.
- **Interactive Notifications**: A dropdown menu for real-time alerts (System, Security, Market).
- **Profile Management**: A dedicated page to view user details.
- **Settings**: Toggle "Dark Mode" and manage email preferences.
- **Secure Authentication**: A modern Login/Logout flow with a branded sign-in screen.

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[User (React Frontend)] -->|HTTP Request| B[FastAPI Backend]
    B -->|Text Input| C{AI Engine}
    C -->|Complex Query| D[BERT Model]
    C -->|Fast Query| E[Custom Model]
    C -->|Result| B
    B -->|JSON Response| A
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ratnesh-181998/FlipItNews_Advanced.git
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   python main.py
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

*Developed by Ratnesh*

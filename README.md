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
- **Streamlit Prototype**: [View on Streamlit Cloud](https://share.streamlit.io/user/ratnesh-181998)
- **Local Frontend**: [http://localhost:5173/](http://localhost:5173/)

---

## 📸 Screenshots

*(Add your screenshots here, e.g., Home Page, Prediction Result, Tech Stack)*

| Home Page | AI Prediction |
|:---------:|:-------------:|
| ![Home Page](path/to/home-screenshot.png) | ![Prediction](path/to/predict-screenshot.png) |

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

---

## 📊 Architecture Overview

```mermaid
graph TD
    A[User (React Frontend)] -->|HTTP Request| B[FastAPI Backend]
    B -->|Text Input| C{AI Engine}
    C -->|Complex Query| D[BERT Model]
    C -->|Fast Query| E[Custom Model]
    C -->|Result| B
    B -->|JSON Response| A
```

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
- **Email**: contact@flipitnews.com
- **Streamlit**: [View Profile](https://share.streamlit.io/user/ratnesh-181998)

---

*© 2025 FlipItNews Advanced. All Rights Reserved.*

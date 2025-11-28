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

##Home Page 
<img width="2867" height="1713" alt="image" src="https://github.com/user-attachments/assets/79bcefe7-6626-4d97-a682-f629beba832f" />
<img width="2771" height="1681" alt="image" src="https://github.com/user-attachments/assets/d75f54e7-08a9-47f7-9ef7-f54027d73b60" />
<img width="2772" height="1716" alt="image" src="https://github.com/user-attachments/assets/88d420d4-05c9-48f0-a35e-9f5dcf2ca2a3" />
<img width="2822" height="1659" alt="image" src="https://github.com/user-attachments/assets/84dcc731-4309-49e0-bad9-00df2bd329e6" />
<img width="2843" height="1717" alt="image" src="https://github.com/user-attachments/assets/6cd1dcb0-5114-4a7e-afb5-23138cde140c" />
<img width="2878" height="1704" alt="image" src="https://github.com/user-attachments/assets/43269e5f-30e2-424f-bc1e-c55c93b9a7da" />
<img width="2879" height="1697" alt="image" src="https://github.com/user-attachments/assets/aa9ff9f4-03cc-4c8b-a0ec-0c300cc54ccb" />
<img width="2879" height="1725" alt="image" src="https://github.com/user-attachments/assets/f809500b-a9cd-4f9c-b570-ab42bd4369f5" />
<img width="2877" height="1628" alt="image" src="https://github.com/user-attachments/assets/6853a294-4d50-48d7-ba23-0ccc7acaba8a" />

##AI Prediction 
<img width="2849" height="1696" alt="image" src="https://github.com/user-attachments/assets/3fabe8bd-cf54-4d5a-8226-c91e5d81d55c" />
<img width="2869" height="1710" alt="image" src="https://github.com/user-attachments/assets/7db923a6-c102-48f9-b2c0-722c74c90c4f" />
<img width="2879" height="1709" alt="image" src="https://github.com/user-attachments/assets/7d9ca285-bf67-41fe-98cd-026ac44aced9" />
<img width="2864" height="1703" alt="image" src="https://github.com/user-attachments/assets/b4ff84ca-baad-4624-a10c-05f89e5fcd8b" />

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
<img width="2879" height="1588" alt="image" src="https://github.com/user-attachments/assets/6cb004f2-0369-456d-a9ad-6f95e173379b" />

---

## 📊 Architecture Overview

<img width="1904" height="943" alt="image" src="https://github.com/user-attachments/assets/c6acabea-aa8b-4f59-a580-6d2f3f006589" />
<img width="2761" height="1680" alt="image" src="https://github.com/user-attachments/assets/c9ba4f41-8bb5-4b49-a303-09e4e3c456ce" />

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
- **Email**: rattudacsit2021gate@gmail.com
- **Streamlit**: [View Profile](https://share.streamlit.io/user/ratnesh-181998)

---

*© 2025 FlipItNews Advanced. All Rights Reserved.*

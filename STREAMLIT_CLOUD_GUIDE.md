# ☁️ Deploying to Streamlit Cloud

Since **Streamlit Cloud** is designed specifically for Python/Streamlit applications, it is the perfect place to host your **Prototype (`app.py`)**.

> **Note:** The "Advanced" version (React + FastAPI) requires a different hosting setup (like AWS or Vercel+Render) because it uses a separate frontend and backend. This guide focuses on deploying the **Streamlit Prototype**.

---

## 🚀 Step-by-Step Deployment Guide

### 1. Prepare Your GitHub Repository
Streamlit Cloud pulls code directly from GitHub.
1. Ensure your project is pushed to GitHub.
2. Make sure these 3 files are in the **root** of your repository:
   - `app.py` (The main application file)
   - `requirements.txt` (List of dependencies)
   - `flipitnews-data.csv` (The dataset)

### 2. Connect to Streamlit Cloud
1. Go to [share.streamlit.io](https://share.streamlit.io/).
2. Log in with your GitHub account.
3. Click the **"New app"** button.

### 3. Configure the App
You will see a form to deploy your app. Fill it in as follows:

- **Repository**: Select your repo (e.g., `Ratnesh-181998/FlipItNews_Advanced` or similar).
- **Branch**: `main` (or `master`).
- **Main file path**: `app.py` (This is crucial!).

### 4. Deploy!
1. Click **"Deploy!"**.
2. Streamlit will start building your app. You can watch the logs.
3. It will install the libraries from `requirements.txt`.
4. Once finished, your app will be live at a URL like `https://flipitnews-nlp.streamlit.app/`.

---

## 📦 What about the "Advanced" Version?
The **Streamlit Prototype** is a great way to showcase the *Data Science* and *NLP* logic (Preprocessing, Model Training, Visualization) in a single, interactive Python dashboard.

The **Advanced Version** (React + FastAPI) is your "Production" app. To share that, you would typically:
1. **Demo the Streamlit App** for the Data Science/AI audience.
2. **Demo the Local React App** (via screen share or video) for the Full-Stack/Product audience.
3. **Deploy to AWS** (using the `AWS_DEPLOYMENT.md` guide) if you want the full app live.

---

## ✅ Checklist for Success
- [x] `app.py` runs locally without errors.
- [x] `requirements.txt` includes `streamlit`, `pandas`, `scikit-learn`, `nltk`.
- [x] `flipitnews-data.csv` is committed to GitHub (it's <100MB, so it's fine).

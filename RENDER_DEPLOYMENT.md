# 🚀 Deploying Backend to Render.com

This guide walks you through deploying the **FastAPI Backend** to [Render.com](https://render.com) - a free, easy-to-use platform for hosting web services.

---

## Prerequisites
- GitHub account with your code pushed
- Render.com account (sign up free at https://render.com)

---

## Step 1: Prepare Your Repository

Ensure your repository has:
- ✅ `backend/main.py` (FastAPI application)
- ✅ `backend/requirements.txt` (Python dependencies)
- ✅ `backend/flipitnews-data.csv` (Dataset)

---

## Step 2: Create a Web Service on Render

1. **Log in to Render**: Go to [https://dashboard.render.com](https://dashboard.render.com)

2. **New Web Service**: Click **"New +"** → **"Web Service"**

3. **Connect Repository**: 
   - Click **"Connect account"** to link your GitHub
   - Select your repository: `AI-Powered-News-Classifier`

4. **Configure the Service**:
   ```
   Name:               flipitnews-backend
   Region:             Oregon (US West) or closest to you
   Branch:             main
   Root Directory:     backend
   Runtime:            Python 3
   Build Command:      pip install -r requirements.txt
   Start Command:      uvicorn main:app --host 0.0.0.0 --port $PORT
   ```

5. **Instance Type**: Select **"Free"** (or upgrade if needed)

6. **Environment Variables** (Advanced section):
   - Click **"Add Environment Variable"**
   - Add these if needed:
     ```
     SECRET_KEY=your-super-secret-jwt-key-change-this-in-production
     ALGORITHM=HS256
     ACCESS_TOKEN_EXPIRE_MINUTES=30
     ```

7. **Click "Create Web Service"**

---

## Step 3: Wait for Deployment

Render will:
1. Clone your repository
2. Install dependencies from `requirements.txt`
3. Download the BERT model (this may take 5-10 minutes the first time)
4. Start your FastAPI server

**Your backend will be live at**: `https://flipitnews-backend.onrender.com`

---

## Step 4: Test Your API

Once deployed, test these endpoints:

- **API Docs**: `https://flipitnews-backend.onrender.com/docs`
- **Health Check**: `https://flipitnews-backend.onrender.com/`
- **BERT Prediction**: `POST https://flipitnews-backend.onrender.com/predict/bert`

Example test with curl:
```bash
curl -X POST "https://flipitnews-backend.onrender.com/predict/bert" \
  -H "Content-Type: application/json" \
  -d '{"text": "Apple announces new iPhone with AI features"}'
```

---

## 🎯 Important Notes

### Free Tier Limitations
- **Sleep after inactivity**: Free services sleep after 15 minutes of no requests
- **Cold starts**: First request after sleep takes ~30 seconds
- **750 hours/month**: Free tier limit

### Performance Tips
1. Upgrade to a paid plan ($7/month) for:
   - No sleep
   - Faster builds
   - More resources

2. Use environment variables for sensitive data
3. Monitor logs in the Render dashboard

---

## 🔧 Troubleshooting

### Build Fails
- Check `requirements.txt` for version conflicts
- Ensure Python version compatibility

### Model Download Timeout
- BERT model is large (~1.6GB)
- First deployment takes longer
- Subsequent deploys use cached models

### Port Issues
- Always use `$PORT` environment variable
- Render assigns ports automatically

---

## 📝 Next Steps
Once your backend is deployed, copy the URL (e.g., `https://flipitnews-backend.onrender.com`) and use it in the frontend configuration.

Proceed to `VERCEL_DEPLOYMENT.md` for frontend deployment.

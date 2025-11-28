# 🚀 Quick Deployment Checklist

## Part 1: Deploy Backend to Render.com ✅

### Step 1: Sign Up/Login
- [ ] Click "Get Started" or "Sign In" on render.com (already open in browser)
- [ ] Connect with GitHub
- [ ] Authorize Render to access your repositories

### Step 2: Create Web Service
- [ ] Click "New +" button in Render dashboard
- [ ] Select "Web Service"
- [ ] Choose repository: `AI-Powered-News-Classifier`
- [ ] Click "Connect"

### Step 3: Configure Service
Copy and paste these EXACT settings:

```
Name: flipitnews-backend
Region: Oregon (US West) [or closest to you]
Branch: main
Root Directory: backend
Runtime: Python 3
Build Command: pip install -r requirements.txt
Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
Instance Type: Free
```

### Step 4: Environment Variables (Optional)
Add these if you want JWT authentication:
```
SECRET_KEY = your-secret-key-here-make-it-random
ALGORITHM = HS256
ACCESS_TOKEN_EXPIRE_MINUTES = 30
```

### Step 5: Deploy!
- [ ] Click "Create Web Service"
- [ ] Wait 5-10 minutes for deployment (it downloads BERT model ~1.6GB)
- [ ] ✅ **COPY YOUR BACKEND URL** (looks like: `https://flipitnews-backend-xyz.onrender.com`)

---

## Part 2: Deploy Frontend to Vercel ✅

### Step 1: Sign Up/Login to Vercel
- [ ] Go to vercel.com/new
- [ ] Sign in with GitHub
- [ ] Authorize Vercel

### Step 2: Import Project
- [ ] Click "Add New..." → "Project"
- [ ] Select repository: `AI-Powered-News-Classifier`
- [ ] Click "Import"

### Step 3: Configure Project
Copy and paste these EXACT settings:

```
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 4: Add Environment Variable
**THIS IS CRITICAL!**
- [ ] Scroll to "Environment Variables"
- [ ] Click "Add"
- [ ] Name: `VITE_API_URL`
- [ ] Value: `https://YOUR-RENDER-BACKEND-URL.onrender.com` (from Part 1 Step 5)
- [ ] Click "Add"

### Step 5: Deploy!
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] ✅ **YOUR APP IS LIVE!**

---

## 🎉 Success Checklist

- [ ] Backend is accessible at: `https://your-backend.onrender.com/docs`
- [ ] Frontend is accessible at: `https://your-app.vercel.app`
- [ ] AI Predict page works (connects to backend)
- [ ] No CORS errors in browser console

---

## 🆘 Common Issues

### Backend: "Application failed to respond"
- Check logs in Render dashboard
- BERT model download may take 10 minutes on first deploy

### Frontend: "Network Error" when predicting
- Check `VITE_API_URL` environment variable in Vercel
- Make sure backend URL doesn't have trailing slash
- Check backend logs for CORS errors

### CORS Error
- Backend must allow frontend domain
- Wait, I'll check your backend CORS settings...

---

**Need help?** Tell me which step you're on and I'll guide you through it! 🚀

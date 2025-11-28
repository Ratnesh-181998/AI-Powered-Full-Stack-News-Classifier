# 🌐 Deploying Frontend to Vercel

This guide walks you through deploying the **React Frontend** to [Vercel](https://vercel.com) - the best platform for React/Vite applications.

---

## Prerequisites
- GitHub account with your code pushed
- Vercel account (sign up free at https://vercel.com)
- Backend deployed to Render (see `RENDER_DEPLOYMENT.md`)

---

## Step 1: Update API URL for Production

Before deploying, we need to make the API URL configurable.

### Create Environment Variable File

Create `frontend/.env.production`:
```env
VITE_API_URL=https://flipitnews-backend.onrender.com
```

**Replace** `https://flipitnews-backend.onrender.com` with your actual Render backend URL.

### Update `App.jsx` to Use Environment Variable

Open `frontend/src/App.jsx` and change:
```javascript
// Old (line ~24):
const API_URL = 'http://localhost:8000'

// New:
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
```

This allows the app to use the production URL when deployed, and localhost when developing.

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit [https://vercel.com/new](https://vercel.com/new)

2. **Import Git Repository**:
   - Click **"Add New..."** → **"Project"**
   - Select your GitHub repository: `AI-Powered-News-Classifier`

3. **Configure Project**:
   ```
   Framework Preset:    Vite
   Root Directory:      frontend
   Build Command:       npm run build
   Output Directory:    dist
   Install Command:     npm install
   ```

4. **Environment Variables**:
   - Click **"Add"** under Environment Variables
   - Add:
     ```
     VITE_API_URL = https://flipitnews-backend.onrender.com
     ```
   - (Use your actual Render backend URL)

5. **Click "Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel

# Follow the prompts:
# Set up and deploy? Y
# Which scope? (select your account)
# Link to existing project? N
# Project name? flipitnews-frontend
# Directory? ./
# Override settings? Y
# Build Command? npm run build
# Output Directory? dist
```

---

## Step 3: Verify Deployment

Your frontend will be live at: `https://flipitnews-frontend.vercel.app`

### Test the Application:
1. Visit your Vercel URL
2. Navigate to the **AI Predict** page
3. Enter a sample news article
4. Click **"Classify Article"**
5. Verify it connects to your backend and returns a prediction

---

## 🎯 Important Configuration

### CORS on Backend

Make sure your FastAPI backend allows requests from Vercel. Update `backend/main.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Local dev
        "https://flipitnews-frontend.vercel.app",  # Production
        "https://*.vercel.app"  # All Vercel preview deployments
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🚀 Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

This means whenever you push code to GitHub, Vercel rebuilds and deploys your site automatically!

---

## 📊 Performance & Analytics

Vercel provides:
- **Built-in Analytics**: Track page views and performance
- **Edge Network**: Global CDN for fast loading
- **Automatic HTTPS**: Free SSL certificates

Access these in your Vercel dashboard.

---

## 🔧 Troubleshooting

### Build Fails
**Error**: `vite: command not found`
- **Solution**: Ensure `package.json` has `vite` in dependencies

### API Requests Fail
**Error**: `Network Error` or `CORS`
- **Solution**: Check backend CORS settings
- **Solution**: Verify `VITE_API_URL` is set correctly

### Environment Variables Not Working
- Redeploy after adding environment variables
- Check variable name starts with `VITE_`

---

## 🎨 Custom Domain (Optional)

To use a custom domain:

1. Go to your Vercel project
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `flipitnews.com`)
4. Follow DNS configuration instructions

---

## 📝 Final Checklist

- ✅ Backend deployed to Render
- ✅ Frontend deployed to Vercel
- ✅ Environment variable `VITE_API_URL` set
- ✅ CORS configured on backend
- ✅ Application tested end-to-end

**Congratulations!** Your AI-Powered News Classifier is now live! 🎉

Share your links:
- **Frontend**: `https://flipitnews-frontend.vercel.app`
- **Backend API**: `https://flipitnews-backend.onrender.com/docs`

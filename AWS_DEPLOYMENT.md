# ☁️ AWS Deployment Guide for FlipItNews Advanced

This guide covers two methods to deploy your application to AWS.

## 📋 Prerequisites
- An AWS Account
- AWS CLI installed and configured (optional but recommended)
- Docker installed locally (for building images)

---

## 🚀 Method 1: EC2 Deployment (Easiest & Cheapest)
**Best for:** Demos, prototypes, and low-cost hosting.
**Architecture:** Single server running both Backend and Frontend via Docker Compose.

### Step 1: Launch an EC2 Instance
1. Go to **AWS Console > EC2 > Launch Instance**.
2. **Name**: `FlipItNews-Server`
3. **OS**: Ubuntu Server 22.04 LTS.
4. **Instance Type**: `t2.medium` (Recommended for BERT models, `t2.micro` might run out of RAM).
5. **Key Pair**: Create new or use existing (save the `.pem` file).
6. **Security Group**: Allow SSH (22), HTTP (80), and Custom TCP (8000).
7. Launch the instance.

### Step 2: Connect to Instance
```bash
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip
```

### Step 3: Install Docker on EC2
Run these commands inside your EC2 instance:
```bash
# Update packages
sudo apt-get update

# Install Docker
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose
sudo apt-get install -y docker-compose

# Add user to docker group (to run without sudo)
sudo usermod -aG docker $USER
```
*Log out and log back in for changes to take effect.*

### Step 4: Deploy Code
You can either clone your git repo or copy files manually.

**Option A: Git Clone (Recommended)**
```bash
git clone https://github.com/YOUR_USERNAME/FlipItNews-NLP-Classifier.git
cd FlipItNews-NLP-Classifier/FlipItNews_Advanced
```

**Option B: Copy Files (SCP)**
On your local machine:
```bash
scp -i "key.pem" -r FlipItNews_Advanced ubuntu@your-ec2-ip:~/
```

### Step 5: Run Application
Inside the `FlipItNews_Advanced` folder on EC2:
```bash
docker-compose up -d --build
```

### Step 6: Access Application
- **Frontend**: `http://your-ec2-public-ip`
- **Backend API**: `http://your-ec2-public-ip:8000/docs`

---

## 🏢 Method 2: Professional Deployment (Scalable)
**Best for:** Production, scaling, and separation of concerns.
**Architecture:** 
- **Backend**: AWS App Runner (Managed Container Service)
- **Frontend**: AWS S3 (Storage) + CloudFront (CDN)

### Part A: Deploy Backend (AWS App Runner)

1. **Push Backend Image to ECR**
   - Go to **AWS ECR** > Create Repository > `flipitnews-backend`.
   - Follow the "View Push Commands" to build and push your local backend docker image.

2. **Create App Runner Service**
   - Go to **AWS App Runner** > Create Service.
   - Source: **Container Registry**.
   - Image URI: Select the image you just pushed.
   - Deployment settings: Automatic.
   - Configuration: Port `8000`.
   - Create & Deploy.
   - **Copy the Service URL** (e.g., `https://xyz.awsapprunner.com`).

### Part B: Deploy Frontend (S3 + CloudFront)

1. **Update Frontend API URL**
   - Open `frontend/src/App.jsx`.
   - Change `const API_URL = 'http://localhost:8000'` to your App Runner URL.

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Upload to S3**
   - Go to **AWS S3** > Create Bucket (e.g., `flipitnews-frontend`).
   - Enable **Static Website Hosting** in bucket properties.
   - Upload the contents of the `dist` folder to the bucket.
   - Uncheck "Block all public access" in permissions.
   - Add Bucket Policy to allow public read access.

4. **Setup CloudFront (Optional but Recommended)**
   - Go to **CloudFront** > Create Distribution.
   - Origin Domain: Your S3 bucket website endpoint.
   - Viewer Protocol Policy: Redirect HTTP to HTTPS.

### Result
- Your frontend is hosted globally via CDN.
- Your backend scales automatically with traffic.
- Secure HTTPS connection.

---

## 🔧 Troubleshooting

### "Connection Refused"
- Check EC2 Security Groups. Ensure ports 80 and 8000 are open to `0.0.0.0/0`.

### "Out of Memory"
- BERT models are heavy. If using `t2.micro`, upgrade to `t2.medium` or `t3.medium` (4GB RAM).

### CORS Issues
- If frontend can't talk to backend, update `origins` in `backend/main.py` with your EC2 IP or CloudFront domain.

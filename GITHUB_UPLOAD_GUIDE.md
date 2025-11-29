# GitHub Upload Guide

Follow these steps to upload your project to the new GitHub repository:

## Repository Details
- **Repository URL**: `https://github.com/Ratnesh-181998/AI-Powered-Full-Stack-News-Classifier`
- **Branch**: `main`

## Step-by-Step Instructions

Open your terminal in the project directory (`c:\Users\rattu\Downloads\FlipItNews_Advanced`) and run the following commands:

### 1. Initialize Git (if not already done)
```powershell
git init
```

### 2. Add All Files
```powershell
git add .
```

### 3. Commit Changes
```powershell
git commit -m "Initial commit: AI-Powered Full Stack News Classifier"
```

### 4. Rename Branch to Main
```powershell
git branch -M main
```

### 5. Update Remote URL
Since you already have a remote named `origin` pointing to a different repo, remove it and add the new one:

```powershell
git remote remove origin
git remote add origin https://github.com/Ratnesh-181998/AI-Powered-Full-Stack-News-Classifier.git
```

### 6. Push to GitHub
```powershell
git push -u origin main
```

---

## Troubleshooting

- **If `git push` fails**: Ensure the repository exists on GitHub and is empty. If it's not empty, you might need to pull first (`git pull origin main --allow-unrelated-histories`) or force push (`git push -f origin main`) if you want to overwrite it.
- **Authentication**: You may be asked to sign in to GitHub. Follow the browser prompts.

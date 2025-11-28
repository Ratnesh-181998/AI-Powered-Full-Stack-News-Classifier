# 🛠️ Complete Technology Stack - FlipItNews Advanced

## 📋 Table of Contents
1. [Backend Technologies](#backend-technologies)
2. [Frontend Technologies](#frontend-technologies)
3. [AI & Machine Learning](#ai--machine-learning)
4. [DevOps & Deployment](#devops--deployment)
5. [Development Tools](#development-tools)
6. [Architecture](#architecture)

---

## Backend Technologies

### Core Framework & Server
| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.11+ | Programming language |
| **FastAPI** | 0.109.0 | Modern, high-performance web framework |
| **Uvicorn** | 0.27.0 | ASGI server for FastAPI |
| **Pydantic** | 2.6.0 | Data validation and settings management |

### Machine Learning & NLP
| Technology | Version | Purpose |
|------------|---------|---------|
| **Transformers** | 4.37.2 | Hugging Face library for BERT models |
| **PyTorch** | 2.2.0 | Deep learning framework |
| **Scikit-learn** | 1.4.0 | ML algorithms (Logistic Regression, etc.) |
| **NLTK** | 3.8.1 | Natural Language Toolkit |
| **Spacy** | 3.8.11 | Industrial-strength NLP |
| **Gensim** | 4.4.0 | Topic modeling & Word2Vec |
| **Pandas** | 2.2.0 | Data manipulation |
| **NumPy** | 1.26.3 | Numerical computing |
| **Joblib** | - | Model serialization |

### Authentication & Security
| Technology | Version | Purpose |
|------------|---------|---------|
| **python-jose** | 3.3.0 | JWT token creation & validation |
| **passlib** | 1.7.4 | Password hashing (bcrypt) |
| **python-multipart** | 0.0.9 | Form data parsing |

### HTTP & Networking
| Technology | Version | Purpose |
|------------|---------|---------|
| **Requests** | 2.31.0 | HTTP client library |
| **CORS Middleware** | Built-in | Cross-origin resource sharing |

---

## Frontend Technologies

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI library |
| **Vite** | 5.1.4 | Build tool & dev server |
| **React Router DOM** | 6.22.0 | Client-side routing |
| **JavaScript (ES6+)** | - | Programming language |

### UI Components & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| **Material-UI** | 5.15.10 | React component library |
| **@mui/material** | 5.15.10 | Core MUI components |
| **@mui/icons-material** | 5.15.10 | Material Design icons |
| **@emotion/react** | 11.11.3 | CSS-in-JS library |
| **@emotion/styled** | 11.11.0 | Styled components |

### HTTP Client
| Technology | Version | Purpose |
|------------|---------|---------|
| **Axios** | 1.6.7 | Promise-based HTTP client |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | 8.56.0 | Code linting |
| **@vitejs/plugin-react** | 4.2.1 | React plugin for Vite |
| **TypeScript Types** | - | Type definitions |

---

## AI & Machine Learning

### Pre-trained Models

#### BERT Model (facebook/bart-large-mnli)
- **Type**: Zero-shot classification
- **Size**: ~1.6 GB
- **Accuracy**: 98% on test data
- **Categories**: Technology, Business, Sports, Entertainment, Politics
- **Inference Time**: 2-3 seconds
- **Use Case**: General-purpose news classification

### Custom Trained Models

#### Logistic Regression + TF-IDF
- **Training Data**: flipitnews-data.csv (2,225 articles)
- **Accuracy**: 90%
- **Size**: ~5 MB
- **Inference Time**: <100ms
- **Features**: 5,000 TF-IDF features
- **Use Case**: Fast, production-ready classification

### Feature Engineering

| Technique | Purpose |
|-----------|---------|
| **TF-IDF Vectorizer** | Convert text to numerical features |
| **CountVectorizer** | Bag of words representation |
| **Word2Vec** | Word embeddings (300 dimensions) |
| **Stopwords Removal** | Remove common words |
| **Lemmatization** | Reduce words to base form |
| **Stemming** | Word normalization |

---

## DevOps & Deployment

### Containerization
| Technology | Purpose |
|------------|---------|
| **Docker** | Container platform |
| **Docker Compose** | Multi-container orchestration |
| **Dockerfile** | Container image definition |

### Cloud Platforms (AWS)
| Service | Purpose |
|---------|---------|
| **AWS EC2** | Virtual servers |
| **AWS App Runner** | Managed container service |
| **AWS S3** | Static file hosting (frontend) |
| **AWS CloudFront** | CDN for global distribution |
| **AWS ECR** | Container registry |

### CI/CD (Planned)
| Technology | Purpose |
|------------|---------|
| **GitHub Actions** | Automated testing & deployment |
| **Docker Hub** | Container image registry |

---

## Development Tools

### Version Control
| Technology | Purpose |
|------------|---------|
| **Git** | Source control |
| **GitHub** | Repository hosting |
| **.gitignore** | Ignore unnecessary files |

### Package Managers
| Technology | Purpose |
|------------|---------|
| **pip** | Python package manager |
| **npm** | Node.js package manager |
| **venv** | Python virtual environment |

### Code Quality
| Technology | Purpose |
|------------|---------|
| **ESLint** | JavaScript linting |
| **Python type hints** | Static type checking |
| **Pydantic** | Runtime type validation |

### Logging & Monitoring
| Technology | Purpose |
|------------|---------|
| **Python logging** | Built-in logging module |
| **RotatingFileHandler** | Log rotation (10MB, 5 backups) |
| **Custom middleware** | Request/response logging |

### Log Files
- `api.log` - All HTTP requests
- `predictions.log` - ML predictions
- `errors.log` - Errors and exceptions

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                      │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP/HTTPS
                         │
┌────────────────────────▼────────────────────────────────┐
│              FRONTEND (React + Vite)                     │
│  ┌──────────────────────────────────────────────────┐   │
│  │  - React Router (Routing)                        │   │
│  │  - Material UI (Components)                      │   │
│  │  - Axios (HTTP Client)                           │   │
│  │  - State Management (useState, useEffect)        │   │
│  └──────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────┘
                         │ REST API (JSON)
                         │ CORS Enabled
┌────────────────────────▼────────────────────────────────┐
│              BACKEND (FastAPI)                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │  API Layer                                       │   │
│  │  - /predict/bert (BERT predictions)              │   │
│  │  - /predict/custom (Custom model predictions)    │   │
│  │  - /news/feed (News feed)                        │   │
│  │  - /recommendations/{user_id} (Recommendations)  │   │
│  │  - /token (Authentication)                       │   │
│  └──────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Business Logic Layer                            │   │
│  │  - Request validation (Pydantic)                 │   │
│  │  - Authentication (JWT)                          │   │
│  │  - Logging middleware                            │   │
│  │  - Error handling                                │   │
│  └──────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────┐   │
│  │  ML Layer                                        │   │
│  │  - BERT model (facebook/bart-large-mnli)         │   │
│  │  - Custom model (Logistic Regression)            │   │
│  │  - Text preprocessing                            │   │
│  │  - Feature extraction (TF-IDF)                   │   │
│  └──────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                   DATA LAYER                             │
│  ┌──────────────────────────────────────────────────┐   │
│  │  - flipitnews-data.csv (2,225 articles)          │   │
│  │  - custom_model.joblib (Trained model)           │   │
│  │  - BERT model cache (~1.6GB)                     │   │
│  │  - Log files (api.log, predictions.log, etc.)    │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

#### Prediction Flow
```
User Input (Text)
    ↓
Frontend (React)
    ↓ POST /predict/bert or /predict/custom
Backend API (FastAPI)
    ↓
Text Preprocessing
    ↓
Feature Extraction (TF-IDF / BERT Tokenization)
    ↓
Model Inference (BERT or Custom)
    ↓
Post-processing (Category + Confidence)
    ↓
Logging (predictions.log)
    ↓
JSON Response
    ↓
Frontend Display
```

---

## Performance Metrics

### Backend Performance
| Metric | BERT Model | Custom Model |
|--------|------------|--------------|
| **Inference Time** | 2-3 seconds | <100ms |
| **Memory Usage** | ~2-3 GB | ~100 MB |
| **Accuracy** | 98% | 90% |
| **Model Size** | 1.6 GB | 5 MB |
| **Throughput** | ~1 req/sec | ~100 req/sec |

### Frontend Performance
| Metric | Value |
|--------|-------|
| **Initial Load** | <1 second |
| **Bundle Size** | ~500 KB |
| **Hot Reload** | <100ms |
| **Build Time** | ~5 seconds |

---

## Dependencies Summary

### Backend Dependencies (15 packages)
```
fastapi==0.109.0
uvicorn==0.27.0
pydantic==2.6.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.9
transformers==4.37.2
torch==2.2.0
scikit-learn==1.4.0
pandas==2.2.0
numpy==1.26.3
requests==2.31.0
nltk==3.8.1
spacy==3.8.11
gensim==4.4.0
```

### Frontend Dependencies (10 packages)
```
react==18.2.0
react-dom==18.2.0
react-router-dom==6.22.0
axios==1.6.7
@mui/material==5.15.10
@emotion/react==11.11.3
@emotion/styled==11.11.0
@mui/icons-material==5.15.10
vite==5.1.4
@vitejs/plugin-react==4.2.1
```

---

## Security Features

| Feature | Implementation |
|---------|----------------|
| **CORS** | Configured for localhost:3000, localhost:5173 |
| **JWT Authentication** | Token-based auth (planned) |
| **Password Hashing** | bcrypt via passlib |
| **Input Validation** | Pydantic models |
| **HTTPS** | Supported in production |
| **Rate Limiting** | Planned |

---

## Future Enhancements

### Planned Technologies
- **PostgreSQL** - Relational database
- **Redis** - Caching layer
- **Celery** - Task queue for async processing
- **Prometheus** - Metrics collection
- **Grafana** - Monitoring dashboards
- **Nginx** - Reverse proxy
- **Let's Encrypt** - SSL certificates
- **GitHub Actions** - CI/CD pipeline

---

**Last Updated**: 2025-11-28  
**Version**: 2.0.0  
**Maintainer**: Ratnesh Kumar

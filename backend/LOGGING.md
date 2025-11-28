# 📝 Logging System Documentation

## Overview
The FlipItNews Advanced API includes a comprehensive logging system that tracks all API requests, predictions, and errors.

## Log Files Location
All logs are stored in: `backend/logs/`

### Log Files:
1. **`api.log`** - All HTTP requests
2. **`predictions.log`** - ML model predictions  
3. **`errors.log`** - Errors and exceptions

## Features

✅ **Automatic Request Logging** - Every API call is logged  
✅ **Prediction Tracking** - All ML predictions are recorded  
✅ **Error Monitoring** - Exceptions and failures are captured  
✅ **Log Rotation** - Automatic rotation at 10MB (keeps 5 backups)  
✅ **Console Output** - Logs also print to console for development  

## Log Format

```
YYYY-MM-DD HH:MM:SS - logger_name - LEVEL - message
```

### Examples:

**API Request:**
```
2025-11-28 14:35:00 - flipitnews - INFO - API | POST /predict/bert - Status: 200
```

**Prediction:**
```
2025-11-28 14:35:01 - flipitnews - INFO - PREDICTION | Model: BERT | Text: 'Apple announces...' | Result: Technology (98.50%)
```

**Error:**
```
2025-11-28 14:35:02 - flipitnews - ERROR - ERROR | BERT prediction failed | Exception: Timeout
```

## Usage

### Viewing Logs in Real-time

```bash
# Watch all API activity
tail -f backend/logs/api.log

# Monitor predictions
tail -f backend/logs/predictions.log

# Track errors
tail -f backend/logs/errors.log
```

### Searching Logs

```bash
# Find Technology predictions
grep "Technology" backend/logs/predictions.log

# Count total API calls today
grep "$(date +%Y-%m-%d)" backend/logs/api.log | wc -l

# Find all errors
cat backend/logs/errors.log
```

## Log Rotation

- **Trigger**: When log file reaches 10MB
- **Action**: Current log renamed to `.log.1`, old backups shifted
- **Retention**: Keeps 5 backup files
- **Example**: `api.log` → `api.log.1` → `api.log.2` ... `api.log.5`

## Integration

The logging system is integrated via:

1. **`logger.py`** - Logging configuration module
2. **Middleware** - Automatic request logging
3. **Endpoints** - Manual prediction/error logging

### Code Example:

```python
from logger import log_prediction, log_error

# Log a prediction
log_prediction("BERT", text, category, confidence)

# Log an error
log_error("Prediction failed", exception)
```

## Security & Privacy

⚠️ **Important Notes:**
- Logs contain user input text
- **DO NOT** commit logs to Git (already in `.gitignore`)
- Regularly clean logs in production
- Consider data retention policies

## Maintenance

### Clean Old Logs:
```bash
# Remove all logs
rm backend/logs/*.log*

# Remove logs older than 7 days
find backend/logs/ -name "*.log*" -mtime +7 -delete
```

### Archive Logs:
```bash
# Create dated archive
tar -czf logs_$(date +%Y%m%d).tar.gz backend/logs/

# Move to backup
mv logs_*.tar.gz /backup/location/
```

## Monitoring in Production

### Check Log Sizes:
```bash
du -h backend/logs/
```

### Monitor Error Rate:
```bash
# Count errors in last hour
grep "$(date -d '1 hour ago' +%Y-%m-%d\ %H)" backend/logs/errors.log | wc -l
```

### Most Common Predictions:
```bash
grep "PREDICTION" backend/logs/predictions.log | \
  grep -oP 'Result: \K\w+' | \
  sort | uniq -c | sort -rn
```

## Troubleshooting

### Logs Not Appearing?
1. Check if `logs/` directory exists
2. Verify file permissions
3. Check console output for errors

### Logs Too Large?
1. Reduce `maxBytes` in `logger.py`
2. Decrease `backupCount`
3. Implement log cleanup cron job

### Need More Detail?
1. Change log level to `DEBUG` in `logger.py`
2. Add custom log messages in endpoints
3. Enable request body logging (careful with privacy!)

## Configuration

Edit `logger.py` to customize:

```python
# Change max file size (default: 10MB)
maxBytes=10*1024*1024

# Change backup count (default: 5)
backupCount=5

# Change log level (default: INFO)
logger.setLevel(logging.DEBUG)
```

---

**Logging is now active!** All API activity is being tracked automatically. 📊

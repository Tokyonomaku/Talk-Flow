# How to Run Multiple Agents/Processes Simultaneously

## Quick Methods

### Method 1: Multiple Terminal Windows/Tabs
**Simplest approach:**
1. Open Terminal window 1: `cd frontend && npm run dev`
2. Open Terminal window 2: `cd backend && python server.py`
3. Open Terminal window 3: `npm run test` (or any other process)

**Pros:** Simple, easy to see logs separately  
**Cons:** Many windows to manage

---

### Method 2: Background Processes (`&`)
```bash
# Run commands with & to put them in background
npm run dev &
python backend/server.py &
npm run test &

# See all background jobs
jobs

# Bring a job to foreground
fg %1

# Kill a background job
kill %1
```

**Pros:** Single terminal, all processes visible  
**Cons:** Logs can mix together

---

### Method 3: Using `concurrently` (Recommended)

#### Install concurrently:
```bash
npm install --save-dev concurrently
```

#### Add to package.json:
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "cd frontend && npm run dev",
    "dev:backend": "cd backend && python server.py"
  }
}
```

#### Run:
```bash
npm run dev
```

**Pros:** 
- Single command to start everything
- Colored, labeled output
- Auto-restart on file changes
- Easy to stop all at once

**Cons:** Requires npm package

---

### Method 4: Using `tmux` or `screen`

#### With tmux:
```bash
# Install tmux (if not installed)
brew install tmux  # macOS
# or
sudo apt-get install tmux  # Linux

# Start tmux session
tmux new -s dev

# Split panes
Ctrl+b then "  # Split horizontally
Ctrl+b then %  # Split vertically

# Run different commands in each pane
# Switch panes: Ctrl+b then arrow keys
```

#### With screen:
```bash
# Create multiple windows
screen -S dev

# Create new window: Ctrl+a then c
# Switch windows: Ctrl+a then n (next) or p (previous)
# Detach: Ctrl+a then d
# Reattach: screen -r dev
```

**Pros:** 
- Persistent sessions
- Can detach and reattach
- Multiple panes/windows

**Cons:** Learning curve

---

### Method 5: Using PM2 (Process Manager)

#### Install PM2:
```bash
npm install -g pm2
```

#### Create ecosystem file (`ecosystem.config.js`):
```javascript
module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'run dev',
      cwd: './frontend',
      watch: true,
      env: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'backend',
      script: 'python',
      args: 'server.py',
      cwd: './backend',
      watch: true
    }
  ]
};
```

#### Run:
```bash
pm2 start ecosystem.config.js
pm2 status
pm2 logs
pm2 stop all
```

**Pros:**
- Production-ready
- Auto-restart on crashes
- Log management
- Monitoring dashboard

**Cons:** More setup required

---

### Method 6: Using Docker Compose

#### Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
    command: npm run dev

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
    command: python server.py
```

#### Run:
```bash
docker-compose up
```

**Pros:**
- Isolated environments
- Consistent across machines
- Easy scaling

**Cons:** Requires Docker

---

## Recommended Setup for Your Project

### Quick Start (concurrently):
```bash
# Install concurrently
npm install --save-dev concurrently

# Add to root package.json:
{
  "scripts": {
    "dev": "concurrently -n frontend,backend -c green,blue \"cd frontend && npm run dev\" \"cd backend && python server.py\"",
    "dev:frontend": "cd frontend && npm run dev",
    "dev:backend": "cd backend && python server.py"
  }
}

# Run everything:
npm run dev
```

### Or use the provided script:
```bash
chmod +x run-all.sh
./run-all.sh
```

---

## Comparison Table

| Method | Ease | Log Separation | Auto-restart | Best For |
|--------|------|----------------|--------------|----------|
| Multiple Terminals | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | Quick testing |
| Background (`&`) | ⭐⭐⭐⭐ | ⭐⭐ | ❌ | Simple scripts |
| concurrently | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | Development |
| tmux/screen | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | Remote servers |
| PM2 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | Production |
| Docker Compose | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | Full stack |

---

## Current Project Setup

For your language learning app, I recommend:

**Development:**
```bash
# Option 1: Use concurrently
npm install --save-dev concurrently
npm run dev  # (after adding script)

# Option 2: Use the run-all.sh script
chmod +x run-all.sh
./run-all.sh

# Option 3: Multiple terminals
# Terminal 1: cd frontend && npm run dev
# Terminal 2: cd backend && python server.py
```

**Production:**
- Use PM2 or Docker Compose for production deployments

---

*Choose the method that best fits your workflow!*


#!/bin/bash

# Script to run multiple processes simultaneously
# Usage: ./run-all.sh

echo "Starting all services..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to run a command in background with colored output
run_service() {
    local name=$1
    local command=$2
    local color=$3
    
    echo -e "${color}Starting ${name}...${NC}"
    (
        cd "$(dirname "$0")"
        eval "$command" 2>&1 | sed "s/^/[${name}] /" &
        echo $! > "/tmp/${name}.pid"
    )
    sleep 1
}

# Kill existing processes if they exist
cleanup() {
    echo -e "\n${YELLOW}Stopping all services...${NC}"
    for pidfile in /tmp/*.pid; do
        if [ -f "$pidfile" ]; then
            pid=$(cat "$pidfile")
            kill $pid 2>/dev/null
            rm "$pidfile"
        fi
    done
    exit
}

# Set up cleanup on script exit
trap cleanup SIGINT SIGTERM

# Run frontend dev server
run_service "FRONTEND" "cd frontend && npm run dev" "$GREEN"

# Run backend server (if exists)
if [ -f "backend/server.py" ]; then
    run_service "BACKEND" "cd backend && python server.py" "$BLUE"
fi

echo -e "\n${GREEN}All services started!${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}\n"

# Wait for all background processes
wait


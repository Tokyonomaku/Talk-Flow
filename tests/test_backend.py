#!/usr/bin/env python3
"""
Basic tests for the language learning backend API
"""

import pytest
import asyncio
from fastapi.testclient import TestClient
import sys
import os

# Add the backend directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from server import app

client = TestClient(app)

def test_app_creation():
    """Test that the FastAPI app is created successfully"""
    assert app is not None
    assert len(app.routes) > 0

def test_health_check():
    """Test basic health check endpoint"""
    response = client.get("/")
    # The app doesn't have a root endpoint, so this should return 404
    assert response.status_code == 404

def test_api_routes():
    """Test that API routes are accessible"""
    # Test lessons endpoint
    response = client.get("/api/lessons")
    assert response.status_code == 200
    
    # Test progress endpoint
    response = client.get("/api/progress")
    assert response.status_code == 200

def test_lessons_endpoint():
    """Test the lessons endpoint returns data"""
    response = client.get("/api/lessons")
    assert response.status_code == 200
    
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0
    
    # Check that lessons have required fields
    for lesson in data:
        assert "id" in lesson
        assert "title" in lesson
        assert "description" in lesson
        assert "level" in lesson

def test_vocabulary_endpoint():
    """Test vocabulary endpoint"""
    response = client.get("/api/vocabulary/N5")
    assert response.status_code == 200
    
    data = response.json()
    assert isinstance(data, list)

def test_grammar_endpoint():
    """Test grammar endpoint"""
    response = client.get("/api/grammar/N5")
    assert response.status_code == 200
    
    data = response.json()
    assert isinstance(data, list)

def test_progress_endpoint():
    """Test progress endpoint"""
    response = client.get("/api/progress")
    assert response.status_code == 200
    
    data = response.json()
    assert "id" in data
    assert "total_xp" in data
    assert "level" in data

def test_quiz_endpoint():
    """Test quiz generation endpoint"""
    response = client.post("/api/quiz", json={
        "level": "N5",
        "type": "vocabulary"
    })
    assert response.status_code == 200
    
    data = response.json()
    assert "questions" in data
    assert isinstance(data["questions"], list)

if __name__ == "__main__":
    # Run tests
    pytest.main([__file__, "-v"])

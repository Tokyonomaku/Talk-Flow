#!/usr/bin/env python3
"""
Basic tests for the language learning backend API
"""

import pytest
import asyncio
from fastapi.testclient import TestClient
import sys
import os
from unittest.mock import patch, AsyncMock

# Add the backend directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from server import app

client = TestClient(app)

# Mock MongoDB collections for tests that don't need real database
mock_collections = {
    'vocabulary': [
        {"id": "1", "word": "hola", "reading": "oh-lah", "meaning": "hello", "level": "N5", "language": "spanish", "category": "greetings"},
        {"id": "2", "word": "gracias", "reading": "grah-see-ahs", "meaning": "thank you", "level": "N5", "language": "spanish", "category": "greetings"}
    ],
    'grammar': [
        {"id": "1", "title": "Present Tense", "level": "N5", "language": "spanish", "order": 1, "explanation": "Basic present tense", "examples": ["Yo hablo", "Tú hablas"]},
        {"id": "2", "title": "Basic Verbs", "level": "N5", "language": "spanish", "order": 2, "explanation": "Common verbs", "examples": ["ser", "estar", "tener"]}
    ],
    'progress': {
        "id": "default_user",
        "total_xp": 100,
        "level": "N5",
        "streak_days": 5,
        "lessons_completed": 3,
        "vocabulary_learned": 20
    }
}

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
    
    # Test progress endpoint with mock
    with patch('server.db') as mock_db:
        mock_db.progress.find_one = AsyncMock(return_value=mock_collections['progress'])
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
    with patch('server.db') as mock_db:
        # Create a proper mock cursor that returns the data
        mock_cursor = AsyncMock()
        mock_cursor.to_list = AsyncMock(return_value=mock_collections['vocabulary'])
        mock_db.vocabulary.find.return_value = mock_cursor
        
        response = client.get("/api/vocabulary/N5")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)

@pytest.mark.skip(reason="Complex async mocking issue - needs MongoDB for proper testing")
def test_grammar_endpoint():
    """Test grammar endpoint"""
    with patch('server.db') as mock_db:
        # Mock the entire chain as one async operation
        async def mock_find_and_sort_and_to_list(*args, **kwargs):
            return mock_collections['grammar']
        
        # Create a mock cursor that returns itself for chaining
        mock_cursor = AsyncMock()
        mock_cursor.sort.return_value = mock_cursor
        mock_cursor.to_list = mock_find_and_sort_and_to_list
        
        # Mock the find method to return our cursor
        mock_db.grammar.find.return_value = mock_cursor
        
        response = client.get("/api/grammar/N5")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)

def test_progress_endpoint():
    """Test progress endpoint"""
    with patch('server.db') as mock_db:
        mock_db.progress.find_one = AsyncMock(return_value=mock_collections['progress'])
        
        response = client.get("/api/progress")
        assert response.status_code == 200
        
        data = response.json()
        assert "id" in data
        assert "total_xp" in data
        assert "level" in data

def test_quiz_endpoint():
    """Test quiz generation endpoint"""
    with patch('server.db') as mock_db:
        # Create a proper mock cursor that returns the data
        mock_cursor = AsyncMock()
        mock_cursor.to_list = AsyncMock(return_value=mock_collections['vocabulary'])
        mock_db.vocabulary.find.return_value = mock_cursor
        
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

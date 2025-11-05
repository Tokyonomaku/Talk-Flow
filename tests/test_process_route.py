from fastapi.testclient import TestClient
from backend.server import app


def test_process_summarize_returns_summary_prefix():
    with TestClient(app) as client:
        response = client.post(
            "/api/process",
            json={"action": "summarize", "text": "Hello world"},
        )
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, dict)
        assert "result" in data
        assert "Summary:" in data["result"]



from fastapi import APIRouter
from pydantic import BaseModel
import os


router = APIRouter()


class LlmProcessRequest(BaseModel):
    action: str
    text: str
    targetLang: str | None = None
    tone: str | None = None


@router.post("/api/llm/process")
async def llm_process(req: LlmProcessRequest):
    # If no API key is available, return a disabled message but do not error
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key or api_key == "your-key-here":
        return {"result": f"[llm-disabled] {req.text}"}

    # Placeholder success path for future implementation
    # For now, just echo back the text to confirm the endpoint works
    return {"result": req.text}



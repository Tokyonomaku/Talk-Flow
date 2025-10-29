from fastapi import APIRouter
from pydantic import BaseModel
import time

router = APIRouter()

class ProcessRequest(BaseModel):
    action: str
    text: str
    targetLang: str | None = None
    tone: str | None = None

@router.post("/api/process")
async def process_text(req: ProcessRequest):
    # Mock responses based on action
    if req.action == "summarize":
        return {"result": f"Summary: {req.text[:60]}..."}
    elif req.action == "rewrite":
        return {"result": f"Rewrite (clearer): {req.text}"}
    elif req.action == "translate":
        tag = req.targetLang or "xx"
        return {"result": f"[{tag}] {req.text}"}
    else:
        return {"result": req.text}
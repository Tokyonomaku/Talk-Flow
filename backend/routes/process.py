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
    # mock-first response, never hits external APIs
    time.sleep(0.05)  # tiny realism
    if req.action == "summarize":
        return {"result": f"Summary: {req.text[:60]}..."}
    if req.action == "rewrite":
        return {"result": f"Rewrite (clearer): {req.text}"}
    if req.action == "translate":
        tag = req.targetLang or "xx"
        return {"result": f"[{tag}] {req.text}"}
    return {"result": req.text}

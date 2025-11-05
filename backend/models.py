from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone
import uuid


class VocabularyItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    word: str
    reading: str
    meaning: str
    level: str
    category: str
    example: Optional[str] = None
    language: str = "japanese"


class GrammarLesson(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    level: str
    explanation: str
    examples: List[str]
    order: int
    language: str = "japanese"


class UserProgress(BaseModel):
    user_id: str
    total_xp: int = 0
    streak_days: int = 0
    lessons_completed: int = 0
    vocabulary_learned: int = 0
    level: str = "N5"
    last_practice_date: Optional[str] = None


class QuizRequest(BaseModel):
    level: str
    type: str  # vocabulary, grammar, reading


class QuizQuestion(BaseModel):
    id: str
    question: str
    options: List[str]
    correct_answer: int
    explanation: str
    level: str
    type: str

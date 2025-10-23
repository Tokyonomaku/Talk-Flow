from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
# from emergentintegrations.llm.chat import LlmChat, UserMessage  # Temporarily disabled
import openai

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'vibe_language_learning')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class LessonProgress(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    lesson_id: str
    completed: bool = False
    score: Optional[int] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class UserProgress(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    total_xp: int = 0
    streak_days: int = 0
    lessons_completed: int = 0
    vocabulary_learned: int = 0
    level: str = "N5"
    last_practice_date: Optional[str] = None

class VocabularyItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    word: str
    reading: str
    meaning: str
    level: str
    category: str
    example: Optional[str] = None

class GrammarLesson(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    level: str
    explanation: str
    examples: List[str]
    order: int

class ConversationRequest(BaseModel):
    message: str
    session_id: str
    level: str = "N5"
    language: str = "japanese"

class ConversationResponse(BaseModel):
    response: str
    translation: Optional[str] = None
    feedback: Optional[str] = None

class QuizRequest(BaseModel):
    level: str
    type: str  # vocabulary, grammar, reading

class QuizQuestion(BaseModel):
    id: str
    question: str
    options: List[str]
    correct_answer: int
    explanation: str

class QuizResponse(BaseModel):
    questions: List[QuizQuestion]

# Initialize sample data
@api_router.post("/initialize-data")
async def initialize_data(language: str = "japanese"):
    """Initialize sample vocabulary and grammar data"""
    
    # Check if data already exists for this language
    existing_vocab = await db.vocabulary.count_documents({"language": language})
    if existing_vocab > 0:
        return {"message": f"Data already initialized for {language}"}
    
    elif language == "arabic":
        # Arabic vocabulary for A1 level
        vocab_data = [
            {"word": "مرحبا", "reading": "mar-HA-ba", "meaning": "Hello", "level": "A1", "category": "Greetings", "example": "مرحبا، كيف حالك؟", "language": "arabic"},
            {"word": "صباح الخير", "reading": "sa-BAH al-KHAYR", "meaning": "Good morning", "level": "A1", "category": "Greetings", "example": "صباح الخير، أستاذ أحمد.", "language": "arabic"},
            {"word": "مساء الخير", "reading": "ma-SAA al-KHAYR", "meaning": "Good evening", "level": "A1", "category": "Greetings", "example": "مساء الخير، كيف حالك؟", "language": "arabic"},
            {"word": "مع السلامة", "reading": "ma-a as-SA-la-ma", "meaning": "Goodbye", "level": "A1", "category": "Greetings", "example": "مع السلامة، إلى اللقاء!", "language": "arabic"},
            {"word": "شكرا", "reading": "shuk-RAN", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "شكرا على المساعدة.", "language": "arabic"},
            {"word": "من فضلك", "reading": "min FAD-lak", "meaning": "Please", "level": "A1", "category": "Greetings", "example": "قهوة من فضلك.", "language": "arabic"},
            {"word": "معذرة", "reading": "ma-ADH-ra", "meaning": "Excuse me", "level": "A1", "category": "Greetings", "example": "معذرة، أين الحمام؟", "language": "arabic"},
            {"word": "نعم", "reading": "na-AM", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "نعم، هذا صحيح.", "language": "arabic"},
            {"word": "لا", "reading": "la", "meaning": "No", "level": "A1", "category": "Basic", "example": "لا، شكرا.", "language": "arabic"},
            {"word": "أنا", "reading": "a-NA", "meaning": "I", "level": "A1", "category": "Pronouns", "example": "أنا طالب.", "language": "arabic"},
            {"word": "أنت", "reading": "an-TA", "meaning": "You (masculine)", "level": "A1", "category": "Pronouns", "example": "أنت تتكلم العربية؟", "language": "arabic"},
            {"word": "أنت", "reading": "an-TI", "meaning": "You (feminine)", "level": "A1", "category": "Pronouns", "example": "أنت طالبة.", "language": "arabic"},
            {"word": "هو", "reading": "hu-WA", "meaning": "He", "level": "A1", "category": "Pronouns", "example": "هو معلم.", "language": "arabic"},
            {"word": "هي", "reading": "hi-YA", "meaning": "She", "level": "A1", "category": "Pronouns", "example": "هي طبيبة.", "language": "arabic"},
            {"word": "أين", "reading": "ay-NA", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "أين المحطة؟", "language": "arabic"},
            {"word": "ما", "reading": "ma", "meaning": "What", "level": "A1", "category": "Question Words", "example": "ما هذا؟", "language": "arabic"},
            {"word": "كيف", "reading": "kay-FA", "meaning": "How", "level": "A1", "category": "Question Words", "example": "كيف حالك؟", "language": "arabic"},
            {"word": "جيد", "reading": "jay-YID", "meaning": "Good", "level": "A1", "category": "Adjectives", "example": "هذا جيد جداً.", "language": "arabic"},
            {"word": "أكل", "reading": "a-KUL", "meaning": "To eat", "level": "A1", "category": "Verbs", "example": "أنا آكل خبز.", "language": "arabic"},
            {"word": "شرب", "reading": "a-SHRIB", "meaning": "To drink", "level": "A1", "category": "Verbs", "example": "أنا أشرب ماء.", "language": "arabic"},
        ]
        
        # Arabic grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Arabic Alphabet & Script",
                "level": "A1",
                "language": "arabic",
                "explanation": "Arabic is written from right to left using the Arabic script. There are 28 letters in the Arabic alphabet, and most letters have different forms depending on their position in a word.",
                "examples": [
                    "Basic letters: أ (alif), ب (ba), ت (ta), ث (tha)",
                    "Position forms: ب at start (بسم), middle (كتب), end (حب)",
                    "Right-to-left writing: العربية (Arabic)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Basic Sentence Structure",
                "level": "A1",
                "language": "arabic",
                "explanation": "Arabic follows a Verb-Subject-Object (VSO) word order in basic sentences, though Subject-Verb-Object is also common. Arabic sentences can start with verbs or nouns.",
                "examples": [
                    "أنا طالب (a-na ta-lib) - I am a student",
                    "هذا كتاب (ha-dha ki-tab) - This is a book",
                    "كيف حالك؟ (kay-fa ha-lak) - How are you?"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Gender Agreement",
                "level": "A1",
                "language": "arabic",
                "explanation": "Arabic nouns and adjectives have gender (masculine/feminine) and must agree. Feminine nouns usually end in ة (ta marbuta) or have feminine markers.",
                "examples": [
                    "Masculine: طالب (student), كتاب (book)",
                    "Feminine: طالبة (female student), مدرسة (school)",
                    "Adjective agreement: طالب جيد (good student), طالبة جيدة (good female student)"
                ],
                "order": 3
            }
        ]
    elif language == "korean":
        # Korean vocabulary for A1 level
        vocab_data = [
            {"word": "안녕하세요", "reading": "an-nyeong-ha-se-yo", "meaning": "Hello", "level": "A1", "category": "Greetings", "example": "안녕하세요, 어떻게 지내세요?", "language": "korean"},
            {"word": "안녕히 가세요", "reading": "an-nyeong-hi ga-se-yo", "meaning": "Goodbye", "level": "A1", "category": "Greetings", "example": "안녕히 가세요, 또 만나요!", "language": "korean"},
            {"word": "감사합니다", "reading": "gam-sa-ham-ni-da", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "도움을 주셔서 감사합니다.", "language": "korean"},
            {"word": "죄송합니다", "reading": "joe-song-ham-ni-da", "meaning": "Sorry", "level": "A1", "category": "Greetings", "example": "죄송합니다, 늦었습니다.", "language": "korean"},
            {"word": "실례합니다", "reading": "sil-lye-ham-ni-da", "meaning": "Excuse me", "level": "A1", "category": "Greetings", "example": "실례합니다, 화장실이 어디인가요?", "language": "korean"},
            {"word": "네", "reading": "ne", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "네, 맞습니다.", "language": "korean"},
            {"word": "아니요", "reading": "a-ni-yo", "meaning": "No", "level": "A1", "category": "Basic", "example": "아니요, 괜찮습니다.", "language": "korean"},
            {"word": "저", "reading": "jeo", "meaning": "I (humble)", "level": "A1", "category": "Pronouns", "example": "저는 학생입니다.", "language": "korean"},
            {"word": "나", "reading": "na", "meaning": "I (casual)", "level": "A1", "category": "Pronouns", "example": "나는 한국어를 배우고 있어.", "language": "korean"},
            {"word": "당신", "reading": "dang-sin", "meaning": "You", "level": "A1", "category": "Pronouns", "example": "당신은 어디서 오셨나요?", "language": "korean"},
            {"word": "그", "reading": "geu", "meaning": "He/That", "level": "A1", "category": "Pronouns", "example": "그는 선생님입니다.", "language": "korean"},
            {"word": "그녀", "reading": "geu-nyeo", "meaning": "She", "level": "A1", "category": "Pronouns", "example": "그녀는 의사입니다.", "language": "korean"},
            {"word": "어디", "reading": "eo-di", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "어디에 가세요?", "language": "korean"},
            {"word": "무엇", "reading": "mu-eot", "meaning": "What", "level": "A1", "category": "Question Words", "example": "무엇을 하고 계세요?", "language": "korean"},
            {"word": "어떻게", "reading": "eot-teoh-ke", "meaning": "How", "level": "A1", "category": "Question Words", "example": "어떻게 지내세요?", "language": "korean"},
            {"word": "좋은", "reading": "jo-eun", "meaning": "Good", "level": "A1", "category": "Adjectives", "example": "이것은 좋은 책입니다.", "language": "korean"},
            {"word": "먹다", "reading": "meok-da", "meaning": "To eat", "level": "A1", "category": "Verbs", "example": "저는 밥을 먹어요.", "language": "korean"},
            {"word": "마시다", "reading": "ma-si-da", "meaning": "To drink", "level": "A1", "category": "Verbs", "example": "저는 물을 마셔요.", "language": "korean"},
            {"word": "가다", "reading": "ga-da", "meaning": "To go", "level": "A1", "category": "Verbs", "example": "저는 학교에 가요.", "language": "korean"},
            {"word": "오다", "reading": "o-da", "meaning": "To come", "level": "A1", "category": "Verbs", "example": "친구가 집에 와요.", "language": "korean"},
        ]
        
        # Korean grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Korean Alphabet (Hangul)",
                "level": "A1",
                "language": "korean",
                "explanation": "Korean uses Hangul, a phonetic alphabet created in 1443. It consists of 14 consonants and 10 vowels that combine to form syllables. Each syllable is written in a square block.",
                "examples": [
                    "Basic consonants: ㄱ (g), ㄴ (n), ㄷ (d), ㄹ (r/l)",
                    "Basic vowels: ㅏ (a), ㅓ (eo), ㅗ (o), ㅜ (u)",
                    "Syllable blocks: 가 (ga), 나 (na), 다 (da)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Korean Sentence Structure",
                "level": "A1",
                "language": "korean",
                "explanation": "Korean follows a Subject-Object-Verb (SOV) word order. The verb always comes at the end of the sentence, and particles are used to indicate grammatical relationships.",
                "examples": [
                    "저는 학생입니다 (jeo-neun hak-saeng-im-ni-da) - I am a student",
                    "이것은 책입니다 (i-geot-eun chaek-im-ni-da) - This is a book",
                    "어디에 가세요? (eo-di-e ga-se-yo) - Where are you going?"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Korean Honorifics & Politeness",
                "level": "A1",
                "language": "korean",
                "explanation": "Korean has a complex honorific system with different levels of politeness. The most common endings are -습니다/-ㅂ니다 (formal polite) and -아요/-어요 (informal polite).",
                "examples": [
                    "Formal: 안녕하세요 (an-nyeong-ha-se-yo) - Hello",
                    "Informal polite: 안녕하세요 (an-nyeong-ha-se-yo) - Hello",
                    "Casual: 안녕 (an-nyeong) - Hi"
                ],
                "order": 3
            }
        ]
    elif language == "german":
        # German vocabulary for A1 level
        vocab_data = [
            {"word": "Hallo", "reading": "HAH-loh", "meaning": "Hello", "level": "A1", "category": "Greetings", "example": "Hallo, wie geht es dir?", "language": "german"},
            {"word": "Guten Tag", "reading": "GOO-ten tahk", "meaning": "Good day", "level": "A1", "category": "Greetings", "example": "Guten Tag, Herr Schmidt.", "language": "german"},
            {"word": "Auf Wiedersehen", "reading": "owf VEE-der-zay-en", "meaning": "Goodbye", "level": "A1", "category": "Greetings", "example": "Auf Wiedersehen, bis morgen!", "language": "german"},
            {"word": "Danke", "reading": "DAHN-keh", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "Danke für die Hilfe.", "language": "german"},
            {"word": "Bitte", "reading": "BIT-teh", "meaning": "Please / You're welcome", "level": "A1", "category": "Greetings", "example": "Bitte, hier ist Ihr Kaffee.", "language": "german"},
            {"word": "Entschuldigung", "reading": "ent-SHOOL-dee-goong", "meaning": "Excuse me / Sorry", "level": "A1", "category": "Greetings", "example": "Entschuldigung, wo ist die Toilette?", "language": "german"},
            {"word": "Ja", "reading": "yah", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "Ja, das ist richtig.", "language": "german"},
            {"word": "Nein", "reading": "nyne", "meaning": "No", "level": "A1", "category": "Basic", "example": "Nein, danke.", "language": "german"},
            {"word": "Ich", "reading": "ikh", "meaning": "I", "level": "A1", "category": "Pronouns", "example": "Ich bin Student.", "language": "german"},
            {"word": "Du", "reading": "doo", "meaning": "You (informal)", "level": "A1", "category": "Pronouns", "example": "Du sprichst Deutsch?", "language": "german"},
            {"word": "Sie", "reading": "zee", "meaning": "You (formal)", "level": "A1", "category": "Pronouns", "example": "Sie sind sehr höflich.", "language": "german"},
            {"word": "Er", "reading": "ayr", "meaning": "He", "level": "A1", "category": "Pronouns", "example": "Er ist Lehrer.", "language": "german"},
            {"word": "Sie", "reading": "zee", "meaning": "She", "level": "A1", "category": "Pronouns", "example": "Sie ist Ärztin.", "language": "german"},
            {"word": "Wo", "reading": "voh", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "Wo ist der Bahnhof?", "language": "german"},
            {"word": "Was", "reading": "vas", "meaning": "What", "level": "A1", "category": "Question Words", "example": "Was ist das?", "language": "german"},
            {"word": "Wie", "reading": "vee", "meaning": "How", "level": "A1", "category": "Question Words", "example": "Wie geht es Ihnen?", "language": "german"},
            {"word": "Gut", "reading": "goot", "meaning": "Good", "level": "A1", "category": "Adjectives", "example": "Das ist sehr gut.", "language": "german"},
            {"word": "Essen", "reading": "ES-sen", "meaning": "To eat", "level": "A1", "category": "Verbs", "example": "Ich esse Brot.", "language": "german"},
            {"word": "Trinken", "reading": "TRIN-ken", "meaning": "To drink", "level": "A1", "category": "Verbs", "example": "Ich trinke Wasser.", "language": "german"},
            {"word": "Sein", "reading": "zyne", "meaning": "To be", "level": "A1", "category": "Verbs", "example": "Ich bin müde.", "language": "german"},
        ]
        
        # German grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Articles (der, die, das)",
                "level": "A1",
                "language": "german",
                "explanation": "German has three definite articles that must agree with the gender of the noun: 'der' (masculine), 'die' (feminine), and 'das' (neuter).",
                "examples": [
                    "Masculine: der Mann (the man), der Tisch (the table)",
                    "Feminine: die Frau (the woman), die Tür (the door)",
                    "Neuter: das Kind (the child), das Haus (the house)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Sein",
                "level": "A1",
                "language": "german",
                "explanation": "Sein (to be) is an irregular verb and one of the most important verbs in German. It's used to describe identity, profession, and characteristics.",
                "examples": [
                    "Ich bin (I am)",
                    "Du bist (You are)",
                    "Er/Sie ist (He/She is)",
                    "Wir sind (We are)",
                    "Ihr seid (You all are)",
                    "Sie sind (They are)"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Haben",
                "level": "A1",
                "language": "german",
                "explanation": "Haben (to have) is another essential irregular verb. It's used to express possession, age, and many common expressions.",
                "examples": [
                    "Ich habe (I have)",
                    "Du hast (You have)",
                    "Er/Sie hat (He/She has)",
                    "Wir haben (We have)",
                    "Ihr habt (You all have)",
                    "Sie haben (They have)"
                ],
                "order": 3
            }
        ]
    elif language == "chinese":
        # Chinese vocabulary for HSK1 level
        vocab_data = [
            {"word": "你好", "reading": "nǐ hǎo", "meaning": "Hello", "level": "HSK1", "category": "Greetings", "example": "你好，很高兴认识你。", "language": "chinese"},
            {"word": "再见", "reading": "zài jiàn", "meaning": "Goodbye", "level": "HSK1", "category": "Greetings", "example": "再见，明天见。", "language": "chinese"},
            {"word": "谢谢", "reading": "xiè xiè", "meaning": "Thank you", "level": "HSK1", "category": "Greetings", "example": "谢谢你的帮助。", "language": "chinese"},
            {"word": "不客气", "reading": "bù kè qì", "meaning": "You're welcome", "level": "HSK1", "category": "Greetings", "example": "不客气，这是我应该做的。", "language": "chinese"},
            {"word": "对不起", "reading": "duì bù qǐ", "meaning": "Sorry", "level": "HSK1", "category": "Greetings", "example": "对不起，我迟到了。", "language": "chinese"},
            {"word": "请", "reading": "qǐng", "meaning": "Please", "level": "HSK1", "category": "Greetings", "example": "请坐。", "language": "chinese"},
            {"word": "是", "reading": "shì", "meaning": "Yes / To be", "level": "HSK1", "category": "Basic", "example": "我是学生。", "language": "chinese"},
            {"word": "不是", "reading": "bù shì", "meaning": "No / Not", "level": "HSK1", "category": "Basic", "example": "我不是老师。", "language": "chinese"},
            {"word": "我", "reading": "wǒ", "meaning": "I / Me", "level": "HSK1", "category": "Pronouns", "example": "我是中国人。", "language": "chinese"},
            {"word": "你", "reading": "nǐ", "meaning": "You", "level": "HSK1", "category": "Pronouns", "example": "你是哪国人？", "language": "chinese"},
            {"word": "他", "reading": "tā", "meaning": "He", "level": "HSK1", "category": "Pronouns", "example": "他是我的朋友。", "language": "chinese"},
            {"word": "她", "reading": "tā", "meaning": "She", "level": "HSK1", "category": "Pronouns", "example": "她是我的姐姐。", "language": "chinese"},
            {"word": "哪里", "reading": "nǎ lǐ", "meaning": "Where", "level": "HSK1", "category": "Question Words", "example": "厕所在哪里？", "language": "chinese"},
            {"word": "什么", "reading": "shén me", "meaning": "What", "level": "HSK1", "category": "Question Words", "example": "这是什么？", "language": "chinese"},
            {"word": "怎么", "reading": "zěn me", "meaning": "How", "level": "HSK1", "category": "Question Words", "example": "你怎么去学校？", "language": "chinese"},
            {"word": "好", "reading": "hǎo", "meaning": "Good", "level": "HSK1", "category": "Adjectives", "example": "这个很好。", "language": "chinese"},
            {"word": "吃", "reading": "chī", "meaning": "To eat", "level": "HSK1", "category": "Verbs", "example": "我吃米饭。", "language": "chinese"},
            {"word": "喝", "reading": "hē", "meaning": "To drink", "level": "HSK1", "category": "Verbs", "example": "我喝水。", "language": "chinese"},
            {"word": "去", "reading": "qù", "meaning": "To go", "level": "HSK1", "category": "Verbs", "example": "我去学校。", "language": "chinese"},
            {"word": "来", "reading": "lái", "meaning": "To come", "level": "HSK1", "category": "Verbs", "example": "他来北京。", "language": "chinese"},
        ]
        
        # Chinese grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Basic Sentence Structure",
                "level": "HSK1",
                "language": "chinese",
                "explanation": "Chinese follows a Subject-Verb-Object (SVO) word order, similar to English. The basic structure is: Subject + Verb + Object.",
                "examples": [
                    "我吃苹果 (wǒ chī píng guǒ) - I eat apples",
                    "他看书 (tā kàn shū) - He reads books",
                    "你喝水 (nǐ hē shuǐ) - You drink water"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "是 (shì) - To be",
                "level": "HSK1",
                "language": "chinese",
                "explanation": "是 (shì) is used to link the subject with a noun or adjective. It's equivalent to 'am', 'is', or 'are' in English.",
                "examples": [
                    "我是学生 (wǒ shì xué shēng) - I am a student",
                    "他是老师 (tā shì lǎo shī) - He is a teacher",
                    "这是书 (zhè shì shū) - This is a book"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Question Words",
                "level": "HSK1",
                "language": "chinese",
                "explanation": "Chinese uses specific question words to ask questions. The most common ones are 什么 (what), 哪里 (where), and 怎么 (how).",
                "examples": [
                    "这是什么？(zhè shì shén me) - What is this?",
                    "厕所在哪里？(cè suǒ zài nǎ lǐ) - Where is the bathroom?",
                    "你怎么去学校？(nǐ zěn me qù xué xiào) - How do you go to school?"
                ],
                "order": 3
            }
        ]
    elif language == "spanish":
        # Spanish vocabulary for A1 level
        vocab_data = [
            {"word": "Hola", "reading": "OH-lah", "meaning": "Hello", "level": "A1", "category": "Greetings", "example": "Hola, ¿cómo estás?", "language": "spanish"},
            {"word": "Buenos días", "reading": "BWAY-nos DEE-ahs", "meaning": "Good morning", "level": "A1", "category": "Greetings", "example": "Buenos días, señor.", "language": "spanish"},
            {"word": "Buenas tardes", "reading": "BWAY-nas TAR-des", "meaning": "Good afternoon", "level": "A1", "category": "Greetings", "example": "Buenas tardes, ¿cómo está?", "language": "spanish"},
            {"word": "Adiós", "reading": "ah-DYOHS", "meaning": "Goodbye", "level": "A1", "category": "Greetings", "example": "Adiós, hasta luego.", "language": "spanish"},
            {"word": "Gracias", "reading": "GRAH-see-ahs", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "Gracias por la ayuda.", "language": "spanish"},
            {"word": "Por favor", "reading": "por fah-VOR", "meaning": "Please", "level": "A1", "category": "Greetings", "example": "Un café, por favor.", "language": "spanish"},
            {"word": "Disculpe", "reading": "dees-KOOL-pay", "meaning": "Excuse me", "level": "A1", "category": "Greetings", "example": "Disculpe, ¿dónde está el baño?", "language": "spanish"},
            {"word": "Sí", "reading": "see", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "Sí, por supuesto.", "language": "spanish"},
            {"word": "No", "reading": "noh", "meaning": "No", "level": "A1", "category": "Basic", "example": "No, gracias.", "language": "spanish"},
            {"word": "Yo", "reading": "yoh", "meaning": "I", "level": "A1", "category": "Pronouns", "example": "Yo soy estudiante.", "language": "spanish"},
            {"word": "Tú", "reading": "too", "meaning": "You (informal)", "level": "A1", "category": "Pronouns", "example": "¿Tú hablas español?", "language": "spanish"},
            {"word": "Él", "reading": "el", "meaning": "He", "level": "A1", "category": "Pronouns", "example": "Él es profesor.", "language": "spanish"},
            {"word": "Ella", "reading": "AY-yah", "meaning": "She", "level": "A1", "category": "Pronouns", "example": "Ella es doctora.", "language": "spanish"},
            {"word": "Dónde", "reading": "DOHN-day", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "¿Dónde está la estación?", "language": "spanish"},
            {"word": "Qué", "reading": "kay", "meaning": "What", "level": "A1", "category": "Question Words", "example": "¿Qué hora es?", "language": "spanish"},
            {"word": "Cómo", "reading": "KOH-moh", "meaning": "How", "level": "A1", "category": "Question Words", "example": "¿Cómo está usted?", "language": "spanish"},
            {"word": "Bueno", "reading": "BWAY-noh", "meaning": "Good", "level": "A1", "category": "Adjectives", "example": "Es un buen libro.", "language": "spanish"},
            {"word": "Comer", "reading": "koh-MER", "meaning": "To eat", "level": "A1", "category": "Verbs", "example": "Yo como pan.", "language": "spanish"},
            {"word": "Beber", "reading": "bay-BER", "meaning": "To drink", "level": "A1", "category": "Verbs", "example": "Yo bebo agua.", "language": "spanish"},
            {"word": "Ser", "reading": "ser", "meaning": "To be (permanent)", "level": "A1", "category": "Verbs", "example": "Yo soy español.", "language": "spanish"},
            # Advanced Spanish vocabulary for B1-B2 levels
            {"word": "Embarazada", "reading": "em-bah-rah-SAH-dah", "meaning": "Pregnant (FALSE COGNATE!)", "level": "B1", "category": "False Cognates", "example": "Estoy embarazada (I'm pregnant) - NOT embarrassed!", "language": "spanish"},
            {"word": "Avergonzada", "reading": "ah-ver-gon-SAH-dah", "meaning": "Embarrassed", "level": "B1", "category": "False Cognates", "example": "Estoy avergonzada (I'm embarrassed)", "language": "spanish"},
            {"word": "Actual", "reading": "ahk-TWAHL", "meaning": "Current (FALSE COGNATE!)", "level": "B1", "category": "False Cognates", "example": "La situación actual (The current situation)", "language": "spanish"},
            {"word": "Real", "reading": "ray-AHL", "meaning": "Actual/Real", "level": "B1", "category": "False Cognates", "example": "El problema real (The actual problem)", "language": "spanish"},
            {"word": "Sopa", "reading": "SOH-pah", "meaning": "Soup (FALSE COGNATE!)", "level": "B1", "category": "False Cognates", "example": "Me gusta la sopa (I like soup) - NOT soap!", "language": "spanish"},
            {"word": "Jabón", "reading": "hah-BOHN", "meaning": "Soap", "level": "B1", "category": "False Cognates", "example": "Necesito jabón (I need soap)", "language": "spanish"},
            {"word": "Ropa", "reading": "ROH-pah", "meaning": "Clothes (FALSE COGNATE!)", "level": "B1", "category": "False Cognates", "example": "Mi ropa está sucia (My clothes are dirty) - NOT rope!", "language": "spanish"},
            {"word": "Cuerda", "reading": "KWER-dah", "meaning": "Rope", "level": "B1", "category": "False Cognates", "example": "Necesito una cuerda (I need a rope)", "language": "spanish"},
            # Subjunctive triggers
            {"word": "Espero que", "reading": "es-PEH-roh kay", "meaning": "I hope that", "level": "B2", "category": "Subjunctive", "example": "Espero que tengas un buen día (I hope you have a good day)", "language": "spanish"},
            {"word": "Es posible que", "reading": "es poh-SEE-bleh kay", "meaning": "It's possible that", "level": "B2", "category": "Subjunctive", "example": "Es posible que llueva (It's possible that it will rain)", "language": "spanish"},
            {"word": "Para que", "reading": "PAH-rah kay", "meaning": "So that", "level": "B2", "category": "Subjunctive", "example": "Estudio para que pueda hablar español (I study so that I can speak Spanish)", "language": "spanish"},
            {"word": "A menos que", "reading": "ah MEH-nos kay", "meaning": "Unless", "level": "B2", "category": "Subjunctive", "example": "No iré a menos que me invites (I won't go unless you invite me)", "language": "spanish"},
            # Por vs Para examples
            {"word": "Por favor", "reading": "por fah-VOR", "meaning": "Please (POR for politeness)", "level": "B1", "category": "Por vs Para", "example": "Por favor, ayúdame (Please, help me)", "language": "spanish"},
            {"word": "Gracias por", "reading": "GRAH-see-ahs por", "meaning": "Thanks for (POR for cause)", "level": "B1", "category": "Por vs Para", "example": "Gracias por tu ayuda (Thanks for your help)", "language": "spanish"},
            {"word": "Para mí", "reading": "PAH-rah mee", "meaning": "For me (PARA for recipient)", "level": "B1", "category": "Por vs Para", "example": "Este regalo es para mí (This gift is for me)", "language": "spanish"},
            {"word": "Por mi", "reading": "por mee", "meaning": "For my sake (POR for cause)", "level": "B1", "category": "Por vs Para", "example": "Lo hice por mi familia (I did it for my family's sake)", "language": "spanish"},
            # Regional differences
            {"word": "Coche", "reading": "KOH-cheh", "meaning": "Car (Spain)", "level": "B1", "category": "Regional", "example": "Mi coche es rojo (My car is red) - Spain", "language": "spanish"},
            {"word": "Auto", "reading": "OW-toh", "meaning": "Car (Latin America)", "level": "B1", "category": "Regional", "example": "Mi auto es rojo (My car is red) - Latin America", "language": "spanish"},
            {"word": "Zumo", "reading": "THOO-moh", "meaning": "Juice (Spain)", "level": "B1", "category": "Regional", "example": "Quiero zumo de naranja (I want orange juice) - Spain", "language": "spanish"},
            {"word": "Jugo", "reading": "HOO-goh", "meaning": "Juice (Latin America)", "level": "B1", "category": "Regional", "example": "Quiero jugo de naranja (I want orange juice) - Latin America", "language": "spanish"},
            {"word": "Ordenador", "reading": "or-deh-nah-DOR", "meaning": "Computer (Spain)", "level": "B1", "category": "Regional", "example": "Necesito un ordenador (I need a computer) - Spain", "language": "spanish"},
            {"word": "Computadora", "reading": "kom-poo-tah-DOH-rah", "meaning": "Computer (Latin America)", "level": "B1", "category": "Regional", "example": "Necesito una computadora (I need a computer) - Latin America", "language": "spanish"},
        ]
        
        # Spanish grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Articles (el, la, los, las)",
                "level": "A1",
                "language": "spanish",
                "explanation": "Spanish has definite articles that must agree with the gender and number of the noun. Use 'el' for masculine singular, 'la' for feminine singular, 'los' for masculine plural, and 'las' for feminine plural.",
                "examples": [
                    "Masculine: el libro (the book), el café (the coffee)",
                    "Feminine: la mesa (the table), la casa (the house)",
                    "Plural masculine: los libros (the books), los cafés (the coffees)",
                    "Plural feminine: las mesas (the tables), las casas (the houses)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Ser",
                "level": "A1",
                "language": "spanish",
                "explanation": "Ser (to be) is used for permanent characteristics like identity, profession, nationality, and time. It's one of the most important verbs in Spanish.",
                "examples": [
                    "Yo soy (I am)",
                    "Tú eres (You are)",
                    "Él/Ella es (He/She is)",
                    "Nosotros somos (We are)",
                    "Vosotros sois (You all are)",
                    "Ellos/Ellas son (They are)"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Estar",
                "level": "A1",
                "language": "spanish",
                "explanation": "Estar (to be) is used for temporary states, locations, and conditions. It's essential for describing how someone feels or where something is located.",
                "examples": [
                    "Yo estoy (I am)",
                    "Tú estás (You are)",
                    "Él/Ella está (He/She is)",
                    "Nosotros estamos (We are)",
                    "Vosotros estáis (You all are)",
                    "Ellos/Ellas están (They are)"
                ],
                "order": 3
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Subjunctive Mood - The Ultimate Challenge",
                "level": "B2",
                "language": "spanish",
                "explanation": "The subjunctive mood expresses doubt, emotion, influence, and uncertainty. It's the most challenging aspect of Spanish grammar, but essential for sounding natural. Remember: it's about uncertainty, not just memorizing conjugations!",
                "examples": [
                    "Espero que tengas un buen día (I hope you have a good day)",
                    "Es posible que llueva (It's possible that it will rain)",
                    "Estudio para que pueda hablar español (I study so that I can speak Spanish)",
                    "No iré a menos que me invites (I won't go unless you invite me)",
                    "Dudo que sea verdad (I doubt it's true)",
                    "Me alegra que estés aquí (I'm glad you're here)"
                ],
                "commonMistakes": [
                    "Using indicative after 'es posible que' (should be subjunctive)",
                    "Forgetting subjunctive after 'para que' and 'a menos que'",
                    "Mixing up 'ser' and 'estar' in subjunctive forms",
                    "Using present subjunctive for past events (need imperfect subjunctive)"
                ],
                "personalAnecdote": "The subjunctive took me 8 months to truly understand! I used to avoid it completely, but my Spanish teacher told me 'You'll never sound natural without it.' The key is understanding that it's about uncertainty, emotion, and influence - not just memorizing conjugations.",
                "order": 4
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Por vs Para - The Most Confusing Prepositions",
                "level": "B1",
                "language": "spanish",
                "explanation": "POR = through/cause/duration/exchange. PARA = toward/purpose/deadline/recipient. The trick: POR = through/cause, PARA = toward/purpose. 'Voy por el parque' (I go through the park) vs 'Voy para el parque' (I go toward the park).",
                "examples": [
                    "POR: Gracias por tu ayuda (Thanks for your help - cause)",
                    "POR: Trabajo por 8 horas (I work for 8 hours - duration)",
                    "POR: Voy por el parque (I go through the park - through)",
                    "PARA: Este regalo es para ti (This gift is for you - recipient)",
                    "PARA: Estudio para aprender (I study to learn - purpose)",
                    "PARA: Necesito esto para mañana (I need this for tomorrow - deadline)"
                ],
                "commonMistakes": [
                    "Saying 'para mi' instead of 'por mi' (for my sake)",
                    "Using 'para' with time expressions (should be 'por' for duration)",
                    "Confusing 'por favor' with 'para favor' (never say this!)",
                    "Using 'para' with 'gracias' (should be 'gracias por')"
                ],
                "personalAnecdote": "I used to say 'para mi' for everything until a Colombian friend laughed and said 'That sounds like you're always talking about yourself!' The trick: POR = through/cause, PARA = toward/purpose.",
                "order": 5
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Preterite vs Imperfect - The 6-Month Challenge",
                "level": "B1",
                "language": "spanish",
                "explanation": "Preterite = completed actions (photo). Imperfect = ongoing/descriptive actions (video). This took me 6 months to master! Think of it like this: preterite is a photo, imperfect is a video.",
                "examples": [
                    "PRETERITE: Ayer comí pizza (Yesterday I ate pizza - completed action)",
                    "IMPERFECT: Cuando era niño, comía pizza (When I was a child, I used to eat pizza - ongoing state)",
                    "PRETERITE: Fui al cine (I went to the cinema - completed action)",
                    "IMPERFECT: Era estudiante (I was a student - ongoing state)",
                    "PRETERITE: Llovió ayer (It rained yesterday - completed event)",
                    "IMPERFECT: Llovía cuando salí (It was raining when I left - ongoing condition)"
                ],
                "commonMistakes": [
                    "Using preterite for 'era' (was) in descriptions",
                    "Mixing up 'fue' vs 'era' in past narratives",
                    "Using imperfect for completed actions",
                    "Forgetting that 'había' (there was) is imperfect"
                ],
                "personalAnecdote": "This took me 6 months to master! I kept saying 'Yo fui estudiante' (I was a student) instead of 'Yo era estudiante' (I used to be a student). My teacher finally said 'Think of it like this: preterite is a photo, imperfect is a video.' That changed everything!",
                "order": 6
            },
            {
                "id": str(uuid.uuid4()),
                "title": "False Cognates - The Deceptive Friends",
                "level": "A2",
                "language": "spanish",
                "explanation": "False cognates are words that look similar to English but mean completely different things. They're the source of many embarrassing mistakes! Always double-check words that look too similar to English.",
                "examples": [
                    "Embarazada = Pregnant (NOT embarrassed!)",
                    "Avergonzada = Embarrassed (NOT pregnant!)",
                    "Actual = Current (NOT actual!)",
                    "Real = Actual/Real (NOT current!)",
                    "Sopa = Soup (NOT soap!)",
                    "Jabón = Soap (NOT soup!)",
                    "Ropa = Clothes (NOT rope!)",
                    "Cuerda = Rope (NOT clothes!)"
                ],
                "commonMistakes": [
                    "Saying 'embarazada' for embarrassed (should be 'avergonzada')",
                    "Using 'actual' for actual (should be 'real' or 'verdadero')",
                    "Saying 'sopa' for soap (should be 'jabón')",
                    "Using 'ropa' for rope (should be 'cuerda')"
                ],
                "personalAnecdote": "I once told my host family 'Estoy embarazada' thinking it meant 'I'm embarrassed' - they looked shocked! Turns out it means 'I'm pregnant'! Now I always double-check words that look too similar to English.",
                "order": 7
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Regional Differences - Spain vs Latin America",
                "level": "B2",
                "language": "spanish",
                "explanation": "Spanish is spoken by 500+ million people across 20+ countries. Each region has unique expressions, vocabulary, and even grammar rules. Embrace the diversity - it's what makes Spanish so rich!",
                "examples": [
                    "SPAIN: Coche (car) vs LATIN AMERICA: Auto (car)",
                    "SPAIN: Zumo (juice) vs LATIN AMERICA: Jugo (juice)",
                    "SPAIN: Ordenador (computer) vs LATIN AMERICA: Computadora (computer)",
                    "SPAIN: Vosotros (you all) vs LATIN AMERICA: Ustedes (you all)",
                    "ARGENTINA/URUGUAY: Vos (you) vs REST: Tú (you)",
                    "SPAIN: Coger (to take) vs LATIN AMERICA: Tomar/Agarrar (to take)"
                ],
                "commonMistakes": [
                    "Using 'vosotros' in Latin America (they use 'ustedes')",
                    "Saying 'coger' in Latin America (use 'tomar' or 'agarrar')",
                    "Using 'ordenador' in Latin America (they say 'computadora')",
                    "Mixing up 'tú' and 'vos' in Argentina/Uruguay"
                ],
                "personalAnecdote": "When I first visited Mexico, I asked for 'zumo' (juice) and got confused looks. They said 'jugo'! Then in Argentina, I said 'coche' (car) and they said 'auto'! Each country has its own beautiful way of speaking Spanish.",
                "order": 8
            }
        ]
    elif language == "french":
        # French vocabulary for A1 level
        vocab_data = [
            {"word": "Bonjour", "reading": "bon-ZHOOR", "meaning": "Hello / Good day", "level": "A1", "category": "Greetings", "example": "Bonjour, comment allez-vous?", "language": "french"},
            {"word": "Bonsoir", "reading": "bon-SWAHR", "meaning": "Good evening", "level": "A1", "category": "Greetings", "example": "Bonsoir, monsieur.", "language": "french"},
            {"word": "Au revoir", "reading": "oh ruh-VWAHR", "meaning": "Goodbye", "level": "A1", "category": "Greetings", "example": "Au revoir, à bientôt!", "language": "french"},
            {"word": "Merci", "reading": "mer-SEE", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "Merci beaucoup!", "language": "french"},
            {"word": "S'il vous plaît", "reading": "seel voo PLAY", "meaning": "Please", "level": "A1", "category": "Greetings", "example": "Un café, s'il vous plaît.", "language": "french"},
            {"word": "Excusez-moi", "reading": "eks-kuu-zay MWAH", "meaning": "Excuse me", "level": "A1", "category": "Greetings", "example": "Excusez-moi, où est la gare?", "language": "french"},
            {"word": "Oui", "reading": "wee", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "Oui, c'est vrai.", "language": "french"},
            {"word": "Non", "reading": "nohn", "meaning": "No", "level": "A1", "category": "Basic", "example": "Non, merci.", "language": "french"},
            {"word": "Je", "reading": "zhuh", "meaning": "I", "level": "A1", "category": "Pronouns", "example": "Je suis français.", "language": "french"},
            {"word": "Vous", "reading": "voo", "meaning": "You (formal)", "level": "A1", "category": "Pronouns", "example": "Vous parlez français?", "language": "french"},
            {"word": "Il", "reading": "eel", "meaning": "He / It", "level": "A1", "category": "Pronouns", "example": "Il est professeur.", "language": "french"},
            {"word": "Elle", "reading": "el", "meaning": "She / It", "level": "A1", "category": "Pronouns", "example": "Elle est étudiante.", "language": "french"},
            {"word": "Où", "reading": "oo", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "Où est la bibliothèque?", "language": "french"},
            {"word": "Quoi", "reading": "kwah", "meaning": "What", "level": "A1", "category": "Question Words", "example": "Qu'est-ce que c'est?", "language": "french"},
            {"word": "Comment", "reading": "koh-MAHN", "meaning": "How", "level": "A1", "category": "Question Words", "example": "Comment allez-vous?", "language": "french"},
            {"word": "Bon", "reading": "bohn", "meaning": "Good", "level": "A1", "category": "Adjectives", "example": "C'est un bon livre.", "language": "french"},
            {"word": "Manger", "reading": "mahn-ZHAY", "meaning": "To eat", "level": "A1", "category": "Verbs", "example": "Je mange du pain.", "language": "french"},
            {"word": "Boire", "reading": "BWAHR", "meaning": "To drink", "level": "A1", "category": "Verbs", "example": "Je bois de l'eau.", "language": "french"},
            {"word": "Aller", "reading": "ah-LAY", "meaning": "To go", "level": "A1", "category": "Verbs", "example": "Je vais au cinéma.", "language": "french"},
            {"word": "Être", "reading": "ETR", "meaning": "To be", "level": "A1", "category": "Verbs", "example": "Je suis étudiant.", "language": "french"},
        ]
        
        # French grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Articles (le, la, les)",
                "level": "A1",
                "language": "french",
                "explanation": "French has definite articles that must agree with the gender and number of the noun. Use 'le' for masculine singular, 'la' for feminine singular, and 'les' for plural.",
                "examples": [
                    "Masculine: le livre (the book), le café (the coffee)",
                    "Feminine: la table (the table), la maison (the house)",
                    "Plural: les livres (the books), les tables (the tables)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Être",
                "level": "A1",
                "language": "french",
                "explanation": "Être (to be) is an irregular verb and one of the most important verbs in French. It's used to describe identity, profession, and characteristics.",
                "examples": [
                    "Je suis (I am)",
                    "Tu es (You are)",
                    "Il/Elle est (He/She is)",
                    "Nous sommes (We are)",
                    "Vous êtes (You are)",
                    "Ils/Elles sont (They are)"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense - Avoir",
                "level": "A1",
                "language": "french",
                "explanation": "Avoir (to have) is another essential irregular verb. It's used to express possession, age, and many common expressions.",
                "examples": [
                    "J'ai (I have)",
                    "Tu as (You have)",
                    "Il/Elle a (He/She has)",
                    "Nous avons (We have)",
                    "Vous avez (You have)",
                    "Ils/Elles ont (They have)"
                ],
                "order": 3
            }
        ]
    elif language == "russian":
        # Russian vocabulary for A1 level
        vocab_data = [
            {"word": "Привет", "reading": "privet", "meaning": "Hello (informal)", "level": "A1", "category": "Greetings", "example": "Привет! Как дела?", "language": "russian"},
            {"word": "Здравствуйте", "reading": "zdravstvuyte", "meaning": "Hello (formal)", "level": "A1", "category": "Greetings", "example": "Здравствуйте, меня зовут Иван.", "language": "russian"},
            {"word": "Спасибо", "reading": "spasibo", "meaning": "Thank you", "level": "A1", "category": "Greetings", "example": "Спасибо большое!", "language": "russian"},
            {"word": "Пожалуйста", "reading": "pozhaluysta", "meaning": "Please / You're welcome", "level": "A1", "category": "Greetings", "example": "Пожалуйста, помогите мне.", "language": "russian"},
            {"word": "Да", "reading": "da", "meaning": "Yes", "level": "A1", "category": "Basic", "example": "Да, конечно!", "language": "russian"},
            {"word": "Нет", "reading": "nyet", "meaning": "No", "level": "A1", "category": "Basic", "example": "Нет, извините.", "language": "russian"},
            {"word": "Извините", "reading": "izvinite", "meaning": "Excuse me / Sorry", "level": "A1", "category": "Greetings", "example": "Извините, где туалет?", "language": "russian"},
            {"word": "Я", "reading": "ya", "meaning": "I", "level": "A1", "category": "Pronouns", "example": "Я студент.", "language": "russian"},
            {"word": "Ты", "reading": "ty", "meaning": "You (informal)", "level": "A1", "category": "Pronouns", "example": "Ты русский?", "language": "russian"},
            {"word": "Вы", "reading": "vy", "meaning": "You (formal/plural)", "level": "A1", "category": "Pronouns", "example": "Вы говорите по-английски?", "language": "russian"},
            {"word": "Это", "reading": "eto", "meaning": "This / It", "level": "A1", "category": "Pronouns", "example": "Это книга.", "language": "russian"},
            {"word": "Где", "reading": "gde", "meaning": "Where", "level": "A1", "category": "Question Words", "example": "Где метро?", "language": "russian"},
            {"word": "Что", "reading": "chto", "meaning": "What", "level": "A1", "category": "Question Words", "example": "Что это?", "language": "russian"},
            {"word": "Как", "reading": "kak", "meaning": "How", "level": "A1", "category": "Question Words", "example": "Как дела?", "language": "russian"},
            {"word": "Хорошо", "reading": "khorosho", "meaning": "Good / Well", "level": "A1", "category": "Basic", "example": "Всё хорошо!", "language": "russian"},
        ]
        
        # Russian grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "Gender of Nouns",
                "level": "A1",
                "language": "russian",
                "explanation": "Russian nouns have three genders: masculine, feminine, and neuter. The gender affects adjective endings and verb forms.",
                "examples": [
                    "Masculine: студент (student), дом (house) - usually end in consonant",
                    "Feminine: студентка (female student), книга (book) - usually end in -а or -я",
                    "Neuter: окно (window), море (sea) - usually end in -о or -е"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Present Tense",
                "level": "A1",
                "language": "russian",
                "explanation": "Russian verbs conjugate based on person and number. There are two conjugation types.",
                "examples": [
                    "Я работаю (I work)",
                    "Ты работаешь (You work)",
                    "Он/Она работает (He/She works)",
                    "Мы работаем (We work)"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Nominative Case",
                "level": "A1",
                "language": "russian",
                "explanation": "The nominative case is used for the subject of a sentence - who or what is doing the action.",
                "examples": [
                    "Студент читает книгу. (The student reads a book.)",
                    "Москва - большой город. (Moscow is a big city.)",
                    "Это мой друг. (This is my friend.)"
                ],
                "order": 3
            }
        ]
    else:
        # Japanese vocabulary for N5 level
        vocab_data = [
            {"word": "こんにちは", "reading": "konnichiwa", "meaning": "Hello", "level": "N5", "category": "Greetings", "example": "こんにちは、元気ですか？", "language": "japanese"},
            {"word": "ありがとう", "reading": "arigatou", "meaning": "Thank you", "level": "N5", "category": "Greetings", "example": "ありがとうございます。", "language": "japanese"},
            {"word": "はい", "reading": "hai", "meaning": "Yes", "level": "N5", "category": "Basic", "example": "はい、そうです。", "language": "japanese"},
            {"word": "いいえ", "reading": "iie", "meaning": "No", "level": "N5", "category": "Basic", "example": "いいえ、違います。", "language": "japanese"},
            {"word": "おはよう", "reading": "ohayou", "meaning": "Good morning", "level": "N5", "category": "Greetings", "example": "おはようございます。", "language": "japanese"},
            {"word": "さようなら", "reading": "sayounara", "meaning": "Goodbye", "level": "N5", "category": "Greetings", "example": "さようなら、また明日。", "language": "japanese"},
            {"word": "すみません", "reading": "sumimasen", "meaning": "Excuse me / Sorry", "level": "N5", "category": "Greetings", "example": "すみません、駅はどこですか？", "language": "japanese"},
            {"word": "わたし", "reading": "watashi", "meaning": "I / Me", "level": "N5", "category": "Pronouns", "example": "わたしは学生です。", "language": "japanese"},
            {"word": "あなた", "reading": "anata", "meaning": "You", "level": "N5", "category": "Pronouns", "example": "あなたの名前は？", "language": "japanese"},
            {"word": "これ", "reading": "kore", "meaning": "This", "level": "N5", "category": "Pronouns", "example": "これは本です。", "language": "japanese"},
            {"word": "それ", "reading": "sore", "meaning": "That", "level": "N5", "category": "Pronouns", "example": "それは何ですか？", "language": "japanese"},
            {"word": "どこ", "reading": "doko", "meaning": "Where", "level": "N5", "category": "Question Words", "example": "トイレはどこですか？", "language": "japanese"},
            {"word": "なに", "reading": "nani", "meaning": "What", "level": "N5", "category": "Question Words", "example": "これは何ですか？", "language": "japanese"},
            {"word": "たべる", "reading": "taberu", "meaning": "To eat", "level": "N5", "category": "Verbs", "example": "朝ごはんを食べます。", "language": "japanese"},
            {"word": "のむ", "reading": "nomu", "meaning": "To drink", "level": "N5", "category": "Verbs", "example": "水を飲みます。", "language": "japanese"},
        ]
        
        # Japanese grammar lessons
        grammar_data = [
            {
                "id": str(uuid.uuid4()),
                "title": "です (desu) - To be",
                "level": "N5",
                "language": "japanese",
                "explanation": "です (desu) is the polite form of 'to be' in Japanese. It's used to state that something is something else.",
                "examples": [
                    "わたしは学生です。(I am a student.)",
                    "これは本です。(This is a book.)",
                    "今日は月曜日です。(Today is Monday.)",
                    "彼は先生ですか？(Is he a teacher?)"
                ],
                "order": 1
            },
            {
                "id": str(uuid.uuid4()),
                "title": "は (wa) - Topic Marker",
                "level": "N5",
                "language": "japanese",
                "explanation": "は (wa) marks the topic of a sentence. It tells us what we're talking about.",
                "examples": [
                    "私は田中です。(As for me, I'm Tanaka.)",
                    "日本は国です。(Japan is a country.)",
                    "これは机です。(This is a desk.)"
                ],
                "order": 2
            },
            {
                "id": str(uuid.uuid4()),
                "title": "を (wo/o) - Object Marker",
                "level": "N5",
                "language": "japanese",
                "explanation": "を (wo) marks the direct object of an action verb. It shows what is being acted upon.",
                "examples": [
                    "りんごを食べます。(I eat an apple.)",
                    "本を読みます。(I read a book.)",
                    "水を飲みます。(I drink water.)"
                ],
                "order": 3
            }
        ]
    
    # Add IDs to vocab
    for item in vocab_data:
        item['id'] = str(uuid.uuid4())
    
    await db.vocabulary.insert_many(vocab_data)
    
    await db.grammar.insert_many(grammar_data)
    
    # Initialize user progress
    progress = {
        "id": "default_user",
        "total_xp": 0,
        "streak_days": 0,
        "lessons_completed": 0,
        "vocabulary_learned": 0,
        "level": "N5",
        "last_practice_date": None
    }
    await db.progress.insert_one(progress)
    
    return {"message": "Data initialized successfully"}

@api_router.get("/vocabulary/{level}", response_model=List[VocabularyItem])
async def get_vocabulary(level: str, language: str = "japanese"):
    """Get vocabulary by level and language"""
    vocab = await db.vocabulary.find({"level": level, "language": language}, {"_id": 0}).to_list(1000)
    return vocab

@api_router.get("/grammar/{level}", response_model=List[GrammarLesson])
async def get_grammar(level: str, language: str = "japanese"):
    """Get grammar lessons by level and language"""
    grammar = await db.grammar.find({"level": level, "language": language}, {"_id": 0}).sort("order", 1).to_list(1000)
    return grammar

@api_router.get("/progress")
async def get_progress():
    """Get user progress"""
    progress = await db.progress.find_one({"id": "default_user"}, {"_id": 0})
    if not progress:
        # Create default progress
        progress = {
            "id": "default_user",
            "total_xp": 0,
            "streak_days": 0,
            "lessons_completed": 0,
            "vocabulary_learned": 0,
            "level": "N5",
            "last_practice_date": None
        }
        await db.progress.insert_one(progress)
    return progress

@api_router.post("/progress/update")
async def update_progress(xp_gain: int = 10):
    """Update user progress"""
    result = await db.progress.find_one_and_update(
        {"id": "default_user"},
        {
            "$inc": {"total_xp": xp_gain, "lessons_completed": 1},
            "$set": {"last_practice_date": datetime.now(timezone.utc).isoformat()}
        },
        return_document=True
    )
    if result:
        result.pop('_id', None)
    return result

@api_router.post("/conversation", response_model=ConversationResponse)
async def practice_conversation(request: ConversationRequest):
    """Practice conversation with AI tutor"""
    try:
        # Initialize LLM chat with language-specific tutor
        from language_utils import get_language_name
        
        language_configs = {
            "ja": {
                "tutor": "Japanese language tutor",
                "target_language": get_language_name("ja"),
                "levels": "N5/N4 levels"
            },
            "ru": {
                "tutor": "Russian language tutor", 
                "target_language": get_language_name("ru"),
                "levels": "A1/A2 levels"
            },
            "fr": {
                "tutor": "French language tutor",
                "target_language": get_language_name("fr"), 
                "levels": "A1/A2 levels"
            },
            "es": {
                "tutor": "Empathetic Spanish tutor who struggled with the same challenges",
                "target_language": get_language_name("es"), 
                "levels": "A1 to C2 levels"
            },
            "zh": {
                "tutor": "Chinese language tutor",
                "target_language": get_language_name("zh"), 
                "levels": "HSK1/HSK2 levels"
            },
            "de": {
                "tutor": "German language tutor",
                "target_language": get_language_name("de"), 
                "levels": "A1/A2 levels"
            },
            "ar": {
                "tutor": "Arabic language tutor",
                "target_language": get_language_name("ar"), 
                "levels": "A1/A2 levels"
            },
            "ko": {
                "tutor": "Korean language tutor",
                "target_language": get_language_name("ko"), 
                "levels": "A1/A2 levels"
            }
        }
        
        config = language_configs.get(request.language, language_configs["ja"])
        
        # Initialize OpenAI client
        client = openai.OpenAI(api_key=os.environ.get('OPENAI_API_KEY', os.environ.get('EMERGENT_LLM_KEY')))
        
        # Create conversation messages
        messages = [
            {
                "role": "system",
                "content": f"""You are a friendly {config['tutor']}. The student is at {request.level} level.
                
Your role:
1. Respond in {config['target_language']} appropriate for their level
2. Provide English translation in parentheses
3. Give gentle corrections and helpful feedback
4. Keep responses encouraging and educational
5. Use simple grammar and vocabulary for {config['levels']}

SPECIAL INSTRUCTIONS FOR SPANISH:
- Focus on: Subjunctive mood, Por vs Para, Preterite vs Imperfect, False cognates, Regional differences
- When correcting mistakes, explain like this: "That's technically correct but sounds textbook. Natives would say it THIS way instead..."
- Share personal struggles: "I struggled with this exact same thing for months!"
- Teach with empathy and real examples
- Address common confusion points with patience
- Explain regional differences (Spain vs Latin America)

Format your response as:
{config['target_language']} text
(English translation)

Then add feedback if needed."""
            },
            {
                "role": "user",
                "content": request.message
            }
        ]
        
        # Make API call
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            max_tokens=500
        )
        
        response_text = response.choices[0].message.content
        
        # Parse response
        lines = response_text.strip().split('\n')
        target_language_text = ""
        translation = ""
        feedback = ""
        
        in_translation = False
        for line in lines:
            if line.strip().startswith('(') and line.strip().endswith(')'):
                translation = line.strip()[1:-1]
                in_translation = True
            elif not in_translation and not feedback:
                target_language_text += line + "\n"
            elif in_translation:
                feedback += line + "\n"
        
        return ConversationResponse(
            response=target_language_text.strip(),
            translation=translation or None,
            feedback=feedback.strip() or None
        )
    except Exception as e:
        logging.error(f"Conversation error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/quiz", response_model=QuizResponse)
async def generate_quiz(request: QuizRequest):
    """Generate quiz questions"""
    questions = []
    
    if request.type == "vocabulary":
        # Get random vocabulary
        vocab_items = await db.vocabulary.find({"level": request.level}, {"_id": 0}).to_list(100)
        
        # Create questions
        import random
        selected = random.sample(vocab_items, min(5, len(vocab_items)))
        
        for item in selected:
            # Create wrong answers
            all_meanings = [v['meaning'] for v in vocab_items if v['id'] != item['id']]
            wrong_answers = random.sample(all_meanings, min(3, len(all_meanings)))
            
            options = wrong_answers + [item['meaning']]
            random.shuffle(options)
            
            questions.append(QuizQuestion(
                id=str(uuid.uuid4()),
                question=f"What does '{item['word']}' ({item['reading']}) mean?",
                options=options,
                correct_answer=options.index(item['meaning']),
                explanation=f"'{item['word']}' means '{item['meaning']}'. Example: {item.get('example', '')}"
            ))
    
    return QuizResponse(questions=questions)

@api_router.get("/lessons")
async def get_lessons(language: str = "japanese"):
    """Get structured lesson path based on language"""
    
    if language == "korean":
        lessons = [
            {
                "id": "korean-hangul",
                "title": "Korean Alphabet (Hangul)",
                "description": "Master the Korean writing system",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Consonants", "Vowels", "Syllable blocks", "Basic reading"]
            },
            {
                "id": "basic-grammar-korean",
                "title": "Basic Grammar",
                "description": "Essential Korean grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Sentence structure", "Particles", "Verb conjugation", "Honorifics"]
            },
            {
                "id": "daily-conversation-korean",
                "title": "Daily Conversation",
                "description": "Practical Korean phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-korean",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in Korean",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Korean numbers", "Sino-Korean numbers", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-korean",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Age and hierarchy", "Relationship terms", "Polite forms"]
            },
            {
                "id": "colors-shapes-korean",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Descriptive adjectives", "Visual expressions"]
            },
            {
                "id": "weather-seasons-korean",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature expressions", "Weather activities"]
            },
            {
                "id": "food-drinks-korean",
                "title": "Food & Drinks",
                "description": "Essential Korean food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Korean dishes", "Beverages", "Cooking verbs", "Dining etiquette"]
            },
            {
                "id": "travel-directions-korean",
                "title": "Travel & Directions",
                "description": "Navigate Korea with confidence",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "korean-politeness-levels",
                "title": "Politeness Levels & Honorifics",
                "description": "Master Korean's complex honorific system",
                "level": "A2",
                "duration": "4 weeks",
                "topics": ["Formal vs informal speech", "Age-based honorifics", "Job titles and respect", "Cultural context"]
            },
            {
                "id": "korean-verb-conjugation",
                "title": "Verb Conjugation Mastery",
                "description": "Learn Korean verb patterns and conjugations",
                "level": "A2",
                "duration": "5 weeks",
                "topics": ["Present tense", "Past tense", "Future tense", "Irregular verbs"]
            },
            {
                "id": "korean-particles-advanced",
                "title": "Advanced Particles",
                "description": "Master Korean particles for natural speech",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["은/는 vs 이/가", "을/를 usage", "에 vs 에서", "로/으로 direction"]
            },
            {
                "id": "korean-adjectives",
                "title": "Adjectives & Descriptions",
                "description": "Learn Korean adjectives and descriptive language",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Basic adjectives", "Color descriptions", "Size and shape", "Personality traits"]
            },
            {
                "id": "korean-shopping-bargaining",
                "title": "Shopping & Bargaining",
                "description": "Master shopping vocabulary and cultural etiquette",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Market vocabulary", "Price negotiations", "Cultural shopping norms", "Payment methods"]
            },
            {
                "id": "korean-emotions-feelings",
                "title": "Emotions & Feelings",
                "description": "Express emotions and feelings in Korean",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Physical feelings", "Mental states", "Expressing preferences"]
            },
            {
                "id": "korean-daily-routines",
                "title": "Daily Routines & Habits",
                "description": "Describe daily activities and routines",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Morning routines", "Work activities", "Evening habits", "Weekend activities"]
            },
            {
                "id": "korean-health-body",
                "title": "Health & Body Parts",
                "description": "Learn health vocabulary and body parts",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical vocabulary", "Doctor visits"]
            },
            {
                "id": "korean-education-school",
                "title": "Education & School Life",
                "description": "Navigate Korean education system vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "Academic vocabulary", "Student life", "Korean education culture"]
            },
            {
                "id": "korean-technology-modern",
                "title": "Technology & Modern Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Digital devices", "Internet vocabulary", "Social media", "Modern Korean tech culture"]
            }
        ]
    elif language == "german":
        lessons = [
            {
                "id": "german-alphabet",
                "title": "German Alphabet & Pronunciation",
                "description": "Master German pronunciation and umlauts",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Alphabet sounds", "Umlauts (ä, ö, ü)", "ß (eszett)", "Consonant combinations"]
            },
            {
                "id": "basic-grammar-german",
                "title": "Basic Grammar",
                "description": "Essential German grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Articles (der, die, das)", "Sein & Haben", "Gender agreement", "Basic conjugation"]
            },
            {
                "id": "daily-conversation-german",
                "title": "Daily Conversation",
                "description": "Practical German phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-german",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in German",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-german",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Possessive pronouns", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-german",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Adjective endings", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-german",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-german",
                "title": "Food & Drinks",
                "description": "Essential German food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["German cuisine", "Beverages", "Cooking verbs", "Dining culture"]
            },
            {
                "id": "travel-directions-german",
                "title": "Travel & Directions",
                "description": "Navigate German-speaking countries",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "german-cases-mastery",
                "title": "German Cases Mastery",
                "description": "Master the four German cases",
                "level": "A2",
                "duration": "6 weeks",
                "topics": ["Nominative case", "Accusative case", "Dative case", "Genitive case"]
            },
            {
                "id": "german-verb-conjugation",
                "title": "Verb Conjugation Patterns",
                "description": "Learn German verb conjugation rules",
                "level": "A2",
                "duration": "4 weeks",
                "topics": ["Regular verbs", "Irregular verbs", "Modal verbs", "Separable verbs"]
            },
            {
                "id": "german-adjectives-declension",
                "title": "Adjective Declension",
                "description": "Master German adjective endings",
                "level": "A2",
                "duration": "5 weeks",
                "topics": ["Strong declension", "Weak declension", "Mixed declension", "Comparative forms"]
            },
            {
                "id": "german-prepositions",
                "title": "Prepositions & Cases",
                "description": "Learn German prepositions with their cases",
                "level": "A2",
                "duration": "4 weeks",
                "topics": ["Accusative prepositions", "Dative prepositions", "Two-way prepositions", "Genitive prepositions"]
            },
            {
                "id": "german-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "german-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "german-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "german-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "german-education-work",
                "title": "Education & Work",
                "description": "Navigate German education and work vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "german-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            }
        ]
    elif language == "chinese":
        lessons = [
            {
                "id": "chinese-pinyin",
                "title": "Pinyin & Pronunciation",
                "description": "Master Chinese pronunciation and tones",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Pinyin system", "Four tones", "Initial consonants", "Final vowels"]
            },
            {
                "id": "basic-grammar-chinese",
                "title": "Basic Grammar",
                "description": "Essential Chinese grammar",
                "level": "HSK1",
                "duration": "4 weeks",
                "topics": ["Sentence structure", "是 (shì) verb", "Question words", "Basic particles"]
            },
            {
                "id": "daily-conversation-chinese",
                "title": "Daily Conversation",
                "description": "Practical Chinese phrases",
                "level": "HSK1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-chinese",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in Chinese",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-chinese",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Family members", "Age expressions", "Relationship terms", "Polite forms"]
            },
            {
                "id": "colors-shapes-chinese",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "HSK1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Descriptive characters", "Visual expressions"]
            },
            {
                "id": "weather-seasons-chinese",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature expressions", "Weather activities"]
            },
            {
                "id": "food-drinks-chinese",
                "title": "Food & Drinks",
                "description": "Essential Chinese food vocabulary",
                "level": "HSK1",
                "duration": "3 weeks",
                "topics": ["Chinese cuisine", "Beverages", "Cooking verbs", "Dining etiquette"]
            },
            {
                "id": "travel-directions-chinese",
                "title": "Travel & Directions",
                "description": "Navigate Chinese-speaking regions",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "chinese-characters-basics",
                "title": "Chinese Characters Basics",
                "description": "Learn fundamental Chinese characters",
                "level": "HSK1",
                "duration": "4 weeks",
                "topics": ["Basic radicals", "Stroke order", "Character structure", "Common characters"]
            },
            {
                "id": "chinese-tones-mastery",
                "title": "Tones Mastery",
                "description": "Master the four tones and tone changes",
                "level": "HSK1",
                "duration": "3 weeks",
                "topics": ["Four tones", "Tone combinations", "Tone changes", "Pronunciation practice"]
            },
            {
                "id": "chinese-measure-words",
                "title": "Measure Words (量词)",
                "description": "Learn Chinese measure words and classifiers",
                "level": "HSK2",
                "duration": "3 weeks",
                "topics": ["Common measure words", "Specific classifiers", "Usage rules", "Practice exercises"]
            },
            {
                "id": "chinese-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "HSK1",
                "duration": "3 weeks",
                "topics": ["Market vocabulary", "Price negotiations", "Daily necessities", "Customer service"]
            },
            {
                "id": "chinese-emotions-feelings",
                "title": "Emotions & Feelings",
                "description": "Express emotions and feelings in Chinese",
                "level": "HSK2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Physical feelings", "Mental states", "Expressing preferences"]
            },
            {
                "id": "chinese-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "HSK1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "chinese-health-body",
                "title": "Health & Body Parts",
                "description": "Learn health vocabulary and body parts",
                "level": "HSK2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical vocabulary", "Doctor visits"]
            },
            {
                "id": "chinese-education-school",
                "title": "Education & School Life",
                "description": "Navigate Chinese education system vocabulary",
                "level": "HSK2",
                "duration": "3 weeks",
                "topics": ["School subjects", "Academic vocabulary", "Student life", "Chinese education culture"]
            },
            {
                "id": "chinese-technology-modern",
                "title": "Technology & Modern Life",
                "description": "Master technology and digital vocabulary",
                "level": "HSK2",
                "duration": "2 weeks",
                "topics": ["Digital devices", "Internet vocabulary", "Social media", "Modern Chinese tech culture"]
            },
            {
                "id": "chinese-business-work",
                "title": "Business & Work",
                "description": "Learn business and workplace vocabulary",
                "level": "HSK3",
                "duration": "4 weeks",
                "topics": ["Job applications", "Workplace vocabulary", "Business meetings", "Professional communication"]
            }
        ]
    elif language == "spanish":
        lessons = [
            {
                "id": "spanish-alphabet",
                "title": "Spanish Alphabet & Pronunciation",
                "description": "Master Spanish pronunciation and accent marks",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Alphabet sounds", "Accent marks", "Rolling R", "Double consonants"]
            },
            {
                "id": "basic-grammar-spanish",
                "title": "Basic Grammar",
                "description": "Essential Spanish grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Articles (el, la, los, las)", "Ser & Estar", "Gender agreement", "Basic conjugation"]
            },
            {
                "id": "subjunctive-mastery",
                "title": "Subjunctive Mood Mastery",
                "description": "Master the subjunctive mood - the most challenging aspect of Spanish grammar",
                "level": "B2",
                "duration": "6 weeks",
                "topics": ["Present subjunctive", "Imperfect subjunctive", "Subjunctive triggers", "Doubt vs certainty"],
                "personalAnecdote": "The subjunctive took me 8 months to truly understand! I used to avoid it completely, but my Spanish teacher told me 'You'll never sound natural without it.' The key is understanding that it's about uncertainty, emotion, and influence - not just memorizing conjugations.",
                "commonMistakes": [
                    "Using indicative after 'es posible que' (should be subjunctive)",
                    "Forgetting subjunctive after 'para que' and 'a menos que'",
                    "Mixing up 'ser' and 'estar' in subjunctive forms",
                    "Using present subjunctive for past events (need imperfect subjunctive)"
                ],
                "culturalContext": "The subjunctive is crucial for expressing politeness in Spanish. Saying 'Espero que tengas un buen día' (I hope you have a good day) with subjunctive sounds much more natural than the indicative form."
            },
            {
                "id": "por-vs-para",
                "title": "Por vs Para - The Ultimate Guide",
                "description": "Master the most confusing prepositions in Spanish",
                "level": "B1",
                "duration": "4 weeks",
                "topics": ["Por: cause, duration, exchange", "Para: purpose, destination, deadline", "Common expressions", "Regional variations"],
                "personalAnecdote": "I used to say 'para mi' for everything until a Colombian friend laughed and said 'That sounds like you're always talking about yourself!' The trick: POR = through/cause, PARA = toward/purpose. 'Voy por el parque' (I go through the park) vs 'Voy para el parque' (I go toward the park).",
                "commonMistakes": [
                    "Saying 'para mi' instead of 'por mi' (for my sake)",
                    "Using 'para' with time expressions (should be 'por' for duration)",
                    "Confusing 'por favor' with 'para favor' (never say this!)",
                    "Using 'para' with 'gracias' (should be 'gracias por')"
                ],
                "culturalContext": "In Spain, you might hear 'por favor' more often, while in Latin America, 'por favor' and 'por favorcito' are common. The choice between por and para can even indicate regional origin!"
            },
            {
                "id": "preterite-imperfect",
                "title": "Preterite vs Imperfect - The 6-Month Challenge",
                "description": "Master the past tenses that confuse even advanced learners",
                "level": "B1",
                "duration": "8 weeks",
                "topics": ["Preterite: completed actions", "Imperfect: ongoing/descriptive", "Trigger words", "Narrative techniques"],
                "personalAnecdote": "This took me 6 months to master! I kept saying 'Yo fui estudiante' (I was a student) instead of 'Yo era estudiante' (I used to be a student). My teacher finally said 'Think of it like this: preterite is a photo, imperfect is a video.' That changed everything!",
                "commonMistakes": [
                    "Using preterite for 'era' (was) in descriptions",
                    "Mixing up 'fue' vs 'era' in past narratives",
                    "Using imperfect for completed actions",
                    "Forgetting that 'había' (there was) is imperfect"
                ],
                "culturalContext": "The choice between preterite and imperfect can change the entire meaning of a story. In Latin America, you might hear more imperfect for ongoing states, while Spain tends to use preterite more frequently for completed actions."
            },
            {
                "id": "false-cognates",
                "title": "False Cognates - The Deceptive Friends",
                "description": "Avoid embarrassing mistakes with words that look similar but mean different things",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Common false cognates", "Context clues", "Memory techniques", "Regional differences"],
                "personalAnecdote": "I once told my host family 'Estoy embarazada' thinking it meant 'I'm embarrassed' - they looked shocked! Turns out it means 'I'm pregnant'! Now I always double-check words that look too similar to English.",
                "commonMistakes": [
                    "Saying 'embarazada' for embarrassed (should be 'avergonzada')",
                    "Using 'actual' for actual (should be 'real' or 'verdadero')",
                    "Saying 'sopa' for soap (should be 'jabón')",
                    "Using 'ropa' for rope (should be 'cuerda')"
                ],
                "culturalContext": "False cognates vary by region. In Spain, 'coger' means 'to take,' but in Latin America, it's a vulgar term. Always be aware of regional differences!"
            },
            {
                "id": "regional-differences",
                "title": "Spain vs Latin America - Regional Mastery",
                "description": "Navigate the beautiful diversity of Spanish across different countries",
                "level": "B2",
                "duration": "4 weeks",
                "topics": ["Vocabulary differences", "Pronunciation variations", "Grammar differences", "Cultural expressions"],
                "personalAnecdote": "When I first visited Mexico, I asked for 'zumo' (juice) and got confused looks. They said 'jugo'! Then in Argentina, I said 'coche' (car) and they said 'auto'! Each country has its own beautiful way of speaking Spanish.",
                "commonMistakes": [
                    "Using 'vosotros' in Latin America (they use 'ustedes')",
                    "Saying 'coger' in Latin America (use 'tomar' or 'agarrar')",
                    "Using 'ordenador' in Latin America (they say 'computadora')",
                    "Mixing up 'tú' and 'vos' in Argentina/Uruguay"
                ],
                "culturalContext": "Spanish is spoken by 500+ million people across 20+ countries. Each region has unique expressions, vocabulary, and even grammar rules. Embrace the diversity - it's what makes Spanish so rich!"
            },
            {
                "id": "daily-conversation-spanish",
                "title": "Daily Conversation",
                "description": "Practical Spanish phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-spanish",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in Spanish",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-spanish",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Possessive adjectives", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-spanish",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Adjective agreement", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-spanish",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-spanish",
                "title": "Food & Drinks",
                "description": "Essential Spanish food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Spanish cuisine", "Beverages", "Cooking verbs", "Dining culture"]
            },
            {
                "id": "travel-directions-spanish",
                "title": "Travel & Directions",
                "description": "Navigate Spanish-speaking countries",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "spanish-verb-conjugation",
                "title": "Verb Conjugation Mastery",
                "description": "Master Spanish verb conjugations",
                "level": "A2",
                "duration": "6 weeks",
                "topics": ["Present tense", "Past tenses", "Future tense", "Conditional mood"]
            },
            {
                "id": "spanish-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "spanish-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "spanish-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "spanish-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "spanish-education-work",
                "title": "Education & Work",
                "description": "Navigate Spanish education and work vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "spanish-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            },
            {
                "id": "spanish-business-professional",
                "title": "Business & Professional",
                "description": "Learn business and professional vocabulary",
                "level": "B1",
                "duration": "4 weeks",
                "topics": ["Job applications", "Workplace vocabulary", "Business meetings", "Professional communication"]
            },
            {
                "id": "spanish-culture-traditions",
                "title": "Culture & Traditions",
                "description": "Explore Spanish culture and traditions",
                "level": "B1",
                "duration": "3 weeks",
                "topics": ["Cultural celebrations", "Traditional foods", "Historical events", "Regional customs"]
            },
            {
                "id": "spanish-advanced-grammar",
                "title": "Advanced Grammar",
                "description": "Master advanced Spanish grammar concepts",
                "level": "B2",
                "duration": "5 weeks",
                "topics": ["Complex sentence structures", "Advanced verb forms", "Literary language", "Formal writing"]
            }
        ]
    elif language == "french":
        lessons = [
            {
                "id": "french-alphabet",
                "title": "French Alphabet & Pronunciation",
                "description": "Master French pronunciation and accents",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Alphabet sounds", "Accent marks", "Liaison rules", "Silent letters"]
            },
            {
                "id": "basic-grammar-french",
                "title": "Basic Grammar",
                "description": "Essential French grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Articles (le, la, les)", "Être & Avoir", "Gender agreement", "Basic conjugation"]
            },
            {
                "id": "daily-conversation-french",
                "title": "Daily Conversation",
                "description": "Practical French phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-french",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in French",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-french",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Possessive adjectives", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-french",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Adjective agreement", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-french",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-french",
                "title": "Food & Drinks",
                "description": "Essential French food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["French cuisine", "Beverages", "Cooking verbs", "Dining culture"]
            },
            {
                "id": "travel-directions-french",
                "title": "Travel & Directions",
                "description": "Navigate French-speaking countries",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "french-verb-conjugation",
                "title": "Verb Conjugation Mastery",
                "description": "Master French verb conjugations",
                "level": "A2",
                "duration": "6 weeks",
                "topics": ["Present tense", "Past tenses", "Future tense", "Conditional mood"]
            },
            {
                "id": "french-gender-agreement",
                "title": "Gender & Agreement",
                "description": "Master French gender and agreement rules",
                "level": "A2",
                "duration": "4 weeks",
                "topics": ["Noun gender", "Adjective agreement", "Article agreement", "Plural forms"]
            },
            {
                "id": "french-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "french-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "french-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "french-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "french-education-work",
                "title": "Education & Work",
                "description": "Navigate French education and work vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "french-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            },
            {
                "id": "french-culture-traditions",
                "title": "Culture & Traditions",
                "description": "Explore French culture and traditions",
                "level": "B1",
                "duration": "3 weeks",
                "topics": ["Cultural celebrations", "Traditional foods", "Historical events", "Regional customs"]
            },
            {
                "id": "french-advanced-grammar",
                "title": "Advanced Grammar",
                "description": "Master advanced French grammar concepts",
                "level": "B2",
                "duration": "5 weeks",
                "topics": ["Complex sentence structures", "Advanced verb forms", "Literary language", "Formal writing"]
            }
        ]
    elif language == "russian":
        lessons = [
            {
                "id": "cyrillic-alphabet",
                "title": "Cyrillic Alphabet",
                "description": "Master the Russian alphabet",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["А-Е letters", "Ж-К letters", "Л-П letters", "Р-Х letters", "Ц-Я letters"]
            },
            {
                "id": "basic-grammar-russian",
                "title": "Basic Grammar",
                "description": "Essential Russian grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Gender & Cases", "Present Tense", "Past Tense", "Adjectives"]
            },
            {
                "id": "daily-conversation-russian",
                "title": "Daily Conversation",
                "description": "Practical Russian phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-russian",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-russian",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Possessive pronouns", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-russian",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Adjective endings", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-russian",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-russian",
                "title": "Food & Drinks",
                "description": "Essential Russian food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Russian cuisine", "Beverages", "Cooking verbs", "Dining culture"]
            },
            {
                "id": "travel-directions-russian",
                "title": "Travel & Directions",
                "description": "Navigate Russian-speaking countries",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "russian-cases-mastery",
                "title": "Russian Cases Mastery",
                "description": "Master the six Russian cases",
                "level": "A2",
                "duration": "8 weeks",
                "topics": ["Nominative case", "Genitive case", "Dative case", "Accusative case", "Instrumental case", "Prepositional case"]
            },
            {
                "id": "russian-verb-conjugation",
                "title": "Verb Conjugation Patterns",
                "description": "Learn Russian verb conjugation rules",
                "level": "A2",
                "duration": "5 weeks",
                "topics": ["First conjugation", "Second conjugation", "Irregular verbs", "Aspect pairs"]
            },
            {
                "id": "russian-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "russian-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "russian-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "russian-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "russian-education-work",
                "title": "Education & Work",
                "description": "Navigate Russian education and work vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "russian-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            },
            {
                "id": "russian-culture-traditions",
                "title": "Culture & Traditions",
                "description": "Explore Russian culture and traditions",
                "level": "B1",
                "duration": "3 weeks",
                "topics": ["Cultural celebrations", "Traditional foods", "Historical events", "Regional customs"]
            },
            {
                "id": "russian-advanced-grammar",
                "title": "Advanced Grammar",
                "description": "Master advanced Russian grammar concepts",
                "level": "B2",
                "duration": "5 weeks",
                "topics": ["Complex sentence structures", "Advanced verb forms", "Literary language", "Formal writing"]
            }
        ]
    elif language == "arabic":
        lessons = [
            {
                "id": "arabic-alphabet",
                "title": "Arabic Alphabet & Script",
                "description": "Master the Arabic writing system",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["28 letters", "Letter forms", "Right-to-left writing", "Basic reading"]
            },
            {
                "id": "basic-grammar-arabic",
                "title": "Basic Grammar",
                "description": "Essential Arabic grammar",
                "level": "A1",
                "duration": "4 weeks",
                "topics": ["Sentence structure", "Gender agreement", "Basic conjugation", "Question words"]
            },
            {
                "id": "daily-conversation-arabic",
                "title": "Daily Conversation",
                "description": "Practical Arabic phrases",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
            },
            {
                "id": "numbers-time-arabic",
                "title": "Numbers & Time",
                "description": "Learn numbers and telling time in Arabic",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Numbers 1-100", "Days & Months", "Telling Time", "Dates"]
            },
            {
                "id": "family-relationships-arabic",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Family members", "Possessive pronouns", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-arabic",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "A1",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "Adjective agreement", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-arabic",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-arabic",
                "title": "Food & Drinks",
                "description": "Essential Arabic food vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Arabic cuisine", "Beverages", "Cooking verbs", "Dining culture"]
            },
            {
                "id": "travel-directions-arabic",
                "title": "Travel & Directions",
                "description": "Navigate Arabic-speaking countries",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "arabic-verb-conjugation",
                "title": "Verb Conjugation Mastery",
                "description": "Learn Arabic verb conjugation patterns",
                "level": "A2",
                "duration": "6 weeks",
                "topics": ["Present tense", "Past tense", "Future tense", "Imperative mood"]
            },
            {
                "id": "arabic-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "A1",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "arabic-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "arabic-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "A1",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "arabic-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "arabic-education-work",
                "title": "Education & Work",
                "description": "Navigate Arabic education and work vocabulary",
                "level": "A2",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "arabic-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "A2",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            },
            {
                "id": "arabic-culture-traditions",
                "title": "Culture & Traditions",
                "description": "Explore Arabic culture and traditions",
                "level": "B1",
                "duration": "3 weeks",
                "topics": ["Cultural celebrations", "Traditional foods", "Historical events", "Regional customs"]
            },
            {
                "id": "arabic-advanced-grammar",
                "title": "Advanced Grammar",
                "description": "Master advanced Arabic grammar concepts",
                "level": "B2",
                "duration": "5 weeks",
                "topics": ["Complex sentence structures", "Advanced verb forms", "Literary language", "Formal writing"]
            }
        ]
    else:
        lessons = [
            {
                "id": "hiragana",
                "title": "Hiragana",
                "description": "Master the basic Japanese syllabary",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["あ-row", "か-row", "さ-row", "た-row", "な-row"],
                "personalAnecdote": "When I first started learning Japanese, I confused あ (a) with お (o) constantly! The key is remembering that あ looks like a person with their arms up saying 'ah!' while お has that little tail that makes it look more like 'oh!'",
                "commonMistakes": [
                    "Mixing up あ and お - remember the arm position!",
                    "Writing う too wide - it should be more compact",
                    "Forgetting the small stroke in い - it's not just two lines"
                ],
                "culturalContext": "The あ-row represents the most fundamental sounds in Japanese. In traditional Japanese education, children learn these characters first, often through songs and games. The character あ is sometimes called the 'mother of all hiragana' because it's the first one taught."
            },
            {
                "id": "katakana",
                "title": "Katakana", 
                "description": "Learn katakana for foreign words",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["ア-row", "カ-row", "サ-row", "タ-row", "ナ-row"],
                "personalAnecdote": "Katakana was tricky because I kept trying to read it like English! My teacher told me to think of it as 'Japanese English' - the sounds are adapted to Japanese pronunciation. コーヒー (koohii) for 'coffee' was my first 'aha!' moment.",
                "commonMistakes": [
                    "Reading katakana like English letters",
                    "Confusing シ (shi) and ツ (tsu) - remember the stroke direction!",
                    "Forgetting that katakana is for foreign words only",
                    "Making characters too wide or too narrow"
                ],
                "culturalContext": "Katakana reflects Japan's relationship with foreign cultures. It's used for loanwords, foreign names, and emphasis. In modern Japan, you'll see katakana everywhere - from brand names to onomatopoeia in manga."
            },
            {
                "id": "basic-grammar",
                "title": "Basic Grammar",
                "description": "Essential grammar patterns",
                "level": "N5",
                "duration": "4 weeks",
                "topics": ["です/だ", "Particles は・が・を", "Verb conjugation", "Adjectives"],
                "personalAnecdote": "Particles were my biggest challenge! I once said '私が田中です' instead of '私は田中です' to introduce myself, and my Japanese teacher laughed. She explained that は is for topics (like introducing yourself) while が is for new information (like answering 'who is Tanaka?').",
                "commonMistakes": [
                    "Using が instead of は for topic introduction",
                    "Confusing を and が with transitive vs intransitive verbs",
                    "Forgetting particles entirely (very common mistake!)",
                    "Using は after question words (should use が)"
                ],
                "culturalContext": "Japanese grammar reflects the culture's emphasis on context and relationships. The topic-comment structure (は) is fundamental to Japanese communication - you establish what you're talking about first, then comment on it. This is very different from English subject-verb-object structure."
            },
            {
                "id": "daily-conversation",
                "title": "Daily Conversation",
                "description": "Practical phrases for everyday life",
                "level": "N5",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"],
                "personalAnecdote": "I used to say 'こんにちは' to everyone, even in the morning! My Japanese host family gently corrected me - they explained that timing matters in Japanese greetings. Now I always check the time before greeting someone.",
                "commonMistakes": [
                    "Using こんにちは in the morning (use おはようございます)",
                    "Saying さようなら to close friends (too formal)",
                    "Forgetting to bow while greeting (important in Japanese culture)",
                    "Using casual greetings with teachers or bosses"
                ],
                "culturalContext": "Greetings in Japan are deeply tied to respect and social hierarchy. Bowing while greeting is essential - the deeper the bow, the more respect shown. Morning greetings are especially important in Japanese workplaces and schools."
            },
            {
                "id": "family-relationships-japanese",
                "title": "Family & Relationships",
                "description": "Learn family terms and relationship vocabulary",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["Family members", "Polite forms", "Relationship terms", "Family descriptions"]
            },
            {
                "id": "colors-shapes-japanese",
                "title": "Colors & Shapes",
                "description": "Master color and shape vocabulary",
                "level": "N5",
                "duration": "1 week",
                "topics": ["Basic colors", "Shape names", "い-adjectives", "Visual descriptions"]
            },
            {
                "id": "weather-seasons-japanese",
                "title": "Weather & Seasons",
                "description": "Learn weather vocabulary and seasonal expressions",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["Weather conditions", "Four seasons", "Temperature", "Weather activities"]
            },
            {
                "id": "food-drinks-japanese",
                "title": "Food & Drinks",
                "description": "Essential Japanese food vocabulary",
                "level": "N5",
                "duration": "3 weeks",
                "topics": ["Japanese cuisine", "Beverages", "Cooking verbs", "Dining etiquette"]
            },
            {
                "id": "travel-directions-japanese",
                "title": "Travel & Directions",
                "description": "Navigate Japan with confidence",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["Transportation", "Directions", "Places in the city", "Travel planning"]
            },
            {
                "id": "japanese-kanji-basics",
                "title": "Kanji Basics",
                "description": "Learn fundamental Japanese kanji characters",
                "level": "N5",
                "duration": "6 weeks",
                "topics": ["Basic radicals", "Stroke order", "Common kanji", "Reading strategies"]
            },
            {
                "id": "japanese-particles-advanced",
                "title": "Advanced Particles",
                "description": "Master Japanese particles for natural speech",
                "level": "N4",
                "duration": "4 weeks",
                "topics": ["は vs が", "を vs が", "に vs で", "から vs まで"]
            },
            {
                "id": "japanese-verb-conjugation",
                "title": "Verb Conjugation Mastery",
                "description": "Learn Japanese verb conjugation patterns",
                "level": "N4",
                "duration": "5 weeks",
                "topics": ["る-verbs", "う-verbs", "Irregular verbs", "Polite forms"]
            },
            {
                "id": "japanese-shopping-daily",
                "title": "Shopping & Daily Life",
                "description": "Master shopping and daily life vocabulary",
                "level": "N5",
                "duration": "3 weeks",
                "topics": ["Grocery shopping", "Clothing stores", "Prices and money", "Customer service"]
            },
            {
                "id": "japanese-emotions-personality",
                "title": "Emotions & Personality",
                "description": "Express emotions and describe personality",
                "level": "N4",
                "duration": "2 weeks",
                "topics": ["Basic emotions", "Personality traits", "Physical feelings", "Mental states"]
            },
            {
                "id": "japanese-hobbies-interests",
                "title": "Hobbies & Interests",
                "description": "Talk about hobbies and personal interests",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["Sports and activities", "Music and arts", "Reading preferences", "Leisure time"]
            },
            {
                "id": "japanese-health-medical",
                "title": "Health & Medical",
                "description": "Learn health and medical vocabulary",
                "level": "N4",
                "duration": "3 weeks",
                "topics": ["Body parts", "Health conditions", "Medical appointments", "Pharmacy vocabulary"]
            },
            {
                "id": "japanese-education-work",
                "title": "Education & Work",
                "description": "Navigate Japanese education and work vocabulary",
                "level": "N4",
                "duration": "3 weeks",
                "topics": ["School subjects", "University life", "Job applications", "Workplace vocabulary"]
            },
            {
                "id": "japanese-technology-digital",
                "title": "Technology & Digital Life",
                "description": "Master technology and digital vocabulary",
                "level": "N4",
                "duration": "2 weeks",
                "topics": ["Computer vocabulary", "Internet terms", "Social media", "Digital communication"]
            },
            {
                "id": "japanese-culture-traditions",
                "title": "Culture & Traditions",
                "description": "Explore Japanese culture and traditions",
                "level": "N3",
                "duration": "3 weeks",
                "topics": ["Cultural celebrations", "Traditional foods", "Historical events", "Regional customs"]
            }
        ]
    return lessons

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
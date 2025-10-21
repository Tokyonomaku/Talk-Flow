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
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

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
        language_configs = {
            "japanese": {
                "tutor": "Japanese language tutor",
                "target_language": "Japanese",
                "levels": "N5/N4 levels"
            },
            "russian": {
                "tutor": "Russian language tutor", 
                "target_language": "Russian",
                "levels": "A1/A2 levels"
            },
            "french": {
                "tutor": "French language tutor",
                "target_language": "French", 
                "levels": "A1/A2 levels"
            },
            "spanish": {
                "tutor": "Spanish language tutor",
                "target_language": "Spanish", 
                "levels": "A1/A2 levels"
            },
            "chinese": {
                "tutor": "Chinese language tutor",
                "target_language": "Chinese", 
                "levels": "HSK1/HSK2 levels"
            },
            "german": {
                "tutor": "German language tutor",
                "target_language": "German", 
                "levels": "A1/A2 levels"
            },
            "arabic": {
                "tutor": "Arabic language tutor",
                "target_language": "Arabic", 
                "levels": "A1/A2 levels"
            },
            "korean": {
                "tutor": "Korean language tutor",
                "target_language": "Korean", 
                "levels": "A1/A2 levels"
            }
        }
        
        config = language_configs.get(request.language, language_configs["japanese"])
        
        chat = LlmChat(
            api_key=os.environ['EMERGENT_LLM_KEY'],
            session_id=request.session_id,
            system_message=f"""You are a friendly {config['tutor']}. The student is at {request.level} level.
            
Your role:
1. Respond in {config['target_language']} appropriate for their level
2. Provide English translation in parentheses
3. Give gentle corrections and helpful feedback
4. Keep responses encouraging and educational
5. Use simple grammar and vocabulary for {config['levels']}

Format your response as:
{config['target_language']} text
(English translation)

Then add feedback if needed."""
        ).with_model("openai", "gpt-4o-mini")
        
        user_message = UserMessage(text=request.message)
        response = await chat.send_message(user_message)
        
        # Parse response
        lines = response.strip().split('\n')
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
                "topics": ["あ-row", "か-row", "さ-row", "た-row", "な-row"]
            },
            {
                "id": "katakana",
                "title": "Katakana", 
                "description": "Learn katakana for foreign words",
                "level": "N5",
                "duration": "2 weeks",
                "topics": ["ア-row", "カ-row", "サ-row", "タ-row", "ナ-row"]
            },
            {
                "id": "basic-grammar",
                "title": "Basic Grammar",
                "description": "Essential grammar patterns",
                "level": "N5",
                "duration": "4 weeks",
                "topics": ["です/だ", "Particles は・が・を", "Verb conjugation", "Adjectives"]
            },
            {
                "id": "daily-conversation",
                "title": "Daily Conversation",
                "description": "Practical phrases for everyday life",
                "level": "N5",
                "duration": "3 weeks",
                "topics": ["Greetings", "Shopping", "Restaurants", "Directions"]
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
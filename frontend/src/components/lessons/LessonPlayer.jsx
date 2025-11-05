import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '@/App';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle2, ChevronRight, Trophy, Pen } from 'lucide-react';
import { toast } from 'sonner';
import DrawingCanvas from '@/components/DrawingCanvas';
import StrokeOrderDiagram from '@/components/StrokeOrderDiagram';
import { LoadingState } from '@/components/common/LoadingState';

// Import lesson data
import { lessons as japaneseLessons } from '@/data/lessons/japanese';
import { lessons as spanishLessons } from '@/data/lessons/spanish';
import { lessons as frenchLessons } from '@/data/lessons/french';
import { lessons as germanLessons } from '@/data/lessons/german';
import { lessons as chineseLessons } from '@/data/lessons/chinese';
import { lessons as russianLessons } from '@/data/lessons/russian';
import { lessons as arabicLessons } from '@/data/lessons/arabic';

const lessonData = {
  ja: japaneseLessons,
  es: spanishLessons,
  fr: frenchLessons,
  de: germanLessons,
  zh: chineseLessons,
  ru: russianLessons,
  ar: arabicLessons
};

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { selectedLanguage, refreshProgress } = useContext(AppContext);
  const [lesson, setLesson] = useState(null);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Clear loading state from sessionStorage when component mounts
  useEffect(() => {
    sessionStorage.removeItem('loadingLesson');
  }, []);
  const [showDrawing, setShowDrawing] = useState(false);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [completedCharacters, setCompletedCharacters] = useState([]);
  
  // Lesson content data
  const lessonContent = {
    hiragana: {
      topics: [
        {
          title: 'あ-row (a, i, u, e, o)',
          content: `Learn the first five hiragana characters:`,
          characters: [
            { char: 'あ', romaji: 'a', example: 'あさ (asa) - morning' },
            { char: 'い', romaji: 'i', example: 'いぬ (inu) - dog' },
            { char: 'う', romaji: 'u', example: 'うみ (umi) - sea' },
            { char: 'え', romaji: 'e', example: 'えき (eki) - station' },
            { char: 'お', romaji: 'o', example: 'おちゃ (ocha) - tea' }
          ],
          personalAnecdote: "When I first started learning Japanese, I confused あ (a) with お (o) constantly! The key is remembering that あ looks like a person with their arms up saying 'ah!' while お has that little tail that makes it look more like 'oh!'",
          commonMistakes: [
            "Mixing up あ and お - remember the arm position!",
            "Writing う too wide - it should be more compact",
            "Forgetting the small stroke in い - it's not just two lines"
          ],
          culturalContext: "The あ-row represents the most fundamental sounds in Japanese. In traditional Japanese education, children learn these characters first, often through songs and games. The character あ is sometimes called the 'mother of all hiragana' because it's the first one taught."
        },
        {
          title: 'か-row (ka, ki, ku, ke, ko)',
          content: `Master the ka-row characters:`,
          characters: [
            { char: 'か', romaji: 'ka', example: 'かお (kao) - face' },
            { char: 'き', romaji: 'ki', example: 'き (ki) - tree' },
            { char: 'く', romaji: 'ku', example: 'くち (kuchi) - mouth' },
            { char: 'け', romaji: 'ke', example: 'けさ (kesa) - this morning' },
            { char: 'こ', romaji: 'ko', example: 'ここ (koko) - here' }
          ],
          personalAnecdote: "I used to struggle with き (ki) because I'd always forget the little hook at the bottom! My Japanese teacher told me to think of it as a tree with roots - the hook represents the roots going into the ground.",
          commonMistakes: [
            "Writing き without the bottom hook - it's not complete without it!",
            "Making く too curved - it should be more angular",
            "Confusing け and は - remember け has the horizontal line at the top"
          ],
          culturalContext: "The か-row introduces the 'k' sound family, which is very common in Japanese. Many basic words start with 'ka' sounds, like かお (face) and かばん (bag). In Japanese calligraphy, the stroke order of these characters is crucial for proper form."
        },
        {
          title: 'さ-row (sa, shi, su, se, so)',
          content: `Learn the sa-row characters:`,
          characters: [
            { char: 'さ', romaji: 'sa', example: 'さかな (sakana) - fish' },
            { char: 'し', romaji: 'shi', example: 'しお (shio) - salt' },
            { char: 'す', romaji: 'su', example: 'すし (sushi) - sushi' },
            { char: 'せ', romaji: 'se', example: 'せなか (senaka) - back' },
            { char: 'そ', romaji: 'so', example: 'そら (sora) - sky' }
          ]
        },
        {
          title: 'た-row (ta, chi, tsu, te, to)',
          content: `Master the ta-row characters:`,
          characters: [
            { char: 'た', romaji: 'ta', example: 'たべる (taberu) - to eat' },
            { char: 'ち', romaji: 'chi', example: 'ちず (chizu) - map' },
            { char: 'つ', romaji: 'tsu', example: 'つき (tsuki) - moon' },
            { char: 'て', romaji: 'te', example: 'て (te) - hand' },
            { char: 'と', romaji: 'to', example: 'とり (tori) - bird' }
          ]
        },
        {
          title: 'な-row (na, ni, nu, ne, no)',
          content: `Learn the na-row characters:`,
          characters: [
            { char: 'な', romaji: 'na', example: 'なまえ (namae) - name' },
            { char: 'に', romaji: 'ni', example: 'にく (niku) - meat' },
            { char: 'ぬ', romaji: 'nu', example: 'ぬの (nuno) - cloth' },
            { char: 'ね', romaji: 'ne', example: 'ねこ (neko) - cat' },
            { char: 'の', romaji: 'no', example: 'のむ (nomu) - to drink' }
          ]
        }
      ]
    },
    katakana: {
      topics: [
        {
          title: 'ア-row (a, i, u, e, o)',
          content: `Learn the first five katakana characters:`,
          characters: [
            { char: 'ア', romaji: 'a', example: 'アメリカ (Amerika) - America' },
            { char: 'イ', romaji: 'i', example: 'インド (Indo) - India' },
            { char: 'ウ', romaji: 'u', example: 'ウール (uuru) - wool' },
            { char: 'エ', romaji: 'e', example: 'エレベーター (erebeetaa) - elevator' },
            { char: 'オ', romaji: 'o', example: 'オレンジ (orenji) - orange' }
          ]
        },
        {
          title: 'カ-row (ka, ki, ku, ke, ko)',
          content: `Master the katakana ka-row:`,
          characters: [
            { char: 'カ', romaji: 'ka', example: 'カメラ (kamera) - camera' },
            { char: 'キ', romaji: 'ki', example: 'キス (kisu) - kiss' },
            { char: 'ク', romaji: 'ku', example: 'クラス (kurasu) - class' },
            { char: 'ケ', romaji: 'ke', example: 'ケーキ (keeki) - cake' },
            { char: 'コ', romaji: 'ko', example: 'コーヒー (koohii) - coffee' }
          ]
        },
        {
          title: 'サ-row (sa, shi, su, se, so)',
          content: `Learn the katakana sa-row:`,
          characters: [
            { char: 'サ', romaji: 'sa', example: 'サラダ (sarada) - salad' },
            { char: 'シ', romaji: 'shi', example: 'シャツ (shatsu) - shirt' },
            { char: 'ス', romaji: 'su', example: 'スプーン (supuun) - spoon' },
            { char: 'セ', romaji: 'se', example: 'セーター (seetaa) - sweater' },
            { char: 'ソ', romaji: 'so', example: 'ソファー (sofaa) - sofa' }
          ]
        },
        {
          title: 'タ-row (ta, chi, tsu, te, to)',
          content: `Master the katakana ta-row:`,
          characters: [
            { char: 'タ', romaji: 'ta', example: 'タクシー (takushii) - taxi' },
            { char: 'チ', romaji: 'chi', example: 'チーズ (chiizu) - cheese' },
            { char: 'ツ', romaji: 'tsu', example: 'ツアー (tsuaa) - tour' },
            { char: 'テ', romaji: 'te', example: 'テレビ (terebi) - TV' },
            { char: 'ト', romaji: 'to', example: 'トマト (tomato) - tomato' }
          ]
        },
        {
          title: 'ナ-row (na, ni, nu, ne, no)',
          content: `Learn the katakana na-row:`,
          characters: [
            { char: 'ナ', romaji: 'na', example: 'ナイフ (naifu) - knife' },
            { char: 'ニ', romaji: 'ni', example: 'ニュース (nyuusu) - news' },
            { char: 'ヌ', romaji: 'nu', example: 'ヌードル (nuudoru) - noodle' },
            { char: 'ネ', romaji: 'ne', example: 'ネクタイ (nekutai) - necktie' },
            { char: 'ノ', romaji: 'no', example: 'ノート (nooto) - notebook' }
          ]
        }
      ]
    },
    'basic-grammar': {
      topics: [
        {
          title: 'です/だ - To be',
          content: `です (desu) is the polite copula (to be) in Japanese.`,
          points: [
            'Used to state that something IS something else',
            'Always comes at the end of a sentence',
            'です is polite, だ is casual',
            'Question form: ですか (desu ka)'
          ],
          examples: [
            '私は学生です。(I am a student.)',
            'これは本です。(This is a book.)',
            '今日は月曜日です。(Today is Monday.)',
            '彼は先生ですか？(Is he a teacher?)'
          ],
          personalAnecdote: "When I first used です in conversation, I kept forgetting to add it at the end of sentences! My Japanese friend would gently remind me by saying 'です' after my sentences. It felt awkward at first, but now it's second nature.",
          commonMistakes: [
            "Forgetting です at the end of polite sentences",
            "Using だ in formal situations (it's too casual)",
            "Mixing up です and あります/います (different 'to be' verbs)",
            "Adding です after adjectives (not needed with い-adjectives)"
          ],
          culturalContext: "The use of です reflects Japanese politeness culture. In Japan, politeness levels are crucial in communication. Using です shows respect and is expected in most social situations. The casual だ is only used with close friends or family members."
        },
        {
          title: 'Particles: は・が・を',
          content: `Particles are essential markers that show the relationship between words.`,
          points: [
            'は (wa) - Topic marker: shows what we\'re talking about',
            'が (ga) - Subject marker: emphasizes the subject',
            'を (wo/o) - Object marker: marks the direct object'
          ],
          examples: [
            '私は田中です。(As for me, I\'m Tanaka.) - は',
            '誰が来ましたか？(Who came?) - が',
            'りんごを食べます。(I eat an apple.) - を',
            '犬が好きです。(I like dogs.) - が'
          ],
          personalAnecdote: "Particles were my biggest challenge! I once said '私が田中です' instead of '私は田中です' to introduce myself, and my Japanese teacher laughed. She explained that は is for topics (like introducing yourself) while が is for new information (like answering 'who is Tanaka?').",
          commonMistakes: [
            "Using が instead of は for topic introduction",
            "Confusing を and が with transitive vs intransitive verbs",
            "Forgetting particles entirely (very common mistake!)",
            "Using は after question words (should use が)"
          ],
          culturalContext: "Particles reflect Japanese thinking patterns. The topic-comment structure (は) is fundamental to Japanese communication - you establish what you're talking about first, then comment on it. This is very different from English subject-verb-object structure."
        },
        {
          title: 'Verb Conjugation Basics',
          content: `Japanese verbs conjugate based on tense and politeness.`,
          points: [
            'Present/Future: 食べます (tabemasu) - eat/will eat',
            'Past: 食べました (tabemashita) - ate',
            'Negative: 食べません (tabemasen) - don\'t eat',
            'Past Negative: 食べませんでした - didn\'t eat'
          ],
          examples: [
            '毎日学校に行きます。(I go to school every day.)',
            '昨日映画を見ました。(I watched a movie yesterday.)',
            'コーヒーを飲みません。(I don\'t drink coffee.)',
            '宿題をしませんでした。(I didn\'t do homework.)'
          ]
        },
        {
          title: 'Adjectives: い-adjectives & な-adjectives',
          content: `Two types of adjectives in Japanese with different rules.`,
          points: [
            'い-adjectives: end in い (e.g., 大きい - big)',
            'な-adjectives: require な before nouns (e.g., 静かな - quiet)',
            'Both can directly describe nouns or be predicates',
            'Conjugate differently for past/negative'
          ],
          examples: [
            '大きい犬 (a big dog) - い-adjective',
            '静かな部屋 (a quiet room) - な-adjective',
            'この部屋は広いです。(This room is spacious.)',
            '彼女はきれいです。(She is pretty.)'
          ]
        }
      ]
    },
    'daily-conversation': {
      topics: [
        {
          title: 'Greetings',
          content: `Essential greetings for daily interactions.`,
          phrases: [
            { japanese: 'おはようございます', romaji: 'Ohayou gozaimasu', english: 'Good morning', context: 'Polite morning greeting' },
            { japanese: 'こんにちは', romaji: 'Konnichiwa', english: 'Hello/Good afternoon', context: 'Daytime greeting' },
            { japanese: 'こんばんは', romaji: 'Konbanwa', english: 'Good evening', context: 'Evening greeting' },
            { japanese: 'おやすみなさい', romaji: 'Oyasuminasai', english: 'Good night', context: 'Before sleeping' },
            { japanese: 'さようなら', romaji: 'Sayounara', english: 'Goodbye', context: 'Formal farewell' }
          ],
          personalAnecdote: "I used to say 'こんにちは' to everyone, even in the morning! My Japanese host family gently corrected me - they explained that timing matters in Japanese greetings. Now I always check the time before greeting someone.",
          commonMistakes: [
            "Using こんにちは in the morning (use おはようございます)",
            "Saying さようなら to close friends (too formal)",
            "Forgetting to bow while greeting (important in Japanese culture)",
            "Using casual greetings with teachers or bosses"
          ],
          culturalContext: "Greetings in Japan are deeply tied to respect and social hierarchy. Bowing while greeting is essential - the deeper the bow, the more respect shown. Morning greetings are especially important in Japanese workplaces and schools."
        },
        {
          title: 'Shopping',
          content: `Useful phrases for shopping situations.`,
          phrases: [
            { japanese: 'いくらですか？', romaji: 'Ikura desu ka?', english: 'How much is it?', context: 'Asking price' },
            { japanese: 'これをください', romaji: 'Kore wo kudasai', english: 'I\'ll take this', context: 'Making purchase' },
            { japanese: '袋をください', romaji: 'Fukuro wo kudasai', english: 'A bag, please', context: 'Requesting bag' },
            { japanese: '見ているだけです', romaji: 'Mite iru dake desu', english: 'Just looking', context: 'Browsing' },
            { japanese: 'カードで払えますか？', romaji: 'Kaado de haraemasu ka?', english: 'Can I pay by card?', context: 'Payment method' }
          ]
        },
        {
          title: 'Restaurants',
          content: `Essential phrases for dining out.`,
          phrases: [
            { japanese: 'メニューをください', romaji: 'Menyuu wo kudasai', english: 'Menu, please', context: 'Requesting menu' },
            { japanese: 'これをお願いします', romaji: 'Kore wo onegai shimasu', english: 'This one, please', context: 'Ordering' },
            { japanese: 'お会計お願いします', romaji: 'Okaikei onegai shimasu', english: 'Check, please', context: 'Paying bill' },
            { japanese: 'おいしいです', romaji: 'Oishii desu', english: 'It\'s delicious', context: 'Compliment' },
            { japanese: 'ごちそうさまでした', romaji: 'Gochisousama deshita', english: 'Thank you for the meal', context: 'After eating' }
          ]
        },
        {
          title: 'Directions',
          content: `Key phrases for asking and giving directions.`,
          phrases: [
            { japanese: 'すみません、駅はどこですか？', romaji: 'Sumimasen, eki wa doko desu ka?', english: 'Excuse me, where is the station?', context: 'Asking location' },
            { japanese: 'まっすぐ行ってください', romaji: 'Massugu itte kudasai', english: 'Go straight', context: 'Giving direction' },
            { japanese: '右に曲がってください', romaji: 'Migi ni magatte kudasai', english: 'Turn right', context: 'Giving direction' },
            { japanese: '左に曲がってください', romaji: 'Hidari ni magatte kudasai', english: 'Turn left', context: 'Giving direction' },
            { japanese: 'ここはどこですか？', romaji: 'Koko wa doko desu ka?', english: 'Where is this place?', context: 'Lost' }
          ]
        }
      ]
    }
  };
  
  useEffect(() => {
    loadLesson();
  }, [lessonId, selectedLanguage]);
  
  const loadLesson = () => {
    try {
      const languageLessons = lessonData[selectedLanguage] || [];
      const foundLesson = languageLessons.find(l => l.id === parseInt(lessonId));
      setLesson(foundLesson);
    } catch (error) {
      console.error('Failed to load lesson:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const isCharacterBasedLesson = lessonId === 'hiragana' || lessonId === 'katakana';
  
  const handleStartDrawing = () => {
    setShowDrawing(true);
    setCurrentCharacterIndex(0);
    setCompletedCharacters([]);
  };
  
  const handleDrawingComplete = async () => {
    const content = lessonContent[lessonId];
    const topic = content.topics[currentTopicIndex];
    const currentChar = topic.characters[currentCharacterIndex];
    const newCompleted = [...completedCharacters, currentCharacterIndex];
    setCompletedCharacters(newCompleted);
    
    toast.success(`Great job writing ${currentChar.char}!`);
    
    // Move to next character or complete topic
    if (currentCharacterIndex < topic.characters.length - 1) {
      // Move to next character (canvas will reset via useEffect)
      setTimeout(() => {
        setCurrentCharacterIndex(currentCharacterIndex + 1);
      }, 500);
    } else {
      // All characters completed
      toast.success('All characters completed! +20 XP', { duration: 3000 });
      await axios.post(`${API}/progress/update`, null, { params: { xp_gain: 20 } });
      await refreshProgress();
      
      const newCompletedTopics = [...completedTopics, currentTopicIndex];
      setCompletedTopics(newCompletedTopics);
      
      setShowDrawing(false);
      setCurrentCharacterIndex(0);
      setCompletedCharacters([]);
    }
  };
  
  const handleTopicComplete = async () => {
    if (isCharacterBasedLesson) {
      handleStartDrawing();
    } else {
      const newCompleted = [...completedTopics, currentTopicIndex];
      setCompletedTopics(newCompleted);
      
      // Award XP
      await axios.post(`${API}/progress/update`, null, { params: { xp_gain: 20 } });
      await refreshProgress();
      toast.success('+20 XP earned!');
      
      if (currentTopicIndex < lesson.topics.length - 1) {
        setCurrentTopicIndex(currentTopicIndex + 1);
      }
    }
  };
  
  const renderContent = () => {
    if (!lesson) return null;
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <Badge variant="outline" className="text-blue-600 border-blue-600 mb-3">
            Lesson {lesson.id}
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
          <p className="text-gray-600">{lesson.description}</p>
        </div>
        
        {/* Vocabulary Section */}
        <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle>Vocabulary ({lesson.vocabulary.length} words)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.vocabulary.map((word, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-gray-900 mb-1">{word.word}</div>
                  <div className="text-blue-600 font-medium mb-1">{word.translation}</div>
                  {word.romanization && (
                    <div className="text-sm text-gray-500 italic">{word.romanization}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Phrases Section */}
        <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
          <CardHeader>
            <CardTitle>Useful Phrases ({lesson.phrases.length} phrases)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lesson.phrases.map((phrase, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-gray-900 mb-1">{phrase.english}</div>
                  <div className="text-green-600 font-medium mb-1">{phrase.translation}</div>
                  {phrase.romanization && (
                    <div className="text-sm text-gray-500 italic">{phrase.romanization}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Grammar Section */}
        <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader>
            <CardTitle>Grammar: {lesson.grammar.point}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 mb-4">{lesson.grammar.explanation}</p>
            {lesson.grammar.examples && (
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Examples:</h4>
                {lesson.grammar.examples.map((example, i) => (
                  <div key={i} className="p-3 bg-white rounded border border-purple-200">
                    <div className="font-medium text-gray-800">{example.sentence}</div>
                    {example.romanization && (
                      <div className="text-purple-600 text-sm">{example.romanization}</div>
                    )}
                    <div className="text-gray-600 text-sm italic">{example.english}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Exercises Section */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <Card className="border-2 border-yellow-100 bg-gradient-to-br from-yellow-50 to-white">
            <CardHeader>
              <CardTitle>Practice Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              {lesson.exercises.map((exercise, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{exercise.question}</h4>
                  <div className="space-y-2">
                    {exercise.options.map((option, j) => (
                      <div key={j} className="p-2 bg-white rounded border border-yellow-200">
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    );
  };
  
  if (loading || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-green-50">
        <LoadingState message="✨ Loading your lesson..." />
      </div>
    );
  }
  
  const progressPercentage = 100; // Single lesson, so always complete when viewed
  const isCompleted = true; // Simplified for our lesson structure
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="lesson-detail-page">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/lessons')}
          className="mb-4"
          data-testid="back-to-lessons"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Lessons
        </Button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{lesson.description}</p>
        
        {/* Progress Bar */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>
      </div>
      
      {/* Lesson Content */}
      <Card className="border-0 shadow-xl mb-6">
        <CardContent className="p-8">
          {renderContent()}
        </CardContent>
      </Card>
      
      {/* Navigation */}
      <div className="flex justify-center items-center mt-8">
        <Button
          size="lg"
          onClick={() => navigate('/lessons')}
          data-testid="back-to-lessons"
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Lessons
        </Button>
      </div>
      
      {/* Lesson Complete Message */}
      <Card className="mt-6 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardContent className="p-6 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Lesson Complete! 🎉
          </h3>
          <p className="text-gray-600">
            Great job! You've completed this lesson. Keep practicing to improve your skills.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonDetail;
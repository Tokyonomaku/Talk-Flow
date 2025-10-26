export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "こんにちは", romanization: "konnichiwa" },
      { word: "goodbye", translation: "さようなら", romanization: "sayonara" },
      { word: "good morning", translation: "おはよう", romanization: "ohayou" },
      { word: "good evening", translation: "こんばんは", romanization: "konbanwa" },
      { word: "thank you", translation: "ありがとう", romanization: "arigatou" },
      { word: "excuse me", translation: "すみません", romanization: "sumimasen" },
      { word: "yes", translation: "はい", romanization: "hai" },
      { word: "no", translation: "いいえ", romanization: "iie" },
      { word: "please", translation: "お願いします", romanization: "onegaishimasu" },
      { word: "sorry", translation: "ごめんなさい", romanization: "gomennasai" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "はじめまして", romanization: "hajimemashite" },
      { english: "My name is...", translation: "私の名前は...です", romanization: "Watashi no namae wa... desu" },
      { english: "How are you?", translation: "元気ですか？", romanization: "Genki desu ka?" },
      { english: "I'm fine, thank you", translation: "元気です、ありがとう", romanization: "Genki desu, arigatou" },
      { english: "See you later", translation: "また後で", romanization: "Mata ato de" },
      { english: "Take care", translation: "気をつけて", romanization: "Ki wo tsukete" },
      { english: "Good night", translation: "おやすみなさい", romanization: "Oyasumi nasai" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "In Japanese, the basic word order is Subject-Object-Verb. The particle 'は' (wa) marks the topic of the sentence.",
      examples: [
        { sentence: "私は学生です", romanization: "Watashi wa gakusei desu", english: "I am a student" },
        { sentence: "あなたは先生です", romanization: "Anata wa sensei desu", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Japanese?",
        options: ["こんにちは", "さようなら", "ありがとう", "すみません"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'ありがとう' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Excuse me"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Japanese",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "一", romanization: "ichi" },
      { word: "two", translation: "二", romanization: "ni" },
      { word: "three", translation: "三", romanization: "san" },
      { word: "four", translation: "四", romanization: "yon" },
      { word: "five", translation: "五", romanization: "go" },
      { word: "six", translation: "六", romanization: "roku" },
      { word: "seven", translation: "七", romanization: "nana" },
      { word: "eight", translation: "八", romanization: "hachi" },
      { word: "nine", translation: "九", romanization: "kyuu" },
      { word: "ten", translation: "十", romanization: "juu" }
    ],
    phrases: [
      { english: "How many?", translation: "いくつですか？", romanization: "Ikutsu desu ka?" },
      { english: "One more, please", translation: "もう一つお願いします", romanization: "Mou hitotsu onegaishimasu" },
      { english: "That's too many", translation: "多すぎます", romanization: "Oosugimasu" },
      { english: "Just one", translation: "一つだけ", romanization: "Hitotsu dake" },
      { english: "All of them", translation: "全部", romanization: "Zenbu" }
    ],
    grammar: {
      point: "Counting objects",
      explanation: "Japanese uses different counters for different types of objects. The general counter is 'つ' (tsu).",
      examples: [
        { sentence: "りんごを三つください", romanization: "Ringo wo mittsu kudasai", english: "Please give me three apples" },
        { sentence: "本が五冊あります", romanization: "Hon ga gosatsu arimasu", english: "There are five books" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Japanese?",
        options: ["三", "四", "五", "六"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Japanese",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "お母さん", romanization: "okaasan" },
      { word: "father", translation: "お父さん", romanization: "otousan" },
      { word: "sister", translation: "姉妹", romanization: "shimai" },
      { word: "brother", translation: "兄弟", romanization: "kyoudai" },
      { word: "grandmother", translation: "お祖母さん", romanization: "obaasan" },
      { word: "grandfather", translation: "お祖父さん", romanization: "ojiisan" },
      { word: "aunt", translation: "叔母さん", romanization: "obasan" },
      { word: "uncle", translation: "叔父さん", romanization: "ojisan" },
      { word: "cousin", translation: "いとこ", romanization: "itoko" },
      { word: "child", translation: "子供", romanization: "kodomo" }
    ],
    phrases: [
      { english: "This is my family", translation: "これは私の家族です", romanization: "Kore wa watashi no kazoku desu" },
      { english: "I have two sisters", translation: "姉妹が二人います", romanization: "Shimai ga futari imasu" },
      { english: "My mother is a teacher", translation: "母は先生です", romanization: "Haha wa sensei desu" },
      { english: "How many people in your family?", translation: "家族は何人ですか？", romanization: "Kazoku wa nannin desu ka?" },
      { english: "I live with my parents", translation: "両親と一緒に住んでいます", romanization: "Ryoushin to issho ni sunde imasu" }
    ],
    grammar: {
      point: "Possessive particles",
      explanation: "Use 'の' (no) to show possession. '私の' means 'my' and 'あなたの' means 'your'.",
      examples: [
        { sentence: "私の母", romanization: "Watashi no haha", english: "my mother" },
        { sentence: "あなたの家族", romanization: "Anata no kazoku", english: "your family" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Japanese?",
        options: ["お父さん", "お母さん", "お祖母さん", "お祖父さん"],
        correct: 1
      }
    ]
  },
  {
    id: 4,
    title: "Food and Drinks",
    description: "Essential vocabulary for ordering food and drinks",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "20 minutes",
    vocabulary: [
      { word: "water", translation: "水", romanization: "mizu" },
      { word: "tea", translation: "お茶", romanization: "ocha" },
      { word: "coffee", translation: "コーヒー", romanization: "koohii" },
      { word: "rice", translation: "ご飯", romanization: "gohan" },
      { word: "bread", translation: "パン", romanization: "pan" },
      { word: "meat", translation: "肉", romanization: "niku" },
      { word: "fish", translation: "魚", romanization: "sakana" },
      { word: "vegetables", translation: "野菜", romanization: "yasai" },
      { word: "fruit", translation: "果物", romanization: "kudamono" },
      { word: "soup", translation: "スープ", romanization: "suupu" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "お腹が空きました", romanization: "Onaka ga sukimashita" },
      { english: "I'm thirsty", translation: "喉が渇きました", romanization: "Nodo ga kawakimashita" },
      { english: "What would you like to eat?", translation: "何を食べたいですか？", romanization: "Nani wo tabetai desu ka?" },
      { english: "This is delicious", translation: "美味しいです", romanization: "Oishii desu" },
      { english: "I don't like this", translation: "これは好きではありません", romanization: "Kore wa suki dewa arimasen" },
      { english: "Check, please", translation: "お会計お願いします", romanization: "Okaikei onegaishimasu" }
    ],
    grammar: {
      point: "Polite requests",
      explanation: "Use 'ください' (kudasai) to make polite requests. 'お願いします' (onegaishimasu) is even more polite.",
      examples: [
        { sentence: "水をください", romanization: "Mizu wo kudasai", english: "Water, please" },
        { sentence: "メニューをお願いします", romanization: "Menyuu wo onegaishimasu", english: "Menu, please" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in Japanese?",
        options: ["喉が渇きました", "お腹が空きました", "美味しいです", "水をください"],
        correct: 1
      }
    ]
  },
  {
    id: 5,
    title: "Colors and Descriptions",
    description: "Learn colors and basic descriptive words",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "16 minutes",
    vocabulary: [
      { word: "red", translation: "赤", romanization: "aka" },
      { word: "blue", translation: "青", romanization: "ao" },
      { word: "green", translation: "緑", romanization: "midori" },
      { word: "yellow", translation: "黄色", romanization: "kiiro" },
      { word: "black", translation: "黒", romanization: "kuro" },
      { word: "white", translation: "白", romanization: "shiro" },
      { word: "big", translation: "大きい", romanization: "ookii" },
      { word: "small", translation: "小さい", romanization: "chiisai" },
      { word: "beautiful", translation: "美しい", romanization: "utsukushii" },
      { word: "new", translation: "新しい", romanization: "atarashii" }
    ],
    phrases: [
      { english: "What color is this?", translation: "これは何色ですか？", romanization: "Kore wa nani iro desu ka?" },
      { english: "I like blue", translation: "青が好きです", romanization: "Ao ga suki desu" },
      { english: "This is beautiful", translation: "これは美しいです", romanization: "Kore wa utsukushii desu" },
      { english: "It's too big", translation: "大きすぎます", romanization: "Ookisugimasu" },
      { english: "I want a small one", translation: "小さいのが欲しいです", romanization: "Chiisai no ga hoshii desu" }
    ],
    grammar: {
      point: "Adjective usage",
      explanation: "Japanese adjectives can be used directly before nouns. 'い' adjectives end in 'い' and 'な' adjectives need 'な' before nouns.",
      examples: [
        { sentence: "赤い車", romanization: "Akai kuruma", english: "red car" },
        { sentence: "美しい花", romanization: "Utsukushii hana", english: "beautiful flower" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in Japanese?",
        options: ["赤", "青", "緑", "黄色"],
        correct: 1
      }
    ]
  },
  {
    id: 6,
    title: "Time and Dates",
    description: "Learn to tell time and talk about dates",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "hour", translation: "時", romanization: "ji" },
      { word: "minute", translation: "分", romanization: "fun" },
      { word: "morning", translation: "朝", romanization: "asa" },
      { word: "afternoon", translation: "午後", romanization: "gogo" },
      { word: "evening", translation: "夕方", romanization: "yuugata" },
      { word: "night", translation: "夜", romanization: "yoru" },
      { word: "today", translation: "今日", romanization: "kyou" },
      { word: "tomorrow", translation: "明日", romanization: "ashita" },
      { word: "yesterday", translation: "昨日", romanization: "kinou" },
      { word: "week", translation: "週", romanization: "shuu" }
    ],
    phrases: [
      { english: "What time is it?", translation: "今何時ですか？", romanization: "Ima nanji desu ka?" },
      { english: "It's 3 o'clock", translation: "3時です", romanization: "Sanji desu" },
      { english: "What day is today?", translation: "今日は何曜日ですか？", romanization: "Kyou wa nan youbi desu ka?" },
      { english: "I'm busy tomorrow", translation: "明日は忙しいです", romanization: "Ashita wa isogashii desu" },
      { english: "See you next week", translation: "来週会いましょう", romanization: "Raishuu aimashou" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Time expressions often use the particle 'に' (ni) to indicate when something happens.",
      examples: [
        { sentence: "3時に会いましょう", romanization: "Sanji ni aimashou", english: "Let's meet at 3 o'clock" },
        { sentence: "明日に電話します", romanization: "Ashita ni denwa shimasu", english: "I'll call tomorrow" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in Japanese?",
        options: ["今何時ですか？", "今日は何曜日ですか？", "明日は忙しいです", "来週会いましょう"],
        correct: 0
      }
    ]
  },
  {
    id: 7,
    title: "Shopping and Money",
    description: "Essential phrases for shopping and handling money",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "22 minutes",
    vocabulary: [
      { word: "money", translation: "お金", romanization: "okane" },
      { word: "price", translation: "値段", romanization: "nedan" },
      { word: "expensive", translation: "高い", romanization: "takai" },
      { word: "cheap", translation: "安い", romanization: "yasui" },
      { word: "store", translation: "店", romanization: "mise" },
      { word: "buy", translation: "買う", romanization: "kau" },
      { word: "sell", translation: "売る", romanization: "uru" },
      { word: "discount", translation: "割引", romanization: "waribiki" },
      { word: "receipt", translation: "領収書", romanization: "ryoushuusho" },
      { word: "change", translation: "お釣り", romanization: "otsuri" }
    ],
    phrases: [
      { english: "How much is this?", translation: "これはいくらですか？", romanization: "Kore wa ikura desu ka?" },
      { english: "It's too expensive", translation: "高すぎます", romanization: "Takasugimasu" },
      { english: "Do you have a discount?", translation: "割引はありますか？", romanization: "Waribiki wa arimasu ka?" },
      { english: "I'll take this", translation: "これをください", romanization: "Kore wo kudasai" },
      { english: "Can I pay by card?", translation: "カードで払えますか？", romanization: "Kaado de haraemasu ka?" }
    ],
    grammar: {
      point: "Price expressions",
      explanation: "Prices are expressed with '円' (en) for yen. Large numbers use different counting systems.",
      examples: [
        { sentence: "これは千円です", romanization: "Kore wa sen en desu", english: "This is 1000 yen" },
        { sentence: "安いですね", romanization: "Yasui desu ne", english: "It's cheap, isn't it?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in Japanese?",
        options: ["これはいくらですか？", "高すぎます", "割引はありますか？", "カードで払えますか？"],
        correct: 0
      }
    ]
  },
  {
    id: 8,
    title: "Directions and Transportation",
    description: "Learn to ask for directions and use transportation",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "28 minutes",
    vocabulary: [
      { word: "station", translation: "駅", romanization: "eki" },
      { word: "train", translation: "電車", romanization: "densha" },
      { word: "bus", translation: "バス", romanization: "basu" },
      { word: "taxi", translation: "タクシー", romanization: "takushii" },
      { word: "right", translation: "右", romanization: "migi" },
      { word: "left", translation: "左", romanization: "hidari" },
      { word: "straight", translation: "まっすぐ", romanization: "massugu" },
      { word: "near", translation: "近い", romanization: "chikai" },
      { word: "far", translation: "遠い", romanization: "tooi" },
      { word: "map", translation: "地図", romanization: "chizu" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "駅はどこですか？", romanization: "Eki wa doko desu ka?" },
      { english: "How do I get to...?", translation: "...へはどう行けばいいですか？", romanization: "...e wa dou ikeba ii desu ka?" },
      { english: "Go straight", translation: "まっすぐ行ってください", romanization: "Massugu itte kudasai" },
      { english: "Turn right", translation: "右に曲がってください", romanization: "Migi ni magatte kudasai" },
      { english: "Is it far?", translation: "遠いですか？", romanization: "Tooi desu ka?" }
    ],
    grammar: {
      point: "Direction particles",
      explanation: "Use 'へ' (e) to indicate direction and 'に' (ni) to indicate destination.",
      examples: [
        { sentence: "駅へ行きます", romanization: "Eki e ikimasu", english: "I go to the station" },
        { sentence: "東京に行きます", romanization: "Toukyou ni ikimasu", english: "I go to Tokyo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in Japanese?",
        options: ["駅はどこですか？", "まっすぐ行ってください", "右に曲がってください", "遠いですか？"],
        correct: 0
      }
    ]
  },
  {
    id: 9,
    title: "Weather and Seasons",
    description: "Talk about weather conditions and seasons",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "20 minutes",
    vocabulary: [
      { word: "weather", translation: "天気", romanization: "tenki" },
      { word: "sunny", translation: "晴れ", romanization: "hare" },
      { word: "rainy", translation: "雨", romanization: "ame" },
      { word: "cloudy", translation: "曇り", romanization: "kumori" },
      { word: "snow", translation: "雪", romanization: "yuki" },
      { word: "hot", translation: "暑い", romanization: "atsui" },
      { word: "cold", translation: "寒い", romanization: "samui" },
      { word: "spring", translation: "春", romanization: "haru" },
      { word: "summer", translation: "夏", romanization: "natsu" },
      { word: "autumn", translation: "秋", romanization: "aki" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "天気はどうですか？", romanization: "Tenki wa dou desu ka?" },
      { english: "It's sunny today", translation: "今日は晴れです", romanization: "Kyou wa hare desu" },
      { english: "It's raining", translation: "雨が降っています", romanization: "Ame ga futte imasu" },
      { english: "It's very hot", translation: "とても暑いです", romanization: "Totemo atsui desu" },
      { english: "I like spring", translation: "春が好きです", romanization: "Haru ga suki desu" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Weather conditions use different verb forms. '降る' (furu) means 'to fall' for rain and snow.",
      examples: [
        { sentence: "雨が降っています", romanization: "Ame ga futte imasu", english: "It's raining" },
        { sentence: "雪が降りました", romanization: "Yuki ga furimashita", english: "It snowed" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in Japanese?",
        options: ["雨が降っています", "今日は晴れです", "とても暑いです", "春が好きです"],
        correct: 0
      }
    ]
  },
  {
    id: 10,
    title: "Hobbies and Interests",
    description: "Talk about your hobbies and interests",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "24 minutes",
    vocabulary: [
      { word: "hobby", translation: "趣味", romanization: "shumi" },
      { word: "music", translation: "音楽", romanization: "ongaku" },
      { word: "sports", translation: "スポーツ", romanization: "supootsu" },
      { word: "reading", translation: "読書", romanization: "dokusho" },
      { word: "cooking", translation: "料理", romanization: "ryouri" },
      { word: "traveling", translation: "旅行", romanization: "ryokou" },
      { word: "photography", translation: "写真", romanization: "shashin" },
      { word: "dancing", translation: "ダンス", romanization: "dansu" },
      { word: "swimming", translation: "水泳", romanization: "suiei" },
      { word: "painting", translation: "絵画", romanization: "kaiga" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "趣味は何ですか？", romanization: "Shumi wa nan desu ka?" },
      { english: "I like music", translation: "音楽が好きです", romanization: "Ongaku ga suki desu" },
      { english: "I play tennis", translation: "テニスをします", romanization: "Tenisu wo shimasu" },
      { english: "I enjoy reading", translation: "読書を楽しみます", romanization: "Dokusho wo tanoshimimasu" },
      { english: "What do you do in your free time?", translation: "暇な時は何をしますか？", romanization: "Hima na toki wa nani wo shimasu ka?" }
    ],
    grammar: {
      point: "Activity particles",
      explanation: "Use 'を' (wo) to indicate the object of an action. 'する' (suru) means 'to do'.",
      examples: [
        { sentence: "テニスをします", romanization: "Tenisu wo shimasu", english: "I play tennis" },
        { sentence: "料理をします", romanization: "Ryouri wo shimasu", english: "I cook" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in Japanese?",
        options: ["趣味は何ですか？", "音楽が好きです", "テニスをします", "暇な時は何をしますか？"],
        correct: 0
      }
    ]
  },
  {
    id: 11,
    title: "Work and Occupation",
    description: "Learn vocabulary related to work and professions",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "26 minutes",
    vocabulary: [
      { word: "work", translation: "仕事", romanization: "shigoto" },
      { word: "office", translation: "オフィス", romanization: "ofisu" },
      { word: "company", translation: "会社", romanization: "kaisha" },
      { word: "teacher", translation: "先生", romanization: "sensei" },
      { word: "doctor", translation: "医者", romanization: "isha" },
      { word: "engineer", translation: "エンジニア", romanization: "enjinia" },
      { word: "student", translation: "学生", romanization: "gakusei" },
      { word: "manager", translation: "マネージャー", romanization: "maneejaa" },
      { word: "secretary", translation: "秘書", romanization: "hisho" },
      { word: "retired", translation: "退職", romanization: "taishoku" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "お仕事は何ですか？", romanization: "Oshigoto wa nan desu ka?" },
      { english: "I work at a company", translation: "会社で働いています", romanization: "Kaisha de hataraite imasu" },
      { english: "I'm a teacher", translation: "先生です", romanization: "Sensei desu" },
      { english: "I'm looking for a job", translation: "仕事を探しています", romanization: "Shigoto wo sagashite imasu" },
      { english: "I work from home", translation: "在宅勤務です", romanization: "Zaitaku kinmu desu" }
    ],
    grammar: {
      point: "Work-related particles",
      explanation: "Use 'で' (de) to indicate where you work and 'に' (ni) to indicate where you go to work.",
      examples: [
        { sentence: "会社で働きます", romanization: "Kaisha de hatarakimasu", english: "I work at a company" },
        { sentence: "オフィスに行きます", romanization: "Ofisu ni ikimasu", english: "I go to the office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in Japanese?",
        options: ["お仕事は何ですか？", "会社で働いています", "先生です", "仕事を探しています"],
        correct: 0
      }
    ]
  },
  {
    id: 12,
    title: "Health and Body",
    description: "Learn to talk about health and body parts",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "23 minutes",
    vocabulary: [
      { word: "head", translation: "頭", romanization: "atama" },
      { word: "eye", translation: "目", romanization: "me" },
      { word: "nose", translation: "鼻", romanization: "hana" },
      { word: "mouth", translation: "口", romanization: "kuchi" },
      { word: "hand", translation: "手", romanization: "te" },
      { word: "foot", translation: "足", romanization: "ashi" },
      { word: "sick", translation: "病気", romanization: "byouki" },
      { word: "healthy", translation: "健康", romanization: "kenkou" },
      { word: "hospital", translation: "病院", romanization: "byouin" },
      { word: "medicine", translation: "薬", romanization: "kusuri" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "気分が悪いです", romanization: "Kibun ga warui desu" },
      { english: "I have a headache", translation: "頭が痛いです", romanization: "Atama ga itai desu" },
      { english: "I need to see a doctor", translation: "医者に診てもらう必要があります", romanization: "Isha ni mite morau hitsuyou ga arimasu" },
      { english: "Are you okay?", translation: "大丈夫ですか？", romanization: "Daijoubu desu ka?" },
      { english: "I feel better now", translation: "今は良くなりました", romanization: "Ima wa yoku narimashita" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'が' (ga) to indicate the subject when talking about body parts and feelings.",
      examples: [
        { sentence: "頭が痛いです", romanization: "Atama ga itai desu", english: "My head hurts" },
        { sentence: "お腹が空いています", romanization: "Onaka ga suite imasu", english: "I'm hungry" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in Japanese?",
        options: ["頭が痛いです", "気分が悪いです", "医者に診てもらう必要があります", "大丈夫ですか？"],
        correct: 0
      }
    ]
  },
  {
    id: 13,
    title: "Technology and Internet",
    description: "Modern technology vocabulary and phrases",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "21 minutes",
    vocabulary: [
      { word: "computer", translation: "コンピューター", romanization: "konpyuutaa" },
      { word: "phone", translation: "電話", romanization: "denwa" },
      { word: "internet", translation: "インターネット", romanization: "intaanetto" },
      { word: "email", translation: "メール", romanization: "meeru" },
      { word: "website", translation: "ウェブサイト", romanization: "uebusaito" },
      { word: "password", translation: "パスワード", romanization: "pasuwaado" },
      { word: "download", translation: "ダウンロード", romanization: "daunroodo" },
      { word: "upload", translation: "アップロード", romanization: "appuroodo" },
      { word: "app", translation: "アプリ", romanization: "apuri" },
      { word: "social media", translation: "ソーシャルメディア", romanization: "soosharu media" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "毎日インターネットを使います", romanization: "Mainichi intaanetto wo tsukaimasu" },
      { english: "Can you help me with my computer?", translation: "コンピューターのことで手伝ってもらえますか？", romanization: "Konpyuutaa no koto de tetsudatte moraemasu ka?" },
      { english: "I forgot my password", translation: "パスワードを忘れました", romanization: "Pasuwaado wo wasuremashita" },
      { english: "Do you have WiFi?", translation: "WiFiはありますか？", romanization: "WiFi wa arimasu ka?" },
      { english: "I'll send you an email", translation: "メールを送ります", romanization: "Meeru wo okurimasu" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use '使う' (tsukau) for 'to use' and '送る' (okuru) for 'to send'.",
      examples: [
        { sentence: "コンピューターを使います", romanization: "Konpyuutaa wo tsukaimasu", english: "I use a computer" },
        { sentence: "メールを送ります", romanization: "Meeru wo okurimasu", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in Japanese?",
        options: ["毎日インターネットを使います", "コンピューターのことで手伝ってもらえますか？", "パスワードを忘れました", "WiFiはありますか？"],
        correct: 0
      }
    ]
  },
  {
    id: 14,
    title: "Travel and Tourism",
    description: "Essential phrases for travelers and tourists",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "27 minutes",
    vocabulary: [
      { word: "passport", translation: "パスポート", romanization: "pasupooto" },
      { word: "visa", translation: "ビザ", romanization: "biza" },
      { word: "hotel", translation: "ホテル", romanization: "hoteru" },
      { word: "restaurant", translation: "レストラン", romanization: "resutoran" },
      { word: "tourist", translation: "観光客", romanization: "kankoukyaku" },
      { word: "sightseeing", translation: "観光", romanization: "kankou" },
      { word: "museum", translation: "博物館", romanization: "hakubutsukan" },
      { word: "temple", translation: "寺", romanization: "tera" },
      { word: "shrine", translation: "神社", romanization: "jinja" },
      { word: "garden", translation: "庭園", romanization: "teien" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "観光客です", romanization: "Kankoukyaku desu" },
      { english: "Where is the hotel?", translation: "ホテルはどこですか？", romanization: "Hoteru wa doko desu ka?" },
      { english: "I want to see the temple", translation: "寺を見たいです", romanization: "Tera wo mitai desu" },
      { english: "How much is the entrance fee?", translation: "入場料はいくらですか？", romanization: "Nyuujou-ryou wa ikura desu ka?" },
      { english: "Can you take a photo?", translation: "写真を撮ってもらえますか？", romanization: "Shashin wo totte moraemasu ka?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use '見たい' (mitai) for 'want to see' and '撮る' (toru) for 'to take' photos.",
      examples: [
        { sentence: "寺を見たいです", romanization: "Tera wo mitai desu", english: "I want to see the temple" },
        { sentence: "写真を撮ります", romanization: "Shashin wo torimasu", english: "I take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in Japanese?",
        options: ["観光客です", "ホテルはどこですか？", "寺を見たいです", "入場料はいくらですか？"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about Japanese entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "映画", romanization: "eiga" },
      { word: "music", translation: "音楽", romanization: "ongaku" },
      { word: "concert", translation: "コンサート", romanization: "konsaato" },
      { word: "theater", translation: "劇場", romanization: "gekijou" },
      { word: "museum", translation: "博物館", romanization: "hakubutsukan" },
      { word: "art", translation: "芸術", romanization: "geijutsu" },
      { word: "tradition", translation: "伝統", romanization: "dento" },
      { word: "festival", translation: "祭り", romanization: "matsuri" },
      { word: "kimono", translation: "着物", romanization: "kimono" },
      { word: "tea ceremony", translation: "茶道", romanization: "sadou" }
    ],
    phrases: [
      { english: "I like Japanese movies", translation: "日本の映画が好きです", romanization: "Nihon no eiga ga suki desu" },
      { english: "Let's go to a concert", translation: "コンサートに行きましょう", romanization: "Konsaato ni ikimashou" },
      { english: "I want to see traditional art", translation: "伝統的な芸術を見たいです", romanization: "Dentouteki na geijutsu wo mitai desu" },
      { english: "When is the festival?", translation: "祭りはいつですか？", romanization: "Matsuri wa itsu desu ka?" },
      { english: "I want to try on a kimono", translation: "着物を着てみたいです", romanization: "Kimono wo kite mitai desu" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'てみたい' (te mitai) for 'want to try' and 'てみる' (te miru) for 'to try'.",
      examples: [
        { sentence: "着物を着てみたいです", romanization: "Kimono wo kite mitai desu", english: "I want to try on a kimono" },
        { sentence: "日本料理を食べてみます", romanization: "Nihon ryouri wo tabete mimasu", english: "I'll try Japanese food" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like Japanese movies' in Japanese?",
        options: ["日本の映画が好きです", "コンサートに行きましょう", "伝統的な芸術を見たいです", "祭りはいつですか？"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business Japanese and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "会議", romanization: "kaigi" },
      { word: "presentation", translation: "プレゼンテーション", romanization: "purezenteeshon" },
      { word: "contract", translation: "契約", romanization: "keiyaku" },
      { word: "client", translation: "クライアント", romanization: "kuraianto" },
      { word: "colleague", translation: "同僚", romanization: "douryou" },
      { word: "boss", translation: "上司", romanization: "joushi" },
      { word: "deadline", translation: "締切", romanization: "shimekiri" },
      { word: "project", translation: "プロジェクト", romanization: "purojekuto" },
      { word: "budget", translation: "予算", romanization: "yosan" },
      { word: "report", translation: "報告書", romanization: "houkoku-sho" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "初めまして、よろしくお願いします", romanization: "Hajimemashite, yoroshiku onegaishimasu" },
      { english: "Thank you for your time", translation: "お時間をいただき、ありがとうございます", romanization: "Ojikan wo itadaki, arigatou gozaimasu" },
      { english: "I look forward to working with you", translation: "ご一緒にお仕事ができることを楽しみにしています", romanization: "Goissho ni oshigoto ga dekiru koto wo tanoshimi ni shite imasu" },
      { english: "Could you please...?", translation: "...していただけますか？", romanization: "...shite itadakemasu ka?" },
      { english: "I apologize for the inconvenience", translation: "ご迷惑をおかけして申し訳ありません", romanization: "Gomeiwaku wo okakeshite moushiwake arimasen" }
    ],
    grammar: {
      point: "Honorific language",
      explanation: "Business Japanese uses honorific forms like 'お' (o) and 'ご' (go) prefixes, and 'いただく' (itadaku) for receiving.",
      examples: [
        { sentence: "お時間をいただき", romanization: "Ojikan wo itadaki", english: "Thank you for your time" },
        { sentence: "ご連絡いたします", romanization: "Gorenraku itashimasu", english: "I will contact you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in Japanese?",
        options: ["初めまして、よろしくお願いします", "お時間をいただき、ありがとうございます", "ご一緒にお仕事ができることを楽しみにしています", "ご迷惑をおかけして申し訳ありません"],
        correct: 0
      }
    ]
  },
  {
    id: 17,
    title: "Advanced Grammar Structures",
    description: "Complex sentence structures and advanced grammar patterns",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "35 minutes",
    vocabulary: [
      { word: "although", translation: "けれども", romanization: "keredomo" },
      { word: "however", translation: "しかし", romanization: "shikashi" },
      { word: "therefore", translation: "したがって", romanization: "shitagatte" },
      { word: "moreover", translation: "さらに", romanization: "sara ni" },
      { word: "nevertheless", translation: "それにもかかわらず", romanization: "sore ni mo kakawarazu" },
      { word: "consequently", translation: "その結果", romanization: "sono kekka" },
      { word: "meanwhile", translation: "その間に", romanization: "sono aida ni" },
      { word: "furthermore", translation: "さらに", romanization: "sara ni" },
      { word: "likewise", translation: "同様に", romanization: "douyou ni" },
      { word: "otherwise", translation: "そうでなければ", romanization: "sou de nakereba" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "難しいけれども、やってみます", romanization: "Muzukashii keredomo, yatte mimasu" },
      { english: "However, I think it's possible", translation: "しかし、可能だと思います", romanization: "Shikashi, kanou da to omoimasu" },
      { english: "Therefore, we should continue", translation: "したがって、続けるべきです", romanization: "Shitagatte, tsuzukeru beki desu" },
      { english: "Moreover, it's important", translation: "さらに、重要です", romanization: "Sara ni, juuyou desu" },
      { english: "Nevertheless, I believe", translation: "それにもかかわらず、信じています", romanization: "Sore ni mo kakawarazu, shinjite imasu" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced Japanese uses complex conjunctions to connect ideas. 'けれども' (keredomo) means 'although' and 'したがって' (shitagatte) means 'therefore'.",
      examples: [
        { sentence: "難しいけれども、やってみます", romanization: "Muzukashii keredomo, yatte mimasu", english: "Although it's difficult, I'll try" },
        { sentence: "したがって、続けます", romanization: "Shitagatte, tsuzukemasu", english: "Therefore, I'll continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in Japanese?",
        options: ["難しいけれども、やってみます", "しかし、可能だと思います", "したがって、続けるべきです", "さらに、重要です"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common Japanese idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "慣用句", romanization: "kan'youku" },
      { word: "expression", translation: "表現", romanization: "hyougen" },
      { word: "proverb", translation: "ことわざ", romanization: "kotowaza" },
      { word: "metaphor", translation: "比喩", romanization: "hiyu" },
      { word: "saying", translation: "言い回し", romanization: "iimawashi" },
      { word: "cultural", translation: "文化的", romanization: "bunkateki" },
      { word: "traditional", translation: "伝統的", romanization: "dentouteki" },
      { word: "modern", translation: "現代的", romanization: "gendaiteki" },
      { word: "colloquial", translation: "口語的", romanization: "kougoteki" },
      { word: "formal", translation: "形式的", romanization: "keishikiteki" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "朝飯前です", romanization: "Asameshi mae desu" },
      { english: "Don't count your chickens", translation: "取らぬ狸の皮算用", romanization: "Toranu tanuki no kawazan'you" },
      { english: "The early bird catches the worm", translation: "早起きは三文の徳", romanization: "Hayaoki wa sanmon no toku" },
      { english: "Actions speak louder than words", translation: "口で言うより手で示せ", romanization: "Kuchi de iu yori te de shimese" },
      { english: "Better late than never", translation: "遅くてもしないよりまし", romanization: "Osokute mo shinai yori mashi" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "Japanese idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "朝飯前です", romanization: "Asameshi mae desu", english: "It's a piece of cake (literally: before breakfast)" },
        { sentence: "早起きは三文の徳", romanization: "Hayaoki wa sanmon no toku", english: "Early rising is worth three coins" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in Japanese?",
        options: ["朝飯前です", "取らぬ狸の皮算用", "早起きは三文の徳", "口で言うより手で示せ"],
        correct: 0
      }
    ]
  },
  {
    id: 19,
    title: "Conversation Practice",
    description: "Advanced conversation skills and natural dialogue",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "40 minutes",
    vocabulary: [
      { word: "conversation", translation: "会話", romanization: "kaiwa" },
      { word: "dialogue", translation: "対話", romanization: "taiwa" },
      { word: "discussion", translation: "議論", romanization: "giron" },
      { word: "debate", translation: "討論", romanization: "touron" },
      { word: "negotiation", translation: "交渉", romanization: "koushou" },
      { word: "persuasion", translation: "説得", romanization: "settoku" },
      { word: "agreement", translation: "合意", romanization: "goui" },
      { word: "disagreement", translation: "不同意", romanization: "fudoui" },
      { word: "compromise", translation: "妥協", romanization: "dakyou" },
      { word: "consensus", translation: "合意", romanization: "goui" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "...についてどう思いますか？", romanization: "...ni tsuite dou omoimasu ka?" },
      { english: "I agree with you", translation: "あなたの意見に賛成です", romanization: "Anata no iken ni sansei desu" },
      { english: "I have a different opinion", translation: "異なる意見があります", romanization: "Kotonaru iken ga arimasu" },
      { english: "Let's discuss this further", translation: "さらに話し合いましょう", romanization: "Sara ni hanashiai mashou" },
      { english: "I understand your point", translation: "あなたのポイントを理解しました", romanization: "Anata no point wo rikai shimashita" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "...についてどう思いますか？", romanization: "...ni tsuite dou omoimasu ka?", english: "What do you think about...?" },
        { sentence: "あなたの意見に賛成です", romanization: "Anata no iken ni sansei desu", english: "I agree with you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in Japanese?",
        options: ["...についてどう思いますか？", "あなたの意見に賛成です", "異なる意見があります", "さらに話し合いましょう"],
        correct: 0
      }
    ]
  }
];
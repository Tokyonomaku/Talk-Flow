export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "привет", romanization: "pri-VYET" },
      { word: "goodbye", translation: "до свидания", romanization: "da svee-DAH-nya" },
      { word: "good morning", translation: "доброе утро", romanization: "DOB-ra-ye OO-tro" },
      { word: "good afternoon", translation: "добрый день", romanization: "DOB-ryy dyen'" },
      { word: "good evening", translation: "добрый вечер", romanization: "DOB-ryy VYE-cher" },
      { word: "thank you", translation: "спасибо", romanization: "spa-SEE-ba" },
      { word: "please", translation: "пожалуйста", romanization: "pa-ZHA-luys-ta" },
      { word: "excuse me", translation: "извините", romanization: "iz-vee-NEE-te" },
      { word: "yes", translation: "да", romanization: "da" },
      { word: "no", translation: "нет", romanization: "nyet" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "приятно познакомиться", romanization: "pri-YAT-na pa-znah-KO-meet-sya" },
      { english: "My name is...", translation: "меня зовут...", romanization: "me-NYA za-VOOT..." },
      { english: "How are you?", translation: "как дела?", romanization: "kak dee-LA?" },
      { english: "I'm fine, thank you", translation: "хорошо, спасибо", romanization: "ha-ra-SHO, spa-SEE-ba" },
      { english: "See you later", translation: "до встречи", romanization: "da VSTRE-chi" },
      { english: "Take care", translation: "береги себя", romanization: "be-re-GEE se-BYA" },
      { english: "Good night", translation: "спокойной ночи", romanization: "spa-KOY-nay NO-chi" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "Russian follows Subject-Verb-Object order. The verb 'быть' (to be) is often omitted in present tense.",
      examples: [
        { sentence: "Я студент", romanization: "ya stoo-DENT", english: "I am a student" },
        { sentence: "Ты учитель", romanization: "ty oo-CHEE-tel'", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Russian?",
        options: ["привет", "до свидания", "спасибо", "пожалуйста"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'спасибо' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Russian",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "один", romanization: "a-DEEN" },
      { word: "two", translation: "два", romanization: "dva" },
      { word: "three", translation: "три", romanization: "tree" },
      { word: "four", translation: "четыре", romanization: "che-TY-re" },
      { word: "five", translation: "пять", romanization: "pyat'" },
      { word: "six", translation: "шесть", romanization: "shest'" },
      { word: "seven", translation: "семь", romanization: "sem'" },
      { word: "eight", translation: "восемь", romanization: "VO-sem'" },
      { word: "nine", translation: "девять", romanization: "DE-vyat'" },
      { word: "ten", translation: "десять", romanization: "DE-syat'" }
    ],
    phrases: [
      { english: "How many?", translation: "сколько?", romanization: "SKOL'-ka?" },
      { english: "One more, please", translation: "ещё один, пожалуйста", romanization: "ye-SHCHO a-DEEN, pa-ZHA-luys-ta" },
      { english: "That's too many", translation: "слишком много", romanization: "SLISH-kam MNO-ga" },
      { english: "Just one", translation: "только один", romanization: "TOL'-ka a-DEEN" },
      { english: "All of them", translation: "все", romanization: "vse" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Numbers in Russian change form based on gender. 'Один' (one) becomes 'одна' (feminine) and 'одно' (neuter).",
      examples: [
        { sentence: "одно яблоко", romanization: "a-DNO YAB-la-ka", english: "one apple" },
        { sentence: "одна книга", romanization: "ad-NA KNEE-ga", english: "one book" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Russian?",
        options: ["три", "четыре", "пять", "шесть"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Russian",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "мама", romanization: "MA-ma" },
      { word: "father", translation: "папа", romanization: "PA-pa" },
      { word: "sister", translation: "сестра", romanization: "ses-TRA" },
      { word: "brother", translation: "брат", romanization: "brat" },
      { word: "grandmother", translation: "бабушка", romanization: "BA-bush-ka" },
      { word: "grandfather", translation: "дедушка", romanization: "DE-dush-ka" },
      { word: "aunt", translation: "тётя", romanization: "TYO-tya" },
      { word: "uncle", translation: "дядя", romanization: "DYA-dya" },
      { word: "cousin", translation: "двоюродный брат/сестра", romanization: "dva-YU-rad-nyy brat/ses-TRA" },
      { word: "child", translation: "ребёнок", romanization: "re-BYO-nak" }
    ],
    phrases: [
      { english: "This is my family", translation: "это моя семья", romanization: "E-ta ma-YA se-MYA" },
      { english: "I have two sisters", translation: "у меня две сестры", romanization: "oo me-NYA dve SES-try" },
      { english: "My mother is a teacher", translation: "моя мама учитель", romanization: "ma-YA MA-ma oo-CHEE-tel'" },
      { english: "How many people in your family?", translation: "сколько человек в вашей семье?", romanization: "SKOL'-ka che-lo-VEK v VA-shey se-MYE?" },
      { english: "I live with my parents", translation: "я живу с родителями", romanization: "ya zhi-VOO s ra-DEE-te-lya-mi" }
    ],
    grammar: {
      point: "Possessive adjectives",
      explanation: "Use 'мой' (my), 'твой' (your), 'его' (his/her) before family members. These must agree with the gender of the noun.",
      examples: [
        { sentence: "моя мама", romanization: "ma-YA MA-ma", english: "my mother" },
        { sentence: "мой папа", romanization: "moy PA-pa", english: "my father" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Russian?",
        options: ["папа", "мама", "бабушка", "тётя"],
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
      { word: "water", translation: "вода", romanization: "va-DA" },
      { word: "tea", translation: "чай", romanization: "chay" },
      { word: "coffee", translation: "кофе", romanization: "KO-fe" },
      { word: "rice", translation: "рис", romanization: "rees" },
      { word: "bread", translation: "хлеб", romanization: "khleb" },
      { word: "meat", translation: "мясо", romanization: "MYA-sa" },
      { word: "fish", translation: "рыба", romanization: "RY-ba" },
      { word: "vegetables", translation: "овощи", romanization: "a-VO-schi" },
      { word: "fruit", translation: "фрукты", romanization: "FROOK-ty" },
      { word: "soup", translation: "суп", romanization: "soop" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "я голоден", romanization: "ya ga-LO-den" },
      { english: "I'm thirsty", translation: "я хочу пить", romanization: "ya kha-CHOO peet'" },
      { english: "What would you like to eat?", translation: "что вы хотите съесть?", romanization: "shto vy kha-TEE-te syest'?" },
      { english: "This is delicious", translation: "это вкусно", romanization: "E-ta VOOS-na" },
      { english: "I don't like this", translation: "мне это не нравится", romanization: "mne E-ta ne NRA-vit-sya" },
      { english: "Check, please", translation: "счёт, пожалуйста", romanization: "schyot, pa-ZHA-luys-ta" }
    ],
    grammar: {
      point: "Like expressions",
      explanation: "Use 'нравиться' (to like) for 'to like' and 'не нравиться' (not to like) for 'don't like'.",
      examples: [
        { sentence: "мне нравится кофе", romanization: "mne NRA-vit-sya KO-fe", english: "I like coffee" },
        { sentence: "мне не нравится чай", romanization: "mne ne NRA-vit-sya chay", english: "I don't like tea" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in Russian?",
        options: ["я хочу пить", "я голоден", "это вкусно", "мне это не нравится"],
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
      { word: "red", translation: "красный", romanization: "KRAS-nyy" },
      { word: "blue", translation: "синий", romanization: "SEE-nee" },
      { word: "green", translation: "зелёный", romanization: "ze-LYO-nyy" },
      { word: "yellow", translation: "жёлтый", romanization: "ZHYOL-tyy" },
      { word: "black", translation: "чёрный", romanization: "CHYOR-nyy" },
      { word: "white", translation: "белый", romanization: "BYE-lyy" },
      { word: "big", translation: "большой", romanization: "bal'-SHOY" },
      { word: "small", translation: "маленький", romanization: "MA-len'-kee" },
      { word: "beautiful", translation: "красивый", romanization: "kra-SEE-vyy" },
      { word: "new", translation: "новый", romanization: "NO-vyy" }
    ],
    phrases: [
      { english: "What color is this?", translation: "какого цвета это?", romanization: "ka-KO-va TSVE-ta E-ta?" },
      { english: "I like blue", translation: "мне нравится синий", romanization: "mne NRA-vit-sya SEE-nee" },
      { english: "This is beautiful", translation: "это красиво", romanization: "E-ta kra-SEE-va" },
      { english: "It's too big", translation: "слишком большой", romanization: "SLISH-kam bal'-SHOY" },
      { english: "I want a small one", translation: "я хочу маленький", romanization: "ya kha-CHOO MA-len'-kee" }
    ],
    grammar: {
      point: "Adjective agreement",
      explanation: "Adjectives must agree with the gender and number of the noun they describe. They change endings accordingly.",
      examples: [
        { sentence: "красная машина", romanization: "KRAS-na-ya ma-SHEE-na", english: "red car" },
        { sentence: "красивый дом", romanization: "kra-SEE-vyy dom", english: "beautiful house" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in Russian?",
        options: ["красный", "синий", "зелёный", "жёлтый"],
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
      { word: "hour", translation: "час", romanization: "chas" },
      { word: "minute", translation: "минута", romanization: "mee-NOO-ta" },
      { word: "morning", translation: "утро", romanization: "OO-tro" },
      { word: "afternoon", translation: "день", romanization: "dyen'" },
      { word: "evening", translation: "вечер", romanization: "VYE-cher" },
      { word: "night", translation: "ночь", romanization: "noch'" },
      { word: "today", translation: "сегодня", romanization: "se-VOD-nya" },
      { word: "tomorrow", translation: "завтра", romanization: "ZAV-tra" },
      { word: "yesterday", translation: "вчера", romanization: "vche-RA" },
      { word: "week", translation: "неделя", romanization: "ne-DE-lya" }
    ],
    phrases: [
      { english: "What time is it?", translation: "который час?", romanization: "ka-TO-ryy chas?" },
      { english: "It's 3 o'clock", translation: "три часа", romanization: "tree cha-SA" },
      { english: "What day is today?", translation: "какой сегодня день?", romanization: "ka-KOY se-VOD-nya dyen'?" },
      { english: "I'm busy tomorrow", translation: "завтра я занят", romanization: "ZAV-tra ya za-NYAT" },
      { english: "See you next week", translation: "до встречи на следующей неделе", romanization: "da VSTRE-chi na sle-DU-yu-schey ne-DE-le" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use 'в' (at) for specific times and 'который час' (what time) for asking the time.",
      examples: [
        { sentence: "в три часа", romanization: "v tree cha-SA", english: "At three o'clock" },
        { sentence: "сейчас полдень", romanization: "se-YCHAS pol-DYEN'", english: "It's noon now" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in Russian?",
        options: ["который час?", "три часа", "какой сегодня день?", "завтра я занят"],
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
      { word: "money", translation: "деньги", romanization: "DYEN'-gi" },
      { word: "price", translation: "цена", romanization: "tse-NA" },
      { word: "expensive", translation: "дорогой", romanization: "da-ra-GOY" },
      { word: "cheap", translation: "дешёвый", romanization: "de-SHYO-vyy" },
      { word: "store", translation: "магазин", romanization: "ma-ga-ZEEN" },
      { word: "buy", translation: "покупать", romanization: "pa-koo-PAT'" },
      { word: "sell", translation: "продавать", romanization: "pra-da-VAT'" },
      { word: "discount", translation: "скидка", romanization: "SKEED-ka" },
      { word: "receipt", translation: "чек", romanization: "chek" },
      { word: "change", translation: "сдача", romanization: "SDA-cha" }
    ],
    phrases: [
      { english: "How much is this?", translation: "сколько это стоит?", romanization: "SKOL'-ka E-ta STO-eet?" },
      { english: "It's too expensive", translation: "слишком дорого", romanization: "SLISH-kam DA-ra-ga" },
      { english: "Do you have a discount?", translation: "есть скидка?", romanization: "yest' SKEED-ka?" },
      { english: "I'll take this", translation: "я возьму это", romanization: "ya vaz'-MOO E-ta" },
      { english: "Can I pay by card?", translation: "можно заплатить картой?", romanization: "MOZH-na za-pla-TEET' KAR-toy?" }
    ],
    grammar: {
      point: "Cost expressions",
      explanation: "Use 'стоить' (to cost) for prices and 'сколько' (how much) for asking about cost.",
      examples: [
        { sentence: "это стоит десять рублей", romanization: "E-ta STO-eet DE-syat' roo-BLEI", english: "This costs ten rubles" },
        { sentence: "сколько это стоит?", romanization: "SKOL'-ka E-ta STO-eet?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in Russian?",
        options: ["сколько это стоит?", "слишком дорого", "есть скидка?", "я возьму это"],
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
      { word: "station", translation: "станция", romanization: "STAN-tsi-ya" },
      { word: "train", translation: "поезд", romanization: "PO-yezd" },
      { word: "bus", translation: "автобус", romanization: "av-TO-boos" },
      { word: "taxi", translation: "такси", romanization: "TAK-see" },
      { word: "right", translation: "направо", romanization: "na-PRA-va" },
      { word: "left", translation: "налево", romanization: "na-LE-va" },
      { word: "straight", translation: "прямо", romanization: "PRYA-ma" },
      { word: "near", translation: "близко", romanization: "BLEES-ka" },
      { word: "far", translation: "далеко", romanization: "da-le-KO" },
      { word: "map", translation: "карта", romanization: "KAR-ta" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "где станция?", romanization: "gde STAN-tsi-ya?" },
      { english: "How do I get to...?", translation: "как добраться до...?", romanization: "kak da-bra-TSYA da...?" },
      { english: "Go straight", translation: "идите прямо", romanization: "ee-DEE-te PRYA-ma" },
      { english: "Turn right", translation: "поверните направо", romanization: "pa-ver-NEE-te na-PRA-va" },
      { english: "Is it far?", translation: "это далеко?", romanization: "E-ta da-le-KO?" }
    ],
    grammar: {
      point: "Direction prepositions",
      explanation: "Use 'до' (to) for destination, 'на' (on) for transportation, and 'от' (from) for origin.",
      examples: [
        { sentence: "я иду до станции", romanization: "ya ee-DOO da STAN-tsi-i", english: "I go to the station" },
        { sentence: "я еду на поезде", romanization: "ya ye-DOO na PO-yez-de", english: "I go by train" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in Russian?",
        options: ["где станция?", "идите прямо", "поверните направо", "это далеко?"],
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
      { word: "weather", translation: "погода", romanization: "pa-GO-da" },
      { word: "sunny", translation: "солнечно", romanization: "SOL-nech-na" },
      { word: "rainy", translation: "дождливо", romanization: "dazh-DLEE-va" },
      { word: "cloudy", translation: "облачно", romanization: "ab-LACH-na" },
      { word: "snow", translation: "снег", romanization: "snyeg" },
      { word: "hot", translation: "жарко", romanization: "ZHAR-ka" },
      { word: "cold", translation: "холодно", romanization: "kha-LOD-na" },
      { word: "spring", translation: "весна", romanization: "ves-NA" },
      { word: "summer", translation: "лето", romanization: "LE-ta" },
      { word: "autumn", translation: "осень", romanization: "O-sen'" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "какая погода?", romanization: "ka-KA-ya pa-GO-da?" },
      { english: "It's sunny today", translation: "сегодня солнечно", romanization: "se-VOD-nya SOL-nech-na" },
      { english: "It's raining", translation: "идёт дождь", romanization: "ee-DYOT dozhd'" },
      { english: "It's very hot", translation: "очень жарко", romanization: "O-chen' ZHAR-ka" },
      { english: "I like spring", translation: "мне нравится весна", romanization: "mne NRA-vit-sya ves-NA" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use 'идёт' (it's going) for weather conditions like 'идёт дождь' (it's raining) and 'солнечно' (sunny).",
      examples: [
        { sentence: "солнечно", romanization: "SOL-nech-na", english: "It's sunny" },
        { sentence: "идёт дождь", romanization: "ee-DYOT dozhd'", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in Russian?",
        options: ["идёт дождь", "сегодня солнечно", "очень жарко", "мне нравится весна"],
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
      { word: "hobby", translation: "хобби", romanization: "HO-bee" },
      { word: "music", translation: "музыка", romanization: "MOO-zy-ka" },
      { word: "sports", translation: "спорт", romanization: "sport" },
      { word: "reading", translation: "чтение", romanization: "chte-NI-ye" },
      { word: "cooking", translation: "готовка", romanization: "ga-TOV-ka" },
      { word: "traveling", translation: "путешествие", romanization: "poo-te-SHE-stvi-ye" },
      { word: "photography", translation: "фотография", romanization: "fa-ta-GRA-fi-ya" },
      { word: "dancing", translation: "танцы", romanization: "TAN-tsy" },
      { word: "swimming", translation: "плавание", romanization: "PLA-va-ni-ye" },
      { word: "painting", translation: "живопись", romanization: "zhi-VO-pees'" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "какое у вас хобби?", romanization: "ka-KO-ye oo vas HO-bee?" },
      { english: "I like music", translation: "мне нравится музыка", romanization: "mne NRA-vit-sya MOO-zy-ka" },
      { english: "I play tennis", translation: "я играю в теннис", romanization: "ya ee-GRA-yu v TEN-nees" },
      { english: "I enjoy reading", translation: "мне нравится читать", romanization: "mne NRA-vit-sya chi-TAT'" },
      { english: "What do you do in your free time?", translation: "что вы делаете в свободное время?", romanization: "shto vy de-LA-ye-te v sva-BOD-na-ye VRE-mya?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use 'играть' (to play) for sports and games, 'играть на' (to play) for musical instruments, and 'заниматься' (to do) for activities.",
      examples: [
        { sentence: "я играю в футбол", romanization: "ya ee-GRA-yu v foot-BOL", english: "I play soccer" },
        { sentence: "я играю на пианино", romanization: "ya ee-GRA-yu na pi-a-NEE-na", english: "I play the piano" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in Russian?",
        options: ["какое у вас хобби?", "мне нравится музыка", "я играю в теннис", "что вы делаете в свободное время?"],
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
      { word: "work", translation: "работа", romanization: "ra-BO-ta" },
      { word: "office", translation: "офис", romanization: "O-fees" },
      { word: "company", translation: "компания", romanization: "kam-PA-ni-ya" },
      { word: "teacher", translation: "учитель", romanization: "oo-CHEE-tel'" },
      { word: "doctor", translation: "врач", romanization: "vrach" },
      { word: "engineer", translation: "инженер", romanization: "een-zhe-NER" },
      { word: "student", translation: "студент", romanization: "stoo-DENT" },
      { word: "manager", translation: "менеджер", romanization: "me-NED-zher" },
      { word: "secretary", translation: "секретарь", romanization: "se-kre-TAR'" },
      { word: "retired", translation: "на пенсии", romanization: "na PEN-si-i" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "кем вы работаете?", romanization: "kem vy ra-BO-ta-ye-te?" },
      { english: "I work at a company", translation: "я работаю в компании", romanization: "ya ra-BO-ta-yu v kam-PA-ni-i" },
      { english: "I'm a teacher", translation: "я учитель", romanization: "ya oo-CHEE-tel'" },
      { english: "I'm looking for a job", translation: "я ищу работу", romanization: "ya ee-SHOO ra-BO-tu" },
      { english: "I work from home", translation: "я работаю из дома", romanization: "ya ra-BO-ta-yu eez DO-ma" }
    ],
    grammar: {
      point: "Work-related prepositions",
      explanation: "Use 'в' (in) for workplace, 'кем' (as what) for profession, and 'для' (for) for employer.",
      examples: [
        { sentence: "я работаю в офисе", romanization: "ya ra-BO-ta-yu v O-fee-se", english: "I work in an office" },
        { sentence: "я работаю для компании", romanization: "ya ra-BO-ta-yu dlya kam-PA-ni-i", english: "I work for a company" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in Russian?",
        options: ["кем вы работаете?", "я работаю в компании", "я учитель", "я ищу работу"],
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
      { word: "head", translation: "голова", romanization: "ga-LO-va" },
      { word: "eye", translation: "глаз", romanization: "glaz" },
      { word: "nose", translation: "нос", romanization: "nos" },
      { word: "mouth", translation: "рот", romanization: "rot" },
      { word: "hand", translation: "рука", romanization: "roo-KA" },
      { word: "foot", translation: "нога", romanization: "na-GA" },
      { word: "sick", translation: "больной", romanization: "bal'-NOY" },
      { word: "healthy", translation: "здоровый", romanization: "za-DO-ro-vyy" },
      { word: "hospital", translation: "больница", romanization: "bal'-NEE-tsa" },
      { word: "medicine", translation: "лекарство", romanization: "le-KAR-stva" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "мне плохо", romanization: "mne PLO-kha" },
      { english: "I have a headache", translation: "у меня болит голова", romanization: "oo me-NYA ba-LEET ga-LO-va" },
      { english: "I need to see a doctor", translation: "мне нужно к врачу", romanization: "mne NOOZH-na k vra-CHOO" },
      { english: "Are you okay?", translation: "с вами всё в порядке?", romanization: "s VA-mi vsyo v pa-RYAD-ke?" },
      { english: "I feel better now", translation: "мне сейчас лучше", romanization: "mne se-YCHAS LOOCH-she" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'болит' (hurts) for body aches and 'у меня' (I have) for possession.",
      examples: [
        { sentence: "у меня болит голова", romanization: "oo me-NYA ba-LEET ga-LO-va", english: "I have a headache" },
        { sentence: "у меня болит спина", romanization: "oo me-NYA ba-LEET spee-NA", english: "My back hurts" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in Russian?",
        options: ["у меня болит голова", "мне плохо", "мне нужно к врачу", "с вами всё в порядке?"],
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
      { word: "computer", translation: "компьютер", romanization: "kam-PYOO-ter" },
      { word: "phone", translation: "телефон", romanization: "te-le-FON" },
      { word: "internet", translation: "интернет", romanization: "een-ter-NET" },
      { word: "email", translation: "электронная почта", romanization: "el-ek-TRON-na-ya POCH-ta" },
      { word: "website", translation: "веб-сайт", romanization: "veb-sayt" },
      { word: "password", translation: "пароль", romanization: "pa-ROL'" },
      { word: "download", translation: "скачивать", romanization: "ska-CHEE-vat'" },
      { word: "upload", translation: "загружать", romanization: "za-groo-ZHAT'" },
      { word: "app", translation: "приложение", romanization: "pre-lo-ZHE-ni-ye" },
      { word: "social media", translation: "социальные сети", romanization: "sa-tsi-AL'-ny-ye SE-ti" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "я каждый день пользуюсь интернетом", romanization: "ya KAZH-dyy dyen' pol'-ZU-yoos' een-ter-NE-tam" },
      { english: "Can you help me with my computer?", translation: "можете помочь с компьютером?", romanization: "MO-zhe-te pa-MOCH' s kam-PYOO-te-ram?" },
      { english: "I forgot my password", translation: "я забыл пароль", romanization: "ya za-BYEL pa-ROL'" },
      { english: "Do you have WiFi?", translation: "есть ли WiFi?", romanization: "yest' lee WiFi?" },
      { english: "I'll send you an email", translation: "я отправлю вам письмо", romanization: "ya at-PRAV-lyu vam pees'-MO" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use 'пользоваться' (to use) for technology, 'отправлять' (to send) for emails, and 'скачивать' (to download) for files.",
      examples: [
        { sentence: "я пользуюсь компьютером", romanization: "ya pol'-ZU-yoos' kam-PYOO-te-ram", english: "I use a computer" },
        { sentence: "я отправляю письмо", romanization: "ya at-PRAV-lya-yu pees'-MO", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in Russian?",
        options: ["я каждый день пользуюсь интернетом", "можете помочь с компьютером?", "я забыл пароль", "есть ли WiFi?"],
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
      { word: "passport", translation: "паспорт", romanization: "PAS-port" },
      { word: "visa", translation: "виза", romanization: "VEE-za" },
      { word: "hotel", translation: "отель", romanization: "a-TEL'" },
      { word: "restaurant", translation: "ресторан", romanization: "res-ta-RAN" },
      { word: "tourist", translation: "турист", romanization: "too-REEST" },
      { word: "sightseeing", translation: "осмотр достопримечательностей", romanization: "as-MOTR das-ta-pree-mee-CHAT'-el'-na-stey" },
      { word: "museum", translation: "музей", romanization: "moo-ZEY" },
      { word: "church", translation: "церковь", romanization: "TSER-kav'" },
      { word: "palace", translation: "дворец", romanization: "dva-RETS" },
      { word: "garden", translation: "сад", romanization: "sad" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "я турист", romanization: "ya too-REEST" },
      { english: "Where is the hotel?", translation: "где отель?", romanization: "gde a-TEL'?" },
      { english: "I want to see the museum", translation: "я хочу посмотреть музей", romanization: "ya kha-CHOO pa-smat-REET' moo-ZEY" },
      { english: "How much is the entrance fee?", translation: "сколько стоит вход?", romanization: "SKOL'-ka STO-eet vkhod?" },
      { english: "Can you take a photo?", translation: "можете сфотографировать?", romanization: "MO-zhe-te sfa-ta-gra-FEE-ra-vat'?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use 'хочу посмотреть' (want to see) for sightseeing and 'сфотографировать' (to photograph) for photos.",
      examples: [
        { sentence: "я хочу посмотреть музей", romanization: "ya kha-CHOO pa-smat-REET' moo-ZEY", english: "I want to see the museum" },
        { sentence: "сфотографировать", romanization: "sfa-ta-gra-FEE-ra-vat'", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in Russian?",
        options: ["я турист", "где отель?", "я хочу посмотреть музей", "сколько стоит вход?"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about Russian entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "фильм", romanization: "feel'm" },
      { word: "music", translation: "музыка", romanization: "MOO-zy-ka" },
      { word: "concert", translation: "концерт", romanization: "kan-TSERT" },
      { word: "theater", translation: "театр", romanization: "te-A-tr" },
      { word: "museum", translation: "музей", romanization: "moo-ZEY" },
      { word: "art", translation: "искусство", romanization: "ees-KOOS-tva" },
      { word: "tradition", translation: "традиция", romanization: "tra-DEE-tsi-ya" },
      { word: "festival", translation: "фестиваль", romanization: "fes-tee-VAL'" },
      { word: "dance", translation: "танец", romanization: "TA-nets" },
      { word: "opera", translation: "опера", romanization: "O-pe-ra" }
    ],
    phrases: [
      { english: "I like Russian movies", translation: "мне нравятся русские фильмы", romanization: "mne NRA-vya-tsya ROOS-ski-ye FEEL'-my" },
      { english: "Let's go to a concert", translation: "пойдём на концерт", romanization: "pay-DYOM na kan-TSERT" },
      { english: "I want to see traditional art", translation: "я хочу посмотреть традиционное искусство", romanization: "ya kha-CHOO pa-smat-REET' tra-dee-tsi-ON-na-ye ees-KOOS-tva" },
      { english: "When is the festival?", translation: "когда фестиваль?", romanization: "kag-DA fes-tee-VAL'?" },
      { english: "I want to learn Russian", translation: "я хочу выучить русский", romanization: "ya kha-CHOO VY-oo-cheet' ROOS-skee" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'выучить' (to learn) for skills and 'учить' (to teach) for sharing knowledge.",
      examples: [
        { sentence: "выучить русский", romanization: "VY-oo-cheet' ROOS-skee", english: "Learn Russian" },
        { sentence: "учить английский", romanization: "oo-CHEET' an-GLEE-skee", english: "Teach English" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like Russian movies' in Russian?",
        options: ["мне нравятся русские фильмы", "пойдём на концерт", "я хочу посмотреть традиционное искусство", "когда фестиваль?"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business Russian and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "встреча", romanization: "vstree-CHA" },
      { word: "presentation", translation: "презентация", romanization: "pre-zen-TA-tsi-ya" },
      { word: "contract", translation: "контракт", romanization: "kan-TRAKT" },
      { word: "client", translation: "клиент", romanization: "klee-ENT" },
      { word: "colleague", translation: "коллега", romanization: "ka-LE-ga" },
      { word: "boss", translation: "начальник", romanization: "na-CHAL'-neek" },
      { word: "deadline", translation: "срок", romanization: "srok" },
      { word: "project", translation: "проект", romanization: "pra-YEKT" },
      { word: "budget", translation: "бюджет", romanization: "byoo-ZHET" },
      { word: "report", translation: "отчёт", romanization: "at-CHYOT" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "очень приятно познакомиться", romanization: "O-chen' pri-YAT-na pa-znah-KO-meet-sya" },
      { english: "Thank you for your time", translation: "спасибо за ваше время", romanization: "spa-SEE-ba za VA-she VRE-mya" },
      { english: "I look forward to working with you", translation: "с нетерпением жду сотрудничества", romanization: "s ne-ter-PE-ni-yem zhdoo sa-troo-DNEE-chest-va" },
      { english: "Could you please...?", translation: "не могли бы вы...?", romanization: "ne ma-GLEE by vy...?" },
      { english: "I apologize for the inconvenience", translation: "извините за неудобства", romanization: "iz-vee-NEE-te za ne-oo-DOB-stva" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business Russian uses 'вы' (formal you) and 'ваш' (your) instead of 'ты' and 'твой'. Use 'не могли бы вы' for polite requests.",
      examples: [
        { sentence: "не могли бы вы помочь?", romanization: "ne ma-GLEE by vy pa-MOCH'?", english: "Could you help me?" },
        { sentence: "ваш офис", romanization: "vash O-fees", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in Russian?",
        options: ["очень приятно познакомиться", "спасибо за ваше время", "с нетерпением жду сотрудничества", "не могли бы вы...?"],
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
      { word: "although", translation: "хотя", romanization: "kha-TYA" },
      { word: "however", translation: "однако", romanization: "ad-NA-ka" },
      { word: "therefore", translation: "поэтому", romanization: "pa-e-TO-moo" },
      { word: "moreover", translation: "более того", romanization: "BO-le-ye ta-GO" },
      { word: "nevertheless", translation: "тем не менее", romanization: "tem ne ME-ne-ye" },
      { word: "consequently", translation: "следовательно", romanization: "sle-DO-va-tel'-na" },
      { word: "meanwhile", translation: "тем временем", romanization: "tem VRE-me-nem" },
      { word: "furthermore", translation: "кроме того", romanization: "kra-ME ta-GO" },
      { word: "likewise", translation: "также", romanization: "TAK-zhe" },
      { word: "otherwise", translation: "иначе", romanization: "ee-NA-che" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "хотя это трудно, я попробую", romanization: "kha-TYA E-ta TROOD-na, ya pa-pra-BOO-yu" },
      { english: "However, I think it's possible", translation: "однако, я думаю, что это возможно", romanization: "ad-NA-ka, ya doo-MA-yu, shto E-ta voz-MOZH-na" },
      { english: "Therefore, we should continue", translation: "поэтому мы должны продолжать", romanization: "pa-e-TO-moo my da-LZH-ny pra-dal-ZHAT'" },
      { english: "Moreover, it's important", translation: "более того, это важно", romanization: "BO-le-ye ta-GO, E-ta VAZH-na" },
      { english: "Nevertheless, I believe", translation: "тем не менее, я верю", romanization: "tem ne ME-ne-ye, ya VE-ryu" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced Russian uses complex conjunctions to connect ideas. 'Хотя' means 'although' and 'поэтому' means 'therefore'.",
      examples: [
        { sentence: "хотя это трудно, я попробую", romanization: "kha-TYA E-ta TROOD-na, ya pa-pra-BOO-yu", english: "Although it's difficult, I'll try" },
        { sentence: "поэтому я продолжаю", romanization: "pa-e-TO-moo ya pra-dal-ZHA-yu", english: "Therefore, I continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in Russian?",
        options: ["хотя это трудно, я попробую", "однако, я думаю, что это возможно", "поэтому мы должны продолжать", "более того, это важно"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common Russian idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "идиома", romanization: "ee-dee-O-ma" },
      { word: "expression", translation: "выражение", romanization: "vy-ra-ZHE-ni-ye" },
      { word: "proverb", translation: "пословица", romanization: "pas-LO-vee-tsa" },
      { word: "metaphor", translation: "метафора", romanization: "me-ta-FO-ra" },
      { word: "saying", translation: "поговорка", romanization: "pa-ga-VOR-ka" },
      { word: "cultural", translation: "культурный", romanization: "kool'-TOOR-nyy" },
      { word: "traditional", translation: "традиционный", romanization: "tra-dee-tsi-ON-nyy" },
      { word: "modern", translation: "современный", romanization: "sa-vre-MEN-nyy" },
      { word: "colloquial", translation: "разговорный", romanization: "raz-ga-VOR-nyy" },
      { word: "formal", translation: "формальный", romanization: "far-MAL'-nyy" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "это проще простого", romanization: "E-ta PRO-sche PRO-sta-va" },
      { english: "Don't count your chickens", translation: "не дели шкуру неубитого медведя", romanization: "ne de-LEE SHKOO-roo ne-oo-bee-TO-va med-ve-DYA" },
      { english: "The early bird catches the worm", translation: "кто рано встаёт, тому бог подаёт", romanization: "kto RA-na vsta-YOT, ta-MOO bog pa-da-YOT" },
      { english: "Actions speak louder than words", translation: "дела говорят громче слов", romanization: "DE-la ga-va-RYAT GROM-che slov" },
      { english: "Better late than never", translation: "лучше поздно, чем никогда", romanization: "LOOCH-she POZ-na, chem nee-kag-DA" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "Russian idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "это проще простого", romanization: "E-ta PRO-sche PRO-sta-va", english: "It's a piece of cake (literally: it's simpler than simple)" },
        { sentence: "кто рано встаёт, тому бог подаёт", romanization: "kto RA-na vsta-YOT, ta-MOO bog pa-da-YOT", english: "God gives to those who rise early" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in Russian?",
        options: ["это проще простого", "не дели шкуру неубитого медведя", "кто рано встаёт, тому бог подаёт", "дела говорят громче слов"],
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
      { word: "conversation", translation: "разговор", romanization: "raz-ga-VOR" },
      { word: "dialogue", translation: "диалог", romanization: "dee-a-LOG" },
      { word: "discussion", translation: "обсуждение", romanization: "ab-soo-ZHDE-ni-ye" },
      { word: "debate", translation: "дебаты", romanization: "de-BA-ty" },
      { word: "negotiation", translation: "переговоры", romanization: "pe-re-ga-VO-ry" },
      { word: "persuasion", translation: "убеждение", romanization: "oo-be-ZHDE-ni-ye" },
      { word: "agreement", translation: "согласие", romanization: "sa-gla-SEE-ye" },
      { word: "disagreement", translation: "несогласие", romanization: "ne-sa-gla-SEE-ye" },
      { word: "compromise", translation: "компромисс", romanization: "kam-pra-MEES" },
      { word: "consensus", translation: "консенсус", romanization: "kan-SEN-soos" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "что вы думаете о...?", romanization: "shto vy doo-MA-ye-te a...?" },
      { english: "I agree with you", translation: "я согласен с вами", romanization: "ya sa-GLA-sen s VA-mi" },
      { english: "I have a different opinion", translation: "у меня другое мнение", romanization: "oo me-NYA droo-GO-ye MNE-ni-ye" },
      { english: "Let's discuss this further", translation: "давайте обсудим это подробнее", romanization: "da-VAI-te ab-soo-DEEM E-ta pa-DROB-ne-ye" },
      { english: "I understand your point", translation: "я понимаю вашу точку зрения", romanization: "ya pa-nee-MA-yu VA-shoo TOCH-koo ZRE-ni-ya" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "что вы думаете о...?", romanization: "shto vy doo-MA-ye-te a...?", english: "What do you think about...?" },
        { sentence: "я согласен с вами", romanization: "ya sa-GLA-sen s VA-mi", english: "I agree with you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in Russian?",
        options: ["что вы думаете о...?", "я согласен с вами", "у меня другое мнение", "давайте обсудим это подробнее"],
        correct: 0
      }
    ]
  }
];
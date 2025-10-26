export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "مرحبا", romanization: "mar-ha-ban" },
      { word: "goodbye", translation: "وداعا", romanization: "wa-da-'an" },
      { word: "good morning", translation: "صباح الخير", romanization: "sa-bah al-khayr" },
      { word: "good afternoon", translation: "مساء الخير", romanization: "ma-sa' al-khayr" },
      { word: "good evening", translation: "مساء الخير", romanization: "ma-sa' al-khayr" },
      { word: "thank you", translation: "شكرا", romanization: "shuk-ran" },
      { word: "please", translation: "من فضلك", romanization: "min fad-lik" },
      { word: "excuse me", translation: "اعذرني", romanization: "i'dhir-ni" },
      { word: "yes", translation: "نعم", romanization: "na'am" },
      { word: "no", translation: "لا", romanization: "la" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "تشرفنا", romanization: "ta-shar-raf-na" },
      { english: "My name is...", translation: "اسمي...", romanization: "is-mi..." },
      { english: "How are you?", translation: "كيف حالك؟", romanization: "kayf ha-lak?" },
      { english: "I'm fine, thank you", translation: "أنا بخير، شكرا", romanization: "a-na bi-khayr, shuk-ran" },
      { english: "See you later", translation: "أراك لاحقا", romanization: "a-ra-ka la-hi-qan" },
      { english: "Take care", translation: "اعتن بنفسك", romanization: "i'tin bi-naf-sik" },
      { english: "Good night", translation: "تصبح على خير", romanization: "tus-bih 'a-la khayr" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "Arabic follows Verb-Subject-Object order in many cases. The verb 'يكون' (to be) is often omitted in present tense.",
      examples: [
        { sentence: "أنا طالب", romanization: "a-na ta-lib", english: "I am a student" },
        { sentence: "أنت معلم", romanization: "an-ta mu'al-lim", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Arabic?",
        options: ["مرحبا", "وداعا", "شكرا", "من فضلك"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'شكرا' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Arabic",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "واحد", romanization: "wa-hid" },
      { word: "two", translation: "اثنان", romanization: "ith-naan" },
      { word: "three", translation: "ثلاثة", romanization: "tha-la-tha" },
      { word: "four", translation: "أربعة", romanization: "ar-ba'a" },
      { word: "five", translation: "خمسة", romanization: "kham-sa" },
      { word: "six", translation: "ستة", romanization: "sit-ta" },
      { word: "seven", translation: "سبعة", romanization: "sab'a" },
      { word: "eight", translation: "ثمانية", romanization: "tha-ma-ni-ya" },
      { word: "nine", translation: "تسعة", romanization: "tis'a" },
      { word: "ten", translation: "عشرة", romanization: "'ash-ra" }
    ],
    phrases: [
      { english: "How many?", translation: "كم؟", romanization: "kam?" },
      { english: "One more, please", translation: "واحد آخر، من فضلك", romanization: "wa-hid a-khar, min fad-lik" },
      { english: "That's too many", translation: "هذا كثير جدا", romanization: "ha-dha ka-thir jid-dan" },
      { english: "Just one", translation: "واحد فقط", romanization: "wa-hid fa-qat" },
      { english: "All of them", translation: "كلهم", romanization: "kul-lu-hum" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Numbers in Arabic change form based on gender. 'واحد' (one) becomes 'واحدة' (feminine).",
      examples: [
        { sentence: "تفاحة واحدة", romanization: "tuf-fa-ha wa-hi-da", english: "one apple" },
        { sentence: "كتاب واحد", romanization: "ki-tab wa-hid", english: "one book" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Arabic?",
        options: ["ثلاثة", "أربعة", "خمسة", "ستة"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Arabic",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "أم", romanization: "umm" },
      { word: "father", translation: "أب", romanization: "ab" },
      { word: "sister", translation: "أخت", romanization: "ukht" },
      { word: "brother", translation: "أخ", romanization: "akh" },
      { word: "grandmother", translation: "جدة", romanization: "jad-da" },
      { word: "grandfather", translation: "جد", romanization: "jad" },
      { word: "aunt", translation: "عمة", romanization: "'am-ma" },
      { word: "uncle", translation: "عم", romanization: "'amm" },
      { word: "cousin", translation: "ابن عم/ابنة عم", romanization: "ibn 'amm/ib-na 'amm" },
      { word: "child", translation: "طفل", romanization: "tifl" }
    ],
    phrases: [
      { english: "This is my family", translation: "هذه عائلتي", romanization: "ha-dhi 'a-i-la-ti" },
      { english: "I have two sisters", translation: "لدي أختان", romanization: "la-di ukht-an" },
      { english: "My mother is a teacher", translation: "أمي معلمة", romanization: "um-mi mu'al-li-ma" },
      { english: "How many people in your family?", translation: "كم شخص في عائلتك؟", romanization: "kam shakhs fi 'a-i-la-tik?" },
      { english: "I live with my parents", translation: "أعيش مع والدي", romanization: "a'ish ma'a wa-li-day" }
    ],
    grammar: {
      point: "Possessive pronouns",
      explanation: "Use 'لي' (my), 'لك' (your), 'له' (his/her) before family members. These must agree with the gender of the possessor.",
      examples: [
        { sentence: "أمي", romanization: "um-mi", english: "my mother" },
        { sentence: "أبي", romanization: "a-bi", english: "my father" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Arabic?",
        options: ["أب", "أم", "جدة", "عمة"],
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
      { word: "water", translation: "ماء", romanization: "ma'" },
      { word: "tea", translation: "شاي", romanization: "shay" },
      { word: "coffee", translation: "قهوة", romanization: "qah-wa" },
      { word: "rice", translation: "أرز", romanization: "aruz" },
      { word: "bread", translation: "خبز", romanization: "khubz" },
      { word: "meat", translation: "لحم", romanization: "lahm" },
      { word: "fish", translation: "سمك", romanization: "samak" },
      { word: "vegetables", translation: "خضروات", romanization: "khu-dra-wat" },
      { word: "fruit", translation: "فاكهة", romanization: "fa-ki-ha" },
      { word: "soup", translation: "شوربة", romanization: "shur-ba" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "أنا جائع", romanization: "a-na ja'i'" },
      { english: "I'm thirsty", translation: "أنا عطشان", romanization: "a-na 'at-shan" },
      { english: "What would you like to eat?", translation: "ماذا تريد أن تأكل؟", romanization: "ma-dha tu-rid an ta'kul?" },
      { english: "This is delicious", translation: "هذا لذيذ", romanization: "ha-dha la-dhi-dh" },
      { english: "I don't like this", translation: "لا أحب هذا", romanization: "la u-hibb ha-dha" },
      { english: "Check, please", translation: "الفاتورة، من فضلك", romanization: "al-fa-tu-ra, min fad-lik" }
    ],
    grammar: {
      point: "Like expressions",
      explanation: "Use 'أحب' (I love) for 'I like' and 'لا أحب' (I don't love) for 'I don't like'.",
      examples: [
        { sentence: "أحب القهوة", romanization: "u-hibb al-qah-wa", english: "I like coffee" },
        { sentence: "لا أحب الشاي", romanization: "la u-hibb al-shay", english: "I don't like tea" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in Arabic?",
        options: ["أنا عطشان", "أنا جائع", "هذا لذيذ", "لا أحب هذا"],
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
      { word: "red", translation: "أحمر", romanization: "ah-mar" },
      { word: "blue", translation: "أزرق", romanization: "az-raq" },
      { word: "green", translation: "أخضر", romanization: "akh-dar" },
      { word: "yellow", translation: "أصفر", romanization: "as-far" },
      { word: "black", translation: "أسود", romanization: "as-wad" },
      { word: "white", translation: "أبيض", romanization: "a-byad" },
      { word: "big", translation: "كبير", romanization: "ka-bir" },
      { word: "small", translation: "صغير", romanization: "sa-ghir" },
      { word: "beautiful", translation: "جميل", romanization: "ja-mil" },
      { word: "new", translation: "جديد", romanization: "ja-did" }
    ],
    phrases: [
      { english: "What color is this?", translation: "ما لون هذا؟", romanization: "ma lawn ha-dha?" },
      { english: "I like blue", translation: "أحب الأزرق", romanization: "u-hibb al-az-raq" },
      { english: "This is beautiful", translation: "هذا جميل", romanization: "ha-dha ja-mil" },
      { english: "It's too big", translation: "هذا كبير جدا", romanization: "ha-dha ka-bir jid-dan" },
      { english: "I want a small one", translation: "أريد واحدا صغيرا", romanization: "u-rid wa-hi-dan sa-ghi-ran" }
    ],
    grammar: {
      point: "Adjective agreement",
      explanation: "Adjectives must agree with the gender and number of the noun they describe. They come after the noun.",
      examples: [
        { sentence: "سيارة حمراء", romanization: "say-ya-ra ham-ra'", english: "red car" },
        { sentence: "بيت جميل", romanization: "bayt ja-mil", english: "beautiful house" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in Arabic?",
        options: ["أحمر", "أزرق", "أخضر", "أصفر"],
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
      { word: "hour", translation: "ساعة", romanization: "sa'a" },
      { word: "minute", translation: "دقيقة", romanization: "da-qi-qa" },
      { word: "morning", translation: "صباح", romanization: "sa-bah" },
      { word: "afternoon", translation: "بعد الظهر", romanization: "ba'd al-zuhr" },
      { word: "evening", translation: "مساء", romanization: "ma-sa'" },
      { word: "night", translation: "ليل", romanization: "layl" },
      { word: "today", translation: "اليوم", romanization: "al-yawm" },
      { word: "tomorrow", translation: "غدا", romanization: "gha-dan" },
      { word: "yesterday", translation: "أمس", romanization: "ams" },
      { word: "week", translation: "أسبوع", romanization: "us-bu'" }
    ],
    phrases: [
      { english: "What time is it?", translation: "كم الساعة؟", romanization: "kam al-sa'a?" },
      { english: "It's 3 o'clock", translation: "الساعة الثالثة", romanization: "al-sa'a al-tha-li-tha" },
      { english: "What day is today?", translation: "أي يوم اليوم؟", romanization: "ayy yawm al-yawm?" },
      { english: "I'm busy tomorrow", translation: "أنا مشغول غدا", romanization: "a-na mash-ghul gha-dan" },
      { english: "See you next week", translation: "أراك الأسبوع القادم", romanization: "a-ra-ka al-us-bu' al-qa-dim" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use 'في' (at) for specific times and 'كم الساعة' (what time) for asking the time.",
      examples: [
        { sentence: "في الساعة الثالثة", romanization: "fi al-sa'a al-tha-li-tha", english: "At three o'clock" },
        { sentence: "الآن الظهر", romanization: "al-an al-zuhr", english: "It's noon now" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in Arabic?",
        options: ["كم الساعة؟", "الساعة الثالثة", "أي يوم اليوم؟", "أنا مشغول غدا"],
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
      { word: "money", translation: "مال", romanization: "mal" },
      { word: "price", translation: "سعر", romanization: "si'r" },
      { word: "expensive", translation: "غالي", romanization: "gha-li" },
      { word: "cheap", translation: "رخيص", romanization: "ra-khis" },
      { word: "store", translation: "متجر", romanization: "mat-jar" },
      { word: "buy", translation: "يشتري", romanization: "ya-sh-ta-ri" },
      { word: "sell", translation: "يبيع", romanization: "ya-bi'" },
      { word: "discount", translation: "خصم", romanization: "khasm" },
      { word: "receipt", translation: "إيصال", romanization: "i-sa-l" },
      { word: "change", translation: "باقي", romanization: "ba-qi" }
    ],
    phrases: [
      { english: "How much is this?", translation: "كم ثمن هذا؟", romanization: "kam tha-man ha-dha?" },
      { english: "It's too expensive", translation: "هذا غالي جدا", romanization: "ha-dha gha-li jid-dan" },
      { english: "Do you have a discount?", translation: "هل لديك خصم؟", romanization: "hal la-da-ka khasm?" },
      { english: "I'll take this", translation: "سآخذ هذا", romanization: "sa-a-khudh ha-dha" },
      { english: "Can I pay by card?", translation: "هل يمكنني الدفع بالبطاقة؟", romanization: "hal yum-ki-ni al-daf' bi-al-bi-ta-qa?" }
    ],
    grammar: {
      point: "Cost expressions",
      explanation: "Use 'ثمن' (price) for cost and 'كم' (how much) for asking about price.",
      examples: [
        { sentence: "هذا ثمنه عشرة دراهم", romanization: "ha-dha tha-ma-nu-hu 'ash-ra di-ra-him", english: "This costs ten dirhams" },
        { sentence: "كم ثمن هذا؟", romanization: "kam tha-man ha-dha?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in Arabic?",
        options: ["كم ثمن هذا؟", "هذا غالي جدا", "هل لديك خصم؟", "سآخذ هذا"],
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
      { word: "station", translation: "محطة", romanization: "mah-ta" },
      { word: "train", translation: "قطار", romanization: "qi-tar" },
      { word: "bus", translation: "حافلة", romanization: "ha-fi-la" },
      { word: "taxi", translation: "تاكسي", romanization: "ta-ksi" },
      { word: "right", translation: "يمين", romanization: "ya-min" },
      { word: "left", translation: "يسار", romanization: "ya-sar" },
      { word: "straight", translation: "مستقيم", romanization: "mus-ta-qim" },
      { word: "near", translation: "قريب", romanization: "qa-rib" },
      { word: "far", translation: "بعيد", romanization: "ba'id" },
      { word: "map", translation: "خريطة", romanization: "kha-ri-ta" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "أين المحطة؟", romanization: "ay-na al-mah-ta?" },
      { english: "How do I get to...?", translation: "كيف أصل إلى...؟", romanization: "kayf a-sal i-la...?" },
      { english: "Go straight", translation: "اذهب مستقيما", romanization: "idh-hab mus-ta-qi-man" },
      { english: "Turn right", translation: "اتجه يمينا", romanization: "at-jih ya-mi-nan" },
      { english: "Is it far?", translation: "هل هو بعيد؟", romanization: "hal hu-wa ba'id?" }
    ],
    grammar: {
      point: "Direction prepositions",
      explanation: "Use 'إلى' (to) for destination, 'ب' (by) for transportation, and 'من' (from) for origin.",
      examples: [
        { sentence: "أذهب إلى المحطة", romanization: "a-dh-hab i-la al-mah-ta", english: "I go to the station" },
        { sentence: "أركب القطار", romanization: "a-rak-kab al-qi-tar", english: "I ride the train" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in Arabic?",
        options: ["أين المحطة؟", "اذهب مستقيما", "اتجه يمينا", "هل هو بعيد؟"],
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
      { word: "weather", translation: "طقس", romanization: "taqs" },
      { word: "sunny", translation: "مشمس", romanization: "mush-mis" },
      { word: "rainy", translation: "ممطر", romanization: "mum-tir" },
      { word: "cloudy", translation: "غائم", romanization: "gha'im" },
      { word: "snow", translation: "ثلج", romanization: "thalj" },
      { word: "hot", translation: "حار", romanization: "har" },
      { word: "cold", translation: "بارد", romanization: "barid" },
      { word: "spring", translation: "ربيع", romanization: "ra-bi'" },
      { word: "summer", translation: "صيف", romanization: "sayf" },
      { word: "autumn", translation: "خريف", romanization: "kha-rif" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "كيف الطقس؟", romanization: "kayf al-taqs?" },
      { english: "It's sunny today", translation: "اليوم مشمس", romanization: "al-yawm mush-mis" },
      { english: "It's raining", translation: "تمطر", romanization: "tum-tir" },
      { english: "It's very hot", translation: "الجو حار جدا", romanization: "al-jaw har jid-dan" },
      { english: "I like spring", translation: "أحب الربيع", romanization: "u-hibb al-ra-bi'" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use 'الطقس' (weather) for weather conditions and 'تمطر' (it's raining) for rain.",
      examples: [
        { sentence: "الطقس مشمس", romanization: "al-taqs mush-mis", english: "It's sunny" },
        { sentence: "تمطر", romanization: "tum-tir", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in Arabic?",
        options: ["تمطر", "اليوم مشمس", "الجو حار جدا", "أحب الربيع"],
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
      { word: "hobby", translation: "هواية", romanization: "hi-wa-ya" },
      { word: "music", translation: "موسيقى", romanization: "mu-si-qa" },
      { word: "sports", translation: "رياضة", romanization: "ri-ya-da" },
      { word: "reading", translation: "قراءة", romanization: "qi-ra'a" },
      { word: "cooking", translation: "طبخ", romanization: "tabkh" },
      { word: "traveling", translation: "سفر", romanization: "safar" },
      { word: "photography", translation: "تصوير", romanization: "ta-swir" },
      { word: "dancing", translation: "رقص", romanization: "raqs" },
      { word: "swimming", translation: "سباحة", romanization: "si-ba-ha" },
      { word: "painting", translation: "رسم", romanization: "rasm" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "ما هي هوايتك؟", romanization: "ma hi-ya hi-wa-yat-ka?" },
      { english: "I like music", translation: "أحب الموسيقى", romanization: "u-hibb al-mu-si-qa" },
      { english: "I play tennis", translation: "ألعب التنس", romanization: "a-l'ab al-ten-nis" },
      { english: "I enjoy reading", translation: "أستمتع بالقراءة", romanization: "as-tam-ti' bi-al-qi-ra'a" },
      { english: "What do you do in your free time?", translation: "ماذا تفعل في وقت فراغك؟", romanization: "ma-dha taf'al fi waqt fira-ghik?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use 'ألعب' (I play) for sports and games, 'أعزف على' (I play) for musical instruments, and 'أمارس' (I practice) for activities.",
      examples: [
        { sentence: "ألعب كرة القدم", romanization: "a-l'ab ku-rat al-qadam", english: "I play soccer" },
        { sentence: "أعزف على البيانو", romanization: "a'zif 'a-la al-bya-no", english: "I play the piano" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in Arabic?",
        options: ["ما هي هوايتك؟", "أحب الموسيقى", "ألعب التنس", "ماذا تفعل في وقت فراغك؟"],
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
      { word: "work", translation: "عمل", romanization: "'amal" },
      { word: "office", translation: "مكتب", romanization: "mak-tab" },
      { word: "company", translation: "شركة", romanization: "shar-ka" },
      { word: "teacher", translation: "معلم", romanization: "mu'al-lim" },
      { word: "doctor", translation: "طبيب", romanization: "ta-bib" },
      { word: "engineer", translation: "مهندس", romanization: "mu-han-dis" },
      { word: "student", translation: "طالب", romanization: "ta-lib" },
      { word: "manager", translation: "مدير", romanization: "mu-dir" },
      { word: "secretary", translation: "سكرتير", romanization: "sik-ri-tir" },
      { word: "retired", translation: "متقاعد", romanization: "mu-ta-qa'id" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "ماذا تعمل؟", romanization: "ma-dha ta'mal?" },
      { english: "I work at a company", translation: "أعمل في شركة", romanization: "a'mal fi shar-ka" },
      { english: "I'm a teacher", translation: "أنا معلم", romanization: "a-na mu'al-lim" },
      { english: "I'm looking for a job", translation: "أبحث عن عمل", romanization: "ab-hath 'an 'amal" },
      { english: "I work from home", translation: "أعمل من المنزل", romanization: "a'mal min al-man-zil" }
    ],
    grammar: {
      point: "Work-related prepositions",
      explanation: "Use 'في' (in) for workplace, 'ك' (as) for profession, and 'ل' (for) for employer.",
      examples: [
        { sentence: "أعمل في مكتب", romanization: "a'mal fi mak-tab", english: "I work in an office" },
        { sentence: "أعمل كمعلم", romanization: "a'mal ka-mu'al-lim", english: "I work as a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in Arabic?",
        options: ["ماذا تعمل؟", "أعمل في شركة", "أنا معلم", "أبحث عن عمل"],
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
      { word: "head", translation: "رأس", romanization: "ra's" },
      { word: "eye", translation: "عين", romanization: "'ayn" },
      { word: "nose", translation: "أنف", romanization: "anf" },
      { word: "mouth", translation: "فم", romanization: "fam" },
      { word: "hand", translation: "يد", romanization: "yad" },
      { word: "foot", translation: "قدم", romanization: "qadam" },
      { word: "sick", translation: "مريض", romanization: "ma-rid" },
      { word: "healthy", translation: "صحي", romanization: "si-hhi" },
      { word: "hospital", translation: "مستشفى", romanization: "mus-tash-fa" },
      { word: "medicine", translation: "دواء", romanization: "da-wa'" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "لا أشعر بحال جيدة", romanization: "la ash-'ur bi-hal jay-yi-da" },
      { english: "I have a headache", translation: "أعاني من صداع", romanization: "a'a-ni min su-da'" },
      { english: "I need to see a doctor", translation: "أحتاج لرؤية طبيب", romanization: "ah-ta-j li-ru'yat ta-bib" },
      { english: "Are you okay?", translation: "هل أنت بخير؟", romanization: "hal an-ta bi-khayr?" },
      { english: "I feel better now", translation: "أشعر بتحسن الآن", romanization: "ash-'ur bi-ta-has-sin al-an" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'أعاني من' (I suffer from) for body aches and 'لدي' (I have) for possession.",
      examples: [
        { sentence: "أعاني من صداع", romanization: "a'a-ni min su-da'", english: "I have a headache" },
        { sentence: "لدي ألم في الظهر", romanization: "la-di a-lam fi al-zahr", english: "I have back pain" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in Arabic?",
        options: ["أعاني من صداع", "لا أشعر بحال جيدة", "أحتاج لرؤية طبيب", "هل أنت بخير؟"],
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
      { word: "computer", translation: "كمبيوتر", romanization: "kam-byu-ter" },
      { word: "phone", translation: "هاتف", romanization: "ha-tif" },
      { word: "internet", translation: "إنترنت", romanization: "in-ter-net" },
      { word: "email", translation: "بريد إلكتروني", romanization: "ba-rid i-lik-tru-ni" },
      { word: "website", translation: "موقع ويب", romanization: "maw-qi' web" },
      { word: "password", translation: "كلمة مرور", romanization: "kal-i-mat mu-rur" },
      { word: "download", translation: "تحميل", romanization: "ta-hmil" },
      { word: "upload", translation: "رفع", romanization: "raf'" },
      { word: "app", translation: "تطبيق", romanization: "tat-biq" },
      { word: "social media", translation: "وسائل التواصل الاجتماعي", romanization: "wa-sa'il al-ta-wa-sul al-ij-ti-ma'i" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "أستخدم الإنترنت كل يوم", romanization: "as-takh-dim al-in-ter-net kul yawm" },
      { english: "Can you help me with my computer?", translation: "هل يمكنك مساعدتي مع الكمبيوتر؟", romanization: "hal yum-ki-nu-ka mu-sa'a-da-ti ma'a al-kam-byu-ter?" },
      { english: "I forgot my password", translation: "نسيت كلمة المرور", romanization: "na-sit kal-i-mat al-mu-rur" },
      { english: "Do you have WiFi?", translation: "هل لديك واي فاي؟", romanization: "hal la-da-ka wi-fi?" },
      { english: "I'll send you an email", translation: "سأرسل لك بريدا إلكترونيا", romanization: "sa-ur-sil la-ka ba-ri-dan i-lik-tru-ni-yan" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use 'أستخدم' (I use) for technology, 'أرسل' (I send) for emails, and 'أحمل' (I download) for files.",
      examples: [
        { sentence: "أستخدم الكمبيوتر", romanization: "as-takh-dim al-kam-byu-ter", english: "I use a computer" },
        { sentence: "أرسل بريدا إلكترونيا", romanization: "ur-sil ba-ri-dan i-lik-tru-ni-yan", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in Arabic?",
        options: ["أستخدم الإنترنت كل يوم", "هل يمكنك مساعدتي مع الكمبيوتر؟", "نسيت كلمة المرور", "هل لديك واي فاي؟"],
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
      { word: "passport", translation: "جواز سفر", romanization: "ja-waz sa-far" },
      { word: "visa", translation: "تأشيرة", romanization: "ta'shi-ra" },
      { word: "hotel", translation: "فندق", romanization: "fun-duq" },
      { word: "restaurant", translation: "مطعم", romanization: "mat'am" },
      { word: "tourist", translation: "سائح", romanization: "sa'ih" },
      { word: "sightseeing", translation: "سياحة", romanization: "si-ya-ha" },
      { word: "museum", translation: "متحف", romanization: "mat-haf" },
      { word: "mosque", translation: "مسجد", romanization: "mas-jid" },
      { word: "palace", translation: "قصر", romanization: "qasr" },
      { word: "garden", translation: "حديقة", romanization: "ha-di-qa" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "أنا سائح", romanization: "a-na sa'ih" },
      { english: "Where is the hotel?", translation: "أين الفندق؟", romanization: "ay-na al-fun-duq?" },
      { english: "I want to see the museum", translation: "أريد أن أرى المتحف", romanization: "u-rid an a-ra al-mat-haf" },
      { english: "How much is the entrance fee?", translation: "كم رسوم الدخول؟", romanization: "kam ru-sum al-du-khul?" },
      { english: "Can you take a photo?", translation: "هل يمكنك التقاط صورة؟", romanization: "hal yum-ki-nu-ka al-ta-qat su-ra?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use 'أريد أن أرى' (I want to see) for sightseeing and 'التقاط صورة' (to take a photo) for photos.",
      examples: [
        { sentence: "أريد أن أرى المتحف", romanization: "u-rid an a-ra al-mat-haf", english: "I want to see the museum" },
        { sentence: "التقاط صورة", romanization: "al-ta-qat su-ra", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in Arabic?",
        options: ["أنا سائح", "أين الفندق؟", "أريد أن أرى المتحف", "كم رسوم الدخول؟"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about Arabic entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "فيلم", romanization: "film" },
      { word: "music", translation: "موسيقى", romanization: "mu-si-qa" },
      { word: "concert", translation: "حفلة موسيقية", romanization: "haf-la mu-si-qi-ya" },
      { word: "theater", translation: "مسرح", romanization: "mas-rah" },
      { word: "museum", translation: "متحف", romanization: "mat-haf" },
      { word: "art", translation: "فن", romanization: "fann" },
      { word: "tradition", translation: "تقليد", romanization: "ta-qli-d" },
      { word: "festival", translation: "مهرجان", romanization: "mah-ra-jan" },
      { word: "dance", translation: "رقص", romanization: "raqs" },
      { word: "poetry", translation: "شعر", romanization: "shi'r" }
    ],
    phrases: [
      { english: "I like Arabic movies", translation: "أحب الأفلام العربية", romanization: "u-hibb al-a-flam al-'a-ra-bi-ya" },
      { english: "Let's go to a concert", translation: "لنذهب إلى حفلة موسيقية", romanization: "lan-dh-hab i-la haf-la mu-si-qi-ya" },
      { english: "I want to see traditional art", translation: "أريد أن أرى الفن التقليدي", romanization: "u-rid an a-ra al-fann al-ta-qli-di" },
      { english: "When is the festival?", translation: "متى المهرجان؟", romanization: "ma-ta al-mah-ra-jan?" },
      { english: "I want to learn Arabic", translation: "أريد أن أتعلم العربية", romanization: "u-rid an a-ta'al-lam al-'a-ra-bi-ya" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'أتعلم' (I learn) for skills and 'أعلم' (I teach) for sharing knowledge.",
      examples: [
        { sentence: "أتعلم العربية", romanization: "a-ta'al-lam al-'a-ra-bi-ya", english: "Learn Arabic" },
        { sentence: "أعلم الإنجليزية", romanization: "a'al-lim al-in-jli-zi-ya", english: "Teach English" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like Arabic movies' in Arabic?",
        options: ["أحب الأفلام العربية", "لنذهب إلى حفلة موسيقية", "أريد أن أرى الفن التقليدي", "متى المهرجان؟"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business Arabic and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "اجتماع", romanization: "ij-ti-ma'" },
      { word: "presentation", translation: "عرض", romanization: "'ard" },
      { word: "contract", translation: "عقد", romanization: "'aqd" },
      { word: "client", translation: "عميل", romanization: "'a-mil" },
      { word: "colleague", translation: "زميل", romanization: "za-mil" },
      { word: "boss", translation: "مدير", romanization: "mu-dir" },
      { word: "deadline", translation: "موعد نهائي", romanization: "maw'id ni-ha'i" },
      { word: "project", translation: "مشروع", romanization: "mash-ru'" },
      { word: "budget", translation: "ميزانية", romanization: "mi-za-ni-ya" },
      { word: "report", translation: "تقرير", romanization: "ta-qrir" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "تشرفنا بمعرفتك", romanization: "ta-shar-raf-na bi-ma'ri-fat-ka" },
      { english: "Thank you for your time", translation: "شكرا لوقتك", romanization: "shuk-ran li-waq-ti-ka" },
      { english: "I look forward to working with you", translation: "أتطلع للعمل معك", romanization: "at-tal-la' li-al-'amal ma'a-ka" },
      { english: "Could you please...?", translation: "هل يمكنك...؟", romanization: "hal yum-ki-nu-ka...?" },
      { english: "I apologize for the inconvenience", translation: "أعتذر عن الإزعاج", romanization: "a'ta-dhir 'an al-iz'a-j" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business Arabic uses 'أنت' (formal you) and 'لك' (your) instead of 'أنت' and 'لك'. Use 'هل يمكنك' for polite requests.",
      examples: [
        { sentence: "هل يمكنك مساعدتي؟", romanization: "hal yum-ki-nu-ka mu-sa'a-da-ti?", english: "Could you help me?" },
        { sentence: "مكتبك", romanization: "mak-ta-bu-ka", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in Arabic?",
        options: ["تشرفنا بمعرفتك", "شكرا لوقتك", "أتطلع للعمل معك", "هل يمكنك...؟"],
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
      { word: "although", translation: "رغم أن", romanization: "raghm an" },
      { word: "however", translation: "ومع ذلك", romanization: "wa-ma'a dha-lik" },
      { word: "therefore", translation: "لذلك", romanization: "li-dha-lik" },
      { word: "moreover", translation: "علاوة على ذلك", romanization: "'a-la-wat 'a-la dha-lik" },
      { word: "nevertheless", translation: "ومع ذلك", romanization: "wa-ma'a dha-lik" },
      { word: "consequently", translation: "نتيجة لذلك", romanization: "na-ti-ja li-dha-lik" },
      { word: "meanwhile", translation: "في الوقت نفسه", romanization: "fi al-waqt naf-si-hi" },
      { word: "furthermore", translation: "بالإضافة إلى ذلك", romanization: "bi-al-i-da-fa i-la dha-lik" },
      { word: "likewise", translation: "كذلك", romanization: "ka-dha-lik" },
      { word: "otherwise", translation: "وإلا", romanization: "wa-i-la" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "رغم أن الأمر صعب، سأحاول", romanization: "raghm an al-amr sa'b, sa-a-ha-wul" },
      { english: "However, I think it's possible", translation: "ومع ذلك، أعتقد أنه ممكن", romanization: "wa-ma'a dha-lik, a'ta-qid an-na-hu mum-kin" },
      { english: "Therefore, we should continue", translation: "لذلك، يجب أن نستمر", romanization: "li-dha-lik, ya-jib an nas-ta-mir" },
      { english: "Moreover, it's important", translation: "علاوة على ذلك، الأمر مهم", romanization: "'a-la-wat 'a-la dha-lik, al-amr mu-him" },
      { english: "Nevertheless, I believe", translation: "ومع ذلك، أؤمن", romanization: "wa-ma'a dha-lik, u'min" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced Arabic uses complex conjunctions to connect ideas. 'رغم أن' means 'although' and 'لذلك' means 'therefore'.",
      examples: [
        { sentence: "رغم أن الأمر صعب، سأحاول", romanization: "raghm an al-amr sa'b, sa-a-ha-wul", english: "Although it's difficult, I'll try" },
        { sentence: "لذلك، أستمر", romanization: "li-dha-lik, as-ta-mir", english: "Therefore, I continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in Arabic?",
        options: ["رغم أن الأمر صعب، سأحاول", "ومع ذلك، أعتقد أنه ممكن", "لذلك، يجب أن نستمر", "علاوة على ذلك، الأمر مهم"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common Arabic idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "مثل", romanization: "mathal" },
      { word: "expression", translation: "تعبير", romanization: "ta'bir" },
      { word: "proverb", translation: "مثل شعبي", romanization: "mathal sha'bi" },
      { word: "metaphor", translation: "استعارة", romanization: "is-ti'a-ra" },
      { word: "saying", translation: "قول", romanization: "qawl" },
      { word: "cultural", translation: "ثقافي", romanization: "tha-qa-fi" },
      { word: "traditional", translation: "تقليدي", romanization: "ta-qli-di" },
      { word: "modern", translation: "حديث", romanization: "ha-dith" },
      { word: "colloquial", translation: "عامي", romanization: "'a-mi" },
      { word: "formal", translation: "رسمي", romanization: "ras-mi" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "هذا سهل جدا", romanization: "ha-dha sa-hil jid-dan" },
      { english: "Don't count your chickens", translation: "لا تبيع جلد الدب قبل اصطياده", romanization: "la ta-bi' jild al-dubb qab-la is-ti-ya-di-hi" },
      { english: "The early bird catches the worm", translation: "من جد وجد", romanization: "man ja-da wa-ja-da" },
      { english: "Actions speak louder than words", translation: "الأفعال أبلغ من الأقوال", romanization: "al-a-f'al ab-lagh min al-a-qwal" },
      { english: "Better late than never", translation: "أفضل متأخر من أبدا", romanization: "af-dal mu-ta'akh-khir min ab-dan" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "Arabic idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "هذا سهل جدا", romanization: "ha-dha sa-hil jid-dan", english: "It's a piece of cake (literally: this is very easy)" },
        { sentence: "من جد وجد", romanization: "man ja-da wa-ja-da", english: "Whoever works hard will find" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in Arabic?",
        options: ["هذا سهل جدا", "لا تبيع جلد الدب قبل اصطياده", "من جد وجد", "الأفعال أبلغ من الأقوال"],
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
      { word: "conversation", translation: "محادثة", romanization: "mu-ha-da-tha" },
      { word: "dialogue", translation: "حوار", romanization: "hi-war" },
      { word: "discussion", translation: "مناقشة", romanization: "mu-na-qasha" },
      { word: "debate", translation: "نقاش", romanization: "ni-qash" },
      { word: "negotiation", translation: "تفاوض", romanization: "ta-fa-wud" },
      { word: "persuasion", translation: "إقناع", romanization: "iq-na'" },
      { word: "agreement", translation: "اتفاق", romanization: "it-ti-faq" },
      { word: "disagreement", translation: "اختلاف", romanization: "ikh-ti-laf" },
      { word: "compromise", translation: "تسوية", romanization: "ta-swi-ya" },
      { word: "consensus", translation: "إجماع", romanization: "ij-ma'" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "ما رأيك في...؟", romanization: "ma ra'y-ka fi...?" },
      { english: "I agree with you", translation: "أوافقك الرأي", romanization: "u-wa-fi-qu-ka al-ra'y" },
      { english: "I have a different opinion", translation: "لدي رأي مختلف", romanization: "la-di ra'y mukh-ta-lif" },
      { english: "Let's discuss this further", translation: "دعنا نناقش هذا أكثر", romanization: "da'na na-na-qish ha-dha ak-thar" },
      { english: "I understand your point", translation: "أفهم وجهة نظرك", romanization: "af-ham wij-hat na-zar-ka" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "ما رأيك في...؟", romanization: "ma ra'y-ka fi...?", english: "What do you think about...?" },
        { sentence: "أوافقك الرأي", romanization: "u-wa-fi-qu-ka al-ra'y", english: "I agree with your opinion" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in Arabic?",
        options: ["ما رأيك في...؟", "أوافقك الرأي", "لدي رأي مختلف", "دعنا نناقش هذا أكثر"],
        correct: 0
      }
    ]
  }
];
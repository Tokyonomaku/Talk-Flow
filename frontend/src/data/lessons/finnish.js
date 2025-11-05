export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "hei", romanization: "HAY" },
      { word: "goodbye", translation: "näkemiin", romanization: "NAH-keh-meen" },
      { word: "good morning", translation: "hyvää huomenta", romanization: "HOO-vaa HOO-mehn-tah" },
      { word: "good afternoon", translation: "hyvää päivää", romanization: "HOO-vaa PIE-vaa" },
      { word: "good evening", translation: "hyvää iltaa", romanization: "HOO-vaa EEL-tah" },
      { word: "thank you", translation: "kiitos", romanization: "KEE-tohs" },
      { word: "please", translation: "ole hyvä", romanization: "OH-leh HOO-va" },
      { word: "excuse me", translation: "anteeksi", romanization: "AHN-tehk-see" },
      { word: "yes", translation: "kyllä", romanization: "KOO-lah" },
      { word: "no", translation: "ei", romanization: "AY" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "Hauska tavata", romanization: "HOW-skah TAH-vah-tah" },
      { english: "My name is...", translation: "Minun nimeni on...", romanization: "MEE-noon NEE-meh-nee ohn" },
      { english: "How are you?", translation: "Mitä kuuluu?", romanization: "MEE-tah KOO-loo?" },
      { english: "I'm fine, thank you", translation: "Hyvää, kiitos", romanization: "HOO-vaa, KEE-tohs" },
      { english: "See you later", translation: "Nähdään myöhemmin", romanization: "NAH-daan MUE-ohm-min" },
      { english: "Take care", translation: "Pidä huolta", romanization: "PEE-dah HOO-ohl-tah" },
      { english: "Good night", translation: "Hyvää yötä", romanization: "HOO-vaa UE-tah" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "Finnish follows Subject-Verb-Object order. The verb 'olla' (to be) is used for describing states.",
      examples: [
        { sentence: "Minä olen opiskelija", romanization: "MEE-nah OH-lehn oh-pee-SKEH-lee-yah", english: "I am a student" },
        { sentence: "Sinä olet opettaja", romanization: "SEE-nah OH-leht oh-PEHT-tah-yah", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Finnish?",
        options: ["hei", "näkemiin", "kiitos", "anteeksi"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'kiitos' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Finnish",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "yksi", romanization: "OOK-see" },
      { word: "two", translation: "kaksi", romanization: "KAHK-see" },
      { word: "three", translation: "kolme", romanization: "KOHL-meh" },
      { word: "four", translation: "neljä", romanization: "NEHL-yah" },
      { word: "five", translation: "viisi", romanization: "VEE-see" },
      { word: "six", translation: "kuusi", romanization: "KOO-see" },
      { word: "seven", translation: "seitsemän", romanization: "SAYT-seh-man" },
      { word: "eight", translation: "kahdeksan", romanization: "KAH-dehk-sahn" },
      { word: "nine", translation: "yhdeksän", romanization: "OOH-dehk-san" },
      { word: "ten", translation: "kymmenen", romanization: "KOOM-meh-nehn" }
    ],
    phrases: [
      { english: "How many?", translation: "Kuinka monta?", romanization: "KOO-een-kah MOHN-tah?" },
      { english: "One more, please", translation: "Yksi lisää, kiitos", romanization: "OOK-see LEE-saa, KEE-tohs" },
      { english: "That's too many", translation: "Se on liikaa", romanization: "Seh ohn LEE-kah" },
      { english: "Just one", translation: "Vain yksi", romanization: "VAHN OOK-see" },
      { english: "All of them", translation: "Kaikki", romanization: "KAH-ee-kee" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Finnish numbers don't change form, but the noun they modify may be in partitive case.",
      examples: [
        { sentence: "Yksi omena", romanization: "OOK-see OH-meh-nah", english: "One apple" },
        { sentence: "Kaksi kirjaa", romanization: "KAHK-see KEER-yah", english: "Two books" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Finnish?",
        options: ["kolme", "neljä", "viisi", "kuusi"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Finnish",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "family", translation: "perhe", romanization: "PEHR-heh" },
      { word: "mother", translation: "äiti", romanization: "AY-tee" },
      { word: "father", translation: "isä", romanization: "EE-sah" },
      { word: "sister", translation: "sisko", romanization: "SEES-koh" },
      { word: "brother", translation: "veli", romanization: "VEH-lee" },
      { word: "son", translation: "poika", romanization: "POY-kah" },
      { word: "daughter", translation: "tytär", romanization: "TOO-tar" },
      { word: "grandmother", translation: "isoäiti", romanization: "EE-soh-ay-tee" },
      { word: "grandfather", translation: "isoisä", romanization: "EE-soh-ee-sah" }
    ],
    phrases: [
      { english: "This is my family", translation: "Tämä on minun perheeni", romanization: "TAH-mah ohn MEE-noon PEHR-heh-nee" },
      { english: "I have two sisters", translation: "Minulla on kaksi siskoa", romanization: "MEE-nool-lah ohn KAHK-see SEES-koh-ah" },
      { english: "My mother is a teacher", translation: "Minun äitini on opettaja", romanization: "MEE-noon AY-tee-nee ohn oh-PEHT-tah-yah" }
    ],
    grammar: {
      point: "Possessive forms",
      explanation: "Finnish uses possessive suffixes and the genitive case to show ownership.",
      examples: [
        { sentence: "Minun äitini", romanization: "MEE-noon AY-tee-nee", english: "My mother" },
        { sentence: "Hänen isänsä", romanization: "HAN-ehn EE-sahn-sah", english: "His/her father" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Finnish?",
        options: ["isä", "äiti", "sisko", "veli"],
        correct: 1
      }
    ]
  },
  {
    id: 4,
    title: "Common Verbs",
    description: "Learn essential verbs for everyday conversations",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "20 minutes",
    vocabulary: [
      { word: "to be", translation: "olla", romanization: "OHL-lah" },
      { word: "to have", translation: "olla", romanization: "OHL-lah" },
      { word: "to go", translation: "mennä", romanization: "MEHN-nah" },
      { word: "to come", translation: "tulla", romanization: "TOOL-lah" },
      { word: "to do", translation: "tehdä", romanization: "TEH-dah" },
      { word: "to say", translation: "sanoa", romanization: "SAH-noh-ah" },
      { word: "to see", translation: "nähdä", romanization: "NAH-dah" },
      { word: "to know", translation: "tietää", romanization: "TEE-eh-tah" },
      { word: "to want", translation: "haluta", romanization: "HAH-loo-tah" },
      { word: "to like", translation: "pitää", romanization: "PEE-tah" }
    ],
    phrases: [
      { english: "I want to go", translation: "Haluan mennä", romanization: "HAH-loo-ahn MEHN-nah" },
      { english: "Do you know?", translation: "Tiedätkö?", romanization: "TEE-eh-dat-koh?" },
      { english: "I like coffee", translation: "Pidän kahvista", romanization: "PEE-dan KAH-vih-stah" }
    ],
    grammar: {
      point: "Verb conjugation",
      explanation: "Finnish verbs conjugate based on person and number. The present tense endings vary by verb type.",
      examples: [
        { sentence: "Minä menen", romanization: "MEE-nah MEH-nehn", english: "I go" },
        { sentence: "Sinä menet", romanization: "SEE-nah MEH-neht", english: "You go" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'to go' in Finnish?",
        options: ["tulla", "mennä", "tehdä", "nähdä"],
        correct: 1
      }
    ]
  },
  {
    id: 5,
    title: "Food and Drinks",
    description: "Learn vocabulary for common foods and beverages",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "bread", translation: "leipä", romanization: "LAY-pah" },
      { word: "water", translation: "vesi", romanization: "VEH-see" },
      { word: "coffee", translation: "kahvi", romanization: "KAH-vee" },
      { word: "tea", translation: "tee", romanization: "TEH" },
      { word: "milk", translation: "maito", romanization: "MAY-toh" },
      { word: "cheese", translation: "juusto", romanization: "YOOS-toh" },
      { word: "apple", translation: "omena", romanization: "OH-meh-nah" },
      { word: "meat", translation: "liha", romanization: "LEE-hah" },
      { word: "fish", translation: "kala", romanization: "KAH-lah" },
      { word: "rice", translation: "riisi", romanization: "REE-see" }
    ],
    phrases: [
      { english: "I would like coffee", translation: "Haluaisin kahvia", romanization: "HAH-loo-ah-seen KAH-vee-ah" },
      { english: "Do you have water?", translation: "Onko sinulla vettä?", romanization: "OHN-koh SEE-nool-lah VEHT-tah?" },
      { english: "I'm hungry", translation: "Minulla on nälkä", romanization: "MEE-nool-lah ohn NAL-kah" }
    ],
    grammar: {
      point: "Partitive case for food",
      explanation: "When talking about food or drinks, Finnish often uses the partitive case.",
      examples: [
        { sentence: "Kahvia", romanization: "KAH-vee-ah", english: "Some coffee" },
        { sentence: "Leipää", romanization: "LAY-paah", english: "Some bread" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'water' in Finnish?",
        options: ["vesi", "kahvi", "maito", "tee"],
        correct: 0
      }
    ]
  }
];


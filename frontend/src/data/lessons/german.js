export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "hallo", romanization: "HAH-loh" },
      { word: "goodbye", translation: "auf Wiedersehen", romanization: "owf VEE-der-zay-en" },
      { word: "good morning", translation: "guten Morgen", romanization: "GOO-ten MOR-gen" },
      { word: "good afternoon", translation: "guten Tag", romanization: "GOO-ten TAHK" },
      { word: "good evening", translation: "guten Abend", romanization: "GOO-ten AH-bent" },
      { word: "thank you", translation: "danke", romanization: "DAHN-keh" },
      { word: "please", translation: "bitte", romanization: "BIT-teh" },
      { word: "excuse me", translation: "entschuldigung", romanization: "ent-SHOOL-dee-goong" },
      { word: "yes", translation: "ja", romanization: "YAH" },
      { word: "no", translation: "nein", romanization: "NYN" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "Freut mich", romanization: "FROYT mikh" },
      { english: "My name is...", translation: "Ich heiße...", romanization: "ikh HY-seh" },
      { english: "How are you?", translation: "Wie geht es Ihnen?", romanization: "vee GAYT es EE-nen?" },
      { english: "I'm fine, thank you", translation: "Mir geht es gut, danke", romanization: "meer GAYT es GOOT, DAHN-keh" },
      { english: "See you later", translation: "Bis später", romanization: "bis SHPAY-ter" },
      { english: "Take care", translation: "Passen Sie auf sich auf", romanization: "PAH-sen zee owf zikh owf" },
      { english: "Good night", translation: "Gute Nacht", romanization: "GOO-teh NAHKT" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "German follows Subject-Verb-Object order. The verb 'sein' (to be) is used for permanent characteristics.",
      examples: [
        { sentence: "Ich bin Student", romanization: "ikh bin shtoo-DENT", english: "I am a student" },
        { sentence: "Du bist Lehrer", romanization: "doo bist LAY-rer", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in German?",
        options: ["hallo", "auf Wiedersehen", "danke", "bitte"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'danke' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in German",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "eins", romanization: "YNES" },
      { word: "two", translation: "zwei", romanization: "TSVY" },
      { word: "three", translation: "drei", romanization: "DRY" },
      { word: "four", translation: "vier", romanization: "FEER" },
      { word: "five", translation: "fünf", romanization: "FOONF" },
      { word: "six", translation: "sechs", romanization: "ZEHKS" },
      { word: "seven", translation: "sieben", romanization: "ZEE-ben" },
      { word: "eight", translation: "acht", romanization: "AHKT" },
      { word: "nine", translation: "neun", romanization: "NOYN" },
      { word: "ten", translation: "zehn", romanization: "TSAYN" }
    ],
    phrases: [
      { english: "How many?", translation: "Wie viele?", romanization: "vee FEE-leh?" },
      { english: "One more, please", translation: "Noch einen, bitte", romanization: "nohkh YN-en, BIT-teh" },
      { english: "That's too many", translation: "Das ist zu viel", romanization: "dahs ist tsoo FEEL" },
      { english: "Just one", translation: "Nur einen", romanization: "noor YN-en" },
      { english: "All of them", translation: "Alle", romanization: "AH-leh" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Numbers are generally invariable, but 'ein' becomes 'eine' with feminine nouns and 'eins' with neuter nouns.",
      examples: [
        { sentence: "Ein Apfel", romanization: "yn AHP-fel", english: "One apple" },
        { sentence: "Eine Birne", romanization: "YN-eh BEER-neh", english: "One pear" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in German?",
        options: ["drei", "vier", "fünf", "sechs"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in German",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "Mutter", romanization: "MOO-ter" },
      { word: "father", translation: "Vater", romanization: "FAH-ter" },
      { word: "sister", translation: "Schwester", romanization: "SHVES-ter" },
      { word: "brother", translation: "Bruder", romanization: "BROO-der" },
      { word: "grandmother", translation: "Großmutter", romanization: "GROHS-moo-ter" },
      { word: "grandfather", translation: "Großvater", romanization: "GROHS-fah-ter" },
      { word: "aunt", translation: "Tante", romanization: "TAHN-teh" },
      { word: "uncle", translation: "Onkel", romanization: "OHN-kel" },
      { word: "cousin", translation: "Cousin/Cousine", romanization: "koo-ZEEN/koo-ZEE-neh" },
      { word: "child", translation: "Kind", romanization: "KINT" }
    ],
    phrases: [
      { english: "This is my family", translation: "Das ist meine Familie", romanization: "dahs ist MY-neh fah-MEE-lee-eh" },
      { english: "I have two sisters", translation: "Ich habe zwei Schwestern", romanization: "ikh HAH-beh tsvy SHVES-tern" },
      { english: "My mother is a teacher", translation: "Meine Mutter ist Lehrerin", romanization: "MY-neh MOO-ter ist LAY-rer-in" },
      { english: "How many people in your family?", translation: "Wie viele Personen sind in Ihrer Familie?", romanization: "vee FEE-leh per-ZOH-nen zint in EE-rer fah-MEE-lee-eh?" },
      { english: "I live with my parents", translation: "Ich lebe bei meinen Eltern", romanization: "ikh LAY-beh by MY-nen EL-tern" }
    ],
    grammar: {
      point: "Possessive adjectives",
      explanation: "Use 'mein' (my), 'dein' (your), 'sein' (his/her) before family members. These must agree with the gender of the noun.",
      examples: [
        { sentence: "Meine Mutter", romanization: "MY-neh MOO-ter", english: "my mother" },
        { sentence: "Mein Vater", romanization: "myn FAH-ter", english: "my father" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in German?",
        options: ["Vater", "Mutter", "Großmutter", "Tante"],
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
      { word: "water", translation: "Wasser", romanization: "VAH-ser" },
      { word: "tea", translation: "Tee", romanization: "TAY" },
      { word: "coffee", translation: "Kaffee", romanization: "kah-FAY" },
      { word: "rice", translation: "Reis", romanization: "RYS" },
      { word: "bread", translation: "Brot", romanization: "BROHT" },
      { word: "meat", translation: "Fleisch", romanization: "FLYSH" },
      { word: "fish", translation: "Fisch", romanization: "FISH" },
      { word: "vegetables", translation: "Gemüse", romanization: "geh-MOO-zeh" },
      { word: "fruit", translation: "Obst", romanization: "OHPST" },
      { word: "soup", translation: "Suppe", romanization: "ZOO-peh" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "Ich habe Hunger", romanization: "ikh HAH-beh HOONG-er" },
      { english: "I'm thirsty", translation: "Ich habe Durst", romanization: "ikh HAH-beh DOORST" },
      { english: "What would you like to eat?", translation: "Was möchten Sie essen?", romanization: "vahs MURKH-ten zee ES-sen?" },
      { english: "This is delicious", translation: "Das ist lecker", romanization: "dahs ist LEK-ker" },
      { english: "I don't like this", translation: "Das mag ich nicht", romanization: "dahs mahk ikh nikht" },
      { english: "Check, please", translation: "Die Rechnung, bitte", romanization: "dee REKH-noong, BIT-teh" }
    ],
    grammar: {
      point: "Mögen (to like)",
      explanation: "Use 'ich mag' for 'I like' and 'du magst' for 'you like'. Use 'nicht' for negative.",
      examples: [
        { sentence: "Ich mag Kaffee", romanization: "ikh mahk kah-FAY", english: "I like coffee" },
        { sentence: "Ich mag keinen Tee", romanization: "ikh mahk KY-nen TAY", english: "I don't like tea" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in German?",
        options: ["Ich habe Durst", "Ich habe Hunger", "Das ist lecker", "Das mag ich nicht"],
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
      { word: "red", translation: "rot", romanization: "ROHT" },
      { word: "blue", translation: "blau", romanization: "BLOW" },
      { word: "green", translation: "grün", romanization: "GROON" },
      { word: "yellow", translation: "gelb", romanization: "GELP" },
      { word: "black", translation: "schwarz", romanization: "SHVARTS" },
      { word: "white", translation: "weiß", romanization: "VYS" },
      { word: "big", translation: "groß", romanization: "GROHS" },
      { word: "small", translation: "klein", romanization: "KLYN" },
      { word: "beautiful", translation: "schön", romanization: "SHURN" },
      { word: "new", translation: "neu", romanization: "NOY" }
    ],
    phrases: [
      { english: "What color is this?", translation: "Welche Farbe ist das?", romanization: "VEL-kheh FAR-beh ist dahs?" },
      { english: "I like blue", translation: "Ich mag Blau", romanization: "ikh mahk BLOW" },
      { english: "This is beautiful", translation: "Das ist schön", romanization: "dahs ist SHURN" },
      { english: "It's too big", translation: "Das ist zu groß", romanization: "dahs ist tsoo GROHS" },
      { english: "I want a small one", translation: "Ich möchte einen kleinen", romanization: "ikh MURKH-teh Y-nen KLY-nen" }
    ],
    grammar: {
      point: "Adjective agreement",
      explanation: "Adjectives must agree with the gender and number of the noun they describe. They come after the noun in some cases.",
      examples: [
        { sentence: "Ein rotes Auto", romanization: "yn ROH-tes OW-toh", english: "a red car" },
        { sentence: "Eine rote Blume", romanization: "YN-eh ROH-teh BLOO-meh", english: "a red flower" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in German?",
        options: ["rot", "blau", "grün", "gelb"],
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
      { word: "hour", translation: "Stunde", romanization: "SHTOON-deh" },
      { word: "minute", translation: "Minute", romanization: "mee-NOO-teh" },
      { word: "morning", translation: "Morgen", romanization: "MOR-gen" },
      { word: "afternoon", translation: "Nachmittag", romanization: "NAHKH-mit-tahk" },
      { word: "evening", translation: "Abend", romanization: "AH-bent" },
      { word: "night", translation: "Nacht", romanization: "NAHKT" },
      { word: "today", translation: "heute", romanization: "HOY-teh" },
      { word: "tomorrow", translation: "morgen", romanization: "MOR-gen" },
      { word: "yesterday", translation: "gestern", romanization: "geh-STER-n" },
      { word: "week", translation: "Woche", romanization: "VOH-kheh" }
    ],
    phrases: [
      { english: "What time is it?", translation: "Wie spät ist es?", romanization: "vee SHPAYT ist es?" },
      { english: "It's 3 o'clock", translation: "Es ist drei Uhr", romanization: "es ist dry OOR" },
      { english: "What day is today?", translation: "Welcher Tag ist heute?", romanization: "VEL-kher tahk ist HOY-teh?" },
      { english: "I'm busy tomorrow", translation: "Ich bin morgen beschäftigt", romanization: "ikh bin MOR-gen beh-SHEF-tikt" },
      { english: "See you next week", translation: "Bis nächste Woche", romanization: "bis NAYKH-steh VOH-kheh" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use 'es ist' for 'it is' with time. 'Um' means 'at' for specific times.",
      examples: [
        { sentence: "Um drei Uhr", romanization: "oom dry OOR", english: "At three o'clock" },
        { sentence: "Es ist Mittag", romanization: "es ist MIT-tahk", english: "It's noon" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in German?",
        options: ["Wie spät ist es?", "Es ist drei Uhr", "Welcher Tag ist heute?", "Ich bin morgen beschäftigt"],
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
      { word: "money", translation: "Geld", romanization: "GELT" },
      { word: "price", translation: "Preis", romanization: "PRYS" },
      { word: "expensive", translation: "teuer", romanization: "TOY-er" },
      { word: "cheap", translation: "billig", romanization: "BIL-ikh" },
      { word: "store", translation: "Geschäft", romanization: "geh-SHEFT" },
      { word: "buy", translation: "kaufen", romanization: "KOW-fen" },
      { word: "sell", translation: "verkaufen", romanization: "fer-KOW-fen" },
      { word: "discount", translation: "Rabatt", romanization: "rah-BAHT" },
      { word: "receipt", translation: "Quittung", romanization: "KVIT-oong" },
      { word: "change", translation: "Wechselgeld", romanization: "VEK-sel-gelt" }
    ],
    phrases: [
      { english: "How much is this?", translation: "Wie viel kostet das?", romanization: "vee feel KOS-tet dahs?" },
      { english: "It's too expensive", translation: "Das ist zu teuer", romanization: "dahs ist tsoo TOY-er" },
      { english: "Do you have a discount?", translation: "Haben Sie einen Rabatt?", romanization: "HAH-ben zee Y-nen rah-BAHT?" },
      { english: "I'll take this", translation: "Ich nehme das", romanization: "ikh NAY-meh dahs" },
      { english: "Can I pay by card?", translation: "Kann ich mit Karte bezahlen?", romanization: "kahn ikh mit KAR-teh beh-TSAH-len?" }
    ],
    grammar: {
      point: "Cost expressions",
      explanation: "Use 'kosten' for 'to cost' and 'wie viel' for 'how much'. 'Das kostet' means 'it costs'.",
      examples: [
        { sentence: "Das kostet zehn Euro", romanization: "dahs KOS-tet tsayn OY-roh", english: "It costs ten euros" },
        { sentence: "Wie viel kostet das?", romanization: "vee feel KOS-tet dahs?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in German?",
        options: ["Wie viel kostet das?", "Das ist zu teuer", "Haben Sie einen Rabatt?", "Ich nehme das"],
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
      { word: "station", translation: "Bahnhof", romanization: "BAHN-hohf" },
      { word: "train", translation: "Zug", romanization: "TSOOK" },
      { word: "bus", translation: "Bus", romanization: "BOOS" },
      { word: "taxi", translation: "Taxi", romanization: "TAHK-see" },
      { word: "right", translation: "rechts", romanization: "REKHTS" },
      { word: "left", translation: "links", romanization: "LINKS" },
      { word: "straight", translation: "geradeaus", romanization: "geh-rah-deh-OWS" },
      { word: "near", translation: "nah", romanization: "NAH" },
      { word: "far", translation: "weit", romanization: "VYT" },
      { word: "map", translation: "Karte", romanization: "KAR-teh" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "Wo ist der Bahnhof?", romanization: "voh ist der BAHN-hohf?" },
      { english: "How do I get to...?", translation: "Wie komme ich zu...?", romanization: "vee KOM-meh ikh tsoo...?" },
      { english: "Go straight", translation: "Gehen Sie geradeaus", romanization: "GAY-en zee geh-rah-deh-OWS" },
      { english: "Turn right", translation: "Biegen Sie rechts ab", romanization: "BEE-gen zee REKHTS ahp" },
      { english: "Is it far?", translation: "Ist es weit?", romanization: "ist es VYT?" }
    ],
    grammar: {
      point: "Direction prepositions",
      explanation: "Use 'zu' (to) for destination, 'mit' (with) for transportation, and 'von' (from) for origin.",
      examples: [
        { sentence: "Ich gehe zum Bahnhof", romanization: "ikh GAY-eh tsoom BAHN-hohf", english: "I go to the station" },
        { sentence: "Ich fahre mit dem Zug", romanization: "ikh FAH-reh mit dem TSOOK", english: "I go by train" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in German?",
        options: ["Wo ist der Bahnhof?", "Gehen Sie geradeaus", "Biegen Sie rechts ab", "Ist es weit?"],
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
      { word: "weather", translation: "Wetter", romanization: "VET-ter" },
      { word: "sunny", translation: "sonnig", romanization: "ZON-ikh" },
      { word: "rainy", translation: "regnerisch", romanization: "RAYG-neh-rish" },
      { word: "cloudy", translation: "bewölkt", romanization: "beh-VURKT" },
      { word: "snow", translation: "Schnee", romanization: "SHNAY" },
      { word: "hot", translation: "heiß", romanization: "HYS" },
      { word: "cold", translation: "kalt", romanization: "KAHLT" },
      { word: "spring", translation: "Frühling", romanization: "FROO-ling" },
      { word: "summer", translation: "Sommer", romanization: "ZOM-mer" },
      { word: "autumn", translation: "Herbst", romanization: "HERPST" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "Wie ist das Wetter?", romanization: "vee ist dahs VET-ter?" },
      { english: "It's sunny today", translation: "Heute ist es sonnig", romanization: "HOY-teh ist es ZON-ikh" },
      { english: "It's raining", translation: "Es regnet", romanization: "es RAYG-net" },
      { english: "It's very hot", translation: "Es ist sehr heiß", romanization: "es ist zayr HYS" },
      { english: "I like spring", translation: "Ich mag den Frühling", romanization: "ikh mahk den FROO-ling" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use 'es ist' for weather conditions like 'es ist sonnig' (it's sunny) and 'es regnet' (it's raining).",
      examples: [
        { sentence: "Es ist sonnig", romanization: "es ist ZON-ikh", english: "It's sunny" },
        { sentence: "Es regnet", romanization: "es RAYG-net", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in German?",
        options: ["Es regnet", "Heute ist es sonnig", "Es ist sehr heiß", "Ich mag den Frühling"],
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
      { word: "hobby", translation: "Hobby", romanization: "HOH-bee" },
      { word: "music", translation: "Musik", romanization: "moo-ZEEK" },
      { word: "sports", translation: "Sport", romanization: "SHPORT" },
      { word: "reading", translation: "Lesen", romanization: "LAY-zen" },
      { word: "cooking", translation: "Kochen", romanization: "KOH-khen" },
      { word: "traveling", translation: "Reisen", romanization: "RY-zen" },
      { word: "photography", translation: "Fotografie", romanization: "foh-toh-grah-FEE" },
      { word: "dancing", translation: "Tanzen", romanization: "TAHN-tsen" },
      { word: "swimming", translation: "Schwimmen", romanization: "SHVIM-men" },
      { word: "painting", translation: "Malen", romanization: "MAH-len" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "Was ist Ihr Hobby?", romanization: "vahs ist eer HOH-bee?" },
      { english: "I like music", translation: "Ich mag Musik", romanization: "ikh mahk moo-ZEEK" },
      { english: "I play tennis", translation: "Ich spiele Tennis", romanization: "ikh SHPEEL-eh TEN-nis" },
      { english: "I enjoy reading", translation: "Ich lese gerne", romanization: "ikh LAY-seh GER-neh" },
      { english: "What do you do in your free time?", translation: "Was machen Sie in Ihrer Freizeit?", romanization: "vahs MAH-khen zee in EE-rer FRY-tsyt?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use 'spielen' (to play) for sports and games, 'spielen' (to play) for musical instruments, and 'machen' (to do) for activities.",
      examples: [
        { sentence: "Ich spiele Fußball", romanization: "ikh SHPEEL-eh FOOS-bahl", english: "I play soccer" },
        { sentence: "Ich spiele Klavier", romanization: "ikh SHPEEL-eh klah-VEER", english: "I play the piano" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in German?",
        options: ["Was ist Ihr Hobby?", "Ich mag Musik", "Ich spiele Tennis", "Was machen Sie in Ihrer Freizeit?"],
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
      { word: "work", translation: "Arbeit", romanization: "AR-byt" },
      { word: "office", translation: "Büro", romanization: "BOO-roh" },
      { word: "company", translation: "Firma", romanization: "FIR-mah" },
      { word: "teacher", translation: "Lehrer", romanization: "LAY-rer" },
      { word: "doctor", translation: "Arzt", romanization: "ARTS-t" },
      { word: "engineer", translation: "Ingenieur", romanization: "in-geh-NYUHR" },
      { word: "student", translation: "Student", romanization: "shtoo-DENT" },
      { word: "manager", translation: "Manager", romanization: "MAH-nah-ger" },
      { word: "secretary", translation: "Sekretärin", romanization: "zeh-kreh-TAY-rin" },
      { word: "retired", translation: "pensioniert", romanization: "pen-syoh-NEERT" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "Was machen Sie beruflich?", romanization: "vahs MAH-khen zee beh-ROOF-likh?" },
      { english: "I work at a company", translation: "Ich arbeite bei einer Firma", romanization: "ikh AR-byt-eh by Y-ner FIR-mah" },
      { english: "I'm a teacher", translation: "Ich bin Lehrer", romanization: "ikh bin LAY-rer" },
      { english: "I'm looking for a job", translation: "Ich suche einen Job", romanization: "ikh ZOO-kheh Y-nen job" },
      { english: "I work from home", translation: "Ich arbeite von zu Hause", romanization: "ikh AR-byt-eh fon tsoo HOW-zeh" }
    ],
    grammar: {
      point: "Work-related prepositions",
      explanation: "Use 'bei' (at) for workplace, 'als' (as) for profession, and 'für' (for) for employer.",
      examples: [
        { sentence: "Ich arbeite in einem Büro", romanization: "ikh AR-byt-eh in Y-nem BOO-roh", english: "I work in an office" },
        { sentence: "Ich arbeite als Lehrer", romanization: "ikh AR-byt-eh ahls LAY-rer", english: "I work as a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in German?",
        options: ["Was machen Sie beruflich?", "Ich arbeite bei einer Firma", "Ich bin Lehrer", "Ich suche einen Job"],
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
      { word: "head", translation: "Kopf", romanization: "KOPF" },
      { word: "eye", translation: "Auge", romanization: "OW-geh" },
      { word: "nose", translation: "Nase", romanization: "NAH-zeh" },
      { word: "mouth", translation: "Mund", romanization: "MOONT" },
      { word: "hand", translation: "Hand", romanization: "HAHNT" },
      { word: "foot", translation: "Fuß", romanization: "FOOS" },
      { word: "sick", translation: "krank", romanization: "KRAHNK" },
      { word: "healthy", translation: "gesund", romanization: "geh-ZOONT" },
      { word: "hospital", translation: "Krankenhaus", romanization: "KRAHN-ken-hows" },
      { word: "medicine", translation: "Medizin", romanization: "meh-dee-TSEEN" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "Mir geht es nicht gut", romanization: "meer GAYT es nikht GOOT" },
      { english: "I have a headache", translation: "Ich habe Kopfschmerzen", romanization: "ikh HAH-beh KOPF-shmer-tsen" },
      { english: "I need to see a doctor", translation: "Ich muss einen Arzt aufsuchen", romanization: "ikh moos Y-nen ARTS-t OWF-zoo-khen" },
      { english: "Are you okay?", translation: "Geht es Ihnen gut?", romanization: "GAYT es EE-nen GOOT?" },
      { english: "I feel better now", translation: "Mir geht es jetzt besser", romanization: "meer GAYT es yets BES-ser" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'haben' (to have) with 'Schmerzen' (pain) for body aches. 'Ich habe Kopfschmerzen' means 'I have a headache'.",
      examples: [
        { sentence: "Ich habe Kopfschmerzen", romanization: "ikh HAH-beh KOPF-shmer-tsen", english: "I have a headache" },
        { sentence: "Ich habe Rückenschmerzen", romanization: "ikh HAH-beh ROO-ken-shmer-tsen", english: "I have back pain" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in German?",
        options: ["Ich habe Kopfschmerzen", "Mir geht es nicht gut", "Ich muss einen Arzt aufsuchen", "Geht es Ihnen gut?"],
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
      { word: "computer", translation: "Computer", romanization: "kom-PYOO-ter" },
      { word: "phone", translation: "Telefon", romanization: "teh-leh-FOHN" },
      { word: "internet", translation: "Internet", romanization: "IN-ter-net" },
      { word: "email", translation: "E-Mail", romanization: "EE-mayl" },
      { word: "website", translation: "Website", romanization: "VEBS-yt" },
      { word: "password", translation: "Passwort", romanization: "PAHS-vort" },
      { word: "download", translation: "herunterladen", romanization: "heh-ROON-ter-lah-den" },
      { word: "upload", translation: "hochladen", romanization: "HOHKH-lah-den" },
      { word: "app", translation: "App", romanization: "AHP" },
      { word: "social media", translation: "soziale Medien", romanization: "ZOH-tsyah-leh MAY-dee-en" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "Ich benutze jeden Tag das Internet", romanization: "ikh beh-NOOT-seh YAY-den tahk dahs IN-ter-net" },
      { english: "Can you help me with my computer?", translation: "Können Sie mir mit meinem Computer helfen?", romanization: "KUR-nen zee meer mit MY-nem kom-PYOO-ter HEL-fen?" },
      { english: "I forgot my password", translation: "Ich habe mein Passwort vergessen", romanization: "ikh HAH-beh myn PAHS-vort fer-GES-sen" },
      { english: "Do you have WiFi?", translation: "Haben Sie WiFi?", romanization: "HAH-ben zee WEE-fee?" },
      { english: "I'll send you an email", translation: "Ich schicke Ihnen eine E-Mail", romanization: "ikh SHIK-keh EE-nen Y-neh EE-mayl" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use 'benutzen' (to use) for technology, 'schicken' (to send) for emails, and 'herunterladen' (to download) for files.",
      examples: [
        { sentence: "Ich benutze meinen Computer", romanization: "ikh beh-NOOT-seh MY-nen kom-PYOO-ter", english: "I use my computer" },
        { sentence: "Ich schicke eine E-Mail", romanization: "ikh SHIK-keh Y-neh EE-mayl", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in German?",
        options: ["Ich benutze jeden Tag das Internet", "Können Sie mir mit meinem Computer helfen?", "Ich habe mein Passwort vergessen", "Haben Sie WiFi?"],
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
      { word: "passport", translation: "Reisepass", romanization: "RY-ze-pahs" },
      { word: "visa", translation: "Visum", romanization: "VEE-zoom" },
      { word: "hotel", translation: "Hotel", romanization: "hoh-TEL" },
      { word: "restaurant", translation: "Restaurant", romanization: "res-toh-RAHN" },
      { word: "tourist", translation: "Tourist", romanization: "too-REEST" },
      { word: "sightseeing", translation: "Sightseeing", romanization: "SYT-see-ing" },
      { word: "museum", translation: "Museum", romanization: "moo-ZAY-oom" },
      { word: "church", translation: "Kirche", romanization: "KIR-kheh" },
      { word: "castle", translation: "Schloss", romanization: "SHLOS" },
      { word: "garden", translation: "Garten", romanization: "GAR-ten" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "Ich bin Tourist", romanization: "ikh bin too-REEST" },
      { english: "Where is the hotel?", translation: "Wo ist das Hotel?", romanization: "voh ist dahs hoh-TEL?" },
      { english: "I want to see the museum", translation: "Ich möchte das Museum sehen", romanization: "ikh MURKH-teh dahs moo-ZAY-oom ZAY-en" },
      { english: "How much is the entrance fee?", translation: "Wie viel kostet der Eintritt?", romanization: "vee feel KOS-tet der YN-trit?" },
      { english: "Can you take a photo?", translation: "Können Sie ein Foto machen?", romanization: "KUR-nen zee yn FOH-toh MAH-khen?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use 'sehen wollen' (to want to see) for sightseeing and 'machen' (to take) for photos.",
      examples: [
        { sentence: "Ich möchte das Museum sehen", romanization: "ikh MURKH-teh dahs moo-ZAY-oom ZAY-en", english: "I want to see the museum" },
        { sentence: "Ein Foto machen", romanization: "yn FOH-toh MAH-khen", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in German?",
        options: ["Ich bin Tourist", "Wo ist das Hotel?", "Ich möchte das Museum sehen", "Wie viel kostet der Eintritt?"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about German entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "Film", romanization: "FILM" },
      { word: "music", translation: "Musik", romanization: "moo-ZEEK" },
      { word: "concert", translation: "Konzert", romanization: "kon-TSERT" },
      { word: "theater", translation: "Theater", romanization: "teh-AH-ter" },
      { word: "museum", translation: "Museum", romanization: "moo-ZAY-oom" },
      { word: "art", translation: "Kunst", romanization: "KOONST" },
      { word: "tradition", translation: "Tradition", romanization: "trah-dee-TSYOHN" },
      { word: "festival", translation: "Festival", romanization: "fes-tee-VAHL" },
      { word: "dance", translation: "Tanz", romanization: "TAHNTS" },
      { word: "opera", translation: "Oper", romanization: "OH-per" }
    ],
    phrases: [
      { english: "I like German movies", translation: "Ich mag deutsche Filme", romanization: "ikh mahk DOY-cheh FIL-meh" },
      { english: "Let's go to a concert", translation: "Gehen wir zu einem Konzert", romanization: "GAY-en veer tsoo Y-nem kon-TSERT" },
      { english: "I want to see traditional art", translation: "Ich möchte traditionelle Kunst sehen", romanization: "ikh MURKH-teh trah-dee-tzyoh-NEL-eh KOONST ZAY-en" },
      { english: "When is the festival?", translation: "Wann ist das Festival?", romanization: "vahn ist dahs fes-tee-VAHL?" },
      { english: "I want to learn German", translation: "Ich möchte Deutsch lernen", romanization: "ikh MURKH-teh DOYCH LER-nen" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'lernen' (to learn) for skills and 'lehren' (to teach) for sharing knowledge.",
      examples: [
        { sentence: "Deutsch lernen", romanization: "DOYCH LER-nen", english: "Learn German" },
        { sentence: "Englisch lehren", romanization: "ENG-lish LAY-ren", english: "Teach English" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like German movies' in German?",
        options: ["Ich mag deutsche Filme", "Gehen wir zu einem Konzert", "Ich möchte traditionelle Kunst sehen", "Wann ist das Festival?"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business German and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "Besprechung", romanization: "beh-SPREH-khoong" },
      { word: "presentation", translation: "Präsentation", romanization: "pray-zen-tah-TSYOHN" },
      { word: "contract", translation: "Vertrag", romanization: "fer-TRAHK" },
      { word: "client", translation: "Kunde", romanization: "KOON-deh" },
      { word: "colleague", translation: "Kollege", romanization: "koh-LAY-geh" },
      { word: "boss", translation: "Chef", romanization: "SHEF" },
      { word: "deadline", translation: "Frist", romanization: "FRIST" },
      { word: "project", translation: "Projekt", romanization: "proh-YEKT" },
      { word: "budget", translation: "Budget", romanization: "boo-ZHEH" },
      { word: "report", translation: "Bericht", romanization: "beh-RIKHT" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "Freut mich, Sie kennenzulernen", romanization: "FROYT mikh, zee KEN-nen-tsoo-ler-nen" },
      { english: "Thank you for your time", translation: "Vielen Dank für Ihre Zeit", romanization: "FEE-len dahnk foor EE-reh TSYT" },
      { english: "I look forward to working with you", translation: "Ich freue mich auf die Zusammenarbeit", romanization: "ikh FROY-eh mikh owf dee tsoo-ZAH-men-ar-byt" },
      { english: "Could you please...?", translation: "Könnten Sie bitte...?", romanization: "KUR-ten zee BIT-teh...?" },
      { english: "I apologize for the inconvenience", translation: "Entschuldigung für die Unannehmlichkeiten", romanization: "ent-SHOOL-dee-goong foor dee OON-ah-neh-mikh-kyt-en" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business German uses 'Sie' (formal you) and 'Ihr' (your) instead of 'du' and 'dein'. Use 'könnten Sie' for polite requests.",
      examples: [
        { sentence: "Könnten Sie mir helfen?", romanization: "KUR-ten zee meer HEL-fen?", english: "Could you help me?" },
        { sentence: "Ihr Büro", romanization: "eer BOO-roh", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in German?",
        options: ["Freut mich, Sie kennenzulernen", "Vielen Dank für Ihre Zeit", "Ich freue mich auf die Zusammenarbeit", "Könnten Sie bitte...?"],
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
      { word: "although", translation: "obwohl", romanization: "op-VOHL" },
      { word: "however", translation: "jedoch", romanization: "yeh-DOHKH" },
      { word: "therefore", translation: "deshalb", romanization: "des-HAHLP" },
      { word: "moreover", translation: "außerdem", romanization: "OWS-der-dem" },
      { word: "nevertheless", translation: "trotzdem", romanization: "TROTS-dem" },
      { word: "consequently", translation: "folglich", romanization: "FOLG-likh" },
      { word: "meanwhile", translation: "währenddessen", romanization: "VAY-rent-des-sen" },
      { word: "furthermore", translation: "außerdem", romanization: "OWS-der-dem" },
      { word: "likewise", translation: "ebenso", romanization: "AY-ben-zoh" },
      { word: "otherwise", translation: "sonst", romanization: "ZONST" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "Obwohl es schwierig ist, werde ich es versuchen", romanization: "op-VOHL es SHVEER-ikh ist, VER-deh ikh es fer-ZOO-khen" },
      { english: "However, I think it's possible", translation: "Jedoch denke ich, dass es möglich ist", romanization: "yeh-DOHKH DEN-keh ikh, dahs es MURG-likh ist" },
      { english: "Therefore, we should continue", translation: "Deshalb sollten wir weitermachen", romanization: "des-HAHLP ZOL-ten veer VY-ter-mah-khen" },
      { english: "Moreover, it's important", translation: "Außerdem ist es wichtig", romanization: "OWS-der-dem ist es VIK-tikh" },
      { english: "Nevertheless, I believe", translation: "Trotzdem glaube ich", romanization: "TROTS-dem GLOW-beh ikh" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced German uses complex conjunctions to connect ideas. 'Obwohl' means 'although' and 'deshalb' means 'therefore'.",
      examples: [
        { sentence: "Obwohl es schwierig ist, werde ich es versuchen", romanization: "op-VOHL es SHVEER-ikh ist, VER-deh ikh es fer-ZOO-khen", english: "Although it's difficult, I'll try" },
        { sentence: "Deshalb mache ich weiter", romanization: "des-HAHLP MAH-kheh ikh VY-ter", english: "Therefore, I continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in German?",
        options: ["Obwohl es schwierig ist, werde ich es versuchen", "Jedoch denke ich, dass es möglich ist", "Deshalb sollten wir weitermachen", "Außerdem ist es wichtig"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common German idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "Redewendung", romanization: "RAY-deh-ven-doong" },
      { word: "expression", translation: "Ausdruck", romanization: "OWS-drook" },
      { word: "proverb", translation: "Sprichwort", romanization: "SHPRIKH-vort" },
      { word: "metaphor", translation: "Metapher", romanization: "meh-tah-FER" },
      { word: "saying", translation: "Sprüche", romanization: "SPROO-kheh" },
      { word: "cultural", translation: "kulturell", romanization: "kool-too-REL" },
      { word: "traditional", translation: "traditionell", romanization: "trah-dee-tzyoh-NEL" },
      { word: "modern", translation: "modern", romanization: "moh-DERN" },
      { word: "colloquial", translation: "umgangssprachlich", romanization: "OOM-gahngs-shprahkh-likh" },
      { word: "formal", translation: "formell", romanization: "for-MEL" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "Das ist ein Kinderspiel", romanization: "dahs ist yn KIN-der-shpeel" },
      { english: "Don't count your chickens", translation: "Man soll den Tag nicht vor dem Abend loben", romanization: "mahn zol den tahk nikht for dem AH-bent LOH-ben" },
      { english: "The early bird catches the worm", translation: "Morgenstund hat Gold im Mund", romanization: "MOR-gen-shtoont haht gold im moont" },
      { english: "Actions speak louder than words", translation: "Taten sagen mehr als Worte", romanization: "TAH-ten ZAH-gen mayr ahls VOR-teh" },
      { english: "Better late than never", translation: "Besser spät als nie", romanization: "BES-ser shpayt ahls nee" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "German idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "Das ist ein Kinderspiel", romanization: "dahs ist yn KIN-der-shpeel", english: "It's a piece of cake (literally: it's a children's game)" },
        { sentence: "Morgenstund hat Gold im Mund", romanization: "MOR-gen-shtoont haht gold im moont", english: "Morning hour has gold in its mouth" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in German?",
        options: ["Das ist ein Kinderspiel", "Man soll den Tag nicht vor dem Abend loben", "Morgenstund hat Gold im Mund", "Taten sagen mehr als Worte"],
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
      { word: "conversation", translation: "Gespräch", romanization: "geh-SHPRAYKH" },
      { word: "dialogue", translation: "Dialog", romanization: "dee-ah-LOHG" },
      { word: "discussion", translation: "Diskussion", romanization: "dis-koo-SYOHN" },
      { word: "debate", translation: "Debatte", romanization: "deh-BAH-teh" },
      { word: "negotiation", translation: "Verhandlung", romanization: "fer-HAHN-dloong" },
      { word: "persuasion", translation: "Überredung", romanization: "OO-ber-ray-doong" },
      { word: "agreement", translation: "Einigung", romanization: "YN-ee-goong" },
      { word: "disagreement", translation: "Meinungsverschiedenheit", romanization: "MY-noongs-fer-shee-den-hyt" },
      { word: "compromise", translation: "Kompromiss", romanization: "kom-proh-MIS" },
      { word: "consensus", translation: "Konsens", romanization: "kon-ZENS" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "Was denken Sie über...?", romanization: "vahs DEN-ken zee OO-ber...?" },
      { english: "I agree with you", translation: "Ich stimme Ihnen zu", romanization: "ikh SHTIM-meh EE-nen tsoo" },
      { english: "I have a different opinion", translation: "Ich habe eine andere Meinung", romanization: "ikh HAH-beh Y-neh AHN-deh-reh MY-noong" },
      { english: "Let's discuss this further", translation: "Lassen Sie uns das weiter besprechen", romanization: "LAH-sen zee oons dahs VY-ter beh-SPREH-khen" },
      { english: "I understand your point", translation: "Ich verstehe Ihren Standpunkt", romanization: "ikh fer-SHTAY-eh EE-ren SHTAHNT-poonkt" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "Was denken Sie über...?", romanization: "vahs DEN-ken zee OO-ber...?", english: "What do you think about...?" },
        { sentence: "Ich stimme Ihnen zu", romanization: "ikh SHTIM-meh EE-nen tsoo", english: "I agree with you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in German?",
        options: ["Was denken Sie über...?", "Ich stimme Ihnen zu", "Ich habe eine andere Meinung", "Lassen Sie uns das weiter besprechen"],
        correct: 0
      }
    ]
  }
];
export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "bonjour", romanization: "bohn-ZHOOR" },
      { word: "goodbye", translation: "au revoir", romanization: "oh ruh-VWAHR" },
      { word: "good morning", translation: "bonjour", romanization: "bohn-ZHOOR" },
      { word: "good afternoon", translation: "bon après-midi", romanization: "bohn ah-preh mee-DEE" },
      { word: "good evening", translation: "bonsoir", romanization: "bohn-SWAHR" },
      { word: "thank you", translation: "merci", romanization: "mehr-SEE" },
      { word: "please", translation: "s'il vous plaît", romanization: "seel voo PLEH" },
      { word: "excuse me", translation: "excusez-moi", romanization: "ehk-skoo-zay MWAH" },
      { word: "yes", translation: "oui", romanization: "WEE" },
      { word: "no", translation: "non", romanization: "NOHN" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "Enchanté(e)", romanization: "ahn-shahn-TAY" },
      { english: "My name is...", translation: "Je m'appelle...", romanization: "zhuh mah-PEHL" },
      { english: "How are you?", translation: "Comment allez-vous?", romanization: "koh-MAHN tah-lay VOO?" },
      { english: "I'm fine, thank you", translation: "Je vais bien, merci", romanization: "zhuh VEH byehn, mehr-SEE" },
      { english: "See you later", translation: "À bientôt", romanization: "ah byehn-TOH" },
      { english: "Take care", translation: "Prenez soin de vous", romanization: "pruh-NAY swahn duh VOO" },
      { english: "Good night", translation: "Bonne nuit", romanization: "bohn NWEE" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "French follows Subject-Verb-Object order. The verb 'être' (to be) is used for permanent characteristics.",
      examples: [
        { sentence: "Je suis étudiant", romanization: "zhuh SWEE ay-too-DYAHN", english: "I am a student" },
        { sentence: "Tu es professeur", romanization: "too EH proh-feh-SUHR", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in French?",
        options: ["bonjour", "au revoir", "merci", "s'il vous plaît"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'merci' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in French",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "un", romanization: "UHN" },
      { word: "two", translation: "deux", romanization: "DUH" },
      { word: "three", translation: "trois", romanization: "TWAH" },
      { word: "four", translation: "quatre", romanization: "KAHT-ruh" },
      { word: "five", translation: "cinq", romanization: "SANK" },
      { word: "six", translation: "six", romanization: "SEES" },
      { word: "seven", translation: "sept", romanization: "SEHT" },
      { word: "eight", translation: "huit", romanization: "WEET" },
      { word: "nine", translation: "neuf", romanization: "NUHF" },
      { word: "ten", translation: "dix", romanization: "DEES" }
    ],
    phrases: [
      { english: "How many?", translation: "Combien?", romanization: "kohn-BYEHN?" },
      { english: "One more, please", translation: "Encore un, s'il vous plaît", romanization: "ahn-KOHR uhn, seel voo PLEH" },
      { english: "That's too many", translation: "C'est trop", romanization: "seh TROH" },
      { english: "Just one", translation: "Seulement un", romanization: "suhl-MAHN uhn" },
      { english: "All of them", translation: "Tous", romanization: "TOO" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Numbers are generally invariable, but 'un' becomes 'une' with feminine nouns.",
      examples: [
        { sentence: "Une pomme", romanization: "oon POHM", english: "One apple" },
        { sentence: "Un livre", romanization: "uhn LEEV-ruh", english: "One book" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in French?",
        options: ["trois", "quatre", "cinq", "six"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in French",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "mère", romanization: "MEHR" },
      { word: "father", translation: "père", romanization: "PEHR" },
      { word: "sister", translation: "sœur", romanization: "SUHR" },
      { word: "brother", translation: "frère", romanization: "FREHR" },
      { word: "grandmother", translation: "grand-mère", romanization: "grahn-MEHR" },
      { word: "grandfather", translation: "grand-père", romanization: "grahn-PEHR" },
      { word: "aunt", translation: "tante", romanization: "TAHNT" },
      { word: "uncle", translation: "oncle", romanization: "OHN-kluh" },
      { word: "cousin", translation: "cousin/cousine", romanization: "koo-ZEHN/koo-ZEEN" },
      { word: "child", translation: "enfant", romanization: "ahn-FAHN" }
    ],
    phrases: [
      { english: "This is my family", translation: "Voici ma famille", romanization: "vwah-SEE mah fah-MEE-yuh" },
      { english: "I have two sisters", translation: "J'ai deux sœurs", romanization: "zhay duh SUHR" },
      { english: "My mother is a teacher", translation: "Ma mère est professeur", romanization: "mah MEHR eh proh-feh-SUHR" },
      { english: "How many people in your family?", translation: "Combien de personnes dans votre famille?", romanization: "kohn-BYEHN duh pehr-SOHN dahns voh-truh fah-MEE-yuh?" },
      { english: "I live with my parents", translation: "Je vis avec mes parents", romanization: "zhuh VEE ah-VEHK meh pah-RAHN" }
    ],
    grammar: {
      point: "Possessive adjectives",
      explanation: "Use 'ma' (my), 'ta' (your), 'sa' (his/her) before feminine family members. 'Mon', 'ton', 'son' for masculine.",
      examples: [
        { sentence: "Ma mère", romanization: "mah MEHR", english: "my mother" },
        { sentence: "Mon père", romanization: "mohn PEHR", english: "my father" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in French?",
        options: ["père", "mère", "grand-mère", "tante"],
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
      { word: "water", translation: "eau", romanization: "OH" },
      { word: "tea", translation: "thé", romanization: "TAY" },
      { word: "coffee", translation: "café", romanization: "kah-FAY" },
      { word: "rice", translation: "riz", romanization: "REE" },
      { word: "bread", translation: "pain", romanization: "PEHN" },
      { word: "meat", translation: "viande", romanization: "vyahnd" },
      { word: "fish", translation: "poisson", romanization: "pwah-SOHN" },
      { word: "vegetables", translation: "légumes", romanization: "lay-GOOM" },
      { word: "fruit", translation: "fruit", romanization: "FRWEE" },
      { word: "soup", translation: "soupe", romanization: "SOOP" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "J'ai faim", romanization: "zhay FEHM" },
      { english: "I'm thirsty", translation: "J'ai soif", romanization: "zhay SWAHF" },
      { english: "What would you like to eat?", translation: "Que voulez-vous manger?", romanization: "kuh voo-lay VOO mahn-ZHAY?" },
      { english: "This is delicious", translation: "C'est délicieux", romanization: "seh day-lee-SYUH" },
      { english: "I don't like this", translation: "Je n'aime pas ça", romanization: "zhuh nehm pah SAH" },
      { english: "Check, please", translation: "L'addition, s'il vous plaît", romanization: "lah-dee-SYOHN, seel voo PLEH" }
    ],
    grammar: {
      point: "Aimer (to like)",
      explanation: "Use 'j'aime' for 'I like' and 'tu aimes' for 'you like'. Use 'ne...pas' for negative.",
      examples: [
        { sentence: "J'aime le café", romanization: "zhehm luh kah-FAY", english: "I like coffee" },
        { sentence: "Je n'aime pas le thé", romanization: "zhuh nehm pah luh TAY", english: "I don't like tea" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in French?",
        options: ["J'ai soif", "J'ai faim", "C'est délicieux", "Je n'aime pas ça"],
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
      { word: "red", translation: "rouge", romanization: "ROOZH" },
      { word: "blue", translation: "bleu", romanization: "BLUH" },
      { word: "green", translation: "vert", romanization: "VEHR" },
      { word: "yellow", translation: "jaune", romanization: "ZHOHN" },
      { word: "black", translation: "noir", romanization: "NWAHR" },
      { word: "white", translation: "blanc", romanization: "BLAHNK" },
      { word: "big", translation: "grand", romanization: "GRAHN" },
      { word: "small", translation: "petit", romanization: "puh-TEE" },
      { word: "beautiful", translation: "beau/belle", romanization: "BOH/BEHL" },
      { word: "new", translation: "nouveau/nouvelle", romanization: "noo-VOH/noo-VEHL" }
    ],
    phrases: [
      { english: "What color is this?", translation: "De quelle couleur est-ce?", romanization: "duh kehl koo-LUHR ehs?" },
      { english: "I like blue", translation: "J'aime le bleu", romanization: "zhehm luh BLUH" },
      { english: "This is beautiful", translation: "C'est beau", romanization: "seh BOH" },
      { english: "It's too big", translation: "C'est trop grand", romanization: "seh TROH GRAHN" },
      { english: "I want a small one", translation: "Je veux un petit", romanization: "zhuh vuh uhn puh-TEE" }
    ],
    grammar: {
      point: "Adjective agreement",
      explanation: "Adjectives must agree with the gender and number of the noun they describe. Add 'e' for feminine, 's' for plural.",
      examples: [
        { sentence: "Voiture rouge", romanization: "vwah-TOOR ROOZH", english: "red car" },
        { sentence: "Maison rouge", romanization: "meh-ZOHN ROOZH", english: "red house" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in French?",
        options: ["rouge", "bleu", "vert", "jaune"],
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
      { word: "hour", translation: "heure", romanization: "UHR" },
      { word: "minute", translation: "minute", romanization: "mee-NOOT" },
      { word: "morning", translation: "matin", romanization: "mah-TEHN" },
      { word: "afternoon", translation: "après-midi", romanization: "ah-preh mee-DEE" },
      { word: "evening", translation: "soir", romanization: "SWAHR" },
      { word: "night", translation: "nuit", romanization: "NWEE" },
      { word: "today", translation: "aujourd'hui", romanization: "oh-zhoor-DWEE" },
      { word: "tomorrow", translation: "demain", romanization: "duh-MEHN" },
      { word: "yesterday", translation: "hier", romanization: "YEHR" },
      { word: "week", translation: "semaine", romanization: "suh-MEHN" }
    ],
    phrases: [
      { english: "What time is it?", translation: "Quelle heure est-il?", romanization: "kehl UHR eh-TEEL?" },
      { english: "It's 3 o'clock", translation: "Il est trois heures", romanization: "eel eh TWAH UHR" },
      { english: "What day is today?", translation: "Quel jour sommes-nous?", romanization: "kehl ZHOOR sohm NOO?" },
      { english: "I'm busy tomorrow", translation: "Je suis occupé demain", romanization: "zhuh SWEE oh-koo-PAY duh-MEHN" },
      { english: "See you next week", translation: "À la semaine prochaine", romanization: "ah lah suh-MEHN proh-SHEHN" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use 'il est' for 'it is' with time. 'À' means 'at' for specific times.",
      examples: [
        { sentence: "À trois heures", romanization: "ah TWAH UHR", english: "At three o'clock" },
        { sentence: "Il est midi", romanization: "eel eh mee-DEE", english: "It's noon" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in French?",
        options: ["Quelle heure est-il?", "Il est trois heures", "Quel jour sommes-nous?", "Je suis occupé demain"],
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
      { word: "money", translation: "argent", romanization: "ahr-ZHAHN" },
      { word: "price", translation: "prix", romanization: "PREE" },
      { word: "expensive", translation: "cher", romanization: "SHEHR" },
      { word: "cheap", translation: "bon marché", romanization: "bohn mahr-SHAY" },
      { word: "store", translation: "magasin", romanization: "mah-gah-ZEHN" },
      { word: "buy", translation: "acheter", romanization: "ah-shuh-TAY" },
      { word: "sell", translation: "vendre", romanization: "vahn-druh" },
      { word: "discount", translation: "réduction", romanization: "ray-dook-SYOHN" },
      { word: "receipt", translation: "reçu", romanization: "ruh-SOO" },
      { word: "change", translation: "monnaie", romanization: "moh-NAY" }
    ],
    phrases: [
      { english: "How much is this?", translation: "Combien ça coûte?", romanization: "kohn-BYEHN sah KOOT?" },
      { english: "It's too expensive", translation: "C'est trop cher", romanization: "seh TROH SHEHR" },
      { english: "Do you have a discount?", translation: "Avez-vous une réduction?", romanization: "ah-vay VOO oon ray-dook-SYOHN?" },
      { english: "I'll take this", translation: "Je prends ça", romanization: "zhuh prahn SAH" },
      { english: "Can I pay by card?", translation: "Puis-je payer par carte?", romanization: "pweezh pay-AY pahr KAHRT?" }
    ],
    grammar: {
      point: "Cost expressions",
      explanation: "Use 'coûter' for 'to cost' and 'combien' for 'how much'. 'Ça coûte' means 'it costs'.",
      examples: [
        { sentence: "Ça coûte dix euros", romanization: "sah KOOT deez uh-ROH", english: "It costs ten euros" },
        { sentence: "Combien ça coûte?", romanization: "kohn-BYEHN sah KOOT?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in French?",
        options: ["Combien ça coûte?", "C'est trop cher", "Avez-vous une réduction?", "Je prends ça"],
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
      { word: "station", translation: "gare", romanization: "GAHR" },
      { word: "train", translation: "train", romanization: "TREHN" },
      { word: "bus", translation: "bus", romanization: "BOOS" },
      { word: "taxi", translation: "taxi", romanization: "tahk-SEE" },
      { word: "right", translation: "droite", romanization: "DWAHT" },
      { word: "left", translation: "gauche", romanization: "GOHSH" },
      { word: "straight", translation: "tout droit", romanization: "too DWAH" },
      { word: "near", translation: "près", romanization: "PREH" },
      { word: "far", translation: "loin", romanization: "LWEHN" },
      { word: "map", translation: "carte", romanization: "KAHRT" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "Où est la gare?", romanization: "oo eh lah GAHR?" },
      { english: "How do I get to...?", translation: "Comment aller à...?", romanization: "koh-MAHN tah-lay ah...?" },
      { english: "Go straight", translation: "Allez tout droit", romanization: "ah-lay too DWAH" },
      { english: "Turn right", translation: "Tournez à droite", romanization: "toor-NAY ah DWAHT" },
      { english: "Is it far?", translation: "C'est loin?", romanization: "seh LWEHN?" }
    ],
    grammar: {
      point: "Direction prepositions",
      explanation: "Use 'à' (to) for destination, 'en' (in/on) for transportation, and 'de' (from) for origin.",
      examples: [
        { sentence: "Je vais à la gare", romanization: "zhuh VEH ah lah GAHR", english: "I go to the station" },
        { sentence: "Je vais en train", romanization: "zhuh VEH ahn TREHN", english: "I go by train" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in French?",
        options: ["Où est la gare?", "Allez tout droit", "Tournez à droite", "C'est loin?"],
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
      { word: "weather", translation: "temps", romanization: "TAHN" },
      { word: "sunny", translation: "ensoleillé", romanization: "ahn-soh-lay-YAY" },
      { word: "rainy", translation: "pluvieux", romanization: "ploo-VYUH" },
      { word: "cloudy", translation: "nuageux", romanization: "noo-ah-ZHUH" },
      { word: "snow", translation: "neige", romanization: "NEHZH" },
      { word: "hot", translation: "chaud", romanization: "SHOH" },
      { word: "cold", translation: "froid", romanization: "FWAH" },
      { word: "spring", translation: "printemps", romanization: "prehn-TAHN" },
      { word: "summer", translation: "été", romanization: "ay-TAY" },
      { word: "autumn", translation: "automne", romanization: "oh-TOHN" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "Quel temps fait-il?", romanization: "kehl TAHN feh-TEEL?" },
      { english: "It's sunny today", translation: "Il fait soleil aujourd'hui", romanization: "eel feh soh-LEH oh-zhoor-DWEE" },
      { english: "It's raining", translation: "Il pleut", romanization: "eel PLUH" },
      { english: "It's very hot", translation: "Il fait très chaud", romanization: "eel feh treh SHOH" },
      { english: "I like spring", translation: "J'aime le printemps", romanization: "zhehm luh prehn-TAHN" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use 'il fait' for weather conditions like 'il fait soleil' (it's sunny) and 'il pleut' (it's raining).",
      examples: [
        { sentence: "Il fait soleil", romanization: "eel feh soh-LEH", english: "It's sunny" },
        { sentence: "Il pleut", romanization: "eel PLUH", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in French?",
        options: ["Il pleut", "Il fait soleil aujourd'hui", "Il fait très chaud", "J'aime le printemps"],
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
      { word: "hobby", translation: "passe-temps", romanization: "pahs-TAHN" },
      { word: "music", translation: "musique", romanization: "moo-ZEEK" },
      { word: "sports", translation: "sports", romanization: "SPOHR" },
      { word: "reading", translation: "lecture", romanization: "lehk-TOOR" },
      { word: "cooking", translation: "cuisine", romanization: "kwee-ZEEN" },
      { word: "traveling", translation: "voyage", romanization: "vwah-YAHZH" },
      { word: "photography", translation: "photographie", romanization: "foh-toh-grah-FEE" },
      { word: "dancing", translation: "danse", romanization: "DAHNS" },
      { word: "swimming", translation: "natation", romanization: "nah-tah-SYOHN" },
      { word: "painting", translation: "peinture", romanization: "pehn-TOOR" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "Quel est votre passe-temps?", romanization: "kehl eh voh-truh pahs-TAHN?" },
      { english: "I like music", translation: "J'aime la musique", romanization: "zhehm lah moo-ZEEK" },
      { english: "I play tennis", translation: "Je joue au tennis", romanization: "zhuh zhoo oh teh-NEES" },
      { english: "I enjoy reading", translation: "J'aime lire", romanization: "zhehm LEER" },
      { english: "What do you do in your free time?", translation: "Que faites-vous pendant votre temps libre?", romanization: "kuh feht VOO pahn-DAHN voh-truh TAHN LEE-bruh?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use 'jouer à' (to play) for sports and games, 'jouer de' (to play) for musical instruments, and 'faire' (to do) for activities.",
      examples: [
        { sentence: "Je joue au football", romanization: "zhuh zhoo oh foot-BAHL", english: "I play soccer" },
        { sentence: "Je joue du piano", romanization: "zhuh zhoo doo pyah-NOH", english: "I play the piano" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in French?",
        options: ["Quel est votre passe-temps?", "J'aime la musique", "Je joue au tennis", "Que faites-vous pendant votre temps libre?"],
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
      { word: "work", translation: "travail", romanization: "trah-VAHY" },
      { word: "office", translation: "bureau", romanization: "boo-ROH" },
      { word: "company", translation: "entreprise", romanization: "ahn-truh-PREEZ" },
      { word: "teacher", translation: "professeur", romanization: "proh-feh-SUHR" },
      { word: "doctor", translation: "médecin", romanization: "mayd-SEHN" },
      { word: "engineer", translation: "ingénieur", romanization: "ehn-zhay-NYUHR" },
      { word: "student", translation: "étudiant", romanization: "ay-too-DYAHN" },
      { word: "manager", translation: "directeur", romanization: "dee-rehk-TUHR" },
      { word: "secretary", translation: "secrétaire", romanization: "suh-kray-TEHR" },
      { word: "retired", translation: "retraité", romanization: "ruh-treh-TAY" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "Que faites-vous comme travail?", romanization: "kuh feht VOO kohm trah-VAHY?" },
      { english: "I work at a company", translation: "Je travaille dans une entreprise", romanization: "zhuh trah-VAHY dahn oon ahn-truh-PREEZ" },
      { english: "I'm a teacher", translation: "Je suis professeur", romanization: "zhuh SWEE proh-feh-SUHR" },
      { english: "I'm looking for a job", translation: "Je cherche un emploi", romanization: "zhuh SHEHR-sh uhn ahn-PLWAH" },
      { english: "I work from home", translation: "Je travaille à domicile", romanization: "zhuh trah-VAHY ah doh-mee-SEEL" }
    ],
    grammar: {
      point: "Work-related prepositions",
      explanation: "Use 'dans' (in) for workplace, 'de' (of) for type of work, and 'pour' (for) for employer.",
      examples: [
        { sentence: "Je travaille dans un bureau", romanization: "zhuh trah-VAHY dahn uhn boo-ROH", english: "I work in an office" },
        { sentence: "Je travaille pour une entreprise", romanization: "zhuh trah-VAHY poor oon ahn-truh-PREEZ", english: "I work for a company" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in French?",
        options: ["Que faites-vous comme travail?", "Je travaille dans une entreprise", "Je suis professeur", "Je cherche un emploi"],
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
      { word: "head", translation: "tête", romanization: "TEHT" },
      { word: "eye", translation: "œil", romanization: "UH-yuh" },
      { word: "nose", translation: "nez", romanization: "NAY" },
      { word: "mouth", translation: "bouche", romanization: "BOOSH" },
      { word: "hand", translation: "main", romanization: "MEHN" },
      { word: "foot", translation: "pied", romanization: "PYAY" },
      { word: "sick", translation: "malade", romanization: "mah-LAHD" },
      { word: "healthy", translation: "en bonne santé", romanization: "ahn bohn sahn-TAY" },
      { word: "hospital", translation: "hôpital", romanization: "oh-pee-TAHL" },
      { word: "medicine", translation: "médicament", romanization: "may-dee-kah-MAHN" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "Je ne me sens pas bien", romanization: "zhuh nuh muh sahn pah BYEHN" },
      { english: "I have a headache", translation: "J'ai mal à la tête", romanization: "zhay mahl ah lah TEHT" },
      { english: "I need to see a doctor", translation: "Je dois voir un médecin", romanization: "zhuh DWAH vwahr uhn mayd-SEHN" },
      { english: "Are you okay?", translation: "Ça va?", romanization: "sah VAH?" },
      { english: "I feel better now", translation: "Je me sens mieux maintenant", romanization: "zhuh muh sahn MYUH mehn-tuh-NAHN" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'avoir mal à' (to have pain in) for body aches. 'J'ai mal à' means 'I have pain in'.",
      examples: [
        { sentence: "J'ai mal à la tête", romanization: "zhay mahl ah lah TEHT", english: "I have a headache" },
        { sentence: "J'ai mal au dos", romanization: "zhay mahl oh DOH", english: "My back hurts" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in French?",
        options: ["J'ai mal à la tête", "Je ne me sens pas bien", "Je dois voir un médecin", "Ça va?"],
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
      { word: "computer", translation: "ordinateur", romanization: "ohr-dee-nah-TUHR" },
      { word: "phone", translation: "téléphone", romanization: "tay-lay-FOHN" },
      { word: "internet", translation: "internet", romanization: "ehn-tehr-NEHT" },
      { word: "email", translation: "email", romanization: "ee-MEHL" },
      { word: "website", translation: "site web", romanization: "SEET WEHB" },
      { word: "password", translation: "mot de passe", romanization: "moh duh PAHS" },
      { word: "download", translation: "télécharger", romanization: "tay-lay-shahr-ZHAY" },
      { word: "upload", translation: "téléverser", romanization: "tay-lay-vehr-SAY" },
      { word: "app", translation: "application", romanization: "ah-plee-kah-SYOHN" },
      { word: "social media", translation: "réseaux sociaux", romanization: "ray-ZOH soh-SYOH" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "J'utilise internet tous les jours", romanization: "zhoo-tee-LEEZ ehn-tehr-NEHT too lay ZHOOR" },
      { english: "Can you help me with my computer?", translation: "Pouvez-vous m'aider avec mon ordinateur?", romanization: "poo-vay VOO meh-DAY ah-VEHK mohn ohr-dee-nah-TUHR?" },
      { english: "I forgot my password", translation: "J'ai oublié mon mot de passe", romanization: "zhay oo-blee-AY mohn moh duh PAHS" },
      { english: "Do you have WiFi?", translation: "Avez-vous le WiFi?", romanization: "ah-vay VOO luh WEE-fee?" },
      { english: "I'll send you an email", translation: "Je vous enverrai un email", romanization: "zhuh voo ahn-vay-RAY uhn ee-MEHL" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use 'utiliser' (to use) for technology, 'envoyer' (to send) for emails, and 'télécharger' (to download) for files.",
      examples: [
        { sentence: "J'utilise mon ordinateur", romanization: "zhoo-tee-LEEZ mohn ohr-dee-nah-TUHR", english: "I use my computer" },
        { sentence: "J'envoie un email", romanization: "zhahn-VWAH uhn ee-MEHL", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in French?",
        options: ["J'utilise internet tous les jours", "Pouvez-vous m'aider avec mon ordinateur?", "J'ai oublié mon mot de passe", "Avez-vous le WiFi?"],
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
      { word: "passport", translation: "passeport", romanization: "pahs-POHR" },
      { word: "visa", translation: "visa", romanization: "VEE-zah" },
      { word: "hotel", translation: "hôtel", romanization: "oh-TEHL" },
      { word: "restaurant", translation: "restaurant", romanization: "rehs-toh-RAHN" },
      { word: "tourist", translation: "touriste", romanization: "too-REEST" },
      { word: "sightseeing", translation: "tourisme", romanization: "too-REES-muh" },
      { word: "museum", translation: "musée", romanization: "moo-ZAY" },
      { word: "church", translation: "église", romanization: "ay-GLEEZ" },
      { word: "castle", translation: "château", romanization: "shah-TOH" },
      { word: "garden", translation: "jardin", romanization: "zhahr-DEHN" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "Je suis touriste", romanization: "zhuh SWEE too-REEST" },
      { english: "Where is the hotel?", translation: "Où est l'hôtel?", romanization: "oo eh loh-TEHL?" },
      { english: "I want to see the museum", translation: "Je veux voir le musée", romanization: "zhuh vuh VWAHR luh moo-ZAY" },
      { english: "How much is the entrance fee?", translation: "Combien coûte l'entrée?", romanization: "kohn-BYEHN KOOT lahn-TRAY?" },
      { english: "Can you take a photo?", translation: "Pouvez-vous prendre une photo?", romanization: "poo-vay VOO prahn-druh oon foh-TOH?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use 'vouloir voir' (to want to see) for sightseeing and 'prendre' (to take) for photos.",
      examples: [
        { sentence: "Je veux voir le musée", romanization: "zhuh vuh VWAHR luh moo-ZAY", english: "I want to see the museum" },
        { sentence: "Prendre une photo", romanization: "prahn-druh oon foh-TOH", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in French?",
        options: ["Je suis touriste", "Où est l'hôtel?", "Je veux voir le musée", "Combien coûte l'entrée?"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about French entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "film", romanization: "FEELM" },
      { word: "music", translation: "musique", romanization: "moo-ZEEK" },
      { word: "concert", translation: "concert", romanization: "kohn-SEHR" },
      { word: "theater", translation: "théâtre", romanization: "tay-AH-truh" },
      { word: "museum", translation: "musée", romanization: "moo-ZAY" },
      { word: "art", translation: "art", romanization: "AHR" },
      { word: "tradition", translation: "tradition", romanization: "trah-dee-SYOHN" },
      { word: "festival", translation: "festival", romanization: "fehs-tee-VAHL" },
      { word: "dance", translation: "danse", romanization: "DAHNS" },
      { word: "opera", translation: "opéra", romanization: "oh-pay-RAH" }
    ],
    phrases: [
      { english: "I like French movies", translation: "J'aime les films français", romanization: "zhehm lay FEELM frahn-SEH" },
      { english: "Let's go to a concert", translation: "Allons à un concert", romanization: "ah-LOHN ah uhn kohn-SEHR" },
      { english: "I want to see traditional art", translation: "Je veux voir l'art traditionnel", romanization: "zhuh vuh VWAHR lahr trah-dee-syoh-NEHL" },
      { english: "When is the festival?", translation: "Quand est le festival?", romanization: "kahn eh luh fehs-tee-VAHL?" },
      { english: "I want to learn French", translation: "Je veux apprendre le français", romanization: "zhuh vuh ah-prahn-druh luh frahn-SEH" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'apprendre' (to learn) for skills and 'enseigner' (to teach) for sharing knowledge.",
      examples: [
        { sentence: "Apprendre le français", romanization: "ah-prahn-druh luh frahn-SEH", english: "Learn French" },
        { sentence: "Enseigner l'anglais", romanization: "ahn-seh-NYAY lahn-GLEH", english: "Teach English" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like French movies' in French?",
        options: ["J'aime les films français", "Allons à un concert", "Je veux voir l'art traditionnel", "Quand est le festival?"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business French and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "réunion", romanization: "ray-oo-NYOHN" },
      { word: "presentation", translation: "présentation", romanization: "pray-zahn-tah-SYOHN" },
      { word: "contract", translation: "contrat", romanization: "kohn-TRAH" },
      { word: "client", translation: "client", romanization: "klee-AHN" },
      { word: "colleague", translation: "collègue", romanization: "koh-LEHG" },
      { word: "boss", translation: "patron", romanization: "pah-TROHN" },
      { word: "deadline", translation: "échéance", romanization: "ay-shay-AHNS" },
      { word: "project", translation: "projet", romanization: "proh-ZHEH" },
      { word: "budget", translation: "budget", romanization: "boo-ZHEH" },
      { word: "report", translation: "rapport", romanization: "rah-POHR" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "Enchanté de faire votre connaissance", romanization: "ahn-shahn-TAY duh fehr voh-truh koh-neh-SAHNS" },
      { english: "Thank you for your time", translation: "Merci pour votre temps", romanization: "mehr-SEE poor voh-truh TAHN" },
      { english: "I look forward to working with you", translation: "J'ai hâte de travailler avec vous", romanization: "zhay AHT duh trah-vah-YAY ah-VEHK VOO" },
      { english: "Could you please...?", translation: "Pourriez-vous...?", romanization: "poor-ree-ay VOO...?" },
      { english: "I apologize for the inconvenience", translation: "Je m'excuse pour le dérangement", romanization: "zhuh mehk-SKOOS poor luh day-rahn-zhuh-MAHN" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business French uses 'vous' (formal you) and 'votre' (your) instead of 'tu' and 'ton'. Use 'pourriez-vous' for polite requests.",
      examples: [
        { sentence: "Pourriez-vous m'aider?", romanization: "poor-ree-ay VOO meh-DAY?", english: "Could you help me?" },
        { sentence: "Votre bureau", romanization: "voh-truh boo-ROH", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in French?",
        options: ["Enchanté de faire votre connaissance", "Merci pour votre temps", "J'ai hâte de travailler avec vous", "Pourriez-vous...?"],
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
      { word: "although", translation: "bien que", romanization: "byehn kuh" },
      { word: "however", translation: "cependant", romanization: "suh-pahn-DAHN" },
      { word: "therefore", translation: "donc", romanization: "DOHN" },
      { word: "moreover", translation: "de plus", romanization: "duh PLUHS" },
      { word: "nevertheless", translation: "néanmoins", romanization: "nay-ahn-MWEHN" },
      { word: "consequently", translation: "par conséquent", romanization: "pahr kohn-say-KAHN" },
      { word: "meanwhile", translation: "pendant ce temps", romanization: "pahn-DAHN suh TAHN" },
      { word: "furthermore", translation: "en outre", romanization: "ahn OO-truh" },
      { word: "likewise", translation: "de même", romanization: "duh MEHM" },
      { word: "otherwise", translation: "sinon", romanization: "see-NOHN" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "Bien que ce soit difficile, je vais essayer", romanization: "byehn kuh suh swah dee-fee-SEEL, zhuh VEH eh-say-YAY" },
      { english: "However, I think it's possible", translation: "Cependant, je pense que c'est possible", romanization: "suh-pahn-DAHN, zhuh PAHNS kuh seh poh-SEE-bluh" },
      { english: "Therefore, we should continue", translation: "Donc, nous devrions continuer", romanization: "DOHN, noo duh-VRYOHN kohn-tee-NOO-ay" },
      { english: "Moreover, it's important", translation: "De plus, c'est important", romanization: "duh PLUHS, seh ehm-pohr-TAHN" },
      { english: "Nevertheless, I believe", translation: "Néanmoins, je crois", romanization: "nay-ahn-MWEHN, zhuh KRWAH" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced French uses complex conjunctions to connect ideas. 'Bien que' means 'although' and 'donc' means 'therefore'.",
      examples: [
        { sentence: "Bien que ce soit difficile, je vais essayer", romanization: "byehn kuh suh swah dee-fee-SEEL, zhuh VEH eh-say-YAY", english: "Although it's difficult, I'll try" },
        { sentence: "Donc, je continue", romanization: "DOHN, zhuh kohn-tee-NOO", english: "Therefore, I continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in French?",
        options: ["Bien que ce soit difficile, je vais essayer", "Cependant, je pense que c'est possible", "Donc, nous devrions continuer", "De plus, c'est important"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common French idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "expression", romanization: "ehks-preh-SYOHN" },
      { word: "expression", translation: "expression", romanization: "ehks-preh-SYOHN" },
      { word: "proverb", translation: "proverbe", romanization: "proh-VEHRB" },
      { word: "metaphor", translation: "métaphore", romanization: "may-tah-FOHR" },
      { word: "saying", translation: "dicton", romanization: "deek-TOHN" },
      { word: "cultural", translation: "culturel", romanization: "kool-too-REHL" },
      { word: "traditional", translation: "traditionnel", romanization: "trah-dee-syoh-NEHL" },
      { word: "modern", translation: "moderne", romanization: "moh-DEHRN" },
      { word: "colloquial", translation: "familier", romanization: "fah-mee-LYAY" },
      { word: "formal", translation: "formel", romanization: "fohr-MEHL" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "C'est du gâteau", romanization: "seh doo gah-TOH" },
      { english: "Don't count your chickens", translation: "Il ne faut pas vendre la peau de l'ours", romanization: "eel nuh foh pah vahn-druh lah poh duh LOOR" },
      { english: "The early bird catches the worm", translation: "L'avenir appartient à ceux qui se lèvent tôt", romanization: "lah-vuh-NEER ah-pahr-TYEHN ah suh kee suh leh-VEH TOH" },
      { english: "Actions speak louder than words", translation: "Les actes valent mieux que les paroles", romanization: "lay ZAHKT vahl MYUH kuh lay pah-ROHL" },
      { english: "Better late than never", translation: "Mieux vaut tard que jamais", romanization: "MYUH voh TAHR kuh zhah-MEH" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "French idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "C'est du gâteau", romanization: "seh doo gah-TOH", english: "It's a piece of cake (literally: it's cake)" },
        { sentence: "L'avenir appartient à ceux qui se lèvent tôt", romanization: "lah-vuh-NEER ah-pahr-TYEHN ah suh kee suh leh-VEH TOH", english: "The future belongs to those who rise early" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in French?",
        options: ["C'est du gâteau", "Il ne faut pas vendre la peau de l'ours", "L'avenir appartient à ceux qui se lèvent tôt", "Les actes valent mieux que les paroles"],
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
      { word: "conversation", translation: "conversation", romanization: "kohn-vehr-sah-SYOHN" },
      { word: "dialogue", translation: "dialogue", romanization: "dyah-LOHG" },
      { word: "discussion", translation: "discussion", romanization: "dees-koo-SYOHN" },
      { word: "debate", translation: "débat", romanization: "day-BAH" },
      { word: "negotiation", translation: "négociation", romanization: "nay-goh-syah-SYOHN" },
      { word: "persuasion", translation: "persuasion", romanization: "pehr-swah-SYOHN" },
      { word: "agreement", translation: "accord", romanization: "ah-KOHR" },
      { word: "disagreement", translation: "désaccord", romanization: "day-zah-KOHR" },
      { word: "compromise", translation: "compromis", romanization: "kohn-proh-MEE" },
      { word: "consensus", translation: "consensus", romanization: "kohn-sehn-SOOS" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "Que pensez-vous de...?", romanization: "kuh pahn-say VOO duh...?" },
      { english: "I agree with you", translation: "Je suis d'accord avec vous", romanization: "zhuh SWEE dah-KOHR ah-VEHK VOO" },
      { english: "I have a different opinion", translation: "J'ai une opinion différente", romanization: "zhay oon oh-pee-NYOHN dee-fay-RAHNT" },
      { english: "Let's discuss this further", translation: "Discutons-en davantage", romanization: "dees-koo-TOHN ahn dah-vahn-TAHZH" },
      { english: "I understand your point", translation: "Je comprends votre point de vue", romanization: "zhuh kohn-PRAHN voh-truh PWEHN duh VUH" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "Que pensez-vous de...?", romanization: "kuh pahn-say VOO duh...?", english: "What do you think about...?" },
        { sentence: "Je suis d'accord avec vous", romanization: "zhuh SWEE dah-KOHR ah-VEHK VOO", english: "I agree with you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in French?",
        options: ["Que pensez-vous de...?", "Je suis d'accord avec vous", "J'ai une opinion différente", "Discutons-en davantage"],
        correct: 0
      }
    ]
  }
];
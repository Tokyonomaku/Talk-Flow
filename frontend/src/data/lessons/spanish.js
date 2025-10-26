export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "hola", romanization: "OH-lah" },
      { word: "goodbye", translation: "adiós", romanization: "ah-DYOHS" },
      { word: "good morning", translation: "buenos días", romanization: "BWEH-nohs DEE-ahs" },
      { word: "good afternoon", translation: "buenas tardes", romanization: "BWEH-nahs TAHR-dehs" },
      { word: "good evening", translation: "buenas noches", romanization: "BWEH-nahs NOH-chehs" },
      { word: "thank you", translation: "gracias", romanization: "GRAH-syahs" },
      { word: "please", translation: "por favor", romanization: "pohr fah-VOHR" },
      { word: "excuse me", translation: "disculpe", romanization: "dees-KOOL-peh" },
      { word: "yes", translation: "sí", romanization: "SEE" },
      { word: "no", translation: "no", romanization: "NOH" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "Mucho gusto", romanization: "MOO-choh GOOS-toh" },
      { english: "My name is...", translation: "Me llamo...", romanization: "meh YAH-moh" },
      { english: "How are you?", translation: "¿Cómo estás?", romanization: "KOH-moh ehs-TAHS?" },
      { english: "I'm fine, thank you", translation: "Estoy bien, gracias", romanization: "ehs-TOY byehn, GRAH-syahs" },
      { english: "See you later", translation: "Hasta luego", romanization: "AHS-tah LWEH-goh" },
      { english: "Take care", translation: "Cuídate", romanization: "KOO-ee-dah-teh" },
      { english: "Good night", translation: "Buenas noches", romanization: "BWEH-nahs NOH-chehs" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "Spanish follows Subject-Verb-Object order. The verb 'ser' (to be) is used for permanent characteristics.",
      examples: [
        { sentence: "Yo soy estudiante", romanization: "YOH soy ehs-too-DYAHN-teh", english: "I am a student" },
        { sentence: "Tú eres profesor", romanization: "TOO EH-rehs proh-feh-SOHR", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Spanish?",
        options: ["hola", "adiós", "gracias", "por favor"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does 'gracias' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Spanish",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "uno", romanization: "OO-noh" },
      { word: "two", translation: "dos", romanization: "DOHS" },
      { word: "three", translation: "tres", romanization: "TREHS" },
      { word: "four", translation: "cuatro", romanization: "KWAH-troh" },
      { word: "five", translation: "cinco", romanization: "SEEN-koh" },
      { word: "six", translation: "seis", romanization: "SAYS" },
      { word: "seven", translation: "siete", romanization: "SYEH-teh" },
      { word: "eight", translation: "ocho", romanization: "OH-choh" },
      { word: "nine", translation: "nueve", romanization: "NWEH-beh" },
      { word: "ten", translation: "diez", romanization: "DYEHS" }
    ],
    phrases: [
      { english: "How many?", translation: "¿Cuántos?", romanization: "KWAHN-tohs?" },
      { english: "One more, please", translation: "Uno más, por favor", romanization: "OO-noh MAHS, pohr fah-VOHR" },
      { english: "That's too many", translation: "Son demasiados", romanization: "sohn deh-mah-SYAH-dohs" },
      { english: "Just one", translation: "Solo uno", romanization: "SOH-loh OO-noh" },
      { english: "All of them", translation: "Todos", romanization: "TOH-dohs" }
    ],
    grammar: {
      point: "Number agreement",
      explanation: "Numbers agree with the gender of the noun they modify. 'Uno' becomes 'una' with feminine nouns.",
      examples: [
        { sentence: "Una manzana", romanization: "OO-nah mahn-SAH-nah", english: "One apple" },
        { sentence: "Un libro", romanization: "oon LEE-broh", english: "One book" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Spanish?",
        options: ["tres", "cuatro", "cinco", "seis"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Spanish",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "madre", romanization: "MAH-dreh" },
      { word: "father", translation: "padre", romanization: "PAH-dreh" },
      { word: "sister", translation: "hermana", romanization: "ehr-MAH-nah" },
      { word: "brother", translation: "hermano", romanization: "ehr-MAH-noh" },
      { word: "grandmother", translation: "abuela", romanization: "ah-BWEH-lah" },
      { word: "grandfather", translation: "abuelo", romanization: "ah-BWEH-loh" },
      { word: "aunt", translation: "tía", romanization: "TEE-ah" },
      { word: "uncle", translation: "tío", romanization: "TEE-oh" },
      { word: "cousin", translation: "primo/prima", romanization: "PREE-moh/PREE-mah" },
      { word: "child", translation: "niño/niña", romanization: "NEE-nyoh/NEE-nyah" }
    ],
    phrases: [
      { english: "This is my family", translation: "Esta es mi familia", romanization: "EHS-tah ehs mee fah-MEE-lyah" },
      { english: "I have two sisters", translation: "Tengo dos hermanas", romanization: "TEHN-goh dohs ehr-MAH-nahs" },
      { english: "My mother is a teacher", translation: "Mi madre es profesora", romanization: "Mee MAH-dreh ehs proh-feh-SOH-rah" },
      { english: "How many people in your family?", translation: "¿Cuántas personas hay en tu familia?", romanization: "KWAHN-tahs pehr-SOH-nahs ahy ehn too fah-MEE-lyah?" },
      { english: "I live with my parents", translation: "Vivo con mis padres", romanization: "BEE-boh kohn mees PAH-drehs" }
    ],
    grammar: {
      point: "Possessive adjectives",
      explanation: "Use 'mi' (my), 'tu' (your), 'su' (his/her) before family members. 'Mis', 'tus', 'sus' for plural.",
      examples: [
        { sentence: "Mi madre", romanization: "Mee MAH-dreh", english: "my mother" },
        { sentence: "Mis hermanos", romanization: "Mees ehr-MAH-nohs", english: "my brothers" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Spanish?",
        options: ["padre", "madre", "abuela", "tía"],
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
      { word: "water", translation: "agua", romanization: "AH-gwah" },
      { word: "tea", translation: "té", romanization: "TEH" },
      { word: "coffee", translation: "café", romanization: "kah-FEH" },
      { word: "rice", translation: "arroz", romanization: "ah-ROHS" },
      { word: "bread", translation: "pan", romanization: "PAHN" },
      { word: "meat", translation: "carne", romanization: "KAHR-neh" },
      { word: "fish", translation: "pescado", romanization: "pehs-KAH-doh" },
      { word: "vegetables", translation: "verduras", romanization: "behr-DOO-rahs" },
      { word: "fruit", translation: "fruta", romanization: "FROO-tah" },
      { word: "soup", translation: "sopa", romanization: "SOH-pah" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "Tengo hambre", romanization: "TEHN-goh AHM-breh" },
      { english: "I'm thirsty", translation: "Tengo sed", romanization: "TEHN-goh SEHD" },
      { english: "What would you like to eat?", translation: "¿Qué te gustaría comer?", romanization: "KEH teh goos-tah-REE-ah koh-MEHR?" },
      { english: "This is delicious", translation: "Está delicioso", romanization: "ehs-TAH deh-lee-SYOH-soh" },
      { english: "I don't like this", translation: "No me gusta esto", romanization: "NOH meh GOOS-tah EHS-toh" },
      { english: "Check, please", translation: "La cuenta, por favor", romanization: "Lah KWEHN-tah, pohr fah-VOHR" }
    ],
    grammar: {
      point: "Gustar (to like)",
      explanation: "Use 'me gusta' for 'I like' and 'te gusta' for 'you like'. The verb agrees with the thing liked.",
      examples: [
        { sentence: "Me gusta el café", romanization: "Meh GOOS-tah ehl kah-FEH", english: "I like coffee" },
        { sentence: "Te gusta la comida", romanization: "Teh GOOS-tah lah koh-MEE-dah", english: "You like the food" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in Spanish?",
        options: ["Tengo sed", "Tengo hambre", "Está delicioso", "No me gusta esto"],
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
      { word: "red", translation: "rojo", romanization: "ROH-hoh" },
      { word: "blue", translation: "azul", romanization: "ah-SOOL" },
      { word: "green", translation: "verde", romanization: "BEHR-deh" },
      { word: "yellow", translation: "amarillo", romanization: "ah-mah-REE-yoh" },
      { word: "black", translation: "negro", romanization: "NEH-groh" },
      { word: "white", translation: "blanco", romanization: "BLAHN-koh" },
      { word: "big", translation: "grande", romanization: "GRAHN-deh" },
      { word: "small", translation: "pequeño", romanization: "peh-KEH-nyoh" },
      { word: "beautiful", translation: "hermoso", romanization: "ehr-MOH-soh" },
      { word: "new", translation: "nuevo", romanization: "NWEH-boh" }
    ],
    phrases: [
      { english: "What color is this?", translation: "¿De qué color es esto?", romanization: "Deh keh koh-LOHR ehs EHS-toh?" },
      { english: "I like blue", translation: "Me gusta el azul", romanization: "Meh GOOS-tah ehl ah-SOOL" },
      { english: "This is beautiful", translation: "Esto es hermoso", romanization: "EHS-toh ehs ehr-MOH-soh" },
      { english: "It's too big", translation: "Es demasiado grande", romanization: "Ehs deh-mah-SYAH-doh GRAHN-deh" },
      { english: "I want a small one", translation: "Quiero uno pequeño", romanization: "KYEH-roh OO-noh peh-KEH-nyoh" }
    ],
    grammar: {
      point: "Adjective agreement",
      explanation: "Adjectives must agree with the gender and number of the noun they describe. Add 'a' for feminine, 's' for plural.",
      examples: [
        { sentence: "Coche rojo", romanization: "KOH-cheh ROH-hoh", english: "red car" },
        { sentence: "Casa roja", romanization: "KAH-sah ROH-hah", english: "red house" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in Spanish?",
        options: ["rojo", "azul", "verde", "amarillo"],
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
      { word: "hour", translation: "hora", romanization: "OH-rah" },
      { word: "minute", translation: "minuto", romanization: "mee-NOO-toh" },
      { word: "morning", translation: "mañana", romanization: "mah-NYAH-nah" },
      { word: "afternoon", translation: "tarde", romanization: "TAHR-deh" },
      { word: "evening", translation: "noche", romanization: "NOH-cheh" },
      { word: "night", translation: "noche", romanization: "NOH-cheh" },
      { word: "today", translation: "hoy", romanization: "OY" },
      { word: "tomorrow", translation: "mañana", romanization: "mah-NYAH-nah" },
      { word: "yesterday", translation: "ayer", romanization: "ah-YEHR" },
      { word: "week", translation: "semana", romanization: "seh-MAH-nah" }
    ],
    phrases: [
      { english: "What time is it?", translation: "¿Qué hora es?", romanization: "KEH OH-rah ehs?" },
      { english: "It's 3 o'clock", translation: "Son las tres", romanization: "Sohn lahs TREHS" },
      { english: "What day is today?", translation: "¿Qué día es hoy?", romanization: "KEH DEE-ah ehs OY?" },
      { english: "I'm busy tomorrow", translation: "Estoy ocupado mañana", romanization: "Ehs-TOY oh-koo-PAH-doh mah-NYAH-nah" },
      { english: "See you next week", translation: "Nos vemos la próxima semana", romanization: "Nohs BEH-mohs lah PROHK-see-mah seh-MAH-nah" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use 'son las' for hours and 'es la' for one o'clock. Time expressions often use 'a' (at) for specific times.",
      examples: [
        { sentence: "A las tres", romanization: "Ah lahs TREHS", english: "At three o'clock" },
        { sentence: "Es la una", romanization: "Ehs lah OO-nah", english: "It's one o'clock" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in Spanish?",
        options: ["¿Qué hora es?", "Son las tres", "¿Qué día es hoy?", "Estoy ocupado mañana"],
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
      { word: "money", translation: "dinero", romanization: "dee-NEH-roh" },
      { word: "price", translation: "precio", romanization: "PREH-syoh" },
      { word: "expensive", translation: "caro", romanization: "KAH-roh" },
      { word: "cheap", translation: "barato", romanization: "bah-RAH-toh" },
      { word: "store", translation: "tienda", romanization: "TYEHN-dah" },
      { word: "buy", translation: "comprar", romanization: "kohm-PRAHR" },
      { word: "sell", translation: "vender", romanization: "behn-DEHR" },
      { word: "discount", translation: "descuento", romanization: "dehs-KWEHN-toh" },
      { word: "receipt", translation: "recibo", romanization: "reh-SEE-boh" },
      { word: "change", translation: "cambio", romanization: "KAHM-byoh" }
    ],
    phrases: [
      { english: "How much is this?", translation: "¿Cuánto cuesta esto?", romanization: "KWAHN-toh KWEHS-tah EHS-toh?" },
      { english: "It's too expensive", translation: "Es demasiado caro", romanization: "Ehs deh-mah-SYAH-doh KAH-roh" },
      { english: "Do you have a discount?", translation: "¿Tienen descuento?", romanization: "TYEH-nehn dehs-KWEHN-toh?" },
      { english: "I'll take this", translation: "Me llevo esto", romanization: "Meh YEH-boh EHS-toh" },
      { english: "Can I pay by card?", translation: "¿Puedo pagar con tarjeta?", romanization: "PWEH-doh pah-GAHR kohn tahr-HEH-tah?" }
    ],
    grammar: {
      point: "Cost expressions",
      explanation: "Use 'cuesta' for 'it costs' and 'cuestan' for plural items. 'Cuánto' means 'how much'.",
      examples: [
        { sentence: "Cuesta diez euros", romanization: "KWEHS-tah DYEHS EH-oo-rohs", english: "It costs ten euros" },
        { sentence: "¿Cuánto cuesta?", romanization: "KWAHN-toh KWEHS-tah?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in Spanish?",
        options: ["¿Cuánto cuesta esto?", "Es demasiado caro", "¿Tienen descuento?", "Me llevo esto"],
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
      { word: "station", translation: "estación", romanization: "ehs-tah-SYOHN" },
      { word: "train", translation: "tren", romanization: "TREHN" },
      { word: "bus", translation: "autobús", romanization: "ow-toh-BOOS" },
      { word: "taxi", translation: "taxi", romanization: "TAHK-see" },
      { word: "right", translation: "derecha", romanization: "deh-REH-chah" },
      { word: "left", translation: "izquierda", romanization: "ees-KYEHR-dah" },
      { word: "straight", translation: "derecho", romanization: "deh-REH-choh" },
      { word: "near", translation: "cerca", romanization: "SEHR-kah" },
      { word: "far", translation: "lejos", romanization: "LEH-hohs" },
      { word: "map", translation: "mapa", romanization: "MAH-pah" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "¿Dónde está la estación?", romanization: "DOHN-deh ehs-TAH lah ehs-tah-SYOHN?" },
      { english: "How do I get to...?", translation: "¿Cómo llego a...?", romanization: "KOH-moh YEH-goh ah...?" },
      { english: "Go straight", translation: "Ve derecho", romanization: "Beh deh-REH-choh" },
      { english: "Turn right", translation: "Gira a la derecha", romanization: "HEE-rah ah lah deh-REH-chah" },
      { english: "Is it far?", translation: "¿Está lejos?", romanization: "Ehs-TAH LEH-hohs?" }
    ],
    grammar: {
      point: "Direction prepositions",
      explanation: "Use 'a' (to) for destination, 'en' (in/on) for transportation, and 'de' (from) for origin.",
      examples: [
        { sentence: "Voy a la estación", romanization: "Boy ah lah ehs-tah-SYOHN", english: "I go to the station" },
        { sentence: "Voy en tren", romanization: "Boy ehn TREHN", english: "I go by train" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in Spanish?",
        options: ["¿Dónde está la estación?", "Ve derecho", "Gira a la derecha", "¿Está lejos?"],
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
      { word: "weather", translation: "tiempo", romanization: "TYEHM-poh" },
      { word: "sunny", translation: "soleado", romanization: "soh-leh-AH-doh" },
      { word: "rainy", translation: "lluvioso", romanization: "yoo-BYOH-soh" },
      { word: "cloudy", translation: "nublado", romanization: "noo-BLAH-doh" },
      { word: "snow", translation: "nieve", romanization: "NYEH-beh" },
      { word: "hot", translation: "caliente", romanization: "kah-LYEHN-teh" },
      { word: "cold", translation: "frío", romanization: "FREE-oh" },
      { word: "spring", translation: "primavera", romanization: "pree-mah-BEH-rah" },
      { word: "summer", translation: "verano", romanization: "beh-RAH-noh" },
      { word: "autumn", translation: "otoño", romanization: "oh-TOH-nyoh" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "¿Qué tiempo hace?", romanization: "KEH TYEHM-poh AH-seh?" },
      { english: "It's sunny today", translation: "Hoy hace sol", romanization: "OY AH-seh SOHL" },
      { english: "It's raining", translation: "Está lloviendo", romanization: "Ehs-TAH yoh-BYEHN-doh" },
      { english: "It's very hot", translation: "Hace mucho calor", romanization: "AH-seh MOO-choh kah-LOHR" },
      { english: "I like spring", translation: "Me gusta la primavera", romanization: "Meh GOOS-tah lah pree-mah-BEH-rah" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use 'hace' for weather conditions like 'hace sol' (it's sunny) and 'está' for ongoing conditions like 'está lloviendo' (it's raining).",
      examples: [
        { sentence: "Hace sol", romanization: "AH-seh SOHL", english: "It's sunny" },
        { sentence: "Está lloviendo", romanization: "Ehs-TAH yoh-BYEHN-doh", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in Spanish?",
        options: ["Está lloviendo", "Hoy hace sol", "Hace mucho calor", "Me gusta la primavera"],
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
      { word: "hobby", translation: "pasatiempo", romanization: "pah-sah-TYEHM-poh" },
      { word: "music", translation: "música", romanization: "MOO-see-kah" },
      { word: "sports", translation: "deportes", romanization: "deh-POHR-tehs" },
      { word: "reading", translation: "lectura", romanization: "lehk-TOO-rah" },
      { word: "cooking", translation: "cocinar", romanization: "koh-see-NAHR" },
      { word: "traveling", translation: "viajar", romanization: "byah-HAHR" },
      { word: "photography", translation: "fotografía", romanization: "foh-toh-grah-FEE-ah" },
      { word: "dancing", translation: "bailar", romanization: "bahy-LAHR" },
      { word: "swimming", translation: "nadar", romanization: "nah-DAHR" },
      { word: "painting", translation: "pintar", romanization: "peen-TAHR" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "¿Cuál es tu pasatiempo?", romanization: "KWAHL ehs too pah-sah-TYEHM-poh?" },
      { english: "I like music", translation: "Me gusta la música", romanization: "Meh GOOS-tah lah MOO-see-kah" },
      { english: "I play tennis", translation: "Juego al tenis", romanization: "HWEH-goh ahl TEH-nees" },
      { english: "I enjoy reading", translation: "Disfruto leyendo", romanization: "dees-FROO-toh leh-YEHN-doh" },
      { english: "What do you do in your free time?", translation: "¿Qué haces en tu tiempo libre?", romanization: "KEH AH-sehs ehn too TYEHM-poh LEE-breh?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use 'jugar' (to play) for sports and games, 'tocar' (to play) for musical instruments, and 'hacer' (to do) for activities.",
      examples: [
        { sentence: "Juego al fútbol", romanization: "HWEH-goh ahl FOOT-bohl", english: "I play soccer" },
        { sentence: "Toco la guitarra", romanization: "TOH-koh lah gee-TAH-rrah", english: "I play the guitar" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in Spanish?",
        options: ["¿Cuál es tu pasatiempo?", "Me gusta la música", "Juego al tenis", "¿Qué haces en tu tiempo libre?"],
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
      { word: "work", translation: "trabajo", romanization: "trah-BAH-hoh" },
      { word: "office", translation: "oficina", romanization: "oh-fee-SEE-nah" },
      { word: "company", translation: "empresa", romanization: "ehm-PREH-sah" },
      { word: "teacher", translation: "profesor", romanization: "proh-feh-SOHR" },
      { word: "doctor", translation: "médico", romanization: "MEH-dee-koh" },
      { word: "engineer", translation: "ingeniero", romanization: "een-heh-NYEHR-oh" },
      { word: "student", translation: "estudiante", romanization: "ehs-too-DYAHN-teh" },
      { word: "manager", translation: "gerente", romanization: "heh-REHN-teh" },
      { word: "secretary", translation: "secretaria", romanization: "seh-kreh-TAH-ryah" },
      { word: "retired", translation: "jubilado", romanization: "hoo-bee-LAH-doh" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "¿A qué te dedicas?", romanization: "Ah keh teh deh-DEE-kahs?" },
      { english: "I work at a company", translation: "Trabajo en una empresa", romanization: "Trah-BAH-hoh ehn OO-nah ehm-PREH-sah" },
      { english: "I'm a teacher", translation: "Soy profesor", romanization: "Soy proh-feh-SOHR" },
      { english: "I'm looking for a job", translation: "Busco trabajo", romanization: "BOOS-koh trah-BAH-hoh" },
      { english: "I work from home", translation: "Trabajo desde casa", romanization: "Trah-BAH-hoh DEHS-deh KAH-sah" }
    ],
    grammar: {
      point: "Work-related prepositions",
      explanation: "Use 'en' (in/at) for workplace, 'de' (of) for type of work, and 'para' (for) for employer.",
      examples: [
        { sentence: "Trabajo en una oficina", romanization: "Trah-BAH-hoh ehn OO-nah oh-fee-SEE-nah", english: "I work in an office" },
        { sentence: "Trabajo para una empresa", romanization: "Trah-BAH-hoh PAH-rah OO-nah ehm-PREH-sah", english: "I work for a company" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in Spanish?",
        options: ["¿A qué te dedicas?", "Trabajo en una empresa", "Soy profesor", "Busco trabajo"],
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
      { word: "head", translation: "cabeza", romanization: "kah-BEH-sah" },
      { word: "eye", translation: "ojo", romanization: "OH-hoh" },
      { word: "nose", translation: "nariz", romanization: "nah-REES" },
      { word: "mouth", translation: "boca", romanization: "BOH-kah" },
      { word: "hand", translation: "mano", romanization: "MAH-noh" },
      { word: "foot", translation: "pie", romanization: "PYEH" },
      { word: "sick", translation: "enfermo", romanization: "ehn-FEHR-moh" },
      { word: "healthy", translation: "saludable", romanization: "sah-loo-DAH-bleh" },
      { word: "hospital", translation: "hospital", romanization: "ohs-pee-TAHL" },
      { word: "medicine", translation: "medicina", romanization: "meh-dee-SEE-nah" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "No me siento bien", romanization: "NOH meh SYEHN-toh byehn" },
      { english: "I have a headache", translation: "Tengo dolor de cabeza", romanization: "TEHN-goh doh-LOHR deh kah-BEH-sah" },
      { english: "I need to see a doctor", translation: "Necesito ver a un médico", romanization: "Neh-seh-SEE-toh behr ah oon MEH-dee-koh" },
      { english: "Are you okay?", translation: "¿Estás bien?", romanization: "Ehs-TAHS byehn?" },
      { english: "I feel better now", translation: "Ahora me siento mejor", romanization: "Ah-OH-rah meh SYEHN-toh meh-HOHR" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use 'tener' (to have) with 'dolor de' (pain in) for body aches. 'Me duele' means 'it hurts me'.",
      examples: [
        { sentence: "Tengo dolor de cabeza", romanization: "TEHN-goh doh-LOHR deh kah-BEH-sah", english: "I have a headache" },
        { sentence: "Me duele la espalda", romanization: "Meh DWEH-leh lah ehs-PAHL-dah", english: "My back hurts" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in Spanish?",
        options: ["Tengo dolor de cabeza", "No me siento bien", "Necesito ver a un médico", "¿Estás bien?"],
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
      { word: "computer", translation: "computadora", romanization: "kohm-poo-tah-DOH-rah" },
      { word: "phone", translation: "teléfono", romanization: "teh-LEH-foh-noh" },
      { word: "internet", translation: "internet", romanization: "een-tehr-NEHT" },
      { word: "email", translation: "correo electrónico", romanization: "koh-REH-oh ehl-ehk-TROH-nee-koh" },
      { word: "website", translation: "sitio web", romanization: "SEE-tyoh WEHB" },
      { word: "password", translation: "contraseña", romanization: "kohn-trah-SEH-nyah" },
      { word: "download", translation: "descargar", romanization: "dehs-kahr-GAHR" },
      { word: "upload", translation: "subir", romanization: "soo-BEER" },
      { word: "app", translation: "aplicación", romanization: "ah-plee-kah-SYOHN" },
      { word: "social media", translation: "redes sociales", romanization: "REH-dehs soh-SYAH-lehs" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "Uso internet todos los días", romanization: "OO-soh een-tehr-NEHT TOH-dohs lohs DEE-ahs" },
      { english: "Can you help me with my computer?", translation: "¿Puedes ayudarme con mi computadora?", romanization: "PWEH-dehs ah-yoo-DAHR-meh kohn mee kohm-poo-tah-DOH-rah?" },
      { english: "I forgot my password", translation: "Olvidé mi contraseña", romanization: "Ohl-bee-DEH mee kohn-trah-SEH-nyah" },
      { english: "Do you have WiFi?", translation: "¿Tienes WiFi?", romanization: "TYEH-nehs WEE-fee?" },
      { english: "I'll send you an email", translation: "Te enviaré un correo electrónico", romanization: "Teh ehn-byah-REH oon koh-REH-oh ehl-ehk-TROH-nee-koh" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use 'usar' (to use) for technology, 'enviar' (to send) for emails, and 'descargar' (to download) for files.",
      examples: [
        { sentence: "Uso mi computadora", romanization: "OO-soh mee kohm-poo-tah-DOH-rah", english: "I use my computer" },
        { sentence: "Envío un email", romanization: "Ehn-BYOH oon EE-mayl", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in Spanish?",
        options: ["Uso internet todos los días", "¿Puedes ayudarme con mi computadora?", "Olvidé mi contraseña", "¿Tienes WiFi?"],
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
      { word: "passport", translation: "pasaporte", romanization: "pah-sah-POHR-teh" },
      { word: "visa", translation: "visa", romanization: "BEE-sah" },
      { word: "hotel", translation: "hotel", romanization: "oh-TEHL" },
      { word: "restaurant", translation: "restaurante", romanization: "rehs-tow-RAHN-teh" },
      { word: "tourist", translation: "turista", romanization: "too-REES-tah" },
      { word: "sightseeing", translation: "turismo", romanization: "too-REES-moh" },
      { word: "museum", translation: "museo", romanization: "moo-SEH-oh" },
      { word: "temple", translation: "templo", romanization: "TEHM-ploh" },
      { word: "church", translation: "iglesia", romanization: "ee-GLEH-syah" },
      { word: "garden", translation: "jardín", romanization: "hahr-DEEN" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "Soy turista", romanization: "Soy too-REES-tah" },
      { english: "Where is the hotel?", translation: "¿Dónde está el hotel?", romanization: "DOHN-deh ehs-TAH ehl oh-TEHL?" },
      { english: "I want to see the museum", translation: "Quiero ver el museo", romanization: "KYEH-roh behr ehl moo-SEH-oh" },
      { english: "How much is the entrance fee?", translation: "¿Cuánto cuesta la entrada?", romanization: "KWAHN-toh KWEHS-tah lah ehn-TRAH-dah?" },
      { english: "Can you take a photo?", translation: "¿Puedes tomar una foto?", romanization: "PWEH-dehs toh-MAHR OO-nah FOH-toh?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use 'quiero ver' (I want to see) for sightseeing and 'tomar' (to take) for photos.",
      examples: [
        { sentence: "Quiero ver el museo", romanization: "KYEH-roh behr ehl moo-SEH-oh", english: "I want to see the museum" },
        { sentence: "Tomar una foto", romanization: "Toh-MAHR OO-nah FOH-toh", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in Spanish?",
        options: ["Soy turista", "¿Dónde está el hotel?", "Quiero ver el museo", "¿Cuánto cuesta la entrada?"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about Spanish entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "película", romanization: "peh-LEE-koo-lah" },
      { word: "music", translation: "música", romanization: "MOO-see-kah" },
      { word: "concert", translation: "concierto", romanization: "kohn-SYEHR-toh" },
      { word: "theater", translation: "teatro", romanization: "teh-AH-troh" },
      { word: "museum", translation: "museo", romanization: "moo-SEH-oh" },
      { word: "art", translation: "arte", romanization: "AHR-teh" },
      { word: "tradition", translation: "tradición", romanization: "trah-dee-SYOHN" },
      { word: "festival", translation: "festival", romanization: "fehs-tee-BAHL" },
      { word: "dance", translation: "baile", romanization: "BAHY-leh" },
      { word: "flamenco", translation: "flamenco", romanization: "flah-MEHN-koh" }
    ],
    phrases: [
      { english: "I like Spanish movies", translation: "Me gustan las películas españolas", romanization: "Meh GOOS-tahn lahs peh-LEE-koo-lahs ehs-pah-NYOH-lahs" },
      { english: "Let's go to a concert", translation: "Vamos a un concierto", romanization: "BAH-mohs ah oon kohn-SYEHR-toh" },
      { english: "I want to see traditional art", translation: "Quiero ver arte tradicional", romanization: "KYEH-roh behr AHR-teh trah-dee-syoh-NAHL" },
      { english: "When is the festival?", translation: "¿Cuándo es el festival?", romanization: "KWAHN-doh ehs ehl fehs-tee-BAHL?" },
      { english: "I want to learn flamenco", translation: "Quiero aprender flamenco", romanization: "KYEH-roh ah-prehn-DEHR flah-MEHN-koh" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use 'aprender' (to learn) for skills and 'enseñar' (to teach) for sharing knowledge.",
      examples: [
        { sentence: "Aprender flamenco", romanization: "Ah-prehn-DEHR flah-MEHN-koh", english: "Learn flamenco" },
        { sentence: "Enseñar español", romanization: "Ehn-seh-NYAHR ehs-pah-NYOHL", english: "Teach Spanish" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like Spanish movies' in Spanish?",
        options: ["Me gustan las películas españolas", "Vamos a un concierto", "Quiero ver arte tradicional", "¿Cuándo es el festival?"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business Spanish and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "reunión", romanization: "reh-oo-NYOHN" },
      { word: "presentation", translation: "presentación", romanization: "preh-sehn-tah-SYOHN" },
      { word: "contract", translation: "contrato", romanization: "kohn-TRAH-toh" },
      { word: "client", translation: "cliente", romanization: "KLYEHN-teh" },
      { word: "colleague", translation: "colega", romanization: "koh-LEH-gah" },
      { word: "boss", translation: "jefe", romanization: "HEH-feh" },
      { word: "deadline", translation: "fecha límite", romanization: "FEH-chah LEE-mee-teh" },
      { word: "project", translation: "proyecto", romanization: "proh-YEHK-toh" },
      { word: "budget", translation: "presupuesto", romanization: "preh-soo-PWEHS-toh" },
      { word: "report", translation: "informe", romanization: "een-FOHR-meh" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "Mucho gusto en conocerle", romanization: "MOO-choh GOOS-toh ehn koh-noh-SEHR-leh" },
      { english: "Thank you for your time", translation: "Gracias por su tiempo", romanization: "GRAH-syahs pohr soo TYEHM-poh" },
      { english: "I look forward to working with you", translation: "Espero trabajar con usted", romanization: "Ehs-PEH-roh trah-bah-HAHR kohn oos-TEHD" },
      { english: "Could you please...?", translation: "¿Podría usted...?", romanization: "Poh-DREE-ah oos-TEHD...?" },
      { english: "I apologize for the inconvenience", translation: "Disculpe las molestias", romanization: "Dees-KOOL-peh lahs moh-LEHS-tyahs" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business Spanish uses 'usted' (formal you) and 'su' (your) instead of 'tú' and 'tu'. Use 'podría' for polite requests.",
      examples: [
        { sentence: "¿Podría ayudarme?", romanization: "Poh-DREE-ah ah-yoo-DAHR-meh?", english: "Could you help me?" },
        { sentence: "Su oficina", romanization: "Soo oh-fee-SEE-nah", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in Spanish?",
        options: ["Mucho gusto en conocerle", "Gracias por su tiempo", "Espero trabajar con usted", "¿Podría usted...?"],
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
      { word: "although", translation: "aunque", romanization: "OWHN-keh" },
      { word: "however", translation: "sin embargo", romanization: "seen ehm-BAHR-goh" },
      { word: "therefore", translation: "por lo tanto", romanization: "pohr loh TAHN-toh" },
      { word: "moreover", translation: "además", romanization: "ah-deh-MAHS" },
      { word: "nevertheless", translation: "no obstante", romanization: "noh ohbs-TAHN-teh" },
      { word: "consequently", translation: "consecuentemente", romanization: "kohn-seh-kwehn-TEHN-teh" },
      { word: "meanwhile", translation: "mientras tanto", romanization: "MYEHN-trahs TAHN-toh" },
      { word: "furthermore", translation: "además", romanization: "ah-deh-MAHS" },
      { word: "likewise", translation: "igualmente", romanization: "ee-gwahl-MEHN-teh" },
      { word: "otherwise", translation: "de lo contrario", romanization: "deh loh kohn-TRAH-ryoh" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "Aunque es difícil, lo intentaré", romanization: "OWHN-keh ehs dee-FEE-seel, loh een-tehn-tah-REH" },
      { english: "However, I think it's possible", translation: "Sin embargo, creo que es posible", romanization: "Seen ehm-BAHR-goh, KREH-oh keh ehs poh-SEE-bleh" },
      { english: "Therefore, we should continue", translation: "Por lo tanto, deberíamos continuar", romanization: "Pohr loh TAHN-toh, deh-beh-REE-ah-mohs kohn-tee-NWAHR" },
      { english: "Moreover, it's important", translation: "Además, es importante", romanization: "Ah-deh-MAHS, ehs eem-pohr-TAHN-teh" },
      { english: "Nevertheless, I believe", translation: "No obstante, creo", romanization: "Noh ohbs-TAHN-teh, KREH-oh" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced Spanish uses complex conjunctions to connect ideas. 'Aunque' means 'although' and 'por lo tanto' means 'therefore'.",
      examples: [
        { sentence: "Aunque es difícil, lo intentaré", romanization: "OWHN-keh ehs dee-FEE-seel, loh een-tehn-tah-REH", english: "Although it's difficult, I'll try" },
        { sentence: "Por lo tanto, continuaré", romanization: "Pohr loh TAHN-toh, kohn-tee-noo-ah-REH", english: "Therefore, I'll continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in Spanish?",
        options: ["Aunque es difícil, lo intentaré", "Sin embargo, creo que es posible", "Por lo tanto, deberíamos continuar", "Además, es importante"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common Spanish idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "modismo", romanization: "moh-DEES-moh" },
      { word: "expression", translation: "expresión", romanization: "ehks-preh-SYOHN" },
      { word: "proverb", translation: "proverbio", romanization: "proh-behr-BYOH" },
      { word: "metaphor", translation: "metáfora", romanization: "meh-TAH-foh-rah" },
      { word: "saying", translation: "dicho", romanization: "DEE-choh" },
      { word: "cultural", translation: "cultural", romanization: "kool-too-RAHL" },
      { word: "traditional", translation: "tradicional", romanization: "trah-dee-syoh-NAHL" },
      { word: "modern", translation: "moderno", romanization: "moh-DEHR-noh" },
      { word: "colloquial", translation: "coloquial", romanization: "koh-loh-KYAHL" },
      { word: "formal", translation: "formal", romanization: "fohr-MAHL" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "Es pan comido", romanization: "Ehs pahn koh-MEE-doh" },
      { english: "Don't count your chickens", translation: "No vendas la piel del oso", romanization: "Noh BEHN-dahs lah pyehl dehl OH-soh" },
      { english: "The early bird catches the worm", translation: "A quien madruga, Dios le ayuda", romanization: "Ah kyehn mah-DROO-gah, DYOHS leh ah-YOO-dah" },
      { english: "Actions speak louder than words", translation: "Obras son amores", romanization: "OH-brahs sohn ah-MOH-rehs" },
      { english: "Better late than never", translation: "Más vale tarde que nunca", romanization: "Mahs BAH-leh TAHR-deh keh NOON-kah" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "Spanish idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "Es pan comido", romanization: "Ehs pahn koh-MEE-doh", english: "It's a piece of cake (literally: it's eaten bread)" },
        { sentence: "A quien madruga, Dios le ayuda", romanization: "Ah kyehn mah-DROO-gah, DYOHS leh ah-YOO-dah", english: "God helps those who rise early" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in Spanish?",
        options: ["Es pan comido", "No vendas la piel del oso", "A quien madruga, Dios le ayuda", "Obras son amores"],
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
      { word: "conversation", translation: "conversación", romanization: "kohn-behr-sah-SYOHN" },
      { word: "dialogue", translation: "diálogo", romanization: "DYAH-loh-goh" },
      { word: "discussion", translation: "discusión", romanization: "dees-koo-SYOHN" },
      { word: "debate", translation: "debate", romanization: "deh-BAH-teh" },
      { word: "negotiation", translation: "negociación", romanization: "neh-goh-syah-SYOHN" },
      { word: "persuasion", translation: "persuasión", romanization: "pehr-swah-SYOHN" },
      { word: "agreement", translation: "acuerdo", romanization: "ah-KWEHR-doh" },
      { word: "disagreement", translation: "desacuerdo", romanization: "deh-sah-KWEHR-doh" },
      { word: "compromise", translation: "compromiso", romanization: "kohm-proh-MEE-soh" },
      { word: "consensus", translation: "consenso", romanization: "kohn-SEHN-soh" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "¿Qué opinas de...?", romanization: "KEH oh-PEE-nahs deh...?" },
      { english: "I agree with you", translation: "Estoy de acuerdo contigo", romanization: "Ehs-TOY deh ah-KWEHR-doh kohn-TEE-goh" },
      { english: "I have a different opinion", translation: "Tengo una opinión diferente", romanization: "TEHN-goh OO-nah oh-pee-NYOHN dee-feh-REHN-teh" },
      { english: "Let's discuss this further", translation: "Hablemos más sobre esto", romanization: "Ah-BLEH-mohs mahs SOH-breh EHS-toh" },
      { english: "I understand your point", translation: "Entiendo tu punto", romanization: "Ehn-TYEHN-doh too POON-toh" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "¿Qué opinas de...?", romanization: "KEH oh-PEE-nahs deh...?", english: "What do you think about...?" },
        { sentence: "Estoy de acuerdo contigo", romanization: "Ehs-TOY deh ah-KWEHR-doh kohn-TEE-goh", english: "I agree with you" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in Spanish?",
        options: ["¿Qué opinas de...?", "Estoy de acuerdo contigo", "Tengo una opinión diferente", "Hablemos más sobre esto"],
        correct: 0
      }
    ]
  }
];
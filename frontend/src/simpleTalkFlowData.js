// SimpleTalkFlow data: 7 languages, a few sample lessons each



export const LANGUAGES = [

  { code: "ja", name: "Japanese" },

  { code: "es", name: "Spanish" },

  { code: "fr", name: "French" },

  { code: "de", name: "German" },

  { code: "zh", name: "Chinese" },

  { code: "ru", name: "Russian" },

  { code: "ar", name: "Arabic" },

];



// For MVP we just show 3 lessons per language.

// Later you can plug in the full 19.

export const mockLessonsByLanguage = {

  ja: [

    { id: 1, title: "Greetings 1", level: "Beginner", premium: false },

    { id: 2, title: "Numbers 1", level: "Beginner", premium: false },

    { id: 3, title: "Daily Phrases", level: "Beginner", premium: true },

  ],

  es: [

    { id: 1, title: "Saludos 1", level: "Beginner", premium: false },

    { id: 2, title: "Present Tense 1", level: "Beginner", premium: false },

    { id: 3, title: "Travel Basics", level: "Beginner", premium: true },

  ],

  fr: [

    { id: 1, title: "Salutations 1", level: "Beginner", premium: false },

    { id: 2, title: "Verbe Être", level: "Beginner", premium: false },

    { id: 3, title: "Café Talk", level: "Beginner", premium: true },

  ],

  de: [

    { id: 1, title: "Begrüßungen 1", level: "Beginner", premium: false },

    { id: 2, title: "Präsens 1", level: "Beginner", premium: false },

    { id: 3, title: "Im Restaurant", level: "Beginner", premium: true },

  ],

  zh: [

    { id: 1, title: "打招呼 1", level: "Beginner", premium: false },

    { id: 2, title: "数字 1", level: "Beginner", premium: false },

    { id: 3, title: "日常用语", level: "Beginner", premium: true },

  ],

  ru: [

    { id: 1, title: "Приветствия 1", level: "Beginner", premium: false },

    { id: 2, title: "Числа 1", level: "Beginner", premium: false },

    { id: 3, title: "Повседневные фразы", level: "Beginner", premium: true },

  ],

  ar: [

    { id: 1, title: "التحيات ١", level: "Beginner", premium: false },

    { id: 2, title: "الأرقام ١", level: "Beginner", premium: false },

    { id: 3, title: "جمل يومية", level: "Beginner", premium: true },

  ],

};


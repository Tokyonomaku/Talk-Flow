export const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    vocabulary: [
      { word: "hello", translation: "你好", romanization: "nǐ hǎo" },
      { word: "goodbye", translation: "再见", romanization: "zài jiàn" },
      { word: "good morning", translation: "早上好", romanization: "zǎo shàng hǎo" },
      { word: "good afternoon", translation: "下午好", romanization: "xià wǔ hǎo" },
      { word: "good evening", translation: "晚上好", romanization: "wǎn shàng hǎo" },
      { word: "thank you", translation: "谢谢", romanization: "xiè xie" },
      { word: "please", translation: "请", romanization: "qǐng" },
      { word: "excuse me", translation: "不好意思", romanization: "bù hǎo yì si" },
      { word: "yes", translation: "是", romanization: "shì" },
      { word: "no", translation: "不是", romanization: "bù shì" }
    ],
    phrases: [
      { english: "Nice to meet you", translation: "很高兴认识你", romanization: "hěn gāo xìng rèn shi nǐ" },
      { english: "My name is...", translation: "我叫...", romanization: "wǒ jiào..." },
      { english: "How are you?", translation: "你好吗？", romanization: "nǐ hǎo ma?" },
      { english: "I'm fine, thank you", translation: "我很好，谢谢", romanization: "wǒ hěn hǎo, xiè xie" },
      { english: "See you later", translation: "回头见", romanization: "huí tóu jiàn" },
      { english: "Take care", translation: "保重", romanization: "bǎo zhòng" },
      { english: "Good night", translation: "晚安", romanization: "wǎn ān" }
    ],
    grammar: {
      point: "Basic sentence structure",
      explanation: "Chinese follows Subject-Verb-Object order. The verb '是' (shì) is used for 'to be' in most cases.",
      examples: [
        { sentence: "我是学生", romanization: "wǒ shì xué shēng", english: "I am a student" },
        { sentence: "你是老师", romanization: "nǐ shì lǎo shī", english: "You are a teacher" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'hello' in Chinese?",
        options: ["你好", "再见", "谢谢", "请"],
        correct: 0
      },
      {
        type: "multiple-choice",
        question: "What does '谢谢' mean?",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-10",
    description: "Learn to count from 1 to 10 in Chinese",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "12 minutes",
    vocabulary: [
      { word: "one", translation: "一", romanization: "yī" },
      { word: "two", translation: "二", romanization: "èr" },
      { word: "three", translation: "三", romanization: "sān" },
      { word: "four", translation: "四", romanization: "sì" },
      { word: "five", translation: "五", romanization: "wǔ" },
      { word: "six", translation: "六", romanization: "liù" },
      { word: "seven", translation: "七", romanization: "qī" },
      { word: "eight", translation: "八", romanization: "bā" },
      { word: "nine", translation: "九", romanization: "jiǔ" },
      { word: "ten", translation: "十", romanization: "shí" }
    ],
    phrases: [
      { english: "How many?", translation: "几个？", romanization: "jǐ gè?" },
      { english: "One more, please", translation: "再来一个", romanization: "zài lái yī gè" },
      { english: "That's too many", translation: "太多了", romanization: "tài duō le" },
      { english: "Just one", translation: "只要一个", romanization: "zhǐ yào yī gè" },
      { english: "All of them", translation: "全部", romanization: "quán bù" }
    ],
    grammar: {
      point: "Number usage",
      explanation: "Numbers in Chinese are generally invariable. Use '个' (gè) as a general counter for objects.",
      examples: [
        { sentence: "一个苹果", romanization: "yī gè píng guǒ", english: "One apple" },
        { sentence: "一本书", romanization: "yī běn shū", english: "One book" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'five' in Chinese?",
        options: ["三", "四", "五", "六"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn to talk about your family in Chinese",
    isPremium: false,
    difficulty: "beginner",
    estimatedTime: "18 minutes",
    vocabulary: [
      { word: "mother", translation: "妈妈", romanization: "mā ma" },
      { word: "father", translation: "爸爸", romanization: "bà ba" },
      { word: "sister", translation: "姐姐/妹妹", romanization: "jiě jie/mèi mei" },
      { word: "brother", translation: "哥哥/弟弟", romanization: "gē ge/dì di" },
      { word: "grandmother", translation: "奶奶/外婆", romanization: "nǎi nai/wài pó" },
      { word: "grandfather", translation: "爷爷/外公", romanization: "yé ye/wài gōng" },
      { word: "aunt", translation: "阿姨", romanization: "ā yí" },
      { word: "uncle", translation: "叔叔", romanization: "shū shu" },
      { word: "cousin", translation: "表兄弟/表姐妹", romanization: "biǎo xiōng dì/biǎo jiě mèi" },
      { word: "child", translation: "孩子", romanization: "hái zi" }
    ],
    phrases: [
      { english: "This is my family", translation: "这是我的家人", romanization: "zhè shì wǒ de jiā rén" },
      { english: "I have two sisters", translation: "我有两个姐妹", romanization: "wǒ yǒu liǎng gè jiě mèi" },
      { english: "My mother is a teacher", translation: "我妈妈是老师", romanization: "wǒ mā ma shì lǎo shī" },
      { english: "How many people in your family?", translation: "你家有几口人？", romanization: "nǐ jiā yǒu jǐ kǒu rén?" },
      { english: "I live with my parents", translation: "我和父母住在一起", romanization: "wǒ hé fù mǔ zhù zài yī qǐ" }
    ],
    grammar: {
      point: "Possessive particles",
      explanation: "Use '的' (de) to show possession. '我的' means 'my' and '你的' means 'your'.",
      examples: [
        { sentence: "我的妈妈", romanization: "wǒ de mā ma", english: "my mother" },
        { sentence: "你的家人", romanization: "nǐ de jiā rén", english: "your family" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'mother' in Chinese?",
        options: ["爸爸", "妈妈", "奶奶", "阿姨"],
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
      { word: "water", translation: "水", romanization: "shuǐ" },
      { word: "tea", translation: "茶", romanization: "chá" },
      { word: "coffee", translation: "咖啡", romanization: "kā fēi" },
      { word: "rice", translation: "米饭", romanization: "mǐ fàn" },
      { word: "bread", translation: "面包", romanization: "miàn bāo" },
      { word: "meat", translation: "肉", romanization: "ròu" },
      { word: "fish", translation: "鱼", romanization: "yú" },
      { word: "vegetables", translation: "蔬菜", romanization: "shū cài" },
      { word: "fruit", translation: "水果", romanization: "shuǐ guǒ" },
      { word: "soup", translation: "汤", romanization: "tāng" }
    ],
    phrases: [
      { english: "I'm hungry", translation: "我饿了", romanization: "wǒ è le" },
      { english: "I'm thirsty", translation: "我渴了", romanization: "wǒ kě le" },
      { english: "What would you like to eat?", translation: "你想吃什么？", romanization: "nǐ xiǎng chī shén me?" },
      { english: "This is delicious", translation: "这个很好吃", romanization: "zhè gè hěn hǎo chī" },
      { english: "I don't like this", translation: "我不喜欢这个", romanization: "wǒ bù xǐ huān zhè gè" },
      { english: "Check, please", translation: "买单", romanization: "mǎi dān" }
    ],
    grammar: {
      point: "Like expressions",
      explanation: "Use '喜欢' (xǐ huān) for 'to like' and '不喜欢' (bù xǐ huān) for 'don't like'.",
      examples: [
        { sentence: "我喜欢咖啡", romanization: "wǒ xǐ huān kā fēi", english: "I like coffee" },
        { sentence: "我不喜欢茶", romanization: "wǒ bù xǐ huān chá", english: "I don't like tea" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm hungry' in Chinese?",
        options: ["我渴了", "我饿了", "这个很好吃", "我不喜欢这个"],
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
      { word: "red", translation: "红色", romanization: "hóng sè" },
      { word: "blue", translation: "蓝色", romanization: "lán sè" },
      { word: "green", translation: "绿色", romanization: "lǜ sè" },
      { word: "yellow", translation: "黄色", romanization: "huáng sè" },
      { word: "black", translation: "黑色", romanization: "hēi sè" },
      { word: "white", translation: "白色", romanization: "bái sè" },
      { word: "big", translation: "大", romanization: "dà" },
      { word: "small", translation: "小", romanization: "xiǎo" },
      { word: "beautiful", translation: "漂亮", romanization: "piào liang" },
      { word: "new", translation: "新", romanization: "xīn" }
    ],
    phrases: [
      { english: "What color is this?", translation: "这是什么颜色？", romanization: "zhè shì shén me yán sè?" },
      { english: "I like blue", translation: "我喜欢蓝色", romanization: "wǒ xǐ huān lán sè" },
      { english: "This is beautiful", translation: "这个很漂亮", romanization: "zhè gè hěn piào liang" },
      { english: "It's too big", translation: "太大了", romanization: "tài dà le" },
      { english: "I want a small one", translation: "我要一个小的", romanization: "wǒ yào yī gè xiǎo de" }
    ],
    grammar: {
      point: "Adjective usage",
      explanation: "Adjectives in Chinese can be used directly before nouns. Use '很' (hěn) to mean 'very'.",
      examples: [
        { sentence: "红色的车", romanization: "hóng sè de chē", english: "red car" },
        { sentence: "很漂亮的花", romanization: "hěn piào liang de huā", english: "very beautiful flower" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'blue' in Chinese?",
        options: ["红色", "蓝色", "绿色", "黄色"],
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
      { word: "hour", translation: "小时", romanization: "xiǎo shí" },
      { word: "minute", translation: "分钟", romanization: "fēn zhōng" },
      { word: "morning", translation: "早上", romanization: "zǎo shàng" },
      { word: "afternoon", translation: "下午", romanization: "xià wǔ" },
      { word: "evening", translation: "晚上", romanization: "wǎn shàng" },
      { word: "night", translation: "夜里", romanization: "yè lǐ" },
      { word: "today", translation: "今天", romanization: "jīn tiān" },
      { word: "tomorrow", translation: "明天", romanization: "míng tiān" },
      { word: "yesterday", translation: "昨天", romanization: "zuó tiān" },
      { word: "week", translation: "星期", romanization: "xīng qī" }
    ],
    phrases: [
      { english: "What time is it?", translation: "现在几点了？", romanization: "xiàn zài jǐ diǎn le?" },
      { english: "It's 3 o'clock", translation: "三点", romanization: "sān diǎn" },
      { english: "What day is today?", translation: "今天星期几？", romanization: "jīn tiān xīng qī jǐ?" },
      { english: "I'm busy tomorrow", translation: "明天我很忙", romanization: "míng tiān wǒ hěn máng" },
      { english: "See you next week", translation: "下星期见", romanization: "xià xīng qī jiàn" }
    ],
    grammar: {
      point: "Time expressions",
      explanation: "Use '点' (diǎn) for o'clock and '分' (fēn) for minutes. Time expressions often use '在' (zài) for 'at'.",
      examples: [
        { sentence: "在三点", romanization: "zài sān diǎn", english: "At three o'clock" },
        { sentence: "现在是中午", romanization: "xiàn zài shì zhōng wǔ", english: "It's noon now" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What time is it?' in Chinese?",
        options: ["现在几点了？", "三点", "今天星期几？", "明天我很忙"],
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
      { word: "money", translation: "钱", romanization: "qián" },
      { word: "price", translation: "价格", romanization: "jià gé" },
      { word: "expensive", translation: "贵", romanization: "guì" },
      { word: "cheap", translation: "便宜", romanization: "pián yi" },
      { word: "store", translation: "商店", romanization: "shāng diàn" },
      { word: "buy", translation: "买", romanization: "mǎi" },
      { word: "sell", translation: "卖", romanization: "mài" },
      { word: "discount", translation: "打折", romanization: "dǎ zhé" },
      { word: "receipt", translation: "收据", romanization: "shōu jù" },
      { word: "change", translation: "找零", romanization: "zhǎo líng" }
    ],
    phrases: [
      { english: "How much is this?", translation: "这个多少钱？", romanization: "zhè gè duō shǎo qián?" },
      { english: "It's too expensive", translation: "太贵了", romanization: "tài guì le" },
      { english: "Do you have a discount?", translation: "有打折吗？", romanization: "yǒu dǎ zhé ma?" },
      { english: "I'll take this", translation: "我要这个", romanization: "wǒ yào zhè gè" },
      { english: "Can I pay by card?", translation: "可以刷卡吗？", romanization: "kě yǐ shuā kǎ ma?" }
    ],
    grammar: {
      point: "Price expressions",
      explanation: "Use '多少钱' (duō shǎo qián) for 'how much' and '贵' (guì) for 'expensive'.",
      examples: [
        { sentence: "这个十块钱", romanization: "zhè gè shí kuài qián", english: "This costs ten yuan" },
        { sentence: "多少钱？", romanization: "duō shǎo qián?", english: "How much does it cost?" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'How much is this?' in Chinese?",
        options: ["这个多少钱？", "太贵了", "有打折吗？", "我要这个"],
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
      { word: "station", translation: "车站", romanization: "chē zhàn" },
      { word: "train", translation: "火车", romanization: "huǒ chē" },
      { word: "bus", translation: "公交车", romanization: "gōng jiāo chē" },
      { word: "taxi", translation: "出租车", romanization: "chū zū chē" },
      { word: "right", translation: "右", romanization: "yòu" },
      { word: "left", translation: "左", romanization: "zuǒ" },
      { word: "straight", translation: "直走", romanization: "zhí zǒu" },
      { word: "near", translation: "近", romanization: "jìn" },
      { word: "far", translation: "远", romanization: "yuǎn" },
      { word: "map", translation: "地图", romanization: "dì tú" }
    ],
    phrases: [
      { english: "Where is the station?", translation: "车站在哪里？", romanization: "chē zhàn zài nǎ lǐ?" },
      { english: "How do I get to...?", translation: "怎么去...？", romanization: "zěn me qù...?" },
      { english: "Go straight", translation: "直走", romanization: "zhí zǒu" },
      { english: "Turn right", translation: "向右转", romanization: "xiàng yòu zhuǎn" },
      { english: "Is it far?", translation: "远吗？", romanization: "yuǎn ma?" }
    ],
    grammar: {
      point: "Direction expressions",
      explanation: "Use '在' (zài) for location, '去' (qù) for destination, and '怎么' (zěn me) for 'how'.",
      examples: [
        { sentence: "车站在那里", romanization: "chē zhàn zài nà lǐ", english: "The station is there" },
        { sentence: "我去车站", romanization: "wǒ qù chē zhàn", english: "I go to the station" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Where is the station?' in Chinese?",
        options: ["车站在哪里？", "直走", "向右转", "远吗？"],
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
      { word: "weather", translation: "天气", romanization: "tiān qì" },
      { word: "sunny", translation: "晴天", romanization: "qíng tiān" },
      { word: "rainy", translation: "下雨", romanization: "xià yǔ" },
      { word: "cloudy", translation: "多云", romanization: "duō yún" },
      { word: "snow", translation: "雪", romanization: "xuě" },
      { word: "hot", translation: "热", romanization: "rè" },
      { word: "cold", translation: "冷", romanization: "lěng" },
      { word: "spring", translation: "春天", romanization: "chūn tiān" },
      { word: "summer", translation: "夏天", romanization: "xià tiān" },
      { word: "autumn", translation: "秋天", romanization: "qiū tiān" }
    ],
    phrases: [
      { english: "What's the weather like?", translation: "天气怎么样？", romanization: "tiān qì zěn me yàng?" },
      { english: "It's sunny today", translation: "今天晴天", romanization: "jīn tiān qíng tiān" },
      { english: "It's raining", translation: "下雨了", romanization: "xià yǔ le" },
      { english: "It's very hot", translation: "很热", romanization: "hěn rè" },
      { english: "I like spring", translation: "我喜欢春天", romanization: "wǒ xǐ huān chūn tiān" }
    ],
    grammar: {
      point: "Weather expressions",
      explanation: "Use '天气' (tiān qì) for weather and '了' (le) for completed actions like '下雨了' (it's raining).",
      examples: [
        { sentence: "今天晴天", romanization: "jīn tiān qíng tiān", english: "It's sunny today" },
        { sentence: "下雨了", romanization: "xià yǔ le", english: "It's raining" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's raining' in Chinese?",
        options: ["下雨了", "今天晴天", "很热", "我喜欢春天"],
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
      { word: "hobby", translation: "爱好", romanization: "ài hào" },
      { word: "music", translation: "音乐", romanization: "yīn yuè" },
      { word: "sports", translation: "运动", romanization: "yùn dòng" },
      { word: "reading", translation: "读书", romanization: "dú shū" },
      { word: "cooking", translation: "做饭", romanization: "zuò fàn" },
      { word: "traveling", translation: "旅游", romanization: "lǚ yóu" },
      { word: "photography", translation: "摄影", romanization: "shè yǐng" },
      { word: "dancing", translation: "跳舞", romanization: "tiào wǔ" },
      { word: "swimming", translation: "游泳", romanization: "yóu yǒng" },
      { word: "painting", translation: "画画", romanization: "huà huà" }
    ],
    phrases: [
      { english: "What's your hobby?", translation: "你的爱好是什么？", romanization: "nǐ de ài hào shì shén me?" },
      { english: "I like music", translation: "我喜欢音乐", romanization: "wǒ xǐ huān yīn yuè" },
      { english: "I play tennis", translation: "我打网球", romanization: "wǒ dǎ wǎng qiú" },
      { english: "I enjoy reading", translation: "我喜欢读书", romanization: "wǒ xǐ huān dú shū" },
      { english: "What do you do in your free time?", translation: "你空闲时间做什么？", romanization: "nǐ kòng xián shí jiān zuò shén me?" }
    ],
    grammar: {
      point: "Activity verbs",
      explanation: "Use '打' (dǎ) for playing sports, '听' (tīng) for listening to music, and '做' (zuò) for doing activities.",
      examples: [
        { sentence: "我打篮球", romanization: "wǒ dǎ lán qiú", english: "I play basketball" },
        { sentence: "我听音乐", romanization: "wǒ tīng yīn yuè", english: "I listen to music" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What's your hobby?' in Chinese?",
        options: ["你的爱好是什么？", "我喜欢音乐", "我打网球", "你空闲时间做什么？"],
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
      { word: "work", translation: "工作", romanization: "gōng zuò" },
      { word: "office", translation: "办公室", romanization: "bàn gōng shì" },
      { word: "company", translation: "公司", romanization: "gōng sī" },
      { word: "teacher", translation: "老师", romanization: "lǎo shī" },
      { word: "doctor", translation: "医生", romanization: "yī shēng" },
      { word: "engineer", translation: "工程师", romanization: "gōng chéng shī" },
      { word: "student", translation: "学生", romanization: "xué shēng" },
      { word: "manager", translation: "经理", romanization: "jīng lǐ" },
      { word: "secretary", translation: "秘书", romanization: "mì shū" },
      { word: "retired", translation: "退休", romanization: "tuì xiū" }
    ],
    phrases: [
      { english: "What do you do for work?", translation: "你做什么工作？", romanization: "nǐ zuò shén me gōng zuò?" },
      { english: "I work at a company", translation: "我在公司工作", romanization: "wǒ zài gōng sī gōng zuò" },
      { english: "I'm a teacher", translation: "我是老师", romanization: "wǒ shì lǎo shī" },
      { english: "I'm looking for a job", translation: "我在找工作", romanization: "wǒ zài zhǎo gōng zuò" },
      { english: "I work from home", translation: "我在家工作", romanization: "wǒ zài jiā gōng zuò" }
    ],
    grammar: {
      point: "Work-related expressions",
      explanation: "Use '在' (zài) for workplace, '做' (zuò) for type of work, and '为' (wèi) for employer.",
      examples: [
        { sentence: "我在办公室工作", romanization: "wǒ zài bàn gōng shì gōng zuò", english: "I work in an office" },
        { sentence: "我为公司工作", romanization: "wǒ wèi gōng sī gōng zuò", english: "I work for a company" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you do for work?' in Chinese?",
        options: ["你做什么工作？", "我在公司工作", "我是老师", "我在找工作"],
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
      { word: "head", translation: "头", romanization: "tóu" },
      { word: "eye", translation: "眼睛", romanization: "yǎn jing" },
      { word: "nose", translation: "鼻子", romanization: "bí zi" },
      { word: "mouth", translation: "嘴", romanization: "zuǐ" },
      { word: "hand", translation: "手", romanization: "shǒu" },
      { word: "foot", translation: "脚", romanization: "jiǎo" },
      { word: "sick", translation: "生病", romanization: "shēng bìng" },
      { word: "healthy", translation: "健康", romanization: "jiàn kāng" },
      { word: "hospital", translation: "医院", romanization: "yī yuàn" },
      { word: "medicine", translation: "药", romanization: "yào" }
    ],
    phrases: [
      { english: "I don't feel well", translation: "我不舒服", romanization: "wǒ bù shū fu" },
      { english: "I have a headache", translation: "我头疼", romanization: "wǒ tóu téng" },
      { english: "I need to see a doctor", translation: "我需要看医生", romanization: "wǒ xū yào kàn yī shēng" },
      { english: "Are you okay?", translation: "你还好吗？", romanization: "nǐ hái hǎo ma?" },
      { english: "I feel better now", translation: "我现在好多了", romanization: "wǒ xiàn zài hǎo duō le" }
    ],
    grammar: {
      point: "Body part expressions",
      explanation: "Use '疼' (téng) for pain and '不舒服' (bù shū fu) for not feeling well.",
      examples: [
        { sentence: "我头疼", romanization: "wǒ tóu téng", english: "I have a headache" },
        { sentence: "我肚子疼", romanization: "wǒ dù zi téng", english: "I have a stomachache" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I have a headache' in Chinese?",
        options: ["我头疼", "我不舒服", "我需要看医生", "你还好吗？"],
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
      { word: "computer", translation: "电脑", romanization: "diàn nǎo" },
      { word: "phone", translation: "电话", romanization: "diàn huà" },
      { word: "internet", translation: "互联网", romanization: "hù lián wǎng" },
      { word: "email", translation: "电子邮件", romanization: "diàn zǐ yóu jiàn" },
      { word: "website", translation: "网站", romanization: "wǎng zhàn" },
      { word: "password", translation: "密码", romanization: "mì mǎ" },
      { word: "download", translation: "下载", romanization: "xià zài" },
      { word: "upload", translation: "上传", romanization: "shàng chuán" },
      { word: "app", translation: "应用", romanization: "yìng yòng" },
      { word: "social media", translation: "社交媒体", romanization: "shè jiāo méi tǐ" }
    ],
    phrases: [
      { english: "I use the internet every day", translation: "我每天用互联网", romanization: "wǒ měi tiān yòng hù lián wǎng" },
      { english: "Can you help me with my computer?", translation: "你能帮我用电脑吗？", romanization: "nǐ néng bāng wǒ yòng diàn nǎo ma?" },
      { english: "I forgot my password", translation: "我忘了密码", romanization: "wǒ wàng le mì mǎ" },
      { english: "Do you have WiFi?", translation: "有WiFi吗？", romanization: "yǒu WiFi ma?" },
      { english: "I'll send you an email", translation: "我给你发邮件", romanization: "wǒ gěi nǐ fā yóu jiàn" }
    ],
    grammar: {
      point: "Technology verbs",
      explanation: "Use '用' (yòng) for using technology, '发' (fā) for sending, and '下载' (xià zài) for downloading.",
      examples: [
        { sentence: "我用电脑", romanization: "wǒ yòng diàn nǎo", english: "I use a computer" },
        { sentence: "我发邮件", romanization: "wǒ fā yóu jiàn", english: "I send an email" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I use the internet every day' in Chinese?",
        options: ["我每天用互联网", "你能帮我用电脑吗？", "我忘了密码", "有WiFi吗？"],
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
      { word: "passport", translation: "护照", romanization: "hù zhào" },
      { word: "visa", translation: "签证", romanization: "qiān zhèng" },
      { word: "hotel", translation: "酒店", romanization: "jiǔ diàn" },
      { word: "restaurant", translation: "餐厅", romanization: "cān tīng" },
      { word: "tourist", translation: "游客", romanization: "yóu kè" },
      { word: "sightseeing", translation: "观光", romanization: "guān guāng" },
      { word: "museum", translation: "博物馆", romanization: "bó wù guǎn" },
      { word: "temple", translation: "寺庙", romanization: "sì miào" },
      { word: "palace", translation: "宫殿", romanization: "gōng diàn" },
      { word: "garden", translation: "花园", romanization: "huā yuán" }
    ],
    phrases: [
      { english: "I'm a tourist", translation: "我是游客", romanization: "wǒ shì yóu kè" },
      { english: "Where is the hotel?", translation: "酒店在哪里？", romanization: "jiǔ diàn zài nǎ lǐ?" },
      { english: "I want to see the museum", translation: "我想看博物馆", romanization: "wǒ xiǎng kàn bó wù guǎn" },
      { english: "How much is the entrance fee?", translation: "门票多少钱？", romanization: "mén piào duō shǎo qián?" },
      { english: "Can you take a photo?", translation: "你能拍照吗？", romanization: "nǐ néng pāi zhào ma?" }
    ],
    grammar: {
      point: "Travel expressions",
      explanation: "Use '想' (xiǎng) for 'want to' and '看' (kàn) for 'see'. '拍照' (pāi zhào) means 'take a photo'.",
      examples: [
        { sentence: "我想看博物馆", romanization: "wǒ xiǎng kàn bó wù guǎn", english: "I want to see the museum" },
        { sentence: "拍照", romanization: "pāi zhào", english: "Take a photo" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I'm a tourist' in Chinese?",
        options: ["我是游客", "酒店在哪里？", "我想看博物馆", "门票多少钱？"],
        correct: 0
      }
    ]
  },
  {
    id: 15,
    title: "Entertainment and Culture",
    description: "Learn about Chinese entertainment and cultural activities",
    isPremium: true,
    difficulty: "intermediate",
    estimatedTime: "25 minutes",
    vocabulary: [
      { word: "movie", translation: "电影", romanization: "diàn yǐng" },
      { word: "music", translation: "音乐", romanization: "yīn yuè" },
      { word: "concert", translation: "音乐会", romanization: "yīn yuè huì" },
      { word: "theater", translation: "剧院", romanization: "jù yuàn" },
      { word: "museum", translation: "博物馆", romanization: "bó wù guǎn" },
      { word: "art", translation: "艺术", romanization: "yì shù" },
      { word: "tradition", translation: "传统", romanization: "chuán tǒng" },
      { word: "festival", translation: "节日", romanization: "jié rì" },
      { word: "dance", translation: "舞蹈", romanization: "wǔ dǎo" },
      { word: "opera", translation: "歌剧", romanization: "gē jù" }
    ],
    phrases: [
      { english: "I like Chinese movies", translation: "我喜欢中国电影", romanization: "wǒ xǐ huān zhōng guó diàn yǐng" },
      { english: "Let's go to a concert", translation: "我们去听音乐会", romanization: "wǒ men qù tīng yīn yuè huì" },
      { english: "I want to see traditional art", translation: "我想看传统艺术", romanization: "wǒ xiǎng kàn chuán tǒng yì shù" },
      { english: "When is the festival?", translation: "节日是什么时候？", romanization: "jié rì shì shén me shí hou?" },
      { english: "I want to learn Chinese", translation: "我想学中文", romanization: "wǒ xiǎng xué zhōng wén" }
    ],
    grammar: {
      point: "Cultural expressions",
      explanation: "Use '学' (xué) for learning skills and '教' (jiāo) for teaching knowledge.",
      examples: [
        { sentence: "学中文", romanization: "xué zhōng wén", english: "Learn Chinese" },
        { sentence: "教英文", romanization: "jiāo yīng wén", english: "Teach English" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'I like Chinese movies' in Chinese?",
        options: ["我喜欢中国电影", "我们去听音乐会", "我想看传统艺术", "节日是什么时候？"],
        correct: 0
      }
    ]
  },
  {
    id: 16,
    title: "Business and Formal Language",
    description: "Learn formal business Chinese and polite expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "30 minutes",
    vocabulary: [
      { word: "meeting", translation: "会议", romanization: "huì yì" },
      { word: "presentation", translation: "演示", romanization: "yǎn shì" },
      { word: "contract", translation: "合同", romanization: "hé tóng" },
      { word: "client", translation: "客户", romanization: "kè hù" },
      { word: "colleague", translation: "同事", romanization: "tóng shì" },
      { word: "boss", translation: "老板", romanization: "lǎo bǎn" },
      { word: "deadline", translation: "截止日期", romanization: "jié zhǐ rì qī" },
      { word: "project", translation: "项目", romanization: "xiàng mù" },
      { word: "budget", translation: "预算", romanization: "yù suàn" },
      { word: "report", translation: "报告", romanization: "bào gào" }
    ],
    phrases: [
      { english: "Nice to meet you (formal)", translation: "很高兴认识您", romanization: "hěn gāo xìng rèn shi nín" },
      { english: "Thank you for your time", translation: "谢谢您的时间", romanization: "xiè xie nín de shí jiān" },
      { english: "I look forward to working with you", translation: "期待与您合作", romanization: "qī dài yǔ nín hé zuò" },
      { english: "Could you please...?", translation: "您能...吗？", romanization: "nín néng...ma?" },
      { english: "I apologize for the inconvenience", translation: "抱歉给您带来不便", romanization: "bào qiàn gěi nín dài lái bù biàn" }
    ],
    grammar: {
      point: "Formal language",
      explanation: "Business Chinese uses '您' (nín) for formal you and '您' (nín) for your instead of '你' and '你的'.",
      examples: [
        { sentence: "您能帮我吗？", romanization: "nín néng bāng wǒ ma?", english: "Could you help me?" },
        { sentence: "您的办公室", romanization: "nín de bàn gōng shì", english: "Your office" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Nice to meet you (formal)' in Chinese?",
        options: ["很高兴认识您", "谢谢您的时间", "期待与您合作", "您能...吗？"],
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
      { word: "although", translation: "虽然", romanization: "suī rán" },
      { word: "however", translation: "但是", romanization: "dàn shì" },
      { word: "therefore", translation: "因此", romanization: "yīn cǐ" },
      { word: "moreover", translation: "而且", romanization: "ér qiě" },
      { word: "nevertheless", translation: "然而", romanization: "rán ér" },
      { word: "consequently", translation: "结果", romanization: "jié guǒ" },
      { word: "meanwhile", translation: "同时", romanization: "tóng shí" },
      { word: "furthermore", translation: "此外", romanization: "cǐ wài" },
      { word: "likewise", translation: "同样", romanization: "tóng yàng" },
      { word: "otherwise", translation: "否则", romanization: "fǒu zé" }
    ],
    phrases: [
      { english: "Although it's difficult, I'll try", translation: "虽然很难，但我会试试", romanization: "suī rán hěn nán, dàn wǒ huì shì shi" },
      { english: "However, I think it's possible", translation: "但是，我认为这是可能的", romanization: "dàn shì, wǒ rèn wéi zhè shì kě néng de" },
      { english: "Therefore, we should continue", translation: "因此，我们应该继续", romanization: "yīn cǐ, wǒ men yīng gāi jì xù" },
      { english: "Moreover, it's important", translation: "而且，这很重要", romanization: "ér qiě, zhè hěn zhòng yào" },
      { english: "Nevertheless, I believe", translation: "然而，我相信", romanization: "rán ér, wǒ xiāng xìn" }
    ],
    grammar: {
      point: "Complex conjunctions",
      explanation: "Advanced Chinese uses complex conjunctions to connect ideas. '虽然...但是' means 'although...but' and '因此' means 'therefore'.",
      examples: [
        { sentence: "虽然很难，但我会试试", romanization: "suī rán hěn nán, dàn wǒ huì shì shi", english: "Although it's difficult, I'll try" },
        { sentence: "因此，我继续", romanization: "yīn cǐ, wǒ jì xù", english: "Therefore, I continue" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'Although it's difficult, I'll try' in Chinese?",
        options: ["虽然很难，但我会试试", "但是，我认为这是可能的", "因此，我们应该继续", "而且，这很重要"],
        correct: 0
      }
    ]
  },
  {
    id: 18,
    title: "Idioms and Expressions",
    description: "Learn common Chinese idioms and cultural expressions",
    isPremium: true,
    difficulty: "advanced",
    estimatedTime: "32 minutes",
    vocabulary: [
      { word: "idiom", translation: "成语", romanization: "chéng yǔ" },
      { word: "expression", translation: "表达", romanization: "biǎo dá" },
      { word: "proverb", translation: "谚语", romanization: "yàn yǔ" },
      { word: "metaphor", translation: "比喻", romanization: "bǐ yù" },
      { word: "saying", translation: "俗语", romanization: "sú yǔ" },
      { word: "cultural", translation: "文化的", romanization: "wén huà de" },
      { word: "traditional", translation: "传统的", romanization: "chuán tǒng de" },
      { word: "modern", translation: "现代的", romanization: "xiàn dài de" },
      { word: "colloquial", translation: "口语的", romanization: "kǒu yǔ de" },
      { word: "formal", translation: "正式的", romanization: "zhèng shì de" }
    ],
    phrases: [
      { english: "It's a piece of cake", translation: "小菜一碟", romanization: "xiǎo cài yī dié" },
      { english: "Don't count your chickens", translation: "不要过早乐观", romanization: "bù yào guò zǎo lè guān" },
      { english: "The early bird catches the worm", translation: "早起的鸟儿有虫吃", romanization: "zǎo qǐ de niǎo er yǒu chóng chī" },
      { english: "Actions speak louder than words", translation: "行动胜于言语", romanization: "xíng dòng shèng yú yán yǔ" },
      { english: "Better late than never", translation: "亡羊补牢，为时不晚", romanization: "wáng yáng bǔ láo, wéi shí bù wǎn" }
    ],
    grammar: {
      point: "Cultural context",
      explanation: "Chinese idioms often reflect cultural values and historical context. Understanding the cultural background helps in proper usage.",
      examples: [
        { sentence: "小菜一碟", romanization: "xiǎo cài yī dié", english: "It's a piece of cake (literally: a small dish)" },
        { sentence: "早起的鸟儿有虫吃", romanization: "zǎo qǐ de niǎo er yǒu chóng chī", english: "Early birds get worms" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'It's a piece of cake' in Chinese?",
        options: ["小菜一碟", "不要过早乐观", "早起的鸟儿有虫吃", "行动胜于言语"],
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
      { word: "conversation", translation: "对话", romanization: "duì huà" },
      { word: "dialogue", translation: "对话", romanization: "duì huà" },
      { word: "discussion", translation: "讨论", romanization: "tǎo lùn" },
      { word: "debate", translation: "辩论", romanization: "biàn lùn" },
      { word: "negotiation", translation: "谈判", romanization: "tán pàn" },
      { word: "persuasion", translation: "说服", romanization: "shuō fú" },
      { word: "agreement", translation: "同意", romanization: "tóng yì" },
      { word: "disagreement", translation: "不同意", romanization: "bù tóng yì" },
      { word: "compromise", translation: "妥协", romanization: "tuǒ xié" },
      { word: "consensus", translation: "共识", romanization: "gòng shí" }
    ],
    phrases: [
      { english: "What do you think about...?", translation: "你对...有什么看法？", romanization: "nǐ duì...yǒu shén me kàn fǎ?" },
      { english: "I agree with you", translation: "我同意你的观点", romanization: "wǒ tóng yì nǐ de guān diǎn" },
      { english: "I have a different opinion", translation: "我有不同的意见", romanization: "wǒ yǒu bù tóng de yì jiàn" },
      { english: "Let's discuss this further", translation: "让我们进一步讨论", romanization: "ràng wǒ men jìn yī bù tǎo lùn" },
      { english: "I understand your point", translation: "我理解你的观点", romanization: "wǒ lǐ jiě nǐ de guān diǎn" }
    ],
    grammar: {
      point: "Advanced conversation patterns",
      explanation: "Advanced conversations use complex sentence structures, conditional forms, and nuanced expressions to convey subtle meanings.",
      examples: [
        { sentence: "你对...有什么看法？", romanization: "nǐ duì...yǒu shén me kàn fǎ?", english: "What do you think about...?" },
        { sentence: "我同意你的观点", romanization: "wǒ tóng yì nǐ de guān diǎn", english: "I agree with your point" }
      ]
    },
    exercises: [
      {
        type: "multiple-choice",
        question: "How do you say 'What do you think about...?' in Chinese?",
        options: ["你对...有什么看法？", "我同意你的观点", "我有不同的意见", "让我们进一步讨论"],
        correct: 0
      }
    ]
  }
];
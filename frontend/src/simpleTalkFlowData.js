// SimpleTalkFlow data: 7 languages, 19 lessons each
import { lessonData } from './data/lessons/index.js';

export const LANGUAGES = [
  { code: "ja", name: "Japanese" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
];

// Mock lessons by language - all 19 lessons per language from actual lesson data
export const mockLessonsByLanguage = {
  ja: lessonData.ja || [],
  es: lessonData.es || [],
  fr: lessonData.fr || [],
  de: lessonData.de || [],
  zh: lessonData.zh || [],
  ru: lessonData.ru || [],
  ar: lessonData.ar || [],
};


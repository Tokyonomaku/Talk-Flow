// Import all lesson data
import { lessons as japaneseLessons } from './japanese';
import { lessons as spanishLessons } from './spanish';
import { lessons as frenchLessons } from './french';
import { lessons as germanLessons } from './german';
import { lessons as chineseLessons } from './chinese';
import { lessons as russianLessons } from './russian';
import { lessons as arabicLessons } from './arabic';

// Language code mapping
const lessonData = {
  ja: japaneseLessons,
  es: spanishLessons,
  fr: frenchLessons,
  de: germanLessons,
  zh: chineseLessons,
  ru: russianLessons,
  ar: arabicLessons
};

/**
 * Get lessons for a specific language
 * @param {string} languageCode - The language code (e.g., 'ja', 'es', 'fr')
 * @returns {Array} Array of lessons for the specified language
 */
export const getLessonsForLanguage = (languageCode) => {
  return lessonData[languageCode] || [];
};

/**
 * Get all available languages
 * @returns {Array} Array of language objects with code and name
 */
export const getAvailableLanguages = () => {
  return [
    { code: 'ja', name: 'Japanese' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ar', name: 'Arabic' }
  ];
};

// Export all lesson data for direct access if needed
export { lessonData };

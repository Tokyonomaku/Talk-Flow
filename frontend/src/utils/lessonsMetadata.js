import lessonsMetadata from '@/data/lessons-metadata.json';
import { getLessonsForLanguage } from '@/data/lessons';

/**
 * Get lesson metadata for a specific language
 * @param {string} languageCode - The language code (e.g., 'ja', 'es', 'fr')
 * @returns {Array} Array of lesson metadata objects
 */
export const getLessonsMetadata = (languageCode) => {
  return lessonsMetadata.lessons[languageCode] || [];
};

/**
 * Get full lesson data combined with metadata
 * @param {string} languageCode - The language code
 * @returns {Array} Array of lessons with full data and metadata
 */
export const getLessonsWithMetadata = (languageCode) => {
  const fullLessons = getLessonsForLanguage(languageCode);
  const metadata = getLessonsMetadata(languageCode);
  
  // Merge full lesson data with metadata
  return fullLessons.map(lesson => {
    const meta = metadata.find(m => m.id === lesson.id);
    return {
      ...lesson,
      free: meta?.free ?? !lesson.isPremium,
      // Keep isPremium for backward compatibility
      isPremium: lesson.isPremium ?? !(meta?.free ?? false)
    };
  });
};

/**
 * Get all available languages from metadata
 * @returns {Array} Array of language objects
 */
export const getLanguagesFromMetadata = () => {
  return lessonsMetadata.languages;
};

/**
 * Check if a lesson is free
 * @param {string} languageCode - The language code
 * @param {number} lessonId - The lesson ID
 * @returns {boolean} True if the lesson is free
 */
export const isLessonFree = (languageCode, lessonId) => {
  const metadata = getLessonsMetadata(languageCode);
  const lesson = metadata.find(m => m.id === lessonId);
  return lesson?.free ?? false;
};


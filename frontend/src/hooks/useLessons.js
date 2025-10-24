import { useState, useEffect } from 'react';

export const useLessons = (languageId) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLessons = async () => {
      try {
        setLoading(true);
        // Import lessons based on language
        const lessonModule = await import(`../data/lessons/${languageId}.js`);
        setLessons(lessonModule[`${languageId}Lessons`] || []);
      } catch (err) {
        setError('Failed to load lessons');
        console.error('Error loading lessons:', err);
      } finally {
        setLoading(false);
      }
    };

    if (languageId) {
      loadLessons();
    }
  }, [languageId]);

  return {
    lessons,
    loading,
    error
  };
};

// src/utils/progressStorage.js

export function markLessonComplete(language, lessonId) {
  const progress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
  
  if (!progress[language]) {
    progress[language] = {};
  }
  
  progress[language][`lesson_${lessonId}`] = {
    status: 'completed',
    completedAt: new Date().toISOString()
  };
  
  localStorage.setItem('lesson_progress', JSON.stringify(progress));
}

export function isLessonComplete(language, lessonId) {
  const progress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
  return progress[language]?.[`lesson_${lessonId}`]?.status === 'completed';
}

export function getCompletedCount(language) {
  const progress = JSON.parse(localStorage.getItem('lesson_progress') || '{}');
  if (!progress[language]) return 0;
  
  return Object.values(progress[language])
    .filter(lesson => lesson.status === 'completed')
    .length;
}


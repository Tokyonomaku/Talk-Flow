import { getLessonsForLanguage, getAvailableLanguages } from '../index';

// Mock the lesson data
jest.mock('../japanese', () => ({
  lessons: [
    { id: 1, title: 'Basic Greetings', isPremium: false },
    { id: 2, title: 'Advanced Grammar', isPremium: true }
  ]
}));

jest.mock('../spanish', () => ({
  lessons: [
    { id: 1, title: 'Saludos Básicos', isPremium: false },
    { id: 2, title: 'Gramática Avanzada', isPremium: true }
  ]
}));

describe('Lesson Data Functions', () => {
  test('getLessonsForLanguage should return correct lessons for Japanese', () => {
    const lessons = getLessonsForLanguage('ja');
    expect(lessons).toHaveLength(2);
    expect(lessons[0].title).toBe('Basic Greetings');
    expect(lessons[1].isPremium).toBe(true);
  });

  test('getLessonsForLanguage should return correct lessons for Spanish', () => {
    const lessons = getLessonsForLanguage('es');
    expect(lessons).toHaveLength(2);
    expect(lessons[0].title).toBe('Saludos Básicos');
    expect(lessons[1].isPremium).toBe(true);
  });

  test('getLessonsForLanguage should return empty array for unknown language', () => {
    const lessons = getLessonsForLanguage('unknown');
    expect(lessons).toEqual([]);
  });

  test('getAvailableLanguages should return all supported languages', () => {
    const languages = getAvailableLanguages();
    expect(languages).toHaveLength(7);
    expect(languages).toContainEqual({ code: 'ja', name: 'Japanese' });
    expect(languages).toContainEqual({ code: 'es', name: 'Spanish' });
  });
});


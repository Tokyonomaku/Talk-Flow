// Simple test to verify our functions work correctly
import { getLessonsForLanguage } from '../../../data/lessons';
import { isPremium } from '../../../utils/premiumCheck';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true
  });
});

describe('LessonList Integration Tests', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
  });

  test('getLessonsForLanguage returns lessons for Japanese', () => {
    const lessons = getLessonsForLanguage('ja');
    expect(Array.isArray(lessons)).toBe(true);
    expect(lessons.length).toBeGreaterThan(0);
  });

  test('isPremium function works correctly', () => {
    localStorageMock.getItem.mockReturnValue('true');
    expect(isPremium()).toBe(true);
    
    localStorageMock.getItem.mockReturnValue('false');
    expect(isPremium()).toBe(false);
  });

  test('premium lesson detection works', () => {
    const lessons = getLessonsForLanguage('ja');
    const premiumLessons = lessons.filter(lesson => lesson.isPremium);
    const freeLessons = lessons.filter(lesson => !lesson.isPremium);
    
    expect(premiumLessons.length).toBeGreaterThan(0);
    expect(freeLessons.length).toBeGreaterThan(0);
  });
});

// Language utility functions for TalkFlow
export const LANGUAGES = {
  ja: { name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  es: { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  fr: { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  de: { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  zh: { name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  ru: { name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  ar: { name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
  ko: { name: 'Korean', flag: '🇰🇷', nativeName: '한국어' }
};

// Get language name by code
export const getLanguageName = (code) => {
  return LANGUAGES[code]?.name || 'Japanese'; // Default to Japanese
};

// Get language native name by code
export const getLanguageNativeName = (code) => {
  return LANGUAGES[code]?.nativeName || '日本語';
};

// Get language flag by code
export const getLanguageFlag = (code) => {
  return LANGUAGES[code]?.flag || '🇯🇵';
};

// Get complete language info by code
export const getLanguageInfo = (code) => {
  return LANGUAGES[code] || LANGUAGES.ja;
};

// Get all language codes
export const getAllLanguageCodes = () => {
  return Object.keys(LANGUAGES);
};

// Get all language names
export const getAllLanguageNames = () => {
  return Object.values(LANGUAGES).map(lang => lang.name);
};

// Get level system for each language
export const getLevelSystem = (langCode) => {
  const levels = {
    'ja': ['N5', 'N4', 'N3', 'N2', 'N1'], // Japanese JLPT
    'es': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], // Spanish CEFR
    'fr': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], // French CEFR
    'de': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], // German CEFR
    'zh': ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'], // Chinese HSK
    'ru': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], // Russian CEFR
    'ar': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], // Arabic CEFR
    'ko': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] // Korean CEFR
  };
  return levels[langCode] || ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
};

// Get current level for a language (defaults to first level)
export const getCurrentLevel = (langCode) => {
  const levels = getLevelSystem(langCode);
  return levels[0];
};

// Get level description
export const getLevelDescription = (langCode, level) => {
  const descriptions = {
    'ja': {
      'N5': 'Basic (Beginner)',
      'N4': 'Elementary',
      'N3': 'Intermediate',
      'N2': 'Upper Intermediate',
      'N1': 'Advanced'
    },
    'es': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    },
    'fr': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    },
    'de': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    },
    'zh': {
      'HSK1': 'Beginner',
      'HSK2': 'Elementary',
      'HSK3': 'Intermediate',
      'HSK4': 'Upper Intermediate',
      'HSK5': 'Advanced',
      'HSK6': 'Proficient'
    },
    'ru': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    },
    'ar': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    },
    'ko': {
      'A1': 'Beginner',
      'A2': 'Elementary',
      'B1': 'Intermediate',
      'B2': 'Upper Intermediate',
      'C1': 'Advanced',
      'C2': 'Proficient'
    }
  };
  return descriptions[langCode]?.[level] || 'Beginner';
};

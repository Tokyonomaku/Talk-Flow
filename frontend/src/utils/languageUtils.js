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

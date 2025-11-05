// Slang Dictionary Index
import { spanishSlang } from './spanish';
import { japaneseSlang } from './japanese';

export const slangData = {
  es: {
    name: 'Spanish Slang',
    regions: {
      mexico: {
        name: 'Mexico',
        phrases: spanishSlang.mexico
      },
      spain: {
        name: 'Spain',
        phrases: spanishSlang.spain
      },
      argentina: {
        name: 'Argentina',
        phrases: spanishSlang.argentina
      },
      colombia: {
        name: 'Colombia',
        phrases: spanishSlang.colombia
      }
    }
  },
  ja: {
    name: 'Japanese Slang',
    phrases: japaneseSlang
  }
};

export const getSlangForLanguage = (languageCode) => {
  return slangData[languageCode] || null;
};

export const getSlangRegions = (languageCode) => {
  const slang = slangData[languageCode];
  if (!slang) return [];
  
  if (slang.regions) {
    return Object.keys(slang.regions).map(key => ({
      code: key,
      name: slang.regions[key].name,
      phraseCount: slang.regions[key].phrases.length
    }));
  }
  
  return [];
};

export const getAllSlangLanguages = () => {
  return Object.keys(slangData).map(code => ({
    code,
    name: slangData[code].name
  }));
};


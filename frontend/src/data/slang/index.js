// Slang Dictionary Index
import { spanishSlang } from './spanish';
import { japaneseSlang } from './japanese';

export const slangData = {
  es: {
    name: 'Spanish Slang',
    phrases: spanishSlang,
    hasRegions: true
  },
  ja: {
    name: 'Japanese Slang',
    phrases: japaneseSlang,
    hasRegions: false
  }
};

export const getSlangForLanguage = (languageCode) => {
  return slangData[languageCode] || null;
};

export const getSlangRegions = (languageCode) => {
  const slang = slangData[languageCode];
  if (!slang || !slang.hasRegions) return [];
  
  // Extract unique regions from phrases
  const regions = {};
  slang.phrases.forEach(phrase => {
    const region = phrase.region.split(',')[0].trim(); // Get first region if multiple
    if (!regions[region]) {
      regions[region] = {
        name: region,
        phrases: []
      };
    }
    regions[region].phrases.push(phrase);
  });
  
  return Object.keys(regions).map(key => ({
    code: key.toLowerCase().replace(/\s+/g, '-'),
    name: regions[key].name,
    phraseCount: regions[key].phrases.length
  }));
};

export const getPhrasesByRegion = (languageCode, regionName) => {
  const slang = slangData[languageCode];
  if (!slang) return [];
  
  if (!regionName) return slang.phrases;
  
  return slang.phrases.filter(phrase => 
    phrase.region.toLowerCase().includes(regionName.toLowerCase())
  );
};

export const getAllSlangLanguages = () => {
  return Object.keys(slangData).map(code => ({
    code,
    name: slangData[code].name
  }));
};


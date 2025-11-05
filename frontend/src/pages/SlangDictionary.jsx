import React, { useState, useContext } from 'react';
import { AppContext } from '@/App';
import { PremiumFeature } from '@/components/premium/PremiumFeature';
import { getSlangForLanguage, getSlangRegions, getPhrasesByRegion } from '@/data/slang';

const SlangDictionary = () => {
  const { selectedLanguage } = useContext(AppContext);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const slangData = getSlangForLanguage('es'); // Focus on Spanish for now
  const regions = getSlangRegions('es');
  
  // Get phrases based on region filter
  const getPhrases = () => {
    if (!slangData) return [];
    
    if (selectedRegion && selectedRegion !== 'all') {
      return getPhrasesByRegion('es', selectedRegion);
    }
    
    return slangData.phrases || [];
  };
  
  const phrases = getPhrases();
  
  // Filter phrases by search term
  const filteredSlang = phrases.filter(entry => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      entry.slang.toLowerCase().includes(term) ||
      entry.meaning.toLowerCase().includes(term) ||
      entry.literal.toLowerCase().includes(term) ||
      entry.example.toLowerCase().includes(term) ||
      (entry.exampleTranslation && entry.exampleTranslation.toLowerCase().includes(term))
    );
  });
  
  return (
    <PremiumFeature featureName="Slang Dictionary">
      <div className="slang-dictionary max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          🗣️ Spanish Slang Dictionary
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn what people ACTUALLY say on the streets
        </p>
        
        {/* Filters */}
        <div className="filters mb-6 flex flex-wrap gap-4">
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Regions</option>
            {regions.map(region => (
              <option key={region.code} value={region.name}>
                {region.name} ({region.phraseCount})
              </option>
            ))}
          </select>
          
          <input 
            type="search"
            placeholder="Search slang..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        {/* Slang Cards */}
        <div className="slang-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSlang.map(entry => (
            <div key={entry.id} className="slang-card bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="slang-header flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{entry.slang}</h3>
                <span className="region-badge bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {entry.region.split(',')[0]}
                </span>
              </div>
              
              <div className="slang-meaning mb-2">
                <strong className="text-gray-700">Meaning:</strong> <span className="text-indigo-600 font-semibold">{entry.meaning}</span>
              </div>
              
              <div className="slang-literal mb-3 text-sm text-gray-500 italic">
                <em>Literally:</em> "{entry.literal}"
              </div>
              
              {entry.example && (
                <div className="slang-example mb-3 pt-3 border-t border-gray-200">
                  <p className="example-foreign text-sm italic text-gray-700 mb-1">"{entry.example}"</p>
                  {entry.exampleTranslation && (
                    <p className="example-english text-xs text-gray-500">"{entry.exampleTranslation}"</p>
                  )}
                </div>
              )}
              
              <div className="slang-usage flex items-center gap-2 flex-wrap">
                <span className="formality-badge bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  {entry.formality}
                </span>
                <span className="text-xs text-gray-600">{entry.usage}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSlang.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {searchTerm ? 'No slang found matching your search.' : 'No slang available.'}
            </p>
          </div>
        )}
      </div>
    </PremiumFeature>
  );
};

export default SlangDictionary;

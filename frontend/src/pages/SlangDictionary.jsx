import React, { useState, useContext } from 'react';
import { AppContext } from '@/App';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { BookOpen, Lock, Search } from 'lucide-react';
import { isPremium } from '@/utils/premiumCheck';
import LockedFeature from '@/components/premium/LockedFeature';
import { getSlangForLanguage, getSlangRegions, getAllSlangLanguages } from '@/data/slang';
import { useNavigate } from 'react-router-dom';

const SlangDictionary = () => {
  const { selectedLanguage } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState(selectedLanguage === 'es' ? 'es' : 'ja');
  const [selectedRegion, setSelectedRegion] = useState('mexico');
  const [searchTerm, setSearchTerm] = useState('');
  const userIsPremium = isPremium();
  
  const slangData = getSlangForLanguage(selectedLang);
  const regions = getSlangRegions(selectedLang);
  const allLanguages = getAllSlangLanguages();
  
  // Get phrases based on language structure
  const getPhrases = () => {
    if (!slangData) return [];
    
    if (slangData.regions && selectedRegion) {
      return slangData.regions[selectedRegion]?.phrases || [];
    }
    
    return slangData.phrases || [];
  };
  
  const phrases = getPhrases();
  
  // Filter phrases by search term
  const filteredPhrases = phrases.filter(phrase => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      phrase.phrase.toLowerCase().includes(term) ||
      phrase.translation.toLowerCase().includes(term) ||
      phrase.meaning.toLowerCase().includes(term) ||
      (phrase.reading && phrase.reading.toLowerCase().includes(term))
    );
  });
  
  const handleUpgrade = () => {
    navigate('/pricing');
  };
  
  if (!userIsPremium) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Slang Dictionary 🔥
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Learn real conversational slang - what people ACTUALLY say
          </p>
        </div>
        
        <LockedFeature onUpgrade={handleUpgrade}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Premium Feature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Unlock the Slang Dictionary to learn real conversational phrases that people actually use!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Spanish Regional Slang</h3>
                  <p className="text-sm text-gray-600">Mexico, Spain, Argentina, Colombia</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Japanese Slang</h3>
                  <p className="text-sm text-gray-600">Modern conversational phrases</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </LockedFeature>
      </div>
    );
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Slang Dictionary 🔥
        </h1>
        <p className="text-lg text-gray-600">
          Learn real conversational slang - what people ACTUALLY say, not textbook phrases
        </p>
      </div>
      
      {/* Language and Region Selectors */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Language
            </label>
            <Select value={selectedLang} onValueChange={setSelectedLang}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {allLanguages.map(lang => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {regions.length > 0 && (
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Region
              </label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map(region => (
                    <SelectItem key={region.code} value={region.code}>
                      {region.name} ({region.phraseCount} phrases)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search phrases, translations, or meanings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPhrases.map((phrase) => (
          <Card key={phrase.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl">
                  {phrase.phrase}
                  {phrase.reading && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({phrase.reading})
                    </span>
                  )}
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {phrase.usage}
                </Badge>
              </div>
              <p className="text-lg font-semibold text-indigo-600">
                {phrase.translation}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                {phrase.meaning}
              </p>
              {phrase.example && (
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm italic text-gray-600 mb-1">
                    "{phrase.example}"
                  </p>
                  {phrase.exampleTranslation && (
                    <p className="text-xs text-gray-500">
                      "{phrase.exampleTranslation}"
                    </p>
                  )}
                </div>
              )}
              {phrase.category && (
                <Badge variant="outline" className="mt-2 text-xs">
                  {phrase.category}
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredPhrases.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">
            {searchTerm ? 'No phrases found matching your search.' : 'No phrases available.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlangDictionary;


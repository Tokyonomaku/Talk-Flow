import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/App';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight } from 'lucide-react';
import { languages } from '@/data/languages';

// Flag mappings for languages
const flagMap = {
  'ja': '🇯🇵',
  'es': '🇪🇸',
  'fr': '🇫🇷',
  'de': '🇩🇪',
  'zh': '🇨🇳',
  'ru': '🇷🇺',
  'ar': '🇸🇦'
};

// Native name mappings
const nativeNameMap = {
  'ja': '日本語',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'zh': '中文',
  'ru': 'Русский',
  'ar': 'العربية'
};

const LanguageSelector = () => {
  const { selectedLanguage, changeLanguage } = useContext(AppContext);
  const navigate = useNavigate();

  // Get languages from TypeScript data source
  const languagesWithFlags = useMemo(() => {
    return languages.map(lang => ({
      ...lang,
      flag: flagMap[lang.code] || '🌐',
      nativeName: nativeNameMap[lang.code] || lang.name
    }));
  }, []);

  const handleSelectLanguage = (langCode) => {
    changeLanguage(langCode);
    navigate('/lessons');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-testid="language-selector-page">
      <div className="text-center mb-12">
        <Globe className="w-20 h-20 mx-auto mb-6 text-blue-600" />
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          Choose Your Language
        </h1>
        <p className="text-xl text-gray-600">
          Start your language learning journey today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {languagesWithFlags.map((lang) => (
          <Card
            key={lang.code}
            className={`card-hover border-2 cursor-pointer overflow-hidden ${
              selectedLanguage === lang.code ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => handleSelectLanguage(lang.code)}
            data-testid={`select-language-${lang.code}`}
          >
            <div className="h-3 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <CardContent className="p-8 text-center">
              <div className="text-8xl mb-4">{lang.flag}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {lang.name}
              </h2>
              <p className="text-2xl text-gray-600 mb-6">
                {lang.nativeName}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                {lang.totalLessons} lessons • {lang.totalVocab} words
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageSquare, Brain, Award, List, Plane, Globe } from 'lucide-react';
import { AppContext } from '@/App';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import languagesStats from '@/data/languages-stats.json';

const Navigation = () => {
  const location = useLocation();
  const { selectedLanguage, changeLanguage, languages } = useContext(AppContext);
  const [selectedLang, setSelectedLang] = useState(selectedLanguage || 'ja');
  
  const links = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/lessons', icon: List, label: 'Lessons' },
    { path: '/vocabulary', icon: BookOpen, label: 'Vocabulary' },
    { path: '/grammar', icon: Brain, label: 'Grammar' },
    { path: '/conversation', icon: MessageSquare, label: 'Practice' },
    { path: '/travel-phrases', icon: Plane, label: 'Travel' },
    { path: '/quiz', icon: Award, label: 'Quiz' },
  ];
  
  // Language selector configuration - loaded from JSON data source
  const languageOptions = useMemo(() => {
    const flagMap = {
      'ja': '🇯🇵', 'es': '🇪🇸', 'fr': '🇫🇷', 'de': '🇩🇪',
      'zh': '🇨🇳', 'ru': '🇷🇺', 'ar': '🇸🇦'
    };
    return languagesStats.languages.map(lang => ({
      code: lang.code,
      name: lang.name,
      flag: flagMap[lang.code] || '🌐'
    }));
  }, []);
  
  // Sync with context and localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('selected_language') || 'ja';
    if (savedLang !== selectedLang) {
      setSelectedLang(savedLang);
    }
  }, [selectedLanguage]);
  
  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    localStorage.setItem('selected_language', langCode);
    changeLanguage(langCode);
    // Optional: reload for complete state reset
    // window.location.reload();
  };
  
  const currentLang = languageOptions.find(l => l.code === selectedLang) || languageOptions[0];
  
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent">
              {(() => {
                const nativeNameMap = {
                  'ja': '日本語', 'es': 'Español', 'fr': 'Français', 'de': 'Deutsch',
                  'zh': '中文', 'ru': 'Русский', 'ar': 'العربية'
                };
                return nativeNameMap[selectedLanguage] ? `${nativeNameMap[selectedLanguage]} ` : '';
              })()}
              TalkFlow
            </h1>
            
            {/* Enhanced Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-2"
                  data-testid="language-selector"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang?.flag} {currentLang?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    data-testid={`language-${lang.code}`}
                            className={selectedLang === lang.code ? 'bg-indigo-50' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span className="mr-2">{lang.name}</span>
                    <span className="text-gray-500">({lang.code.toUpperCase()})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex space-x-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
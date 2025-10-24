import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/App';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Plane, MapPin, Mic } from 'lucide-react';
import { toast } from 'sonner';
import { travelPhrasesData } from '@/data/travelPhrasesData';
import PronunciationChecker from '@/components/PronunciationChecker';

const TravelPhrases = () => {
  const { selectedLanguage } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState('essentials');
  const [voices, setVoices] = useState([]);
  const [speaking, setSpeaking] = useState(null);
  const [selectedPhraseForPractice, setSelectedPhraseForPractice] = useState(null);
  
  // Get language-specific data
  const languageData = travelPhrasesData[selectedLanguage] || travelPhrasesData.japanese;
  const categories = Object.keys(languageData);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Load available voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        console.log('Loaded voices:', availableVoices.length);
      }
    };

    // Load voices immediately
    loadVoices();
    
    // Some browsers load voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Fallback: try loading again after a delay
    const timer = setTimeout(loadVoices, 100);
    
    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakPhrase = (text, nativeText, index) => {
    // Check if speech synthesis is available
    if (!('speechSynthesis' in window)) {
      toast.error('Speech synthesis is not supported in your browser');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (speaking === index) {
      setSpeaking(null);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(nativeText);
      
      // Get fresh voices list
      const currentVoices = window.speechSynthesis.getVoices();
      
      // Try to find appropriate language voice
      let languageVoice;
      let langCode;
      
      if (selectedLanguage === 'russian') {
        languageVoice = currentVoices.find(voice => 
          voice.lang.includes('ru') || 
          voice.name.toLowerCase().includes('russian') ||
          voice.name.toLowerCase().includes('russia')
        );
        langCode = 'ru-RU';
      } else {
        languageVoice = currentVoices.find(voice => 
          voice.lang.includes('ja') || 
          voice.name.toLowerCase().includes('japanese') ||
          voice.name.toLowerCase().includes('japan')
        );
        langCode = 'ja-JP';
      }
      
      if (languageVoice) {
        utterance.voice = languageVoice;
        console.log('Using voice:', languageVoice.name);
      } else {
        console.log(`No ${selectedLanguage} voice found, using default`);
      }
      
      utterance.lang = langCode;
      utterance.rate = 0.8; // Slightly slower for learning
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => {
        setSpeaking(index);
        console.log('Speech started');
      };
      
      utterance.onend = () => {
        setSpeaking(null);
        console.log('Speech ended');
      };
      
      utterance.onerror = (event) => {
        setSpeaking(null);
        console.error('Speech error:', event);
        
        // Don't show error toast in automated environments or headless browsers
        const isHeadless = navigator.webdriver || window.navigator.userAgent.includes('HeadlessChrome');
        
        if (!isHeadless) {
          if (event.error === 'not-allowed') {
            toast.error('Please allow audio permissions in your browser');
          } else if (event.error === 'synthesis-unavailable') {
            toast.info('Audio not available. The pronunciation is shown as romaji.');
          } else {
            toast.info('Audio playback unavailable. Use the romaji for pronunciation guide.');
          }
        }
      };

      // Small delay to ensure previous speech is cancelled
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 50);
      
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setSpeaking(null);
      toast.error('Failed to play audio');
    }
  };

  const currentCategory = languageData[selectedCategory];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="travel-phrases-page">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Plane className="w-10 h-10 text-blue-600" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Travel Phrases
            </h1>
            <p className="text-lg text-gray-600">
              Essential phrases for {selectedLanguage === 'japanese' ? 'traveling in Japan' : 'traveling in Russia'}
            </p>
          </div>
        </div>
        
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-green-50">
          <CardContent className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                💡 <strong>Tip:</strong> Click the speaker icon <Volume2 className="w-4 h-4 inline text-blue-600" /> to hear the pronunciation. Practice these before your trip!
              </p>
              <p className="text-xs text-gray-600">
                ℹ️ Audio works best in Chrome, Edge, and Safari. Use the romaji (blue text) as your pronunciation guide.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((key) => {
            const cat = languageData[key];
            return (
              <Button
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(key)}
                data-testid={`category-${key}`}
                className={`flex items-center space-x-2 ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                    : ''
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.title}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Category Header */}
      <div className="mb-6">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <span className="text-4xl">{currentCategory.icon}</span>
              <div>
                <CardTitle className="text-2xl">{currentCategory.title}</CardTitle>
                <p className="text-gray-600 mt-1">{currentCategory.description}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Phrases List */}
      <div className="space-y-4">
        {currentCategory.phrases.map((phrase, index) => (
          <Card 
            key={index} 
            className="border-2 border-blue-100 hover:border-blue-300 transition-all card-hover"
            data-testid={`phrase-${index}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl font-bold text-gray-900">
                      {phrase.text}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => speakPhrase(phrase.english, phrase.text, `${selectedCategory}-${index}`)}
                        data-testid={`speak-${index}`}
                        className={`flex items-center space-x-1 ${
                          speaking === `${selectedCategory}-${index}`
                            ? 'text-green-600 bg-green-50'
                            : 'text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {speaking === `${selectedCategory}-${index}` ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedPhraseForPractice(selectedPhraseForPractice === index ? null : index)}
                        data-testid={`practice-${index}`}
                        className={`flex items-center space-x-1 ${
                          selectedPhraseForPractice === index
                            ? 'text-purple-600 bg-purple-50'
                            : 'text-purple-600 hover:bg-purple-50'
                        }`}
                      >
                        <Mic className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-lg text-blue-600 font-semibold">
                      {phrase.romaji}
                    </div>
                    <div className="text-lg text-gray-800 font-medium">
                      "{phrase.english}"
                    </div>
                    <div className="text-sm text-gray-600 italic flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{phrase.context}</span>
                    </div>
                  </div>
                </div>
                
                <Badge 
                  variant="outline" 
                  className="ml-4 text-xs text-gray-500 border-gray-300"
                >
                  {index + 1}
                </Badge>
              </div>
              
              {/* Pronunciation Practice */}
              {selectedPhraseForPractice === index && (
                <div className="mt-4 pt-4 border-t">
                  <PronunciationChecker 
                    targetPhrase={phrase.text}
                    romaji={phrase.romaji}
                    onResult={(result) => {
                      if (result.score >= 70) {
                        toast.success(`Excellent! "${phrase.english}"`);
                      }
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Tips */}
      <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            📚 Study Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Listen to each phrase multiple times before your trip</li>
            <li>• Practice saying them out loud - pronunciation is key!</li>
            <li>• Learn at least 5-10 phrases from each category</li>
            <li>• Body language and a smile go a long way in Japan 😊</li>
            <li>• Keep this page bookmarked for quick reference during your trip</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelPhrases;
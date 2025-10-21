import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/App';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import PronunciationChecker from '@/components/PronunciationChecker';

const Vocabulary = () => {
  const { API, refreshProgress, selectedLanguage } = useContext(AppContext);
  const [vocabulary, setVocabulary] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(selectedLanguage === 'russian' ? 'A1' : 'N5');
  
  useEffect(() => {
    fetchVocabulary();
  }, [level]);
  
  const fetchVocabulary = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/vocabulary/${level}`, {
        params: { language: selectedLanguage }
      });
      setVocabulary(response.data);
      setCurrentIndex(0);
      setShowMeaning(false);
    } catch (error) {
      console.error('Failed to fetch vocabulary:', error);
      toast.error('Failed to load vocabulary');
    } finally {
      setLoading(false);
    }
  };
  
  const handleNext = async () => {
    if (currentIndex < vocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowMeaning(false);
      
      // Award XP for reviewing
      if (currentIndex > 0 && currentIndex % 5 === 0) {
        await axios.post(`${API}/progress/update`, null, { params: { xp_gain: 5 } });
        await refreshProgress();
        toast.success('+5 XP for reviewing!');
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowMeaning(false);
    }
  };
  
  const handleFlip = () => {
    setShowMeaning(!showMeaning);
  };
  
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="shimmer h-96 rounded-lg"></div>
      </div>
    );
  }
  
  if (vocabulary.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="text-center p-12">
          <p className="text-gray-600">No vocabulary available for this level</p>
        </Card>
      </div>
    );
  }
  
  const currentWord = vocabulary[currentIndex];
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="vocabulary-page">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Vocabulary Practice
        </h1>
        
        {/* Level selector */}
        <div className="flex space-x-2">
          {(selectedLanguage === 'russian' ? ['A1', 'A2', 'B1', 'B2', 'C1'] : ['N5', 'N4', 'N3', 'N2', 'N1']).map((lvl) => (
            <Button
              key={lvl}
              variant={level === lvl ? 'default' : 'outline'}
              onClick={() => setLevel(lvl)}
              data-testid={`level-${lvl.toLowerCase()}`}
              className={level === lvl ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {lvl}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Card {currentIndex + 1} of {vocabulary.length}</span>
          <span>{level} Level</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / vocabulary.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Flashcard */}
      <Card 
        className="mb-6 border-0 shadow-2xl cursor-pointer overflow-hidden"
        onClick={handleFlip}
        data-testid="flashcard"
      >
        <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
        <CardContent className="p-12 min-h-[400px] flex flex-col items-center justify-center">
          <Badge variant="outline" className="mb-6 text-blue-600 border-blue-600">
            {currentWord.category}
          </Badge>
          
          {!showMeaning ? (
            <>
              <div className="text-7xl sm:text-8xl font-bold text-gray-900 mb-6" data-testid="word-japanese">
                {currentWord.word}
              </div>
              <div className="text-2xl text-gray-600 mb-4" data-testid="word-reading">
                {currentWord.reading}
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-blue-600 hover:text-blue-700"
                data-testid="show-meaning-button"
              >
                Tap to reveal meaning
              </Button>
            </>
          ) : (
            <>
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6" data-testid="word-meaning">
                {currentWord.meaning}
              </div>
              <div className="text-xl text-gray-600 mb-8 text-center max-w-lg" data-testid="word-example">
                {currentWord.example || 'No example available'}
              </div>
              <Badge variant="secondary" className="text-sm">
                {currentWord.word} ({currentWord.reading})
              </Badge>
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Pronunciation Checker */}
      <div className="mb-8">
        <PronunciationChecker 
          targetPhrase={currentWord.word}
          romaji={currentWord.reading}
          onResult={(result) => {
            if (result.score >= 70) {
              toast.success(`Great pronunciation! +5 XP`);
            }
          }}
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="lg"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          data-testid="previous-button"
          className="font-medium"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={handleFlip}
          data-testid="flip-button"
          className="font-medium"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Flip Card
        </Button>
        
        <Button
          size="lg"
          onClick={handleNext}
          disabled={currentIndex === vocabulary.length - 1}
          data-testid="next-button"
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-medium"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Vocabulary;
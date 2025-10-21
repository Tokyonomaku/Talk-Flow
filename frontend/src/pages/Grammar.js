import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/App';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookMarked } from 'lucide-react';

const Grammar = () => {
  const { API, selectedLanguage } = useContext(AppContext);
  const [grammar, setGrammar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(selectedLanguage === 'russian' ? 'A1' : 'N5');
  
  useEffect(() => {
    fetchGrammar();
  }, [level]);
  
  const fetchGrammar = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/grammar/${level}`, {
        params: { language: selectedLanguage }
      });
      setGrammar(response.data);
    } catch (error) {
      console.error('Failed to fetch grammar:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="shimmer h-96 rounded-lg"></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="grammar-page">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Grammar Lessons
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Master Japanese grammar patterns step by step
        </p>
        
        {/* Level selector */}
        <div className="flex space-x-2">
          {(selectedLanguage === 'russian' ? ['A1', 'A2', 'B1', 'B2', 'C1'] : ['N5', 'N4', 'N3', 'N2', 'N1']).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              data-testid={`grammar-level-${lvl.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                level === lvl
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>
      
      {grammar.length === 0 ? (
        <Card className="text-center p-12">
          <p className="text-gray-600">No grammar lessons available for this level yet</p>
        </Card>
      ) : (
        <Accordion type="single" collapsible className="space-y-4">
          {grammar.map((lesson, index) => (
            <AccordionItem 
              key={lesson.id} 
              value={lesson.id}
              className="border-0 shadow-lg rounded-lg overflow-hidden"
              data-testid={`grammar-lesson-${index}`}
            >
              <Card className="border-0">
                <AccordionTrigger className="hover:no-underline px-6 py-4">
                  <div className="flex items-center space-x-4 text-left w-full">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {lesson.level}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {lesson.title}
                      </h3>
                    </div>
                    <BookMarked className="w-6 h-6 text-gray-400" />
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 border-t">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">Explanation</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.explanation}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">Examples</h4>
                      <div className="space-y-3">
                        {lesson.examples.map((example, i) => (
                          <div 
                            key={i} 
                            className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100"
                            data-testid={`example-${index}-${i}`}
                          >
                            <p className="text-gray-800 font-medium">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Grammar;
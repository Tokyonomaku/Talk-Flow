import React, { useState, useContext, useRef, useEffect } from 'react';
import { getClaudeResponse } from '../utils/claude';
import { AppContext } from '@/App';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { getLanguageName } from '../utils/languageUtils';

function AITutor({ 
  defaultQuestion = '',
  systemPrompt = null,
  showLanguageContext = true 
}) {
  const { selectedLanguage, languages } = useContext(AppContext);
  const [question, setQuestion] = useState(defaultQuestion);
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const messagesEndRef = useRef(null);

  // Get language-specific system prompt
  const getSystemPrompt = () => {
    if (systemPrompt) return systemPrompt;
    
    const languageName = getLanguageName(selectedLanguage);
    return `You are a friendly ${languageName} tutor. Be encouraging, clear, and patient. 
    - Answer questions about ${languageName} grammar, vocabulary, and culture
    - Provide examples and explanations
    - Correct mistakes gently
    - Use simple language for beginners
    - Be enthusiastic and supportive`;
  };

  const askClaude = async () => {
    if (!question.trim()) return;

    const userQuestion = question.trim();
    setQuestion('');
    setLoading(true);

    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'user', content: userQuestion }]);

    try {
      const result = await getClaudeResponse(
        userQuestion,
        getSystemPrompt()
      );

      // Add AI response to conversation
      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: result.content,
        model: result.model 
      }]);
    } catch (error) {
      console.error('Error asking Claude:', error);
      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error. Please try again.',
        error: true
      }]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askClaude();
    }
  };

  const clearConversation = () => {
    setConversation([]);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI Tutor
            {showLanguageContext && selectedLanguage && (
              <span className="text-sm font-normal text-gray-500">
                ({languages[selectedLanguage]?.name || getLanguageName(selectedLanguage)})
              </span>
            )}
          </CardTitle>
          {conversation.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearConversation}>
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Conversation History */}
        {conversation.length > 0 && (
          <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg">
            {conversation.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-indigo-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : msg.error
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.model && msg.model !== 'mock' && (
                    <p className="text-xs mt-2 opacity-70">
                      Model: {msg.model}
                    </p>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Claude is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-2">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask me anything about ${languages[selectedLanguage]?.name || 'your language'}...`}
            className="flex-1 min-h-[80px]"
            disabled={loading}
          />
          <Button 
            onClick={askClaude} 
            disabled={loading || !question.trim()}
            size="lg"
            className="self-end"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Ask
              </>
            )}
          </Button>
        </div>

        {/* Helpful Tips */}
        {conversation.length === 0 && (
          <div className="text-sm text-gray-500 space-y-1">
            <p className="font-semibold">💡 Try asking:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>"How do you say 'hello' in {languages[selectedLanguage]?.name || 'this language'}?"</li>
              <li>"Explain the difference between..."</li>
              <li>"What's the grammar rule for..."</li>
              <li>"Give me examples of..."</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default AITutor;


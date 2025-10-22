import React, { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '@/App';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { askAIWithContext } from '@/utils/aiChat';

const Conversation = () => {
  const { API, refreshProgress, selectedLanguage, languages } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(uuidv4());
  const [level, setLevel] = useState(
    selectedLanguage === 'japanese' ? 'N5' : 
    selectedLanguage === 'chinese' ? 'HSK1' : 'A1'
  );
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    // Language-specific greetings
    const greetings = {
      japanese: {
        content: 'こんにちは！ (Konnichiwa!)',
        translation: 'Hello! I\'m your Japanese tutor. Let\'s practice together!'
      },
      russian: {
        content: 'Привет! (Privet!)',
        translation: 'Hello! I\'m your Russian tutor. Let\'s practice together!'
      },
      french: {
        content: 'Bonjour! (Bonjour!)',
        translation: 'Hello! I\'m your French tutor. Let\'s practice together!'
      },
      spanish: {
        content: '¡Hola! (OH-lah!)',
        translation: 'Hello! I\'m your Spanish tutor. Let\'s practice together!'
      },
      chinese: {
        content: '你好！(nǐ hǎo!)',
        translation: 'Hello! I\'m your Chinese tutor. Let\'s practice together!'
      },
      german: {
        content: 'Hallo! (HAH-loh!)',
        translation: 'Hello! I\'m your German tutor. Let\'s practice together!'
      },
      arabic: {
        content: 'مرحبا! (mar-HA-ba!)',
        translation: 'Hello! I\'m your Arabic tutor. Let\'s practice together!'
      },
      korean: {
        content: '안녕하세요! (an-nyeong-ha-se-yo!)',
        translation: 'Hello! I\'m your Korean tutor. Let\'s practice together!'
      }
    };
    
    const greeting = greetings[selectedLanguage] || greetings.japanese;
    
    setMessages([
      {
        role: 'assistant',
        content: greeting.content,
        translation: greeting.translation,
        isGreeting: true
      }
    ]);
  }, [selectedLanguage]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);
    
    try {
      // Use the new AI chat functionality
      const aiResponse = await askAIWithContext(userMessage, selectedLanguage, level);
      
      // Parse the AI response to extract content, translation, and feedback
      const lines = aiResponse.trim().split('\n');
      let targetLanguageText = "";
      let translation = "";
      let feedback = "";
      
      let inTranslation = false;
      let inFeedback = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('(') && line.endsWith(')')) {
          translation = line.slice(1, -1);
          inTranslation = true;
        } else if (inTranslation && !inFeedback) {
          if (line && !line.startsWith('(') && !line.endsWith(')')) {
            feedback += line + "\n";
            inFeedback = true;
          }
        } else if (!inTranslation && !inFeedback) {
          targetLanguageText += line + "\n";
        } else if (inFeedback) {
          feedback += line + "\n";
        }
      }
      
      // Add assistant response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: targetLanguageText.trim(),
        translation: translation || null,
        feedback: feedback.trim() || null
      }]);
      
      // Award XP
      await axios.post(`${API}/progress/update`, null, { params: { xp_gain: 15 } });
      await refreshProgress();
      
    } catch (error) {
      console.error('Conversation error:', error);
      toast.error('Failed to get AI response. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="conversation-page">
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          AI Conversation Practice
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Practice speaking {languages[selectedLanguage]?.name || 'Japanese'} with your AI tutor
        </p>
        
        {/* Level selector */}
        <div className="flex space-x-2">
          {(selectedLanguage === 'japanese' 
            ? ['N5', 'N4', 'N3', 'N2', 'N1']
            : selectedLanguage === 'chinese'
            ? ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6']
            : ['A1', 'A2', 'B1', 'B2', 'C1']
          ).map((lvl) => (
            <Button
              key={lvl}
              variant={level === lvl ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLevel(lvl)}
              data-testid={`conversation-level-${lvl.toLowerCase()}`}
              className={level === lvl ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {lvl}
            </Button>
          ))}
        </div>
      </div>
      
      <Card className="border-0 shadow-xl mb-4" data-testid="chat-container">
        <CardContent className="p-0">
          {/* Messages area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-gray-50 to-blue-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} fade-in`}
                data-testid={`message-${index}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-br from-green-500 to-emerald-600'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white shadow-md'
                    }`}>
                      <p className={`text-base ${message.role === 'user' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        {message.content}
                      </p>
                      {message.translation && (
                        <p className="text-sm text-gray-600 mt-2 italic">
                          ({message.translation})
                        </p>
                      )}
                    </div>
                    
                    {message.feedback && (
                      <div className="mt-2 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-700">
                        💡 {message.feedback}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start fade-in">
                <div className="flex items-start space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white shadow-md">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Type your message in ${languages[selectedLanguage]?.name || 'Japanese'} or English...`}
                className="flex-1 resize-none"
                rows={2}
                disabled={loading}
                data-testid="message-input"
              />
              <Button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                size="lg"
                data-testid="send-button"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-md bg-blue-50">
        <CardContent className="p-4">
          <p className="text-sm text-gray-600">
            💡 <strong>Tip:</strong> Try greeting in {languages[selectedLanguage]?.name || 'Japanese'}, ask simple questions, or practice introducing yourself. Your AI tutor will respond at your level and provide helpful feedback!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conversation;
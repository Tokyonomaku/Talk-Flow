import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/App';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const PronunciationChecker = ({ targetPhrase, romaji, onResult }) => {
  const { selectedLanguage } = useContext(AppContext);
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [recognition, setRecognition] = useState(null);
  const [result, setResult] = useState(null);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    
    // Configure recognition
    if (selectedLanguage === 'japanese') {
      recognitionInstance.lang = 'ja-JP';
    } else if (selectedLanguage === 'russian') {
      recognitionInstance.lang = 'ru-RU';
    }
    
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      setIsRecording(true);
      setTranscript('');
      setResult(null);
    };

    recognitionInstance.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      
      // Compare pronunciation
      const accuracy = comparePronunciation(targetPhrase, spokenText, romaji);
      setResult(accuracy);
      
      if (onResult) {
        onResult(accuracy);
      }
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
      
      if (event.error === 'no-speech') {
        toast.error('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        toast.error('Microphone access denied. Please enable microphone permissions.');
      } else {
        toast.error('Recognition error. Please try again.');
      }
    };

    recognitionInstance.onend = () => {
      setIsRecording(false);
    };

    setRecognition(recognitionInstance);

    return () => {
      if (recognitionInstance) {
        recognitionInstance.abort();
      }
    };
  }, [targetPhrase, romaji, selectedLanguage]);

  const comparePronunciation = (target, spoken, romanization) => {
    // Normalize both strings (lowercase, remove punctuation)
    const normalizeText = (text) => {
      return text.toLowerCase()
        .replace(/[.,!?。、！？]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    };

    const normalizedTarget = normalizeText(target);
    const normalizedSpoken = normalizeText(spoken);
    const normalizedRomaji = romanization ? normalizeText(romanization) : '';

    // Calculate similarity using Levenshtein distance
    const calculateSimilarity = (str1, str2) => {
      const len1 = str1.length;
      const len2 = str2.length;
      const matrix = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(0));

      for (let i = 0; i <= len1; i++) matrix[0][i] = i;
      for (let j = 0; j <= len2; j++) matrix[j][0] = j;

      for (let j = 1; j <= len2; j++) {
        for (let i = 1; i <= len1; i++) {
          const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
          matrix[j][i] = Math.min(
            matrix[j][i - 1] + 1,
            matrix[j - 1][i] + 1,
            matrix[j - 1][i - 1] + cost
          );
        }
      }

      const distance = matrix[len2][len1];
      const maxLen = Math.max(len1, len2);
      return maxLen === 0 ? 100 : ((maxLen - distance) / maxLen) * 100;
    };

    // Try matching against native text
    let score = calculateSimilarity(normalizedTarget, normalizedSpoken);
    
    // Also try romanization if available
    if (normalizedRomaji) {
      const romajiScore = calculateSimilarity(normalizedRomaji, normalizedSpoken);
      score = Math.max(score, romajiScore);
    }

    let feedback = '';
    let level = 'poor';

    if (score >= 85) {
      feedback = 'Excellent pronunciation! 🎉';
      level = 'excellent';
    } else if (score >= 70) {
      feedback = 'Great job! Very close! 👍';
      level = 'good';
    } else if (score >= 50) {
      feedback = 'Good attempt. Keep practicing! 💪';
      level = 'fair';
    } else {
      feedback = 'Try again. Listen carefully and repeat. 🔄';
      level = 'poor';
    }

    return {
      score: Math.round(score),
      feedback,
      level,
      spokenText: spoken,
      targetText: target
    };
  };

  const startRecording = () => {
    if (!recognition) {
      toast.error('Speech recognition not available');
      return;
    }

    try {
      recognition.start();
      toast.info('Listening... Speak now!');
    } catch (error) {
      console.error('Error starting recognition:', error);
      toast.error('Failed to start recording. Please try again.');
    }
  };

  const stopRecording = () => {
    if (recognition && isRecording) {
      recognition.stop();
    }
  };

  const playReference = () => {
    if (!('speechSynthesis' in window)) {
      toast.error('Text-to-speech not available');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(targetPhrase);
    utterance.lang = selectedLanguage === 'japanese' ? 'ja-JP' : 'ru-RU';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) {
    return (
      <Card className="border-2 border-gray-200">
        <CardContent className="p-4">
          <p className="text-sm text-gray-600">
            Speech recognition is not supported in your browser. Try Chrome, Edge, or Safari.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Pronunciation Practice</h3>
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              AI-Powered
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={playReference}
              data-testid="play-reference"
              className="flex items-center space-x-2"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen</span>
            </Button>

            <Button
              onClick={isRecording ? stopRecording : startRecording}
              disabled={!recognition}
              data-testid="record-pronunciation"
              className={`flex items-center space-x-2 ${
                isRecording 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-4 h-4 animate-pulse" />
                  <span>Recording...</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  <span>Record Your Voice</span>
                </>
              )}
            </Button>
          </div>

          {transcript && (
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-600 mb-1">You said:</p>
              <p className="text-sm font-medium text-gray-900">{transcript}</p>
            </div>
          )}

          {result && (
            <div className={`p-4 rounded-lg border-2 ${
              result.level === 'excellent' ? 'bg-green-50 border-green-300' :
              result.level === 'good' ? 'bg-blue-50 border-blue-300' :
              result.level === 'fair' ? 'bg-yellow-50 border-yellow-300' :
              'bg-red-50 border-red-300'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {result.level === 'excellent' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {result.level === 'good' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                  {result.level === 'fair' && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                  {result.level === 'poor' && <XCircle className="w-5 h-5 text-red-600" />}
                  <span className="font-semibold text-gray-900">Accuracy Score:</span>
                </div>
                <Badge className={
                  result.level === 'excellent' ? 'bg-green-600' :
                  result.level === 'good' ? 'bg-blue-600' :
                  result.level === 'fair' ? 'bg-yellow-600' :
                  'bg-red-600'
                }>
                  {result.score}%
                </Badge>
              </div>
              <p className="text-sm text-gray-700">{result.feedback}</p>
            </div>
          )}

          <div className="text-xs text-gray-500">
            💡 <strong>Tip:</strong> Click "Listen" first to hear the correct pronunciation, then click "Record" and speak clearly.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PronunciationChecker;

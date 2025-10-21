import React, { useState, useContext } from 'react';
import { AppContext } from '@/App';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Trophy, RotateCw } from 'lucide-react';
import { toast } from 'sonner';

const Quiz = () => {
  const { API, refreshProgress } = useContext(AppContext);
  const [quizState, setQuizState] = useState('setup'); // setup, active, results
  const [level, setLevel] = useState('N5');
  const [quizType, setQuizType] = useState('vocabulary');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const startQuiz = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/quiz`, {
        level,
        type: quizType
      });
      
      if (response.data.questions.length === 0) {
        toast.error('No questions available for this level');
        return;
      }
      
      setQuestions(response.data.questions);
      setQuizState('active');
      setCurrentQuestion(0);
      setAnswers([]);
      setSelectedAnswer(null);
    } catch (error) {
      console.error('Failed to start quiz:', error);
      toast.error('Failed to load quiz');
    } finally {
      setLoading(false);
    }
  };
  
  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Already answered
    setSelectedAnswer(answerIndex);
    
    const isCorrect = answerIndex === questions[currentQuestion].correct_answer;
    setAnswers([...answers, { questionId: questions[currentQuestion].id, isCorrect }]);
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };
  
  const finishQuiz = async () => {
    const score = answers.filter(a => a.isCorrect).length;
    const xpGain = score * 10;
    
    // Award XP
    await axios.post(`${API}/progress/update`, null, { params: { xp_gain: xpGain } });
    await refreshProgress();
    
    setQuizState('results');
    toast.success(`Quiz completed! +${xpGain} XP`);
  };
  
  const resetQuiz = () => {
    setQuizState('setup');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setQuestions([]);
  };
  
  // Setup screen
  if (quizState === 'setup') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="quiz-page">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Test Your Knowledge
          </h1>
          <p className="text-lg text-gray-600">
            Challenge yourself with a quick quiz
          </p>
        </div>
        
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Quiz Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Level
              </label>
              <div className="flex flex-wrap gap-2">
                {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                  <Button
                    key={lvl}
                    variant={level === lvl ? 'default' : 'outline'}
                    onClick={() => setLevel(lvl)}
                    data-testid={`quiz-level-${lvl.toLowerCase()}`}
                    className={level === lvl ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  >
                    {lvl}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quiz Type
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'vocabulary', label: 'Vocabulary' },
                  { value: 'grammar', label: 'Grammar' },
                  { value: 'reading', label: 'Reading' }
                ].map((type) => (
                  <Button
                    key={type.value}
                    variant={quizType === type.value ? 'default' : 'outline'}
                    onClick={() => setQuizType(type.value)}
                    disabled={type.value !== 'vocabulary'}
                    data-testid={`quiz-type-${type.value}`}
                    className={quizType === type.value ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Note: Only vocabulary quizzes are available currently
              </p>
            </div>
            
            <Button
              size="lg"
              onClick={startQuiz}
              disabled={loading}
              data-testid="start-quiz-button"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-semibold"
            >
              {loading ? 'Loading...' : 'Start Quiz'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Active quiz
  if (quizState === 'active') {
    const question = questions[currentQuestion];
    const isAnswered = selectedAnswer !== null;
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="quiz-active">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <Badge variant="outline" className="text-blue-600 border-blue-600">{level}</Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question card */}
        <Card className="border-0 shadow-xl mb-6">
          <CardHeader>
            <CardTitle className="text-2xl" data-testid="quiz-question">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct_answer;
                const showResult = isAnswered;
                
                let className = "w-full p-4 text-left rounded-lg border-2 transition-all font-medium ";
                
                if (!showResult) {
                  className += "border-gray-200 hover:border-blue-400 hover:bg-blue-50";
                } else if (isCorrect) {
                  className += "border-green-500 bg-green-50 text-green-900";
                } else if (isSelected && !isCorrect) {
                  className += "border-red-500 bg-red-50 text-red-900";
                } else {
                  className += "border-gray-200 bg-gray-50 text-gray-600";
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                    className={className}
                    data-testid={`quiz-option-${index}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {isAnswered && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg fade-in" data-testid="quiz-explanation">
                <p className="text-sm font-semibold text-gray-900 mb-1">Explanation:</p>
                <p className="text-sm text-gray-700">{question.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Navigation */}
        <div className="flex justify-end">
          <Button
            size="lg"
            onClick={handleNext}
            disabled={!isAnswered}
            data-testid="quiz-next-button"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-semibold"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        </div>
      </div>
    );
  }
  
  // Results screen
  if (quizState === 'results') {
    const score = answers.filter(a => a.isCorrect).length;
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="quiz-results">
        <Card className="border-0 shadow-xl text-center">
          <CardContent className="p-12">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h2>
            
            <div className="mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                {percentage}%
              </div>
              <p className="text-xl text-gray-600">
                {score} out of {questions.length} correct
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                onClick={resetQuiz}
                data-testid="quiz-try-again-button"
                className="font-semibold"
              >
                <RotateCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = '/'}
                data-testid="quiz-dashboard-button"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-semibold"
              >
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default Quiz;
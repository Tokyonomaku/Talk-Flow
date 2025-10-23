import React, { useContext } from 'react';
import { AppContext } from '@/App';
import { useNavigate } from 'react-router-dom';
import { Award, Book, Flame, TrendingUp, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const { progress, selectedLanguage, changeLanguage, languages } = useContext(AppContext);
  const navigate = useNavigate();
  
  const stats = [
    { 
      label: 'Total XP', 
      value: progress?.total_xp || 0, 
      icon: Zap, 
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    { 
      label: 'Current Level', 
      value: progress?.level || 'N5', 
      icon: Award, 
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    { 
      label: 'Day Streak', 
      value: progress?.streak_days || 0, 
      icon: Flame, 
      color: 'from-red-400 to-orange-500',
      bgColor: 'bg-red-50'
    },
    { 
      label: 'Words Learned', 
      value: progress?.vocabulary_learned || 0, 
      icon: Book, 
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50'
    },
  ];
  
  const quickActions = [
    {
      title: 'Start a Lesson',
      description: 'Continue your structured learning path',
      action: () => navigate('/lessons'),
      icon: Book,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      testId: 'quick-action-lessons'
    },
    {
      title: 'Practice Vocabulary',
      description: 'Review and learn new words',
      action: () => navigate('/vocabulary'),
      icon: Target,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      testId: 'quick-action-vocabulary'
    },
    {
      title: 'AI Conversation',
      description: 'Chat with your AI tutor in Japanese',
      action: () => navigate('/conversation'),
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      testId: 'quick-action-conversation'
    },
  ];
  
  // Calculate progress to next level
  const xpForNextLevel = 1000;
  const progressPercentage = ((progress?.total_xp || 0) / xpForNextLevel) * 100;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="dashboard">
      {/* Header */}
      <div className="mb-8 fade-in">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              Welcome back!
            </h1>
            <p className="text-lg text-gray-600">
              Let's continue your {languages[selectedLanguage]?.name} learning journey
            </p>
          </div>
          <div className="text-6xl">
            {languages[selectedLanguage]?.flag}
          </div>
        </div>
        
        {/* Language Info Card */}
        <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-4">
            <p className="text-sm text-gray-700">
              🌍 <strong>Learning:</strong> {languages[selectedLanguage]?.name} ({languages[selectedLanguage]?.nativeName})
              {selectedLanguage === 'russian' && (
                <span className="ml-2 text-purple-600 font-semibold">🆕 Now with Cyrillic alphabet!</span>
              )}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 fade-in">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-hover border-0 shadow-md" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Level Progress */}
      <Card className="mb-8 border-0 shadow-lg fade-in" data-testid="level-progress-card">
        <CardHeader>
          <CardTitle className="text-2xl">Level Progress</CardTitle>
          <CardDescription>
            {xpForNextLevel - (progress?.total_xp || 0)} XP until next level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{progress?.total_xp || 0} XP</span>
              <span>{xpForNextLevel} XP</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-lg overflow-hidden cursor-pointer group"
                onClick={action.action}
                data-testid={action.testId}
              >
                <div className={`h-2 ${action.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${action.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Premium Upgrade Section */}
      <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 fade-in" data-testid="premium-upgrade-card">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              🚀 Upgrade to TalkFlow Premium
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Unlock unlimited AI conversations, advanced grammar lessons, and personalized learning paths
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">✨ Premium Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited AI conversations</li>
                <li>• Advanced grammar lessons</li>
                <li>• Personalized learning paths</li>
                <li>• Progress tracking & analytics</li>
                <li>• Priority support</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">💎 Choose Your Plan</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">$49/year</p>
                  <p className="text-sm text-gray-500">Save 58% vs monthly</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-600">$9.99/month</p>
                  <p className="text-sm text-gray-500">Flexible monthly billing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://yourname.gumroad.com/l/talkflow-annual" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              data-testid="upgrade-annual-button"
            >
              Upgrade to Premium - $49/year
            </a>
            <a 
              href="https://yourname.gumroad.com/l/talkflow-monthly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              data-testid="upgrade-monthly-button"
            >
              Upgrade to Premium - $9.99/month
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Daily Goal */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-green-50 fade-in" data-testid="daily-goal-card">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Daily Goal: Practice 15 minutes
              </h3>
              <p className="text-gray-600 mb-4">
                Consistency is key to language learning!
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-green-600 hover:from-indigo-700 hover:to-green-700 text-white font-semibold"
                onClick={() => navigate('/lessons')}
                data-testid="start-learning-button"
              >
                Start Learning
              </Button>
            </div>
            <div className="hidden md:block text-6xl">
              📚
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
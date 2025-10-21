import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, BookOpen, Play } from 'lucide-react';

const Lessons = () => {
  const { API, selectedLanguage } = useContext(AppContext);
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchLessons();
  }, [selectedLanguage]);
  
  const fetchLessons = async () => {
    try {
      const response = await axios.get(`${API}/lessons`, {
        params: { language: selectedLanguage }
      });
      setLessons(response.data);
    } catch (error) {
      console.error('Failed to fetch lessons:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleStartLesson = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="shimmer h-64 rounded-lg"></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="lessons-page">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Learning Path
        </h1>
        <p className="text-lg text-gray-600">
          Structured lessons to guide your Japanese journey
        </p>
      </div>
      
      <div className="space-y-6">
        {lessons.map((lesson, index) => (
          <Card 
            key={lesson.id} 
            className="card-hover border-0 shadow-lg overflow-hidden"
            data-testid={`lesson-card-${lesson.id}`}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {lesson.level}
                    </Badge>
                    <span className="text-sm text-gray-500">Lesson {index + 1}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
                  <CardDescription className="text-base">
                    {lesson.description}
                  </CardDescription>
                </div>
                <div className="ml-4">
                  <BookOpen className="w-12 h-12 text-blue-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lesson.topics.length} topics</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-3">Topics covered:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lesson.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button
                  size="lg"
                  onClick={() => handleStartLesson(lesson.id)}
                  data-testid={`start-lesson-${lesson.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-semibold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
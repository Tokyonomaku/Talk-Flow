import React from 'react';
import AITutor from '@/components/AITutor';

const AITutorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Language Tutor
          </h1>
          <p className="text-lg text-gray-600">
            Ask anything about your target language. Get instant, personalized help!
          </p>
        </div>
        <AITutor />
      </div>
    </div>
  );
};

export default AITutorPage;


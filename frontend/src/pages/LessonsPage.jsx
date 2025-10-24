import React from 'react';
import LessonList from '../components/lessons/LessonList';

const LessonsPage = () => {
  return (
    <div className="lessons-page">
      <h1>Lessons</h1>
      <LessonList />
    </div>
  );
};

export default LessonsPage;

import React, { useState, useEffect } from 'react';
import { markLessonComplete, isLessonComplete } from '../utils/progressStorage';

function Lesson() {
  const [isComplete, setIsComplete] = useState(false);

  // Check completion status on mount and when it changes
  useEffect(() => {
    setIsComplete(isLessonComplete('spanish', 1));
  }, []);

  const handleFinish = () => {
    markLessonComplete('spanish', 1);
    setIsComplete(true);
    alert('Lesson complete! ✅');
  };

  return (
    <div>
      <h1>Lesson 1 {isComplete && '✅'}</h1>
      <button onClick={handleFinish}>Mark Complete</button>
    </div>
  );
}

export default Lesson;


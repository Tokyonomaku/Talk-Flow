import React from 'react';
import Card from '../common/Card';
import PremiumBadge from '../premium/PremiumBadge';

const LessonCard = ({ lesson, onSelect, isLocked = false }) => {
  return (
    <Card 
      hover={!isLocked}
      className={`p-4 cursor-pointer ${isLocked ? 'opacity-60' : ''}`}
      onClick={!isLocked ? () => onSelect(lesson) : undefined}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
        {lesson.isPremium && <PremiumBadge />}
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{lesson.description}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {lesson.level}
        </span>
        <span>{lesson.duration}</span>
      </div>
    </Card>
  );
};

export default LessonCard;

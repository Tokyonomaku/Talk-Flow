import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StrokeOrderDiagram = ({ character }) => {
  // Stroke order data for hiragana characters
  const strokeOrders = {
    'あ': {
      strokes: 3,
      description: [
        { number: 1, text: 'Horizontal stroke from left to right, slight curve down', direction: '→↘' },
        { number: 2, text: 'Curved vertical stroke from top, hook at bottom', direction: '↓↶' },
        { number: 3, text: 'Crossing stroke from upper left to lower right', direction: '↘' }
      ]
    },
    'い': {
      strokes: 2,
      description: [
        { number: 1, text: 'Short vertical stroke with slight curve', direction: '↓' },
        { number: 2, text: 'Longer vertical stroke, slight curve to left', direction: '↓↙' }
      ]
    },
    'う': {
      strokes: 2,
      description: [
        { number: 1, text: 'Short horizontal stroke with slight curve down', direction: '→↘' },
        { number: 2, text: 'Larger sweeping stroke to the right and down', direction: '→↓' }
      ]
    },
    'え': {
      strokes: 2,
      description: [
        { number: 1, text: 'Horizontal stroke from left to right with downward curve', direction: '→↘' },
        { number: 2, text: 'Vertical stroke crossing through the first stroke', direction: '↓' }
      ]
    },
    'お': {
      strokes: 3,
      description: [
        { number: 1, text: 'Horizontal stroke', direction: '→' },
        { number: 2, text: 'Vertical stroke from top', direction: '↓' },
        { number: 3, text: 'Large loop at the bottom right', direction: '↻' }
      ]
    },
    // Katakana
    'ア': {
      strokes: 2,
      description: [
        { number: 1, text: 'Diagonal stroke from top left to bottom right', direction: '↘' },
        { number: 2, text: 'Horizontal stroke crossing through', direction: '→' }
      ]
    },
    'イ': {
      strokes: 2,
      description: [
        { number: 1, text: 'Vertical stroke', direction: '↓' },
        { number: 2, text: 'Diagonal stroke from upper left', direction: '↘' }
      ]
    }
  };

  const strokeData = strokeOrders[character];

  if (!strokeData) {
    return (
      <Card className="border-2 border-blue-100 bg-blue-50">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-600">Stroke order diagram not available for this character</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Stroke Order Guide</h3>
          <Badge variant="outline" className="text-purple-600 border-purple-600">
            {strokeData.strokes} {strokeData.strokes === 1 ? 'Stroke' : 'Strokes'}
          </Badge>
        </div>
        
        <div className="space-y-3">
          {strokeData.description.map((stroke, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-purple-100">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold">
                {stroke.number}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{stroke.text}</p>
                <p className="text-xs text-purple-600 font-mono mt-1">Direction: {stroke.direction}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-xs text-gray-600">
            💡 <strong>Remember:</strong> Follow the stroke order and direction for authentic Japanese writing!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrokeOrderDiagram;
import React from 'react';
import { isPremium } from '@/utils/premiumCheck';
import { useNavigate } from 'react-router-dom';
import PremiumBadge from './PremiumBadge';

export const PremiumFeature = ({ featureName, children }) => {
  const navigate = useNavigate();
  const userIsPremium = isPremium();
  
  if (!userIsPremium) {
    return (
      <div className="relative">
        <div className="opacity-50 pointer-events-none">
          {children}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
            <PremiumBadge />
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Premium Feature</h3>
            <p className="text-gray-600 mb-4">
              {featureName} is available with a premium subscription.
            </p>
            <button 
              onClick={() => navigate('/pricing')}
              className="bg-gradient-to-r from-indigo-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-green-700 transition-colors"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};


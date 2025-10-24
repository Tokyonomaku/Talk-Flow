import React from 'react';
import PremiumBadge from './PremiumBadge';

const LockedFeature = ({ children, onUpgrade }) => {
  return (
    <div className="relative">
      <div className="opacity-50 pointer-events-none">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <div className="text-center">
          <PremiumBadge />
          <p className="text-white mt-2">Premium Feature</p>
          <button 
            onClick={onUpgrade}
            className="mt-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Unlock Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LockedFeature;

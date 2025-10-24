import React from 'react';

const UpgradeButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
    >
      Upgrade to Premium
    </button>
  );
};

export default UpgradeButton;

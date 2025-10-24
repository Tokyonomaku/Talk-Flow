import { useState, useEffect } from 'react';

export const usePremium = () => {
  const [isPremium, setIsPremium] = useState(() => {
    return localStorage.getItem('isPremium') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isPremium', isPremium.toString());
  }, [isPremium]);

  const upgradeToPremium = () => {
    setIsPremium(true);
  };

  const downgradeToFree = () => {
    setIsPremium(false);
  };

  return {
    isPremium,
    upgradeToPremium,
    downgradeToFree
  };
};

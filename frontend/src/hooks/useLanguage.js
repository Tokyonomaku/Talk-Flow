import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'spanish';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (languageId) => {
    setCurrentLanguage(languageId);
  };

  return {
    currentLanguage,
    changeLanguage
  };
};

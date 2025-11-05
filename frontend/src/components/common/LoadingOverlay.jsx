import { useEffect, useState } from 'react';
import { LoadingState } from './LoadingState';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const checkLoading = () => {
      const loadingLesson = sessionStorage.getItem('loadingLesson');
      setIsLoading(!!loadingLesson);
    };
    
    // Check immediately
    checkLoading();
    
    // Listen for storage changes (when lesson starts loading)
    const handleStorageChange = () => {
      checkLoading();
    };
    
    // Check periodically
    const interval = setInterval(checkLoading, 100);
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <LoadingState message="✨ Loading your lesson..." />
      </div>
    </div>
  );
};


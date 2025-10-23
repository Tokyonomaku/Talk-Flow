import React, { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "@/pages/Dashboard";
import Lessons from "@/pages/Lessons";
import LessonDetail from "@/pages/LessonDetail";
import Vocabulary from "@/pages/Vocabulary";
import Grammar from "@/pages/Grammar";
import Conversation from "@/pages/Conversation";
import TravelPhrases from "@/pages/TravelPhrases";
import Quiz from "@/pages/Quiz";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Activate from "@/pages/Activate";
import { Toaster } from "@/components/ui/sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AppContext = React.createContext();

const LANGUAGES = {
  ja: { name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  es: { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  fr: { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  de: { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  zh: { name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  ru: { name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  ar: { name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
  ko: { name: 'Korean', flag: '🇰🇷', nativeName: '한국어' }
};

function AppContent() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'ja'
  );
  
  useEffect(() => {
    initializeApp();
  }, [selectedLanguage]);
  
  const initializeApp = async () => {
    try {
      // Initialize data
      await axios.post(`${API}/initialize-data`, { language: selectedLanguage });
      // Get progress
      const response = await axios.get(`${API}/progress`, {
        params: { language: selectedLanguage }
      });
      setProgress(response.data);
    } catch (error) {
      console.error("Failed to initialize app:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const refreshProgress = async () => {
    try {
      const response = await axios.get(`${API}/progress`, {
        params: { language: selectedLanguage }
      });
      setProgress(response.data);
    } catch (error) {
      console.error("Failed to refresh progress:", error);
    }
  };
  
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    setLoading(true);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-green-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <AppContext.Provider value={{ 
      progress, 
      refreshProgress, 
      API, 
      selectedLanguage, 
      changeLanguage,
      languages: LANGUAGES 
    }}>
      <div className="App min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/travel-phrases" element={<TravelPhrases />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/activate" element={<Activate />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </AppContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
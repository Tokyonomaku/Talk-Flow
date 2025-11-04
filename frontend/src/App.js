import React, { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "@/pages/Dashboard.jsx";
import Lessons from "@/components/lessons/LessonList.jsx";
import LessonDetail from "@/components/lessons/LessonPlayer.jsx";
import Vocabulary from "@/pages/Vocabulary.jsx";
import Grammar from "@/pages/Grammar.jsx";
import Conversation from "@/pages/Conversation.jsx";
import TravelPhrases from "@/pages/TravelPhrases.jsx";
import Quiz from "@/pages/Quiz.jsx";
import Navigation from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.js";
import Activate from "@/pages/Activate.jsx";
import { Toaster } from "@/components/ui/sonner";
import { LoadingState } from "@/components/common/LoadingState";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
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
        <LoadingState message="Loading..." />
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
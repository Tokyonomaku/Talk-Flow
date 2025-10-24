import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Dashboard from './pages/Dashboard';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './components/lessons/LessonPlayer';
import Pricing from './pages/Pricing';
import Activate from './pages/Activate';
import Settings from './pages/Settings';

// Styles
import './styles/global.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/lesson/:id" element={<LessonDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

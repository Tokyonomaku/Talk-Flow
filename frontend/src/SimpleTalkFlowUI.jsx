import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGES, mockLessonsByLanguage } from './simpleTalkFlowData';
import LessonViewer from './LessonViewer';

/**
 * SimpleTalkFlowUI - MVP component for TalkFlow
 * - Shows all 7 languages (ja, es, fr, de, zh, ru, ar)
 * - Shows 19 lessons per language using mock data
 * - Does NOT depend on Supabase, MongoDB, or AI chat
 */
export default function SimpleTalkFlowUI() {
  const [activeLangCode, setActiveLangCode] = useState('ja');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [activeLanguage, setActiveLanguage] = useState(LANGUAGES[0] || { name: 'Japanese', code: 'ja' });
  const [error, setError] = useState(null);
  
  // Safely check localStorage and load lessons
  useEffect(() => {
    try {
      setIsPremium(localStorage.getItem('talkflow_premium') === 'true');
      
      // Safely get lessons
      const langLessons = (mockLessonsByLanguage && mockLessonsByLanguage[activeLangCode]) || [];
      setLessons(langLessons);
      
      // Safely get language
      const lang = (LANGUAGES && LANGUAGES.find(l => l.code === activeLangCode)) || LANGUAGES[0] || { name: 'Language', code: activeLangCode };
      setActiveLanguage(lang);
      
      console.log('Lessons loaded:', langLessons.length, 'for language:', activeLangCode);
    } catch (err) {
      console.error('Error in SimpleTalkFlowUI:', err);
      setError(err.message);
    }
  }, [activeLangCode]);

  const handleLanguageChange = (langCode) => {
    setActiveLangCode(langCode);
    setSelectedLesson(null); // Reset selected lesson when language changes
  };

  // Show error if something failed
  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'system-ui, sans-serif',
        background: '#0f172a',
        color: 'white',
      }}>
        <h1>Error Loading App</h1>
        <p style={{ color: '#ef4444' }}>{error}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '24px',
        fontFamily: 'system-ui, sans-serif',
        background: '#0f172a',
        color: 'white',
      }}
    >
      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px', margin: 0 }}>TalkFlow</h1>
          <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>
            Choose a language → pick a lesson → see lesson details.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {isPremium && (
            <span style={{ 
              padding: '6px 12px', 
              backgroundColor: '#10b981', 
              borderRadius: '6px', 
              fontSize: '12px',
              fontWeight: '600'
            }}>
              ✓ Premium
            </span>
          )}
          <Link 
            to="/pricing" 
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#6366f1', 
              borderRadius: '8px', 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            {isPremium ? 'Manage' : 'Upgrade'}
          </Link>
          <Link 
            to="/activate" 
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#1f2937', 
              borderRadius: '8px', 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '14px',
              border: '1px solid #374151'
            }}
          >
            Activate
          </Link>
        </div>
      </div>

      {/* LANGUAGE SELECTOR */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: lang.code === activeLangCode ? '2px solid #fbbf24' : '1px solid #1f2937',
              backgroundColor: lang.code === activeLangCode ? '#fbbf24' : '#1f2937',
              color: lang.code === activeLangCode ? '#111827' : 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: lang.code === activeLangCode ? '600' : '400',
            }}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {/* LESSON LIST */}
      <div
        style={{
          background: '#020617',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid #1f2937',
        }}
      >
        <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>
          {activeLanguage.name} Lessons ({lessons.length} total)
        </h2>

        {lessons.length === 0 && (
          <p style={{ opacity: 0.8 }}>No lessons available for this language.</p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {lessons.map((lesson) => {
            const isPremiumLesson = lesson.isPremium === true;
            const canAccess = !isPremiumLesson || isPremium;
            
            return (
              <button
                key={lesson.id}
                onClick={() => {
                  if (canAccess) {
                    setSelectedLesson(lesson);
                  } else {
                    window.location.href = '/pricing';
                  }
                }}
                style={{
                  textAlign: 'left',
                  padding: '12px',
                  borderRadius: '8px',
                  border: selectedLesson?.id === lesson.id ? '2px solid #38bdf8' : '1px solid #1f2937',
                  backgroundColor: selectedLesson?.id === lesson.id ? '#0f172a' : '#020617',
                  color: canAccess ? 'white' : '#6b7280',
                  cursor: canAccess ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  opacity: canAccess ? 1 : 0.6,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{lesson.title}</span>
                {isPremiumLesson && !isPremium && (
                  <span style={{ 
                    fontSize: '10px', 
                    backgroundColor: '#9333ea', 
                    padding: '2px 6px', 
                    borderRadius: '4px',
                    marginLeft: '8px'
                  }}>
                    Premium
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {selectedLesson ? (
        <LessonViewer lesson={selectedLesson} />
      ) : (
        <div
          style={{
            marginTop: '24px',
            padding: '24px',
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          <p style={{ fontSize: '16px' }}>Choose a lesson to start learning</p>
        </div>
      )}
    </div>
  );
}


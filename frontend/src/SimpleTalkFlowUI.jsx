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
  console.log('SimpleTalkFlowUI rendering...');
  console.log('LANGUAGES available:', !!LANGUAGES, 'Type:', typeof LANGUAGES, 'Is Array:', Array.isArray(LANGUAGES));
  console.log('mockLessonsByLanguage available:', !!mockLessonsByLanguage, 'Type:', typeof mockLessonsByLanguage);
  
  const [activeLangCode, setActiveLangCode] = useState('ja');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [activeLanguage, setActiveLanguage] = useState(() => {
    try {
      if (LANGUAGES && Array.isArray(LANGUAGES) && LANGUAGES.length > 0) {
        return LANGUAGES[0];
      }
      return { name: 'Japanese', code: 'ja' };
    } catch (e) {
      console.error('Error initializing activeLanguage:', e);
      return { name: 'Japanese', code: 'ja' };
    }
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Safely check localStorage and load lessons
  useEffect(() => {
    console.log('SimpleTalkFlowUI useEffect running...');
    try {
      // Check premium status
      try {
        setIsPremium(localStorage.getItem('talkflow_premium') === 'true');
      } catch (e) {
        console.warn('localStorage access failed:', e);
      }
      
      // Safely get lessons
      let langLessons = [];
      try {
        if (mockLessonsByLanguage && typeof mockLessonsByLanguage === 'object') {
          langLessons = mockLessonsByLanguage[activeLangCode] || [];
        }
        console.log('Lessons loaded:', langLessons.length, 'for language:', activeLangCode);
        setLessons(langLessons);
      } catch (e) {
        console.error('Error loading lessons:', e);
        setLessons([]);
      }
      
      // Safely get language
      try {
        const lang = (LANGUAGES && Array.isArray(LANGUAGES) && LANGUAGES.find(l => l.code === activeLangCode)) 
          || (LANGUAGES && Array.isArray(LANGUAGES) && LANGUAGES[0]) 
          || { name: 'Language', code: activeLangCode };
        setActiveLanguage(lang);
      } catch (e) {
        console.error('Error setting language:', e);
      }
      
      setIsLoading(false);
    } catch (err) {
      console.error('Error in SimpleTalkFlowUI useEffect:', err);
      setError(err.message);
      setIsLoading(false);
    }
  }, [activeLangCode]);

  const handleLanguageChange = (langCode) => {
    setActiveLangCode(langCode);
    setSelectedLesson(null); // Reset selected lesson when language changes
  };

  // Show loading state
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'system-ui, sans-serif',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h1>Loading TalkFlow...</h1>
        <p>Please wait</p>
      </div>
    );
  }

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

  // Ensure we have valid data before rendering
  if (!LANGUAGES || !Array.isArray(LANGUAGES) || LANGUAGES.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'system-ui, sans-serif',
        background: '#0f172a',
        color: 'white',
      }}>
        <h1>Configuration Error</h1>
        <p>LANGUAGES data not available</p>
      </div>
    );
  }

  console.log('SimpleTalkFlowUI rendering main UI...');
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
        {(LANGUAGES && Array.isArray(LANGUAGES) ? LANGUAGES : []).map((lang) => (
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


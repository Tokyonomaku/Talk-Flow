import { useState } from 'react';
import { getLessonsForLanguage, getAvailableLanguages } from '@/data/lessons';

/**
 * SimpleTalkFlowUI - MVP component for TalkFlow
 * - Shows all 7 languages (ja, es, fr, de, zh, ru, ar)
 * - Shows 19 lessons per language using mock data
 * - Does NOT depend on Supabase, MongoDB, or AI chat
 */
export default function SimpleTalkFlowUI() {
  const [activeLangCode, setActiveLangCode] = useState('ja');
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  const languages = getAvailableLanguages();
  const activeLanguage = languages.find(lang => lang.code === activeLangCode) || languages[0];
  const lessons = getLessonsForLanguage(activeLangCode);

  const handleLanguageChange = (langCode) => {
    setActiveLangCode(langCode);
    setSelectedLessonId(null); // Reset selected lesson when language changes
  };

  const handleLessonClick = (lesson) => {
    console.log('Lesson clicked:', {
      id: lesson.id,
      title: lesson.title,
      language: activeLangCode,
      isPremium: lesson.isPremium
    });
    setSelectedLessonId(lesson.id);
  };

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
      <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>TalkFlow MVP</h1>
      <p style={{ marginBottom: '24px', opacity: 0.8 }}>
        Choose a language → pick a lesson → see lesson details.
      </p>

      {/* LANGUAGE SELECTOR */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {languages.map((lang) => (
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => handleLessonClick(lesson)}
              style={{
                textAlign: 'left',
                padding: '12px',
                borderRadius: '8px',
                border: selectedLessonId === lesson.id ? '2px solid #38bdf8' : '1px solid #1f2937',
                backgroundColor: selectedLessonId === lesson.id ? '#0f172a' : '#020617',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selectedLessonId !== lesson.id) {
                  e.currentTarget.style.backgroundColor = '#1e293b';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLessonId !== lesson.id) {
                  e.currentTarget.style.backgroundColor = '#020617';
                }
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontWeight: '600' }}>
                  {lesson.id}. {lesson.title}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 6px',
                    borderRadius: '999px',
                    backgroundColor: lesson.isPremium ? '#4b5563' : '#16a34a',
                  }}
                >
                  {lesson.isPremium ? 'Premium' : 'Free'}
                </span>
              </div>
              {lesson.description && (
                <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>
                  {lesson.description}
                </div>
              )}
              {lesson.difficulty && (
                <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '4px' }}>
                  {lesson.difficulty} • {lesson.estimatedTime || 'N/A'}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* SELECTED LESSON INFO */}
      {selectedLessonId && (
        <div
          style={{
            marginTop: '24px',
            background: '#020617',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid #1f2937',
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
            Selected: {lessons.find(l => l.id === selectedLessonId)?.title}
          </h3>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>
            Check the console to see lesson details. Lesson content will be displayed here in future updates.
          </p>
        </div>
      )}
    </div>
  );
}


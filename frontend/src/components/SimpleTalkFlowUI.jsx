import { useState } from 'react';
import { LANGUAGES, mockLessonsByLanguage } from '@/simpleTalkFlowData';
import LessonViewer from './LessonViewer';

/**
 * SimpleTalkFlowUI - MVP component for TalkFlow
 * - Shows all 7 languages (ja, es, fr, de, zh, ru, ar)
 * - Shows 19 lessons per language using mock data
 * - Does NOT depend on Supabase, MongoDB, or AI chat
 */
export default function SimpleTalkFlowUI() {
  const [activeLangCode, setActiveLangCode] = useState('ja');
  const lessons = mockLessonsByLanguage[activeLangCode] ?? [];
  const [selectedLesson, setSelectedLesson] = useState(null);

  const activeLanguage = LANGUAGES.find(lang => lang.code === activeLangCode) ?? LANGUAGES[0];

  const handleLanguageChange = (langCode) => {
    setActiveLangCode(langCode);
    setSelectedLesson(null); // Reset selected lesson when language changes
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
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              style={{
                textAlign: 'left',
                padding: '12px',
                borderRadius: '8px',
                border: selectedLesson?.id === lesson.id ? '2px solid #38bdf8' : '1px solid #1f2937',
                backgroundColor: selectedLesson?.id === lesson.id ? '#0f172a' : '#020617',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              {lesson.title}
            </button>
          ))}
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


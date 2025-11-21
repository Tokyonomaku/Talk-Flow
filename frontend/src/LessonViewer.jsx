/**
 * LessonViewer - Simple component to display lesson content
 * Used in SimpleTalkFlowUI MVP
 */
export default function LessonViewer({ lesson }) {
  if (!lesson) return null;

  return (
    <div
      style={{
        marginTop: '24px',
        background: '#020617',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #1f2937',
      }}
    >
      <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>
        {lesson.title}
      </h3>
      
      {lesson.level && (
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>
          Level: {lesson.level}
        </div>
      )}

      {(lesson.description || lesson.summary) && (
        <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '16px' }}>
          {lesson.description || lesson.summary}
        </p>
      )}

      {/* Vocabulary List */}
      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Vocabulary ({lesson.vocabulary.length} words)</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {lesson.vocabulary.map((item, i) => {
              const word = item.word || item.english || '';
              const meaning = item.translation || '';
              const pronunciation = item.pronunciation || item.romanization || '';
              const example = item.example || '';
              const exampleEnglish = item.exampleEnglish || '';
              
              return (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    border: '1px solid #1f2937',
                    borderRadius: '8px',
                    backgroundColor: '#0f172a',
                  }}
                >
                  <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '16px' }}>{word}</div>
                  <div style={{ color: '#60a5fa', marginBottom: '4px', fontSize: '15px' }}>{meaning}</div>
                  {pronunciation && (
                    <div style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic', marginBottom: '4px' }}>
                      {pronunciation}
                    </div>
                  )}
                  {example && (
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #1f2937' }}>
                      <div style={{ marginBottom: '2px' }}>{example}</div>
                      {exampleEnglish && (
                        <div style={{ color: '#9ca3af' }}>{exampleEnglish}</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Phrases List */}
      {lesson.phrases && lesson.phrases.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Phrases ({lesson.phrases.length})</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {lesson.phrases.map((item, i) => {
              const phrase = item.english || item.word || '';
              const meaning = item.translation || '';
              const pronunciation = item.romanization || item.pronunciation || '';
              
              return (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    border: '1px solid #1f2937',
                    borderRadius: '8px',
                    backgroundColor: '#0f172a',
                  }}
                >
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{phrase}</div>
                  <div style={{ color: '#60a5fa', marginBottom: '4px' }}>{meaning}</div>
                  {pronunciation && (
                    <div style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                      {pronunciation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Grammar Section */}
      {lesson.grammar && (
        <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Grammar: {lesson.grammar.point}</h4>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '12px' }}>{lesson.grammar.explanation}</p>
          {lesson.grammar.examples && lesson.grammar.examples.length > 0 && (
            <div style={{ marginTop: '12px' }}>
              <strong style={{ fontSize: '14px' }}>Examples:</strong>
              {lesson.grammar.examples.map((ex, i) => (
                <div key={i} style={{ marginTop: '8px', padding: '8px', backgroundColor: '#020617', borderRadius: '4px' }}>
                  <div style={{ color: '#60a5fa' }}>{ex.sentence || ex.example}</div>
                  {ex.romanization && (
                    <div style={{ fontSize: '12px', color: '#9ca3af', fontStyle: 'italic' }}>{ex.romanization}</div>
                  )}
                  {ex.english && (
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{ex.english}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Difficulty and Time */}
      {(lesson.difficulty || lesson.estimatedTime) && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', fontSize: '14px', opacity: 0.8 }}>
          {lesson.difficulty && (
            <span>Difficulty: <strong>{lesson.difficulty}</strong></span>
          )}
          {lesson.estimatedTime && (
            <span>Time: <strong>{lesson.estimatedTime}</strong></span>
          )}
        </div>
      )}
    </div>
  );
}


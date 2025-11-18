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
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Vocabulary</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {lesson.vocabulary.map((item, i) => {
              const word = item.word || item.english || '';
              const meaning = item.translation || '';
              return (
                <li
                  key={i}
                  style={{
                    padding: '8px 0',
                    borderBottom: '1px solid #1f2937',
                  }}
                >
                  <strong>{word}</strong> – {meaning}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Phrases List */}
      {lesson.phrases && lesson.phrases.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Phrases</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {lesson.phrases.map((item, i) => {
              const phrase = item.english || item.word || '';
              const meaning = item.translation || '';
              return (
                <li
                  key={i}
                  style={{
                    padding: '8px 0',
                    borderBottom: '1px solid #1f2937',
                  }}
                >
                  <strong>{phrase}</strong> – {meaning}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}


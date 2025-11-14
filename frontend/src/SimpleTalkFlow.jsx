import React, { useState, useEffect } from "react";
import data from "./data/SimpleTalkFlow.json";
import { getLessonsForLanguage } from "./data/lessons";
import { languages } from "./data/languages";

// Simple LessonDetail component
function LessonDetail({ lesson }) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handlePractice = () => {
    // Simple practice logic - can be enhanced later
    if (!input.trim()) {
      setResponse("Please enter some text to practice!");
      return;
    }
    
    // For now, just echo back with a simple response
    // This can be replaced with actual AI/practice logic later
    setResponse(`You wrote: "${input}". Great practice! Keep going!`);
  };

  if (!lesson) return null;

  return (
    <div style={{ marginTop: "24px", border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>{lesson.title}</h2>
      {lesson.description && (
        <p style={{ color: "#666", marginBottom: 16 }}>{lesson.description}</p>
      )}
      
      {lesson.difficulty && (
        <div style={{ marginBottom: 8 }}>
          <strong>Difficulty:</strong> {lesson.difficulty}
        </div>
      )}
      
      {lesson.estimatedTime && (
        <div style={{ marginBottom: 16 }}>
          <strong>Estimated Time:</strong> {lesson.estimatedTime}
        </div>
      )}

      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 12 }}>Vocabulary ({lesson.vocabulary.length} words)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
            {lesson.vocabulary.map((word, i) => {
              const wordText = word.word || word.english || '';
              const pronunciation = word.romanization || word.pronunciation || '';
              
              return (
                <div key={i} style={{ border: "1px solid #eee", borderRadius: 4, padding: 12, backgroundColor: "#f9f9f9" }}>
                  <div style={{ fontWeight: "bold", marginBottom: 4 }}>{wordText}</div>
                  <div style={{ color: "#0066cc", marginBottom: 4 }}>{word.translation}</div>
                  {pronunciation && (
                    <div style={{ fontSize: "0.9em", color: "#666", fontStyle: "italic" }}>
                      {pronunciation}
                    </div>
                  )}
                  {word.example && (
                    <div style={{ fontSize: "0.85em", color: "#888", marginTop: 4 }}>
                      {word.example}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {lesson.phrases && lesson.phrases.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 12 }}>Phrases</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {lesson.phrases.map((phrase, i) => (
              <li key={i} style={{ marginBottom: 12, padding: 12, backgroundColor: "#f0f8ff", borderRadius: 4 }}>
                <div style={{ fontWeight: "bold" }}>{phrase.english || phrase.japanese}</div>
                <div style={{ color: "#0066cc", marginTop: 4 }}>{phrase.translation || phrase.japanese}</div>
                {phrase.romanization && (
                  <div style={{ fontSize: "0.9em", color: "#666", fontStyle: "italic", marginTop: 4 }}>
                    {phrase.romanization}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Practice Section */}
      <div style={{ marginTop: 24, padding: 16, backgroundColor: "#f9f9f9", borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Practice</h3>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your practice text here..."
          style={{
            width: "100%",
            minHeight: "100px",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: 4,
            fontSize: "14px",
            fontFamily: "inherit",
            resize: "vertical",
            marginBottom: 12
          }}
        />
        <button
          onClick={handlePractice}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0052a3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0066cc";
          }}
        >
          Practice
        </button>
        {response && (
          <div
            style={{
              marginTop: 16,
              padding: 12,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 4,
              minHeight: "40px"
            }}
          >
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SimpleTalkFlow() {
  // default to first language
  const [selectedLang, setSelectedLang] = useState(languages[0].code);
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  // find the language object
  const language = languages.find(l => l.code === selectedLang);
  
  // get actual lessons for the selected language
  const lessons = getLessonsForLanguage(selectedLang);

  // Reset selected lesson when language changes
  useEffect(() => {
    setSelectedLessonId(null);
  }, [selectedLang]);

  return (
    <div style={{ padding: "24px", maxWidth: 800, margin: "0 auto" }}>
      <h1>TalkFlow Lessons</h1>
      <p>Select a language to see its lessons.</p>

      {/* Language picker */}
      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        style={{ padding: "8px", marginBottom: "16px" }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Language summary */}
      <div style={{ marginBottom: "16px" }}>
        <strong>{language.name}</strong> — {language.totalLessons} lessons,{" "}
        {language.totalVocab} vocab ({language.freeLessons} free, {language.premiumLessons} premium)
      </div>

      {/* Lessons list */}
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Lessons</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {lessons.map((lesson, index) => {
            const isFree = index < 5;
            const isPremium = index >= 5;
            
            return (
              <li
                key={lesson.id}
                onClick={() => {
                  if (isFree) {
                    setSelectedLessonId(lesson.id);
                  }
                }}
                style={{
                  marginBottom: 8,
                  padding: 12,
                  border: selectedLessonId === lesson.id ? "2px solid #0066cc" : "1px solid #ddd",
                  borderRadius: 4,
                  cursor: isFree ? "pointer" : "default",
                  backgroundColor: selectedLessonId === lesson.id ? "#f0f8ff" : isPremium ? "#fafafa" : "white",
                  opacity: isPremium ? 0.7 : 1,
                  transition: "all 0.2s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                onMouseEnter={(e) => {
                  if (isFree && selectedLessonId !== lesson.id) {
                    e.currentTarget.style.backgroundColor = "#f9f9f9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (isFree && selectedLessonId !== lesson.id) {
                    e.currentTarget.style.backgroundColor = "white";
                  }
                }}
              >
                <div style={{ flex: 1 }}>
                  <strong>{lesson.title}</strong>{" "}
                  {isFree ? (
                    <span style={{ color: "green", fontWeight: "normal" }}>(free)</span>
                  ) : null}
                  {lesson.description && (
                    <div style={{ fontSize: "0.9em", color: "#666", marginTop: 4 }}>
                      {lesson.description}
                    </div>
                  )}
                </div>
                {isPremium && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("This lesson requires premium. Upgrade to unlock all lessons!");
                    }}
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "#9333ea",
                      color: "white",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "0.9em",
                      marginLeft: 12
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#7e22ce";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#9333ea";
                    }}
                  >
                    Unlock
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {selectedLessonId && (
        <LessonDetail lesson={lessons.find(l => l.id === selectedLessonId)} />
      )}
    </div>
  );
}


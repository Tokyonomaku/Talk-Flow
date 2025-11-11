import React, { useState } from "react";
import data from "../data/SimpleTalkFlow.json";

export default function SimpleTalkFlow() {
  // default to first language
  const [selectedLang, setSelectedLang] = useState(data.languages[0].code);

  // find the language object
  const language = data.languages.find(l => l.code === selectedLang);

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
        {data.languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Language summary */}
      <div style={{ marginBottom: "16px" }}>
        <strong>{language.name}</strong> — {language.lessons_count} lessons,{" "}
        {language.vocab_count} vocab
      </div>

      {/* Lessons list */}
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Lessons</h2>
        <ul>
          {Array.from({ length: language.lessons_count }, (_, i) => {
            const lessonNumber = i + 1;
            const isFree = lessonNumber <= language.free_lessons;
            return (
              <li key={lessonNumber} style={{ marginBottom: 6 }}>
                Lesson {lessonNumber}{" "}
                {isFree ? (
                  <span style={{ color: "green" }}>(free)</span>
                ) : (
                  <span style={{ color: "purple" }}>(premium)</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


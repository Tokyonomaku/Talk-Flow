// src/SimpleTalkFlow.tsx

import React, { useState } from "react";



type LanguageCode = "ja" | "es" | "fr" | "de" | "zh" | "ru" | "ar";



const mockLessonsByLanguage: Record<LanguageCode, { id: number; title: string; isPremium: boolean }[]> = {

  ja: [

    { id: 1, title: "Japanese Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "Japanese Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "Japanese Lesson 3 – Basic Phrases", isPremium: false },

  ],

  es: [

    { id: 1, title: "Spanish Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "Spanish Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "Spanish Lesson 3 – Basic Phrases", isPremium: false },

  ],

  fr: [

    { id: 1, title: "French Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "French Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "French Lesson 3 – Basic Phrases", isPremium: false },

  ],

  de: [

    { id: 1, title: "German Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "German Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "German Lesson 3 – Basic Phrases", isPremium: false },

  ],

  zh: [

    { id: 1, title: "Chinese Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "Chinese Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "Chinese Lesson 3 – Basic Phrases", isPremium: false },

  ],

  ru: [

    { id: 1, title: "Russian Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "Russian Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "Russian Lesson 3 – Basic Phrases", isPremium: false },

  ],

  ar: [

    { id: 1, title: "Arabic Lesson 1 – Greetings", isPremium: false },

    { id: 2, title: "Arabic Lesson 2 – Numbers", isPremium: false },

    { id: 3, title: "Arabic Lesson 3 – Basic Phrases", isPremium: false },

  ],

};



const languageMeta: { code: LanguageCode; name: string }[] = [

  { code: "ja", name: "Japanese" },

  { code: "es", name: "Spanish" },

  { code: "fr", name: "French" },

  { code: "de", name: "German" },

  { code: "zh", name: "Chinese" },

  { code: "ru", name: "Russian" },

  { code: "ar", name: "Arabic" },

];



export function SimpleTalkFlow() {

  const [activeLangCode, setActiveLangCode] = useState<LanguageCode>("ja");



  // Get mock lessons for the active language, or [] if not found

  const lessons = mockLessonsByLanguage[activeLangCode] ?? [];



  return (

    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>

      {/* Left column: languages */}

      <div style={{ width: "260px", borderRight: "1px solid #eee", padding: "1rem" }}>

        <h1 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>TalkFlow Languages</h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

          {languageMeta.map((lang) => (

            <li key={lang.code} style={{ marginBottom: "0.5rem" }}>

              <button

                onClick={() => setActiveLangCode(lang.code)}

                style={{

                  width: "100%",

                  textAlign: "left",

                  padding: "0.5rem 0.75rem",

                  borderRadius: "0.5rem",

                  border: "1px solid #ddd",

                  background: lang.code === activeLangCode ? "#2563eb" : "#fff",

                  color: lang.code === activeLangCode ? "#fff" : "#111",

                  cursor: "pointer",

                  fontSize: "0.95rem",

                }}

              >

                {lang.name}

              </button>

            </li>

          ))}

        </ul>

      </div>



      {/* Right column: lessons */}

      <div style={{ flex: 1, padding: "1.5rem" }}>

        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>

          Lessons for {languageMeta.find((l) => l.code === activeLangCode)?.name}

        </h2>

        {lessons.length === 0 ? (

          <p>No lessons found yet for this language.</p>

        ) : (

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

            {lessons.map((lesson) => (

              <li

                key={lesson.id}

                style={{

                  padding: "0.75rem 1rem",

                  borderRadius: "0.5rem",

                  border: "1px solid #eee",

                  marginBottom: "0.5rem",

                  background: "#fafafa",

                }}

              >

                {lesson.title}

                {lesson.isPremium && (

                  <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "#b45309" }}>

                    (Premium)

                  </span>

                )}

              </li>

            ))}

          </ul>

        )}

      </div>

    </div>

  );

}


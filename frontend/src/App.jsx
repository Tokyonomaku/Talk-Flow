import { useState } from "react";

import { LANGUAGES, mockLessonsByLanguage } from "./simpleTalkFlowData";



export default function App() {

  // which language is currently selected

  const [activeLangCode, setActiveLangCode] = useState("ja");

  // which lesson is selected

  const [activeLessonId, setActiveLessonId] = useState(null);



  const activeLanguage =

    LANGUAGES.find((lang) => lang.code === activeLangCode) ?? LANGUAGES[0];



  const lessons = mockLessonsByLanguage[activeLangCode] ?? [];



  const activeLesson =

    lessons.find((lesson) => lesson.id === activeLessonId) ?? null;



  return (

    <div

      style={{

        minHeight: "100vh",

        padding: "24px",

        fontFamily: "system-ui, sans-serif",

        background: "#0f172a",

        color: "white",

      }}

    >

      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>TalkFlow MVP</h1>

      <p style={{ marginBottom: "24px", opacity: 0.8 }}>

        Choose a language → pick a lesson → see a simple preview.

      </p>



      {/* LANGUAGE BUTTONS */}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>

        {LANGUAGES.map((lang) => (

          <button

            key={lang.code}

            onClick={() => {

              setActiveLangCode(lang.code);

              setActiveLessonId(null); // reset selected lesson

            }}

            style={{

              padding: "8px 12px",

              borderRadius: "999px",

              border:

                lang.code === activeLangCode

                  ? "2px solid #fbbf24"

                  : "1px solid #1f2937",

              backgroundColor:

                lang.code === activeLangCode ? "#fbbf24" : "#1f2937",

              color: lang.code === activeLangCode ? "#111827" : "white",

              cursor: "pointer",

              fontSize: "14px",

            }}

          >

            {lang.name}

          </button>

        ))}

      </div>



      {/* LESSON LIST + DETAIL */}

      <div

        style={{

          marginTop: "24px",

          display: "grid",

          gridTemplateColumns: "1.2fr 1.8fr",

          gap: "16px",

        }}

      >

        {/* LEFT: lesson list */}

        <div

          style={{

            background: "#020617",

            borderRadius: "12px",

            padding: "16px",

            border: "1px solid #1f2937",

          }}

        >

          <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>

            {activeLanguage.name} lessons

          </h2>



          {lessons.length === 0 && (

            <p style={{ opacity: 0.8 }}>No lessons yet for this language.</p>

          )}



          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

            {lessons.map((lesson) => (

              <li

                key={lesson.id}

                style={{

                  marginBottom: "8px",

                }}

              >

                <button

                  onClick={() => setActiveLessonId(lesson.id)}

                  style={{

                    width: "100%",

                    textAlign: "left",

                    padding: "8px 10px",

                    borderRadius: "8px",

                    border:

                      activeLessonId === lesson.id

                        ? "2px solid #38bdf8"

                        : "1px solid #1f2937",

                    backgroundColor:

                      activeLessonId === lesson.id ? "#0f172a" : "#020617",

                    color: "white",

                    cursor: "pointer",

                    display: "flex",

                    justifyContent: "space-between",

                    alignItems: "center",

                    fontSize: "14px",

                  }}

                >

                  <span>

                    {lesson.id}. {lesson.title}

                  </span>

                  <span

                    style={{

                      fontSize: "11px",

                      padding: "2px 6px",

                      borderRadius: "999px",

                      backgroundColor: lesson.premium ? "#4b5563" : "#16a34a",

                    }}

                  >

                    {lesson.premium ? "Premium" : "Free"}

                  </span>

                </button>

              </li>

            ))}

          </ul>

        </div>



        {/* RIGHT: lesson detail */}

        <div

          style={{

            background: "#020617",

            borderRadius: "12px",

            padding: "16px",

            border: "1px solid #1f2937",

          }}

        >

          {activeLesson ? (

            <>

              <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>

                {activeLesson.title}

              </h2>

              <p style={{ marginBottom: "8px", opacity: 0.8 }}>

                Level: {activeLesson.level} ·{" "}

                {activeLesson.premium ? "Premium" : "Free"}

              </p>

              <p style={{ opacity: 0.85 }}>

                This is a simple preview area. Later this will show:

                <br />

                – example sentences,

                <br />

                – audio,

                <br />

                – and your AI coach.

              </p>

              <button

                style={{

                  marginTop: "16px",

                  padding: "10px 16px",

                  borderRadius: "999px",

                  border: "none",

                  backgroundColor: "#f97316",

                  color: "#111827",

                  cursor: "pointer",

                  fontWeight: 600,

                }}

                onClick={() => alert("Starting lesson (MVP placeholder)…")}

              >

                Start lesson

              </button>

            </>

          ) : (

            <p style={{ opacity: 0.8 }}>

              Pick a lesson on the left to see its details.

            </p>

          )}

        </div>

      </div>

    </div>

  );

}

// src/App.jsx

import { useState } from "react";

import { languages } from "./simpleTalkFlowConfig";



// Simple mock lessons for now so the UI actually changes when you click

const mockLessonsByLanguage = {

  ja: [

    { id: "ja-1", title: "Greetings in Japanese", description: "Learn basic greetings like こんにちは and ありがとう." },

    { id: "ja-2", title: "Introduce Yourself", description: "Practice saying your name, where you're from, and what you like." },

  ],

  es: [

    { id: "es-1", title: "Hola & Buenos días", description: "Start conversations with basic Spanish greetings." },

    { id: "es-2", title: "Ordering Food", description: "Learn phrases for restaurants and cafes." },

  ],

  fr: [

    { id: "fr-1", title: "Bonjour !", description: "Simple French greetings and polite phrases." },

    { id: "fr-2", title: "Talking About Yourself", description: "Say your name, age, and where you live in French." },

  ],

  de: [

    { id: "de-1", title: "Hallo & Guten Morgen", description: "Basic German greetings and introductions." },

    { id: "de-2", title: "Small Talk Basics", description: "Talk about the weather and your day in German." },

  ],

  zh: [

    { id: "zh-1", title: "你好 (Nǐ hǎo)", description: "First greetings and tones in Mandarin Chinese." },

    { id: "zh-2", title: "Numbers 1–10", description: "Count from 1 to 10 in Mandarin." },

  ],

  ru: [

    { id: "ru-1", title: "Здравствуйте & Привет", description: "Formal and informal Russian greetings." },

    { id: "ru-2", title: "The Russian Alphabet", description: "Get familiar with Cyrillic characters." },

  ],

  ar: [

    { id: "ar-1", title: "مرحبا (Marhaban)", description: "Basic greetings in Arabic and how they're pronounced." },

    { id: "ar-2", title: "Introductions", description: "Say who you are and where you're from in Arabic." },

  ],

};



export default function App() {

  // Start with Japanese selected

  const [activeLangCode, setActiveLangCode] = useState("ja");



  // Find the full language object from the list

  const activeLang =

    languages.find((l) => l.code === activeLangCode) ?? languages[0];



  // Get mock lessons for the active language, or [] if we don't have any yet

  const lessons = mockLessonsByLanguage[activeLangCode] ?? [];



  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">

      {/* Top bar */}

      <header className="border-b border-white/5">

        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-sm font-bold">

              TF

            </div>

            <div>

              <h1 className="text-lg font-semibold">TalkFlow</h1>

              <p className="text-xs text-slate-400">

                Speak your next language in vibes, not drills.

              </p>

            </div>

          </div>

          <span className="text-xs rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-emerald-200">

            Pre-Alpha · MVP Preview

          </span>

        </div>

      </header>



      {/* Main content */}

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid gap-8 md:grid-cols-[1.1fr,1.6fr]">

        {/* Left column: hero + language cards */}

        <section className="space-y-6">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">

              Choose your

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">

                next language vibe

              </span>

            </h2>

            <p className="mt-3 text-sm text-slate-300 md:text-base">

              7 languages · 133 lessons · 1,370 words. Start with free lessons,

              unlock premium when you&apos;re ready.

            </p>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {languages.map((lang) => {

              const isActive = lang.code === activeLangCode;

              return (

                <button

                  key={lang.code}

                  onClick={() => setActiveLangCode(lang.code)}

                  className={[

                    "text-left rounded-xl border px-4 py-3 transition-all",

                    "bg-slate-900/40 border-slate-700/60 hover:border-cyan-400/60 hover:bg-slate-900",

                    isActive &&

                      "border-cyan-400 bg-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.35)]",

                  ]

                    .filter(Boolean)

                    .join(" ")}

                >

                  <div className="flex items-center justify-between gap-2">

                    <span className="font-semibold">{lang.name}</span>

                    <span className="text-[10px] uppercase tracking-wide text-slate-400">

                      {lang.code}

                    </span>

                  </div>

                  <div className="mt-1 text-xs text-slate-300">

                    {lang.totalLessons} lessons · {lang.totalVocab} words

                  </div>

                  <div className="mt-2 flex flex-wrap gap-2 text-[10px]">

                    <span className="rounded-full bg-emerald-500/10 text-emerald-200 px-2 py-0.5 border border-emerald-400/30">

                      {lang.freeLessons} free

                    </span>

                    <span className="rounded-full bg-fuchsia-500/10 text-fuchsia-200 px-2 py-0.5 border border-fuchsia-400/30">

                      {lang.premiumLessons} premium

                    </span>

                  </div>

                </button>

              );

            })}

          </div>

        </section>



        {/* Right column: lesson list */}

        <section className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm p-4 md:p-6 flex flex-col">

          <header className="flex items-center justify-between gap-2 mb-4">

            <div>

              <h3 className="text-lg font-semibold">

                {activeLang.name} lessons

              </h3>

              <p className="text-xs text-slate-400">

                Showing {lessons.length} sample lessons

              </p>

            </div>

          </header>



          <div className="flex-1 rounded-xl bg-slate-950/60 border border-slate-800/80 p-3 md:p-4 overflow-auto">

            {lessons.length === 0 && (

              <div className="text-sm text-slate-400">

                No sample lessons yet for {activeLang.name}. Add some to

                <code className="text-xs mx-1">

                  mockLessonsByLanguage["{activeLang.code}"]

                </code>

                to make this panel come alive.

              </div>

            )}



            {lessons.length > 0 && (

              <ol className="space-y-2 text-sm">

                {lessons.map((lesson, index) => (

                  <li

                    key={lesson.id}

                    className="flex items-start gap-2 rounded-lg border border-slate-800/70 bg-slate-900/70 px-3 py-2"

                  >

                    <span className="mt-0.5 text-[10px] text-slate-500 w-6">

                      {String(index + 1).padStart(2, "0")}

                    </span>

                    <div>

                      <div className="font-medium">

                        {lesson.title ?? `Lesson ${index + 1}`}

                      </div>

                      {lesson.description && (

                        <div className="text-[11px] text-slate-400 mt-0.5">

                          {lesson.description}

                        </div>

                      )}

                    </div>

                  </li>

                ))}

              </ol>

            )}

          </div>



          <footer className="mt-4 text-[11px] text-slate-500">

            This is the MVP lesson browser. Next step: connect real lesson

            data instead of mockLessonsByLanguage.

          </footer>

        </section>

      </main>

    </div>

  );

}

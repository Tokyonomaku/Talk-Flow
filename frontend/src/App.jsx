import { useEffect, useState } from "react";

import { languages } from "./simpleTalkFlowConfig.js";

// 👉 adjust this import to wherever your real lesson loader is

// e.g. import { getLessonsForLanguage } from "./lib/lessonsApi";

import { getLessonsForLanguage } from "./data/lessons";

// Wrap synchronous function to be async-compatible
const getLessonsForLanguageAsync = async (langCode) => {
  return Promise.resolve(getLessonsForLanguage(langCode));
};



export default function App() {

  const [activeLangCode, setActiveLangCode] = useState("ja");

  const [lessons, setLessons] = useState([]);

  const [loading, setLoading] = useState(false);



  const activeLang = languages.find((l) => l.code === activeLangCode) ?? languages[0];



  useEffect(() => {

    let cancelled = false;



    async function load() {

      setLoading(true);

      try {

        const data = await getLessonsForLanguageAsync(activeLangCode);

        if (!cancelled) {

          setLessons(Array.isArray(data) ? data : []);

        }

      } catch (err) {

        console.error("Failed to load lessons for", activeLangCode, err);

        if (!cancelled) {

          setLessons([]);

        }

      } finally {

        if (!cancelled) {

          setLoading(false);

        }

      }

    }



    load();



    return () => {

      cancelled = true;

    };

  }, [activeLangCode]);



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

              <p className="text-xs text-slate-400">Speak your next language in vibes, not drills.</p>

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

              Choose your<br />

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

                    isActive && "border-cyan-400 bg-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.35)]",

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

                Showing {lessons.length || activeLang.totalLessons} lessons

              </p>

            </div>

          </header>



          <div className="flex-1 rounded-xl bg-slate-950/60 border border-slate-800/80 p-3 md:p-4 overflow-auto">

            {loading && (

              <div className="text-sm text-slate-300">Loading lessons…</div>

            )}



            {!loading && lessons.length === 0 && (

              <div className="text-sm text-slate-400">

                No lesson details loaded yet, but we know this language has{" "}

                {activeLang.totalLessons} lessons. Next step is wiring the real

                lesson API into <code className="text-xs">getLessonsForLanguage</code>.

              </div>

            )}



            {!loading && lessons.length > 0 && (

              <ol className="space-y-2 text-sm">

                {lessons.map((lesson, index) => (

                  <li

                    key={lesson.id ?? `${activeLang.code}-${index}`}

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

                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">

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

            This is the MVP lesson browser. Next steps: per-lesson pages,

            spaced repetition, and AI tutor.

          </footer>

        </section>

      </main>

    </div>

  );

}

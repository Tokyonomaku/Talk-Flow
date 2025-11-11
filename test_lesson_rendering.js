// Test to identify what's broken in lesson rendering
const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'frontend/src/data/lessons');
const languages = {
  'ja': { name: 'Japanese', file: 'japanese' },
  'es': { name: 'Spanish', file: 'spanish' },
  'zh': { name: 'Chinese', file: 'chinese' }
};

function loadLessons(code) {
  const lang = languages[code];
  const filePath = path.join(lessonsDir, `${lang.file}.js`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const moduleExports = {};
  eval(fileContent.replace('export const', 'moduleExports.'));
  return moduleExports.lessons || [];
}

console.log('='.repeat(70));
console.log('TESTING LESSON RENDERING ISSUES');
console.log('='.repeat(70));
console.log();

// Test what LessonPlayer expects vs what exists
const issues = [];

Object.entries(languages).forEach(([code, lang]) => {
  const lessons = loadLessons(code);
  const lesson = lessons[0]; // Test first lesson
  
  console.log(`\n${lang.name} - Lesson 1 Structure:`);
  console.log(`  Title: ${lesson.title}`);
  console.log(`  Has vocabulary: ${Array.isArray(lesson.vocabulary)}`);
  
  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    const vocab = lesson.vocabulary[0];
    console.log(`  First vocabulary item keys: ${Object.keys(vocab).join(', ')}`);
    
    // Check what LessonPlayer tries to access
    console.log(`\n  LessonPlayer tries to access:`);
    console.log(`    word.word: ${vocab.word || vocab.english || 'MISSING'}`);
    console.log(`    word.romanization: ${vocab.romanization || vocab.pronunciation || 'MISSING'}`);
    
    // Check for missing fields
    if (!vocab.word && !vocab.english) {
      issues.push(`${lang.name}: Vocabulary missing 'word' or 'english' field`);
    }
    if (!vocab.romanization && !vocab.pronunciation) {
      issues.push(`${lang.name}: Vocabulary missing 'romanization' or 'pronunciation' field`);
    }
  }
  
  // Check for phrases
  console.log(`  Has phrases: ${!!lesson.phrases}`);
  if (!lesson.phrases) {
    issues.push(`${lang.name}: Lesson missing 'phrases' field (LessonPlayer line 427)`);
  }
  
  // Check for grammar
  console.log(`  Has grammar: ${!!lesson.grammar}`);
  if (!lesson.grammar) {
    issues.push(`${lang.name}: Lesson missing 'grammar' field (LessonPlayer line 447)`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('ISSUES FOUND');
console.log('='.repeat(70));

if (issues.length > 0) {
  issues.forEach(issue => console.log(`✗ ${issue}`));
} else {
  console.log('No issues found');
}

console.log('\n' + '='.repeat(70));
console.log('DETAILED BREAKDOWN');
console.log('='.repeat(70));

// Test each language format
Object.entries(languages).forEach(([code, lang]) => {
  const lessons = loadLessons(code);
  const lesson = lessons[0];
  
  console.log(`\n${lang.name}:`);
  console.log(`  Vocabulary format: ${lesson.vocabulary[0].word ? 'alternative (word)' : 'standard (english)'}`);
  console.log(`  Has phrases: ${!!lesson.phrases}`);
  console.log(`  Has grammar: ${!!lesson.grammar}`);
  
  // Simulate what LessonPlayer does
  console.log(`\n  What happens when LessonPlayer renders:`);
  try {
    const vocab = lesson.vocabulary[0];
    const wordText = vocab.word || vocab.english || 'UNDEFINED';
    const pronunciation = vocab.romanization || vocab.pronunciation || 'UNDEFINED';
    console.log(`    ✓ word.word/english: ${wordText}`);
    console.log(`    ✓ word.romanization/pronunciation: ${pronunciation}`);
  } catch (e) {
    console.log(`    ✗ ERROR: ${e.message}`);
  }
  
  try {
    if (lesson.phrases) {
      console.log(`    ✓ lesson.phrases exists: ${lesson.phrases.length} phrases`);
    } else {
      console.log(`    ✗ lesson.phrases is undefined - will cause error at line 427`);
    }
  } catch (e) {
    console.log(`    ✗ ERROR accessing phrases: ${e.message}`);
  }
  
  try {
    if (lesson.grammar) {
      console.log(`    ✓ lesson.grammar exists: ${lesson.grammar.point}`);
    } else {
      console.log(`    ✗ lesson.grammar is undefined - will cause error at line 447`);
    }
  } catch (e) {
    console.log(`    ✗ ERROR accessing grammar: ${e.message}`);
  }
});


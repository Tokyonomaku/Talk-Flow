// Test script to verify lessons exist and check their structure
const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'frontend/src/data/lessons');
const languages = {
  'ja': 'Japanese',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'zh': 'Chinese',
  'ru': 'Russian',
  'ar': 'Arabic'
};

console.log('='.repeat(60));
console.log('LESSON VERIFICATION TEST');
console.log('='.repeat(60));
console.log();

let totalLessons = 0;
let totalVocabulary = 0;
const results = {};

// Test each language
Object.entries(languages).forEach(([code, name]) => {
  const filePath = path.join(lessonsDir, `${code === 'ja' ? 'japanese' : code === 'zh' ? 'chinese' : code === 'ar' ? 'arabic' : code === 'ru' ? 'russian' : code === 'de' ? 'german' : code === 'fr' ? 'french' : 'spanish'}.js`);
  
  try {
    // Read and evaluate the module
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // Extract the lessons export
    const moduleExports = {};
    eval(fileContent.replace('export const', 'moduleExports.'));
    
    const lessons = moduleExports.lessons || [];
    const lessonCount = lessons.length;
    let vocabCount = 0;
    let premiumCount = 0;
    let freeCount = 0;
    
    lessons.forEach(lesson => {
      if (lesson.vocabulary && Array.isArray(lesson.vocabulary)) {
        vocabCount += lesson.vocabulary.length;
      }
      if (lesson.isPremium) {
        premiumCount++;
      } else {
        freeCount++;
      }
    });
    
    totalLessons += lessonCount;
    totalVocabulary += vocabCount;
    
    results[code] = {
      name,
      filePath,
      exists: true,
      lessonCount,
      vocabCount,
      premiumCount,
      freeCount,
      lessons: lessons.map(l => ({
        id: l.id,
        title: l.title,
        vocabCount: l.vocabulary ? l.vocabulary.length : 0,
        isPremium: l.isPremium || false
      }))
    };
    
    console.log(`✓ ${name} (${code}):`);
    console.log(`  - Lessons: ${lessonCount}`);
    console.log(`  - Total Vocabulary: ${vocabCount}`);
    console.log(`  - Free Lessons: ${freeCount}`);
    console.log(`  - Premium Lessons: ${premiumCount}`);
    console.log();
    
  } catch (error) {
    results[code] = {
      name,
      filePath,
      exists: false,
      error: error.message
    };
    console.log(`✗ ${name} (${code}): ERROR - ${error.message}`);
    console.log();
  }
});

// Summary
console.log('='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`Total Languages: ${Object.keys(languages).length}`);
console.log(`Total Lessons: ${totalLessons}`);
console.log(`Total Vocabulary Words: ${totalVocabulary}`);
console.log();

// Detailed breakdown
console.log('DETAILED BREAKDOWN:');
console.log('='.repeat(60));
Object.entries(results).forEach(([code, result]) => {
  if (result.exists) {
    console.log(`\n${result.name} (${code}):`);
    result.lessons.forEach(lesson => {
      const premiumBadge = lesson.isPremium ? ' [PREMIUM]' : '';
      console.log(`  ${lesson.id}. ${lesson.title} - ${lesson.vocabCount} words${premiumBadge}`);
    });
  }
});

// Test the getLessonsForLanguage function
console.log('\n' + '='.repeat(60));
console.log('TESTING LESSON LOADING FUNCTION');
console.log('='.repeat(60));

// Simulate the function
const lessonData = {};
Object.entries(languages).forEach(([code, name]) => {
  const fileName = code === 'ja' ? 'japanese' : code === 'zh' ? 'chinese' : code === 'ar' ? 'arabic' : code === 'ru' ? 'russian' : code === 'de' ? 'german' : code === 'fr' ? 'french' : 'spanish';
  const filePath = path.join(lessonsDir, `${fileName}.js`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const moduleExports = {};
    eval(fileContent.replace('export const', 'moduleExports.'));
    lessonData[code] = moduleExports.lessons || [];
  } catch (error) {
    lessonData[code] = [];
  }
});

function getLessonsForLanguage(languageCode) {
  return lessonData[languageCode] || [];
}

// Test each language code
Object.keys(languages).forEach(code => {
  const lessons = getLessonsForLanguage(code);
  console.log(`${code}: ${lessons.length} lessons loaded`);
});

console.log('\n' + '='.repeat(60));
console.log('TEST COMPLETE');
console.log('='.repeat(60));


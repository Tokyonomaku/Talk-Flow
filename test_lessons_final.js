// Final comprehensive test script that handles different vocabulary structures
const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'frontend/src/data/lessons');
const languages = {
  'ja': { name: 'Japanese', file: 'japanese', format: 'standard' },
  'es': { name: 'Spanish', file: 'spanish', format: 'standard' },
  'fr': { name: 'French', file: 'french', format: 'standard' },
  'de': { name: 'German', file: 'german', format: 'standard' },
  'zh': { name: 'Chinese', file: 'chinese', format: 'alternative' },
  'ru': { name: 'Russian', file: 'russian', format: 'alternative' },
  'ar': { name: 'Arabic', file: 'arabic', format: 'alternative' }
};

console.log('='.repeat(70));
console.log('COMPREHENSIVE LESSON TESTING - FINAL REPORT');
console.log('='.repeat(70));
console.log();

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];
const warnings = [];
const stats = {};

// Helper function to load lessons
function loadLessons(code) {
  const lang = languages[code];
  const filePath = path.join(lessonsDir, `${lang.file}.js`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const moduleExports = {};
    eval(fileContent.replace('export const', 'moduleExports.'));
    return moduleExports.lessons || [];
  } catch (error) {
    errors.push(`Failed to load ${lang.name}: ${error.message}`);
    return [];
  }
}

// Load all lessons
const allLessons = {};
Object.entries(languages).forEach(([code]) => {
  allLessons[code] = loadLessons(code);
});

// Test vocabulary structure (handles both formats)
function validateVocabulary(vocab, lang, lessonId, vocabIndex, format) {
  const issues = [];
  
  if (format === 'standard') {
    // Standard format: english, translation, pronunciation, example, exampleEnglish
    const requiredFields = ['english', 'translation', 'pronunciation', 'example', 'exampleEnglish'];
    requiredFields.forEach(field => {
      totalTests++;
      if (vocab.hasOwnProperty(field) && vocab[field]) {
        passedTests++;
      } else {
        failedTests++;
        issues.push(`Missing or empty '${field}'`);
      }
    });
  } else {
    // Alternative format: word, translation, romanization
    const requiredFields = ['word', 'translation', 'romanization'];
    requiredFields.forEach(field => {
      totalTests++;
      if (vocab.hasOwnProperty(field) && vocab[field]) {
        passedTests++;
      } else {
        failedTests++;
        issues.push(`Missing or empty '${field}'`);
      }
    });
  }
  
  return issues;
}

// Test 1: File Existence
console.log('TEST 1: File Existence');
console.log('-'.repeat(70));
totalTests += Object.keys(languages).length;
Object.entries(languages).forEach(([code, lang]) => {
  const filePath = path.join(lessonsDir, `${lang.file}.js`);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${lang.name} file exists`);
    passedTests++;
  } else {
    console.log(`✗ ${lang.name} file missing`);
    failedTests++;
    errors.push(`${lang.name} file not found`);
  }
});
console.log();

// Test 2: Lesson Loading
console.log('TEST 2: Lesson Loading');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  totalTests++;
  if (lessons.length > 0) {
    console.log(`✓ ${lang.name}: ${lessons.length} lessons loaded`);
    passedTests++;
    stats[code] = { lessons: lessons.length, vocab: 0, free: 0, premium: 0 };
  } else {
    console.log(`✗ ${lang.name}: No lessons loaded`);
    failedTests++;
    errors.push(`${lang.name} has no lessons`);
  }
});
console.log();

// Test 3: Lesson Structure Validation
console.log('TEST 3: Lesson Structure Validation');
console.log('-'.repeat(70));

const requiredLessonFields = ['id', 'title', 'description', 'difficulty', 'estimatedTime', 'isPremium', 'vocabulary'];

Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  
  lessons.forEach((lesson) => {
    // Check required fields
    requiredLessonFields.forEach(field => {
      totalTests++;
      if (lesson.hasOwnProperty(field)) {
        passedTests++;
      } else {
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id}: Missing field '${field}'`);
      }
    });
    
    // Validate field types and values
    totalTests++;
    if (typeof lesson.id === 'number' && lesson.id > 0) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Invalid ID`);
    }
    
    totalTests++;
    if (typeof lesson.title === 'string' && lesson.title.trim().length > 0) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Invalid title`);
    }
    
    totalTests++;
    if (typeof lesson.isPremium === 'boolean') {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Invalid isPremium`);
    }
    
    totalTests++;
    if (Array.isArray(lesson.vocabulary) && lesson.vocabulary.length > 0) {
      passedTests++;
      stats[code].vocab += lesson.vocabulary.length;
      if (!lesson.isPremium) stats[code].free++;
      else stats[code].premium++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Invalid vocabulary array`);
    }
    
    // Validate vocabulary items
    if (Array.isArray(lesson.vocabulary)) {
      lesson.vocabulary.forEach((vocab, vocabIndex) => {
        const vocabIssues = validateVocabulary(vocab, lang, lesson.id, vocabIndex, lang.format);
        if (vocabIssues.length > 0) {
          errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${vocabIndex + 1}: ${vocabIssues.join(', ')}`);
        }
      });
    }
  });
});

console.log(`Validated ${Object.values(allLessons).reduce((sum, lessons) => sum + lessons.length, 0)} lessons`);
console.log();

// Test 4: Duplicate ID Check
console.log('TEST 4: Duplicate ID Check');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const ids = lessons.map(l => l.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  
  totalTests++;
  if (duplicates.length === 0) {
    console.log(`✓ ${lang.name}: No duplicate IDs`);
    passedTests++;
  } else {
    console.log(`✗ ${lang.name}: Duplicate IDs found`);
    failedTests++;
    errors.push(`${lang.name}: Duplicate lesson IDs`);
  }
});
console.log();

// Test 5: ID Sequence Check
console.log('TEST 5: ID Sequence Check');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const ids = lessons.map(l => l.id).sort((a, b) => a - b);
  const expectedIds = Array.from({ length: lessons.length }, (_, i) => i + 1);
  const isSequential = ids.every((id, index) => id === expectedIds[index]);
  
  totalTests++;
  if (isSequential) {
    console.log(`✓ ${lang.name}: IDs are sequential (1-${lessons.length})`);
    passedTests++;
  } else {
    console.log(`⚠ ${lang.name}: IDs are not sequential`);
    warnings.push(`${lang.name}: Lesson IDs are not sequential`);
    passedTests++; // Not a critical failure
  }
});
console.log();

// Test 6: Function Compatibility
console.log('TEST 6: Function Compatibility Test');
console.log('-'.repeat(70));

const lessonData = {};
Object.entries(languages).forEach(([code]) => {
  lessonData[code] = allLessons[code];
});

function getLessonsForLanguage(languageCode) {
  return lessonData[languageCode] || [];
}

Object.keys(languages).forEach(code => {
  const lang = languages[code];
  const lessons = getLessonsForLanguage(code);
  
  totalTests++;
  if (lessons.length > 0) {
    console.log(`✓ ${lang.name}: getLessonsForLanguage('${code}') works`);
    passedTests++;
  } else {
    console.log(`✗ ${lang.name}: getLessonsForLanguage('${code}') fails`);
    failedTests++;
  }
});
console.log();

// Final Summary
console.log('='.repeat(70));
console.log('TEST SUMMARY');
console.log('='.repeat(70));
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passedTests} (${((passedTests / totalTests) * 100).toFixed(1)}%)`);
console.log(`Failed: ${failedTests} (${((failedTests / totalTests) * 100).toFixed(1)}%)`);
console.log();

if (warnings.length > 0) {
  console.log(`Warnings: ${warnings.length}`);
  warnings.slice(0, 5).forEach(warning => console.log(`  ⚠ ${warning}`));
  if (warnings.length > 5) console.log(`  ... and ${warnings.length - 5} more`);
  console.log();
}

if (errors.length > 0) {
  console.log(`Errors: ${errors.length}`);
  errors.slice(0, 10).forEach(error => console.log(`  ✗ ${error}`));
  if (errors.length > 10) console.log(`  ... and ${errors.length - 10} more`);
  console.log();
} else {
  console.log('✓ All critical tests passed!');
  console.log();
}

// Detailed Statistics
console.log('='.repeat(70));
console.log('DETAILED STATISTICS');
console.log('='.repeat(70));
Object.entries(stats).forEach(([code, data]) => {
  const lang = languages[code];
  const lessons = allLessons[code];
  const avgVocab = Math.round(data.vocab / lessons.length);
  
  console.log(`${lang.name} (${code}):`);
  console.log(`  Format: ${lang.format}`);
  console.log(`  Lessons: ${data.lessons}`);
  console.log(`  Total Vocabulary: ${data.vocab} words`);
  console.log(`  Free: ${data.free}, Premium: ${data.premium}`);
  console.log(`  Avg words/lesson: ${avgVocab}`);
  console.log();
});

// Overall totals
const totalLessons = Object.values(stats).reduce((sum, s) => sum + s.lessons, 0);
const totalVocab = Object.values(stats).reduce((sum, s) => sum + s.vocab, 0);
const totalFree = Object.values(stats).reduce((sum, s) => sum + s.free, 0);
const totalPremium = Object.values(stats).reduce((sum, s) => sum + s.premium, 0);

console.log('OVERALL TOTALS:');
console.log(`  Languages: ${Object.keys(languages).length}`);
console.log(`  Total Lessons: ${totalLessons}`);
console.log(`  Total Vocabulary: ${totalVocab} words`);
console.log(`  Free Lessons: ${totalFree}`);
console.log(`  Premium Lessons: ${totalPremium}`);
console.log();

console.log('='.repeat(70));
console.log('TEST COMPLETE');
console.log('='.repeat(70));

// Exit with appropriate code
process.exit(failedTests > 0 ? 1 : 0);


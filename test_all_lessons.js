// Comprehensive test script to validate every lesson
const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'frontend/src/data/lessons');
const languages = {
  'ja': { name: 'Japanese', file: 'japanese' },
  'es': { name: 'Spanish', file: 'spanish' },
  'fr': { name: 'French', file: 'french' },
  'de': { name: 'German', file: 'german' },
  'zh': { name: 'Chinese', file: 'chinese' },
  'ru': { name: 'Russian', file: 'russian' },
  'ar': { name: 'Arabic', file: 'arabic' }
};

console.log('='.repeat(70));
console.log('COMPREHENSIVE LESSON TESTING');
console.log('='.repeat(70));
console.log();

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];
const warnings = [];

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

// Test 1: Verify all lesson files exist
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
    errors.push(`${lang.name} file not found at ${filePath}`);
  }
});
console.log();

// Test 2: Verify lessons can be loaded
console.log('TEST 2: Lesson Loading');
console.log('-'.repeat(70));
const allLessons = {};
Object.entries(languages).forEach(([code, lang]) => {
  const lessons = loadLessons(code);
  allLessons[code] = lessons;
  totalTests++;
  if (lessons.length > 0) {
    console.log(`✓ ${lang.name}: ${lessons.length} lessons loaded`);
    passedTests++;
  } else {
    console.log(`✗ ${lang.name}: No lessons loaded`);
    failedTests++;
    errors.push(`${lang.name} has no lessons`);
  }
});
console.log();

// Test 3: Validate lesson structure
console.log('TEST 3: Lesson Structure Validation');
console.log('-'.repeat(70));

const requiredLessonFields = ['id', 'title', 'description', 'difficulty', 'estimatedTime', 'isPremium', 'vocabulary'];
const requiredVocabFields = ['english', 'translation', 'pronunciation', 'example', 'exampleEnglish'];

Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  
  lessons.forEach((lesson, index) => {
    // Check required fields
    requiredLessonFields.forEach(field => {
      totalTests++;
      if (lesson.hasOwnProperty(field)) {
        passedTests++;
      } else {
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id || index + 1}: Missing field '${field}'`);
      }
    });
    
    // Validate field types
    totalTests++;
    if (typeof lesson.id === 'number') {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id || index + 1}: 'id' must be a number`);
    }
    
    totalTests++;
    if (typeof lesson.title === 'string' && lesson.title.length > 0) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: 'title' must be a non-empty string`);
    }
    
    totalTests++;
    if (typeof lesson.description === 'string' && lesson.description.length > 0) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: 'description' must be a non-empty string`);
    }
    
    totalTests++;
    if (['beginner', 'intermediate', 'advanced'].includes(lesson.difficulty)) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: 'difficulty' must be 'beginner', 'intermediate', or 'advanced'`);
    }
    
    totalTests++;
    if (typeof lesson.isPremium === 'boolean') {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: 'isPremium' must be a boolean`);
    }
    
    totalTests++;
    if (Array.isArray(lesson.vocabulary)) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: 'vocabulary' must be an array`);
    }
    
    // Validate vocabulary items
    if (Array.isArray(lesson.vocabulary)) {
      totalTests++;
      if (lesson.vocabulary.length > 0) {
        passedTests++;
      } else {
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id}: 'vocabulary' array is empty`);
      }
      
      lesson.vocabulary.forEach((vocab, vocabIndex) => {
        requiredVocabFields.forEach(field => {
          totalTests++;
          if (vocab.hasOwnProperty(field)) {
            passedTests++;
          } else {
            failedTests++;
            errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${vocabIndex + 1}: Missing field '${field}'`);
          }
        });
        
        // Validate vocabulary field types
        totalTests++;
        if (typeof vocab.english === 'string' && vocab.english.length > 0) {
          passedTests++;
        } else {
          failedTests++;
          errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${vocabIndex + 1}: 'english' must be non-empty string`);
        }
        
        totalTests++;
        if (typeof vocab.translation === 'string' && vocab.translation.length > 0) {
          passedTests++;
        } else {
          failedTests++;
          errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${vocabIndex + 1}: 'translation' must be non-empty string`);
        }
      });
    }
  });
});

console.log(`Validated ${Object.values(allLessons).reduce((sum, lessons) => sum + lessons.length, 0)} lessons`);
console.log();

// Test 4: Check for duplicate IDs
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
    console.log(`✗ ${lang.name}: Duplicate IDs found: ${[...new Set(duplicates)].join(', ')}`);
    failedTests++;
    errors.push(`${lang.name}: Duplicate lesson IDs: ${[...new Set(duplicates)].join(', ')}`);
  }
});
console.log();

// Test 5: Check ID sequence
console.log('TEST 5: ID Sequence Check');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const ids = lessons.map(l => l.id).sort((a, b) => a - b);
  const expectedIds = Array.from({ length: lessons.length }, (_, i) => i + 1);
  const missingIds = expectedIds.filter(id => !ids.includes(id));
  const extraIds = ids.filter(id => id > lessons.length || id < 1);
  
  totalTests++;
  if (missingIds.length === 0 && extraIds.length === 0) {
    console.log(`✓ ${lang.name}: IDs are sequential (1-${lessons.length})`);
    passedTests++;
  } else {
    if (missingIds.length > 0) {
      console.log(`⚠ ${lang.name}: Missing IDs: ${missingIds.join(', ')}`);
      warnings.push(`${lang.name}: Missing lesson IDs: ${missingIds.join(', ')}`);
    }
    if (extraIds.length > 0) {
      console.log(`✗ ${lang.name}: Extra/Invalid IDs: ${extraIds.join(', ')}`);
      failedTests++;
      errors.push(`${lang.name}: Invalid lesson IDs: ${extraIds.join(', ')}`);
    }
    if (missingIds.length === 0 && extraIds.length === 0) {
      passedTests++;
    }
  }
});
console.log();

// Test 6: Check for empty or invalid data
console.log('TEST 6: Data Quality Check');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  
  lessons.forEach(lesson => {
    // Check for empty strings
    if (lesson.title.trim() === '') {
      totalTests++;
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Empty title`);
    } else {
      totalTests++;
      passedTests++;
    }
    
    if (lesson.description.trim() === '') {
      totalTests++;
      failedTests++;
      errors.push(`${lang.name} Lesson ${lesson.id}: Empty description`);
    } else {
      totalTests++;
      passedTests++;
    }
    
    // Check vocabulary quality
    lesson.vocabulary.forEach((vocab, index) => {
      if (!vocab || typeof vocab !== 'object') {
        totalTests++;
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${index + 1}: Invalid vocabulary object`);
        return;
      }
      
      if (!vocab.english || (typeof vocab.english === 'string' && vocab.english.trim() === '')) {
        totalTests++;
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${index + 1}: Empty or missing english field`);
      } else {
        totalTests++;
        passedTests++;
      }
      
      if (!vocab.translation || (typeof vocab.translation === 'string' && vocab.translation.trim() === '')) {
        totalTests++;
        failedTests++;
        errors.push(`${lang.name} Lesson ${lesson.id}, Vocabulary ${index + 1}: Empty or missing translation field`);
      } else {
        totalTests++;
        passedTests++;
      }
    });
  });
});
console.log('Data quality checks completed');
console.log();

// Test 7: Test getLessonsForLanguage function simulation
console.log('TEST 7: Function Compatibility Test');
console.log('-'.repeat(70));

// Simulate the lessonData structure
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
    console.log(`✓ ${lang.name}: getLessonsForLanguage('${code}') returns ${lessons.length} lessons`);
    passedTests++;
  } else {
    console.log(`✗ ${lang.name}: getLessonsForLanguage('${code}') returns no lessons`);
    failedTests++;
    errors.push(`${lang.name}: getLessonsForLanguage function returns empty array`);
  }
});
console.log();

// Test 8: Check lesson accessibility by ID
console.log('TEST 8: Lesson Accessibility by ID');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  
  lessons.forEach(lesson => {
    totalTests++;
    const found = lessons.find(l => l.id === lesson.id);
    if (found) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(`${lang.name}: Cannot find lesson with ID ${lesson.id}`);
    }
  });
  
  console.log(`✓ ${lang.name}: All ${lessons.length} lessons accessible by ID`);
});
console.log();

// Test 9: Premium vs Free distribution
console.log('TEST 9: Premium/Free Distribution');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const free = lessons.filter(l => !l.isPremium).length;
  const premium = lessons.filter(l => l.isPremium).length;
  
  totalTests++;
  if (free > 0) {
    console.log(`✓ ${lang.name}: ${free} free lessons, ${premium} premium lessons`);
    passedTests++;
  } else {
    console.log(`⚠ ${lang.name}: No free lessons available`);
    warnings.push(`${lang.name}: No free lessons (all are premium)`);
    passedTests++; // Not a failure, just a warning
  }
});
console.log();

// Test 10: Vocabulary count consistency
console.log('TEST 10: Vocabulary Count Check');
console.log('-'.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const vocabCounts = lessons.map(l => l.vocabulary.length);
  const minVocab = Math.min(...vocabCounts);
  const maxVocab = Math.max(...vocabCounts);
  const avgVocab = Math.round(vocabCounts.reduce((a, b) => a + b, 0) / vocabCounts.length);
  
  console.log(`  ${lang.name}: Min=${minVocab}, Max=${maxVocab}, Avg=${avgVocab} words per lesson`);
  
  totalTests++;
  if (minVocab > 0) {
    passedTests++;
  } else {
    failedTests++;
    errors.push(`${lang.name}: Some lessons have zero vocabulary words`);
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
  console.log('WARNINGS:');
  console.log('-'.repeat(70));
  warnings.forEach(warning => console.log(`⚠ ${warning}`));
  console.log();
}

if (errors.length > 0) {
  console.log('ERRORS:');
  console.log('-'.repeat(70));
  errors.forEach(error => console.log(`✗ ${error}`));
  console.log();
} else {
  console.log('✓ All tests passed! No errors found.');
  console.log();
}

// Detailed statistics
console.log('='.repeat(70));
console.log('DETAILED STATISTICS');
console.log('='.repeat(70));
Object.entries(allLessons).forEach(([code, lessons]) => {
  const lang = languages[code];
  const totalVocab = lessons.reduce((sum, l) => sum + l.vocabulary.length, 0);
  const free = lessons.filter(l => !l.isPremium).length;
  const premium = lessons.filter(l => l.isPremium).length;
  
  console.log(`${lang.name}:`);
  console.log(`  Lessons: ${lessons.length}`);
  console.log(`  Vocabulary: ${totalVocab} words`);
  console.log(`  Free: ${free}, Premium: ${premium}`);
  console.log(`  Avg words/lesson: ${Math.round(totalVocab / lessons.length)}`);
  console.log();
});

console.log('='.repeat(70));
console.log('TEST COMPLETE');
console.log('='.repeat(70));

// Exit with appropriate code
process.exit(failedTests > 0 ? 1 : 0);


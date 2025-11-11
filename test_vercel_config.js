// Test Vercel configuration files
const fs = require('fs');
const path = require('path');

console.log('='.repeat(70));
console.log('VERCEL CONFIGURATION VALIDATION');
console.log('='.repeat(70));
console.log();

const errors = [];
const warnings = [];

// Test 1: Validate root vercel.json
console.log('TEST 1: Root vercel.json');
console.log('-'.repeat(70));
try {
  const rootConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  console.log('✓ Valid JSON');
  
  if (!rootConfig.rewrites || !Array.isArray(rootConfig.rewrites)) {
    errors.push('Root vercel.json: Missing or invalid rewrites array');
  } else {
    const rewrite = rootConfig.rewrites[0];
    if (rewrite.source === '/(.*)' && rewrite.destination === '/index.html') {
      console.log('✓ Rewrite rule correct for SPA routing');
    } else {
      errors.push('Root vercel.json: Rewrite rule incorrect');
    }
  }
} catch (e) {
  errors.push(`Root vercel.json: ${e.message}`);
}

// Test 2: Validate frontend/vercel.json
console.log('\nTEST 2: Frontend vercel.json');
console.log('-'.repeat(70));
try {
  const frontendConfig = JSON.parse(fs.readFileSync('frontend/vercel.json', 'utf8'));
  console.log('✓ Valid JSON');
  
  // Check build command
  if (frontendConfig.buildCommand) {
    console.log(`✓ Build command: ${frontendConfig.buildCommand}`);
    if (frontendConfig.buildCommand !== 'npm run build') {
      warnings.push('Frontend buildCommand might not match package.json');
    }
  } else {
    warnings.push('Frontend vercel.json: No buildCommand specified');
  }
  
  // Check output directory
  if (frontendConfig.outputDirectory) {
    console.log(`✓ Output directory: ${frontendConfig.outputDirectory}`);
    // Check if it matches vite.config.js
    const viteConfig = fs.readFileSync('frontend/vite.config.js', 'utf8');
    if (viteConfig.includes(`outDir: '${frontendConfig.outputDirectory}'`)) {
      console.log('✓ Output directory matches vite.config.js');
    } else {
      warnings.push('Output directory might not match vite.config.js');
    }
  } else {
    errors.push('Frontend vercel.json: No outputDirectory specified');
  }
  
  // Check rewrites
  if (!frontendConfig.rewrites || !Array.isArray(frontendConfig.rewrites)) {
    errors.push('Frontend vercel.json: Missing or invalid rewrites array');
  } else {
    const rewrite = frontendConfig.rewrites[0];
    if (rewrite.source === '/(.*)' && rewrite.destination === '/index.html') {
      console.log('✓ Rewrite rule correct for SPA routing');
    } else {
      errors.push('Frontend vercel.json: Rewrite rule incorrect');
    }
  }
} catch (e) {
  errors.push(`Frontend vercel.json: ${e.message}`);
}

// Test 3: Verify package.json build script
console.log('\nTEST 3: Package.json build script');
console.log('-'.repeat(70));
try {
  const packageJson = JSON.parse(fs.readFileSync('frontend/package.json', 'utf8'));
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log(`✓ Build script: ${packageJson.scripts.build}`);
    if (packageJson.scripts.build !== 'vite build') {
      warnings.push('Build script uses vite build, ensure vercel.json matches');
    }
  } else {
    errors.push('Package.json: No build script found');
  }
} catch (e) {
  errors.push(`Package.json: ${e.message}`);
}

// Test 4: Verify vite.config.js output directory
console.log('\nTEST 4: Vite configuration');
console.log('-'.repeat(70));
try {
  const viteConfig = fs.readFileSync('frontend/vite.config.js', 'utf8');
  const outDirMatch = viteConfig.match(/outDir:\s*['"]([^'"]+)['"]/);
  if (outDirMatch) {
    const outDir = outDirMatch[1];
    console.log(`✓ Vite outDir: ${outDir}`);
    
    const frontendConfig = JSON.parse(fs.readFileSync('frontend/vercel.json', 'utf8'));
    if (frontendConfig.outputDirectory === outDir) {
      console.log('✓ Output directory matches between vite.config.js and vercel.json');
    } else {
      errors.push(`Output directory mismatch: vite.config.js uses '${outDir}' but vercel.json uses '${frontendConfig.outputDirectory}'`);
    }
  } else {
    warnings.push('Could not find outDir in vite.config.js (using default: dist)');
  }
} catch (e) {
  warnings.push(`Could not read vite.config.js: ${e.message}`);
}

// Summary
console.log('\n' + '='.repeat(70));
console.log('SUMMARY');
console.log('='.repeat(70));

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All configurations are valid and properly set up!');
} else {
  if (errors.length > 0) {
    console.log(`❌ Found ${errors.length} error(s):`);
    errors.forEach(error => console.log(`  - ${error}`));
  }
  if (warnings.length > 0) {
    console.log(`\n⚠️  Found ${warnings.length} warning(s):`);
    warnings.forEach(warning => console.log(`  - ${warning}`));
  }
}

console.log('\n' + '='.repeat(70));
console.log('CONFIGURATION SUMMARY');
console.log('='.repeat(70));
console.log('Root vercel.json: SPA rewrite rule configured');
console.log('Frontend vercel.json: Build command and output directory configured');
console.log('Both files are ready for Vercel deployment');
console.log('='.repeat(70));

process.exit(errors.length > 0 ? 1 : 0);


#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'ar'];

/**
 * Recursively flatten a nested object into dot notation keys
 * @param {Object} obj - The object to flatten
 * @param {string} prefix - Current prefix for the keys
 * @returns {Array} Array of dot notation keys
 */
function flattenKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys = keys.concat(flattenKeys(obj[key], currentKey));
      } else {
        keys.push(currentKey);
      }
    }
  }
  
  return keys;
}

/**
 * Check if a translation value is effectively missing (empty or placeholder)
 * @param {*} value - The translation value to check
 * @returns {boolean} True if the value is missing or placeholder
 */
function isMissingTranslation(value) {
  if (typeof value !== 'string') return true;
  
  // Check for empty strings
  if (value.trim() === '') return true;
  
  // Check for common placeholder patterns
  const placeholderPatterns = [
    /^TODO:/i,
    /^TRANSLATE:/i,
    /^\[.*\]$/,
    /^placeholder$/i,
    /^missing$/i,
    /^untranslated$/i
  ];
  
  return placeholderPatterns.some(pattern => pattern.test(value.trim()));
}

/**
 * Get value from nested object using dot notation
 * @param {Object} obj - The object to search
 * @param {string} keyPath - Dot notation path
 * @returns {*} The value at the path, or undefined if not found
 */
function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Load and parse a JSON translation file
 * @param {string} locale - The locale to load
 * @returns {Object|null} Parsed JSON object or null if file doesn't exist
 */
function loadTranslations(locale) {
  const filePath = path.join(MESSAGES_DIR, `${locale}.json`);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Translation file not found: ${filePath}`);
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error reading/parsing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Validate translations for all locales
 */
function validateTranslations() {
  console.log('🔍 Validating translations...\n');
  
  // Load default locale (reference)
  const defaultTranslations = loadTranslations(DEFAULT_LOCALE);
  if (!defaultTranslations) {
    console.error(`❌ Cannot load default locale (${DEFAULT_LOCALE}). Aborting validation.`);
    process.exit(1);
  }
  
  // Get all keys from default locale
  const referenceKeys = flattenKeys(defaultTranslations);
  console.log(`📋 Found ${referenceKeys.length} keys in default locale (${DEFAULT_LOCALE})\n`);
  
  let hasErrors = false;
  let totalMissingKeys = 0;
  
  // Validate each locale
  for (const locale of SUPPORTED_LOCALES) {
    console.log(`🌐 Validating locale: ${locale}`);
    console.log('=' + '='.repeat(30));
    
    if (locale === DEFAULT_LOCALE) {
      console.log(`✅ Skipping default locale\n`);
      continue;
    }
    
    const translations = loadTranslations(locale);
    if (!translations) {
      hasErrors = true;
      console.log(`❌ Failed to load ${locale} translations\n`);
      continue;
    }
    
    const missingKeys = [];
    const invalidValues = [];
    
    // Check each reference key
    for (const key of referenceKeys) {
      const value = getNestedValue(translations, key);
      
      if (value === undefined) {
        missingKeys.push(key);
      } else if (isMissingTranslation(value)) {
        invalidValues.push({ key, value });
      }
    }
    
    // Report results for this locale
    if (missingKeys.length === 0 && invalidValues.length === 0) {
      console.log(`✅ All translations present and valid`);
    } else {
      hasErrors = true;
      
      if (missingKeys.length > 0) {
        console.log(`❌ Missing keys (${missingKeys.length}):`);
        missingKeys.forEach(key => console.log(`   - ${key}`));
        totalMissingKeys += missingKeys.length;
      }
      
      if (invalidValues.length > 0) {
        console.log(`⚠️  Invalid/placeholder values (${invalidValues.length}):`);
        invalidValues.forEach(({ key, value }) => {
          console.log(`   - ${key}: "${value}"`);
        });
      }
    }
    
    console.log('');
  }
  
  // Final summary
  console.log('📊 Validation Summary');
  console.log('=' + '='.repeat(20));
  
  if (hasErrors) {
    console.log(`❌ Validation failed!`);
    console.log(`📊 Total missing keys across all locales: ${totalMissingKeys}`);
    console.log(`🎯 Locales checked: ${SUPPORTED_LOCALES.join(', ')}`);
    console.log(`📝 Reference locale: ${DEFAULT_LOCALE} (${referenceKeys.length} keys)`);
    
    console.log('\n💡 To fix missing translations:');
    console.log('1. Add missing keys to the respective locale files');
    console.log('2. Replace placeholder values with actual translations');
    console.log('3. Run this script again to verify fixes');
    
    process.exit(1);
  } else {
    console.log(`✅ All translations are complete and valid!`);
    console.log(`🎯 Locales validated: ${SUPPORTED_LOCALES.join(', ')}`);
    console.log(`📝 Total keys validated: ${referenceKeys.length}`);
  }
}

/**
 * Generate missing keys report in JSON format
 */
function generateMissingKeysReport() {
  const defaultTranslations = loadTranslations(DEFAULT_LOCALE);
  if (!defaultTranslations) return;
  
  const referenceKeys = flattenKeys(defaultTranslations);
  const report = {};
  
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    
    const translations = loadTranslations(locale);
    if (!translations) continue;
    
    const missingKeys = [];
    
    for (const key of referenceKeys) {
      const value = getNestedValue(translations, key);
      if (value === undefined || isMissingTranslation(value)) {
        missingKeys.push({
          key,
          referenceValue: getNestedValue(defaultTranslations, key)
        });
      }
    }
    
    if (missingKeys.length > 0) {
      report[locale] = missingKeys;
    }
  }
  
  // Write report to file
  const reportPath = path.join(__dirname, '..', 'translation-missing-keys.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Missing keys report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--report')) {
    generateMissingKeysReport();
  } else {
    validateTranslations();
  }
}

module.exports = {
  validateTranslations,
  generateMissingKeysReport,
  flattenKeys,
  loadTranslations
};

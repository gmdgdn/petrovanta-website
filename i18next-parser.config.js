module.exports = {
  contextSeparator: '_',
  // Key separator used in your translation keys
  keySeparator: '.',
  // Namespace separator used in your translation keys
  namespaceSeparator: ':',
  
  // Plural separator used in your translation keys
  pluralSeparator: '_',
  
  // An array of the locales in your applications
  locales: ['en', 'ar', 'he'],
  
  // Namespace separator used in your translation keys
  namespaceSeparator: false,
  
  // Key separator used in your translation keys
  keySeparator: '.',
  
  // The default locale, used when none is specified
  defaultLocale: 'en',
  
  // Default namespace used in your translation keys
  defaultNamespace: 'translation',
  
  // Default value to use for missing translations
  defaultValue: '',
  
  // An array of the function names to parse
  // Should contain the functions you use in your code for translation
  functions: [
    'useTranslations',
    'getTranslations',
    't',
    'i18next.t',
    'i18n.t'
  ],
  
  // An array of the trans components to parse
  // Should contain the trans components you use in your code
  trans: [
    'Trans',
    'Translation'
  ],
  
  // An array of the extensions to look for
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  
  // An array of globs that describe where to look for source files
  // Relative to the location of the configuration file
  input: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**',
    '!__tests__/**',
    '!*.test.{js,jsx,ts,tsx}',
    '!*.spec.{js,jsx,ts,tsx}'
  ],
  
  // Output directory path
  // Relative to the location of the configuration file
  output: 'messages/',
  
  // Output filename
  // Can contain $LOCALE and $NAMESPACE variables
  filename: '$LOCALE.json',
  
  // Sort the catalog
  sort: true,
  
  // Skip the catalog if it's already sorted
  skipDefaultValues: false,
  
  // Use the old behavior for plurals
  useKeysAsDefaultValue: false,
  
  // Keep removed keys in the catalog
  keepRemoved: false,
  
  // Create old catalogs in addition to the new ones
  createOldCatalogs: false,
  
  // Reset the default value with the one found in the file
  resetDefaultValueLocale: null,
  
  // Fail if duplicate keys are found
  failOnWarnings: false,
  
  // Fail if update is needed
  failOnUpdate: true,
  
  // Verbose output
  verbose: false,
  
  // Custom transform function for keys
  customValueTemplate: null,
  
  // Indentation of the catalog files
  indentation: 2
};

module.exports = {
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: true,
  svelteBracketNewLine: false,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 160,
      },
    },
  ],
};
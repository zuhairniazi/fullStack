import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic-js': stylisticJs
    },
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic-js/no-trailing-spaces': ['error', { 'skipBlankLines': true }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic-js/function-paren-newline': ['error', { 'minItems': 4 }],
      'max-len': ['warn',
        {
          'code': 120,
          'ignoreComments': true,
          'ignoreTrailingComments': true,
          'ignoreTemplateLiterals': true,
          'ignoreUrls': true
        }]
    }
  },
  {
    languageOptions: {
      globals: globals.browser,
      parser: parserTs
    }
  },
]
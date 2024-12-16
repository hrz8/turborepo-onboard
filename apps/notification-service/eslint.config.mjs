import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      semi: 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed'],
      'semi-spacing': ['error', { before: false, after: false }],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'eol-last': 'error',
      eqeqeq: ['warn', 'smart'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true, VariableDeclarator: true, Property: true } }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'array-element-newline': ['error', 'consistent'],
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }] ,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
    },
  },
];

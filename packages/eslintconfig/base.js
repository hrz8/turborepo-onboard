import tseslint from 'typescript-eslint';
import jseslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export const baseConfig = tseslint.config(
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: ['dist/**'],
  },
  jseslint.configs.recommended,
  prettier,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      semi: 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed'],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: false,
        },
      ],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'eol-last': 'error',
      eqeqeq: ['warn', 'smart'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multi-spaces': [
        'error',
        {
          exceptions: {
            ImportDeclaration: true,
            VariableDeclarator: true,
            Property: true,
          },
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'array-element-newline': ['error', 'consistent'],
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'prettier/prettier': [
        'error',
        {
          breaketSpacing: true,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          tabWidth: 2,
          userTabse: false,
          semi: true,
          printWidth: 100,
        },
      ],
      '@typescript-eslint/interface-name-prefix': 'off',
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
);

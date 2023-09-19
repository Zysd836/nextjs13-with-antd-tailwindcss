const path = require('path');

const prettierOptions = require(path.resolve(__dirname, '.prettierrc.js'));
console.log("🚀 ~ file: .eslintrc.js:4 ~ prettierOptions:", prettierOptions)
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['*.js', '*.spec.ts', '*.spec.tsx'],
  extends: ['plugin:react-hooks/recommended', 'next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'tailwindcss', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        '@next/next/no-img-element': 'off',
        'prettier/prettier': ['warn', {
          ...prettierOptions,
          "endOfLine": "auto"
        }],
      },
    },
  ],
};

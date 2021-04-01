module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:testing-library/react',
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};

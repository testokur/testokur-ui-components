module.exports = {
    "root": true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'plugin:testing-library/recommended',
        'plugin:jest-dom/recommended'
    ],
    plugins: ['prettier', 'react', 'jest', 'testing-library', 'jest-dom'],
    "rules": {
        "prettier/prettier": ["error"]
    },
};
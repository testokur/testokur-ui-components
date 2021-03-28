module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        'prettier',
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ],
    plugins: ['react', 'jest',"testing-library", "jest-dom"],
    "rules": {
        "testing-library/no-render-in-setup": "error",
        "testing-library/no-wait-for-empty-callback": "error",
        "testing-library/prefer-explicit-assert": "error",
        "testing-library/prefer-presence-queries": "error",
        "testing-library/prefer-screen-queries": "error",
        "testing-library/prefer-wait-for": "error"
      }
};
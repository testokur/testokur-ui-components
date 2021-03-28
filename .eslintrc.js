module.exports = {
    "root": true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:cypress/recommended',
        "plugin:flowtype/recommended",
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        "plugin:jsx-a11y/recommended",
        'plugin:prettier/recommended',
        "prettier/react",
        "plugin:react-hooks/recommended",
        'plugin:testing-library/react'
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
};
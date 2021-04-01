'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: { 'value-keyword-case': ['lower', { ignoreKeywords: ['BlinkMacSystemFont'] }] },
};

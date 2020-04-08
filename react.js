'use strict';

module.exports = {
  extends: ['prettier/react', './base.js'],
  env: { browser: true },
  parser: 'babel-eslint',
  settings: { 'import/ignore': ['src/types/index.js'] },
  rules: Object.assign({
    '-------- ↓↓↓ DISABLED ↓↓↓ ---------------------------------': 0,
    'jsx-a11y/alt-text': 0,
    'react/prop-types': [0],
    'jsx-a11y/anchor-is-valid': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    '-------- ↓↓↓ WARNING ↓↓↓ ---------------------------------': 0,
    'react/button-has-type': 1,
    'react/jsx-boolean-value': 1,
    'react/no-array-index-key': 1,
    'react/require-default-props': 1,
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    '-------- ↓↓↓ ERROR ↓↓↓ ---------------------------------': 0,
    'react/no-access-state-in-setstate': 2
  })
};

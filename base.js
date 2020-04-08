'use strict';

module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:prettier/recommended'],
  settings: { 'import/ignore': ['src/types/index.js'] },
  rules: Object.assign({
    '-------- ↓↓↓ DISABLED ↓↓↓ ---------------------------------': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,

    '-------- ↓↓↓ WARNING ↓↓↓ ---------------------------------': 0,
    eqeqeq: 1,
    'no-shadow': 1,
    'no-plusplus': 1,
    'import/no-cycle': 1,
    'no-return-assign': 1,
    'import/no-extraneous-dependencies': 1,

    '-------- ↓↓↓ ERROR ↓↓↓ ---------------------------------': 0,
    camelcase: 0,
    'no-unused-vars': 2
  })
};

'use strict';

module.exports = {
  extends: ['./base.js'],
  env: { node: true },
  settings: { 'import/ignore': ['src/types/index.js'] },
  rules: {
    '-------- ↓↓↓ DISABLED ↓↓↓ ---------------------------------': 0,

    '-------- ↓↓↓ WARNING ↓↓↓ ---------------------------------': 0,

    '-------- ↓↓↓ ERROR ↓↓↓ ---------------------------------': 0
  }
};

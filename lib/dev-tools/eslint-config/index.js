"use strict";

module.exports = {
  extends: ['eslint-config-airbnb', './eslint-rules.js'].map(require.resolve),
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['promise', 'html']
};
module.exports = {
  root: true,
  extends: [
    './src/dev-tools/eslint-config/index',
  ],
  rules: {
    "no-console": "off"
  },
  overrides: [
    {
      files: ['**/src/test/**/*.js'],
      rules: {
        'import/no-default-export': 'off',
      }
    }
  ]
};

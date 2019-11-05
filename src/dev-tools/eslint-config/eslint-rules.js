module.exports = {
  rules: {
    // ========================== hesitating rules =============================
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',

    // ========================== style rules =============================
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'one-var': 'off', // off to allow mutiple var delcaration statements
    'react/jsx-filename-extension': 'off', // off to allow jsx in .js
    'vars-on-top': 'off', // off to allow define vars in the middle of the body

    // ========================== syntax rules =============================
    'guard-for-in': 'off',
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-alert': 'error', // not allow debugger even during development
    'no-bitwise': 'off', // off to allow binary ops
    'no-console': 'error', // not allow console even during development
    'no-continue': 'off', // off to allow continue
    'no-debugger': 'error', // not allow debugger even during development
    'no-else-return': 'off', // off to allow `else return;`
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-mixed-operators': 'off', // off to allow a + b / c
    'no-nested-ternary': 'off', // off to allow multiple conditional statement like a? b: c? d: e
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // allow ++ in for, but error in otherwhere
    'no-prototype-builtins': 'off', // off to allow `obj.hasOwnProperty(prop)`
    'no-restricted-syntax': ['error',
      { selector: 'ForInStatement', message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.' },
      // { selector: 'ForOfStatement', message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.' },
      { selector: 'LabeledStatement', message: 'Labels are a form ofGOTO; using them makes code confusing and hard to maintain and understand.' },
      { selector: 'WithStatement', message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.' }], // not allow with()/label:
    'no-shadow': ['error', {
      builtinGlobals: true,
      hoist: 'functions',
      allow: ['err'],
    }],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }], // error to call instance._prop, but allow this._prop
    'no-unused-expressions': ['error', { allowShortCircuit: true }], // allow fn && fn();
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
    }],
    'no-useless-call': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/param-names': 'off',
    'react/jsx-space-before-closing': 'off', // off for deprecated by react/jsx-tag-spacing
    'react/prefer-es6-class': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      // 'newlines-between': 'never',
    }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'implicit-arrow-linebreak': 'off',
  },
  overrides: [
    {
      files: ['**/api/**/*.js'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
  ],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
    'import',
  ],
  rules: {
    'one-var': ['error', 'never'],
    'semi': ['error', 'always'],
    'no-const-assign': 'error',
    'no-plusplus': 'error',
    'quotes': ['error', 'single'],
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'no-eval': 'error',
    'no-new-object': 'error',
    'quote-props': ['error', 'as-needed'],
    'array-callback-return': 'error',
    'prefer-rest-params': 'error',
    'function-paren-newline': ['error', 'multiline'],
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-useless-constructor': 'error',
    'object-shorthand': 'error',
    'prefer-destructuring': 'error',
    'eqeqeq': ['error', 'always'],
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'indent': ['error', 2],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', {
      'overrides': {
        'if': { 'before': true, 'after': true },
        'for': { 'before': true, 'after': true },
        'while': { 'before': true, 'after': true },
      }
    }],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 2
    }],
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1 }],
    'padded-blocks': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
    }],
    'nonblock-statement-body-position': ['error', 'beside'],
    'camelcase': 0,
    'brace-style': 'error',
    'no-else-return': ['error', {
      'allowElseIf': false,
    }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'new-cap': ['error', {
      'capIsNew': true
    }],
    'generator-star-spacing': 'error',
    'spaced-comment': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //
    'max-len': ["error", { "code": 1024 }],
    'import/no-unresolved': 0,
    "import/extensions": 0,
    'no-unused-vars': 0,
    'vue/component-name-in-template-casing': 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1024,
      "multiline": {
        "max": 1024,
        "allowFirstLine": true
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": 0,
  },
  globals: {
    ga: true,
    google: true,
    sketchMap: true,
    googlemap: true,
    Crane: true,
    idbfs: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
        bootstrap: 'readonly', // глобальная переменная
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'semi': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'no-multiple-empty-lines': ['error', { max: 0, maxEOF: 0 }],
      'no-underscore-dangle': [
        'error',
        { allow: ['__filename', '__dirname'] },
      ],
      'import/extensions': ['error', { js: 'always' }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
      'no-trailing-spaces': ['error'],
      'eol-last': ['error', 'always'],
    },
  },
  {
    files: ['postcss.config.cjs'],
    rules: {
      'global-require': 'off',
    },
  },
]

import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

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
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'arrow-parens': ['error', 'as-needed'],
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'no-console': 'off',
      'import/extensions': ['error', { js: 'always' }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['postcss.config.cjs'],
    rules: {
      'global-require': 'off',
    },
  },
];

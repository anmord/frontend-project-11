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
        bootstrap: 'readonly',
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
      'arrow-parens': 'off',
      'brace-style': 'off',
      'no-trailing-spaces': 'off',
      '@stylistic/no-multi-spaces': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      'no-multiple-empty-lines': 'off',

      // Логика кода
      'semi': ['error', 'never'],
      'no-underscore-dangle': [
        'error',
        { allow: ['__filename', '__dirname'] },
      ],
      'import/extensions': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
      'eol-last': 'off',
    },
  },
  {
    files: ['postcss.config.cjs'],
    rules: {
      'global-require': 'off',
    },
  },
]

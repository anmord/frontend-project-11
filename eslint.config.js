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
      'semi': ['error', 'never'],        // точки с запятой не ставим
      'arrow-parens': 'off',             // не ругаемся на скобки у стрелочных функций
      'brace-style': 'off',              // не ругаемся на стиль фигурных скобок
      'no-trailing-spaces': 'off',       // не ругаемся на пробелы в конце строки
      'no-multiple-empty-lines': ['error', { max: 0, maxEOF: 0 }],
      'no-underscore-dangle': [
        'error',
        { allow: ['__filename', '__dirname'] },
      ],
      'import/extensions': 'off',        // не ругаемся на .js в импортах
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
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

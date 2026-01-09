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
      // Стиль отключаем, чтобы CI не ругался
      'arrow-parens': 'off',               // скобки у стрелочных функций
      'brace-style': 'off',                // стиль фигурных скобок
      'no-trailing-spaces': 'off',         // пробелы в конце строк
      '@stylistic/no-multi-spaces': 'off', // выравнивание через пробелы
      'no-multiple-empty-lines': 'off',    // пустые строки

      // Логика кода
      'semi': ['error', 'never'],          // точки с запятой не ставим
      'no-underscore-dangle': [
        'error',
        { allow: ['__filename', '__dirname'] },
      ],
      'import/extensions': 'off',          // не ругаемся на .js в импортах
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

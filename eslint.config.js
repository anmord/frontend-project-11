import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },

  // Базовый ESLint + языковые настройки
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
  },

  // Airbnb Base как Flat Config
  airbnbBase,

  // Дополнительные правила проекта
  {
    rules: {
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },

  // Override для postcss.config.cjs
  {
    files: ['postcss.config.cjs'],
    rules: {
      'global-require': 'off',
    },
  },
];


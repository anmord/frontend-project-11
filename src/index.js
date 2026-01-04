// @ts-check

import init from './init.js';
import initI18n from './i18n.js';

initI18n().then(() => {
  init();
});

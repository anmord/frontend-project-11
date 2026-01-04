// @ts-check

import app from './app.js';

export default () => {
  const state = {
    feeds: [],
    form: {
      error: null,
      status: 'idle',
    },
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
  };

  app(state, elements);
};

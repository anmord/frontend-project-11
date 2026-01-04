import { buildUrlSchema } from './validation.js';
import { renderError } from './view.js';

export default (state, elements) => {
  const { form, input, feedback } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value.trim();
    const existingUrls = state.feeds.map(feed => feed.url);

    renderError(input, feedback, null);

    buildUrlSchema(existingUrls)
      .validate(url)
      .then(() => {
        state.feeds.push({ url });
        state.form.error = null;

        input.value = '';
        input.focus();
      })
      .catch((err) => {
        state.form.error = err.message;
        renderError(input, feedback, err.message);
      });
  });
};

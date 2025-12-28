import { buildUrlSchema } from './validation.js';
import { showValidation, clearValidation } from './view.js';

export default (state, elements) => {
  const { form, input, feedback } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value.trim();
    const existingUrls = state.feeds.map(feed => feed.url);

    clearValidation(input, feedback);

    buildUrlSchema(existingUrls)
      .validate(url)
      .then(() => {
        state.feeds.push({ url });

        input.value = '';
        input.focus();
      })
      .catch((err) => {
        showValidation(input, feedback, err.message);
      });
  });
};

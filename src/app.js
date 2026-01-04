import { buildUrlSchema } from './validation.js';
import { renderError, renderFeeds, renderPosts } from './view.js';
import { loadRSS } from './rssLoader.js';
import { parseRSS } from './parser.js';

export default (state, elements) => {
  const { form, input, feedback } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value.trim();
    const existingUrls = state.feeds.map((feed) => feed.url);

    renderError(input, feedback, null);
    state.form.status = 'loading';

    buildUrlSchema(existingUrls)
    .validate(url)
    .then(() => loadRSS(url))
    .then(parseRSS)
    .then(({ feed, posts }) => {
      state.feeds.push({ ...feed, url });
      state.posts.push(...posts);

      renderFeeds(state.feeds);
      renderPosts(state.posts);

      state.form.status = 'success';
      input.value = '';
      input.focus();
    })
    .catch((err) => {
      state.form.status = 'error';

      const errorCode =
        err.message === 'errors.invalidRss'
          ? 'errors.invalidRss'
          : 'errors.network';

      renderError(input, feedback, errorCode);
    });
  });
};

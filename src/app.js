import { buildUrlSchema } from './validation.js';
import { renderError, renderFeeds, renderPosts } from './view.js';
import { loadRSS } from './rssLoader.js';
import { parseRSS } from './parser.js';
import { updateFeeds } from './updater.js';

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
      const feedWithUrl = { ...feed, url };

      state.feeds.push(feedWithUrl);
      state.posts.push(...posts);

      renderFeeds(state.feeds);
      renderPosts(state.posts, state.readPosts);

      const postsContainer = document.querySelector('.posts');

      postsContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const postId = button.dataset.id;
        const post = state.posts.find((p) => p.id === postId);

        if (!post) return;

        state.readPosts.add(post.id);

        renderPosts(state.posts, state.readPosts);

        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
        const fullArticle = document.querySelector('.full-article');

        modalTitle.textContent = post.title;
        modalBody.textContent = post.description;
        fullArticle.href = post.link;

        const modalEl = document.getElementById('modal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      });

      if (state.feeds.length === 1) {
        updateFeeds(state); 
      }

      state.form.status = 'success';
      input.value = '';
      input.focus();
    })
    .catch((err) => {
      let errorCode;

      if (err.name === 'ValidationError') {
        errorCode = err.message;
      } else if (err.message === 'errors.invalidRss') {
        errorCode = 'errors.invalidRss';
      } else {
        errorCode = 'errors.network';
      }

      renderError(input, feedback, errorCode);
    });
  });
};

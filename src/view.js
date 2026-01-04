import i18next from 'i18next';

export const renderError = (input, feedback, errorCode) => {
  if (!errorCode) {
    input.classList.remove('is-invalid');
    feedback.textContent = '';
    return;
  }

  input.classList.add('is-invalid');
  feedback.textContent = i18next.t(errorCode);
};

export const renderFeeds = (feeds) => {
  const container = document.querySelector('.feeds');
  container.innerHTML = '';

  if (feeds.length === 0) return;

  const card = document.createElement('div');
  card.classList.add('card', 'border-0');

  const body = document.createElement('div');
  body.classList.add('card-body');

  const title = document.createElement('h2');
  title.textContent = 'Фиды';

  const list = document.createElement('ul');
  list.classList.add('list-group', 'border-0', 'rounded-0');

  feeds.forEach(({ title, description }) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0');

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    li.append(h3, p);
    list.append(li);
  });

  body.append(title);
  card.append(body, list);
  container.append(card);
};

export const renderPosts = (posts, readPosts) => {
  const container = document.querySelector('.posts');
  container.innerHTML = '';

  if (posts.length === 0) return;

  const card = document.createElement('div');
  card.classList.add('card', 'border-0');

  const body = document.createElement('div');
  body.classList.add('card-body');

  const title = document.createElement('h2');
  title.textContent = 'Посты';

  const list = document.createElement('ul');
  list.classList.add('list-group', 'border-0', 'rounded-0');

  posts.forEach((post) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0');

    const a = document.createElement('a');
    a.href = post.link;
    a.textContent = post.title;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    a.classList.add(readPosts.has(post.id) ? 'fw-normal' : 'fw-bold');

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    button.textContent = 'Предпросмотр';
    button.dataset.id = post.id;

    li.append(a, button);
    list.append(li);
  });

  body.append(title);
  card.append(body, list);
  container.append(card);
};

// @ts-check
import initI18n from './i18n.js'
import app from './app.js'
export default () => {
  initI18n().then(() => {
    const state = {
      feeds: [],
      posts: [],
      readPosts: new Set(),
      form: {
        error: null,
        status: 'idle',
      },
    }

    const elements = {
      form: document.querySelector('.rss-form'),
      input: document.querySelector('#url-input'),
      feedback: document.querySelector('.feedback'),
    }

    app(state, elements)
  })
}

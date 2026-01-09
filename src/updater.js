import { loadRSS } from './rssLoader.js'
import { parseRSS } from './parser.js'
import { renderPosts } from './view.js'
const TIMEOUT = 5000
export const updateFeeds = (state) => {
  const requests = state.feeds.map((feed) =>
    loadRSS(feed.url)
      .then(parseRSS)
      .then(({ posts }) => {
        const existingLinks = state.posts.map((post) => post.link)
        const newPosts = posts.filter(
          (post) => !existingLinks.includes(post.link),
        )
        if (newPosts.length > 0) {
          state.posts.unshift(...newPosts)
          renderPosts(state.posts, state.readPosts)
        }
      })
      .catch(() => {
      }),
  )
  Promise.all(requests)
    .finally(() => {
      setTimeout(() => updateFeeds(state), TIMEOUT)
    })
}

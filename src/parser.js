export const parseRSS = (xml) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'application/xml')
  if (doc.querySelector('parsererror')) {
    throw new Error('errors.invalidRss')
  }
  const channel = doc.querySelector('channel')
  const feed = {
    id: crypto.randomUUID(),
    title: channel.querySelector('title')?.textContent,
    description: channel.querySelector('description')?.textContent,
  }
  const posts = [...doc.querySelectorAll('item')].map(item => ({
    id: crypto.randomUUID(),
    feedId: feed.id,
    title: item.querySelector('title')?.textContent,
    link: item.querySelector('link')?.textContent,
    description: item.querySelector('description')?.textContent,
  }))
  return { feed, posts }
}

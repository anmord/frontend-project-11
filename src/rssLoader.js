import axios from 'axios'
export const loadRSS = (url) => {
  const proxyUrl = 'https://allorigins.hexlet.app/get'
  return axios.get(proxyUrl, {
    params: {
      url,
      disableCache: true,
    },
    timeout: 10000,
  })
    .then(response => response.data.contents)
}

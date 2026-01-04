import axios from 'axios';

export const loadRSS = (url) => {
  const proxyUrl = 'https://lorem-rss.hexlet.app/feed';

  return axios.get(proxyUrl, {
    params: {
      url,
      disableCache: true,
    },
    timeout: 10000,
  })
    .then((response) => response.data.contents);
};

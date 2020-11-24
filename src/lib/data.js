const URL = './videos.json';

async function fetchData() {
  return fetch(URL, { mode: 'no-cors' })
    .then((fetchResults) => {
      if (!fetchResults.ok) {
        throw new Error('Non 200 status');
      }

      return fetchResults.json();
    })
    .then((data) => data);
}

export { fetchData as default };

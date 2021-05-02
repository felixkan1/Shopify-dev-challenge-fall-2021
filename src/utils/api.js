//for testing purposes (delete this when you upload)
const fetch = require("node-fetch")

const MOVIES_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=4a184c3c&r=json&type=movie&s='

function getMoviesUrl(movie) {
  return `${MOVIES_URL}${movie}`;
}

export const getMovies = async (searchTerm) => {
  try {
    const response = await fetch(getMoviesUrl(searchTerm));
    const json = await response.json();
    return json;
  }catch(error) {
    console.warn('Unable to fetch', error);
  }

}


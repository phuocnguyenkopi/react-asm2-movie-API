const API_KEY = "59636787cde39be6d2314519a6651026";
const URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export const fetchApi = (url) => {
  return fetch(`https://api.themoviedb.org/3${url}`).then((data) =>
    data.json()
  );
};
export const fetchApiTraile = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  ).then((data) => data.json());
};

const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=9648`,
  },
  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=878`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=37`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=16`,
  },
  fetchTVMovies: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`,
  },
};

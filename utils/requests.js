const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

export const getTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

export const getAllMovies = async () => {
  const res = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const res = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const searchMovies = async (queryStr) => {
  const res = await fetch(
    `${BASE_URL}search/movie/${queryStr}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

export const getMovieCredits = async (movieId) => {
  const res = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getMovieVideos = async (movieId) => {
  const res = await fetch(
    `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

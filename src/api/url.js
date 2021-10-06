import axios from "axios";

const URL_API = "http://cbcc-2405-4802-b17e-fa30-6cd0-d6f6-921a-b731.ngrok.io/api";
export const getAllMovie = async () => {
  const resp = await axios.get(`${URL_API}/get/all_movie`);
  return resp.data;
};
export const getMovieDetail = async (id) => {
  const resp = await axios.get(`${URL_API}/get/detail_movie/${id}`);
  return resp.data;
};
export const searchMovie = async (name) => {
  const resp = await axios.get(`${URL_API}/get/search_name/${name}`);
  return resp.data;
};
export const getGenreId = async (id) => {
  const resp = await axios.get(`${URL_API}/get/list_movie_genres/${id}`);
  return resp.data;
};
export const getAllGenres = async () => {
  const resp = await axios.get(`${URL_API}/get/all_genres`);
  return resp.data;
};
export const getNewMovie = async () => {
  const resp = await axios.get(`${URL_API}/get/last_time_movie`);
  return resp.data;
};
export const getPopularMovies = async () => {
  const resp = await axios.get(`${URL_API}/get/highlights`);
  return resp.data;
};

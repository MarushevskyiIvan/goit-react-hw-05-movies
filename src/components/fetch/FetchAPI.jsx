import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const KEY = 'b71ac7ae2bc34144ca056afa7f7b4bb5';

export const FetchHomeAPI = async () => {
  const { data } = await axios.get(
    `${BASE_URL}3/trending/movie/day?api_key=${KEY}`
  );

  return data;
};

export const FetchMovieId = async id => {
  const { data } = await axios.get(`${BASE_URL}3/movie/${id}?api_key=${KEY}`);

  return data;
};

export const FetchCast = async id => {
  const { data } = await axios.get(
    ` ${BASE_URL}3/movie/${id}/credits?api_key=${KEY}`
  );

  return data;
};

export const FetchReviews = async id => {
  const { data } = await axios.get(
    ` ${BASE_URL}3/movie/${id}/reviews?api_key=${KEY}&page=1`
  );

  return data;
};

export const FetchSearch = async query => {
  const { data } = await axios.get(
    ` ${BASE_URL}3/search/movie?api_key=${KEY}&query=${query}&include_adult=false&page=1`
  );

  return data;
};

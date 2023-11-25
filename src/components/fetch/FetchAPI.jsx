import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
// const KEY = 'b71ac7ae2bc34144ca056afa7f7b4bb5';

const options = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzFhYzdhZTJiYzM0MTQ0Y2EwNTZhZmE3ZjdiNGJiNSIsInN1YiI6IjY1NjIwZTA0MDI4ZjE0MDEzODIyOWI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZLlc5iUOEayZQuZD3yyotADe3bndhkO5CUE7NRpNqM',
  },
};

export const FetchAPI = async () => {
  const response = await axios.get(`${BASE_URL}3/trending/all/day`, options);

  return response.data;
};

export const FetchMovieId = async id => {
  const response = await axios.get(
    `${BASE_URL}3/movie/${id}?language=en-US`,
    options
  );

  return response.data;
};

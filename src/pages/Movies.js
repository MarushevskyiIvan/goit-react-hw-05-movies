import { useEffect, useState } from 'react';
import { FetchSearch } from 'fetch/FetchAPI.jsx';
import { useSearchParams } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from 'components/searchBar/SearchBar';
import { Loader } from '../components/loader/Loader.jsx';
import { MoviesList } from 'components/moviesList/MoviesList.jsx';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    async function fetchCast() {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        const { results } = await FetchSearch(query);

        setMovies(results);
      } catch (error) {
        toast.error('sorry movies not found');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      <SearchBar />
      <MoviesList movies={movies} />

      <Toaster />
    </>
  );
};

export default MoviesPage;

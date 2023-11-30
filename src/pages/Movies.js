import { useEffect, useState } from 'react';
import { FetchSearch } from 'components/fetch/FetchAPI';
import { useSearchParams } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from 'components/searchBar/SearchBar';
import { Loader } from '../components/loader/Loader.jsx';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
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
      <SearchBar movies={movies} />
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default MoviesPage;

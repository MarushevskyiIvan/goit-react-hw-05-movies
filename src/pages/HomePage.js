import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FetchHomeAPI } from 'fetch/FetchAPI.jsx';
import { Loader } from '../components/loader/Loader.jsx';
import { MoviesList } from 'components/moviesList/MoviesList.jsx';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAPIMovies() {
      try {
        setIsLoading(true);

        const { results } = await FetchHomeAPI();

        setMovies(results);
      } catch (error) {
        toast.error('sorry movies not found');
      } finally {
        setIsLoading(false);
      }
    }
    fetchAPIMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
      <Toaster />
    </>
  );
};

export default HomePage;

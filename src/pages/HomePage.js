import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FetchHomeAPI } from 'components/fetch/FetchAPI';
import { Home } from 'components/home/Home';
import { Loader } from '../components/loader/Loader.jsx';

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
      {movies && <Home movies={movies} />}
      <Toaster />
    </>
  );
};

export default HomePage;

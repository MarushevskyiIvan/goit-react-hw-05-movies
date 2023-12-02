import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FetchMovieId } from '../fetch/FetchAPI.jsx';
import { Loader } from '../components/loader/Loader.jsx';
import { MovieDetailsGallery } from 'components/movieDetailsGallery/MovieDetailsGallery.jsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAPIMovies() {
      try {
        setIsLoading(true);

        const fetchMovie = await FetchMovieId(movieId);
        setMovie(fetchMovie);
      } catch (error) {
        toast.error('sorry movies not found');
      } finally {
        setIsLoading(false);
      }
    }
    fetchAPIMovies();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      {movie && <MovieDetailsGallery movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

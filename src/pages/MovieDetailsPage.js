import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FetchMovieId } from '../components/fetch/FetchAPI.jsx';
import { Loader } from '../components/loader/Loader.jsx';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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

  const { id, overview, poster_path, title, vote_average, genres } = movie;

  return (
    <div>
      {isLoading && <Loader />}
      {movie && (
        <div key={id}>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/w342/${poster_path}`
                : defaultImg
            }
            alt={title}
          />
          <h3>{title}</h3>
          <p>{Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres &&
            genres.map(({ id, name }) => <span key={id}>{name + ' '}</span>)}
        </div>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MovieDetails;

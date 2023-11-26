import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
const { FetchMovieId } = require('components/fetch/FetchAPI');
const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchAPIMovies() {
      try {
        const fetchMovie = await FetchMovieId(params.movieId);

        setMovie(fetchMovie);
      } catch (error) {
      } finally {
      }
    }
    fetchAPIMovies();
  }, [params.movieId]);

  const { id, overview, poster_path, title, vote_average, genres } = movie;

  return (
    <div>
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
          <p>{vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && genres.map(({ name, id }) => <span key={id}>{name}</span>)}
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
    </div>
  );
};

export default MovieDetails;

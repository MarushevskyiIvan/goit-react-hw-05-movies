import { Link, useLocation } from 'react-router-dom';
import { MovieUl } from './MoviesListStyled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    movies && (
      <MovieUl>
        {movies.map(({ title, poster_path, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w185/${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </MovieUl>
    )
  );
};

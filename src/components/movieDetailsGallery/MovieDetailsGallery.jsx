import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342';

export const MovieDetailsGallery = ({ movie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { id, overview, poster_path, title, vote_average, genres } = movie;

  return (
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
  );
};

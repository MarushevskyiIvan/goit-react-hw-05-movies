import { FetchCast } from 'components/fetch/FetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const params = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await FetchCast(params.movieId);
        setCasts(cast.cast);
      } catch (error) {}
    }
    fetchCast();
  }, [params.movieId]);

  return (
    <ul>
      {casts &&
        casts.map(({ profile_path, original_name, id, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

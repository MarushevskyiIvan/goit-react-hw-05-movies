import { FetchCast } from 'fetch/FetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const { cast } = await FetchCast(movieId);
        setCasts(cast);
      } catch (error) {
        toast.error('sorry movies not found');
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    casts && (
      <ul>
        {casts.map(({ profile_path, original_name, id, character }) => {
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
    )
  );
};

export default Cast;

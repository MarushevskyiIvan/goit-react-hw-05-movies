import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { FetchMovieId } = require('components/fetch/FetchAPI');

const MovieDetails = () => {
  const params = useParams();

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
  const { id, overview, backdrop_path, title, vote_average, genres } = movie;
  // const name = genres.map(({ name }) => name);
  console.log(genres);
  return (
    <div>
      {movie && (
        <div key={id}>
          <button>Go back</button>
          <img src={backdrop_path} alt={title} />
          <h3>{title}</h3>
          <p>{vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* {genres.map(({ name, id }) => (
            <span key={id}>{name}</span>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

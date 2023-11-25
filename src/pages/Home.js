import { useEffect, useState } from 'react';
import { FetchAPI } from 'components/fetch/FetchAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchAPIMovies() {
      try {
        const fetchFilms = await FetchAPI();

        setMovies(fetchFilms.results);
      } catch (error) {
      } finally {
      }
    }
    fetchAPIMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

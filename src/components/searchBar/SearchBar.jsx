import { useEffect, useState } from 'react';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Search.styled';
import { FetchSearch } from 'components/fetch/FetchAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const SearchBar = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [params, setParams] = useSearchParams();

  const query = params.get('query') ?? '';

  const handleChange = newQuery => {
    setName(newQuery);
  };

  const formSubmit = evt => {
    evt.preventDefault();

    params.set('query', name);
    setParams(params);
  };

  useEffect(() => {
    async function fetchCast() {
      try {
        const { results } = await FetchSearch(query);

        setMovies(results);
      } catch (error) {}
    }
    fetchCast();
  }, [query]);

  return (
    <>
      <Searchbar>
        <SearchForm onSubmit={formSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            name="name"
            onChange={evt => handleChange(evt.target.value)}
          />
        </SearchForm>
      </Searchbar>
      <ul>
        {movies &&
          movies.map(({ title, poster_path, id }) => {
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
      </ul>
    </>
  );
};

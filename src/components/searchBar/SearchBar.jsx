import { useState } from 'react';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Search.styled';

import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { SearchGallery } from 'components/searchGallery/SearchGallery';

export const SearchBar = ({ movies }) => {
  const [name, setName] = useState('');

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const handleChange = newQuery => {
    setName(newQuery);
  };

  const formSubmit = evt => {
    evt.preventDefault();
    if (name.trim() === '') {
      return toast.error('Please enter the text of the query');
    }

    params.set('query', name);
    setParams(params);
  };

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
      {query && <SearchGallery movies={movies} />}

      <Toaster />
    </>
  );
};

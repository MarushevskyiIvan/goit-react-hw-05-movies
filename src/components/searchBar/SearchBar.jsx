import { useState } from 'react';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './Search.styled';

import toast from 'react-hot-toast';

export const SearchBar = ({ handleParams }) => {
  const [name, setName] = useState('');
  console.log(name);
  const handleChange = newQuery => {
    setName(newQuery);
  };

  const formSubmit = evt => {
    evt.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter the text of the query');
      return;
    }

    handleParams(name);
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
            placeholder="Search movies"
            name="name"
            onChange={evt => handleChange(evt.target.value)}
          />
        </SearchForm>
      </Searchbar>
    </>
  );
};

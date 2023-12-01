import styled from 'styled-components';

export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: solid #3f51b5 1px;
  margin-bottom: 40px;
`;
export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 38px;
  border: 0;
  background-color: #3f51b5;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: white;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
`;

// import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import styled from 'styled-components';

const SearchButton = styled.li`
  width: 3rem;
  height: 3rem;
  border: none;

  background: transparent;
  cursor: pointer;
`;

function Search() {
  return (
    <SearchButton>
      <HiMagnifyingGlass size={30} color="grey" />
    </SearchButton>
  );
}

export default Search;

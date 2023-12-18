// import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="search">
        <HiMagnifyingGlass size={25} color="grey" />
      </NavLink>
    </SearchButton>
  );
}

export default Search;
